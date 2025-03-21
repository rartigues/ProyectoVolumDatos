#ifndef M_E
    constexpr double M_E = 2.71828182845904523536;
#endif

#ifndef _MULTILEVEL_CM_H
#define _MULTILEVEL_CM_H

#include <random>
#include <cstring>
#include <algorithm>
#include "multilevel_params.h"
#include "murmur3.h"
#include <iostream>
#include <ostream>
#include <iomanip>
#include <unordered_map>
#include <cmath>
#include <stdexcept>
#include <thread>
#include <chrono>

class MultilevelCM {
private:
    uint32_t width;
    uint32_t **A[ML_DEPTH];
    uint32_t level_hashseed[ML_DEPTH];  
    uint32_t **row_hashseed;  
    std::unordered_map<std::string, int> element_levels;
    double overflow_threshold;

    struct GridDimensions {
        uint32_t width;
    };

    inline uint32_t getLevelMask(int level) {
        if (level < 0 || level >= ML_DEPTH) return 0;
        return ML_MASK[level];
    }

    inline bool isOverflowed(uint32_t val, int level) {
        return val >= getLevelMask(level) * overflow_threshold;
    }

    void getPosition(const char* key, uint16_t key_len, int level, uint32_t& x, uint32_t& y) {
        if (level < 0 || level >= ML_DEPTH) {
            x = y = 0;
            return;
        }
        y = MurmurHash3_x86_32(key, key_len, level_hashseed[level]) % ML_HEIGHT;
        x = MurmurHash3_x86_32(key, key_len, row_hashseed[level][y]) % width;
    }

    uint32_t getCounterValue(int level, uint32_t x, uint32_t y) {
        if (level < 0 || level >= ML_DEPTH || x >= width || y >= ML_HEIGHT) {
            return 0;
        }
        return A[level][x][y] & getLevelMask(level);
    }

    void setCounterValue(int level, uint32_t x, uint32_t y, uint32_t value) {
        if (level < 0 || level >= ML_DEPTH || x >= width || y >= ML_HEIGHT) {
            return;
        }
        uint32_t mask = getLevelMask(level);
        value = std::min(value, mask);
        A[level][x][y] = (A[level][x][y] & ~mask) | value;
    }

    static GridDimensions calculateDimensions(uint32_t memory_size) {
        uint32_t level_memory = memory_size / ML_DEPTH;
        uint32_t width = level_memory / (ML_HEIGHT * sizeof(uint32_t)); // Usar altura fija ML_HEIGHT, ancho maximo segun memoria
        
        std::cout << "\n----------------------------------------\n";
        std::cout << "Grid Dimensions Calculation:\n";
        std::cout << "Memory per level: " << level_memory << " bytes\n";
        std::cout << "Grid dimensions: " << width << "x" << ML_HEIGHT << "\n";
        std::cout << "Total counters per level: " << (width * ML_HEIGHT) << "\n";
        std::cout << "----------------------------------------\n" << std::endl;
        
        std::this_thread::sleep_for(std::chrono::seconds(4));
        
        return {width};
    }

    void promoteToLevel(const char* key, uint16_t key_len, int from_level, int to_level, uint32_t current_val) {
        uint32_t x, y;
        getPosition(key, key_len, to_level, x, y);
        uint32_t current_counter = getCounterValue(to_level, x, y);
        
        if (current_counter == 0) {
            setCounterValue(to_level, x, y, current_val);
        } else {
            setCounterValue(to_level, x, y, current_counter + 1);
        }
    }

public:
    MultilevelCM() : overflow_threshold(0.50) {}
    
    MultilevelCM(uint32_t memory_size, double threshold = 0.50) : overflow_threshold(threshold) {
        auto dims = calculateDimensions(memory_size);
        width = dims.width;
        init();
    }
    
    ~MultilevelCM() { clear(); }

    std::vector<size_t> getLevelDistribution() const {
        std::vector<size_t> dist(ML_DEPTH, 0);
        for (const auto& pair : element_levels) {
            dist[pair.second]++;
        }
        return dist;
    }

    void init() {
        std::random_device rd;
        std::mt19937 gen(rd());

        for (int i = 0; i < ML_DEPTH; i++) {
            level_hashseed[i] = gen() % MAX_PRIME32;
        }

        for (int i = 0; i < ML_DEPTH; i++) {
            A[i] = new uint32_t*[width];
            for (uint32_t j = 0; j < width; j++) {
                A[i][j] = new uint32_t[ML_HEIGHT]();
            }
        }

        row_hashseed = new uint32_t*[ML_DEPTH];
        for (int i = 0; i < ML_DEPTH; i++) {
            row_hashseed[i] = new uint32_t[ML_HEIGHT];
            for (uint32_t j = 0; j < ML_HEIGHT; j++) {
                row_hashseed[i][j] = gen() % MAX_PRIME32;
            }
        }
    }

    void clear() {
        for (int i = 0; i < ML_DEPTH; i++) {
            for (uint32_t j = 0; j < width; j++) {
                delete[] A[i][j];
            }
            delete[] A[i];
            delete[] row_hashseed[i];
        }
        delete[] row_hashseed;
        element_levels.clear();
    }

    uint32_t insert(const char *key, uint16_t key_len) {
        std::string elem_key(key, key_len);
        auto level_it = element_levels.find(elem_key);
        int current_level = (level_it != element_levels.end()) ? level_it->second : 0;

        uint32_t x, y;
        getPosition(key, key_len, current_level, x, y);
        uint32_t current_val = getCounterValue(current_level, x, y);
        uint32_t new_val = current_val + 1;

        if (isOverflowed(new_val, current_level) && current_level < ML_DEPTH - 1) {
            // std::cout << "Promoting from level " << current_level << " to " << (current_level + 1) 
            //          << " with value " << new_val << std::endl;
            
            int next_level = current_level + 1;
            promoteToLevel(key, key_len, current_level, next_level, new_val);
            element_levels[elem_key] = next_level;
            current_level = next_level;
        } else if (!isOverflowed(new_val, current_level)) {
            setCounterValue(current_level, x, y, new_val);
        }

        return getCounterValue(current_level, x, y);
    }

    uint32_t query(const char *key, uint16_t key_len) {
        std::string elem_key(key, key_len);
        auto level_it = element_levels.find(elem_key);
        int level = (level_it != element_levels.end()) ? level_it->second : 0;
        uint32_t x, y;
        getPosition(key, key_len, level, x, y);
        return getCounterValue(level, x, y);
    }

    void print_level_info(std::ostream& out) {
        for (int level = 0; level < ML_DEPTH; level++) {
            uint32_t total_counters = width * ML_HEIGHT;
            uint32_t used_counters = 0;
            uint32_t max_counter = 0;
            
            for (uint32_t i = 0; i < width; i++) {
                for (uint32_t j = 0; j < ML_HEIGHT; j++) {
                    uint32_t val = getCounterValue(level, i, j);
                    if (val > 0) {
                        used_counters++;
                        max_counter = std::max(max_counter, val);
                    }
                }
            }
            
            out << level << ","
                << (1 << (level + 1)) << ","
                << getLevelMask(level) << ","
                << total_counters << ","
                << used_counters << ","
                << std::fixed << std::setprecision(2) 
                << (double)used_counters/total_counters * 100 << ","
                << max_counter << "\n";

            std::cout << "Level " << level << " stats:" << std::endl
                     << "Dimensions: " << width << "x" << ML_HEIGHT << std::endl
                     << "Bits per counter: " << (1 << (level + 1)) << std::endl
                     << "Used counters: " << used_counters << "/" << total_counters << std::endl
                     << "Max counter value: " << max_counter << std::endl
                     << "Usage rate: " << (double)used_counters/total_counters * 100 << "%" << std::endl;
        }
    }

    void setOverflowThreshold(double threshold) {
        if (threshold <= 0.0 || threshold >= 1.0) {
            throw std::invalid_argument("Threshold must be between 0 and 1");
        }
        overflow_threshold = threshold;
    }

    double getOverflowThreshold() const {
        return overflow_threshold;
    }
};

#endif
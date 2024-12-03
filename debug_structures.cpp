#include "tower.h"
#include "multilevel_cm.h"
#include <iostream>
#include <string>

void test_basic_operations() {
    try {
        // Test with small memory size first
        uint32_t width = 1000;
        
        std::cout << "Initializing TowerSketch..." << std::endl;
        TowerSketch tower(width);
        
        std::cout << "Initializing MultilevelCM..." << std::endl;
        MultilevelCM mcm(width);
        
        // Test string to insert
        std::string test_key = "test_flow";
        
        std::cout << "Testing TowerSketch insert..." << std::endl;
        uint32_t tower_result = tower.insert(test_key.c_str(), test_key.length());
        std::cout << "TowerSketch insert result: " << tower_result << std::endl;
        
        std::cout << "Testing TowerSketch query..." << std::endl;
        uint32_t tower_query = tower.query(test_key.c_str(), test_key.length());
        std::cout << "TowerSketch query result: " << tower_query << std::endl;
        
        std::cout << "Testing MultilevelCM insert..." << std::endl;
        uint32_t mcm_result = mcm.insert(test_key.c_str(), test_key.length());
        std::cout << "MultilevelCM insert result: " << mcm_result << std::endl;
        
        std::cout << "Testing MultilevelCM query..." << std::endl;
        uint32_t mcm_query = mcm.query(test_key.c_str(), test_key.length());
        std::cout << "MultilevelCM query result: " << mcm_query << std::endl;
        
    } catch (const std::exception& e) {
        std::cerr << "Exception caught: " << e.what() << std::endl;
    }
}

int main() {
    std::cout << "Starting basic operation tests..." << std::endl;
    test_basic_operations();
    return 0;
}
#include "tower.h"
#include "multilevel_cm.h"
#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

std::string data[2000000];
std::unordered_map<std::string, uint32_t> flow_size;

void read_caida18() {
    std::cout << "Reading CAIDA dataset..." << std::endl;
    FILE *file_in = fopen("data/CAIDA/trace1.dat", "rb");
    if (!file_in) {
        std::cerr << "Failed to open CAIDA dataset" << std::endl;
        return;
    }
    
    char s[20];
    char t[20];
    // Reduce from 2000000 to 500000
    for (uint32_t i = 0; i < 500000; ++i) {
        int len1 = 13, len2 = 0;
        while (len1 != 0) {
            int tmp = fread(s + len2, 1, len1, file_in);
            if (tmp <= 0) {
                std::cerr << "Read error at position " << i << std::endl;
                fclose(file_in);
                return;
            }
            len2 += tmp;
            len1 -= tmp;
        }
        data[i] = std::string(s, 13);
        flow_size[data[i]]++;
        fread(t, 1, 8, file_in);
    }
    fclose(file_in);
    std::cout << "Successfully read " << flow_size.size() << " unique flows" << std::endl;
}

void test_with_real_data() {
    uint32_t width = 1000;
    std::cout << "Testing with width: " << width << std::endl;
    
    TowerSketch tower(width);
    MultilevelCM mcm(width);
    
    // Process first 1000 packets as a test
    for (int i = 0; i < 1000; i++) {
        tower.insert(data[i].c_str(), 13);
        mcm.insert(data[i].c_str(), 13);
        
        if (i % 100 == 0) {
            std::cout << "Processed " << i << " packets" << std::endl;
        }
    }
    
    std::cout << "Processing complete" << std::endl;
}

int main() {
    read_caida18();
    test_with_real_data();
    return 0;
}
#include "multilevel_cm.h"
#include <iostream>
#include <iomanip>
#include <string>

void print_array_state(uint32_t* array, int width, int level) {
    std::cout << "\nLevel " << level << " state:" << std::endl;
    std::cout << "Counter size: " << (1 << level) * 8 << " bits" << std::endl;
    
    // Print first 20 counters
    for(int i = 0; i < std::min(20, width); i++) {
        std::cout << std::setw(8) << array[i] << " ";
        if((i + 1) % 5 == 0) std::cout << std::endl;
    }
    std::cout << std::endl;
}

void test_multilevel_cm() {
    uint32_t width = 1000;
    MultilevelCM mcm(width);
    std::string test_flow = "flow1";
    std::string test_flows[] = {"flow1", "flow1", "flow1", "flow2", "flow2", "flow3"};
    
    for(const auto& flow : test_flows) {
        std::cout << "\nInserting flow: " << flow << std::endl;
        uint32_t result = mcm.debug_insert(flow.c_str(), flow.length());
        
        uint32_t query_result = mcm.query(flow.c_str(), flow.length());
        std::cout << "Query result for " << flow << ": " << query_result << std::endl;
    }

    // for(int i = 0; i < 3; i++) {
    //     std::cout << "\n=== Insertion " << i+1 << " ===" << std::endl;
    //     uint32_t result = mcm.debug_insert(test_flow.c_str(), test_flow.length());
    //     std::cout << "Insert result: " << result << std::endl;
    // }
}

int main() {
    test_multilevel_cm();
    return 0;
}
#include "tower.h"
#include "multilevel_cm.h"
#include <thread>
#include <vector>
#include <string>
#include <cstdio>
#include <cstring>
#include <unordered_map>
#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

const int MAX_PACKETS = 10000000;
const int NUM_RUNS = 10;
string data[10000000];
unordered_map<string, uint32_t> flow_size;

void read_caida18() {
   flow_size.clear();
   FILE *file_in = fopen("data/CAIDA/equinix-nyc.dirA.20180517.10m.dat", "rb");
   if (!file_in) {
       cerr << "Failed to open dataset file" << endl;
       return;
   }

   size_t file_size;
   fseek(file_in, 0, SEEK_END);
   file_size = ftell(file_in);
   fseek(file_in, 0, SEEK_SET);
   cout << "File size: " << file_size << " bytes" << endl;

   uint32_t packets_read = 0;
   char s[20], t[20];
   
   while (packets_read < MAX_PACKETS) {
       size_t read_result = fread(s, 1, 13, file_in);
       if (read_result != 13) {
           cout << "Read " << read_result << " bytes instead of 13" << endl;
           break;
       }

       read_result = fread(t, 1, 8, file_in);
       if (read_result != 8) {
           cout << "Failed to read 8-byte timestamp" << endl;
           break;
       }

       string flow_id(s, 13);
       data[packets_read] = flow_id;
       flow_size[flow_id]++;
       packets_read++;

       if (packets_read % 100000 == 0) {
           cout << "Read " << packets_read << " packets" << endl;
       }
   }

   fclose(file_in);
   cout << "Total packets read: " << packets_read << endl;
   cout << "Unique flows: " << flow_size.size() << endl;
   cout << "Average flow size: " << (double)packets_read/flow_size.size() << endl;
}

void compare_sketches(uint32_t memory_size, ofstream& results_file, ofstream& tower_level_file, ofstream& mcm_level_file) {
   uint32_t tower_width = memory_size / (sizeof(uint32_t) * d);
   uint32_t mcm_width = memory_size / (sizeof(uint32_t) * ML_DEPTH);
   
   vector<double> tower_ares(NUM_RUNS), mcm_ares(NUM_RUNS);
   vector<double> tower_aaes(NUM_RUNS), mcm_aaes(NUM_RUNS);
   
   cout << "\nMemory size: " << memory_size/1024 << "KB" << endl;
   
   for (int run = 0; run < NUM_RUNS; run++) {
       TowerSketch tower(tower_width);
       MultilevelCM mcm(mcm_width);
       
       for (int i = 0; i < MAX_PACKETS; ++i) {
           tower.insert(data[i].c_str(), 13);
           mcm.insert(data[i].c_str(), 13);
       }
       
       double tower_are = 0.0, mcm_are = 0.0;
       double tower_aae = 0.0, mcm_aae = 0.0;
       int total_flows = 0;
       
       for (const auto& flow : flow_size) {
           if (flow.second == 0) continue;
           
           uint32_t true_size = flow.second;
           uint32_t tower_est = tower.query(flow.first.c_str(), 13);
           uint32_t mcm_est = mcm.query(flow.first.c_str(), 13);
           
           tower_are += fabs((double)tower_est - true_size) / true_size;
           mcm_are += fabs((double)mcm_est - true_size) / true_size;
           tower_aae += fabs((double)tower_est - true_size);
           mcm_aae += fabs((double)mcm_est - true_size);
           total_flows++;
       }
       
       if (total_flows > 0) {
           tower_ares[run] = tower_are/total_flows;
           mcm_ares[run] = mcm_are/total_flows;
           tower_aaes[run] = tower_aae/total_flows;
           mcm_aaes[run] = mcm_aae/total_flows;
       }
       
       if (run == NUM_RUNS-1) {
           tower_level_file << "\nMemory size: " << memory_size/1024 << "KB\n";
           mcm_level_file << "\nMemory size: " << memory_size/1024 << "KB\n";
           tower.print_level_info(tower_level_file);
           mcm.print_level_info(mcm_level_file);
       }
       
       cout << "Run " << run + 1 << " completed" << endl;
   }
   
   double avg_tower_are = accumulate(tower_ares.begin(), tower_ares.end(), 0.0) / NUM_RUNS;
   double avg_mcm_are = accumulate(mcm_ares.begin(), mcm_ares.end(), 0.0) / NUM_RUNS;
   double avg_tower_aae = accumulate(tower_aaes.begin(), tower_aaes.end(), 0.0) / NUM_RUNS;
   double avg_mcm_aae = accumulate(mcm_aaes.begin(), mcm_aaes.end(), 0.0) / NUM_RUNS;
   
   results_file << memory_size/1024 << ","
               << fixed << setprecision(6)
               << avg_tower_are << ","
               << avg_tower_aae << ","
               << avg_mcm_are << ","
               << avg_mcm_aae << "\n";
}

int main() {
   read_caida18();
   
   ofstream results_file("sketch_results.csv");
   ofstream tower_level_file("tower_level_info.csv"); 
   ofstream mcm_level_file("mcm_level_info.csv");

   results_file << "Memory(KB),TowerARE,TowerAAE,MCMARE,MCMAAE\n";
   tower_level_file << "Level,CounterBits,MaxValue,TotalCounters,UsedCounters,UsageRate,MaxCounterValue\n";
   mcm_level_file << "Level,CounterBits,MaxValue,TotalCounters,UsedCounters,UsageRate,MaxCounterValue\n";
   
   vector<uint32_t> memory_sizes = {
       256*1024,     // 256KB
       512*1024,     // 512KB
       1024*1024,    // 1MB
       2048*1024,    // 2MB
       4096*1024,    // 4MB
       8192*1024,    // 8MB
       16384*1024,   // 16MB
       32768*1024    // 32MB
   };
   
   for (uint32_t mem : memory_sizes) {
       compare_sketches(mem, results_file, tower_level_file, mcm_level_file);
   }
   
   results_file.close();
   tower_level_file.close();
   mcm_level_file.close();
   return 0;
}
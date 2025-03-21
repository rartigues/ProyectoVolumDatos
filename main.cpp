#include "tower.h"
// #include "multilevel_cm.h"
#include "multilevel_cm2.h"
#include <thread>
#include <vector>
#include <string>
#include <cstdio>
#include <cstring>
#include <unordered_map>
#include <iostream>
#include <fstream>
#include <iomanip>
#include <numeric>
#include <random>
#include <cmath>
using namespace std;

const int MAX_PACKETS = 20000000;
const int NUM_RUNS = 1;
string data[20000000];
unordered_map<string, uint32_t> flow_size;

struct PercentileResults {
   double are_frequent;
   double are_infrequent;
   double aae_frequent;
   double aae_infrequent;
};

// Para testear flujos con distribución controlada
void generate_zipf_data(int num_flows = 1000, int num_packets = 20000000, double alpha = 1.5) {
    cout << "Generating Zipf data with:" << endl
         << "Number of flows: " << num_flows << endl
         << "Number of packets: " << num_packets << endl
         << "Zipf alpha: " << alpha << endl;
         
    vector<double> probabilities(num_flows);
    double sum = 0.0;
    for(int i = 0; i < num_flows; i++) {
        probabilities[i] = 1.0 / pow(i + 1, alpha);
        sum += probabilities[i];
    }
    
    for(int i = 0; i < num_flows; i++) {
        probabilities[i] /= sum;
    }
    
    random_device rd;
    mt19937 gen(rd());
    discrete_distribution<> dist(probabilities.begin(), probabilities.end());
    
    flow_size.clear();
    for(int i = 0; i < num_packets; i++) {
        int flow_id = dist(gen);
        string flow_key = "flow_" + to_string(flow_id);
        data[i] = flow_key;
        flow_size[flow_key]++;
    }

    // Estadisticas de los flujos generados
    vector<pair<string, uint32_t>> flows(flow_size.begin(), flow_size.end());
    sort(flows.begin(), flows.end(), 
         [](const pair<string,uint32_t>& a, const pair<string,uint32_t>& b) { 
             return a.second > b.second; 
         });
    
    cout << "Top 5 heavy hitters:" << endl;
    for(int i = 0; i < min(5, (int)flows.size()); i++) {
        cout << flows[i].first << ": " << flows[i].second << " packets ("
             << (100.0 * flows[i].second / num_packets) << "%)" << endl;
    }
    this_thread::sleep_for(chrono::seconds(3));
}


void read_caida18() {
   flow_size.clear();
   FILE *file_in = fopen("data/CAIDA/equinix-nyc.dirA.20180517.20m.dat", "rb");
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

PercentileResults calculate_percentile_errors(
   const vector<pair<string, uint32_t>>& sorted_flows,
   TowerSketch& tower,
   MultilevelCM2& mcm,
   double percentile,
   bool frequent) {
   
   size_t split_idx = sorted_flows.size() * percentile;
   size_t start_idx = frequent ? split_idx : 0;
   size_t end_idx = frequent ? sorted_flows.size() : split_idx;
   
   double tower_are = 0.0, mcm_are = 0.0;
   double tower_aae = 0.0, mcm_aae = 0.0;
   size_t count = 0;

   for (size_t i = start_idx; i < end_idx; i++) {
       const auto& flow = sorted_flows[i];
       uint32_t true_size = flow.second;
       uint32_t tower_est = tower.query(flow.first.c_str(), 13);
       uint32_t mcm_est = mcm.query(flow.first.c_str(), 13);
       
       tower_are += fabs((double)tower_est - true_size) / true_size;
       mcm_are += fabs((double)mcm_est - true_size) / true_size;
       tower_aae += fabs((double)tower_est - true_size);
       mcm_aae += fabs((double)mcm_est - true_size);
       count++;
   }
   
   if (count > 0) {
       tower_are /= count;
       mcm_are /= count;
       tower_aae /= count;
       mcm_aae /= count;
   }
   
   return {tower_are, mcm_are, tower_aae, mcm_aae};
}

void compare_sketches(uint32_t memory_size, ofstream& results_file, ofstream& tower_level_file, ofstream& mcm_level_file, ofstream& percentile_file) {
   uint32_t tower_width = memory_size / (sizeof(uint32_t) * d);
   uint32_t mcm_width = memory_size / ML_DEPTH; // Memory per level
   
   vector<double> tower_ares(NUM_RUNS), mcm_ares(NUM_RUNS);
   vector<double> tower_aaes(NUM_RUNS), mcm_aaes(NUM_RUNS);
   
   cout << "\nMemory size: " << memory_size/1024 << "KB" << endl;
   
   for (int run = 0; run < NUM_RUNS; run++) {
       TowerSketch tower(tower_width);
       MultilevelCM2 mcm(mcm_width);
       
       for (int i = 0; i < MAX_PACKETS; ++i) {
           tower.insert(data[i].c_str(), 13);
           mcm.insert(data[i].c_str(), 13);
       }
       
       vector<pair<string, uint32_t>> sorted_flows(flow_size.begin(), flow_size.end());
       sort(sorted_flows.begin(), sorted_flows.end(),
            [](const pair<string, uint32_t>& a, const pair<string, uint32_t>& b) {
                return a.second < b.second;
            });
       
       auto infreq_results = calculate_percentile_errors(sorted_flows, tower, mcm, 0.8, false);
       auto freq_results = calculate_percentile_errors(sorted_flows, tower, mcm, 0.8, true);
       
       percentile_file << memory_size/1024 << "," << run << ","
                      << fixed << setprecision(6)
                      << infreq_results.are_frequent << ","
                      << infreq_results.are_infrequent << ","
                      << infreq_results.aae_frequent << ","
                      << infreq_results.aae_infrequent << ","
                      << freq_results.are_frequent << ","
                      << freq_results.are_infrequent << ","
                      << freq_results.aae_frequent << ","
                      << freq_results.aae_infrequent << "\n";
       
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
       
       cout << "Level statistics:\n";
       mcm.print_level_info(cout);
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
//    generate_zipf_data(1000, 1000000, 1.5);
    
    ofstream results_file("sketch_results.csv");
    ofstream tower_level_file("tower_level_info.csv"); 
    ofstream mcm_level_file("mcm_level_info.csv");
    ofstream percentile_file("percentile_results.csv");

    results_file << "Memory(KB),TowerARE,TowerAAE,MCMARE,MCMAAE\n";
    tower_level_file << "Level,CounterBits,MaxValue,TotalCounters,UsedCounters,UsageRate,MaxCounterValue\n";
    mcm_level_file << "Level,CounterBits,MaxValue,TotalCounters,UsedCounters,UsageRate,MaxCounterValue\n";
    percentile_file << "Memory(KB),Run,InfreqTowerARE,InfreqMCMARE,InfreqTowerAAE,InfreqMCMAAE,"
                   << "FreqTowerARE,FreqMCMARE,FreqTowerAAE,FreqMCMAAE\n";

    vector<uint32_t> memory_sizes = {
        4*1024,
        8*1024,
        16*1024, 
        64*1024,
        128*1024,
        256*1024, 
        512*1024, 
        1024*1024, 
        2*1024*1024, 
        4*1024*1024, 
        8*1024*1024, 
        16*1024*1024, 
        32*1024*1024, 
        64*1024*1024
    };
    
    for (uint32_t mem : memory_sizes) {
        compare_sketches(mem, results_file, tower_level_file, mcm_level_file, percentile_file);
    }
    
    results_file.close();
    tower_level_file.close();
    mcm_level_file.close();
    percentile_file.close();
    return 0;
}
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

using namespace std;

class MultilevelCM {
private:
   uint32_t w[ML_DEPTH];  
   uint32_t *A[ML_DEPTH]; 
   uint32_t hashseed[ML_DEPTH];
   int idx[ML_DEPTH];

public:
   MultilevelCM() {}
   MultilevelCM(uint32_t w_d) { 
       init(w_d); 
   }
   virtual ~MultilevelCM() { clear(); }

   void init(uint32_t w_d) {
       std::random_device rd;
       for (int i = 0; i < ML_DEPTH; ++i) {
           w[i] = w_d << (ML_DEPTH - i - 1);
           A[i] = new uint32_t[w_d];
           memset(A[i], 0, w_d * sizeof(uint32_t));
           hashseed[i] = rd() % MAX_PRIME32;
       }
   }

   void clear() {
       for (int i = 0; i < ML_DEPTH; ++i) {
           delete[] A[i];
       }
   }

   uint32_t insert(const char *key, uint16_t key_len) {
       for (int i = 0; i < ML_DEPTH; ++i) {
           idx[i] = MurmurHash3_x86_32(key, key_len, hashseed[i]) % w[i];
       }

       uint32_t ret = UINT32_MAX;
       for (int level = 0; level < ML_DEPTH; level++) {
           uint32_t &a = A[level][idx[level] >> ML_CPW[level]];
           uint32_t shift = (idx[level] & ML_LO[level]) << ML_CS[level];
           uint32_t val = (a >> shift) & ML_MASK[level];
           
           if (val < ML_MASK[level]) {
               a += (1 << shift);
               ret = (val < ret) ? val : ret;
           }
       }
       return ret + 1;
   }

   uint32_t query(const char *key, uint16_t key_len) {
       uint32_t ret = UINT32_MAX;
       
       for (int level = 0; level < ML_DEPTH; level++) {
           uint32_t idx = MurmurHash3_x86_32(key, key_len, hashseed[level]) % w[level];
           uint32_t a = A[level][idx >> ML_CPW[level]];
           uint32_t shift = (idx & ML_LO[level]) << ML_CS[level];
           uint32_t val = (a >> shift) & ML_MASK[level];
           ret = (val < ML_MASK[level] && val < ret) ? val : ret;
       }
       return ret;
   }

   void print_level_info(ostream& out) {
       for (int level = 0; level < ML_DEPTH; level++) {
           uint32_t total_counters = w[level];
           uint32_t used_counters = 0;
           uint32_t max_counter = 0;
           
           for (uint32_t j = 0; j < w[level]; j++) {
               uint32_t shift = (j & ML_LO[level]) << ML_CS[level];
               uint32_t val = (A[level][j >> ML_CPW[level]] >> shift) & ML_MASK[level];
               if (val > 0) used_counters++;
               max_counter = max(max_counter, val);
           }
           
           out << level << ","
               << __builtin_popcount(ML_MASK[level]) << ","
               << ML_MASK[level] << ","
               << total_counters << ","
               << used_counters << ","
               << fixed << setprecision(2) << (double)used_counters/total_counters * 100 << ","
               << max_counter << "\n";
       }
   }
};

#endif
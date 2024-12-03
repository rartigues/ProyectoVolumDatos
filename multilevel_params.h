#ifndef _MULTILEVEL_PARAMS_H
#define _MULTILEVEL_PARAMS_H

#include <cstdint>

// Shared parameters
// const uint32_t MAX_PRIME32 = 1229;
// const int REP_TIME = 10;

// Multilevel CM specific parameters
const uint32_t ML_DEPTH = 5;  // Number of levels
const uint32_t ML_CS[] = {1, 2, 3, 4, 5};  // Counter shifts
const uint32_t ML_CPW[] = {4, 3, 2, 1, 0}; // Counter position widths
const uint32_t ML_LO[] = {0xf, 0x7, 0x3, 0x1, 0x0}; // Lower masks
const uint32_t ML_MASK[] = {0x3, 0xf, 0xff, 0xffff, 0xffffffff}; // Value masks (8-bit, 16-bit, 32-bit)



#endif
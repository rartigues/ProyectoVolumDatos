#ifndef _MULTILEVEL_CM2_H
#define _MULTILEVEL_CM2_H

#include <random>
#include <cstring>
#include <algorithm>
#include <iostream>
#include <iomanip>
#include "murmur3.h"

using namespace std;

// Parametros
#define ML_DEPTH 5    // Cantidad de niveles de Count-Min
#define ML_HEIGHT 3   // Cantidad de filas en cada nivel (d en Count-Min clasico)

// Mascaras para los diferentes tamanos de contadores en cada nivel
static const uint32_t ML_MASK[ML_DEPTH] = {
    0x3,      // 2 bits 
    0xF,      // 4 bits 
    0xFF,     // 8 bits 
    0xFFFF,   // 16 bits 
    0xFFFFF   // 20 bits 
};

class MultilevelCM2 {
public:
    uint32_t width[ML_DEPTH];     // Ancho (cantidad de columnas) para cada nivel
    void *counters[ML_DEPTH][ML_HEIGHT]; // Matrices para cada nivel [nivel][fila]
    uint32_t hashseed[ML_DEPTH][ML_HEIGHT];  // Semillas para funciones hash, hashseed por fila de cada nivel

    MultilevelCM2() {}
    MultilevelCM2(uint32_t memory_bytes) { init(memory_bytes); }
    virtual ~MultilevelCM2() { clear(); }

    // Inicializa la estructura con la memoria disponible
    void init(uint32_t memory_bytes) {
        random_device rd;
        
        // Calcular memoria por nivel (se devide igualmente entre todos los niveles, 
        // pero aprovechando de hacer mas columnas x nivel dependiendo del tamano de los contadores)
        uint32_t memory_per_level = memory_bytes / ML_DEPTH;
        
        for (int level = 0; level < ML_DEPTH; level++) {
            // Determinar bytes por contador para el nivel actual del loop
            uint32_t bytes_per_counter;
            
            // Asignar tamano apropiado segun la mascara
            if (ML_MASK[level] <= 0xFF) {
                bytes_per_counter = 1; // uint8_t
            } else if (ML_MASK[level] <= 0xFFFF) {
                bytes_per_counter = 2; // uint16_t
            } else {
                bytes_per_counter = 4; // uint32_t
            }
            
            // Calcular columnas para este nivel en el loop
            width[level] = memory_per_level / (ML_HEIGHT * bytes_per_counter);
            
            // Inicializar contadores y semillas hash x fila para nivel actual
            for (int row = 0; row < ML_HEIGHT; row++) {
                // Asigna memoria del tamano adecuado x contador de cada nivel, y fila
                if (ML_MASK[level] <= 0xFF) {
                    counters[level][row] = new uint8_t[width[level]];
                    memset(counters[level][row], 0, width[level] * sizeof(uint8_t));
                } else if (ML_MASK[level] <= 0xFFFF) {
                    counters[level][row] = new uint16_t[width[level]];
                    memset(counters[level][row], 0, width[level] * sizeof(uint16_t));
                } else {
                    counters[level][row] = new uint32_t[width[level]];
                    memset(counters[level][row], 0, width[level] * sizeof(uint32_t));
                }
                
                hashseed[level][row] = rd() % 1000000007; // Numero primo grande
            }
        }
    }

    void clear() {
        for (int level = 0; level < ML_DEPTH; level++) {
            for (int row = 0; row < ML_HEIGHT; row++) {
                if (ML_MASK[level] <= 0xFF) {
                    delete[] (uint8_t*)counters[level][row];
                } else if (ML_MASK[level] <= 0xFFFF) {
                    delete[] (uint16_t*)counters[level][row];
                } else {
                    delete[] (uint32_t*)counters[level][row];
                }
            }
        }
    }

    // Inserta un elemento y devuelve su frecuencia estimada
    uint32_t insert(const char *key, uint16_t key_len) {
        uint32_t min_val = 0;
        
        for (int level = 0; level < ML_DEPTH; level++) {
            // Inicializar variables para insertar en nivel actual
            bool any_max = false;
            uint32_t level_min = UINT32_MAX;
            uint32_t hash_indices[ML_HEIGHT]; // Indices hash para cada fila
            
            // Calcular indices hash para este nivel
            for (int row = 0; row < ML_HEIGHT; row++) {
                // Se calcula el indice hash para cada fila del nivel para el elemento
                hash_indices[row] = MurmurHash3_x86_32(key, key_len, hashseed[level][row]) % width[level];
                
                uint32_t val; // Obtener el valor del contador al que se insertara el elemento
                if (ML_MASK[level] <= 0xFF) {
                    val = ((uint8_t*)counters[level][row])[hash_indices[row]];
                } else if (ML_MASK[level] <= 0xFFFF) {
                    val = ((uint16_t*)counters[level][row])[hash_indices[row]];
                } else {
                    val = ((uint32_t*)counters[level][row])[hash_indices[row]];
                }
                
                // Verificar si ALGUN contador esta al maximo
                if (val >= ML_MASK[level]) {
                    any_max = true;
                }
                
                level_min = min(level_min, val);
            }
            
            // Si encontramos algun contador al maximo y no es el ultimo nivel,
            // pasar al siguiente nivel
            if (any_max && level < ML_DEPTH - 1) {
                min_val = level_min;
                continue;
            }
            
            // Actualizar contadores en el nivel disponible (actual)
            for (int row = 0; row < ML_HEIGHT; row++) {
                uint32_t val;
                
                if (ML_MASK[level] <= 0xFF) {
                    uint8_t* counter_array = (uint8_t*)counters[level][row];
                    val = counter_array[hash_indices[row]];
                    if (val < ML_MASK[level]) {
                        counter_array[hash_indices[row]] = (uint8_t)min(
                            (uint32_t)max(val + 1, min_val + 1),
                            (uint32_t)ML_MASK[level]
                        );
                    }
                } else if (ML_MASK[level] <= 0xFFFF) {
                    uint16_t* counter_array = (uint16_t*)counters[level][row];
                    val = counter_array[hash_indices[row]];
                    if (val < ML_MASK[level]) {
                        counter_array[hash_indices[row]] = (uint16_t)min(
                            (uint32_t)max(val + 1, min_val + 1),
                            (uint32_t)ML_MASK[level]
                        );
                    }
                } else {
                    uint32_t* counter_array = (uint32_t*)counters[level][row];
                    val = counter_array[hash_indices[row]];
                    if (val < ML_MASK[level]) {
                        counter_array[hash_indices[row]] = min(
                            max(val + 1, min_val + 1),
                            ML_MASK[level]
                        );
                    }
                }
            }
            
            // Devolver el valor minimo despues de la actualizacion
            uint32_t result = UINT32_MAX;
            for (int row = 0; row < ML_HEIGHT; row++) {
                uint32_t val;
                if (ML_MASK[level] <= 0xFF) {
                    val = ((uint8_t*)counters[level][row])[hash_indices[row]];
                } else if (ML_MASK[level] <= 0xFFFF) {
                    val = ((uint16_t*)counters[level][row])[hash_indices[row]];
                } else {
                    val = ((uint32_t*)counters[level][row])[hash_indices[row]];
                }
                result = min(result, val);
            }
            
            return result;
        }
        
        // Si todos los niveles estan llenos, devolver el valor del ultimo nivel
        return min_val;
    }

    // Consulta la frecuencia estimada de un elemento
    uint32_t query(const char *key, uint16_t key_len) {
        for (int level = 0; level < ML_DEPTH; level++) {
            bool has_max = false;
            uint32_t min_val = UINT32_MAX;
            
            // Buscar el valor minimo para este elemento en el nivel actual
            for (int row = 0; row < ML_HEIGHT; row++) {
                uint32_t idx = MurmurHash3_x86_32(key, key_len, hashseed[level][row]) % width[level];
                
                uint32_t val;
                if (ML_MASK[level] <= 0xFF) {
                    val = ((uint8_t*)counters[level][row])[idx];
                } else if (ML_MASK[level] <= 0xFFFF) {
                    val = ((uint16_t*)counters[level][row])[idx];
                } else {
                    val = ((uint32_t*)counters[level][row])[idx];
                }
                
                if (val >= ML_MASK[level]) {
                    has_max = true;
                }
                
                min_val = min(min_val, val);
            }
            
            // Si no hay contadores al maximo, devolver el minimo de este nivel
            if (!has_max) {
                return min_val;
            }
        }
        
        // Si todos los niveles tienen al menos un contador al maximo,
        // devolver el valor del ultimo nivel
        uint32_t min_val = UINT32_MAX;
        int level = ML_DEPTH - 1;
        
        for (int row = 0; row < ML_HEIGHT; row++) {
            uint32_t idx = MurmurHash3_x86_32(key, key_len, hashseed[level][row]) % width[level];
            
            uint32_t val;
            if (ML_MASK[level] <= 0xFF) {
                val = ((uint8_t*)counters[level][row])[idx];
            } else if (ML_MASK[level] <= 0xFFFF) {
                val = ((uint16_t*)counters[level][row])[idx];
            } else {
                val = ((uint32_t*)counters[level][row])[idx];
            }
            
            min_val = min(min_val, val);
        }
        
        return min_val;
    }
    
    // Imprime informacion sobre cada nivel para analisis
    void print_level_info(ostream& out) {
        for (int level = 0; level < ML_DEPTH; level++) {
            // Calcular bits por contador
            int counter_bits = 0;
            for (uint32_t mask = ML_MASK[level]; mask > 0; mask >>= 1) {
                counter_bits++;
            }
            
            uint32_t max_value = ML_MASK[level];
            uint32_t total_counters = width[level] * ML_HEIGHT;
            
            // Contar cuantos contadores estan en uso y el valor maximo encontrado
            uint32_t used_counters = 0;
            uint32_t max_counter_value = 0;
            
            for (int row = 0; row < ML_HEIGHT; row++) {
                for (uint32_t i = 0; i < width[level]; i++) {
                    uint32_t val;
                    if (ML_MASK[level] <= 0xFF) {
                        val = ((uint8_t*)counters[level][row])[i];
                    } else if (ML_MASK[level] <= 0xFFFF) {
                        val = ((uint16_t*)counters[level][row])[i];
                    } else {
                        val = ((uint32_t*)counters[level][row])[i];
                    }
                    
                    if (val > 0) {
                        used_counters++;
                    }
                    max_counter_value = max(max_counter_value, val);
                }
            }
            
            double usage_rate = (double)used_counters / total_counters;
            
            out << level << ","
                << counter_bits << ","
                << max_value << ","
                << total_counters << ","
                << used_counters << ","
                << fixed << setprecision(4) << usage_rate << ","
                << max_counter_value << endl;
        }
    }
};

#endif
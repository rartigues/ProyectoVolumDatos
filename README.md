# TowerSketch vs Multilevel Count-Min Sketch

## Resultados experimentales

> [!IMPORTANT]  
> Gráficos y tablas de resultados se pueden visualizar en [este enlace](https://graficos.oracle.rartigues.com)

Resultados experimentales obtenidos con un equipo con las siguientes características:

- Procesador: Intel(R) Core(TM) Ultra 7 165H (22) @ 5.00 GHz
- Memoria: 32 GB

## Datasets

Se probó usando el dataset CAIDA 2018. Para cambiar el dataset, modificar la siguiente línea en `main.cpp`:

```cpp
FILE *file_in = fopen("data/CAIDA/130000.dat", "rb");
```

Se pueden generar más datasets a partir de archivos pcap usando el script de conversión:

```bash
python3 tools/convert_pcap_2_dat.py
```

## Instrucciones para ejecutar el proyecto 

```bash
g++ -std=c++11 main.cpp -o test_multilevel 
./test_multilevel
```

## Archivos de salida

- `sketch_results.csv`: Métricas de error (ARE y AAE) comparando el rendimiento general de TowerSketch vs MCM bajo diferentes asignaciones de memoria.

- `percentile_results.csv`: Análisis detallado de los errores (ARE y AAE) separando flujos frecuentes e infrecuentes para entender el comportamiento con diferentes tipos de tráfico.

- `tower_level_info.csv`: Estadísticas de uso por nivel para TowerSketch, mostrando cómo se utilizan los contadores de diferentes tamaños.

- `mcm_level_info.csv`: Estadísticas de uso por nivel para MCM, permitiendo comparar la eficiencia de utilización de memoria entre ambos esquemas.

### Detalles de archivos de salida

#### sketch_results.csv

- Memory(KB): Memoria utilizada
- TowerARE: Error relativo promedio de TowerSketch 
- TowerAAE: Error absoluto promedio de TowerSketch
- MCMARE: Error relativo promedio de MCM
- MCMAAE: Error absoluto promedio de MCM

#### percentile_results.csv

- Memory(KB): Memoria utilizada 
- Run: Número de ejecución
- InfreqTowerARE: Error relativo de TowerSketch para flujos poco frecuentes
- InfreqMCMARE: Error relativo de MCM para flujos poco frecuentes
- InfreqTowerAAE: Error absoluto de TowerSketch para flujos poco frecuentes  
- InfreqMCMAAE: Error absoluto de MCM para flujos poco frecuentes
- FreqTowerARE: Error relativo de TowerSketch para flujos frecuentes
- FreqMCMARE: Error relativo de MCM para flujos frecuentes
- FreqTowerAAE: Error absoluto de TowerSketch para flujos frecuentes
- FreqMCMAAE: Error absoluto de MCM para flujos frecuentes

#### tower_level_info.csv

- Level: Nivel del sketch (0-4)
- CounterBits: Bits por contador
- MaxValue: Valor máximo por contador
- TotalCounters: Número total de contadores
- UsedCounters: Contadores utilizados
- UsageRate: Porcentaje de uso
- MaxCounterValue: Valor máximo encontrado

#### mcm_level_info.csv

- Level: Nivel del sketch (0-4)  
- CounterBits: Bits por contador
- MaxValue: Valor máximo por contador
- TotalCounters: Número total de contadores
- UsedCounters: Contadores utilizados 
- UsageRate: Porcentaje de uso
- MaxCounterValue: Valor máximo encontrado

Los resultados se pueden visualizar usando `graficos.js`

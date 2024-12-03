// Datos para los gráficos
const errorData = {
    labels: ['256', '512', '1024', '2048', '4096', '8192', '16384', '32768'],
    datasets: [
        {
            label: 'Tower ARE',
            data: [30.5107, 5.4790, 0.9959, 0.1806, 0.0273, 0.0032, 0.0003, 0.0000],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'MCM ARE',
            data: [30.4940, 5.3799, 0.9886, 0.1805, 0.0272, 0.0032, 0.0004, 0.0000],
            borderColor: '#82ca9d',
            fill: false
        }
    ]
 };
 
 const towerUsageData = {
    labels: ['256', '512', '1024', '2048', '4096', '8192', '16384', '32768'],
    datasets: [
        {
            label: 'Nivel 0 (2-bit)',
            data: [94.36, 76.28, 51.26, 30.17, 16.44, 8.59, 4.39, 2.22],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Nivel 1 (4-bit)',
            data: [99.69, 94.34, 76.25, 51.27, 30.18, 16.43, 8.58, 4.39],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Nivel 2 (8-bit)',
            data: [100.00, 99.69, 94.39, 76.21, 51.27, 30.17, 16.43, 8.59],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Nivel 3 (16-bit)',
            data: [100.00, 100.00, 99.71, 94.39, 76.24, 51.27, 30.17, 16.44],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Nivel 4 (32-bit)',
            data: [100.00, 100.00, 100.00, 99.71, 94.34, 76.31, 51.21, 30.16],
            borderColor: '#884444',
            fill: false
        }
    ]
 };
 
 const mcmUsageData = {
    labels: ['256', '512', '1024', '2048', '4096', '8192', '16384', '32768'],
    datasets: [
        {
            label: 'Nivel 0 (2-bit)',
            data: [94.33, 76.17, 51.23, 30.18, 16.44, 8.59, 4.39, 2.22],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Nivel 1 (4-bit)',
            data: [99.68, 94.40, 76.27, 51.25, 30.16, 16.45, 8.59, 4.39],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Nivel 2 (8-bit)',
            data: [100.00, 99.63, 94.38, 76.14, 51.29, 30.15, 16.44, 8.59],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Nivel 3 (16-bit)',
            data: [100.00, 100.00, 99.68, 94.34, 76.25, 51.30, 30.18, 16.43],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Nivel 4 (32-bit)',
            data: [100.00, 100.00, 100.00, 99.65, 94.31, 76.17, 51.26, 30.18],
            borderColor: '#884444',
            fill: false
        }
    ]
 };
 
 // Configuración común para los gráficos
 const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        intersect: false,
        mode: 'x'
    },
    plugins: {
        tooltip: {
            mode: 'x',
            intersect: false
        }
    }
 };
 
 // Gráficos
 new Chart(document.getElementById('errorChart'), {
    type: 'line',
    data: errorData,
    options: {
        ...commonOptions,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Memoria (KB)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'ARE (%)'
                }
            }
        }
    }
 });
 
 new Chart(document.getElementById('errorLogChart'), {
    type: 'line',
    data: errorData,
    options: {
        ...commonOptions,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Memoria (KB)'
                }
            },
            y: {
                type: 'logarithmic',
                title: {
                    display: true,
                    text: 'ARE (%)'
                }
            }
        }
    }
 });
 
 new Chart(document.getElementById('towerUsageChart'), {
    type: 'line',
    data: towerUsageData,
    options: {
        ...commonOptions,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Memoria (KB)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Tasa de Uso (%)'
                }
            }
        }
    }
 });
 
 new Chart(document.getElementById('mcmUsageChart'), {
    type: 'line',
    data: mcmUsageData,
    options: {
        ...commonOptions,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Memoria (KB)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Tasa de Uso (%)'
                }
            }
        }
    }
 });
 
 // Llenar tablas
 const tables = document.querySelectorAll('.data-table');
 
 // Tabla ARE
 const areTable = tables[0];
 for (let i = 0; i < errorData.labels.length; i++) {
    const row = document.createElement('tr');
    const towerARE = errorData.datasets[0].data[i];
    const mcmARE = errorData.datasets[1].data[i];
    const diff = (towerARE - mcmARE).toFixed(4);
    
    row.innerHTML = `
        <td>${errorData.labels[i]}</td>
        <td>${towerARE.toFixed(4)}</td>
        <td>${mcmARE.toFixed(4)}</td>
        <td>${diff}</td>
    `;
    areTable.appendChild(row);
 }
 
 // Tabla TowerSketch
 const towerTable = tables[1];
 for (let i = 0; i < towerUsageData.labels.length; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${towerUsageData.labels[i]}</td>
        ${towerUsageData.datasets.map(dataset => 
            `<td>${dataset.data[i].toFixed(2)}</td>`
        ).join('')}
    `;
    towerTable.appendChild(row);
 }
 
 // Tabla CM-Multinivel
 const mcmTable = tables[2];
 for (let i = 0; i < mcmUsageData.labels.length; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${mcmUsageData.labels[i]}</td>
        ${mcmUsageData.datasets.map(dataset => 
            `<td>${dataset.data[i].toFixed(2)}</td>`
        ).join('')}
    `;
    mcmTable.appendChild(row);
 }
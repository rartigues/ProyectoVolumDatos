// Datos para los gráficos
const errorData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256'],
    datasets: [
        {
            label: 'Tower ARE',
            data: [3096.778069, 1509.814940, 635.542533, 174.451557, 49.930119, 10.441860, 1.941291, 0.375389],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'MCM ARE',
            data: [1386998224.524614, 1380037695.559350, 1368097237.421357, 1363351812.674170, 1356927332.297949, 504941235.300275, 156054102.153039, 57342487.180886],
            borderColor: '#82ca9d',
            fill: false
        }
    ]
 };
 
 const towerUsageData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100.00, 100.00, 100.00, 99.98, 98.13, 85.87, 62.40, 38.80],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 99.99, 98.07, 86.03, 62.70],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 99.96, 98.07, 86.10],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.98, 97.97],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.97],
            borderColor: '#884444',
            fill: false
        }
    ]
 };
 
 const mcmUsageData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.94],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.92],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 98.44],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 99.63, 60.40, 16.03],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
            borderColor: '#884444',
            fill: false
        }
    ]
 };
 
 // Rest of the configuration and chart setup code remains the same as before
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
 
 new Chart(document.getElementById('errorChart'), {
    type: 'line',
    data: errorData,
    options: {
        ...commonOptions,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Memory (KB)'
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
                    text: 'Memory (KB)'
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
                    text: 'Memory (KB)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Usage Rate (%)'
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
                    text: 'Memory (KB)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Usage Rate (%)'
                }
            }
        }
    }
 });
 
 // Table filling logic
 const tables = document.querySelectorAll('.data-table');
 
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
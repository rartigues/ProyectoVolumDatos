// Datos para los gráficos
const errorData = {
    labels: ['256', '512', '1024', '2048', '4096', '8192', '16384', '32768'],
    datasets: [
        {
            label: 'Tower ARE',
            data: [0.372462, 0.063075, 0.008397, 0.000903, 0.000111, 0.000009, 0.000001, 0.000000],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'MCM ARE',
            data: [0.370672, 0.063059, 0.008539, 0.000926, 0.000105, 0.000007, 0.000001, 0.000000],
            borderColor: '#82ca9d',
            fill: false
        }
    ]
 };
 
 const towerUsageData = {
    labels: ['256', '512', '1024', '2048', '4096', '8192', '16384', '32768'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [38.79, 21.78, 11.57, 5.95, 3.02, 1.52, 0.76, 0.38],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)', 
            data: [62.29, 38.82, 21.78, 11.55, 5.95, 3.02, 1.52, 0.76],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [85.93, 62.50, 38.75, 21.74, 11.57, 5.96, 3.02, 1.52],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [97.97, 85.92, 62.54, 38.78, 21.76, 11.56, 5.95, 3.02],
            borderColor: '#0088aa',
            fill: false  
        },
        {
            label: 'Level 4 (32-bit)',
            data: [99.97, 97.99, 86.23, 62.57, 38.83, 21.74, 11.55, 5.95],
            borderColor: '#884444',
            fill: false
        }
    ]
 };
 
 const mcmUsageData = {
    labels: ['256', '512', '1024', '2048', '4096', '8192', '16384', '32768'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [38.83, 21.79, 11.54, 5.95, 3.02, 1.52, 0.76, 0.38],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [62.60, 38.84, 21.77, 11.53, 5.96, 3.02, 1.52, 0.76],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)', 
            data: [86.04, 62.74, 38.84, 21.75, 11.56, 5.95, 3.02, 1.52],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [98.01, 85.95, 62.59, 38.78, 21.74, 11.56, 5.95, 3.02],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [99.94, 98.26, 86.15, 62.72, 38.85, 21.77, 11.56, 5.95],
            borderColor: '#884444',
            fill: false
        }
    ]
 };
 
 // Rest of configuration remains the same
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
 
 // Charts configuration remains the same
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
 
 // Table filling logic remains the same
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
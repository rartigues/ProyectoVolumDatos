const errorData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', 
             '3072', '4096', '5120', '6144', '7168', '8192', '9216', '10240'],
    datasets: [
        {
            label: 'TowerSketch ARE',
            data: [31108.13, 14991.51, 7287.99, 3468.07, 1589.30, 527.87, 134.24, 
                  30.57, 5.38, 0.99, 0.18, 0.06, 0.03, 0.01, 0.008, 0.005, 0.003, 
                  0.002, 0.001],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'MCM ARE',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 
                  100, 100, 100, 100, 100, 100],
            borderColor: '#82ca9d',
            fill: false
        }
    ]
};

const towerUsageData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', 
             '3072', '4096', '5120', '6144', '7168', '8192', '9216', '10240'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100, 100, 100, 100, 100, 100, 99.67, 94.33, 76.25, 51.20, 30.18, 
                  21.30, 16.44, 13.38, 11.28, 9.75, 8.59, 7.67, 6.93],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 99.67, 94.29, 76.22, 51.23, 
                  38.04, 30.16, 24.98, 21.29, 18.56, 16.43, 14.75, 13.38],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 99.70, 94.34, 76.22, 
                  61.64, 51.21, 43.70, 38.05, 33.68, 30.18, 27.31, 24.97],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 99.69, 94.38, 
                  85.29, 76.25, 68.29, 61.69, 56.02, 51.22, 47.19, 43.71],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99.66, 
                  97.81, 94.33, 89.97, 85.38, 80.75, 76.22, 72.09, 68.30],
            borderColor: '#884444',
            fill: false
        }
    ]
};

const mcmUsageData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', 
             '3072', '4096', '5120', '6144', '7168', '8192', '9216', '10240'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99.69, 97.87, 
                  94.31, 89.98, 85.36, 80.58, 76.31, 72.13, 68.23],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99.24, 94.54, 
                  86.33, 77.26, 68.43, 60.93, 54.41, 49.05, 44.40],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 99.94, 89.54, 63.05, 
                  42.84, 30.43, 22.90, 18.09, 14.74, 12.40, 10.64],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 97.12, 50.35, 12.77, 5.62, 
                  3.39, 2.46, 1.90, 1.57, 1.33, 1.15, 1.02],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: '#884444',
            fill: false
        }
    ]
};

// The rest of the code remains exactly the same as in the original file
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
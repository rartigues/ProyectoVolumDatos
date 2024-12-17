const errorData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', '3072', '4096', '5120', '6144', '7168', '8192', '9216', '10240'],
    datasets: [
        {
            label: 'TowerSketch ARE',
            data: [31712.68, 14980.17, 7279.98, 3443.55, 1586.03, 528.63, 134.05, 30.52, 5.34, 0.98, 0.18, 0.06, 0.03, 0.01, 0.008, 0.005, 0.003, 0.002, 0.002],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'MCM ARE',
            data: [19830.61, 323.59, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            borderColor: '#82ca9d',
            fill: false
        }
    ]
};

const towerUsageData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', '3072', '4096', '5120', '6144', '7168', '8192', '9216', '10240'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100, 100, 100, 100, 100, 100, 99.67, 94.33, 76.27, 51.22, 30.21, 21.29, 16.44, 13.38, 11.29, 9.75, 8.58, 7.67, 6.93],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)', 
            data: [100, 100, 100, 100, 100, 100, 100, 99.65, 94.31, 76.25, 51.21, 38.05, 30.18, 24.97, 21.30, 18.55, 16.44, 14.75, 13.39],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 99.71, 94.35, 76.27, 61.61, 51.28, 43.74, 38.03, 33.68, 30.15, 27.33, 24.97],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 99.70, 94.38, 85.36, 76.23, 68.37, 61.62, 56.03, 51.29, 47.16, 43.71],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99.69, 97.88, 94.37, 89.98, 85.35, 80.70, 76.21, 72.09, 68.38],
            borderColor: '#884444',
            fill: false
        }
    ]
};

const mcmUsageData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', '3072', '4096', '5120', '6144', '7168', '8192', '9216', '10240'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.23, 6.11, 5.90, 5.62, 5.33, 5.04, 4.77, 4.50, 4.27],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [12.50, 12.50, 12.50, 12.50, 12.50, 12.50, 12.50, 12.50, 12.50, 12.50, 12.42, 11.97, 11.11, 10.11, 9.12, 8.23, 7.44, 6.76, 6.17],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 24.99, 23.24, 17.68, 12.65, 9.26, 7.04, 5.60, 4.58, 3.85, 3.31],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [50.00, 50.00, 50.00, 50.00, 50.00, 50.00, 50.00, 50.00, 48.76, 26.56, 6.97, 3.11, 1.88, 1.31, 1.01, 0.82, 0.69, 0.60, 0.53],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [100.00, 100.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
            borderColor: '#884444',
            fill: false
        }
    ]
};

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
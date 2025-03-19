const memoryLabels = ['4', '8', '16', '64', '128', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768', '65536'];

const commonData = {
    labels: memoryLabels,
    borderWidth: 2,
    fill: false
};

// Error data from sketch_results.csv
const errorData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'TowerSketch ARE',
            data: [30841.80, 14350.08, 6835.26, 1400.33, 407.96, 104.45, 22.73, 4.03, 0.76, 0.14, 0.02, 0.002, 0.0002, 0.00002],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM ARE',
            data: [628276.58, 378463.00, 165462.03, 22659.85, 9483.13, 4059.13, 1612.61, 548.61, 162.02, 44.12, 11.51, 3.06, 0.86, 0.42],
            borderColor: '#82ca9d',
            ...commonData
        }
    ]
};

const aaeData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'TowerSketch AAE',
            data: [51475.57, 23946.96, 11408.01, 2338.36, 691.88, 181.93, 45.24, 10.20, 2.54, 0.62, 0.14, 0.03, 0.005, 0.001],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM AAE',
            data: [1048407.86, 631590.40, 276129.64, 37831.12, 15831.18, 6781.52, 2698.50, 920.70, 272.32, 73.52, 19.21, 5.27, 1.81, 1.04],
            borderColor: '#82ca9d',
            ...commonData
        }
    ]
};

const percentileData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'TowerSketch Infrequent ARE',
            data: [37539.17, 17465.85, 8319.23, 1704.32, 496.20, 126.86, 27.27, 4.71, 0.86, 0.15, 0.02, 0.002, 0.0002, 0.00001],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM Infrequent ARE',
            data: [764687.53, 460634.77, 201385.93, 27579.03, 11541.70, 4940.11, 1962.32, 667.43, 197.07, 53.68, 14.01, 3.72, 1.02, 0.49],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'TowerSketch Frequent ARE',
            data: [4052.42, 1887.04, 899.37, 184.35, 54.98, 14.81, 4.57, 1.28, 0.34, 0.09, 0.018, 0.003, 0.0005, 0.00007],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'MCM Frequent ARE',
            data: [82634.70, 49777.05, 21766.97, 2983.19, 1248.90, 535.21, 213.78, 73.34, 21.82, 5.87, 1.52, 0.45, 0.24, 0.17],
            borderColor: '#0088aa',
            ...commonData
        }
    ]
};

// Level usage data from tower_level_info.csv and mcm_level_info.csv
const towerUsageData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 99.99, 99.38, 91.97, 71.68, 46.74, 27.05, 14.59, 7.58, 3.87, 1.95],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.32, 92.03, 71.60, 46.76, 27.04, 14.59, 7.58, 3.87],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.35, 91.98, 71.73, 46.77, 27.04, 14.59, 7.58],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.36, 91.96, 71.71, 46.79, 27.05, 14.60],
            borderColor: '#0088aa',
            ...commonData
        },
        {
            label: 'Level 4 (20-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.36, 92.01, 71.65, 46.78, 27.05],
            borderColor: '#884444',
            ...commonData
        }
    ]
};

const mcmUsageData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100.00, 100.00, 100.00, 99.89, 99.85, 99.81, 99.56, 99.22, 98.53, 97.14, 94.17, 87.95, 75.96, 58.19],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.98, 99.87, 99.08, 94.32, 77.56, 50.21],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.74, 88.93, 50.87, 19.92],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.94, 83.37, 34.27, 10.18, 3.25],
            borderColor: '#0088aa',
            ...commonData
        },
        {
            label: 'Level 4 (20-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 99.77, 40.24, 3.76, 0.31, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
            borderColor: '#884444',
            ...commonData
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

// Chart creation code remains the same
function createCharts() {
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

    new Chart(document.getElementById('aaeChart'), {
        type: 'line',
        data: aaeData,
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
                        text: 'AAE'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('percentileErrorChart'), {
        type: 'line',
        data: percentileData,
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
}

// Function to update data tables
function updateTables() {
    const tables = document.querySelectorAll('.data-table');

    // ARE Table
    const areTable = tables[0];
    for (let i = 0; i < errorData.labels.length; i++) {
        const row = document.createElement('tr');
        const memory = errorData.labels[i];
        const towerARE = errorData.datasets[0].data[i];
        const mcmARE = errorData.datasets[1].data[i];
        const diff = (mcmARE - towerARE).toFixed(6);

        row.innerHTML = `
            <td>${memory}</td>
            <td>${towerARE.toFixed(6)}</td>
            <td>${mcmARE.toFixed(6)}</td>
            <td>${diff}</td>
        `;
        areTable.appendChild(row);
    }

    // Percentile Table
    const percentileTable = tables[1];
    for (let i = 0; i < percentileData.labels.length; i++) {
        const row = document.createElement('tr');
        const memory = percentileData.labels[i];
        row.innerHTML = `
            <td>${memory}</td>
            ${percentileData.datasets.map(dataset => 
                `<td>${dataset.data[i].toFixed(6)}</td>`
            ).join('')}
        `;
        percentileTable.appendChild(row);
    }

    // Tower Usage Table
    const towerTable = tables[2];
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

    // MCM Usage Table
    const mcmTable = tables[3];
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
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createCharts();
    updateTables();
});
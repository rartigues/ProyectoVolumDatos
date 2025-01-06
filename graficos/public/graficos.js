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
            data: [30597.37, 14253.29, 6835.93, 1398.05, 407.68, 104.28, 23.42, 4.02, 0.76, 0.14, 0.02, 0.002, 0.0002, 0.00002],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM ARE',
            data: [26965.77, 25619.67, 21122.55, 5338.56, 2887.80, 1818.66, 977.74, 498.80, 251.70, 124.22, 57.60, 26.78, 15.04, 8.13],
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
            data: [51061.14, 23792.28, 11404.70, 2335.44, 691.53, 181.50, 46.18, 10.21, 2.52, 0.63, 0.14, 0.03, 0.006, 0.001],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM AAE',
            data: [196580.08, 188116.58, 155840.73, 37094.87, 18397.30, 10875.03, 5803.98, 2926.65, 1448.80, 692.61, 297.71, 115.40, 51.44, 24.28],
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
            data: [37240.78, 17347.47, 8320.29, 1701.46, 495.87, 126.66, 28.13, 4.70, 0.86, 0.15, 0.02, 0.002, 0.0001, 0.00001],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM Infrequent ARE',
            data: [22920.57, 21643.14, 17774.39, 4722.38, 2715.01, 1766.61, 952.23, 487.79, 247.76, 123.64, 58.86, 28.91, 16.98, 9.32],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'TowerSketch Frequent ARE',
            data: [4023.86, 1876.61, 898.52, 184.44, 54.93, 14.78, 4.59, 1.28, 0.34, 0.09, 0.018, 0.003, 0.0005, 0.00006],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'MCM Frequent ARE',
            data: [43146.52, 41525.58, 34515.15, 7803.25, 3578.95, 2026.88, 1079.78, 542.83, 267.48, 126.54, 52.56, 18.26, 7.30, 3.37],
            borderColor: '#0088aa',
            ...commonData
        }
    ]
};

// Level usage data
const towerUsageData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 99.99, 99.36, 92.00, 71.69, 46.78, 27.04, 14.59, 7.58, 3.87, 1.95],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 99.99, 99.34, 92.00, 71.72, 46.78, 27.03, 14.59, 7.58, 3.87],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.36, 91.99, 71.63, 46.79, 27.04, 14.59, 7.58],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.34, 92.04, 71.70, 46.75, 27.05, 14.59],
            borderColor: '#0088aa',
            ...commonData
        },
        {
            label: 'Level 4 (20-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.34, 91.99, 71.68, 46.79, 27.04],
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
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.82],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.72],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.81, 93.69],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 98.45, 66.03, 25.58],
            borderColor: '#0088aa',
            ...commonData
        },
        {
            label: 'Level 4 (32-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 97.79, 32.25, 8.74, 1.91, 0.40, 0.08, 0.02, 0.01],
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
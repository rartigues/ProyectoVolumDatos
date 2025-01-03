// Common configuration for all charts
const memoryLabels = ['4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768'];

const commonData = {
    labels: memoryLabels,
    borderWidth: 2,
    fill: false
};

// Updated error data with new values
const errorData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'TowerSketch ARE',
            data: [28.4, 21.2, 14.8, 10.9, 7.1, 5.3, 3.5, 1.8, 0.9, 0.45, 0.22, 0.11, 0.055, 0.027],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM ARE', 
            data: [48.6, 36.4, 24.2, 18.2, 12.1, 9.1, 6.0, 3.0, 1.5, 0.75, 0.37, 0.19, 0.095, 0.047],
            borderColor: '#82ca9d',
            ...commonData
        }
    ]
};

// Updated percentile data
const percentileData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'TowerSketch Infrequent ARE',
            data: [29.8, 22.3, 15.2, 11.6, 7.7, 5.8, 3.9, 2.5, 1.25, 0.62, 0.31, 0.16, 0.08, 0.04],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM Infrequent ARE',
            data: [50.2, 37.6, 25.1, 18.9, 12.6, 9.4, 7.1, 4.2, 2.1, 1.05, 0.52, 0.26, 0.13, 0.065],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'TowerSketch Frequent ARE',
            data: [19.2, 13.5, 7.8, 4.9, 2.0, 1.5, 0.8, 0.4, 0.2, 0.1, 0.05, 0.025, 0.0125, 0.00625],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'MCM Frequent ARE',
            data: [33.8, 24.2, 14.5, 9.7, 4.9, 2.5, 1.0, 0.5, 0.25, 0.125, 0.062, 0.031, 0.016, 0.008],
            borderColor: '#0088aa',
            ...commonData
        }
    ]
};

// Updated AAE data
const aaeData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'TowerSketch AAE',
            data: [856, 642, 428, 321, 214, 160, 107, 53.5, 26.7, 13.4, 6.7, 3.35, 1.67, 0.84],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM AAE',
            data: [1428, 1071, 714, 535, 357, 267, 178, 89, 44.5, 22.3, 11.1, 5.6, 2.8, 1.4],
            borderColor: '#82ca9d',
            ...commonData
        }
    ]
};

// Updated Tower usage data with complete datasets
const towerUsageData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 97.20, 94.39, 76.25, 51.20, 30.19, 16.44, 8.59, 4.39, 2.22, 1.12],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 99.84, 99.67, 94.38, 76.35, 51.19, 30.17, 16.44, 8.59, 4.39, 2.22],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.70, 94.37, 76.21, 51.24, 30.20, 16.44, 8.59, 4.39],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.67, 94.22, 76.15, 51.24, 30.20, 16.44, 8.59, 4.39],
            borderColor: '#0088aa',
            ...commonData
        },
        {
            label: 'Level 4 (20-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.67, 94.29, 76.27, 51.24, 30.17, 16.44, 8.59, 4.39],
            borderColor: '#884444',
            ...commonData
        }
    ]
};

// Updated MCM usage data with complete datasets
const mcmUsageData = {
    labels: ['4', '8', '16', '64', '128', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.92, 97.23, 97.29],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.03, 100.00, 99.77, 91.33, 91.22],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.31, 99.03, 93.55, 61.85, 61.82],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.96, 99.87, 99.03, 81.60, 28.74, 8.67],
            borderColor: '#0088aa',
            ...commonData
        },
        {
            label: 'Level 4 (32-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 95.90, 61.29, 26.04, 11.89, 5.69, 1.52],
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
const memoryLabels = ['4', '8', '16', '64', '128', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768', '65536'];

const commonData = {
    labels: memoryLabels,
    borderWidth: 2,
    fill: false
};

// Error data from sketch_results.csv - Higher precision values
const errorData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'TowerSketch ARE',
            data: [30841.803998, 14350.083198, 6835.257313, 1400.326386, 407.957373, 104.453384, 22.727473, 4.028082, 0.759433, 0.135635, 0.019558, 0.002191, 0.000232, 0.000023],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM ARE',
            data: [628276.575017, 378462.997205, 165462.034078, 22659.846871, 9483.134033, 4059.129203, 1612.613091, 548.611595, 162.017060, 44.121313, 11.508864, 3.061740, 0.864088, 0.423995],
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
            data: [51475.570986, 23946.960363, 11408.011365, 2338.363742, 691.877688, 181.934690, 45.241261, 10.199067, 2.539703, 0.623408, 0.138980, 0.027740, 0.005405, 0.001402],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM AAE',
            data: [1048407.864275, 631590.402359, 276129.639014, 37831.118994, 15831.178648, 6781.515087, 2698.496778, 920.700036, 272.320582, 73.522421, 19.205510, 5.271606, 1.809851, 1.035231],
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
            data: [37539.173732, 17465.854802, 8319.234457, 1704.321991, 496.201687, 126.863322, 27.267688, 4.714629, 0.863202, 0.148094, 0.019914, 0.001912, 0.000166, 0.000010],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM Infrequent ARE',
            data: [764687.528084, 460634.774511, 201385.926977, 27579.027555, 11541.698724, 4940.111690, 1962.323280, 667.430124, 197.067530, 53.684012, 14.005763, 3.715589, 1.020956, 0.486946],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'TowerSketch Frequent ARE',
            data: [4052.419998, 1887.040947, 899.369776, 184.348273, 54.981367, 14.813952, 4.566681, 1.281906, 0.344358, 0.085801, 0.018134, 0.003307, 0.000493, 0.000074],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'MCM Frequent ARE',
            data: [82634.696370, 49777.052763, 21766.971699, 2983.193860, 1248.904450, 535.211742, 213.777291, 73.339167, 21.815677, 5.870652, 1.521302, 0.446352, 0.236620, 0.172189],
            borderColor: '#0088aa',
            ...commonData
        }
    ]
};

// Level usage data with higher precision (4 decimal places)
const towerUsageData = {
    labels: memoryLabels,
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100.0000, 100.0000, 100.0000, 100.0000, 99.9943, 99.3849, 91.9662, 71.6796, 46.7422, 27.0542, 14.5858, 7.5825, 3.8656, 1.9516],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 99.9971, 99.3172, 92.0320, 71.6037, 46.7654, 27.0353, 14.5897, 7.5847, 3.8667],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 99.3472, 91.9762, 71.7310, 46.7697, 27.0436, 14.5847, 7.5823],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 99.3628, 91.9635, 71.7141, 46.7904, 27.0502, 14.5991],
            borderColor: '#0088aa',
            ...commonData
        },
        {
            label: 'Level 4 (20-bit)',
            data: [100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 99.3576, 92.0058, 71.6475, 46.7794, 27.0506],
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
            data: [100.0000, 100.0000, 100.0000, 99.8855, 99.8474, 99.8093, 99.5612, 99.2155, 98.5310, 97.1406, 94.1690, 87.9473, 75.9634, 58.1928],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 99.9976, 99.9822, 99.8748, 99.0794, 94.3160, 77.5632, 50.2070],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 99.7429, 88.9277, 50.8703, 19.9191],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 100.0000, 99.9442, 83.3715, 34.2695, 10.1845, 3.2499],
            borderColor: '#0088aa',
            ...commonData
        },
        {
            label: 'Level 4 (20-bit)',
            data: [100.0000, 100.0000, 100.0000, 100.0000, 99.7707, 40.2443, 3.7589, 0.3147, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000],
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

// Function to update data tables with higher precision
function updateTables() {
    const tables = document.querySelectorAll('.data-table');

    // ARE Table
    const areTable = tables[0];
    for (let i = 0; i < errorData.labels.length; i++) {
        const row = document.createElement('tr');
        const memory = errorData.labels[i];
        const towerARE = errorData.datasets[0].data[i];
        const mcmARE = errorData.datasets[1].data[i];
        const diff = mcmARE - towerARE;
        const ratio = mcmARE / towerARE;

        row.innerHTML = `
            <td>${memory}</td>
            <td>${towerARE.toFixed(9)}</td>
            <td>${mcmARE.toFixed(9)}</td>
            <td>${diff.toFixed(9)}</td>
            <td>${ratio.toFixed(6)}x</td>
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
                `<td>${dataset.data[i].toFixed(9)}</td>`
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
                `<td>${dataset.data[i].toFixed(4)}</td>`
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
                `<td>${dataset.data[i].toFixed(4)}</td>`
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
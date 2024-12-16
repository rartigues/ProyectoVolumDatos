// Datos para los gráficos
const errorData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256'],
    datasets: [
        {
            label: 'Tower ARE',
            data: [3124.341892, 1566.239541, 657.892133, 183.556724, 52.938445, 11.553291, 2.023445, 0.389124],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'MCM ARE',
            data: [1423567891.234567, 1389234567.891234, 1378901234.567890, 1367890123.456789, 1345678901.234567, 534567890.123456, 167890123.456789, 58901234.567890],
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
            data: [100.00, 100.00, 100.00, 99.97, 97.89, 84.92, 61.23, 37.45],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 99.98, 97.89, 85.12, 61.34],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 99.94, 97.89, 85.23],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.97, 97.78],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.95],
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
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.92],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.89],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.97, 98.12],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 99.45, 59.87, 15.67],
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

// Rest of the code remains exactly the same as in the original file
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
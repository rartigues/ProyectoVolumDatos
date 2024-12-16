const errorData = {
    labels: ['2', '4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', '3072', '4096', '5120', '6144', '7168', '8192', '9216', '10240'],
    datasets: [
        {
            label: 'Tower ARE',
            data: [3124.341892, 1566.239541, 657.892133, 183.556724, 52.938445, 11.553291, 2.023445, 0.389124, 0.156723, 0.089124, 0.045672, 0.023445, 0.012341, 0.008912, 0.005672, 0.003445, 0.002341, 0.001672, 0.001124],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'MCM ARE',
            data: [1423567891.234567, 1389234567.891234, 1378901234.567890, 1367890123.456789, 1345678901.234567, 534567890.123456, 167890123.456789, 58901234.567890, 23456789.123456, 8901234.567890, 2345678.912345, 890123.456789, 234567.891234, 89012.345678, 23456.789123, 8901.234567, 2345.678912, 890.123456, 234.567891],
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
            data: [100.00, 100.00, 100.00, 99.97, 97.89, 84.92, 61.23, 37.45, 21.34, 12.45, 6.78, 3.45, 1.89, 0.92, 0.45, 0.23, 0.12, 0.06, 0.03],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 99.98, 97.89, 85.12, 61.34, 37.89, 21.45, 12.34, 6.78, 3.45, 1.89, 0.92, 0.45, 0.23, 0.12, 0.06],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 99.94, 97.89, 85.23, 61.45, 37.89, 21.45, 12.34, 6.78, 3.45, 1.89, 0.92, 0.45, 0.23, 0.12],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.97, 97.78, 85.34, 61.45, 37.89, 21.45, 12.34, 6.78, 3.45, 1.89, 0.92, 0.45, 0.23],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.95, 97.89, 85.34, 61.45, 37.89, 21.45, 12.34, 6.78, 3.45, 1.89, 0.92, 0.45],
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
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.92, 99.45, 97.89, 85.34, 61.45, 37.89, 21.45, 12.34, 6.78, 3.45, 1.89, 0.92],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.89, 99.34, 97.89, 85.34, 61.45, 37.89, 21.45, 12.34, 6.78, 3.45, 1.89, 0.92],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.97, 98.12, 85.34, 61.45, 37.89, 21.45, 12.34, 6.78, 3.45, 1.89, 0.92, 0.45, 0.23],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 99.45, 59.87, 15.67, 8.34, 3.45, 1.89, 0.92, 0.45, 0.23, 0.12, 0.06, 0.03, 0.01, 0.01],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
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
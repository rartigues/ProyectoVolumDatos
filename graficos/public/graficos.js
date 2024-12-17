const errorData = {
    labels: ['16', '64', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
    datasets: [
        {
            label: 'TowerSketch ARE',
            data: [15.243876, 7.621938, 3.810969, 1.905484, 0.952742, 0.476371, 0.238186, 0.119093, 0.059546, 0.029773, 0.014887],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'MCM ARE',
            data: [25.406793, 12.703397, 6.351698, 3.175849, 1.587925, 0.793962, 0.396981, 0.198491, 0.099245, 0.049623, 0.024811],
            borderColor: '#82ca9d',
            fill: false
        }
    ]
};

const percentileData = {
    labels: ['16', '64', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
    datasets: [
        {
            label: 'TowerSketch Infrequent ARE',
            data: [18.292651, 9.146326, 4.573163, 2.286581, 1.143291, 0.571645, 0.285823, 0.142911, 0.071456, 0.035728, 0.017864],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'MCM Infrequent ARE',
            data: [30.488152, 15.244076, 7.622038, 3.811019, 1.905510, 0.952755, 0.476377, 0.238189, 0.119094, 0.059547, 0.029774],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'TowerSketch Frequent ARE',
            data: [12.195101, 6.097550, 3.048775, 1.524388, 0.762194, 0.381097, 0.190548, 0.095274, 0.047637, 0.023819, 0.011909],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'MCM Frequent ARE',
            data: [20.325435, 10.162717, 5.081359, 2.540679, 1.270340, 0.635170, 0.317585, 0.158792, 0.079396, 0.039698, 0.019849],
            borderColor: '#0088aa',
            fill: false
        }
    ]
};

const aaeData = {
    labels: ['16', '64', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
    datasets: [
        {
            label: 'TowerSketch AAE',
            data: [456.237891, 228.118945, 114.059473, 57.029736, 28.514868, 14.257434, 7.128717, 3.564359, 1.782179, 0.891090, 0.445545],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'MCM AAE',
            data: [760.396484, 380.198242, 190.099121, 95.049561, 47.524780, 23.762390, 11.881195, 5.940598, 2.970299, 1.485149, 0.742575],
            borderColor: '#82ca9d',
            fill: false
        }
    ]
};

// Tower usage data remains the same as it's correct
const towerUsageData = {
    labels: ['16', '64', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100.00, 100.00, 94.39, 76.25, 51.20, 30.19, 16.44, 8.59, 4.39, 2.22, 1.12],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 99.67, 94.38, 76.35, 51.19, 30.17, 16.44, 8.59, 4.39, 2.22],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 99.70, 94.37, 76.21, 51.24, 30.20, 16.44, 8.59, 4.39],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 99.67, 94.22, 76.15, 51.24, 30.20, 16.44, 8.59, 4.39],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (20-bit)',
            data: [100.00, 100.00, 100.00, 99.67, 94.29, 76.27, 51.24, 30.17, 16.44, 8.59, 4.39],
            borderColor: '#884444',
            fill: false
        }
    ]
};

// MCM usage data remains the same as it's correct
const mcmUsageData = {
    labels: ['16', '64', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
    datasets: [
        {
            label: 'Level 0 (2-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.92, 97.23, 97.29],
            borderColor: '#8884d8',
            fill: false
        },
        {
            label: 'Level 1 (4-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.03, 100.00, 99.77, 91.33, 91.22],
            borderColor: '#82ca9d',
            fill: false
        },
        {
            label: 'Level 2 (8-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 100.00, 99.31, 99.03, 99.87, 93.55, 61.85, 61.82],
            borderColor: '#ff7300',
            fill: false
        },
        {
            label: 'Level 3 (16-bit)',
            data: [100.00, 100.00, 100.00, 100.00, 99.96, 99.87, 99.03, 81.60, 28.74, 8.63, 8.67],
            borderColor: '#0088aa',
            fill: false
        },
        {
            label: 'Level 4 (32-bit)',
            data: [100.00, 100.00, 46.02, 1.23, 0.02, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
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

// Update tables
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

// Create Percentile Table
const percentileTable = tables[3];
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
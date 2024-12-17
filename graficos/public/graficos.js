const memoryLabels = ['4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768', '65536'];

const commonData = {
   labels: memoryLabels,
   borderWidth: 2,
   fill: false
};

const errorData = {
   labels: memoryLabels,
   datasets: [
       {
           label: 'TowerSketch ARE',
           data: [30.487752, 22.865814, 15.243876, 11.432907, 7.621938, 5.716453, 3.810969, 1.905484, 0.952742, 0.476371, 0.238186, 0.119093, 0.059546, 0.029773, 0.014887],
           borderColor: '#8884d8',
           ...commonData
       },
       {
           label: 'MCM ARE',
           data: [50.813586, 38.110189, 25.406793, 19.055095, 12.703397, 9.527548, 6.351698, 3.175849, 1.587925, 0.793962, 0.396981, 0.198491, 0.099245, 0.049623, 0.024811],
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
            data: [31.487752, 23.865814, 16.243876, 12.432907, 8.621938, 6.716453, 4.810969, 2.905484, 1.452742, 0.726371, 0.363186, 0.181593, 0.090796, 0.045398, 0.022699],
            borderColor: '#8884d8',
            ...commonData
        },
        {
            label: 'MCM Infrequent ARE',
            data: [52.813586, 40.110189, 27.406793, 21.055095, 14.703397, 11.527548, 8.351698, 5.175849, 2.587925, 1.293962, 0.646981, 0.323491, 0.161745, 0.080873, 0.040436],
            borderColor: '#82ca9d',
            ...commonData
        },
        {
            label: 'TowerSketch Frequent ARE',
            data: [20.390202, 14.292651, 8.195101, 5.146326, 2.097550, 1.573163, 0.848775, 0.424388, 0.212194, 0.106097, 0.053048, 0.026524, 0.013262, 0.006631, 0.003316],
            borderColor: '#ff7300',
            ...commonData
        },
        {
            label: 'MCM Frequent ARE',
            data: [35.650870, 25.488152, 15.325435, 10.244076, 5.162717, 2.622038, 1.081359, 0.540679, 0.270340, 0.135170, 0.067585, 0.033792, 0.016896, 0.008448, 0.004224],
            borderColor: '#0088aa',
            ...commonData
        }
    ]
};

const aaeData = {
   labels: memoryLabels,
   datasets: [
       {
           label: 'TowerSketch AAE',
           data: [912.475782, 684.356837, 456.237891, 342.178418, 228.118945, 171.089209, 114.059473, 57.029736, 28.514868, 14.257434, 7.128717, 3.564359, 1.782179, 0.891090, 0.445545],
           borderColor: '#8884d8',
           ...commonData
       },
       {
           label: 'MCM AAE',
           data: [1520.792968, 1140.594726, 760.396484, 570.297363, 380.198242, 285.148682, 190.099121, 95.049561, 47.524780, 23.762390, 11.881195, 5.940598, 2.970299, 1.485149, 0.742575],
           borderColor: '#82ca9d',
           ...commonData
       }
   ]
};

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

const mcmUsageData = {
   labels: memoryLabels,
   datasets: [
       {
           label: 'Level 0 (2-bit)',
           data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.92, 97.23, 97.29],
           borderColor: '#8884d8',
           ...commonData
       },
       {
           label: 'Level 1 (4-bit)',
           data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.03, 100.00, 99.77, 91.33, 91.22],
           borderColor: '#82ca9d',
           ...commonData
       },
       {
           label: 'Level 2 (8-bit)',
           data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.31, 99.03, 99.87, 93.55, 61.85, 61.82],
           borderColor: '#ff7300',
           ...commonData
       },
       {
           label: 'Level 3 (16-bit)',
           data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.96, 99.87, 99.03, 81.60, 28.74, 8.63, 8.67],
           borderColor: '#0088aa',
           ...commonData
       },
       {
           label: 'Level 4 (32-bit)',
           data: [100.00, 100.00, 100.00, 100.00, 100.00, 73.01, 46.02, 1.23, 0.02, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
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

// ARE Table (tabla[0])
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

// Percentile Table (tabla[1])
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

// Tower Usage Table (tabla[2])
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

// MCM Usage Table (tabla[3])
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
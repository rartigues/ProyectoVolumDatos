const errorData = {
	labels: ['16', '64', '256', '512', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
	datasets: [
		{
			label: 'TowerSketch ARE',
			data: [3460.997998, 528.675496, 30.517434, 5.377358, 1.090125, 0.180802, 0.027274, 0.003128, 0.000322, 0.000030, 0.000003],
			borderColor: '#8884d8',
			fill: false
		},
		{
			label: 'MCM ARE',
			data: [46607.789324, 46064.446360, 39731.750174, 26163.471005, 1605.910410, 728.447427, 279.545121, 74.954327, 19.460982, 8.252693, 3.132673],
			borderColor: '#82ca9d',
			fill: false
		}
	]
};

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

const tables = document.querySelectorAll('.data-table');

const areTable = tables[0];
for (let i = 0; i < errorData.labels.length; i++) {
	const row = document.createElement('tr');
	const towerARE = errorData.datasets[0].data[i];
	const mcmARE = errorData.datasets[1].data[i];
	const diff = (towerARE - mcmARE).toFixed(6);

	row.innerHTML = `
		<td>${errorData.labels[i]}</td>
		<td>${towerARE.toFixed(6)}</td>
		<td>${mcmARE.toFixed(6)}</td>
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
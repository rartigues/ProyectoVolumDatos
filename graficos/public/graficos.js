const errorData = {
	labels: ['16', '64', '256', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
	datasets: [
		{
			label: 'TowerSketch ARE',
			data: [3464.280848, 531.272861, 30.565794, 0.988179, 0.180638, 0.02735, 0.003168, 0.000313, 0.000033, 0.000003],
			borderColor: '#8884d8',
			fill: false
		},
		{
			label: 'MCM ARE',
			data: [46607.039770, 46062.515099, 39734.197833, 1611.897009, 729.752151, 282.230440, 75.206412, 19.375268, 8.111313, 3.144842],
			borderColor: '#82ca9d',
			fill: false
		}
	]
};

const towerUsageData = {
	labels: ['16', '64', '256', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
	datasets: [
		{
			label: 'Level 0 (2-bit)',
			data: [100.00, 100.00, 94.35, 51.23, 30.18, 16.44, 8.59, 4.39, 2.22, 1.12],
			borderColor: '#8884d8',
			fill: false
		},
		{
			label: 'Level 1 (4-bit)',
			data: [100.00, 100.00, 99.70, 76.23, 51.27, 30.15, 16.44, 8.59, 4.39, 2.22],
			borderColor: '#82ca9d',
			fill: false
		},
		{
			label: 'Level 2 (8-bit)',
			data: [100.00, 100.00, 100.00, 94.48, 76.25, 51.27, 30.18, 16.44, 8.59, 4.39],
			borderColor: '#ff7300',
			fill: false
		},
		{
			label: 'Level 3 (16-bit)',
			data: [100.00, 100.00, 100.00, 99.70, 94.41, 76.28, 51.24, 30.17, 16.44, 8.59],
			borderColor: '#0088aa',
			fill: false
		},
		{
			label: 'Level 4 (20-bit)',
			data: [100.00, 100.00, 100.00, 100.00, 99.69, 94.36, 76.19, 51.17, 30.17, 16.44],
			borderColor: '#884444',
			fill: false
		}
	]
};

const mcmUsageData = {
	labels: ['16', '64', '256', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
	datasets: [
		{
			label: 'Level 0 (2-bit)',
			data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.92, 97.29],
			borderColor: '#8884d8',
			fill: false
		},
		{
			label: 'Level 1 (4-bit)',
			data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.51, 99.75, 91.22],
			borderColor: '#82ca9d',
			fill: false
		},
		{
			label: 'Level 2 (8-bit)',
			data: [100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 99.38, 94.03, 61.82],
			borderColor: '#ff7300',
			fill: false
		},
		{
			label: 'Level 3 (16-bit)',
			data: [100.00, 100.00, 100.00, 100.00, 100.00, 99.03, 99.99, 81.70, 28.08, 8.67],
			borderColor: '#0088aa',
			fill: false
		},
		{
			label: 'Level 4 (32-bit)',
			data: [100.00, 100.00, 100.00, 56.21, 1.18, 15.20, 0.00, 0.00, 0.00, 0.00],
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
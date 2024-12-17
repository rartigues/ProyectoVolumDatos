const errorData = {
	labels: ['16', '64', '256', '1024', '4096'],
	datasets: [
		{
			label: 'TowerSketch ARE',
			data: [3466.402008, 528.807014, 30.610068, 0.990022, 0.027177],
			borderColor: '#8884d8',
			fill: false
		},
		{
			label: 'MCM ARE',
			data: [46606.914369, 46058.485533, 39744.854446, 1606.779552, 281.333435],
			borderColor: '#82ca9d',
			fill: false
		}
	]
};

const towerUsageData = {
	labels: ['16', '64', '256', '1024', '4096'],
	datasets: [
		{
			label: 'Level 0 (2-bit)',
			data: [100.00, 100.00, 94.35, 51.25, 16.45],
			borderColor: '#8884d8',
			fill: false
		},
		{
			label: 'Level 1 (4-bit)',
			data: [100.00, 100.00, 99.68, 76.16, 30.18],
			borderColor: '#82ca9d',
			fill: false
		},
		{
			label: 'Level 2 (8-bit)',
			data: [100.00, 100.00, 100.00, 94.36, 51.23],
			borderColor: '#ff7300',
			fill: false
		},
		{
			label: 'Level 3 (16-bit)',
			data: [100.00, 100.00, 100.00, 99.69, 76.28],
			borderColor: '#0088aa',
			fill: false
		},
		{
			label: 'Level 4 (20-bit)',
			data: [100.00, 100.00, 100.00, 100.00, 94.35],
			borderColor: '#884444',
			fill: false
		}
	]
};

const mcmUsageData = {
	labels: ['16', '64', '256', '1024', '4096'],
	datasets: [
		{
			label: 'Level 0 (2-bit)',
			data: [100.00, 100.00, 100.00, 100.00, 100.00],
			borderColor: '#8884d8',
			fill: false
		},
		{
			label: 'Level 1 (4-bit)',
			data: [100.00, 100.00, 100.00, 100.00, 100.00],
			borderColor: '#82ca9d',
			fill: false
		},
		{
			label: 'Level 2 (8-bit)',
			data: [100.00, 100.00, 100.00, 100.00, 100.00],
			borderColor: '#ff7300',
			fill: false
		},
		{
			label: 'Level 3 (16-bit)',
			data: [100.00, 100.00, 100.00, 100.00, 100.00],
			borderColor: '#0088aa',
			fill: false
		},
		{
			label: 'Level 4 (32-bit)',
			data: [100.00, 100.00, 100.00, 44.79, 0.12],
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

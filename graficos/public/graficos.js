
const errorData = {
	labels: ['16', '64', '256', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
	datasets: [
		{
			label: 'TowerSketch ARE',
			data: [3464.280848, 531.272861, 30.565794, 0.988179, 0.180638, 0.02735, 0.003168, 0.000313, 3.3e-05, 3e-06],
			borderColor: '#8884d8',
			fill: false
		},
		{
			label: 'MCM ARE',
			data: [46607.03977, 46062.515099, 39734.197833, 1611.897009, 729.752151, 282.23044, 75.206412, 19.375268, 8.111313, 3.144842],
			borderColor: '#82ca9d',
			fill: false
		}
	]
};

const towerUsageData = {
	labels: ['16', '64', '256', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
	datasets: [
		{
			label: 'Tower Level Usage',
			data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 94.35, 99.7, 100.0, 100.0, 100.0, 51.23, 76.23, 94.48, 99.7, 100.0, 30.18, 51.27, 76.25, 94.41, 99.69, 16.44, 30.15, 51.27, 76.28, 94.36, 8.59, 16.44, 30.18, 51.24, 76.19, 4.39, 8.59, 16.44, 30.17, 51.17, 2.22, 4.39, 8.59, 16.44, 30.17, 1.12, 2.22, 4.39, 8.59, 16.44],
			borderColor: '#8884d8',
			fill: false
		}
	]
};

const mcmUsageData = {
	labels: ['16', '64', '256', '1024', '2048', '4096', '8192', '16384', '32768', '65536'],
	datasets: [
		{
			label: 'MCM Level Usage',
			data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 56.21, 100.0, 100.0, 100.0, 100.0, 1.18, 100.0, 100.0, 100.0, 99.03, 15.2, 100.0, 100.0, 100.0, 99.99, 0.0, 100.0, 99.51, 99.38, 81.7, 0.0, 99.92, 99.75, 94.03, 28.08, 0.0, 97.29, 91.22, 61.82, 8.67, 0.0],
			borderColor: '#82ca9d',
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
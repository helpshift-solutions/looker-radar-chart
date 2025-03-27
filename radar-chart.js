// Import the dscc library
import * as dscc from '@google/dscc';
import Chart from 'chart.js/auto';

// Subscribe to data and style changes
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });

function drawViz(data) {
  const dimensions = data.tables.DEFAULT.map(row => row.dimension);
  const metrics = data.tables.DEFAULT.map(row => row.metric[0]);

  const ctx = document.getElementById('radarChart').getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: dimensions,
      datasets: [{
        label: 'My Dataset',
        data: metrics,
        backgroundColor: dscc.getColorById('chartColor').color,
        borderColor: dscc.getColorById('chartColor').color,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Custom Radar Chart'
        }
      }
    }
  });
}
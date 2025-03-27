dscc.subscribeToData(function(data) {
  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.height = "100%";
  document.body.appendChild(container);

  const canvas = document.createElement("canvas");
  canvas.id = "radar";
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  const labels = data.tables.DEFAULT.map(row => row.dimension);
  const values = data.tables.DEFAULT.map(row => row.metric[0]);

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Radar Chart',
        data: values,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Custom Radar Chart' }
      },
      scales: {
        r: { beginAtZero: true }
      }
    }
  });
});
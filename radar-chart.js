dscc.subscribeToData(function(data) {
  // ONLY create the chart when Looker Studio provides data!
  const ctx = document.createElement("canvas");
  ctx.id = "radar";
  document.body.appendChild(ctx);

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
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Radar Chart' }
      },
      scales: { r: { beginAtZero: true } }
    }
  });
});

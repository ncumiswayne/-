document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('weeklyChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['週一', '週二', '週三', '週四', '週五', '週六', '週日'],
      datasets: [{
        label: '學習時數 (小時)',
        data: [1, 2.5, 1.5, 3, 2, 0, 1],
        backgroundColor: 'rgba(54, 162, 235, 0.7)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
});

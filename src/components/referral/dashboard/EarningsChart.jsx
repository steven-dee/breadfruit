import { Line } from 'react-chartjs-2';

function EarningsChart({ timeframe }) {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Earnings',
        data: [450, 600, 750, 800, 950, 1200],
        fill: false,
        borderColor: '#04af6e',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`
        }
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default EarningsChart;
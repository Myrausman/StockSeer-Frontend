import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          // Configure x-axis labels based on your data format
          ticks: {
            // Replace 'timestamp' with the actual property name in your data objects for x-axis labels
            labelString: 'timestamp',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            suggestedMin: 0, // Set a suggested minimum value for the y-axis
          },
        },
      ],
    },
  };

  const labels = data.data.map((item) => item.timestamp); // Extract labels from data
  const datasets = [
    {
      label: 'Stock Price', // Label for the dataset
      data: data.data.map((item) => item.price), // Extract price data from data
      backgroundColor: 'rgba(255, 99, 132, 0.5)', // Optional: background color for bars
    },
  ];

  const chartData = {
    labels,
    datasets,
  };

  return <Bar options={options} data={chartData} />;
};

export default Chart;
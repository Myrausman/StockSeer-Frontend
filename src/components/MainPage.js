import React from 'react';


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Stock Prediction (Example)',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const data = {
  labels,
  datasets: [
    {
      label: 'Predicted Closing Price',
      data: [100, 110, 125, 132, 140, 138],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

function MainPage() {
  return (
    <div className="main-page">
      <h1>Stock Prediction</h1>
      
      {/* Add other graphs here using your chosen library */}
    </div>
  );
}

export default MainPage;
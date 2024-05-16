import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Chart from 'chart.js/auto';

function App() {
  const [option, setOption] = useState('SPY'); // Stock symbol
  const [data, setData] = useState(null); // Downloaded data
  const [startDate, setStartDate] = useState(null); // Start date
  const [endDate, setEndDate] = useState(null); // End date
  const [model, setModel] = useState('LinearRegression'); // Selected model
  const [forecastDays, setForecastDays] = useState(5); // Number of days to predict

  // Data fetching function (replace with your actual API call)
  const fetchData = async () => {
    // Replace with your API endpoint
    const url = `https://your-api.com/data?symbol=${option}&start=${startDate}&end=${endDate}`;
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  // Handle user interactions (sidebar changes)
  const handleOptionChange = (newOption) => setOption(newOption.toUpperCase());
  const handleDateChange = (type, date) => {
    if (type === 'start') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };
  const handleModelChange = (newModel) => setModel(newModel);
  const handleForecastChange = (days) => setForecastDays(parseInt(days));

  // Fetch data on component mount and date changes
  useEffect(() => {
    if (startDate && endDate) {
      fetchData();
    }
  }, [startDate, endDate]);

  // Prediction logic and chart generation would go here (replace with your implementation)
  const predictStockPrice = () => {
    // Implement your prediction logic based on the chosen model and data
    // ...
    // Update chart data based on predictions
  };

  return (
    <div className="app">
      <Sidebar
        option={option}
        onOptionChange={handleOptionChange}
        startDate={startDate}
        endDate={endDate}
        onDateChange={handleDateChange}
        model={model}
        onModelChange={handleModelChange}
        forecastDays={forecastDays}
        onForecastChange={handleForecastChange}
      />
      <main>
        <h1>Stock Price Predictions</h1>
        {data && (
          <>
            {/* Render charts using Chart.js */}
            <canvas id="myChart" width="600" height="400"></canvas>
            <button onClick={predictStockPrice}>Predict</button>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
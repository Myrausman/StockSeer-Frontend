import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import Chart from "chart.js/auto";

function App() {
  const [option, setOption] = useState("SPY"); // Stock symbol
  const [data, setData] = useState(null); // Downloaded data
  // const [startDate, setStartDate] = useState(null); // Start date
  // const [endDate, setEndDate] = useState(null); // End date
  const [model, setModel] = useState("LinearRegression"); // Selected model
  const [forecastDays, setForecastDays] = useState(5); // Number of days to predict


 

  return (
    <div className="app">
      <Sidebar
        option={option}
    
      />
      <main>
        <h1>Stock Price Predictions</h1>
        {data && (
          <>
            {/* Render charts using Chart.js */}
            <canvas id="myChart" width="600" height="400"></canvas>
            <button >Predict</button>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

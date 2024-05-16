import React, { useState } from 'react';
import '../styles/Sidebar.css';

const STOCK_SYMBOLS = ['AMZN', 'AAPL', 'GOOG', 'MSFT'];
const STOCK_intervals = ["minutes", "hours", "days"]
const PREDICTION_MODELS = {
  RandomForestRegressor: 'Random Forest',
  LinearRegression: 'Linear Regression',
  ExtraTreesRegressor: 'Extra Trees',
  LSTM: 'LSTM',
  KNeighborsRegressor: 'KNeighborsRegressor',
};
const FORECAST_PERIODS = {
  day_1: '1 day',
  day_2: '2 days',
  day_3: '3 days',
  day_4: '4 days',
  day_5: '5 days',
  day_6: '6 days',
  day_7: '7 days',
};

const Sidebar = () => {
  const [option, setOption] = useState('GOOG'); // Selected stock symbol
  const [model, setModel] = useState('RandomForestRegressor'); // Selected model
  const [forecastPeriod, setForecastPeriod] = useState('day_1'); // Selected forecast period
  const [forecastDays, setForecastDays] = useState(1); // Number of forecast days

  // Handle stock symbol change
  const handleOptionChange = (e) => setOption(e.target.value);

  // Handle model change
  const handleModelChange = (e) => setModel(e.target.value);

  // Handle forecast period change (reset forecast days if period changes)
  const handlePeriodChange = (e) => {
    setForecastPeriod(e.target.value);
    setForecastDays(1); // Reset forecast days on period change
  };

  // Handle forecast days change (optional, can be removed if not needed)
  const handleForecastChange = (newForecastDays) => {
    setForecastDays(newForecastDays);
  };

  return (
    <div className="sidebar">
      <h2>Stock Selection</h2>
      <label htmlFor="Symbol">Symbol:</label>
      <select id="symbol" value={option} onChange={handleOptionChange}>
        {STOCK_SYMBOLS.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol}
          </option>
        ))}
      </select>

      <h2>Prediction Options</h2>
      <label htmlFor="model">Model:</label>
      <select id="model" value={model} onChange={handleModelChange}>
        {Object.entries(PREDICTION_MODELS).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>

      <h2>Prediction Period</h2>
      <fieldset>
        <legend>Forecast For:</legend>
        {Object.entries(FORECAST_PERIODS).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              id={key}
              name="forecastPeriod"
              value={key}
              checked={forecastPeriod === key}
              onChange={handlePeriodChange}
              style={{ marginRight: '10px' }} // Optional margin for spacing
            />
            <label htmlFor={key}> {value}</label>
          </div>
        ))}


      </fieldset>
      <h2>Prediction Interval</h2>
      <label htmlFor="Interval">Interval:</label>
      <select id="interval" value={option} onChange={handleOptionChange}>
        {STOCK_intervals.map((interval) => (
          <option key={interval} value={interval}>
            {interval}
          </option>
        ))}
      </select>
    </div>

  );
};

export default Sidebar;
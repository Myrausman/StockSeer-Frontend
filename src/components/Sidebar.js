import React, { useState } from "react";
import "../styles/Sidebar.css";

const STOCK_SYMBOLS = ["AMZN", "AAPL", "GOOG", "MSFT"];
const STOCK_intervals = ["minutes", "hours", "days"];
const PREDICTION_MODELS = {
  RandomForestRegressor: "Random Forest",
  LinearRegression: "Linear Regression",
  ExtraTreesRegressor: "Extra Trees",
  LSTM: "LSTM",
  KNeighborsRegressor: "KNeighborsRegressor",
};
// const FORECAST_PERIODS = {
//   day_1: '1 day',
//   day_2: '2 days',
//   day_3: '3 days',
//   day_4: '4 days',
//   day_5: '5 days',
//   day_6: '6 days',
//   day_7: '7 days',
// };

const Sidebar = () => {
  // const fetchData = async () => {
  //   console.log(selectedSymbol, modelname, predictionInterval);
  // };

  const [selectedSymbol, setSelectedSymbol] = useState("");

  const [modelname, setmodelname] = useState("");
  const [predictionInterval, setpredictionInterval] = useState("");

  const fetchData = async () => {
    console.log(selectedSymbol, modelname, predictionInterval);

    const response = await fetch(
      `http://127.0.0.1:8000/api/predict?time_diff_value=${predictionInterval}&model_type=${modelname}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedSymbol),
      }
    );
  
  };

  const handleChange = (event) => {
    setSelectedSymbol(event.target.value);
  };

  const handlemodel = (event) => {
    setmodelname(event.target.value);
  };
  const handlepredictionInteval = (event) => {
    setpredictionInterval(event.target.value);
  };

  return (
    <div className="sidebar">
      <h2>Stock Selection</h2>
      <label htmlFor="Symbol">Symbol:</label>
      <select id="symbol" value={selectedSymbol} onChange={handleChange}>
        {STOCK_SYMBOLS.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol}
          </option>
        ))}
      </select>

      <h2>Prediction Options</h2>
      <label htmlFor="model">Model:</label>
      <select id="model" value={modelname} onChange={handlemodel}>
        {Object.entries(PREDICTION_MODELS).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>

      <h2>Prediction Interval</h2>
      <label htmlFor="Interval">Interval:</label>
      <select
        id="interval"
        value={predictionInterval}
        onChange={handlepredictionInteval}
      >
        {STOCK_intervals.map((interval) => (
          <option key={interval}>{interval}</option>
        ))}
      </select>
      <button onClick={fetchData}>click me</button>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";

function App() {

  const [alldata, setAlldata] = useState(null);

  console.log(alldata)
  return (
    <div className="app">
      <Sidebar
        setAlldata = {setAlldata}
      />
      <main>
        <h1>Stock Price Predictions</h1>
        
        {alldata && (
          <>
          <h2>{alldata.company} Company</h2>
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <img src={`http://127.0.0.1:8000${alldata.plot_image}`} alt="Prediction Plot" style={{ maxWidth: '80%', height: 'auto' }} />
          </div>
          <table className="styled-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Close</th>
                  <th>Predictions</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(alldata.validation_table.Close).map(([date, close], index) => (
                  <tr key={index}>
                    <td>{date}</td>
                    <td>{close}</td>
                    <td>{alldata.validation_table.Predictions[date]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

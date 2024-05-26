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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={`http://127.0.0.1:8000${alldata.plot_image}?${new Date().getTime()}`}
            alt="Prediction Plot"
            style={{ maxWidth: '80%', height: 'auto' }}
          />
        </div>
          </div>
          <table className="styled-table px-2">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Close</th>
                  <th>Predictions</th>
                </tr>
              </thead>
              <tbody>
              {Object.entries(alldata.validation_table.Close).map(([date, close], index) => {
                  const dateObj = new Date(date);
                  const formattedDate = date.includes('T') ? 
                    dateObj.toLocaleString() : dateObj.toLocaleDateString();

                  return (
                    <tr key={index}>
                      <td>{formattedDate}</td>
                      <td>{close.toFixed(2)}</td>
                      <td>{alldata.validation_table.Predictions[date].toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

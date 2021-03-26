import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

const gitHubUrl = "http://127.0.0.1:8080/48d75c359ce4";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    console.log(jsonData);
    setUserData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{userData.question}</h2>
      </header>
      <div className="user-container">
        <div><pre>{JSON.stringify(userData.results, null, 2) }</pre></div>
        <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
      </div>
    </div>
  );
}

export default App;



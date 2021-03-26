import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

const gitHubUrl = "http://127.0.0.1:8080/48d75c359ce4";

function App() {
  const [userQuestion, setUserData] = useState({});
  const [graphLabels, setGraphLabels] = useState({});
  const [graphScores, setGraphScores] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    console.log(jsonData);
    setUserData(jsonData);
    var names = jsonData.results.map(x => x.label);
    setGraphLabels(names)
    var scores = jsonData.results.map(x => x.score[0]);
    setGraphScores(scores);
  };

  return (
    <div className="App">
        <Plot
        data={[
          {
            x: graphLabels,
            y: graphScores,
            type: 'bar',
            name: 'bar chart example'
          },
        ]}
        layout={ {width: 400, height: 400, title: userQuestion.question} }
      />
      </div>
  );
}

export default App;



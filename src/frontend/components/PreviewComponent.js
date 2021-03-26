import React, { useState, useEffect } from "react";
// import "./App.css";

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
        {/* {userData.results.map(function(movie, i) {
      return <h3 key={'movie-'+ i}>{movie.id}</h3>
    })} */}
        {/* <h5>{userData.results[0].label}</h5> */}
        {/* <h5 className="info-item">{userData.results[1].label}</h5>
        <h5 className="info-item">{userData.results[2].label}</h5> */}
      </div>
    </div>
  );
}

export default App;
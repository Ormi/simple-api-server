import React, { useState, useEffect } from 'react';
const Home = () => {

  useEffect(async function () {
      const url = 'http://127.0.0.1:8080/48d75c359ce4';
      const response =  await fetch(url);
	  console.log(response)
      const data = await response.json();
      console.log(data)
    });

  return(
    <div>
      <h1>Home Page</h1>
      <p>{data}</p>
    </div>
  )
}

export default Home;
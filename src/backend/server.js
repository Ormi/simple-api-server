'use strict';
/**
 * @name server.js
 * @description Backend server for simple application for Mentimeter example
 * @author Michal Ormos
 * @date 27.3.2021
 * @copyright MIT
 */

// Libraries
const express = require('express');
const fetch = require('node-fetch');
const path = require("path");

// Constants
const PORT = 8080;
const STATIC_ASSETS_PATH = path.resolve(`${__dirname}/../../static`);
const HOST = '0.0.0.0';
// @TODO rewrite this in more global universal API manner
const urlQuestion = "https://api.mentimeter.com/questions/48d75c359ce4";
const urlResults = "https://api.mentimeter.com/questions/48d75c359ce4/result";

// Vars
let questionPayload = "";
let resultsPayload = "";
let settings = { method: "Get" };
let subset = "";

// Async promise fetch
// TODO Definitely rewrite this to something async a get rid of that timeout
// TODO Check error messages and handle them
fetch(urlQuestion, settings)
    .catch(error => console.log(error))
    .then(res => res.json())
    .then((json) => {
        questionPayload = json;
    });
fetch(urlResults, settings)
    .catch(error => console.log(error))
    .then(res => res.json())
    .then((json) => {
        resultsPayload = json;
    });
setTimeout(() => {
  var merged_object = JSON.parse((JSON.stringify(questionPayload) + JSON.stringify(resultsPayload)).replace(/}{/g,","));
  subset = (({question, results}) => ({question, results}))(merged_object);
  console.log(subset);
}, 3000);

// App
// TODO Endpoint logic improvments
// TODO Handling error states
// TODO Add security for to many requests on bad endpoints
const app = express();
// Serve front end assets which have been built by webpack
app.use("/static", express.static(STATIC_ASSETS_PATH));
app.use(express.static('public'))
app.get("/", (request, response) => {
  console.log("Client fetches data");
	response.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <div id="container"></div>
        <script src="/static/bundle.js/main.js"></script>
      </body>
    </html>
  `);
});
app.get('/:id', (req, res) => {
  if (req.params.id == questionPayload.id) {
    res.send(subset);
  } else {
    res.send('This endpoint is empty - id: ' + req.params.id);
  }
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
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
const HOST = '127.0.0.1';
const urlQuestion = "https://api.mentimeter.com/questions/48d75c359ce4";
const urlResults = "https://api.mentimeter.com/questions/48d75c359ce4/result";

// Vars
let questionPayload = "";
let resultsPayload = "";
let finalPayload;
let settings = { method: "Get" };
let subset = "";

// Async promise fetch
fetch(urlQuestion, settings)
    .catch(error => console.log(error))
    .then(res => res.json())
    .then((json) => {
        // console.log(json);
        questionPayload = json;
    });
fetch(urlResults, settings)
    .catch(error => console.log(error))
    .then(res => res.json())
    .then((json) => {
        // console.log(json);
        resultsPayload = json;
    });

function extend(target) {
  let sources = [].slice.call(arguments, 1);
  sources.forEach(function (source) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
    });
    return target;
  }

setTimeout(() => {
  var merged_object = JSON.parse((JSON.stringify(questionPayload) + JSON.stringify(resultsPayload)).replace(/}{/g,","));
  subset = (({question, results}) => ({question, results}))(merged_object);
  console.log(subset);
}, 2000);

// App
const app = express();
// Serve front end assets which have been built by webpack
app.use("/static", express.static(STATIC_ASSETS_PATH));
app.get("/", (request, response) => {
  console.log("Client fetches data");
	response.send(`
<!DOCTYPE html>
<html>
	<body>
		<div id="container"></div>
		<script src="/static/bundle.js"></script>
	</body>
</html>
	`);
});
app.get('/3', (req, res) => {
  res.send('3 ' + req.params.id);
});
app.get('/:id', (req, res) => {
  if (req.params.id == questionPayload.id) {
    res.send(subset);
  } else {
    res.send('id: ' + req.params.id);
  }
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
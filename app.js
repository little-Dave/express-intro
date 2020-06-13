const express = require('express');

const app = express();

app.use("/", (request, response, next) => {
  console.log(`This is Neo. Greetings.
  Matrix 4 premiers in theatres (we hope -- I'm looking at you COVID-19) 
  April, 2022. I'll be the guy handing out red pills. Hope to see you there. Bottoms up.`);
  next();
});

app.use("/spacex", (request, response, next) => {
  response.send("<h1>OMG Elon Mush!!! oops, I meant Musk. Elon <em>Musk</em>.</h1>");
});

app.use("/", (request, response, next) => {
  response.send("<h2>why would you come to the void?</h2>");
});

app.listen(3000);

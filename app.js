const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/", (request, response, next) => {
  console.log(`This is Neo. Greetings.
  Matrix 4 premiers in theatres (we hope -- I'm looking at you COVID-19) 
  April, 2022. I'll be the guy handing out red pills. Hope to see you there. Bottoms up.`);
  next();
});

app.use("/spacex", (request, response, next) => {
  response.send("<h1>OMG Elon Mush!!! oops, I meant Musk. Elon <em>Musk</em>.</h1>");
});

app.use("/add-song", (request, response, next) => {
  response.send("<form action='/song' method='POST'><input type='text' name='title' placeholder='song title here'><button type='submit'>Add</button></form>");
})

app.use("/", (request, response, next) => {
  response.send("<h2>welcome to the void</h2>");
});

app.listen(3000);

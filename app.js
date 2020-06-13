const express = require('express');

const app = express();

app.use((request, response, next) => {
  console.log("Greetings, from inside the middleware");
  next();
});

app.use((request, response, next) => {
  console.log("Greetings, from inside the middleware... do you hear an echo?");
  response.send("<h1>OMG Elon Mush!!! oops, I meant Musk. Elon <em>Musk</em>.</h1>")
});

app.listen(3000);

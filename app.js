const http = require('http');

const express = require('express');

const app = express();

app.use((request, response, next) => {
  console.log("Greetings, from inside the middleware");
  next();
});

app.use((request, response, next) => {
  console.log("Greetings, from inside the middleware... do you hear an echo?");
});

const server = http.createServer(app);

server.listen(3000);

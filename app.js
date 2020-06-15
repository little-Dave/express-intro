const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const playerRoutes = require('./routes/player');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(playerRoutes);

app.use("/", (request, response, next) => {
  response.status(404).send(`<h1>Sorry,</h1>
    <p>We couldn't find <span style="color: blue; font-family: sans-serif;">localhost:3000${request.url}</span></p>`
    );
});

app.listen(3000);

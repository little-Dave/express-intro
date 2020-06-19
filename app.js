const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const playerRoutes = require('./routes/player');

app.use(bodyParser.urlencoded({extended: false}));

app.use("/admin", adminRoutes);
app.use(playerRoutes);

app.use("/", (request, response, next) => {
  response.status(404).sendFile(path.join(__dirname, "./", "views", "not-found.html"));
});

app.listen(3000);



const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./helpers/path');
const adminRoutes = require('./routes/admin');
const playerRoutes = require('./routes/player');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(playerRoutes);

app.use("/", (request, response, next) => {
  response.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);



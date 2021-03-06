const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "pug");
 
const rootDir = require('./helpers/path');
const adminData = require('./routes/admin');
const playerRoutes = require('./routes/player');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
 
app.use("/admin", adminData.routes);
app.use(playerRoutes);

app.use("/", (request, response, next) => {
  response.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);



const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const playerRoutes = require('./routes/player');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(playerRoutes);

app.listen(3000);

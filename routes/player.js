const path = require('path');

const rootDir = require('../helpers/path');

const express = require('express');

const router = express.Router();

router.get("/", (request, response, next) => {
  response.sendFile(path.join(rootDir, "views", "player.html"))
});

module.exports = router;
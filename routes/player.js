const path = require('path');

const express = require('express');

const router = express.Router();

router.get("/", (request, response, next) => {
  response.sendFile(path.join(__dirname, "../", "views", "player.html"))
});

module.exports = router;
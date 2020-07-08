const path = require('path');

const rootDir = require('../helpers/path');
const adminData = require('./admin');

const express = require('express');
const router = express.Router();

router.get("/", (request, response, next) => {
  const songs = adminData.songs;
  response.render("player", {songs: songs, docTitle: " My Player"});
  // console.log(adminData.songs);
  // response.sendFile(path.join(rootDir, "views", "player.html"))
});

module.exports = router;
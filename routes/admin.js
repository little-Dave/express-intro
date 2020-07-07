const path = require('path');

const rootDir = require('../helpers/path');

const express = require('express');

const router = express.Router();

const songs = [];

router.get("/add-song", (request, response, next) => {
  response.sendFile(path.join(rootDir, "views", "admin.html"));
});

router.post("/song", (request, response, next) => {
  songs.push({title: request.body.title});
  response.redirect("/");
});

exports.routes = router;
exports.songs = songs;
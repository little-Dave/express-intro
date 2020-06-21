const path = require('path');

const rootDir = require('../helpers/path');

const express = require('express');

const router = express.Router();

router.get("/add-song", (request, response, next) => {
  response.sendFile(path.join(rootDir, "views", "admin.html"));
});

router.post("/song", (request, response, next) => {
  console.log(request.body);
  response.redirect("/");
});

module.exports = router;
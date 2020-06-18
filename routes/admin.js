const path = require('path');

const express = require('express');

const router = express.Router();

router.get("/add-song", (request, response, next) => {
  response.sendFile(path.join(__dirname, "../", "views", "admin.html"));
});

router.post("/song", (request, response, next) => {
  console.log(request.body);
  response.redirect("/");
});

module.exports = router;
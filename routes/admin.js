const express = require('express');

const router = express.Router();

router.get("/add-song", (request, response, next) => {
  response.send("<form action='/song' method='POST'><input type='text' name='title' placeholder='song title here'><button type='submit'>Add</button></form>");
});

router.post("/song", (request, response, next) => {
  console.log(request.body);
  response.redirect("/");
});

module.exports = router;
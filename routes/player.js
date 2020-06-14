const express = require('express');

const router = express.Router();

router.get("/", (request, response, next) => {
  response.send("<h2>awesome mix</h2>");
});

module.exports = router;
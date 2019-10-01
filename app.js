const express = require("express");

const app = express();

const PORT = process.env.PORT || 6969;

app.listen(PORT, function() {
  console.log("Application is running at http://localhost:${PORT}/");
});

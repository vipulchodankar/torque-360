const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");

const app = express();

// EJS SETUP
app.use(expressLayouts);
app.set("view engine", "ejs");

// Static Assets
app.use(express.static("public"));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/admin", require("./routes/admin"));
app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 6969;

app.listen(PORT, function() {
  console.log(`Application is running at http://localhost:${PORT}/`);
});

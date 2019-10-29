const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
// Load User model
const User = require("../models/User");

// Login Page
router.get("/login", (req, res) =>
  // res.render("login", { user: req.user, res: res })
  res.render("loginUser", { user: req.user })
);

// Register Page
router.get("/register", (req, res) =>
  // res.render("register", { user: req.user, res: res })
  res.render("registerUser", { user: req.user })
);

module.exports = router;

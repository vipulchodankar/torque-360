const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
// Load User model
const Admin = require("../models/Admin");

// Login Page
router.get("/login", (req, res) => res.render("login", {user: req.user, res: res}));

// Register Page
router.get("/register", (req, res) => res.render("register", {user: req.user, res: res}));

// Register Request
router.post("/register", (req, res) => {
  const { firstname, lastname, email, password, password2 } = req.body;
  let errors = [];
  // Check Required Fields
  if (!firstname || !lastname || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields." });
  }

  // Check if passwords match
  if (password !== password2) {
    errors.push({ msg: "Passwords do not match." });
  }

  // Check if password length > 6
  if (password.length < 6) {
    errors.push({ msg: "Password should be atleast 6 characters." });
  }

  if (errors.length > 0) {
    // Send data back to register view
    res.render("register", {
      errors,
      firstname,
      lastname,
      email,
      phonenumber,
      password,
      password2
    });
  } else {
    // Create User
    const newAdmin = new Admin({
      firstname,
      lastname,
      email,
      phonenumber,
      password
    });

    // Hash Password
    bcrypt.genSalt(10, (err, salt) =>
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        // Set Password to Hashed
        newUser.password = hash;
        // Save User
        newUser
          .save()
          .then(user => {
            req.flash("success_msg", "You are now registered and can log in!");

            res.redirect("/users/login");
          })
          .catch(err => console.log(err));
      })
    );
  }
});

// Login Request
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/admin/login",
    failureFlash: true
  })(req, res, next);
});

// Logout Request
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out.");
  res.redirect("/admin/login");
});

// For invalid URLS
router.get("*", (req, res) => {
  res.render("404", {
    link: "/admin/login",
    msg: "Go to login"
  });
});

module.exports = router;
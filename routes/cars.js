const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const passport = require("passport");
// Load User model
const Car = require("../models/Cars");

router.get("/add", ensureAuthenticated, (req, res) => res.render("addCar"));

router.get("/view", (req, res) => {
  res.render("view");
});

router.post("/add", (req, res) => {
  const { model, company } = req.body;

  let errors = [];
  // Check Required Fields
  if ( false ) {
    errors.push({ msg: "Please fill in all fields." });
  }

  if (errors.length > 0) {
    // Send data back to register view
    res.render("addCar", {
      errors,
      model,
      company
    });
  } else {
    // Create Car
    const newCar = new Cars({
      model,
      company
    });

    newCar
      .save()
      .then(() => {
        req.flash(`success_msg`, `${model} was added!`);

        res.redirect("/cars/add");
      })
      .catch(err => console.log(err));
  }
});

// For invalid URLS
// router.get("*", (req, res) => {
//   res.render("404", {
//     link: "/Cars/view",
//     msg: "View all instead?"
//   });
// });

module.exports = router;
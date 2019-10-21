const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const passport = require("passport");
// Load User model
const Cars = require("../models/Cars");

router.get("/add", ensureAuthenticated, (req, res) => res.render("addCar"));

router.get("/view", function(req, res) {
  // mongoose operations are asynchronous, so you need to wait
  Cars.find({}, function(err, data) {
    // note that data is an array of objects, not a single object!
    res.render("view", {
      cars: data
    });
  });
});

router.post("/add", (req, res) => {
  const {
    model,
    company,
    mileage,
    cylinders,
    clearance,
    horsepower,
    topspeed,
    airbags,
    fueltype
  } = req.body;

  let errors = [];
  // Check Required Fields
  if (
    !model ||
    !company ||
    !mileage ||
    !cylinders ||
    !clearance ||
    !horsepower ||
    !topspeed ||
    !airbags ||
    !fueltype
  ) {
    errors.push({ msg: "Please fill in all fields." });
  }

  if (errors.length > 0) {
    // Send data back to addCar view
    res.render("addCar", {
      errors,
      model,
      company,
      mileage,
      cylinders,
      clearance,
      horsepower,
      topspeed,
      airbags,
      fueltype
    });
  } else {
    // Create Car
    const newCar = new Cars({
      model,
      company,
      mileage,
      cylinders,
      clearance,
      horsepower,
      topspeed,
      airbags,
      fueltype
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

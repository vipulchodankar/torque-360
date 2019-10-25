const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const passport = require("passport");
// Load Cars model
const Cars = require("../models/Cars");
const Admin = require("../models/Admin");

router.get("/add", ensureAuthenticated, (req, res) =>
  res.render("addCar", { user: req.user })
);

router.post("/add", (req, res) => {
  let editor = req.user.email;

  const {
    model,
    variant,
    company,
    mileage,
    cylinders,
    clearance,
    horsepower,
    topspeed,
    airbags,
    fueltype,
    image,
    price
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
    !fueltype ||
    !price
  ) {
    errors.push({ msg: "Please fill in all fields." });
  }

  if (errors.length > 0) {
    // Send data back to addCar view
    res.render("addCar", {
      errors,
      model,
      variant,
      company,
      mileage,
      cylinders,
      clearance,
      horsepower,
      topspeed,
      airbags,
      fueltype,
      image,
      price,
      user: req.user
    });
  } else {
    // Create Car
    const newCar = new Cars({
      model,
      variant,
      company,
      mileage,
      cylinders,
      clearance,
      horsepower,
      topspeed,
      airbags,
      fueltype,
      image,
      price,
      editor
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

router.get("/view", function(req, res) {
  // mongoose operations are asynchronous, so you need to wait
  Cars.find({}, function(err, data) {
    // note that data is an array of objects, not a single object!
    res.render("view", {
      user: req.user,
      cars: data
    });
  });
});

router.get("/update", ensureAuthenticated, (req, res) =>
  res.render("updateCar", { user: req.user })
);

router.get("/search", (req, res) =>
  res.render("searchCar", { user: req.user })
);

router.get("/searchCar", function(req, res) {
  // mongoose operations are asynchronous, so you need to wait
  Cars.find({}, function(err, data) {
    // note that data is an array of objects, not a single object!
    data.forEach((car) => {
      if( car == req.params.model) {
        res.render("view", {
          user: req.user,
          cars: car
        });
      }
    });
  });
});

router.get("/delete", ensureAuthenticated, (req, res) =>
  res.render("deleteCar", { user: req.user })
);

// For invalid URLS
// router.get("*", (req, res) => {
//   res.render("404", {
//     link: "/Cars/view",
//     msg: "View all instead?"
//   });
// });

module.exports = router;

const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const passport = require("passport");
// Load User model
const Pothole = require("../models/Cars");

router.get("/add", ensureAuthenticated, (req, res) => res.render("addCar"));

router.get("/view", (req, res) => {
  res.render("view");
});

router.post("/add", (req, res) => {
  const { y, x, image } = req.body;

  let errors = [];
  // Check Required Fields
  if ( false ) {
    errors.push({ msg: "Please fill in all fields." });
  }

  if (errors.length > 0) {
    // Send data back to register view
    res.render("addPothole", {
      errors,
      x,
      y,
      image
    });
  } else {
    // Create Pothole
    const newCar = new Cars({
      x,
      y,
      image
    });

    newPothole
      .save()
      .then(() => {
        req.flash("success_msg", "Another step towards a safer journey.");

        res.redirect("/cars/add");
      })
      .catch(err => console.log(err));
  }
});

// For invalid URLS
// router.get("*", (req, res) => {
//   res.render("404", {
//     link: "/potholes/view",
//     msg: "View all instead?"
//   });
// });

module.exports = router;
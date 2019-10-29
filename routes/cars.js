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

router.post("/add", ensureAuthenticated, (req, res) => {
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

router.post("/update", ensureAuthenticated, (req, res) => {
  const { model, field, updatedValue } = req.body;
  // console.log(
  //   `model: ${model} \n field: ${field} \n updatedValue: ${updatedValue}`
  // );

  let errors = [];
  // Check Required Fields
  if (!model || !field || !updatedValue) {
    errors.push({ msg: "Please fill in all fields." });
  }

  if (errors.length > 0) {
    // Send data back to addCar view
    res.render("updateCar", {
      errors,
      model,
      field,
      updatedValue,
      user: req.user
    });
  } else {
    switch (field) {
      case "model": {
        console.log("model update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { model: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "variant": {
        console.log("variant update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { variant: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "company": {
        console.log("company update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { company: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "mileage": {
        console.log("mileage update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { mileage: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "cylinders": {
        console.log("company update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { cylinders: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "clearance": {
        console.log("clearance update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { clearance: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "horsepower": {
        console.log("horsepower update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { horsepower: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "topspeed": {
        console.log("topspeed update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { topspeed: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "airbags": {
        console.log("airbags update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { airbags: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "fueltype": {
        console.log("fueltype update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { fueltype: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "image": {
        console.log("image link update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { image: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      case "price": {
        console.log("price update selected");
        Cars.findOneAndUpdate(
          { model: model },
          { price: updatedValue },
          function(err, product) {
            if (err) return next(err);
            req.flash(`success_msg`, `${model} was updated!`);
            res.redirect("/cars/update");
          }
        );
        break;
      }
      default:{
        console.log("default case");
        req.flash("error_msg", `${model} was not updated!`);
        res.redirect("/cars/update");
      }
        
    }
  }
});

router.get("/search", (req, res) =>
  res.render("searchCar", { user: req.user })
);

router.post("/search", function(req, res) {
  const { model } = req.body;
  Cars.find({ model: model }, function(err, data) {
    if (data == ``) {
      // return next(err);
      req.flash("error_msg", `${model} not found`);
      res.render("searchCar", { user: req.user });
    } else {
      req.flash(`success_msg`, `${model} was found!`);
      res.render("view", {
        user: req.user,
        cars: data
      });
      // res.redirect("/cars/search");
    }
  });
});

router.get("/delete", ensureAuthenticated, (req, res) =>
  res.render("deleteCar", { user: req.user })
);

router.post("/delete", ensureAuthenticated, (req, res) => {
  const { model } = req.body;
  Cars.findOneAndDelete({ model: model }, function(err) {
    if (err) {
      // return next(err);
      req.flash("error_msg", `${model} not found`);
      res.redirect("/cars/delete");
    } else {
      req.flash(`success_msg`, `${model} was deleted!`);
      res.redirect("/cars/delete");
    }
  });
});

// For invalid URLS
// router.get("*", (req, res) => {
//   res.render("404", {
//     link: "/Cars/view",
//     msg: "View all instead?"
//   });
// });

module.exports = router;

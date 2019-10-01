const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  mileage: {
    type: String,
    required: true
  },
  cylinders: {
    type: String,
    required: true
  },
  clearance: {
    type: String,
    required: true
  },
  horsepower: {
    type: String,
    required: true
  },
  topspeed: {
    type: String,
    required: true
  },
  airbags: {
    type: String,
    required: true
  },
  fueltype: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;

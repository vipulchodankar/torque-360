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
    type: Number,
    required: true
  },
  cylinders: {
    type: Number,
    required: true
  },
  clearance: {
    type: Number,
    required: true
  },
  horsepower: {
    type: Number,
    required: true
  },
  topspeed: {
    type: Number,
    required: true
  },
  airbags: {
    type: Number,
    required: true
  },
  fueltype: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  editor: {
    type: String
  },
  variant: {
    type: String  
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;

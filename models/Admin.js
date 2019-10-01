const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;

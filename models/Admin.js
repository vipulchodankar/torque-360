const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phonenumber: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;

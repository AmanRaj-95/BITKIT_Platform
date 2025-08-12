// models/User.js
const mongoose = require("mongoose");
const {forumConn}=require("../../config/connectDB")

const userSchema = new mongoose.Schema({
  firebaseUid: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  photoURL: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = forumConn.model("Users", userSchema);

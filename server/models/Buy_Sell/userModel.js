const mongoose = require("mongoose");
const { buySellConn } = require("../../config/connectDB"); // Import the connection for Buy_Sell DB

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    // password: {
    //   type: String,
    //   required: true,
    // },
    role: {
      type: String,
      default: "user",
    },
    status: {
      type: String,
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

// const User = mongoose.model("users", userSchema);
const User = buySellConn.model("users", userSchema); 

module.exports = User;

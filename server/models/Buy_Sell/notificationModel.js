const mongoose = require("mongoose");
const { buySellConn } = require("../../config/connectDB"); // Import the connection for Buy_Sell DB

const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    onClick: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Notification = buySellConn.model("notifications", notificationSchema);

module.exports = Notification;

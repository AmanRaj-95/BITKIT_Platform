const mongoose = require("mongoose");
const { buySellConn } = require("../../config/connectDB"); // Import the connection for Buy_Sell DB

const bidSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    bidAmount: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    hostel: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Bid = buySellConn.model("bids", bidSchema);

module.exports = Bid;

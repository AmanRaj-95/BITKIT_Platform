const mongoose = require("mongoose");
const { buySellConn } = require("../../config/connectDB"); // Import the connection for Buy_Sell DB

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    hostel: {
      type: Number,
      required: true,
    },
    // images: {
    //   type: Array,
    //   default: [],
    //   required: true,
    // },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        public_id: {
          type: String,
          required: true,
        },
      },
    ],

    billAvailable: {
      type: Boolean,
      default: false,
      required: true,
    },
    warrantyAvailable: {
      type: Boolean,
      default: false,
      required: true,
    },
    accessoriesAvailable: {
      type: Boolean,
      default: false,
      required: true,
    },
    boxAvailable: {
      type: Boolean,
      default: false,
      required: true,
    },
    showBidsOnProductPage: {
      type: Boolean,
      default: false,
      required: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = buySellConn.model("products", productSchema);

module.exports = Product;

// config/connectDB.js
require("dotenv").config();
const mongoose = require("mongoose");
const colors = require("colors");

const mongoURI = process.env.MONGO_URI; // MongoDB connection URI

// ✅ Connect to Disc_Forum DB
const forumConn = mongoose.createConnection(mongoURI, {
  dbName: "Disc_Forum",
});
forumConn.on("connected", () => {
  console.log("✅ Connected to Disc_Forum".green.bold);
});
forumConn.on("error", (err) => {
  console.error(`❌ Disc_Forum connection failed: ${err.message}`.red.bold);
});

// ✅ Connect to Academics DB
const academicsConn = mongoose.createConnection(mongoURI, {
  dbName: "Academics",
});
academicsConn.on("connected", () => {
  console.log("✅ Connected to Academics".cyan.bold);
});
academicsConn.on("error", (err) => {
  console.error(`❌ Academics connection failed: ${err.message}`.red.bold);
});

// ✅ Connect to Buy_Sell DB
const buySellConn = mongoose.createConnection(mongoURI, {
  dbName: "Buy_Sell",
});
buySellConn.on("connected", () => {
  console.log("✅ Connected to Buy_Sell".magenta.bold);
});
buySellConn.on("error", (err) => {
  console.error(`❌ Buy_Sell connection failed: ${err.message}`.red.bold);
});

// ✅ Export all connections
module.exports = {
  forumConn,       // for Disc_Forum
  academicsConn,   // for Academics
  buySellConn,     // for Buy_Sell
};

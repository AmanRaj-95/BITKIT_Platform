const mongoose = require("mongoose");
const {academicsConn} = require("../../config/connectDB");

// defining the developerSchema
const developerSchema = mongoose.Schema({
    id: Number,
    name: String,
    Title: String,
    Roll_Number: String,
    image: String,
    Profile: String,
    Section: String,
})

const Developer = academicsConn.model("Developer", developerSchema);
module.exports = Developer;
const mongoose = require("mongoose");

const airportSchema = new mongoose.Schema({
  city: String,
  code: String,
  airportName: String
});

module.exports = mongoose.model("Airport", airportSchema);

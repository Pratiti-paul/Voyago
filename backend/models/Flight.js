const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true
  },
  flightNumber: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  departureDate: {
    type: Date,
    required: true
  },
  departureTime: String,
  arrivalTime: String,
  duration: String,

  price: {
    type: Number,
    required: true
  },

  availableSeats: {
    type: Number,
    default: 60
  },

  class: {
    type: String,
    enum: ["Economy", "Business"],
    default: "Economy"
  },

  refundable: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("Flight", flightSchema);

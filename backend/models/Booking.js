const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight"
  },

  passengers: [
    {
      name: String,
      age: Number,
      gender: String
    }
  ],

  totalPrice: Number,

  bookingStatus: {
    type: String,
    enum: ["CONFIRMED", "CANCELLED"],
    default: "CONFIRMED"
  }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);

const Flight = require("../models/Flight");

exports.flights = [
  {
    airline: "IndiGo",
    flightNumber: "6E-202",
    from: "Delhi",
    to: "Mumbai",
    departureDate: new Date("2026-02-10"),
    departureTime: "09:00",
    arrivalTime: "11:15",
    duration: "2h 15m",
    price: 4500,
    refundable: false
  }
];

const Booking = require("../models/Booking");
const Flight = require("../models/Flight");

exports.bookFlight = async (req, res) => {
  const { flightId, passengers } = req.body;

  const flight = await Flight.findById(flightId);

  if (flight.availableSeats < passengers.length) {
    return res.status(400).json({ message: "Not enough seats" });
  }

  flight.availableSeats -= passengers.length;
  await flight.save();

  const booking = await Booking.create({
    flightId,
    passengers,
    totalPrice: passengers.length * flight.price
  });

  res.json(booking);
};

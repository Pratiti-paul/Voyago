const Flight = require("../models/Flight");
const Airport = require("../models/Airport");

exports.searchFlights = async (req, res) => {
  const { from, to, date, minPrice, maxPrice, airline } = req.query;

  let query = {
    from,
    to,
    departureDate: new Date(date)
  };

  if (airline) query.airline = airline;
  if (minPrice && maxPrice) {
    query.price = { $gte: minPrice, $lte: maxPrice };
  }

  const flights = await Flight.find(query).sort({ price: 1 });

  res.json(flights);
};

exports.getFlightById = async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  res.json(flight);
};

exports.getAllAirports = async (req, res) => {
  const airports = await Airport.find();
  res.json(airports);
};

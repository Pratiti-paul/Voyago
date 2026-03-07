const Flight = require("../models/Flight");
const Airport = require("../models/Airport");
const { generateMockFlights } = require("../utils/mockDataGenerator");

exports.searchFlights = async (req, res) => {
  try {
    const { from, to, date, minPrice, maxPrice, class: flightClass } = req.query;

    // Validate required parameters
    if (!from || !to || !date) {
      return res.status(400).json({
        error: "Missing required parameters: from, to, date",
      });
    }

    // Generate mock flights dynamically
    const mockFlights = generateMockFlights(
      from,
      to,
      date,
      flightClass || "Economy",
      8
    );

    // Apply price filters if provided
    let filteredFlights = mockFlights;
    if (minPrice || maxPrice) {
      filteredFlights = mockFlights.filter((flight) => {
        const price = flight.price;
        if (minPrice && price < parseInt(minPrice)) return false;
        if (maxPrice && price > parseInt(maxPrice)) return false;
        return true;
      });
    }

    res.json({
      success: true,
      count: filteredFlights.length,
      data: filteredFlights,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    
    if (!flight) {
      return res.status(404).json({
        error: "Flight not found",
      });
    }

    res.json(flight);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getAllAirports = async (req, res) => {
  try {
    const airports = await Airport.find();
    res.json(airports);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

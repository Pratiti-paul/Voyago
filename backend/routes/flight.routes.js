const express = require("express");
const {
  searchFlights,
  getFlightById,
  getAllAirports
} = require("../controllers/flight.controller.js");

const router = express.Router();

router.get("/search", searchFlights);
router.get("/:id", getFlightById);
router.get("/airports/all", getAllAirports);

module.exports = router;

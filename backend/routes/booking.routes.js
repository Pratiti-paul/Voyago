const express = require("express");
const { bookFlight } = require("../controllers/booking.controller.js");

const router = express.Router();

router.post("/flight", bookFlight);

module.exports = router;

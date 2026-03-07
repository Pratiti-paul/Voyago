const express = require("express");
const {
  searchTrains,
  getTrainById,
  getAvailableClasses,
} = require("../controllers/train.controller.js");

const router = express.Router();

router.get("/search", searchTrains);
router.get("/classes", getAvailableClasses);
router.get("/:id", getTrainById);

module.exports = router;

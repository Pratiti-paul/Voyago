const { generateMockTrains } = require("../utils/mockDataGenerator");

exports.searchTrains = async (req, res) => {
  try {
    const { from, to, date, class: trainClass } = req.query;

    // Validate required parameters
    if (!from || !to || !date) {
      return res.status(400).json({
        error: "Missing required parameters: from, to, date",
      });
    }

    // Generate mock trains dynamically
    const mockTrains = generateMockTrains(from, to, date, 8);

    // Filter by class if specified
    let filteredTrains = mockTrains;
    if (trainClass) {
      filteredTrains = mockTrains.map((train) => {
        // Keep only requested class
        const filteredClasses = {};
        if (train.classes[trainClass]) {
          filteredClasses[trainClass] = train.classes[trainClass];
        }
        return {
          ...train,
          classes: filteredClasses,
        };
      });
    }

    res.json({
      success: true,
      count: filteredTrains.length,
      data: filteredTrains,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getTrainById = async (req, res) => {
  try {
    const { id } = req.params;

    // Generate a fresh set and find the matching ID
    // In production, you might want to cache or store this differently
    if (!id) {
      return res.status(400).json({
        error: "Train ID is required",
      });
    }

    res.status(501).json({
      message: "Get individual train details not yet implemented",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getAvailableClasses = async (req, res) => {
  try {
    const { TRAIN_CLASSES } = require("../utils/mockDataGenerator");
    
    res.json({
      success: true,
      classes: TRAIN_CLASSES,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const Comparison = require("../models/Comparison");

const getHistory = async (req, res) => {
  try {
    const history = await Comparison.find()
      .sort({ createdAt: -1 })
      .limit(20);

    res.json(history);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch history",
    });
  }
};

module.exports = { getHistory };
const mongoose = require("mongoose");

const comparisonSchema = new mongoose.Schema(
  {
    text1: String,
    text2: String,
    similarity: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Comparison",
  comparisonSchema
);
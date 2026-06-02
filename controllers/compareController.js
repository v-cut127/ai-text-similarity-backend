const Comparison = require("../models/Comparison");
const { computeSimilarity } = require("../services/pythonService");

const compareTexts = async (req, res) => {
  try {
    const { text1, text2, model } = req.body;

    if (!text1?.trim() || !text2?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Both texts are required",
      });
    }

    const result = await computeSimilarity(
      text1,
      text2,
      model || "minilm"
    );

    if (!result || typeof result.similarity !== "number") {
      return res.status(502).json({
        success: false,
        message: "Invalid response from AI service",
      });
    }

    const saved = await Comparison.create({
      text1,
      text2,
      similarity: result.similarity,
    });

    return res.json({
      success: true,
      similarity: result.similarity,
      model_used: result.model_used || model || "minilm",
      id: saved._id,
    });

  } catch (error) {
    console.error("Compare error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error while comparing texts",
    });
  }
};

module.exports = {
  compareTexts,
};
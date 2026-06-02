const express = require("express");

const {
  compareTexts,
} = require("../controllers/compareController");

const {
  getHistory,
} = require("../controllers/historyController");

const router = express.Router();

router.post("/compare", compareTexts);
router.get("/history", getHistory);

module.exports = router;
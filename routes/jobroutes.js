const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// GET /api/jobs
router.get("/jobs", async (req, res) => {
  try {
    const { location } = req.query;
    const query = {};

    if (location) {
      query.location = { $regex: location, $options: "i" }; // Case-insensitive regex match
    }

    const jobs = await Job.find(query).sort({ postedDateTime: -1 }); // Sort by latest jobs
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch jobs", error: error.message });
  }
});

module.exports = router;

const express = require("express");
const Job = require("../models/Job.js");

const router = express.Router();

// GET /api/jobs
router.get("/jobs", async (req, res) => {
  try {
    const { location } = req.query;
    const query = {};

    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    const jobs = await Job.find(query).sort({ postedDateTime: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch jobs", error: error.message });
  }
});

module.exports = router;

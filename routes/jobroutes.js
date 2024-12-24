// routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/jobs", async (req, res) => {
  try {
    const { location } = req.query;
    let query = {};

    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

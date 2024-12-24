const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  job_link: String,
  employment_type: String,
  experience: String,
  source: String,
  country: String,
  postedDateTime: Date,
  companyImageUrl: String,
  min_exp: Number,
  max_exp: Number,
  description: String,
});

module.exports = mongoose.model("Job", jobSchema);

// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");
require("dotenv").config(); // Import dotenv to load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MNG)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/api", jobRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/api/emojis", async (req, res) => {
  try {
    console.log("Fetching emojis...");
    const response = await axios.get("https://emojihub.yurace.pro/api/all");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching emojis:", error.message);
    res.status(500).json({ message: "Error fetching data" });
  }
});


module.exports = app;


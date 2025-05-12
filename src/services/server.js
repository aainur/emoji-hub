require("dotenv").config();
console.log("LOCAL environment variable:", process.env.LOCAL);  // Проверь, что выводится
console.log("PORT environment variable:", process.env.PORT); 
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

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

if (process.env.LOCAL === "true") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;






















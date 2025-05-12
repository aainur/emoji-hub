console.log("Starting server...");

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
const PORT = 5000;
//const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}).on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Try a different port or stop the process using it.`);
  } else {
    console.error("Server error:", error.message);
  }
  process.exit(1);
});
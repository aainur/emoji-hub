
import axios from "axios";
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://emoji-hub-backend.vercel.app";

export const fetchEmojis = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/emojis`);
    return response.data;
  } catch (error) {
    console.error("Error fetching emojis:", error);
    return [];
  }
};




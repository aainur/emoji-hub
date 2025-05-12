import axios from "axios";

export const fetchEmojis = async () => {
  try {
    const response = await axios.get("/api/emojis");
    return response.data;
  } catch (error) {
    console.error("Error fetching emojis:", error);
    return [];
  }
};

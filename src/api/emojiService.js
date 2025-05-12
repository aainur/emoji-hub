import axios from "axios";

export const fetchEmojis = async () => {
  try {
    const response = await axios.get("/api/emojis");
    //const response = await axios.get("https://emoji-hub.vercel.app/api/emojis");
    return response.data;
  } catch (error) {
    console.error("Error fetching emojis:", error);
    return [];
  }
};

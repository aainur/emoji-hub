import { useEffect, useState } from "react";
import EmojiCard from "../components/EmojiCard";
import EmojiSearchAndSort from "../components/EmojiSearchAndSort";
import { fetchEmojis } from "../api/emojiService";

const EmojiList = () => {
  const [emojis, setEmojis] = useState([]);
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const loadEmojis = async () => {
      setLoading(true); 
      try {
        const data = await fetchEmojis(); 
        setEmojis(data);
        setFilteredEmojis(data);

        const uniqueCategories = [
          ...new Set(data.map((emoji) => emoji.group)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error loading emojis:", error.message);
      } finally {
        setLoading(false);
      }
    };

    loadEmojis();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = emojis.filter((emoji) =>
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmojis(filtered);
  };

  const handleSort = (order) => {
    const sorted = [...filteredEmojis].sort((a, b) => {
      if (order === "name-asc") return a.name.localeCompare(b.name);
      if (order === "name-desc") return b.name.localeCompare(a.name);
      return 0; 
    });
    setFilteredEmojis(sorted);
  };

  const handleFilter = (category) => {
    if (category === "") {
      setFilteredEmojis(emojis);
    } else {
      const filtered = emojis.filter((emoji) => emoji.group === category);
      setFilteredEmojis(filtered);
    }
  };

  return (
    <div className="p-4">
      <EmojiSearchAndSort
        onSearch={handleSearch}
        onSort={handleSort}
        onFilter={handleFilter}
        categories={categories}
      />

      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredEmojis.map((emoji, index) => (
            <EmojiCard key={index} emoji={emoji} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmojiList;

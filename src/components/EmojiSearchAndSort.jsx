import { useState } from "react";

const EmojiSearchAndSort = ({ onSearch, onSort, onFilter, categories }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSort(value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onFilter(value);
  };

  return (
    <div className="mb-4 flex gap-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search emojis..."
        className="p-2 border rounded w-1/3"
      />

      <select
        value={sortOption}
        onChange={handleSortChange}
        className="p-2 border rounded w-1/3"
      >
        <option value="name-asc">Sort by Name (A-Z)</option>
        <option value="name-desc">Sort by Name (Z-A)</option>
      </select>

      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="p-2 border rounded w-1/3"
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmojiSearchAndSort;

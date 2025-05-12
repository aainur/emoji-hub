import React from "react";

const EmojiCard = ({ emoji }) => {
  const unicodeToEmoji = (unicode) => {
    return unicode
      .split(" ")
      .map((code) => String.fromCodePoint(parseInt(code.replace("U+", ""), 16)))
      .join("");
  };

  const emojiSymbol = unicodeToEmoji(emoji.unicode.join(" "));


  const handleCopy = () => {
    navigator.clipboard.writeText(emojiSymbol).then(() => {
      alert("Emoji copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy emoji: ", err);
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <div className="text-4xl mb-2">{emojiSymbol}</div>
      <h3 className="text-lg font-semibold">{emoji.name}</h3>
      <p className="text-gray-500 mb-2">{emoji.category}</p>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
        onClick={handleCopy}
      >
        Copy
      </button>
    </div>
  );
};

export default EmojiCard;

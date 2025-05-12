import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const emojis = ["😊", "😂", "😍", "🤔", "😎", "😢", "😡", "🥳", "🤯", "🤩"];

const randomPosition = () => ({
  x: Math.random() * window.innerWidth - window.innerWidth / 2,
  y: Math.random() * window.innerHeight - window.innerHeight / 2,
});

const Home = () => (
  <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white overflow-hidden">
    <h1 className="text-5xl font-bold mb-4 animate-bounce z-10">
      Welcome to Emoji Hub! 😊
    </h1>
    <p className="text-lg mb-8 z-10">
      Explore the world of emojis and find the mood in symbols.
    </p>
    <Link to="/emojis">
      <button className="bg-white text-purple-700 px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition z-10">
        Explore Emojis
      </button>
    </Link>

    {/* Floating Emojis */}
    {emojis.map((emoji, index) => (
      <motion.div
        key={index}
        className="absolute text-3xl"
        initial={randomPosition()}
        animate={{
          x: [randomPosition().x, randomPosition().x * -1],
          y: [randomPosition().y, randomPosition().y * -1],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {emoji}
      </motion.div>
    ))}
  </div>
);

export default Home;

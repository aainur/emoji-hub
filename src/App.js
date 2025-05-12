import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmojiList from "./pages/EmojiList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emojis" element={<EmojiList />} />
      </Routes>
    </Router>
  );
};

export default App;

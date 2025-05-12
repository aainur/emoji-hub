import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
    <div>
      <Link to="/" className="mr-4 hover:text-gray-300">🏠 Home</Link>
      <Link to="/emojis" className="hover:text-gray-300">😊 Emojis</Link>
    </div>
  </nav>
);

export default Navbar;




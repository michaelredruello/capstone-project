import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import axios from "axios";

const Navbar = ({ asChange }) => {
  const [value, setValue] = useState("");
  const [game, setGame] = useState([]);
  const navigate = useNavigate();

  const getGame = (input) => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?title=${input}&limit=15`)
      .then((response) => response.data)
      .then((data) => {
        setGame(data);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/search", { state: { game: game } });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    getGame(value);
  };

  return (
    <header className="bg-white">
      <nav className="main-nav container">
        <form onSubmit={handleSubmit} className="navbar-search-form">
          <input
            type="search"
            placeholder="Search..."
            value={value}
            onChange={handleChange}
          />
        </form>
        <Link to="/">Search</Link>
        <Link to="/deals">Bests deals</Link>
        <div className="nav-alert">
          <Link to="/favorite">
            wishlist <FaBell />
          </Link>
          {asChange && <div className="red-dot"></div>}
        </div>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Navbar;

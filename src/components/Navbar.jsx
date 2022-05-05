import React from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const Navbar = ({ asChange }) => {
  return (
    <header className="bg-white">
      <nav className="main-nav container">
        <Link to="/">Search</Link>
        <Link to="/deals">Bests deals</Link>
        <div className="nav-alert">
          <Link to="/favorite">
            wishlist <FaBell />
          </Link>
          {asChange && <div className="red-dot"></div>}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

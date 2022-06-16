import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Navbar = ({ login, username }) => {
  return (
    <header className="bg-white">
      <nav className="main-nav container">
        <Link to="/">Search</Link>
        <Link to="/deals">Best deals</Link>
        {login ? (
          <>
            <Link to="/favorite">Wishlist</Link>
            <div className="navbar-section">
              <Link to="/profile">{username}</Link>
              <Avatar sx={{ width: 30, height: 30, alignSelf: "center" }} />
            </div>
          </>
        ) : (
          <div className="navbar-section">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

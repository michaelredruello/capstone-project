import { Link } from "react-router-dom";

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

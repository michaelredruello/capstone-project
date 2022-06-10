import { Link } from "react-router-dom";

const Navbar = ({ login }) => {
  return (
    <header className="bg-white">
      <nav className="main-nav container">
        <Link to="/">Search</Link>
        <Link to="/deals">Best deals</Link>
        <div className="nav-alert">
          <Link to="/favorite">Wishlist</Link>
        </div>
        {login ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="main-nav container">
        <Link to="/">Search</Link>
        <Link to="/deals">Bests deals</Link>
        <div className="nav-alert">
          <Link to="/favorite">wishlist</Link>
        </div>
        <Link to="/login">Log In</Link>
        <Link to="/register">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Navbar;

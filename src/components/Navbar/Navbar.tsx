import "./index.css"

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="main-nav container">
        <div >Search</div>
        <div>Best deals</div>
        {/* {login ? (
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
        )} */}
      </nav>
    </header>
  );
};

export default Navbar;
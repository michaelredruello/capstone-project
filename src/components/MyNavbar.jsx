import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>GAME PRICES</Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
};

export default MyNavbar;

import logo from "../assets/logo.png";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          D&D Wiki
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default MyNavbar;

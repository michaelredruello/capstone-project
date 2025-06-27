import "./index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <span className="footer-name">
          © {new Date().getFullYear()} Michael Redruello
        </span>
        <div className="footer-icons">
          <a
            href="https://github.com/michaelredruello"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/michaelredruello/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

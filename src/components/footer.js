import "./footerStyle.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="lmts">
        <Link to="/" className="footerHm">
          Home
        </Link>
        <Link to="/about" className="footerAbt">
          About Me
        </Link>
        <Link to="/contacts" className="Contact">
          Contact
        </Link>
      </div>
      <br />
      <nav className="socials">
        <Link>Facebook</Link>
        <Link>LinkedIn</Link>
        <Link>Twitter</Link>
      </nav>
      <p className="cprt"> Copyright &copy; 2023</p>
    </footer>
  );
};
export default Footer;

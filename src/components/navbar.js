import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navStyles.css";

export default function RootLayout() {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="root-layout">
      <header className="header">
        <NavLink to="/" className="logo">
          <h1>Depark </h1>
        </NavLink>
        <nav className="nav" ref={navRef}>
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/about" className="link">
            About
          </NavLink>
          <NavLink to="/contact" className="link">
            Contacts
          </NavLink>
          <NavLink to="/project" className="link">
            Projects
          </NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

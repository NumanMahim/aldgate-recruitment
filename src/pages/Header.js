import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaUserTie, FaBriefcase, FaEnvelope, FaInfoCircle } from "react-icons/fa"; 
import "../styles/Header.css";
import logo from "../images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Aldgate Recruitment" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/find-staff" onClick={() => setMenuOpen(false)}>
                <FaUserTie /> Find Staff
              </Link>
            </li>
            <li>
              <Link to="/apply" onClick={() => setMenuOpen(false)}>
                <FaBriefcase /> Apply for Jobs
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <FaEnvelope /> Contact
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                <FaInfoCircle /> About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

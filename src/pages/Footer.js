import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Added Instagram
import "../styles/Footer.css"; // Import the footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section company-info">
          <h2>Aldgate Recruitment</h2>
          <p>Connecting top talent with the best hospitality businesses. Let us help you find the right staff or the right job.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/find-staff">Find Staff</Link></li>
            <li><Link to="/apply">Apply for Jobs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> 123 Aldgate Street, London, UK</p>
          <p><FaPhone /> +44 1234 567 890</p>
          <p><FaEnvelope /> contact@aldgaterecruitment.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> {/* Instagram added */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aldgate Recruitment. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

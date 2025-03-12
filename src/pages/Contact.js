import React from "react";
import "../styles/Contact.css"; // Ensure correct CSS path

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Left Section - Company Information */}
      <div className="contact-left">
        <h2>Get in Touch</h2>
        <p>We are here to help! Reach out to us and we'll get back to you as soon as possible.</p>
        
        <div className="contact-details">
          <p><i className="fas fa-map-marker-alt"></i> 123 Aldgate Street, London, UK</p>
          <p><i className="fas fa-phone-alt"></i> +44 1234 567 890</p>
          <p><i className="fas fa-envelope"></i> contact@aldgaterecruitment.com</p>
          <p><i className="fas fa-clock"></i> Mon - Fri: 9AM - 6PM</p>
        </div>
      </div>

      {/* Center Section - Contact Form */}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Fill in the form below and our team will get in touch with you shortly.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>

      {/* Right Section - Map or Decorative Section */}
      <div className="contact-right">
        <h2>Visit Our Office</h2>
        <div className="map-placeholder">
          <p>📍 Google Map Location</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

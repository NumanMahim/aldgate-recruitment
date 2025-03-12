import React from "react";
import "../styles/AboutUs.css"; // Ensure the correct CSS path

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Left Section - About Content */}
      <div className="about-left">
        <h1>About Aldgate Recruitment</h1>
        <p>
          At **Aldgate Recruitment**, we specialize in **connecting top talent** with **leading businesses** across various industries.  
          Our mission is to **help companies find the best employees** while also assisting **job seekers** in securing their dream roles.
        </p>
        <p>
          Whether you're a **hotel, bar, restaurant, or corporate business**, we have a **wide network of skilled professionals** ready to work!
        </p>
        
        <div className="about-stats">
          <div className="stat-box">
            <h2>500+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="stat-box">
            <h2>5,000+</h2>
            <p>Job Seekers Placed</p>
          </div>
          <div className="stat-box">
            <h2>98%</h2>
            <p>Success Rate</p>
          </div>
        </div>

        <button className="learn-more-btn">Learn More</button>
      </div>

      {/* Right Section - Animated Image */}
      <div className="about-right">
        <img src="src/images/recruitment.png" alt="Recruitment Agency" className="about-img" />
      </div>
    </div>
  );
};

export default AboutUs;

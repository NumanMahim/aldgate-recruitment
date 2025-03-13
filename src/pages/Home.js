import React from "react";
import "../styles/Home.css"; // Import CSS
import recruitmentImage from "../images/recruitmentagency.png";
import logoWithBackground from "../images/logoqwithbackground.png";
import Lottie from "lottie-react";
import logo from "../images/logo.png";
import aboutUsAnimation from "../animations/aboutus.json";
import benefitsAnimation from "../animations/benefits.json";
const Home = () => {
  return (
    <div className="home">
      {/* About Us Section */}
      <section className="about-us-section">
        {/* Left Side - Text Content */}
        <div className="about-content">
          <h1 className="styled-heading">
            Connecting Employers & Job Seekers Seamlessly
          </h1>
          <p className="styled-paragraph">
            At <span className="highlight">Aldgate Recruitment</span>, we help
            businesses find top talent and assist job seekers in landing their
            ideal roles. Whether you're an <span className="highlight">employer</span> looking for reliable staff or a{" "}
            <span className="highlight">candidate</span> searching for your next opportunity, we’ve got you covered.
          </p>
          <div className="about-buttons">
            <button className="demo-button">Request a Demo</button>
            <button className="play-button">
              <i className="fa fa-play"></i> Watch Video
            </button>
          </div>
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="about-animation">
          <Lottie
            animationData={aboutUsAnimation}
            loop={true}
            autoplay={true}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </section>



      {/* Third Section */}
      <section className="third-section">
        <div className="third-container">
          <div className="third-content">
            <h2 className="third-title">Connecting Talent with Opportunities</h2>
            <p className="third-description">
              At Aldgate Recruitment, we bridge the gap between skilled professionals 
              and top-tier businesses. Whether you're seeking new career opportunities 
              or hiring top talent, we’ve got the expertise to support you.
            </p>
            <div className="third-buttons">
              <button className="work-button">Find Work</button>
              <button className="staff-button">Recruit Staff</button>
            </div>
            <div className="third-stats">
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <h3>90%</h3>
                <p>Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="third-logo">
            <img src={logo} alt="Aldgate Recruitment" />
          </div>
          <div className="third-features">
            <div className="feature-card">
              <i className="fas fa-brain"></i>
              <h4>Smart Skills</h4>
              <p>Expert hiring strategies with AI-powered insights.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shipping-fast"></i>
              <h4>Fast Delivery</h4>
              <p>Quick hiring process with high-quality candidates.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-star"></i>
              <h4>Best Practices</h4>
              <p>Industry-standard hiring methods and processes.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h4>Trusted Network</h4>
              <p>Connecting you with a verified talent pool.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
      <div className="benefits-content">
        {/* Left Side - Text Content */}
        <div className="benefits-text">
          <h2 className="benefits-title">Care Management & Proactive Care Platform</h2>
          <p className="benefits-description">
            Aldgate Recruitment helps businesses and organizations streamline their hiring 
            process. We provide end-to-end staffing solutions, ensuring you get the right 
            talent for your specific needs.
          </p>
          <button className="demo-button">Get a Demo <span>▼</span></button>
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="benefits-animation">
          <Lottie animationData={benefitsAnimation} loop={true} autoplay={true} />
        </div>
      </div>

      {/* Stats Section */}
      <div className="benefits-stats">
        <div className="stat-card">
          <i className="fas fa-envelope"></i>
          <h3>3 million messages</h3>
          <p>Personalized and sent to job seekers</p>
        </div>

        <div className="stat-card">
          <i className="fas fa-clock"></i>
          <h3>5.1 million minutes</h3>
          <p>Of interviews conducted successfully</p>
        </div>

        <div className="stat-card">
          <i className="fas fa-briefcase"></i>
          <h3>20+ industries</h3>
          <p>Covered across multiple business sectors</p>
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-overlay">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            We specialize in staff recruitment, job placement, and career coaching, 
            helping businesses find top talent and guiding professionals to their 
            dream jobs.
          </p>
          <div className="services-container">
            <div className="service-card">
              <i className="fas fa-users"></i>
              <h3>Staff Recruitment</h3>
              <p>Find the best talent suited for your company’s needs.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-briefcase"></i>
              <h3>Job Placement</h3>
              <p>Connecting professionals with top job opportunities.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-chalkboard-teacher"></i>
              <h3>Career Coaching</h3>
              <p>Helping individuals grow and excel in their careers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section">
        <h2 className="departments-title">Departments</h2>
        <div className="departments-container">
          <div className="department-card">
            <div className="department-image"></div>
            <div className="department-content">
              <h3>Hospitality</h3>
              <p>Providing expert staff for hotels, restaurants, and catering services.</p>
            </div>
          </div>
          <div className="department-card">
            <div className="department-image"></div>
            <div className="department-content">
              <h3>Retail</h3>
              <p>Trained professionals for retail stores, supermarkets, and sales teams.</p>
            </div>
          </div>
          <div className="department-card">
            <div className="department-image"></div>
            <div className="department-content">
              <h3>Healthcare</h3>
              <p>Connecting healthcare institutions with experienced medical professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="recruitment-section">
        <div className="recruitment-container">
          <div className="recruitment-image">
            <img src={recruitmentImage} alt="Recruitment Process" />
          </div>
          <div className="recruitment-content">
            <h2 className="recruitment-title">Constructing a Premier Hospitality Staffing Company</h2>
            <p className="recruitment-description">
              With years of experience, Aldgate Recruitment has become one of the UK's leading 
              staffing agencies, providing top-class professionals to venues, caterers, and hotels 
              across Central London.
            </p>
            <h3 className="offer-title">What We Offer</h3>
            <ul className="offer-list">
              <li><i className="fas fa-check-circle"></i> Experienced and skilled workers</li>
              <li><i className="fas fa-check-circle"></i> Reliable staffing solutions</li>
              <li><i className="fas fa-check-circle"></i> Quick and hassle-free hiring</li>
              <li><i className="fas fa-check-circle"></i> Flexible job opportunities</li>
              <li><i className="fas fa-check-circle"></i> Personalized recruitment strategies</li>
            </ul>
            <div className="recruitment-buttons">
              <button className="work-button">Find Work</button>
              <button className="staff-button">Recruit Staff</button>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Section */}
      <section className="hospitality-section">
        <div className="hospitality-container">
          <div className="hospitality-content">
            <h2 className="hospitality-title">We Care Passionately About Hospitality and People</h2>
            <p className="hospitality-description">
              Enabling incredible experiences starts with loving what you do. 
              That’s why Aldgate Recruitment is committed to creating a comforting 
              environment where you are excited for every shift.
            </p>
            <h3 className="cover-title">What We Cover</h3>
            <ul className="cover-list">
              <li><i className="fas fa-check-circle"></i> Flexible work opportunities</li>
              <li><i className="fas fa-check-circle"></i> Personalized career growth</li>
              <li><i className="fas fa-check-circle"></i> Competitive pay rates</li>
              <li><i className="fas fa-check-circle"></i> Professional training programs</li>
              <li><i className="fas fa-check-circle"></i> Supportive work environments</li>
            </ul>
            <button className="casual-role-button">I Am Looking For A Casual Role</button>
          </div>
          <div className="hospitality-image">
            <img src={recruitmentImage} alt="Hospitality Careers" />
          </div>
        </div>
      </section>

      {/* Talent Solutions Section */}
      <section className="talent-solutions-section">
        <div className="talent-container">
          <div className="talent-image">
            <img src={recruitmentImage} alt="Talent Solutions" />
          </div>
          <div className="talent-content">
            <h2 className="talent-title">Talent Solutions to Fuel Your Business and Drive Better Service</h2>
            <p className="talent-description">
              Every business is different, and so is the talent to drive it forward.
              It takes experienced hospitality professionals to recognize great talent,
              which is why we recruit exceptional people who bring experiences to life,
              injecting knowledge, skill, and passion.
            </p>
            <h3 className="service-title">What We Service</h3>
            <ul className="service-list">
              <li><i className="fas fa-check-circle"></i> Flexible staffing solutions</li>
              <li><i className="fas fa-check-circle"></i> Industry-experienced professionals</li>
              <li><i className="fas fa-check-circle"></i> Quick hiring process</li>
              <li><i className="fas fa-check-circle"></i> High-end hospitality staff</li>
              <li><i className="fas fa-check-circle"></i> 24/7 support for employers</li>
            </ul>
            <button className="hire-staff-button">Find Casual High-End Staff</button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2 className="cta-title">Ready to transform your business?</h2>
          <p className="cta-text">
            Join thousands of satisfied customers who have taken their projects to the next level.
            Start your journey today.
          </p>
          <button className="cta-button">
            Learn More About Us <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
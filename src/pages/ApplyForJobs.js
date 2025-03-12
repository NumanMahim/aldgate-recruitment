import React, { useState } from "react";
import "../styles/ApplyForJobs.css"; // Ensure correct CSS path

const ApplyForJobs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    jobRole: "",
    experience: "",
    availability: "",
    startDate: "",
    resume: null,
    coverLetter: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Job Application has been submitted successfully! ✅");
  };

  return (
    <div className="apply-job-page">
      {/* Left Section: Why Apply With Us */}
      <div className="left-section">
        <h2>Why Work With Us?</h2>
        <ul>
          <li>✔️ Competitive Salary Packages</li>
          <li>✔️ Flexible Working Hours</li>
          <li>✔️ Career Growth Opportunities</li>
          <li>✔️ Work with Top Companies</li>
          <li>✔️ Supportive Work Environment</li>
        </ul>
      </div>

      {/* Center Form Section */}
      <div className="apply-form-container">
        <h1>Apply for a Job</h1>
        <p>Fill in the details below to start your journey with us.</p>

        <form onSubmit={handleSubmit} className="animated-form">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required />

          <select name="jobRole" value={formData.jobRole} onChange={handleChange} required>
            <option value="">Select Job Role</option>
            <option value="chef">Chef</option>
            <option value="waiter">Waiter</option>
            <option value="bartender">Bartender</option>
            <option value="cleaner">Cleaner</option>
            <option value="receptionist">Receptionist</option>
            <option value="manager">Manager</option>
          </select>

          <input type="text" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} required />
          
          <select name="availability" value={formData.availability} onChange={handleChange} required>
            <option value="">Select Availability</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="weekends">Weekends</option>
          </select>

          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />

          <label className="file-upload">
            Upload Resume (PDF, DOCX)
            <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
          </label>

          <textarea name="coverLetter" placeholder="Cover Letter (Optional)" value={formData.coverLetter} onChange={handleChange}></textarea>

          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>

      {/* Right Section: Testimonials or Image */}
      <div className="right-section">
        <h2>What Our Employees Say</h2>
        <p>⭐⭐⭐⭐⭐</p>
        <p>"I found my dream job through Aldgate Recruitment!" - Alex B.</p>
        <p>"The process was smooth and professional!" - Lisa T.</p>
      </div>
    </div>
  );
};

export default ApplyForJobs;

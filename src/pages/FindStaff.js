import React, { useState } from "react";
import "../styles/FindStaff.css"; // Import the CSS file

const FindStaff = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    jobRole: "",
    staffCount: "",
    payRate: "",
    jobType: "",
    startDate: "",
    shiftTiming: "",
    additionalNotes: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Staffing Request Submitted Successfully! ✅");
  };

  return (
    <div className="find-staff-page">
      {/* Left Section: Benefits */}
      <div className="left-section">
        <h2>Why Hire with Us?</h2>
        <ul>
          <li>✅ Pre-screened and highly skilled staff</li>
          <li>✅ Fast and reliable hiring process</li>
          <li>✅ 24/7 Customer Support</li>
          <li>✅ Industry-Specific Expertise</li>
          <li>✅ Cost-effective staffing solutions</li>
        </ul>
      </div>

      {/* Center Form Section */}
      <div className="find-staff-container">
        <h1>Hire the Best Talent for Your Business</h1>
        <p>Tell us what kind of staff you need, and we'll handle the rest.</p>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="animated-form">
            <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />
            <input type="text" name="contactName" placeholder="Your Name" value={formData.contactName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Company Address" value={formData.address} onChange={handleChange} required />

            <select name="jobRole" value={formData.jobRole} onChange={handleChange} required>
              <option value="">Select Job Role</option>
              <option value="chef">Chef</option>
              <option value="waiter">Waiter</option>
              <option value="bartender">Bartender</option>
              <option value="cleaner">Cleaner</option>
              <option value="receptionist">Receptionist</option>
              <option value="manager">Manager</option>
            </select>

            <input type="number" name="staffCount" placeholder="Number of Staff Required" value={formData.staffCount} onChange={handleChange} required />
            <input type="text" name="payRate" placeholder="Pay Rate (Per Hour)" value={formData.payRate} onChange={handleChange} required />

            <select name="jobType" value={formData.jobType} onChange={handleChange} required>
              <option value="">Select Job Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="temporary">Temporary</option>
              <option value="contract">Contract</option>
            </select>

            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
            <input type="text" name="shiftTiming" placeholder="Shift Timing (e.g., 9AM - 5PM)" value={formData.shiftTiming} onChange={handleChange} required />

            <textarea name="additionalNotes" placeholder="Additional Requirements (Optional)" value={formData.additionalNotes} onChange={handleChange}></textarea>

            <button type="submit" className="submit-btn">Submit Request</button>
          </form>
        </div>
      </div>

      {/* Right Section: Testimonials or Image */}
      <div className="right-section">
        <h2>Client Testimonials</h2>
        <p>⭐⭐⭐⭐⭐</p>
        <p>"Aldgate Recruitment helped us find the best employees in no time. Highly recommended!" - John D.</p>
        <p>"Fast, professional, and reliable service!" - Sarah W.</p>
      </div>
    </div>
  );
};

export default FindStaff;

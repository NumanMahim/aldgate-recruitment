import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header"; // Adjust path if needed
import Footer from "./pages/Footer"; // Import Footer
import Home from "./pages/Home"; // Import Home Page
import FindStaff from "./pages/FindStaff"; // ✅ Correctly import FindStaff
import ApplyForJobs from "./pages/ApplyForJobs"; // ✅ Import ApplyForJobs
import Contact from "./pages/Contact"; // ✅ Import Contact Page
import AboutUs from "./pages/AboutUs"; // ✅ Import About Us Page
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-staff" element={<FindStaff />} /> {/* ✅ Correct Route */}
        <Route path="/apply" element={<ApplyForJobs />} /> {/* ✅ Now Loads ApplyForJobs */}
        <Route path="/contact" element={<Contact />} /> {/* ✅ Now Loads Contact Page */}
        <Route path="/about" element={<AboutUs />} /> {/* ✅ Now Loads About Us Page */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

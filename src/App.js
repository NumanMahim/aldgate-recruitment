import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./pages/Header"; 
import Footer from "./pages/Footer"; 
import Home from "./pages/Home"; 
import FindStaff from "./pages/FindStaff"; 
import ApplyForJobs from "./pages/ApplyForJobs"; 
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs"; 
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Redirect "/" to "/home" */}
        <Route path="/" element={<Navigate replace to="/home" />} />

        {/* Main Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/find-staff" element={<FindStaff />} />
        <Route path="/apply" element={<ApplyForJobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Catch-all invalid routes and redirect to "/home" */}
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

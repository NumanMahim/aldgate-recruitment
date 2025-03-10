import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header"; // Adjust path if needed

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/find-staff" element={<h1>Find Staff Page</h1>} />
        <Route path="/apply" element={<h1>Apply for Jobs Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/about" element={<h1>About Us Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

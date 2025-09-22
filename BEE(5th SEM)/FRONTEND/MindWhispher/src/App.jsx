import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MindWhisperer from "./Components/MindWhisperer";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Contact from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MindWhisperer />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/signin" element={<SignIn />} />

        <Route path="/home" element={<HomePage />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

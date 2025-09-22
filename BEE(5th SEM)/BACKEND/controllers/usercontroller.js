const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Use env var or fallback secret (not safe for production, but useful in dev)
const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_key";

// Signup: no token generated
const signup = async (req, res) => {
  console.log("Reached signup controller");

  const { name, email, mobile, password, gender } = req.body;

  // Basic validation
  if (!name || !email || !mobile || !password || !gender) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    // Check if user exists by email or mobile
    const exists = await User.findOne({ $or: [{ email }, { mobile }] });
    if (exists) return res.status(400).json({ msg: "User already exists" });

    // Create new user
    const newUser = new User({ name, email, mobile, password, gender });
    await newUser.save();

    // Return success message only
    res.status(201).json({ msg: "User created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Signin: generate token
const signin = async (req, res) => {
  const { email, password } = req.body; // use email as login

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

module.exports = { signup, signin };

// backend/routes/authRoutes.js
const express = require('express');
const { signupStudent, verifyOTP, login } = require('../controllers/authController');

const router = express.Router();

// Student Sign-Up
router.post('/signup', signupStudent);

// Verify OTP
router.post('/verify-otp', verifyOTP);

// Login (both student and admin)
router.post('/login', login);

module.exports = router;

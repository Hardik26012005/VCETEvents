// backend/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Email OTP setup
const sendOTPEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'hardikraut2005@gmail.com',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP Code is ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};

// Sign-Up for Student with OTP Verification
exports.signupStudent = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: 'student',
      otp,
      isVerified: false,
    });

    await newUser.save();

    // Send OTP to email
    await sendOTPEmail(email, otp);

    res.status(201).json({ message: 'Student registered. OTP sent to email.' });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up', error });
  }
};

// Verify OTP for Student
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });
    if (user.otp !== otp) return res.status(400).json({ message: 'Invalid OTP' });

    user.isVerified = true;
    user.otp = null; // Clear OTP after verification
    await user.save();

    res.status(200).json({ message: 'Student verified successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error verifying OTP', error });
  }
};

// Login for Student and Admin
exports.login = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await User.findOne({ email, role });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    if (role === 'student' && !user.isVerified) {
      return res.status(400).json({ message: 'Student not verified. Please verify your email.' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

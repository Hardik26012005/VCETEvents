// src/Components/Auth.js
import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up
  const [role, setRole] = useState('student'); // Default to student role
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    otp: '',
  });
  const [otpStep, setOtpStep] = useState(false); // To handle OTP step in sign-up

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setOtpStep(false);
    setFormData({ name: '', email: '', password: '', otp: '' });
  };

  const handleRoleToggle = () => {
    setRole(role === 'student' ? 'admin' : 'student');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const res = await axios.post('/api/auth/login', {
          email: formData.email,
          password: formData.password,
          role,
        });
        console.log('Login successful:', res.data);
      } catch (error) {
        console.error('Login error:', error.response.data);
      }
    } else {
      if (otpStep) {
        // Handle OTP verification
        try {
          const res = await axios.post('/api/auth/verify-otp', {
            email: formData.email,
            otp: formData.otp,
          });
          console.log('OTP verified:', res.data);
        } catch (error) {
          console.error('OTP verification error:', error.response.data);
        }
      } else {
        // Handle Student Sign-Up
        try {
          const res = await axios.post('/api/auth/signup', {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          });
          console.log('Sign-up successful:', res.data);
          setOtpStep(true); // Move to OTP step
        } catch (error) {
          console.error('Sign-up error:', error.response.data);
        }
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && !otpStep && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {!otpStep && (
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        )}
        {otpStep && (
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={handleInputChange}
            required
          />
        )}

        {!otpStep && (
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        )}
        {otpStep && (
          <button type="submit">Verify OTP</button>
        )}
      </form>

      <button className="role-toggle" onClick={handleRoleToggle}>
        Switch to {role === 'student' ? 'Admin' : 'Student'} Login
      </button>

      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button className="toggle-auth" onClick={handleToggle}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default Auth;

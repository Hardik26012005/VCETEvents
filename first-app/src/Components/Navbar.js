// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import './Navbar.css'; // Import the CSS file for styling
import logo from '../Assets/vcetlogo.png'; // Correct path to the logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the hamburger menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="brand-text">Vcet Events</span>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
        <li><NavLink to="/events" activeClassName="active-link">Events</NavLink></li>
        <li><NavLink to="/reports" activeClassName="active-link">Reports</NavLink></li>
        <li><NavLink to="/booking" activeClassName="active-link">Booking</NavLink></li> 
        <li><NavLink to="/logout" activeClassName="active-link">Log Out</NavLink></li> {/* 
        {/* 
        Ensure this is correct */}
      </div>
      <div className="hamburger" onClick={handleToggle}>
        {/* Hamburger icon */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

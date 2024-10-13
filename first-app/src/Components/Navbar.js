import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import useLocation
import './Navbar.css';
import logo from '../Assets/vcetlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current path

  // Toggle function for the hamburger menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Check if the link is active by comparing the current path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="brand-text">VCETEvents</span>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={isActive('/') ? 'active-link' : ''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={isActive('/events') ? 'active-link' : ''}
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={isActive('/reports') ? 'active-link' : ''}
          >
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={isActive('/booking') ? 'active-link' : ''}
          >
            Booking
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logout"
            className={isActive('/logout') ? 'active-link' : ''}
          >
            Profile
          </NavLink>
        </li>
      </div>
      <div className="hamburger" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

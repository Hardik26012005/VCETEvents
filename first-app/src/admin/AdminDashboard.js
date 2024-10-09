// src/admin/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-cards">
        <Link to="/manage-events" className="dashboard-card">
          <i className="fas fa-calendar-alt"></i>
          <h2>Manage Events</h2>
          <p>View, create, and edit events</p>
        </Link>
        <Link to="/manage-reports" className="dashboard-card">
          <i className="fas fa-chart-bar"></i>
          <h2>Manage Reports</h2>
          <p>View and manage reports</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;

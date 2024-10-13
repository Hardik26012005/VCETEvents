import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import EventList from './Components/EventList';
import Reports from './Components/Reports';
import Booking from './Components/Booking';
import Logout from './Components/Logout';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import Navbar from './Components/Navbar';
import AdminDashboard from './admin/AdminDashboard'; // Import Admin Dashboard
import ManageEvents from './admin/ManageEvents';     // Import Manage Events
import ManageReports from './admin/ManageReports';   // Import Manage Reports

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} /> 

          {/* Protected Routes */}
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Navbar />
                <HomePage />
              
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/events" 
            element={
              <ProtectedRoute>
                <Navbar />
                <EventList />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/reports" 
            element={
              <ProtectedRoute>
                <Navbar />
                <Reports />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/booking" 
            element={
              <ProtectedRoute>
                <Navbar />
                <Booking />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/logout" 
            element={
              <ProtectedRoute>
                <Navbar />
                <Logout />
              </ProtectedRoute>
            } 
          />

          {/* Admin Dashboard */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <Navbar />
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Manage Events - Accessed via Admin Dashboard */}
          <Route 
            path="/manage-events" 
            element={
              <ProtectedRoute>
                <Navbar />
                <ManageEvents />
              </ProtectedRoute>
            } 
          />

          {/* Manage Reports - Accessed via Admin Dashboard */}
          <Route 
            path="/manage-reports" 
            element={
              <ProtectedRoute>
                <Navbar />
                <ManageReports />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

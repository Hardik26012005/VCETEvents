// src/Components/Booking.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Booking.css'; // Add some custom styling for the booking section

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings')
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div className="bookings-container">
      {/* <h2>Your Bookings</h2> */}
      {bookings.length > 0 ? (
        <div className="bookings-grid">
          {bookings.map((booking) => (
            <div key={booking._id} className="booking-card">
              <h3 className="booking-event-title">{booking.eventTitle}</h3>
              <p><i className="fas fa-calendar-alt"></i> <strong>Date:</strong> {new Date(booking.eventDate).toDateString()}</p>
              <p><i className="fas fa-user"></i> <strong>Name:</strong> {booking.name}</p>
              <p><i className="fas fa-id-card"></i> <strong>Student ID:</strong> {booking.studentId}</p>
              <p><i className="fas fa-graduation-cap"></i> <strong>Department:</strong> {booking.department}</p>
              <p><i className="fas fa-envelope"></i> <strong>Email:</strong> {booking.email}</p>
              <p><i className="fas fa-phone"></i> <strong>Phone:</strong> {booking.phone}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookings yet.</p>
      )}
    </div>
  );
};

export default Booking;

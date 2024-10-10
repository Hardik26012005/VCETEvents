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
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <div key={booking._id} className="booking-card">
            <h3>{booking.eventTitle}</h3>
            <p><strong>Date:</strong> {new Date(booking.eventDate).toDateString()}</p>
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Student ID:</strong> {booking.studentId}</p>
            <p><strong>Department:</strong> {booking.department}</p>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Phone:</strong> {booking.phone}</p>
          </div>
        ))
      ) : (
        <p>No bookings yet.</p>
      )}
    </div>
  );
};

export default Booking;

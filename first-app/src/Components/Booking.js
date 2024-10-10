// src/Components/Booking.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Booking.css'; // Assuming you want to add styles

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/booking') // Ensure this route is correct
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
            {/* Adjusted date handling */}
            <p><strong>Date:</strong> {booking.eventId ? new Date(booking.eventId.date).toDateString() : 'N/A'}</p>
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Student ID:</strong> {booking.studentId}</p>
            <p><strong>Department:</strong> {booking.department}</p>
            <p><strong>Phone:</strong> {booking.phone}</p>
            <p><strong>Email:</strong> {booking.email}</p>
          </div>
        ))
      ) : (
        <p>No bookings yet.</p>
      )}
    </div>
  );
};

export default Booking;

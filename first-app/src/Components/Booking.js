// Booking.js
import React from 'react';
import './Booking.css'; // Import the CSS file for Booking styling
import { FaCalendarAlt, FaUsers, FaMoneyBillWave } from 'react-icons/fa'; // Import icons from react-icons

const Booking = () => {
  const registeredEvents = [
    {
      id: 1,
      title: 'VCET HACKATHON 2024',
      date: 'October 4, 2024',
      attendees: 150,
      prize: '$2000',
    },
    {
      id: 2,
      title: 'Startup Pitch Fest',
      date: 'November 15, 2024',
      attendees: 100,
      prize: '$1500',
    },
    {
      id: 3,
      title: 'VCET Cultural Fest',
      date: 'December 5, 2024',
      attendees: 300,
      prize: '$1000',
    },
  ];

  return (
    <div className="booking-container">
      <h1 className="booking-title">Your Registered Events</h1>
      <div className="booking-grid">
        {registeredEvents.map(event => (
          <div className="booking-card" key={event.id}>
            <h2>{event.title}</h2>
            <p><FaCalendarAlt /> <strong>Date:</strong> {event.date}</p>
            <p><FaUsers /> <strong>Attendees:</strong> {event.attendees}</p>
            <p><FaMoneyBillWave /> <strong>Prize Money:</strong> {event.prize}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;

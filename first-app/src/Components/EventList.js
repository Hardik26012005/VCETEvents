// src/Components/EventList.js testing2
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventList.css'; // Import your improved CSS file

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div className="events-container">
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event._id} className="event-card">
            <img
              src={event.image || 'https://via.placeholder.com/400x200'} // Fallback for missing image
              alt={event.title}
              className="event-image"
              onError={(e) => e.target.src = 'https://via.placeholder.com/400x200'} // Fallback for broken image
            />
            <div className="event-details">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
              <button className="event-button">View Details</button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-events">No events available at the moment.</p>
      )}
    </div>
  );
};

export default EventList;

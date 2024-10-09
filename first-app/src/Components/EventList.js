// src/Components/EventList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm'; // Import the registration form
import './EventList.css'; // Import your improved CSS file

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // To store the event clicked for modal
  const [isFormOpen, setIsFormOpen] = useState(false); // For handling the registration form

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  // Handle View Details button click
  const handleViewDetails = (event) => {
    setSelectedEvent(event); // Set the clicked event to display in the modal
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedEvent(null); // Clear selected event to close modal
  };

  // Handle opening the registration form
  const handleRegisterClick = () => {
    setIsFormOpen(true);
  };

  // Handle closing the registration form
  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  // Handle submitting the registration form
  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setIsFormOpen(false); // Close the form after submission
    // You can send formData to the server here using Axios
  };

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
              <button className="event-button" onClick={() => handleViewDetails(event)}>
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-events">No events available at the moment.</p>
      )}

      {/* Modal to show event details */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.title}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Description:</strong> {selectedEvent.description}</p>
            <p><strong>Prize:</strong> {selectedEvent.prize || 'No prize available'}</p>
            <button className="modal-close-button" onClick={handleCloseModal}>Close</button>
            <button className="register-button" onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
      )}

      {/* Registration Form Modal */}
      <RegistrationForm isOpen={isFormOpen} onClose={handleFormClose} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default EventList;

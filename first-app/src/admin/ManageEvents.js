// src/admin/ManageEvents.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManageEvents.css'; // Import the CSS file for styling

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [editedEvent, setEditedEvent] = useState(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await axios.get('http://localhost:5000/api/events');
    setEvents(response.data);
  };

  const handleEdit = (event) => {
    setEditedEvent(event);
    setTitle(event.title);
    setDate(event.date);
    setDescription(event.description);
    setImage(event.image);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/events/${id}`);
    fetchEvents(); // Refresh the list
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedEvent = { title, date, description, image };

    await axios.put(`http://localhost:5000/api/events/${editedEvent._id}`, updatedEvent);
    setEditedEvent(null);
    fetchEvents(); // Refresh the list
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const newEvent = { title, date, description, image };

    await axios.post('http://localhost:5000/api/events', newEvent);
    setTitle('');
    setDate('');
    setDescription('');
    setImage('');
    fetchEvents(); // Refresh the list
  };

  return (
    <div className="manage-events-container">
      <h3>Create New Event</h3>
      <form className="event-form" onSubmit={handleCreate}>
        <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="date" placeholder="Event Date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <textarea placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <button type="submit" className="submit-button">Create Event</button>
      </form>

      <h3>Current Events</h3>
      <ul className="events-list">
        {events.map((event) => (
          <li key={event._id} className="event-item">
            <h4>{event.title}</h4>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-buttons">
              <button onClick={() => handleEdit(event)} className="edit-button">Edit</button>
              <button onClick={() => handleDelete(event._id)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {editedEvent && (
        <form className="event-form" onSubmit={handleUpdate}>
          <h4>Edit Event</h4>
          <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input type="date" placeholder="Event Date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <textarea placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
          <button type="submit" className="submit-button">Update Event</button>
        </form>
      )}
    </div>
  );
};

export default ManageEvents;

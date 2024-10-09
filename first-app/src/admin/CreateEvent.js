// src/admin/CreateEvent.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [prize, setPrize] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const newEvent = { title, date, description, image };

    try {
      const response = await axios.post('http://localhost:5000/api/events', newEvent);
      console.log(response.data); // Log the response data
      // Reset the form fields after submission
      setTitle('');
      setDate('');
      setDescription('');
      setImage('');
      setPrize('');
  
    } catch (error) {
      console.error('There was an error creating the event!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="date" placeholder="Event Date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" placeholder="Prizepool" value={prize} onChange={(e) => setPrize(e.target.value)} required />
      <textarea placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;

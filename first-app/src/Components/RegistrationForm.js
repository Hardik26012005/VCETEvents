// src/Components/RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css'; // Add styles for the form

const RegistrationForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    department: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="studentId" 
            placeholder="Student ID" 
            value={formData.studentId} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="department" 
            placeholder="Department" 
            value={formData.department} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

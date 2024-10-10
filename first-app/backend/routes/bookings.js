// backend/routes/bookings.js
const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// GET all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find(); 
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
});

// POST a new booking
router.post('/', async (req, res) => {
  const { eventId, eventTitle, eventDate, name, studentId, department, phone, email } = req.body;
  const newBooking = new Booking({
    eventId,
    eventTitle,
    eventDate,
    name,
    studentId,
    department,
    phone,
    email,
  });

  try {
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: 'Error creating booking' });
  }
});

module.exports = router;

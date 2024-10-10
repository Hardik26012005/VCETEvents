const express = require('express');
const Booking = require('../models/Booking');
const fs = require('fs'); // File system module to create text files

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

// Generate text file for a specific event's bookings
router.get('/export/:eventId', async (req, res) => {
  try {
    const { eventId } = req.params;
    const bookings = await Booking.find({ eventId });

    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this event' });
    }

    // Generate text content for the file in a table format
    let tableHeader = `| ${'Name'.padEnd(20)} | ${'Student ID'.padEnd(12)} | ${'Department'.padEnd(15)} | ${'Phone'.padEnd(15)} | ${'Email'.padEnd(30)} |\n`;
    let tableDivider = `|${'-'.repeat(22)}|${'-'.repeat(14)}|${'-'.repeat(17)}|${'-'.repeat(17)}|${'-'.repeat(32)}|\n`;
    let tableRows = bookings.map(booking => {
      return `| ${booking.name.padEnd(20)} | ${booking.studentId.padEnd(12)} | ${booking.department.padEnd(15)} | ${booking.phone.padEnd(15)} | ${booking.email.padEnd(30)} |\n`;
    }).join('');

    const fileContent = tableHeader + tableDivider + tableRows;
    
    const filePath = `./bookings_${eventId}.txt`;
    fs.writeFileSync(filePath, fileContent);

    // Send the file to the client
    res.download(filePath, (err) => {
      if (err) {
        console.error('Error sending file:', err);
      }
      // Delete the file after sending
      fs.unlinkSync(filePath);
    });
  } catch (error) {
    res.status(500).json({ message: 'Error generating text file' });
  }
});

module.exports = router;

// backend/routes/eventRoutes.js
const express = require('express');
const Event = require('../models/Event');

const router = express.Router();

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events' });
  }
});

// POST a new event
router.post('/', async (req, res) => {
  const { title, date, description, image, prize} = req.body;
  const newEvent = new Event({ title, date, description, image, prize });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Error creating event' });
  }
});

// PUT (update) an existing event
router.put('/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Error updating event' });
  }
});

// DELETE an event
router.delete('/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting event' });
  }
});

module.exports = router;

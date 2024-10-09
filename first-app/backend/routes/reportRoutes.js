const express = require('express');
const Report = require('../models/Report'); // Assuming the report model is defined in ../models/Report

const router = express.Router();

// GET all reports
router.get('/', async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new report
router.post('/', async (req, res) => {
  const report = new Report({
    eventId: req.body.eventId,
    attendees: req.body.attendees,
    winners: req.body.winners,
    prizeMoney: req.body.prizeMoney
  });

  try {
    const newReport = await report.save();
    res.status(201).json(newReport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (edit) a report
router.put('/:id', async (req, res) => {
  try {
    const updatedReport = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedReport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a report
router.delete('/:id', async (req, res) => {
  try {
    await Report.findByIdAndDelete(req.params.id);
    res.json({ message: 'Report deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

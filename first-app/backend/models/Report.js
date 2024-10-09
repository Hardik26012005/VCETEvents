// backend/models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  attendees: { type: Number, required: true },
  winners: { type: String, required: true },
  prizeMoney: { type: String, required: true }
});

module.exports = mongoose.model('Report', reportSchema);

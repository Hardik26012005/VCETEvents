const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  image: { type: String },
  prize: {type: String} // URL or file path for the image
});

module.exports = mongoose.model('Event', eventSchema);

// backend/models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  eventId: { type: String},
  eventTitle: { type: String},
  name: { type: String },
  studentId: { type: String  },
  department: { type: String  },
  phone: { type: String },
  email: { type: String},
});
// { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const eventRoutes = require('./routes/eventRoutes');
const reportRoutes = require('./routes/reportRoutes'); // Import report routes
const bookingRoutes = require('./routes/bookings');    // Import booking routes
const authRoutes = require('./routes/authRoutes');     // Import authentication routes

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/events', eventRoutes);        // Events routes
app.use('/api/reports', reportRoutes);      // Reports routes
app.use('/api/bookings', bookingRoutes);    // Bookings routes
app.use('/api/auth', authRoutes);           // Authentication routes (login, signup, OTP)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

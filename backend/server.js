const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const flightRoutes = require('./routes/flight.routes');
const bookingRoutes = require('./routes/booking.routes');

dotenv.config();

// Connect Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

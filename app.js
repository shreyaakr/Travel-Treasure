/* eslint-disable no-undef */
// app.js (or server.js)

const express = require('express');
const connectDB = require('./config/db'); // Import MongoDB connection
const userRoutes = require('./routes/userRoutes'); // Import userRoutes

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/users', userRoutes); // Mount userRoutes under /api/users

// Example route using your existing middleware
app.get('/api/example', yourExistingMiddleware, (req, res) => {
  // Your route handler logic
  res.send('Example route with existing middleware');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

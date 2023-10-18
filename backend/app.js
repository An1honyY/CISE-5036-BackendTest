const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://user1:HFTGHEsrTYC8OJWt@cluster0.hvwapzz.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your API routes and handlers
app.get('/api/articles', (req, res) => {
  // Handle your MongoDB queries and responses here
  res.json({ message: 'Hello from MongoDB!' });
});

// Export the Express app
module.exports = app;
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
app.get('/', (req, res) => {
    res.send('Hello world!');
  });
  

// Export the Express app
module.exports = app;
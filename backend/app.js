const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const articles = require('./routes/api/articles');
const suggest = require('./routes/api/suggest')
const moderate = require('./routes/api/moderate');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Middleware for JSON parsing
app.use(express.json({ extended: false }));


app.get('/', (req, res) => {
    res.send('Hello world!');
  });
  
// Define your API routes and handlers
app.use('/api/articles', articles);
app.use('/api/suggest', suggest);
app.use('/api/moderate', moderate);

// Export the Express app
module.exports = app;
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const articles = require('./routes/api/articles');
const suggest = require('./routes/api/suggest')
const moderate = require('./routes/api/moderate');

const app = express();
// Connect Database
// Middleware for JSON parsing
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('SPEED Backend Running');
  });

// Define your API routes and handlers
app.use('/api/articles', articles);
app.use('/api/suggest', suggest);
app.use('/api/moderate', moderate);


const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));


// Export the Express app
module.exports = app;

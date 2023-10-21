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

/*
app.get('/', (req, res) => {
    res.send('Hello world!');
  });
  
// Define your API routes and handlers
app.use('/api/articles', articles);
app.use('/api/suggest', suggest);
app.use('/api/moderate', moderate);
*/

const router = app.Router();

// Load Article model
const Article = require('./models/Articles');

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('article route testing!'));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});

// @route GET api/articles/:id
// @description Get single article by id
// @access Public
router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(404).json({ noarticlefound: 'No Article found' }));
});

// @route GET api/articles
// @description add/save article
// @access Public
router.post('/', (req, res) => {
    Article.create(req.body)
        .then(article => res.json({ msg: 'Article added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route GET api/articles/:id
// @description Update article
// @access Public
router.put('/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body)
        .then(article => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/articles/:id
// @description Delete article by id
// @access Public
router.delete('/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, req.body)
        .then(article => res.json({ mgs: 'Article entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a article' }));
});

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));

// Export the Express app
module.exports = app;
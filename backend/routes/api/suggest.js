// routes/suggest.js
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();


;

const Article = mongoose.model('Article', {
  author: String,
  title: String,
  journal: String,
  year: String,
  volume: String,
  number: String,
  pages: String,
});

router.post('/', async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.status(200).send({ message: 'Article submitted successfully.' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to submit the article.' });
  }
});

module.exports = router;

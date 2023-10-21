const express = require('express');
const mongoose = require('mongoose');
const Article = require('../../models/Articles');

;
const router = express.Router();

router.get('/pending', async (_req, res) => {
  try {
    const articles = await Article.find({ status: 'waiting' });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve pending articles.' });
  }
});

router.get('/approved', async (_req, res) => {
  try {
    const articles = await Article.find({ status: 'approved' });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve approved articles.' });
  }
});


router.put('/approve/:id', async (req, res) => {
  try {
    await Article.findByIdAndUpdate(req.params.id, { status: 'approved' });
    res.status(200).send({ message: 'Article approved.' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to approve the article.' });
  }
});


router.put('/reject/:id', async (req, res) => {
  try {
    await Article.findByIdAndUpdate(req.params.id, { status: 'rejected' });
    res.status(200).send({ message: 'Article rejected.' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to reject the article.' });
  }
});


router.get('/rejected', async (req, res) => {
  try {
    const articles = await Article.find({ status: 'rejected' });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve rejected articles.' });
  }
});

module.exports = router;
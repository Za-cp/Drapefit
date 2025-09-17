const express = require('express');
const router = express.Router();
const FitQuiz = require('../models/fitQuizSchema');

// POST /api/fitquiz
router.post('/', async (req, res) => {
  try {
    const newFitQuiz = new FitQuiz(req.body);
    await newFitQuiz.save();
    res.status(200).json({ message: 'FitQuiz submitted successfully!' });
  } catch (error) {
    console.error('Error submitting FitQuiz:', error);
    res.status(500).json({ message: 'Error submitting FitQuiz' });
  }
});

module.exports = router;

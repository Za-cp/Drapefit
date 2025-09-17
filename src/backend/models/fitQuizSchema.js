// models/fitQuizSchema.js
const mongoose = require('mongoose');

const fitQuizSchema = new mongoose.Schema({
  size: { type: String },
  fit: { type: String },
  bodyShape: { type: String },
  chest: { type: String },
  back: { type: String },
  preferredFit: { type: String },
}, { timestamps: true });

const FitQuiz = mongoose.model('FitQuiz', fitQuizSchema);

module.exports = FitQuiz;

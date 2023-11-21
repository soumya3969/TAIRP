const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String },
  // Add other movie fields as needed
});

module.exports = mongoose.model('Movie', movieSchema);

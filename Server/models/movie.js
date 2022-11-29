const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  movieid: String,
  year: Number,
  description: String,
  trailerLink: String,
  cover: String,
  casting: [String]
})

module.exports = mongoose.model('Movie', MovieSchema, 'movies');

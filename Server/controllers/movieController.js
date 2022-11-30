const Movie = require("../models/Movie");

exports.getBillboard = async (req, res) => {
    const movies = await Movie.find()
    res.json(movies)
}

exports.getMovie = async (req, res) => {
    const movie = await Movie.findOne({ 'movieid': req.params.movieId })
    res.json(movie)
}

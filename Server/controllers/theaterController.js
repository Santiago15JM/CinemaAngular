const Theater = require("../models/theater")

exports.getTheaters = async (req, res) => {
    const theaters = await Theater.find()
    res.json(theaters)
}
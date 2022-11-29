const mongoose = require('mongoose')

const TheaterSchema = new mongoose.Schema({
    name: String,
    location: String,
    functions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Function' }],
})

module.exports = mongoose.model('Theater', TheaterSchema, 'theaters');
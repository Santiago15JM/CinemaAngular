const mongoose = require('mongoose')

const FunctionSchema = new mongoose.Schema({
    room: { type: Number, required: true },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    reservations: [],
    schedules: [Date]
})

module.exports = mongoose.model('Function', FunctionSchema, 'functions')

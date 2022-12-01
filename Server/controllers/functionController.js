const Function = require('../models/function')
const Theater = require('../models/theater')



exports.getFunctions = async (req, res) => {
    const theater = await Theater.findOne({ '_id': req.params.theaterId }).populate({ path: 'functions', populate: { path: 'movie' } })
    res.json(theater)
}

exports.getFunction = async (req, res) => {
    const func = await Function.findOne({ '_id': req.params.funcId }).populate('movie')
    res.json(func)
}

exports.makeReservation = async (req, res) => {
    const reservation = req.body;

    const func = await Function.findById(req.params.funcId)
    func.reservations.push(reservation)
    await func.save().then(_ => {
        res.send('Ok')
    })
}

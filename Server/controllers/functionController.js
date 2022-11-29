const Function = require('../models/function')
const Theater = require('../models/theater')



exports.getFunctions = async (req, res) => {
    const theater = await Theater.findOne({ '_id': req.params.theaterId }).populate({ path: 'functions', populate: { path: 'movie' } })
    // const theater = await Theater.findOne({ '_id': req.params.theaterId }).populate('functions')

    res.json(theater)
}

exports.getFunction = async (req, res) => {
    const func = await Function.findOne({ '_id': req.params.funcId }).populate('movie')
    res.json(func)
}

exports.makeReservation = async (req, res) => {

    console.log(req.body);
    const reservation = req.body;

    const func = await Function.findById(req.params.funcId)
    func.reservations.push(reservation)
    await func.save().then(_ => {
        res.send('Ok')
    })
}

// exports.addFunction = async (req, res) => {
//     try {
//         let func = new Function();
//         mov = Movie.findOne();
//         func.movie = '6383cc630d713e17fb2642b9';
//         func.room = 10;

//         await func.save();
//         res.send(func);

//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Hubo un error');
//     }
// }

// exports.test = async (req, res) => {
//     func = await Function.findOne()
//     console.log("func: " + func)
//     mov = await Movie.find({ "_id": func.movie })
//     console.log("mov: " + mov)
//     res.send(`Room: ${func.room}, Movie: ${mov}`)
// }

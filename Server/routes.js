const express = require('express');
const router = express.Router();
const movieController = require('./controllers/movieController');
const functionController = require('./controllers/functionController');
const theaterController = require('./controllers/theaterController');

// Rutas
router.get('/', (req, res) => {
    res.send('Main')
})

router.get('/getMovie/:movieId', movieController.getMovie)
router.get('/getFunction/:funcId', functionController.getFunction)
router.get('/getBillboard', movieController.getBillboard)
router.get('/getFunctions/:theaterId', functionController.getFunctions)
router.get('/getTheaters', theaterController.getTheaters)
router.put('/makeReservation/:funcId', functionController.makeReservation)

module.exports = router;

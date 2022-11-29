const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");
const connectDB = require('./config/db');
const port = 4000

// Creamos el servidor
const app = express();
//Para aceptar requests de otros dominios
app.use(cors())
// Conectamos a la DB
connectDB();

// Usar body parser para el cuerpo de los requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Se incluyen las rutas definidas
app.use('/', require('./routes'));

app.listen(port, () => {
    console.log('El servidor esta corriendo!!');
    console.log(`http://localhost:${port}/`)
})

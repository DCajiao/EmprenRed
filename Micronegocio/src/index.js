const express = require('express');
const micronegocioController = require('./controllers/micronegocioController');
const morgan = require('morgan');
const cors = require('cors'); // Importa el módulo cors
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// Habilita CORS para permitir solicitudes desde cualquier origen
app.use(cors());

app.use(micronegocioController);
app.listen(3007, () => {
    console.log('Microservicio micronegocio ejecutandose en el puerto 3007');
});
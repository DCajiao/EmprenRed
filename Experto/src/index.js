const express = require('express');
const expertoController = require('./controllers/expertoController');
const morgan = require('morgan');
const cors = require('cors'); // Importa el módulo cors
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// Habilita CORS para permitir solicitudes desde cualquier origen
app.use(cors());

app.use(expertoController);
app.listen(3008, () => {
    console.log('Microservicio micronegocio ejecutandose en el puerto 3008');
});
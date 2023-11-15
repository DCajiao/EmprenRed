const express = require('express');
var cors = require('cors')
const solicitudController = require('./controllers/solicitudController');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
app.use(solicitudController);
app.listen(3009, () => {
    console.log('Microservicio solicitudes ejecutandose en el puerto 3009');
});
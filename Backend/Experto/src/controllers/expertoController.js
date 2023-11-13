const { Router, json } = require('express');
const router = Router();
const expertoModel = require('../models/expertoModel');
const axios = require('axios');

router.get('/experto' , async (req,res) => {
    var result;
    result = await expertoModel.traerExpertos();
    res.json(result);
});

router.get('/experto/:usuario', async (req, res) => {
    const usuario = req.params.usuario;
    var result;
    result = await expertoModel.traerExperto(usuario);
    res.json(result[0]);
});

router.get('/experto/:usuario/:password', async (req, res) => {
    const usuario = req.params.usuario;
    const password = req.params.password;
    var result;
    result = await expertoModel.loginExperto(usuario, password);
    res.json(result);
});

router.post('/experto', async (req,res) => {
    const usuario = req.body.usuario;
    const password = req.body.password;
    const nombre_completo = req.body.nombre_completo;
    const numero_telefonico = req.body.numero_telefonico;
    const correo = req.body.correo;
    const cargo = req.body.cargo;
    const tiempo_experiencia = req.body.tiempo_experiencia;
    var result;
    result = await expertoModel.crearExperto(usuario, password, nombre_completo, numero_telefonico, correo, cargo, tiempo_experiencia);
    console.log(result);
    res.send("Experto creado");

});



module.exports = router;
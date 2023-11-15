const { Router, json } = require('express');
const router = Router();
const micronegocioModel = require('../models/micronegocioModel');
// Crear un nuevo usuario para el micronegocio
router.post('/micronegocio', async (req, res) => {
    const usuario = req.body.usuario;
    const password = req.body.password;
    const correo = req.body.correo;
    const campo = req.body.campo;
    const tiempo_en_mercado = req.body.tiempo_en_mercado;
    const vacantes = req.body.vacantes;
    var result;
    result = await micronegocioModel.crearMicronegocio(usuario, password, correo, campo, tiempo_en_mercado, vacantes);
    res.send("Micronegocio creado");
});
router.get('/micronegocio', async (req, res) => {
    var result; 
    result = await micronegocioModel.traerMicronegocios();
    res.json(result);
});
router.get('/micronegocio/:id', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await micronegocioModel.traerMicronegocio(id);
    res.json(result[0]);
});
router.get('/registrarVacante/:id', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await micronegocioModel.registrarVacante(id);
    if (typeof result === 'string') {
        res.json({'result':result});
    } else {
        res.json(result);
    }
});
router.put('/micronegocio/:id', async (req, res) => {
    const id = req.params.id;
    const vacantes = req.body.vacantes;
    if (vacantes < 0) {
        res.send("Las vacantes no puede ser menor de cero");
        return;
    }
    var result = await micronegocioModel.actualizarVacantes(id, vacantes);
    res.send("vacantes actualizadas");
});
router.get('/micronegocio/:usuario/:password', async (req, res) => {
    const usuario = req.params.usuario;
    const password = req.params.password;
    var result;
    result = await micronegocioModel.loginMicronegocio(usuario, password);
    res.json(result);
});

router.get('/micronegocio/:campo' , async (req, res) => {
    const campo = req.params.campo;
    var result;
    result = await micronegocioModel.traerCampo(campo);
    res.json(result[0]);
});

module.exports = router;



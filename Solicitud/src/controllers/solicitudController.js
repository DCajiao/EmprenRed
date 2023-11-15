const express = require('express');
const router = express.Router();
const solicitudModel = require('../models/solicitudModel');
const axios = require('axios');

router.get('/solicitud/', async(req,res) =>{
    var result;
    result = await solicitudModel.traerSolicitudes();
    res.json(result);
});
router.get('/solicitud/:id', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await solicitudModel.traerSolicitud(id);
    res.json(result[0]);
});
router.get('/micronegocio', async (req, res) => {
    var result; 
    result = await solicitudModel.traerMicronegocios();
    res.json(result);
});
router.get('/registrarVacante/:idVacatante/:idUsuario', async (req, res) => {
    const idVacatante = req.params.idVacatante;
    const idUsuario = req.params.idUsuario;
    var result;
    result = await solicitudModel.registrarVacante(idVacatante, idUsuario);
    if (typeof result === 'string') {
        res.json({'result': result});
    } else {
        res.json(result);
    }
});
router.post('/solicitud/', async (req, res) => {
    const usuario = req.body.usuario;
    const items = req.body.items;
    const id = req.body.id;
    const disponibilidad = await verificarDisponibilidad(items);
    if (!disponibilidad) {
        return res.json({ error: 'No hay vacantes disponibles' });
    }
    const response = await axios.get(`http://micronegocio:3007/micronegocio/${id}`);
    const nombreM = response.data.usuario;
    const correoM = response.data.correo;
    const campoM = response.data.campo;
    const responseExperto = await axios.get(`http://experto:3008/experto/${usuario}`);
    const name = responseExperto.data.nombre_completo;
    const numero = responseExperto.data.numero_telefonico;
    const correo = responseExperto.data.correo;
    const cargo = responseExperto.data.cargo;
    solicitud = {
        "nombreNegocio": nombreM, "correoNegocio": correoM, "campoNegocio": campoM, "nombreExperto": name, "numeroExperto": numero, "correoExperto": correo, "cargoExperto":
        cargo
    }
    const solicitudRes = await solicitudModel.crearSolicitud(solicitud)
    await actualizarVacantes(items);
    return res.json(solicitud);
});
async function verificarDisponibilidad(items){
    let disponibilidad  = true;
    for (const producto of items){
        const response = await
            axios.get(`http://micronegocio:3007/micronegocio/${producto.id}`);
        if (response.data.vacantes <= 0){
            disponibilidad = false;
            break;
        }
    }
    return disponibilidad;
}
async function actualizarVacantes(items) {
    for (const producto of items) {
        const resultSelect = await
            axios.get(`http://micronegocio:3007/micronegocio/${producto.id}`);
            if (resultSelect[0].length > 0) {
                const newCount = resultSelect[0][0]['vacantes'];
                if (newCount - 1 < 0) {
                    return "No hay vacantes disponibles";
                }
                await axios.put(`http://micronegocio:3007/micronegocio/${producto.id}`
        )};
    }
}
module.exports = router;
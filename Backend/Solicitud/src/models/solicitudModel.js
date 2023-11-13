const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost', // Aqui ya esta con la ip porque ya me sirve pero si no es con la ip es con el localhost
    user: 'root',
    password: 'mysql',     // el mysql lo tengo con contraseña y por eso le coloco
    database: 'proyecto', // Este es el nombre de mi base de datos
    port: 3306,
});
async function traerSolicitudes(){
    const result = await connection.query('SELECT * FROM solicitud');
    return result[0];
}
async function traerSolicitud(id){
    const result = await connection.query('SELECT * FROM solicitud WHERE id = ?', id);
    return result[0];
}

async function traerMicronegocios(){ 
    const result = await connection.query('SELECT * FROM micronegocios')
    return result[0];
}

async function crearSolicitud(solicitud){
    const nombreNegocio = solicitud.nombreNegocio;
    const correoNegocio = solicitud.correoNegocio;
    const campoNegocio = solicitud.campoNegocio;
    const nombreExperto = solicitud.nombreExperto;
    const numeroExperto = solicitud.numeroExperto;
    const correoExperto = solicitud.correoExperto;
    const cargoExperto = solicitud.cargoExperto;

    const result = await connection.query('INSERT INTO solicitud VALUES (NULL,?,?,?,?,?,?,?);',
    [nombreNegocio, correoNegocio, campoNegocio, nombreExperto, Number(numeroExperto), correoExperto, cargoExperto]);
    return result[0];
}

async function registrarVacante(idVacatante, idUsuario) {
    const resultSelect = await connection.query('SELECT vacantes FROM micronegocios WHERE id = ?', idVacatante);
    if (resultSelect[0].length > 0) {
        console.log(resultSelect[0])
        const newCount = resultSelect[0][0]['vacantes'];
        if (newCount - 1 < 0) {
            return "No hay vacantes disponibles";
        }
        const resultUpdate = await connection.query('UPDATE micronegocios SET vacantes = ? WHERE id = ?', [newCount-1, idVacatante]);
        const vacante = await connection.query('SELECT * FROM micronegocios WHERE id = ?', idVacatante);
        const usuario = await connection.query('SELECT * FROM expertos WHERE id = ?', idUsuario);
        const solicitud = {
            nombreNegocio: vacante[0][0].usuario,
            correoNegocio: vacante[0][0].correo,
            campoNegocio: vacante[0][0].campo,
            nombreExperto: usuario[0][0].nombre_completo,
            numeroExperto: usuario[0][0].numero_telefonico,
            correoExperto: usuario[0][0].correo,
            cargoExperto: usuario[0][0].cargo,
        }
        console.log({solicitud})
        crearSolicitud(solicitud);
        return traerSolicitudes();
    } else {
        return "No existe algún micronegocio con ese ID";
    }
    return result;
}

module.exports = {
    crearSolicitud,
    traerSolicitudes,
    traerSolicitud,
    registrarVacante,
    traerMicronegocios
}

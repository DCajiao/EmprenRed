const mysql = require('mysql2/promise');
const connection = mysql.createPool({
  host: 'db_micronegocio',
  user: 'root',
  password: 'mysql', 
  database: 'proyecto',
  port: 3306,
});
async function crearMicronegocio(usuario, password, correo, campo, tiempo_en_mercado, vacantes){
    const result = await connection.query('INSERT INTO micronegocios VALUES(NULL,?,?,?,?,?,?)', [usuario, password, correo, campo, tiempo_en_mercado, vacantes]);
    return result; 
}
async function traerMicronegocios(){ 
    const result = await connection.query('SELECT * FROM micronegocios')
    return result[0];
}
async function traerMicronegocio(id) {
  const result = await connection.query('SELECT * FROM micronegocios WHERE id = ?', id);
  return result[0];
}
async function actualizarVacantes(id, vacantes) {
  const result = await connection.query('UPDATE micronegocios SET vacantes = ? WHERE id = ?', [vacantes, id]);
  return result;
}
async function registrarVacante(id) {
  const resultSelect = await connection.query('SELECT vacantes FROM micronegocios WHERE id = ?', id);
  if (resultSelect[0].length > 0) {
    const newCount = resultSelect[0][0]['vacantes'];
    if (newCount - 1 < 0) {
      return "No hay vacantes disponibles";
    }
    const resultUpdate = await connection.query('UPDATE micronegocios SET vacantes = ? WHERE id = ?', [newCount-1, id]);
    return traerMicronegocios();
  } else {
    return "No existe algún micronegocio con ese ID";
  }
  return result;
}
async function loginMicronegocio(usuario, password){
  const result = await connection.query('SELECT * FROM micronegocios WHERE usuario = ? AND password = ?', [usuario, password]);
  if (result[0].length > 0) {
    return result[0][0];
  } else {
    return false
  }
}

async function traerCampo(campo) {
  const result = await connection.query('SELECT * FROM micronegocios WHERE campo = ?', campo);
  return result[0];
}

module.exports = {
    crearMicronegocio,
    traerMicronegocios,
    traerMicronegocio,
    actualizarVacantes,
    loginMicronegocio,
    registrarVacante,
    traerCampo
}

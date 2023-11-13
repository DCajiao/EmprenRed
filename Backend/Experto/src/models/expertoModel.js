const mysql = require('mysql2/promise');
const connection = mysql.createPool({
   host: 'localhost', // Aqui ya esta con la ip porque ya me sirve pero si no es con la ip es con el localhost
   user: 'root',
   password: 'mysql',     // el mysql lo tengo con contraseña y por eso le coloco
   database: 'proyecto', // Este es el nombre de mi base de datos
   port: 3306,
});
async function crearExperto(usuario, password, nombre_completo, numero_telefonico, correo, cargo, tiempo_experiencia){
   console.log("crear experto.")
   const result = await connection.query('INSERT INTO expertos VALUES(NULL,?, ?, ?, ?, ?, ?, ?)',[usuario, password, nombre_completo, numero_telefonico, correo, cargo, tiempo_experiencia]);
   return result;
}
async function traerExperto(usuario){
   const result = await connection.query('SELECT * FROM expertos WHERE usuario = ?', usuario);
   return result[0];
}
async function loginExperto(usuario, password){
   const result = await connection.query('SELECT * FROM expertos WHERE usuario = ? AND password = ?', [usuario, password]);
   if (result[0].length > 0) {
      return result[0][0];
   } else {
      return false
   }
}
async function traerExpertos(){
   const result = await connection.query('SELECT * FROM expertos');
   return result[0];
}
module.exports = {
   crearExperto,
   traerExpertos,
   traerExperto,
   loginExperto
}
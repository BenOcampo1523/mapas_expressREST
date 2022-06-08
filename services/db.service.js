const mysql = require('mysql2/promise');
const config = require('../configs/dbconfig');

/**  async: Palabra reservada que convierte una función en asincrónica, para que se ejecute posterior a la llamada.
 *   await: Palabra reservada para poner en espera un resultado o retorno de una función asincrónica.
*/

async function query(sql) {
    const connection = await mysql.createConnection(config.db);
    const [results,] = await connection.execute(sql);

    if(!results) {
        return [];
    }

    return results;
}

module.exports = {
    query
}

const db = require('./db.service');

class TaqueriasService {
  constructor() {
    this.generate();
  }

  generate() {

  }

  async create(data) {
    const result = await db.query(
      `INSERT INTO tacolizador.taquerias (nombre, calidad, precio, comentario, latitud, longitud, pagina_fb) VALUES (
        '${data.nombre}', ${data.calidad}, ${data.precio}, '${data.comentario}', ${data.latitud}, ${data.longitud}, '${data.pagina_fb}'
      )`
    );
    let message = 'Error al crear datos de la taquería.';

    if(result.affectedRows) {
      message = 'Datos de la taquería añadidos.';
    }

    return message;
  }

  async find() {
    const result = await db.query(`SELECT * FROM taquerias`);
    let message = 'Error al consultar la base de datos.';

    if(result.affectedRows) {
      message = 'Mostrando datos de la tabla...';
    }

    return message;
  }

  async findOne(id) {
    const result = await db.query(`SELECT * FROM taquerias WHERE id_taquerias=${id}`);
    let message = 'Error al consultar el dato deseado.';

    if(result.affectedRows) {
      message = 'Mostrando datos del ID deseado...';
    }

    return message;
  }

  async update(id, changes) {
    const result = await db.query(
      `UPDATE tacolizador.taquerias SET
        nombre='${changes.nombre}',
        calidad=${changes.calidad},
        precio=${changes.precio},
        comentario='${changes.comentario}',
        latitud=${changes.latitud},
        longitud=${changes.longitud},
        pagina_fb='${changes.pagina_fb}',
      WHERE id_taqueria = ${id}`
    );
    let message = 'Error al actualizar los datos.';

    if(result.affectedRows) {
      message = 'Datos actualizados con éxito.';
    }

    return message;
  }

  async delete(id) {
    const result = await db.query(`DELETE FROM taquerias WHERE id_taquerias=${id}`);
    let message = `Error al eliminar datos.`;

    if(!result.affectedRows) {
      message = `Datos borrados con éxito.`;
    }
  }
}

module.exports = TaqueriasService;

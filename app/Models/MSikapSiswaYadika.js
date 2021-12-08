'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MSikapSiswaYadika extends Model {
    static get table() {
        return "m_sikap_siswa_yadika";
      }
}

module.exports = MSikapSiswaYadika

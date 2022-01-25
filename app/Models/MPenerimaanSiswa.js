'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MPenerimaanSiswa extends Model {
    static get table() {
        return "m_penerimaan_siswa";
      }

    user() {
        return this.belongsTo("App/Models/User", "m_user_id");
      }
}

module.exports = MPenerimaanSiswa

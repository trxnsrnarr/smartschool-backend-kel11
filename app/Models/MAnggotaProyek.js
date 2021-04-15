'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MAnggotaProyek extends Model {
    static get table() {
        return "m_anggota_proyek";
      }
}

module.exports = MAnggotaProyek

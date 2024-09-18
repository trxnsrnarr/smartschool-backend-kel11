'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MAnggotaProyekRole extends Model {
    static get table() {
        return "m_anggota_proyek_role";
      }
}

module.exports = MAnggotaProyekRole

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TkPekerjaanProyekAktivita extends Model {
    static get table() {
        return "tk_pekerjaan_proyek_aktivitas";
    }
}

module.exports = TkPekerjaanProyekAktivita

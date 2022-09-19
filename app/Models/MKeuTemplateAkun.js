'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKeuTemplateAkun extends Model {
    static get table() {
        return "m_keu_template_akun";
      }
}

module.exports = MKeuTemplateAkun

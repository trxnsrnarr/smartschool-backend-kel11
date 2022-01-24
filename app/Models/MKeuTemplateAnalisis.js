'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKeuTemplateAnalisis extends Model {
    static get table() {
        return "m_keu_template_analisis";
      }
      akun() {
        return this.belongsTo("App/Models/MKeuAkun");
      }
}

module.exports = MKeuTemplateAnalisis

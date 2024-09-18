"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkStatusPekerjaan extends Model {
  static get table() {
    return "tk_status_pekerjaan";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
  pekerjaan() {
    return this.belongsTo("App/Models/MPekerjaan", "m_pekerjaan_id");
  }
}

module.exports = TkStatusPekerjaan;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkSuratKeputusanUser extends Model {
  static get table() {
    return "tk_surat_keputusan_user";
  }

  surat() {
    return this.belongsTo("App/Models/MSuratKeputusan");
  }
  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = TkSuratKeputusanUser;

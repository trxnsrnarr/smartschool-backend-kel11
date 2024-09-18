"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MAnggotaProyek extends Model {
  static get table() {
    return "m_anggota_proyek";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
  proyek() {
    return this.belongsTo("App/Models/MProyek");
  }
  role() {
    return this.hasOne("App/Models/MAnggotaProyekRole");
  }
}

module.exports = MAnggotaProyek;

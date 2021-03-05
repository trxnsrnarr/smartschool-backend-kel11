"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MAnggotaRombel extends Model {
  static get table() {
    return "m_anggota_rombel";
  }

  rombel() {
    return this.belongsTo("App/Models/MRombel");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MAnggotaRombel;

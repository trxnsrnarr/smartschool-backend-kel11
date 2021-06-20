"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRombel extends Model {
  static get table() {
    return "m_rombel";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  anggotaRombel() {
    return this.hasMany("App/Models/MAnggotaRombel");
  }

  timeline() {
    return this.hasMany("App/Models/MTimeline");
  }

  materiRombel() {
    return this.hasMany("App/Models/TkMateriRombel");
  }
  jurusan() {
    return this.belongsTo("App/Models/MJurusan");
  }
}

module.exports = MRombel;

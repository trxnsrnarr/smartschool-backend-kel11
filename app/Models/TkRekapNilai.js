"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkRekapNilai extends Model {
  static get table() {
    return "tk_rekap_nilai";
  }
  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
  Rombel() {
    return this.hasMany("App/Models/MRombel");
  }
}

module.exports = TkRekapNilai;

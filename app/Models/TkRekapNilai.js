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

  rekapRombel() {
    return this.belongsTo("App/Models/MRekapRombel");
  }
}

module.exports = TkRekapNilai;

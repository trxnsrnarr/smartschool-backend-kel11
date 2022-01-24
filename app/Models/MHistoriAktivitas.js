"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MHistoriAktivitas extends Model {
  static get table() {
    return "m_histori_aktivitas";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MHistoriAktivitas;

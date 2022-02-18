"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MDisposisi extends Model {
  static get table() {
    return "m_disposisi";
  }
  surat() {
    return this.belongsTo("App/Models/MSurat");
  }
  pelaporanDisposisi() {
    return this.belongsTo("App/Models/MPelaporanDisposisi");
  }
  user() {
    return this.belongsTo("App/Models/User","m_user_id");
  }
}

module.exports = MDisposisi;

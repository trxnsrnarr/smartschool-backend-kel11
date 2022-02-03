"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRpp extends Model {
  static get table() {
    return "m_rpp";
  }

  mataPelajaran() {
    return this.belongsTo("App/Models/MMataPelajaran");
  }
  ta() {
    return this.belongsTo("App/Models/Mta");
  }

  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MRpp;

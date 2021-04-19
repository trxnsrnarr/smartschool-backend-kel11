"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MProyek extends Model {
  static get table() {
    return "m_proyek";
  }
  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }
  status() {
    return this.belongsTo("App/Models/MStatusProyek");
  }
}

module.exports = MProyek;

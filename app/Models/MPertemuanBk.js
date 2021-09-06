"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPertemuanBk extends Model {
  static get table() {
    return "m_perusahaan";
  }
  jadwal() {
    return this.belongsTo("App/Models/MJadwalPertemuan");
  }
  user() {
    return this.belongsTo("App/Models/User");
  }
  userGuru() {
    return this.belongsTo("App/Models/User", "m_user_guru_id");
  }
}

module.exports = MPertemuanBk;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPertemuanBk extends Model {
  static get table() {
    return "m_pertemuan_bk";
  }
  jadwal() {
    return this.belongsTo(
      "App/Models/MJadwalKonsultasi",
      "id",
      "m_pertemuan_bk_id"
    );
  }
  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
  userGuru() {
    return this.belongsTo("App/Models/User", "m_user_guru_id");
  }
}

module.exports = MPertemuanBk;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MMataPelajaran extends Model {
  static get table() {
    return "m_mata_pelajaran";
  }

  jadwalMengajar() {
    return this.hasMany("App/Models/MJadwalMengajar");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  nilaiSiswa() {
    return this.hasMany("App/Models/MUjianSiswa", "id", "m_mata_pelajaran_id");
  }
}

module.exports = MMataPelajaran;

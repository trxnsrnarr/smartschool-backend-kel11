"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MMateri extends Model {
  static get table() {
    return "m_materi";
  }

  jurusan() {
    return this.belongsTo("App/Models/MJurusan");
  }

  mataPelajaran() {
    return this.belongsTo("App/Models/MMataPelajaran");
  }

  materiRombel() {
    return this.hasMany("App/Models/TkMateriRombel");
  }

  bab() {
    return this.hasMany("App/Models/MBab");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }

  rekap() {
    return this.hasMany("App/Models/MRekap");
  }

  rekapMaxPengetahuan() {
    return this.belongsTo("App/Models/MRekap", "id", "m_materi_id");
  }
  rekapMinPengetahuan() {
    return this.belongsTo("App/Models/MRekap", "id", "m_materi_id");
  }
  rekapMaxKeterampilan() {
    return this.belongsTo("App/Models/MRekap", "id", "m_materi_id");
  }
  rekapMinKeterampilan() {
    return this.belongsTo("App/Models/MRekap", "id", "m_materi_id");
  }
}

module.exports = MMateri;

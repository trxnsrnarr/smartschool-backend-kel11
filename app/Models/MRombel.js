"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRombel extends Model {
  static get table() {
    return "m_rombel";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  anggotaRombel() {
    return this.hasMany("App/Models/MAnggotaRombel");
  }

  timeline() {
    return this.hasMany("App/Models/MTimeline");
  }

  materiRombel() {
    return this.hasMany("App/Models/TkMateriRombel");
  }

  jurusan() {
    return this.belongsTo("App/Models/MJurusan");
  }

  ta() {
    return this.belongsTo("App/Models/Mta");
  }

  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }
  penerimaanSiswa() {
    return this.hasMany("App/Models/MPenerimaanSiswa", "id","m_rombel_id");
  }
  kkm() {
    return this.hasMany("App/Models/MKategoriMapel", "id", "m_rombel_id")
  }
}

module.exports = MRombel;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSekolah extends Model {
  static get table() {
    return "m_sekolah";
  }

  informasi() {
    return this.hasOne("App/Models/MInformasiSekolah");
  }

  ta() {
    return this.hasMany("App/Models/Mta", "id", "m_sekolah_id");
  }

  jurusan() {
    return this.hasMany("App/Models/MJurusan", "m_sekolah_id");
  }

  rombel() {
    return this.hasMany("App/Models/MRombel", "id", "m_sekolah_id");
  }

  siswa() {
    return this.hasMany("App/Models/User","id", "m_sekolah_id");
  }

  guru() {
    return this.hasMany("App/Models/User");
  }

  fitur() {
    return this.hasOne("App/Models/MFiturSekolah", "id", "m_sekolah_id");
  }

  tkServer() {
    return this.belongsTo("App/Models/TkServerSekolah", "id", "m_sekolah_id");
  }

  pembayaranAktif(){
    return this.belongsTo("App/Models/MPembayaranSekolah", "id", "m_sekolah_id");
  }

  static get computed() {
    return ["tingkat_format"];
  }

  getTingkatFormat({ tingkat }) {
    if (tingkat == "SMK") return "Sekolah Menengah Kejuruan";
    else if (tingkat == "SMA") return "Sekolah Menengah Atas";
    else if (tingkat == "SMP") return "Sekolah Menengah Pertama";
    else if (tingkat == "SD") return "Sekolah Dasar";
    else if (tingkat == "TK") return "Taman Kanak Kanak";
  }
}

module.exports = MSekolah;

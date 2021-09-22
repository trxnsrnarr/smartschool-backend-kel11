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

  jurusan() {
    return this.hasMany("App/Models/MJurusan", "m_sekolah_id");
  }

  rombel() {
    return this.hasMany("App/Models/MRombel", "m_sekolah_id");
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

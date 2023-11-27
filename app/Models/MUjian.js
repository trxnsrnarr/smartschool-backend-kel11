"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MUjian extends Model {
  static get table() {
    return "m_ujian";
  }

  mataPelajaran() {
    return this.belongsTo("App/Models/MMataPelajaran");
  }

  soalUjian() {
    return this.hasMany("App/Models/TkSoalUjian");
  }

  user() {
    return this.belongsTo("App/Models/User");
  }

  soal() {
    return this.belongsToMany("App/Models/MSoalUjian").pivotTable(
      "tk_soal_ujian"
    );
  }

  tkSoal() {
    return this.hasMany("App/Models/TkSoalUjian");
  }

  static get computed() {
    return ["tipe_format"];
  }

  getTipeFormat({ tipe }) {
    if (tipe == "ph") return "Penilaian Harian";
    else if (tipe == "pts1") return "Penilaian Tengah Semester 1 / Sumatif Tengah Semester 1";
    else if (tipe == "pts2") return "Penilaian Tengah Semester 2 / Sumatif Tengah Semester 2";
    else if (tipe == "pas1") return "Penilaian Akhir Semester 1 / Sumatif Akhir Semester 1";
    else if (tipe == "pas2") return "Penilaian Akhir Semester 2 / Sumatif Akhir Semester 2";
    else if (tipe == "us") return "Ujian Sekolah / Asesmen Sumatif Sekolah";
    else if (tipe == "literasi") return "AKM - Literasi";
    else if (tipe == "numerasi") return "AKM - Numerasi";
    else if (tipe == "kuis") return "Kuis";
    else if (tipe == "sts1") return "Sumatif Tengah Semester 1";
    else if (tipe == "sts2") return "Sumatif Tengah Semester 2";
    else if (tipe == "sas1") return "Sumatif Akhir Semester 1";
    else if (tipe == "sas2") return "Sumatif Akhir Semester 2";
  }
}

module.exports = MUjian;

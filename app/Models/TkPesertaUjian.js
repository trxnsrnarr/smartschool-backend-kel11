"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

class TkJadwalUjianSiswa extends Model {
  static get table() {
    return "tk_peserta_ujian";
  }

  static get computed() {
    return ["jamMulai", "jamSelesai"];
  }

  jawabanSiswa() {
    return this.hasMany(
      "App/Models/TkJawabanUjianSiswa",
      "id",
      "tk_peserta_ujian_id"
    );
  }

  jadwalUjian() {
    return this.belongsTo("App/Models/TkJadwalUjian");
  }

  tugas() {
    return this.belongsTo("App/Models/MTugas");
  }

  getJamMulai({ waktu_mulai }) {
    return moment(waktu_mulai).format("HH:mm");
  }

  getJamSelesai({ waktu_selesai }) {
    return !waktu_selesai ? "-" : moment(waktu_selesai).format("HH:mm");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
  pesertaPPDB() {
    return this.hasOne("App/Models/TkPesertaUjianPpdb", "id", "tk_peserta_ujian_id");
  }

  peringatan() {
    return this.hasMany("App/Models/MPeringatanUjianSiswa", "id", "tk_peserta_ujian_id");
  }
}

module.exports = TkJadwalUjianSiswa;

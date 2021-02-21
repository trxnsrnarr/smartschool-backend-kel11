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

  getJamMulai({ waktu_mulai }) {
    return moment(waktu_mulai).format("HH:mm");
  }

  getJamSelesai({ waktu_selesai }) {
    return !waktu_selesai ? "-" : moment(waktu_selesai).format("HH:mm");
  }
}

module.exports = TkJadwalUjianSiswa;

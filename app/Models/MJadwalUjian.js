"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

class MJadwalUjian extends Model {
  static get table() {
    return "m_jadwal_ujian";
  }

  static get computed() {
    return [
      "jumlahSoal",
      "tanggalUjian",
      "waktuUjian",
      "tanggalInput",
      "waktuInput",
      "waktu_ditutup",
    ];
  }

  getJumlahSoal({ jumlah_pg, jumlah_esai }) {
    return jumlah_pg + jumlah_esai;
  }

  getTanggalUjian({ waktu_dibuka }) {
    return moment(waktu_dibuka).format("dddd DD MMMM YYYY");
  }

  getWaktuUjian({ waktu_dibuka, durasi }) {
    return `${moment(waktu_dibuka).format("HH:mm")} - ${moment(waktu_dibuka)
      .add("minutes", durasi)
      .format("HH:mm")}`;
  }

  getTanggalInput({ waktu_dibuka }) {
    return moment(waktu_dibuka).format("YYYY-MM-DD");
  }

  getWaktuInput({ waktu_dibuka }) {
    return moment(waktu_dibuka).format("HH:mm");
  }

  getWaktuDitutup({ waktu_dibuka, durasi }) {
    return moment(waktu_dibuka)
      .add("minutes", durasi)
      .format("YYYY-MM-DD HH:mm:ss");
  }

  rombelUjian() {
    return this.hasMany("App/Models/TkJadwalUjian");
  }

  ujian() {
    return this.belongsTo("App/Models/MUjian");
  }
}

module.exports = MJadwalUjian;

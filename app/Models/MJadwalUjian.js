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
    ];
  }

  getJumlahSoal({
    jumlah_pg,
    jumlah_esai,
    jumlah_menjodohkan,
    jumlah_pg_kompleks,
    jumlah_uraian,
  }) {
    return (
      jumlah_pg +
      jumlah_esai +
      jumlah_menjodohkan +
      jumlah_pg_kompleks +
      jumlah_uraian
    );
  }

  getTanggalUjian({ waktu_dibuka }) {
    return moment(waktu_dibuka).format("dddd DD MMMM YYYY");
  }

  getWaktuUjian({ waktu_dibuka, durasi,waktu_ditutup }) {
    return `${moment(waktu_dibuka).format("HH:mm")} - ${moment(waktu_dibuka, 'HH:mm')
      .add(durasi, "minutes")
      .format("HH:mm")}`;

  }

  getTanggalInput({ waktu_dibuka }) {
    return moment(waktu_dibuka).format("YYYY-MM-DD");
  }

  getWaktuInput({ waktu_dibuka }) {
    return moment(waktu_dibuka).format("HH:mm");
  }

  getWaktuDitutup(waktu_ditutup) {
    return moment(waktu_ditutup).format("YYYY-MM-DD HH:mm:ss");
  }

  rombelUjian() {
    return this.hasMany("App/Models/TkJadwalUjian");
  }

  ujian() {
    return this.belongsTo("App/Models/MUjian");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MJadwalUjian;

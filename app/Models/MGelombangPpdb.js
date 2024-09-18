"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

class MGelombangPpdb extends Model {
  static get table() {
    return "m_gelombang_ppdb";
  }

  static get computed() {
    return ["keterangan", "waktuawal", "waktuakhir"];
  }

  jalur() {
    return this.belongsTo("App/Models/MJalurPpdb");
  }

  pendaftar() {
    return this.hasMany("App/Models/MPendaftarPpdb");
  }

  pendaftar1() {
    return this.belongsTo("App/Models/MPendaftarPpdb","id","m_gelombang_ppdb_id");
  }

  informasi() {
    return this.hasMany("App/Models/MInformasiGelombang");
  }

  getKeterangan({ dibuka, ditutup }) {
    if (moment().format("YYYY-MM-DD") < moment(dibuka).format("YYYY-MM-DD")) {
      return "Akan Dibuka";
    } else if (
      moment().format("YYYY-MM-DD") <= moment(ditutup).format("YYYY-MM-DD")
    ) {
      return "Daftar";
    } else {
      return "Sudah Ditutup";
    }
  }

  getWaktuawal({ dibuka }) {
    return moment(dibuka).format("DD-MM-YYYY");
  }
  getWaktuakhir({ ditutup }) {
    return moment(ditutup).format("DD-MM-YYYY");
  }
  // getCreatedAt(created_at) {
  //   return moment(created_at).format("DD MMMM YYYY");
  // }
}

module.exports = MGelombangPpdb;

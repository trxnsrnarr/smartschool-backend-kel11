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
    return ["keterangan"];
  }

  pendaftar() {
    return this.hasMany("App/Models/MPendaftarPpdb");
  }

  getKeterangan({ dibuka, ditutup }) {
    if (moment().format("YYYY-MM-DD") <= moment(dibuka).format("YYYY-MM-DD")) {
      return "Akan Dibuka";
    } else if (
      moment().format("YYYY-MM-DD") <= moment(ditutup).format("YYYY-MM-DD")
    ) {
      return "Daftar";
    } else {
      return "Sudah Ditutup";
    }
  }
}

module.exports = MGelombangPpdb;

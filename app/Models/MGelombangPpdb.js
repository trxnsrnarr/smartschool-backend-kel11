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

  getKeterangan({ dibuka, ditutup }) {
    if (
      moment().format("YYYY-MM-DD HH:mm:ss") <
      moment(dibuka).format("YYYY-MM-DD HH:mm:ss")
    ) {
      return "Akan Dibuka";
    } else if (moment(new Date()).isBetween(dibuka, ditutup)) {
      return "Dibuka";
    } else {
      return "Sudah Ditutup";
    }
  }
}

module.exports = MGelombangPpdb;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");

class MJadwalMengajar extends Model {
  static get table() {
    return "m_jadwal_mengajar";
  }

  mataPelajaran() {
    return this.belongsTo("App/Models/MMataPelajaran");
  }
  ta() {
    return this.belongsTo("App/Models/Mta","m_ta_id");
  }

  rombel() {
    return this.belongsTo("App/Models/MRombel");
  }

  jamMengajar() {
    return this.belongsTo("App/Models/MJamMengajar");
  }

  static get computed() {
    return ["absen"];
  }

  getAbsen({ updated_at, created_at, diubah }) {
    if (
      moment(created_at).format("YYYY-MM-DD") ==
      moment(updated_at).format("YYYY-MM-DD")
    ) {
      return false;
    }

    if (
      moment(updated_at).format("YYYY-MM-DD") < moment().format("YYYY-MM-DD")
    ) {
      return false;
    }

    if (diubah == 1) {
      return false;
    }

    if (!updated_at) {
      return false;
    }

    return true;
  }
}

module.exports = MJadwalMengajar;

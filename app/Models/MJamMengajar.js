"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

class MJamMengajar extends Model {
  static get table() {
    return "m_jam_mengajar";
  }

  static get computed() {
    return ["jamFormat"];
  }

  jadwalMengajar() {
    return this.hasMany("App/Models/MJadwalMengajar");
  }

  getJamFormat({ jam_mulai, jam_selesai }) {
    return `${moment(jam_mulai, "HH:mm:ss").format("HH:mm")} - ${moment(
      jam_selesai,
      "HH:mm:ss"
    ).format("HH:mm")}`;
  }
}

module.exports = MJamMengajar;

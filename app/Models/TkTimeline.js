"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

class TkTimeline extends Model {
  static get table() {
    return "tk_timeline";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  getLampiran(lampiran) {
    return lampiran ? lampiran.split(",") : [];
  }

  timeline() {
    return this.belongsTo("App/Models/MTimeline");
  }

  komen() {
    return this.hasMany("App/Models/TkTimelineKomen");
  }

  getCreatedAt(created_at) {
    return moment(created_at).format("DD MMMM YYYY");
  }

  getWaktuAbsen(waktu_absen) {
    return waktu_absen ? moment(waktu_absen).format("HH:mm:ss") : "-";
  }
  
  peserta() {
    return this.hasMany("App/Models/TkPesertaUjian")
  }
}

module.exports = TkTimeline;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

class MTimeline extends Model {
  // static castDates(field, value) {
  //   if (["created_at", "updated_at"].indexOf(field) > -1) {
  //     return value.format("YYYY-MM-DD h:mm:ss");
  //   }
  //   return super.formatDates(field, value);
  // }

  static get table() {
    return "m_timeline";
  }

  rombel() {
    return this.belongsTo("App/Models/MRombel");
  }

  tkTimeline() {
    return this.hasMany("App/Models/TkTimeline");
  }

  komen() {
    return this.hasMany("App/Models/MTimelineKomen");
  }

  listSiswaBelum() {
    return this.hasMany("App/Models/TkTimeline");
  }

  listSiswaTerkumpul() {
    return this.hasMany("App/Models/TkTimeline");
  }

  listSiswaDinilai() {
    return this.hasMany("App/Models/TkTimeline");
  }

  tugas() {
    return this.belongsTo("App/Models/MTugas");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  static get computed() {
    return ["absen"];
  }

  getTanggalDibuat(tanggal_dibuat, created_at) {
    return tanggal_dibuat
      ? moment(tanggal_dibuat).format("DD MMMM YYYY")
      : moment(created_at).format("DD MMMM YYYY");
  }

  getCreatedAt(created_at) {
    return moment(created_at).format("DD MMMM YYYY");
  }

  getAbsen({ updated_at, created_at, diubah }) {
    if (
      moment(created_at).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD")
    ) {
      return false;
    }

    return true;
  }

  getLampiran(lampiran) {
    return lampiran ? lampiran.split(",") : [];
  }

  getLink(link) {
    return link ? link.split(",") : [];
  }

  getRpp(rpp) {
    return rpp ? rpp.split(",") : [];
  }

  getDeskripsi(deskripsi) {
    return deskripsi ? Buffer(deskripsi, "base64").toString("ascii") : "";
  }
}

module.exports = MTimeline;

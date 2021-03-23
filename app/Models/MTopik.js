"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MTopik extends Model {
  static get table() {
    return "m_topik";
  }

  bab() {
    return this.belongsTo("App/Models/MBab");
  }

  soalKuis() {
    return this.hasMany("App/Models/MSoalKuis");
  }

  getLampiran(lampiran) {
    return lampiran ? lampiran.split(",") : [];
  }

  getLink(link) {
    return link ? link.split(",") : [];
  }

  materi() {
    return this.belongsTo("App/Models/MMateri");
  }

  materiKesimpulan() {
    return this.hasOne("App/Models/TkMateriKesimpulan");
  }

  getKonten(konten) {
    return konten
      ? Buffer(konten, "base64").toString("ascii").replace("b&", "..........")
      : "";
  }
}

module.exports = MTopik;

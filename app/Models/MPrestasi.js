"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPrestasi extends Model {
  static get table() {
    return "m_prestasi";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
  tingkatPrestasi() {
    return this.belongsTo("App/Models/MPenghargaan", "tingkat", "id");
  }
  tahun() {
    return this.belongsTo("App/Models/Mta");
  }
  getLampiran(lampiran) {
    return lampiran ? lampiran.split(",") : [];
  }
  getLink(link) {
    return link ? link.split(",") : [];
  }
}

module.exports = MPrestasi;

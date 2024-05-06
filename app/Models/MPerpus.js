"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPerpus extends Model {
  static get table() {
    return "m_perpus";
  }

  aktivitasPerpus() {
    return this.hasMany("App/Models/TkPerpusAktivitas");
  }

  komen() {
    return this.hasMany("App/Models/MPerpusKomen");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
  buku() {
    return this.belongsTo("App/Models/MBuku");
  }
  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }
  tag() {
    return this.hasMany("App/Models/TkPerpusTag");
  }
  mapel() {
    return this.hasOne("App/Models/TkPerpusMapel");
  }
  // ini masih buffer
  getDeskripsi(deskripsi) {
    return deskripsi ? Buffer.from(deskripsi, "base64").toString("ascii") : "";
  }
}

module.exports = MPerpus;

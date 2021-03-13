"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MAlumni extends Model {
  static get table() {
    return "m_alumni";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  getDeskripsi(deskripsi) {
    return deskripsi ? Buffer(deskripsi, "base64").toString("ascii") : "";
  }
}

module.exports = MAlumni;

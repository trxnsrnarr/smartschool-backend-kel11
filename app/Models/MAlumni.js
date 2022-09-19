"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const htmlEscaper = require("html-escaper");

class MAlumni extends Model {
  static get table() {
    return "m_alumni";
  }
  getDeskripsi(deskripsi) {
    return deskripsi ? htmlEscaper.unescape(deskripsi) : "";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MAlumni;

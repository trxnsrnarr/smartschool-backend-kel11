"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MAlumni extends Model {
  static get table() {
    return "m_alumni";
  }

  getDeskripsi(deskripsi) {
    return deskripsi ? Buffer(deskripsi, "base64").toString("ascii") : "";
  }
}

module.exports = MAlumni;

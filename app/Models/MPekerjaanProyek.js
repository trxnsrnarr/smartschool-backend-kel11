"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPekerjaanProyek extends Model {
  static get table() {
    return "m_pekerjaan_proyek";
  }

  ditugaskan() {
    return this.hasMany("App/Models/MDitugaskanPekerjaan");
  }
}

module.exports = MPekerjaanProyek;

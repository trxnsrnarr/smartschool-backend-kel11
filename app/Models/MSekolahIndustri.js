"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSekolahIndustri extends Model {
  static get table() {
    return "m_sekolah_industri";
  }
  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }
  industri() {
    return this.belongsTo("App/Models/MIndustri");
  }
}

module.exports = MSekolahIndustri;

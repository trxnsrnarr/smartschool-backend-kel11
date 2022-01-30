"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkPerusahaanSekolah extends Model {
  static get table() {
    return "tk_perusahaan_sekolah";
  }

  perusahaan() {
    return this.belongsTo("App/Models/MPerusahaan");
  }
  sekolah() {
    return this.belongsTo("App/Models/Sekolah");
  }
  
  penerimaan() {
    return this.hasMany("App/Models/MPenerimaanPerusahaan", "tk_perusahaan_sekolah_id");
  }
}

module.exports = TkPerusahaanSekolah;

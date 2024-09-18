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
  industri() {
    return this.belongsTo("App/Models/MPerusahaan");
  }
  sekolah() {
    return this.belongsTo("App/Models/Sekolah");
  }

  mou1() {
    return this.belongsTo("App/Models/MMouPerusahaan","id","tk_perusahaan_sekolah_id");
  }
  
  penerimaan() {
    return this.hasMany("App/Models/MPenerimaanPerusahaan");
  }
}

module.exports = TkPerusahaanSekolah;

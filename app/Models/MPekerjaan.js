"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPekerjaan extends Model {
  static get table() {
    return "m_pekerjaan";
  }

  perusahaan() {
    return this.belongsTo("App/Models/MPerusahaan");
  }
  informasi() {
    return this.belongsTo(
      "App/Models/MInformasiPekerjaan",
      "id",
      "m_pekerjaan_id"
    );
  }
  pengumuman() {
    return this.hasMany("App/Models/MPekerjaanPengumuman");
  }
}

module.exports = MPekerjaan;

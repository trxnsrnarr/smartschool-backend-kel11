"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPerusahaan extends Model {
  static get table() {
    return "m_perusahaan";
  }
  informasi() {
    return this.belongsTo(
      "App/Models/MInformasiPerusahaan",
      "id",
      "m_perusahaan_id"
    );
  }
  pekerjaan() {
    return this.hasMany("App/Models/MPekerjaan", "id", "m_perusahaan_id");
  }
  acara() {
    return this.hasMany("App/Models/MAcaraPerusahaan", "id", "m_perusahaan_id");
  }
  tkPerusahaanSekolah() {
    return this.belongsTo("App/Models/TkPerusahaanSekolah", "id", "m_perusahaan_id");
  }

 
}

module.exports = MPerusahaan;

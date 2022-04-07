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
  tkPerusahaanSekolah(){
    "App/Models/TkPerusahaanSekolah",
      "id",
      "m_perusahaan_id"
  }

  getMulaiKontrak(mulai_kontrak) {
    return mulai_kontrak
      ? moment(mulai_kontrak).format("YYYY-MM-DD")
      : null;
  }

  getAkhirKontrak(akhir_kontrak) {
    return akhir_kontrak
      ? moment(akhir_kontrak).format("YYYY-MM-DD")
      : null;
  }
}

module.exports = MPerusahaan;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Mta extends Model {
  static get table() {
    return "m_ta";
  }

  static get computed() {
    return ["aktif_text"];
  }

  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }

  rombel() {
    return this.hasMany("App/Models/MRombel", 'id', "m_ta_id");
  }

  getAktifText({ aktif }) {
    switch (aktif) {
      case 1:
        return "Aktif";
      case 0:
        return "Non-aktif";
      default:
        return "N/A";
    }
  }
}

module.exports = Mta;

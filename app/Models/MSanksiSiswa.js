"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSanksiSiswa extends Model {
  static get table() {
    return "m_sanksi_siswa";
  }

  sanksi() {
    return this.belongsTo("App/Models/MSanksiPelanggaran");
  }
  getLampiran(lampiran) {
    return lampiran ? lampiran.split(",") : [];
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MSanksiSiswa;

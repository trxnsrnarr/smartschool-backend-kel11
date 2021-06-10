"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSikapSiswa extends Model {
  static get table() {
    return "m_sikap_siswa";
  }

  ditunjukkan() {
    return this.belongsTo("App/Models/MSikap", "m_sikap_ditunjukkan_id");
  }

  ditingkatkan() {
    return this.belongsTo("App/Models/MSikap", "m_sikap_ditingkatkan_id");
  }
}

module.exports = MSikapSiswa;

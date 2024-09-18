"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSikapSiswa extends Model {
  static get table() {
    return "m_sikap_siswa";
  }

  ditunjukkanSosial() {
    return this.belongsTo(
      "App/Models/MSikapSosial",
      "m_sikap_sosial_ditunjukkan_id"
    );
  }

  ditingkatkanSosial() {
    return this.belongsTo(
      "App/Models/MSikapSosial",
      "m_sikap_sosial_ditingkatkan_id"
    );
  }
  ditunjukkanSpiritual() {
    return this.belongsTo(
      "App/Models/MSikapSpiritual",
      "m_sikap_spiritual_ditunjukkan_id"
    );
  }

  ditingkatkanSpiritual() {
    return this.belongsTo(
      "App/Models/MSikapSpiritual",
      "m_sikap_spiritual_ditingkatkan_id"
    );
  }
}

module.exports = MSikapSiswa;

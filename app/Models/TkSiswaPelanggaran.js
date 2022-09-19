"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkSiswaPelanggaran extends Model {
  static get table() {
    return "tk_siswa_pelanggaran";
  }

  pelanggaran() {
    return this.belongsTo("App/Models/MPelanggaran");
  }

  userPelapor(){
    return this.belongsTo("App/Models/User","m_user_pelapor_id");
  }
}

module.exports = TkSiswaPelanggaran;

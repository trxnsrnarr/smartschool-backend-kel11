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
}

module.exports = TkSiswaPelanggaran;

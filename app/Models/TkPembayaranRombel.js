"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkPembayaranRombel extends Model {
  static get table() {
    return "tk_pembayaran_rombel";
  }

  rombel() {
    return this.belongsTo("App/Models/MRombel");
  }

  pembayaran() {
    return this.belongsTo("App/Models/MPembayaran");
  }

  siswa() {
    return this.hasMany("App/Models/MPembayaranSiswa");
  }
}

module.exports = TkPembayaranRombel;

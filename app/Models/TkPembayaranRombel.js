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
}

module.exports = TkPembayaranRombel;

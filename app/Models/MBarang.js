"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MBarang extends Model {
  static get table() {
    return "m_barang";
  }

  lokasi() {
    return this.belongsTo("App/Models/MLokasi");
  }

  getFoto(foto) {
    return foto ? foto.split(",") : [];
  }
}

module.exports = MBarang;

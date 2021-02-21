"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MInformasiJurusan extends Model {
  static get table() {
    return "m_informasi_jurusan";
  }

  getGaleri(galeri) {
    return galeri ? galeri.split(",") : [];
  }

  jurusan() {
    return this.belongsTo("App/Models/MJurusan");
  }
}

module.exports = MInformasiJurusan;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MInformasiGelombang extends Model {
  static get table() {
    return "m_informasi_gelombang";
  }
}

module.exports = MInformasiGelombang;

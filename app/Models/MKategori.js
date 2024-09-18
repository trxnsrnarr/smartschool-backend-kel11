"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKategori extends Model {
  static get table() {
    return "m_kategori";
  }
}

module.exports = MKategori;

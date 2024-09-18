"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MInformasiPekerjaan extends Model {
  static get table() {
    return "m_informasi_pekerjaan";
  }
}

module.exports = MInformasiPekerjaan;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MInformasiPerusahaan extends Model {
  static get table() {
    return "m_informasi_perusahaan";
  }
}

module.exports = MInformasiPerusahaan;

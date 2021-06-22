"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MAcaraPerusahaan extends Model {
  static get table() {
    return "m_acara_perusahaan";
  }
}

module.exports = MAcaraPerusahaan;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPerusahaan extends Model {
  static get table() {
    return "m_perusahaan";
  }
}

module.exports = MPerusahaan;

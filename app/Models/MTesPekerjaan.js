"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MTesPekerjaan extends Model {
  static get table() {
    return "m_tes_pekerjaan";
  }
}

module.exports = MTesPekerjaan;

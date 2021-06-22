"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPekerjaan extends Model {
  static get table() {
    return "m_pekerjaan";
  }
}

module.exports = MPekerjaan;

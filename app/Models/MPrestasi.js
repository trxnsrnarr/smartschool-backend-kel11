"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPrestasi extends Model {
  static get table() {
    return "m_prestasi";
  }
}

module.exports = MPrestasi;

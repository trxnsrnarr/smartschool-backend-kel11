"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MMutasi extends Model {
  static get table() {
    return "m_mutasi";
  }
}

module.exports = MMutasi;

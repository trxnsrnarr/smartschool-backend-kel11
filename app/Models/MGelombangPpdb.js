"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MGelombangPpdb extends Model {
  static get table() {
    return "m_gelombang_ppdb";
  }
}

module.exports = MGelombangPpdb;

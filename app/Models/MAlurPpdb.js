"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MAlurPpdb extends Model {
  static get table() {
    return "m_alur_ppdb";
  }
}

module.exports = MAlurPpdb;

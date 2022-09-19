"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPraktikKerja extends Model {
  static get table() {
    return "m_praktik_kerja";
  }
}

module.exports = MPraktikKerja;

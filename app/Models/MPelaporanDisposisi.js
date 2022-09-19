"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPelaporanDisposisi extends Model {
  static get table() {
    return "m_pelaporan_disposisi";
  }
}

module.exports = MPelaporanDisposisi;

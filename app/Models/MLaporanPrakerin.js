"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MLaporanPrakerin extends Model {
  static get table() {
    return "m_laporan_prakerin";
  }
}

module.exports = MLaporanPrakerin;

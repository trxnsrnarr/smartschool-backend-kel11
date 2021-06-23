"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPekerjaanPengumuman extends Model {
  static get table() {
    return "m_perkerjaan_pengumuman";
  }
}

module.exports = MPekerjaanPengumuman;

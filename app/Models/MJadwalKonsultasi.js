"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MJadwalKonsultasi extends Model {
  static get table() {
    return "m_jadwal_konsultasi";
  }
}

module.exports = MJadwalKonsultasi;

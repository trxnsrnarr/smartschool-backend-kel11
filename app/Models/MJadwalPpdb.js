"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MJadwalPpdb extends Model {
  static get table() {
    return "m_jadwal_ppdb";
  }
}

module.exports = MJadwalPpdb;

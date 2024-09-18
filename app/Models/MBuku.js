"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MBuku extends Model {
  static get table() {
    return "m_buku";
  }
}

module.exports = MBuku;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MBukuTamu extends Model {
  static get table() {
    return "m_buku_tamu";
  }
}

module.exports = MBukuTamu;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MNotifikasi extends Model {
  static get table() {
    return "m_notifikasi";
  }
}

module.exports = MNotifikasi;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MStatusProyek extends Model {
  static get table() {
    return "m_status_proyek";
  }
}

module.exports = MStatusProyek;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSarpras extends Model {
  static get table() {
    return "m_sarpras";
  }
}

module.exports = MSarpras;

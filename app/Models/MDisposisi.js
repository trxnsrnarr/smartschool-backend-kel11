"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MDisposisi extends Model {
  static get table() {
    return "m_disposisi";
  }
}

module.exports = MDisposisi;

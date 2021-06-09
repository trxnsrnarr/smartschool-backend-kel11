"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSikap extends Model {
  static get table() {
    return "m_sikap";
  }
}

module.exports = MSikap;

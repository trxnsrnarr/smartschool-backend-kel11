"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSikapSpiritual extends Model {
  static get table() {
    return "m_sikap_spiritual";
  }
}

module.exports = MSikapSpiritual;

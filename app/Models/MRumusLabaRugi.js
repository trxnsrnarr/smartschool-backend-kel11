"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRumusLabaRugi extends Model {
  static get table() {
    return "m_rumus_laba_rugi";
  }
}

module.exports = MRumusLabaRugi;

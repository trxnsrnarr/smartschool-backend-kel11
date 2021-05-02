"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRpp extends Model {
  static get table() {
    return "m_rpp";
  }
}

module.exports = MRpp;

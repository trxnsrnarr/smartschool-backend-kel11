"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MBab extends Model {
  static get table() {
    return "m_bab";
  }

  topik() {
    return this.hasMany("App/Models/MTopik");
  }
}

module.exports = MBab;

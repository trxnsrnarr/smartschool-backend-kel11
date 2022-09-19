"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MBabPeraturan extends Model {
  static get table() {
    return "m_bab_peraturan";
  }

  pasal() {
    return this.hasMany("App/Models/MPasalPeraturan", "id", "m_bab_id");
  }
}

module.exports = MBabPeraturan;

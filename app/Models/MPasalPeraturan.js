"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPasalPeraturan extends Model {
  static get table() {
    return "m_pasal_peraturan";
  }

  bab() {
    return this.belongsTo("App/Models/MBabPeraturan");
  }
}

module.exports = MPasalPeraturan;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKalenderPendidikan extends Model {
  static get table() {
    return "m_kalender_pendidikan";
  }

  label() {
    return this.belongsTo("App/Models/MLabelKalender");
  }
}

module.exports = MKalenderPendidikan;

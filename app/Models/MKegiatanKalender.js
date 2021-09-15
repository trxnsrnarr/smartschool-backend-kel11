"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKegiatanKalender extends Model {
  static get table() {
    return "m_kegiatan_kalender";
  }

  label() {
    return this.belongsTo("App/Models/MLabelKalender");
  }
}

module.exports = MKegiatanKalender;

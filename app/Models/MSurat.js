"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSurat extends Model {
  static get table() {
    return "m_surat";
  }

  disposisi() {
    return this.belongsTo("App/Models/MDisposisi", "id", "m_surat_id");
  }
}

module.exports = MSurat;

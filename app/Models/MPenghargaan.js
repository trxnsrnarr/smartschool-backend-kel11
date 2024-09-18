"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPenghargaan extends Model {
  static get table() {
    return "m_penghargaan";
  }
  prestasi() {
    return this.hasMany("App/Models/MPrestasi", "id", "tingkat");
  }
}

module.exports = MPenghargaan;

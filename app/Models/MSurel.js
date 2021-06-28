"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSurel extends Model {
  static get table() {
    return "m_surel";
  }
  komen() {
    return this.hasMany("App/Models/MSurelKomen", "id", "m_surel_id");
  }
}

module.exports = MSurel;

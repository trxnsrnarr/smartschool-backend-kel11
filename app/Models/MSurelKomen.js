"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSurelKomen extends Model {
  static get table() {
    return "m_surel_komen";
  }
  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MSurelKomen;

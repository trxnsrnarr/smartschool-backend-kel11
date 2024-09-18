"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPerpusKomen extends Model {
  static get table() {
    return "m_perpus_komen";
  }

    user() {
      return this.belongsTo("App/Models/User", "m_user_id");
    }
}

module.exports = MPerpusKomen;

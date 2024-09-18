"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MDitugaskanPekerjaan extends Model {
  static get table() {
    return "m_ditugaskan_pekerjaan";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MDitugaskanPekerjaan;

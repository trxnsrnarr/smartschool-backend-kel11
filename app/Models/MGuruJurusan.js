"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MGuruJurusan extends Model {
  static get table() {
    return "m_guru_jurusan";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MGuruJurusan;

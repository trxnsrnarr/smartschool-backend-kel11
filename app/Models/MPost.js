"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPost extends Model {
  static get table() {
    return "m_post";
  }

  tkPost() {
    return this.hasMany("App/Models/TkPost");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  getKonten(konten) {
    return konten ? Buffer(konten, "base64").toString("ascii") : "";
  }
}

module.exports = MPost;

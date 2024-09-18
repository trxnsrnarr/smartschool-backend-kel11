"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

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

  getCreatedAt(created_at) {
    return moment(created_at).format("DD MMMM YYYY");
  }
}

module.exports = MPost;

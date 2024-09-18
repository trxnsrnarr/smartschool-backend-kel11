"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

class MTimelineKomen extends Model {
  static get table() {
    return "m_timeline_komen";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MTimelineKomen;

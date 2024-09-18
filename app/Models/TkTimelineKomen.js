"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

class TkTimelineKomen extends Model {
  static get table() {
    return "tk_timeline_komen";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  getCreatedAt(created_at) {
    return moment(created_at).format("DD MMM");
  }
  // ini masih buffer
  getKesimpulan(kesimpulan) {
    return kesimpulan ? Buffer.from(kesimpulan, "base64").toString("ascii") : "";
  }
}

module.exports = TkTimelineKomen;

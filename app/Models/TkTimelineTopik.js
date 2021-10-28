"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkTimelineTopik extends Model {
  static get table() {
    return "tk_timeline_topik";
  }

  topik() {
    return this.belongsTo("App/Models/MTopik");
  }
  timeline() {
    return this.belongsTo("App/Models/MTimeline");
  }
}

module.exports = TkTimelineTopik;

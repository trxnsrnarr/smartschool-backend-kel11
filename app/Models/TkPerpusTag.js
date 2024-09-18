"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkPerpusTag extends Model {
  static get table() {
    return "tk_perpus_tag";
  }

  tag() {
    return this.belongsTo('App/Models/MPerpusTag')
  }
}

module.exports = TkPerpusTag;

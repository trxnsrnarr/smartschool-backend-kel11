"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPerpusTag extends Model {
  static get table() {
    return "m_perpus_tag";
  }
}

module.exports = MPerpusTag;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSlider extends Model {
  static get table() {
    return "m_slider";
  }
}

module.exports = MSlider;

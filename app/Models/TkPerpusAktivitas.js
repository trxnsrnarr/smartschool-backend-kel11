"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkPerpusAktivitas extends Model {
  static get table() {
    return "tk_perpus_aktivitas";
  }
}

module.exports = TkPerpusAktivitas;

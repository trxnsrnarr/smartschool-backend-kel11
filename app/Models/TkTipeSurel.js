"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkTipeSurel extends Model {
  static get table() {
    return "tk_tipe_surel";
  }

  surel() {
    return this.belongsTo("App/Models/MSurel");
  }
}

module.exports = TkTipeSurel;

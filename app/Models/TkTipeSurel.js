"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkTipeSurel extends Model {
  static get table() {
    return "tk_tipe_surel";
  }

  kotak() {
    return this.belongsTo("App/Models/MKotakMasuk");
  }
}

module.exports = TkTipeSurel;

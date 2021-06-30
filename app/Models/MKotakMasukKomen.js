"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKotakMasukKomen extends Model {
  static get table() {
    return "m_kotak_masuk_komen";
  }
  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MKotakMasukKomen;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKotakMasuk extends Model {
  static get table() {
    return "m_kotak_masuk";
  }
  komen() {
    return this.hasMany(
      "App/Models/MKotakMasukKomen",
      "id",
      "m_kotak_masuk_id"
    );
  }
}

module.exports = MKotakMasuk;

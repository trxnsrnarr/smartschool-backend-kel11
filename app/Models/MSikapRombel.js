"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSikapRombel extends Model {
  static get table() {
    return "m_sikap_rombel";
  }

  ditunjukkan() {
    return this.belongsTo("App/Models/MSikap", "m_sikap_ditunjukkan_id");
  }

  ditingkatkan() {
    return this.belongsTo("App/Models/MSikap", "m_sikap_ditingkatkan_id");
  }

  predikat() {
    return this.belongsTo("App/Models/MPredikatNilai");
  }
}

module.exports = MSikapRombel;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class District extends Model {
  regency() {
    return this.belongsTo("App/Models/Regency");
  }
}

module.exports = District;

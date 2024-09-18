"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MCamera extends Model {
  static get table() {
    return "m_camera";
  }
  
  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }
}

module.exports = MCamera;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSurel extends Model {
  static get table() {
    return "m_surel";
  }
  userPengirim(){
    return this.belongsTo("App/Models/User", "m_user_pengirim_id", "id");
  }
  
  userTujuan(){
    return this.belongsTo("App/Models/User", "m_user_tujuan_id", "id");
  }
  komen() {
    return this.hasMany("App/Models/MSurelKomen", "id", "m_surel_id");
  }
}

module.exports = MSurel;

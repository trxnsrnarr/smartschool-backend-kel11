"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MProfilUser extends Model {
  static get table() {
    return "m_profil_user";
  }
}

module.exports = MProfilUser;

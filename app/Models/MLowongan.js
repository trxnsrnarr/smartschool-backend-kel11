'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MLowongan extends Model {
  user() {
    return this.hasOne("App/Models/User", "m_user_id", "id");
  }

  profil() {
    return this.hasOne("App/Models/MProfilUser", "m_user_id", "m_user_id");
  }
}

module.exports = MLowongan

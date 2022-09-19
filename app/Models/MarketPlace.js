'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MarketPlace extends Model {
    user() {
        return this.belongsTo("App/Models/User", "m_user_id");
      }
}

module.exports = MarketPlace

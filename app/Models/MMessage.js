'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MMessage extends Model {
    static get table() {
        return "m_messages";
    }

    chatrooms() {
        return this.belongsTo("App/Models/MChatroom");
    }

    user() {
        return this.belongsTo("App/Models/User");
    }
}

module.exports = MMessage

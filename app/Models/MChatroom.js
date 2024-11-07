'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MChatroom extends Model {
    static get table() {
        return "m_chatrooms";
    }

    messsage() {
        return this.hasMany("App/Models/MMessage", 'id', "m_chatroom_id");
    }
}

module.exports = MChatroom

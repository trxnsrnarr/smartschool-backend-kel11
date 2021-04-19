'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MProyekForumKomen extends Model {
    static get table() {
        return "m_proyek_forum_komen";
    }
}

module.exports = MProyekForumKomen

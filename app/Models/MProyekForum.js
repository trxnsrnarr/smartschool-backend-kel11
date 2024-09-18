'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MProyekForum extends Model {
    static get table() {
        return "m_proyek_forum";
    }
}

module.exports = MProyekForum

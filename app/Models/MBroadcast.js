'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MBroadcast extends Model {
    static get table() {
        return "m_broadcast";
      }
}

module.exports = MBroadcast

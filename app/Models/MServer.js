'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MServer extends Model {
    static get table() {
        return "m_server";
      }

      tkSekolah() {
        return this.hasMany("App/Models/TkServerSekolah","id", "m_server_id");
      }
}

module.exports = MServer

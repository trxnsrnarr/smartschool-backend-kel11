'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TkServerSekolah extends Model {
    static get table() {
        return "tk_server_sekolah";
      }

      server() {
        return this.belongsTo("App/Models/MServer");
      }

      sekolah() {
        return this.belongsTo("App/Models/MSekolah");
      }
}

module.exports = TkServerSekolah

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MBobotNilai extends Model {
    static get table() {
        return "m_bobot_nilai";
      }
}

module.exports = MBobotNilai

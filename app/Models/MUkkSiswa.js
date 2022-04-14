'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MUkkSiswa extends Model {
    static get table() {
        return "m_ukk_siswa";
      }
}

module.exports = MUkkSiswa

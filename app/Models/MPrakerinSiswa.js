'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MPrakerinSiswa extends Model {
    static get table() {
        return "m_prakerin_siswa";
      }
}

module.exports = MPrakerinSiswa

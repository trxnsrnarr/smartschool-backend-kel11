'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MSanksiPelanggaran extends Model {
    static get table() {
        return "m_sanksi_pelanggaran";
      }
}

module.exports = MSanksiPelanggaran

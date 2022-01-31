'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TkBankSoalGuru extends Model {
    static get table() {
        return "tk_bank_soal_guru";
      }
}

module.exports = TkBankSoalGuru

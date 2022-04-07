'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

class MMouPerusahaan extends Model {
    static get table() {
        return "m_mou_perusahaan";
      }
      getMulaiKontrak(mulai_kontrak) {
        return mulai_kontrak
          ? moment(mulai_kontrak).format("YYYY-MM-DD")
          : null;
      }
    
      getAkhirKontrak(akhir_kontrak) {
        return akhir_kontrak
          ? moment(akhir_kontrak).format("YYYY-MM-DD")
          : null;
      }
}

module.exports = MMouPerusahaan

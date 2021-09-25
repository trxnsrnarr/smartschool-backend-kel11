'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MBuktiPelaksanaanSanksi extends Model {
    static get table() {
        return "m_bukti_pelaksanaan_sanksi";
      }

      getLampiran(lampiran) {
        return lampiran ? lampiran.split(",") : [];
      }
      getLink(link) {
        return link ? link.split(",") : [];
      }
}

module.exports = MBuktiPelaksanaanSanksi

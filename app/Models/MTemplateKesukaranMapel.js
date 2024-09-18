"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MTemplateKesukaranMapel extends Model {
  static get table() {
    return "m_template_kesukaran_mapel";
  }

  getBatasBawah(batas_bawah) {
    return batas_bawah ? parseFloat(batas_bawah) : {};
  }
  getBatasAtas(batas_atas) {
    return batas_atas ? parseFloat(batas_atas) : {};
  }
}

module.exports = MTemplateKesukaranMapel;

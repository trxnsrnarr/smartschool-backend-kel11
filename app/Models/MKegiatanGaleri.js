"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKegiatanGaleri extends Model {
  static get table() {
    return "m_kegiatan_galeri";
  }

  kegiatan() {
    return this.belongsTo('App/Models/MKegiatan')
  }
}

module.exports = MKegiatanGaleri;

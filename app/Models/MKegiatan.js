"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKegiatan extends Model {
  static get table() {
    return "m_kegiatan";
  }

  galeri() {
    return this.hasMany('App/Models/MKegiatanGaleri')
  }
}

module.exports = MKegiatan;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MEkstrakurikuler extends Model {
  static get table() {
    return "m_ekstrakurikuler";
  }
  getFoto(foto) {
    return foto ? JSON.parse(foto) : [];
  }
  getFile(file) {
    return file ? JSON.parse(file) : [];
  }
  setFoto(foto) {
    return foto ? JSON.stringify(foto) : NULL;
  }
  setFile(file) {
    return file ? JSON.stringify(file) : NULL;
  }
  anggotaEkskul() {
    return this.hasMany("App/Models/MAnggotaEkskul");
  }
}

module.exports = MEkstrakurikuler;

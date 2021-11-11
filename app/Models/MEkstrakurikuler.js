"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MEkstrakurikuler extends Model {
  static get table() {
    return "m_ekstrakurikuler";
  }
  getFoto(foto) {
      return foto ? JSON.parse(foto) : []
  }
  getFile(file) {
      return file ? JSON.parse(file) : []
  }
}

module.exports = MEkstrakurikuler;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

const htmlEscaper = require("html-escaper");

class MIndustri extends Model {
  static get table() {
    return "m_industri";
  }

  // ini masih buffer
  getKonten(deskripsi) {
    return deskripsi ? htmlEscaper.unescape(deskripsi) : "";
  }
}

module.exports = MIndustri;

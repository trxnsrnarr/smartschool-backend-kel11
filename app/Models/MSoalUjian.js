"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

const htmlEscaper = require("html-escaper");

class MSoalUjian extends Model {
  static get table() {
    return "m_soal_ujian";
  }

  async removeTag(content) {
    // const h5 = content?.indexOf("</h5>");
    // const string = content?.substring(h5);

    // const removeEl = string?.replace(/<[^>]*>/g, "");
    const removeEl = content.replace(/<[^>]*>/gi, "");

    return removeEl;
  }

  getBentuk(bentuk) {
    return bentuk ? bentuk.toLowerCase() : "";
  }
  getPertanyaan(pertanyaan) {
    return pertanyaan ? htmlEscaper.unescape(pertanyaan) : "";
  }
  getLevelKognitif(level_kognitif) {
    return level_kognitif ? level_kognitif.toLowerCase() : "";
  }
  getKjPg(kj_pg) {
    return kj_pg ? kj_pg.toUpperCase() : "";
  }
  getPilihanMenjodohkan(pilihan_menjodohkan) {
    return pilihan_menjodohkan ? pilihan_menjodohkan.split(",") : null;
  }
  getSoalMenjodohkan(soal_menjodohkan) {
    return soal_menjodohkan ? JSON.parse(soal_menjodohkan) : null;
  }

  static get computed() {
    return ["aspek_level"];
  }

  getAspekLevel({ level_kognitif }) {
    return level_kognitif ? level_kognitif.toUpperCase() : "";
  }
}

module.exports = MSoalUjian;

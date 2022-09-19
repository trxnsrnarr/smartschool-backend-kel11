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
  getPembahasan(pembahasan) {
    return pembahasan ? htmlEscaper.unescape(pembahasan) : "";
  }
  getJawabanA(jawaban_a) {
    return jawaban_a ? htmlEscaper.unescape(jawaban_a) : "";
  }
  getJawabanB(jawaban_b) {
    return jawaban_b ? htmlEscaper.unescape(jawaban_b) : "";
  }
  getJawabanC(jawaban_c) {
    return jawaban_c ? htmlEscaper.unescape(jawaban_c) : "";
  }
  getJawabanD(jawaban_d) {
    return jawaban_d ? htmlEscaper.unescape(jawaban_d) : "";
  }
  getJawabanE(jawaban_e) {
    return jawaban_e ? htmlEscaper.unescape(jawaban_e) : "";
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
  jawabanSiswa() {
    return this.belongsTo("App/Models/TkJawabanUjianSiswa", 'id', "m_soal_ujian_id");
  }
  jawabanSemuaSiswa(){
    return this.hasMany("App/Models/TkJawabanUjianSiswa", 'id', "m_soal_ujian_id");
  }
}

module.exports = MSoalUjian;

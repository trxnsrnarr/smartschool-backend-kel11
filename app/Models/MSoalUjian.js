"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

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
    return [
      "pertanyaan_ascii",
      "jawaban_a_ascii",
      "jawaban_b_ascii",
      "jawaban_c_ascii",
      "jawaban_d_ascii",
      "jawaban_e_ascii",
      "aspek_level",
    ];
  }

  getAspekLevel({ level_kognitif }) {
    return level_kognitif ? level_kognitif.toUpperCase() : "";
  }

  getPertanyaanAscii({ pertanyaan }) {
    var regex = /(<([^>]+)>)/gi,
      body = pertanyaan,
      result = body.replace(regex, "");

    var nbsp = /\&nbsp;/gi,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }

  getJawabanAAscii({ jawaban_a }) {
    var regex = /(<([^>]+)>)/gi,
      body = jawaban_a,
      result = body.replace(regex, "");

    var nbsp = /\&nbsp;/gi,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }
  getJawabanBAscii({ jawaban_b }) {
    var regex = /(<([^>]+)>)/gi,
      body = jawaban_b,
      result = body.replace(regex, "");
    var nbsp = /\&nbsp;/gi,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }
  getJawabanCAscii({ jawaban_c }) {
    var regex = /(<([^>]+)>)/gi,
      body = jawaban_c,
      result = body.replace(regex, "");

    var nbsp = /\&nbsp;/gi,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }
  getJawabanDAscii({ jawaban_d }) {
    var regex = /(<([^>]+)>)/gi,
      body = jawaban_d,
      result = body.replace(regex, "");

    var nbsp = /\&nbsp;/gi,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }
  getJawabanEAscii({ jawaban_e }) {
    var regex = /(<([^>]+)>)/gi,
      body = jawaban_e,
      result = body.replace(regex, "");

    var nbsp = /\&nbsp;/gi,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }
}

module.exports = MSoalUjian;

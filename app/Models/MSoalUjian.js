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
    const removeEl = content.replace(/<[^>]*>/ig, "");

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
  getPertanyaan(pertanyaan) {
    return pertanyaan ? Buffer(pertanyaan, "base64").toString("ascii") : "";
  }
  getJawabanA(jawaban_a) {
    return jawaban_a ? Buffer(jawaban_a, "base64").toString("ascii") : "";
  }
  getJawabanB(jawaban_b) {
    return jawaban_b ? Buffer(jawaban_b, "base64").toString("ascii") : "";
  }
  getJawabanC(jawaban_c) {
    return jawaban_c ? Buffer(jawaban_c, "base64").toString("ascii") : "";
  }
  getJawabanD(jawaban_d) {
    return jawaban_d ? Buffer(jawaban_d, "base64").toString("ascii") : "";
  }
  getJawabanE(jawaban_e) {
    return jawaban_e ? Buffer(jawaban_e, "base64").toString("ascii") : "";
  }
  getPembahasan(pembahasan) {
    return pembahasan ? Buffer(pembahasan, "base64").toString("ascii") : "";
  }
  getPilihanMenjodohkan(pilihan_menjodohkan) {
    return pilihan_menjodohkan ? pilihan_menjodohkan.split(",") : null;
  }
  getSoalMenjodohkan(soal_menjodohkan) {
    return soal_menjodohkan ? JSON.parse(soal_menjodohkan) : null;
  }
  
    static get computed() {
    return ["pertanyaan_ascii","jawaban_a_ascii","jawaban_b_ascii","jawaban_c_ascii","jawaban_d_ascii","jawaban_e_ascii"];
  }
  getPertanyaanAscii({pertanyaan}) {
    var regex = /(<([^>]+)>)/ig,
      body = pertanyaan ,
      result = body.replace(regex, "");
  
      var nbsp =/\&nbsp;/ig,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }

  getJawabanAAscii({jawaban_a}) {
    var regex = /(<([^>]+)>)/ig,
      body = jawaban_a,
      result = body.replace(regex, "");
  
      var nbsp =/\&nbsp;/ig,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }
  getJawabanBAscii({jawaban_b}) {
    var regex = /(<([^>]+)>)/ig,
      body = jawaban_b,
      result = body.replace(regex, "");
    var nbsp =/\&nbsp;/ig,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }
  getJawabanCAscii({jawaban_c}) {
    var regex = /(<([^>]+)>)/ig,
      body = jawaban_c,
      result = body.replace(regex, "");
  
      var nbsp =/\&nbsp;/ig,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }
  getJawabanDAscii({jawaban_d}) {
    var regex = /(<([^>]+)>)/ig,
      body = jawaban_d,
      result = body.replace(regex, "");
  
      var nbsp =/\&nbsp;/ig,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }
  getJawabanEAscii({jawaban_e}) {
    var regex = /(<([^>]+)>)/ig,
      body = jawaban_e,
      result = body.replace(regex, "");
  
      var nbsp =/\&nbsp;/ig,
      body1 = result,
      result1 = body1.replace(nbsp, "");
    return result1;
  }

  
}

module.exports = MSoalUjian;

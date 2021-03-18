"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSoalUjian extends Model {
  static get table() {
    return "m_soal_ujian";
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
}

module.exports = MSoalUjian;

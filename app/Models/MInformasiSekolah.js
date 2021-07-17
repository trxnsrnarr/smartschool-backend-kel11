"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MInformasiSekolah extends Model {
  static get table() {
    return "m_informasi_sekolah";
  }
  // ini masih buffer
  getDeskripsiSingkat(deskripsi_singkat) {
    return deskripsi_singkat
      ? Buffer(deskripsi_singkat, "base64").toString("ascii")
      : "";
  }

  getVisi(visi) {
    return visi
      ? Buffer(visi, "base64").toString("ascii").replace("b&", "..........")
      : "";
  }

  getMisi(misi) {
    return misi
      ? Buffer(misi, "base64").toString("ascii").replace("b&", "..........")
      : "";
  }

  getDeskripsiSekolah(deskripsi_sekolah) {
    return deskripsi_sekolah
      ? Buffer(deskripsi_sekolah, "base64").toString("ascii")
      : "";
  }

  getPesanKepsek(pesan_kepsek) {
    return pesan_kepsek ? Buffer(pesan_kepsek, "base64").toString("ascii") : "";
  }

  getSejarah(sejarah) {
    return sejarah
      ? Buffer(sejarah, "base64").toString("ascii").replace("b&", "..........")
      : "";
  }

  getLirikMars(lirik_mars) {
    return lirik_mars ? Buffer(lirik_mars, "base64").toString("ascii") : "";
  }

  getFotoTentangSekolah(foto_tentang_sekolah) {
    return foto_tentang_sekolah ? foto_tentang_sekolah.split(",") : [];
  }
}

module.exports = MInformasiSekolah;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MProfilUser extends Model {
  static get table() {
    return "m_profil_user";
  }

  static get computed() {
    return ["dataBiodata", "dataRapor"];
  }

  getPendidikan(pendidikan) {
    return pendidikan ? JSON.parse(pendidikan) : [];
  }

  getPengalaman(pengalaman) {
    return pengalaman ? JSON.parse(pengalaman) : [];
  }

  getPrestasi(prestasi) {
    return prestasi ? JSON.parse(prestasi) : [];
  }

  getPortofolio(portofolio) {
    return portofolio ? JSON.parse(portofolio) : [];
  }

  getBahasa(bahasa) {
    return bahasa ? JSON.parse(bahasa) : [];
  }

  getKeahlian(keahlian) {
    return keahlian ? keahlian.split(',') : [];
  }

  getDataBiodata({
    // identitas
    nama,
    nama_panggilan,
    whatsapp,
    gender,
    agama,
    tempat_lahir,
    tanggal_lahir,

    // informasi
    nisn,
    asal_sekolah,

    // alamat
    alamat,
    province_id,
    regency_id,
    district_id,
    village_id,
    kodepos,

    // kesehatan
    tb,
    bb,
    gol_darah,
    buta_warna,
    kacamata,
    disabilitas,
    surat_keterangan_sehat,
    surat_keterangan_buta_warna,

    // ortu
    nama_ayah,
    telp_ayah,
    alamat_ayah,
    pekerjaan_ayah,
    nama_ibu,
    telp_ibu,
    alamat_ibu,
    pekerjaan_ibu,
  }) {
    return (
      nama,
      nama_panggilan,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,
      nisn,
      asal_sekolah,
      alamat,
      province_id,
      regency_id,
      district_id,
      village_id,
      kodepos,
      tb,
      bb,
      gol_darah,
      buta_warna,
      kacamata,
      disabilitas,
      surat_keterangan_sehat,
      surat_keterangan_buta_warna,
      nama_ayah,
      telp_ayah,
      alamat_ayah,
      pekerjaan_ayah,
      nama_ibu,
      telp_ibu,
      alamat_ibu,
      pekerjaan_ibu ? true : false
    );
  }

  getDataRapor({
    // rapor
    fisika1,
    fisika2,
    fisika3,
    fisika4,
    matematika1,
    matematika2,
    matematika3,
    matematika4,
    bindo1,
    bindo2,
    bindo3,
    bindo4,
    bing1,
    bing2,
    bing3,
    bing4,

    // lampiran rapor
    semester1,
    semester2,
    semester3,
    semester4,
  }) {
    return (
      fisika1,
      fisika2,
      fisika3,
      fisika4,
      matematika1,
      matematika2,
      matematika3,
      matematika4,
      bindo1,
      bindo2,
      bindo3,
      bindo4,
      bing1,
      bing2,
      bing3,
      bing4,
      semester1,
      semester2,
      semester3,
      semester4 ? true : false
    );
  }
}

module.exports = MProfilUser;

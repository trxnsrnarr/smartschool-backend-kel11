"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MInformasiSekolahSchema extends Schema {
  up() {
    this.create("m_informasi_sekolah", (table) => {
      table.increments();
      // == beranda
      // selamat datang
      table.text("deskripsi_singkat");
      table.text("visi");
      table.text("misi");
      // mengapa harus sekolah ini
      table.text("background_section_mengapa");
      table.integer("jumlah_siswa");
      table.integer("jumlah_guru");
      table.integer("jumlah_kelas");
      // video profil sekolah
      table.text("thumbnail_profil");
      table.text("video_profil");
      // virtual tour
      table.text("background_section_virtual_tour");
      table.text("virtual_tour");

      // == profil
      // background halaman profil
      table.text("banner_profil");
      // tentang sekolah
      table.text("deskripsi_sekolah");
      table.text("foto_tentang_sekolah");
      // pesan kepsek
      table.text("pesan_kepsek");
      table.text("foto_kepsek");
      // sejarah sekolah
      table.text("sejarah");
      table.text("foto_sejarah");
      // lambang sekolah
      table.text("foto_logo");
      // lagu mars
      table.text("lirik_mars");
      table.text("lagu_mars");
      // kontak sekolah
      table.text("alamat");
      table.text("gmaps");
      table.string("email");
      table.string("telp");
      table.string("fax");

      // == sarpras
      table.text("banner_sarpras");

      // == blog
      table.text("banner_blog");

      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_informasi_sekolah");
  }
}

module.exports = MInformasiSekolahSchema;

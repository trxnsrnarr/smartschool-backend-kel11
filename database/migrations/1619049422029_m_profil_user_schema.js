"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MProfilUserSchema extends Schema {
  up() {
    this.create("m_profil_user", (table) => {
      table.increments();
      table.text("bio");
      table.text("pendidikan");
      table.text("pengalaman");
      table.text("prestasi");
      table.text("portofolio");
      table.text("bahasa");
      table.text("keahlian");

      // informasi
      table.string("nisn");
      table.string("nis");
      table.string("nrk");
      table.string("nuptk");
      table.string("nip");
      table.string("status_kepegawaian");
      table.string("jenis_ptk");
      table.string("tugas_tambahan");
      table.string("tempat_lahir");
      table.string("agama");
      table.date("tanggal_masuk");
      table.string("kelas_diterima");
      table.date("telp_rumah");
      table.string("asal_sekolah");
      table.string("status_keluarga");
      table.integer("anak_ke");

      // alamat
      table.text("alamat");
      table.integer("rt");
      table.string("rw");
      table.string("province_id", 2).index("province_id");
      table.string("regency_id", 4).index("regency_id");
      table.string("district_id", 7).index("district_id");
      table.string("village_id", 10).index("village_id");
      table.string("dusun");
      table.string("kodepos");

      // kesehatan
      table.integer("tb"); // tinggi badan
      table.integer("bb"); // berat badan
      table.string("gol_darah");
      table.boolean("buta_warna").defaultTo(0);
      table.string("kacamata");
      table.string("disabilitas");
      table.text("surat_keterangan_sehat");
      table.text("surat_keterangan_buta_warna");

      // ortu
      table.string("nama_ayah");
      table.string("telp_ayah");
      table.text("alamat_ayah");
      table.string("pekerjaan_ayah");
      table.string("nama_ibu");
      table.string("telp_ibu");
      table.text("alamat_ibu");
      table.string("pekerjaan_ibu");
      table.string("nama_wali");
      table.string("telp_wali");
      table.text("alamat_wali");
      table.string("pekerjaan_wali");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");

      // rapor
      table.integer("fisika1");
      table.integer("fisika2");
      table.integer("fisika3");
      table.integer("fisika4");
      table.integer("fisika5");
      table.integer("fisika6");
      table.integer("matematika1");
      table.integer("matematika2");
      table.integer("matematika3");
      table.integer("matematika4");
      table.integer("matematika5");
      table.integer("matematika6");
      table.integer("bindo1");
      table.integer("bindo2");
      table.integer("bindo3");
      table.integer("bindo4");
      table.integer("bindo5");
      table.integer("bindo6");
      table.integer("bing1");
      table.integer("bing2");
      table.integer("bing3");
      table.integer("bing4");
      table.integer("bing5");
      table.integer("bing6");

      // lampiran rapor
      table.text("semester1");
      table.text("semester2");
      table.text("semester3");
      table.text("semester4");
      table.text("semester5");
      table.text("semester6");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_profil_user");
  }
}

module.exports = MProfilUserSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSoalUjianSchema extends Schema {
  up() {
    this.create("m_soal_ujian", (table) => {
      table.increments();
      // ujian standar
      table.text("kd");
      table.text("kd_konten_materi");
      table.string("level_kognitif");
      table.string("bentuk");
      // akm literasi
      table.string("akm_konten_materi");
      table.string("akm_konteks_materi");
      table.string("akm_proses_kognitif");
      // pilihan ganda
      table.text("pertanyaan");
      table.text("jawaban_a");
      table.text("jawaban_b");
      table.text("jawaban_c");
      table.text("jawaban_d");
      table.text("jawaban_e");
      table.string("kj_pg");
      // esai
      table.text("rubrik_kj");

      // nilai pembahasan
      table.text("pembahasan");
      table.text("audio");
      table.float("nilai_soal", [11, 1]);

      // uraian
      table.text("opsi_a_uraian");
      table.text("opsi_b_uraian");
      table.string("kj_uraian");

      // pg kompleks
      table.string("jawaban_pg_kompleks");

      // menjodohkan
      table.text("pilihan_menjodohkan");
      table.text("soal_menjodohkan");

      table.boolean("dihapus").defaultTo(0);
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_soal_ujian");
  }
}

module.exports = MSoalUjianSchema;

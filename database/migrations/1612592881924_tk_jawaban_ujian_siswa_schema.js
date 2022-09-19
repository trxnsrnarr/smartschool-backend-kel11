"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkJawabanUjianSiswaSchema extends Schema {
  up() {
    this.create("tk_jawaban_ujian_siswa", (table) => {
      table.increments();
      table.text("jawaban_rubrik_esai");
      table.text("jawaban_foto");
      table.string("jawaban_pg");
      table.text("jawaban_esai");
      table.string("jawaban_opsi_uraian");
      table.text("jawaban_uraian");
      table.string("jawaban_pg_kompleks");
      table.text("jawaban_menjodohkan");
      table.integer("durasi");
      table.boolean("dinilai");
      table.boolean("ragu");
      table.boolean("dijawab");
      table.integer("m_soal_ujian_id").unsigned().index("m_soal_ujian_id");
      table
        .foreign("m_soal_ujian_id")
        .references("m_soal_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("tk_peserta_ujian_id")
        .unsigned()
        .index("tk_peserta_ujian_id");
      table
        .foreign("tk_peserta_ujian_id")
        .references("tk_peserta_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_jawaban_ujian_siswa");
  }
}

module.exports = TkJawabanUjianSiswaSchema;

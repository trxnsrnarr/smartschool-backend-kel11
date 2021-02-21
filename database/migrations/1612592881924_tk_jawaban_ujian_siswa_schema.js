"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkJawabanUjianSiswaSchema extends Schema {
  up() {
    this.create("tk_jawaban_ujian_siswa", (table) => {
      table.increments();
      table.text("jawaban_rubrik_esai");
      table.string("jawaban_pg");
      table.integer("durasi");
      table.boolean("ragu");
      table.boolean("dijawab");
      table.integer("m_soal_ujian_id").unsigned();
      table.integer("tk_peserta_ujian_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_jawaban_ujian_siswa");
  }
}

module.exports = TkJawabanUjianSiswaSchema;

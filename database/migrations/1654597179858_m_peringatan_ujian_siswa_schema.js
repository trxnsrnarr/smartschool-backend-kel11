"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPeringatanUjianSiswaSchema extends Schema {
  up() {
    this.create("m_peringatan_ujian_siswa", (table) => {
      table.increments();
      table
        .integer("tk_peserta_ujian_id")
        .unsigned()
        .index("tk_peserta_ujian_id");
      table
        .foreign("tk_peserta_ujian_id")
        .references("tk_peserta_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("jenis");
      table.string("deskripsi");
      table.string("dibaca");
      table.string("dibaca_guru");
      table.boolean("dihapus").defaultTo(0);
      table.string("jawaban");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("tk_jadwal_ujian_id")
        .unsigned()
        .index("tk_jadwal_ujian_id");
      table
        .foreign("tk_jadwal_ujian_id")
        .references("tk_jadwal_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_peringatan_ujian_siswa");
  }
}

module.exports = MPeringatanUjianSiswaSchema;

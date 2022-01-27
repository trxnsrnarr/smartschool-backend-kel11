"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPenerimaanSiswaSchema extends Schema {
  up() {
    this.create("m_penerimaan_siswa", (table) => {
      table.increments();
      table.integer("lama_pkl");
      table.datetime("tanggal_mulai");
      table.datetime("tanggal_selesai");
      table
        .integer("m_penerimaan_perusahaan_id")
        .unsigned()
        .index("m_penerimaan_perusahaan_id");
      table
        .foreign("m_penerimaan_perusahaan_id")
        .references("m_penerimaan_perusahaan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_jurusan_id").unsigned().index("m_jurusan_id");
      table
        .foreign("m_jurusan_id")
        .references("m_jurusan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_rombel_id").unsigned().index("m_rombel_id");
      table
        .foreign("m_rombel_id")
        .references("m_rombel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_penerimaan_siswa");
  }
}

module.exports = MPenerimaanSiswaSchema;

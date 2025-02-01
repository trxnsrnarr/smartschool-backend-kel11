"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPendaftarPpdbSchema extends Schema {
  up() {
    this.create("m_pendaftar_ppdb", (table) => {
      table.increments();
      table.string("bank");
      table.string("norek");
      table.string("nama_pemilik");
      table.string("nominal");
      table.text("bukti");
      table.boolean("diverifikasi").defaultTo(0);
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_gelombang_ppdb_id")
        .unsigned()
        .index("m_gelombang_ppdb_id");
      table
        .foreign("m_gelombang_ppdb_id")
        .references("m_gelombang_ppdb.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_jurusan_1_id").unsigned().index("m_jurusan_1_id");
      table
        .foreign("m_jurusan_1_id")
        .references("m_jurusan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_jurusan_2_id").unsigned().index("m_jurusan_2_id");
      table
        .foreign("m_jurusan_2_id")
        .references("m_jurusan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_jurusan_3_id").unsigned().index("m_jurusan_3_id");
      table
        .foreign("m_jurusan_3_id")
        .references("m_jurusan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_jurusan_4_id").unsigned().index("m_jurusan_4_id");
      table
        .foreign("m_jurusan_4_id")
        .references("m_jurusan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_jurusan_5_id").unsigned().index("m_jurusan_5_id");
      table
        .foreign("m_jurusan_5_id")
        .references("m_jurusan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_pendaftar_ppdb");
  }
}

module.exports = MPendaftarPpdbSchema;

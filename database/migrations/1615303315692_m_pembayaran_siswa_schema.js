"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPembayaranSiswaSchema extends Schema {
  up() {
    this.create("m_pembayaran_siswa", (table) => {
      table.increments();
      table.text("riwayat");
      table.string("status");
      table.datetime("ditangguhkan");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("tk_pembayaran_rombel_id")
        .unsigned()
        .index("tk_pembayaran_rombel_id");
      table
        .foreign("tk_pembayaran_rombel_id")
        .references("tk_pembayaran_rombel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
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
    this.drop("m_pembayaran_siswa");
  }
}

module.exports = MPembayaranSiswaSchema;

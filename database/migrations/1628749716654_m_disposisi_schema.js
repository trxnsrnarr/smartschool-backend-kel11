"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MDisposisiSchema extends Schema {
  up() {
    this.create("m_disposisi", (table) => {
      table.increments();
      table.string("penanganan");
      table.date("tanggal_pengembalian");
      table.string("isi");
      table.string("ttd");
      table.integer("m_surat_id").unsigned().index("m_surat_id");
      table
        .foreign("m_surat_id")
        .references("m_surat.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("status").defaultTo(0);
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_disposisi");
  }
}

module.exports = MDisposisiSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkKategoriTipeAkunSchema extends Schema {
  up() {
    this.create("tk_kategori_tipe_akun", (table) => {
      table.increments();
      table
        .integer("m_keu_kategori_tipe_akun_id")
        .unsigned()
        .index("m_keu_kategori_tipe_akun_id");
      table
        .foreign("m_keu_kategori_tipe_akun_id")
        .references("m_keu_kategori_tipe_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_keu_akun_id").unsigned().index("m_keu_akun_id");
      table
        .foreign("m_keu_akun_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("urutan");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_kategori_tipe_akun");
  }
}

module.exports = TkKategoriTipeAkunSchema;

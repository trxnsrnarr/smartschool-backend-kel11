"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkSuratKeputusanUserSchema extends Schema {
  up() {
    this.create("tk_surat_keputusan_user", (table) => {
      table.increments();
      table
        .integer("m_surat_keputusan_id")
        .unsigned()
        .index("m_surat_keputusan_id");
      table
        .foreign("m_surat_keputusan_id")
        .references("m_surat_keputusan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_surat_keputusan_user");
  }
}

module.exports = TkSuratKeputusanUserSchema;

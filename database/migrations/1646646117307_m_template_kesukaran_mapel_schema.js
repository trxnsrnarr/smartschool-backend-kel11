"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTemplateKesukaranMapelSchema extends Schema {
  up() {
    this.create("m_template_kesukaran_mapel", (table) => {
      table.increments();
      table.string("tipe")
      table.string("judul");
      table.string("batas_bawah");
      table.string("batas_atas");
      table.integer("m_materi_id").unsigned().index("m_materi_id");
      table
        .foreign("m_materi_id")
        .references("m_materi.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_template_kesukaran_mapel");
  }
}

module.exports = MTemplateKesukaranMapelSchema;

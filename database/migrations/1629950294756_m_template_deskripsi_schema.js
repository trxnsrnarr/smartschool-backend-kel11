"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTemplateDeskripsiSchema extends Schema {
  up() {
    this.create("m_template_deskripsi", (table) => {
      table.increments();
      table.string("tipe");
      table
        .integer("m_mata_pelajaran_id")
        .unsigned()
        .index("m_mata_pelajaran_id");
      table
        .foreign("m_mata_pelajaran_id")
        .references("m_mata_pelajaran.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_predikat_nilai_id")
        .unsigned()
        .index("m_predikat_nilai_id");
      table
        .foreign("m_predikat_nilai_id")
        .references("m_predikat_nilai.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("prolog");
      table.string("epilog");
      table.boolean("dihapus");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_template_deskripsi");
  }
}

module.exports = MTemplateDeskripsiSchema;

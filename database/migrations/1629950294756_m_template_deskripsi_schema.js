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
      table.string("a_prolog");
      table.string("a_epilog");
      table.string("b_prolog");
      table.string("b_epilog");
      table.string("c_prolog");
      table.string("c_epilog");
      table.string("d_prolog");
      table.string("d_epilog");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_template_deskripsi");
  }
}

module.exports = MTemplateDeskripsiSchema;

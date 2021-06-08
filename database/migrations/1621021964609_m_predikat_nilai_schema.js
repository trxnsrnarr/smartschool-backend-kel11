"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPredikatNilaiSchema extends Schema {
  up() {
    this.create("m_predikat_nilai", (table) => {
      table.increments();
      table.string("predikat");
      table.integer("bb_pengetahuan");
      table.integer("ba_pengetahuan");
      table.integer("bb_keterampilan");
      table.integer("ba_keterampilan");
      table.string("sikap");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_predikat_nilai");
  }
}

module.exports = MPredikatNilaiSchema;

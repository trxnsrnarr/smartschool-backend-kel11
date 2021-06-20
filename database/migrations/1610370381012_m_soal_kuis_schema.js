"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSoalKuisSchema extends Schema {
  up() {
    this.create("m_soal_kuis", (table) => {
      table.increments();
      table.text("pertanyaan");
      table.text("pg_a");
      table.text("pg_b");
      table.text("pg_c");
      table.text("pg_d");
      table.text("pg_e");
      table.string("pg_kj");
      table.text("rubrik_kj");
      table.boolean("esai");
      table.text("esai_kj");
      table.text("pembahasan");
      table.integer("pg_poin");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_topik_id").unsigned().index("m_topik_id");
      table
        .foreign("m_topik_id")
        .references("m_topik.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_soal_kuis");
  }
}

module.exports = MSoalKuisSchema;

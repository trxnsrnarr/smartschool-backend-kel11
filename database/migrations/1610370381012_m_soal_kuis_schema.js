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
      table.boolean("dihapus");
      table.integer("m_topik_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_soal_kuis");
  }
}

module.exports = MSoalKuisSchema;

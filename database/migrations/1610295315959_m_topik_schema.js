"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTopikSchema extends Schema {
  up() {
    this.create("m_topik", (table) => {
      table.increments();
      table.string("judul");
      table.text("konten");
      table.text("lampiran");
      table.text("link");
      table.boolean("kuis");
      table.boolean("dihapus");
      table.integer("m_bab_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_topik");
  }
}

module.exports = MTopikSchema;

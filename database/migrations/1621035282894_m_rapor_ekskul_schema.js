"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRaporEkskulSchema extends Schema {
  up() {
    this.create("m_rapor_ekskul", (table) => {
      table.increments();
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("status");
      table.string("keterangan");
      table.boolean("dihapus");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_rapor_ekskul");
  }
}

module.exports = MRaporEkskulSchema;

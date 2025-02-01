"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkBankSoalGuruSchema extends Schema {
  up() {
    this.create("tk_bank_soal_guru", (table) => {
      table.increments();
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_ujian_id").unsigned().index("m_ujian_id");
      table
        .foreign("m_ujian_id")
        .references("m_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.string("status")
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_bank_soal_guru");
  }
}

module.exports = TkBankSoalGuruSchema;

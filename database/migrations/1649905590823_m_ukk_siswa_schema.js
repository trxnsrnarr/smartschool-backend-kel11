"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MUkkSiswaSchema extends Schema {
  up() {
    this.create("m_ukk_siswa", (table) => {
      table.increments();
      table.string("pembimbing")
      table.date("tanggal")
      table.string("keterangan")
      table.string("catatan")
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_ta_id").unsigned().index("m_ta_id");
      table
        .foreign("m_ta_id")
        .references("m_ta.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_ukk_siswa");
  }
}

module.exports = MUkkSiswaSchema;

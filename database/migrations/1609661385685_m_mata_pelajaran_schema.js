"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MMataPelajaranSchema extends Schema {
  up() {
    this.create("m_mata_pelajaran", (table) => {
      table.increments();
      table.string("nama");
      table.string("kode");
      table.string("kelompok");
      table.string("kkm");
      table.boolean("dihapus").defaultTo(0);
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
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_mata_pelajaran");
  }
}

module.exports = MMataPelajaranSchema;

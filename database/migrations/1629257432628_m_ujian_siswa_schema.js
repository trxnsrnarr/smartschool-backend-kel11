"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MUjianSiswaSchema extends Schema {
  up() {
    this.create("m_ujian_siswa", (table) => {
      table.increments();
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("uas_id").unsigned().index("uas_id");
      table
        .foreign("uas_id")
        .references("tk_peserta_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("uts_id").unsigned().index("uts_id");
      table
        .foreign("uts_id")
        .references("tk_peserta_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("nilai");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_ujian_siswa");
  }
}

module.exports = MUjianSiswaSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkMateriKesimpulanSchema extends Schema {
  up() {
    this.create("tk_materi_kesimpulan", (table) => {
      table.increments();
      table.text("kesimpulan");
      table.datetime("waktu_mulai");
      table.datetime("waktu_selesai");
      table.boolean("dibaca");
      table.integer("m_topik_id").unsigned().index("m_topik_id");
      table
        .foreign("m_topik_id")
        .references("m_topik.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_materi_kesimpulan");
  }
}

module.exports = TkMateriKesimpulanSchema;

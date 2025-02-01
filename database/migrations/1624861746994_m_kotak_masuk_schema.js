"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKotakMasukSchema extends Schema {
  up() {
    this.create("m_kotak_masuk", (table) => {
      table.increments();
      table.string("nama");
      table.string("subject");
      table
        .integer("m_user_pengirim_id")
        .unsigned()
        .index("m_user_pengirim_id");
      table
        .foreign("m_user_pengirim_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_tujuan_id").unsigned().index("m_user_tujuan_id");
      table
        .foreign("m_user_tujuan_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.text("isi");
      table.text("lmapiran");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_kotak_masuk");
  }
}

module.exports = MKotakMasukSchema;

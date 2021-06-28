"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKotakMasukKomenSchema extends Schema {
  up() {
    this.create("m_kotak_masuk_komen", (table) => {
      table.increments();
      table.text("komen");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_kotak_masuk_id").unsigned().index("m_kotak_masuk_id");
      table
        .foreign("m_kotak_masuk_id")
        .references("m_kotak_masuk.id")
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
    this.drop("m_kotak_masuk_komen");
  }
}

module.exports = MKotakMasukKomenSchema;

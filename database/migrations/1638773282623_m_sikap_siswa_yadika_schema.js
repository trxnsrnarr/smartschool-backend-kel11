"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSikapSiswaYadikaSchema extends Schema {
  up() {
    this.create("m_sikap_siswa_yadika", (table) => {
      table.increments();
      table.string("tipe");
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
      table.string("sikap_integritas");
      table.string("sikap_religius");
      table.string("nasionalis");
      table.string("mandiri");
      table.string("gotong_royong");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_sikap_siswa_yadika");
  }
}

module.exports = MSikapSiswaYadikaSchema;

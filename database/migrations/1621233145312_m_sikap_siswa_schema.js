"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSikapSiswaSchema extends Schema {
  up() {
    this.create("m_sikap_siswa", (table) => {
      table.increments();
      table.string("tipe");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_sikap_sosial_ditunjukkan_id")
        .unsigned()
        .index("m_sikap_sosial_ditunjukkan_id");
      table
        .foreign("m_sikap_sosial_ditunjukkan_id")
        .references("m_sikap_sosial.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_sikap_sosial_ditingkatkan_id")
        .unsigned()
        .index("m_sikap_sosial_ditingkatkan_id");
      table
        .foreign("m_sikap_sosial_ditingkatkan_id")
        .references("m_sikap_sosial.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_sikap_spiritual_ditunjukkan_id")
        .unsigned()
        .index("m_sikap_spiritual_ditunjukkan_id");
      table
        .foreign("m_sikap_spiritual_ditunjukkan_id")
        .references("m_sikap_spiritual.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_sikap_spiritual_ditingkatkan_id")
        .unsigned()
        .index("m_sikap_spiritual_ditingkatkan_id");
      table
        .foreign("m_sikap_spiritual_ditingkatkan_id")
        .references("m_sikap_spiritual.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("status");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_sikap_siswa");
  }
}

module.exports = MSikapSiswaSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSikapRombelSchema extends Schema {
  up() {
    this.hasTable("m_sikap_rombel").then((exist) => {
      if (!exist)
        this.create("m_sikap_rombel", (table) => {
          table.increments();
          table.integer("m_rombel_id").unsigned().index("m_rombel_id");
          table
            .foreign("m_rombel_id")
            .references("m_rombel.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("m_sikap_ditunjukkan_id");
          table.string("m_sikap_ditingkatkan_id");
          table.boolean("status");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_sikap_rombel");
  }
}

module.exports = MSikapRombelSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkTipeSurelSchema extends Schema {
  up() {
    this.hasTable("tk_tipe_surel").then((exist) => {
      if (!exist)
        this.create("tk_tipe_surel", (table) => {
          table.increments();
          table.integer("m_surel_id").unsigned().index("m_surel_id");
          table
            .foreign("m_surel_id")
            .references("m_surel.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("tipe");
          table
            .integer("m_folder_arsip_id")
            .unsigned()
            .index("m_folder_arsip_id");
          table
            .foreign("m_folder_arsip_id")
            .references("m_folder_arsip.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.boolean("dibaca").defaultTo(0);
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("tk_tipe_surel");
  }
}

module.exports = TkTipeSurelSchema;

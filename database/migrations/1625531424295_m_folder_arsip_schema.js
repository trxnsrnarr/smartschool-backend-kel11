"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MFolderArsipSchema extends Schema {
  up() {
    this.hasTable("m_folder_arsip").then((exist) => {
      if (!exist)
        this.create("m_folder_arsip", (table) => {
          table.increments();
          table.string("nama");
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.boolean("pin");
          table.boolean("dihapus");
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_folder_arsip");
  }
}

module.exports = MFolderArsipSchema;

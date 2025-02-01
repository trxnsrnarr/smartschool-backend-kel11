"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MProyekSchema extends Schema {
  up() {
    this.create("m_proyek", (table) => {
      table.increments();
      table.string("nama");
      table.boolean("privasi");
      table.text("deskripsi");
      table.text("link_grup_whatsapp");
      table.text("banner");
      table
        .integer("m_status_proyek_id")
        .unsigned()
        .index("m_status_proyek_id");
      table
        .foreign("m_status_proyek_id")
        .references("m_status_proyek.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_proyek");
  }
}

module.exports = MProyekSchema;

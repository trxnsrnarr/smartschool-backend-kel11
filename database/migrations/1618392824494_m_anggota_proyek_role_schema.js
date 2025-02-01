"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MAnggotaProyekRoleSchema extends Schema {
  up() {
    this.create("m_anggota_proyek_role", (table) => {
      table.increments();
      table
        .integer("m_anggota_proyek_id")
        .unsigned()
        .index("m_anggota_proyek_id");
      table
        .foreign("m_anggota_proyek_id")
        .references("m_anggota_proyek.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("role");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_anggota_proyek_role");
  }
}

module.exports = MAnggotaProyekRoleSchema;

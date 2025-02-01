"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MAnggotaProyekSchema extends Schema {
  up() {
    this.create("m_anggota_proyek", (table) => {
      table.increments();
      table.integer("m_proyek_id").unsigned().index("m_proyek_id");
      table
        .foreign("m_proyek_id")
        .references("m_proyek.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("status"); // undangan,menerima,menolak
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_anggota_proyek");
  }
}

module.exports = MAnggotaProyekSchema;

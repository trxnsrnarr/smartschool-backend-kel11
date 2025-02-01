"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MAlumniSchema extends Schema {
  up() {
    this.create("m_alumni", (table) => {
      table.increments();
      table.string("jurusan");
      table.string("tahun_masuk");
      table.string("pekerjaan");
      table.string("kantor");
      table.string("sektor_industri");
      table.text("sekolah_lanjutan");
      table.text("pengalaman");
      table.text("sertifikasi_keahlian");
      table.boolean("purnakarya");
      table.text("deskripsi");
      table.boolean("dihapus").defaultTo(0);
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
    this.drop("m_alumni");
  }
}

module.exports = MAlumniSchema;

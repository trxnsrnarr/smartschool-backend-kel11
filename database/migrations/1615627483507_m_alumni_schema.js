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
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_alumni");
  }
}

module.exports = MAlumniSchema;

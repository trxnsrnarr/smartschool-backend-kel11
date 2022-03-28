"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMAlumniSchema extends Schema {
  up() {
    this.table("m_alumni", (table) => {
      // alter table
      table.string("nik");
      table.date('mulai_bekerja')
      table.string('posisi')
      table.text('id_card')
      table.date('mulai_usaha')
      table.string('bidang_usaha')
      table.string('posisi_usaha')
      table.text('alamat_usaha')
      table.date('mulai_kuliah')
      table.string('fakultas')
      table.string('prodi')
      table.text('kartu_mahasiswa')

    });
  }

  down() {
    this.table("m_alumni", (table) => {
      // reverse alternations
      table.dropColumn("usaha");
    });
  }
}

module.exports = UpdateMAlumniSchema;

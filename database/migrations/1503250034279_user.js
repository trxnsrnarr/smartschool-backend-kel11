"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("m_user", (table) => {
      table.increments();
      table.string("nama");
      table.string("whatsapp");
      table.string("email");
      table.string("password");
      table.string("avatar");
      table.date("tanggal_lahir");
      table.string("role");
      table.enu("gender", ["L", "P"]);
      table.string("nip");
      table.string("nrk");
      table.string("nuptk");
      table.string("pangkat");
      table.string("golongan");
      table.integer("m_sekolah_id").unsigned().index('m_sekolah_id');
      table.foreign('m_sekolah_id').references('m_sekolah.id').onDelete('cascade').onUpdate('cascade')
      table.boolean("dihapus");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_user");
  }
}

module.exports = UserSchema;

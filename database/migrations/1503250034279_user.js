"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("m_user", (table) => {
      table.increments();
      table.string("nama");
      table.string("whatsapp");
      table.enu("gender", ["L", "P"]);
      table.string("tempat_lahir");
      table.date("tanggal_lahir");
      table.string("password");
      table.string("avatar");
      table.string("home");
      table.string("role");
      table.string("email");
      table.string("agama");
      table.string("panggilan");

      //====
      table.string("nip");
      table.string("nama_ayah");
      table.string("nama_ibu");
      table.string("wa_ayah");
      table.string("wa_ibu");
      table.string("nrk");
      table.string("nuptk");
      table.string("pangkat");
      table.string("golongan");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.text("photos");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_user");
  }
}

module.exports = UserSchema;

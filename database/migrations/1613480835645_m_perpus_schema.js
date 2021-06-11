"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPerpusSchema extends Schema {
  up() {
    this.create("m_perpus", (table) => {
      table.increments();
      table.string("judul");
      table.text("deskripsi");
      table.text("penulis");
      table.text("cover");
      table.string("penerbit");
      table.string("tahun_terbit");
      table.string("isbn");
      table.boolean("draft");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_buku_id").unsigned().index("m_buku_id");
      table
        .foreign("m_buku_id")
        .references("m_buku.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_perpus");
  }
}

module.exports = MPerpusSchema;

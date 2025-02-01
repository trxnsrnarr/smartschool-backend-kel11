"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPrakerinSiswaSchema extends Schema {
  up() {
    this.create("m_prakerin_siswa", (table) => {
      table.increments();
      table.string("nama_perusahaan");
      table.string("alamat_perusahaan");
      table.string("province_id", 2).index("province_id");
      table.string("regency_id", 4).index("regency_id");
      table.string("district_id", 7).index("district_id");
      table.string("village_id", 10).index("village_id");
      table.string("telepon_perusahaan");
      table.string("kontak_narahubung");
      table.boolean("dihapus").defaultTo(0);
      table.string("pembimbing");
      table.date("tanggal_berangkat");
      table.date("tanggal_jemput");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_ta_id").unsigned().index("m_ta_id");
      table
        .foreign("m_ta_id")
        .references("m_ta.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_prakerin_siswa");
  }
}

module.exports = MPrakerinSiswaSchema;

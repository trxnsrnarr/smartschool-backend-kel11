"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MBarangSchema extends Schema {
  up() {
    this.hasTable("m_barang").then((exist) => {
      if (!exist)
        this.create("m_barang", (table) => {
          table.increments();
          table.string("kode_barang");
          table.string("nama");
          table.string("merk");
          table.string("tahun_beli");
          table.string("asal");
          table.string("harga");
          table.string("deskripsi");
          table.string("status");
          table.string("kepemilikan");
          table.integer('jumlah')
          table.integer("m_lokasi_id").unsigned().index("m_lokasi_id");
          table
            .foreign("m_lokasi_id")
            .references("m_lokasi.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_barang");
  }
}

module.exports = MBarangSchema;

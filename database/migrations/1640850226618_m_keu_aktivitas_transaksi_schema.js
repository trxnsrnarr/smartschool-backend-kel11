"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuAktivitasTransaksiSchema extends Schema {
  up() {
    this.create("m_keu_aktivitas_transaksi", (table) => {
      table.increments();
      table.string("judul");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_keu_kategori_tipe_akun_id")
        .unsigned()
        .index("m_keu_kategori_tipe_akun_id");
      table
        .foreign("m_keu_kategori_tipe_akun_id")
        .references("m_keu_kategori_tipe_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_keu_kategori_arus_kas_id")
        .unsigned()
        .index("m_keu_kategori_arus_kas_id");
      table
        .foreign("m_keu_kategori_arus_kas_id")
        .references("m_keu_kategori_arus_kas.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("saldo");
      table.string("urutan")
      table.timestamps();
    });
  }

  down() {
    this.drop("m_keu_aktivitas_transaksi");
  }
}

module.exports = MKeuAktivitasTransaksiSchema;

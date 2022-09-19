"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRencanaJurnalSchema extends Schema {
  up() {
    this.create("m_rencana_jurnal", (table) => {
      table.increments();
      table.string("jenis");
      table.integer("m_keu_akun_id").unsigned().index("m_keu_akun_id");
      table
        .foreign("m_keu_akun_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_rencana_transaksi_id")
        .unsigned()
        .index("m_rencana_transaksi_id");
      table
        .foreign("m_rencana_transaksi_id")
        .references("m_rencana_transaksi.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_riwayat_pembayaran_siswa_id")
        .unsigned()
        .index("m_riwayat_pembayaran_siswa_id");
      table
        .foreign("m_riwayat_pembayaran_siswa_id")
        .references("m_riwayat_pembayaran_siswa.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("saldo");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_rencana_jurnal");
  }
}

module.exports = MRencanaJurnalSchema;

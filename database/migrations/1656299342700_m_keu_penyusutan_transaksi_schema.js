"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuPenyusutanTransaksiSchema extends Schema {
  up() {
    this.create("m_keu_penyusutan_transaksi", (table) => {
      table.increments();
      table
        .integer("m_keu_transaksi_id")
        .unsigned()
        .index("m_keu_transaksi_id");
      table
        .foreign("m_keu_transaksi_id")
        .references("m_keu_transaksi.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("nilai_residu");
      table.integer("persentase");
      table.integer("masa_pakai");
      table.string("satuan");
      table.string("nama_transaksi");
      table
        .integer("m_keu_akun_debet_id")
        .unsigned()
        .index("m_keu_akun_debet_id");
      table
        .foreign("m_keu_akun_debet_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_keu_akun_kredit_id")
        .unsigned()
        .index("m_keu_akun_kredit_id");
      table
        .foreign("m_keu_akun_kredit_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("saldo");
      table.datetime("terakhir_updates");
      table.datetime("update_selanjutnya");
      table.integer("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_keu_penyusutan_transaksi");
  }
}

module.exports = MKeuPenyusutanTransaksiSchema;

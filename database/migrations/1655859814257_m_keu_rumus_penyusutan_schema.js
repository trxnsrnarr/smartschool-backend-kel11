"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuRumusPenyusutanSchema extends Schema {
  up() {
    this.create("m_keu_rumus_penyusutan", (table) => {
      table.increments();
      table.string("nama")
      table.text("rumus");
      table.integer("m_keu_akun_id").unsigned().index("m_keu_akun_id");
      table
        .foreign("m_keu_akun_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_keu_akun_akumulasi_id")
        .unsigned()
        .index("m_keu_akun_akumulasi_id");
      table
        .foreign("m_keu_akun_akumulasi_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_keu_akun_penyusustan_id")
        .unsigned()
        .index("m_keu_akun_penyusustan_id");
      table
        .foreign("m_keu_akun_penyusustan_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
        table.date("terakhir_updates");
        table.date("update_selanjutnya");
        table.integer("dihapus").defaultTo(0);
        table.timestamps();
        table.integer("lama");
    });
  }

  down() {
    this.drop("m_keu_rumus_penyusutan");
  }
}

module.exports = MKeuRumusPenyusutanSchema;

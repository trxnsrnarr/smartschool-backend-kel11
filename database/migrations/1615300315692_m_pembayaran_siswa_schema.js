"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPembayaranSiswaSchema extends Schema {
  up() {
    this.create("m_pembayaran_siswa", (table) => {
      table.increments();
      table.text("riwayat"); // {bank: '', norek: '123', nama_pemilik: 'asdf', nominal: '123', bukti: 'asdf.jpg', status: 'menunggu konfirmasi'}
      table.string("status");
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("tk_pembayaran_rombel_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_pembayaran_siswa");
  }
}

module.exports = MPembayaranSiswaSchema;

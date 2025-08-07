"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPeminjamanSchema extends Schema {
  up() {
    this.hasTable("m_peminjaman").then((exist) => {
      if (!exist)
        this.create("m_peminjaman", (table) => {
          table.increments(); // id otomatis

          table.integer("waktu_peminjaman").nullable(); // dari m_barang
          table.date("tanggal_peminjaman").notNullable();
          table.date("tanggal_pengembalian").nullable();

          table.integer("m_user_id").unsigned().nullable();
          table
            .integer('m_jurusan_barang_id')
            .unsigned()
            .nullable()
            .references('id')
            .inTable('m_jurusan_barang')
            .onDelete('SET NULL');

          table
            .integer("m_kategori_barang_id")
            .unsigned()
            .nullable()
            .references("id")
            .inTable("m_kategori_barang")
            .onDelete("SET NULL");

          table
            .integer("m_jurusan_barang_id")
            .unsigned()
            .nullable()
            .references("id")
            .inTable("m_jurusan_barang")
            .onDelete("SET NULL");

          table.string("nama_siswa").notNullable(); // snapshot dari user
          table.string("kelas").nullable();

          table.string("nama_barang").notNullable(); // snapshot dari m_barang
          table.string("merk").nullable();
          table.text("spesifikasi").nullable();
          table.string("kode_barang").notNullable();

          table.enum("status", ["dipinjam", "dikembalikan", "hilang", "rusak"]).defaultTo("dipinjam");
          table.text("sanksi").nullable();

          table.string("foto_peminjaman").nullable();
          table.string("foto_pengembalian").nullable();

          table.timestamps(); // created_at, updated_at
        });
    });
  }

  down() {
    this.drop("m_peminjaman");
  }
}

module.exports = MPeminjamanSchema;

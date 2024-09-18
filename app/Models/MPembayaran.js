"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPembayaran extends Model {
  static get table() {
    return "m_pembayaran";
  }

  rombel() {
    return this.hasMany("App/Models/TkPembayaranRombel");
  }
  transaksi() {
    return this.belongsTo("App/Models/MKeuTransaksi", "id", "m_pembayaran_id");
  }
}

module.exports = MPembayaran;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKeuPenyusutanTransaksi extends Model {
  static get table() {
    return "m_keu_penyusutan_transaksi";
  }
  transaksi() {
    return this.belongsTo("App/Models/MKeuTransaksi");
  }
  akunDebet() {
    return this.belongsTo("App/Models/MKeuAkun", "m_keu_akun_debet_id", "id");
  }
  akunKredit() {
    return this.belongsTo("App/Models/MKeuAkun", "m_keu_akun_kredit_id", "id");
  }
}

module.exports = MKeuPenyusutanTransaksi;

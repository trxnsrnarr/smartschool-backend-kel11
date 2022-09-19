"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKeuAkun extends Model {
  static get table() {
    return "m_keu_akun";
  }

  rek() {
    return this.hasOne("App/Models/MRekSekolah");
  }
  rek1() {
    return this.hasOne("App/Models/MRekSekolah");
  }
  rek2() {
    return this.hasOne("App/Models/MRekSekolah");
  }

  penyusutan() {
    return this.hasOne("App/Models/MKeuRumusPenyusutan");
  }
  
  rekRencana() {
    return this.hasOne("App/Models/MRekSekolah");
  }
  rekRencana1() {
    return this.hasOne("App/Models/MRekSekolah");
  }
  rekRencana2() {
    return this.hasOne("App/Models/MRekSekolah");
  }

  jurnal() {
    return this.hasMany("App/Models/MKeuJurnal");
  }
  jurnal1() {
    return this.hasMany("App/Models/MKeuJurnal");
  }
  jurnal2() {
    return this.hasMany("App/Models/MKeuJurnal");
  }
  jurnal3() {
    return this.hasMany("App/Models/MKeuJurnal");
  }
  rencanaJurnal() {
    return this.hasMany("App/Models/MKeuRencanaJurnal");
  }
  rencanaJurnal1() {
    return this.hasMany("App/Models/MKeuRencanaJurnal");
  }
  rencanaJurnal2() {
    return this.hasMany("App/Models/MKeuRencanaJurnal");
  }
  rencanaJurnal3() {
    return this.hasMany("App/Models/MKeuRencanaJurnal");
  }
  rumusAkun() {
    return this.belongsTo("App/Models/MRumusKeuAkun","id","m_keu_akun_id");
  }
}

module.exports = MKeuAkun;

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TkPesertaUjianPpdb extends Model {
    static get table() {
        return "tk_peserta_ujian_ppdb";
      }
    
      static get computed() {
        return ["jamMulai", "jamSelesai"];
      }
    
      jawabanSiswa() {
        return this.hasMany(
          "App/Models/TkJawabanUjianSiswa",
          "id",
          "tk_peserta_ujian_ppdb_id"
        );
      }
      
    
      jadwalPpdb() {
        return this.belongsTo("App/Models/MJadwalPpdb");
      }

      peserta() {
        return this.belongsTo("App/Models/TkPesertaUjian", "tk_peserta_ujian_id");
      }
    
      // getJamMulai({ waktu_mulai }) {
      //   return moment(waktu_mulai).format("HH:mm");
      // }
    
      // getJamSelesai({ waktu_selesai }) {
      //   return !waktu_selesai ? "-" : moment(waktu_selesai).format("HH:mm");
      // }
    
      user() {
        return this.belongsTo("App/Models/User", "m_user_id");
      }
}

module.exports = TkPesertaUjianPpdb

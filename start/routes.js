"use strict";

const { route, RouteGroup } = require("@adonisjs/framework/src/Route/Manager");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get(
  "/master/sekolah-dinas-summary",
  "MainController.getMasterSekolahDinasSummary"
);
Route.get(
  "/master/sekolah-ss-summary",
  "MainController.getMasterSekolahSSSummary"
);
Route.get("/master/sekolah-ss", "MainController.getMasterSekolahSS");
Route.get("/master/sekolah", "MainController.getMasterSekolah");
Route.get("/master/sekolah/npsn", "MainController.getMasterSekolahNpsn");
Route.get(
  "/master/sekolah/propinsi",
  "MainController.getMasterSekolahProvinsi"
);
Route.get(
  "/master/sekolah/propinsi/:propinsi_id",
  "MainController.getMasterSekolahProvinsiDetail"
);
Route.get(
  "/master/sekolah/kabupaten/:kabupaten_id",
  "MainController.getMasterSekolahKabupatenDetail"
);
Route.get("/master/sekolah/:id", "MainController.detailSekolahMaster");
Route.post("/master/sekolah", "MainController.tambahSekolah");
Route.post("/master/sekolah/:id", "MainController.postSekolahSS");
Route.post("/master/registrasi", "MainController.postRegistrasiSekolah");

// utils
Route.get("/lokasi-saat-ini", "MainController.getLokasiSaatIni");
Route.post("/single-upload", "MainController.singleUpload");
Route.post("/rich-editor-upload", "MainController.richEditorUpload");
Route.get("/sekolah/me", "MainController.meSekolah");
Route.post("/fitur-sekolah", "SecondController.updateFitur");

// data
Route.get("/province", "MainController.getProvince");
Route.get("/regency", "MainController.getRegency");
Route.get("/district", "MainController.getDistrict");
Route.get("/village", "MainController.getVillage");
Route.get("/sekolah-kemdikbud", "MainController.getMasterSekolah");

// auth
Route.post("/loginwhatsapp", "MainController.loginWhatsapp");
Route.post("/login", "MainController.login");
Route.post("/loginadminwhatsapp", "MainController.loginAdminWhatsapp");
Route.post("/loginadmin", "MainController.loginAdmin");
Route.get("/profil", "MainController.getProfil");
Route.put("/profil", "MainController.putProfil");
Route.put("/ubah-password", "MainController.putUbahPassword");
Route.post("/profil-user", "MainController.postProfilUser");
Route.get("/profil-user", "MainController.getProfilUser");
Route.get("/profil-user/:user_id", "MainController.detailProfilUser");
Route.post("/profil-user/:user_id", "MainController.postDetailProfilUser");
Route.get("/profil/guru/:user_id", "MainController.getProfilGuru");

// user
Route.get("/user", "MainController.getUser");
Route.get("/user/:user_id", "MainController.detailUser");
Route.post("/reset-password", "MainController.resetPassword");
Route.post("/reset-password-role", "UserController.updatePasswordRole");
Route.post("/reset-password-request", "MainController.requestResetPassword");

// sekolah
Route.get("/sekolah", "MainController.getSekolah");
Route.put("/sekolah/:sekolah_id", "MainController.putSekolah");

// jurusan
Route.get("/jurusan", "MainController.getJurusan");
Route.post("/jurusan", "MainController.postJurusan");
Route.put("/jurusan/:jurusan_id", "MainController.putJurusan");
Route.delete("/jurusan/:jurusan_id", "MainController.deleteJurusan");

// guru
Route.get("/guru", "MainController.getGuru");
Route.get("/guru/:guru_id", "MainController.detailGuru");
Route.post("/guru", "MainController.postGuru");
Route.put("/guru/:guru_id", "MainController.putGuru");
Route.delete("/guru/:guru_id", "MainController.deleteGuru");

// siswa
Route.get("/siswa", "MainController.getSiswa");
Route.post("/siswa", "MainController.postSiswa");
Route.put("/siswa/:siswa_id", "MainController.putSiswa");
Route.put("/avatar-siswa/:user_id", "MainController.putFotoSiswa");
Route.delete("/siswa/:siswa_id", "MainController.deleteSiswa");

// ppdb
Route.post("/ppdb/daftar", "MainController.daftarPPDB");
Route.post("/ppdb/login", "MainController.loginPPDB");
Route.post("/ppdb/downloadgelombang", "MainController.downloadGelombangPPDB");

// alumni
Route.get("/alumni", "MainController.getAlumni");
Route.post("/alumni", "MainController.postAlumni");
Route.put("/alumni/:alumni_id", "MainController.putAlumni");
Route.delete("/alumni/:alumni_id", "MainController.deleteAlumni");

// praktik kerja
Route.get("/praktik-kerja", "MainController.getPraktikKerja");
Route.post("/praktik-kerja", "MainController.postPraktikKerja");
Route.put("/praktik-kerja/:id", "MainController.putPraktikKerja");
Route.delete("/praktik-kerja/:id", "MainController.deletePraktikKerja");

// praktik kerja
Route.get("/eskul", "MainController.getEskul");
Route.get("/eskul/:ekskul_id", "MainController.detailEskul");
Route.post("/eskul", "MainController.postEskul");
Route.put("/eskul/:id", "MainController.putEskul");
Route.delete("/eskul/:id", "MainController.deleteEskul");
Route.post("/anggota-eskul/:ekskul_id", "MainController.postSiswaEkskulV2");
Route.delete("/anggota-eskul/:ekskul_id", "MainController.deleteAnggotaEskul");

// ta
Route.get("/ta", "MainController.getTA");
Route.post("/ta", "MainController.postTA");
Route.put("/ta/:ta_id", "MainController.putTA");
Route.delete("/ta/:ta_id", "MainController.deleteTA");

// rombel
Route.get("/rombel", "MainController.getRombel");
Route.get("/rombel/:jadwal_mengajar_id", "MainController.detailRombel");
Route.post("/rombel", "MainController.postRombel");
Route.put("/rombel/:rombel_id", "MainController.putRombel");
Route.delete("/rombel/:rombel_id", "MainController.deleteRombel");
Route.post(
  "/rombel/:rombel_id/:user_id/:mata_pelajaran_id",
  "MainController.postSikapRombel"
);
Route.post(
  "/rapor-sikap/sosial/:user_id",
  "MainController.postRaporSikapSosial"
);
Route.post(
  "/rapor-sikap/spiritual/:user_id",
  "MainController.postRaporSikapSpiritual"
);
Route.post(
  "/rapor-sikap/yadika/:user_id",
  "MainController.postRaporSikapYadika"
);
Route.delete("/rapor-sikap/:user_id", "MainController.deleteRaporSikap");
Route.delete(
  "/rapor-sikap/sosial/:user_id",
  "MainController.deleteRaporSikapSosial"
);
Route.delete(
  "/rapor-sikap/spiritual/:user_id",
  "MainController.deleteRaporSikapSpiritual"
);
Route.get(
  "/rombel/:rombel_id/nilai/:user_id",
  "MainController.detailRombelWalas"
);
// Route.get("/rombel/rapor/:user_id", "MainController.getRombelRapor");
// anggota rombel
Route.get("/anggota-rombel", "RombelController.getAnggotaRombel");
// Route.get("/anggota-rombel", "MainController.getAnggotaRombel");
Route.post("/anggota-rombel", "MainController.postAnggotaRombel");
Route.post("/anggota-rombel/import", "MainController.importAnggotaRombel");
Route.post(
  "/anggota-rombel/import-password",
  "MainController.importAnggotaRombelPassword"
);

// anggota ekskul
Route.get("/ekskul-post/:ekskul_id", "MainController.getPostSiswaEkskul");
Route.post("/anggota-ekskul", "MainController.postSiswaEkskul");
Route.put("/anggota-ekskul", "MainController.putSiswaEkskul");
Route.post("/anggota-ekskul/import", "MainController.importAnggotaEkskul");

// MATA PELAJARAN SERVICE - START
Route.get("/mata-pelajaran", "MainController.getMataPelajaran");
Route.post("/mata-pelajaran", "MainController.postMataPelajaran");
Route.put(
  "/mata-pelajaran/:mata_pelajaran_id",
  "MainController.putMataPelajaran"
);
Route.delete(
  "/mata-pelajaran/:mata_pelajaran_id",
  "MainController.deleteMataPelajaran"
);
Route.post("/mata-pelajaran/import", "MainController.importMapel");
Route.post("/mata-pelajaran/download", "MainController.downloadMapel");
// MATA PELAJARAN SERVICE - END

// jam mengajar
Route.get("/jam-mengajar", "MainController.getJamMengajar");
Route.put("/jam-mengajar/:jam_mengajar_id", "MainController.putJamMengajar");

// jadwal mengajar
Route.get("/jadwal-mengajar-all", "SecondController.getJadwalMengajarAll");
Route.get("/jadwal-mengajar", "MainController.getJadwalMengajar");
Route.get(
  "/jadwal-mengajar/pertemuan",
  "MainController.getJadwalMengajarPertemuan"
);
Route.put(
  "/jadwal-mengajar/:jadwal_mengajar_id",
  "MainController.putJadwalMengajar"
);

// post
Route.get("/blog", "MainController.getBlog");
Route.get("/blog/:post_id", "MainController.detailBlog");
Route.get("/post", "MainController.getPost");
Route.get("/post/:post_id", "MainController.detailPost");
Route.post("/post", "MainController.postPost");
Route.put("/post/:post_id", "MainController.putPost");
Route.delete("/post/:post_id", "MainController.deletePost");

// kategori
Route.get("/kategori", "MainController.getKategori");
Route.post("/kategori", "MainController.postKategori");
Route.put("/kategori/:kategori_id", "MainController.putKategori");
Route.delete("/kategori/:kategori_id", "MainController.deleteKategori");

// materi
Route.get("/materi", "MainController.getMateri");
Route.get("/materi/:materi_id", "MainController.detailMateri");
Route.post("/materi", "MainController.postMateri");
Route.put("/materi/:materi_id", "MainController.putMateri");
Route.delete("/materi/:materi_id", "MainController.deleteMateri");

// rencana Keuangan
Route.get("rencana-keuangan", "KeuanganController.getPerencanaan");
Route.get(
  "rencana-rekening-keuangan/:perencanaan_id",
  "KeuanganController.detailRekeningPerencanaan"
);
Route.get(
  "rencana-keuangan/:perencanaan_id",
  "KeuanganController.detailPerencanaan"
);
Route.post("rencana-keuangan", "KeuanganController.postPerencanaan");
Route.put(
  "rencana-keuangan/:perencanaan_id",
  "KeuanganController.putPerencanaan"
);
Route.delete(
  "rencana-keuangan/:perencanaan_id",
  "KeuanganController.deletePerencanaan"
);

// Rencana transaksi
Route.get(
  "rencana-transaksi/:rencana_id",
  "KeuanganController.getRencanaTransaksi"
);
Route.post(
  "rencana-transaksi/:rencana_id",
  "KeuanganController.postRencanaTransaksi"
);
Route.put(
  "rencana-transaksi/:transaksi_id",
  "KeuanganController.putRencanaTransaksi"
);
Route.delete(
  "rencana-transaksi/:transaksi_id",
  "KeuanganController.deleteRencanaTransaksi"
);

// Laporan neraca
Route.get(
  "rencana-neraca/:perencanaan_id",
  "KeuanganController.getRencanaNeraca"
);
Route.post("rencana-neraca", "KeuanganController.postNeraca");
Route.put("rencana-neraca/:neraca_id", "KeuanganController.putNeraca");
Route.delete("rencana-neraca/:neraca_id", "KeuanganController.deleteNeraca");
Route.post(
  "kategori-rencana-neraca/:perencanaan_id",
  "KeuanganController.postKategoriNeraca"
);
Route.put(
  "kategori-rencana-neraca/:kategori_id",
  "KeuanganController.putKategoriNeraca"
);
Route.delete(
  "kategori-rencana-neraca/:kategori_id",
  "KeuanganController.deleteKategoriNeraca"
);

// Laporan neraca
Route.get(
  "rencana-laba/:perencanaan_id",
  "KeuanganController.getRencanaLabaRugi"
);
Route.post("rencana-laba", "KeuanganController.postLabaRugi");
Route.put("rencana-laba/:labarugi_id", "KeuanganController.putLabaRugi");
Route.delete("rencana-laba/:labarugi_id", "KeuanganController.deleteLabaRugi");
Route.post(
  "kategori-rencana-laba/:perencanaan_id",
  "KeuanganController.postKategoriLabaRugi"
);
Route.put(
  "kategori-rencana-laba/:kategori_id",
  "KeuanganController.putKategoriLabaRugi"
);
Route.delete(
  "kategori-rencana-laba/:kategori_id",
  "KeuanganController.deleteKategoriLabaRugi"
);
Route.post(
  "rumus-rencana-laba/:perencanaan_id",
  "KeuanganController.postRumusLabaRugi"
);
Route.put(
  "rumus-rencana-laba/:rumus_id",
  "KeuanganController.putRumusLabaRugi"
);
Route.delete(
  "rumus-rencana-laba/:rumus_id",
  "KeuanganController.deleteRumusLabaRugi"
);

// Laporan Arus
Route.get("rencana-arus/:perencanaan_id", "KeuanganController.getArusKas");
Route.get(
  "rencana-arus-laporan/:perencanaan_id",
  "KeuanganController.getRencanaArusKasLaporan"
);
Route.post("rencana-arus", "KeuanganController.postArusKas");
Route.put("rencana-arus/:aktivitas_id", "KeuanganController.putArusKas");
Route.delete("rencana-arus/:aktivitas_id", "KeuanganController.deleteArusKas");
Route.post(
  "kategori-rencana-arus/:perencanaan_id",
  "KeuanganController.postKategoriArusKas"
);
Route.put(
  "kategori-rencana-arus/:kategori_id",
  "KeuanganController.putKategoriArusKas"
);
Route.delete(
  "kategori-rencana-arus/:kategori_id",
  "KeuanganController.deleteKategoriArusKas"
);
Route.post(
  "rumus-rencana-arus/:perencanaan_id",
  "KeuanganController.postRumusLabaRugi"
);
Route.put(
  "rumus-rencana-arus/:rumus_id",
  "KeuanganController.putRumusLabaRugi"
);
Route.delete(
  "rumus-rencana-arus/:rumus_id",
  "KeuanganController.deleteRumusLabaRugi"
);

Route.post(
  "/rencana-tipe-akun/:perencanaan_id",
  "KeuanganController.postKategoriTipeAkun"
);
Route.put(
  "/rencana-tipe-akun/:kategori_id",
  "KeuanganController.putKategoriTipeAkun"
);
Route.delete(
  "/rencana-tipe-akun/:kategori_id",
  "KeuanganController.deleteKategoriTipeAkun"
);

Route.post(
  "/rencana-rumus-kenaikan/:perencanaan_id",
  "KeuanganController.postRumusArusKas"
);
Route.post(
  "/rencana-rumus-kas-awal/:perencanaan_id",
  "KeuanganController.postRumusSaldoKasAwal"
);
Route.post(
  "/rencana-rumus-kas-akhir/:perencanaan_id",
  "KeuanganController.postRumusSaldoKasAkhir"
);
Route.put(
  "/rencana-rumus-kenaikan/:rumus_id",
  "KeuanganController.putRumusArusKas"
);
Route.put(
  "/rencana-rumus-kas-awal/:rumus_id",
  "KeuanganController.putRumusSaldoKasAwal"
);
Route.put(
  "/rencana-rumus-kas-akhir/:rumus_id",
  "KeuanganController.putRumusSaldoKasAkhir"
);

// keuangan sekolah
Route.get("/keuangan-sekolah", "SecondController.getAkunKeuangan");
Route.put("/keuangan-sekolah", "SecondController.putAkunKeuangan");
Route.get(
  "/rencana-keuangan-sekolah1/:perencanaan_id",
  "SecondController.getRencanaKeuangan"
);

// Akun Keuangan sekolah
Route.post("/akun-sekolah", "SecondController.postKeuAkun");
Route.put("/akun-sekolah/:keu_akun_id", "SecondController.putKeuAkun");
Route.delete("/akun-sekolah/:keu_akun_id", "SecondController.deleteKeuAkun");

// analisis keuangan
Route.get("/analisis-keuangan", "KeuanganController.getAnalisisKeuangan");
Route.post("/analisis-keuangan", "KeuanganController.postKategoriAnalisis");
Route.put(
  "/analisis-keuangan/:analisis_id",
  "KeuanganController.putKategoriAnalisis"
);
Route.delete(
  "/analisis-keuangan/:analisis_id",
  "KeuanganController.deleteKategoriAnalisis"
);

// Histori keuangan
Route.get("/histori-keuangan", "KeuanganController.getHistori");
// Route.post("/histori-keuangan", "KeuanganController.postKategoriAnalisis")
// Route.put("/histori-keuangan/:analisis_id", "KeuanganController.putKategoriAnalisis")
// Route.delete("/histori-keuangan/:analisis_id", "KeuanganController.deleteKategoriAnalisis")

// no rekening
Route.get("/rek-sekolah", "MainController.getRekSekolah");
Route.post("/rek-sekolah", "MainController.postRekSekolah");
Route.put("/rek-sekolah/:rek_sekolah_id", "MainController.putRekSekolah");
Route.delete("/rek-sekolah/:rek_sekolah_id", "MainController.deleteRekSekolah");
Route.post("/rek-sekolah/download", "MainController.downloadRekening");

// tunggakan
Route.get("/tunggakan", "SecondController.getTunggakan");
Route.post("/download/tunggakan", "SecondController.downloadTunggakan");

// pembayaran
Route.get("/pembayaran", "MainController.getPembayaran");
Route.get("/pembayaran/:pembayaran_id", "MainController.detailPembayaran");
Route.post("/pembayaran", "MainController.postPembayaran");
Route.put("/pembayaran/:pembayaran_id", "MainController.putPembayaran");
Route.delete("/pembayaran/:pembayaran_id", "MainController.deletePembayaran");
Route.post("/pembayaran/importspp", "MainController.importSPP");
Route.post(
  "/pembayaran/:pembayaran_id/downloadspp",
  "MainController.downloadSPP"
);
Route.put("refresh-pembayaran-siswa", "MainController.refreshPembayaranSiswa");

// pembayaran siswa
Route.get("/pembayaran-siswa", "MainController.getPembayaranSiswa");
Route.get(
  "/pembayaran-siswa/:pembayaran_siswa_id",
  "MainController.detailPembayaranSiswa"
);
Route.delete(
  "/pembayaran-siswa/:pembayaran_siswa_id",
  "MainController.deletePembayaranSiswa"
);

// riwayat pembayaran siswa
Route.post(
  "/riwayat-pembayaran-siswa",
  "MainController.postRiwayatPembayaranSiswa"
);
Route.post(
  "/import/pembayaran-siswa/:pembayaran_id",
  "MainController.importLunasPembayaran"
);
Route.post(
  "/download/pembayaran-siswa/:tk_pembayaran_rombel_id",
  "MainController.downloadLunasPembayaran"
);
Route.put(
  "/riwayat-pembayaran-siswa/:riwayat_pembayaran_siswa_id",
  "MainController.putRiwayatPembayaranSiswa"
);
Route.delete(
  "/riwayat-pembayaran-siswa/:riwayat_pembayaran_siswa_id",
  "MainController.deleteRiwayatPembayaranSiswa"
);

// pembayaran kategori
Route.post("/pembayaran-kategori", "MainController.postPembayaranKategori");
Route.delete(
  "/pembayaran-kategori/:pembayaran_kategori_id",
  "MainController.deletePembayaranKategori"
);

// Neraca
Route.get("/neraca-keuangan", "SecondController.getNeraca");
Route.post("/kategori-neraca", "SecondController.postKategoriNeraca");
Route.put(
  "/kategori-neraca/:kategori_id",
  "SecondController.putKategoriNeraca"
);
Route.delete(
  "/kategori-neraca/:kategori_id",
  "SecondController.deleteKategoriNeraca"
);
Route.post("/akun-neraca", "SecondController.postNeraca");
Route.put("/akun-neraca/:neraca_id", "SecondController.putNeraca");
Route.delete("/akun-neraca/:neraca_id", "SecondController.deleteNeraca");

// Laba Rugi
Route.get("/laba-rugi", "SecondController.getLabaRugi");
Route.post("/kategori-laba", "SecondController.postKategoriLabaRugi");
Route.put(
  "/kategori-laba/:kategori_id",
  "SecondController.putKategoriLabaRugi"
);
Route.delete(
  "/kategori-laba/:kategori_id",
  "SecondController.deleteKategoriLabaRugi"
);
Route.post("/rumus-laba", "SecondController.postRumusLabaRugi");
Route.put("/rumus-laba/:rumus_id", "SecondController.putRumusLabaRugi");
Route.delete("/rumus-laba/:rumus_id", "SecondController.deleteRumusLabaRugi");
Route.post("/akun-laba", "SecondController.postLabaRugi");
Route.put("/akun-laba/:labarugi_id", "SecondController.putLabaRugi");
Route.delete("/akun-laba/:labarugi_id", "SecondController.deleteLabaRugi");

// Arus Kas
Route.get("/arus-keuangan", "SecondController.getArusKas");
Route.get("/arus-keuangan-laporan", "SecondController.getArusKasLaporan");
Route.post("/kategori-arus", "SecondController.postKategoriArusKas");
Route.put("/kategori-arus/:kategori_id", "SecondController.putKategoriArusKas");
Route.delete(
  "/kategori-arus/:kategori_id",
  "SecondController.deleteKategoriArusKas"
);
Route.post("/aktivitas-arus", "SecondController.postArusKas");
Route.put("/aktivitas-arus/:aktivitas_id", "SecondController.putArusKas");
Route.delete("/aktivitas-arus/:aktivitas_id", "SecondController.deleteArusKas");
Route.post("/rumus-kenaikan", "SecondController.postRumusArusKas");
Route.post("/rumus-kas-awal", "SecondController.postRumusSaldoKasAwal");
Route.post("/rumus-kas-akhir", "SecondController.postRumusSaldoKasAkhir");
Route.put("/rumus-kenaikan/:rumus_id", "SecondController.putRumusArusKas");
Route.put("/rumus-kas-awal/:rumus_id", "SecondController.putRumusSaldoKasAwal");
Route.put(
  "/rumus-kas-akhir/:rumus_id",
  "SecondController.putRumusSaldoKasAkhir"
);

// Tipe Akun keuangan
Route.post("/tipe-akun", "SecondController.postKategoriTipeAkun");
Route.put("/tipe-akun/:kategori_id", "SecondController.putKategoriTipeAkun");
Route.delete(
  "/tipe-akun/:kategori_id",
  "SecondController.deleteKategoriTipeAkun"
);

// materi kesimpulan
Route.post("/materi-kesimpulan", "MainController.postMateriKesimpulan");
Route.put(
  "/materi-kesimpulan/:materi_kesimpulan_id",
  "MainController.putMateriKesimpulan"
);

// bab
Route.get("/bab/:bab_id", "MainController.detailBab");
Route.post("/bab", "MainController.postBab");
Route.put("/bab/:bab_id", "MainController.putBab");
Route.delete("/bab/:bab_id", "MainController.deleteBab");

// prestasi
Route.get("/prestasi", "MainController.getPrestasi");
Route.get("/prestasi1", "MainController.getPrestasi1");
Route.get("/prestasi1/:prestasi_id", "MainController.detailPrestasi");
Route.post("/prestasi", "MainController.postPrestasi");
Route.put("/prestasi/:prestasi_id", "MainController.putPrestasi");
Route.delete("/prestasi/:prestasi_id", "MainController.deletePrestasi");

// mutasi
Route.get("/mutasi", "MainController.getMutasi");
Route.post("/mutasi", "MainController.postMutasiV1");
Route.put("/mutasi/:mutasi_id", "MainController.putMutasiV1");
Route.delete("/mutasi/:mutasi_id", "MainController.deleteMutasi");

// Inventaris
Route.get("/inventaris", "KeuanganController.getBarang");
Route.get("/inventaris-aktif", "KeuanganController.getTransaksiBarang");

// mutasi v2
Route.get("/v2/mutasi", "SecondController.getTransaksi");
Route.post("/v2/mutasi", "SecondController.postTransaksi");
Route.put("/v2/mutasi/:transaksi_id", "SecondController.putTransaksi");
Route.delete("/v2/mutasi/:transaksi_id", "SecondController.deleteTransaksi");
Route.post("/download/neraca", "SecondController.downloadNeraca");
Route.post("/download/jurnal", "SecondController.downloadJurnal");
Route.post(
  "/download/jurnal/:perencanaan_id",
  "KeuanganController.downloadJurnal"
);
Route.post("/download/laba-rugi", "SecondController.downloadLabaRugi");
Route.post("/download/arus-kas", "SecondController.downloadArusKas");

// topik
Route.get("/topik/:topik_id", "MainController.detailTopik");
Route.post("/topik", "MainController.postTopik");
Route.put("/topik/:topik_id", "MainController.putTopik");
Route.delete("/topik/:topik_id", "MainController.deleteTopik");

// tugas
Route.get("/tugas", "MainController.getTugas");
Route.post("/tugas", "MainController.postTugas");
Route.put("/tugas/:tugas_id", "MainController.putTugas");
Route.delete("/tugas/:tugas_id", "MainController.deleteTugas");

// ujian
Route.get("/ujian", "MainController.getUjian");
Route.get("/ujian/:ujian_id", "MainController.detailUjian");
Route.post("/ujian", "MainController.postUjian");
Route.put("/ujian/:ujian_id", "MainController.putUjian");
Route.delete("/ujian/:ujian_id", "MainController.deleteUjian");

// peserta ujian
Route.get(
  "/peserta-ujian/:peserta_ujian_id",
  "MainController.detailPesertaUjian"
);
Route.post("/peserta-ujian", "MainController.postPesertaUjian");
Route.put("/peserta-ujian/:peserta_ujian_id", "MainController.putPesertaUjian");
Route.put("/peserta-ujian-2/:peserta_ujian_id", "UjianController.putPesertaUjian");
Route.put(
  "/reset-peserta-ujian/:peserta_ujian_id",
  "MainController.resetPesertaUjian"
);
Route.put("/update-nilai/:peserta_ujian_id", "MainController.updateNilai");

// jawaban siswa
Route.put(
  "/jawaban-ujian-siswa/:jawaban_ujian_siswa_id",
  "MainController.putJawabanUjianSiswa"
);

// jadwal ujian
Route.get("/jadwal-ujian-ss", "MainController.getJadwalUjianSS");
Route.get("/jadwal-ujian", "MainController.getJadwalUjian");
Route.get("/jadwal-ujian/:jadwal_ujian_id", "MainController.detailJadwalUjian");
Route.post(
  "/jadwal-ujian/download-hasil",
  "MainController.downloadJadwalUjian"
);
Route.post(
  "/jadwal-ujian/update-nilai",
  "MainController.updateNilaiJadwalUjian"
);
Route.post("/jadwal-ujian", "MainController.postJadwalUjian");
Route.put("/jadwal-ujian/:jadwal_ujian_id", "MainController.putJadwalUjian");
Route.delete(
  "/jadwal-ujian/:jadwal_ujian_id",
  "MainController.deleteJadwalUjian"
);

// soal ujian
Route.get("/soal-ujian", "MainController.getSoalUjian");
Route.get("/soal-ujian/:soal_ujian_id", "MainController.detailSoalUjian");
Route.post("/soal-ujian", "MainController.postSoalUjian");
Route.post("/soal-ujian/import", "MainController.importSoalUjian");
Route.put("/soal-ujian/:soal_ujian_id", "MainController.putSoalUjian");
Route.delete("/soal-ujian/:soal_ujian_id", "MainController.deleteSoalUjian");

// soal-kuis
Route.get("/soal-kuis/:soal_kuis_id", "MainController.detailSoalKuis");
Route.post("/soal-kuis", "MainController.postSoalKuis");
Route.put("/soal-kuis/:soal_kuis_id", "MainController.putSoalKuis");
Route.delete("/soal-kuis/:soal_kuis_id", "MainController.deleteSoalKuis");

// timeline
Route.get("/timeline", "MainController.getTimeline");
Route.get("/v2/timeline", "SecondController.getTimelineBaru");
Route.get("/timeline/:timeline_id", "MainController.detailTimeline");
Route.post("/timeline", "MainController.postTimeline");
Route.put("/timeline/:timeline_id", "MainController.putTimeline");
Route.delete("/timeline/:timeline_id", "MainController.deleteTimeline");
Route.post("/timeline/download-absen", "MainController.downloadTimelineAbsen");
Route.post(
  "/timeline/download-absen/:pertemuan_id",
  "DinasController.downloadTimelineAbsen"
);

// m timeline komen
Route.post("/timeline-komen", "MainController.postTimelineKomen");
Route.delete(
  "/timeline-komen/:timeline_komen_id",
  "MainController.deleteTimelineKomen"
);

// tk timeline komen
Route.post("/tk-timeline-komen", "MainController.postTkTimelineKomen");
Route.delete(
  "/tk-timeline-komen/:timeline_komen_id",
  "MainController.deleteTkTimelineKomen"
);

// informasi sekolah
Route.get("/informasi-sekolah", "MainController.getInformasiSekolah");
Route.put("/informasi-sekolah", "MainController.putInformasiSekolah");

// informasi jurusan
Route.get("/informasi-jurusan", "MainController.getInformasiJurusan");
Route.put("/informasi-jurusan", "MainController.putInformasiJurusan");

// guru jurusan
Route.post("/guru-jurusan", "MainController.postGuruJurusan");
Route.put("/guru-jurusan/:guru_jurusan_id", "MainController.putGuruJurusan");
Route.delete(
  "/guru-jurusan/:guru_jurusan_id",
  "MainController.deleteGuruJurusan"
);

// sarpras
Route.get("/sarpras", "MainController.getSarpras");
Route.get("/sarpras/:sarpras_id", "MainController.detailSarpras");
Route.post("/sarpras", "MainController.postSarpras");
Route.put("/sarpras/:sarpras_id", "MainController.putSarpras");
Route.delete("/sarpras/:sarpras_id", "MainController.deleteSarpras");

// kegiatan
Route.get("/kegiatan", "MainController.getKegiatan");
Route.post("/kegiatan", "MainController.postKegiatan");
Route.put("/kegiatan/:kegiatan_id", "MainController.putKegiatan");
Route.delete("/kegiatan/:kegiatan_id", "MainController.deleteKegiatan");

// pendaftar-ppdb
Route.get(
  "/pendaftar-ppdb/:pendaftar_ppdb_id",
  "MainController.detailPendaftarPPDB"
);
Route.post("/pendaftar-ppdb", "MainController.postPendaftarPPDB");
Route.put(
  "/pendaftar-ppdb/:pendaftar_ppdb_id",
  "MainController.putPendaftarPPDB"
);
Route.put(
  "/pendaftar-ppdb/:pendaftar_ppdb_id/konfirmasi",
  "MainController.konfirmasiPendaftarPPDB"
);
Route.delete(
  "/pendaftar-ppdb/:pendaftar_ppdb_id",
  "PPDBController.deletePendaftarPPDB"
);

// alur-ppdb
Route.get("/alur-ppdb", "MainController.getAlurPPDB");
Route.post("/alur-ppdb", "MainController.postAlurPPDB");
Route.put("/alur-ppdb/:alur_ppdb_id", "MainController.putAlurPPDB");
Route.delete("/alur-ppdb/:alur_ppdb_id", "MainController.deleteAlurPPDB");

// gelombang ppdb pendaftar

// kegiatan galeri
Route.get(
  "/kegiatan-galeri/:kegiatan_galeri_id",
  "MainController.detailKegiatanGaleri"
);
Route.post("/kegiatan-galeri", "MainController.postKegiatanGaleri");
Route.put(
  "/kegiatan-galeri/:kegiatan_galeri_id",
  "MainController.putKegiatanGaleri"
);
Route.delete(
  "/kegiatan-galeri/:kegiatan_galeri_id",
  "MainController.deleteKegiatanGaleri"
);

// absen
Route.get("/absen", "MainController.getAbsen");
Route.get("/absen/me", "MainController.meAbsen");
Route.post("/absen-fr", "MainController.postAbsenFr");
Route.post("/absen", "MainController.postAbsen");
Route.put("/absen/:absen_id", "MainController.putAbsen");
Route.post("/absen/download-absen", "MainController.downloadAbsen");
Route.post("/absen/rombel", "MainController.downloadAbsenRombel");
Route.post(
  "/absen/rombel/tanggal",
  "MainController.downloadAbsenRombelTanggal"
);
Route.get("/absen/:absen_id", "MainController.detailAbsen");

// test
Route.get("/test", "MainController.downloadPendaftarPPDB");

// perpus
Route.get("/perpus", "MainController.getPerpus");
Route.get("/perpus/:perpus_id", "MainController.detailPerpus");
Route.post("/perpus", "MainController.postPerpus");
Route.put("/perpus/:perpus_id", "MainController.putPerpus");
Route.delete("/perpus/:perpus_id", "MainController.deletePerpus");

// rpp
Route.get("/rpp", "MainController.getRpp");
Route.get("/rpp/:rpp_id", "MainController.detailRpp");
Route.post("/rpp", "MainController.postRpp");
Route.put("/rpp/:rpp_id", "MainController.putRpp");
Route.delete("/rpp/:rpp_id", "MainController.deleteRpp");
Route.get("/rpp/guru/:user_id", "MainController.detailRPPGuru");

// perpus aktivitas
Route.post("/perpus-aktivitas", "MainController.postPerpusAktivitas");

// perpus komen
Route.post("/perpus-komen", "MainController.postPerpusKomen");
Route.delete(
  "/perpus-komen/:perpus_komen_id",
  "MainController.deletePerpusKomen"
);

// kontak
Route.get("/kontak", "MainController.getKontak");
Route.put("/kontak", "MainController.putKontak");

// slider
Route.get("/slider", "MainController.getSlider");
Route.post("/slider", "MainController.postSlider");
Route.put("/slider/:slider_id", "MainController.putSlider");
Route.delete("/slider/:slider_id", "MainController.deleteSlider");

// status-proyek
Route.get("/status-proyek", "MainController.getStatusProyek");
Route.post("/status-proyek", "MainController.postStatusProyek");
Route.put("/status-proyek/:status_proyek_id", "MainController.putStatusProyek");
Route.delete(
  "/status-proyek/:status_proyek_id",
  "MainController.deleteStatusProyek"
);

// KOLABORASI SERVICE START
// ==== proyek
Route.get("/proyek", "MainController.getProyek");
Route.get("/search-proyek", "MainController.searchProyek");
Route.get("/proyek/:proyek_id", "MainController.detailProyek");
Route.get(
  "/proyek/:proyek_id/kategori-pekerjaan",
  "MainController.getKategoriPekerjaan"
);
Route.post("/proyek", "MainController.postProyek");
Route.put("/proyek/:proyek_id", "MainController.putProyek");
Route.delete("/proyek/:proyek_id", "MainController.deleteProyek");

// forumProyek
Route.post("/proyek/forum/:proyek_id", "MainController.postProyekForum");
Route.put(
  "/proyek/forum/update/:proyek_id/:proyekForum_id",
  "MainController.putProyekForum"
);
Route.delete(
  "/proyek/forum/delete/:proyek_id/:proyekForum_id",
  "MainController.deleteProyekForum"
);

// anggota-proyek
Route.get("/anggota-proyek", "MainController.getAnggotaProyek");
Route.post("/anggota-proyek", "MainController.postAnggotaProyek");
Route.put(
  "/anggota-proyek/:anggota_proyek_id",
  "MainController.putAnggotaProyek"
);
Route.delete(
  "/anggota-proyek/:anggota_proyek_id",
  "MainController.deleteAnggotaProyek"
);
// KOLABORASI SERVICE END

// pekerjaan-proyek
Route.post(
  "/pekerjaan-proyek/:kategori_id",
  "MainController.postPekerjaanProyek"
);
Route.put(
  "/pekerjaan-proyek/:pekerjaan_proyek_id",
  "MainController.putPekerjaanProyek"
);
Route.delete(
  "/pekerjaan-proyek/:pekerjaan_proyek_id",
  "MainController.deletePekerjaanProyek"
);

// kategori-pekerjaan
Route.get("/kategori-pekerjaan", "MainController.getKategoriPekerjaan");
Route.post("/kategori-pekerjaan", "MainController.postKategoriPekerjaan");
Route.put(
  "/kategori-pekerjaan/:kategori_pekerjaan_id",
  "MainController.putKategoriPekerjaan"
);
Route.delete(
  "/kategori-pekerjaan/:kategori_pekerjaan_id",
  "MainController.deleteKategoriPekerjaan"
);

// rekap-nilai
Route.get("/rekap/:materi_id", "MainController.detailRekap");
Route.get("/rekap-nilai/:rekaprombel_id", "MainController.getRekapNilai");
Route.post("/rekap/:materi_id", "MainController.postRekap");
Route.post(
  "/rekap/:materi_id/sikap/:m_user_id",
  "MainController.postRekapSikap"
);
Route.put("/rekap/:materi_id/:rekap_id", "MainController.putRekap");
Route.put(
  "/rekap-template/:template_id",
  "MainController.putTemplateDeskripsi"
);
Route.delete("/rekap/:materi_id/:rekap_id", "MainController.deleteRekap");
Route.get(
  "/rekap/:materi_id/rombel/:rekapnilai_id",
  "MainController.detailRekapRombel"
);
Route.get("/rekap/:materi_id/:rekap_id", "MainController.detailRekapNilai");
// Route.get(
//   "/rekap/:materi_id/:rekap_id/:rombel_id",
//   "MainController.detailRekapNilai"
// );
Route.post(
  "/rekap/:materi_id/:rekapnilai_id",
  "MainController.postRekapRombel"
);
Route.put(
  "/rekap/:materi_id/:rekapnilai_id/:rekaprombel_id",
  "MainController.putRekapRombel"
);
Route.delete(
  "/rekap/:materi_id/:rekapnilai_id/:rekaprombel_id",
  "MainController.deleteRekapRombel"
);
Route.put(
  "/rekap/:materi_id/:rekapnilai_id/ubah/:user_id",
  "MainController.putRekapNilai"
);

// GTK

Route.post("/gtk/import", "MainController.importGTK");
Route.post("/gtk/import-singkat", "MainController.importGTK2");

Route.post("/absen/rekapdownload", "MainController.downloadRekapAbsen");
Route.post(
  "/absen-siswa/rekapdownload",
  "MainController.downloadRekapAbsenSiswa"
);
Route.post(
  "/absen-siswa-tanggal/rekapdownload",
  "MainController.downloadRekapAbsenSiswa11"
);
Route.post(
  "/absen-siswa2/rekapdownload",
  "MainController.downloadRekapAbsenSiswa2"
);
Route.post(
  "/absen-siswa/rekapdownload/dinas",
  "DinasController.downloadRekapAbsenSiswaDinas"
);
Route.post(
  "/download/rekap/nilai-siswa",
  "DinasController.downloadRekapNilai"
);
Route.post(
  "/download/semua-rekap/nilai-siswa",
  "DinasController.downloadSemuaRekapNilai"
);
Route.post(
  "/download/jadwal-buku-kerja",
  "DinasController.downloadJadwalBukuKerja"
);
Route.post(
  "/download/jadwal-dinas",
  "DinasController.downloadJadwalDinas"
);

// Mutasi Service
Route.post("/mutasi/importmutasi", "MainController.importMutasi");
Route.post("/mutasi/download-mutasi", "MainController.downloadMutasi");
Route.post("/mutasi/download-rek-mutasi", "MainController.downloadRekMutasi");

// Rombel Service
Route.post("/rombel/import-rombel", "MainController.importRombel");
Route.post("/rombel/import-rombel-singkat", "MainController.importRombel2");
Route.post("/rombel/download-rombel", "MainController.downloadRombel");

// Alumni Service
Route.post("/alumni/import-alumni", "MainController.importAlumni");
Route.post("/alumni/download-alumni", "MainController.downloadAlumni");

Route.post(
  "/ujian/download-kartu-ujian/:ujian_id",
  "MainController.downloadKartuUjian"
);

Route.post(
  "/ujian/download-kartu-pg/:ujian_id",
  "MainController.downloadKartuPg"
);
Route.post(
  "/ujian/download-kartu-esai/:ujian_id",
  "MainController.downloadKartuEsai"
);
Route.post(
  "/ujian/download-kartu-kisi-kisi/:ujian_id",
  "MainController.downloadKisiKisi"
);
Route.post(
  "/ujian/download-kartu-naskah/:ujian_id",
  "MainController.downloadNaskah"
);
Route.post(
  "/ujian/download-kartu-rumusan/:ujian_id",
  "MainController.downloadKartuRumusan"
);
Route.post(
  "/ujian/download-kartu-template/:ujian_id",
  "MainController.downloadKartuTemplate"
);

Route.get("/daftar-sekolah", "MainController.daftarsekolah");
Route.get(
  "/daftar-sekolah-kolaborasi",
  "MainController.searchSekolahKolaborasi"
);

//ubah tipe data
Route.get("/ubahtipedata", "MainController.ubahtipedata");

//predikat service
Route.post("/predikat", "MainController.postPredikat");
Route.put("/predikat/:predikat_id", "MainController.putPredikat");
Route.delete("/predikat/:predikat_id", "MainController.deletePredikat");

//Rapor Service
Route.get(
  "/rombel/:mata_pelajaran_id/rapor-nilai/:user_id",
  "MainController.detailRombelRapor"
);
Route.get(
  "/rombel/:mata_pelajaran_id/rapor-keterampilan/:user_id",
  "MainController.detailRombelRaporKeterampilan"
);
Route.get(
  "/rapor/:rombel_id/siswa/:user_id",
  "MainController.detailRaporSiswa"
);

Route.post(
  "/rapor/ekskul/:ekskul_id/:user_id",
  "MainController.postRaporEkskul"
);
Route.put(
  "/rapor/ekskul/:rombel_id/:ekskul_id",
  "MainController.putRaporEkskul"
);
Route.post("/rapor/kelulusan/:user_id", "MainController.postKeteranganRapor");
Route.put("/rapor/kelulusan/:user_id", "MainController.putKeteranganRapor");
Route.delete(
  "/rapor/kelulusan/:user_id",
  "MainController.deleteKeteranganRapor"
);
Route.post("/rapor/pkl/:user_id", "MainController.postKeteranganPkl");
Route.put("/rapor/pkl/:pkl_id", "MainController.putKeteranganPkl");
Route.delete("/rapor/pkl/:pkl_id", "MainController.deleteKeteranganPkl");

//Buku Induk Service
Route.get("/buku-induk", "MainController.getBukuInduk");
Route.get("/buku-induk/:rombel_id", "MainController.detailBukuInduk");
Route.get(
  "/buku-induk/rapor/:rombel_id",
  "MainController.detailBukuIndukRapor"
);
Route.post(
  "/buku-induk/rapor/kategori/:rombel_id",
  "MainController.postKategoriMapel"
);
Route.put(
  "/buku-induk/rapor/kategori/:kategoriMapel_id",
  "MainController.putKategoriMapel"
);
Route.put("/buku-induk/rapor/kkm", "MainController.putMapelRaporKKM");
Route.put(
  "/buku-induk/rapor/kkmAll/:mapelRapor_id",
  "MainController.putMapelRaporKKMAll"
);
Route.delete(
  "/buku-induk/rapor/kategori/:kategoriMapel_id",
  "MainController.deleteKategoriMapel"
);
Route.put(
  "/buku-induk/rapor/mapel/:mapelRapor_id",
  "MainController.putMapelRapor"
);
Route.delete(
  "/buku-induk/rapor/mapel/:mapelRapor_id",
  "MainController.deleteMapelRapor"
);
Route.get(
  "/buku-induk/:rombel_id/:user_id",
  "MainController.detailBukuIndukSiswa"
);

Route.post(
  "/rombel-download/:jadwal_mengajar_id/download-analisis-nilai",
  "MainController.downloadAnalisisNilai"
);
Route.post(
  "/rombel-download/:jadwal_mengajar_id/download-performa-tugas",
  "MainController.downloadPerformaTugas"
);
Route.post("/download/experimen", "MainController.downloadExperimen");

//CDC Service
Route.get("/cdc/pekerjaan-saya", "MainController.getPekerjaanSaya");
Route.get("/cdc/cari-pekerjaan", "MainController.getCariPekerjaan");
Route.get("/cdc/cari-perusahaan", "MainController.getCariPerusahaan");
Route.get(
  "/cdc/pekerjaan-saya/:pekerjaan_id",
  "MainController.detailPekerjaanSaya"
);
Route.get(
  "/cdc/cari-pekerjaan/:pekerjaan_id",
  "MainController.detailPekerjaan"
);
Route.get(
  "/cdc/cari-perusahaan/:perusahaan_id",
  "MainController.detailPerusahaan"
);
Route.get("/cdc/sekolah/:sekolah_id", "MainController.detailSekolah");
Route.get("/cdc/acara", "MainController.getAcaraPerusahaan");
Route.get("/cdc/acara/:acara_id", "MainController.detailAcaraPerusahaan");
Route.post("/cdc/acara", "MainControler.postAcaraPerusahaan");
Route.put("/cdc/acara/:acara_id", "MainControler.putAcaraPerusahaan");
Route.delete("/cdc/acara/:acara_id", "MainControler.deleteAcaraPerusahaan");

// Perusahaan sekolah
Route.get("/perusahaan-sekolah", "CDCController.getPerusahaanSekolah");
Route.post("/perusahaan-sekolah", "CDCController.postPerusahaanSekolah");
Route.put("/perusahaan-sekolah/:perusahaan_id", "CDCController.putPerusahaanSekolah");
Route.delete(
  "/perusahaan-sekolah/:perusahaan_id", "CDCController.deletePerusahaanSekolah"
);
Route.put(
  "/perusahaan-sekolah/:perusahaan_id",
  "CDCController.putPerusahaanSekolah"
);
Route.put(
  "/penerimaan-perusahaan/:penerimaan_id", "CDCController.putPenerimaanPerusahaan"
);
Route.delete(
  "/penerimaan-perusahaan/:penerimaan_id", "CDCController.deletePenerimaanPerusahaan"
);
Route.get("/penerimaan-siswa/:penerimaan_id", "CDCController.getPenerimaanSiswa");
Route.post("/penerimaan-siswa/:penerimaan_id", "CDCController.postPenerimaanSiswa");
Route.put("/penerimaan-siswa/:siswa_id", "CDCController.putPenerimaanSiswa");
Route.delete(
  "/penerimaan-siswa/:siswa_id", "CDCController.deletePenerimaanSiswa"
);
// PKL Sekolah
Route.get(
  "/penerimaan-perusahaan/:perusahaan_id",
  "CDCController.getPenerimaanPerusahaan"
);
Route.get(
  "/penerimaan",
  "CDCController.getPenerimaanPkl"
);
Route.post("/penerimaan-perusahaan", "CDCController.postPenerimaanPerusahaan");

Route.post("/cdc/perusahaan", "CDCController.postPerusahaan");
Route.put("/cdc/perusahaan/:perusahaan_id", "MainControler.putPerusahaan");
Route.put(
  "/cdc/profil-perusahaan/:perusahaan_id",
  "MainControler.putProfilPerusahaan"
);
Route.put(
  "/cdc/budaya-perusahaan/:perusahaan_id",
  "MainControler.putBudayaPerusahaan"
);
Route.put(
  "/cdc/informasi-perusahaan/:perusahaan_id",
  "MainControler.putInformasiPerusahaan"
);
Route.put(
  "/cdc/tautan-perusahaan/:perusahaan_id",
  "MainControler.putTautanPerusahaan"
);

Route.delete(
  "/cdc/perusahaan/:perusahaan_id",
  "MainControler.deletePerusahaan"
);

//Surel Service
Route.get("/surel", "MainController.getSurel");
Route.get("/surel/:surel_id", "MainController.detailSurel");
Route.post("/surel", "MainController.postSurel");
Route.post("/surel-draf", "MainController.postSurelDraf");
Route.put("/surel/:surel_id", "MainController.putSurel");
Route.put("/surel-draf/:surel_id", "MainController.putSurelDraf");
Route.delete("/surel-tipe", "MainController.deleteSurelTipe");
Route.put("/surel-dibaca", "MainController.dibacaSurelTipe");
Route.post("/surel-komen/:surel_id", "MainController.postSurelKomen");
Route.put("/surel-arsip", "MainController.putSurelArsip");
Route.put("/surel-arsip/pin/:arsip_id", "MainController.putPinFolderArsip");
Route.post("/surel-arsip", "MainController.postFolderArsip");
Route.put("/surel-arsip/:arsip_id", "MainController.putFolderArsip");
Route.delete("/surel-arsip/:arsip_id", "MainController.deleteFolderArsip");
Route.get("/surel-arsip/:arsip_id", "MainController.detailArsipSurel");

// SARPRAS SERVICE
// barang Service
Route.get("/barang", "MainController.getBarang");
Route.get("/barang/:barang_id", "MainController.detailBarang");
Route.post("/barang", "MainController.postBarang");
Route.put("/barang/:barang_id", "MainController.putBarang");
Route.delete("/barang/:barang_id", "MainController.deleteBarang");
Route.post("/barang/import", "MainController.importBarang");
Route.post("/barang/download", "MainController.downloadBarang");

// lokasi Service
Route.get("/lokasi", "MainController.getLokasi");
Route.get("/lokasi/:lokasi_id", "MainController.detailLokasi");
Route.post("/lokasi", "MainController.postLokasi");
Route.put("/lokasi/:lokasi_id", "MainController.putLokasi");
Route.delete("/lokasi/:lokasi_id", "MainController.deleteLokasi");
Route.post("/lokasi/import", "MainController.importLokasi");
Route.post("/lokasi/download", "MainController.downloadLokasi");

// Tata Tertib Service
Route.get("/tatatertib", "MainController.getTataTertib");
// Kategori Pelanggaran
Route.get("/tatatertib/kategori", "MainController.getKategoriPelanggaran");
Route.post("/tatatertib/kategori", "MainController.postKategoriPelanggaran");
Route.put(
  "/tatatertib/kategori/:kategori_id",
  "MainController.putKategoriPelanggaran"
);
Route.delete(
  "/tatatertib/kategori/:kategori_id",
  "MainController.deleteKategoriPelanggaran"
);

//pelanggaran
Route.get(
  "/tatatertib/kategori/:kategori_id",
  "MainController.detailKategoriPelanggaran"
);
Route.post(
  "/tatatertib/pelanggaran/:kategori_id",
  "MainController.postPelanggaran"
);
Route.put(
  "/tatatertib/pelanggaran/:pelanggaran_id",
  "MainController.putPelanggaran"
);
Route.delete(
  "/tatatertib/pelanggaran/:pelanggaran_id",
  "MainController.deletePelanggaran"
);

// Penghargaan
Route.post("/tatatertib/penghargaan", "MainController.postPenghargaan");
Route.put(
  "/tatatertib/penghargaan/:penghargaan_id",
  "MainController.putPenghargaan"
);
Route.delete(
  "/tatatertib/penghargaan/:penghargaan_id",
  "MainController.deletePenghargaan"
);

//Sanksi Pelanggaran
Route.get("/tatatertib/sanksi", "MainController.getSanksiPelanggaran");
Route.post("/tatatertib/sanksi", "MainController.postSanksiPelanggaran");
Route.put(
  "/tatatertib/sanksi/:sanksi_id",
  "MainController.putSanksiPelanggaran"
);
Route.delete(
  "/tatatertib/sanksi/:sanksi_id",
  "MainController.deleteSanksiPelanggaran"
);

Route.post("/tatatertib/siswa/prestasi", "MainController.postPenghargaanSiswa");
Route.put(
  "/tatatertib/siswa/prestasi/:penghargaan_id",
  "MainController.putPenghargaanSiswa"
);
Route.delete(
  "/tatatertib/siswa/prestasi/:penghargaan_id",
  "MainController.deletePenghargaanSiswa"
);

//Data Siswa
Route.get("/tatatertib/rombel", "MainController.getTataTertibRombel");
Route.get(
  "/tatatertib/rombel/:rombel_id",
  "MainController.detailTataTertibRombel"
);
Route.get("/tatatertib/siswa/:user_id", "MainController.detailTataTertibSiswa");
Route.post("/tatatertib/siswa/:user_id", "MainController.postPelanggaranSiswa");
Route.put(
  "/tatatertib/siswa/pelanggaran/:pelanggaran_id",
  "MainController.putPelanggaranSiswa"
);
Route.delete(
  "/tatatertib/siswa/pelanggaran/:pelanggaran_id",
  "MainController.deletePelanggaranSiswa"
);

Route.post(
  "/tatatertib/siswa/sanksi/:user_id",
  "MainController.postSanksiSiswa"
);
Route.put(
  "/tatatertib/siswa/sanksi/:sanksi_id",
  "MainController.putSanksiSiswa"
);
Route.delete(
  "/tatatertib/siswa/sanksi/:sanksi_id",
  "MainController.deleteSanksiSiswa"
);

Route.post(
  "/tatatertib/siswa/bukti-sanksi/:user_id",
  "MainController.postBuktiSanksiSiswa"
);
Route.put(
  "/tatatertib/siswa/bukti-sanksi/:sanksi_id",
  "MainController.putBuktiSanksiSiswa"
);
Route.delete(
  "/tatatertib/siswa/bukti-sanksi/:sanksi_id",
  "MainController.deleteBuktiSanksiSiswa"
);

//Peraturan Service
Route.get("/tatatertib/peraturan", "MainController.getBabPeraturan");
Route.post("/tatatertib/peraturan", "MainController.postBabPeraturan");
Route.put("/tatatertib/peraturan/:bab_id", "MainController.putBabPeraturan");
Route.delete(
  "/tatatertib/peraturan/:bab_id",
  "MainController.deleteBabPeraturan"
);
Route.get("/tatatertib/peraturan/:bab_id", "MainController.detailBabPeraturan");
Route.post(
  "/tatatertib/peraturan/:bab_id",
  "MainController.postPasalPeraturan"
);
Route.put("/tatatertib/pasal/:pasal_id", "MainController.putPasalPeraturan");
Route.delete(
  "/tatatertib/pasal/:pasal_id",
  "MainController.deletePasalPeraturan"
);

// Buku Tamu Service
Route.get("/buku-tamu", "MainController.getBukuTamu");
Route.get("/buku-tamu/:buku_id", "MainController.detailBukuTamu");
Route.get("/post-buku-tamu", "MainController.getPostBukuTamu");
Route.post("/buku-tamu", "MainController.postBukuTamu");
Route.post("/buku-tamu/download", "MainController.downloadBukuTamu");

// Surat Masuk dan Keluar
Route.get("/surat-baru", "MainController.getSurat");
Route.post("/surat", "MainController.postSurat");
Route.put("/surat/:surat_id", "MainController.putSurat");
Route.delete("/surat/:surat_id", "MainController.deleteSurat");
// Disposisi
Route.get("/disposisi/:disposisi_id", "MainController.detailDisposisi");
Route.post("/disposisi", "MainController.postDisposisi");
Route.post(
  "/pelaporan-disposisi/:disposisi_id",
  "MainController.postPelaporanDisposisi"
);
Route.put("/disposisi/:disposisi_id", "MainController.putDisposisi");
Route.delete("/disposisi/:disposisi_id", "MainController.deleteDisposisi");

// changeBase64ToAscii
Route.post("/ascii", "MainController.changeBase64ToAscii");

Route.post("uji-coba/cron", "MainController.postCron");
Route.post("/download/monev", "MainController.downloadMonev1");
Route.post("/import/GPDS", "MainController.importGPDS");
Route.post("/gpds-username", "MainController.gpdsUsername");

Route.post(
  "/download/rekap-rombel/:rekapRombel_id",
  "MainController.downloadRekapRombel"
);
Route.post(
  "/import/rekap-rombel/:rekapRombel_id",
  "MainController.importNilaiRekapRombel"
);
Route.post("/import/GPDS", "MainController.importGPDS");

//Konsultasi BK services
Route.get("/konsultasi", "MainController.getKonsultasi");
Route.get("/konsultasi/:konsultasi_id", "MainController.detailKonsultasi");
Route.post("/konsultasi", "MainController.postKonsultasi");
Route.post(
  "/konsultasi/:konsultasi_id/jadwal",
  "MainController.postJadwalKonsultasi"
);
Route.post(
  "/konsultasi/:konsultasi_id/selesai",
  "MainController.postSelesaiKonsultasi"
);
Route.post("/konsultasi/download", "MainController.downloadKonsultasi");

//kalender
Route.get("/kalender", "MainController.getKalender");
Route.post("/kalender/label", "MainController.postLabelKalender");
Route.put("/kalender/label/:label_id", "MainController.putLabelKalender");
Route.delete("/kalender/label/:label_id", "MainController.deleteLabelKalender");

Route.get(
  "/kalender/kegiatan/:kegiatan_id",
  "MainController.detailKalenderKegiatan"
);
Route.post("/kalender/kegiatan", "MainController.postKegiatanKalender");
Route.put(
  "/kalender/kegiatan/:kegiatan_id",
  "MainController.putKegiatanKalender"
);
Route.delete(
  "/kalender/kegiatan/:kegiatan_id",
  "MainController.deleteKegiatanKalender"
);

Route.get(
  "/kalender/pendidikan/:pendidikan_id",
  "MainController.detailKalenderPendidikan"
);
Route.post("/kalender/pendidikan", "MainController.postKalenderPendidikan");
Route.put(
  "/kalender/pendidikan/:kalender_id",
  "MainController.putKalenderPendidikan"
);
Route.delete(
  "/kalender/pendidikan/:kalender_id",
  "MainController.deleteKalenderPendidikan"
);

Route.get("/cek-nomor-whatsapp", "MainController.getCekNomorWhatsapp");
Route.get(
  "/cek-nomor-whatsapp/:user_id",
  "MainController.detailCekNomorWhatsapp"
);
Route.post(
  "/cek-nomor-whatsapp/:user_id",
  "MainController.postEmailCekNomorWhatsapp"
);

//dashboard
Route.get("/dashboard/tugas", "MainController.getDashboardTugas");
Route.get("/dashboard/absen", "MainController.getDashboardAbsen");

Route.post("/dummyGPDS/GPDS", "MainController.dummyGPDS");
Route.post("/dummyGPDS/GPDS2", "MainController.dummyGPDS2");

// Camera
Route.get("/cameras", "MainController.getCamera");
Route.post("/cameras", "MainController.postCamera");
Route.put("/cameras/:camera_id", "MainController.putCamera");
Route.delete("/cameras/:camera_id", "MainController.deleteCamera");

// Log Camera
Route.post("/log-camera", "MainController.postLogCamera");

// Tamu tertangkap kamera
Route.get("/tamu", "MainController.getTamu");

// Verifikasi akun
Route.post("/aktivasi", "MainController.aktivasi");
Route.post("/aktivasi-wa", "MainController.aktivasiWa");
Route.post("/resend", "MainController.resendAktivasi");

Route.post("/danger/hack", "MainController.putRekapNilaiAll");
Route.post("/danger/hack/ujian", "MainController.hackJadwalUjian");
Route.post("/danger/hack/ujian-nilai", "MainController.hackUjianSiswaNilai");
Route.post(
  "/danger/hack/ujian-nilai-keterampilan",
  "MainController.hackUjianSiswaNilaiKeterampilan"
);

Route.post(
  "/download/rekap-sikap/:rombel_id/:mata_pelajaran_id",
  "MainController.downloadRekapRombelSikap"
);
Route.post(
  "/import/rekap-sikap/:rombel_id/:mata_pelajaran_id",
  "MainController.importSikapRekapRombel"
);
Route.post(
  "/download/ledger-nilai/:rombel_id",
  "MainController.downloadLedgerNilai2"
);
Route.post(
  "/download/ledger-nilai-yadika/:rombel_id",
  "MainController.downloadLedgerNilaiYadika"
);

Route.post("/naik-kelas-jam", "MainController.naikTAJam");

Route.post("/naik-kelas-mapel", "MainController.naikTAMapel");

Route.post("/naik-kelas-rombel", "MainController.naikTARombel");
Route.post("/naik-kelas-jadwal", "MainController.naikTAJadwal");

Route.post("/download/lap-tunggakan", "MainController.downloadLapTunggakan");
Route.post("/download/lap-kehadiran", "MainController.downloadLapKehadiran");
Route.post("/download/lap-inventaris", "MainController.downloadLapInventaris");
Route.post("/download/lap-psg", "MainController.downloadLapPsg");
Route.post(
  "/download/analisis-materi/:topik_id",
  "MainController.downloadAnalisisMateri"
);
Route.post(
  "/download/catatan-rapor/:rombel_id",
  "MainController.downloadCatatanKelulusan"
);
Route.post(
  "/import/catatan-rapor/",
  "MainController.importKeteranganKelulusan"
);
Route.post("/import/absensi-siswa/", "MainController.importAbsensiSiswa");

Route.post("/uts-to-uas/sikap-siswa", "SecondController.postRaporSikapUAS");

// Ortu anak
Route.post("/absen-anak", "MainController.getAbsensiAnak");
Route.post("/tugas-anak", "MainController.getTugasAnak");
Route.post("/ujian-anak", "MainController.getUjianAnak");

// Jalur PPDB
Route.get("/jalur-ppdb", "PPDBController.getJalur");
Route.post("/jalur-ppdb", "PPDBController.postJalur");
Route.put("/jalur-ppdb/:id", "PPDBController.putJalur");
Route.delete("/jalur-ppdb/:id", "PPDBController.deleteJalur");
Route.get("/jalur-ppdb/:id", "PPDBController.detailJalur");

// Jadwal Ujian PPDB
Route.get("/jadwal-ppdb", "PPDBController.getJadwalPPDB");
Route.post("/jadwal-ppdb", "PPDBController.postJadwalPPDB");
Route.put("/jadwal-ppdb/:id", "PPDBController.putJadwalPPDB");
Route.delete("/jadwal-ppdb/:id", "PPDBController.deleteJadwalPPDB");
Route.get(
  "/jadwal-ppdb/:jadwal_ppdb_id",
  "PPDBController.detailJadwalUjianPPDB"
);
Route.get("/jadwal-ppdb-ss/:id", "PPDBController.detailJadwalPPDBSS");
Route.post(
  "/download-nilai-jadwal-ppdb-ss/:id",
  "PPDBController.downloadJadwalPPDBSS"
);
Route.post(
  "/download-nilai-jadwal-ppdb/:jadwal_ppdb_id",
  "PPDBController.downloadNilaiUjianPPDB"
);
Route.post(
  "/import-jadwal-ppdb/:jadwal_ppdb_id",
  "PPDBController.importNilaiUjianPPDB"
);

// Informasi Jalur PPDB
Route.post("/informasi-jalur-ppdb", "PPDBController.postInformasiJalur");
Route.put("/informasi-jalur-ppdb/:id", "PPDBController.putInformasiJalur");
Route.delete(
  "/informasi-jalur-ppdb/:id",
  "PPDBController.deleteInformasiJalur"
);

// Informasi Gelombang
Route.post("/informasi-gelombang", "PPDBController.postInformasiGelombang");
Route.put("/informasi-gelombang/:id", "PPDBController.putInformasiGelombang");
Route.delete(
  "/informasi-gelombang/:id",
  "PPDBController.deleteInformasiGelombang"
);

// Informasi Gelombang
Route.post("/jadwal-ppdb", "PPDBController.postJadwalPPDB");
Route.put("/jadwal-ppdb/:id", "PPDBController.putJadwalPPDB");
Route.delete("/jadwal-ppdb/:id", "PPDBController.deleteJadwalPPDB");

// gelombang-ppdb
Route.get("/gelombang-ppdb", "PPDBController.getGelombangPPDB");
Route.get(
  "/gelombang-ppdb/:gelombang_ppdb_id",
  "PPDBController.detailGelombangPPDB"
);
Route.post("/gelombang-ppdb", "PPDBController.postGelombangPPDB");
Route.post(
  "/download-hasil-ujian/:jadwal_ujian_id",
  "SecondController.downloadHasilUjian"
);
Route.put(
  "/gelombang-ppdb/:gelombang_ppdb_id",
  "PPDBController.putGelombangPPDB"
);
Route.post(
  "/download-gelombang-ppdb/:gelombang_ppdb_id",
  "PPDBController.downloadGelombangPpdb"
);
Route.delete(
  "/gelombang-ppdb/:gelombang_ppdb_id",
  "PPDBController.deleteGelombangPPDB"
);

// Surat Keputusan
Route.get("/guru-surat-keputusan", "SecondController.getGuru");
Route.get("/surat-keputusan", "SecondController.getSuratKeputusan");
Route.post("/surat-keputusan", "SecondController.postSuratKeputusan");
Route.put("/surat-keputusan/:surat_id", "SecondController.putSuratKeputusan");
Route.delete(
  "/surat-keputusan/:surat_id",
  "SecondController.deleteSuratKeputusan"
);

//Buku Kerja  Service
Route.get("/buku-kerja-guru", "DinasController.getBukuKerjaGuru");
Route.get("/buku-kerja-detail", "DinasController.getBukuKerja");
Route.get("/buku-kerja-kehadiran", "DinasController.getDaftarKehadiran");
Route.get(
  "/buku-kerja-nilai/:jadwal_mengajar_id",
  "DinasController.getDaftarNilai"
);
Route.get(
  "/buku-kerja-nilai/:jadwal_mengajar_id/user/:user_id",
  "DinasController.detailSiswaRekap"
);
Route.post("/buku-kerja", "DinasController.postBukuKerja");
Route.put("/buku-kerja/:rpp_id", "DinasController.putBukuKerja");
Route.delete("/buku-kerja/:rpp_id", "DinasController.deleteBukuKerja");
Route.post("/buku-kerja-soal", "DinasController.postBukuKerjaSoal");
Route.put("/buku-kerja-soal/:rpp_id", "DinasController.putBukuKerjaSoal");
Route.delete("/buku-kerja-soal/:rpp_id", "DinasController.deleteBukuKerjaSoal");

Route.get("/otomatis-akun-keuangan", "SecondController.otomatisAkun");
Route.get("/otomatis-neraca-keuangan", "SecondController.otomatisNeraca");

Route.post("/download/aset-aktif", "RombelController.downloadJurnalAsetAktif");
Route.post("/download/jadwal", "RombelController.downloadJadwalMengajarTingkat");
Route.post("/download/import-jadwal", "RombelController.downloadImportJadwalMengajarTingkat");

Route.post(
  "/import/jadwal-mengajar",
  "RombelController.importJadwalMengajar"
);
// Dinas
Route.get("/dashboard/dinas", "DinasController.getDashboard");

Route.get("/dinas/buku-kerja", "DinasController.getBukuKerjaDinas");
Route.get("/data-warga-sekolah", "DinasController.getData");

// Pengawas
Route.get("/dashboard/pengawas", "PengawasController.getDashboardPengawas");

Route.get("/ip", "MainController.ip");
// wildcard (DROP AT BOTTOM OF THE FILE)
Route.any("*", "MainController.notFoundPage");

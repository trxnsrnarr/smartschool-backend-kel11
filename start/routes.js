"use strict";

const { route } = require("@adonisjs/framework/src/Route/Manager");

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

// utils
Route.get("/lokasi-saat-ini", "MainController.getLokasiSaatIni");
Route.post("/single-upload", "MainController.singleUpload");
Route.post("/rich-editor-upload", "MainController.richEditorUpload");
Route.get("/sekolah/me", "MainController.meSekolah");

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

// user
Route.get("/user", "MainController.getUser");
Route.get("/user/:user_id", "MainController.detailUser");

// sekolah
Route.get("/sekolah", "MainController.getSekolah");

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
Route.post("/rombel/:rombel_id/:user_id", "MainController.postSikapRombel");

// anggota rombel
Route.post("/anggota-rombel", "MainController.postAnggotaRombel");
Route.post("/anggota-rombel/import", "MainController.importAnggotaRombel");

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
Route.get("/jadwal-mengajar", "MainController.getJadwalMengajar");
Route.put(
  "/jadwal-mengajar/:jadwal_mengajar_id",
  "MainController.putJadwalMengajar"
);

// post
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

// no rekening
Route.get("/rek-sekolah", "MainController.getRekSekolah");
Route.put("/rek-sekolah", "MainController.putRekSekolah");

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

// pembayaran siswa
Route.get("/pembayaran-siswa", "MainController.getPembayaranSiswa");
Route.get(
  "/pembayaran-siswa/:pembayaran_siswa_id",
  "MainController.detailPembayaranSiswa"
);

// riwayat pembayaran siswa
Route.post(
  "/riwayat-pembayaran-siswa",
  "MainController.postRiwayatPembayaranSiswa"
);

// pembayaran kategori
Route.post("/pembayaran-kategori", "MainController.postPembayaranKategori");
Route.delete(
  "/pembayaran-kategori/:pembayaran_kategori_id",
  "MainController.deletePembayaranKategori"
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
Route.post("/prestasi", "MainController.postPrestasi");
Route.put("/prestasi/:prestasi_id", "MainController.putPrestasi");
Route.delete("/prestasi/:prestasi_id", "MainController.deletePrestasi");

// mutasi
Route.get("/mutasi", "MainController.getMutasi");
Route.post("/mutasi", "MainController.postMutasi");
Route.put("/mutasi/:mutasi_id", "MainController.putMutasi");
Route.delete("/mutasi/:mutasi_id", "MainController.deleteMutasi");

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

// jawaban siswa
Route.put(
  "/jawaban-ujian-siswa/:jawaban_ujian_siswa_id",
  "MainController.putJawabanUjianSiswa"
);

// jadwal ujian
Route.get("/jadwal-ujian", "MainController.getJadwalUjian");
Route.get("/jadwal-ujian/:jadwal_ujian_id", "MainController.detailJadwalUjian");
Route.post(
  "/jadwal-ujian/download-hasil",
  "MainController.downloadJadwalUjian"
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
Route.get("/timeline/:timeline_id", "MainController.detailTimeline");
Route.post("/timeline", "MainController.postTimeline");
Route.put("/timeline/:timeline_id", "MainController.putTimeline");
Route.delete("/timeline/:timeline_id", "MainController.deleteTimeline");
Route.post("/timeline/download-absen", "MainController.downloadTimelineAbsen");

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

// gelombang-ppdb
Route.get("/gelombang-ppdb", "MainController.getGelombangPPDB");
Route.get(
  "/gelombang-ppdb/:gelombang_ppdb_id",
  "MainController.detailGelombangPPDB"
);
Route.post("/gelombang-ppdb", "MainController.postGelombangPPDB");
Route.put(
  "/gelombang-ppdb/:gelombang_ppdb_id",
  "MainController.putGelombangPPDB"
);
Route.delete(
  "/gelombang-ppdb/:gelombang_ppdb_id",
  "MainController.deleteGelombangPPDB"
);

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
Route.get("/absen/:absen_id", "MainController.detailAbsen");
Route.post("/absen", "MainController.postAbsen");
Route.put("/absen/:absen_id", "MainController.putAbsen");
Route.post("/absen/download-absen", "MainController.downloadAbsen");

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
Route.post("/rekap/:materi_id", "MainController.postRekap");
Route.post(
  "/rekap/:materi_id/sikap/:m_user_id",
  "MainController.postRekapSikap"
);
Route.put("/rekap/:materi_id/:rekap_id", "MainController.putRekap");
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
  "MainController.postRekapRombel"
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

Route.post("/absen/rekapdownload", "MainController.downloadRekapAbsen");

// Mutasi Service
Route.post("/mutasi/importmutasi", "MainController.importMutasi");
Route.post("/mutasi/download-mutasi", "MainController.downloadMutasi");

// Rombel Service
Route.post("/rombel/import-rombel", "MainController.importRombel");
Route.post("/rombel/download-rombel", "MainController.downloadRombel");

// Alumni Service
Route.post("/alumni/import-alumni", "MainController.importAlumni");
Route.post("/alumni/download-alumni", "MainController.downloadAlumni");

Route.post(
  "/ujian/download-kartu-ujian/:ujian_id",
  "MainController.downloadKartuUjian"
);

Route.get("/daftar-sekolah", "MainController.daftarsekolah");

//ubah tipe data
Route.get("/ubahtipedata", "MainController.ubahtipedata");

//predikat service
Route.post("/predikat", "MainController.postPredikat");
Route.put("/predikat/:predikat_id", "MainController.putPredikat");
Route.delete("/predikat/:predikat_id", "MainController.deletePredikat");

//Rapor Service
Route.get(
  "/rombel/:jadwal_mengajar_id/rapor/:user_id",
  "MainController.detailRombelRapor"
);

Route.post(
  "/rapor/ekskul/:rombel_id/:user_id",
  "MainController.postRaporEkskul"
);
Route.post("/rapor/kelulusan/:user_id", "MainController.postKeteranganRapor");
Route.post("/rapor/pkl/:user_id", "MainController.postKeteranganPkl");

//Buku Induk Service
Route.get("/buku-induk", "MainController.getBukuInduk");
Route.get("/buku-induk/:rombel_id", "MainController.detailBukuInduk");
Route.get(
  "/buku-induk/:rombel_id/:user_id",
  "MainController.detailBukuIndukSiswa"
);
Route.get(
  "/buku-induk/rapor/:rombel_id",
  "MainController.detailBukuIndukRapor"
);

Route.post(
  "/rombel-download/:jadwal_mengajar_id/download-analisis-nilai",
  "MainController.downloadAnalisisNilai"
);
Route.post("/download/experimen", "MainController.downloadExperimen");

//CDC Service
Route.get("/cdc/pekerjaan-saya", "MainController.getPekerjaanSaya");
Route.get("/cdc/cari-pekerjaan", "MainController.getCariPekerjaan");
Route.get("/cdc/cari-perusahaan", "MainController.getCariPerusahaan");
Route.get(
  "/cdc/pekerjaan-saya/pekerjaan_id",
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
Route.get("/cdc/acara", "MainController.getAcaraPerusahaan");
Route.get("/cdc/acara/:acara_id", "MainController.detailAcaraPerusahaan");
Route.post("/cdc/acara", "MainControler.postAcaraPerusahaan");
Route.put("/cdc/acara/acara_id", "MainControler.putAcaraPerusahaan");
Route.delete("/cdc/acara/acara_id", "MainControler.deleteAcaraPerusahaan");

Route.post("/cdc/perusahaan", "MainControler.postPerusahaan");
Route.put("/cdc/perusahaan/perusahaan_id", "MainControler.putPerusahaan");
Route.delete("/cdc/perusahaan/perusahaan_id", "MainControler.deletePerusahaan");
// wildcard (DROP AT BOTTOM OF THE FILE)
Route.any("*", "MainController.notFoundPage");

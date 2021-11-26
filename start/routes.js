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
Route.post("/master/registrasi", "MainController.postRegistrasiSekolah");

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
Route.get("/profil/guru/:user_id", "MainController.getProfilGuru");

// user
Route.get("/user", "MainController.getUser");
Route.get("/user/:user_id", "MainController.detailUser");
Route.post("/reset-password", "MainController.resetPassword");
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
Route.post("/eskul", "MainController.postEskul");
Route.put("/eskul/:id", "MainController.putEskul");
Route.delete("/eskul/:id", "MainController.deleteEskul");

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
Route.post("/anggota-rombel", "MainController.postAnggotaRombel");
Route.post("/anggota-rombel/import", "MainController.importAnggotaRombel");
Route.post(
  "/anggota-rombel/import-password",
  "MainController.importAnggotaRombelPassword"
);

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

// no rekening
Route.get("/rek-sekolah", "MainController.getRekSekolah");
Route.post("/rek-sekolah", "MainController.postRekSekolah");
Route.put("/rek-sekolah/:rek_sekolah_id", "MainController.putRekSekolah");
Route.delete("/rek-sekolah/:rek_sekolah_id", "MainController.deleteRekSekolah");
Route.post("/rek-sekolah/download","MainController.downloadRekening")

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
Route.post("/prestasi", "MainController.postPrestasi");
Route.put("/prestasi/:prestasi_id", "MainController.putPrestasi");
Route.delete("/prestasi/:prestasi_id", "MainController.deletePrestasi");

// mutasi
Route.get("/mutasi", "MainController.getMutasi");
Route.post("/mutasi", "MainController.postMutasiV1");
Route.put("/mutasi/:mutasi_id", "MainController.putMutasiV1");
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
Route.put("/update-nilai/:peserta_ujian_id", "MainController.updateNilai");

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
Route.post("/absen-siswa/rekapdownload", "MainController.downloadRekapAbsenSiswa");

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
  "/rapor/ekskul/:rombel_id/:user_id",
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
Route.delete("/buku-induk/rapor/mapel", "MainController.deleteMapelRapor");
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

Route.post("/cdc/perusahaan", "MainControler.postPerusahaan");
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
  "MainController.downloadLedgerNilai"
);

Route.post("/naik-kelas-jam", "MainController.naikTAJam");

Route.post("/naik-kelas-mapel", "MainController.naikTAMapel");

Route.post("/naik-kelas-rombel", "MainController.naikTARombel");

Route.post("/download/lap-tunggakan", "MainController.downloadLapTunggakan");
Route.post("/download/lap-kehadiran", "MainController.downloadLapKehadiran");
Route.post("/download/lap-inventaris", "MainController.downloadLapInventaris");
Route.post("/download/lap-psg", "MainController.downloadLapPsg");
Route.post(
  "/download/analisis-materi/:topik_id",
  "MainController.downloadAnalisisMateri"
);

// Ortu anak
Route.post("/absen-anak", "MainController.getAbsensiAnak");
Route.post("/tugas-anak", "MainController.getTugasAnak");
Route.post("/ujian-anak", "MainController.getUjianAnak");

Route.get("/ip", "MainController.ip");
// wildcard (DROP AT BOTTOM OF THE FILE)
Route.any("*", "MainController.notFoundPage");

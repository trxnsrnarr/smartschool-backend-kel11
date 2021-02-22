"use strict";

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
Route.get("/province/:province_id/regency", "MainController.getRegency");
Route.get("/regency/:regency_id/district", "MainController.getDistrict");
Route.get("/district/:district_id/village", "MainController.getVillage");
Route.get("/sekolah-kemdikbud", "MainController.getMasterSekolah");

// auth
Route.post("/loginwhatsapp", "MainController.loginWhatsapp");
Route.post("/login", "MainController.login");
Route.post("/loginadminwhatsapp", "MainController.loginAdminWhatsapp");
Route.post("/loginadmin", "MainController.loginAdmin");
Route.get("/profil", "MainController.getProfil");
Route.put("/profil", "MainController.putProfil");
Route.put("/ubah-password", "MainController.putUbahPassword");

// sekolah
Route.get("/sekolah", "MainController.getSekolah");

// jurusan
Route.get("/jurusan", "MainController.getJurusan");
Route.post("/jurusan", "MainController.postJurusan");
Route.put("/jurusan/:jurusan_id", "MainController.putJurusan");
Route.delete("/jurusan/:jurusan_id", "MainController.deleteJurusan");

// guru
Route.get("/guru", "MainController.getGuru");
Route.post("/guru", "MainController.postGuru");
Route.put("/guru/:guru_id", "MainController.putGuru");
Route.delete("/guru/:guru_id", "MainController.deleteGuru");

// siswa
Route.get("/siswa", "MainController.getSiswa");
Route.post("/siswa", "MainController.postSiswa");
Route.put("/siswa/:siswa_id", "MainController.putSiswa");
Route.delete("/siswa/:siswa_id", "MainController.deleteSiswa");

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

// anggota rombel
Route.post("/anggota-rombel", "MainController.postAnggotaRombel");
Route.post("/anggota-rombel/import", "MainController.importAnggotaRombel");

// mata-pelajaran
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

// topik
Route.get("/topik/:topik_id", "MainController.detailTopik");
Route.post("/topik", "MainController.postTopik");
Route.put("/topik/:topik_id", "MainController.putTopik");
Route.delete("/topik/:topik_id", "MainController.deleteTopik");

// tugas
Route.get("/tugas", "MainController.getTugas");
Route.get("/tugas/:tugas_id", "MainController.detailTugas");
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
Route.post("/sarpras", "MainController.postSarpras");
Route.put("/sarpras/:sarpras_id", "MainController.putSarpras");
Route.delete("/sarpras/:sarpras_id", "MainController.deleteSarpras");

// kegiatan
Route.get("/kegiatan", "MainController.getKegiatan");
Route.post("/kegiatan", "MainController.postKegiatan");
Route.put("/kegiatan/:kegiatan_id", "MainController.putKegiatan");
Route.delete("/kegiatan/:kegiatan_id", "MainController.deleteKegiatan");

// kegiatan galeri
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
Route.delete("/absen/:absen_id", "MainController.deleteAbsen");

// test
Route.get("/test", "MainController.getTest");

// perpus
Route.get("/perpus", "MainController.getPerpus");
Route.get("/perpus/:perpus_id", "MainController.detailPerpus");
Route.post("/perpus", "MainController.postPerpus");
Route.put("/perpus/:perpus_id", "MainController.putPerpus");
Route.delete("/perpus/:perpus_id", "MainController.deletePerpus");

// perpus aktivitas
Route.post("/perpus-aktivitas", "MainController.postPerpusAktivitas");

// perpus komen
Route.post("/perpus-komen", "MainController.postPerpusKomen");
Route.delete(
  "/perpus-komen/:perpus_komen_id",
  "MainController.deletePerpusKomen"
);

// slider
Route.get("/slider", "MainController.getSlider");
Route.post("/slider", "MainController.postSlider");
Route.put("/slider/:slider_id", "MainController.putSlider");
Route.delete("/slider/:slider_id", "MainController.deleteSlider");

// wildcard
Route.any("*", "MainController.notFoundPage");

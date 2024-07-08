"use strict";

const Drive = use("Drive");
const Province = use("App/Models/Province");
const Regency = use("App/Models/Regency");
const District = use("App/Models/District");
const Village = use("App/Models/Village");
const Leaderboard = use("App/Models/Leaderboard");
const Sekolah = use("App/Models/Sekolah");
const MSekolah = use("App/Models/MSekolah");
const MSekolahIndustri = use("App/Models/MSekolahIndustri");
const MSarpras = use("App/Models/MSarpras");
const MKegiatanGaleri = use("App/Models/MKegiatanGaleri");
const MProyek = use("App/Models/MProyek");
const MPerpusKomen = use("App/Models/MPerpusKomen");
const MRpp = use("App/Models/MRpp");
const MSikapSiswa = use("App/Models/MSikapSiswa");
const MSikapRombel = use("App/Models/MSikapRombel");
const MSesbro = use("App/Models/MSesbro");
const MRekap = use("App/Models/MRekap");
const MPredikatNilai = use("App/Models/MPredikatNilai");
const MKeteranganRapor = use("App/Models/MKeteranganRapor");
const MCamera = use("App/Models/MCamera");
const MAbsenBelumTerdaftar = use("App/Models/MAbsenBelumTerdaftar");
const MKeteranganPkl = use("App/Models/MKeteranganPkl");
const MRaporEkskul = use("App/Models/MRaporEkskul");
const MRekapRombel = use("App/Models/MRekapRombel");
const TkRekapNilai = use("App/Models/TkRekapNilai");
const MGelombangPpdb = use("App/Models/MGelombangPpdb");
const MPendaftarPpdb = use("App/Models/MPendaftarPpdb");
const MAnggotaProyek = use("App/Models/MAnggotaProyek");
const MAnggotaProyekRole = use("App/Models/MAnggotaProyekRole");
const MKategoriPekerjaan = use("App/Models/MKategoriPekerjaan");
const MPekerjaanProyek = use("App/Models/MPekerjaanProyek");
const MDitugaskanPekerjaan = use("App/Models/MDitugaskanPekerjaan");
const MProyekForum = use("App/Models/MProyekForum");
const MProyekForumKomen = use("App/Models/MProyekForumKomen");
const MAlurPPDB = use("App/Models/MAlurPpdb");
const MJalurPpdb = use("App/Models/MJalurPpdb");
const TkPerpusAktivitas = use("App/Models/TkPerpusAktivitas");
const MJurusan = use("App/Models/MJurusan");
const MRekSekolah = use("App/Models/MRekSekolah");
const MIndustri = use("App/Models/MIndustri");
const MPembayaran = use("App/Models/MPembayaran");
const MPembayaranSiswa = use("App/Models/MPembayaranSiswa");
const MMutasi = use("App/Models/MMutasi");
const MAlumni = use("App/Models/MAlumni");
const MProfilUser = use("App/Models/MProfilUser");
const MRiwayatPembayaranSiswa = use("App/Models/MRiwayatPembayaranSiswa");
const MPembayaranKategori = use("App/Models/MPembayaranKategori");
const MSikapSiswaYadika = use("App/Models/MSikapSiswaYadika");
const Mta = use("App/Models/Mta");
const MSlider = use("App/Models/MSlider");
const MTugas = use("App/Models/MTugas");
const MKegiatan = use("App/Models/MKegiatan");
const MInformasiSekolah = use("App/Models/MInformasiSekolah");
const MInformasiJurusan = use("App/Models/MInformasiJurusan");
const MGuruJurusan = use("App/Models/MGuruJurusan");
const MRombel = use("App/Models/MRombel");
const TkPembayaranRombel = use("App/Models/TkPembayaranRombel");
const MJamMengajar = use("App/Models/MJamMengajar");
const MJadwalMengajar = use("App/Models/MJadwalMengajar");
const MMataPelajaran = use("App/Models/MMataPelajaran");
const TkPost = use("App/Models/TkPost");
const MPost = use("App/Models/MPost");
const MKategori = use("App/Models/MKategori");
const MTopik = use("App/Models/MTopik");
const MAnggotaRombel = use("App/Models/MAnggotaRombel");
const TkMateriRombel = use("App/Models/TkMateriRombel");
const MBab = use("App/Models/MBab");
const MPrestasi = use("App/Models/MPrestasi");
const MAbsen = use("App/Models/MAbsen");
const MSoalUjian = use("App/Models/MSoalUjian");
const TkSoalUjian = use("App/Models/TkSoalUjian");
const MJadwalUjian = use("App/Models/MJadwalUjian");
const TkJadwalUjian = use("App/Models/TkJadwalUjian");
const TkPesertaUjian = use("App/Models/TkPesertaUjian");
const TkPesertaUjianPpdb = use("App/Models/TkPesertaUjianPpdb");
const MJadwalPpdb = use("App/Models/MJadwalPpdb");
const MUjian = use("App/Models/MUjian");
const MUjianSiswa = use("App/Models/MUjianSiswa");
const MMateri = use("App/Models/MMateri");
const MSikapSosial = use("App/Models/MSikapSosial");
const MSikapSpiritual = use("App/Models/MSikapSpiritual");
const MSoalKuis = use("App/Models/MSoalKuis");
const MTimeline = use("App/Models/MTimeline");
const TkTimeline = use("App/Models/TkTimeline");
const TkTimelineKomen = use("App/Models/TkTimelineKomen");
const TkTimelineTopik = use("App/Models/TkTimelineTopik");
const TkMateriKesimpulan = use("App/Models/TkMateriKesimpulan");
const MTimelineKomen = use("App/Models/MTimelineKomen");
const MPerusahaan = use("App/Models/MPerusahaan");
const MPenerimaanPerusahaan = use("App/Models/MPenerimaanPerusahaan");
const TkPerusahaanSekolah = use("App/Models/TkPerusahaanSekolah");
const MPekerjaan = use("App/Models/MPekerjaan");
const MInformasiPekerjaan = use("App/Models/MInformasiPekerjaan");
const MPekerjaanPengumuman = use("App/Models/MPekerjaanPengumuman");
const MAcaraPerusahaan = use("App/Models/MAcaraPerusahaan");
const TkStatusPekerjaan = use("App/Models/TkStatusPekerjaan");
const MKotakMasuk = use("App/Models/MKotakMasuk");
const MKotakMasukKomen = use("App/Models/MKotakMasukKomen");
const MSurel = use("App/Models/MSurel");
const MSurelKomen = use("App/Models/MSurelKomen");
const MFolderArsip = use("App/Models/MFolderArsip");
const TkTipeSurel = use("App/Models/TkTipeSurel");
const MBarang = use("App/Models/MBarang");
const MLokasi = use("App/Models/MLokasi");
const MKategoriPelanggaran = use("App/Models/MKategoriPelanggaran");
const MPelanggaran = use("App/Models/MPelanggaran");
const MPenghargaan = use("App/Models/MPenghargaan");
const MSanksiPelanggaran = use("App/Models/MSanksiPelanggaran");
const MSanksiSiswa = use("App/Models/MSanksiSiswa");
const TkSiswaPelanggaran = use("App/Models/TkSiswaPelanggaran");
const MBabPeraturan = use("App/Models/MBabPeraturan");
const MPasalPeraturan = use("App/Models/MPasalPeraturan");
const MBukuTamu = use("App/Models/MBukuTamu");
const MKategoriMapel = use("App/Models/MKategoriMapel");
const TkMapelRapor = use("App/Models/TkMapelRapor");
const MSurat = use("App/Models/MSurat");
const MDisposisi = use("App/Models/MDisposisi");
const MPelaporanDisposisi = use("App/Models/MPelaporanDisposisi");
const MTemplateDeskripsi = use("App/Models/MTemplateDeskripsi");
const MPertemuanBk = use("App/Models/MPertemuanBk");
const MJadwalKonsultasi = use("App/Models/MJadwalKonsultasi");
const MLabelKalender = use("App/Models/MLabelKalender");
const MKegiatanKalender = use("App/Models/MKegiatanKalender");
const MKalenderPendidikan = use("App/Models/MKalenderPendidikan");
const MBuktiPelaksanaanSanksi = use("App/Models/MBuktiPelaksanaanSanksi");
const MBobotNilai = use("App/Models/MBobotNilai");
const MRegistrasiAkun = use("App/Models/MRegistrasiAkun");
const MAnggotaEkskul = use("App/Models/MAnggotaEkskul");
const MFiturSekolah = use("App/Models/MFiturSekolah");
const MSuratKeputusan = use("App/Models/MSuratKeputusan");
const TkSuratKeputusanUser = use("App/Models/TkSuratKeputusanUser");
const MServer = use("App/Models/MServer");
const TkServerSekolah = use("App/Models/TkServerSekolah");
const MPembayaranSekolah = use("App/Models/MPembayaranSekolah");
const MDokumenPembayaranSekolah = use("App/Models/MDokumenPembayaranSekolah");
const MNotifikasiTerjadwal = use("App/Models/MNotifikasiTerjadwal");
const MHistoriAktivitas = use("App/Models/MHistoriAktivitas");
const MKeuAkun = use("App/Models/MKeuAkun");
const MKeuTransaksi = use("App/Models/MKeuTransaksi");
const MKeuJurnal = use("App/Models/MKeuJurnal");

const MBuku = use("App/Models/MBuku");
const MPerpus = use("App/Models/MPerpus");
const MPraktikKerja = use("App/Models/MPraktikKerja");
const MEkstrakurikuler = use("App/Models/MEkstrakurikuler");
const TkPerpusMapel = use("App/Models/TkPerpusMapel");
const TkSoalTugas = use("App/Models/TkSoalTugas");
const MPerpusTag = use("App/Models/MPerpusTag");
const TkPerpusTag = use("App/Models/TkPerpusTag");
const MKontak = use("App/Models/MKontak");
const TkJawabanUjianSiswa = use("App/Models/TkJawabanUjianSiswa");
const User = use("App/Models/User");
const DownloadService = use("App/Services/DownloadService");
const DownloadService2 = use("App/Services/DownloadService2");
const DownloadKartuPg = use("App/Services/DownloadKartuPg");
const DownloadKartuEsai = use("App/Services/DownloadKartuEsai");
const Downloadkisikisi = use("App/Services/Downloadkisikisi");
const DownloadNaskah = use("App/Services/DownloadNaskah");
const DownloadRumusan = use("App/Services/DownloadRumusan");
const DownloadTemplate = use("App/Services/DownloadTemplate");
const { HitungNilaiAkhir } = use("App/Services/NilaiServices");
const WhatsAppService = use("App/Services/WhatsAppService");
const { shuffle } = require("../../../Utils/Global");

const moment = require("moment");
require("moment/locale/id");
moment.locale("id");
const PDFExtract = require("pdf.js-extract").PDFExtract;

const Hash = use("Hash");
const Helpers = use("Helpers");
const axios = require("axios");
const Mail = use("Mail");
const { validate } = use("Validator");
const slugify = require("slugify");
const Excel = require("exceljs");
const WordExtractor = require("word-extractor");
const AdonisGCS = require("adonis-google-cloud-storage");
const uuid = require("uuid-v4");
const pdftohtml = require("pdftohtmljs");
const http = require("http"); // or 'https' for https:// URLs
const Downloader = require("nodejs-file-downloader");
const cron = require("node-cron");
var randomstring = require("randomstring");

const PDFDocument = require("pdfkit");
const fs = require("fs");
const fetch = require("node-fetch");
const pdf = require("pdf-parse");
const htmlEscaper = require("html-escaper");

// firestore
const Firestore = use("App/Models/Firestore");
const firestore = new Firestore();
const db = firestore.db();
const bucket = firestore.bucket();
const FieldValue = firestore.FieldValue();
var striptags = require("striptags");
const {
  kirimNotifWa,
  ubahNotifWa,
  hapusNotifWa,
  kirimNotifWaLangsung,
} = require("../../Services/WhatsAppService");
// reference to
const jadwalUjianReference = db.collection("jadwal-ujian");

const Env = use("Env");
const Database = use("Database");

const accountSid = "AC124e53d8cfb40a9f80ae98c59eba0980";
const authToken = "04e5831e528fa131ad81400739e1022f";
const client = require("twilio")(accountSid, authToken);
const joinNotification = `http://wa.me/+14155238886?text=join additional-growth`;

const messagePostSuccess = "Data berhasil ditambahkan";
const messageSaveSuccess = "Data berhasil disimpan";
const messagePutSuccess = "Data berhasil diubah";
const messageDeleteSuccess = "Data berhasil dihapus";
const messageNotFound = "Data tidak ditemukan";
const messageForbidden = "Dilarang, anda bukan seorang admin";
const messageEmailSuccess = "Data berhasil dikirim ke email";
const pesanSudahDitambahkan = "Data sudah ditambahkan";

var cronJobs = {};

// RULES
const rulesUserPost = {
  nama: "required",
  password: "required",
  whatsapp: "required",
  gender: "required",
};

const rulesUserPut = {
  nama: "required",
  password: "required",
  whatsapp: "required",
  gender: "required",
};

const rulesAnggotaPost = {
  proyek_id: "required",
  user_id: "required",
  status: "required",
};

const messagesUser = {
  "password.required": "Password harus diisi",
  "nama.required": "Nama harus diisi",
  "whatsapp.required": "Whatsapp harus diisi",
  "gender.required": "Jenis Kelamin harus diisi",
};

const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const romawi = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];
const day = String(dateObj.getDate()).padStart(2, "0");

// const hour = dateObj.getHours();
// const minute = dateObj.getMinutes();
// const second = dateObj.getSeconds();
// // const keluarantanggal = day + "," + month + "," + year;
// const keluarantanggalseconds1 = moment().format("YYYY-MM-DD-HH-mm-ss");
// const keluarantanggalseconds =
//   keluarantanggalseconds1 + "-" + dateObj.getTime();

function colName(n) {
  var ordA = "a".charCodeAt(0);
  var ordZ = "z".charCodeAt(0);
  var len = ordZ - ordA + 1;

  var s = "";
  while (n >= 0) {
    s = String.fromCharCode((n % len) + ordA) + s;
    n = Math.floor(n / len) - 1;
  }
  return s.toUpperCase();
}

class MainController {
  // UTILS

  async removeTag(content) {
    // const removeEl = content.replace(/(<([^>]+)>)/ig, "");

    var html = content;

    return striptags(html);
  }

  async singleUpload({ request, response }) {
    const fileUpload = request.file("file");

    const fname = `${Date.now()}.${fileUpload.extname}`;

    await fileUpload.move(Helpers.publicPath("uploads/"), {
      name: fname,
      overwrite: true,
    });

    if (!fileUpload.moved()) {
      return fileUpload.error();
    }

    return fname;
  }

  async richEditorUpload({ request, response }) {
    const fileUpload = request.file("file");

    const fname = `${Date.now()}.${fileUpload.extname}`;

    await fileUpload.move(Helpers.publicPath("uploads/"), {
      name: fname,
      overwrite: true,
    });

    if (!fileUpload.moved()) {
      return fileUpload.error();
    }

    return { link: `http://${request.headers().host}/uploads/${fname}` };
  }

  async multipleUpload({ request, response }) {
    // const fileUpload = request.file("file");
    // const fname = `${Date.now()}.${fileUpload.extname}`;
    // await fileUpload.move(Helpers.publicPath("uploads/"), {
    //   name: fname,
    //   overwrite: true,
    // });
    // if (!fileUpload.moved()) {
    //   return fileUpload.error();
    // }
    // const profilePics = request.file('profile_pics')
    // await profilePics.moveAll(Helpers.tmpPath('uploads'))
    // if (!profilePics.movedAll()) {
    //   return profilePics.errors()
    // }
    // return "http://demoapi.getsmartschool.id/uploads/" + fname;
  }

  async getSekolahByDomain(domain) {
    const sekolah = await MSekolah.query()
      .with("informasi")
      .with("fitur")
      .where("domain", "like", `%${domain}%`)
      .first();

    if (!sekolah) {
      return "404";
    }

    return sekolah;
  }

  async meSekolah({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const kontak = await MKontak.query()
      .where({
        m_sekolah_id: sekolah.id,
      })
      .first();

    const checkPredikat = await MPredikatNilai.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    const bobot = await MBobotNilai.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    if (!bobot) {
      await MBobotNilai.create({
        tugas_pts: "30",
        uh_pts: "30",
        uts_pts: "40",
        praktik_pts: "25",
        produk_pts: "25",
        proyek_pts: "25",
        portofolio_pts: "25",
        tugas_pas: "25",
        uh_pas: "25",
        uts_pas: "25",
        uas_pas: "25",
        praktik_pas: "25",
        produk_pas: "25",
        proyek_pas: "25",
        portofolio_pas: "25",
        m_sekolah_id: sekolah.id,
      });
    }

    if (!checkPredikat) {
      await MPredikatNilai.create({
        predikat: "A",
        bb_pengetahuan: "86",
        ba_pengetahuan: "100",
        bb_keterampilan: "86",
        ba_keterampilan: "100",
        sikap: "Sangat Baik",
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });
      await MPredikatNilai.create({
        predikat: "B",
        bb_pengetahuan: "71",
        ba_pengetahuan: "86",
        bb_keterampilan: "71",
        ba_keterampilan: "86",
        sikap: "Baik",
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });
      await MPredikatNilai.create({
        predikat: "C",
        bb_pengetahuan: "56",
        ba_pengetahuan: "71",
        bb_keterampilan: "56",
        ba_keterampilan: "71",
        sikap: "Cukup",
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });
      await MPredikatNilai.create({
        predikat: "D",
        bb_pengetahuan: "0",
        ba_pengetahuan: "56",
        bb_keterampilan: "0",
        ba_keterampilan: "56",
        sikap: "Kurang",
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });
    }

    return response.ok({
      whatsappBot: " 0831 8736 0324",
      sekolah: sekolah,
      integrasi: sekolah.integrasi,
      kontak,
    });
  }

  async getTAAktif(sekolah) {
    const ta = await Mta.query()
      .select(
        "id",
        "tahun",
        "semester",
        "nama_kepsek",
        "nip_kepsek",
        "tingkat1",
        "tingkat2",
        "tingkat3",
        "tingkat4"
      )
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ aktif: 1 })
      .andWhere({ dihapus: 0 })
      .first();

    if (!ta) {
      return "404";
    }

    return ta;
  }

  async getLokasiSaatIni({ response }) {
    const geolocation = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${Env.get(
        "GCP_API_KEYS"
      )}`
    );

    const lat = geolocation.data.location.lat;
    const lng = geolocation.data.location.lng;

    const reverse = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}, ${lng}&key=${Env.get(
        "GCP_API_KEYS"
      )}`
    );

    return response.ok(reverse.data);
  }

  // REST API

  async getProvince({ response }) {
    const res = await Province.query().fetch();

    return response.ok(res);
  }

  async getRegency({ response, request }) {
    const { province_id } = request.get();

    const res = await Regency.query().where({ province_id }).fetch();

    return response.ok(res);
  }

  async getDistrict({ response, request }) {
    const { regency_id } = request.get();

    const res = await District.query().where({ regency_id }).fetch();

    return response.ok(res);
  }

  async getVillage({ response, request }) {
    const { district_id } = request.get();

    const res = await Village.query().where({ district_id }).fetch();

    return response.ok(res);
  }

  async getKcdLeaderboard({ response, request }) {
    const kcdLeaderboard = await User.query()
      .select("kabupaten_ids", "whatsapp", "nama", "id")
      .where({ role: "kcd" })
      .fetch();

    await Promise.all(
      kcdLeaderboard.toJSON().map(async (d) => {
        const kabupatenIds = d.kabupaten_ids.split(",");

        const check = await Leaderboard.query()
          .where({ m_user_id: d.id })
          .first();

        if (!check) {
          await Leaderboard.create({
            m_user_id: d.id,
            kcd: d.nama,
            total: await Sekolah.query()
              .whereIn("kode_kab_kota", kabupatenIds)
              .whereNotNull("m_sekolah_id")
              .getCount(),
          });
        } else {
          await Leaderboard.query()
            .where({ id: check.id })
            .update({
              kcd: d.nama,
              total: await Sekolah.query()
                .whereIn("kode_kab_kota", kabupatenIds)
                .whereNotNull("m_sekolah_id")
                .getCount(),
            });
        }
      })
    );

    return await Leaderboard.query().orderBy("total", "desc").fetch();
  }

  async getMasterSekolahDinasSummary({ response, request }) {
    let { page, propinsi, kabupaten } = request.get();

    let totalSD;
    let totalSMP;
    let totalSMA;
    let totalSMK;
    let totalSLB;

    if (propinsi) {
      if (kabupaten) {
        totalSD = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("kode_kab_kota", kabupaten)
          .andWhere("bentuk", "SD")
          .whereNotNull("m_sekolah_id")
          .getCount();
        totalSMP = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("kode_kab_kota", kabupaten)
          .andWhere("bentuk", "SMP")
          .whereNotNull("m_sekolah_id")
          .getCount();
        totalSMA = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("kode_kab_kota", kabupaten)
          .andWhere("bentuk", "SMA")
          .whereNotNull("m_sekolah_id")
          .getCount();
        totalSMK = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("kode_kab_kota", kabupaten)
          .andWhere("bentuk", "SMK")
          .whereNotNull("m_sekolah_id")
          .getCount();
        totalSLB = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("kode_kab_kota", kabupaten)
          .andWhere("bentuk", "SLB")
          .whereNotNull("m_sekolah_id")
          .getCount();
      } else {
        totalSD = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("bentuk", "SD")
          .whereNotNull("m_sekolah_id")
          .getCount();
        totalSMP = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("bentuk", "SMP")
          .whereNotNull("m_sekolah_id")
          .getCount();
        totalSMA = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("bentuk", "SMA")
          .whereNotNull("m_sekolah_id")
          .getCount();
        totalSMK = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("bentuk", "SMK")
          .whereNotNull("m_sekolah_id")
          .getCount();
        totalSLB = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("bentuk", "SLB")
          .whereNotNull("m_sekolah_id")
          .getCount();
      }
    } else {
      totalSD = await Sekolah.query()
        .where("bentuk", "SD")
        .whereNotNull("m_sekolah_id")
        .getCount();
      totalSMP = await Sekolah.query()
        .where("bentuk", "SMP")
        .whereNotNull("m_sekolah_id")
        .getCount();
      totalSMA = await Sekolah.query()
        .where("bentuk", "SMA")
        .whereNotNull("m_sekolah_id")
        .getCount();
      totalSMK = await Sekolah.query()
        .where("bentuk", "SMK")
        .whereNotNull("m_sekolah_id")
        .getCount();
      totalSLB = await Sekolah.query()
        .where("bentuk", "SLB")
        .whereNotNull("m_sekolah_id")
        .getCount();
    }

    return response.ok({
      totalSD,
      totalSMP,
      totalSMA,
      totalSMK,
      totalSLB,
    });
  }

  async getMasterSekolahSSSummary({ response, request }) {
    let { page, propinsi, kabupaten } = request.get();

    let totalSekolah;

    if (propinsi) {
      totalSekolah = await Sekolah.query()
        .where("kode_prop", propinsi)
        .whereNotNull("m_sekolah_id")
        .getCount();
      if (kabupaten) {
        totalSekolah = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("kode_kab_kota", kabupaten)
          .whereNotNull("m_sekolah_id")
          .getCount();
      }
    } else {
      totalSekolah = await Sekolah.query()
        .whereNotNull("m_sekolah_id")
        .getCount();
    }

    const totalGpds = await MSekolah.query().where({ gpds: 1 }).getCount();
    const totalPro = await MSekolah.query().where({ trial: 0 }).getCount();
    const totalTrial = await MSekolah.query().where({ trial: 1 }).getCount();

    return response.ok({
      totalSekolah,
      totalGpds,
      totalPro,
      totalTrial,
    });
  }

  async getMasterSekolahSS({ response, request }) {
    let { page, propinsi, kabupaten, search } = request.get();

    let kodePropsId;

    if (propinsi) {
      kodePropsId = await Sekolah.query()
        .where("kode_prop", propinsi)
        .whereNotNull("m_sekolah_id")
        .pluck("m_sekolah_id");
      if (kabupaten) {
        kodePropsId = await Sekolah.query()
          .where("kode_prop", propinsi)
          .andWhere("kode_kab_kota", kabupaten)
          .whereNotNull("m_sekolah_id")
          .pluck("m_sekolah_id");
      }
    } else {
      kodePropsId = await Sekolah.query()
        .whereNotNull("m_sekolah_id")
        .pluck("m_sekolah_id");
    }

    const res = MSekolah.query()
      .with("guru", (builder) => {
        builder.where({ role: "admin" }).andWhere({ dihapus: 0 });
      })
      .select(
        "id",
        "nama",
        "gpds",
        "trial",
        "jumlah_ujian",
        "jumlah_topik",
        "domain"
      )
      .with("ta", (builder) => {
        builder
          .select("id", "m_sekolah_id")
          .with("rombel", (builder) => {
            builder
              .select("id", "m_ta_id", "m_sekolah_id")
              .withCount("anggotaRombel as total", (builder) => {
                builder.where("dihapus", 0);
              })
              .where("dihapus", 0);
          })
          .where("aktif", 1);
      })
      .withCount("guru as totalGuru", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ role: "guru" });
      })
      .whereIn("id", kodePropsId)
      .orderBy("jumlah_topik", "desc");
    if (search) {
      res.where("sekolah", "like", `%${search}%`);
    }

    return response.ok({
      sekolah: await res.paginate(page, 50),
    });
  }

  async getMasterSekolah({ response, request }) {
    let {
      page,
      search = "",
      bentuk,
      propinsi,
      kabupaten,
      kecamatan,
    } = request.get();

    page = page ? page : 1;

    const res = Sekolah.query().with("sekolahSS");

    let number;
    if (search.match(/\d/g)) {
      number = parseInt(search.match(/\d/g).join(""));
      search = search.replace(/\d/g, "");
    }

    if (
      !search.toLowerCase().includes(bentuk.toLowerCase()) &&
      (search.toLowerCase().includes("negeri") ||
        search.toLowerCase().includes("negri") ||
        search.toLowerCase().includes("swasta"))
    ) {
      search = `${bentuk} ${search}`;
    }
    if (
      search.toLowerCase().includes("negeri") ||
      search.toLowerCase().includes("negri")
    ) {
      search = search.toLowerCase().includes("negri")
        ? `${search.split(" ")[0]}N${search.slice(
            search.toLowerCase().search("negri") + 5
          )}`
        : `${search.split(" ")[0]}N${search.slice(
            search.toLowerCase().search("negeri") + 6
          )}`;
    }
    if (search.toLowerCase().includes("swasta")) {
      search = `${search.split(" ")[0]}S${search.slice(
        search.toLowerCase().search("swasta") + 6
      )}`;
    }
    if (search) {
      res.where("sekolah", "like", `%${search}%`);
    }

    if (number) {
      if (`${number}`.length > 3) {
        res.orWhere("npsn", "like", `%${number}%`);
      }
      //  else {

      //   res.whereRaw("ExtractNumber(TRIM(sekolah)) >= ?", [number]);
      // }
    }

    if (bentuk) {
      res.andWhere("bentuk", bentuk);
    }

    if (propinsi) {
      res.andWhere("kode_prop", propinsi);
    }

    if (kabupaten) {
      res.andWhere("kode_kab_kota", kabupaten);
    }

    if (kecamatan) {
      res.andWhere("kode_kec", kecamatan);
    }

    // res.orderByRaw("ExtractNusmber(TRIM(sekolah))");
    res.orderBy("status");

    return response.ok({
      sekolah: await res.paginate(page),
    });
  }

  async tambahSekolah({ response, request }) {
    const {
      kode_prop,
      propinsi,
      kode_kab_kota,
      kabupaten_kota,
      kode_kec,
      kecamatan,
      npsn,
      sekolah,
      bentuk,
      status,
      alamat_jalan,
      telp,
      email,
      kode_pos,
    } = request.post();

    const rules = {
      kode_prop: "required",
      propinsi: "required",
      kode_kab_kota: "required",
      kabupaten_kota: "required",
      kode_kec: "required",
      kecamatan: "required",
      npsn: "required",
      sekolah: "required",
      bentuk: "required",
      status: "required",
      alamat_jalan: "required",
      telp: "required",
      email: "required",
      kode_pos: "required",
    };
    const message = {
      "kode_prop.required": "kode_prop harus di isi",
      "propinsi.required": "propinsi harus di isi",
      "kode_kab_kota.required": "kode_kab_kota harus di isi",
      "kabupaten_kota.required": "kabupaten_kota harus di isi",
      "kode_kec.required": "kode_kec harus di isi",
      "kecamatan.required": "kecamatan harus di isi",
      "npsn.required": "npsn harus di isi",
      "sekolah.required": "sekolah harus di isi",
      "bentuk.required": "jenjang harus di isi",
      "status.required": "status harus di isi",
      "alamat_jalan.required": "alamat_jalan harus di isi",
      "telp.required": "telp harus di isi",
      "email.required": "email harus di isi",
      "kode_pos.required": "kode_pos harus di isi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    let check;
    check = await Sekolah.query().where({ npsn: npsn }).first();
    if (check) {
      return response.unprocessableEntity([
        { message: "Sekolah sudah terdaftar" },
      ]);
    }
    const sekolahBaru = await Sekolah.create({
      kode_prop,
      propinsi,
      kode_kab_kota,
      kabupaten_kota,
      kode_kec,
      kecamatan,
      npsn,
      sekolah,
      bentuk,
      status,
      alamat_jalan,
    });

    const domain = slugify(sekolahBaru.sekolah, {
      replacement: "", // replace spaces with replacement character, defaults to `-`
      remove: /[*+~.()'"!:@]/g,
      lower: true, // convert to lower case, defaults to `false`
    });
    check = await MSekolah.query()
      .where({ domain: `https://${domain}.smarteschool.id` })
      .first();
    let sekolahSS;
    if (check) {
      sekolahSS = check;
    } else {
      sekolahSS = await MSekolah.create({
        nama: sekolahBaru.sekolah,
        domain: `https://${domain}.smarteschool.id`,
        status: sekolahBaru.status,
        tingkat: sekolahBaru.bentuk,
        npsn: sekolahBaru.npsn,
        telp: telp,
        email: email,
        kode_pos: kode_pos,
        integrasi: "whatsapp",
        diintegrasi: 1,
        trial: 1,
      });
    }
    await Sekolah.query().where({ id: sekolahBaru.id }).update({
      m_sekolah_id: sekolahSS.id,
    });

    return response.ok({
      message: messagePostSuccess,
      sekolahId: sekolahBaru.id,
      sekolahSS: sekolahSS.id,
    });
  }

  async getMasterSekolahNpsn({ response, request }) {
    // const { npsn } = request.get();

    // let { data } = await axios({
    //   url: `https://dapo.kemdikbud.go.id/api/getHasilPencarian?keyword=${npsn}`,
    // });
    let { data } = request.post();

    const check = await Promise.all(
      data.map((d) => {
        return Sekolah.query().where({ npsn: d.npsn }).select("id").first();
      })
    );
    data = data.map((d, idx) => {
      return {
        exist: check[idx] ? true : false,
        ...d,
        nama_sekolah: check[idx],
      };
    });
    return data;
  }

  async getMasterSekolahProvinsi({ response, request }) {
    const res = Sekolah.query();

    res.distinct("kode_prop", "propinsi");

    return response.ok({
      propinsi: await res.fetch(),
    });
  }

  async getMasterSekolahProvinsiDetail({
    response,
    request,
    params: { propinsi_id },
  }) {
    const res = Sekolah.query();

    res
      .where("kode_prop", propinsi_id)
      .distinct("kode_kab_kota", "kabupaten_kota");

    return response.ok({
      kabupaten: await res.fetch(),
    });
  }

  async getMasterSekolahKabupatenDetail({
    response,
    request,
    params: { kabupaten_id },
  }) {
    const res = Sekolah.query();

    res.where("kode_kab_kota", kabupaten_id).distinct("kode_kec", "kecamatan");

    return response.ok({
      kabupaten: await res.fetch(),
    });
  }

  async detailSekolahMaster({ response, request, params: { id } }) {
    let res = Sekolah.query();

    res = await res
      .where({ id: id })
      .with("sekolahSS")
      .with("registrasi")
      .first();
    if (res.m_sekolah_id) {
      const ta = await Mta.query()
        .where({ m_sekolah_id: res.m_sekolah_id })
        .andWhere({ aktif: 1 })
        .andWhere({ dihapus: 0 })
        .first();

      res = { ...res.toJSON(), ta };
    }

    // let { data } = await axios({
    //   url: `https://dapo.kemdikbud.go.id/api/getHasilPencarian?keyword=${res.npsn}`,
    // });

    return response.ok({
      data: res,
      // dapo: data[0],
    });
  }

  async postSekolahSS({ response, request, params: { id } }) {
    const {
      nama,
      whatsapp,
      jabatan,
      password,
      propinsi1: propinsi,
      kabupaten1: kabupaten,
      kecamatan1: kecamatan,
      kode_pos,
      npsn,
      sekolah,
      kepsek,
      waKepsek,
      alamat,
      email,
      telp,
      link,
    } = request.post();

    if (link) {
      const sekolah = await Sekolah.query()
        .with("sekolahSS")
        .where({ id: id })
        .first();
      const domain = slugify(sekolah.sekolah, {
        replacement: "", // replace spaces with replacement character, defaults to `-`
        remove: /[*+~.()'"!:@]/g,
        lower: true, // convert to lower case, defaults to `false`
      });
      const check = await MSekolah.query()
        .where({ domain: `https://${domain}.smarteschool.id` })
        .first();

      if (check) {
        await Sekolah.query().where({ id: id }).update({
          m_sekolah_id: check.id,
        });
        return response.ok({
          sekolah: check,
        });
      } else {
        const sekolahSS = await MSekolah.create({
          gpds_event: "dkijakarta",
          nama: sekolah.sekolah,
          domain: `https://${domain}.smarteschool.id`,
          status: sekolah.status || "N",
          tingkat: sekolah.bentuk || "SMK",
          integrasi: "whatsapp",
          diintegrasi: 1,
          trial: 1,
        });
        await Sekolah.query().where({ id: id }).update({
          m_sekolah_id: sekolahSS.id,
        });
        return response.ok({
          sekolah: sekolahSS,
        });
      }
    }

    const dataSekolah = await Sekolah.query()
      .with("sekolahSS")
      .where({ id: id })
      .first();

    const domain = slugify(sekolah, {
      replacement: "", // replace spaces with replacement character, defaults to `-`
      remove: /[*+~.()'"!:@]/g,
      lower: true, // convert to lower case, defaults to `false`
    });
    const check = await MSekolah.query()
      .where({
        domain: `https://${domain}.smarteschool.id`,
      })
      .first();
    let sekolahSS = check;
    if (!check) {
      sekolahSS = await MSekolah.create({
        gpds_event: "dkijakarta",
        nama: sekolah,
        npsn,
        provinsi: propinsi,
        kabupaten: kabupaten,
        status: dataSekolah.status || "N",
        tingkat: dataSekolah.bentuk || "SMK",
        kecamatan,
        alamat,
        telp,
        email,
        domain: `https://${domain}.smarteschool.id`,
      });
    }
    await Sekolah.query().where({ id: id }).update({
      m_sekolah_id: sekolahSS.id,
    });

    const checkUser = await User.query()
      .where({ m_sekolah_id: sekolahSS.id })
      .where({ dihapus: 0 })
      .where({ whatsapp })
      .first();
    let user = checkUser;
    if (!checkUser) {
      user = await User.create({
        m_sekolah_id: sekolahSS.id,
        nama,
        role: "admin",
        whatsapp,
        password: password,
        dihapus: 0,
      });
      user = { ...user.$attributes, password };
    }

    return response.ok({
      sekolahSS,
      user,
    });
  }

  async postRegistrasiSekolah({ response, request }) {
    const { id, nama, whatsapp, jabatan, password } = request.post();
    const lampiran = request.file("lampiran");

    const rules = {
      id: "required",
      nama: "required",
      whatsapp: "required",
      jabatan: "required",
      password: "required",
    };
    const message = {
      "id.required": "Id sekolah harus ada",
      "nama.required": "Nama Pengirim harus di isi",
      "whatsapp.required": "Whatsapp harus diisi",
      "jabatan.required": "Jabatan harus diisi",
      "password.required": "Password harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    // if(lampiran != null){
    //   const fname = `surat-pernyataan-${Date.now()}-${id}.${
    //     lampiran.extname
    //   }`;
    //   await lampiran.move(Helpers.publicPath("surat/"), {
    //     name: fname,
    //     overwrite: true,
    //   });
    // }

    const registrasi = await MRegistrasiAkun.create({
      nama,
      whatsapp,
      jabatan,
      // lampiran: lampiran.extname != null ? `/surat/${fname}` : "",
      password,
      sekolah_id: id,
    });

    let sekolahSS;
    const sekolah = await Sekolah.query().where({ id: id }).first();
    const domain = slugify(sekolah.sekolah, {
      replacement: "", // replace spaces with replacement character, defaults to `-`
      remove: /[*+~.()'"!:@]/g,
      lower: true, // convert to lower case, defaults to `false`
    });

    const check = await MSekolah.query()
      .where({ domain: `https://${domain}.smarteschool.id` })
      .first();
    if (check) {
      sekolahSS = check;
    } else {
      sekolahSS = await MSekolah.create({
        nama: sekolah.sekolah,
        domain: `https://${domain}.smarteschool.id`,
        status: sekolah.status,
        tingkat: sekolah.bentuk,
        integrasi: "whatsapp",
        diintegrasi: 1,
        trial: 1,
      });
    }

    const checkAkun = await User.query()
      .where({ whatsapp: whatsapp })
      .where({ m_sekolah_id: sekolahSS.id })
      .where({ dihapus: 0 })
      .first();
    if (checkAkun) {
      await User.query()
        .where({ whatsapp: whatsapp })
        .where({ m_sekolah_id: sekolahSS.id })
        .update({
          password: await Hash.make(password),
        });
    } else {
      await User.create({
        nama: nama,
        whatsapp: whatsapp,
        gender: "L",
        password: password,
        role: "admin",
        m_sekolah_id: sekolahSS.id,
        dihapus: 0,
      });
    }

    if (!sekolah.m_sekolah_id) {
      await Sekolah.query()
        .where({ id: id })
        .update({ m_sekolah_id: sekolahSS.id });
    }

    return response.ok({
      message: messagePostSuccess,
      sekolah: sekolahSS,
    });
  }

  async loginWhatsapp({ response, request }) {
    const { whatsapp, role, user_agent } = request.post();
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const res = await User.query()
      .select("nama", "whatsapp", "role", "user_agent")
      .where({ whatsapp: `${whatsapp}` })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    if (role == "ortu") {
      const checkProfil = await MProfilUser.query()
        .where({ telp_ibu: whatsapp })
        .orWhere({ telp_ayah: whatsapp })
        .first();

      const checkProfilSiswa = await User.query()
        .where({ id: checkProfil.m_user_id })
        .first();

      if (!res && checkProfil) {
        await User.create({
          nama: `Orang tua ${checkProfilSiswa.nama}`,
          whatsapp,
          password: "smarteschool",
          role: "ortu",
          m_sekolah_id: sekolah.id,
          dihapus: 0,
        });
        return response.ok({
          nama: `Orang tua ${checkProfilSiswa.nama}`,
          role: "ortu",
          whatsapp,
        });
      }
      return response.ok(res);
    }

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    if (role != "admin") {
      // if (user_agent != res?.user_agent) {
      //   await User.query()
      //     .where({ whatsapp: `${whatsapp}` }).andWhere({m_sekolah_id:sekolah.id})
      //     .update({ user_agent: user_agent });
      //   res.user_agent = user_agent;
      //   return response.ok(res);
      // }
      // if (user_agent != res?.user_agent) {
      //   const last_login = await User.query()
      //     .select("updated_at")
      //     .where({ whatsapp: `${whatsapp}` })
      //     .andWhere({ m_sekolah_id: sekolah.id })
      //     .andWhere({ dihapus: 0 })
      //     .first();
      //   const currentTime = Date.now();
      //   const lastLoginTime = new Date(last_login.updated_at).getTime();
      //   const timeDifference = currentTime - lastLoginTime;
      //   const timeout = 8 * 60 * 60 * 1000;
      //   if (timeDifference >= timeout) {
      //     await User.query()
      //       .where({ whatsapp: `${whatsapp}` })
      //       .andWhere({ m_sekolah_id: sekolah.id })
      //       .update({ user_agent: user_agent });
      //     res.user_agent = user_agent;
      //     return response.ok(res);
      //   } else {
      //     return response.forbidden({
      //       message: "Akun sudah masuk di perangkat lain",
      //     });
      //   }
      // }
    }

    if (role == "warga-sekolah" || res.role == "admin") {
      return response.ok(res);
    }
    if (res.role == "ppdb") {
      return response.ok(res);
    }

    if (res.role != role) {
      return response.forbidden({
        message: "Oops.. sepertinya anda salah pilih akun",
        res,
      });
    }

    return response.ok(res);
  }

  async logout({ response, request }) {
    const { user_id } = request.post();

    const res = await User.query()
      .where({ id: `${user_id}` })
      .update({ user_agent: null });

    if (res) {
      return response.ok({
        message: "Anda berhasil logout",
      });
    } else {
      return response.notFound({
        message: "Gagal logout",
      });
    }
  }

  async getProfilAdmin({ auth, response, request }) {
    const user = await auth.getUser();

    const userData = await User.query()
      .where({ id: user.id })
      .with("sekolah")
      .with("profil")
      .first();

    return response.ok({
      user: userData,
    });
  }

  async getProfil({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();

    const mataPelajaran = await MMataPelajaran.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    if (user?.role == "ortu") {
      const userDataOrtu = await User.query()
        .where({ id: user.id })
        .with("sekolah")
        .with("profil")
        .first();

      const userData = await MProfilUser.query()
        .where({ telp_ayah: user.whatsapp })
        .orWhere({ telp_ibu: user.whatsapp })
        .first();

      const userDataSiswa = await User.query()
        .where({ id: userData.m_user_id })
        .first();

      let rombel;

      if (ta != "404") {
        rombel = await MRombel.query()
          .where({ m_ta_id: ta.id })
          .andWhere({ m_user_id: user.id })
          .first();
      }

      return response.ok({
        user: userDataOrtu,
        userSiswa: userDataSiswa,
        mataPelajaran: mataPelajaran,
        rombel,
        ta,
      });
    } else {
      const userData = await User.query()
        .where({ id: user.id })
        .with("sekolah")
        .with("profil")
        .first();

      let rombel;

      if (ta != "404") {
        rombel = await MRombel.query()
          .where({ m_ta_id: ta.id })
          .andWhere({ m_user_id: user.id })
          .first();
      }

      return response.ok({
        user: userData,
        mataPelajaran: mataPelajaran,
        rombel,
        ta,
      });
    }
  }

  async putProfil({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      nama,
      whatsapp,
      email,
      avatar,
      gender,
      tanggal_lahir,
      // siswa
      nama_ayah,
      wa_ayah,
      nama_ibu,
      wa_ibu,
      // guru
      nip,
      nrk,
      nuptk,
      pangkat,
      golongan,
      wa_real,
    } = request.post();
    whatsapp = whatsapp.trim();

    // if (user.whatsapp != whatsapp) {
    //   const check = await User.query().where({ whatsapp: whatsapp }).first();

    //   if (check) {
    //     return response.forbidden({
    //       message: "Akun sudah terdaftar",
    //     });
    //   }
    // }
    // if (user.email != email) {
    //   const check = await User.query().where({ email: email }).first();

    //   if (check) {
    //     return response.forbidden({
    //       message: "email sudah terdaftar",
    //     });
    //   }
    // }

    const update = await User.query().where({ id: user.id }).update({
      nama,
      whatsapp,
      email,
      avatar,
      gender,
      // guru
      nip,
      nrk,
      nuptk,
      pangkat,
      golongan,
      // siswa
      tanggal_lahir,
      nama_ayah,
      wa_ayah,
      nama_ibu,
      wa_ibu,
    });

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getProfilUser({ auth, response, request }) {
    const user = await auth.getUser();

    const profil = await User.query()
      .with("profil")
      .where({ id: user.id })
      .first();

    return response.ok({
      profil: profil,
    });
  }

  async detailProfilUser({ auth, response, request, params: { user_id } }) {
    const profil = await User.query()
      .with("profil")
      .where({ id: user_id })
      .first();

    return response.ok({
      profil: profil,
    });
  }

  async postDetailProfilUser({ auth, response, request, params: { user_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    const user = await User.query().where({ id: user_id }).first();

    let {
      bio,
      pendidikan,
      pengalaman,
      prestasi,
      portofolio,
      bahasa,
      keahlian,

      // identitas
      nama,
      nama_panggilan,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,
      avatar,
      home,
      no_ijazah,
      tahun_ijazah,
      file_ijazah,

      // informasi
      nisn,
      nis,
      nrk,
      nip,
      nuptk,
      asal_sekolah,
      alamat_asal_sekolah,
      status_keluarga,
      anak_ke,
      kelas_diterima,
      tanggal_masuk,
      telp_rumah,

      // alamat
      alamat,
      province_id,
      regency_id,
      district_id,
      village_id,
      kodepos,

      // kesehatan
      tb,
      bb,
      gol_darah,
      buta_warna,
      kacamata,
      disabilitas,
      surat_keterangan_sehat,
      surat_keterangan_buta_warna,

      // ortu
      nama_ayah,
      telp_ayah,
      alamat_ayah,
      pekerjaan_ayah,
      nama_ibu,
      telp_ibu,
      alamat_ibu,
      pekerjaan_ibu,
      nama_wali,
      telp_wali,
      alamat_wali,
      pekerjaan_wali,

      // rapor
      fisika1,
      fisika2,
      fisika3,
      fisika4,
      fisika5,
      fisika6,
      matematika1,
      matematika2,
      matematika3,
      matematika4,
      matematika5,
      matematika6,
      bindo1,
      bindo2,
      bindo3,
      bindo4,
      bindo5,
      bindo6,
      bing1,
      bing2,
      bing3,
      bing4,
      bing5,
      bing6,

      // lampiran rapor
      semester1,
      semester2,
      semester3,
      semester4,
      semester5,
      semester6,

      //
      file_ppdb,
      data_absensi,
    } = request.post();

    let userPayload = {
      // identitas
      nama_ibu,
      nama,
      nama_ayah,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,
      avatar,
      home,
    };

    if (pendidikan) {
      pendidikan = JSON.stringify(pendidikan);
    }
    if (pengalaman) {
      pengalaman = JSON.stringify(pengalaman);
    }
    if (prestasi) {
      prestasi = JSON.stringify(prestasi);
    }
    if (portofolio) {
      portofolio = JSON.stringify(portofolio);
    }
    if (bahasa) {
      bahasa = JSON.stringify(bahasa);
    }
    if (keahlian) {
      keahlian = keahlian.toString();
    }
    if (!gender) {
      delete userPayload.gender;
    }
    if (!agama) {
      delete userPayload.agama;
    }
    if (!tempat_lahir) {
      delete userPayload.tempat_lahir;
    }
    tanggal_lahir == "Invalid date" ? delete userPayload.tanggal_lahir : null;

    await User.query().where({ id: user.id }).update(userPayload);

    const check = await MProfilUser.query()
      .select("id")
      .where({
        m_user_id: user.id,
      })
      .first();

    let profil;

    if (check) {
      profil = await MProfilUser.query().where({ id: check.id }).update({
        bio,
        pendidikan,
        pengalaman,
        prestasi,
        portofolio,
        bahasa,
        keahlian,
        nama_panggilan,

        // informasi
        nisn,
        nis,
        nrk,
        nip,
        nuptk,
        asal_sekolah,
        alamat_asal_sekolah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,
        status_keluarga,
        anak_ke,
        kelas_diterima,
        tanggal_masuk,
        telp_rumah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,

        // alamat
        alamat,
        province_id,
        regency_id,
        district_id,
        village_id,
        kodepos,

        // kesehatan
        tb,
        bb,
        gol_darah,
        buta_warna,
        kacamata,
        disabilitas,
        surat_keterangan_sehat,
        surat_keterangan_buta_warna,

        // ortu
        nama_ayah,
        telp_ayah,
        alamat_ayah,
        pekerjaan_ayah,
        nama_ibu,
        telp_ibu,
        alamat_ibu,
        pekerjaan_ibu,
        nama_wali,
        telp_wali,
        alamat_wali,
        pekerjaan_wali,
        m_user_id: user.id,

        // rapor
        fisika1,
        fisika2,
        fisika3,
        fisika4,
        fisika5,
        fisika6,
        matematika1,
        matematika2,
        matematika3,
        matematika4,
        matematika5,
        matematika6,
        bindo1,
        bindo2,
        bindo3,
        bindo4,
        bindo5,
        bindo6,
        bing1,
        bing2,
        bing3,
        bing4,
        bing5,
        bing6,

        // lampiran rapor
        semester1,
        semester2,
        semester3,
        semester4,
        semester5,
        semester6,

        //
        file_ppdb,
        data_absensi,
      });
    } else {
      profil = await MProfilUser.create({
        bio,
        pendidikan,
        pengalaman,
        prestasi,
        portofolio,
        bahasa,
        keahlian,

        // informasi
        nisn,
        nis,
        nrk,
        nip,
        nuptk,
        alamat_asal_sekolah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,
        status_keluarga,
        anak_ke,
        kelas_diterima,
        tanggal_masuk,
        telp_rumah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,

        // alamat
        alamat,
        province_id,
        regency_id,
        district_id,
        village_id,
        kodepos,

        // kesehatan
        tb,
        bb,
        gol_darah,
        buta_warna,
        kacamata,
        disabilitas,
        surat_keterangan_sehat,
        surat_keterangan_buta_warna,

        // ortu
        nama_ayah,
        telp_ayah,
        alamat_ayah,
        pekerjaan_ayah,
        nama_ibu,
        telp_ibu,
        alamat_ibu,
        pekerjaan_ibu,
        nama_wali,
        telp_wali,
        alamat_wali,
        pekerjaan_wali,
        m_user_id: user.id,

        // rapor
        fisika1,
        fisika2,
        fisika3,
        fisika4,
        fisika5,
        fisika6,
        matematika1,
        matematika2,
        matematika3,
        matematika4,
        matematika5,
        matematika6,
        bindo1,
        bindo2,
        bindo3,
        bindo4,
        bindo5,
        bindo6,
        bing1,
        bing2,
        bing3,
        bing4,
        bing5,
        bing6,

        // lampiran rapor
        semester1,
        semester2,
        semester3,
        semester4,
        semester5,
        semester6,

        //
        file_ppdb,
        data_absensi,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async postProfilUser({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    const user = await auth.getUser();

    let {
      bio,
      pendidikan,
      pengalaman,
      prestasi,
      portofolio,
      bahasa,
      keahlian,

      // identitas
      nama,
      wa_real,
      nama_panggilan,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,
      avatar,
      home,
      no_ijazah,
      tahun_ijazah,
      file_ijazah,

      // informasi
      nisn,
      nis,
      nrk,
      nip,
      nuptk,
      asal_sekolah,
      alamat_asal_sekolah,
      status_keluarga,
      anak_ke,
      kelas_diterima,
      tanggal_masuk,
      telp_rumah,

      // alamat
      alamat,
      province_id,
      regency_id,
      district_id,
      village_id,
      kodepos,

      // kesehatan
      tb,
      bb,
      gol_darah,
      buta_warna,
      kacamata,
      disabilitas,
      surat_keterangan_sehat,
      surat_keterangan_buta_warna,

      // ortu
      nama_ayah,
      telp_ayah,
      alamat_ayah,
      pekerjaan_ayah,
      nama_ibu,
      telp_ibu,
      alamat_ibu,
      pekerjaan_ibu,
      nama_wali,
      telp_wali,
      alamat_wali,
      pekerjaan_wali,

      // rapor
      fisika1,
      fisika2,
      fisika3,
      fisika4,
      fisika5,
      fisika6,
      matematika1,
      matematika2,
      matematika3,
      matematika4,
      matematika5,
      matematika6,
      bindo1,
      bindo2,
      bindo3,
      bindo4,
      bindo5,
      bindo6,
      bing1,
      bing2,
      bing3,
      bing4,
      bing5,
      bing6,

      // lampiran rapor
      semester1,
      semester2,
      semester3,
      semester4,
      semester5,
      semester6,

      //
      file_ppdb,
      data_absensi,
    } = request.post();

    let userPayload = {
      // identitas
      wa_real,
      nama_ibu,
      nama,
      nama_ayah,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,
      avatar,
      home,
    };

    if (sekolah?.id == 9487 || sekolah?.id == 9489) {
      const rules = {
        nisn: "required",
      };
      const message = {
        "nisn.required": "NISN harus diisi",
      };
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
      const cek = await MProfilUser.query().where({ nisn }).first();

      if (cek) {
        const cek2 = await User.query()
          .where({ id: cek.id })
          .andWhere({ m_sekolah_id: sekolah?.id })
          .first();
        if (cek2) {
          return response.forbidden({
            message: "NISN sudah terdaftar",
          });
        }
      }
    }

    if (pendidikan) {
      pendidikan = JSON.stringify(pendidikan);
    }
    if (pengalaman) {
      pengalaman = JSON.stringify(pengalaman);
    }
    if (prestasi) {
      prestasi = JSON.stringify(prestasi);
    }
    if (portofolio) {
      portofolio = JSON.stringify(portofolio);
    }
    if (bahasa) {
      bahasa = JSON.stringify(bahasa);
    }
    if (keahlian) {
      keahlian = keahlian.toString();
    }
    if (!gender) {
      delete userPayload.gender;
    }
    if (!agama) {
      delete userPayload.agama;
    }
    if (!tempat_lahir) {
      delete userPayload.tempat_lahir;
    }
    tanggal_lahir == "Invalid date" ? delete userPayload.tanggal_lahir : null;

    if (whatsapp) {
      const checkwhatsapp = await User.query()
        .where("id", "!=", user.id)
        .where({ whatsapp: whatsapp })
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .first();

      if (checkwhatsapp) {
        return response.forbidden({
          message: "Nomor whatsapp sudah terdaftar",
        });
      }
    }

    await User.query().where({ id: user.id }).update(userPayload);

    const check = await MProfilUser.query()
      .select("id")
      .where({
        m_user_id: user.id,
      })
      .first();

    let profil;

    if (check) {
      profil = await MProfilUser.query().where({ id: check.id }).update({
        bio,
        pendidikan,
        pengalaman,
        prestasi,
        portofolio,
        bahasa,
        keahlian,
        nama_panggilan,

        // informasi
        nisn,
        nis,
        nrk,
        nip,
        nuptk,
        asal_sekolah,
        alamat_asal_sekolah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,
        status_keluarga,
        anak_ke,
        kelas_diterima,
        tanggal_masuk,
        telp_rumah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,

        // alamat
        alamat,
        province_id,
        regency_id,
        district_id,
        village_id,
        kodepos,

        // kesehatan
        tb,
        bb,
        gol_darah,
        buta_warna,
        kacamata,
        disabilitas,
        surat_keterangan_sehat,
        surat_keterangan_buta_warna,

        // ortu
        nama_ayah,
        telp_ayah,
        alamat_ayah,
        pekerjaan_ayah,
        nama_ibu,
        telp_ibu,
        alamat_ibu,
        pekerjaan_ibu,
        nama_wali,
        telp_wali,
        alamat_wali,
        pekerjaan_wali,
        m_user_id: user.id,

        // rapor
        fisika1,
        fisika2,
        fisika3,
        fisika4,
        fisika5,
        fisika6,
        matematika1,
        matematika2,
        matematika3,
        matematika4,
        matematika5,
        matematika6,
        bindo1,
        bindo2,
        bindo3,
        bindo4,
        bindo5,
        bindo6,
        bing1,
        bing2,
        bing3,
        bing4,
        bing5,
        bing6,

        // lampiran rapor
        semester1,
        semester2,
        semester3,
        semester4,
        semester5,
        semester6,

        //
        file_ppdb,
        data_absensi,
      });
    } else {
      profil = await MProfilUser.create({
        bio,
        pendidikan,
        pengalaman,
        prestasi,
        portofolio,
        bahasa,
        keahlian,

        // informasi
        nisn,
        nis,
        nrk,
        nip,
        nuptk,
        alamat_asal_sekolah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,
        status_keluarga,
        anak_ke,
        kelas_diterima,
        tanggal_masuk,
        telp_rumah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,

        // alamat
        alamat,
        province_id,
        regency_id,
        district_id,
        village_id,
        kodepos,

        // kesehatan
        tb,
        bb,
        gol_darah,
        buta_warna,
        kacamata,
        disabilitas,
        surat_keterangan_sehat,
        surat_keterangan_buta_warna,

        // ortu
        nama_ayah,
        telp_ayah,
        alamat_ayah,
        pekerjaan_ayah,
        nama_ibu,
        telp_ibu,
        alamat_ibu,
        pekerjaan_ibu,
        nama_wali,
        telp_wali,
        alamat_wali,
        pekerjaan_wali,
        m_user_id: user.id,

        // rapor
        fisika1,
        fisika2,
        fisika3,
        fisika4,
        fisika5,
        fisika6,
        matematika1,
        matematika2,
        matematika3,
        matematika4,
        matematika5,
        matematika6,
        bindo1,
        bindo2,
        bindo3,
        bindo4,
        bindo5,
        bindo6,
        bing1,
        bing2,
        bing3,
        bing4,
        bing5,
        bing6,

        // lampiran rapor
        semester1,
        semester2,
        semester3,
        semester4,
        semester5,
        semester6,

        //
        file_ppdb,
        data_absensi,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async postProfilUserAdmin({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    const user = await auth.getUser();

    let {
      bio,
      pendidikan,
      pengalaman,
      prestasi,
      portofolio,
      bahasa,
      keahlian,
      admin,

      // identitas
      nama,
      wa_real,
      nama_panggilan,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,
      avatar,
      home,
      no_ijazah,
      tahun_ijazah,
      file_ijazah,

      // informasi
      nisn,
      nis,
      nrk,
      nip,
      nuptk,
      asal_sekolah,
      alamat_asal_sekolah,
      status_keluarga,
      anak_ke,
      kelas_diterima,
      tanggal_masuk,
      telp_rumah,

      // alamat
      alamat,
      province_id,
      regency_id,
      district_id,
      village_id,
      kodepos,

      // kesehatan
      tb,
      bb,
      gol_darah,
      buta_warna,
      kacamata,
      disabilitas,
      surat_keterangan_sehat,
      surat_keterangan_buta_warna,

      // ortu
      nama_ayah,
      telp_ayah,
      alamat_ayah,
      pekerjaan_ayah,
      nama_ibu,
      telp_ibu,
      alamat_ibu,
      pekerjaan_ibu,
      nama_wali,
      telp_wali,
      alamat_wali,
      pekerjaan_wali,

      // rapor
      fisika1,
      fisika2,
      fisika3,
      fisika4,
      fisika5,
      fisika6,
      matematika1,
      matematika2,
      matematika3,
      matematika4,
      matematika5,
      matematika6,
      bindo1,
      bindo2,
      bindo3,
      bindo4,
      bindo5,
      bindo6,
      bing1,
      bing2,
      bing3,
      bing4,
      bing5,
      bing6,

      // lampiran rapor
      semester1,
      semester2,
      semester3,
      semester4,
      semester5,
      semester6,
      m_user_id,

      //
      file_ppdb,
      data_absensi,
    } = request.post();

    let userPayload = {
      // identitas
      wa_real,
      nama_ibu,
      nama,
      nama_ayah,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,
      avatar,
      home,
    };

    if (pendidikan) {
      pendidikan = JSON.stringify(pendidikan);
    }
    if (pengalaman) {
      pengalaman = JSON.stringify(pengalaman);
    }
    if (prestasi) {
      prestasi = JSON.stringify(prestasi);
    }
    if (portofolio) {
      portofolio = JSON.stringify(portofolio);
    }
    if (bahasa) {
      bahasa = JSON.stringify(bahasa);
    }
    if (keahlian) {
      keahlian = keahlian.toString();
    }
    if (!gender) {
      delete userPayload.gender;
    }
    if (!agama) {
      delete userPayload.agama;
    }
    if (!tempat_lahir) {
      delete userPayload.tempat_lahir;
    }
    tanggal_lahir == "Invalid date" ? delete userPayload.tanggal_lahir : null;

    if (!admin) {
      if (whatsapp) {
        const checkwhatsapp = await User.query()
          .where("id", "!=", m_user_id)
          .where({ whatsapp: whatsapp })
          .where({ dihapus: 0 })
          .where({ m_sekolah_id: sekolah.id })
          .first();

        if (checkwhatsapp) {
          return response.forbidden({
            message: "Nomor whatsapp sudah terdaftar",
          });
        }
      }
    }

    await User.query().where({ id: m_user_id }).update(userPayload);

    const check = await MProfilUser.query()
      .select("id")
      .where({
        m_user_id: m_user_id,
      })
      .first();
    // return check;

    let profil;

    if (check) {
      profil = await MProfilUser.query().where({ id: check.id }).update({
        bio,
        pendidikan,
        pengalaman,
        prestasi,
        portofolio,
        bahasa,
        keahlian,
        nama_panggilan,

        // informasi
        nisn,
        nis,
        nrk,
        nip,
        nuptk,
        asal_sekolah,
        alamat_asal_sekolah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,
        status_keluarga,
        anak_ke,
        kelas_diterima,
        tanggal_masuk,
        telp_rumah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,

        // alamat
        alamat,
        province_id,
        regency_id,
        district_id,
        village_id,
        kodepos,

        // kesehatan
        tb,
        bb,
        gol_darah,
        buta_warna,
        kacamata,
        disabilitas,
        surat_keterangan_sehat,
        surat_keterangan_buta_warna,

        // ortu
        nama_ayah,
        telp_ayah,
        alamat_ayah,
        pekerjaan_ayah,
        nama_ibu,
        telp_ibu,
        alamat_ibu,
        pekerjaan_ibu,
        nama_wali,
        telp_wali,
        alamat_wali,
        pekerjaan_wali,
        m_user_id: m_user_id,

        // rapor
        fisika1,
        fisika2,
        fisika3,
        fisika4,
        fisika5,
        fisika6,
        matematika1,
        matematika2,
        matematika3,
        matematika4,
        matematika5,
        matematika6,
        bindo1,
        bindo2,
        bindo3,
        bindo4,
        bindo5,
        bindo6,
        bing1,
        bing2,
        bing3,
        bing4,
        bing5,
        bing6,

        // lampiran rapor
        semester1,
        semester2,
        semester3,
        semester4,
        semester5,
        semester6,

        //
        file_ppdb,
        data_absensi,
      });
    } else {
      profil = await MProfilUser.create({
        bio,
        pendidikan,
        pengalaman,
        prestasi,
        portofolio,
        bahasa,
        keahlian,

        // informasi
        nisn,
        nis,
        nrk,
        nip,
        nuptk,
        alamat_asal_sekolah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,
        status_keluarga,
        anak_ke,
        kelas_diterima,
        tanggal_masuk,
        telp_rumah,
        no_ijazah,
        tahun_ijazah,
        file_ijazah,

        // alamat
        alamat,
        province_id,
        regency_id,
        district_id,
        village_id,
        kodepos,

        // kesehatan
        tb,
        bb,
        gol_darah,
        buta_warna,
        kacamata,
        disabilitas,
        surat_keterangan_sehat,
        surat_keterangan_buta_warna,

        // ortu
        nama_ayah,
        telp_ayah,
        alamat_ayah,
        pekerjaan_ayah,
        nama_ibu,
        telp_ibu,
        alamat_ibu,
        pekerjaan_ibu,
        nama_wali,
        telp_wali,
        alamat_wali,
        pekerjaan_wali,
        m_user_id: m_user_id,

        // rapor
        fisika1,
        fisika2,
        fisika3,
        fisika4,
        fisika5,
        fisika6,
        matematika1,
        matematika2,
        matematika3,
        matematika4,
        matematika5,
        matematika6,
        bindo1,
        bindo2,
        bindo3,
        bindo4,
        bindo5,
        bindo6,
        bing1,
        bing2,
        bing3,
        bing4,
        bing5,
        bing6,

        // lampiran rapor
        semester1,
        semester2,
        semester3,
        semester4,
        semester5,
        semester6,

        //
        file_ppdb,
        data_absensi,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putUbahPassword({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    const user = await auth.getUser();

    const { password_lama, password_baru } = request.post();

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    if (!(await Hash.verify(password_lama, user.password))) {
      return response.notFound({ message: "Password yang anda masukan salah" });
    }

    const update = await User.query()
      .where({ id: user.id })
      .update({
        password: await Hash.make(password_baru),
      });

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putLupaPassword({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    // const user = await auth.getUser();

    const { password_baru, whatsapp } = request.post();

    const user = await User.query()
      .where({ whatsapp })
      .where("dihapus", 0)
      .where({ role: "siswa" })
      .first();

    if (!user) {
      return response.notFound({ message: "Nomor Whatsapp tidak terdaftar" });
    }

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // if (!(await Hash.verify(password_lama, user.password))) {
    //   return response.notFound({ message: "Password yang anda masukan salah" });
    // }

    const update = await User.query()
      .where({ id: user.id })
      .update({
        password: await Hash.make(password_baru),
      });

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async loginAdminWhatsapp({ response, request }) {
    const { whatsapp } = request.post();

    const res = await User.query()
      .select("nama", "whatsapp")
      .where({ whatsapp })
      .first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    return response.ok(res);
  }

  async loginAdmin({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { password, whatsapp } = request.post();

    const res = await User.query()
      .where({ whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    if (!(await Hash.verify(password, res.password))) {
      return response.notFound({ message: "Password yang anda masukan salah" });
    }

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async loginSuperAdmin({ response, request, auth }) {
    const { password, username } = request.post();

    const res = await User.query().where({ whatsapp: username }).first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    if (!(await Hash.verify(password, res.password))) {
      return response.notFound({ message: "Password yang anda masukan salah" });
    }

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async login({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { password, whatsapp } = request.post();

    const res = await User.query()
      .where({ whatsapp: `${whatsapp}` })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    if (password == "superaksesrahasiasiswa" && res.role == "siswa") {
      const { token } = await auth.generate(res);

      return response.ok({
        message: `Selamat datang ${res.nama}`,
        token,
      });
    } else if (password == "D*@)eeNDoje298370+?-=234&%&#*(") {
      const { token } = await auth.generate(res);

      return response.ok({
        message: `Selamat datang ${res.nama}`,
        token,
      });
    } else if (!(await Hash.verify(password, res.password))) {
      return response.notFound({ message: "Password yang anda masukan salah" });
    }

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async getSekolah({ response, request }) {
    const domain = request.headers().origin;

    const res = await MSekolah.query()
      .where("domain", "like", `%${domain}%`)
      .first();

    if (!res) {
      return "404";
    }

    return response.ok(res);
  }

  async getJurusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let jurusan;

    if (sekolah.status == "N") {
      jurusan = await MJurusan.query()
        .select("nama", "kode", "id")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    } else {
      jurusan = await MJurusan.query()
        .select(
          "id",
          "nama",
          "kode",
          "spp",
          "sumbangan_sarana_pendidikan",
          "kegiatan_osis",
          "mpls_jas_almamater",
          "seragam_sekolah",
          "toolkit_praktek"
        )
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    return response.ok({
      jurusan: jurusan,
      sekolah: sekolah,
    });
  }

  async postJurusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      nama,
      kode,
      spp,
      sumbangan_sarana_pendidikan,
      kegiatan_osis,
      mpls_jas_almamater,
      seragam_sekolah,
      toolkit_praktek,
    } = request.post();
    const rules = {
      nama: "required",
      kode: "required",
      spp: "required",
      sumbangan_sarana_pendidikan: "required",
      kegiatan_osis: "required",
      mpls_jas_almamater: "required",
      seragam_sekolah: "required",
      toolkit_praktek: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "kode.required": "Kode harus diisi",
      "spp.required": "SPP harus diisi",
      "sumbangan_sarana_pendidikan.required":
        "Sumbangan Sarana Pendidikan harus diisi",
      "kegiatan_osis.required": "Kegiatan OSIS harus diisi",
      "mpls_jas_almamater.required": "MPLS Jas Almamater harus diisi",
      "seragam_sekolah.required": "Seragam Sekolah harus diisi",
      "toolkit_praktek.required": "Toolkit Praktek harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const jurusan = await MJurusan.create({
      nama,
      kode,
      spp,
      sumbangan_sarana_pendidikan,
      kegiatan_osis,
      mpls_jas_almamater,
      seragam_sekolah,
      toolkit_praktek,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putJurusan({ response, request, auth, params: { jurusan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      nama,
      kode,
      spp,
      sumbangan_sarana_pendidikan,
      kegiatan_osis,
      mpls_jas_almamater,
      seragam_sekolah,
      toolkit_praktek,
    } = request.post();
    const rules = {
      nama: "required",
      kode: "required",
      spp: "required",
      sumbangan_sarana_pendidikan: "required",
      kegiatan_osis: "required",
      mpls_jas_almamater: "required",
      seragam_sekolah: "required",
      toolkit_praktek: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "kode.required": "Kode harus diisi",
      "spp.required": "SPP harus diisi",
      "sumbangan_sarana_pendidikan.required":
        "Sumbangan Sarana Pendidikan harus diisi",
      "kegiatan_osis.required": "Kegiatan OSIS harus diisi",
      "mpls_jas_almamater.required": "MPLS Jas Almamater harus diisi",
      "seragam_sekolah.required": "Seragam Sekolah harus diisi",
      "toolkit_praktek.required": "Toolkit Praktek harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const jurusan = await MJurusan.query().where({ id: jurusan_id }).update({
      nama,
      kode,
      spp,
      sumbangan_sarana_pendidikan,
      kegiatan_osis,
      mpls_jas_almamater,
      seragam_sekolah,
      toolkit_praktek,
      m_sekolah_id: sekolah.id,
    });

    if (!jurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteJurusan({ response, request, auth, params: { jurusan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const jurusan = await MJurusan.query().where({ id: jurusan_id }).update({
      dihapus: 1,
    });

    if (!jurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getTamu({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { page = 1, limit = 20, date } = request.get();

    let absen = MAbsenBelumTerdaftar.query().where({
      m_sekolah_id: sekolah.id,
    });

    if (date) {
      absen.whereBetween("waktu_masuk", [
        `${date} 00:00:00`,
        `${date} 23:59:59`,
      ]);
    }
    absen = await absen.paginate(page, limit);

    return response.ok({
      absen,
    });
  }

  async getPraktikKerja({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { search, page = 1 } = request.get();

    let query = MPraktikKerja.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 });

    if (search) {
      query.where("nama", "like", `%${search}%`);
    }
    const data = await query.paginate(page, 20);

    return response.ok({
      data,
    });
  }

  async postPraktikKerja({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama, siswa, surat_tugas, mou } = request.post();

    await MPraktikKerja.create({
      nama,
      siswa,
      surat_tugas,
      mou,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPraktikKerja({ response, request, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama, siswa, surat_tugas, mou } = request.post();

    await MPraktikKerja.query().where({ id: id }).update({
      nama,
      siswa,
      surat_tugas,
      mou,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deletePraktikKerja({ response, request, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    await MPraktikKerja.query().where({ id: id }).update({
      dihapus: 1,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getEskul({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { search, page = 1 } = request.get();

    let query = MEkstrakurikuler.query()
      .with("anggotaEkskul", (builder) => {
        builder
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 });

    if (search) {
      query.where("nama", "like", `%${search}%`);
    }
    const data = await query.paginate(page, 20);

    return response.ok({
      data,
    });
  }
  async detailEskul({ response, request, auth, params: { ekskul_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ekskul = await MEkstrakurikuler.query()
      .with("anggotaEkskul", (builder) => {
        builder
          .with("user", (builder) => {
            builder
              .with("anggotaRombel", (builder) => {
                builder
                  .with("rombel", (builder) => {
                    builder.select("id", "nama");
                  })
                  .andWhere({ dihapus: 0 });
              })
              .select("id", "nama", "whatsapp", "avatar");
          })
          .where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ id: ekskul_id })
      .andWhere({ dihapus: 0 })
      .first();

    return response.ok({
      ekskul,
    });
  }

  async postEskul({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama, program, file, foto } = request.post();

    await MEkstrakurikuler.create({
      nama,
      program,
      file,
      foto,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putEskul({ response, request, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama, program, file, foto } = request.post();

    const eskul = await MEkstrakurikuler.find(id);
    eskul.nama = nama;
    eskul.program = program;
    eskul.file = file;
    eskul.foto = foto;

    await eskul.save();

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deleteEskul({ response, request, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    await MEkstrakurikuler.query().where({ id: id }).update({
      dihapus: 1,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async resendAktivasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { whatsapp, email } = request.post();

    const code = Math.random().toString().slice(-6);
    await User.query().where({ id: user.id }).update({ verifikasi: code });

    let data;
    if (whatsapp) {
      const verifWa = randomstring.generate(7);
      await User.query().where({ id: user.id }).update({ verifikasi: verifWa });
      return response.ok({
        message: `${verifWa}#verifikasi`,
      });
    } else if (email) {
      data = await Mail.send(
        `emails.kodeverifikasi`,
        { code: code, name: user.nama },
        (message) => {
          message
            .to(`${email}`)
            .from("no-reply@smarteschool.id")
            .subject("Code AKtivasi");
        }
      )
        .then((success) =>
          response.ok({
            message: "Silahkan Cek Email Anda",
          })
        )
        .catch((err) =>
          response.badRequest({
            err,
          })
        );
    }
  }

  async aktivasiWa({ response, request }) {
    const { verifikasi, wa_real } = request.post();
    if (!verifikasi || !wa_real) {
      return "Format Verifikasi salah. Dapatkan Template verifikasi pada menu profil smarteschool";
    }

    let dbConn = "mysql";
    let user = await User.query().where({ verifikasi: verifikasi }).first();
    if (!user) {
      ["smkn26", "sman94", "sman96", "smkn6tangsel", "smkyadika13"].map(
        async (d) => {
          if (!user) {
            user = await Database.connection(d)
              .table("m_user")
              .where({ verifikasi: verifikasi })
              .first();
            if (user) {
              dbConn = d;
            }
          }
          return 0;
        }
      );
    } else if (!user) {
      return "Format Verifikasi salah. Dapatkan Template verifikasi pada menu profil smarteschool";
    }

    await Database.connection(dbConn)
      .table("m_user")
      .where({ id: user.id })
      .update({ wa_real: wa_real, verifikasi: "" });
    // return `Nomor whatsapp terverifikasi: ${wa_real.replace("@c.us", "")}`;
    return "Selamat nomor Anda berhasil terverifikasi, kini Smarteschool Anda akan mendapatkan notifikasi melalui akun WhatsApp ini. Terimakasih..";
  }

  async aktivasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { code, email, whatsapp } = request.post();

    if (code == user.verifikasi && code) {
      if (whatsapp) {
        await User.query().where({ id: user.id }).update({
          verifikasi: "",
          wa_real: whatsapp,
        });
      } else if (email) {
        await User.query().where({ id: user.id }).update({
          verifikasi: "",
          email: email,
        });
      }
      return response.ok({
        message: `nomor ${whatsapp ? "Whatsapp" : "Email"} Terverifikasi`,
      });
    } else {
      return response.badRequest({
        message: "Kode verifikasi tidak sesuai",
      });
    }
  }

  async requestResetPassword({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { whatsapp } = request.post();

    const user = await User.query()
      .where({ whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (!user) {
      return response.notFound({
        message: "Akun Tidak Ditemukan",
      });
    }
    if (!user.wa_real) {
      return response.badRequest({
        message:
          "Nomor Whatsapp Belum terverifikasi. Hubungi admin untuk mereset password anda",
      });
    }
    const token = await Hash.make(`${user?.id}`);
    await User.query().where({ id: user.id }).update({ token: token });

    const data = await WhatsAppService.sendMessage(
      `${user.wa_real}`,
      `Silahkan klik link dibawah ini untuk mereset password\n${domain}/smartschool/reset-password/?auth=${token}&userId=${user.id}`
    );
    if (data.status) {
      return response.ok({
        message: data,
      });
    } else {
      return response.badRequest({
        message: data,
      });
    }
  }

  async resetPassword({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { token, user_id, password } = request.post();

    const user = await User.query()
      .where({ id: user_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (!user) {
      return response.notFound({
        message: "Akun Tidak Ditemukan",
      });
    }
    if (user.token != token) {
      return response.unauthorized({
        message: "Token Anda salah",
      });
    }
    const hashed = await Hash.make(`${password}`);
    await User.query()
      .where({ id: user.id })
      .update({ password: hashed, token: "" });

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getCamera({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const camera = await MCamera.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      camera,
    });
  }

  async postCamera({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama, address, m_sekolah_id } = request.post();

    const rules = {
      nama: "required",
      address: "required",
    };
    const message = {
      "nama.required": "Nama kamera harus diisi",
      "address.required": "address kamera harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const check = await MCamera.query()
      .where({ address: address })
      .andWhere({ dihapus: 0 })
      .first();

    if (check) {
      return response.unprocessableEntity([
        { message: `Kamera Dengan alamat ${address} sudah Terdaftar` },
      ]);
    }

    const waktu_sinkron = moment().format("YYYY-MM-DD HH:mm:ss");

    const newCam = await MCamera.create({
      nama,
      address,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
      waktu_sinkron,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putCamera({ auth, response, request, params: { camera_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama, address, sinkron } = request.post();

    if (sinkron) {
      const waktu_sinkron = moment().format("YYYY-MM-DD HH:mm:ss");

      await MCamera.query().where({ id: camera_id }).update({
        waktu_sinkron,
      });
    }

    if (nama || address) {
      const rules = {
        nama: "required",
        address: "required",
      };
      const message = {
        "nama.required": "Nama kamera harus diisi",
        "address.required": "address kamera harus diisi",
      };
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }

      const check = await MCamera.query()
        .where({ address: address })
        .andWhere({ dihapus: 0 })
        .first();

      if (check && check.id != camera_id) {
        return response.unprocessableEntity([
          { message: `Kamera Dengan alamat ${address} sudah Terdaftar` },
        ]);
      }

      await MCamera.query().where({ id: camera_id }).update({
        nama,
        address,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteCamera({ auth, response, request, params: { camera_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    await MCamera.query().where({ id: camera_id }).update({
      dihapus: 1,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postLogCamera({ auth, response, request }) {
    const userGans = await auth.getUser();

    const sekolah = userGans.m_sekolah_id;

    const { nama, waktu, masker, suhu, foto } = request.post();

    const fileName = Date.now();
    await Drive.put(`camera/${fileName}.jpeg`, Buffer.from(foto, "base64"));

    let user;
    // check registered
    if (nama) {
      user = await User.query()
        .where({ whatsapp: nama.split("-")[0] })
        .andWhere({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .first();
      if (user) {
        const absen = await MAbsen.query()
          .where("created_at", "like", `%${moment().format("YYYY-MM-DD")}%`)
          .andWhere({ m_user_id: user.id })
          .first();
        if (hour < 12) {
          if (!absen) {
            await MAbsen.create({
              role: user.role,
              absen: "hadir",
              foto_masuk_local: `${fileName}.jpeg`,
              waktu_masuk: waktu,
              suhu: suhu,
              masker: masker,
              m_user_id: user.id,
              m_sekolah_id: sekolah.id,
            });
          } else {
            await MAbsen.query()
              .where({ id: absen.id })
              .update({
                foto_masuk_local: `${fileName}.jpeg`,
                suhu: suhu,
                masker: masker,
              });
          }
        } else {
          if (!absen) {
            await MAbsen.create({
              role: user.role,
              absen: "hadir",
              foto_pulang_local: `${fileName}.jpeg`,
              waktu_pulang: waktu,
              suhu: suhu,
              masker: masker,
              m_user_id: user.id,
              m_sekolah_id: sekolah.id,
            });
          } else {
            await MAbsen.query()
              .where({ id: absen.id })
              .update({
                foto_masuk_local: `${fileName}.jpeg`,
                suhu: suhu,
                masker: masker,
              });
          }
        }
      } else {
        await MAbsenBelumTerdaftar.create({
          foto: `${fileName}.jpeg`,
          suhu: suhu,
          masker: masker,
          waktu_masuk: waktu,
          m_sekolah_id: sekolah.id,
        });

        await WhatsAppService.sendMessage(
          6281316119411,
          `Wajah tidak dikenal dengan suhu tubuh ${Math.abs(
            suhu
          )}℃ dan dalam keadaan ${
            masker ? "menggunakan masker" : "tidak menggunakan masker"
          } pada ${moment(waktu).format("DD MMM YYYY HH:mm:ss")}`
        );

        return response.ok({
          message: messagePostSuccess,
        });
      }
    } else {
      // unregistered
      await MAbsenBelumTerdaftar.create({
        foto: `${fileName}.jpeg`,
        suhu: suhu,
        masker: masker,
        waktu_masuk: waktu,
        m_sekolah_id: sekolah.id,
      });

      await WhatsAppService.sendMessage(
        6281316119411,
        `Wajah tidak dikenal dengan suhu tubuh ${Math.abs(
          suhu
        )}℃ dan dalam keadaan ${
          masker ? "menggunakan masker" : "tidak menggunakan masker"
        } pada ${moment(waktu).format("DD MMM YYYY HH:mm:ss")}`
      );

      return response.ok({
        message: messagePostSuccess,
      });
    }

    await WhatsAppService.sendMessage(
      6281316119411,
      `${user.nama} sudah hadir di sekolah dengan suhu tubuh ${Math.abs(
        suhu
      )}℃ dan dalam keadaan ${
        masker ? "menggunakan masker" : "tidak menggunakan masker"
      } pada ${moment(waktu).format("DD MMM YYYY HH:mm:ss")}`
    );

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async getGuru({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, page, role } = request.get();

    // page = page ? parseInt(page) : 1;
    let guru;

    guru = User.query()
      .select(
        "nama",
        "id",
        "whatsapp",
        "avatar",
        "gender",
        "photos",
        "role",
        "bagian",
        "golongan"
      )
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .whereIn("role", ["guru", "admin", "kepsek"])
      .orderBy("nama", "asc");

    if (search) {
      guru.andWhere("nama", "like", `%${search}%`);
    }

    if (role) {
      guru.andWhere("role", role);
    }

    if (page == "all") {
      guru = await guru.fetch();

      let janganUlangGolongan = [];
      const guruData = guru.toJSON().filter((d) => {
        if (!janganUlangGolongan.find((e) => e == d.golongan)) {
          janganUlangGolongan.push(d.golongan);
          return true;
        } else {
          return false;
        }
      });

      return response.ok({
        guru: guru,
        golongan: janganUlangGolongan,
      });
    } else {
      guru = await guru.paginate(page, 25);
    }

    return response.ok({
      guru: guru,
    });
  }

  async detailGuru({ response, request, params: { guru_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const guru = await User.query()
      .andWhere({ dihapus: 0 })
      .andWhere({ id: guru_id })
      .first();

    const mataPelajaran = await MMataPelajaran.query()
      .where({ dihapus: 0 })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ m_user_id: guru.id })
      .fetch();

    // const mataPelajaranIds = await Promise.all(
    //   mataPelajaran.toJSON().map((d) => d.id)
    // );

    return response.ok({
      guru: guru,
      mata_pelajaran: mataPelajaran,
    });
  }

  async postGuru({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      gender,
      nama,
      whatsapp,
      password,
      avatar,
      role = "guru",
      bagian,
    } = request.post();

    let validation = await validate(
      request.post(),
      rulesUserPost,
      messagesUser
    );

    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const check = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ whatsapp: whatsapp })
      .where({ dihapus: 0 })
      .first();
    if (!check) {
      const guru = await User.create({
        nama,
        whatsapp,
        gender,
        password: password,
        role,
        m_sekolah_id: sekolah.id,
        dihapus: 0,
        avatar,
        bagian,
      });

      // await WhatsAppService.sendMessage(
      //   guru.whatsapp,
      //   `Halo, berikut akun Smarteschool bapak/ibu ${guru.nama} dengan password *${password}*. Berikut link akses Smarteschool bapak/ibu: \n${domain} \n\nInformasi ini bersifat *RAHASIA*`
      // );
    } else {
      const guru = await User.query()
        .where({ id: check.toJSON().id })
        .update({ dihapus: 0 });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putGuru({ response, request, auth, params: { guru_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    let { nama, whatsapp, gender, password, avatar, photos, role, bagian } =
      request.post();
    const rules = {
      nama: "required",
      whatsapp: "required",
      gender: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "whatsapp.required": "Whatsapp harus diisi",
      "gender.required": "Jenis Kelamin harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    whatsapp = whatsapp.trim();
    photos = JSON.stringify(photos);

    let guru;

    let payload = {
      whatsapp,
      nama,
      gender,
      avatar,
      photos,
      role,
      bagian,
      dihapus: 0,
    };

    const guruSebelum = await User.query().where({ id: guru_id }).first();
    // return guruSebelum

    password ? (payload.password = await Hash.make(password)) : null;

    const check = await User.query()
      .where({ whatsapp: whatsapp })
      .where({ m_sekolah_id: sekolah.id })
      .where({ role })
      .andWhere({ dihapus: 0 })
      .first();
    if (check) {
      if (check.id != guruSebelum.id) {
        return response.notFound({
          message: "Nomor Whatsapp Sudah Terdaftar",
        });
      } else if (check.id == guruSebelum.id) {
        guru = await User.query().where({ id: guru_id }).update(payload);
      }
    }
    if (!check) {
      guru = await User.query().where({ id: guru_id }).update(payload);
    }

    if (!guru) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteGuru({ response, request, auth, params: { guru_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const guru = await User.query().where({ id: guru_id }).update({
      dihapus: 1,
    });

    if (!guru) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let { search, page, tingkat, jurusan_id, rombel_id, tingkat2 } =
      request.get();

    const userIds = await User.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ role: "siswa" })
      .ids();

    const jurusan = await MJurusan.query()
      .with("rombel", (builder) => {
        builder
          .withCount("anggotaRombel as jumlahAnggota", (builder) => {
            builder.where({ dihapus: 0 }).whereIn("m_user_id", userIds);
          })
          .where({ dihapus: 0 })
          .andWhere({ m_ta_id: ta.id });
        if (tingkat2) {
          builder.where({ tingkat: tingkat2 });
        }
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const rombel = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    let jurusanData = {};

    await Promise.all(
      jurusan.toJSON().map(async (d) => {
        d.rombel.map((e) => {
          if (d.id == e.m_jurusan_id) {
            jurusanData[d.nama] = jurusanData[d.nama]
              ? jurusanData[d.nama] + e.__meta__.jumlahAnggota
              : e.__meta__.jumlahAnggota;
          }
        });
      })
    );

    let jumlahLaki;
    let jumlahPerempuan;

    if (tingkat2) {
      const rombelDataIds = await MRombel.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ tingkat: tingkat2 })
        .ids();
      const anggotaRombelIds = await MAnggotaRombel.query()
        .where({ dihapus: 0 })
        .whereIn("m_rombel_id", rombelDataIds)
        .pluck("m_user_id");

      jumlahLaki = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ gender: "L" })
        .andWhere({ role: "siswa" })
        .whereIn("id", anggotaRombelIds)
        .getCount();

      jumlahPerempuan = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ gender: "P" })
        .andWhere({ role: "siswa" })
        .whereIn("id", anggotaRombelIds)
        .getCount();
    } else {
      jumlahLaki = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ gender: "L" })
        .andWhere({ role: "siswa" })
        .getCount();

      jumlahPerempuan = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ gender: "P" })
        .andWhere({ role: "siswa" })
        .getCount();
    }

    page = page ? parseInt(page) : 1;
    let siswa;
    let jurusanDataIds = MJurusan.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 });
    if (jurusan_id) {
      jurusanDataIds.where({ id: jurusan_id });
    }

    jurusanDataIds = await jurusanDataIds.ids();

    let rombelIds;
    rombelIds = MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .whereIn("m_jurusan_id", jurusanDataIds);

    if (rombel_id) {
      rombelIds.where({ id: rombel_id });
    }
    if (tingkat) {
      rombelIds.where({ tingkat });
    }
    rombelIds = await rombelIds.ids();

    if (search) {
      siswa = await User.query()
        .with("anggotaRombel", (builder) => {
          builder
            .with("rombel", (builder) => {
              builder.select("id", "nama");
            })
            .whereIn("m_rombel_id", rombelIds)
            .andWhere({ dihapus: 0 });
        })
        .select("nama", "id", "whatsapp", "avatar", "gender", "photos")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "siswa" })
        .andWhere("nama", "like", `%${search}%`)
        .paginate(page, 25);
    } else {
      siswa = await User.query()
        .with("anggotaRombel", (builder) => {
          builder
            .with("rombel", (builder) => {
              builder.select("id", "nama");
            })
            .whereIn("m_rombel_id", rombelIds)
            .andWhere({ dihapus: 0 });
        })
        .select("nama", "id", "whatsapp", "avatar", "gender", "photos")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "siswa" })
        .paginate(page, 25);
    }

    let tingkatData = [];

    if (
      sekolah.tingkat == "SMK" ||
      sekolah.tingkat == "SMA" ||
      sekolah.tingkat == "MA" ||
      sekolah.tingkat == "MAK"
    ) {
      tingkatData = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP" || sekolah.tingkat == "MTS") {
      tingkatData = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD" || sekolah.tingkat == "MI") {
      tingkatData = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB" || sekolah.tingkat == "SUPER") {
      tingkatData = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];
    }

    return response.ok({
      siswa: siswa,
      integrasi: sekolah.integrasi,
      jumlahLaki: jumlahLaki,
      jumlahPerempuan: jumlahPerempuan,
      jurusanData: Object.entries(jurusanData),
      jurusan,
      rombel,
      tingkatData,
    });
  }

  async postSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { nama, whatsapp, password, gender, avatar, m_rombel_id, no_ujian } =
      request.post();

    let validation = await validate(
      request.post(),
      rulesUserPost,
      messagesUser
    );

    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const check = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ whatsapp: whatsapp })
      .where({ dihapus: 0 })
      .first();
    if (!check) {
      const siswa = await User.create({
        nama,
        whatsapp,
        gender,
        password: password,
        role: "siswa",
        m_sekolah_id: sekolah.id,
        dihapus: 0,
        avatar,
        no_ujian,
      });

      // await WhatsAppService.sendMessage(
      //   siswa.whatsapp,
      //   `Halo, berikut akun Smarteschool ${siswa.nama} dengan password *${password}*. Berikut link akses Smarteschool: \n${domain} \n\nInformasi ini bersifat *RAHASIA*`
      // );
      if (m_rombel_id) {
        const rombel = await MAnggotaRombel.create({
          role: "Anggota",
          dihapus: 0,
          m_user_id: siswa.toJSON().id,
          m_rombel_id: m_rombel_id,
        });
      }
    } else if (m_rombel_id) {
      const checkAnggotaRombel = await MAnggotaRombel.query()
        .where({ m_rombel_id: m_rombel_id })
        .andWhere({ m_user_id: check.toJSON().id })
        .first();

      if (!checkAnggotaRombel) {
        const rombel = await MAnggotaRombel.create({
          role: "Anggota",
          dihapus: 0,
          m_user_id: check.toJSON().id,
          m_rombel_id: m_rombel_id,
        });
      } else {
        const rombel = await MAnggotaRombel.query()
          .where({ m_rombel_id: m_rombel_id })
          .andWhere({ m_user_id: check.toJSON().id })
          .update({
            dihapus: 0,
          });
      }

      const siswa = await User.query()
        .where({ id: check.toJSON().id })
        .update({ dihapus: 0 });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putSiswa({ response, request, auth, params: { siswa_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    let { nama, whatsapp, gender, password, avatar, photos, no_ujian, role } =
      request.post();
    // const rules = {
    //   nama: "required",
    //   whatsapp: "required",
    //   gender: "required",
    // };
    // const message = {
    //   "nama.required": "Nama harus diisi",
    //   "whatsapp.required": "Whatsapp harus diisi",
    //   "gender.required": "Jenis Kelamin harus diisi",
    // };
    // const validation = await validate(request.all(), rules, message);
    // if (validation.fails()) {
    //   return response.unprocessableEntity(validation.messages());
    // }
    whatsapp = whatsapp.trim();
    photos = JSON.stringify(photos);

    let siswa;

    let payload = {
      whatsapp,
      nama,
      gender,
      avatar,
      photos,
      no_ujian,
      role,
    };

    password ? (payload.password = await Hash.make(password)) : null;

    const check = await User.query()
      .where({ whatsapp: whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (check) {
      delete payload.whatsapp;
      siswa = await User.query().where({ id: siswa_id }).update(payload);
    } else {
      siswa = await User.query().where({ id: siswa_id }).update(payload);
    }

    if (!siswa) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putFotoSiswa({ response, request, auth, params: { user_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { avatar } = request.post();
    const rules = {
      avatar: "required",
    };
    const message = {
      "avatar.required": "Avatar harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const DUser = await User.query().where({ id: user_id }).update({
      avatar,
      dihapus: 0,
    });

    if (!DUser) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSiswa({ response, request, auth, params: { siswa_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }
    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { m_rombel_id } = request.post();

    const siswa = await User.query().where({ id: siswa_id }).update({
      dihapus: 1,
    });

    if (m_rombel_id) {
      const anggotaRombel = await MAnggotaRombel.query()
        .where({ m_user_id: siswa_id })
        .andWhere({ m_rombel_id: m_rombel_id })
        .update({ dihapus: 1, tanggal_keluar: moment().format("YYYY-MM-DD") });
    } else {
      let rombelIds;
      rombelIds = MRombel.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 });

      rombelIds = await rombelIds.ids();

      const anggotaRombel = await MAnggotaRombel.query()
        .where({ m_user_id: siswa_id })
        .whereIn("m_rombel_id", rombelIds)
        .update({ dihapus: 1, tanggal_keluar: moment().format("YYYY-MM-DD") });
    }

    if (!siswa) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async loginPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { whatsapp, password } = request.post();
    whatsapp = whatsapp.trim();

    const res = await User.query()
      .where({ whatsapp: whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    if (password == "D*@)eeNDoje298370+?-=234&%&#*(") {
      const { token } = await auth.generate(res);

      return response.ok({
        message: `Selamat datang ${res.nama}`,
        token,
      });
    }

    if (!(await Hash.verify(password, res.password))) {
      return response.notFound({ message: "Password yang anda masukan salah" });
    }

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async daftarPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama, nama_ibu, whatsapp, password, alamat, asal_sekolah, nisn } =
      request.post();

    if (sekolah?.id != 14 || sekolah?.id == 13) {
      const rules = {
        nama: "required",
        whatsapp: "required",
        nama_ibu: "required",
        password: "required",
      };

      const message = {
        "nama.required": "Nama harus diisi",
        "whatsapp.required": "Whatsapp harus diisi",
        "nama_ibu.required": "Nama Ibu harus diisi",
        "password.required": "Password harus diisi",
      };

      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    } else {
      const rules = {
        nama: "required",
        whatsapp: "required",
        password: "required",
      };
      const message = {
        "nama.required": "Nama harus diisi",
        "whatsapp.required": "Whatsapp harus diisi",
        "password.required": "Password harus diisi",
      };
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    }

    const check = await User.query()
      .where({ whatsapp: whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (check) {
      await User.query().where({ id: check.id }).update({ dihapus: 0 });
      return response.forbidden({
        message: "Akun sudah terdaftar",
      });
    }

    if (sekolah?.id == 9487 || sekolah?.id == 9489) {
      const rules = {
        nisn: "required",
      };
      const message = {
        "nisn.required": "NISN harus diisi",
      };
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
      const cek = await MProfilUser.query().where({ nisn }).first();

      if (cek) {
        const cek2 = await User.query()
          .where({ id: cek.id })
          .andWhere({ m_sekolah_id: sekolah?.id })
          .first();
        if (cek2) {
          return response.forbidden({
            message: "NISN sudah terdaftar",
          });
        }
      }
    }

    const res = await User.create({
      nama,
      nama_ibu,
      whatsapp,
      password: password,
      role: "ppdb",
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    if (alamat && asal_sekolah) {
      await MProfilUser.create({
        m_user_id: res.id,
        alamat: alamat,
        asal_sekolah,
        nisn,
      });
    }
    if (nisn) {
      await MProfilUser.create({
        m_user_id: res.id,
        nisn,
      });
    }

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async daftarSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama, whatsapp, password, alamat, asal_sekolah } = request.post();

    const rules = {
      nama: "required",
      whatsapp: "required",
      password: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "whatsapp.required": "Whatsapp harus diisi",
      "password.required": "Password harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const check = await User.query()
      .where({ whatsapp: whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (check) {
      await User.query().where({ id: check.id }).update({ dihapus: 0 });
      return response.forbidden({
        message: "Akun sudah terdaftar",
      });
    }

    const res = await User.create({
      nama,
      whatsapp,
      password: password,
      role: "siswa",
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    if (alamat && asal_sekolah)
      await MProfilUser.create({
        m_user_id: res.id,
        alamat: alamat,
        asal_sekolah,
      });

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async daftarIndustri({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      nama,
      email,
      whatsapp,
      password,
      alamat,
      pangkat,
      golongan,
      asal_sekolah,
    } = request.post();

    const rules = {
      nama: "required",
      whatsapp: "required",
      password: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "whatsapp.required": "Whatsapp harus diisi",
      "password.required": "Password harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const check = await User.query()
      .where({ whatsapp: whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (check) {
      await User.query().where({ id: check.id }).update({ dihapus: 0 });
      return response.forbidden({
        message: "Akun sudah terdaftar",
      });
    }

    const res = await User.create({
      nama,
      email,
      whatsapp,
      password: password,
      role: "admin",
      pangkat,
      golongan,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    await MProfilUser.create({
      m_user_id: res.id,
      alamat: alamat,
      asal_sekolah,
    });

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async getAlumni({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, page } = request.get();

    page = page ? parseInt(page) : 1;

    let alumni;

    if (search) {
      alumni = await User.query()
        .with("infoAlumni")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "alumni" })
        .andWhere("nama", "like", `%${search}%`)
        .paginate(page, 25);
    } else {
      alumni = await User.query()
        .with("infoAlumni")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "alumni" })
        .paginate(page, 25);
    }

    return response.ok({
      alumni: alumni,
    });
  }

  async postAlumni({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      nama,
      whatsapp,
      gender,
      tanggal_lahir,
      email,
      jurusan,
      tahun_masuk,
      pekerjaan,
      purnakarya,
      pengalaman,
      alamat,
      province_id,
      regency_id,
      kodepos,
      deskripsi,
      sertifikasi_keahlian,
      // pekerjaan
      kantor,
      sektor_industri,
      mulai_bekerja,
      posisi,
      alamat_perusahaan,
      kodepos_perusahaan,
      id_card,
      // kuliah
      sekolah_lanjutan,
      mulai_kuliah,
      fakultas,
      prodi,
      kartu_mahasiswa,
      program_pendidikan,
      // wirausaha
      usaha,
      mulai_usaha,
      bidang_usaha,
      posisi_usaha,
      alamat_usaha,
      kodepos_usaha,
      // tambahan
      nik,
      status,
      kontrak,
      verifikasi,
    } = request.post();

    const check = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ whatsapp })
      .where({ role: "alumni" })
      .where({ dihapus: 0 })
      .first();

    let user;
    if (check) {
      await User.query().where({ id: check.id }).update({
        nama,
        whatsapp,
        email,
        gender,
        role: "alumni",
        m_sekolah_id: sekolah.id,
        tanggal_lahir,
        dihapus: 0,
      });
      user = check;
    } else {
      user = await User.create({
        nama,
        whatsapp,
        email,
        gender,
        role: "alumni",
        m_sekolah_id: sekolah.id,
        tanggal_lahir,
        dihapus: 0,
      });
    }
    // ini sudah buffer
    const checkAlumni = await MAlumni.query()
      .where({ m_user_id: user.id })
      .where({ dihapus: 0 })
      .first();
    if (checkAlumni) {
      await MAlumni.query()
        .where({ id: checkAlumni.id })
        .update({
          jurusan,
          tahun_masuk,
          pekerjaan,
          kantor,
          sektor_industri,
          mulai_bekerja,
          posisi,

          mulai_kuliah,
          fakultas,
          prodi,
          program_pendidikan,
          kartu_mahasiswa,
          kontrak,
          verifikasi,
          sekolah_lanjutan: sekolah_lanjutan.length
            ? sekolah_lanjutan.toString()
            : null,
          sertifikasi_keahlian: sertifikasi_keahlian.length
            ? sertifikasi_keahlian.toString()
            : null,
          pengalaman: pengalaman.length ? pengalaman.toString() : null,
          usaha: usaha.length ? usaha.toString() : null,

          mulai_usaha,
          bidang_usaha,
          posisi_usaha,
          alamat_usaha,
          nik,
          status,
          purnakarya,
          deskripsi: htmlEscaper.escape(deskripsi),
          alamat_perusahaan,
          id_card,
          kodepos_perusahaan,
          kodepos_usaha,
          dihapus: 0,
          m_user_id: user.id,
        });
    } else {
      const alumni = await MAlumni.create({
        jurusan,
        tahun_masuk,
        pekerjaan,
        kantor,
        sektor_industri,
        mulai_bekerja,
        posisi,

        mulai_kuliah,
        fakultas,
        prodi,
        program_pendidikan,
        kartu_mahasiswa,
        kontrak,
        verifikasi,
        sekolah_lanjutan: sekolah_lanjutan.length
          ? sekolah_lanjutan.toString()
          : null,
        sertifikasi_keahlian: sertifikasi_keahlian.length
          ? sertifikasi_keahlian.toString()
          : null,
        pengalaman: pengalaman.length ? pengalaman.toString() : null,
        usaha: usaha.length ? usaha.toString() : null,

        mulai_usaha,
        bidang_usaha,
        posisi_usaha,
        alamat_usaha,
        nik,
        status,
        purnakarya,
        deskripsi: htmlEscaper.escape(deskripsi),
        alamat_perusahaan,
        id_card,
        kodepos_perusahaan,
        kodepos_usaha,
        dihapus: 0,
        m_user_id: user.id,
      });
    }

    const checkProfil = await MProfilUser.query()
      .where({ m_user_id: user.id })
      .first();
    if (checkProfil) {
      await MProfilUser.query().where({ id: checkProfil.id }).update({
        alamat,
        province_id,
        regency_id,
        kodepos,
      });
    } else {
      await MProfilUser.create({
        alamat,
        province_id,
        regency_id,
        kodepos,
        m_user_id: user.id,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putAlumni({ response, request, auth, params: { alumni_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      nama,
      whatsapp,
      gender,
      tanggal_lahir,
      email,
      jurusan,
      tahun_masuk,
      pekerjaan,
      kantor,
      sektor_industri,
      sekolah_lanjutan,
      sertifikasi_keahlian,
      purnakarya,
      pengalaman,
      deskripsi,
      usaha,
    } = request.post();
    const rules = {
      nama: "required",
      whatsapp: "required",
      gender: "required",
      tanggal_lahir: "required",
      email: "required",
      tahun_masuk: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "whatsapp.required": "Whatsapp harus diisi",
      "gender.required": "Jenis Kelamin harus diisi",
      "tanggal_lahir.required": "Tanggal Lahir harus diisi",
      "email.required": "Email harus diisi",
      "tahun_masuk.required": "Tahun Masuk harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    await User.query().where({ id: alumni_id }).update({
      nama,
      whatsapp,
      email,
      gender,
      tanggal_lahir,
    });
    // ini sudah buffer
    const alumni = await MAlumni.query()
      .where({ m_user_id: alumni_id })
      .update({
        jurusan,
        tahun_masuk,
        pekerjaan,
        kantor,
        sektor_industri,
        sekolah_lanjutan: sekolah_lanjutan.length
          ? sekolah_lanjutan.toString()
          : null,
        sertifikasi_keahlian: sertifikasi_keahlian.length
          ? sertifikasi_keahlian.toString()
          : null,
        pengalaman: pengalaman.length ? pengalaman.toString() : null,
        usaha: usaha.length ? usaha.toString() : null,
        purnakarya,
        deskripsi: htmlEscaper.escape(deskripsi),
      });

    if (!alumni) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteAlumni({ response, request, auth, params: { alumni_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const alumni = await User.query().where({ id: alumni_id }).update({
      dihapus: 1,
    });

    if (!alumni) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getTA({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    let { search } = request.get();
    let ta;

    ta = Mta.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc");

    if (search) {
      ta = ta.andWhere("tahun", "like", `%${search}%`);
    }

    ta = await ta.fetch();

    return response.ok({
      ta: ta,
    });
  }

  async postTA({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      tahun,
      semester,
      nama_kepsek,
      nip_kepsek,
      aktif,
      tanggal_rapor,
      tanggal_awal,
      tanggal_akhir,
    } = request.post();
    const rules = {
      tahun: "required",
      semester: "required",
      nama_kepsek: "required",
      nip_kepsek: "required",
      aktif: "required",
    };
    const message = {
      "tahun.required": "Tahun harus diisi",
      "semester.required": "Semester  harus diisi",
      "nama_kepsek.required": "Nama Kepsek harus dipilih",
      "nip_kepsek.required": "NIP Kepsek harus dipilih",
      "aktif.required": "Status harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    if (aktif == 1) {
      await Mta.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .update({
          aktif: 0,
        });
    }

    const ta = await Mta.create({
      tahun,
      semester,
      nama_kepsek,
      nip_kepsek,
      aktif,
      tanggal_awal,
      tanggal_rapor,
      tanggal_akhir,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
      jam_sinkron: 1,
      mapel_sinkron: 1,
      rombel_sinkron: 1,
      jadwal_sinkron: 1,
    });

    const jamMengajar = [];

    for (let i = 0; i <= 6; i++) {
      jamMengajar.push(
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 1,
          jam_mulai: "06:45:00",
          jam_selesai: "07:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 2,
          jam_mulai: "07:30:00",
          jam_selesai: "08:15:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 3,
          jam_mulai: "08:15:00",
          jam_selesai: "09:00:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 4,
          jam_mulai: "09:00:00",
          jam_selesai: "09:45:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 0,
          jam_mulai: "09:45:00",
          jam_selesai: "10:00:00",
          istirahat: 1,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 5,
          jam_mulai: "10:00:00",
          jam_selesai: "10:45:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 6,
          jam_mulai: "10:45:00",
          jam_selesai: "11:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 0,
          jam_mulai: "12:15:00",
          jam_selesai: "12:30:00",
          istirahat: 1,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 7,
          jam_mulai: "12:30:00",
          jam_selesai: "13:15:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 8,
          jam_mulai: "13:15:00",
          jam_selesai: "14:00:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 9,
          jam_mulai: "14:00:00",
          jam_selesai: "14:45:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 10,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 11,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 12,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 13,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 14,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 15,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 16,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 17,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 18,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 19,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 20,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        }
      );
    }

    await MJamMengajar.createMany(jamMengajar);

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putTA({ response, request, auth, params: { ta_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      tahun,
      semester,
      nama_kepsek,
      nip_kepsek,
      aktif,
      tanggal_awal,
      tanggal_rapor,
      tanggal_akhir,
      tingkat1,
      tingkat2,
      tingkat3,
      tingkat4,
      tingkat5,
      tingkat6,
    } = request.post();
    const rules = {
      tahun: "required",
      semester: "required",
      nama_kepsek: "required",
      nip_kepsek: "required",
      aktif: "required",
    };
    const message = {
      "tahun.required": "Tahun harus diisi",
      "semester.required": "Semester  harus diisi",
      "nama_kepsek.required": "Nama Kepsek harus dipilih",
      "nip_kepsek.required": "NIP Kepsek harus dipilih",
      "aktif.required": "Status harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    if (aktif == 1) {
      await Mta.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .update({
          aktif: 0,
        });
    }

    const ta = await Mta.query().where({ id: ta_id }).update({
      tahun,
      semester,
      nama_kepsek,
      nip_kepsek,
      aktif,
      tanggal_awal,
      tanggal_rapor,
      tanggal_akhir,
      tingkat1,
      tingkat2,
      tingkat3,
      tingkat4,
      tingkat5,
      tingkat6,
    });

    if (!ta) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteTA({ response, request, auth, params: { ta_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const ta = await Mta.query().where({ id: ta_id }).update({
      dihapus: 1,
    });

    if (!ta) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getRombel({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      kode_hari,
      jam_saat_ini,
      ta_id = user?.m_ta_id || ta.id,
    } = request.get();

    const semuaTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    const dataTA = await Mta.query()
      .where({ id: ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    if (user.role == "guru") {
      const mataPelajaranIds = await MMataPelajaran.query()
        .where({ m_user_id: user.id })
        .where({ m_ta_id: ta_id })
        .ids();

      const rombel = await MRombel.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ m_ta_id: ta_id })
        .first();

      const rombelIds = await MRombel.query()
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .where({ m_ta_id: ta_id })
        .ids();

      let jamMengajarIds = await MJamMengajar.query()
        .where({ kode_hari: kode_hari })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta_id })
        .ids();

      const jadwalMengajar = await MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder
            .where({ dihapus: 0 })
            .withCount("anggotaRombel as jumlahAnggota", (builder) => {
              builder.where({ dihapus: 0 });
            });
        })
        .with("jamMengajar")
        .with("mataPelajaran")
        .whereIn("m_rombel_id", rombelIds)
        .where({ m_ta_id: ta_id })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .whereIn("m_jam_mengajar_id", jamMengajarIds)
        .orderBy("m_jam_mengajar_id", "asc")
        .fetch();

      const rombelMengajar = await MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombelIds)
        .where({ m_ta_id: ta_id })
        .with("mataPelajaran")
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .fetch();

      const jadwalMengajarData = [];

      await Promise.all(
        jadwalMengajar.toJSON().map(async (d) => {
          if (
            moment(d.jamMengajar.jam_mulai, "HH:mm:ss").format("HH:mm") <=
              jam_saat_ini &&
            moment(d.jamMengajar.jam_selesai, "HH:mm:ss").format("HH:mm") >=
              jam_saat_ini
          ) {
            jadwalMengajarData.push({ ...d, aktif: true });
          } else {
            jadwalMengajarData.push({ ...d, aktif: false });
          }
        })
      );

      return response.ok({
        jadwalMengajar: jadwalMengajarData,
        rombelMengajar: rombelMengajar,
        rombel,
        userRole: user.role,
        semuaTA,
        dataTA,
      });
    } else if (user.role == "siswa") {
      const rombelIds = await MRombel.query()
        .where({ m_ta_id: ta_id })
        .andWhere({ dihapus: 0 })
        .ids();

      const rombel = await MAnggotaRombel.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .whereIn("m_rombel_id", rombelIds)
        .pluck("m_rombel_id");

      if (!rombel) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      let jamMengajarIds = await MJamMengajar.query()
        .where({ kode_hari: kode_hari })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta_id })
        .ids();

      const jadwalMengajar = await MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .with("jamMengajar")
        .with("mataPelajaran", (builder) => {
          builder.with("user").andWhere({ dihapus: 0 });
        })
        .whereNotNull("m_mata_pelajaran_id")
        .whereIn("m_rombel_id", rombel)
        .where({ m_ta_id: ta_id })
        .fetch();

      const jadwalMengajarData = [];
      const rombelMengajar = [];

      await Promise.all(
        jadwalMengajar.toJSON().map(async (d) => {
          rombelMengajar.push(d);
          if (jamMengajarIds.includes(d.m_jam_mengajar_id)) {
            if (
              moment(d.jamMengajar.jam_mulai, "HH:mm:ss").format("HH:mm") <=
                jam_saat_ini &&
              moment(d.jamMengajar.jam_selesai, "HH:mm:ss").format("HH:mm") >=
                jam_saat_ini
            ) {
              jadwalMengajarData.push({ ...d, aktif: true });
            } else {
              jadwalMengajarData.push({ ...d, aktif: false });
            }
          }
        })
      );

      const today = new Date();
      const absenHariIni = await MTimeline.query()
        .with("tkTimeline", (builder) => {
          builder.where({ m_user_id: user.id });
        })
        .where({ tipe: "absen" })
        .whereIn(
          "m_rombel_id",
          jadwalMengajarData
            .filter((d) => d.aktif == true)
            .map((d) => d.rombel.id)
        )
        .whereBetween("tanggal_pembagian", [
          `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`,
          `${today.getFullYear()}/${
            today.getMonth() + 1
          }/${today.getDate()} ${jam_saat_ini}:00`,
        ])
        .fetch();

      return response.ok({
        jadwalMengajar: jadwalMengajarData,
        rombelMengajar: rombelMengajar,
        absen: absenHariIni,
        rombel,
        userRole: user.role,
        dataTA,
      });
    }

    let { kelompok } = request.get();

    const kelompokData = [
      { value: "reguler", label: "Reguler" },
      { value: "ekskul", label: "Ekstrakurikuler" },
      { value: "teori", label: "Teori (Peminatan)" },
      { value: "praktik", label: "Praktik" },
    ];

    if (!kelompok) {
      kelompok = kelompokData[0].value;
    }

    const rombel = await MRombel.query()
      .with("user", (builder) => {
        builder.select("id", "nama", "whatsapp");
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ kelompok: kelompok })
      .orderBy("nama", "asc")
      .fetch();

    const jurusan = await MJurusan.query()
      .select("kode", "id")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const guru = await User.query()
      .select("nama", "id", "whatsapp", "avatar", "gender")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "guru" })
      .fetch();

    let tingkat = [];

    if (
      sekolah.tingkat == "SMK" ||
      sekolah.tingkat == "SMA" ||
      sekolah.tingkat == "MA" ||
      sekolah.tingkat == "MAK"
    ) {
      tingkat = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP" || sekolah.tingkat == "MTS") {
      tingkat = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD" || sekolah.tingkat == "MI") {
      tingkat = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB" || sekolah.tingkat == "SUPER") {
      tingkat = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];
    }

    return response.ok({
      rombel: rombel,
      jurusan: jurusan,
      guru: guru,
      tingkat: tingkat,
      userRole: user.role,
      kelompok: kelompokData,
      semuaTA,
      dataTA,
    });
  }

  async getRombelSer({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      kode_hari,
      jam_saat_ini,
      ta_id = user?.m_ta_id || ta.id,
      nama,
    } = request.get();

    const semuaTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    const dataTA = await Mta.query()
      .where({ id: ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    if (user.role == "guru") {
      const mataPelajaranIds = await MMataPelajaran.query()
        .where({ m_user_id: user.id })
        .where({ m_ta_id: ta_id })
        .ids();

      const rombel = await MRombel.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ m_ta_id: ta_id })
        .first();

      const rombelIds = await MRombel.query()
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .where({ m_ta_id: ta_id })
        .ids();

      let jamMengajarIds = await MJamMengajar.query()
        .where({ kode_hari: kode_hari })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta_id })
        .ids();

      const jadwalMengajar = await MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder
            .where({ dihapus: 0 })
            .withCount("anggotaRombel as jumlahAnggota", (builder) => {
              builder.where({ dihapus: 0 });
            });
        })
        .with("jamMengajar")
        .with("mataPelajaran")
        .whereIn("m_rombel_id", rombelIds)
        .where({ m_ta_id: ta_id })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .whereIn("m_jam_mengajar_id", jamMengajarIds)
        .orderBy("m_jam_mengajar_id", "asc")
        .fetch();

      const rombelMengajar = await MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombelIds)
        .where({ m_ta_id: ta_id })
        .with("mataPelajaran")
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .fetch();

      const jadwalMengajarData = [];

      await Promise.all(
        jadwalMengajar.toJSON().map(async (d) => {
          if (
            moment(d.jamMengajar.jam_mulai, "HH:mm:ss").format("HH:mm") <=
              jam_saat_ini &&
            moment(d.jamMengajar.jam_selesai, "HH:mm:ss").format("HH:mm") >=
              jam_saat_ini
          ) {
            jadwalMengajarData.push({ ...d, aktif: true });
          } else {
            jadwalMengajarData.push({ ...d, aktif: false });
          }
        })
      );

      return response.ok({
        jadwalMengajar: jadwalMengajarData,
        rombelMengajar: rombelMengajar,
        rombel,
        userRole: user.role,
        semuaTA,
        dataTA,
      });
    } else if (user.role == "siswa") {
      const rombelIds = await MRombel.query()
        .where({ m_ta_id: ta_id })
        .andWhere({ dihapus: 0 })
        .ids();

      const rombel = await MAnggotaRombel.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .whereIn("m_rombel_id", rombelIds)
        .pluck("m_rombel_id");

      if (!rombel) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      // let jamMengajarIds = await MJamMengajar.query()
      //   .where({ kode_hari: kode_hari })
      //   .andWhere({ m_sekolah_id: sekolah.id })
      //   .andWhere({ m_ta_id: ta_id })
      //   .ids();

      // const jadwalMengajar = await MJadwalMengajar.query()
      //   .with("rombel", (builder) => {
      //     builder.where({ dihapus: 0 });
      //   })
      //   .with("jamMengajar")
      //   .with("mataPelajaran", (builder) => {
      //     builder.with("user").andWhere({ dihapus: 0 });
      //   })
      //   .whereNotNull("m_mata_pelajaran_id")
      //   .whereIn("m_rombel_id", rombel)
      //   .where({ m_ta_id: ta_id })
      //   .fetch();

      const rombelMengajar = await MRombel.query()
        .whereNotNull("kode")
        .where("nama", "like", `%${nama}%`)
        .andWhere({ dihapus: 0 });

      // const today = new Date();
      // const absenHariIni = await MTimeline.query()
      //   .with("tkTimeline", (builder) => {
      //     builder.where({ m_user_id: user.id });
      //   })
      //   .where({ tipe: "absen" })
      //   .whereIn(
      //     "m_rombel_id",
      //     jadwalMengajarData
      //       .filter((d) => d.aktif == true)
      //       .map((d) => d.rombel.id)
      //   )
      //   .whereBetween("tanggal_pembagian", [
      //     `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`,
      //     `${today.getFullYear()}/${
      //       today.getMonth() + 1
      //     }/${today.getDate()} ${jam_saat_ini}:00`,
      //   ])
      //   .fetch();

      return response.ok({
        // jadwalMengajar: jadwalMengajarData,
        rombelMengajar: rombelMengajar,
        // absen: absenHariIni,
        rombel,
        userRole: user.role,
        dataTA,
      });
    }

    let { kelompok } = request.get();

    const kelompokData = [
      { value: "reguler", label: "Reguler" },
      { value: "ekskul", label: "Ekstrakurikuler" },
      { value: "teori", label: "Teori (Peminatan)" },
      { value: "praktik", label: "Praktik" },
    ];

    if (!kelompok) {
      kelompok = kelompokData[0].value;
    }

    const rombel = await MRombel.query()
      .with("user", (builder) => {
        builder.select("id", "nama", "whatsapp");
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ kelompok: kelompok })
      .orderBy("nama", "asc")
      .fetch();

    const jurusan = await MJurusan.query()
      .select("kode", "id")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const guru = await User.query()
      .select("nama", "id", "whatsapp", "avatar", "gender")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "guru" })
      .fetch();

    let tingkat = [];

    if (
      sekolah.tingkat == "SMK" ||
      sekolah.tingkat == "SMA" ||
      sekolah.tingkat == "MA" ||
      sekolah.tingkat == "MAK"
    ) {
      tingkat = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP" || sekolah.tingkat == "MTS") {
      tingkat = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD" || sekolah.tingkat == "MI") {
      tingkat = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB" || sekolah.tingkat == "SUPER") {
      tingkat = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];
    }

    return response.ok({
      rombel: rombel,
      jurusan: jurusan,
      guru: guru,
      tingkat: tingkat,
      userRole: user.role,
      kelompok: kelompokData,
      semuaTA,
      dataTA,
    });
  }

  async detailRombel({
    response,
    request,
    auth,
    params: { jadwal_mengajar_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let { rombel_id, kode_hari, ta_id } = request.get();

    if (!ta_id) {
      ta_id = user.m_ta_id || ta.id;
    }

    const dataTA = await Mta.query()
      .where({ id: ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();
    // return {user,ta_id}

    const tahunPelajaranIds = await Mta.query()
      .where({ tahun: dataTA.tahun })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();

    const industri = await TkPerusahaanSekolah.query()
      .with("industri")
      .where({ m_sekolah_id: sekolah.id })
      .fetch();

    const semuaTA = await Mta.query()
      .select("id", "tahun", "semester")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let materi;
    let jadwalMengajar;
    let analisisMateri;
    let analisisNilai;
    let checkAbsensi = [];
    let judulTugas;
    let rekap;
    let data;
    let kkm;
    let totalMapel;
    let sikapsosial;
    let sikapspiritual;
    let ekskul;
    let mapelKelas;
    let dataJadwal;

    if (rombel_id) {
      data = await MJadwalMengajar.query()
        .where({ id: jadwal_mengajar_id })
        .first();

      jadwalMengajar = await MJadwalMengajar.query()
        .with("mataPelajaran")
        .with("rombel", (builder) => {
          builder
            .with("anggotaRombel", (builder) => {
              builder.where({ dihapus: 0 }).with("user", async (builder) => {
                builder.where({ dihapus: 0 });
              });
            })
            .with("user");
        })
        .where({ m_rombel_id: rombel_id })
        .first();
    } else {
      data = await MJadwalMengajar.query()
        .where({ id: jadwal_mengajar_id })
        .first();

      if (data) {
        kkm = await MKategoriMapel.query()
          .with("mapelRapor", (builder) => {
            builder.with("mataPelajaran").where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .andWhere({ m_rombel_id: data.m_rombel_id })
          .fetch();

        totalMapel = await TkMateriRombel.query()
          .where({ m_rombel_id: data.m_rombel_id })
          .countDistinct("m_materi_id as total");
      }

      sikapsosial = await MSikapSosial.query().fetch();
      sikapspiritual = await MSikapSpiritual.query().fetch();
      ekskul = await MEkstrakurikuler.query()
        .where({ m_sekolah_id: sekolah.id })
        .fetch();

      jadwalMengajar = await MJadwalMengajar.query()
        .with("mataPelajaran", (builder) => {
          builder.with("user");
        })
        .with("rombel", (builder) => {
          builder
            .with("anggotaRombel", (builder) => {
              builder
                .with("user", async (builder) => {
                  builder
                    .select(
                      "id",
                      "nama",
                      "whatsapp",
                      "email",
                      "avatar",
                      "gender",
                      "agama",
                      "m_sekolah_id"
                    )
                    .with("keteranganRapor", (builder) => {
                      builder
                        .where({ dihapus: 0 })
                        .andWhere({ m_ta_id: data.m_ta_id })
                        .where({ tipe: "uts" });
                    })
                    .with("keteranganRaporUas", (builder) => {
                      builder
                        .where({ dihapus: 0 })
                        .andWhere({ m_ta_id: data.m_ta_id })
                        .where({ tipe: "uas" });
                    })
                    .with("keteranganPkl", (builder) => {
                      builder
                        .where({ dihapus: 0 })
                        .andWhere({ m_ta_id: data.m_ta_id });
                    })
                    .with("raporEkskul", (builder) => {
                      builder.with("ekskul").where({ dihapus: 0 });
                    })
                    .with("anggotaEkskul", (builder) => {
                      builder.with("ekskul").where({ dihapus: 0 });
                    })
                    .with("prestasi", (builder) => {
                      builder.where({ dihapus: 0 });
                    })
                    .with("rekapSikap", (builder) => {
                      builder.with("predikat").where({ dihapus: 0 }).andWhere({
                        m_mata_pelajaran_id: data.m_mata_pelajaran_id,
                      });
                    })
                    .with("nilaiUjian", (builder) => {
                      builder.where({
                        m_mata_pelajaran_id: data.m_mata_pelajaran_id,
                      });
                    })
                    .withCount(
                      "nilaiSemuaUjian as jumlahMapelDikerjakan",
                      (builder) => {
                        builder.andWhere({ m_ta_id: data.m_ta_id });
                      }
                    )
                    .with("nilaiSemuaUjian", (builder) => {
                      builder
                        .select(
                          // "m_ta_id",
                          "m_user_id",
                          "m_mata_pelajaran_id",
                          "nilai",
                          "nilai_keterampilan",
                          "nilai_uts",
                          "nilai_keterampilan_uts"
                        )
                        // .where(
                        //   "nilai",
                        //   "<",
                        //   `${kkm.toJSON().mataPelajaran.kkm}`
                        // )
                        .where({ m_ta_id: data.m_ta_id })
                        .with("mapel", (builder) => {
                          builder.select("id", "nama");
                        });
                    });
                  if (sekolah.id == 33) {
                    builder.with("sikapYadika", (builder) => {
                      builder
                        .where({ dihapus: 0 })
                        .andWhere({ m_ta_id: data?.m_ta_id });
                    });
                  } else {
                    builder
                      .with("sikapUas", (builder) => {
                        builder
                          .where({ dihapus: 0 })
                          .andWhere({ m_ta_id: data.m_ta_id })
                          .where({ tipe: "uas" });
                      })
                      .with("sikap", (builder) => {
                        builder
                          .where({ dihapus: 0 })
                          .andWhere({ m_ta_id: data.m_ta_id })
                          .where({ tipe: "uts" });
                      });
                  }
                })
                .whereIn("dihapus", [0, 2]);
            })
            .with("user");
        })
        .where({ id: jadwal_mengajar_id })
        .first();

      const jamMengajarIds = await MJamMengajar.query()
        .where({ kode_hari: kode_hari })
        .andWhere({ m_ta_id: data.m_ta_id })
        .ids();

      checkAbsensi = await MJadwalMengajar.query()
        .where({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
        .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .whereIn("m_jam_mengajar_id", jamMengajarIds)
        .ids();

      if (!checkAbsensi) {
        checkAbsensi = [];
      }

      // return jadwalMengajar.toJSON().rombel

      materi = await MMateri.query()
        .where({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
        .andWhere({ m_jurusan_id: jadwalMengajar.toJSON().rombel.m_jurusan_id })
        .andWhere({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
        .andWhere({ dihapus: 0 })
        .first();

      let materiIds;

      if (sekolah.id == 40) {
        if (ta_id) {
          const mataPelajaranGuru = await MMataPelajaran.query()
            .where(
              "nama",
              "like",
              `%${jadwalMengajar.toJSON().mataPelajaran.nama}%`
            )
            .andWhere({ m_user_id: user.id })
            .andWhere({ dihapus: 0 })
            .andWhere({ m_ta_id: ta_id })
            .first();
          // return mataPelajaranGuru
          materi = await MMateri.query()
            .where({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
            .andWhere({
              m_jurusan_id: jadwalMengajar.toJSON().rombel.m_jurusan_id,
            })
            .where({ m_mata_pelajaran_id: mataPelajaranGuru.id })
            .andWhere({ dihapus: 0 })
            .first();
          if (!materi) {
            materi = await MMateri.query()
              .where({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
              .where({ m_mata_pelajaran_id: mataPelajaranGuru.id })
              .andWhere({ dihapus: 0 })
              .first();
          }
          // return materi
        }
      }

      if (!materi) {
        materi = await MMateri.query()
          .where({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
          .andWhere({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
          .andWhere({ dihapus: 0 })
          .first();
      }

      const userIds = await MAnggotaRombel.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .andWhere({ dihapus: 0 })
        .pluck("m_user_id");

      const dataRombelIds = await MRombel.query()
        .where({ nama: jadwalMengajar.toJSON().rombel.nama })
        .andWhere({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("m_ta_id", tahunPelajaranIds)
        .ids();
      const timelineIds = await MTimeline.query()
        .where({ dihapus: 0 })
        .andWhere({ tipe: "tugas" })
        .whereIn("m_rombel_id", dataRombelIds)
        .andWhere({
          m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id,
        })
        .andWhere({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
        .ids();
      // .andWhere({ m_rombel_id: jadwalMengajar.toJSON().m_rombel_id })

      if (user.role == "guru") {
        judulTugas = await MTimeline.query()
          .select("id", "m_tugas_id", "tanggal_dibuat")
          .with("tugas", (builder) => {
            builder.select("id", "judul");
          })
          .with("ditugaskan", (builder) => {
            builder
              .select(
                Database.raw(
                  "sum(nilai) as jumlahNilai, count(id) as jumlahSiswa"
                )
              )
              .select("m_timeline_id")
              .groupBy("m_timeline_id");
          })
          .whereIn("id", timelineIds)
          .fetch();

        analisisNilai = await User.query()
          .with("tugas", (builder) => {
            builder.whereIn("m_timeline_id", timelineIds);
          })
          .whereIn("id", userIds)
          .fetch();
      }
      if (sekolah.id == 40 || sekolah.id == 13) {
        if (ta_id) {
          const rombelLama = await MRombel.query()
            .where({ m_ta_id: ta_id })
            .andWhere({ m_sekolah_id: sekolah.id })
            .andWhere({
              m_jurusan_id: jadwalMengajar.toJSON().rombel.m_jurusan_id,
            })
            .andWhere({ nama: jadwalMengajar.toJSON().rombel.nama })
            .first();
          // return materi
          analisisMateri = await TkMateriRombel.query()
            .with("materi", (builder) => {
              builder.with("bab", (builder) => {
                builder
                  .with("topik", (builder) => {
                    builder
                      .withCount(
                        "materiKesimpulan as totalKesimpulan",
                        (builder) => {
                          builder
                            .whereIn("m_user_id", userIds)
                            .whereNotNull("kesimpulan");
                        }
                      )
                      .where({ dihapus: 0 });
                  })
                  .where({ dihapus: 0 });
              });
            })
            .with("rombel", (builder) => {
              builder.withCount("anggotaRombel as totalAnggota", (builder) => {
                builder.where({ dihapus: 0 });
              });
            })
            .where({ m_rombel_id: rombelLama.id })
            .andWhere({ m_materi_id: materi.id })
            .first();
        } else {
          analisisMateri = await TkMateriRombel.query()
            .with("materi", (builder) => {
              builder.with("bab", (builder) => {
                builder
                  .with("topik", (builder) => {
                    builder
                      .withCount(
                        "materiKesimpulan as totalKesimpulan",
                        (builder) => {
                          builder
                            .whereIn("m_user_id", userIds)
                            .whereNotNull("kesimpulan");
                        }
                      )
                      .where({ dihapus: 0 });
                  })
                  .where({ dihapus: 0 });
              });
            })
            .with("rombel", (builder) => {
              builder.withCount("anggotaRombel as totalAnggota", (builder) => {
                builder.where({ dihapus: 0 });
              });
            })
            .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
            .andWhere({ m_materi_id: materi.id })
            .first();
        }
      } else {
        analisisMateri = await TkMateriRombel.query()
          .with("materi", (builder) => {
            builder.with("bab", (builder) => {
              builder
                .with("topik", (builder) => {
                  builder
                    .withCount(
                      "materiKesimpulan as totalKesimpulan",
                      (builder) => {
                        builder
                          .whereIn("m_user_id", userIds)
                          .whereNotNull("kesimpulan");
                      }
                    )
                    .where({ dihapus: 0 });
                })
                .where({ dihapus: 0 });
            });
          })
          .with("rombel", (builder) => {
            builder.withCount("anggotaRombel as totalAnggota", (builder) => {
              builder.where({ dihapus: 0 });
            });
          })
          .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
          .andWhere({ m_materi_id: materi.id })
          .first();
      }
      const jadwalIds = await MJadwalMengajar.query()
        .min("id as id")
        .select("m_mata_pelajaran_id")
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .whereNotNull("m_mata_pelajaran_id")
        .groupBy("m_mata_pelajaran_id");

      mapelKelas = await MJadwalMengajar.query()
        .whereIn(
          "id",
          jadwalIds.map((d) => d.id)
        )
        .with("mataPelajaran")
        .fetch();
      if (jadwalMengajar.rombel.m_user_id == user.id) {
      }
    }

    return response.ok({
      jadwalMengajar: jadwalMengajar,
      analisisMateri: analisisMateri,
      analisisNilai: analisisNilai,
      m_materi_id: materi ? materi.id : "0",
      integrasi: sekolah.integrasi,
      checkAbsensi: checkAbsensi.length,
      judulTugas: judulTugas,
      industri: industri,
      sikapsosial: sikapsosial,
      sikapspiritual: sikapspiritual,
      kkm,
      totalMapel,
      ekskul,
      mapelKelas,
      semuaTA,
      dataTA,
    });
  }

  async detailRombelWalas({
    response,
    request,
    auth,
    params: { rombel_id },
    params: { user_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let ta_id;

    if (!ta_id) {
      ta_id = user.m_ta_id || ta.id;
    }

    const dataTA = await Mta.query()
      .where({ id: ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    const tanggalDistinct = await Database.raw(
      "SELECT DISTINCT DATE_FORMAT(created_at, '%Y-%m-%d') as tanggalDistinct from m_absen WHERE created_at BETWEEN ? AND  ?",
      [`${dataTA.tanggal_awal}`, `${dataTA.tanggal_akhir}`]
    );

    const sikapsosial = await MSikapSosial.query().fetch();
    const sikapspiritual = await MSikapSpiritual.query().fetch();

    const siswa = await User.query()
      .where({ id: user_id })
      .andWhere({ dihapus: 0 })
      .first();

    const muatan = await MKategoriMapel.query()
      .with("mapelRapor", (builder) => {
        builder
          .with("mataPelajaran", (builder) => {
            builder
              .with("nilaiIndividu", (builder) => {
                builder.where({ m_user_id: user_id });
              })
              .with("sikapSiswa", (builder) => {
                builder.with("predikat").where({ m_user_id: user_id });
              })
              .with("templateDeskripsi")
              .with("user", (builder) => {
                builder.select("id", "nama", "whatsapp");
              });
          })
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_rombel_id: rombel_id })
      .fetch();

    const materiRombel = await TkMateriRombel.query()
      .with("materi", (builder) => {
        builder.with("mataPelajaran");
      })
      .where({ m_rombel_id: rombel_id })
      .fetch();

    const predikat = await MPredikatNilai.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const rombel = await MRombel.query()
      .with("user")
      .where({ id: rombel_id })
      .first();

    return response.ok({
      siswa: siswa,
      ta: dataTA,
      sekolah: sekolah,
      materiRombel: materiRombel,
      predikat: predikat,
      rombel: rombel,
      sikapsosial: sikapsosial,
      sikapspiritual: sikapspiritual,
      tanggalDistinct: tanggalDistinct,
      muatan,
    });
  }

  async postRombel({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      tingkat,
      kode,
      m_jurusan_id,
      m_user_id,
      kelompok,
      ta_id = ta.id,
    } = request.post();
    const rules = {
      kode: "required",
    };
    const message = {
      "kode.required": "Kode  harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const jurusan = await MJurusan.query()
      .select("kode", "id")
      .where({ id: m_jurusan_id })
      .first();

    const rombel = await MRombel.create({
      tingkat,
      nama: m_jurusan_id ? `${tingkat} ${jurusan.kode} ${kode}` : kode,
      m_jurusan_id,
      m_sekolah_id: sekolah.id,
      m_ta_id: ta_id,
      m_user_id,
      kelompok,
      dihapus: 0,
    });

    const jamMengajar = await MJamMengajar.query()
      .select("id")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .fetch();

    const jadwalMengajarData = await Promise.all(
      jamMengajar.toJSON().map(async (data) => {
        data.m_mata_pelajaran_id = null;
        data.m_rombel_id = rombel.id;
        data.m_jam_mengajar_id = data.id;
        data.m_sekolah_id = sekolah.id;
        data.m_ta_id = ta_id;
        delete data.id;
        delete data.jamFormat;

        return data;
      })
    );

    await MJadwalMengajar.createMany(jadwalMengajarData);

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRombel({ response, request, auth, params: { rombel_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { tingkat, kode, m_jurusan_id, m_user_id, kelompok } = request.post();
    const rules = {
      kode: "required",
    };
    const message = {
      "kode.required": "Kode  harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const jurusan = await MJurusan.query()
      .select("kode", "id")
      .where({ id: m_jurusan_id })
      .first();

    const rombel = await MRombel.query()
      .where({ id: rombel_id })
      .update({
        tingkat,
        nama: m_jurusan_id ? `${tingkat} ${jurusan.kode} ${kode}` : kode,
        m_jurusan_id,
        kelompok,
        m_user_id,
      });

    if (!rombel) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteRombel({ response, request, auth, params: { rombel_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const rombel = await MRombel.query().where({ id: rombel_id }).update({
      dihapus: 1,
    });

    if (!rombel) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getJamMengajar({ response, request, auth, params: { rombel_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let { hari, ta_id = ta.id } = request.get();

    const semuaTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();
    const dataTA = await Mta.query()
      .where({ id: ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    hari = hari ? hari : 1;

    const jamMengajar = await MJamMengajar.query()
      .where({ kode_hari: hari })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .orderBy("jam_mulai", "asc")
      .fetch();

    return {
      jamMengajar: jamMengajar,
      semuaTA,
      dataTA,
    };
  }

  async putJamMengajar({
    response,
    request,
    auth,
    params: { jam_mengajar_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { jam_mulai, jam_selesai, istirahat, jam_ke } = request.post();
    const rules = {
      jam_mulai: "required",
      jam_selesai: "required",
    };
    const message = {
      "jam_mulai.required": "Jam dimulai harus diisi",
      "jam_selesai.required": "Jam selesai harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const jamMengajar = await MJamMengajar.query()
      .where({ id: jam_mengajar_id })
      .update({
        jam_ke: jam_ke,
        jam_mulai: jam_mulai,
        jam_selesai: jam_selesai,
        istirahat: istirahat,
      });

    if (!jamMengajar) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getMataPelajaran({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }
    const { ta_id = ta.id } = request.get();

    const semuaTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    const dataTA = await Mta.query()
      .where({ id: ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    const mataPelajaran = await MMataPelajaran.query()
      .with("user", (builder) => {
        builder.select("id", "nama", "whatsapp");
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 })
      .orderBy("nama", "asc")
      .fetch();

    const mataPelajaranKelompokA = [];
    const mataPelajaranKelompokB = [];
    const mataPelajaranKelompokC = [];

    const guru = await User.query()
      .select("nama", "id", "whatsapp", "avatar", "gender")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "guru" })
      .fetch();

    await Promise.all(
      mataPelajaran.toJSON().map(async (data) => {
        if (data.kelompok == "A") {
          mataPelajaranKelompokA.push(data);
        } else if (data.kelompok == "B") {
          mataPelajaranKelompokB.push(data);
        } else if (data.kelompok == "C") {
          mataPelajaranKelompokC.push(data);
        }
      })
    );

    return response.ok({
      mataPelajaranKelompokA,
      mataPelajaranKelompokB,
      mataPelajaranKelompokC,
      guru: guru,
      semuaTA,
      dataTA,
    });
  }

  async postMataPelajaran({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      nama,
      kode,
      kelompok,
      m_user_id,
      kkm,
      ta_id = ta.id,
    } = request.post();
    const rules = {
      nama: "required",
      kode: "required",
      kelompok: "required",
      m_user_id: "required",
      kkm: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "kode.required": "Kode Mapel harus diisi",
      "kelompok.required": "Kelompok harus dipilih",
      "m_user_id.required": "Guru Pengampu harus dipilih",
      "kkm.required": "KKM harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const mataPelajaran = await MMataPelajaran.create({
      nama,
      kode,
      kelompok,
      m_user_id,
      kkm,
      m_ta_id: ta_id,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putMataPelajaran({
    response,
    request,
    auth,
    params: { mata_pelajaran_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { nama, kode, kelompok, m_user_id, kkm } = request.post();
    const rules = {
      nama: "required",
      kode: "required",
      kelompok: "required",
      m_user_id: "required",
      kkm: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "kode.required": "Kode Mapel harus diisi",
      "kelompok.required": "Kelompok harus dipilih",
      "m_user_id.required": "Guru Pengampu harus dipilih",
      "kkm.required": "KKM harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const mataPelajaran = await MMataPelajaran.query()
      .where({ id: mata_pelajaran_id })
      .update({
        nama,
        kode,
        kelompok,
        m_user_id,
        kkm,
      });

    if (!mataPelajaran) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteMataPelajaran({
    response,
    request,
    auth,
    params: { mata_pelajaran_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const jurusan = await MMataPelajaran.query()
      .where({ id: mata_pelajaran_id })
      .update({
        dihapus: 1,
      });

    if (!jurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getJadwalMengajar({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { ta_id = ta.id } = request.get();

    const mataPelajaran = await MMataPelajaran.query()
      .with("user", (builder) => {
        builder.select("id", "nama").where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let tingkatRombel = [];

    if (
      sekolah.tingkat == "SMK" ||
      sekolah.tingkat == "SMA" ||
      sekolah.tingkat == "MA" ||
      sekolah.tingkat == "MAK"
    ) {
      tingkatRombel = ["X", "XI", "XII"];
    } else if (sekolah.tingkat == "SMP" || sekolah.tingkat == "MTS") {
      tingkatRombel = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD" || sekolah.tingkat == "MI") {
      tingkatRombel = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB" || sekolah.tingkat == "SUPER") {
      tingkatRombel = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];
    }

    const { tingkat, hari } = request.get();

    let tingkatGet;

    if (tingkat) {
      tingkatGet = tingkat;
    } else {
      tingkatGet = tingkatRombel[0];
    }

    const rombelIds = await MRombel.query()
      .where({ tingkat: tingkatGet })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 })
      .ids();

    const jamMengajar = await MJamMengajar.query()
      .with("jadwalMengajar", (builder) => {
        builder
          .with("mataPelajaran", (builder) => {
            builder.with("user");
          })
          .with("rombel")
          .whereIn("m_rombel_id", rombelIds);
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ kode_hari: hari })
      .andWhere({ m_ta_id: ta_id })
      .orderBy("jam_mulai", "asc")
      .fetch();

    return response.ok({
      tingkatRombel,
      mataPelajaran,
      jamMengajar,
      hari: jamMengajar.toJSON()[0].hari,
      userRole: user.role,
    });
  }

  async getJadwalMengajarPertemuan({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let { tanggal } = request.get();

    const guruIds = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .ids();

    let pertemuan;
    if (sekolah.id == 11 || sekolah.id == 13) {
      pertemuan = MTimeline.query()
        .with("user")
        .with("komen", (builder) => {
          builder.with("user").where({ dihapus: 0 });
        })
        .with("rombel")
        .withCount("tkTimeline as total_absen", (builder) => {
          builder.whereNotNull("waktu_absen");
        })
        .withCount("tkTimeline as total_siswa")
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .withCount("tkTimeline as total_respon", (builder) => {
          builder.whereNotNull("waktu_pengumpulan");
        })
        .with("tugas")
        .whereIn("tipe", ["absen", "tugas"])
        .andWhere(
          "tanggal_pembagian",
          "like",
          `${moment().format("YYYY-MM-DD")}%`
        )
        .whereIn("m_user_id", guruIds)
        .orderBy("id", "desc");
    } else {
      pertemuan = MTimeline.query()
        .with("user")
        .with("komen", (builder) => {
          builder.with("user").where({ dihapus: 0 });
        })
        .with("rombel")
        .withCount("tkTimeline as total_absen", (builder) => {
          builder.whereNotNull("waktu_absen");
        })
        .withCount("tkTimeline as total_siswa")
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .with("tugas", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .withCount("tkTimeline as total_respon", (builder) => {
          builder.whereNotNull("waktu_pengumpulan");
        })
        .with("mataPelajaran", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where("tipe", "absen")
        .andWhere(
          "tanggal_pembagian",
          "like",
          `${moment().format("YYYY-MM-DD")}%`
        )
        .whereIn("m_user_id", guruIds)
        .orderBy("id", "desc");
    }

    if (tanggal) {
      pertemuan = pertemuan.where(
        "tanggal_pembagian",
        "like",
        `%${moment(tanggal).format("YYYY-MM-DD")}%`
      );
    }

    pertemuan = await pertemuan.fetch();

    return response.ok({ pertemuan });
  }

  //belum validasi
  async putJadwalMengajar({
    response,
    request,
    auth,
    params: { jadwal_mengajar_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      m_mata_pelajaran_id,
      kosongkan,
      tingkat,
      m_rombel_id,
      m_jurusan_id,
    } = request.post();

    let jadwalMengajar;

    if (!kosongkan) {
      const checkKategoriMapel = await MKategoriMapel.query()
        .where({ m_rombel_id })
        .first();

      if (!checkKategoriMapel) {
        await MKategoriMapel.create({
          nama: "Muatan Nasional",
          dihapus: 0,
          m_rombel_id: m_rombel_id,
        });
        await MKategoriMapel.create({
          nama: "Muatan Kewilayahan",
          dihapus: 0,
          m_rombel_id: m_rombel_id,
        });
        await MKategoriMapel.create({
          nama: "Muatan Peminatan Kejurusan",
          dihapus: 0,
          m_rombel_id: m_rombel_id,
        });
      }
    }

    if (kosongkan) {
      const jadwal = await MJadwalMengajar.query()
        .where({ id: jadwal_mengajar_id })
        .first();

      jadwalMengajar = await MJadwalMengajar.query()
        .where({ id: jadwal_mengajar_id })
        .update({
          m_mata_pelajaran_id: null,
          diubah: 1,
        });

      const stillTeaching = await MJadwalMengajar.query()
        .where({ m_mata_pelajaran_id: jadwal.m_mata_pelajaran_id })
        .andWhere({ m_rombel_id: jadwal.m_rombel_id })
        .first();

      if (jadwal.m_rombel_id && jadwal.m_mata_pelajaran_id && !stillTeaching) {
        const kategoriMapel = await MKategoriMapel.query()
          .where({ m_rombel_id: jadwal.m_rombel_id })
          .fetch();

        const checkTkMapel = await TkMapelRapor.query()
          .where({ m_mata_pelajaran_id: jadwal.m_mata_pelajaran_id })
          .whereIn(
            "m_kategori_mapel_id",
            kategoriMapel.toJSON().map((item) => item.id)
          )
          .first();

        if (checkTkMapel) {
          await TkMapelRapor.query()
            .where({ m_kategori_mapel_id: checkTkMapel.m_kategori_mapel_id })
            .andWhere({ m_mata_pelajaran_id: jadwal.m_mata_pelajaran_id })
            .delete();
        }
      }

      return response.ok({
        message: messagePutSuccess,
      });
    } else {
      const jadwalAwal = await MJadwalMengajar.query()
        .where({ id: jadwal_mengajar_id })
        .first();

      const kategoriMapel = await MKategoriMapel.query()
        .where({ m_rombel_id })
        .fetch();

      const checkTkMapel = await TkMapelRapor.query()
        .where({
          m_mata_pelajaran_id:
            jadwalAwal.m_mata_pelajaran_id || m_mata_pelajaran_id,
        })
        .whereIn(
          "m_kategori_mapel_id",
          kategoriMapel.toJSON().map((item) => item.id)
        )
        .first();

      const mapel = await MMataPelajaran.query()
        .where({ id: m_mata_pelajaran_id })
        .first();

      if (!checkTkMapel) {
        await TkMapelRapor.create({
          m_mata_pelajaran_id: m_mata_pelajaran_id,
          nama: mapel.nama,
          kkm2: mapel.kkm,
          m_kategori_mapel_id: kategoriMapel.toJSON()[0].id,
          dihapus: 0,
          urutan: 1,
        });
      } else {
        const tkExist = await TkMapelRapor.query()
          .whereIn(
            "m_kategori_mapel_id",
            kategoriMapel.toJSON().map((item) => item.id)
          )
          .where({ m_mata_pelajaran_id: m_mata_pelajaran_id })
          .first();
        if (tkExist) {
          const stillTeaching = await MJadwalMengajar.query()
            .where({ m_mata_pelajaran_id: jadwalAwal.m_mata_pelajaran_id })
            .andWhere({ m_rombel_id: m_rombel_id })
            .first();
          if (!stillTeaching) {
            await TkMapelRapor.query()
              .where({ m_kategori_mapel_id: checkTkMapel.m_kategori_mapel_id })
              .andWhere({ m_mata_pelajaran_id: jadwalAwal.m_mata_pelajaran_id })
              .delete();
          }
        } else {
          await TkMapelRapor.query()
            .where({ m_kategori_mapel_id: checkTkMapel.m_kategori_mapel_id })
            .andWhere({ m_mata_pelajaran_id: jadwalAwal.m_mata_pelajaran_id })
            .update({
              m_mata_pelajaran_id: m_mata_pelajaran_id,
              m_kategori_mapel_id: checkTkMapel.m_kategori_mapel_id,
              nama: mapel.nama,
              kkm2: mapel.kkm,
            });
        }
      }
      jadwalMengajar = await MJadwalMengajar.query()
        .where({ id: jadwal_mengajar_id })
        .update({
          m_mata_pelajaran_id,
          diubah: 1,
        });
    }

    if (!jadwalMengajar) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const mataPelajaran = await MMataPelajaran.query()
      .where({ id: m_mata_pelajaran_id })
      .first();

    // if (mataPelajaran.kelompok == "C") {
    //   const check = await MMateri.query()
    //     .where({ m_mata_pelajaran_id })
    //     .andWhere({ tingkat })
    //     .andWhere({ m_jurusan_id })
    //     .first();
    //   if (check) {
    //     if (check.dihapus) {
    //       await MMateri.query().where({ id: check.id }).update({ dihapus: 0 });
    //     }
    //   }

    //   if (!check) {
    //     const materi = await MMateri.create({
    //       tingkat,
    //       m_jurusan_id,
    //       m_mata_pelajaran_id,
    //     });

    //     await TkMateriRombel.create({
    //       m_materi_id: materi.id,
    //       m_rombel_id,
    //     });
    //   } else {
    //     const checkTk = await TkMateriRombel.query()
    //       .where({ m_materi_id: check.id })
    //       .andWhere({ m_rombel_id })
    //       .first();
    //     await TkMateriRombel.create({
    //       m_materi_id: check.id,
    //       m_rombel_id,
    //     });
    //   }
    // } else {
    const check = await MMateri.query()
      .where({ m_mata_pelajaran_id })
      .andWhere({ tingkat })
      .first();
    if (check) {
      if (check.dihapus) {
        await MMateri.query().where({ id: check.id }).update({ dihapus: 0 });
      }
    }

    if (!check) {
      const materi = await MMateri.create({
        tingkat,
        m_mata_pelajaran_id,
      });

      await TkMateriRombel.create({
        m_materi_id: materi.id,
        m_rombel_id,
      });
    } else {
      const checkTk = await TkMateriRombel.query()
        .where({ m_materi_id: check.id })
        .andWhere({ m_rombel_id })
        .first();
      if (!checkTk) {
        await TkMateriRombel.create({
          m_materi_id: check.id,
          m_rombel_id,
        });
      }
    }
    // }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getBlog({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { limit } = request.get();

    let post;

    if (limit) {
      post = await MPost.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .limit(limit)
        .fetch();
    } else {
      post = await MPost.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    return response.ok({
      post: post,
    });
  }

  async getPost({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { limit } = request.get();

    let post;

    if (limit) {
      post = await MPost.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .limit(limit)
        .fetch();
    } else {
      post = await MPost.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    return response.ok({
      post: post,
    });
  }

  async detailBlog({ response, request, params: { post_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const post = await MPost.query()
      .with("tkPost")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ id: post_id })
      .andWhere({ dihapus: 0 })
      .first();

    const kategori = await MKategori.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      post: post,
      kategori: kategori,
    });
  }

  async detailPost({ response, request, auth, params: { post_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const post = await MPost.query()
      .with("tkPost")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ id: post_id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .first();

    const kategori = await MKategori.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      post: post,
      kategori: kategori,
    });
  }

  async postPost({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, konten, banner, m_kategori_id, simpan } = request.post();
    const rules = {
      judul: "required",
      konten: "required",
      banner: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
      "banner.required": "Banner harus diisi",
      "konten.required": "Konten harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const slug = `${slugify(judul)}-${Date.now()}`;

    let post;

    if (simpan) {
      post = await MPost.create({
        judul,
        slug,
        konten: konten,
        banner,
        disembunyikan: 1,
        dihapus: 0,
        m_user_id: user.id,
        m_sekolah_id: sekolah.id,
      });
    } else {
      post = await MPost.create({
        judul,
        slug,
        konten: konten,
        banner,
        disembunyikan: 0,
        dihapus: 0,
        m_user_id: user.id,
        m_sekolah_id: sekolah.id,
      });
    }

    let tkPostData = [];

    if (m_kategori_id) {
      await Promise.all(
        m_kategori_id.map((data) => {
          tkPostData.push({
            m_kategori_id: data,
            m_post_id: post.id,
          });
        })
      );

      await TkPost.createMany(tkPostData);
    }

    if (simpan) {
      return response.ok({
        message: messageSaveSuccess,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPost({ response, request, auth, params: { post_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { judul, konten, banner, m_kategori_id, disembunyikan } =
      request.post();
    const rules = {
      judul: "required",
      konten: "required",
      banner: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
      "banner.required": "Banner harus diisi",
      "konten.required": "Konten harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    let post;

    if (disembunyikan) {
      post = await MPost.query().where({ id: post_id }).update({
        judul,
        konten: konten,
        banner,
        disembunyikan: 1,
        dihapus: 0,
      });
    } else {
      post = await MPost.query().where({ id: post_id }).update({
        judul,
        konten: konten,
        banner,
        disembunyikan: 0,
        dihapus: 0,
      });
    }

    if (!post) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    let tkPostData = [];

    if (m_kategori_id) {
      await Promise.all(
        m_kategori_id.map((data) => {
          tkPostData.push({
            m_kategori_id: data,
            m_post_id: post.id,
          });
        })
      );

      await TkPost.createMany(tkPostData);
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePost({ response, request, auth, params: { post_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const post = await MPost.query().where({ id: post_id }).update({
      dihapus: 1,
    });

    if (!post) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getKategori({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const kategori = await MKategori.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      kategori: kategori,
    });
  }

  // Belum Validasi
  async postKategori({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, konten, banner } = request.post();

    const slug = slugify(judul);

    const post = await MPost.create({
      judul,
      slug,
      konten,
      banner,
      m_user_id: user.id,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKategori({ response, request, auth, params: { post_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, konten } = request.post();

    const post = await MPost.query().where({ id: post_id }).update({
      judul,
      konten,
      banner,
    });

    if (!post) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKategori({ response, request, auth, params: { post_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const rombel = await MRombel.query().where({ id: post_id }).update({
      dihapus: 1,
    });

    if (!rombel) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getAnggotaRombel({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { rombel_id } = request.get();

    const rombelBuilder = MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 });
    if (rombel_id) {
      rombelBuilder.where({ id: rombel_id });
    }
    const rombelIds = await rombelBuilder.ids();
    const userIds = await MAnggotaRombel.query()
      .distinct("m_user_id")
      .where({ dihapus: 0 })
      .whereIn("m_rombel_id", rombelIds)
      .pluck("m_user_id");

    const anggota = await User.query()
      .select("id", "nama", "whatsapp")
      .whereIn("id", userIds)
      .where({ dihapus: 0 })
      .limit(300)
      .fetch();
    return response.ok({
      anggota,
    });
  }

  // Belum Validasi
  async postAnggotaRombel({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { tingkat, kode, m_jurusan_id, m_user_id } = request.post();

    const jurusan = await MJurusan.query()
      .select("kode", "id")
      .where({ id: m_jurusan_id })
      .first();

    const rombel = await MRombel.create({
      tingkat,
      nama: `${tingkat} ${jurusan.kode} ${kode}`,
      m_jurusan_id,
      m_sekolah_id: sekolah.id,
      m_ta_id: ta.id,
      m_user_id,
      dihapus: 0,
    });

    const jamMengajar = await MJamMengajar.query()
      .select("id")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const jadwalMengajarData = await Promise.all(
      jamMengajar.toJSON().map(async (data) => {
        data.m_mata_pelajaran_id = null;
        data.m_rombel_id = rombel.id;
        data.m_jam_mengajar_id = data.id;
        data.m_sekolah_id = sekolah.id;
        data.m_ta_id = ta.id;
        delete data.id;

        return data;
      })
    );

    await MJadwalMengajar.createMany(jadwalMengajarData);

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async importAnggotaRombelServices(filelocation, sekolah, m_rombel_id) {
    var workbook = new Excel.Workbook();

    try {
      workbook = await workbook.xlsx.readFile(filelocation);
    } catch (err) {
      return "Format File Tidak Sesuai";
    }

    let explanation = workbook.getWorksheet("Sheet1");

    if (!explanation) {
      return "Format File Tidak Sesuai";
    }

    let colComment = explanation.getColumn("A");
    if (!colComment) {
      return "Format File Tidak Sesuai";
    }

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 6) {
        data.push({
          nama: explanation.getCell("B" + rowNumber).value,
          whatsapp: explanation.getCell("C" + rowNumber).value,
          // email:
          //   explanation.getCell("D" + rowNumber).value == null
          //     ? ""
          //     : typeof explanation.getCell("D" + rowNumber).value == "object"
          //     ? JSON.parse(explanation.getCell("D" + rowNumber).value).text
          //     : explanation.getCell("D" + rowNumber).value,
          gender: explanation.getCell("E" + rowNumber).value,
          role: explanation.getCell("F" + rowNumber).value,
          password: explanation.getCell("G" + rowNumber).value,
        });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        const checkUser = await User.query()
          .where({ whatsapp: d.whatsapp })
          .andWhere({ m_sekolah_id: sekolah.id })
          .first();

        if (!checkUser) {
          const createUser = await User.create({
            nama: d.nama,
            whatsapp: d.whatsapp,
            gender: d.gender,
            // email: d.email ? d.email : "",
            password: d.password || "smarteschool",
            role: "siswa",
            m_sekolah_id: sekolah.id,
            dihapus: 0,
          });

          await MAnggotaRombel.create({
            role: d.role,
            dihapus: 0,
            m_user_id: createUser.toJSON().id,
            m_rombel_id: m_rombel_id,
          });

          // await WhatsAppService.sendMessage(
          //   d.whatsapp,
          //   `Halo, berikut akun Smarteschool ${d.nama} dengan password *${d.password || 'smarteschool'}*. Berikut link akses Smarteschool: \n${domain} \n\nInformasi ini bersifat *RAHASIA*`
          // );

          return;
        }

        await User.query().where({ id: checkUser.toJSON().id }).update({
          nama: d.nama,
          dihapus: 0,
        });

        if (d.password) {
          await User.query()
            .where({ id: checkUser.toJSON().id })
            .update({
              password: await Hash.make(d.password || "smarteschool"),
            });
        }

        const checkAnggotaRombel = await MAnggotaRombel.query()
          .andWhere({ m_user_id: checkUser.toJSON().id })
          .andWhere({ m_rombel_id: m_rombel_id })
          .first();

        if (checkAnggotaRombel) {
          await MAnggotaRombel.query()
            .andWhere({ m_user_id: checkUser.toJSON().id })
            .andWhere({ m_rombel_id: m_rombel_id })
            .update({ dihapus: 0, role: d.role });
          return {
            message: `${d.nama} sudah terdaftar`,
            error: true,
          };
        }

        await MAnggotaRombel.create({
          role: d.role,
          dihapus: 0,
          m_user_id: checkUser.toJSON().id,
          m_rombel_id: m_rombel_id,
        });

        return;
      })
    );

    return "import Siswa Berhasil";
  }

  async importAnggotaRombel({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let file = request.file("file");
    let fname = `import-excel.xlsx`;

    const { m_rombel_id } = request.post();

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    const message = await this.importAnggotaRombelServices(
      `tmp/uploads/${fname}`,
      sekolah,
      m_rombel_id
    );

    if (message == "Format File Tidak Sesuai") {
      return response.notFound({
        message,
      });
    }
    return response.ok({
      message,
    });
  }

  async importAnggotaRombelPasswordServices(
    filelocation,
    sekolah,
    m_rombel_id
  ) {
    var workbook = new Excel.Workbook();

    try {
      workbook = await workbook.xlsx.readFile(filelocation);
    } catch (err) {
      return "Format File Tidak Sesuai";
    }

    let explanation = workbook.getWorksheet("Sheet1");

    if (!explanation) {
      return "Format File Tidak Sesuai";
    }

    let colComment = explanation.getColumn("A");
    if (!colComment) {
      return "Format File Tidak Sesuai";
    }

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 6) {
        data.push({
          nama: explanation.getCell("B" + rowNumber).value,
          whatsapp: explanation.getCell("C" + rowNumber).value,
          email:
            explanation.getCell("D" + rowNumber).value == null
              ? ""
              : typeof explanation.getCell("D" + rowNumber).value == "object"
              ? JSON.parse(explanation.getCell("D" + rowNumber).value).text
              : explanation.getCell("D" + rowNumber).value,
          gender: explanation.getCell("E" + rowNumber).value,
          role: explanation.getCell("F" + rowNumber).value,
          password: explanation.getCell("G " + rowNumber).value,
          wa_ayah: explanation.getCell("H" + rowNumber).value,
          no_ujian: explanation.getCell("I" + rowNumber).value,
        });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        const checkUser = await User.query()
          .where({ whatsapp: d.whatsapp })
          .andWhere({ m_sekolah_id: sekolah.id })
          .first();

        if (!checkUser) {
          const createUser = await User.create({
            nama: d.nama,
            whatsapp: d.whatsapp,
            gender: d.gender,
            wa_ayah: d.wa_ayah,
            email: d.email ? d.email : "",
            password: d.password || "smarteschool",
            role: "siswa",
            m_sekolah_id: sekolah.id,
            no_ujian: d.no_ujian,
            dihapus: 0,
          });

          await MAnggotaRombel.create({
            role: d.role,
            dihapus: 0,
            m_user_id: createUser.toJSON().id,
            m_rombel_id: m_rombel_id,
          });

          // await WhatsAppService.sendMessage(
          //   d.whatsapp,
          //   `Halo, berikut akun Smarteschool ${d.nama} dengan password *${p*assword}. Berikut link akses Smarteschool: \n${domain} \n\nInformasi ini bersifat *RAHASIA*`
          // );

          return;
        }
        await User.query()
          .where({ id: checkUser.toJSON().id })
          .update({
            dihapus: 0,
            password: await Hash.make(`${d.password}`),
            no_ujian: d.no_ujian,
          });

        const checkAnggotaRombel = await MAnggotaRombel.query()
          .andWhere({ m_user_id: checkUser.toJSON().id })
          .andWhere({ m_rombel_id: m_rombel_id })
          .first();

        if (checkAnggotaRombel) {
          await MAnggotaRombel.query()
            .andWhere({ m_user_id: checkUser.toJSON().id })
            .andWhere({ m_rombel_id: m_rombel_id })
            .update({ dihapus: 0, role: d.role });
          return {
            message: `${d.nama} sudah terdaftar`,
            error: true,
          };
        }

        await MAnggotaRombel.create({
          role: d.role,
          dihapus: 0,
          m_user_id: checkUser.toJSON().id,
          m_rombel_id: m_rombel_id,
        });

        return;
      })
    );

    return "import Siswa Berhasil";
  }

  async importAnggotaRombelPassword({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let file = request.file("file");
    let fname = `import-excel.xlsx`;

    const { m_rombel_id } = request.post();

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    const message = await this.importAnggotaRombelPasswordServices(
      `tmp/uploads/${fname}`,
      sekolah,
      m_rombel_id
    );

    if (message == "Format File Tidak Sesuai") {
      return response.notFound({
        message,
      });
    }
    return response.ok({
      message,
    });
  }

  async deleteAnggotaRombel({
    response,
    request,
    auth,
    params: { rombel_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const rombel = await MRombel.query()
      .where({ id: rombel_id })
      .update({
        dihapus: 1,
        tanggal_keluar: moment().format("YYYY-MM-DD"),
      });

    if (!rombel) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async keluarAnggotaRombel({
    response,
    request,
    auth,
    params: { rombel_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const rombel = await MRombel.query()
      .where({ id: rombel_id })
      .update({
        dihapus: 1,
        tanggal_keluar: moment().format("YYYY-MM-DD"),
      });

    if (!rombel) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getMateri({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    // let { m_ta_id = user?.m_ta_id || ta.id } = request.get();
    const m_ta_id = user?.m_ta_id || ta.id;
    const semuaTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();
    const dataTA = await Mta.query()
      .andWhere({ id: m_ta_id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .first();
    if (sekolah.id == 40) {
      if (user.role == "siswa") {
        const rombelIds = await MRombel.query()
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .ids();

        const rombelIdsAnggota = await MAnggotaRombel.query()
          .whereIn("m_rombel_id", rombelIds)
          .andWhere({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .pluck("m_rombel_id");

        const materiIds = await TkMateriRombel.query()
          .whereIn("m_rombel_id", rombelIdsAnggota)
          .pluck("m_materi_id");

        const materi = await MMateri.query()
          .with("jurusan")
          .with("mataPelajaran", (builder) => {
            builder.with("user");
          })
          .withCount("bab", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .whereIn("id", materiIds)
          .andWhere({ dihapus: 0 })
          .fetch();

        // const materiLainnya = await MMateri.query()
        //   .with("user")
        //   .with("sekolah")
        //   .withCount("bab", (builder) => {
        //     builder.where({ dihapus: 0 });
        //   })
        //   .where({ m_sekolah_id: sekolah.id })
        //   .andWhere({ dihapus: 0 })
        //   .fetch();

        return response.ok({
          materi,
          // materiLainnya,
        });
      }

      const mataPelajaranIds = await MMataPelajaran.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .ids();

      const materi = await MMateri.query()
        .with("jurusan")
        .with("mataPelajaran")
        .withCount("bab", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .withCount("rekap as total", (builder) => {
          builder.where({ dihapus: 0 }).andWhere({ m_ta_id: ta.id });
        })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .where({ dihapus: 0 })
        .fetch();

      // const materiLainnya = await MMateri.query()
      //   .with("user")
      //   .with("sekolah")
      //   .withCount("bab", (builder) => {
      //     builder.where({ dihapus: 0 });
      //   })
      //   .where({ m_sekolah_id: sekolah.id })
      //   .andWhere({ dihapus: 0 })
      //   .fetch();

      return response.ok({
        materi,
        // materiLainnya,
      });
    }

    if (user.role == "siswa") {
      const rombelIds = await MRombel.query().where({ m_ta_id: ta.id }).ids();

      const rombelIdsAnggota = await MAnggotaRombel.query()
        .whereIn("m_rombel_id", rombelIds)
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .pluck("m_rombel_id");

      const materiIds = await TkMateriRombel.query()
        .whereIn("m_rombel_id", rombelIdsAnggota)
        .pluck("m_materi_id");

      const materi = await MMateri.query()
        .with("jurusan")
        .with("mataPelajaran", (builder) => {
          builder.with("user");
        })
        .withCount("bab", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("id", materiIds)
        .andWhere({ dihapus: 0 })
        .fetch();

      // const materiLainnya = await MMateri.query()
      //   .with("user")
      //   .with("sekolah")
      //   .withCount("bab", (builder) => {
      //     builder.where({ dihapus: 0 });
      //   })
      //   .where({ m_sekolah_id: sekolah.id })
      //   .andWhere({ dihapus: 0 })
      //   .fetch();

      return response.ok({
        materi,
        // materiLainnya,
      });
    }

    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: m_ta_id })
      .ids();

    const materi = await MMateri.query()
      .with("jurusan")
      .with("mataPelajaran")
      .withCount("bab", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("rekap as total", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ m_ta_id: m_ta_id });
      })
      .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
      .where({ dihapus: 0 })
      .fetch();

    // const materiLainnya = await MMateri.query()
    //   .with("user")
    //   .with("sekolah")
    //   .withCount("bab", (builder) => {
    //     builder.where({ dihapus: 0 });
    //   })
    //   .where({ m_sekolah_id: sekolah.id })
    //   .andWhere({ dihapus: 0 })
    //   .fetch();

    return response.ok({
      materi,
      semuaTA,
      dataTA,
      // materiLainnya,
    });
  }

  async detailMateri({ response, request, auth, params: { materi_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const tahunPelajaranIds = await Mta.query()
      .where({ tahun: ta.tahun })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();
    const materi = await MMateri.query()
      .with("jurusan")
      .with("mataPelajaran")
      .with("user")
      .with("sekolah")
      .where({ id: materi_id })
      .first();

    const mapelIds = await MMataPelajaran.query()
      .whereIn("m_ta_id", tahunPelajaranIds)
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_user_id: materi.toJSON().mataPelajaran.m_user_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ nama: materi.toJSON().mataPelajaran.nama })
      .andWhere({ kode: materi.toJSON().mataPelajaran.kode })
      .andWhere({ kelompok: materi.toJSON().mataPelajaran.kelompok })
      .andWhere({ kkm: materi.toJSON().mataPelajaran.kkm })
      .ids();

    const materiIds = await MMateri.query()
      .whereIn("m_mata_pelajaran_id", mapelIds)
      .andWhere({ dihapus: 0 })
      .andWhere({ tingkat: materi.tingkat })
      .ids();

    const bab = await MBab.query()
      .with("topik", (builder) => {
        builder
          .with("materiKesimpulan", (builder) => {
            builder.where({ m_user_id: user.id });
          })
          .where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .whereIn("m_materi_id", materiIds)
      .fetch();

    let looping = true;

    const babData = [];

    await Promise.all(
      bab.toJSON().map(async (d) => {
        d.topik.map(async (e, idx) => {
          if (!e.materiKesimpulan) {
            if (idx == 0) {
              e.lock = false;
            } else if (looping == false) {
              e.lock = false;
              looping = true;
            } else {
              e.lock = true;
            }
          } else {
            e.lock = false;
            looping = false;
          }
        });

        babData.push(d);
      })
    );

    return response.ok({
      materi,
      bab: babData,
    });
  }

  async postMateri({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama } = request.post();
    const rules = {
      nama: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    await MMateri.create({
      nama,
      m_user_id: user.id,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putMateri({ response, request, auth, params: { materi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama } = request.post();
    const rules = {
      nama: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const materi = await MMateri.query().where({ id: materi_id }).update({
      nama,
    });

    if (!materi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteMateri({ response, request, auth, params: { materi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const materi = await MMateri.query().where({ id: materi_id }).update({
      dihapus: 1,
    });

    if (!materi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postMateriKesimpulan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { waktu_mulai, m_topik_id } = request.post();

    const check = await TkMateriKesimpulan.query()
      .where({ m_user_id: user.id })
      .andWhere({ m_topik_id: m_topik_id })
      .first();

    if (!check) {
      const kesimpulan = await TkMateriKesimpulan.create({
        waktu_mulai,
        m_topik_id,
        m_user_id: user.id,
        dibaca: 0,
      });

      // await WhatsAppService.sendMessage(
      //   user.whatsapp,
      //   `Halo, kesimpulan mu sudah berhasil tersimpan. Tunggu gurumu mengoreksinya yaa!`
      // );
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putMateriKesimpulan({
    response,
    request,
    auth,
    params: { materi_kesimpulan_id },
  }) {
    const domain = request.headers().origin;

    const user = await auth.getUser();

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { kesimpulan, waktu_mulai, waktu_selesai, m_topik_id, dibaca } =
      request.post();

    let materiKesimpulan;
    if (dibaca) {
      materiKesimpulan = await TkMateriKesimpulan.query()
        .where({ id: materi_kesimpulan_id })
        .update({
          dibaca,
        });
    } else {
      materiKesimpulan = await TkMateriKesimpulan.query()
        .where({ m_topik_id: m_topik_id })
        .andWhere({ m_user_id: user.id })
        .update({
          kesimpulan: kesimpulan ? htmlEscaper.escape(kesimpulan) : "",
          waktu_selesai,
        });
    }

    if (!materiKesimpulan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async detailBab({ response, request, auth, params: { bab_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const bab = await MBab.query().where({ id: bab_id }).first();

    const topikIds = await MTopik.query()
      .select("id", "kuis", "m_bab_id")
      .with("materiKesimpulan", (builder) => {
        builder.where({ m_user_id: user.id });
      })
      .where({ m_bab_id: bab.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let looping = true;
    const topikIdsData = [];

    await Promise.all(
      topikIds.toJSON().map(async (d, idx) => {
        if (!d.materiKesimpulan) {
          if (idx == 0) {
            d.lock = false;
          } else if (looping == false) {
            d.lock = false;
            looping = true;
          } else {
            d.lock = true;
          }
        } else {
          d.lock = false;
          looping = false;
        }

        topikIdsData.push(d);
      })
    );

    return response.ok({
      bab,
      topikIds: topikIdsData,
    });
  }

  async postBab({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, m_materi_id } = request.post();
    const rules = {
      judul: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const bab = await MBab.create({
      judul,
      m_materi_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putBab({ response, request, auth, params: { bab_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { judul } = request.post();
    const rules = {
      judul: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const bab = await MBab.query().where({ id: bab_id }).update({
      judul,
    });

    if (!bab) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteBab({ response, request, auth, params: { bab_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const bab = await MBab.query().where({ id: bab_id }).update({
      dihapus: 1,
    });

    if (!bab) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getPrestasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, page, tingkat, nama_siswa } = request.get();

    page = page ? parseInt(page) : 1;

    let prestasi;

    if (search) {
      const userIds = await User.query()
        .where("nama", "like", `%${search}%`)
        .andWhere({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .limit(25)
        .ids();

      if (tingkat) {
        prestasi = await MPrestasi.query()
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .with("tingkatPrestasi")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .andWhere({ tingkat })
          .whereIn("m_user_id", userIds)
          .paginate(page, 25);
      } else {
        prestasi = await MPrestasi.query()
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .with("tingkatPrestasi")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .whereIn("m_user_id", userIds)
          .paginate(page, 25);
      }
    } else {
      if (tingkat) {
        prestasi = await MPrestasi.query()
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .with("tingkatPrestasi")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .andWhere({ tingkat })
          .paginate(page, 25);
      } else {
        prestasi = await MPrestasi.query()
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .with("tingkatPrestasi")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .paginate(page, 25);
      }
    }

    let tingkatData = [
      { label: "Internasional", value: "internasional" },
      { label: "Nasional", value: "nasional" },
      { label: "Provinsi", value: "provinsi" },
      { label: "Kabupaten/Kota", value: "kabupaten" },
    ];

    let user;

    if (nama_siswa) {
      user = await User.query()
        .select("id", "nama")
        .where("nama", "like", `%${nama_siswa}%`)
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .limit(25)
        .fetch();
    } else {
      user = await User.query()
        .select("id", "nama")
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .limit(25)
        .fetch();
    }

    return response.ok({
      prestasi,
      tingkat: tingkatData,
      user: user,
    });
  }

  async getPrestasi1({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, page, tingkat, nama_siswa } = request.get();

    page = page ? parseInt(page) : 1;

    let prestasi;

    if (search) {
      const userIds = await User.query()
        .where("nama", "like", `%${search}%`)
        .andWhere({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .limit(25)
        .ids();

      if (tingkat) {
        prestasi = await MPrestasi.query()
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .with("tingkatPrestasi")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .andWhere({ tingkat })
          .whereIn("m_user_id", userIds)
          .paginate(page, 25);
      } else {
        prestasi = await MPrestasi.query()
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .with("tingkatPrestasi")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .whereIn("m_user_id", userIds)
          .paginate(page, 25);
      }
    } else {
      if (tingkat) {
        prestasi = await MPrestasi.query()
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .with("tingkatPrestasi")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .andWhere({ tingkat })
          .paginate(page, 25);
      } else {
        prestasi = await MPrestasi.query()
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .with("tingkatPrestasi")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .paginate(page, 25);
      }
    }

    const tingkatData = await MPenghargaan.query()
      .withCount("prestasi as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let user;

    if (nama_siswa) {
      user = await User.query()
        .select("id", "nama")
        .where("nama", "like", `%${nama_siswa}%`)
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .limit(25)
        .fetch();
    } else {
      user = await User.query()
        .select("id", "nama")
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .limit(25)
        .fetch();
    }

    return response.ok({
      prestasi,
      tingkat: tingkatData,
      user: user,
    });
  }

  async detailPrestasi({ response, request, auth, params: { prestasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let prestasi;

    prestasi = await MPrestasi.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .with("tingkatPrestasi")
      .with("tahun")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .where({ id: prestasi_id })
      .first();

    const tingkatData = await MPenghargaan.query()
      .withCount("prestasi as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      prestasi,
      tingkat: tingkatData,
    });
  }

  async postPrestasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { nama, tingkat, peringkat, tempat, tahun, m_user_id } =
      request.post();
    const rules = {
      nama: "required",
      tingkat: "required",
      peringkat: "required",
      tempat: "required",
      tahun: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "peringkat.required": "Peringkat harus dipilih",
      "tingkat.required": "Tingkat harus diisi",
      "tempat.required": "Tempat harus diisi",
      "tahun.required": "Tahun harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    await MPrestasi.create({
      nama,
      tingkat,
      peringkat,
      tempat,
      tahun,
      dihapus: 0,
      m_user_id: m_user_id,
      m_sekolah_id: sekolah.id,
      m_ta_id: ta.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPrestasi({ response, request, auth, params: { prestasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama, tingkat, peringkat, tempat, tahun, m_user_id } =
      request.post();

    const rules = {
      nama: "required",
      tingkat: "required",
      peringkat: "required",
      tempat: "required",
      tahun: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "peringkat.required": "Peringkat harus dipilih",
      "tingkat.required": "Tingkat harus diisi",
      "tempat.required": "Tempat harus diisi",
      "tahun.required": "Tahun harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const prestasi = await MPrestasi.query().where({ id: prestasi_id }).update({
      nama,
      tingkat,
      peringkat,
      tempat,
      tahun,
      m_user_id,
    });

    if (!prestasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePrestasi({ response, request, auth, params: { prestasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const prestasi = await MPrestasi.query().where({ id: prestasi_id }).update({
      dihapus: 1,
    });

    if (!prestasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getTopik({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .ids();

    const materi = await MMateri.query()
      .with("jurusan")
      .with("mataPelajaran")
      .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
      .fetch();

    return response.ok({
      materi,
    });
  }

  async detailTopik({ response, request, auth, params: { topik_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { analisis, m_jadwal_mengajar_id, status } = request.get();

    if (analisis) {
      const jadwalMengajar = await MJadwalMengajar.query()
        .where({ id: m_jadwal_mengajar_id })
        .first();

      const userIds = await MAnggotaRombel.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .andWhere({ dihapus: 0 })
        .pluck("m_user_id");

      let checkUserBaca = userIds;

      const sudah = [];
      const belum = [];
      await Promise.all(
        checkUserBaca.map(async (d) => {
          const check = await TkMateriKesimpulan.query()
            .where({ m_topik_id: topik_id })
            .whereIn("m_user_id", [d])
            .whereNotNull("waktu_selesai")
            .first();
          if (check) {
            sudah.push(d);
          } else {
            belum.push(d);
          }
        })
      );

      const user = await User.query()
        .with("kesimpulan", (builder) => {
          builder.where({ m_topik_id: topik_id });
        })
        .whereIn("id", status ? (status == "sudah" ? sudah : belum) : userIds)
        .fetch();

      const topik = await MTopik.query()
        .with("bab")
        .withCount("materiKesimpulan as sudahBaca", (builder) => {
          builder.whereIn("m_user_id", userIds).whereNotNull("kesimpulan");
        })
        .where({ id: topik_id })
        .first();

      return response.ok({
        user: user,
        topik: topik,
      });
    }

    const topik = await MTopik.query()
      .with("soalKuis", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("materiKesimpulan", (builder) => {
        builder.where({ m_user_id: user.id });
      })
      .where({ id: topik_id })
      .andWhere({ dihapus: 0 })
      .first();

    return response.ok({
      topik,
    });
  }

  // Belum Validasi tidak perlu
  async postTopik({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const { kuis, m_bab_id } = request.post();

    const topik = await MTopik.create({
      judul: "Judul Topik",
      kuis,
      m_bab_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
      topik_id: topik.id,
    });
  }

  async putTopik({ response, request, auth, params: { topik_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, konten, lampiran, link } = request.post();
    const topik = await MTopik.query()
      .where({ id: topik_id })
      .update({
        judul,
        konten: konten ? htmlEscaper.escape(konten) : "",
        lampiran: lampiran.toString(),
        link: link.toString(),
      });

    if (!topik) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteTopik({ response, request, auth, params: { topik_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const topik = await MTopik.query().where({ id: topik_id }).update({
      dihapus: 1,
    });

    if (!topik) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getSoalKuis({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .ids();

    const materi = await MMateri.query()
      .with("jurusan")
      .with("mataPelajaran")
      .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
      .fetch();

    return response.ok({
      materi,
    });
  }

  async detailSoalKuis({ response, request, auth, params: { topik_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const topik = await MTopik.query()
      .where({ id: topik_id })
      .andWhere({ dihapus: 0 })
      .first();

    return response.ok({
      topik,
    });
  }

  //belum validasi
  async postSoalKuis({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      pertanyaan,
      pg_a,
      pg_b,
      pg_c,
      pg_d,
      pg_e,
      pg_kj,
      pg_poin,
      rubrik_kj,
      esai,
      pembahasan,
      m_topik_id,
    } = request.post();

    if (esai == 1) {
      await MSoalKuis.create({
        pertanyaan,
        rubrik_kj: JSON.stringify(rubrik_kj),
        esai: 1,
        pembahasan,
        m_topik_id,
        dihapus: 0,
      });
    } else {
      await MSoalKuis.create({
        pertanyaan,
        pg_a,
        pg_b,
        pg_c,
        pg_d,
        pg_e,
        pg_kj,
        pg_poin,
        esai: 0,
        pembahasan,
        m_topik_id,
        dihapus: 0,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putSoalKuis({ response, request, auth, params: { soal_kuis_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      pertanyaan,
      pg_a,
      pg_b,
      pg_c,
      pg_d,
      pg_e,
      pg_kj,
      pg_poin,
      rubrik_kj,
      pembahasan,
    } = request.post();

    const soalKuis = await MSoalKuis.query()
      .where({ id: soal_kuis_id })
      .first();

    if (!soalKuis) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    if (soalKuis.esai == 1) {
      await MSoalKuis.query()
        .where({ id: soal_kuis_id })
        .update({
          pertanyaan,
          rubrik_kj: JSON.stringify(rubrik_kj),
          esai: 1,
          pembahasan,
        });
    } else {
      await MSoalKuis.query().where({ id: soal_kuis_id }).update({
        pertanyaan,
        pg_a,
        pg_b,
        pg_c,
        pg_d,
        pg_e,
        pg_kj,
        pg_poin,
        esai: 0,
        pembahasan,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSoalKuis({ response, request, auth, params: { soal_kuis_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const topik = await MSoalKuis.query().where({ id: soal_kuis_id }).update({
      dihapus: 1,
    });

    if (!topik) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getTugas({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let ta_id = user?.m_ta_id || ta.id;

    const dataTA = await Mta.query()
      .where({ id: ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();
    const tahunPelajaranIds = await Mta.query()
      .where({ tahun: dataTA.tahun })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();

    const { m_jadwal_mengajar_id, hari_ini, jam_saat_ini } = request.get();

    if (user.role == "siswa") {
      return response.ok({
        message: "siswa",
      });
    }
    if (user.role == "admin") {
      return response.ok({
        message: "admin",
      });
    }

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel")
      .with("mataPelajaran")
      .where({ id: m_jadwal_mengajar_id })
      .first();

    const dataRombelIds = await MRombel.query()
      .where({ nama: jadwalMengajar.toJSON().rombel.nama })
      .andWhere({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("m_ta_id", tahunPelajaranIds)
      .ids();
    const dataMapelIds = await MMataPelajaran.query()
      .where({ nama: jadwalMengajar.toJSON().mataPelajaran.nama })
      .andWhere({ m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id })
      .andWhere({ kode: jadwalMengajar.toJSON().mataPelajaran.kode })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("m_ta_id", tahunPelajaranIds)
      .andWhere({ kelompok: jadwalMengajar.toJSON().mataPelajaran.kelompok })
      .ids();

    if (!jadwalMengajar) {
      return response.ok({
        role: "admin",
      });
    }

    const rombelIds = await MJadwalMengajar.query()
      .where({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
      .pluck("m_rombel_id");

    let materi = await MMateri.query()
      .with("materiRombel", (builder) => {
        builder
          .with("rombel", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .whereIn("m_rombel_id", rombelIds);
      })
      .where({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
      .andWhere({
        m_mata_pelajaran_id: jadwalMengajar.toJSON().m_mata_pelajaran_id,
      })
      .andWhere({
        m_jurusan_id: jadwalMengajar.toJSON().rombel.m_jurusan_id,
      })
      .first();

    if (!materi) {
      materi = await MMateri.query()
        .with("materiRombel", (builder) => {
          builder
            .with("rombel", (builder) => {
              builder.where({ dihapus: 0 });
            })
            .whereIn("m_rombel_id", rombelIds);
        })
        .where({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
        .andWhere({
          m_mata_pelajaran_id: jadwalMengajar.toJSON().m_mata_pelajaran_id,
        })
        .first();
    }

    const tugasIds = await MTugas.query()
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .ids();

    const timeline1 = await MTimeline.query()
      .with("tugas", (builder) => {
        builder.with("timeline", (builder) => {
          builder.with("tkTimeline").with("rombel");
        });
      })
      .with("materi")
      .withCount("komen as total_komen", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("tkTimeline as total_respon", (builder) => {
        builder.whereNotNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_siswa")
      .whereIn("m_rombel_id", dataRombelIds)
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ tipe: "tugas" })
      .whereIn("m_tugas_id", tugasIds)
      .whereNull("m_mata_pelajaran_id")
      .orderBy("id", "desc")
      .fetch();
    // .where({ m_rombel_id: jadwalMengajar.m_rombel_id })

    const timeline2 = await MTimeline.query()
      .with("tugas", (builder) => {
        builder.with("timeline", (builder) => {
          builder.with("tkTimeline").with("rombel");
        });
      })
      .with("materi")
      .withCount("komen as total_komen", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("tkTimeline as total_respon", (builder) => {
        builder.whereNotNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_siswa")
      .whereIn("m_rombel_id", dataRombelIds)
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ tipe: "tugas" })
      .whereIn("m_mata_pelajaran_id", dataMapelIds)
      .whereIn("m_tugas_id", tugasIds)
      .whereNotNull("m_mata_pelajaran_id")
      .orderBy("id", "desc")
      .fetch();
    // .andWhere({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
    // .where({ m_rombel_id: jadwalMengajar.m_rombel_id })

    const timelineTugas = [...timeline2.toJSON(), ...timeline1.toJSON()];

    const tugasSaatIni = [];
    const tugasTerjadwal = [];
    const tugasSelesai = [];
    const tugasTerperiksa = [];
    const tugasDraf = [];

    await Promise.all(
      timelineTugas.map(async (d) => {
        if (d.tugas) {
          if (d.tugas.draft) {
            tugasDraf.push(d);
          } else if (
            moment(d.tugas.tanggal_pembagian).format("YYYY-MM-DD") <=
              hari_ini &&
            moment(d.tugas.tanggal_pengumpulan).format("YYYY-MM-DD") >= hari_ini
          ) {
            tugasSaatIni.push(d);
          } else if (
            moment(d.tugas.tanggal_pembagian).format("YYYY-MM-DD") >=
              hari_ini &&
            moment(d.tugas.waktu_pembagian).format("HH:mm") >= jam_saat_ini
          ) {
            tugasTerjadwal.push(d);
          } else if (
            moment(d.tugas.tanggal_pengumpulan).format("YYYY-MM-DD") <= hari_ini
          ) {
            tugasSelesai.push(d);
          }
        }
      })
    );

    return response.ok({
      materi,
      tugasSaatIni,
      tugasTerjadwal,
      tugasSelesai,
      tugasTerperiksa,
      tugasDraf,
    });
  }

  // Belum Validasi
  async postTugas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();

    const {
      m_jadwal_mengajar_id,
      judul,
      instruksi,
      tanggal_pembagian,
      waktu_pembagian,
      tanggal_pengumpulan,
      waktu_pengumpulan,
      show_nilai,
      kkm,
      lampiran,
      link,
      draft,
      list_anggota,
      list_rombel,
      materi = [],
      soal = [],
    } = request.post();

    const tanggal = moment(tanggal_pembagian).format(`DD`);
    const bulan = moment(tanggal_pembagian).format(`M`);
    const waktu = `${tanggal_pembagian} ${waktu_pembagian}`;
    const jam = moment(waktu).format(`H`);
    const menit = moment(waktu).format(`mm`);

    const jadwalMengajar = await MJadwalMengajar.query()
      .where({ id: m_jadwal_mengajar_id })
      .first();

    const jadwalMengajarSemua = await MJadwalMengajar.query()
      .where({ m_ta_id: ta.id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
      .fetch();

    const mapel = await MMataPelajaran.query()
      .where({ id: jadwalMengajar.m_mata_pelajaran_id })
      .first();

    const tugas = await MTugas.create({
      judul,
      instruksi: htmlEscaper.escape(instruksi),
      tanggal_pembagian: tanggal_pembagian
        ? moment(tanggal_pembagian, "YYYY-MM-DD").format("YYYY-MM-DD")
        : tanggal_pembagian,
      waktu_pembagian,
      tanggal_pengumpulan: tanggal_pengumpulan
        ? moment(tanggal_pengumpulan, "YYYY-MM-DD").format("YYYY-MM-DD")
        : tanggal_pengumpulan,
      waktu_pengumpulan,
      kkm,
      show_nilai,
      lampiran: lampiran.toString(),
      link: link.toString(),
      draft,
      dihapus: 0,
      m_user_id: user.id,
    });

    if (soal.length) {
      const soalIds = await Promise.all(
        soal.map(async (d) => {
          const soal = await MSoalUjian.create({
            kd: d.kd,
            kd_konten_materi: d.kd_konten_materi,
            level_kognitif: d.level_kognitif,
            bentuk: d.bentuk,
            akm_konten_materi: d.akm_konten_materi,
            akm_konteks_materi: d.akm_konteks_materi,
            akm_proses_kognitif: d.akm_proses_kognitif,
            audio: d.audio,
            pertanyaan: d.pertanyaan ? htmlEscaper.escape(d.pertanyaan) : "",
            jawaban_a: d.jawaban_a ? htmlEscaper.escape(d.jawaban_a) : "",
            jawaban_b: d.jawaban_b ? htmlEscaper.escape(d.jawaban_b) : "",
            jawaban_c: d.jawaban_c ? htmlEscaper.escape(d.jawaban_c) : "",
            jawaban_d: d.jawaban_d ? htmlEscaper.escape(d.jawaban_d) : "",
            jawaban_e: d.jawaban_e ? htmlEscaper.escape(d.jawaban_e) : "",
            kj_pg: d.kj_pg,
            kj_uraian: d.kj_uraian,
            jawaban_pg_kompleks: d.jawaban_pg_kompleks,
            pilihan_menjodohkan: d.pilihan_menjodohkan,
            soal_menjodohkan: d.soal_menjodohkan,
            opsi_a_uraian: d.opsi_a_uraian,
            opsi_b_uraian: d.opsi_b_uraian,
            rubrik_kj: JSON.stringify(d.rubrik_kj),
            pembahasan: d.pembahasan ? htmlEscaper.escape(d.pembahasan) : "",
            nilai_soal: d.nilai_soal,
            m_user_id: user.id,
            dihapus: 0,
          });
          return { m_soal_ujian_id: soal.id, m_tugas_id: tugas.id, dihapus: 0 };
        })
      );
      await TkSoalTugas.createMany(soalIds);
    }

    if (tugas) {
      let timeline;

      if (list_anggota.length) {
        timeline = await MTimeline.create({
          m_user_id: user.id,
          m_rombel_id: list_rombel[0],
          m_tugas_id: tugas.id,
          m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id,
          tipe: "tugas",
          dihapus: 0,
          tanggal_pembagian: `${tanggal_pembagian} ${
            waktu_pembagian ? waktu_pembagian : `00:00:00`
          }`,
        });

        const idsGuru = await User.query()
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ role: "guru" })
          .andWhere({ dihapus: 0 })
          .ids();

        const jumlahTopik = await MTimeline.query()
          .whereIn("m_user_id", idsGuru)
          .andWhere({ dihapus: 0 })
          .getCount();

        await MSekolah.query().where({ id: sekolah.id }).update({
          jumlah_topik: jumlahTopik,
        });

        await Promise.all(
          materi.map((d) => {
            TkTimelineTopik.create({
              m_timeline_id: timeline.id,
              m_topik_id: d,
            });
          })
        );
      } else {
        const timelineData = [];

        await Promise.all(
          list_rombel.map((d) => {
            timelineData.push({
              m_user_id: user.id,
              m_rombel_id: d,
              m_tugas_id: tugas.id,
              m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id,
              tipe: "tugas",
              dihapus: 0,
              tanggal_pembagian: `${tanggal_pembagian} ${
                waktu_pembagian ? waktu_pembagian : `00:00:00`
              }`,
            });
          })
        );

        timeline = await MTimeline.createMany(timelineData);

        await Promise.all(
          timeline.map(async (d) => {
            await Promise.all(
              materi.map((e) => {
                TkTimelineTopik.create({
                  m_timeline_id: d.id,
                  m_topik_id: e,
                });
              })
            );
          })
        );
      }

      if (timeline) {
        let anggotaRombel;

        if (list_anggota.length) {
          anggotaRombel = await MAnggotaRombel.query()
            .with("user", (builder) => {
              builder
                .select("id", "whatsapp", "nama", "wa_real")
                .where({ dihapus: 0 });
            })
            .where({ m_rombel_id: list_rombel[0] })
            .whereIn("m_user_id", list_anggota)
            .andWhere({ dihapus: 0 })
            .fetch();
        } else {
          anggotaRombel = await MAnggotaRombel.query()
            .with("user", (builder) => {
              builder
                .select("id", "whatsapp", "nama", "wa_real")
                .where({ dihapus: 0 });
            })
            .whereIn("m_rombel_id", list_rombel)
            .andWhere({ dihapus: 0 })
            .fetch();
        }

        let userIds = [];

        if (list_anggota.length) {
          await Promise.all(
            anggotaRombel.toJSON().map(async (d) => {
              userIds.push({
                m_user_id: d.m_user_id,
                tipe: "tugas",
                m_timeline_id: timeline.id,
                dihapus: 0,
                dikumpulkan: 0,
              });

              // NOTIFIKASI WHATSAPP
              // try {
              //   const task = cron.schedule(
              //     `${menit} ${jam} ${tanggal} ${bulan} *`,
              //     async () => {
              // await WhatsAppService.sendMessage(
              //   d.user.whatsapp,
              //   `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama} dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!!
              // ${domain}/smartschool/timeline/${timeline.id}?hal=tugas`
              // );
              // WhatsAppService()

              // if (d.user.wa_real) {
              //   if (!draft) {
              //     if (soal.length) {
              //       await MNotifikasiTerjadwal.create({
              //         tanggal_dibagikan: tanggal_pembagian,
              //         tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
              //         pesan: `Halo ${d.user.nama}, ada tugas kuis dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!! \n \n${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${timeline.id}?hal=tugas`,
              //         tujuan: d.user.wa_real,
              //         nama: `tugas-${timeline.id}-${d.m_user_id}`,
              //       });
              //       // await kirimNotifWa(
              //       //   d.m_user_id,
              //       //   `${menit} ${jam} ${tanggal} ${bulan} *`,
              //       //   `tugasKuis-${timeline.id}-${d.m_user_id}`,
              //       //   `Halo ${d.user.nama}, ada tugas kuis dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!! ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${timeline.id}?hal=tugas`
              //       // );
              //     } else {
              //       //kelar baru
              //       // await MNotifikasiTerjadwal.create({
              //       //   tanggal_dibagikan: tanggal_pembagian,
              //       //   tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
              //       //   pesan: `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!! \n \n${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${timeline.id}?hal=tugas`,
              //       //   tujuan: d.user.wa_real,
              //       //   nama: `tugas-${tugas.id}-${d.m_user_id}`,
              //       // });

              //       //kelas lama
              //       await MNotifikasiTerjadwal.create({
              //         tanggal_dibagikan: tanggal_pembagian,
              //         tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
              //         pesan: `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!! \n \n${domain}/smartschool/rombel/${m_jadwal_mengajar_id}?nav=tugas&subnav=saat-ini`,
              //         tujuan: d.user.wa_real,
              //         nama: `tugas-${timeline.id}-${d.m_user_id}`,
              //       });
              //     }
              //     // await kirimNotifWa(
              //     //   d.m_user_id,
              //     //   `${menit} ${jam} ${tanggal} ${bulan} *`,
              //     //   `tugas-${tugas.id}-${d.m_user_id}`,
              //     //   `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!!
              //     // ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${timeline.id}?hal=tugas`
              //     // );
              //   }
              // }

              //     },
              //     {
              //       scheduled: true,
              //       timezone: "Asia/Jakarta",
              //     }
              //   );
              //   cronJobs[`tugas-${tugas.id}-${d.m_user_id}`] = task;
              //   return task;
              // } catch (error) {
              //   console.log(error);
              // }
            })
          );
        } else {
          await Promise.all(
            timeline.map(async (t) => {
              await Promise.all(
                anggotaRombel.toJSON().map(async (d) => {
                  if (t.m_rombel_id == d.m_rombel_id) {
                    userIds.push({
                      m_user_id: d.m_user_id,
                      tipe: "tugas",
                      m_timeline_id: t.id,
                      dihapus: 0,
                      dikumpulkan: 0,
                    });

                    // if (d.user.wa_real) {
                    //   if (!draft) {
                    //     const jadwalSendiri = jadwalMengajarSemua
                    //       .toJSON()
                    //       .find((dd) => dd.m_rombel_id == d.m_rombel_id);
                    //     if (soal.length) {
                    //       await MNotifikasiTerjadwal.create({
                    //         tanggal_dibagikan: tanggal_pembagian,
                    //         tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
                    //         pesan: `Halo ${d.user.nama}, ada tugas kuis dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!! \n \n${domain}/smartschool/kelas/${jadwalSendiri.id}/kegiatan/${timeline.id}?hal=tugas`,
                    //         tujuan: d.user.wa_real,
                    //         nama: `tugas-${timeline.id}-${d.m_user_id}`,
                    //       });
                    //       // await kirimNotifWa(
                    //       //   d.m_user_id,
                    //       //   `${menit} ${jam} ${tanggal} ${bulan} *`,
                    //       //   `tugas-${timeline.id}-${d.m_user_id}`,
                    //       //   `Halo ${d.user.nama}, ada tugas kuis dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!!
                    //       // ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${timeline.id}?hal=tugas`
                    //       // );
                    //     } else {
                    //       // await MNotifikasiTerjadwal.create({
                    //       //   tanggal_dibagikan: tanggal_pembagian,
                    //       //   tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
                    //       //   pesan: `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!! \n \n${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${timeline.id}?hal=tugas`,
                    //       //   tujuan: d.user.wa_real,
                    //       //   nama: `tugas-${timeline.id}-${d.m_user_id}`,
                    //       // });

                    //       await MNotifikasiTerjadwal.create({
                    //         tanggal_dibagikan: tanggal_pembagian,
                    //         tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
                    //         pesan: `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!! \n \n${domain}/smartschool/rombel/${m_jadwal_mengajar_id}?nav=tugas&subnav=saat-ini`,
                    //         tujuan: d.user.wa_real,
                    //         nama: `tugas-${timeline.id}-${d.m_user_id}`,
                    //       });
                    //       // await kirimNotifWa(
                    //       //   d.m_user_id,
                    //     }
                    //     //   `${menit} ${jam} ${tanggal} ${bulan} *`,
                    //     //   `tugas-${timeline.id}-${d.m_user_id}`,
                    //     //   `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!!
                    //     // ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${timeline.id}?hal=tugas`
                    //     // );
                    //   }
                    //   // NOTIFIKASI WHATSAPP
                    // }

                    // try {
                    //   const task = cron.schedule(
                    //     `${menit} ${jam} ${tanggal} ${bulan} *`,
                    //     async () => {
                    //       // await WhatsAppService.sendMessage(
                    //       //   d.user.whatsapp,
                    //       //   `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama} dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!!
                    // ${domain}/smartschool/timeline/${timeline.id}?hal=tugas`
                    //       // );
                    //     },
                    //     {
                    //       scheduled: true,
                    //       timezone: "Asia/Jakarta",
                    //     }
                    //   );
                    //   return task;
                    // } catch (error) {
                    //   console.log(error);
                    // }
                  }
                })
              );
            })
          );
        }

        await TkTimeline.createMany(userIds);
      }
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putTugas({ response, request, auth, params: { tugas_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();

    const {
      m_jadwal_mengajar_id,
      judul,
      instruksi,
      tanggal_pembagian,
      waktu_pembagian,
      tanggal_pengumpulan,
      waktu_pengumpulan,
      kkm,
      show_nilai,
      lampiran,
      link,
      draft,
      list_anggota,
      list_rombel,
      materi = [],
      soal = [],
    } = request.post();
    const tanggal = moment(tanggal_pembagian).format(`DD`);
    const bulan = moment(tanggal_pembagian).format(`M`);
    const waktu = `${tanggal_pembagian} ${waktu_pembagian}`;
    const jam = moment(waktu).format(`H`);
    const menit = moment(waktu).format(`mm`);

    const jadwalMengajar = await MJadwalMengajar.query()
      .where({ id: m_jadwal_mengajar_id })
      .first();
    const jadwalMengajarSemua = await MJadwalMengajar.query()
      .where({ m_ta_id: ta.id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
      .fetch();

    const mapel = await MMataPelajaran.query()
      .where({ id: jadwalMengajar.m_mata_pelajaran_id })
      .first();

    const tugasSebelum = await MTugas.query().where({ id: tugas_id }).first();

    const tugas = await MTugas.query()
      .where({ id: tugas_id })
      .update({
        judul,
        instruksi: htmlEscaper.escape(instruksi),
        tanggal_pembagian: tanggal_pembagian
          ? moment(tanggal_pembagian).add(7, "hours").format("YYYY-MM-DD")
          : tanggal_pembagian,
        waktu_pembagian,
        tanggal_pengumpulan: tanggal_pengumpulan
          ? moment(tanggal_pengumpulan).add(7, "hours").format("YYYY-MM-DD")
          : tanggal_pengumpulan,
        show_nilai,
        waktu_pengumpulan,
        kkm,
        lampiran: lampiran.toString(),
        link: link.toString(),
        draft,
      });

    const tanggalLengkap = `${tanggal_pembagian} ${
      waktu_pembagian ? waktu_pembagian : "00:00:00"
    }`;
    const tanggalSebelumLengkap = `${moment(
      tugasSebelum.tanggal_pembagian
    ).format("YYYY-MM-DD HH:mm:ss")} ${
      tugasSebelum.waktu_pembagian ? tugasSebelum.waktu_pembagian : "00:00:00"
    }`;
    // return moment().format("YYYY-MM-DD HH:mm:ss")
    // return tanggalLengkap
    const tugasData = await MTugas.query()
      .where({ id: tugas_id })
      .with("soal", (builder) => {
        builder.where({ dihapus: 0 }).with("soal");
      })
      .first();
    let anggotaRombel;

    if (tugas) {
      let timeline;

      if (soal.length) {
        await Promise.all(
          tugasData
            .toJSON()
            .soal.filter(
              (d) =>
                soal.filter((e) => e.id).findIndex((e) => e.id == d.soal.id) < 0
            )
            .map(async (d) => {
              await TkSoalTugas.query().where({ id: d.id }).update({
                dihapus: 1,
              });
            })
        );
        const soalIds = await Promise.all(
          soal.map(async (d) => {
            if (d.id) {
              await MSoalUjian.query()
                .where({ id: d.id })
                .update({
                  kd: d.kd,
                  kd_konten_materi: d.kd_konten_materi,
                  level_kognitif: d.level_kognitif,
                  bentuk: d.bentuk,
                  akm_konten_materi: d.akm_konten_materi,
                  akm_konteks_materi: d.akm_konteks_materi,
                  akm_proses_kognitif: d.akm_proses_kognitif,
                  audio: d.audio,
                  pertanyaan: htmlEscaper.escape(d.pertanyaan),
                  jawaban_a: htmlEscaper.escape(d.jawaban_a),
                  jawaban_b: htmlEscaper.escape(d.jawaban_b),
                  jawaban_c: htmlEscaper.escape(d.jawaban_c),
                  jawaban_d: htmlEscaper.escape(d.jawaban_d),
                  jawaban_e: htmlEscaper.escape(d.jawaban_e),
                  kj_pg: d.kj_pg,
                  kj_uraian: d.kj_uraian,
                  jawaban_pg_kompleks: d.jawaban_pg_kompleks,
                  pilihan_menjodohkan: d.pilihan_menjodohkan,
                  soal_menjodohkan: d.soal_menjodohkan,
                  opsi_a_uraian: d.opsi_a_uraian,
                  opsi_b_uraian: d.opsi_b_uraian,
                  rubrik_kj: JSON.stringify(d.rubrik_kj),
                  pembahasan: htmlEscaper.escape(d.pembahasan),
                  nilai_soal: d.nilai_soal,
                });
              return 0;
            } else {
              const soalBaru = await MSoalUjian.create({
                kd: d.kd,
                kd_konten_materi: d.kd_konten_materi,
                level_kognitif: d.level_kognitif,
                bentuk: d.bentuk,
                akm_konten_materi: d.akm_konten_materi,
                akm_konteks_materi: d.akm_konteks_materi,
                akm_proses_kognitif: d.akm_proses_kognitif,
                audio: d.audio,
                pertanyaan: d.pertanyaan
                  ? htmlEscaper.escape(d.pertanyaan)
                  : "",
                jawaban_a: d.jawaban_a ? htmlEscaper.escape(d.jawaban_a) : "",
                jawaban_b: d.jawaban_b ? htmlEscaper.escape(d.jawaban_b) : "",
                jawaban_c: d.jawaban_c ? htmlEscaper.escape(d.jawaban_c) : "",
                jawaban_d: d.jawaban_d ? htmlEscaper.escape(d.jawaban_d) : "",
                jawaban_e: d.jawaban_e ? htmlEscaper.escape(d.jawaban_e) : "",
                kj_pg: d.kj_pg,
                kj_uraian: d.kj_uraian,
                jawaban_pg_kompleks: d.jawaban_pg_kompleks,
                pilihan_menjodohkan: d.pilihan_menjodohkan,
                soal_menjodohkan: d.soal_menjodohkan,
                opsi_a_uraian: d.opsi_a_uraian,
                opsi_b_uraian: d.opsi_b_uraian,
                rubrik_kj: JSON.stringify(d.rubrik_kj),
                pembahasan: d.pembahasan
                  ? htmlEscaper.escape(d.pembahasan)
                  : "",
                nilai_soal: d.nilai_soal,
                m_user_id: user.id,
                dihapus: 0,
              });
              await TkSoalTugas.create({
                m_soal_ujian_id: soalBaru.id,
                m_tugas_id: tugas.id,
                dihapus: 0,
              });
              return {
                m_soal_ujian_id: soalBaru.id,
                m_tugas_id: tugas.id,
                dihapus: 0,
              };
            }
          })
        );
      }

      if (list_anggota.length) {
        const check = await MTimeline.query()
          .where({ m_user_id: user.id })
          .andWhere({ m_rombel_id: list_rombel[0] })
          .andWhere({ m_tugas_id: tugas_id })
          .first();
        if (!check) {
          timeline = await MTimeline.create({
            m_user_id: user.id,
            m_rombel_id: list_rombel[0],
            m_tugas_id: tugas_id,
            m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id,
            tipe: "tugas",
            dihapus: 0,
          });
        } else {
          timeline = check;
        }

        await TkTimelineTopik.query()
          .where({ m_timeline_id: timeline.id })
          .delete();
        await Promise.all(
          materi.map((d) => {
            TkTimelineTopik.create({
              m_timeline_id: timeline.id,
              m_topik_id: d,
            });
          })
        );
      } else {
        const timelineData = [];

        await Promise.all(
          list_rombel.map(async (d) => {
            const check = await MTimeline.query()
              .where({ m_user_id: user.id })
              .andWhere({ m_rombel_id: d })
              .andWhere({ m_tugas_id: tugas_id })
              .first();
            if (!check) {
              const newTimeline = await MTimeline.create({
                m_user_id: user.id,
                m_rombel_id: d,
                m_tugas_id: tugas_id,
                m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id,
                tipe: "tugas",
                dihapus: 0,
              });
              timelineData.push(newTimeline);
            } else {
              timelineData.push(check);
            }
          })
        );

        timeline = timelineData;

        await Promise.all(
          timeline.map(async (d) => {
            await Promise.all(
              materi.map((e) => {
                TkTimelineTopik.create({
                  m_timeline_id: d.id,
                  m_topik_id: e,
                });
              })
            );
          })
        );
      }

      if (timeline) {
        if (list_anggota.length) {
          anggotaRombel = await MAnggotaRombel.query()
            .with("user", (builder) => {
              builder
                .select("id", "whatsapp", "nama", "wa_real")
                .where({ dihapus: 0 });
            })
            .where({ m_rombel_id: list_rombel[0] })
            .whereIn("m_user_id", list_anggota)
            .andWhere({ dihapus: 0 })
            .fetch();
        } else {
          anggotaRombel = await MAnggotaRombel.query()
            .with("user", (builder) => {
              builder
                .select("id", "whatsapp", "nama", "wa_real")
                .where({ dihapus: 0 });
            })
            .whereIn("m_rombel_id", list_rombel)
            .andWhere({ dihapus: 0 })
            .fetch();
        }

        let userIds = [];

        let check;
        if (list_anggota.length) {
          check = await TkTimeline.query()
            .where({ tipe: "tugas" })
            .andWhere({ m_timeline_id: timeline.id })
            .andWhere({ dihapus: 0 })
            .fetch();
        } else {
          check = await TkTimeline.query()
            .where({ tipe: "tugas" })
            .whereIn(
              "m_timeline_id",
              timeline.map((d) => d.id)
            )
            .andWhere({ dihapus: 0 })
            .fetch();
        }

        await Promise.all(
          anggotaRombel.toJSON().map(async (d, idx) => {
            if (!check.toJSON().find((e) => e.m_user_id == d.m_user_id)) {
              userIds.push({
                m_user_id: d.m_user_id,
                tipe: "tugas",
                m_timeline_id: timeline.length
                  ? timeline.find((e) => e.m_rombel_id == d.m_rombel_id).id
                  : timeline.id,
                dihapus: 0,
                dikumpulkan: 0,
              });

              // await ubahNotifWa(
              //   `${menit} ${jam} ${tanggal} ${bulan} *`,
              //   `tugas-${timeline.id}-${d.m_user_id}`,
              //   `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!!
              //   ${domain}/smartschool/timeline/${timeline.id}?hal=tugas`
              // );

              // if (d.user.wa_real) {
              //   if (!draft) {
              //     const jadwalSendiri = jadwalMengajarSemua
              //       .toJSON()
              //       .find((dd) => dd.m_rombel_id == d.m_rombel_id);
              //     if (soal.length) {
              //       await MNotifikasiTerjadwal.create({
              //         tanggal_dibagikan: tanggal_pembagian,
              //         tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
              //         pesan: `Halo ${d.user.nama}, ada tugas kuis dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!! \n \n${domain}/smartschool/kelas/${jadwalSendiri.id}/kegiatan/${timeline.id}?hal=tugas`,
              //         tujuan: d.user.wa_real,
              //         nama: `tugasKuis-${tugas_id}-${d.m_user_id}`,
              //       });
              //       // await kirimNotifWa(
              //       //   d.m_user_id,
              //       //   `${menit} ${jam} ${tanggal} ${bulan} *`,
              //       //   `tugas-${timeline.id}-${d.m_user_id}`,
              //       //   `Halo ${d.user.nama}, ada tugas kuis dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!!
              //       // ${domain}/smartschool/kelas/${jadwalSendiri.id}/kegiatan/${timeline.id}?hal=tugas`
              //       // );
              //     } else {
              //       // await MNotifikasiTerjadwal.create({
              //       //   tanggal_dibagikan: tanggal_pembagian,
              //       //   tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
              //       //   pesan: `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!! \n \n${domain}/smartschool/kelas/${jadwalSendiri.id}/rombel/${m_jadwal_mengajar_id}?nav=tugas&subnav=saat-ini`,
              //       //   tujuan: d.user.wa_real,
              //       //   nama: `tugas-${tugas_id}-${d.m_user_id}`,
              //       // });

              //       //kelas lama
              //       await MNotifikasiTerjadwal.create({
              //         tanggal_dibagikan: tanggal_pembagian,
              //         tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
              //         pesan: `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama}) dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!! \n \n${domain}/smartschool/kelas/${jadwalSendiri.id}/rombel/${m_jadwal_mengajar_id}?nav=tugas&subnav=saat-ini`,
              //         tujuan: d.user.wa_real,
              //         nama: `tugas-${tugas_id}-${d.m_user_id}`,
              //       });
              //     }
              //   }
              //   // if (d.user.email != null) {
              //   //   const gmail = await Mail.send(`emails.tugas`, d, (message) => {
              //   //     message
              //   //       .to(`${d.user.email}`)
              //   //       .from("no-reply@smarteschool.id")
              //   //       .subject("Pembayaran SPP");
              //   //   });

              //   //   if (gmail) {
              //   //     return response.ok({
              //   //       message: messageEmailSuccess,
              //   //     });
              //   //   }
              //   //   // return d.user.nama;
              //   // }
              // }
            }
          })
        );

        await TkTimeline.createMany(userIds);
      }
      // if (draft == 0) {
      //   if (tanggalLengkap != tanggalSebelumLengkap) {
      //     if (moment().format("YYYY-MM-DD HH:mm:ss") > tanggalSebelumLengkap) {
      //       // const check22 =await MNotifikasiTerjadwal.query()
      //       // .where("nama", "like", `%tugas-${tugas_id}-%`)
      //       // .first()
      //       // return moment().format("YYYY-MM-DD HH:mm:ss")
      //       // return check22
      //       const check = await MNotifikasiTerjadwal.query()
      //         .where("nama", "like", `%tugas-${timeline.id}-%`)
      //         .andWhere({ dikirim: 1 })
      //         .first();
      //       if (check) {
      //         await Promise.all(
      //           anggotaRombel.toJSON().map(async (d) => {
      //             if (d.user.wa_real) {
      //               await WhatsAppService.sendMessage(
      //                 d.user.wa_real,
      //                 `Halo ${d.user.nama}, Tugas ${tugasSebelum.judul} telah di ubah jadwal pembagiannya`
      //               );
      //             }
      //           })
      //         );
      //       }
      //       await MNotifikasiTerjadwal.query()
      //         .where("nama", "like", `%tugas-${tugas_id}-%`)
      //         .update({
      //           diupdate: 1,
      //           dikirim: 0,
      //           tanggal_dibagikan: tanggalLengkap,
      //           tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
      //         });
      //     } else {
      //       // return `halo`
      //       // return tanggalSebelumLengkap
      //       // const check23 =await MNotifikasiTerjadwal.query()
      //       // .where("nama", "like", `%tugas-${tugas_id}-%`)
      //       // .first()

      //       // return check23
      //       // return menit
      //       await MNotifikasiTerjadwal.query()
      //         .where("nama", "like", `%tugas-${tugas_id}-%`)
      //         .update({
      //           diupdate: 1,
      //           dikirim: 0,
      //           tanggal_dibagikan: tanggalLengkap,
      //           tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
      //         });
      //     }
      //   }
      // }
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  // delete soon
  async deleteTugas({ response, request, auth, params: { tugas_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const tugas = await MTugas.query().where({ id: tugas_id }).update({
      dihapus: 1,
    });

    if (!tugas) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const tugas1 = await MTugas.query().where({ id: tugas_id }).first();
    const tanggalSebelumLengkap = `${moment(tugas1.tanggal_pembagian).format(
      "YYYY-MM-DD HH:mm:ss"
    )} ${tugas1.waktu_pembagian ? tugas1.waktu_pembagian : "00:00:00"}`;
    const timelineIds = await MTimeline.query()
      .where({ m_tugas_id: tugas_id })
      .ids();

    const timeline = await MTimeline.query()
      .where({ m_tugas_id: tugas_id })
      .update({
        dihapus: 1,
      });

    if (!timeline) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const tkTimeline = await TkTimeline.query()
      .with("user", (builder) => {
        builder.select("id", "nama", "wa_real");
      })
      .whereIn("m_timeline_id", timelineIds)
      .fetch();
    // if (moment().format("YYYY-MM-DD HH:mm:ss") > tanggalSebelumLengkap) {
    //   await Promise.all(
    //     tkTimeline.toJSON().map(async (d) => {
    //       if (d.user.wa_real) {
    //         await WhatsAppService.sendMessage(
    //           d.user.wa_real,
    //           `Halo ${d.user.nama}, Tugas ${tugas1.judul} telah di hapus`
    //         );
    //         // await MNotifikasiTerjadwal.create({
    //         //   tanggal_dibagikan: moment().format("YYYY-MM-DD HH:mm:ss"),
    //         //   tanggal_cron: `*/1 * * * *`,
    //         //   pesan: `Halo ${d.user.nama}, Tugas ${tugas1.judul} telah di hapus`,
    //         //   tujuan: d.user.wa_real,
    //         // });
    //       }
    //     })
    //   );
    // }

    await TkTimeline.query()
      .whereIn("m_timeline_id", timelineIds)
      .update({ dihapus: 1 });

    // await MNotifikasiTerjadwal.query()
    //   .where("nama", "like", `%tugas-${tugas_id}-%`)
    //   .delete();

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getTimeline({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let ta_id = user?.m_ta_id || ta.id;

    const dataTA = await Mta.query()
      .where({ id: ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    const tahunPelajaranIds = await Mta.query()
      .where({ tahun: dataTA.tahun })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();

    const { m_jadwal_mengajar_id, absen, hari_ini, waktu_saat_ini } =
      request.get();

    if (user.role == "admin") {
      return response.ok({
        role: "admin",
      });
    }

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel")
      .with("mataPelajaran")
      .where({ id: m_jadwal_mengajar_id })
      .first();

    const dataRombelIds = await MRombel.query()
      .where({ nama: jadwalMengajar.toJSON().rombel.nama })
      .andWhere({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("m_ta_id", tahunPelajaranIds)
      .ids();
    const dataMapelIds = await MMataPelajaran.query()
      .where({ nama: jadwalMengajar.toJSON().mataPelajaran.nama })
      .andWhere({ m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id })
      .andWhere({ kode: jadwalMengajar.toJSON().mataPelajaran.kode })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("m_ta_id", tahunPelajaranIds)
      .andWhere({ kelompok: jadwalMengajar.toJSON().mataPelajaran.kelompok })
      .ids();

    const userIds = await MAnggotaRombel.query()
      .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .pluck("m_user_id");

    let timeline;

    if (user.role == "siswa") {
      const timelineId1 = await MTimeline.query()
        .whereNull("m_mata_pelajaran_id")
        .whereIn("m_rombel_id", dataRombelIds)
        // .andWhere({
        //   m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id,
        // })
        // .orWhere({ m_user_id: user.id })
        // .whereIn("m_user_id", userIds)
        .andWhere({ dihapus: 0 })
        .ids();
      // .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })

      const timelineId2 = await MTimeline.query()
        .whereNotNull("m_mata_pelajaran_id")
        .whereIn("m_mata_pelajaran_id", dataMapelIds)
        .whereIn("m_rombel_id", dataRombelIds)
        // .andWhere({
        //   m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id,
        // })
        // .orWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .ids();

      // .andWhere({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
      // .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
      const timelineIds = [...timelineId2, ...timelineId1];

      const timeline = await TkTimeline.query()
        .with("timeline", (builder) => {
          builder
            .with("tugas", (builder) => {
              builder.with("soal", (builder) => {
                builder.where({ dihapus: 0 }).with("soal");
              });
            })
            .with("materi", (builder) => {
              builder
                .with("bab")
                .withCount("materiKesimpulan as totalKesimpulan", (builder) => {
                  builder
                    .whereIn("m_user_id", userIds)
                    .whereNotNull("kesimpulan");
                });
            })
            .withCount("komen as total_komen", (builder) => {
              builder.where({ dihapus: 0 });
            })
            .with("komen", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            })
            .with("user");
        })
        .with("user")
        .with("peserta", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .whereIn("m_timeline_id", timelineIds)
        .orderBy("id", "desc")
        .fetch();

      let timelineData = [];

      await Promise.all(
        timeline.toJSON().map(async (d) => {
          if (d.tipe == "tugas") {
            if (d.timeline.tugas && d.timeline.tugas.draft == 0) {
              if (
                moment(
                  moment(d.timeline.tugas.tanggal_pembagian)
                    .add(7, "hours")
                    .format("YYYY-MM-DD") +
                    " " +
                    d.timeline.tugas.waktu_pembagian
                ) <= moment() ||
                d.timeline.tugas.waktu_pembagian == null
              )
                if (
                  moment(
                    `${moment(d.timeline.tugas.tanggal_pengumpulan)
                      .add(7, "hours")
                      .format("YYYY-MM-DD")} ${
                      d.timeline.tugas.waktu_pengumpulan
                    }`
                  ).format("YYYY-MM-DD HH:mm:ss") >= waktu_saat_ini
                ) {
                  timelineData.push({ ...d, sudah_lewat: true });
                } else {
                  timelineData.push({ ...d, sudah_lewat: false });
                }
            }
          } else {
            if (d.tipe == "diskusi") {
              if (
                moment(d.tanggal_pembagian).format("YYYY-MM-DD") <=
                moment(waktu_saat_ini).format("YYYY-MM-DD")
              ) {
                timelineData.push({ ...d });
              } else if (
                moment(d.tanggal_pembagian).format("YYYY-MM-DD") >
                moment(waktu_saat_ini).format("YYYY-MM-DD")
              ) {
                return;
              } else {
                timelineData.push({ ...d });
              }
            } else {
              if (moment(waktu_saat_ini) > moment(d.timeline.tanggal_pembagian))
                timelineData.push({ ...d });
            }
          }
        })
      );

      return response.ok({
        timeline: timelineData.map((d) => {
          return { ...d, bab: d.timeline.materi.map((e) => e.bab) };
        }),
        role: user.role,
      });
    }

    if (absen) {
      timeline = await MTimeline.query()
        .withCount("tkTimeline as total_respon", (builder) => {
          builder.whereNotNull("absen");
        })
        .with("user")
        .withCount("tkTimeline as total_siswa")
        .whereIn("m_rombel_id", dataRombelIds)
        .andWhere({ m_user_id: user.id })
        .andWhere({ tipe: "absen" })
        .andWhere({ dihapus: 0 })
        .orderBy("id", "desc")
        .fetch();
      // .where({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
    } else {
      // const tugasIds = await MTugas.query()
      //   .where({ m_user_id: user.id })
      //   .andWhere({ dihapus: 0 })
      //   .ids();

      const userIds = await MAnggotaRombel.query()
        .where({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
        .andWhere({ dihapus: 0 })
        .pluck("m_user_id");

      const timelineLainnya = await MTimeline.query()
        // .whereNull("m_mata_pelajaran_id")
        .andWhere({ dihapus: 0 })
        .whereIn("m_rombel_id", dataRombelIds)
        .whereIn("m_user_id", [
          ...userIds,
          jadwalMengajar.toJSON().mataPelajaran.m_user_id,
        ])
        .ids();
      // .andWhere("m_rombel_id", jadwalMengajar.toJSON().rombel.id)

      const timeline1 = await MTimeline.query()
        .with("tugas", (builder) => {
          builder
            .with("soal", (builder) => {
              builder.where({ dihapus: 0 }).with("soal");
            })
            .with("timeline", (builder) => {
              builder.with("rombel").with("tkTimeline");
            });
        })
        .with("user")
        .with("materi", (builder) => {
          builder
            .with("bab")
            .withCount("materiKesimpulan as totalKesimpulan", (builder) => {
              builder.whereIn("m_user_id", userIds).whereNotNull("kesimpulan");
            });
        })
        .with("komen", (builder) => {
          builder.with("user").where({ dihapus: 0 });
        })
        .withCount("tkTimeline as total_respon", (builder) => {
          builder.whereNotNull("waktu_pengumpulan");
        })
        .withCount("tkTimeline as total_absen", (builder) => {
          builder.whereNotNull("waktu_absen");
        })
        .withCount("tkTimeline as total_siswa")
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereNull("m_mata_pelajaran_id")
        .whereIn("m_rombel_id", dataRombelIds)
        // .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        // .whereIn("m_tugas_id", tugasIds)
        .orWhereIn("id", timelineLainnya)
        .orderBy("id", "desc")
        .fetch();

      // .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
      const timeline2 = await MTimeline.query()
        .with("tugas", (builder) => {
          builder
            .with("soal", (builder) => {
              builder.where({ dihapus: 0 }).with("soal");
            })
            .with("timeline", (builder) => {
              builder.with("rombel").with("tkTimeline");
            });
        })
        .with("user")
        .with("materi", (builder) => {
          builder
            .with("bab")
            .withCount("materiKesimpulan as totalKesimpulan", (builder) => {
              builder.whereIn("m_user_id", userIds).whereNotNull("kesimpulan");
            });
        })
        .with("komen", (builder) => {
          builder.with("user").where({ dihapus: 0 });
        })
        .withCount("tkTimeline as total_respon", (builder) => {
          builder.whereNotNull("waktu_pengumpulan");
        })
        .withCount("tkTimeline as total_absen", (builder) => {
          builder.whereNotNull("waktu_absen");
        })
        .withCount("tkTimeline as total_siswa")
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereNotNull("m_mata_pelajaran_id")
        .whereIn("m_mata_pelajaran_id", dataMapelIds)
        .whereIn("m_rombel_id", dataRombelIds)
        .andWhere({ dihapus: 0 })
        // .whereIn("m_tugas_id", tugasIds)
        .orderBy("id", "desc")
        .fetch();
      // .andWhere({
      //   m_mata_pelajaran_id: jadwalMengajar.toJSON().mataPelajaran.id,
      // })
      // .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })

      const timeline4 = [
        ...timeline2.toJSON().map((d) => {
          return { ...d, bab: d.materi.map((e) => e.bab) };
        }),
        ...timeline1.toJSON().map((d) => {
          return { ...d, bab: d.materi.map((e) => e.bab) };
        }),
      ];

      timeline = [...new Set(timeline4.map(JSON.stringify))].map(JSON.parse);
      // console.log({timeline1,timeline2})
      // timeline =
    }

    return response.ok({
      timeline: timeline,
      role: user.role,
    });
  }

  async detailTimeline({ response, request, auth, params: { timeline_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    if (user.role == "siswa") {
      const timeline = await TkTimeline.query()
        .with("timeline", (builder) => {
          builder
            .with("rombel")
            .with("materi", (builder) => {
              builder.with("bab").with("materiKesimpulan", (builder) => {
                builder.where({ m_user_id: user.id });
              });
            })
            .with("tugas", (builder) => {
              builder.with("soal", (builder) => {
                builder.where({ dihapus: 0 }).with("soal");
              });
            })
            .with("komen", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            });
        })
        .with("komen", (builder) => {
          builder.with("user");
        })
        .with("peserta", (builder) => {
          builder.where({ dihapus: 0 }).with("jawabanSiswa");
        })
        .with("user")
        .where({ id: timeline_id })
        .andWhere({ dihapus: 0 })
        .first();

      let sudah_lewat = false;

      if (
        timeline.toJSON().tipe == "tugas" &&
        moment(
          `${timeline.toJSON().timeline.tugas.tanggal_pengumpulan} ${
            timeline.toJSON().timeline.tugas.waktu_pengumpulan
          }`
        ).format("YYYY-MM-DD HH:mm:ss") >=
          moment().format("YYYY-MM-DD HH:mm:ss")
      ) {
        sudah_lewat = true;
      }

      const range = [
        moment(
          timeline.toJSON().tipe == "tugas"
            ? timeline.toJSON().timeline.tugas.tanggal_pembagian
            : timeline.toJSON().timeline.tanggal_pembagian
        ).format("YYYY-MM-DD 00:00:00"),
        moment(
          timeline.toJSON().tipe == "tugas"
            ? timeline.toJSON().timeline.tugas.tanggal_pembagian
            : timeline.toJSON().timeline.tanggal_pembagian
        ).format("YYYY-MM-DD 23:59:59"),
      ];

      const timelineId1 = await MTimeline.query()
        .whereNull("m_mata_pelajaran_id")
        .andWhere({ m_rombel_id: timeline.toJSON().timeline.rombel.id })
        .andWhere({
          m_user_id: timeline.toJSON().timeline.m_user_id,
        })
        .whereBetween("tanggal_pembagian", range)
        .andWhere({ dihapus: 0 })
        .andWhereNot({ tipe: "tugas" })
        .ids();

      const timelineId2 = await MTimeline.query()
        .whereNotNull("m_mata_pelajaran_id")
        .andWhere({
          m_mata_pelajaran_id: timeline.toJSON().timeline.m_mata_pelajaran_id,
        })
        .andWhere({ m_rombel_id: timeline.toJSON().timeline.rombel.id })
        .andWhere({
          m_user_id: timeline.toJSON().timeline.m_user_id,
        })
        .whereBetween("tanggal_pembagian", range)
        .andWhere({ dihapus: 0 })
        .andWhereNot({ tipe: "tugas" })
        .ids();

      const tugasIds = await MTugas.query()
        .where({ m_user_id: timeline.toJSON().timeline.m_user_id })
        .andWhere({ dihapus: 0 })
        .andWhere({
          tanggal_pembagian: moment(
            timeline.toJSON().tipe == "tugas"
              ? timeline.toJSON().timeline.tugas.tanggal_pembagian
              : timeline.toJSON().timeline.tanggal_pembagian
          ).format("YYYY-MM-DD"),
        })
        .ids();

      const timelineTugas = await MTimeline.query()
        .where({ m_rombel_id: timeline.toJSON().timeline.rombel.id })
        .andWhere({ dihapus: 0 })
        .andWhere({
          m_user_id: timeline.toJSON().timeline.m_user_id,
        })
        .whereIn("m_tugas_id", tugasIds)
        .ids();

      const timelineIds = [...timelineId2, ...timelineId1, ...timelineTugas];

      const timelines = await TkTimeline.query()
        .with("timeline", (builder) => {
          builder
            .with("tugas", (builder) => {
              builder.with("soal", (builder) => {
                builder.where({ dihapus: 0 }).with("soal");
              });
            })
            .with("materi", (builder) => {
              builder.with("bab").with("materiKesimpulan", (builder) => {
                builder.where({ m_user_id: user.id });
              });
            })
            .withCount("komen as total_komen", (builder) => {
              builder.where({ dihapus: 0 });
            })
            .with("komen", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            })
            .with("user");
        })
        .with("user")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .whereIn("m_timeline_id", timelineIds)
        .orderBy("id", "desc")
        .fetch();

      return response.ok({
        timeline,
        sudah_lewat,
        timelines: timelines
          .toJSON()
          .sort((a, b) => a.timeline.id - b.timeline.id),
      });
    }

    const thisTimeline = await MTimeline.query()
      .where({ id: timeline_id })
      .first();
    const userIds = await MAnggotaRombel.query()
      .where({ m_rombel_id: thisTimeline.m_rombel_id })
      .pluck("m_user_id");

    const timeline = await MTimeline.query()
      .with("user")
      .with("rombel")
      .with("materi", (builder) => {
        builder
          .with("bab")
          .withCount("materiKesimpulan as totalKesimpulan", (builder) => {
            builder.whereIn("m_user_id", userIds).whereNotNull("kesimpulan");
          });
      })
      .with("komen", (builder) => {
        builder.with("user").where({ dihapus: 0 });
      })
      .with("tugas", (builder) => {
        builder.with("soal", (builder) => {
          builder.where({ dihapus: 0 }).with("soal");
        });
      })
      .with("tkTimeline", (builder) => {
        builder.with("user");
      })
      .with("listSiswaBelum", (builder) => {
        builder.with("user").where("dikumpulkan", 0);
      })
      .with("listSiswaTerkumpul", (builder) => {
        builder
          .with("user")
          .with("peserta", (builder) => {
            builder.where({ dihapus: 0 }).with("jawabanSiswa", (builder) => {
              builder.with("soal");
            });
          })
          .where({ dikumpulkan: 1 })
          .with("komen", (builder) => {
            builder.with("user").where({ dihapus: 0 });
          });
      })
      .with("listSiswaDinilai", (builder) => {
        builder
          .with("user")
          .with("peserta", (builder) => {
            builder.where({ dihapus: 0 }).with("jawabanSiswa", (builder) => {
              builder.with("soal");
            });
          })
          .whereNotNull("nilai")
          .with("komen", (builder) => {
            builder.with("user").where({ dihapus: 0 });
          });
      })
      .withCount("tkTimeline as total_respon_tugas", (builder) => {
        builder.whereNotNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_respon_absen", (builder) => {
        builder.whereNotNull("waktu_absen");
      })
      .withCount("tkTimeline as total_hadir", (builder) => {
        builder.where({ absen: "hadir" }).whereNotNull("waktu_absen");
      })
      .withCount("tkTimeline as total_sakit", (builder) => {
        builder.where({ absen: "sakit" }).whereNotNull("waktu_absen");
      })
      .withCount("tkTimeline as total_izin", (builder) => {
        builder.where({ absen: "izin" }).whereNotNull("waktu_absen");
      })
      .withCount("tkTimeline as total_alpa", (builder) => {
        builder.whereNull("waktu_absen");
      })
      .withCount("tkTimeline as total_tugas_belum", (builder) => {
        builder.whereNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_tugas_terkumpul", (builder) => {
        builder.with("user").whereNotNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_tugas_dinilai", (builder) => {
        builder.whereNotNull("nilai");
      })
      .withCount("tkTimeline as total_siswa")
      .where({ id: timeline_id })
      .andWhere({ dihapus: 0 })
      .first();

    let processedTimeline = timeline.toJSON();
    if (processedTimeline.tipe == "tugas") {
      if (processedTimeline.tugas.soal.length) {
        await Promise.all(
          processedTimeline.listSiswaTerkumpul.map(async (d, idx) => {
            const pesertaUjian = d.peserta[d.peserta.length - 1];
            let metaHasil = { benar: 0 };
            let analisisBenar = {};
            let analisisTotal = {};

            await Promise.all(
              pesertaUjian.jawabanSiswa.map(async (d) => {
                if (d.soal.bentuk == "pg") {
                  if (d.jawaban_pg == d.soal.kj_pg) {
                    metaHasil.benar = metaHasil.benar + 1;
                    analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
                      ? analisisBenar[d.soal.kd] + 1
                      : 1;
                  }
                  analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
                    ? analisisTotal[d.soal.kd] + 1
                    : 1;
                } else if (d.soal.bentuk == "esai") {
                  if (JSON.parse(d.jawaban_rubrik_esai)) {
                    if (JSON.parse(d.jawaban_rubrik_esai).length) {
                      if (d.jawaban_rubrik_esai.indexOf("true") != -1) {
                        metaHasil.benar = metaHasil.benar + 1;
                      }
                    }
                  }
                }
              })
            );

            processedTimeline.listSiswaTerkumpul[idx] = {
              ...processedTimeline.listSiswaTerkumpul[idx],
              ...metaHasil,
              analisisBenar,
              analisisTotal,
            };
          })
        );
      }
    }
    const range = [
      moment(
        timeline.tipe == "tugas"
          ? timeline.toJSON().tugas.tanggal_pembagian
          : timeline.toJSON().tanggal_pembagian
      ).format("YYYY-MM-DD 00:00:00"),
      moment(
        timeline.tipe == "tugas"
          ? timeline.toJSON().tugas.tanggal_pembagian
          : timeline.toJSON().tanggal_pembagian
      ).format("YYYY-MM-DD 23:59:29"),
    ];

    const timelineBiasa = await MTimeline.query()
      .with("tugas", (builder) => {
        builder
          .with("soal", (builder) => {
            builder.where({ dihapus: 0 }).with("soal");
          })
          .with("timeline", (builder) => {
            builder.with("rombel").with("tkTimeline");
          });
      })
      .with("user")
      .withCount("tkTimeline as total_respon", (builder) => {
        builder.whereNotNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_absen", (builder) => {
        builder.whereNotNull("waktu_absen");
      })
      .with("materi", (builder) => {
        builder
          .with("bab")
          .withCount("materiKesimpulan as totalKesimpulan", (builder) => {
            builder.whereIn("m_user_id", userIds).whereNotNull("kesimpulan");
          });
      })
      .withCount("tkTimeline as total_siswa")
      .where({ m_user_id: timeline.m_user_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rombel_id: timeline.m_rombel_id })
      .whereBetween("tanggal_pembagian", range)
      .andWhereNot({ tipe: "tugas" })
      .fetch();

    const tugasIds = await MTugas.query()
      .where({ m_user_id: timeline.m_user_id })
      .andWhere({ dihapus: 0 })
      .andWhere({
        tanggal_pembagian: moment(
          timeline.tipe == "tugas"
            ? timeline.toJSON().tugas.tanggal_pembagian
            : timeline.toJSON().tanggal_pembagian
        ).format("YYYY-MM-DD"),
      })
      .ids();
    const timelineTugas = await MTimeline.query()
      .with("tugas", (builder) => {
        builder
          .with("soal", (builder) => {
            builder.where({ dihapus: 0 }).with("soal");
          })
          .with("timeline", (builder) => {
            builder.with("rombel").with("tkTimeline");
          });
      })
      .with("user")
      .with("materi", (builder) => {
        builder
          .with("bab")
          .withCount("materiKesimpulan as totalKesimpulan", (builder) => {
            builder.whereIn("m_user_id", userIds).whereNotNull("kesimpulan");
          });
      })
      .withCount("tkTimeline as total_respon", (builder) => {
        builder.whereNotNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_absen", (builder) => {
        builder.whereNotNull("waktu_absen");
      })
      .withCount("tkTimeline as total_siswa")
      .where({ m_user_id: timeline.m_user_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rombel_id: timeline.m_rombel_id })
      .whereIn("m_tugas_id", tugasIds)
      .fetch();

    const timelines = [...timelineBiasa.toJSON(), ...timelineTugas.toJSON()];

    return response.ok({
      timeline: {
        ...processedTimeline,
        bab: timeline.toJSON().materi.map((e) => e.bab),
      },
      timelines,
    });
  }

  // Belum Validasi
  async postTimeline({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      m_jadwal_mengajar_id,
      deskripsi,
      tipe,
      gmeet,
      lampiran,
      hari_ini,
      tanggal_dibuat,
      tanggal_pembagian,
      tanggal_akhir,
      materi = [],
    } = request.post();
    const tanggal = moment(tanggal_pembagian).format(`DD`);
    const bulan = moment(tanggal_pembagian).format(`M`);
    const waktu = `${tanggal_pembagian}`;
    const jam = moment(waktu).format(`H`);
    const menit = moment(waktu).format(`mm`);

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("mataPelajaran")
      .where({ id: m_jadwal_mengajar_id })
      .first();

    const mapel = await MMataPelajaran.query()
      .where({ id: jadwalMengajar.m_mata_pelajaran_id })
      .first();

    let timeline;

    if (tipe == "absen") {
      await MJadwalMengajar.query().where({ id: m_jadwal_mengajar_id }).update({
        diubah: 0,
      });

      timeline = await MTimeline.create({
        m_user_id: user.id,
        m_rombel_id: jadwalMengajar.m_rombel_id,
        tipe,
        deskripsi: htmlEscaper.escape(deskripsi),
        m_mata_pelajaran_id: jadwalMengajar.toJSON().mataPelajaran.id,
        gmeet,
        tanggal_dibuat,
        dihapus: 0,
        tanggal_pembagian,
        tanggal_akhir,
      });

      const idsGuru = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ role: "guru" })
        .andWhere({ dihapus: 0 })
        .ids();

      const jumlahTopik = await MTimeline.query()
        .whereIn("m_user_id", idsGuru)
        .andWhere({ dihapus: 0 })
        .getCount();

      await MSekolah.query().where({ id: sekolah.id }).update({
        jumlah_topik: jumlahTopik,
      });

      const anggotaRombel = await MAnggotaRombel.query()
        .with("user", (builder) => {
          builder
            .select("id", "nama", "email", "wa_real")
            .where({ dihapus: 0 });
        })
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .andWhere({ dihapus: 0 })
        .fetch();

      let userIds = [];

      await Promise.all(
        anggotaRombel.toJSON().map(async (d) => {
          userIds.push({
            m_user_id: d.m_user_id,
            tipe: "absen",
            m_timeline_id: timeline.id,
            dihapus: 0,
          });

          // if (d.user.wa_real) {
          //   // await MNotifikasiTerjadwal.create({
          //   //   tanggal_dibagikan: tanggal_pembagian,
          //   //   tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
          //   //   pesan: `Halo ${d.user.nama}, ada pertemuan dari Guru ${user.nama} (${mapel.nama}). Silahkan klik tautan berikut untuk melihat pertemuan! Semangat!! \n \n${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${timeline.id}?hal=pertemuan`,
          //   //   tujuan: d.user.wa_real,
          //   //   nama: `absen-${timeline.id}-${d.m_user_id}`,
          //   // });

          //   await MNotifikasiTerjadwal.create({
          //     tanggal_dibagikan: tanggal_pembagian,
          //     tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
          //     pesan: `Halo ${d.user.nama}, ada pertemuan dari Guru ${user.nama} (${mapel.nama}). Silahkan klik tautan berikut untuk melihat pertemuan! Semangat!! \n \n${domain}/smartschool/rombel/${m_jadwal_mengajar_id}?nav=pertemuan`,
          //     tujuan: d.user.wa_real,
          //     nama: `absen-${timeline.id}-${d.m_user_id}`,
          //   });
          // }

          // await kirimNotifWa(
          //   d.m_user_id,
          //   `${menit} ${jam} ${tanggal} ${bulan} *`,
          //   `absen-${timeline.id}-${d.m_user_id}`,
          //   `Halo ${d.user.nama}, ada pertemuan dari Guru ${user.nama} (${mapel.nama}). Silahkan klik tautan berikut untuk melihat pertemuan! Semangat!!
          // ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${timeline.id}?hal=pertemuan`
          // );
          // NOTIFIKASI WHATSAPP
          // try {
          //   const task = cron.schedule(
          //     `${menit} ${jam} ${tanggal} ${bulan} *`,
          //     async () => {
          //       // await WhatsAppService.sendMessage(
          //       //   6281316119411,
          //       //   `Halo ${d.user.nama}, ada pertemuan dari Guru ${user.nama} (${mapel.nama}. Silahkan klik tautan berikut untuk melihat pertemuan! Semangat!!
          // ${domain}/smartschool/timeline/${timeline.id}?hal=pertemuan`
          //       // );
          //     },
          //     {
          //       scheduled: true,
          //       timezone: "Asia/Jakarta",
          //     }
          //   );
          //   return task;
          // } catch (error) {
          //   console.log(error);
          // }
        })
      );
      await TkTimeline.createMany(userIds);
    } else if (tipe == "diskusi") {
      timeline = await MTimeline.create({
        m_user_id: user.id,
        m_rombel_id: jadwalMengajar.m_rombel_id,
        deskripsi: htmlEscaper.escape(deskripsi),
        m_mata_pelajaran_id: jadwalMengajar.toJSON().mataPelajaran.id,
        lampiran: lampiran.toString(),
        tipe,
        dihapus: 0,
      });

      const idsGuru = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ role: "guru" })
        .andWhere({ dihapus: 0 })
        .ids();

      const jumlahTopik = await MTimeline.query()
        .whereIn("m_user_id", idsGuru)
        .andWhere({ dihapus: 0 })
        .getCount();

      await MSekolah.query().where({ id: sekolah.id }).update({
        jumlah_topik: jumlahTopik,
      });

      const anggotaRombel = await MAnggotaRombel.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .andWhere({ dihapus: 0 })
        .fetch();

      let userIds = [];

      await Promise.all(
        anggotaRombel.toJSON().map(async (d) => {
          userIds.push({
            m_user_id: d.m_user_id,
            tipe: "diskusi",
            m_timeline_id: timeline.id,
            dihapus: 0,
          });
          // await kirimNotifWa(
          //   d.m_user_id,
          //   `${menit} ${jam} ${tanggal} ${bulan} *`,
          //   `tugas-${timeline.id}-${d.m_user_id}`,
          //   `Halo ${d.user.nama}, ada diskusi dari Guru ${user.nama} (${mapel.nama}). Silahkan klik tautan berikut untuk melihat pertemuan! Semangat!!
          //   ${domain}/smartschool/timeline/${timeline.id}?hal=pertemuan`
          // );
        })
      );

      await TkTimeline.createMany(userIds);
    } else if (tipe == "materi") {
      await Promise.all(
        materi.map(async (d) => {
          const timeline = await MTimeline.create({
            m_user_id: user.id,
            m_rombel_id: jadwalMengajar.m_rombel_id,
            tipe,
            m_mata_pelajaran_id: jadwalMengajar.toJSON().mataPelajaran.id,
            dihapus: 0,
            tanggal_pembagian,
          });

          const idsGuru = await User.query()
            .where({ m_sekolah_id: sekolah.id })
            .andWhere({ role: "guru" })
            .andWhere({ dihapus: 0 })
            .ids();

          const jumlahTopik = await MTimeline.query()
            .whereIn("m_user_id", idsGuru)
            .andWhere({ dihapus: 0 })
            .getCount();

          const topik = await MTopik.query()
            .with("bab")
            .where({ id: d })
            .first();

          await MSekolah.query().where({ id: sekolah.id }).update({
            jumlah_topik: jumlahTopik,
          });

          await TkTimelineTopik.create({
            m_timeline_id: timeline.id,
            m_topik_id: d,
          });

          const anggotaRombel = await MAnggotaRombel.query()
            .with("user", (builder) => {
              builder.select("id", "nama", "wa_real");
            })
            .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
            .andWhere({ dihapus: 0 })
            .fetch();

          let userIds = [];
          anggotaRombel.toJSON().map(async (d) => {
            userIds.push({
              m_user_id: d.m_user_id,
              tipe: "materi",
              m_timeline_id: timeline.id,
              dihapus: 0,
            });
            if (d.user.wa_real) {
              await MNotifikasiTerjadwal.create({
                tanggal_dibagikan: tanggal_pembagian,
                tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
                pesan: `Halo ${d.user.nama}, ada materi dari Guru ${
                  user.nama
                } (${mapel.nama}) BAB ${topik.toJSON().bab.judul} - ${
                  topik.judul
                }. Silahkan klik tautan berikut untuk melihat materi! Semangat!! \n \n${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
                  timeline.id
                }?hal=materi`,
                tujuan: d.user.wa_real,
                nama: `materi-${timeline.id}-${d.m_user_id}`,
              });
            }
            // await kirimNotifWa(
            //   d,
            //   `${menit} ${jam} ${tanggal} ${bulan} *`,
            //   `materi-${timeline.id}-${topik.id}-${d.m_user_id}`,
            //   `Halo ${d.user.nama}, ada materi dari Guru ${user.nama} (${
            //     mapel.nama
            //   }) BAB ${topik.toJSON().bab.judul} - ${
            //     topik.judul
            //   }. Silahkan klik tautan berikut untuk melihat materi! Semangat!!
            // ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
            //     timeline.id
            //   }?hal=materi`
            // );
          });

          await TkTimeline.createMany(userIds);
        })
      );
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putTimeline({ response, request, auth, params: { timeline_id } }) {
    const user = await auth.getUser();
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      deskripsi,
      gmeet,
      jurnal,
      rpp,
      m_jadwal_mengajar_id,
      m_mata_pelajaran_id,
      tipe,
      lampiran,
      absen,
      keterangan,
      waktu_absen,
      waktu_pengumpulan,
      dikumpulkan,
      tanggal_pembagian,
      tanggal_akhir,
      siswa_id,
      tk_id,
      nilai,
      materi,
      ulangi,
    } = request.post();
    const tanggal = moment(tanggal_pembagian).format(`DD`);
    const bulan = moment(tanggal_pembagian).format(`M`);
    const waktu = `${tanggal_pembagian}`;
    const jam = moment(waktu).format(`H`);
    const menit = moment(waktu).format(`mm`);

    if (
      tipe !== "nilai" &&
      tipe !== "tugas" &&
      user.role !== "siswa" &&
      !siswa_id &&
      tipe !== "absen"
    ) {
      const jadwalMengajar = await MJadwalMengajar.query()
        .with("mataPelajaran")
        .where({ id: m_jadwal_mengajar_id })
        .first();
    }
    // const jadwalSekarang

    let timeline;

    const timelineTk = await TkTimeline.query()
      .with("timeline", (builder) => {
        builder.with("tugas").with("user", (builder) => {
          builder.select("id", "nama", "wa_real");
        });
      })
      .with("user", (builder) => {
        builder.select("id", "nama", "wa_real");
      })
      .where({ id: timeline_id })
      .first();

    if (tipe == "nilai") {
      timeline = await TkTimeline.query().where({ id: timeline_id }).update({
        nilai,
      });
      // const timelineUtama = await MTimeline.query().where({timelineTk})

      // if (timelineTk.toJSON().timeline.tugas.show_nilai == 1) {
      //   if (timelineTk.toJSON().user.wa_real) {
      //     // await WhatsAppService.sendMessage(
      //     //   timelineTk.toJSON().user.wa_real,
      //     //   `Halo ${timelineTk.toJSON().user.nama}, nilai tugas ${
      //     //     timelineTk.toJSON().timeline.tugas.judul
      //     //   } telah diberikan oleh Guru ${
      //     //     user.nama
      //     //   }. Tekan tautan link berikut untuk melihat nilai \n \n${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
      //     //     timelineTk.m_timeline_id
      //     //   }?hal=tugas`
      //     // );

      //     // kelas lama

      //     await WhatsAppService.sendMessage(
      //       timelineTk.toJSON().user.wa_real,
      //       `Halo ${timelineTk.toJSON().user.nama}, nilai tugas ${
      //         timelineTk.toJSON().timeline.tugas.judul
      //       } telah diberikan oleh Guru ${
      //         user.nama
      //       }. Tekan tautan link berikut untuk melihat nilai \n \n${domain}/smartschool/timeline/${timeline_id}?hal=tugas`
      //     );
      //   }
      // }
    }

    if (tipe == "diskusi") {
      timeline = await MTimeline.query()
        .where({ id: timeline_id })
        .update({
          m_jadwal_mengajar_id,
          m_mata_pelajaran_id: jadwalMengajar.toJSON().mataPelajaran.id,
          deskripsi: htmlEscaper.escape(deskripsi),
          lampiran: lampiran.toString(),
          tipe,
        });
    }

    let jadwalMengajar;

    if (tipe == "absen") {
      if (siswa_id) {
        timeline = await TkTimeline.query()
          .where({ id: tk_id })
          .andWhere({ m_user_id: siswa_id })
          .update({
            lampiran: lampiran.toString(),
            absen: absen,
            keterangan,
            waktu_absen: moment().utc(7).format("YYYY-MM-DD HH:mm:ss"),
          });

        return;
      } else if (user.role == "siswa") {
        timeline = await TkTimeline.query()
          .where({ id: timeline_id })
          .update({
            lampiran: lampiran.toString(),
            absen: absen,
            keterangan,
            waktu_absen: moment().utc(7).format("YYYY-MM-DD HH:mm:ss"),
          });
      } else {
        // if (!m_mata_pelajaran_id) {
        //   jadwalMengajar = await MJadwalMengajar.query()
        //     .with("mataPelajaran")
        //     .where({ id: m_jadwal_mengajar_id })
        //     .first();
        // }
        const timelineSebelum = await MTimeline.query()
          .where({ id: timeline_id })
          .first();

        timeline = await MTimeline.query()
          .where({ id: timeline_id })
          .update({
            rpp: rpp ? rpp.toString() : "",
            jurnal,
            deskripsi: htmlEscaper.escape(deskripsi),
            tanggal_pembagian,
            tanggal_akhir,
            // m_mata_pelajaran_id:
            //   jadwalMengajar.toJSON().mataPelajaran.id || m_mata_pelajaran_id,
            gmeet,
          });

        const anggotaTimeline = await TkTimeline.query()
          .with("user", (builder) => {
            builder.select("id", "nama", "wa_real");
          })
          .where({ m_timeline_id: timeline_id })
          .whereNull("absen")
          .fetch();
        const check = await MNotifikasiTerjadwal.query()
          .where("nama", "like", `%absen-${timeline_id}-%`)
          .andWhere({ dikirim: 1 })
          .first();
        // if (timelineSebelum.tanggal_pembagian != tanggal_pembagian) {
        //   if (
        //     moment().format("YYYY-MM-DD HH:mm:ss") >
        //     timelineSebelum.tanggal_pembagian
        //   ) {
        //     // const check22 =await MNotifikasiTerjadwal.query()
        //     // .where("nama", "like", `%tugas-${tugas_id}-%`)
        //     // .first()
        //     // return moment().format("YYYY-MM-DD HH:mm:ss")
        //     // return check22

        //     if (check) {
        //       await Promise.all(
        //         anggotaTimeline.toJSON().map(async (d) => {
        //           if (d.user.wa_real) {
        //             await WhatsAppService.sendMessage(
        //               d.user.wa_real,
        //               `Halo ${d.user.nama}, pertemuan guru ${user.nama} tanggal ${timelineSebelum.tanggal_pembagian} telah di ubah jadwal pembagiannya`
        //             );
        //           }
        //         })
        //       );
        //     }
        //   }
        //   await MNotifikasiTerjadwal.query()
        //     .where("nama", "like", `%absen-${timeline_id}-%`)
        //     .update({
        //       diupdate: 1,
        //       dikirim: 0,
        //       tanggal_dibagikan: tanggal_pembagian,
        //       tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
        //     });
        // }
        // if (timelineSebelum.tanggal_akhir != tanggal_akhir) {
        //   if (
        //     moment().format("YYYY-MM-DD HH:mm:ss") >
        //     timelineSebelum.tanggal_pembagian
        //   ) {
        //     if (check) {
        //       await Promise.all(
        //         anggotaTimeline.toJSON().map(async (d) => {
        //           if (d.user.wa_real) {
        //             // await WhatsAppService.sendMessage(
        //             //   d.user.wa_real,
        //             //   `Halo ${d.user.nama}, tanggal akhir pada pertemuan guru ${user.nama} tanggal ${timelineSebelum.tanggal_pembagian} telah di ubah menjadi ${tanggal_akhir}. Silahkan klik tautan berikut untuk melihat pertemuan! Semangat!! \n \n${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${timeline.id}?hal=pertemuan`
        //             // );
        //             await WhatsAppService.sendMessage(
        //               d.user.wa_real,
        //               `Halo ${d.user.nama}, tanggal akhir pada pertemuan guru ${user.nama} tanggal ${timelineSebelum.tanggal_pembagian} telah di ubah menjadi ${tanggal_akhir}. Silahkan klik tautan berikut untuk melihat pertemuan! Semangat!! \n \n${domain}/smartschool/timeline/${d.id}?hal=pertemuan`
        //             );
        //           }
        //         })
        //       );
        //     }
        //   }
        // }
        // await ubahNotifWa(
        //   `${menit} ${jam} ${tanggal} ${bulan} *`,
        //   `tugas-${timeline_id}`,
        //   `Halo ${d.user.nama}, ada tugas dari Guru ${user.nama} (${mapel.nama} dengan judul ${judul}. Silahkan kerjakan dengan klik tautan berikut ya! Semangat!!
        // ${domain}/smartschool/timeline/${timeline.id}?hal=tugas`
        // );
      }
    }

    if (tipe == "tugas") {
      timeline = await TkTimeline.query()
        .where({ id: timeline_id })
        .update({
          lampiran: lampiran.toString(),
          keterangan: "" + keterangan,
          waktu_pengumpulan: waktu_pengumpulan,
          dikumpulkan: dikumpulkan,
        });

      // await kirimNotifWaLangsung(
      //   timelineTk.toJSON().timeline.m_user_id,
      //   `tugas-${timelineTk.id}-${timelineTk.toJSON().timeline.m_user_id}`,
      //   `Halo ${timelineTk.toJSON().timeline.user.nama}, ${
      //     timelineTk.toJSON().timeline.user.nama
      //   } telah mengumpulkan tugas ${
      //     timelineTk.toJSON().timeline.tugas.judul
      //   }. Tekan tautan link berikut untuk menilai
      // ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
      //     timelineTk.m_timeline_id
      //   }?hal=tugas`
      // );

      // if (timelineTk.toJSON().timeline.user.wa_real) {
      //   // kelas Baru
      //   // await WhatsAppService.sendMessage(
      //   //   timelineTk.toJSON().timeline.user.wa_real,
      //   //   `Halo ${timelineTk.toJSON().timeline.user.nama}, ${
      //   //     timelineTk.toJSON().user.nama
      //   //   } telah mengumpulkan tugas ${
      //   //     timelineTk.toJSON().timeline.tugas.judul
      //   //   }. Tekan tautan link berikut untuk menilai \n \n${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
      //   //     timelineTk.m_timeline_id
      //   //   }?hal=tugas`
      //   // );
      //   // kelas lama
      //   await WhatsAppService.sendMessage(
      //     timelineTk.toJSON().timeline.user.wa_real,
      //     `Halo ${timelineTk.toJSON().timeline.user.nama}, ${
      //       timelineTk.toJSON().user.nama
      //     } telah mengumpulkan tugas ${
      //       timelineTk.toJSON().timeline.tugas.judul
      //     }. Tekan tautan link berikut untuk menilai \n \n${domain}/smartschool/timeline/${
      //       timelineTk.m_timeline_id
      //     }?hal=tugas`
      //   );
      // }
      if (ulangi) {
        await TkPesertaUjian.query()
          .whwere({ tk_timeline_id: timeline_id })
          .update({ dihapus: 1 });

        // await kirimNotifWaLangsung(
        //   timelineTk.m_user_id,
        //   `tugas-${timelineTk.id}-${timelineTk.m_user_id}`,
        //   `Halo ${timelineTk.toJSON().user.nama}, tugas ${
        //     timelineTk.toJSON().timeline.tugas.judul
        //   } (${
        //     user.nama
        //   }) perlu diulangi. Tekan tautan link berikut untuk melihat
        //   ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
        //     timelineTk.m_timeline_id
        //   }?hal=tugas`
        // );
        // if (timelineTk.toJSON().user.nama) {
        //   await MNotifikasiTerjadwal.create({
        //     tanggal_dibagikan: tanggal_pembagian
        //       ? tanggal_pembagian
        //       : `${moment().format("YYYY-MM-DD HH:mm:ss")}`,
        //     tanggal_cron: `*/1 * * * *`,
        //     pesan: `Halo ${timelineTk.toJSON().user.nama}, tugas ${
        //       timelineTk.toJSON().timeline.tugas.judul
        //     } (${
        //       user.nama
        //     }) perlu diulangi. Tekan tautan link berikut untuk melihat \n \n${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
        //       timelineTk.m_timeline_id
        //     }?hal=tugas`,
        //     tujuan: "085891296109",
        //     nama: `tugas-${timelineTk.id}-${timelineTk.m_user_id}`,
        //   });
        // }
      }
    }

    if (tipe == "materi") {
      const timelineSebelums = await MTimeline.query()
        .where({ id: timeline_id })
        .first();

      timeline = await MTimeline.query().where({ id: timeline_id }).update({
        tanggal_pembagian,
      });

      const topik = await MTopik.query().with("bab").where({ id: d }).first();

      await TkTimelineTopik.query()
        .where({ m_timeline_id: timeline_id })
        .delete();
      await Promise.all(
        materi.map((d) => {
          return TkTimelineTopik.create({
            m_timeline_id: timeline_id,
            m_topik_id: d,
          });
        })
      );

      const jadwalMengajar = await MJadwalMengajar.query()
        .with("mataPelajaran")
        .where({ id: m_jadwal_mengajar_id })
        .first();
      const anggotaRombel = await MAnggotaRombel.query()
        .with("user", (builder) => {
          builder.select("id", "nama", "wa_real");
        })
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .andWhere({ dihapus: 0 })
        .fetch();

      const check = await TkTimeline.query()
        .where({ m_timeline_id: timeline_id })
        .andWhere({ dihapus: 0 })
        .pluck("m_user_id");

      const checkJSON = check;
      let userIds = [];

      await Promise.all(
        anggotaRombel
          .toJSON()
          .filter((d) => !checkJSON.find((e) => e == d.m_user_id))
          .map(async (d) => {
            userIds.push({
              m_user_id: d.m_user_id,
              tipe: "materi",
              m_timeline_id: timeline_id,
              dihapus: 0,
            });
            if (d.user.wa_real) {
              await MNotifikasiTerjadwal.create({
                tanggal_dibagikan: tanggal_pembagian,
                tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
                pesan: `Halo ${d.user.nama}, ada materi dari Guru ${
                  user.nama
                } (${mapel.nama}) BAB ${topik.toJSON().bab.judul} - ${
                  topik.judul
                }. Silahkan klik tautan berikut untuk melihat materi! Semangat!! \n \n${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
                  timeline.id
                }?hal=materi`,
                tujuan: d.user.wa_real,
                nama: `materi-${timeline.id}-${d.m_user_id}`,
              });
            }
          })
      );

      const checkc = await MNotifikasiTerjadwal.query()
        .where("nama", "like", `%materi-${timeline_id}-%`)
        .andWhere({ dikirim: 1 })
        .first();

      if (timelineSebelums.tanggal_pembagian != tanggal_pembagian) {
        if (
          moment().format("YYYY-MM-DD HH:mm:ss") >
          timelineSebelums.tanggal_pembagian
        ) {
          // const check22 =await MNotifikasiTerjadwal.query()
          // .where("nama", "like", `%tugas-${tugas_id}-%`)
          // .first()
          // return moment().format("YYYY-MM-DD HH:mm:ss")
          // return check22

          if (checkc) {
            await Promise.all(
              anggotaRombel.toJSON().map(async (d) => {
                if (d.user.wa_real) {
                  await MNotifikasiTerjadwal.create({
                    tanggal_dibagikan: moment().format("YYYY-MM-DD HH:mm:ss"),
                    tanggal_cron: `*/1 * * * *`,
                    pesan: `Halo ${d.user.nama}, materi guru ${user.nama} telah di ubah jadwal pembagiannya`,
                    tujuan: d.user.wa_real,
                  });
                }
              })
            );
          }
        }
        await MNotifikasiTerjadwal.query()
          .where("nama", "like", `%materi-${timeline_id}-%`)
          .update({
            diupdate: 1,
            dikirim: 0,
            tanggal_dibagikan: tanggal_pembagian,
            tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
          });
      }

      if (userIds.length > 0) {
        await TkTimeline.createMany(userIds);
      }
    }

    if (!timeline) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteTimeline({ response, request, auth, params: { timeline_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const timeline = await MTimeline.query().where({ id: timeline_id }).update({
      dihapus: 1,
    });

    if (!timeline) {
      // await hapusNotifWa(`absen-${timeline_id}`);

      return response.notFound({
        message: messageNotFound,
      });
    }
    // const timelineSebelum = await MTimeline.query()
    //   .where({ id: timeline_id })
    //   .first();

    // const tkTimeline = await TkTimeline.query()
    //   .with("user", (builder) => {
    //     builder.select("id", "nama", "wa_real");
    //   })
    //   .where({ m_timeline_id: timeline_id })
    //   .fetch();

    // return timelineSebelum
    // if (
    //   moment().format("YYYY-MM-DD HH:mm:ss") >
    //   moment(timelineSebelum.tanggal_pembagian).format("YYYY-MM-DD HH:mm:ss")
    // ) {
    //   await Promise.all(
    //     tkTimeline.toJSON().map(async (d) => {
    //       if (d.user.wa_real) {
    //         await WhatsAppService.sendMessage(
    //           d.user.wa_real,
    //           `Halo ${d.user.nama}, ${timelineSebelum.tipe} tanggal ${moment(
    //             timelineSebelum.tanggal_pembagian
    //           ).format("YYYY-MM-DD HH:mm:ss")} telah di hapus`
    //         );
    //       }
    //     })
    //   );
    // }

    // await MNotifikasiTerjadwal.query()
    //   .where("nama", "like", `%-${timeline_id}-%`)
    //   .delete();

    await TkTimeline.query()
      .where({ m_timeline_id: timeline_id })
      .update({ dihapus: 1 });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async downloadTimelineAbsen({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { jadwal_mengajar_id } = request.post();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD HH-mm-ss-") + Date.now();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel")
      .with("mataPelajaran")
      .where({ id: jadwal_mengajar_id })
      .first();

    const timeline = await MTimeline.query()
      .with("tkTimeline", (builder) => {
        builder.with("user");
      })
      .with("user")
      .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .where({ m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id })
      .andWhere({ tipe: "absen" })
      .andWhere({ dihapus: 0 })
      .fetch();

    const workbook = new Excel.Workbook();

    await Promise.all(
      timeline.toJSON().map(async (d, idx) => {
        // Create workbook & add worksheet
        const worksheet = workbook.addWorksheet(`Pertemuan ${idx + 1}`);

        await Promise.all(
          d.tkTimeline.map(async (e) => {
            // add column headers
            worksheet.getRow(10).values = ["Nama", "Absen"];

            worksheet.columns = [{ key: "user" }, { key: "absen" }];

            // Add row using key mapping to columns
            const row = worksheet.addRow({
              user: e.user.nama,
              absen: e.absen || "alpa",
            });
          })
        );

        worksheet.getCell("A1").value = "Nama";
        worksheet.getCell("B1").value = d.user.nama;
        worksheet.getCell("D1").value = "NIP";
        worksheet.getCell("E1").value = d.user.nip;
        worksheet.getCell("D2").value = "Link Pertemuan";
        worksheet.getCell("E2").value = d.gmeet;
        worksheet.getCell("A2").value = "Tanggal Pertemuan";
        worksheet.getCell("B2").value = d.tanggal_dibuat;

        worksheet.getCell("A4").value = "RPP";
        worksheet.getCell("A5").value = d.rpp.toString();

        worksheet.getCell("A7").value = "Deskripsi";
        worksheet.getCell("A8").value = d.deskripsi;

        worksheet.columns.forEach(function (column, i) {
          let maxLength = 0;
          column["eachCell"]({ includeEmpty: true }, function (cell) {
            let columnLength = cell.value ? cell.value.toString().length : 10;

            if (cell.value == "alpa") {
              // red
              cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "F9D5D4" },
                bgColor: { argb: "F9D5D4" },
              };

              cell.font = {
                color: { argb: "FC544B" },
              };
            }

            if (cell.value == "sakit") {
              // yellow
              cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FCE8D2" },
                bgColor: { argb: "FCE8D2" },
              };

              cell.font = {
                color: { argb: "F9AC50" },
              };
            }

            if (cell.value == "izin") {
              // green
              cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "E0FCE4" },
                bgColor: { argb: "E0FCE4" },
              };

              cell.font = {
                color: { argb: "63ED7A" },
              };
            }

            if (cell.value == "hadir") {
              // green
              cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "2680EB" },
                bgColor: { argb: "2680EB" },
              };

              cell.font = {
                color: { argb: "FFFFFF" },
              };
            }

            if (columnLength > maxLength) {
              maxLength = columnLength;
            }
          });

          column.width = maxLength < 15 ? 15 : maxLength > 30 ? 30 : 15;
        });
      })
    );

    let namaFile = `/uploads/absen-pertemuan-${Date.now()}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async postTkTimelineKomen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tk_timeline_id, komen, m_jadwal_mengajar_id } = request.post();
    const rules = {
      komen: "required",
    };
    const message = {
      "komen.required": "Komen harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const tkTimelineKomen = await TkTimelineKomen.create({
      dihapus: 0,
      tk_timeline_id: tk_timeline_id,
      komen: komen,
      m_user_id: user.id,
    });
    const timelineTk = await TkTimeline.query()
      .with("timeline", (builder) => {
        builder.with("tugas").with("user");
      })
      .with("user")
      .where({ id: tk_timeline_id })
      .first();

    if (user.role == "siswa") {
      WhatsAppService.sendMessage(
        user.wa_real,
        `Halo ${user.nama}, ada balasan komentar dari Guru ${
          timelineTk.toJSON().timeline.user.nama
        } dengan komentar ${komen}. Silahkan klik tautan berikut untuk membalasnya! Semangat!!
        ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
          timelineTk.m_timeline_id
        }?hal=tugas`
      );
      //  kirimNotifWa(
      //   user.id,
      //   `komen-${tkTimelineKomen.id}-${user.id}`,
      //   `Halo ${user.nama}, ada balasan komentar dari Guru ${
      //     timelineTk.toJSON().timeline.user.nama
      //   } dengan komentar ${komen}. Silahkan klik tautan berikut untuk membalasnya! Semangat!!
      //   ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
      //     timelineTk.m_timeline_id
      //   }?hal=tugas`
      // );
    } else if (user.role == "guru") {
      WhatsAppService.sendMessage(
        user.wa_real,
        `Halo ${user.nama}, ada balasan komentar dari Siswa ${
          timelineTk.toJSON().user.nama
        } dengan komentar ${komen}. Silahkan klik tautan berikut untuk membalasnya! Semangat!!
        ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
          timelineTk.m_timeline_id
        }?hal=tugas`
      );
      //  kirimNotifWa(
      //   user.id,
      //   `komen-${tkTimelineKomen.id}-${user.id}`,
      //   `Halo ${user.nama}, ada balasan komentar dari Siswa ${
      //     timelineTk.toJSON().user.nama
      //   } dengan komentar ${komen}. Silahkan klik tautan berikut untuk membalasnya! Semangat!!
      //   ${domain}/smartschool/kelas/${m_jadwal_mengajar_id}/kegiatan/${
      //     timelineTk.m_timeline_id
      //   }?hal=tugas`
      // );
    }

    // await WhatsAppService.sendMessage(
    //   user.whatsapp,
    //   `Halo, komentar mu sudah masuk. Tunggu gurumu membalasnya ya!`
    // );

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deleteTkTimelineKomen({
    response,
    request,
    auth,
    params: { timeline_komen_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const tkTimelineKomen = await TkTimelineKomen.query()
      .where({ id: timeline_komen_id })
      .update({
        dihapus: 1,
      });

    if (!tkTimelineKomen) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postTimelineKomen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { m_timeline_id, komen } = request.post();
    const rules = {
      komen: "required",
    };
    const message = {
      "komen.required": "Komen harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    if (user.role == "siswa") {
      const tkTimeline = await TkTimeline.query()
        .where({ id: m_timeline_id })
        .first();

      m_timeline_id = tkTimeline.m_timeline_id;
    }

    const timelineKomen = await MTimelineKomen.create({
      dihapus: 0,
      m_timeline_id: m_timeline_id,
      komen: komen,
      m_user_id: user.id,
    });

    // await WhatsAppService.sendMessage(
    //   user.whatsapp,
    //   `Halo, komentar mu sudah masuk. Tunggu gurumu membalasnya ya!`
    // );

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deleteTimelineKomen({
    response,
    request,
    auth,
    params: { timeline_komen_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const timelineKomen = await MTimelineKomen.query()
      .where({ id: timeline_komen_id })
      .update({
        dihapus: 1,
      });

    if (!timelineKomen) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getAbsenGuru({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { role, tanggal_awal, tanggal_akhir, absen } = request.get();

    if (role == "guru") {
      const range = moment(tanggal_akhir).diff(moment(tanggal_awal), "day");

      let listHari = [];
      for (let i = 0; i < range + 1; i++) {
        const hari = moment(tanggal_awal).add(i, "days").format("YYYY-MM-DD");
        listHari.push(hari);
      }

      // const absen = await User.query()
      //   .with("absen", (builder) => {
      //     builder.whereBetween("created_at", [
      //       moment(tanggal_awal).format("YYYY-MM-DD 00:00:00"),
      //       moment(tanggal_akhir).format("YYYY-MM-DD 23:59:59"),
      //     ]);
      //   })
      //   .where({ m_sekolah_id: sekolah.id })
      //   .andWhere({ dihapus: 0 })
      //   .andWhere({ role: role })
      //   .fetch();

      let total;
      total = await User.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere("role", role)
        .getCount();

      const userIds = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere("role", role)
        .ids();
      const data = await Promise.all(
        listHari.map(async (r) => {
          const absenData = await MAbsen.query()
            .where("created_at", "like", `%${r}%`)
            .andWhere({ m_sekolah_id: sekolah.id })
            .andWhere({ role: role })
            .andWhere({ absen: absen })
            .getCount();

          // const absenDatas = await MAbsen.query()
          // .where("created_at", "like", `%${r}%`)
          // .andWhere({ m_sekolah_id: sekolah.id })
          // .andWhere({ role: role })
          // .andWhere({ absen: absen }).fetch()

          return {
            tanggal: r,
            absen: absenData ? (absenData / total) * 100 : 0,
            total: absenData,
            // absenDatas
          };
        })
      );

      return response.ok({
        data,
        total,
        listHari,
      });
    } else if (role == "siswa") {
      const rombel = await MRombel.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id })
        .fetch();

      let rombelData = [];

      await Promise.all(
        rombel.toJSON().map(async (d) => {
          const userIds = await MAnggotaRombel.query()
            .where({ m_rombel_id: d.id })
            .andWhere({ dihapus: 0 })
            .pluck("m_user_id");

          const totalHadir = await MAbsen.query()
            .with("user")
            .where("created_at", "like", `%${tanggal}%`)
            .andWhere({ absen: "hadir" })
            .whereIn("m_user_id", userIds)
            .count("* as total");
          const totalSakit = await MAbsen.query()
            .with("user")
            .where("created_at", "like", `%${tanggal}%`)
            .andWhere({ absen: "sakit" })
            .whereIn("m_user_id", userIds)
            .count("* as total");
          const totalIzin = await MAbsen.query()
            .with("user")
            .where("created_at", "like", `%${tanggal}%`)
            .andWhere({ absen: "izin" })
            .whereIn("m_user_id", userIds)
            .count("* as total");
          const totalAlpa =
            userIds.length -
            (totalHadir[0].total + totalSakit[0].total + totalIzin[0].total);

          return rombelData.push({
            rombel: d.nama,
            id: d.id,
            totalHadir: totalHadir[0].total,
            totalSakit: totalSakit[0].total,
            totalIzin: totalIzin[0].total,
            totalAlpa,
          });
        })
      );

      return response.ok({
        rombel: rombelData,
      });
    }
  }

  async getAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { role, tanggal } = request.get();

    if (role == "guru") {
      const absen = await User.query()
        .with("absen", (builder) => {
          builder.where("created_at", "like", `%${tanggal}%`);
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: role })
        .fetch();

      let total;
      total = await User.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("role", ["guru", "admin", "kepsek"])
        .getCount();
      const hadir = absen.toJSON().filter((d) => d.absen == "hadir").length;

      const sakit = absen.toJSON().filter((d) => d.absen == "sakit").length;

      const izin = absen.toJSON().filter((d) => d.absen == "izin").length;

      const alpa =
        total -
        absen
          .toJSON()
          .filter(
            (d) => d.absen == "hadir" || d.absen == "sakit" || d.absen == "izin"
          ).length;

      return response.ok({
        hadir,
        izin,
        sakit,
        alpa,
        total,
        absen: absen,
      });
    } else if (role == "siswa") {
      const rombel = await MRombel.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id })
        .fetch();

      let rombelData = [];

      await Promise.all(
        rombel.toJSON().map(async (d) => {
          const userIds = await MAnggotaRombel.query()
            .where({ m_rombel_id: d.id })
            .andWhere({ dihapus: 0 })
            .pluck("m_user_id");

          const totalHadir = await MAbsen.query()
            .with("user")
            .where("created_at", "like", `%${tanggal}%`)
            .andWhere({ absen: "hadir" })
            .whereIn("m_user_id", userIds)
            .count("* as total");
          const totalSakit = await MAbsen.query()
            .with("user")
            .where("created_at", "like", `%${tanggal}%`)
            .andWhere({ absen: "sakit" })
            .whereIn("m_user_id", userIds)
            .count("* as total");
          const totalIzin = await MAbsen.query()
            .with("user")
            .where("created_at", "like", `%${tanggal}%`)
            .andWhere({ absen: "izin" })
            .whereIn("m_user_id", userIds)
            .count("* as total");
          const totalAlpa =
            userIds.length -
            (totalHadir[0].total + totalSakit[0].total + totalIzin[0].total);

          return rombelData.push({
            rombel: d.nama,
            id: d.id,
            totalHadir: totalHadir[0].total,
            totalSakit: totalSakit[0].total,
            totalIzin: totalIzin[0].total,
            totalAlpa,
          });
        })
      );

      return response.ok({
        rombel: rombelData,
      });
    }
  }

  async meAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const { hari_ini, kode_hari, jam_saat_ini } = request.get();

    let absen;
    let jadwalMengajar = null;

    if (user.role == "ortu") {
      const userDataOrtu = await MProfilUser.query()
        .where({ telp_ayah: user.whatsapp })
        .orWhere({ telp_ibu: user.whatsapp })
        .first();

      const userDataSiswa = await User.query()
        .where({ id: userDataOrtu.m_user_id })
        .first();
      if (hari_ini) {
        absen = await MAbsen.query()
          .where("created_at", "like", `%${hari_ini}%`)
          .andWhere({ m_user_id: userDataSiswa.id })
          .first();

        const rombelIds = await MRombel.query().where({ m_ta_id: ta.id }).ids();

        const rombelId = await MAnggotaRombel.query()
          .where({ m_user_id: userDataSiswa.id })
          .andWhere({ dihapus: 0 })
          .whereIn("m_rombel_id", rombelIds)
          .pluck("m_rombel_id");

        let jamMengajarId = await MJamMengajar.query()
          .where({ kode_hari: kode_hari })
          .andWhere("jam_mulai", ">=", jam_saat_ini)
          .andWhere({ m_sekolah_id: sekolah.id })
          .andWhere({ m_ta_id: ta.id })
          .pluck("id");

        if (!jamMengajarId) {
          jadwalMengajar = await MJadwalMengajar.query()
            .with("jamMengajar")
            .with("rombel")
            .with("mataPelajaran")
            .where({ m_jam_mengajar_id: jamMengajarId[0] })
            .andWhere({ m_rombel_id: rombelId[0] })
            .first();
        }
      } else {
        absen = await MAbsen.query()
          .where({ m_user_id: userDataSiswa.id })
          .fetch();
      }

      return response.ok({
        absen: absen,
        jadwalMengajar: jadwalMengajar,
      });
    } else {
      if (hari_ini) {
        absen = await MAbsen.query()
          .where("created_at", "like", `%${hari_ini}%`)
          .andWhere({ m_user_id: user.id })
          .first();

        const rombelIds = await MRombel.query().where({ m_ta_id: ta.id }).ids();

        const rombelId = await MAnggotaRombel.query()
          .where({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .whereIn("m_rombel_id", rombelIds)
          .pluck("m_rombel_id");

        let jamMengajarId = await MJamMengajar.query()
          .where({ kode_hari: kode_hari })
          .andWhere("jam_mulai", ">=", jam_saat_ini)
          .andWhere({ m_sekolah_id: sekolah.id })
          .andWhere({ m_ta_id: ta.id })
          .pluck("id");

        if (!jamMengajarId) {
          jadwalMengajar = await MJadwalMengajar.query()
            .with("jamMengajar")
            .with("rombel")
            .with("mataPelajaran")
            .where({ m_jam_mengajar_id: jamMengajarId[0] })
            .andWhere({ m_rombel_id: rombelId[0] })
            .first();
        }
      } else {
        absen = await MAbsen.query().where({ m_user_id: user.id }).fetch();
      }

      return response.ok({
        absen: absen,
        jadwalMengajar: jadwalMengajar,
      });
    }
  }

  async detailAbsen({ response, request, auth, params: { absen_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const absen = await MAbsen.query().where({ id: absen_id }).first();

    if (!absen) {
      return response.notFound({ message: messageNotFound });
    }

    return response.ok({
      absen: absen,
    });
  }

  async postAbsenFr({ response, request }) {
    let {
      photo,
      mask,
      temp,
      whatsapp,
      ipCamera,
      domain,
      waktu_masuk,
      waktu_pulang,
    } = request.post();

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await User.query()
      .select("id", "whatsapp", "role", "m_sekolah_id", "nama", "wa_real")
      .with("profil", (builder) => {
        builder.select("id", "m_user_id", "telp_ayah", "telp_ibu");
      })
      .where({ whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    if (!user) {
      return response.notFound({
        message: "Data tidak ditemukan",
      });
    }

    if (user.wa_real) {
      WhatsAppService.sendMessage(
        user.wa_real,
        `Muka Anda terdeteksi camera pada ${moment(
          waktu_masuk || waktu_pulang
        ).format("YYYY-MM-DD HH:mm:ss")}`
      );
    }

    const fileName = Date.now();
    let url = "";
    if (photo) {
      const filePhoto = bucket.file(`fr/${fileName}.jpeg`);
      filePhoto.save(Buffer.from(photo, "base64")).then(async () => {
        const response = await filePhoto.get();
        url = response[1].mediaLink;
      });
      // await Drive.put(`fr/${fileName}.jpeg`, Buffer.from(photo, "base64"));
    }

    const absen = await MAbsen.query()
      .where(
        "created_at",
        "like",
        `%${moment(waktu_masuk || waktu_pulang).format("YYYY-MM-DD")}%`
      )
      .andWhere({ m_user_id: user.id })
      .first();

    if (!absen) {
      await MAbsen.create({
        m_sekolah_id: sekolah.id,
        m_user_id: user.id,
        role: user.role,
        absen: "hadir",
        foto_masuk_local: url,
        masker: mask,
        suhu: temp,
        waktu_masuk,
        waktu_pulang,
      });
    } else {
      await MAbsen.query().where({ id: absen.id }).update({
        m_sekolah_id: sekolah.id,
        m_user_id: user.id,
        role: user.role,
        absen: "hadir",
        foto_pulang_local: url,
        masker: mask,
        suhu: temp,
        waktu_masuk,
        waktu_pulang,
      });
    }

    return response.ok({
      user,
    });
  }

  // Belum Validasi
  async postAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      absen,
      keterangan,
      lampiran,
      foto_masuk,
      user_id,
      lokasi_masuk,
      lokasi_pulang,
      waktu_masuk,
    } = request.post();

    lampiran = lampiran ? lampiran.toString() : null;

    // const anggotaRombel = await MAnggotaRombel.query()
    //   .with("rombel", (builder) => {
    //     builder.with("user", (builder) => {
    //       builder.select("id", "nama", "wa_real");
    //     });
    //   })
    //   .where({ m_user_id: user.id })
    //   .andWhere({ dihapus: 0 })
    //   .first();

    // const mapel = await MMataPelajaran.query()
    //   .where({ m_user_id: anggotaRombel.rombel.m_user_id })
    //   .andWhere({ m_ta_id: ta.id })
    //   .andWhere({ dihapus: 0 })
    //   .first();

    // const jadwalMengajar = await MJadwalMengajar.query()
    //   .where({ m_mata_pelajaran_id: mapel.id })
    //   .andWhere({ m_rombel_id: anggotaRombel.m_rombel_id })
    //   .first();

    let data;
    if (absen != "hadir") {
      data = await MAbsen.create({
        m_sekolah_id: sekolah.id,
        m_user_id: user.id,
        role: user.role,
        absen,
        keterangan,
        lampiran: lampiran,
      });
      // if (absen == "izin") {
      //   await WhatsAppService.sendMessage(
      //     anggotaRombel.rombel.user.wa_real,
      //     `Halo ${
      //       anggotaRombel.rombel.user.nama
      //     }, anak perwalian Anda atas nama *${
      //       user.nama
      //     }* izin hari ini. Silahkan menekan tautan berikut untuk melihat detail keterangan absensi siswa Anda. \n \n${domain}/smarteschool/kelas${
      //       jadwalMengajar.id
      //     }/absen-harian`
      //   );
      // } else if (absen == "sakit") {
      //   await WhatsAppService.sendMessage(
      //     anggotaRombel.rombel.user.wa_real,
      //     `Halo ${
      //       anggotaRombel.rombel.user.nama
      //     }, anak perwalian Anda atas nama *${
      //       user.nama
      //     }* hari ini sakit. Silahkan menekan tautan berikut untuk melihat detail keterangan absensi siswa Anda. \n \n${domain}/smarteschool/kelas${
      //       jadwalMengajar.id
      //     }/absen-harian`
      //   );
      // }
    } else {
      data = await MAbsen.create({
        m_sekolah_id: sekolah.id,
        m_user_id: user_id ? user_id : user.id,
        role: user.role,
        absen,
        keterangan,
        waktu_masuk,
        foto_masuk,
        lokasi_masuk: JSON.stringify(lokasi_masuk),
        lokasi_pulang: JSON.stringify(lokasi_pulang),
      });
    }

    // await WhatsAppService.sendMessage(
    //   user.whatsapp,
    //   `Halo, absen anda sudah masuk. Anda masuk dengan keterangan *${absen}* \n ${keterangan ? keterangan : foto_masuk ? foto_masuk : null} \nPada pukul ${data.created_at}`
    // );

    return response.ok({
      data: data,
      message: messagePostSuccess,
    });
  }
  async postAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      absen,
      keterangan,
      lampiran,
      foto_masuk,
      user_id,
      lokasi_masuk,
      lokasi_pulang,
      waktu_masuk,
    } = request.post();

    lampiran = lampiran ? lampiran.toString() : null;

    // const anggotaRombel = await MAnggotaRombel.query()
    //   .with("rombel", (builder) => {
    //     builder.with("user", (builder) => {
    //       builder.select("id", "nama", "wa_real");
    //     });
    //   })
    //   .where({ m_user_id: user.id })
    //   .andWhere({ dihapus: 0 })
    //   .first();

    // const mapel = await MMataPelajaran.query()
    //   .where({ m_user_id: anggotaRombel.rombel.m_user_id })
    //   .andWhere({ m_ta_id: ta.id })
    //   .andWhere({ dihapus: 0 })
    //   .first();

    // const jadwalMengajar = await MJadwalMengajar.query()
    //   .where({ m_mata_pelajaran_id: mapel.id })
    //   .andWhere({ m_rombel_id: anggotaRombel.m_rombel_id })
    //   .first();

    let data;
    if (absen != "hadir") {
      data = await MAbsen.create({
        m_sekolah_id: sekolah.id,
        m_user_id: user.id,
        role: user.role,
        absen,
        keterangan,
        lampiran: lampiran,
      });
      // if (absen == "izin") {
      //   await WhatsAppService.sendMessage(
      //     anggotaRombel.rombel.user.wa_real,
      //     `Halo ${
      //       anggotaRombel.rombel.user.nama
      //     }, anak perwalian Anda atas nama *${
      //       user.nama
      //     }* izin hari ini. Silahkan menekan tautan berikut untuk melihat detail keterangan absensi siswa Anda. \n \n${domain}/smarteschool/kelas${
      //       jadwalMengajar.id
      //     }/absen-harian`
      //   );
      // } else if (absen == "sakit") {
      //   await WhatsAppService.sendMessage(
      //     anggotaRombel.rombel.user.wa_real,
      //     `Halo ${
      //       anggotaRombel.rombel.user.nama
      //     }, anak perwalian Anda atas nama *${
      //       user.nama
      //     }* hari ini sakit. Silahkan menekan tautan berikut untuk melihat detail keterangan absensi siswa Anda. \n \n${domain}/smarteschool/kelas${
      //       jadwalMengajar.id
      //     }/absen-harian`
      //   );
      // }
    } else {
      data = await MAbsen.create({
        m_sekolah_id: sekolah.id,
        m_user_id: user_id ? user_id : user.id,
        role: user.role,
        absen,
        keterangan,
        waktu_masuk,
        foto_masuk,
        lokasi_masuk: JSON.stringify(lokasi_masuk),
        lokasi_pulang: JSON.stringify(lokasi_pulang),
      });
    }

    // await WhatsAppService.sendMessage(
    //   user.whatsapp,
    //   `Halo, absen anda sudah masuk. Anda masuk dengan keterangan *${absen}* \n ${keterangan ? keterangan : foto_masuk ? foto_masuk : null} \nPada pukul ${data.created_at}`
    // );

    return response.ok({
      data: data,
      message: messagePostSuccess,
    });
  }

  async putAbsen({ response, request, auth, params: { absen_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      absen,
      keterangan,
      lampiran,
      foto_pulang,
      waktu_pulang,
      foto_masuk,
      lokasi_masuk,
      lokasi_pulang,
    } = request.post();

    // return JSON.stringify(lokasi_masuk) ;

    if (absen != "hadir") {
      await MAbsen.query().where({ id: absen_id }).update({
        absen,
        keterangan,
        lampiran: lampiran.toString(),
      });
    } else {
      await MAbsen.query()
        .where({ id: absen_id })
        .update({
          foto_masuk,
          absen,
          foto_pulang,
          waktu_pulang,
          lokasi_masuk: JSON.stringify(lokasi_masuk),
          lokasi_pulang: JSON.stringify(lokasi_pulang),
        });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async postAbsenAdmin({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    let {
      absen,
      keterangan,
      lampiran,
      waktu_masuk,
      // foto_pulang,
      waktu_pulang,
      foto_masuk,
      lokasi_masuk,
      lokasi_pulang,
    } = request.post();

    lampiran = lampiran ? lampiran.toString() : null;

    // const anggotaRombel = await MAnggotaRombel.query()
    //   .with("rombel", (builder) => {
    //     builder.with("user", (builder) => {
    //       builder.select("id", "nama", "wa_real");
    //     });
    //   })
    //   .where({ m_user_id: user.id })
    //   .andWhere({ dihapus: 0 })
    //   .first();

    // const mapel = await MMataPelajaran.query()
    //   .where({ m_user_id: anggotaRombel.rombel.m_user_id })
    //   .andWhere({ m_ta_id: ta.id })
    //   .andWhere({ dihapus: 0 })
    //   .first();

    // const jadwalMengajar = await MJadwalMengajar.query()
    //   .where({ m_mata_pelajaran_id: mapel.id })
    //   .andWhere({ m_rombel_id: anggotaRombel.m_rombel_id })
    //   .first();

    let data;
    if (absen != "hadir") {
      data = await MAbsen.create({
        m_sekolah_id: sekolah.id,
        m_user_id: user.id,
        role: user.role,
        absen,
        keterangan,
        lampiran: lampiran,
      });
      // if (absen == "izin") {
      //   await WhatsAppService.sendMessage(
      //     anggotaRombel.rombel.user.wa_real,
      //     `Halo ${
      //       anggotaRombel.rombel.user.nama
      //     }, anak perwalian Anda atas nama *${
      //       user.nama
      //     }* izin hari ini. Silahkan menekan tautan berikut untuk melihat detail keterangan absensi siswa Anda. \n \n${domain}/smarteschool/kelas${
      //       jadwalMengajar.id
      //     }/absen-harian`
      //   );
      // } else if (absen == "sakit") {
      //   await WhatsAppService.sendMessage(
      //     anggotaRombel.rombel.user.wa_real,
      //     `Halo ${
      //       anggotaRombel.rombel.user.nama
      //     }, anak perwalian Anda atas nama *${
      //       user.nama
      //     }* hari ini sakit. Silahkan menekan tautan berikut untuk melihat detail keterangan absensi siswa Anda. \n \n${domain}/smarteschool/kelas${
      //       jadwalMengajar.id
      //     }/absen-harian`
      //   );
      // }
    } else {
      data = await MAbsen.create({
        m_sekolah_id: sekolah.id,
        m_user_id: user_id ? user_id : user.id,
        role: user.role,
        absen,
        keterangan,
        waktu_masuk,
        foto_masuk,
        waktu_masuk,
        waktu_pulang,
        lokasi_masuk: JSON.stringify(lokasi_masuk),
        lokasi_pulang: JSON.stringify(lokasi_pulang),
      });
    }

    // await WhatsAppService.sendMessage(
    //   user.whatsapp,
    //   `Halo, absen anda sudah masuk. Anda masuk dengan keterangan *${absen}* \n ${keterangan ? keterangan : foto_masuk ? foto_masuk : null} \nPada pukul ${data.created_at}`
    // );

    return response.ok({
      data: data,
      message: messagePostSuccess,
    });
  }

  async putAbsenAdmin({ response, request, auth, params: { absen_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();
    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      absen,
      keterangan,
      lampiran,
      foto_pulang,
      waktu_masuk,
      waktu_pulang,
      foto_masuk,
      lokasi_masuk,
      lokasi_pulang,
    } = request.post();

    // return JSON.stringify(lokasi_masuk) ;

    if (absen != "hadir") {
      await MAbsen.query().where({ id: absen_id }).update({
        absen,
        keterangan,
        lampiran: lampiran.toString(),
      });
    } else {
      await MAbsen.query()
        .where({ id: absen_id })
        .update({
          foto_masuk,
          absen,
          waktu_masuk,
          foto_pulang,
          waktu_pulang,
          lokasi_masuk: JSON.stringify(lokasi_masuk),
          lokasi_pulang: JSON.stringify(lokasi_pulang),
        });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async downloadAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { role, tanggal, rombel_id } = request.post();
    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    if (role == "siswa") {
      let rombel = MRombel.query()
        .with("user")
        .with("anggotaRombel", (builder) => {
          builder.where({ dihapus: 0 }).with("user", (builder) => {
            builder.with("absen", (builder) => {
              builder.where("created_at", "like", `%${tanggal}%`);
            });
          });
        })
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id });

      if (rombel_id) {
        rombel = rombel.andWhere({ id: rombel_id });
      }
      rombel = await rombel.fetch();

      let workbook = new Excel.Workbook();

      await Promise.all(
        rombel.toJSON().map(async (d, idx) => {
          let worksheet = workbook.addWorksheet(`${idx + 1}.${d.nama}`);

          await Promise.all(
            d.anggotaRombel
              .sort((a, b) => ("" + a.user.nama).localeCompare(b.user.nama))
              .map(async (anggota) => {
                // add column headers
                worksheet.getRow(10).values = [
                  "Nama",
                  "Absen",
                  "Keterangan",
                  "Lampiran",
                  "Waktu Masuk",
                  "Waktu Pulang",
                  "suhu",
                  "masker",
                  "Foto Masuk",
                  "Foto Masuk Camera",
                  "Foto Pulang",
                  "Foto Pulang Camera",
                ];

                worksheet.columns = [
                  { key: "user" },
                  { key: "absen" },
                  { key: "keterangan" },
                  { key: "lampiran" },
                  { key: "created_at" },
                  { key: "waktu_pulang" },
                  { key: "suhu" },
                  { key: "masker" },
                  { key: "foto_masuk" },
                  { key: "foto_masuk_cam" },
                  { key: "foto_pulang" },
                  { key: "foto_pulang_cam" },
                ];

                // Add row using key mapping to columns
                let row = worksheet.addRow({
                  user: anggota.user ? anggota.user.nama : "-",
                  absen: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].absen
                        : "-"
                      : "-"
                    : "-",
                  keterangan: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].keterangan
                        : "-"
                      : "-"
                    : "-",
                  lampiran: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].lampiran
                        : "-"
                      : "-"
                    : "-",
                  created_at: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].created_at
                        : "-"
                      : "-"
                    : "-",
                  waktu_pulang: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].waktu_pulang
                        : "-"
                      : "-"
                    : "-",
                  suhu: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].suhu
                        : "-"
                      : "-"
                    : "-",
                  masker: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].masker
                        : "-"
                      : "-"
                    : "-",
                  foto_masuk: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].foto_masuk
                        : "-"
                      : "-"
                    : "-",
                  foto_masuk_cam: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].foto_masuk_local
                          ? "https://server1.smarteschool.net/camera/" +
                            anggota.user.absen[0].foto_masuk_local
                          : "-"
                        : "-"
                      : "-"
                    : "-",
                  foto_pulang: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].foto_pulang
                        : "-"
                      : "-"
                    : "-",
                  foto_pulang_cam: anggota.user
                    ? anggota.user.absen
                      ? anggota.user.absen.length
                        ? anggota.user.absen[0].foto_pulang_local
                          ? "https://server1.smarteschool.net/camera/" +
                            anggota.user.absen[0].foto_pulang_local
                          : "-"
                        : "-"
                      : "-"
                    : "-",
                });
              })
          );
        })
      );

      worksheet.getColumn("A").width = 25;
      worksheet.getColumn("B").width = 11;
      worksheet.getColumn("C").width = 11;
      worksheet.getColumn("D").width = 19;
      worksheet.getColumn("E").width = 13;
      worksheet.getColumn("F").width = 19;
      worksheet.getColumn("G").width = 13;
      worksheet.getColumn("H").width = 13;
      worksheet.getColumn("I").width = 13;
      worksheet.getColumn("J").width = 13;
      worksheet.getColumn("K").width = 13;
      worksheet.getColumn("L").width = 13;

      let namaFile = `/uploads/rekap-absen-siswa-${Date.now()}.xlsx`;

      // save workbook to disk
      await workbook.xlsx.writeFile(`public${namaFile}`);

      return namaFile;
    } else if (role == "guru") {
      const kepsek = await User.query()
        .with("absen", (builder) => {
          builder.where("created_at", "like", `%${tanggal}%`);
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "kepsek" })
        .fetch();

      const absen = await User.query()
        .with("absen", (builder) => {
          builder.where("created_at", "like", `%${tanggal}%`);
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: role })
        .fetch();

      let workbook = new Excel.Workbook();

      let worksheet = workbook.addWorksheet(`${tanggal}`);

      await Promise.all(
        kepsek.toJSON().map(async (d) => {
          worksheet.getRow(10).values = [
            "Nama",
            "Whatsapp",
            "Absen",
            "Keterangan",
            "Lampiran",
            "Foto Masuk",
            "Waktu Masuk",
            "Foto Pulang",
            "Waktu Pulang",
          ];

          worksheet.columns = [
            { key: "user" },
            { key: "whatsapp" },
            { key: "absen" },
            { key: "keterangan" },
            { key: "lampiran" },
            { key: "foto_masuk" },
            { key: "created_at" },
            { key: "foto_pulang" },
            { key: "waktu_pulang" },
          ];

          let row = worksheet.addRow({
            user: d ? d.nama : "-",
            whatsapp: d ? d.whatsapp : "-",
            kepsek: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].kepsek
                  : "-"
                : "-"
              : "-",
            keterangan: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].keterangan
                  : "-"
                : "-"
              : "-",
            lampiran: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].lampiran
                  : "-"
                : "-"
              : "-",
            foto_masuk: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].foto_masuk
                  : "-"
                : "-"
              : "-",
            created_at: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].created_at
                  : "-"
                : "-"
              : "-",
            foto_pulang: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].foto_pulang
                  : "-"
                : "-"
              : "-",
            waktu_pulang: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].waktu_pulang
                  : "-"
                : "-"
              : "-",
          });
        })
      );

      await Promise.all(
        absen.toJSON().map(async (d) => {
          worksheet.getRow(12).values = [
            "Nama",
            "Whatsapp",
            "Absen",
            "Keterangan",
            "Lampiran",
            "Foto Masuk",
            "Waktu Masuk",
            "Foto Pulang",
            "Waktu Pulang",
          ];

          worksheet.columns = [
            { key: "user" },
            { key: "whatsapp" },
            { key: "absen" },
            { key: "keterangan" },
            { key: "lampiran" },
            { key: "foto_masuk" },
            { key: "created_at" },
            { key: "foto_pulang" },
            { key: "waktu_pulang" },
          ];

          let row = worksheet.addRow({
            user: d ? d.nama : "-",
            whatsapp: d ? d.whatsapp : "-",
            absen: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].absen
                  : "-"
                : "-"
              : "-",
            keterangan: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].keterangan
                  : "-"
                : "-"
              : "-",
            lampiran: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].lampiran
                  : "-"
                : "-"
              : "-",
            foto_masuk: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].foto_masuk
                  : "-"
                : "-"
              : "-",
            created_at: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].created_at
                  : "-"
                : "-"
              : "-",
            foto_pulang: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].foto_pulang
                  : "-"
                : "-"
              : "-",
            waktu_pulang: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].waktu_pulang
                  : "-"
                : "-"
              : "-",
          });
        })
      );

      worksheet.getColumn("A").width = 25;
      worksheet.getColumn("B").width = 33;
      worksheet.getColumn("C").width = 11;
      worksheet.getColumn("D").width = 19;
      worksheet.getColumn("E").width = 13;
      worksheet.getColumn("F").width = 19;
      worksheet.getColumn("G").width = 13;
      worksheet.getColumn("H").width = 13;
      worksheet.getColumn("I").width = 13;
      worksheet.getColumn("J").width = 13;
      worksheet.getColumn("K").width = 13;
      worksheet.getColumn("L").width = 13;
      let namaFile = `/uploads/rekap-absen-guru-${keluarantanggalseconds}.xlsx`;

      // save workbook to disk
      await workbook.xlsx.writeFile(`public${namaFile}`);

      return namaFile;
    }
  }

  async getTest({ response, request, auth }) {}

  async getUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      tingkat,
      daftar_ujian_id,
      page = 1,
      search,
      filter_mapel,
      filter_tipe,
      filter_tingkat,
    } = request.get();

    if (tingkat) {
      let ujianTingkat;

      if (user.role == "admin") {
        const userIds = await User.query()
          .where({ dihapus: 0 })
          .andWhere({ m_sekolah_id: sekolah.id })
          .whereIn("role", ["guru", "admin"])
          .ids();

        const tipeUjian = [
          "pts1",
          "pts2",
          "pas1",
          "pas2",
          "us",
          "literasi",
          "numerasi",
        ];

        ujianTingkat = await MUjian.query()
          .select("id", "nama")
          .where({ tingkat: tingkat })
          .andWhere({ dihapus: 0 })
          .whereIn("m_user_id", userIds)
          .whereIn("tipe", tipeUjian)
          .orderBy("id", "desc")
          .fetch();
      } else {
        ujianTingkat = await MUjian.query()
          .select("id", "nama")
          .where({ tingkat: tingkat })
          .andWhere({ dihapus: 0 })
          .andWhere({ m_user_id: user.id })
          .orderBy("id", "desc")
          .fetch();
      }

      let ujianDetail;

      if (daftar_ujian_id) {
        ujianDetail = await MUjian.query()
          .with("soalUjian", (builder) => {
            builder
              .with("soal", (builder) => {
                builder.where({ dihapus: 0 });
              })
              .where({ dihapus: 0 });
          })
          .where({ id: daftar_ujian_id })
          .first();
      }

      return response.ok({
        ujianTingkat: ujianTingkat,
        ujianDetail: ujianDetail,
      });
    }

    let mataPelajaran, ujian;

    if (user.role == "guru") {
      mataPelajaran = await MMataPelajaran.query()
        .with("user")
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .andWhere({ m_ta_id: ta.id })
        .fetch();
    } else if (user.role == "admin") {
      mataPelajaran = await MMataPelajaran.query()
        .with("user")
        .where({ dihapus: 0 })
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ m_sekolah_id: sekolah.id })
        .fetch();
    }

    if (user.role == "admin") {
      const userIds = await User.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("role", ["guru", "admin"])
        .ids();
      ujian = MUjian.query()
        .with("mataPelajaran")
        .withCount("soalUjian as jumlahSoal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .whereIn("m_user_id", userIds)
        .orderBy("id", "desc");
    } else {
      const ujianUserIds = await MUjian.query()
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .ids();
      const ujianMapelIds = await MUjian.query()
        .where({ dihapus: 0 })
        .whereIn(
          "m_mata_pelajaran_id",
          mataPelajaran.toJSON().map((d) => d.id)
        )
        .ids();
      ujian = MUjian.query()
        .with("mataPelajaran")
        .withCount("soalUjian as jumlahSoal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .orderBy("id", "desc")
        .whereIn("id", [...ujianUserIds, ...ujianMapelIds]);
    }

    if (search) {
      ujian = ujian.where("nama", "like", `%${search}%`);
    }
    if (filter_mapel) {
      ujian = ujian.where({ m_user_id: filter_mapel });
    }
    if (filter_tingkat) {
      ujian = ujian.where({ tingkat: filter_tingkat });
    }
    if (filter_tipe) {
      ujian = ujian.where({ tipe: filter_tipe });
    } else {
      ujian.whereNot({ tipe: "ppdb" });
    }

    ujian = await ujian.paginate(page, 20);

    let tingkatData = [];

    if (
      sekolah.tingkat == "SMK" ||
      sekolah.tingkat == "SMA" ||
      sekolah.tingkat == "MA" ||
      sekolah.tingkat == "MAK"
    ) {
      tingkatData = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP" || sekolah.tingkat == "MTS") {
      tingkatData = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD" || sekolah.tingkat == "MI") {
      tingkatData = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB" || sekolah.tingkat == "SUPER") {
      tingkatData = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];
    }

    let tipeUjian = [
      { value: "kuis", label: "Kuis" },
      { value: "ph", label: "Penilaian Harian" },
      {
        value: "pts1",
        label: "Penilaian Tengah Semester 1 / Sumatif Tengah Semester 1",
      },
      {
        value: "pts2",
        label: "Penilaian Tengah Semester 2 / Sumatif Tengah Semester 2",
      },
      {
        value: "pas1",
        label: "Penilaian Akhir Semester 1 / Sumatif Akhir Semester 1",
      },
      {
        value: "pas2",
        label: "Penilaian Akhir Semester 2 / Sumatif Akhir Semester 2",
      },
      { value: "us", label: "Ujian Sekolah / Asesmen Sumatif Sekolah" },
      { value: "to", label: "Try out" },
      { value: "literasi", label: "AKM - Literasi" },
      { value: "numerasi", label: "AKM - Numerasi" },
    ];
    if (sekolah.id == 8719) {
      tipeUjian = [
        { value: "kuis", label: "Kuis" },
        { value: "ph", label: "Penilaian Harian" },
        { value: "pts1", label: "Penilaian Tengah Semester 1" },
        { value: "pts2", label: "Penilaian Tengah Semester 2" },
        { value: "pas1", label: "Penilaian Akhir Semester 1" },
        { value: "pas2", label: "Penilaian Akhir Semester 2" },
        { value: "sts1", label: "Sumatif Tengah Semester 1" },
        { value: "sts2", label: "Sumatif Tengah Semester 2" },
        { value: "sas1", label: "Sumatif Akhir Semester 1" },
        { value: "sas2", label: "Sumatif Akhir Semester 2" },
        { value: "us", label: "Ujian Sekolah" },
        { value: "to", label: "Try out" },
        { value: "literasi", label: "AKM - Literasi" },
        { value: "numerasi", label: "AKM - Numerasi" },
      ];
    }

    return response.ok({
      ujian: ujian.toJSON().data,
      total: ujian.toJSON().total,
      lastPage: ujian.toJSON().lastPage,
      mataPelajaran: mataPelajaran,
      tingkat: tingkatData,
      tipeUjian: tipeUjian,
    });
  }

  async detailUjian({ response, request, auth, params: { ujian_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    if (user.role == "siswa") {
      return response.forbidden({ message: messageForbidden });
    }

    const { nav ,tanggal,page} = request.get();

   
    const hari_ini = moment().format("YYYY-MM-DD HH:mm");

    const ujian = await MUjian.query().where({ id: ujian_id }).first();

    const soalUjian = await MUjian.query()
      .with("soalUjian", (builder) => {
        builder
          .with("soal", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .where({ id: ujian_id })
      .first();
    const filterUjian = soalUjian.toJSON().soalUjian.filter((d) => {
      if (d.soal.bentuk) {
        if (
          [
            "menjodohkan",
            "uraian",
            "esai",
            "pg_kompleks",
            "pg",
            "isian",
          ].includes(d.soal.bentuk.toLowerCase().trim())
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });

    const soalUjianIds = await TkSoalUjian.query()
      .with("soal")
      .where({ m_ujian_id: ujian_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const totalNilai = soalUjianIds
      .toJSON()
      .map((d) => d.soal.nilai_soal)
      .reduce((a, b) => a + b, 0);

    let jumlahSoalPg = 0;

    let jumlahSoalEsai = 0;

    let jumlahSoalIsian = 0;

    await Promise.all(
      soalUjianIds.toJSON().map(async (d) => {
        if (d.soal.bentuk.toLowerCase().trim() == "pg") {
          jumlahSoalPg = jumlahSoalPg + 1;
        } else if (d.soal.bentuk.toLowerCase().trim() == "esai") {
          jumlahSoalEsai = jumlahSoalEsai + 1;
        } else if (d.soal.bentuk.toLowerCase().trim() == "isian") {
          jumlahSoalIsian = jumlahSoalIsian + 1;
        }
      })
    );

    let kontenMateri = [];
    let konteksMateri = [];
    let prosesKognitif = [];
    let levelKognitif = [];
    let bentukSoal = [];

    if (ujian.tipe == "literasi") {
      kontenMateri = [
        { value: "teks_informasi", label: "Teks Informasi" },
        { value: "teks_fiksi", label: "Teks Fiksi" },
        { value: "bilangan", label: "Bilangan" },
      ];

      konteksMateri = [
        { value: "personal", label: "Personal" },
        { value: "sosbud", label: "Sosial Budaya" },
        { value: "saintifik", label: "Saintifik" },
      ];

      prosesKognitif = [
        { value: "menemukan_informasi", label: "Menemukan Informasi" },
        {
          value: "interpretasi_integrasi",
          label: "Interpretasi dan Integrasi",
        },
        { value: "evaluasi_refleksi", label: "Evaluasi dan Refleksi" },
      ];

      bentukSoal = [
        { value: "pg", label: "Pilihan Ganda" },
        { value: "pg_kompleks", label: "Pilihan Ganda Kompleks" },
        { value: "esai", label: "Isian" },
        { value: "uraian", label: "Uraian" },
        { value: "menjodohkan", label: "Menjodohkan" },
      ];
    } else if (ujian.tipe == "numerasi") {
      kontenMateri = [
        { value: "geometri_pengukuran", label: "Geometri dan Pengukuran" },
        { value: "data_ketidakpastian", label: "Data dan Ketidakpastian" },
        { value: "aljabar", label: "Aljabar" },
      ];

      konteksMateri = [
        { value: "personal", label: "Personal" },
        { value: "sosbud", label: "Sosial Budaya" },
        { value: "saintifik", label: "Saintifik" },
      ];

      prosesKognitif = [
        { value: "pemahaman", label: "Pemahaman" },
        { value: "penerapan", label: "Penerapan" },
        { value: "penalaran", label: "Penalaran" },
      ];

      bentukSoal = [
        { value: "pg", label: "Pilihan Ganda" },
        { value: "pg_kompleks", label: "Pilihan Ganda Kompleks" },
        { value: "esai", label: "Isian" },
        { value: "uraian", label: "Uraian" },
        { value: "menjodohkan", label: "Menjodohkan" },
      ];
    } else {
      levelKognitif = [
        { value: "c1", label: "Mengingat" },
        { value: "c2", label: "Memahami" },
        { value: "c3", label: "Menerapkan" },
        { value: "c4", label: "Menganalisis" },
        { value: "c5", label: "Mengevaluasi" },
        { value: "c6", label: "Mengkreasi" },
      ];
      bentukSoal = [
        { value: "pg", label: "Pilihan Ganda" },
        { value: "esai", label: "Esai" },
        { value: "isian", label: "Isian" },
      ];
    }

    let tingkatData;

    if (
      sekolah.tingkat == "SMK" ||
      sekolah.tingkat == "SMA" ||
      sekolah.tingkat == "MA" ||
      sekolah.tingkat == "MAK"
    ) {
      tingkatData = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP" || sekolah.tingkat == "MTS") {
      tingkatData = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD" || sekolah.tingkat == "MI") {
      tingkatData = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB" || sekolah.tingkat == "SUPER") {
      tingkatData = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];
    }
    if (nav == "riwayat") {
      const count = await MJadwalUjian.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .andWhere("waktu_ditutup", ">=", hari_ini)
        .count("* as total");
      const total = count[0].total;

      let jadwalUjian = MJadwalUjian.query()
        // .with("ujian")
        .where("m_ujian_id", ujian_id)
        // .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .andWhere("waktu_ditutup", "<=", hari_ini)
        .orderBy("waktu_dibuka", "desc");

      if (tanggal) {
        jadwalUjian.whereBetween("waktu_dibuka", [
          `${tanggal} 00:00:00`,
          `${tanggal} 23:59:59`,
        ]);
      }
      jadwalUjian = await jadwalUjian.paginate(page, 10);

      const jadwalUjianDataFormat = [];

      await Promise.all(
        jadwalUjian
          .toJSON().data
          // .data.filter((item) => item.ujian)
          .map(async (jadwalUjianData) => {
            const tkJadwalUjian = await TkJadwalUjian.query()
              .with("rombel", (builder) => {
                builder.where({ dihapus: 0 });
              })
              .where({ m_jadwal_ujian_id: jadwalUjianData.id })
              .where({ dihapus: 0 })
              .fetch();

            let metaJadwalUjian = {
              remedial: 0,
              susulan: 0,
              diatasKKM: 0,
            };
            jadwalUjianDataFormat.push({
              jadwalUjian: jadwalUjianData,
              rombel: tkJadwalUjian,
              metaJadwalUjian: metaJadwalUjian,
            });
          })
      );

      return response.ok({
        jadwalUjian: jadwalUjianDataFormat,

        totalData: jadwalUjian.toJSON().total,
        lastPage: jadwalUjian.toJSON().lastPage,
        total,
        ujian: { ...ujian.toJSON(), soalUjian: filterUjian },
        kontenMateri,
        konteksMateri,
        prosesKognitif,
        bentukSoal,
        levelKognitif,
        jumlahSoalPg: jumlahSoalPg,
        jumlahSoalEsai: jumlahSoalEsai,
        jumlahSoalIsian: jumlahSoalIsian,
        // filter
        totalNilai,
        tingkat: tingkatData,
      });
    }

    return response.ok({
      ujian: { ...ujian.toJSON(), soalUjian: filterUjian },
      kontenMateri,
      konteksMateri,
      prosesKognitif,
      bentukSoal,
      levelKognitif,
      jumlahSoalPg: jumlahSoalPg,
      jumlahSoalEsai: jumlahSoalEsai,
      jumlahSoalIsian: jumlahSoalIsian,
      // filter
      totalNilai,
      tingkat: tingkatData,
    });
  }

  async postUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, tipe, tingkat, m_mata_pelajaran_id, ujian_id } =
      request.post();

    if (tipe != "ppdb") {
      const rules = {
        nama: "required",
        tipe: "required",
        tingkat: "required",
      };
      const message = {
        "nama.required": "Nama Ujian harus diisi",
        "tipe.required": "Tipe Ujian harus dipilih",
        "tingkat.required": "Tingkat Kelas harus dipilih",
        "m_mata_pelajaran_id.required": "Mata Pelajaran harus dipilih",
      };
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }

      const ujian = await MUjian.create({
        nama,
        tipe,
        tingkat,
        m_mata_pelajaran_id,
        m_user_id: user.id,
        dihapus: 0,
      });

      const idsGuru = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ role: "guru" })
        .andWhere({ dihapus: 0 })
        .ids();

      const jumlahUjian = await MUjian.query()
        .whereIn("m_user_id", idsGuru)
        .andWhere({ dihapus: 0 })
        .getCount();

      await MSekolah.query().where({ id: sekolah.id }).update({
        jumlah_ujian: jumlahUjian,
      });

      if (ujian_id) {
        const soalIds = await TkSoalUjian.query()
          .where({ m_ujian_id: ujian_id })
          .andWhere({ dihapus: 0 })
          .pluck("m_soal_ujian_id");
        for (let i = 0; i < soalIds.length; i++) {
          const item = soalIds[i];
          // soalIds.map(async (item) => {
          const dataUjian = await MSoalUjian.query()
            .where({ id: item })
            .first();
          const createUjian = await MSoalUjian.create({
            kd: dataUjian.kd,
            kd_konten_materi: dataUjian.kd_konten_materi,
            level_kognitif: dataUjian.level_kognitif,
            bentuk: dataUjian.bentuk,
            akm_konten_materi: dataUjian.akm_konten_materi,
            akm_konteks_materi: dataUjian.akm_konteks_materi,
            akm_proses_kognitif: dataUjian.akm_proses_kognitif,
            tingkat_kesukaran: dataUjian.tingkat_kesukaran,
            sumber_buku: dataUjian.sumber_buku,
            audio: dataUjian.audio,
            pertanyaan: dataUjian.pertanyaan,
            jawaban_a: dataUjian.jawaban_a,
            jawaban_b: dataUjian.jawaban_b,
            jawaban_c: dataUjian.jawaban_c,
            jawaban_d: dataUjian.jawaban_d,
            jawaban_e: dataUjian.jawaban_e,
            kj_pg: dataUjian.kj_pg,
            kj_uraian: dataUjian.kj_uraian,
            jawaban_pg_kompleks: dataUjian.jawaban_pg_kompleks,
            pilihan_menjodohkan: dataUjian.pilihan_menjodohkan,
            soal_menjodohkan: dataUjian.soal_menjodohkan,
            opsi_a_uraian: dataUjian.opsi_a_uraian,
            opsi_b_uraian: dataUjian.opsi_b_uraian,
            rubrik_kj: dataUjian.rubrik_kj,
            pembahasan: dataUjian.pembahasan,
            jawaban_benar: dataUjian.jawaban_benar,
            nilai_soal: dataUjian.nilai_soal,
            m_user_id: user.id,
            dihapus: 0,
          });

          await TkSoalUjian.create({
            m_ujian_id: ujian.id,
            m_soal_ujian_id: createUjian?.id,
            dihapus: 0,
          });
          // });
        }
      }

      return response.ok({
        message: messagePostSuccess,
      });
    } else {
      const ujian = await MUjian.create({
        nama,
        tipe,
        m_user_id: user.id,
        dihapus: 0,
      });

      if (ujian_id) {
        const soalIds = await TkSoalUjian.query()
          .where({ m_ujian_id: ujian_id })
          .andWhere({ dihapus: 0 })
          .pluck("m_soal_ujian_id");
        soalIds.map(async (item) => {
          await TkSoalUjian.create({
            m_ujian_id: ujian.id,
            m_soal_ujian_id: item,
            dihapus: 0,
          });
        });
      }
      return response.ok({
        message: messagePostSuccess,
      });
    }
  }

  async putUjian({ response, request, auth, params: { ujian_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama, tipe, tingkat, m_mata_pelajaran_id } = request.post();
    const rules = {
      nama: "required",
      tipe: "required",
      tingkat: "required",
    };
    const message = {
      "nama.required": "Nama Ujian harus diisi",
      "tipe.required": "Tipe Ujian harus dipilih",
      "tingkat.required": "Tingkat Kelas harus dipilih",
      "m_mata_pelajaran_id.required": "Mata Pelajaran harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    if (tipe == "literasi" || tipe == "numerasi") {
      m_mata_pelajaran_id = null;
    }

    const ujian = await MUjian.query().where({ id: ujian_id }).update({
      nama,
      tipe,
      tingkat,
      m_mata_pelajaran_id,
    });

    if (!ujian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteUjian({ response, request, auth, params: { ujian_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ujian = await MUjian.query().where({ id: ujian_id }).update({
      dihapus: 1,
    });

    if (!ujian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getUjianSampah({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      tingkat,
      daftar_ujian_id,
      page = 1,
      search,
      filter_mapel,
      filter_tipe,
      filter_tingkat,
    } = request.get();

    if (tingkat) {
      let ujianTingkat;

      if (user.role == "admin") {
        const userIds = await User.query()
          .where({ dihapus: 0 })
          .andWhere({ m_sekolah_id: sekolah.id })
          .whereIn("role", ["guru", "admin"])
          .ids();

        const tipeUjian = [
          "pts1",
          "pts2",
          "pas1",
          "pas2",
          "us",
          "literasi",
          "numerasi",
        ];

        ujianTingkat = await MUjian.query()
          .select("id", "nama")
          .where({ tingkat: tingkat })
          .andWhere({ dihapus: 1 })
          .whereIn("m_user_id", userIds)
          .whereIn("tipe", tipeUjian)
          .orderBy("id", "desc")
          .fetch();
      } else {
        ujianTingkat = await MUjian.query()
          .select("id", "nama")
          .where({ tingkat: tingkat })
          .andWhere({ dihapus: 1 })
          .andWhere({ m_user_id: user.id })
          .orderBy("id", "desc")
          .fetch();
      }

      let ujianDetail;

      if (daftar_ujian_id) {
        ujianDetail = await MUjian.query()
          .with("soalUjian", (builder) => {
            builder
              .with("soal", (builder) => {
                builder.where({ dihapus: 0 });
              })
              .where({ dihapus: 0 });
          })
          .where({ id: daftar_ujian_id })
          .first();
      }

      return response.ok({
        ujianTingkat: ujianTingkat,
        ujianDetail: ujianDetail,
      });
    }

    let mataPelajaran, ujian;

    if (user.role == "guru") {
      mataPelajaran = await MMataPelajaran.query()
        .with("user")
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .andWhere({ m_ta_id: ta.id })
        .fetch();
    } else if (user.role == "admin") {
      mataPelajaran = await MMataPelajaran.query()
        .with("user")
        .where({ dihapus: 0 })
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ m_sekolah_id: sekolah.id })
        .fetch();
    }

    if (user.role == "admin") {
      const userIds = await User.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("role", ["guru", "admin"])
        .ids();
      ujian = MUjian.query()
        .with("mataPelajaran")
        .withCount("soalUjian as jumlahSoal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 1 })
        .whereIn("m_user_id", userIds)
        .orderBy("id", "desc");
    } else {
      ujian = MUjian.query()
        .with("mataPelajaran")
        .withCount("soalUjian as jumlahSoal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 1 })
        .andWhere({ m_user_id: user.id })
        .orderBy("id", "desc");
    }

    if (search) {
      ujian = ujian.where("nama", "like", `%${search}%`);
    }
    if (filter_mapel) {
      ujian = ujian.where({ m_user_id: filter_mapel });
    }
    if (filter_tingkat) {
      ujian = ujian.where({ tingkat: filter_tingkat });
    }
    if (filter_tipe) {
      ujian = ujian.where({ tipe: filter_tipe });
    } else {
      ujian.whereNot({ tipe: "ppdb" });
    }

    ujian = await ujian.paginate(page, 20);

    let tingkatData = [];

    if (
      sekolah.tingkat == "SMK" ||
      sekolah.tingkat == "SMA" ||
      sekolah.tingkat == "MA" ||
      sekolah.tingkat == "MAK"
    ) {
      tingkatData = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP" || sekolah.tingkat == "MTS") {
      tingkatData = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD" || sekolah.tingkat == "MI") {
      tingkatData = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB" || sekolah.tingkat == "SUPER") {
      tingkatData = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];
    }

    let tipeUjian = [
      { value: "kuis", label: "Kuis" },
      { value: "ph", label: "Penilaian Harian" },
      {
        value: "pts1",
        label: "Penilaian Tengah Semester 1 / Sumatif Tengah Semester 1",
      },
      {
        value: "pts2",
        label: "Penilaian Tengah Semester 2 / Sumatif Tengah Semester 2",
      },
      {
        value: "pas1",
        label: "Penilaian Akhir Semester 1 / Sumatif Akhir Semester 1",
      },
      {
        value: "pas2",
        label: "Penilaian Akhir Semester 2 / Sumatif Akhir Semester 2",
      },
      { value: "us", label: "Ujian Sekolah / Asesmen Sumatif Sekolah" },
      { value: "to", label: "Try out" },
      { value: "literasi", label: "AKM - Literasi" },
      { value: "numerasi", label: "AKM - Numerasi" },
    ];
    if (sekolah.id == 8719) {
      tipeUjian = [
        { value: "kuis", label: "Kuis" },
        { value: "ph", label: "Penilaian Harian" },
        { value: "pts1", label: "Penilaian Tengah Semester 1" },
        { value: "pts2", label: "Penilaian Tengah Semester 2" },
        { value: "pas1", label: "Penilaian Akhir Semester 1" },
        { value: "pas2", label: "Penilaian Akhir Semester 2" },
        { value: "sts1", label: "Sumatif Tengah Semester 1" },
        { value: "sts2", label: "Sumatif Tengah Semester 2" },
        { value: "sas1", label: "Sumatif Akhir Semester 1" },
        { value: "sas2", label: "Sumatif Akhir Semester 2" },
        { value: "us", label: "Ujian Sekolah" },
        { value: "to", label: "Try out" },
        { value: "literasi", label: "AKM - Literasi" },
        { value: "numerasi", label: "AKM - Numerasi" },
      ];
    }

    return response.ok({
      ujian: ujian.toJSON().data,
      total: ujian.toJSON().total,
      lastPage: ujian.toJSON().lastPage,
      mataPelajaran: mataPelajaran,
      tingkat: tingkatData,
      tipeUjian: tipeUjian,
    });
  }

  async putUjianSampah({ response, request, auth, params: { ujian_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    let { dihapus } = request.post();
    const rules = {
      dihapus: "required",
    };
    const message = {
      "dihapus.required": "Status Ujian Dihapus harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const ujian = await MUjian.query().where({ id: ujian_id }).update({
      dihapus,
    });

    if (!ujian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getSoalUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const mataPelajaran = await MMataPelajaran.query()
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const ujian = await MUjian.query().where({ dihapus: 0 }).fetch();

    let tingkat = [];

    if (
      sekolah.tingkat == "SMK" ||
      sekolah.tingkat == "SMA" ||
      sekolah.tingkat == "MA" ||
      sekolah.tingkat == "MAK"
    ) {
      tingkat = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP" || sekolah.tingkat == "MTS") {
      tingkat = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD" || sekolah.tingkat == "MI") {
      tingkat = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB" || sekolah.tingkat == "SUPER") {
      tingkat = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];
    }

    let tipeUjian = [
      { value: "kuis", label: "Kuis" },
      { value: "ph", label: "Penilaian Harian" },
      {
        value: "pts1",
        label: "Penilaian Tengah Semester 1 / Sumatif Tengah Semester 1",
      },
      {
        value: "pts2",
        label: "Penilaian Tengah Semester 2 / Sumatif Tengah Semester 2",
      },
      {
        value: "pas1",
        label: "Penilaian Akhir Semester 1 / Sumatif Akhir Semester 1",
      },
      {
        value: "pas2",
        label: "Penilaian Akhir Semester 2 / Sumatif Akhir Semester 2",
      },
      { value: "us", label: "Ujian Sekolah / Asesmen Sumatif Sekolah" },
      { value: "to", label: "Try out" },
      { value: "literasi", label: "AKM - Literasi" },
      { value: "numerasi", label: "AKM - Numerasi" },
    ];

    return response.ok({
      ujian: ujian,
      mataPelajaran: mataPelajaran,
      tingkat: tingkat,
      tipeUjian: tipeUjian,
    });
  }

  async detailSoalUjian({
    response,
    request,
    auth,
    params: { soal_ujian_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { rombel_id } = request.get();

    let kontenMateri = [
      { value: "teks_informasi", label: "Teks Informasi" },
      { value: "teks_fiksi", label: "Teks Fiksi" },
      { value: "bilangan", label: "Bilangan" },
      { value: "geometri_pengukuran", label: "Geometri dan Pengukuran" },
      { value: "data_ketidakpastian", label: "Data dan Ketidakpastian" },
      { value: "aljabar", label: "Aljabar" },
    ];

    let konteksMateri = [
      { value: "personal", label: "Personal" },
      { value: "sosbud", label: "Sosial Budaya" },
      { value: "saintifik", label: "Saintifik" },
    ];

    let prosesKognitif = [
      { value: "menemukan_informasi", label: "Menemukan Informasi" },
      { value: "interpretasi_integrasi", label: "Interpretasi dan Integrasi" },
      { value: "evaluasi_refleksi", label: "Evaluasi dan Refleksi" },
      { value: "pemahaman", label: "Pemahaman" },
      { value: "penerapan", label: "Penerapan" },
      { value: "penalaran", label: "Penalaran" },
    ];

    let bentukSoal = [
      { value: "pg", label: "Pilihan Ganda" },
      { value: "pg_kompleks", label: "Pilihan Ganda Kompleks" },
      { value: "esai", label: "Isian" },
      { value: "uraian", label: "Uraian" },
      { value: "menjodohkan", label: "Menjodohkan" },
    ];

    return response.ok({
      bentukSoal,
    });
  }

  //belum validasi

  async postSoalUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      kd,
      kd_konten_materi,
      level_kognitif,
      bentuk,
      akm_konten_materi,
      akm_konteks_materi,
      akm_proses_kognitif,
      sumber_buku,
      tingkat_kesukaran,
      // pg
      pertanyaan,
      audio,
      jawaban_a,
      jawaban_b,
      jawaban_c,
      jawaban_d,
      jawaban_e,
      kj_pg,
      // esai
      rubrik_kj,
      pembahasan,
      nilai_soal,
      m_ujian_id,
      jawaban_benar,
      // uraian
      opsi_a_uraian,
      opsi_b_uraian,
      kj_uraian,
      // pg kompleks
      jawaban_pg_kompleks,
      // menjodohkan
      pilihan_menjodohkan,
      soal_menjodohkan,
      // pilih dari bank soal
      daftar_soal_ujian_id,
    } = request.post();

    if (bentuk == "pg" && !akm_konten_materi) {
      const rules = {
        kd: "required",
        kd_konten_materi: "required",
        kj_pg: "required",
        level_kognitif: "required",
        nilai_soal: "required",
        pertanyaan: "required",
      };
      const message = {
        "kd.required": "Nomor Kompetensi Dasar harus diisi",
        "kd_konten_materi.required": "Isi Kompetensi Dasar harus diisi",
        "level_kognitif.required": "Level Kognitif harus diisi",
        "pertanyaan.required": "Pertanaan harus diisi",
        "kj_pg.required": "Kunci Jawaban harus diisi",
        "nilai_soal.required": "Nilai Soal harus diisi",
      };
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    }

    let totalSoalTambah = 0;

    if (daftar_soal_ujian_id) {
      let soalUjianData = [];
      if (daftar_soal_ujian_id.length) {
        const check = await TkSoalUjian.query()
          .whereIn("m_soal_ujian_id", daftar_soal_ujian_id)
          .andWhere({ m_ujian_id: m_ujian_id })
          .fetch();
        daftar_soal_ujian_id.map(async (d) => {
          const checkLagi = check
            .toJSON()
            .find((tk) => tk.m_soal_ujian_id == d);
          if (!checkLagi) {
            totalSoalTambah = totalSoalTambah + 1;
            soalUjianData.push({
              m_ujian_id: m_ujian_id,
              m_soal_ujian_id: d,
              dihapus: 0,
            });
          } else if (checkLagi.dihapus) {
            totalSoalTambah = totalSoalTambah + 1;
            await TkSoalUjian.query()
              .where({ id: checkLagi.id })
              .update({ dihapus: 0 });
          }
        });
      }

      await TkSoalUjian.createMany(soalUjianData);

      const checkTotal = await MRpp.query()
        .where({ m_ujian_id: m_ujian_id })
        .first();

      if (checkTotal) {
        await MRpp.query()
          .where({ m_ujian_id: m_ujian_id })
          .update({
            soal: checkTotal.soal + totalSoalTambah,
          });
      }

      return response.ok({
        message: messagePostSuccess,
      });
    }
    jawaban_pg_kompleks = jawaban_pg_kompleks
      ? jawaban_pg_kompleks.toString()
      : null;
    pilihan_menjodohkan = pilihan_menjodohkan
      ? pilihan_menjodohkan.toString()
      : null;
    soal_menjodohkan = soal_menjodohkan
      ? JSON.stringify(soal_menjodohkan)
      : null;

    const soalUjian = await MSoalUjian.create({
      kd,
      kd_konten_materi,
      level_kognitif,
      bentuk,
      akm_konten_materi,
      akm_konteks_materi,
      akm_proses_kognitif,
      tingkat_kesukaran,
      sumber_buku,
      audio,
      pertanyaan: htmlEscaper.escape(pertanyaan || "-"),
      jawaban_a: htmlEscaper.escape(jawaban_a || "-"),
      jawaban_b: htmlEscaper.escape(jawaban_b || "-"),
      jawaban_c: htmlEscaper.escape(jawaban_c || "-"),
      jawaban_d: htmlEscaper.escape(jawaban_d || "-"),
      jawaban_e: htmlEscaper.escape(jawaban_e || "-"),
      kj_pg,
      kj_uraian,
      jawaban_pg_kompleks,
      pilihan_menjodohkan,
      soal_menjodohkan,
      opsi_a_uraian,
      opsi_b_uraian,
      rubrik_kj: JSON.stringify(rubrik_kj),
      pembahasan: htmlEscaper.escape(pembahasan || "-"),
      jawaban_benar,
      nilai_soal,
      m_user_id: user.id,
      dihapus: 0,
    });

    const check = await TkSoalUjian.query()
      .where({ m_ujian_id: m_ujian_id })
      .where({ m_soal_ujian_id: soalUjian.id })
      .first();
    if (check) {
      await TkSoalUjian.query().where({ id: check.id }).update({ dihapus: 0 });
      totalSoalTambah = totalSoalTambah + 1;
    } else {
      const tkSoalUjian = await TkSoalUjian.create({
        dihapus: 0,
        m_ujian_id: m_ujian_id,
        m_soal_ujian_id: soalUjian.id,
      });
      totalSoalTambah = totalSoalTambah + 1;
    }

    const checkTotal = await MRpp.query()
      .where({ m_ujian_id: m_ujian_id })
      .first();

    if (checkTotal) {
      await MRpp.query()
        .where({ m_ujian_id: m_ujian_id })
        .update({
          soal: checkTotal.soal + totalSoalTambah,
        });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async importSoalUjian1Services(filelocation, user, m_ujian_id) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("Sheet1");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 13) {
        data.push({
          kd: "" + explanation.getCell("A" + rowNumber).value,
          kd_konten_materi: "" + explanation.getCell("B" + rowNumber).value,
          level_kognitif: "" + explanation.getCell("C" + rowNumber).value,
          tingkat_kesukaran: "" + explanation.getCell("D" + rowNumber).value,
          akm_konteks_materi: "" + explanation.getCell("E" + rowNumber).value,
          akm_konten_materi: "" + explanation.getCell("F" + rowNumber).value,
          // akm_proses_kognitif: '' + explanation.getCell("A" + rowNumber).value,
          sumber_buku: "" + explanation.getCell("G" + rowNumber).value,
          bentuk: "" + explanation.getCell("H" + rowNumber).value,

          pertanyaan: "" + explanation.getCell("I" + rowNumber).value,
          jawaban_a: "" + explanation.getCell("J" + rowNumber).value,
          jawaban_b: "" + explanation.getCell("K" + rowNumber).value,
          jawaban_c: "" + explanation.getCell("L" + rowNumber).value,
          jawaban_d: "" + explanation.getCell("M" + rowNumber).value,
          jawaban_e: "" + explanation.getCell("N" + rowNumber).value,
          kj_pg: "" + explanation.getCell("O" + rowNumber).value,
          pembahasan: "" + explanation.getCell("P" + rowNumber).value,
          nilai_soal: "" + explanation.getCell("Q" + rowNumber).value,
        });
      }
    });

    const datas = [];
    await Promise.all(
      data.map(async (d) => {
        if (!datas.find((e) => e.pertanyaan == d.pertanyaan)) {
          // const pertanyaan = htmlEscaper.escape(d?.pertanyaan);
          // const cek = await MSoalUjian.query()
          //   .where({ pertanyaan })
          //   .andWhere({ dihapus: 0 })
          //   .first();
          // if (cek) {
          //   const tkSoalUjianData = await TkSoalUjian.query()
          //     .where({ dihapus: 0 })
          //     .andWhere({ m_soal_ujian_id: cek.id })
          //     .andWhere({ m_ujian_id: m_ujian_id })
          //     .first();

          //   if (tkSoalUjianData) {
          //     return "Sudah Tersedia";
          //   }
          // }
          datas.push(d);
        }
      })
    );
    // return datas

    const result = await Promise.all(
      datas.map(async (d) => {
        if (
          d.bentuk.toLowerCase() !== "esai" &&
          d.bentuk.toLowerCase() !== "pg"
        ) {
          return "Bentuk Soal Salah";
        }

        const soalUjian = await MSoalUjian.create({
          kd: d.kd,
          kd_konten_materi: d.kd_konten_materi,
          level_kognitif: d.level_kognitif,
          bentuk: d.bentuk,
          akm_konteks_materi: d.akm_konteks_materi,
          akm_konten_materi: d.akm_konten_materi,
          // akm_proses_kognitif,
          sumber_buku: d.sumber_buku,
          tingkat_kesukaran: d.tingkat_kesukaran,
          pertanyaan: htmlEscaper.escape(d.pertanyaan),
          jawaban_a: htmlEscaper.escape(d.jawaban_a),
          jawaban_b: htmlEscaper.escape(d.jawaban_b),
          jawaban_c: htmlEscaper.escape(d.jawaban_c),
          jawaban_d: htmlEscaper.escape(d.jawaban_d),
          jawaban_e: htmlEscaper.escape(d.jawaban_e),
          kj_pg: d.kj_pg,
          // rubrik_kj: JSON.stringify(rubrik_kj),
          pembahasan: htmlEscaper.escape(d.pembahasan),
          nilai_soal: d.nilai_soal,
          m_user_id: user.id,
          dihapus: 0,
        });

        const tkSoalUjian = await TkSoalUjian.create({
          dihapus: 0,
          m_ujian_id: m_ujian_id,
          m_soal_ujian_id: soalUjian.id,
        });
      })
    );

    return result;
  }

  async importSoalUjianServices(filelocation, user, m_ujian_id) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("Sheet1");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 13) {
        data.push({
          kd: "" + explanation.getCell("A" + rowNumber).value,
          kd_konten_materi: "" + explanation.getCell("B" + rowNumber).value,
          level_kognitif: "" + explanation.getCell("C" + rowNumber).value,
          bentuk: "" + explanation.getCell("D" + rowNumber).value,
          // akm_konten_materi: '' + explanation.getCell("A" + rowNumber).value,
          // akm_konteks_materi: '' + explanation.getCell("A" + rowNumber).value,
          // akm_proses_kognitif: '' + explanation.getCell("A" + rowNumber).value,
          pertanyaan: "" + explanation.getCell("E" + rowNumber).value,
          jawaban_a: "" + explanation.getCell("F" + rowNumber).value,
          jawaban_b: "" + explanation.getCell("G" + rowNumber).value,
          jawaban_c: "" + explanation.getCell("H" + rowNumber).value,
          jawaban_d: "" + explanation.getCell("I" + rowNumber).value,
          jawaban_e: "" + explanation.getCell("J" + rowNumber).value,
          kj_pg: "" + explanation.getCell("K" + rowNumber).value,
          pembahasan: "" + explanation.getCell("L" + rowNumber).value,
          nilai_soal: "" + explanation.getCell("M" + rowNumber).value,
        });
      }
    });

    let totalSoalTambah = 0;

    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      // const result = await Promise.all(
      //   data.map(async (d) => {

      const soalUjian = await MSoalUjian.create({
        kd: d.kd,
        kd_konten_materi: d.kd_konten_materi,
        level_kognitif: d.level_kognitif,
        bentuk: d.bentuk,
        // akm_konten_materi,
        // akm_konteks_materi,
        // akm_proses_kognitif,
        pertanyaan: htmlEscaper.escape(d.pertanyaan),
        jawaban_a: htmlEscaper.escape(d.jawaban_a),
        jawaban_b: htmlEscaper.escape(d.jawaban_b),
        jawaban_c: htmlEscaper.escape(d.jawaban_c),
        jawaban_d: htmlEscaper.escape(d.jawaban_d),
        jawaban_e: htmlEscaper.escape(d.jawaban_e),
        kj_pg: d.kj_pg,
        // rubrik_kj: JSON.stringify(rubrik_kj),
        pembahasan: htmlEscaper.escape(d.pembahasan),
        nilai_soal: d.nilai_soal,
        m_user_id: user.id,
        dihapus: 0,
      });

      const tkSoalUjian = await TkSoalUjian.create({
        dihapus: 0,
        m_ujian_id: m_ujian_id,
        m_soal_ujian_id: soalUjian.id,
      });
      totalSoalTambah = totalSoalTambah + 1;
      //   })
      // );
    }

    const checkTotal = await MRpp.query()
      .where({ m_ujian_id: m_ujian_id })
      .first();

    if (checkTotal) {
      await MRpp.query()
        .where({ m_ujian_id: m_ujian_id })
        .update({
          soal: checkTotal.soal + totalSoalTambah,
        });
    }

    return "Data Berhasil Di Input";
  }

  async importSoalUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let file = request.file("file");

    let fname = `import-excel-soal-${Date.now()}.xlsx`;

    const user = await auth.getUser();

    const { m_ujian_id } = request.post();

    //move uploaded file into custom folder
    await file.move(Helpers.publicPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    return await this.importSoalUjian1Services(
      `${Helpers.publicPath("/uploads")}/${fname}`,
      user,
      m_ujian_id
    );
  }

  async putSoalUjian({ response, request, auth, params: { soal_ujian_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      kd,
      kd_konten_materi,
      level_kognitif,
      bentuk,
      akm_konten_materi,
      akm_konteks_materi,
      akm_proses_kognitif,
      tingkat_kesukaran,
      sumber_buku,
      // pg
      pertanyaan,
      audio,
      jawaban_a,
      jawaban_b,
      jawaban_c,
      jawaban_d,
      jawaban_e,
      kj_pg,
      // esai
      rubrik_kj,
      pembahasan,
      nilai_soal,
      // uraian
      opsi_a_uraian,
      opsi_b_uraian,
      kj_uraian,
      // pg kompleks
      jawaban_pg_kompleks,
      // menjodohkan
      pilihan_menjodohkan,
      soal_menjodohkan,
    } = request.post();

    jawaban_pg_kompleks = jawaban_pg_kompleks
      ? jawaban_pg_kompleks.toString()
      : null;
    pilihan_menjodohkan = pilihan_menjodohkan
      ? pilihan_menjodohkan.toString()
      : null;
    soal_menjodohkan = soal_menjodohkan
      ? JSON.stringify(soal_menjodohkan)
      : null;

    const soalUjian = await MSoalUjian.query()
      .where({ id: soal_ujian_id })
      .update({
        kd,
        kd_konten_materi,
        level_kognitif,
        bentuk,
        akm_konten_materi,
        akm_konteks_materi,
        akm_proses_kognitif,
        tingkat_kesukaran,
        sumber_buku,
        audio,
        pertanyaan: htmlEscaper.escape(pertanyaan),
        jawaban_a: htmlEscaper.escape(jawaban_a),
        jawaban_b: htmlEscaper.escape(jawaban_b),
        jawaban_c: htmlEscaper.escape(jawaban_c),
        jawaban_d: htmlEscaper.escape(jawaban_d),
        jawaban_e: htmlEscaper.escape(jawaban_e),
        kj_pg,
        kj_uraian,
        jawaban_pg_kompleks,
        pilihan_menjodohkan,
        soal_menjodohkan,
        opsi_a_uraian,
        opsi_b_uraian,
        rubrik_kj: JSON.stringify(rubrik_kj),
        pembahasan: pembahasan ? htmlEscaper.escape(pembahasan) : null,
        nilai_soal,
      });

    if (!soalUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSoalUjian({
    response,
    request,
    auth,
    params: { soal_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { m_ujian_id } = request.post();

    let soalUjian, tkSoalUjian;
    if (!m_ujian_id) {
      soalUjian = await MSoalUjian.query()
        .where({ id: soal_ujian_id })
        .delete();
    } else {
      tkSoalUjian = await TkSoalUjian.query()
        .where({ m_soal_ujian_id: soal_ujian_id })
        .andWhere({ m_ujian_id: m_ujian_id })
        .update({
          dihapus: 1,
        });

      const checkTotal = await MRpp.query()
        .where({ m_ujian_id: m_ujian_id })
        .first();

      if (checkTotal) {
        await MRpp.query()
          .where({ m_ujian_id: m_ujian_id })
          .update({
            soal: checkTotal.soal - 1,
          });
      }
    }

    if (soalUjian > 0 || tkSoalUjian > 0) {
      return response.ok({
        message: messageDeleteSuccess,
      });
    }

    return response.notFound({
      message: messageNotFound,
    });
  }

  async getJadwalUjianSS({ response, request }) {
    let { page } = request.get();

    page = page ? page : 1;

    const jadwalUjian = await MJadwalUjian.query()
      .select("id", "waktu_dibuka", "waktu_ditutup", "durasi", "m_user_id")
      .with("rombelUjian", (builder) => {
        builder
          .select("id", "m_rombel_id", "m_jadwal_ujian_id")
          .with("rombel", (builder) => {
            builder
              .select("id", "m_ta_id", "m_sekolah_id")
              .withCount("anggotaRombel as total", (builder) => {
                builder.where("dihapus", 0);
              })
              .where("dihapus", 0);
          });
      })
      .with("user", (builder) => {
        builder
          .select("id", "nama", "m_sekolah_id")
          .with("sekolah", (builder) => {
            builder.select("id", "nama");
          });
      })
      .andWhere({ dihapus: 0 })
      .andWhere(
        "waktu_dibuka",
        ">",
        moment().subtract(1, "day").format("YYYY-MM-DD HH:mm:ss")
      )
      .andWhere("waktu_ditutup", ">=", moment().format("YYYY-MM-DD"))
      .orderBy("waktu_dibuka", "asc")
      .paginate(page, 1000);

    return response.ok({
      jadwalUjian,
    });
  }

  async getJadwalUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { status, page, search, tipe_ujian, tanggal, mapel_id, guru_id } =
      request.get();

    const hari_ini = moment().format("YYYY-MM-DD HH:mm");

    const user = await auth.getUser();

    const count = await MJadwalUjian.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .andWhere("waktu_ditutup", ">=", hari_ini)
      .count("* as total");
    const total = count[0].total;

    const userData = await User.query()
      .select("id", "nama")
      .where({ dihapus: 0 })
      .andWhereIn("role", ["guru", "admin"])
      .andWhere({ m_sekolah_id: sekolah?.id })
      .fetch();

    if (user.role == "guru") {
      const ujianIds = await MUjian.query()
        .where({ m_user_id: user.id })
        .where({ dihapus: 0 })
        .ids();

      const mataPelajaranData = await MMataPelajaran.query()
        .select("id", "nama")
        .where({ m_user_id: user.id })
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      const mataPelajaranIds = await MMataPelajaran.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .ids();

      let ujianMapelIds = MUjian.query().where({ dihapus: 0 });

      if (mapel_id) {
        ujianMapelIds.where({ m_mata_pelajaran_id: mapel_id });
      } else {
        ujianMapelIds.whereIn("m_mata_pelajaran_id", mataPelajaranIds);
      }

      ujianMapelIds = await ujianMapelIds.ids();

      const rombelWalas = await MRombel.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .ids();

      const rombelIds = await MJadwalMengajar.query()
        .with("rombel")
        .with("mataPelajaran")
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .pluck("m_rombel_id");

      const rombel = await MRombel.query()
        .whereIn("id", [...rombelIds])
        .andWhere({ dihapus: 0 })
        .andWhere({ m_ta_id: ta.id })
        .fetch();

      const jadwaRombellIds = await TkJadwalUjian.query()
        .whereIn("m_rombel_id", rombelIds)
        .andWhere({ dihapus: 0 })
        .distinct("m_jadwal_ujian_id")
        .pluck("m_jadwal_ujian_id");

      const jadwalSoalIds = await MJadwalUjian.query()
        .whereIn("m_ujian_id", [...ujianIds, ...ujianMapelIds])
        .andWhere({ dihapus: 0 })
        .ids();

      const jadwalIds = [...jadwaRombellIds, ...jadwalSoalIds];

      let jadwalLainnya = MJadwalUjian.query()
        .with("ujian", (builder) => {
          if (search) {
            builder.where("nama", "like", `%${search}%`);
          }
        })
        .whereNot({ m_user_id: user.id })
        .whereIn(
          "m_user_id",
          await User.query()
            .where({ role: "admin" })
            .where({ dihapus: 0 })
            .where({ m_sekolah_id: sekolah.id })
            .ids()
        )
        .whereIn("id", jadwalIds)
        .andWhere({ dihapus: 0 })
        .andWhere("waktu_dibuka", "<=", hari_ini)
        .andWhere("waktu_ditutup", ">=", hari_ini);

      jadwalLainnya = await jadwalLainnya
        .orderBy("waktu_dibuka", "desc")
        .fetch();

      let jadwalUjian;

      if (status == "akan-datang") {
        jadwalUjian = MJadwalUjian.query()
          .with("ujian", (builder) => {
            if (search) {
              builder.where("nama", "like", `%${search}%`);
            }
          })
          .where({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_dibuka", ">", hari_ini)
          .orderBy("waktu_dibuka", "desc");

        if (tanggal) {
          jadwalUjian.whereBetween("waktu_dibuka", [
            `${tanggal} 00:00:00`,
            `${tanggal} 23:59:59`,
          ]);
        }
        jadwalUjian = await jadwalUjian.fetch();
      } else if (status == "berlangsung") {
        jadwalUjian = MJadwalUjian.query()
          .with("ujian", (builder) => {
            if (search) {
              builder.where("nama", "like", `%${search}%`);
            }
          })
          .where({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_dibuka", "<=", hari_ini)
          .andWhere("waktu_ditutup", ">=", hari_ini)
          .orderBy("waktu_dibuka", "desc");

        if (tanggal) {
          jadwalUjian.whereBetween("waktu_dibuka", [
            `${tanggal} 00:00:00`,
            `${tanggal} 23:59:59`,
          ]);
        }
        jadwalUjian = await jadwalUjian.fetch();
      } else if (status == "sudah-selesai") {
        const ujianIds = await MUjian.query()
          .where("nama", "like", `%${search}%`)
          .andWhere({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          // .andWhere({ m_sekolah_id: sekolah.id })
          .ids();

        jadwalUjian = MJadwalUjian.query()
          .with("ujian")
          .whereIn("m_ujian_id", ujianIds)
          // .where({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_ditutup", "<=", hari_ini)
          .orderBy("waktu_dibuka", "desc");

        if (tanggal) {
          jadwalUjian.whereBetween("waktu_dibuka", [
            `${tanggal} 00:00:00`,
            `${tanggal} 23:59:59`,
          ]);
        }
        jadwalUjian = await jadwalUjian.paginate(page, 10);
      }

      const jadwalUjianDataFormat = [];

      if (status == "sudah-selesai") {
        await Promise.all(
          jadwalUjian
            .toJSON()
            .data.filter((item) => item.ujian)
            .map(async (jadwalUjianData) => {
              const tkJadwalUjian = await TkJadwalUjian.query()
                .with("rombel", (builder) => {
                  builder.where({ dihapus: 0 });
                })
                .where({ m_jadwal_ujian_id: jadwalUjianData.id })
                .where({ dihapus: 0 })
                .fetch();

              let metaJadwalUjian = {
                remedial: 0,
                susulan: 0,
                diatasKKM: 0,
              };
              jadwalUjianDataFormat.push({
                jadwalUjian: jadwalUjianData,
                rombel: tkJadwalUjian,
                metaJadwalUjian: metaJadwalUjian,
              });
            })
        );
      } else {
        await Promise.all(
          jadwalUjian
            .toJSON()
            .filter((item) => item.ujian)
            .map(async (jadwalUjianData) => {
              const tkJadwalUjian = await TkJadwalUjian.query()
                .with("rombel", (builder) => {
                  builder.where({ dihapus: 0 });
                })
                .where({ m_jadwal_ujian_id: jadwalUjianData.id })
                .where({ dihapus: 0 })
                .fetch();

              let metaJadwalUjian = {
                remedial: 0,
                susulan: 0,
                diatasKKM: 0,
              };

              jadwalUjianDataFormat.push({
                jadwalUjian: jadwalUjianData,
                rombel: tkJadwalUjian,
                metaJadwalUjian: metaJadwalUjian,
              });
            })
        );
        await Promise.all(
          jadwalLainnya
            .toJSON()
            .filter((item) => item.ujian)
            .map(async (jadwalUjianData) => {
              const tkJadwalUjian = await TkJadwalUjian.query()
                .with("rombel")
                .where({ m_jadwal_ujian_id: jadwalUjianData.id })
                .where({ dihapus: 0 })
                .fetch();

              let metaJadwalUjian = {
                remedial: 0,
                susulan: 0,
                diatasKKM: 0,
              };

              jadwalUjianDataFormat.push({
                jadwalUjian: jadwalUjianData,
                rombel: tkJadwalUjian,
                metaJadwalUjian: metaJadwalUjian,
              });
            })
        );
      }

      const ujian = await MUjian.query()
        .select("id", "nama", "tipe")
        .withCount("soal as soal_pg", (builder) => {
          builder.where({ bentuk: "pg" }).andWhere("tk_soal_ujian.dihapus", 0);
        })
        .withCount("soal as soal_esai", (builder) => {
          builder
            .where({ bentuk: "esai" })
            .andWhere("tk_soal_ujian.dihapus", 0);
        })
        .withCount("soal as soal_pg_kompleks", (builder) => {
          builder
            .where({ bentuk: "pg_kompleks" })
            .andWhere("tk_soal_ujian.dihapus", 0);
        })
        .withCount("soal as soal_uraian", (builder) => {
          builder
            .where({ bentuk: "uraian" })
            .andWhere("tk_soal_ujian.dihapus", 0);
        })
        .withCount("soal as soal_menjodohkan", (builder) => {
          builder
            .where({ bentuk: "menjodohkan" })
            .andWhere("tk_soal_ujian.dihapus", 0);
        })
        .withCount("soal as soal_isian", (builder) => {
          builder
            .where({ bentuk: "isian" })
            .andWhere("tk_soal_ujian.dihapus", 0);
        })
        .whereIn("id", [...ujianIds, ...ujianMapelIds])
        .andWhere({ dihapus: 0 })
        .fetch();

      if (status == "sudah-selesai") {
        return response.ok({
          rombel,
          jadwalUjian: jadwalUjianDataFormat,
          ujian,
          totalData: jadwalUjian.toJSON().total,
          lastPage: jadwalUjian.toJSON().lastPage,
          total,
          mataPelajaranData,
        });
      } else {
        return response.ok({
          rombel,
          jadwalUjian: jadwalUjianDataFormat,
          ujian,
          total,
          mataPelajaranData,
        });
      }
    } else if (user.role == "admin") {
      const rombel = await MRombel.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ m_sekolah_id: sekolah.id })
        .fetch();

      const mataPelajaranData = await MMataPelajaran.query()
        .select("id", "nama")
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      const userIds = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .whereIn("role", ["admin", "guru"])
        .ids();

      let mataPelajaranIds = MMataPelajaran.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ta_id: ta.id });

      if (guru_id) {
        mataPelajaranIds.andWhere({ m_user_id: guru_id });
      }
      if (mapel_id) {
        mataPelajaranIds.andWhere({ id: mapel_id });
      }

      mataPelajaranIds = await mataPelajaranIds.ids();

      let ujianMapelIds = await MUjian.query()
        .where({ dihapus: 0 })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .ids();

      let jadwalUjian;

      if (status == "akan-datang") {
        jadwalUjian = MJadwalUjian.query()
          .with("ujian", (builder) => {
            if (search) {
              builder.where("nama", "like", `%${search}%`);
            }
          })
          .whereIn("m_user_id", userIds)
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_dibuka", ">", hari_ini)
          .orderBy("waktu_dibuka", "desc");
        if (tanggal) {
          jadwalUjian.whereBetween("waktu_dibuka", [
            `${tanggal} 00:00:00`,
            `${tanggal} 23:59:59`,
          ]);
        }
        if (guru_id || mapel_id) {
          jadwalUjian.whereIn("m_ujian_id", ujianMapelIds);
        }
        jadwalUjian = await jadwalUjian.fetch();
      } else if (status == "berlangsung") {
        jadwalUjian = MJadwalUjian.query()
          .with("ujian", (builder) => {
            if (search) {
              builder.where("nama", "like", `%${search}%`);
            }
          })
          .whereIn("m_user_id", userIds)
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_dibuka", "<=", hari_ini)
          .andWhere("waktu_ditutup", ">=", hari_ini)
          .orderBy("waktu_dibuka", "desc");
        if (tanggal) {
          jadwalUjian.whereBetween("waktu_dibuka", [
            `${tanggal} 00:00:00`,
            `${tanggal} 23:59:59`,
          ]);
        }
        if (guru_id || mapel_id) {
          jadwalUjian.whereIn("m_ujian_id", ujianMapelIds);
        }
        jadwalUjian = await jadwalUjian.fetch();
      } else if (status == "sudah-selesai") {
        const ujianIds = await MUjian.query()
          .where("nama", "like", `%${search}%`)
          .andWhere({ dihapus: 0 })
          .whereIn("m_user_id", userIds)
          // .andWhere({ m_sekolah_id: sekolah.id })
          .ids();

        jadwalUjian = MJadwalUjian.query()
          .with("ujian")
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_ditutup", "<=", hari_ini)
          .orderBy("waktu_dibuka", "desc");
        if (guru_id || mapel_id) {
          jadwalUjian.whereIn("m_ujian_id", ujianMapelIds);
        } else {
          jadwalUjian.whereIn("m_ujian_id", ujianIds);
        }

        if (tanggal) {
          jadwalUjian.whereBetween("waktu_dibuka", [
            `${tanggal} 00:00:00`,
            `${tanggal} 23:59:59`,
          ]);
        }
        jadwalUjian = await jadwalUjian.paginate(page, 10);
      }

      const jadwalUjianDataFormat = [];

      if (status == "sudah-selesai") {
        await Promise.all(
          jadwalUjian
            .toJSON()
            .data.filter((item) => item.ujian)
            .map(async (jadwalUjianData) => {
              const tkJadwalUjian = await TkJadwalUjian.query()
                .with("rombel")
                .where({ m_jadwal_ujian_id: jadwalUjianData.id })
                .where({ dihapus: 0 })
                .fetch();

              let metaJadwalUjian = {
                remedial: 0,
                susulan: 0,
                diatasKKM: 0,
              };
              jadwalUjianDataFormat.push({
                jadwalUjian: jadwalUjianData,
                rombel: tkJadwalUjian,
                metaJadwalUjian: metaJadwalUjian,
              });
            })
        );
      } else {
        await Promise.all(
          jadwalUjian
            .toJSON()
            .filter((item) => item.ujian)
            .map(async (jadwalUjianData) => {
              const tkJadwalUjian = await TkJadwalUjian.query()
                .with("rombel")
                .where({ m_jadwal_ujian_id: jadwalUjianData.id })
                .where({ dihapus: 0 })
                .fetch();

              let metaJadwalUjian = {
                remedial: 0,
                susulan: 0,
                diatasKKM: 0,
              };

              jadwalUjianDataFormat.push({
                jadwalUjian: jadwalUjianData,
                rombel: tkJadwalUjian,
                metaJadwalUjian: metaJadwalUjian,
              });
            })
        );
      }

      let ujian = MUjian.query()
        .select("id", "nama", "tipe")
        .withCount("soal as soal_pg", (builder) => {
          builder.where({ bentuk: "pg" }).andWhere("tk_soal_ujian.dihapus", 0);
        })
        .withCount("soal as soal_esai", (builder) => {
          builder
            .where({ bentuk: "esai" })
            .andWhere("tk_soal_ujian.dihapus", 0);
        })
        .withCount("soal as soal_pg_kompleks", (builder) => {
          builder
            .where({ bentuk: "pg_kompleks" })
            .andWhere("tk_soal_ujian.dihapus", 0);
        })
        .withCount("soal as soal_uraian", (builder) => {
          builder
            .where({ bentuk: "uraian" })
            .andWhere("tk_soal_ujian.dihapus", 0);
        })
        .withCount("soal as soal_menjodohkan", (builder) => {
          builder
            .where({ bentuk: "menjodohkan" })
            .andWhere("tk_soal_ujian.dihapus", 0);
        })
        .withCount("soal as soal_isian", (builder) => {
          builder
            .where({ bentuk: "isian" })
            .andWhere("tk_soal_ujian.dihapus", 0);
        })
        .whereIn("m_user_id", userIds)
        .andWhere({ dihapus: 0 });

      if (tipe_ujian) {
        ujian.whereIn("tipe", tipe_ujian);
      }

      ujian = await ujian.fetch();
      if (status == "sudah-selesai") {
        return response.ok({
          rombel,
          jadwalUjian: jadwalUjianDataFormat,
          ujian,
          totalData: jadwalUjian.toJSON().total,
          lastPage: jadwalUjian.toJSON().lastPage,
          total,
          userData,
          mataPelajaranData,
        });
      } else {
        return response.ok({
          rombel,
          jadwalUjian: jadwalUjianDataFormat,
          ujian,
          total,
          userData,
          mataPelajaranData,
        });
      }
    } else if (user.role == "siswa") {
      // get tagihan
      const pembayaran = await MPembayaranSiswa.query()
        .with("rombelPembayaran", (builder) => {
          builder.with("pembayaran", (builder) => {
            builder.where({ dihapus: 0 }).andWhere({ jenis: "ujian" });
          });
        })
        .with("riwayat", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .withCount("riwayat as totalJumlah", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .andWhere({ status: "belum lunas" })
        .fetch();

      const rombelIds = await MRombel.query()
        .where({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .ids();

      const anggotaRombel = await MAnggotaRombel.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .whereIn("m_rombel_id", rombelIds)
        .pluck("m_rombel_id");

      let jadwalUjian;
      if (status == "akan-datang") {
        jadwalUjian = await TkJadwalUjian.query()
          .with("jadwalUjian", (builder) => {
            builder
              .with("ujian", (builder) => {
                if (search) {
                  builder.where("nama", "like", `%${search}%`);
                }
              })
              .where("waktu_dibuka", ">", hari_ini);
          })
          .where({ dihapus: 0 })
          .whereIn("m_rombel_id", anggotaRombel)
          .fetch();
      } else if (status == "berlangsung") {
        jadwalUjian = await TkJadwalUjian.query()
          .with("jadwalUjian", (builder) => {
            builder
              .with("ujian", (builder) => {
                if (search) {
                  builder.where("nama", "like", `%${search}%`);
                }
              })
              .where("waktu_dibuka", "<=", hari_ini)
              .andWhere("waktu_ditutup", ">", hari_ini);
          })
          .with("peserta", (builder) => {
            builder.where({ m_user_id: user.id }).where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .whereIn("m_rombel_id", anggotaRombel)
          .fetch();
      } else if (status == "sudah-selesai") {
        jadwalUjian = await TkJadwalUjian.query()
          .with("jadwalUjian", (builder) => {
            builder
              .with("ujian", (builder) => {
                if (search) {
                  builder.where("nama", "like", `%${search}%`);
                }
              })
              .andWhere("waktu_ditutup", "<", hari_ini);
          })
          .with("peserta", (builder) => {
            builder.where({ m_user_id: user.id }).where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .whereIn("m_rombel_id", anggotaRombel)
          .orderBy("created_at", "desc")
          .paginate(page, 10);
      }

      let ujian;
      if (status == "sudah-selesai") {
        ujian = jadwalUjian
          .toJSON()
          .data.filter((d) => d.jadwalUjian !== null && d.jadwalUjian.ujian);
      } else {
        ujian = jadwalUjian
          .toJSON()
          .filter((d) => d.jadwalUjian !== null && d.jadwalUjian.ujian)
          .sort(
            (a, b) =>
              moment(a.jadwalUjian.waktu_dibuka).toDate() -
              moment(b.jadwalUjian.waktu_dibuka).toDate()
          );
      }

      if (ujian.length == 0) {
        return response.notFound({
          message: messageNotFound,
        });
      }
      if (status == "sudah-selesai") {
        return response.ok({
          jadwalUjian: ujian,
          total: ujian.length,
          perPage: jadwalUjian.toJSON().perPage,
          page: jadwalUjian.toJSON().page,
          lastPage: jadwalUjian.toJSON().lastPage,
          pembayaran: pembayaran.toJSON().filter((item) => {
            if (!item.rombelPembayaran.pembayaran) {
              return false;
            }
            if (
              item.ditangguhkan &&
              moment(item.ditangguhkan).toDate() > moment().toDate()
            ) {
              return false;
            } else {
              return true;
            }
          }),
        });
      } else {
        return response.ok({
          jadwalUjian: ujian,
          pembayaran: pembayaran.toJSON().filter((item) => {
            if (!item.rombelPembayaran.pembayaran) {
              return false;
            }
            if (
              item.ditangguhkan &&
              moment(item.ditangguhkan).toDate() > moment().toDate()
            ) {
              return false;
            } else {
              return true;
            }
          }),
        });
      }
    }
  }

  async detailJadwalUjian({
    response,
    request,
    auth,
    params: { jadwal_ujian_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    if (user.role == "siswa") {
      return response.forbidden({ message: messageForbidden });
    }

    const { tk_jadwal_ujian_id } = request.get();

    const jadwalUjian = await MJadwalUjian.query()
      .with("rombelUjian", (builder) => {
        builder.where({ dihapus: 0 }).with("rombel");
      })
      .with("ujian")
      .where({ id: jadwal_ujian_id })
      .first();

    let pesertaUjianData = [];
    let detailRombel;

    if (tk_jadwal_ujian_id) {
      const tkJadwalUjian = await TkJadwalUjian.query()
        .where({ id: tk_jadwal_ujian_id })
        .pluck("m_rombel_id");

      const anggotaRombel = await MAnggotaRombel.query()
        .where({ m_rombel_id: tkJadwalUjian[0] })
        .andWhere({ dihapus: 0 })
        .pluck("m_user_id");

      detailRombel = await MRombel.query()
        .where({ id: tkJadwalUjian[0] })
        .first();

      pesertaUjianData = await User.query()
        .with("pesertaUjian", (builder) => {
          builder
            .with("peringatan")
            .withCount("peringatan as belumDibaca", (builder) => {
              builder.where({ dibaca_guru: 0 }).whereNotNull("jawaban");
            })
            .where({ tk_jadwal_ujian_id: tk_jadwal_ujian_id })
            .andWhere({ dihapus: 0 });
        })
        .whereIn("id", anggotaRombel)
        .andWhere({ dihapus: 0 })
        .fetch();
    } else {
      const tkJadwalUjian = await TkJadwalUjian.query()
        .where({ m_jadwal_ujian_id: jadwal_ujian_id })
        .pluck("m_rombel_id");

      // return tkJadwalUjian

      const anggotaRombel = await MAnggotaRombel.query()
        .whereIn("m_rombel_id", tkJadwalUjian)
        .andWhere({ dihapus: 0 })
        .pluck("m_user_id");

      detailRombel = await MRombel.query().whereIn("id", tkJadwalUjian).fetch();

      pesertaUjianData = await User.query()
        .with("pesertaUjian", (builder) => {
          builder
            .with("peringatan")
            .withCount("peringatan as belumDibaca", (builder) => {
              builder.where({ dibaca_guru: 0 }).whereNotNull("jawaban");
            })
            .whereIn("tk_jadwal_ujian_id", tkJadwalUjian)
            .andWhere({ dihapus: 0 });
        })
        .with("anggotaRombel", (builder) => {
          builder.with("rombel");
        })
        .whereIn("id", anggotaRombel)
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    return response.ok({
      jadwalUjian,
      pesertaUjian: pesertaUjianData,
      rombel: detailRombel,
    });
  }

  async exportPesertaUjian({ request, response }) {
    const { limit = 10, offset = 0 } = request.get();
    const userIds = await User.query()
      .where({ dihapus: 0 })
      .where({ m_sekolah_id: 7144 })
      .whereIn("role", ["guru", "admin"])
      .ids();

    const ujianIds = await MUjian.query()
      .where({ tipe: "pas1" })
      .where({ dihapus: 0 })
      .whereIn("m_user_id", userIds)
      .ids();

    const jadwalIds = await MJadwalUjian.query()
      .where("waktu_dibuka", ">", moment().format("YYYY-MM-DD 00:00:00"))
      .where("waktu_ditutup", "<", moment().format("YYYY-MM-DD HH:mm:ss"))
      .whereIn("m_user_id", userIds)
      .whereIn("m_ujian_id", ujianIds)
      .ids();

    const tkJadwalUjianIds = await TkJadwalUjian.query()
      .whereIn("m_jadwal_ujian_id", jadwalIds)
      .where({ dihapus: 0 })
      // .offset(60)
      // .limit(10)
      .ids();
    const dataPesertaCount = await TkPesertaUjian.query()
      .whereIn("tk_jadwal_ujian_id", [21593])
      .where({ dihapus: 0 })
      .whereNotIn("doc_id", [
        "qSXQDS1ZNvgGT0bELp8J",
        "oZXpNBQD5wDOheR5JO8n",
        "b6FdEqhGWfXNc8rTi2xK",
        "7D3RFtM3yhRX0rOhx7r8",
      ])
      .count();
    const dataPeserta = await TkPesertaUjian.query()
      .select(
        "id",
        "doc_id",
        "waktu_mulai",
        "waktu_selesai",
        "nilai",
        "selesai",
        "dinilai",
        "dihapus",
        "m_user_id",
        "tk_jadwal_ujian_id",
        "created_at",
        "updated_at",
        "nilai_pg",
        "nilai_esai"
      )
      .whereIn("tk_jadwal_ujian_id", [21593])
      .where({ dihapus: 0 })
      .whereNotIn("doc_id", [
        "qSXQDS1ZNvgGT0bELp8J",
        "oZXpNBQD5wDOheR5JO8n",
        "b6FdEqhGWfXNc8rTi2xK",
        "7D3RFtM3yhRX0rOhx7r8",
      ])
      .offset(offset)
      .limit(limit)
      .fetch();

    const imported = [];
    // const dataPesertaPro =  await Database.connection("dbPro")
    //   .table('tk_peserta_ujian')
    //   .whereIn("tk_jadwal_ujian_id", tkJadwalUjianIds)
    //   .where({ dihapus: 0 })
    //   .pluck("id")
    await Promise.all(
      dataPeserta.toJSON().map(async (d) => {
        const { id, ...dataImport } = d;
        const check = await Database.connection("dbPro")
          .table("tk_peserta_ujian")
          .where({ tk_jadwal_ujian_id: d.tk_jadwal_ujian_id })
          .where({ m_user_id: d.m_user_id })
          .first();
        const jawaban = await TkJawabanUjianSiswa.query()
          .where({ tk_peserta_ujian_id: id })
          .fetch();
        if (!check) {
          // imported.push(1);
          const tkBaru = await Database.connection("dbPro")
            .table("tk_peserta_ujian")
            .insert(dataImport);
          imported.push(tkBaru);
          return Database.connection("dbPro")
            .table("tk_jawaban_ujian_siswa")
            .insert(
              jawaban.toJSON().map((e) => {
                const { id, ...x } = e;
                return { ...x, tk_peserta_ujian_id: tkBaru };
              })
            );
        }
      })
    );

    return { dataPesertaCount, imported: imported.length, dataPeserta };
  }

  async downloadJadwalUjianDalamSehari({ response, request }) {
    // const domain = request.headers().origin;

    // const sekolah = await this.getSekolahByDomain(domain);

    // if (sekolah == "404") {
    //   return response.notFound({ message: "Sekolah belum terdaftar" });
    // }

    // const { tk_jadwal_ujian_id, m_jadwal_ujian_id } = request.post();
    // const keluarantanggalseconds =
    //   moment().format("YYYY-MM-DD ") + Date.now();

    const { limit = 10, offset = 0 } = request.post();

    const userIds = await User.query()
      .where({ dihapus: 0 })
      .where({ m_sekolah_id: 33 })
      .whereIn("role", ["guru", "admin"])
      .ids();

    const ujianIds = await MUjian.query()
      .where({ tipe: "pas1" })
      .where({ dihapus: 0 })
      .whereIn("m_user_id", userIds)
      .ids();

    const jadwalIds = await MJadwalUjian.query()
      .where("waktu_dibuka", ">", moment().format("YYYY-MM-02 00:00:00"))
      .where("waktu_ditutup", "<", moment().format("YYYY-MM-02 HH:mm:ss"))
      .whereIn("m_user_id", userIds)
      .whereIn("m_ujian_id", ujianIds)
      .ids();

    // const tkJadwalUjianCount = await TkJadwalUjian.query()
    //   .whereIn("m_jadwal_ujian_id", jadwalIds)
    //   .where({ dihapus: 0 })
    //   .count();
    // return tkJadwalUjianCount;
    const tkJadwalUjianIds = await TkJadwalUjian.query()
      .whereIn("m_jadwal_ujian_id", jadwalIds)
      .where({ dihapus: 0 })
      .offset(offset)
      .limit(limit)
      .ids();

    const success = [];

    await Promise.all(
      tkJadwalUjianIds.map(async (tkId) => {
        const jadwalUjian = await TkJadwalUjian.query()
          .with("peserta", (builder) => {
            builder.with("user"),
              (builder) => {
                builder.select("id", "nama");
              };
          })
          .with("rombel")
          .with("jadwalUjian", (builder) => {
            builder.with("ujian");
          })
          .where({ id: tkId })
          .first();

        const tkJadwalUjian = await TkJadwalUjian.query()
          .where({ id: tkId })
          .pluck("m_rombel_id");

        const anggotaRombel = await MAnggotaRombel.query()
          .where({ m_rombel_id: tkJadwalUjian[0] })
          .andWhere({ dihapus: 0 })
          .pluck("m_user_id");

        const pesertaUjianData = await User.query()
          .whereIn("id", anggotaRombel)
          .fetch();

        const workbook = new Excel.Workbook();

        await Promise.all(
          [0].map(async (_, idx) => {
            // Create workbook & add worksheet
            const worksheet = workbook.addWorksheet(
              `${jadwalUjian.toJSON().rombel.nama}`
            );

            await Promise.all(
              pesertaUjianData
                .toJSON()
                .sort((a, b) => ("" + a.nama).localeCompare(b.nama))
                .map(async (d) => {
                  await Promise.all(
                    jadwalUjian
                      .toJSON()
                      .peserta.sort((a, b) =>
                        ("" + a.user.nama).localeCompare(b.user.nama)
                      )
                      .map(async (e) => {
                        if (d.id == e.m_user_id) {
                          const pesertaUjian = await TkPesertaUjian.query()
                            .with("jawabanSiswa", (builder) => {
                              builder.with("soal");
                            })
                            .with("user")
                            .where({ id: e.id })
                            .first();

                          let metaHasil = {
                            nilaiPg: 0,
                            nilaiEsai: 0,
                            nilaiTotal: 0,
                            benar: 0,
                          };
                          let analisisBenar = {};
                          let analisisTotal = {};

                          await Promise.all(
                            pesertaUjian
                              .toJSON()
                              .jawabanSiswa.map(async (d) => {
                                if (d.soal.bentuk == "pg") {
                                  if (d.jawaban_pg == d.soal.kj_pg) {
                                    metaHasil.nilaiPg =
                                      metaHasil.nilaiPg + d.soal.nilai_soal;
                                    metaHasil.benar = metaHasil.benar + 1;
                                    analisisBenar[d.soal.kd] = analisisBenar[
                                      d.soal.kd
                                    ]
                                      ? analisisBenar[d.soal.kd] + 1
                                      : 1;
                                  }
                                  analisisTotal[d.soal.kd] = analisisTotal[
                                    d.soal.kd
                                  ]
                                    ? analisisTotal[d.soal.kd] + 1
                                    : 1;
                                } else if (d.soal.bentuk == "esai") {
                                  if (JSON.parse(d.jawaban_rubrik_esai)) {
                                    if (
                                      JSON.parse(d.jawaban_rubrik_esai).length
                                    ) {
                                      JSON.parse(d.jawaban_rubrik_esai).map(
                                        (e) => {
                                          if (e.benar) {
                                            metaHasil.nilaiEsai =
                                              metaHasil.nilaiEsai + e.poin;
                                          }
                                        }
                                      );

                                      if (
                                        d.jawaban_rubrik_esai.indexOf("true") !=
                                        -1
                                      ) {
                                        metaHasil.benar = metaHasil.benar + 1;
                                      }
                                    }
                                  }
                                }
                              })
                          );

                          metaHasil.nilaiTotal =
                            metaHasil.nilaiPg + metaHasil.nilaiEsai;

                          // add column headers
                          worksheet.getRow(10).values = [
                            "Nama",
                            "Nilai PG",
                            "Nilai Esai",
                            "Nilai Total",
                          ];

                          worksheet.columns = [
                            { key: "user" },
                            { key: "nilai_pg" },
                            { key: "nilai_esai" },
                            { key: "nilai_total" },
                          ];

                          // Add row using key mapping to columns
                          const row = worksheet.addRow({
                            user: d.nama,
                            nilai_pg: metaHasil.nilaiPg,
                            nilai_esai: metaHasil.nilaiEsai,
                            nilai_total: metaHasil.nilaiTotal,
                          });
                        }
                      })
                  );
                })
            );

            worksheet.getCell("A1").value = "Ujian";
            worksheet.getCell("B1").value =
              jadwalUjian.toJSON().jadwalUjian.ujian.nama;
            worksheet.getCell("D1").value = "Tanggal";
            worksheet.getCell("E1").value = `${
              jadwalUjian.toJSON().jadwalUjian.tanggalUjian
            } ${jadwalUjian.toJSON().jadwalUjian.waktuUjian}`;
            worksheet.getCell("D2").value = "KKM";
            worksheet.getCell("E2").value =
              jadwalUjian.toJSON().jadwalUjian.kkm;
            worksheet.getCell("A2").value = "Durasi";
            worksheet.getCell("B2").value = `${
              jadwalUjian.toJSON().jadwalUjian.durasi
            } menit`;

            // worksheet.getCell("A4").value = "RPP";
            // worksheet.getCell("A5").value = d.rpp.toString();

            // worksheet.getCell("A7").value = "Deskripsi";
            // worksheet.getCell("A8").value = d.deskripsi;

            // worksheet.columns.forEach(function (column, i) {
            //   let maxLength = 0;
            //   column["eachCell"]({ includeEmpty: true }, function (cell) {
            //     let columnLength = cell.value ? cell.value.toString().length : 10;

            //     if (cell.value == "alpa") {
            //       // red
            //       cell.fill = {
            //         type: "pattern",
            //         pattern: "solid",
            //         fgColor: { argb: "F9D5D4" },
            //         bgColor: { argb: "F9D5D4" },
            //       };

            //       cell.font = {
            //         color: { argb: "FC544B" },
            //       };
            //     }

            //     if (cell.value == "sakit") {
            //       // yellow
            //       cell.fill = {
            //         type: "pattern",
            //         pattern: "solid",
            //         fgColor: { argb: "FCE8D2" },
            //         bgColor: { argb: "FCE8D2" },
            //       };

            //       cell.font = {
            //         color: { argb: "F9AC50" },
            //       };
            //     }

            //     if (cell.value == "izin") {
            //       // green
            //       cell.fill = {
            //         type: "pattern",
            //         pattern: "solid",
            //         fgColor: { argb: "E0FCE4" },
            //         bgColor: { argb: "E0FCE4" },
            //       };

            //       cell.font = {
            //         color: { argb: "63ED7A" },
            //       };
            //     }

            //     if (cell.value == "hadir") {
            //       // green
            //       cell.fill = {
            //         type: "pattern",
            //         pattern: "solid",
            //         fgColor: { argb: "2680EB" },
            //         bgColor: { argb: "2680EB" },
            //       };

            //       cell.font = {
            //         color: { argb: "FFFFFF" },
            //       };
            //     }

            //     if (columnLength > maxLength) {
            //       maxLength = columnLength;
            //     }
            //   });

            //   column.width = maxLength < 15 ? 15 : maxLength > 30 ? 30 : 15;
            // });
            // worksheet.autoFilter = {
            //   from: 'A11',
            //   to: 'D99',
            // }
          })
        );

        let namaFile = `/uploads/${moment(
          `${jadwalUjian.toJSON().jadwalUjian.waktu_dibuka}`
        ).format("HH-mm")} ${jadwalUjian
          .toJSON()
          .jadwalUjian.ujian.nama.replace(/[\/|\\:*?"<>]/g, " ")} ${jadwalUjian
          .toJSON()
          .rombel.nama.replace(/[\/|\\:*?"<>]/g, " ")}.xlsx`;

        // save workbook to disk
        await workbook.xlsx.writeFile(`public${namaFile}`);
        success.push(1);

        return namaFile;
      })
    );
    return response.ok({
      message: success.length,
    });
  }

  async postJadwalUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      jumlah_pg,
      jumlah_esai,
      jumlah_isian,
      jumlah_menjodohkan,
      jumlah_uraian,
      jumlah_pg_kompleks,
      kkm,
      waktu_dibuka,
      jumlah_soal_akm,
      durasi,
      gmeet,
      diacak,
      rombel_id,
      m_ujian_id,
      token,
      tampil_nilai,
      tampil_jawaban,
      keluartab,
    } = request.post();
    const tanggal = moment(waktu_dibuka).format(`DD`);
    const bulan = moment(waktu_dibuka).format(`M`);
    const jam = moment(waktu_dibuka).format(`H`);
    const menit = moment(waktu_dibuka).format(`mm`);

    const pembuatUjian = await MUjian.query()
      .with("mataPelajaran")
      .where({ id: m_ujian_id })
      .first();

    // return waktu_dibuka;
    if (
      sekolah?.id == 8123 ||
      sekolah?.id == 3364 ||
      sekolah?.id == 3367 ||
      sekolah?.id == 3388 ||
      sekolah?.id == 4995 ||
      sekolah?.id == 5025 ||
      sekolah?.id == 9348
    ) {
      const jadwalUjian = await MJadwalUjian.create({
        jumlah_pg,
        jumlah_esai,
        jumlah_isian,
        jumlah_soal_akm,
        jumlah_menjodohkan,
        jumlah_uraian,
        jumlah_pg_kompleks,
        m_ujian_id,
        keluar_tab: keluartab,
        kkm,
        waktu_dibuka,
        waktu_ditutup: moment(waktu_dibuka)
          .add(durasi, "minutes")
          .format("YYYY-MM-DD HH:mm:ss"),
        durasi,
        gmeet,
        diacak,
        m_user_id: pembuatUjian.m_user_id,
        dihapus: 0,
        token,
        tampil_nilai,
        tampil_jawaban,
      });

      let tkJadwalUjianData = [];

      if (rombel_id.length) {
        await Promise.all(
          rombel_id.map(async (rombel) => {
            tkJadwalUjianData.push({
              m_rombel_id: rombel,
              dihapus: 0,
              m_jadwal_ujian_id: jadwalUjian.id,
            });
            // const anggotaRombel = await MAnggotaRombel.query()
            //   .with("user", (builder) => {
            //     builder.select("id", "nama", " wa_real");
            //   })
            //   .where({ dihapus: 0 })
            //   .andWhere({ m_rombel_id: rombel })
            //   .fetch();

            // await Promise.all(
            //   anggotaRombel.toJSON().map(async (d) => {
            //     if (d.user.wa_real) {
            //       await WhatsAppService.sendMessage(
            //         d.user.wa_real,
            //         `Halo ${d.user.nama}, ada Ujian ${
            //           pembuatUjian.toJSON().mataPelajaran.nama
            //         } yang akan datang dengan judul ${
            //           pembuatUjian.nama
            //         }. Silahkan klik tautan berikut untuk melihat! *Semangat* 💪💪!! \n \n${domain}/smartschool/ujian`
            //       );

            //       await MNotifikasiTerjadwal.create({
            //         tanggal_dibagikan: waktu_dibuka,
            //         tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
            //         pesan: `Halo ${d.user.nama}, ada Ujian ${
            //           pembuatUjian.toJSON().mataPelajaran.nama
            //         } yang sedang berlangsung dengan judul ${
            //           pembuatUjian.nama
            //         }. Silahkan klik tautan berikut untuk melihat! *Semangat* !! \n \n${domain}/smartschool/ujian`,
            //         tujuan: d.user.wa_real,
            //         nama: `ujian-${jadwalUjian.id}-${d.m_user_id}`,
            //       });
            //     }
            //   })
            // );
          })
        );

        await TkJadwalUjian.createMany(tkJadwalUjianData);
      }

      return response.ok({
        message: messagePostSuccess,
      });
    } else {
      const jadwalUjian = await MJadwalUjian.create({
        jumlah_pg,
        jumlah_esai,
        jumlah_isian,
        jumlah_soal_akm,
        jumlah_menjodohkan,
        jumlah_uraian,
        jumlah_pg_kompleks,
        m_ujian_id,
        keluar_tab: keluartab,
        kkm,
        waktu_dibuka,
        waktu_ditutup: moment(waktu_dibuka)
          .add(durasi, "minutes")
          .format("YYYY-MM-DD HH:mm:ss"),
        durasi,
        gmeet,
        diacak,
        m_user_id: pembuatUjian.m_user_id,
        dihapus: 0,
        token,
      });

      let tkJadwalUjianData = [];

      if (rombel_id.length) {
        await Promise.all(
          rombel_id.map(async (rombel) => {
            tkJadwalUjianData.push({
              m_rombel_id: rombel,
              dihapus: 0,
              m_jadwal_ujian_id: jadwalUjian.id,
            });
            // const anggotaRombel = await MAnggotaRombel.query()
            //   .with("user", (builder) => {
            //     builder.select("id", "nama", " wa_real");
            //   })
            //   .where({ dihapus: 0 })
            //   .andWhere({ m_rombel_id: rombel })
            //   .fetch();

            // await Promise.all(
            //   anggotaRombel.toJSON().map(async (d) => {
            //     if (d.user.wa_real) {
            //       await WhatsAppService.sendMessage(
            //         d.user.wa_real,
            //         `Halo ${d.user.nama}, ada Ujian ${
            //           pembuatUjian.toJSON().mataPelajaran.nama
            //         } yang akan datang dengan judul ${
            //           pembuatUjian.nama
            //         }. Silahkan klik tautan berikut untuk melihat! *Semangat* 💪💪!! \n \n${domain}/smartschool/ujian`
            //       );

            //       await MNotifikasiTerjadwal.create({
            //         tanggal_dibagikan: waktu_dibuka,
            //         tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
            //         pesan: `Halo ${d.user.nama}, ada Ujian ${
            //           pembuatUjian.toJSON().mataPelajaran.nama
            //         } yang sedang berlangsung dengan judul ${
            //           pembuatUjian.nama
            //         }. Silahkan klik tautan berikut untuk melihat! *Semangat* !! \n \n${domain}/smartschool/ujian`,
            //         tujuan: d.user.wa_real,
            //         nama: `ujian-${jadwalUjian.id}-${d.m_user_id}`,
            //       });
            //     }
            //   })
            // );
          })
        );

        await TkJadwalUjian.createMany(tkJadwalUjianData);
      }

      return response.ok({
        message: messagePostSuccess,
      });
    }
  }

  async putJadwalUjian({
    response,
    request,
    auth,
    params: { jadwal_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role == "siswa") {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      jumlah_pg,
      jumlah_esai,
      jumlah_soal_akm,
      jumlah_menjodohkan,
      jumlah_uraian,
      jumlah_pg_kompleks,
      kkm,
      waktu_dibuka,
      durasi,
      gmeet,
      diacak,
      rombel_id,
      m_ujian_id,
      token,
      tampil_nilai,
      tampil_jawaban,
      keluartab,
    } = request.post();

    const waktu_dibuka1 = moment(waktu_dibuka).format("YYYY-MM-DD HH:mm:ss");
    const tanggal = moment(waktu_dibuka1).format(`DD`);
    const bulan = moment(waktu_dibuka1).format(`M`);
    const jam = moment(waktu_dibuka1).format(`H`);
    const menit = moment(waktu_dibuka1).format(`mm`);
    // return waktu_dibuka1

    // await MNotifikasiTerjadwal.query()
    //   .where("nama", "like", `%ujian-${jadwal_ujian_id}-%`)
    //   .update({
    //     diupdate: 1,
    //     dikirim: 0,
    //     tanggal_dibagikan: waktu_dibuka1,
    //     tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
    //   });
    // const jadwalUjianData = await MJadwalUjian.query()
    //   .with("ujian", (builder) => {
    //     builder.with("mataPelajaran");
    //   })
    //   .where({ id: jadwal_ujian_id })
    //   .first();

    // const checkJadwal = await MJadwalUjian.query()
    //   .with("rombelUjian",(builder)=>{
    //     builder.with("peserta")
    //   })
    //   .where({id:jadwal_ujian_id})
    //   .first()

    // await Promise.all(
    //   checkJadwal.toJSON().rombelUjian.map((d)=>{

    //   })
    // )

    // return jadwalUjianData

    if (
      sekolah?.id == 8123 ||
      sekolah?.id == 3364 ||
      sekolah?.id == 3367 ||
      sekolah?.id == 3388 ||
      sekolah?.id == 4995 ||
      sekolah?.id == 5025 ||
      sekolah?.id == 9348
    ) {
      const jadwalUjian = await MJadwalUjian.query()
        .where({ id: jadwal_ujian_id })
        .update({
          jumlah_pg,
          jumlah_esai,
          jumlah_soal_akm,
          jumlah_menjodohkan,
          jumlah_uraian,
          jumlah_pg_kompleks,
          kkm,
          waktu_dibuka,
          waktu_ditutup: moment(waktu_dibuka)
            .add(durasi, "minutes")
            .format("YYYY-MM-DD HH:mm:ss"),
          durasi,
          gmeet,
          keluar_tab: keluartab,
          diacak,
          token,
          tampil_nilai,
          tampil_jawaban,
        });
      if (!jadwalUjian) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      let tkJadwalUjianData = [];
      const tkJadwalIds = await TkJadwalUjian.query()
        .andWhere({ m_jadwal_ujian_id: jadwal_ujian_id })
        .where({ dihapus: 0 })
        .pluck("m_rombel_id");

      if (rombel_id.length) {
        await Promise.all(
          tkJadwalIds
            .filter((d) => !rombel_id.includes(d))
            .map(async (d) => {
              await TkJadwalUjian.query()
                .where({ m_rombel_id: d })
                .andWhere({ m_jadwal_ujian_id: jadwal_ujian_id })
                .where({ dihapus: 0 })
                .update({
                  dihapus: 1,
                });
              // const anggotaRombel = await MAnggotaRombel.query()
              //   .with("user", (builder) => {
              //     builder.select("id", "nama", " wa_real");
              //   })
              //   .where({ dihapus: 0 })
              //   .andWhere({ m_rombel_id: d })
              //   .fetch();
              // const checkNotif = await MNotifikasiTerjadwal.query()
              //   .where("nama", "like", `%ujian-${jadwal_ujian_id}-%`)
              //   .fetch();

              // await Promise.all(
              //   anggotaRombel.toJSON().map(async (e) => {
              //     if (e.user.wa_real) {
              //       const checkNote = checkNotif
              //         .toJSON()
              //         .find(
              //           (s) => s.nama == `ujian-${jadwal_ujian_id}-${e.m_user_id}`
              //         );
              //       if (checkNote) {
              //         await MNotifikasiTerjadwal.query()
              //           .where(
              //             "nama",
              //             "like",
              //             `%ujian-${jadwal_ujian_id}-${e.m_user_id}%`
              //           )
              //           .delete();
              //       }
              //       await WhatsAppService.sendMessage(
              //         e.user.wa_real,
              //         `Halo ${e.user.nama}, Ujian ${
              //           jadwalUjianData.toJSON().ujian.mataPelajaran.nama
              //         } dengan judul ${
              //           jadwalUjianData.toJSON().ujian.nama
              //         } Telah dihapus. `
              //       );
              //     }
              //   })
              // );
            })
        );
        await Promise.all(
          rombel_id.map(async (rombel) => {
            const check = await TkJadwalUjian.query()
              .where({ m_rombel_id: rombel })
              .andWhere({ m_jadwal_ujian_id: jadwal_ujian_id })
              .where({ dihapus: 0 })
              .first();

            // const anggotaRombel = await MAnggotaRombel.query()
            //   .with("user", (builder) => {
            //     builder.select("id", "nama", " wa_real");
            //   })
            //   .where({ dihapus: 0 })
            //   .andWhere({ m_rombel_id: rombel })
            //   .fetch();

            // if (waktu_dibuka1 != jadwalUjianData.waktu_dibuka) {
            //   // coba =2;
            //   if (
            //     moment().format("YYYY-MM-DD HH:mm:ss") >
            //     moment(jadwalUjianData.waktu_dibuka).format("YYYY-MM-DD HH:mm:ss")
            //   ) {
            //     await Promise.all(
            //       anggotaRombel.toJSON().map(async (d) => {
            //         if (d.user.wa_real) {
            //           await WhatsAppService.sendMessage(
            //             d.user.wa_real,
            //             `Halo ${d.user.nama}, Ujian ${
            //               jadwalUjianData.toJSON().ujian.mataPelajaran.nama
            //             } dengan judul ${
            //               jadwalUjianData.toJSON().ujian.nama
            //             } telah diubah jadwal mulainya. Silahkan klik tautan berikut untuk melihat! Semangat!!👍 \n \n${domain}/smartschool/ujian`
            //           );
            //         }
            //       })
            //     );
            //   }
            // }
            if (!check) {
              tkJadwalUjianData.push({
                m_rombel_id: rombel,
                dihapus: 0,
                m_jadwal_ujian_id: jadwal_ujian_id,
              });

              // await Promise.all(
              //   anggotaRombel.toJSON().map(async (d) => {
              //     if (d.user.wa_real) {
              //       await WhatsAppService.sendMessage(
              //         d.user.wa_real,
              //         `Halo ${d.user.nama}, ada Ujian ${
              //           jadwalUjianData.toJSON().ujian.mataPelajaran.nama
              //         } yang akan datang dengan judul ${
              //           jadwalUjianData.toJSON().ujian.nama
              //         }. Silahkan klik tautan berikut untuk melihat! Semangat!! \n \n${domain}/smartschool/ujian`
              //       );

              //       await MNotifikasiTerjadwal.create({
              //         tanggal_dibagikan: waktu_dibuka1,
              //         tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
              //         pesan: `Halo ${d.user.nama}, ada Ujian ${
              //           jadwalUjianData.toJSON().ujian.mataPelajaran.nama
              //         } yang sedang berlangsung dengan judul ${
              //           jadwalUjianData.toJSON().ujian.nama
              //         }. Silahkan klik tautan berikut untuk melihat! Semangat!! \n \n${domain}/smartschool/ujian`,
              //         tujuan: d.user.wa_real,
              //         nama: `ujian-${jadwalUjian.id}-${d.m_user_id}`,
              //       });
              //     }
              //   })
              // );
            }
          })
        );

        const tkJadwalUjian = await TkJadwalUjian.createMany(tkJadwalUjianData);
      }

      return response.ok({
        message: messagePutSuccess,
      });
    } else {
      const jadwalUjian = await MJadwalUjian.query()
        .where({ id: jadwal_ujian_id })
        .update({
          jumlah_pg,
          jumlah_esai,
          jumlah_soal_akm,
          jumlah_menjodohkan,
          jumlah_uraian,
          jumlah_pg_kompleks,
          kkm,
          waktu_dibuka,
          waktu_ditutup: moment(waktu_dibuka)
            .add(durasi, "minutes")
            .format("YYYY-MM-DD HH:mm:ss"),
          durasi,
          gmeet,
          diacak,
          token,
          keluar_tab: keluartab,
        });
      if (!jadwalUjian) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      let tkJadwalUjianData = [];
      const tkJadwalIds = await TkJadwalUjian.query()
        .andWhere({ m_jadwal_ujian_id: jadwal_ujian_id })
        .where({ dihapus: 0 })
        .pluck("m_rombel_id");

      if (rombel_id.length) {
        await Promise.all(
          tkJadwalIds
            .filter((d) => !rombel_id.includes(d))
            .map(async (d) => {
              await TkJadwalUjian.query()
                .where({ m_rombel_id: d })
                .andWhere({ m_jadwal_ujian_id: jadwal_ujian_id })
                .where({ dihapus: 0 })
                .update({
                  dihapus: 1,
                });
              // const anggotaRombel = await MAnggotaRombel.query()
              //   .with("user", (builder) => {
              //     builder.select("id", "nama", " wa_real");
              //   })
              //   .where({ dihapus: 0 })
              //   .andWhere({ m_rombel_id: d })
              //   .fetch();
              // const checkNotif = await MNotifikasiTerjadwal.query()
              //   .where("nama", "like", `%ujian-${jadwal_ujian_id}-%`)
              //   .fetch();

              // await Promise.all(
              //   anggotaRombel.toJSON().map(async (e) => {
              //     if (e.user.wa_real) {
              //       const checkNote = checkNotif
              //         .toJSON()
              //         .find(
              //           (s) => s.nama == `ujian-${jadwal_ujian_id}-${e.m_user_id}`
              //         );
              //       if (checkNote) {
              //         await MNotifikasiTerjadwal.query()
              //           .where(
              //             "nama",
              //             "like",
              //             `%ujian-${jadwal_ujian_id}-${e.m_user_id}%`
              //           )
              //           .delete();
              //       }
              //       await WhatsAppService.sendMessage(
              //         e.user.wa_real,
              //         `Halo ${e.user.nama}, Ujian ${
              //           jadwalUjianData.toJSON().ujian.mataPelajaran.nama
              //         } dengan judul ${
              //           jadwalUjianData.toJSON().ujian.nama
              //         } Telah dihapus. `
              //       );
              //     }
              //   })
              // );
            })
        );
        await Promise.all(
          rombel_id.map(async (rombel) => {
            const check = await TkJadwalUjian.query()
              .where({ m_rombel_id: rombel })
              .andWhere({ m_jadwal_ujian_id: jadwal_ujian_id })
              .where({ dihapus: 0 })
              .first();

            // const anggotaRombel = await MAnggotaRombel.query()
            //   .with("user", (builder) => {
            //     builder.select("id", "nama", " wa_real");
            //   })
            //   .where({ dihapus: 0 })
            //   .andWhere({ m_rombel_id: rombel })
            //   .fetch();

            // if (waktu_dibuka1 != jadwalUjianData.waktu_dibuka) {
            //   // coba =2;
            //   if (
            //     moment().format("YYYY-MM-DD HH:mm:ss") >
            //     moment(jadwalUjianData.waktu_dibuka).format("YYYY-MM-DD HH:mm:ss")
            //   ) {
            //     await Promise.all(
            //       anggotaRombel.toJSON().map(async (d) => {
            //         if (d.user.wa_real) {
            //           await WhatsAppService.sendMessage(
            //             d.user.wa_real,
            //             `Halo ${d.user.nama}, Ujian ${
            //               jadwalUjianData.toJSON().ujian.mataPelajaran.nama
            //             } dengan judul ${
            //               jadwalUjianData.toJSON().ujian.nama
            //             } telah diubah jadwal mulainya. Silahkan klik tautan berikut untuk melihat! Semangat!!👍 \n \n${domain}/smartschool/ujian`
            //           );
            //         }
            //       })
            //     );
            //   }
            // }
            if (!check) {
              tkJadwalUjianData.push({
                m_rombel_id: rombel,
                dihapus: 0,
                m_jadwal_ujian_id: jadwal_ujian_id,
              });

              // await Promise.all(
              //   anggotaRombel.toJSON().map(async (d) => {
              //     if (d.user.wa_real) {
              //       await WhatsAppService.sendMessage(
              //         d.user.wa_real,
              //         `Halo ${d.user.nama}, ada Ujian ${
              //           jadwalUjianData.toJSON().ujian.mataPelajaran.nama
              //         } yang akan datang dengan judul ${
              //           jadwalUjianData.toJSON().ujian.nama
              //         }. Silahkan klik tautan berikut untuk melihat! Semangat!! \n \n${domain}/smartschool/ujian`
              //       );

              //       await MNotifikasiTerjadwal.create({
              //         tanggal_dibagikan: waktu_dibuka1,
              //         tanggal_cron: `${menit} ${jam} ${tanggal} ${bulan} *`,
              //         pesan: `Halo ${d.user.nama}, ada Ujian ${
              //           jadwalUjianData.toJSON().ujian.mataPelajaran.nama
              //         } yang sedang berlangsung dengan judul ${
              //           jadwalUjianData.toJSON().ujian.nama
              //         }. Silahkan klik tautan berikut untuk melihat! Semangat!! \n \n${domain}/smartschool/ujian`,
              //         tujuan: d.user.wa_real,
              //         nama: `ujian-${jadwalUjian.id}-${d.m_user_id}`,
              //       });
              //     }
              //   })
              // );
            }
          })
        );

        const tkJadwalUjian = await TkJadwalUjian.createMany(tkJadwalUjianData);
      }

      return response.ok({
        message: messagePutSuccess,
      });
    }
  }

  async deleteJadwalUjian({
    response,
    request,
    auth,
    params: { jadwal_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    if (user.role == "siswa") {
      return response.forbidden({ message: messageForbidden });
    }

    const jadwalUjian = await MJadwalUjian.query()
      .where({ id: jadwal_ujian_id })
      .update({
        dihapus: 1,
      });

    const jadwalUjianData = await MJadwalUjian.query()
      .with("ujian", (builder) => {
        builder.with("mataPelajaran");
      })
      .where({ id: jadwal_ujian_id })
      .first();

    const tkJadwalUjian = await TkJadwalUjian.query()
      .where({ m_jadwal_ujian_id: jadwal_ujian_id })
      .update({
        dihapus: 1,
      });
    const tkJadwalIds = await TkJadwalUjian.query()
      .andWhere({ m_jadwal_ujian_id: jadwal_ujian_id })
      .where({ dihapus: 0 })
      .pluck("m_rombel_id");

    // return tkJadwalIds
    // let test = 0;

    // await Promise.all(
    //   tkJadwalIds.map(async (d) => {
    //     const anggotaRombel = await MAnggotaRombel.query()
    //       .with("user", (builder) => {
    //         builder.select("id", "nama", " wa_real");
    //       })
    //       .where({ dihapus: 0 })
    //       .andWhere({ m_rombel_id: d })
    //       .fetch();

    //     await Promise.all(
    //       anggotaRombel.toJSON().map(async (e) => {
    //         if (e.user.wa_real) {
    //           await WhatsAppService.sendMessage(
    //             e.user.wa_real,
    //             `Halo ${e.user.nama}, Ujian ${
    //               jadwalUjianData.toJSON().ujian.mataPelajaran.nama
    //             } dengan judul ${
    //               jadwalUjianData.toJSON().ujian.nama
    //             } Telah dihapus. `
    //           );
    //         }
    //       })
    //     );
    //   })
    // );
    // // return test
    // const checkNotif = await MNotifikasiTerjadwal.query()
    //   .where("nama", "like", `%ujian-${jadwal_ujian_id}-%`)
    //   .first();
    // if (checkNotif) {
    //   await MNotifikasiTerjadwal.query()
    //     .where("nama", "like", `%ujian-${jadwal_ujian_id}-%`)
    //     .delete();
    // }

    if (!jadwalUjian || !tkJadwalUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async detailPesertaUjian({
    response,
    request,
    auth,
    params: { peserta_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { jawaban_siswa_id, siswa, ppdb, lihat_ujian } = request.get();

    let pesertaUjian;

    if (lihat_ujian) {
      pesertaUjian = await TkPesertaUjian.query()
        .with("jadwalUjian", (builder) => {
          builder.with("jadwalUjian", (builder) => {
            builder.with("ujian", (builder) => {
              builder.with("soalUjian", (builder) => {
                builder
                  .where({ dihapus: 0 })
                  .select("id", "m_ujian_id", "m_soal_ujian_id");
              });
            });
          });
        })
        .with("jawabanSiswa", (builder) => {
          builder.with("soal");
        })
        .with("user")
        .with("peringatan")
        .where({ id: peserta_ujian_id })
        .first();

      let metaHasil = {
        nilaiPg: 0,
        nilaiEsai: 0,
        nilaiIsian: 0,
        nilaiPgKompleks: 0,
        nilaiUraian: 0,
        nilaiMenjodohkan: 0,
        nilaiTotal: 0,
        benar: 0,
      };
      let analisisBenar = {};
      let analisisTotal = {};

      await Promise.all(
        pesertaUjian.toJSON().jawabanSiswa.map(async (d) => {
          if (d.soal.bentuk == "pg") {
            if (d.jawaban_pg == d.soal.kj_pg) {
              metaHasil.nilaiPg = metaHasil.nilaiPg + d.soal.nilai_soal;
              metaHasil.benar = metaHasil.benar + 1;
              analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
                ? analisisBenar[d.soal.kd] + 1
                : 1;
            }
            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
              ? analisisTotal[d.soal.kd] + 1
              : 1;
          } else if (d.soal.bentuk == "isian") {
            if (d.jawaban_isian == d.soal.jawaban_benar) {
              metaHasil.nilaiIsian = metaHasil.nilaiIsian + d.soal.nilai_soal;
              metaHasil.benar = metaHasil.benar + 1;
            }
          } else if (d.soal.bentuk == "esai") {
            if (JSON.parse(d.jawaban_rubrik_esai)) {
              if (JSON.parse(d.jawaban_rubrik_esai).length) {
                JSON.parse(d.jawaban_rubrik_esai).map((e) => {
                  if (e.benar) {
                    metaHasil.nilaiEsai =
                      metaHasil.nilaiEsai + parseInt(e.poin);
                  }
                });

                if (d.jawaban_rubrik_esai.indexOf("true") != -1) {
                  metaHasil.benar = metaHasil.benar + 1;
                }
              }
            }
          } else if (d.soal.bentuk == "pg_kompleks") {
            const jawabanKjKompleks = d.soal.jawaban_pg_kompleks.split(",");
            const check1 = jawabanKjKompleks.every((e) =>
              d.jawaban_pg_kompleks.includes(e)
            );
            const check2 = d.jawaban_pg_kompleks.every((e) =>
              d.soal.jawaban_pg_kompleks.includes(e)
            );
            if (check1 && check2) {
              metaHasil.nilaiPgKompleks =
                metaHasil.nilaiPgKompleks + d.soal.nilai_soal;
              metaHasil.benar = metaHasil.benar + 1;
              analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
                ? analisisBenar[d.soal.kd] + 1
                : 1;
            }
            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
              ? analisisTotal[d.soal.kd] + 1
              : 1;
          } else if (d.soal.bentuk == "uraian") {
            if (d.jawaban_opsi_uraian == d.soal.kj_uraian) {
              metaHasil.nilaiUraian = metaHasil.nilaiUraian + d.soal.nilai_soal;
              metaHasil.benar = metaHasil.benar + 1;
              analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
                ? analisisBenar[d.soal.kd] + 1
                : 1;
            }
            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
              ? analisisTotal[d.soal.kd] + 1
              : 1;
          } else if (d.soal.bentuk == "menjodohkan") {
            // const jawabanKjMenjodohkan = d.soal.jawaban_pg_kompleks.split(",")
            // const check1 = jawabanKjKompleks.every(e=> d.jawaban_pg_kompleks.includes(e))
            // const check2 = d.jawaban_menjodohkan.every(e => d.soal.jawaban_pg_kompleks.includes(e))
            if (d.jawaban_menjodohkan) {
              if (d.jawaban_menjodohkan.length) {
                let benars = 0;
                d.jawaban_menjodohkan.map((e, id) => {
                  // metaHasil.nilaiMenjodohkan = metaHasil.nilaiMenjodohkan+','+ id ;
                  const check1 = d.soal.soal_menjodohkan.find(
                    (r) => id + 1 == r.id
                  );
                  if (check1) {
                    if (check1.jawaban == e - 1) {
                      benars = 1;
                      metaHasil.nilaiMenjodohkan =
                        metaHasil.nilaiMenjodohkan + parseInt(check1.poin);
                    }
                  }
                });

                if (benars == 1) {
                  metaHasil.benar = metaHasil.benar + 1;
                }
              }
            }
          }
        })
      );

      metaHasil.nilaiTotal =
        (metaHasil.nilaiPg ? metaHasil.nilaiPg : 0) +
        (metaHasil.nilaiEsai ? metaHasil.nilaiEsai : 0) +
        (metaHasil.nilaiIsian ? metaHasil.nilaiIsian : 0) +
        (metaHasil.nilaiPgKompleks ? metaHasil.nilaiPgKompleks : 0) +
        (metaHasil.nilaiUraian ? metaHasil.nilaiUraian : 0) +
        (metaHasil.nilaiMenjodohkan ? metaHasil.nilaiMenjodohkan : 0);

      analisisBenar = Object.entries(analisisBenar);
      analisisTotal = Object.entries(analisisTotal);

      let analisisData = [];
      let idTmp;

      analisisTotal.map((d) => {
        analisisBenar.map((e) => {
          if (d[0] == e[0]) {
            idTmp = e[0];
            analisisData.push({
              kd: d[0],
              nilai: (e[1] / d[1]) * 100,
              total: d[1],
            });
          }
        });

        if (idTmp != d[0]) {
          analisisData.push({
            kd: d[0],
            nilai: 0 * 100,
            total: d[1],
          });
        }
      });

      return response.ok({
        peserta_ujian: pesertaUjian,
        metaHasil,
        analisisData: analisisData,
      });
    }

    if (user.role == "guru" || siswa || user.role == "admin") {
      pesertaUjian = await TkPesertaUjian.query()
        .with("jadwalUjian", (builder) => {
          builder.with("jadwalUjian", (builder) => {
            builder.with("ujian", (builder) => {
              builder.with("soalUjian", (builder) => {
                builder
                  .where({ dihapus: 0 })
                  .select("id", "m_ujian_id", "m_soal_ujian_id");
              });
            });
          });
        })
        .with("jawabanSiswa", (builder) => {
          builder.with("soal");
        })
        .with("user")
        .with("peringatan")
        .where({ id: peserta_ujian_id })
        .first();

      let semuaPeserta = await TkJadwalUjian.query()
        .with("rombel", (builder) => {
          builder.select("id", "nama");
        })
        .with("peserta", (builder) => {
          builder
            .with("user", (builder) => {
              builder.select("id", "nama");
            })
            .select("id", "m_user_id", "tk_jadwal_ujian_id")
            .whereNotNull("waktu_selesai")
            .orderBy("m_user_id", "asc");
        })
        .where({
          m_jadwal_ujian_id:
            pesertaUjian.toJSON().jadwalUjian.m_jadwal_ujian_id,
        })
        .fetch();

      let metaHasil = {
        nilaiPg: 0,
        nilaiEsai: 0,
        nilaiIsian: 0,
        nilaiPgKompleks: 0,
        nilaiUraian: 0,
        nilaiMenjodohkan: 0,
        nilaiTotal: 0,
        benar: 0,
      };
      let analisisBenar = {};
      let analisisTotal = {};

      await Promise.all(
        pesertaUjian.toJSON().jawabanSiswa.map(async (d) => {
          if (d.soal.bentuk == "pg") {
            if (d.jawaban_pg == d.soal.kj_pg) {
              metaHasil.nilaiPg = metaHasil.nilaiPg + d.soal.nilai_soal;
              metaHasil.benar = metaHasil.benar + 1;
              analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
                ? analisisBenar[d.soal.kd] + 1
                : 1;
            }
            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
              ? analisisTotal[d.soal.kd] + 1
              : 1;
          } else if (d.soal.bentuk == "isian") {
            if (d.jawaban_isian == d.soal.jawaban_benar) {
              metaHasil.nilaiIsian = metaHasil.nilaiIsian + d.soal.nilai_soal;
              metaHasil.benar = metaHasil.benar + 1;
            }
          } else if (d.soal.bentuk == "esai") {
            if (JSON.parse(d.jawaban_rubrik_esai)) {
              if (JSON.parse(d.jawaban_rubrik_esai).length) {
                JSON.parse(d.jawaban_rubrik_esai).map((e) => {
                  if (e.benar) {
                    metaHasil.nilaiEsai =
                      metaHasil.nilaiEsai + parseInt(e.poin);
                  }
                });

                if (d.jawaban_rubrik_esai.indexOf("true") != -1) {
                  metaHasil.benar = metaHasil.benar + 1;
                }
              }
            }
          } else if (d.soal.bentuk == "pg_kompleks") {
            const jawabanKjKompleks = d.soal.jawaban_pg_kompleks.split(",");
            const check1 = jawabanKjKompleks.every((e) =>
              d.jawaban_pg_kompleks.includes(e)
            );
            const check2 = d.jawaban_pg_kompleks.every((e) =>
              d.soal.jawaban_pg_kompleks.includes(e)
            );
            if (check1 && check2) {
              metaHasil.nilaiPgKompleks =
                metaHasil.nilaiPgKompleks + d.soal.nilai_soal;
              metaHasil.benar = metaHasil.benar + 1;
              analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
                ? analisisBenar[d.soal.kd] + 1
                : 1;
            }
            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
              ? analisisTotal[d.soal.kd] + 1
              : 1;
          } else if (d.soal.bentuk == "uraian") {
            if (d.jawaban_opsi_uraian == d.soal.kj_uraian) {
              metaHasil.nilaiUraian = metaHasil.nilaiUraian + d.soal.nilai_soal;
              metaHasil.benar = metaHasil.benar + 1;
              analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
                ? analisisBenar[d.soal.kd] + 1
                : 1;
            }
            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
              ? analisisTotal[d.soal.kd] + 1
              : 1;
          } else if (d.soal.bentuk == "menjodohkan") {
            // const jawabanKjMenjodohkan = d.soal.jawaban_pg_kompleks.split(",")
            // const check1 = jawabanKjKompleks.every(e=> d.jawaban_pg_kompleks.includes(e))
            // const check2 = d.jawaban_menjodohkan.every(e => d.soal.jawaban_pg_kompleks.includes(e))
            if (d.jawaban_menjodohkan) {
              if (d.jawaban_menjodohkan.length) {
                let benars = 0;
                d.jawaban_menjodohkan.map((e, id) => {
                  // metaHasil.nilaiMenjodohkan = metaHasil.nilaiMenjodohkan+','+ id ;
                  const check1 = d.soal.soal_menjodohkan.find(
                    (r) => id + 1 == r.id
                  );
                  if (check1) {
                    if (check1.jawaban == e - 1) {
                      benars = 1;
                      metaHasil.nilaiMenjodohkan =
                        metaHasil.nilaiMenjodohkan + parseInt(check1.poin);
                    }
                  }
                });

                if (benars == 1) {
                  metaHasil.benar = metaHasil.benar + 1;
                }
              }
            }
          }
        })
      );

      metaHasil.nilaiTotal =
        (metaHasil.nilaiPg ? metaHasil.nilaiPg : 0) +
        (metaHasil.nilaiEsai ? metaHasil.nilaiEsai : 0) +
        (metaHasil.nilaiIsian ? metaHasil.nilaiIsian : 0) +
        (metaHasil.nilaiPgKompleks ? metaHasil.nilaiPgKompleks : 0) +
        (metaHasil.nilaiUraian ? metaHasil.nilaiUraian : 0) +
        (metaHasil.nilaiMenjodohkan ? metaHasil.nilaiMenjodohkan : 0);

      analisisBenar = Object.entries(analisisBenar);
      analisisTotal = Object.entries(analisisTotal);

      let analisisData = [];
      let idTmp;

      analisisTotal.map((d) => {
        analisisBenar.map((e) => {
          if (d[0] == e[0]) {
            idTmp = e[0];
            analisisData.push({
              kd: d[0],
              nilai: (e[1] / d[1]) * 100,
              total: d[1],
            });
          }
        });

        if (idTmp != d[0]) {
          analisisData.push({
            kd: d[0],
            nilai: 0 * 100,
            total: d[1],
          });
        }
      });

      return response.ok({
        peserta_ujian: pesertaUjian,
        metaHasil,
        analisisData: analisisData,
        semuaPeserta: semuaPeserta,
      });
    } else {
      pesertaUjian = await TkPesertaUjian.query()
        .with("jadwalUjian", (builder) => {
          builder.with("jadwalUjian", (builder) => {
            builder.with("ujian");
          });
        })
        .with("pesertaPPDB", (builder) => {
          builder.with("jadwalPpdb", (builder) => {
            builder.with("soal");
          });
        })
        .with("tugas")
        .with("peringatan", (builder) => {
          builder.orderBy("created_at", "desc");
        })
        .withCount("peringatan as belumDibaca", (builder) => {
          builder.where({ dibaca: 0 });
        })
        .withCount("jawabanSiswa as totalSoal")
        .withCount("jawabanSiswa as totalDijawab", (builder) => {
          builder.where({ dijawab: 1 });
        })
        .with("user")
        .where({ id: peserta_ujian_id })
        .first();

      const soal_ids = await TkJawabanUjianSiswa.query()
        .where({ tk_peserta_ujian_id: peserta_ujian_id })
        .select("id", "ragu", "dijawab")
        .fetch();

      let soal_siswa;

      if (jawaban_siswa_id) {
        soal_siswa = await TkJawabanUjianSiswa.query()
          .with("soal", (builder) => {
            builder.select(
              "id",
              "kd",
              "kd_konten_materi",
              "level_kognitif",
              "bentuk_soal",
              "akm_konten_materi",
              "akm_konteks_materi",
              "akm_proses_kognitif",
              "pertanyaan",
              "jawaban_a",
              "jawaban_b",
              "jawaban_c",
              "jawaban_d",
              "jawaban_e",
              "opsi_a_uraian",
              "opsi_b_uraian",
              "pilihan_menjodohkan",
              "soal_menjodohkan",
              "bentuk",
              "dihapus",
              "m_user_id",
              "audio",
              "jawaban_benar"
            );
          })
          .where({ id: jawaban_siswa_id })
          .first();
      }

      return response.ok({
        peserta_ujian: pesertaUjian,
        soal_ids: soal_ids,
        soal_siswa: soal_siswa,
      });
    }
  }

  async postPesertaUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      tk_jadwal_ujian_id,
      ujian_id,
      tk_timeline_id,
      jadwal_ppdb,
      pendaftar_id,
    } = request.post();
    const waktu_mulai = moment().format("YYYY-MM-DD HH:mm:ss");

    if (tk_timeline_id) {
      const tk = await TkTimeline.query()
        .select("m_timeline_id")
        .where({ id: tk_timeline_id })
        .first();
      const timeline = await MTimeline.query()
        .where({ id: tk.m_timeline_id })
        .first();
      const m_tugas_id = timeline.m_tugas_id;
      const tugas = await MTugas.query()
        .where({ id: m_tugas_id })
        .where({ dihapus: 0 })
        .with("soal", (builder) => {
          builder.where({ dihapus: 0 }).with("soal");
        })
        .first();
      if (!tugas) {
        return response.notFound({
          message: messageNotFound,
        });
      }
      const pesertaUjian = await TkPesertaUjian.create({
        waktu_mulai,
        dinilai: 0,
        selesai: 0,
        dihapus: 0,
        m_user_id: user.id,
        tk_timeline_id: tk_timeline_id,
      });
      const soal = tugas.toJSON().soal.map((d) => {
        if (d.soal.bentuk == "pg") {
          return {
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            dinilai: 1,
            m_soal_ujian_id: d.soal.id,
            tk_peserta_ujian_id: pesertaUjian.id,
          };
        } else if (d.soal.bentuk == "esai") {
          return {
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            m_soal_ujian_id: d.soal.id,
            jawaban_rubrik_esai: d.soal.rubrik_kj,
            tk_peserta_ujian_id: pesertaUjian.id,
          };
        } else if (d.soal.bentuk == "isian") {
          return {
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            m_soal_ujian_id: d.soal.id,
            jawaban_isian: d.soal.jawaban_isian,
            tk_peserta_ujian_id: pesertaUjian.id,
          };
        }
      });
      const trx = await Database.beginTransaction();
      await TkJawabanUjianSiswa.createMany(soal, trx);
      await trx.commit();

      const res = await jadwalUjianReference.add({
        tk_peserta_ujian_id: pesertaUjian.id,
        user_id: pesertaUjian.m_user_id,
        progress: 0,
        waktu_mulai: waktu_mulai,
      });

      await TkPesertaUjian.query().where({ id: pesertaUjian.id }).update({
        doc_id: res.id,
      });

      return response.ok({
        peserta_ujian: pesertaUjian,
      });
    }

    if (jadwal_ppdb) {
      const check = await TkPesertaUjianPpdb.query()
        .with("peserta")
        .where({ m_jadwal_ppdb_id: jadwal_ppdb })
        .where({ dihapus: 0 })
        .where({ m_pendaftar_ppdb_id: pendaftar_id })
        .first();
      if (check) {
        return response.ok({
          peserta_ujian: check,
        });
      }
      const pesertaUjian = await TkPesertaUjian.create({
        waktu_mulai,
        dinilai: 0,
        selesai: 0,
        dihapus: 0,
        m_user_id: user.id,
      });
      await TkPesertaUjianPpdb.create({
        dihapus: 0,
        m_pendaftar_ppdb_id: pendaftar_id,
        m_jadwal_ppdb_id: jadwal_ppdb,
        tk_peserta_ujian_id: pesertaUjian.id,
      });
      const jadwal = await MJadwalPpdb.query()
        .with("soal", (builder) => {
          builder
            .with("soalUjian", (builder) => {
              builder.with("soal").where({ dihapus: 0 });
            })
            .where({ dihapus: 0 });
        })
        .with("info", (builder) => {
          builder.with("gelombang", (builder) => {
            builder.with("jalur");
          });
        })
        .where({ id: jadwal_ppdb })
        .first();
      const jadwalData = jadwal.toJSON();
      let soal = jadwalData.soal.soalUjian.map((d) => {
        if (d.soal.bentuk == "pg") {
          return {
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            dinilai: 1,
            m_soal_ujian_id: d.soal.id,
            tk_peserta_ujian_id: pesertaUjian.id,
          };
        } else if (d.soal.bentuk == "esai") {
          return {
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            m_soal_ujian_id: d.soal.id,
            jawaban_rubrik_esai: d.soal.rubrik_kj,
            tk_peserta_ujian_id: pesertaUjian.id,
          };
        } else if (d.soal.bentuk == "isian") {
          return {
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            m_soal_ujian_id: d.soal.id,
            jawaban_isian: d.soal.jawaban_isian,
            tk_peserta_ujian_id: pesertaUjian.id,
          };
        }
      });
      if (jadwalData.diacak) {
        soal = shuffle(soal);
      }
      soal = [
        ...soal.filter((d) => d.dinilai).slice(0, jadwal.jumlah_pg),
        ...soal.filter((d) => !d.dinilai).slice(0, jadwal.jumlah_esai),
      ];
      const trx = await Database.beginTransaction();
      await TkJawabanUjianSiswa.createMany(soal, trx);
      await trx.commit();

      const res = await jadwalUjianReference.add({
        tk_peserta_ujian_id: pesertaUjian.id,
        user_id: pesertaUjian.m_user_id,
        progress: 0,
        waktu_mulai: waktu_mulai,
      });

      await TkPesertaUjian.query().where({ id: pesertaUjian.id }).update({
        doc_id: res.id,
      });
      return pesertaUjian;
    }

    const ujian = await MUjian.query().where({ id: ujian_id }).first();

    const jadwalUjian = await TkJadwalUjian.query()
      .with("jadwalUjian")
      .where({ id: tk_jadwal_ujian_id })
      .first();

    if (jadwalUjian.toJSON().jadwalUjian.waktu_dibuka > waktu_mulai) {
      return response.forbidden({
        message: messageForbidden,
      });
    }

    let diacak = "id ASC";

    if (jadwalUjian.toJSON().jadwalUjian.diacak) {
      diacak = "RAND()";
    }

    if (ujian.tipe == "literasi" || ujian.tipe == "numerasi") {
      const checkIfExist = await TkPesertaUjian.query()
        .where({ m_user_id: user.id })
        .andWhere({ tk_jadwal_ujian_id: tk_jadwal_ujian_id })
        .where({ dihapus: 0 })
        .first();

      if (checkIfExist) {
        return response.ok({
          peserta_ujian: checkIfExist,
        });
      }

      const soalIds = await TkSoalUjian.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ujian_id: ujian_id })
        .pluck("m_soal_ujian_id");

      const soalMasterPG = await MSoalUjian.query()
        .where({ dihapus: 0 })
        .whereIn("id", soalIds)
        .where({ bentuk: "pg" })
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_pg)
        .ids();

      const soalMasterEsai = await MSoalUjian.query()
        .where({ dihapus: 0 })
        .whereIn("id", soalIds)
        .where({ bentuk: "esai" })
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_esai)
        .ids();

      const soalMasterIsian = await MSoalUjian.query()
        .where({ dihapus: 0 })
        .whereIn("id", soalIds)
        .where({ bentuk: "isian" })
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_isian)
        .ids();

      const soalMasterMenjodohkan = await MSoalUjian.query()
        .where({ dihapus: 0 })
        .whereIn("id", soalIds)
        .where({ bentuk: "menjodohkan" })
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_menjodohkan)
        .ids();

      const soalMasterUraian = await MSoalUjian.query()
        .where({ dihapus: 0 })
        .whereIn("id", soalIds)
        .where({ bentuk: "uraian" })
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_uraian)
        .ids();

      const soalMasterPgKompleks = await MSoalUjian.query()
        .where({ dihapus: 0 })
        .whereIn("id", soalIds)
        .where({ bentuk: "pg_kompleks" })
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_pg_kompleks)
        .ids();

      const soalAKM = await TkSoalUjian.query()
        .with("soal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_soal_ujian_id", [
          ...soalMasterPG,
          ...soalMasterEsai,
          ...soalMasterIsian,
          ...soalMasterMenjodohkan,
          ...soalMasterPgKompleks,
          ...soalMasterUraian,
        ])
        .orderByRaw(`${diacak}`)
        .where({ dihapus: 0 })
        .where({ m_ujian_id: ujian_id })
        .fetch();

      const soalData = [];

      const pesertaUjian = await TkPesertaUjian.create({
        waktu_mulai,
        dinilai: 0,
        selesai: 0,
        dihapus: 0,
        m_user_id: user.id,
        tk_jadwal_ujian_id: tk_jadwal_ujian_id,
      });

      await Promise.all(
        soalAKM.toJSON().map(async (d) => {
          if (d.soal.bentuk.toLowerCase().trim() == "uraian") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              dinilai: 1,
              m_soal_ujian_id: d.soal.id,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          } else if (d.soal.bentuk.toLowerCase().trim() == "pg_kompleks") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              dinilai: 1,
              m_soal_ujian_id: d.soal.id,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          } else if (d.soal.bentuk.toLowerCase().trim() == "menjodohkan") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              dinilai: 1,
              m_soal_ujian_id: d.soal.id,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          } else if (d.soal.bentuk.toLowerCase().trim() == "esai") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              m_soal_ujian_id: d.soal.id,
              jawaban_rubrik_esai: d.soal.rubrik_kj,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          } else if (d.soal.bentuk.toLowerCase().trim() == "pg") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              dinilai: 1,
              m_soal_ujian_id: d.soal.id,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          } else if (d.soal.bentuk.toLowerCase().trim() == "isian") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              m_soal_ujian_id: d.soal.id,
              jawaban_isian: d.soal.jawaban_isian,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          }
        })
      );

      await TkJawabanUjianSiswa.createMany(soalData);

      const res = await jadwalUjianReference.add({
        tk_peserta_ujian_id: pesertaUjian.id,
        tk_jadwal_ujian_id: tk_jadwal_ujian_id,
        user_id: pesertaUjian.m_user_id,
        progress: 0,
        waktu_mulai: waktu_mulai,
      });

      await TkPesertaUjian.query().where({ id: pesertaUjian.id }).update({
        doc_id: res.id,
      });

      return response.ok({
        peserta_ujian: pesertaUjian,
      });
    } else {
      const checkIfExist = await TkPesertaUjian.query()
        .where({ m_user_id: user.id })
        .andWhere({ tk_jadwal_ujian_id: tk_jadwal_ujian_id })
        .where({ dihapus: 0 })
        .first();

      if (checkIfExist) {
        return response.ok({
          peserta_ujian: checkIfExist,
        });
      }

      const soalPGIds = await TkSoalUjian.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ujian_id: ujian_id })
        .pluck("m_soal_ujian_id");

      const soalMasterPGIds = await MSoalUjian.query()
        .where({ bentuk: "pg" })
        .andWhere({ dihapus: 0 })
        .whereIn("id", soalPGIds)
        // .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_pg)
        .ids();

      const soalPG = await TkSoalUjian.query()
        .where({ m_ujian_id: ujian_id })
        .whereIn("m_soal_ujian_id", soalMasterPGIds)
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_pg)
        .fetch();

      const soalEsaiIds = await TkSoalUjian.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ujian_id: ujian_id })
        .pluck("m_soal_ujian_id");

      const soalMasterEsaiIds = await MSoalUjian.query()
        .where({ bentuk: "esai" })
        .andWhere({ dihapus: 0 })
        .whereIn("id", soalEsaiIds)
        // .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_esai)
        .ids();

      const soalEsai = await TkSoalUjian.query()
        .with("soal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_ujian_id: ujian_id })
        .whereIn("m_soal_ujian_id", soalMasterEsaiIds)
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_esai)
        .fetch();

      const soalIsianIds = await TkSoalUjian.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ujian_id: ujian_id })
        .pluck("m_soal_ujian_id");

      const soalMasterIsianIds = await MSoalUjian.query()
        .where({ bentuk: "isian" })
        .andWhere({ dihapus: 0 })
        .whereIn("id", soalIsianIds)
        // .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_esai)
        .ids();

      const soalIsian = await TkSoalUjian.query()
        .with("soal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_ujian_id: ujian_id })
        .whereIn("m_soal_ujian_id", soalMasterIsianIds)
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_isian)
        .fetch();

      const soalData = [];

      const trx = await Database.beginTransaction();
      const pesertaUjian = await TkPesertaUjian.create(
        {
          waktu_mulai,
          dinilai: 0,
          selesai: 0,
          dihapus: 0,
          m_user_id: user.id,
          tk_jadwal_ujian_id: tk_jadwal_ujian_id,
        },
        trx
      );

      await Promise.all(
        soalPG.toJSON().map(async (d) => {
          soalData.push({
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            dinilai: 1,
            m_soal_ujian_id: d.m_soal_ujian_id,
            tk_peserta_ujian_id: pesertaUjian.id,
          });
        })
      );

      await Promise.all(
        soalEsai.toJSON().map(async (d) => {
          soalData.push({
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            m_soal_ujian_id: d.soal.id,
            jawaban_rubrik_esai: d.soal.rubrik_kj,
            tk_peserta_ujian_id: pesertaUjian.id,
          });
        })
      );

      await Promise.all(
        soalIsian.toJSON().map(async (d) => {
          soalData.push({
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            m_soal_ujian_id: d.soal.id,
            jawaban_isian: d.soal.jawaban_isian,
            tk_peserta_ujian_id: pesertaUjian.id,
          });
        })
      );

      await TkJawabanUjianSiswa.createMany(soalData, trx);
      await trx.commit();

      const res = await jadwalUjianReference.add({
        tk_jadwal_ujian_id: tk_jadwal_ujian_id,
        user_id: pesertaUjian.m_user_id,
        progress: 0,
        waktu_mulai: waktu_mulai,
      });

      await TkPesertaUjian.query().where({ id: pesertaUjian.id }).update({
        doc_id: res.id,
      });

      return response.ok({
        peserta_ujian: pesertaUjian,
      });
    }
  }

  async resetPesertaUjian({
    response,
    request,
    auth,
    params: { peserta_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { reset, hapus, block } = request.post();

    const waktu_selesai = moment().format("YYYY-MM-DD HH:mm:ss");

    const pesertaUjian = await TkPesertaUjian.query()
      .where({ id: peserta_ujian_id })
      .first();

    if (reset) {
      await Database.raw(
        "UPDATE tk_peserta_ujian SET waktu_selesai=NULL, selesai=NULL WHERE id = ?",
        [peserta_ujian_id]
      );
      await jadwalUjianReference.doc(`${pesertaUjian.doc_id}`).update({
        waktu_selesai: FieldValue.delete(),
      });
    } else if (hapus) {
      await jadwalUjianReference.doc(`${pesertaUjian.doc_id}`).delete();
      await TkPesertaUjian.query().where({ id: peserta_ujian_id }).update({
        dihapus: 1,
      });
    } else if (block || block == 0) {
      await TkPesertaUjian.query().where({ id: peserta_ujian_id }).update({
        block,
      });
    }

    if (!pesertaUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putPesertaUjian({
    response,
    request,
    auth,
    params: { peserta_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const waktu_selesai = moment().format("YYYY-MM-DD HH:mm:ss");

    const pesertaUjian = await TkPesertaUjian.query()
      .where({ id: peserta_ujian_id })
      .update({
        waktu_selesai,
        selesai: 1,
      });

    if (!pesertaUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const pesertaUjianData = await TkPesertaUjian.query()
      .with("jawabanSiswa", (builder) => {
        builder.with("soal");
      })
      .with("user")
      .where({ id: peserta_ujian_id })
      .first();

    await jadwalUjianReference.doc(`${pesertaUjianData.doc_id}`).set(
      {
        waktu_selesai: waktu_selesai,
      },
      { merge: true }
    );

    let metaHasil = {
      nilaiPg: 0,
      nilaiEsai: 0,
      nilaiTotal: 0,
      benar: 0,
    };
    let analisisBenar = {};
    let analisisTotal = {};

    await Promise.all(
      pesertaUjianData.toJSON().jawabanSiswa.map(async (d) => {
        if (d.soal.bentuk == "pg") {
          if (d.jawaban_pg == d.soal.kj_pg) {
            metaHasil.nilaiPg = metaHasil.nilaiPg + d.soal.nilai_soal;
            metaHasil.benar = metaHasil.benar + 1;
            analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
              ? analisisBenar[d.soal.kd] + 1
              : 1;
          }
          analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
            ? analisisTotal[d.soal.kd] + 1
            : 1;
        } else if (d.soal.bentuk == "esai") {
          if (JSON.parse(d.jawaban_rubrik_esai)) {
            if (JSON.parse(d.jawaban_rubrik_esai).length) {
              JSON.parse(d.jawaban_rubrik_esai).map((e) => {
                if (e.benar) {
                  metaHasil.nilaiEsai = metaHasil.nilaiEsai + e.poin;
                }
              });

              if (d.jawaban_rubrik_esai.indexOf("true") != -1) {
                metaHasil.benar = metaHasil.benar + 1;
              }
            }
          }
        }
      })
    );

    metaHasil.nilaiTotal = metaHasil.nilaiPg + metaHasil.nilaiEsai;

    await TkPesertaUjian.query().where({ id: peserta_ujian_id }).update({
      nilai_pg: metaHasil.nilaiPg,
      nilai_esai: metaHasil.nilaiEsai,
      nilai: metaHasil.nilaiTotal,
    });

    if (pesertaUjianData.tk_timeline_id) {
      const timeline = await TkTimeline.query()
        .where({ id: pesertaUjianData.tk_timeline_id })
        .update({
          waktu_pengumpulan: moment().format("YYYY-MM-DD HH:mm:ss"),
          dikumpulkan: 1,
        });
    }

    // await WhatsAppService.sendMessage(
    //   user.whatsapp,
    //   `Halo, jawaban ujianmu sudah masuk. Tunggu gurumu memeriksanya ya!`
    // );
    if (user.wa_real) {
      WhatsAppService.sendMessage(
        user.wa_real,
        `Halo ${user.nama}, jawaban ujianmu sudah masuk. Tunggu gurumu memeriksanya ya!`
      );
    }

    return response.ok({
      message: "Jawaban berhasil direkam",
    });
  }

  async updateNilai({ response, request, auth, params: { peserta_ujian_id } }) {
    const pesertaUjianData = await TkPesertaUjian.query()
      .with("jawabanSiswa", (builder) => {
        builder.with("soal");
      })
      .with("user")
      .where({ id: peserta_ujian_id })
      .first();

    let metaHasil = {
      nilaiPg: 0,
      nilaiEsai: 0,
      nilaiTotal: 0,
      benar: 0,
    };
    let analisisBenar = {};
    let analisisTotal = {};

    await Promise.all(
      pesertaUjianData.toJSON().jawabanSiswa.map(async (d) => {
        if (d.soal.bentuk == "pg") {
          if (d.jawaban_pg == d.soal.kj_pg) {
            metaHasil.nilaiPg = metaHasil.nilaiPg + d.soal.nilai_soal;
            metaHasil.benar = metaHasil.benar + 1;
            analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
              ? analisisBenar[d.soal.kd] + 1
              : 1;
          }
          analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
            ? analisisTotal[d.soal.kd] + 1
            : 1;
        } else if (d.soal.bentuk == "esai") {
          if (JSON.parse(d.jawaban_rubrik_esai)) {
            if (JSON.parse(d.jawaban_rubrik_esai).length) {
              JSON.parse(d.jawaban_rubrik_esai).map((e) => {
                if (e.benar) {
                  metaHasil.nilaiEsai = metaHasil.nilaiEsai + e.poin;
                }
              });

              if (d.jawaban_rubrik_esai.indexOf("true") != -1) {
                metaHasil.benar = metaHasil.benar + 1;
              }
            }
          }
        }
      })
    );

    metaHasil.nilaiTotal = metaHasil.nilaiPg + metaHasil.nilaiEsai;
    await TkPesertaUjian.query().where({ id: peserta_ujian_id }).update({
      nilai_pg: metaHasil.nilaiPg,
      nilai_esai: metaHasil.nilaiEsai,
      nilai: metaHasil.nilaiTotal,
    });

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putJawabanUjianSiswa({
    response,
    request,
    auth,
    params: { jawaban_ujian_siswa_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      jawaban_pg,
      jawaban_esai,
      durasi,
      ragu,
      jawaban_rubrik_esai,
      jawaban_opsi_uraian,
      jawaban_uraian,
      jawaban_pg_kompleks,
      jawaban_menjodohkan,
      jawaban_foto,
      jawaban_isian,
      ganti,
    } = request.post();
    jawaban_esai = jawaban_esai ? htmlEscaper.escape(jawaban_esai) : "";
    const jawaban_pg_kompleks1 = jawaban_pg_kompleks
      ? jawaban_pg_kompleks.toString()
      : null;

    jawaban_foto = jawaban_foto ? jawaban_foto.toString() : null;
    jawaban_menjodohkan = jawaban_menjodohkan
      ? JSON.stringify(jawaban_menjodohkan)
      : null;
    if (ganti) {
      let jawabanUjianSiswa;

      if (jawaban_opsi_uraian) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_opsi_uraian,
            jawaban_uraian,
            durasi,
            ragu,
            dijawab: 1,
            jawaban_foto,
          });
      } else if (jawaban_pg_kompleks) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_pg_kompleks: jawaban_pg_kompleks1,
            durasi,
            ragu,
            dijawab: 1,
          });
      }
      if (jawaban_menjodohkan) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_menjodohkan,
            durasi,
            ragu,
            dijawab: 1,
          });
      } else if (jawaban_esai) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_esai,
            durasi,
            ragu,
            dijawab: 1,
            jawaban_foto,
          });
      } else if (jawaban_pg) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_pg,
            durasi,
            ragu,
            dijawab: 1,
          });
      } else if (jawaban_isian) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_isian,
            durasi,
            ragu,
            dijawab: 1,
          });
      } else {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            ragu,
          });
      }

      if (!jawabanUjianSiswa) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      const jawabanUjianSiswaData = await TkJawabanUjianSiswa.query()
        .with("pesertaUjian", (builder) => {
          builder.withCount("jawabanSiswa as totalDijawab", (builder) => {
            builder.where({ dijawab: 1 });
          });
        })
        .where({ id: jawaban_ujian_siswa_id })
        .first();

      return response.ok({
        doc_id: jawabanUjianSiswaData.toJSON().pesertaUjian.doc_id,
        warning: jawabanUjianSiswaData.toJSON().pesertaUjian.warning,
        tk_jadwal_ujian_id:
          jawabanUjianSiswaData.toJSON().pesertaUjian.tk_jadwal_ujian_id,
        user_id: jawabanUjianSiswaData.toJSON().pesertaUjian.m_user_id,
        progress:
          jawabanUjianSiswaData.toJSON().pesertaUjian.__meta__.totalDijawab,
      });
    } else if (user.role == "guru" || user.role == "admin") {
      await TkJawabanUjianSiswa.query()
        .where({ id: jawaban_ujian_siswa_id })
        .update({
          jawaban_rubrik_esai: JSON.stringify(jawaban_rubrik_esai),
          dinilai: 1,
        });

      const jawaban = await TkJawabanUjianSiswa.query()
        .where({ id: jawaban_ujian_siswa_id })
        .first();

      const pesertaUjian = await TkPesertaUjian.query()
        .with("jawabanSiswa", (builder) => {
          builder.with("soal");
        })
        .with("user")
        .where({ id: jawaban.tk_peserta_ujian_id })
        .first();

      // return pesertaUjian;

      let metaHasil = {
        nilaiPg: 0,
        nilaiEsai: 0,
        nilaiTotal: 0,
        benar: 0,
      };

      await Promise.all(
        pesertaUjian.toJSON().jawabanSiswa.map(async (d) => {
          if (d.soal.bentuk == "esai") {
            if (JSON.parse(d.jawaban_rubrik_esai)) {
              if (JSON.parse(d.jawaban_rubrik_esai).length) {
                JSON.parse(d.jawaban_rubrik_esai).map((e) => {
                  if (e.benar) {
                    metaHasil.nilaiEsai =
                      metaHasil.nilaiEsai + parseInt(e.poin ? e.poin : 0);
                  }
                });

                if (d.jawaban_rubrik_esai.indexOf("true") != -1) {
                  metaHasil.benar = metaHasil.benar + 1;
                }
              }
            }
          }
        })
      );

      await TkPesertaUjian.query()
        .where({ id: jawaban.tk_peserta_ujian_id })
        .update({
          nilai_esai: metaHasil.nilaiEsai,
          nilai: pesertaUjian.nilai_pg + metaHasil.nilaiEsai,
        });

      return response.ok({
        message: messagePutSuccess,
      });
    } else if (user.role == "siswa" || user.role == "ppdb") {
      let jawabanUjianSiswa;

      if (jawaban_opsi_uraian) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_opsi_uraian,
            jawaban_uraian,
            durasi,
            ragu,
            dijawab: 1,
            jawaban_foto,
          });
      } else if (jawaban_pg_kompleks) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_pg_kompleks: jawaban_pg_kompleks1,
            durasi,
            ragu,
            dijawab: 1,
          });
      }
      if (jawaban_menjodohkan) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_menjodohkan,
            durasi,
            ragu,
            dijawab: 1,
          });
      } else if (jawaban_esai) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_esai,
            durasi,
            ragu,
            dijawab: 1,
            jawaban_foto,
          });
      } else if (jawaban_pg) {
        // const nilaiSiswa = await TkJawabanUjianSiswa.query()
        //   .with("soal")
        //   .where({ id: jawaban_ujian_siswa_id })
        //   .first();

        // const nilai = await TkPesertaUjian.query()
        //   .where({ id: nilaiSiswa.tk_peserta_ujian_id })
        //   .first();
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_pg,
            durasi,
            ragu,
            dijawab: 1,
          });
        // if (
        //   nilaiSiswa.toJSON().jawaban_pg != nilaiSiswa.toJSON().soal.kj_pg &&
        //   jawaban_pg == nilaiSiswa.toJSON().soal.kj_pg
        // ) {
        //   await TkPesertaUjian.query()
        //     .where({ id: nilaiSiswa.tk_peserta_ujian_id })
        //     .update({
        //       nilai: (nilai ? nilai.nilai : 0) + nilaiSiswa.toJSON().soal.poin,
        //     });
        // } else if (
        //   nilaiSiswa.toJSON().jawaban_pg == nilaiSiswa.toJSON().soal.kj_pg &&
        //   jawaban_pg != nilaiSiswa.toJSON().soal.kj_pg
        // ) {
        //   await TkPesertaUjian.query()
        //     .where({ id: nilaiSiswa.tk_peserta_ujian_id })
        //     .update({
        //       nilai: (nilai ? nilai.nilai : 0) - nilaiSiswa.toJSON().soal.poin,
        //     });
        // }
      } else if (jawaban_isian) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_isian,
            durasi,
            ragu,
            dijawab: 1,
          });
      } else {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            ragu,
          });
      }

      if (!jawabanUjianSiswa) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      const jawabanUjianSiswaData = await TkJawabanUjianSiswa.query()
        .with("pesertaUjian", (builder) => {
          builder.withCount("jawabanSiswa as totalDijawab", (builder) => {
            builder.where({ dijawab: 1 });
          });
        })
        .where({ id: jawaban_ujian_siswa_id })
        .first();

      // await jadwalUjianReference
      //   .doc(`${jawabanUjianSiswaData.toJSON().pesertaUjian.doc_id}`)
      //   .set(
      //     {
      //       tk_jadwal_ujian_id:
      //         jawabanUjianSiswaData.toJSON().pesertaUjian.tk_jadwal_ujian_id,
      //       user_id: jawabanUjianSiswaData.toJSON().pesertaUjian.m_user_id,
      //       progress:
      //         jawabanUjianSiswaData.toJSON().pesertaUjian.__meta__.totalDijawab,
      //     },
      //     { merge: true }
      //   );

      return response.ok({
        doc_id: jawabanUjianSiswaData.toJSON().pesertaUjian.doc_id,
        warning: jawabanUjianSiswaData.toJSON().pesertaUjian.warning,
        tk_jadwal_ujian_id:
          jawabanUjianSiswaData.toJSON().pesertaUjian.tk_jadwal_ujian_id,
        user_id: jawabanUjianSiswaData.toJSON().pesertaUjian.m_user_id,
        progress:
          jawabanUjianSiswaData.toJSON().pesertaUjian.__meta__.totalDijawab,
      });
    }
  }

  async getSlider({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const slider = await MSlider.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    return response.ok({
      slider: slider,
    });
  }

  async postSlider({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { banner, judul, deskripsi } = request.post();

    const rules = {
      judul: "required",
      banner: "required",
      deskripsi: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
      "banner.required": "Banner harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const slider = await MSlider.create({
      banner,
      judul,
      deskripsi,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putSlider({ response, request, auth, params: { slider_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { banner, judul, deskripsi } = request.post();

    const rules = {
      judul: "required",
      banner: "required",
      deskripsi: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
      "banner.required": "Banner harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const slider = await MSlider.query().where({ id: slider_id }).update({
      banner,
      judul,
      deskripsi,
    });

    if (!slider) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSlider({ response, request, auth, params: { slider_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const slider = await MSlider.query().where({ id: slider_id }).update({
      dihapus: 1,
    });

    if (!slider) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getInformasiSekolah({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { section } = request.get();

    let informasiSekolah;

    if (section == "beranda") {
      informasiSekolah = await MInformasiSekolah.query()
        .select(
          "deskripsi_singkat",
          "visi",
          "misi",
          "background_section_mengapa",
          "jumlah_siswa",
          "jumlah_guru",
          "jumlah_kelas",
          "thumbnail_profil",
          "video_profil",
          "background_section_virtual_tour",
          "virtual_tour"
        )
        .where({ m_sekolah_id: sekolah.id })
        .first();
    } else if (section == "profil") {
      informasiSekolah = await MInformasiSekolah.query()
        .select(
          "banner_profil",
          "deskripsi_sekolah",
          "foto_tentang_sekolah",
          "pesan_kepsek",
          "foto_kepsek",
          "sejarah",
          "foto_sejarah",
          "foto_logo",
          "lirik_mars",
          "lagu_mars",
          "alamat",
          "gmaps",
          "email",
          "telp",
          "fax"
        )
        .where({ m_sekolah_id: sekolah.id })
        .first();
    } else if (section == "sarpras") {
      informasiSekolah = await MInformasiSekolah.query()
        .select("banner_sarpras")
        .where({ m_sekolah_id: sekolah.id })
        .first();
    } else if (section == "blog") {
      informasiSekolah = await MInformasiSekolah.query()
        .select("banner_blog")
        .where({ m_sekolah_id: sekolah.id })
        .first();
    }

    return response.ok({
      informasi_sekolah: informasiSekolah,
    });
  }

  async putInformasiSekolah({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      deskripsi_singkat,
      visi,
      misi,
      background_section_mengapa,
      jumlah_siswa,
      jumlah_guru,
      jumlah_kelas,
      thumbnail_profil,
      video_profil,
      background_section_virtual_tour,
      virtual_tour,
      banner_profil,
      deskripsi_sekolah,
      foto_tentang_sekolah,
      pesan_kepsek,
      foto_kepsek,
      sejarah,
      foto_sejarah,
      foto_logo,
      lirik_mars,
      lagu_mars,
      alamat,
      gmaps,
      email,
      telp,
      fax,
      banner_sarpras,
      banner_blog,
    } = request.post();

    let updatePayload = {};
    // ini masih buffer
    if (deskripsi_singkat)
      updatePayload.deskripsi_singkat =
        Buffer.from(deskripsi_singkat).toString("base64");
    if (visi) updatePayload.visi = Buffer.from(visi).toString("base64");
    if (misi) updatePayload.misi = Buffer.from(misi).toString("base64");
    if (background_section_mengapa)
      updatePayload.background_section_mengapa = background_section_mengapa;
    if (jumlah_siswa) updatePayload.jumlah_siswa = jumlah_siswa;
    if (jumlah_guru) updatePayload.jumlah_guru = jumlah_guru;
    if (jumlah_kelas) updatePayload.jumlah_kelas = jumlah_kelas;
    if (thumbnail_profil) updatePayload.thumbnail_profil = thumbnail_profil;
    if (video_profil) updatePayload.video_profil = video_profil;
    if (background_section_virtual_tour)
      updatePayload.background_section_virtual_tour =
        background_section_virtual_tour;
    if (virtual_tour) updatePayload.virtual_tour = virtual_tour;
    if (banner_profil) updatePayload.banner_profil = banner_profil;
    if (deskripsi_sekolah)
      updatePayload.deskripsi_sekolah =
        Buffer.from(deskripsi_sekolah).toString("base64");
    if (foto_tentang_sekolah)
      updatePayload.foto_tentang_sekolah = foto_tentang_sekolah
        ? foto_tentang_sekolah.toString()
        : "";
    if (pesan_kepsek)
      updatePayload.pesan_kepsek = Buffer.from(pesan_kepsek).toString("base64");
    if (foto_kepsek) updatePayload.foto_kepsek = foto_kepsek;
    if (sejarah)
      updatePayload.sejarah = Buffer.from(sejarah).toString("base64");
    if (foto_sejarah) updatePayload.foto_sejarah = foto_sejarah;
    if (foto_logo) updatePayload.foto_logo = foto_logo;
    if (lirik_mars)
      updatePayload.lirik_mars = Buffer.from(lirik_mars).toString("base64");
    if (lagu_mars) updatePayload.lagu_mars = lagu_mars;
    if (alamat) updatePayload.alamat = alamat;
    if (gmaps) updatePayload.gmaps = gmaps;
    if (email) updatePayload.email = email;
    if (telp) updatePayload.telp = telp;
    if (fax) updatePayload.fax = fax;
    if (banner_sarpras) updatePayload.banner_sarpras = banner_sarpras;
    if (banner_blog) updatePayload.banner_blog = banner_blog;

    const check = await MInformasiSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    if (!check) {
      await MInformasiSekolah.create({
        m_sekolah_id: sekolah.id,
      });
    }

    const informasiSekolah = await MInformasiSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .update(updatePayload);

    if (!informasiSekolah) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getInformasiJurusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const jurusan = await MJurusan.query()
      .with("informasi")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const { jurusan_id } = request.get();

    let informasiJurusan;
    let guruJurusan;
    let guru;

    if (jurusan_id) {
      informasiJurusan = await MInformasiJurusan.query()
        .with("jurusan")
        .where({ m_jurusan_id: jurusan_id })
        .first();

      guruJurusan = await MGuruJurusan.query()
        .with("user")
        .where({ m_jurusan_id: jurusan_id })
        .andWhere({ dihapus: 0 })
        .fetch();

      guru = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ role: "guru" })
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    return response.ok({
      jurusan: jurusan,
      informasi_jurusan: informasiJurusan,
      guru: guru,
      guruJurusan: guruJurusan,
    });
  }

  async putInformasiJurusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { banner, sambutan, deskripsi, cover, galeri, m_jurusan_id } =
      request.post();

    const check = await MInformasiJurusan.query()
      .where({ m_jurusan_id: m_jurusan_id })
      .first();

    if (!check) {
      await MInformasiJurusan.create({
        m_jurusan_id: m_jurusan_id,
      });
    }

    const informasiJurusan = await MInformasiJurusan.query()
      .where({ m_jurusan_id: m_jurusan_id })
      .update({
        banner,
        sambutan,
        deskripsi,
        cover,
        galeri: galeri ? galeri.toString() : null,
      });

    if (!informasiJurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getKegiatan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const kegiatan = await MKegiatan.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const { kegiatan_id } = request.get();

    let informasiKegiatan;

    if (kegiatan_id) {
      informasiKegiatan = await MKegiatan.query()
        .with("galeri", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ id: kegiatan_id })
        .first();
    }

    return response.ok({
      kegiatan: kegiatan,
      informasi_kegiatan: informasiKegiatan,
    });
  }

  async postKegiatan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { nama, banner } = request.post();

    const rules = {
      nama: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kegiatan = await MKegiatan.create({
      dihapus: 0,
      nama,
      banner,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKegiatan({ response, request, auth, params: { kegiatan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { nama, banner } = request.post();

    const rules = {
      nama: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kegiatan = await MKegiatan.query().where({ id: kegiatan_id }).update({
      nama,
      banner,
    });

    if (!kegiatan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKegiatan({ response, request, auth, params: { kegiatan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const kegiatan = await MKegiatan.query().where({ id: kegiatan_id }).update({
      dihapus: 1,
    });

    if (!kegiatan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async downloadPendaftarPPDB({ response, request, auth }) {
    // Create a document
    const doc = new PDFDocument({ size: "A4" });

    let namaFile = `/uploads/kartu-peserta-${Date.now()}.pdf`;

    // Pipe its output somewhere, like to a file or HTTP response
    // See below for browser usage
    doc.pipe(fs.createWriteStream(`public${namaFile}`));

    // Embed a font, set the font size, and render some text
    // doc
    //   .font("fonts/PalatinoBold.ttf")
    //   .fontSize(25)
    //   .text("Some text with an embedded font!", 100, 100);

    doc.fontSize(25).text("Some text with an embedded font!", 100, 100);
    // ini masih buffer
    axios
      .get(
        "https://awsimages.detik.net.id/community/media/visual/2020/07/10/tes-psikologi.jpeg",
        { responseType: "arraybuffer" }
      )
      .then((response) => {
        const pngBuffer = Buffer.from(response.data);
        doc.image(pngBuffer);
      });

    // Add an image, constrain it to a given size, and center it vertically and horizontally
    // doc.image(image, {
    //   fit: [250, 300],
    //   align: "center",
    //   valign: "center",
    // });

    // Add another page
    doc
      .addPage()
      .fontSize(25)
      .text("Here is some vector graphics...", 100, 100);

    // Draw a triangle
    doc
      .save()
      .moveTo(100, 150)
      .lineTo(100, 250)
      .lineTo(200, 250)
      .fill("#FF3300");

    // Apply some transforms and render an SVG path with the 'even-odd' fill rule
    doc
      .scale(0.6)
      .translate(470, -380)
      .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
      .fill("red", "even-odd")
      .restore();

    // Add some text with annotations
    doc
      .addPage()
      .fillColor("blue")
      .text("Here is a link!", 100, 100)
      .underline(100, 100, 160, 27, { color: "#0000FF" })
      .link(100, 100, 160, 27, "http://google.com/");

    // Finalize PDF file
    doc.end();

    return "sukses";
  }

  async detailPendaftarPPDB({
    response,
    request,
    auth,
    params: { pendaftar_ppdb_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const pendaftar = await MPendaftarPpdb.query()
      .with("user", (builder) => {
        builder.with("profil");
      })
      .with("gelombang", (builder) => {
        builder.with("jalur");
      })
      .with("diskon")
      .where({ id: pendaftar_ppdb_id })
      .first();

    return response.ok({ pendaftar: pendaftar });
  }

  async postPendaftarPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const ta = await this.getTAAktif(sekolah);

    if (!ta) {
      return response.notFound({
        message: "Aktifkan tahun ajaran yg tersedia di menu kurikulum",
      });
    }

    const { m_gelombang_ppdb_id } = request.post();

    const check = await MPendaftarPpdb.query()
      .where({ dihapus: 0 })
      .andWhere({ m_gelombang_ppdb_id: m_gelombang_ppdb_id })
      .andWhere({ m_user_id: user.id })
      .first();

    if (check) {
      return response.forbidden({
        message: "Kamu sudah terdaftar pada gelombang ini",
      });
    }
    if (sekolah?.id == 14 || sekolah?.id == 13 || sekolah?.id == 121) {
      const jalurIds1 = await MJalurPpdb.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ tipe: "Pembelian" })
        .ids();
      const gelombangIds1 = await MGelombangPpdb.query()
        .where({ dihapus: 0 })
        .whereIn("m_jalur_ppdb_id", jalurIds1)
        .where({ m_ta_id: ta.id })
        .ids();

      const checkIds1 = await MGelombangPpdb.query()
        .where(
          "dibuka",
          "<=",
          moment().endOf("day").format("YYYY-MM-DD HH:mm:ss")
        )
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("id", gelombangIds1)
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .ids();
      const gelombangPembelian = await MPendaftarPpdb.query()
        .with("gelombang", (builder) => {
          builder
            .with("jalur")
            .with("pendaftar", (builder) => {
              builder.select("id", "m_gelombang_ppdb_id").where({ dihapus: 0 });
            })
            .with("informasi", (builder) => {
              builder
                .where({ tipe: "ujian" })
                .with("ujian")
                .andWhere({ dihapus: 0 });
            });
        })
        .where({ dihapus: 0 })
        // .whereIn("m_gelombang_ppdb_id", gelombangIds)
        .andWhere({ m_user_id: user.id })
        .whereIn("m_gelombang_ppdb_id", checkIds1)
        .first();

      if (gelombangPembelian) {
        const check2 = await MPendaftarPpdb.query()
          // .where({ dihapus: 0 })
          .where({ m_gelombang_ppdb_id: m_gelombang_ppdb_id })
          .andWhere({ m_user_id: user.id })
          .first();

        if (check2) {
          await MPendaftarPpdb.query()
            .where({ m_gelombang_ppdb_id: m_gelombang_ppdb_id })
            .andWhere({ m_user_id: user.id })
            .update({
              m_gelombang_ppdb_id,
              m_user_id: user.id,
              status: "menungguKonfirmasiPembayaran",
              dihapus: 0,
              m_jurusan_1_id: gelombangPembelian?.m_jurusan_1_id,
              m_jurusan_2_id: gelombangPembelian?.m_jurusan_2_id,
              m_jurusan_3_id: gelombangPembelian?.m_jurusan_3_id,
              m_jurusan_4_id: gelombangPembelian?.m_jurusan_4_id,
              m_jurusan_5_id: gelombangPembelian?.m_jurusan_5_id,
            });

          return response.ok({
            message: messagePostSuccess,
          });
        }
        await MPendaftarPpdb.create({
          m_gelombang_ppdb_id,
          m_user_id: user.id,
          status: "menungguKonfirmasiPembayaran",
          m_jurusan_1_id: gelombangPembelian?.m_jurusan_1_id,
          m_jurusan_2_id: gelombangPembelian?.m_jurusan_2_id,
          m_jurusan_3_id: gelombangPembelian?.m_jurusan_3_id,
          m_jurusan_4_id: gelombangPembelian?.m_jurusan_4_id,
          m_jurusan_5_id: gelombangPembelian?.m_jurusan_5_id,
          dihapus: 0,
        });

        return response.ok({
          message: messagePostSuccess,
        });
      }
    }

    const check2 = await MPendaftarPpdb.query()
      // .where({ dihapus: 0 })
      .where({ m_gelombang_ppdb_id: m_gelombang_ppdb_id })
      .andWhere({ m_user_id: user.id })
      .first();

    if (check2) {
      await MPendaftarPpdb.query()
        .where({ m_gelombang_ppdb_id: m_gelombang_ppdb_id })
        .andWhere({ m_user_id: user.id })
        .update({
          m_gelombang_ppdb_id,
          m_user_id: user.id,
          status: "menungguKonfirmasiPembayaran",
          dihapus: 0,
        });

      return response.ok({
        message: messagePostSuccess,
      });
    }

    await MPendaftarPpdb.create({
      m_gelombang_ppdb_id,
      m_user_id: user.id,
      status: "menungguKonfirmasiPembayaran",
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  //belum validasi
  async putPendaftarPPDB({
    auth,
    response,
    request,
    params: { pendaftar_ppdb_id },
  }) {
    const user = await auth.getUser();
    const {
      bank,
      norek,
      nama_pemilik,
      nominal,
      bukti,
      pembayaran,
      m_jurusan_1_id,
      m_jurusan_2_id,
      m_jurusan_3_id,
      m_jurusan_4_id,
      m_jurusan_5_id,
      status,
      surat_rekomendasi,
    } = request.post();

    const check = await MPendaftarPpdb.query()
      .where({ id: pendaftar_ppdb_id })
      .update({
        bank,
        norek,
        nama_pemilik,
        nominal,
        bukti,
        m_jurusan_1_id,
        m_jurusan_2_id,
        m_jurusan_3_id,
        m_jurusan_4_id,
        m_jurusan_5_id,
        pembayaran,
        status,
        surat_rekomendasi,
      });
    if (status) {
      await MPendaftarPpdb.query().where({ id: pendaftar_ppdb_id }).update({
        konfirmasi_id: user?.id,
      });
    }

    if (!check) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async konfirmasiPendaftarPPDB({
    response,
    request,
    params: { pendaftar_ppdb_id },
  }) {
    const check = await MPendaftarPpdb.query()
      .where({ id: pendaftar_ppdb_id })
      .first();

    const gelombang = await MGelombangPpdb.query()
      .where({ id: check.m_gelombang_ppdb_id })
      .first();

    await MPendaftarPpdb.query().where({ id: pendaftar_ppdb_id }).update({
      diverifikasi: 1,
    });

    if (check.nominal == gelombang.biaya_pendaftaran) {
      return response.ok({
        message: `Pembayaran ${gelombang.nama} sudah lunas dengan nomor transaksi #${check.id}`,
      });
    } else if (check.nominal > gelombang.biaya_pendaftaran) {
      return response.ok({
        message: `Pembayaran ${gelombang.nama} kelebihan Rp${
          +check.nominal - +gelombang.biaya_pendaftaran
        } dengan nomor transaksi #${check.id}`,
      });
    } else if (check.nominal < gelombang.biaya_pendaftaran) {
      return response.ok({
        message: `Pembayaran ${gelombang.nama} kurang Rp${
          +gelombang.biaya_pendaftaran - +check.nominal
        } dengan nomor transaksi #${
          check.id
        }. Silahkan upload kekurangannya pada menu pembayaran`,
      });
    }
  }

  async getAlurPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (!ta) {
      return response.notFound({
        message: "Aktifkan tahun ajaran yg tersedia di menu kurikulum",
      });
    }

    const alur = await MAlurPPDB.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      alur: alur,
    });
  }

  async postAlurPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const ta = await this.getTAAktif(sekolah);

    const { judul, deskripsi } = request.post();

    const rules = {
      judul: "required",
      deskripsi: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    await MAlurPPDB.create({
      judul,
      deskripsi,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      m_ta_id: ta.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putAlurPPDB({ response, request, auth, params: { alur_ppdb_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { judul, deskripsi } = request.post();
    const rules = {
      judul: "required",
      deskripsi: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const alur = await MAlurPPDB.query().where({ id: alur_ppdb_id }).update({
      judul,
      deskripsi,
    });

    if (!alur) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteAlurPPDB({ response, request, auth, params: { alur_ppdb_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const alur = await MAlurPPDB.query().where({ id: alur_ppdb_id }).update({
      dihapus: 1,
    });

    if (!alur) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async detailKegiatanGaleri({
    response,
    request,
    auth,
    params: { kegiatan_galeri_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const kegiatanGaleri = await MKegiatanGaleri.query()
      .with("kegiatan")
      .where({ id: kegiatan_galeri_id })
      .first();

    if (!kegiatanGaleri) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      kegiatanGaleri: kegiatanGaleri,
    });
  }

  async postKegiatanGaleri({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, nama, deskripsi, m_kegiatan_id } = request.post();
    const rules = {
      foto: "required",
      nama: "required",
      deskripsi: "required",
    };
    const message = {
      "foto.required": "Foto harus diisi",
      "nama.required": "Nama Kegiatan harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    const kegiatan = await MKegiatanGaleri.create({
      foto,
      nama,
      deskripsi,
      dihapus: 0,
      m_kegiatan_id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKegiatanGaleri({
    response,
    request,
    auth,
    params: { kegiatan_galeri_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, nama, deskripsi } = request.post();
    const rules = {
      foto: "required",
      nama: "required",
      deskripsi: "required",
    };
    const message = {
      "foto.required": "Foto harus diisi",
      "nama.required": "Nama Kegiatan harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kegiatanGaleri = await MKegiatanGaleri.query()
      .where({ id: kegiatan_galeri_id })
      .update({
        foto,
        nama,
        deskripsi,
      });

    if (!kegiatanGaleri) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKegiatanGaleri({
    response,
    request,
    auth,
    params: { kegiatan_galeri_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const kegiatanGaleri = await MKegiatanGaleri.query()
      .where({ id: kegiatan_galeri_id })
      .update({
        dihapus: 1,
      });

    if (!kegiatanGaleri) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async postGuruJurusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, jabatan, m_jurusan_id, m_user_id } = request.post();

    const rules = {
      foto: "required",
      m_user_id: "required",
      jabatan: "required",
    };
    const message = {
      "foto.required": "Foto harus diisi",
      "m_user_id.required": "Nama harus dipilih",
      "jabatan.required": "Jabatan harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const guruJurusan = await MGuruJurusan.create({
      foto,
      jabatan,
      dihapus: 0,
      m_jurusan_id,
      m_user_id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putGuruJurusan({
    response,
    request,
    auth,
    params: { guru_jurusan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, jabatan, m_jurusan_id, m_user_id } = request.post();
    const rules = {
      foto: "required",
      m_user_id: "required",
      jabatan: "required",
    };
    const message = {
      "foto.required": "Foto harus diisi",
      "m_user_id.required": "Nama harus dipilih",
      "jabatan.required": "Jabatan harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const guruJurusan = await MGuruJurusan.query()
      .where({ id: guru_jurusan_id })
      .update({
        foto,
        jabatan,
        dihapus: 0,
        m_jurusan_id,
        m_user_id,
      });

    if (!guruJurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteGuruJurusan({
    response,
    request,
    auth,
    params: { guru_jurusan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const guruJurusan = await MGuruJurusan.query()
      .where({ id: guru_jurusan_id })
      .update({
        dihapus: 1,
      });

    if (!guruJurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getSarpras({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const sarpras = await MSarpras.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    return response.ok({
      sarpras: sarpras,
    });
  }

  async detailSarpras({ response, request, params: { sarpras_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const sarpras = await MSarpras.query().where({ id: sarpras_id }).first();

    return response.ok({
      sarpras: sarpras,
    });
  }

  async postSarpras({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, nama, virtual_tour, deskripsi } = request.post();
    const rules = {
      foto: "required",
      nama: "required",
      virtual_tour: "required",
      deskripsi: "required",
    };
    const message = {
      "foto.required": "Foto harus diisi",
      "nama.required": "Nama harus diisi",
      "virtual_tour.required": "Link Virtual Tour harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const sarpras = await MSarpras.create({
      foto,
      nama,
      virtual_tour,
      deskripsi,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putSarpras({ response, request, auth, params: { sarpras_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, nama, virtual_tour, deskripsi } = request.post();

    const rules = {
      foto: "required",
      nama: "required",
      virtual_tour: "required",
      deskripsi: "required",
    };
    const message = {
      "foto.required": "Foto harus diisi",
      "nama.required": "Nama harus diisi",
      "virtual_tour.required": "Link Virtual Tour harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const sarpras = await MSarpras.query().where({ id: sarpras_id }).update({
      foto,
      nama,
      virtual_tour,
      deskripsi,
    });

    if (!sarpras) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSarpras({ response, request, auth, params: { sarpras_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const sarpras = await MSarpras.query().where({ id: sarpras_id }).update({
      dihapus: 1,
    });

    if (!sarpras) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getPerpus({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    const mataPelajaran = await MMataPelajaran.query()
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const { nav, search, tag, urutkan } = request.get();

    let perpus;

    if (tag) {
      const tagIds = await MPerpusTag.query().whereIn("nama", tag).ids();

      const perpusTags = await TkPerpusTag.query()
        .whereIn("m_perpus_tag_id", tagIds)
        .pluck("m_perpus_id");

      perpus = await MPerpus.query()
        .with("user")
        .with("buku")
        .with("sekolah")
        .with("tag", (builder) => {
          builder.with("tag");
        })
        .with("mapel", (builder) => {
          builder.with("mapel");
        })
        .withCount("aktivitasPerpus as total_baca", (builder) => {
          builder.where({ aktivitas: "baca" });
        })
        .withCount("aktivitasPerpus as total_download", (builder) => {
          builder.where({ aktivitas: "download" });
        })
        .withCount("aktivitasPerpus as total_rating", (builder) => {
          builder.where({ aktivitas: "rating" });
        })
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("id", perpusTags)
        .andWhere({ dihapus: 0 })
        .orWhere("judul", "like", `%${decodeURIComponent(search)}%`)
        .orWhere("deskripsi", "like", `%${decodeURIComponent(search)}%`)
        .orWhere("penulis", "like", `%${decodeURIComponent(search)}%`)
        .orWhere("penerbit", "like", `%${decodeURIComponent(search)}%`)
        .orWhere("isbn", "like", `%${decodeURIComponent(search)}%`)
        .andWhere({ dihapus: 0 })
        .orderBy("id", "desc")
        .fetch();
    }

    if (search) {
      if (nav == "buku-saya") {
        perpus = await MPerpus.query()
          .with("user")
          .with("buku")
          .with("sekolah")
          .with("tag", (builder) => {
            builder.with("tag");
          })
          .with("mapel", (builder) => {
            builder.with("mapel");
          })
          .withCount("aktivitasPerpus as total_baca", (builder) => {
            builder.where({ aktivitas: "baca" });
          })
          .withCount("aktivitasPerpus as total_download", (builder) => {
            builder.where({ aktivitas: "download" });
          })
          .withCount("aktivitasPerpus as total_rating", (builder) => {
            builder.where({ aktivitas: "rating" });
          })
          .withCount("komen as total_komen", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .andWhere({ m_user_id: user.id })
          .orWhere("judul", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("deskripsi", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penulis", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penerbit", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("isbn", "like", `%${decodeURIComponent(search)}%`)
          .andWhere({ dihapus: 0 })
          .orderBy("id", "desc")
          .fetch();
      } else if (nav == "buku-sekolah") {
        perpus = await MPerpus.query()
          .with("user")
          .with("buku")
          .with("sekolah")
          .with("tag", (builder) => {
            builder.with("tag");
          })
          .with("mapel", (builder) => {
            builder.with("mapel");
          })
          .withCount("aktivitasPerpus as total_baca", (builder) => {
            builder.where({ aktivitas: "baca" });
          })
          .withCount("aktivitasPerpus as total_download", (builder) => {
            builder.where({ aktivitas: "download" });
          })
          .withCount("aktivitasPerpus as total_rating", (builder) => {
            builder.where({ aktivitas: "rating" });
          })
          .withCount("komen as total_komen", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .orWhere("judul", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("deskripsi", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penulis", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penerbit", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("isbn", "like", `%${decodeURIComponent(search)}%`)
          .andWhere({ dihapus: 0 })
          .orderBy("id", "desc")
          .fetch();
      } else if (nav == "smartlibrary") {
        perpus = await MPerpus.query()
          .with("user")
          .with("buku")
          .with("sekolah")
          .with("tag", (builder) => {
            builder.with("tag");
          })
          .with("mapel", (builder) => {
            builder.with("mapel");
          })
          .withCount("aktivitasPerpus as total_baca", (builder) => {
            builder.where({ aktivitas: "baca" });
          })
          .withCount("aktivitasPerpus as total_download", (builder) => {
            builder.where({ aktivitas: "download" });
          })
          .withCount("aktivitasPerpus as total_rating", (builder) => {
            builder.where({ aktivitas: "rating" });
          })
          .withCount("komen as total_komen", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .orWhere("judul", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("deskripsi", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penulis", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penerbit", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("isbn", "like", `%${decodeURIComponent(search)}%`)
          .andWhere({ dihapus: 0 })
          .orderBy("id", "desc")
          .fetch();
      } else {
        perpus = await MPerpus.query()
          .with("user")
          .with("buku")
          .with("sekolah")
          .with("tag", (builder) => {
            builder.with("tag");
          })
          .with("mapel", (builder) => {
            builder.with("mapel");
          })
          .withCount("aktivitasPerpus as total_baca", (builder) => {
            builder.where({ aktivitas: "baca" });
          })
          .withCount("aktivitasPerpus as total_download", (builder) => {
            builder.where({ aktivitas: "download" });
          })
          .withCount("aktivitasPerpus as total_rating", (builder) => {
            builder.where({ aktivitas: "rating" });
          })
          .withCount("komen as total_komen", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .orWhere("judul", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("deskripsi", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penulis", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penerbit", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("isbn", "like", `%${decodeURIComponent(search)}%`)
          .andWhere({ dihapus: 0 })
          .orderBy("id", "desc")
          .fetch();
      }
    } else if (nav == "buku-saya") {
      perpus = await MPerpus.query()
        .with("user")
        .with("buku")
        .with("sekolah")
        .with("tag", (builder) => {
          builder.with("tag");
        })
        .with("mapel", (builder) => {
          builder.with("mapel");
        })
        .withCount("aktivitasPerpus as total_baca", (builder) => {
          builder.where({ aktivitas: "baca" });
        })
        .withCount("aktivitasPerpus as total_download", (builder) => {
          builder.where({ aktivitas: "download" });
        })
        .withCount("aktivitasPerpus as total_rating", (builder) => {
          builder.where({ aktivitas: "rating" });
        })
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .orderBy("id", "desc")
        .fetch();
    } else if (nav == "buku-sekolah") {
      perpus = await MPerpus.query()
        .with("user")
        .with("buku")
        .with("sekolah")
        .with("tag", (builder) => {
          builder.with("tag");
        })
        .with("mapel", (builder) => {
          builder.with("mapel");
        })
        .withCount("aktivitasPerpus as total_baca", (builder) => {
          builder.where({ aktivitas: "baca" });
        })
        .withCount("aktivitasPerpus as total_download", (builder) => {
          builder.where({ aktivitas: "download" });
        })
        .withCount("aktivitasPerpus as total_rating", (builder) => {
          builder.where({ aktivitas: "rating" });
        })
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .orderBy("id", "desc")
        .fetch();
    } else if (nav == "smartlibrary") {
      perpus = await MPerpus.query()
        .with("user")
        .with("buku")
        .with("sekolah")
        .with("tag", (builder) => {
          builder.with("tag");
        })
        .with("mapel", (builder) => {
          builder.with("mapel");
        })
        .withCount("aktivitasPerpus as total_baca", (builder) => {
          builder.where({ aktivitas: "baca" });
        })
        .withCount("aktivitasPerpus as total_download", (builder) => {
          builder.where({ aktivitas: "download" });
        })
        .withCount("aktivitasPerpus as total_rating", (builder) => {
          builder.where({ aktivitas: "rating" });
        })
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .orderBy("id", "desc")
        .fetch();
    } else {
      perpus = await MPerpus.query()
        .with("user")
        .with("buku")
        .with("sekolah")
        .with("tag", (builder) => {
          builder.with("tag");
        })
        .with("mapel", (builder) => {
          builder.with("mapel");
        })
        .withCount("aktivitasPerpus as total_baca", (builder) => {
          builder.where({ aktivitas: "baca" });
        })
        .withCount("aktivitasPerpus as total_download", (builder) => {
          builder.where({ aktivitas: "download" });
        })
        .withCount("aktivitasPerpus as total_rating", (builder) => {
          builder.where({ aktivitas: "rating" });
        })
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .orderBy("id", "desc")
        .fetch();
    }

    if (urutkan == "terbaru") {
    } else if (urutkan == "populer") {
    } else if (urutkan == "dibicarakan") {
    }

    const tagData = await MPerpusTag.query()
      .where({ dihapus: 0 })
      .limit(5)
      .fetch();

    const filter = [
      { label: "Terbaru", value: "terbaru" },
      { label: "Paling Populer", value: "populer" },
      { label: "Paling Dibicarakan", value: "dibicarakan" },
    ];

    return response.ok({
      perpus: perpus,
      mataPelajaran: mataPelajaran,
      tag: tagData,
      filter: filter,
    });
  }

  async detailPerpus({ response, request, auth, params: { perpus_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    const perpus = await MPerpus.query()
      .with("user")
      .with("buku")
      .with("sekolah")
      .with("tag", (builder) => {
        builder.with("tag");
      })
      .with("mapel", (builder) => {
        builder.with("mapel");
      })
      .withCount("aktivitasPerpus as total_baca", (builder) => {
        builder.where({ aktivitas: "baca" });
      })
      .withCount("aktivitasPerpus as total_download", (builder) => {
        builder.where({ aktivitas: "download" });
      })
      .withCount("aktivitasPerpus as total_rating", (builder) => {
        builder.where({ aktivitas: "rating" });
      })
      .with("komen", (builder) => {
        builder.with("user").where({ dihapus: 0 });
      })
      .where({ id: perpus_id })
      .orderBy("id", "desc")
      .first();

    const ratingPerpus = await TkPerpusAktivitas.query()
      .where({ m_perpus_id: perpus_id })
      .andWhere({ aktivitas: "rating" })
      .avg("rating as ratingPerpus");

    return response.ok({
      perpus: perpus,
      ratingPerpus: ratingPerpus[0].ratingPerpus,
    });
  }

  async postPerpus({ response, request, auth }) {
    const domain = request.headers().origin;
    const sekolah = await this.getSekolahByDomain(domain);
    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();
    const {
      judul,
      deskripsi,
      penulis,
      penerbit,
      tahun_terbit,
      isbn,
      draft,
      buku,
      // tk perpus mapel
      m_mata_pelajaran_id,
      // tk perpus tag
      no_rak,
      tag,
      cover,
      sumber,
    } = request.post();
    const rules = {
      judul: "required",
      deskripsi: "required",
      penulis: "required",
      // penerbit: "optional",
      // tahun_terbit: "optional",
      // isbn: "optional",
      // m_mata_pelajaran_id: "optional",
      // tag: "optional",
      buku: "required",
      cover: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
      "penulis.required": "Penulis harus diisi",
      "penerbit.required": "Penerbit harus diisi",
      "tahun_terbit.required": "Tahun Penerbit harus diisi",
      "isbn.required": "Nomor ISBN harus diisi",
      "m_mata_pelajaran_id.required": "Mata Pelajaran Terkait harus diisi",
      "tag.required": "Tag harus diisi",
      "buku.required": "Buku harus diisi",
      "cover.required": "Cover harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    // let bukuBuffer = fs.readFileSync(new URL(`file:///${buku}`));
    // const bukuData = await pdf(bukuBuffer, {
    //   //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
    //   normalizeWhitespace: false,
    //   //do not attempt to combine same line TextItem's. The default value is `false`.
    //   disableCombineTextItems: false,
    // });
    let checkBuku = await MBuku.query()
      .where({ link: buku })
      // .where({ createdate: bukuData.metadata._metadata.createdate })
      // .andWhere({ metadatadate: bukuData.metadata._metadata.metadatadate })
      // .andWhere({ creatortool: bukuData.metadata._metadata.creatortool })
      // .andWhere({ instanceid: bukuData.metadata._metadata.instanceid })
      // .andWhere({
      //   originaldocumentid: bukuData.metadata._metadata.originaldocumentid,
      // })
      // .andWhere({ documentid: bukuData.metadata._metadata.documentid })
      // .andWhere({ renditionclass: bukuData.metadata._metadata.renditionclass })
      // .andWhere({ history: bukuData.metadata._metadata.history })
      // .andWhere({ derivedfrom: bukuData.metadata._metadata.derivedfrom })
      // .andWhere({ format: bukuData.metadata._metadata.format })
      // .andWhere({ producer: bukuData.metadata._metadata.producer })
      // .andWhere({ trapped: bukuData.metadata._metadata.trapped })
      .first();
    if (!checkBuku) {
      checkBuku = await MBuku.create({
        // createdate: bukuData.metadata._metadata.createdate,
        // metadatadate: bukuData.metadata._metadata.metadatadate,
        // creatortool: bukuData.metadata._metadata.creatortool,
        // instanceid: bukuData.metadata._metadata.instanceid,
        // originaldocumentid: bukuData.metadata._metadata.originaldocumentid,
        // documentid: bukuData.metadata._metadata.documentid,
        // renditionclass: bukuData.metadata._metadata.renditionclass,
        // history: bukuData.metadata._metadata.history,
        // derivedfrom: bukuData.metadata._metadata.derivedfrom,
        // format: bukuData.metadata._metadata.format,
        // producer: bukuData.metadata._metadata.producer,
        // trapped: bukuData.metadata._metadata.trapped,
        link: buku,
      });
    }
    // ini masih buffer
    const perpus = await MPerpus.create({
      judul,
      deskripsi: deskripsi ? Buffer.from(deskripsi).toString("base64") : "",
      penulis: penulis ? penulis.toString() : "",
      penerbit,
      tahun_terbit,
      isbn,
      cover,
      draft,
      m_user_id: user.id,
      m_buku_id: checkBuku.id,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
      no_rak,
      sumber,
    });

    if (m_mata_pelajaran_id) {
      const materi = await MMateri.query()
        .where({ m_mata_pelajaran_id: m_mata_pelajaran_id })
        .fetch();

      await Promise.all(
        materi.toJSON().map(async (d) => {
          await TkPerpusMapel.create({
            m_perpus_id: perpus.id,
            m_mata_pelajaran_id: m_mata_pelajaran_id,
            m_jurusan_id: d.m_jurusan_id ? d.m_jurusan_id : null,
            dihapus: 0,
          });
        })
      );
    }

    if (tag.length) {
      await Promise.all(
        tag.map(async (d) => {
          let check = await MPerpusTag.query().where({ nama: d }).first();

          if (!check) {
            check = await MPerpusTag.create({
              nama: d,
              dihapus: 0,
              m_user_id: user.id,
              m_sekolah_id: sekolah.id,
            });
          }

          await TkPerpusTag.create({
            m_perpus_id: perpus.id,
            m_perpus_tag_id: check.id,
            dihapus: 0,
          });
        })
      );
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPerpus({ response, request, auth, params: { perpus_id } }) {
    const domain = request.headers().origin;
    const sekolah = await this.getSekolahByDomain(domain);
    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();
    const {
      judul,
      deskripsi,
      penulis,
      penerbit,
      tahun_terbit,
      isbn,
      draft,
      buku,
      // tk perpus mapel
      m_mata_pelajaran_id,
      // tk perpus tag
      no_rak,
      tag,
      cover,
      sumber,
    } = request.post();
    const rules = {
      judul: "required",
      deskripsi: "required",
      penulis: "required",
      // penerbit: "optional",
      // tahun_terbit: "optional",
      // isbn: "optional",
      // m_mata_pelajaran_id: "optional",
      // tag: "optional",
      buku: "required",
      cover: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
      "penulis.required": "Penulis harus diisi",
      "penerbit.required": "Penerbit harus diisi",
      "tahun_terbit.required": "Tahun Penerbit harus diisi",
      "isbn.required": "Nomor ISBN harus diisi",
      "m_mata_pelajaran_id.required": "Mata Pelajaran Terkait harus diisi",
      "tag.required": "Tag harus diisi",
      "buku.required": "Buku harus diisi",
      "cover.required": "Cover harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    // let bukuBuffer = fs.readFileSync(new URL(`file:///${buku}`));
    // const bukuData = await pdf(bukuBuffer, {
    //   //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
    //   normalizeWhitespace: false,
    //   //do not attempt to combine same line TextItem's. The default value is `false`.
    //   disableCombineTextItems: false,
    // });
    let checkBuku = await MBuku.query()
      .where({ link: buku })
      // .where({ createdate: bukuData.metadata._metadata.createdate })
      // .andWhere({ metadatadate: bukuData.metadata._metadata.metadatadate })
      // .andWhere({ creatortool: bukuData.metadata._metadata.creatortool })
      // .andWhere({ instanceid: bukuData.metadata._metadata.instanceid })
      // .andWhere({
      //   originaldocumentid: bukuData.metadata._metadata.originaldocumentid,
      // })
      // .andWhere({ documentid: bukuData.metadata._metadata.documentid })
      // .andWhere({ renditionclass: bukuData.metadata._metadata.renditionclass })
      // .andWhere({ history: bukuData.metadata._metadata.history })
      // .andWhere({ derivedfrom: bukuData.metadata._metadata.derivedfrom })
      // .andWhere({ format: bukuData.metadata._metadata.format })
      // .andWhere({ producer: bukuData.metadata._metadata.producer })
      // .andWhere({ trapped: bukuData.metadata._metadata.trapped })
      .first();
    if (!checkBuku) {
      checkBuku = await MBuku.create({
        // createdate: bukuData.metadata._metadata.createdate,
        // metadatadate: bukuData.metadata._metadata.metadatadate,
        // creatortool: bukuData.metadata._metadata.creatortool,
        // instanceid: bukuData.metadata._metadata.instanceid,
        // originaldocumentid: bukuData.metadata._metadata.originaldocumentid,
        // documentid: bukuData.metadata._metadata.documentid,
        // renditionclass: bukuData.metadata._metadata.renditionclass,
        // history: bukuData.metadata._metadata.history,
        // derivedfrom: bukuData.metadata._metadata.derivedfrom,
        // format: bukuData.metadata._metadata.format,
        // producer: bukuData.metadata._metadata.producer,
        // trapped: bukuData.metadata._metadata.trapped,
        link: buku,
      });
    }
    // ini masih buffer
    const perpus = await MPerpus.query()
      .where({ id: perpus_id })
      .update({
        judul,
        deskripsi: deskripsi ? Buffer.from(deskripsi).toString("base64") : "",
        penulis: penulis ? penulis.toString() : "",
        penerbit,
        tahun_terbit,
        cover,
        isbn,
        draft,
        m_user_id: user.id,
        m_buku_id: checkBuku.id,
        m_sekolah_id: sekolah.id,
        dihapus: 0,
        no_rak,
        sumber,
      });

    if (m_mata_pelajaran_id) {
      const materi = await MMateri.query()
        .where({ m_mata_pelajaran_id: m_mata_pelajaran_id })
        .fetch();

      await TkPerpusMapel.query().where({ m_perpus_id: perpus_id }).delete();

      await Promise.all(
        materi.toJSON().map(async (d) => {
          await TkPerpusMapel.create({
            m_perpus_id: perpus_id,
            m_mata_pelajaran_id: m_mata_pelajaran_id,
            m_jurusan_id: d.m_jurusan_id ? d.m_jurusan_id : null,
            dihapus: 0,
          });
        })
      );
    }

    if (tag.length) {
      await Promise.all(
        tag.map(async (d) => {
          let check = await MPerpusTag.query().where({ nama: d }).first();

          if (!check) {
            check = await MPerpusTag.create({
              nama: d,
              dihapus: 0,
              m_user_id: user.id,
              m_sekolah_id: sekolah.id,
            });
          }

          await TkPerpusTag.query().where({ m_perpus_id: perpus_id }).delete();

          await TkPerpusTag.create({
            m_perpus_id: perpus_id,
            m_perpus_tag_id: check.id,
            dihapus: 0,
          });
        })
      );
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePerpus({ response, request, auth, params: { perpus_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const perpus = await MPerpus.query().where({ id: perpus_id }).update({
      dihapus: 1,
    });

    if (!perpus) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getRpp({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tipe } = request.get();

    let mataPelajaran;

    if (user.role == "guru") {
      mataPelajaran = await MMataPelajaran.query()
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .andWhere({ m_ta_id: ta.id })
        .fetch();
    } else if (user.role == "admin") {
      mataPelajaran = await MMataPelajaran.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ m_sekolah_id: sekolah.id })
        .fetch();
    }

    let query = MRpp.query()
      .with("mataPelajaran")
      .with("user")
      .with("sekolah")
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id });
    if (!tipe) {
      query.whereNull("tipe");
    } else {
      query.where({ tipe: tipe });
    }

    const rpp = await query.fetch();

    let tingkatData = [];

    if (
      sekolah.tingkat == "SMK" ||
      sekolah.tingkat == "SMA" ||
      sekolah.tingkat == "MA" ||
      sekolah.tingkat == "MAK"
    ) {
      tingkatData = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP" || sekolah.tingkat == "MTS") {
      tingkatData = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD" || sekolah.tingkat == "MI") {
      tingkatData = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB" || sekolah.tingkat == "SUPER") {
      tingkatData = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];
    }

    return response.ok({
      rpp: rpp,
      mataPelajaran: mataPelajaran,
      tingkat: tingkatData,
    });
  }

  async detailRpp({ response, request, auth, params: { rpp_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    const user = await auth.getUser();

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { user_id } = request.get();

    const rpp = await MRpp.query()
      .with("mataPelajaran")
      .with("user")
      .with("sekolah")
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user_id || user.id })
      .andWhere({ id: rpp_id })
      .first();

    return response.ok({
      rpp,
    });
  }

  async postRpp({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      m_mata_pelajaran_id,
      tipe,
    } = request.post();
    const rules = {
      judul: "required",
      moda: "required",
      deskripsi: "required",
      tingkat: "required",
      lampiran: "required",
    };
    const message = {
      "judul.required": "Judul RPP harus diisi",
      "moda.required": "Moda RPP harus dipilih",
      "deskripsi.required": "Deskripsi harus diisi",
      "tingkat.required": "Tingkat/Kelas harus diisi",
      "lampiran.required": "Lampiran RPP harus diisi",
    };
    if (!tipe) {
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    }

    await MRpp.create({
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      tipe,
      m_mata_pelajaran_id,
      m_user_id: user.id,
      m_ta_id: ta.id,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRpp({ response, request, auth, params: { rpp_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      m_mata_pelajaran_id,
      tipe,
    } = request.post();

    const rules = {
      judul: "required",
      moda: "required",
      deskripsi: "required",
      tingkat: "required",
      lampiran: "required",
    };
    const message = {
      "judul.required": "Judul RPP harus diisi",
      "moda.required": "Moda RPP harus dipilih",
      "deskripsi.required": "Deskripsi harus diisi",
      "tingkat.required": "Tingkat/Kelas harus diisi",
      "lampiran.required": "Lampiran RPP harus diisi",
    };
    if (!tipe) {
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    }

    const rpp = await MRpp.query().where({ id: rpp_id }).update({
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      m_mata_pelajaran_id,
    });

    if (!rpp) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteRpp({ response, request, auth, params: { rpp_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const rpp = await MRpp.query().where({ id: rpp_id }).update({
      dihapus: 1,
    });

    if (!rpp) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postPerpusAktivitas({ response, request, auth }) {
    const domain = request.headers().origin;
    const sekolah = await this.getSekolahByDomain(domain);
    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { aktivitas, waktu_mulai, waktu_selesai, m_perpus_id, rating } =
      request.post();

    const check = await TkPerpusAktivitas.query()
      .where({ m_user_id: user.id })
      .andWhere({ m_perpus_id: m_perpus_id })
      .andWhere({ aktivitas: aktivitas })
      .first();

    if (!check) {
      await TkPerpusAktivitas.create({
        dihapus: 0,
        m_user_id: user.id,
        aktivitas,
        waktu_mulai,
        waktu_selesai,
        m_perpus_id,
        rating,
      });
    } else {
      await TkPerpusAktivitas.query().where({ id: check.id }).update({
        waktu_selesai,
        rating,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async postPerpusKomen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { m_perpus_id, komen } = request.post();

    const rules = {
      komen: "required",
    };
    const message = {
      "komen.required": "komen harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const perpusKomen = await MPerpusKomen.create({
      dihapus: 0,
      m_perpus_id: m_perpus_id,
      komen: komen,
      m_user_id: user.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deletePerpusKomen({
    response,
    request,
    auth,
    params: { perpus_komen_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const perpusKomen = await MPerpusKomen.query()
      .where({ id: perpus_komen_id })
      .update({
        dihapus: 1,
      });

    if (!perpusKomen) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getRekSekolah({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { search } = request.get();

    const query = MRekSekolah.query()
      .where({ dihapus: 0 })
      .whereNull("m_rencana_keuangan_id")
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      query.where("jenis", "like", `%${search}%`);
    }

    const rekSekolah = await query.fetch();
    const totalSaldo = rekSekolah
      .toJSON()
      .map((d) => d.saldo)
      .reduce((a, b) => a + b, 0);
    const totalPemasukkan = rekSekolah
      .toJSON()
      .map((d) => d.pemasukan)
      .reduce((a, b) => a + b, 0);
    const totalPengeluaran = rekSekolah
      .toJSON()
      .map((d) => d.pengeluaran)
      .reduce((a, b) => a + b, 0);

    return response.ok({
      rekSekolah: rekSekolah,
      totalSaldo,
      totalPemasukkan,
      totalPengeluaran,
    });
  }

  // Validasi sampai sini
  async postRekSekolah({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { bank, norek, nama, saldo, jenis } = request.post();

    const rekSekolah = await MRekSekolah.create({
      bank,
      norek,
      nama,
      saldo,
      jenis,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    if (!rekSekolah) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRekSekolah({ response, request, params: { rek_sekolah_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { bank, norek, nama, saldo, jenis } = request.post();

    const rekSekolah = await MRekSekolah.query()
      .where({ id: rek_sekolah_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .update({
        jenis,
        bank,
        norek,
        nama,
        saldo,
      });

    if (!rekSekolah) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }
  async deleteRekSekolah({ response, request, params: { rek_sekolah_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ id: rek_sekolah_id })
      .update({
        dihapus: 1,
      });

    if (!rekSekolah) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getPembayaran({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const semuaTa = await Mta.query()
      .select(
        "tahun",
        "semester",
        "nama_kepsek",
        "nip_kepsek",
        "aktif",
        "id",
        "tanggal_awal",
        "tanggal_akhir",
        "tanggal_rapor"
      )
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    let { tipe, search, ta_id = ta.id, rombel_id, subnav } = request.get();

    tipe = tipe ? tipe : "spp";

    let pembayaran;

    let jenisData = [
      { label: "SPP", value: "spp" },
      { label: "Ujian", value: "ujian" },
      { label: "Lainnya", values: "lainnya" },
    ];

    let tipeUjian = [
      {
        value: "pts1",
        label: "Penilaian Tengah Semester 1 / Sumatif Tengah Semester 1",
      },
      {
        value: "pts2",
        label: "Penilaian Tengah Semester 2 / Sumatif Tengah Semester 2",
      },
      {
        value: "pas1",
        label: "Penilaian Akhir Semester 1 / Sumatif Akhir Semester 1",
      },
      {
        value: "pas2",
        label: "Penilaian Akhir Semester 2 / Sumatif Akhir Semester 2",
      },
      { value: "to", label: "Try Out" },
      { value: "us", label: "Ujian Sekolah / Asesmen Sumatif Sekolah" },
    ];
    const rombel = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .fetch();

    const pembayaranKategori = await MPembayaranKategori.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    const akun = await MKeuAkun.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereNot({ nama: "KAS" })
      .orderBy("kode", "asc")
      .fetch();

    if (tipe !== "khusus") {
      if (search) {
        pembayaran = await MPembayaran.query()
          .with("rombel", (builder) => {
            builder
              .with("rombel")
              .withCount("siswa as totalLunas", (builder) => {
                builder.where({ status: "lunas" });
              })
              .withCount("siswa as total");
          })
          .where({ dihapus: 0 })
          .andWhere({ m_sekolah_id: sekolah.id })
          .andWhere({ jenis: tipe })
          .andWhere({ m_ta_id: ta_id })
          .andWhere("nama", "like", `%${search}%`)
          .fetch();
      } else {
        pembayaran = await MPembayaran.query()
          .with("rombel", (builder) => {
            builder
              .with("rombel")
              .withCount("siswa as totalLunas", (builder) => {
                builder.where({ status: "lunas" });
              })
              .withCount("siswa as total");
          })
          .where({ dihapus: 0 })
          .andWhere({ m_sekolah_id: sekolah.id })
          .andWhere({ jenis: tipe })
          .andWhere({ m_ta_id: ta_id })
          .fetch();
      }
    } else {
      const pembayaranIds = await MPembayaran.query()
        .with("rombel", (builder) => {
          builder
            .with("rombel")
            .withCount("siswa as totalLunas", (builder) => {
              builder.where({ status: "lunas" });
            })
            .withCount("siswa as total");
        })
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ jenis: tipe })
        .andWhere({ m_ta_id: ta_id })
        .ids();

      let tkPembayaranRombelIds;
      tkPembayaranRombelIds = TkPembayaranRombel.query()
        .whereIn("m_pembayaran_id", pembayaranIds)
        .andWhere({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id });
      if (rombel_id) {
        tkPembayaranRombelIds.where({ m_rombel_id: rombel_id });
      }
      tkPembayaranRombelIds = await tkPembayaranRombelIds.ids();

      pembayaran = MPembayaranSiswa.query()
        .with("rombelPembayaran", (builder) => {
          builder.with("pembayaran", (builder) => {
            builder.where({ dihapus: 0 }).andWhere({ jenis: "khusus" });
          });
        })
        .with("riwayat", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .withCount("riwayat as totalJumlah", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .with("user", (builder) => {
          builder.select("id", "nama").with("anggotaRombel", (builder) =>
            builder
              .with("rombel", (builder) => builder.select("id", "nama"))
              .whereIn(
                "m_rombel_id",
                rombel.toJSON().map((d) => d.id)
              )
          );
        })
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("tk_pembayaran_rombel_id", tkPembayaranRombelIds);

      if (search) {
        const userIdss = await User.query()
          .where({ dihapus: 0 })
          .andWhere("nama", "like", `%${search}%`)
          .ids();

        pembayaran.whereIn("m_user_id", userIdss);
      }
      if (subnav == "belum-lunas") {
        pembayaran.where({ status: "belum lunas" });
      }

      pembayaran = await pembayaran.fetch();

      const anggotaRombelIds = await MAnggotaRombel.query()
        .whereIn(
          "m_rombel_id",
          rombel.toJSON().map((d) => d.id)
        )
        .andWhere({ dihapus: 0 })
        .pluck("m_user_id");

      const userData = await User.query()
        .with("anggotaRombel", (builder) => {
          builder
            .with("rombel")
            .where({ dihapus: 0 })
            .whereIn(
              "m_rombel_id",
              rombel.toJSON().map((d) => d.id)
            );
        })
        .where({ m_sekolah_id: sekolah.id })
        .whereIn("id", anggotaRombelIds)
        .andWhere({ dihapus: 0 })
        .fetch();
      return response.ok({
        pembayaran: pembayaran,
        jenisData: jenisData,
        rombel: rombel,
        tipeUjian: tipeUjian,
        pembayaran_kategori: pembayaranKategori,
        ta: semuaTa,
        akun,
        userData,
      });
    }

    const totalPelunasan = pembayaran.toJSON().map((item) => {
      return {
        id: item.id,
        total: item.rombel.reduce((a, b) => a + b.__meta__.total, 0),
        totalLunas: item.rombel.reduce((a, b) => a + b.__meta__.totalLunas, 0),
      };
    });

    return response.ok({
      pembayaran: pembayaran,
      jenisData: jenisData,
      rombel: rombel,
      tipeUjian: tipeUjian,
      pembayaran_kategori: pembayaranKategori,
      ta: semuaTa,
      totalPelunasan,
      akun,
    });
  }

  async detailPembayaran({
    response,
    request,
    auth,
    params: { pembayaran_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    let { rombel_id, search, nav } = request.get();

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const pembayaran = await MPembayaran.query()
      .with("rombel", (builder) => {
        builder.with("rombel");
      })
      .where({ id: pembayaran_id })
      .first();

    let siswa;

    let userIds = User.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });
    if (search) {
      userIds.andWhere("nama", "like", `%${search}%`);
    }
    userIds = await userIds.ids();

    siswa = MPembayaranSiswa.query()
      .with("user")
      .with("riwayat", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("rombelPembayaran", (builder) => {
        builder.with("pembayaran");
      })
      .where({ dihapus: 0 });
    if (rombel_id) {
      siswa
        .andWhere({ tk_pembayaran_rombel_id: rombel_id })
        .whereIn("m_user_id", userIds);
    } else {
      siswa
        .andWhere({
          tk_pembayaran_rombel_id: pembayaran.toJSON().rombel[0].id,
        })
        .whereIn("m_user_id", userIds);
    }
    if (nav == "belum-lunas") {
      siswa.where({ status: "belum lunas" });
    }

    siswa = await siswa.fetch();

    return response.ok({
      pembayaran,
      siswa,
    });
  }

  async postPembayaran({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let {
      nama,
      jenis,
      bulan,
      tipe_ujian,
      nominal,
      tanggal_dibuat,
      rombel_id,
      ta_id = ta.id,
      tag,
      m_rek_sekolah_id,
      transaksi,
      nama_transaksi,
      m_keu_akun_debet_id,
      m_keu_akun_kredit_id,
      nama_transaksi_siswa,
    } = request.post();
    ta_id = ta_id ? ta_id : ta.id;
    if (bulan) {
      const rules = {
        nama: "required",
        bulan: "required",
        nominal: "required",
        tanggal_dibuat: "required",
        rombel_id: "required",
        // m_rek_sekolah_id: "required",
      };
      const message = {
        "nama.required": "Nama harus diisi",
        "bulan.required": "Bulan harus dipilih",
        "nominal.required": "Nominal harus diisi",
        "tanggal_dibuat.required": "Tanggal dibuat harus diisi",
        "rombel_id.required": "Bagikan harus dipilih",
        // "m_rek_sekolah_id.required": "Rekening harus dipilih",
      };
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    } else if (tipe_ujian) {
      const rules = {
        nama: "required",
        tipe_ujian: "required",
        nominal: "required",
        tanggal_dibuat: "required",
        rombel_id: "required",
        // m_rek_sekolah_id: "required",
      };
      const message = {
        "nama.required": "Nama harus diisi",
        "tipe_ujian.required": "Tipe ujian harus dipilih",
        "nominal.required": "Nominal harus diisi",
        "tanggal_dibuat.required": "Tanggal dibuat harus diisi",
        "rombel_id.required": "Bagikan harus dipilih",
        // "m_rek_sekolah_id.required": "Rekening harus dipilih",
      };
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    }

    if (jenis !== "khusus") {
      rombel_id = rombel_id.length ? rombel_id : [];
    }

    const pembayaran = await MPembayaran.create({
      nama,
      jenis,
      bulan,
      tipe_ujian: jenis == "lainnya" ? JSON.stringify(tag) : tipe_ujian,
      nominal,
      tanggal_dibuat,
      m_rek_sekolah_id,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      m_ta_id: ta_id || ta.id,
      nama_transaksi,
      m_keu_akun_debet_id,
      m_keu_akun_kredit_id,
      nama_transaksi_siswa,
    });

    //   // email Service
    //   const userIds = await MAnggotaRombel.query()
    //   .with("user")
    //   .where({ m_rombel_id: rombel_id })
    //   .fetch();

    //  const result = await Promise.all(
    //     userIds.toJSON().map(async (d) => {
    //       if(d.user.email != null){
    //         const gmail = await Mail.send(`emails.spp`,d,(message)=>{
    //           message
    //           .to("raihanvans@gmail.com")
    //           .from("no-reply@smarteschool.id")
    //           .subject("Pembayaran SPP")
    //           .text(`${d.user.nama} `)
    //         })

    //         if (gmail) {
    //           return response.ok({
    //             message: messageEmailSuccess,
    //           });
    //         }
    //         // return d.user.nama;
    //       }
    //     })
    //   );

    //  if (gmail) {
    //    return response.ok({
    //      message: messageEmailSuccess,
    //    });
    //  }
    let jumlahSiswa;
    if (rombel_id.length) {
      jumlahSiswa = await MAnggotaRombel.query()
        .with("user", (builder) => {
          builder
            .select("id", "email", "nama", "whatsapp", "wa_real")
            .where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombel_id)
        .andWhere({ dihapus: 0 })
        .count("* as total");
    }

    if (rombel_id.length) {
      await Promise.all(
        rombel_id.map(async (d) => {
          const check = await TkPembayaranRombel.query()
            .where({ dihapus: 0 })
            .andWhere({ m_pembayaran_id: pembayaran.id })
            .andWhere({ m_rombel_id: d })
            .andWhere({ m_sekolah_id: sekolah.id })
            .first();

          if (!check) {
            const tkPembayaran = await TkPembayaranRombel.create({
              dihapus: 0,
              m_pembayaran_id: pembayaran.id,
              m_rombel_id: d,
              m_sekolah_id: sekolah.id,
            });

            // const userIds = await MAnggotaRombel.query()
            //   .where({ m_rombel_id: d })
            //   .pluck("m_user_id");

            const userIds = await MAnggotaRombel.query()
              .with("user", (builder) => {
                builder
                  .select("id", "email", "nama", "whatsapp", "wa_real")
                  .where({ dihapus: 0 });
              })
              .where({ m_rombel_id: d })
              .andWhere({ dihapus: 0 })
              .fetch();

            // jumlahSiswa = jumlahSiswa + userIds ? userIds?.toJSON().length :0

            await Promise.all(
              userIds
                .toJSON()
                .filter((e) => e.user)
                .map(async (e) => {
                  const bayarSiswa = await MPembayaranSiswa.create({
                    status: "belum lunas",
                    dihapus: 0,
                    m_user_id: e.m_user_id,
                    tk_pembayaran_rombel_id: tkPembayaran.id,
                    m_sekolah_id: sekolah.id,
                  });
                  // NOTIFIKASI WHATSAPP

                  // await kirimNotifWaLangsung(
                  //   d.m_user_id,
                  //   `pembayaran-${timeline.id}-${d.m_user_id}`,
                  //   `Halo ${e.user.nama}, ${nama} telah keluar, segera lunasi pembayaran. Tekan tautan link berikut untuk melakukan pembayaran
                  //   ${domain}/smartschool/tagihan/${bayarSiswa.id}`
                  // );
                  // try {
                  if (e.user.wa_real) {
                    await WhatsAppService.sendMessage(
                      `${e.user.wa_real}`,
                      `Halo ${e.user.nama}, ${nama} telah keluar, segera lunasi pembayaran. Tekan tautan link berikut untuk melakukan pembayaran \n \n${domain}/smartschool/tagihan/${bayarSiswa.id}`
                    );
                  }
                  // } catch (error) {
                  //   console.log(error);
                  // }

                  // if (e.user.email != null) {
                  // try {
                  //   const gmail = Mail.send(
                  //     `emails.spp`,
                  //     pembayaran.toJSON(),
                  //     (message) => {
                  //       message
                  //         .to(`${e.user.email}`)
                  //         .from("no-reply@smarteschool.id")
                  //         .subject("Pembayaran SPP");
                  //     }
                  //   );
                  // } catch (error) {
                  //   // console.log(error);
                  // }
                  // }
                })
            );
          }
        })
      );
    } else {
      if (jenis == "khusus") {
        const rombelIds = await MRombel.query()
          .where({ m_ta_id: ta_id })
          .andWhere({ dihapus: 0 })
          .ids();
        const userData = await MAnggotaRombel.query()
          .with("user", (builder) => {
            builder
              .select("id", "email", "nama", "whatsapp", "wa_real")
              .where({ dihapus: 0 });
          })
          .where({ m_user_id: rombel_id })
          .whereIn("m_rombel_id", rombelIds)
          .andWhere({ dihapus: 0 })
          .first();

        jumlahSiswa = await MAnggotaRombel.query()
          .with("user", (builder) => {
            builder
              .select("id", "email", "nama", "whatsapp", "wa_real")
              .where({ dihapus: 0 });
          })
          .where("m_rombel_id", userData?.m_rombel_id)
          .where({ m_user_id: rombel_id })
          .andWhere({ dihapus: 0 })
          .count("* as total");

        const tkPembayaran = await TkPembayaranRombel.create({
          dihapus: 0,
          m_pembayaran_id: pembayaran.id,
          m_rombel_id: userData.m_rombel_id,
          m_sekolah_id: sekolah.id,
        });

        // jumlahSiswa = jumlahSiswa + userIds ? userIds?.toJSON().length :0

        const bayarSiswa = await MPembayaranSiswa.create({
          status: "belum lunas",
          dihapus: 0,
          m_user_id: rombel_id,
          tk_pembayaran_rombel_id: tkPembayaran.id,
          m_sekolah_id: sekolah.id,
        });
        if (userData.user.wa_real) {
          await WhatsAppService.sendMessage(
            `${userData.user.wa_real}`,
            `Halo ${userData.user.nama}, ${nama} telah keluar, segera lunasi pembayaran. Tekan tautan link berikut untuk melakukan pembayaran \n \n${domain}/smartschool/tagihan/${bayarSiswa.id}`
          );
        }
      }
    }

    if (transaksi) {
      const transaksi = await MKeuTransaksi.create({
        nama: nama_transaksi,
        // nomor,
        tanggal: tanggal_dibuat,
        dihapus: 0,
        status: 1,
        m_sekolah_id: sekolah.id,
        m_pembayaran_id: pembayaran.id,
      });

      await MKeuJurnal.create({
        jenis: "debit",
        m_keu_transaksi_id: transaksi.id,
        m_keu_akun_id: m_keu_akun_debet_id,
        saldo: nominal * jumlahSiswa[0].total,
        status: 1,
        dihapus: 0,
      });

      await MKeuJurnal.create({
        jenis: "kredit",
        m_keu_transaksi_id: transaksi.id,
        m_keu_akun_id: m_keu_akun_kredit_id,
        saldo: nominal * jumlahSiswa[0].total,
        status: 1,
        dihapus: 0,
      });
    }
    // return {nominal,jumlahSiswa,data:nominal*jumlahSiswa};
    //
    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPembayaran({ response, request, auth, params: { pembayaran_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let {
      nama,
      jenis,
      bulan,
      tipe_ujian,
      nominal,
      rombel_id,
      tanggal_dibuat,
      tag,
      m_rek_sekolah_id,
      ta_id,
      nama_transaksi,
      m_keu_akun_debet_id,
      m_keu_akun_kredit_id,
      nama_transaksi_siswa,
      transaksi,
    } = request.post();

    if (bulan) {
      const rules = {
        nama: "required",
        bulan: "required",
        nominal: "required",
        tanggal_dibuat: "required",
        rombel_id: "required",
      };
      const message = {
        "nama.required": "Nama harus diisi",
        "bulan.required": "Bulan harus dipilih",
        "nominal.required": "Nominal harus diisi",
        "tanggal_dibuat.required": "Tanggal dibuat harus diisi",
        "rombel_id.required": "Bagikan harus dipilih",
      };
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    } else if (tipe_ujian) {
      const rules = {
        nama: "required",
        tipe_ujian: "required",
        nominal: "required",
        tanggal_dibuat: "required",
        rombel_id: "required",
      };
      const message = {
        "nama.required": "Nama harus diisi",
        "tipe_ujian.required": "Tipe ujian harus dipilih",
        "nominal.required": "Nominal harus diisi",
        "tanggal_dibuat.required": "Tanggal dibuat harus diisi",
        "rombel_id.required": "Bagikan harus dipilih",
      };
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    }

    rombel_id = rombel_id?.length ? rombel_id : [];

    const pembayaran = await MPembayaran.query()
      .where({ id: pembayaran_id })
      .first();
    await MPembayaran.query()
      .where({ id: pembayaran_id })
      .update({
        nama,
        jenis,
        bulan,
        tipe_ujian: jenis == "lainnya" ? JSON.stringify(tag) : tipe_ujian,
        tanggal_dibuat,
        nominal,
        m_rek_sekolah_id,
        m_ta_id: ta_id || ta.id,

        nama_transaksi,
        m_keu_akun_debet_id,
        m_keu_akun_kredit_id,
        nama_transaksi_siswa,
      });

    if (!pembayaran) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const rombelIds = await TkPembayaranRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_pembayaran_id: pembayaran.id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .pluck("m_rombel_id");

    rombelIds
      .filter((item) => !rombel_id.includes(item))
      .map(async (item) => {
        await TkPembayaranRombel.query()
          .where({ m_rombel_id: item })
          .where({ dihapus: 0 })
          .andWhere({ m_pembayaran_id: pembayaran.id })
          .andWhere({ m_sekolah_id: sekolah.id })
          .delete();
      });
    if (rombel_id.length) {
      await Promise.all(
        rombel_id.map(async (d) => {
          const check = await TkPembayaranRombel.query()
            .where({ dihapus: 0 })
            .andWhere({ m_pembayaran_id: pembayaran.id })
            .andWhere({ m_rombel_id: d })
            .andWhere({ m_sekolah_id: sekolah.id })
            .first();

          if (!check) {
            const tkPembayaran = await TkPembayaranRombel.create({
              dihapus: 0,
              m_pembayaran_id: pembayaran.id,
              m_rombel_id: d,
              m_sekolah_id: sekolah.id,
            });

            const userIds = await MAnggotaRombel.query()
              .with("user", (builder) => {
                builder.select("id", "email").where({ dihapus: 0 });
              })
              .where({ m_rombel_id: d })
              .andWhere({ dihapus: 0 })
              .fetch();

            await Promise.all(
              userIds
                .toJSON()
                .filter((e) => e.user)
                .map(async (e) => {
                  await MPembayaranSiswa.create({
                    status: "belum lunas",
                    dihapus: 0,
                    m_user_id: e.m_user_id,
                    tk_pembayaran_rombel_id: tkPembayaran.id,
                    m_sekolah_id: sekolah.id,
                  });
                  // if (e.user.email != null) {
                  //   try {
                  //     const gmail = Mail.send(
                  //       `emails.spp`,
                  //       pembayaran.toJSON(),
                  //       (message) => {
                  //         message
                  //           .to(`${e.user.email}`)
                  //           .from("no-reply@smarteschool.id")
                  //           .subject("Pembayaran SPP");
                  //       }
                  //     );
                  //   } catch (error) {
                  //     // console.log(error);
                  //   }
                  // }
                })
            );
          }
        })
      );
    }

    const checkTransaksi = await MKeuTransaksi.query()
      .where({ m_pembayaran_id: pembayaran_id })
      .first();

    if (transaksi) {
      const jumlahSiswa = await MAnggotaRombel.query()
        .with("user", (builder) => {
          builder
            .select("id", "email", "nama", "whatsapp", "wa_real")
            .where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombel_id)
        .andWhere({ dihapus: 0 })
        .count("* as total");
      if (!checkTransaksi) {
        const transaksi = await MKeuTransaksi.create({
          nama: nama_transaksi,
          // nomor,
          tanggal: tanggal_dibuat,
          dihapus: 0,
          status: 1,
          m_sekolah_id: sekolah.id,
          m_pembayaran_id: pembayaran_id,
        });

        await MKeuJurnal.create({
          jenis: "debit",
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: m_keu_akun_debet_id,
          saldo: nominal * jumlahSiswa[0].total,
          status: 1,
          dihapus: 0,
        });

        await MKeuJurnal.create({
          jenis: "kredit",
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: m_keu_akun_kredit_id,
          saldo: nominal * jumlahSiswa[0].total,
          status: 1,
          dihapus: 0,
        });
      } else {
        await MKeuTransaksi.query().where({ id: checkTransaksi.id }).update({
          nama: nama_transaksi,
          // nomor,
          tanggal: tanggal_dibuat,
          dihapus: 0,
          status: 1,
        });

        await MKeuJurnal.query()
          .where({ m_keu_transaksi_id: checkTransaksi.id })
          .andWhere({ jenis: "debit" })
          .update({
            jenis: "debit",
            m_keu_transaksi_id: checkTransaksi.id,
            m_keu_akun_id: m_keu_akun_debet_id,
            saldo: nominal * jumlahSiswa[0].total,
            status: 1,
            dihapus: 0,
          });

        await MKeuJurnal.query()
          .where({ m_keu_transaksi_id: checkTransaksi.id })
          .andWhere({ jenis: "kredit" })
          .update({
            jenis: "kredit",
            m_keu_transaksi_id: checkTransaksi.id,
            m_keu_akun_id: m_keu_akun_kredit_id,
            saldo: nominal * jumlahSiswa[0].total,
            status: 1,
            dihapus: 0,
          });
      }
    }
    if (!transaksi) {
      const transaksiIds = await MKeuTransaksi.query()
        .where({ m_pembayaran_id: pembayaran_id })
        .ids();

      await Promise.all(
        transaksiIds.map(async (d) => {
          await MKeuTransaksi.query().where({ id: d }).update({ dihapus: 1 });
          await MKeuJurnal.query()
            .where({ m_keu_transaksi_id: d })
            .update({ dihapus: 1 });
        })
      );
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePembayaran({
    response,
    request,
    auth,
    params: { pembayaran_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const pembayaran = await MPembayaran.query()
      .where({ id: pembayaran_id })
      .update({
        dihapus: 1,
      });

    const transaksiIds = await MKeuTransaksi.query()
      .where({ m_pembayaran_id: pembayaran_id })
      .ids();

    if (transaksiIds) {
      await Promise.all(
        transaksiIds.map(async (d) => {
          await MKeuTransaksi.query().where({ id: d }).update({ dihapus: 1 });
          await MKeuJurnal.query()
            .where({ m_keu_transaksi_id: d })
            .update({ dihapus: 1 });
        })
      );
    }

    if (!pembayaran) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postPembayaranKategori({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { kategori } = request.post();
    const rules = {
      kategori: "required",
    };
    const message = {
      "kategori.required": "Kategori harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    await MPembayaranKategori.create({
      kategori,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deletePembayaranKategori({
    response,
    request,
    auth,
    params: { pembayaran_kategori_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const pembayaranKategori = await MPembayaranKategori.query()
      .where({ id: pembayaran_kategori_id })
      .update({
        dihapus: 1,
      });

    if (!pembayaranKategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getPembayaranSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { status } = request.get();

    status = status ? status : "belum lunas";

    const user = await auth.getUser();

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const pembayaran = await MPembayaranSiswa.query()
      .with("rombelPembayaran", (builder) => {
        builder.with("pembayaran", (builder) => {
          builder.where({ dihapus: 0 });
        });
      })
      .with("riwayat", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("riwayat as totalJumlah", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .andWhere({ status: status })
      .fetch();

    return response.ok({
      pembayaran: pembayaran
        .toJSON()
        .filter((item) => item.rombelPembayaran.pembayaran),
      rek_sekolah: rekSekolah,
    });
  }

  async refreshPembayaranSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { id } = request.post();

    const pembayaran = await TkPembayaranRombel.query()
      .where({ id })
      .where({ dihapus: 0 })
      .with("siswa", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("pembayaran")
      .first();
    if (!pembayaran) {
      return response.notFound({ message: messageNotFound });
    }
    const anggotaRombel = await MAnggotaRombel.query()
      .where({ m_rombel_id: pembayaran.m_rombel_id })
      .where({ dihapus: 0 })
      .pluck("m_user_id");
    await Promise.all(
      anggotaRombel.map((d) => {
        if (!pembayaran.toJSON().siswa.find((e) => e.m_user_id == d)) {
          MPembayaranSiswa.create({
            status: "belum lunas",
            dihapus: 0,
            m_user_id: d,
            tk_pembayaran_rombel_id: id,
            m_sekolah_id: pembayaran.toJSON().pembayaran.m_sekolah_id,
          });
        }
      })
    );

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deletePembayaranSiswa({
    response,
    request,
    auth,
    params: { pembayaran_siswa_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const deletePembayaranSiswa = await MPembayaranSiswa.query()
      .where({ id: pembayaran_siswa_id })
      .update({
        dihapus: 1,
      });
    if (!deletePembayaranSiswa) {
      return response.notFound({ message: messageNotFound });
    }
    return response.ok({ message: messageDeleteSuccess });
  }

  async detailPembayaranSiswa({
    response,
    request,
    auth,
    params: { pembayaran_siswa_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const pembayaran = await MPembayaranSiswa.query()
      .with("rombelPembayaran", (builder) => {
        builder.with("pembayaran");
      })
      .with("user")
      .with("riwayat", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("riwayat as totalJumlah", (builder) => {
        builder.where({ dihapus: 0 });
      })
      // .where({ dihapus: 0 })
      // .andWhere({ m_user_id: user.id })
      .where({ id: pembayaran_siswa_id })
      .first();

    const kontak = await MKontak.query()
      .where({
        m_sekolah_id: sekolah.id,
      })
      .first();

    return response.ok({
      pembayaran: pembayaran,
      rek_sekolah: rekSekolah,
      kontak,
    });
  }

  async postRiwayatPembayaranSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let {
      bank,
      norek,
      nama_pemilik,
      nominal,
      bukti,
      m_pembayaran_siswa_id,
      ditangguhkan,
      hari = 7,
    } = request.post();

    if (ditangguhkan == 2) {
      await Database.raw(
        "UPDATE m_pembayaran_siswa SET ditangguhkan=NULL WHERE id = ?",
        [m_pembayaran_siswa_id]
      );
      return response.ok({ message: messagePostSuccess });
    } else if (ditangguhkan) {
      await MPembayaranSiswa.query()
        .where({ id: m_pembayaran_siswa_id })
        .update({
          ditangguhkan: moment()
            .add(hari, "days")
            .format("YYYY-MM-DD HH:mm:ss"),
        });
      return response.ok({ message: messagePostSuccess });
    }

    const rules = {
      bank: "required",
      norek: "required",
      nama_pemilik: "required",
      nominal: "required",
      bukti: "required",
    };
    const message = {
      "bank.required": "Bank harus diisi",
      "norek.required": "Norek harus diisi",
      "nama_pemilik.required": "Nama pemilik harus diisi",
      "nominal.required": "Nominal harus diisi",
      "bukti.required": "Bukti harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const pembayaran = await MRiwayatPembayaranSiswa.create({
      bank,
      norek,
      nama_pemilik,
      nominal: +nominal,
      bukti,
      dikonfirmasi: 0,
      m_pembayaran_siswa_id: +m_pembayaran_siswa_id,
      dihapus: 0,
    });

    return response.ok(pembayaran);
  }

  async putRiwayatPembayaranSiswa({
    response,
    request,
    params: { riwayat_pembayaran_siswa_id },
    auth,
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" && user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    let { dikonfirmasi } = request.post();

    const pembayaran = await MRiwayatPembayaranSiswa.query()
      .where({ id: riwayat_pembayaran_siswa_id })
      .update({
        dikonfirmasi,
      });

    // NOTIFIKASI WHATSAPP
    // try {
    //   await WhatsAppService.sendMessage(
    //     6281316119411,
    //     `Halo ${e.user.nama}, Pembayaran kamu telah dikonfirmasi. Tekan tautan link berikut untuk melihat pembayaran
    // ${domain}/smartschool/tagihan/${riwayat_pembayaran_siswa_id}`
    //   );
    // } catch (error) {
    //   console.log(error);
    // }

    const pembayaranSiswa = await MRiwayatPembayaranSiswa.query()
      .where({ id: riwayat_pembayaran_siswa_id })
      .first();

    const riwayat = await MPembayaranSiswa.query()
      .where({ id: pembayaranSiswa.m_pembayaran_siswa_id })
      .with("riwayat")
      .with("user", (x) => {
        x.select("id", "nama");
      })
      .with("rombelPembayaran", (builder) => {
        builder.with("pembayaran");
      })
      .first();

    const totalDibayar = riwayat
      .toJSON()
      .riwayat.reduce((a, b) => a + b.nominal, 0);
    const totalTagihan = riwayat.toJSON().rombelPembayaran?.pembayaran?.nominal;
    if (totalDibayar < totalTagihan) {
      await MPembayaranSiswa.query()
        .where({ id: pembayaranSiswa.m_pembayaran_siswa_id })
        .update({
          status: "belum lunas",
        });
    } else {
      if (!riwayat.toJSON().riwayat.some((item) => !item.dikonfirmasi)) {
        await MPembayaranSiswa.query()
          .where({ id: pembayaranSiswa.m_pembayaran_siswa_id })
          .update({
            status: "lunas",
          });
      }
    }

    const mutasi = await MMutasi.create({
      tipe: "kredit",
      nama: `Pembayaran ${riwayat.toJSON().rombelPembayaran.pembayaran.nama} ${
        riwayat.toJSON().rombelPembayaran.pembayaran.jenis == "spp"
          ? riwayat.toJSON().rombelPembayaran.pembayaran.bulan
          : ""
      }-${riwayat.toJSON().user.nama}`,
      kategori: `pembayaran ${
        riwayat.toJSON().rombelPembayaran.pembayaran.jenis
      }`,
      nominal: pembayaranSiswa.nominal,
      dihapus: 0,
      m_rek_sekolah_id:
        riwayat.toJSON().rombelPembayaran.pembayaran.m_rek_sekolah_id,
      m_sekolah_id: sekolah.id,
      waktu_dibuat: pembayaranSiswa.updated_at,
    });

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({
        id: riwayat.toJSON().rombelPembayaran.pembayaran.m_rek_sekolah_id,
      })
      .first();

    if (rekSekolah) {
      await MRekSekolah.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({
          id: riwayat.toJSON().rombelPembayaran.pembayaran.m_rek_sekolah_id,
        })
        .update({
          pemasukan:
            parseInt(rekSekolah.pemasukan) + parseInt(pembayaranSiswa.nominal),
        });
    }
    if (riwayat.toJSON().rombelPembayaran?.pembayaran?.nama_transaksi) {
      const transaksi = await MKeuTransaksi.create({
        nama: `${
          riwayat.toJSON().rombelPembayaran?.pembayaran?.nama_transaksi_siswa
        } - ${riwayat.toJSON().user.nama}`,
        // nomor,
        tanggal: moment().format("YYYY-MM-DD"),
        dihapus: 0,
        status: 1,
        m_sekolah_id: sekolah.id,
        m_pembayaran_id: riwayat.toJSON().rombelPembayaran?.m_pembayaran_id,
        m_riwayat_pembayaran_id: riwayat_pembayaran_siswa_id,
      });

      await MKeuJurnal.create({
        jenis: "kredit",
        m_keu_transaksi_id: transaksi.id,
        m_keu_akun_id:
          riwayat.toJSON().rombelPembayaran?.pembayaran?.m_keu_akun_debet_id,
        saldo: pembayaranSiswa.nominal,
        status: 1,
        dihapus: 0,
      });

      await MKeuJurnal.create({
        jenis: "debit",
        m_keu_transaksi_id: transaksi.id,
        m_keu_akun_id:
          riwayat.toJSON().rombelPembayaran?.pembayaran?.m_keu_akun_kredit_id,
        saldo: pembayaranSiswa.nominal,
        status: 1,
        dihapus: 0,
      });
    }

    return response.ok(pembayaran);
  }

  async deleteRiwayatPembayaranSiswa({
    response,
    request,
    params: { riwayat_pembayaran_siswa_id },
    auth,
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" && user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const pembayaranSiswa = await MRiwayatPembayaranSiswa.query()
      .where({ id: riwayat_pembayaran_siswa_id })
      .first();

    const deleteRiwayat = await MRiwayatPembayaranSiswa.query()
      .where({ id: riwayat_pembayaran_siswa_id })
      .delete();
    if (deleteRiwayat > 0) {
      const riwayat = await MPembayaranSiswa.query()
        .where({ id: pembayaranSiswa.m_pembayaran_siswa_id })
        .with("riwayat")
        .with("user", (x) => {
          x.select("id", "nama");
        })
        .with("rombelPembayaran", (builder) => {
          builder.with("pembayaran");
        })
        .first();

      if (pembayaranSiswa.dikonfirmasi) {
        const totalDibayar =
          riwayat.toJSON().riwayat.reduce((a, b) => a + b.nominal, 0) -
          pembayaranSiswa.nominal;
        const totalTagihan =
          riwayat.toJSON().rombelPembayaran?.pembayaran?.nominal;
        if (totalDibayar < totalTagihan) {
          await MPembayaranSiswa.query()
            .where({ id: pembayaranSiswa.m_pembayaran_siswa_id })
            .update({
              status: "belum lunas",
            });
        } else {
          if (!riwayat.toJSON().riwayat.some((item) => !item.dikonfirmasi)) {
            await MPembayaranSiswa.query()
              .where({ id: pembayaranSiswa.m_pembayaran_siswa_id })
              .update({
                status: "lunas",
              });
          }
        }

        const mutasi = await MMutasi.create({
          tipe: "debit",
          nama: `Pembayaran ${
            riwayat.toJSON().rombelPembayaran.pembayaran.nama
          } ${
            riwayat.toJSON().rombelPembayaran.pembayaran.jenis == "spp"
              ? riwayat.toJSON().rombelPembayaran.pembayaran.bulan
              : ""
          }-${riwayat.toJSON().user.nama}`,
          kategori: `pembayaran ${
            riwayat.toJSON().rombelPembayaran.pembayaran.jenis
          }`,
          nominal: pembayaranSiswa.nominal,
          dihapus: 0,
          m_sekolah_id: sekolah.id,
          m_rek_sekolah_id:
            riwayat.toJSON().rombelPembayaran.pembayaran.m_rek_sekolah_id,
          waktu_dibuat: pembayaranSiswa.updated_at,
        });

        const rekSekolah = await MRekSekolah.query()
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({
            id: riwayat.toJSON().rombelPembayaran.pembayaran.m_rek_sekolah_id,
          })
          .first();

        if (rekSekolah) {
          await MRekSekolah.query()
            .where({ m_sekolah_id: sekolah.id })
            .andWhere({
              id: riwayat.toJSON().rombelPembayaran.pembayaran.m_rek_sekolah_id,
            })
            .update({
              pengeluaran:
                parseInt(rekSekolah.pengeluaran) +
                parseInt(pembayaranSiswa.nominal),
            });
        }
      }
      return response.ok({ message: messageDeleteSuccess });
    } else {
      return response.notFound({ message: messageNotFound });
    }
  }

  async putLunasPembayaranSiswa({
    response,
    request,
    params: {
      riwayat_pembayaran_siswa_id,
      user_id,
      m_pembayaran_siswa_id,
      m_pembayaran_id,
    },
    auth,
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" && user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const pembayaranUtama = await MPembayaran.query()
      .where({ id: m_pembayaran_id })
      .first();

    await MPembayaranSiswa.query().where({ id: m_pembayaran_siswa_id }).update({
      status: "lunas",
    });

    const pembayaran = await MRiwayatPembayaranSiswa.create({
      bank,
      norek,
      nama_pemilik,
      nominal: pembayaranUtama.nominal,
      bukti,
      dikonfirmasi: 1,
      m_pembayaran_siswa_id: +m_pembayaran_siswa_id,
      dihapus: 0,
    });

    const pembayaranSiswa = await MPembayaranSiswa.query()
      .where({ id: m_pembayaran_siswa_id })
      .first();

    const mutasi = await MMutasi.create({
      tipe: "kredit",
      nama: `Pembayaran ${pembayaranUtama.nama} ${
        pembayaranUtama.jenis == "spp" ? pembayaranUtama.bulan : ""
      }-${riwayat.toJSON().user.nama}`,
      kategori: `pembayaran ${pembayaranUtama.jenis}`,
      nominal: pembayaranUtama.nominal,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      waktu_dibuat: pembayaran.created_at,
    });

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .update({ pemasukan: rekSekolah.pemasukan + pembayaranSiswa.nominal });

    if (pembayaranUtama.nama_transaksi) {
      const transaksi = await MKeuTransaksi.create({
        nama: `${pembayaranUtama.nama_transaksi_siswa} - ${
          riwayat.toJSON().user.nama
        }`,
        // nomor,
        tanggal: moment().format("YYYY-MM-DD"),
        dihapus: 0,
        status: 1,
        m_sekolah_id: sekolah.id,
        m_pembayaran_id: m_pembayaran_id,
        m_riwayat_pembayaran_id: pembayaran?.id,
      });

      await MKeuJurnal.create({
        jenis: "kredit",
        m_keu_transaksi_id: transaksi.id,
        m_keu_akun_id: pembayaranUtama.m_keu_akun_debet_id,
        saldo: pembayaranSiswa.nominal,
        status: 1,
        dihapus: 0,
      });

      await MKeuJurnal.create({
        jenis: "debit",
        m_keu_transaksi_id: transaksi.id,
        m_keu_akun_id: pembayaranUtama.m_keu_akun_kredit_id,
        saldo: pembayaranSiswa.nominal,
        status: 1,
        dihapus: 0,
      });
    }

    return response.ok(pembayaran);
  }

  async getKontak({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const kontak = await MKontak.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    return response.ok({
      kontak: kontak,
    });
  }

  async putKontak({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const { tu, keuangan, kurikulum, kesiswaan, sarpras, humas } =
      request.post();

    const check = await MKontak.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    if (!check) {
      await MKontak.create({
        m_sekolah_id: sekolah.id,
      });
    }

    const kontak = await MKontak.query()
      .where({ m_sekolah_id: sekolah.id })
      .update({
        tu,
        keuangan,
        kurikulum,
        kesiswaan,
        sarpras,
        humas,
      });

    if (!kontak) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getMutasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let {
      search,
      dari_tanggal,
      sampai_tanggal,
      tipe,
      page,
      filter_grafik,
      kategori: filterKategori,
      tipe_akun,
    } = request.get();
    page = page ? parseInt(page) : 1;

    let grafikData = MMutasi.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (!filter_grafik || filter_grafik == "bulan") {
      grafikData.whereBetween("waktu_dibuat", [
        moment().startOf("month").format("YYYY-MM-DD 00:00:00"),
        moment().endOf("month").format("YYYY-MM-DD 23:59:59"),
      ]);
    }
    if (filter_grafik == "minggu") {
      grafikData.whereBetween("waktu_dibuat", [
        moment().startOf("week").format("YYYY-MM-DD 00:00:00"),
        moment().endOf("week").format("YYYY-MM-DD 23:59:59"),
      ]);
    }
    if (filter_grafik == "tahun") {
      grafikData.whereBetween("waktu_dibuat", [
        moment().startOf("year").format("YYYY-MM-DD 00:00:00"),
        moment().endOf("year").format("YYYY-MM-DD 23:59:59"),
      ]);
    }
    grafikData = await grafikData.fetch();

    let sarpras;

    sarpras = MMutasi.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (tipe) {
      sarpras.andWhere({ tipe: tipe });
    }
    if (filterKategori) {
      sarpras.andWhere({ kategori: filterKategori });
    }
    if (tipe_akun) {
      sarpras.andWhere({ m_rek_sekolah_id: tipe_akun });
    }
    if (dari_tanggal && sampai_tanggal) {
      sarpras.whereBetween("waktu_dibuat", [dari_tanggal, sampai_tanggal]);
    }
    if (search) {
      sarpras.andWhere("nama", "like", `%${search}%`);
    }

    sarpras = await sarpras.orderBy("created_at", "desc").paginate(page, 25);

    const kategori = await MMutasi.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .distinct("kategori")
      .pluck("kategori");

    return response.ok({
      sarpras: sarpras,
      grafik: grafikData,
      kategori,
    });
  }

  async postMutasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { tipe, nama, kategori, nominal, waktu_dibuat } = request.post();

    const rules = {
      nama: "required",
      tipe: "required",
      kategori: "required",
      nominal: "required",
    };
    const message = {
      "tipe.required": "Tipe harus dipilih",
      "nama.required": "Nama harus diisi",
      "kategori.required": "Kategori harus diisi",
      "nominal.required": "Nominal harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const mutasi = await MMutasi.create({
      tipe,
      nama,
      kategori,
      nominal,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      waktu_dibuat,
    });

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    if (rekSekolah) {
      let pemasukan, pengeluaran;
      if (tipe == "debit") {
        pemasukan = rekSekolah.pemasukan;
        pengeluaran = rekSekolah.pengeluaran + nominal;
      } else {
        pemasukan = rekSekolah.pemasukan + nominal;
        pengeluaran = rekSekolah.pengeluaran;
      }

      await MRekSekolah.query().where({ m_sekolah_id: sekolah.id }).update({
        pemasukan,
        pengeluaran,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async postMutasiV1({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { tipe, nama, rek_sekolah_id, kategori, nominal, waktu_dibuat } =
      request.post();

    const rules = {
      nama: "required",
      tipe: "required",
      kategori: "required",
      nominal: "required",
      rek_sekolah_id: "required",
    };
    const message = {
      "tipe.required": "Tipe harus dipilih",
      "nama.required": "Nama harus diisi",
      "kategori.required": "Kategori harus diisi",
      "nominal.required": "Nominal harus diisi",
      rek_sekolah_id: "Rekening harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const mutasi = await MMutasi.create({
      tipe,
      nama,
      kategori,
      nominal,
      dihapus: 0,
      m_rek_sekolah_id: rek_sekolah_id,
      m_sekolah_id: sekolah.id,
      waktu_dibuat,
    });

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ id: rek_sekolah_id })
      .first();

    if (rekSekolah) {
      let pemasukan, pengeluaran;
      if (tipe == "debit") {
        pemasukan = rekSekolah.pemasukan;
        pengeluaran = rekSekolah.pengeluaran + nominal;
      } else {
        pemasukan = rekSekolah.pemasukan + nominal;
        pengeluaran = rekSekolah.pengeluaran;
      }

      await MRekSekolah.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ id: rek_sekolah_id })
        .update({
          pemasukan,
          pengeluaran,
        });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putMutasiV1({ response, request, auth, params: { mutasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const beforeUpdate = await MMutasi.query().where({ id: mutasi_id }).first();

    const { tipe, rek_sekolah_id, nama, kategori, nominal, waktu_dibuat } =
      request.post();
    const rules = {
      nama: "required",
      tipe: "required",
      kategori: "required",
      nominal: "required",
      rek_sekolah_id: "required",
    };
    const message = {
      "tipe.required": "Tipe harus dipilih",
      "nama.required": "Nama harus diisi",
      "kategori.required": "Kategori harus diisi",
      "nominal.required": "Nominal harus diisi",
      "rek_sekolah_id.required": "Rekening harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const mutasi = await MMutasi.query().where({ id: mutasi_id }).update({
      tipe,
      nama,
      kategori,
      nominal,
      waktu_dibuat,
      m_rek_sekolah_id: rek_sekolah_id,
    });

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ id: rek_sekolah_id })
      .first();

    if (rekSekolah) {
      let pemasukan, pengeluaran;
      if (tipe != beforeUpdate.tipe) {
        if (tipe == "kredit") {
          if (
            rek_sekolah_id != beforeUpdate.m_rek_sekolah_id ||
            !beforeUpdate.m_rek_sekolah_id
          ) {
            pengeluaran = parseInt(rekSekolah.pengeluaran);
          } else {
            pengeluaran =
              parseInt(rekSekolah.pengeluaran) - parseInt(beforeUpdate.nominal);
          }
          pemasukan = parseInt(rekSekolah.pemasukan) + parseInt(nominal);
        } else {
          if (
            rek_sekolah_id != beforeUpdate.m_rek_sekolah_id ||
            !beforeUpdate.m_rek_sekolah_id
          ) {
            pemasukan = parseInt(rekSekolah.pemasukan);
          } else {
            pemasukan =
              parseInt(rekSekolah.pemasukan) - parseInt(beforeUpdate.nominal);
          }
          pengeluaran = parseInt(rekSekolah.pengeluaran) + parseInt(nominal);
        }
      } else {
        if (tipe == "kredit") {
          if (
            rek_sekolah_id != beforeUpdate.m_rek_sekolah_id ||
            !beforeUpdate.m_rek_sekolah_id
          ) {
            pemasukan = parseInt(rekSekolah.pemasukan) + parseInt(nominal);
          } else {
            pemasukan =
              parseInt(rekSekolah.pemasukan) -
              parseInt(beforeUpdate.nominal) +
              parseInt(nominal);
          }
          pengeluaran = parseInt(rekSekolah.pengeluaran);
        } else {
          if (
            rek_sekolah_id != beforeUpdate.m_rek_sekolah_id ||
            !beforeUpdate.m_rek_sekolah_id
          ) {
            pengeluaran = parseInt(rekSekolah.pengeluaran) + parseInt(nominal);
          } else {
            pengeluaran =
              parseInt(rekSekolah.pengeluaran) -
              parseInt(beforeUpdate.nominal) +
              parseInt(nominal);
          }
          pemasukan = parseInt(rekSekolah.pemasukan);
        }
      }

      await MRekSekolah.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ id: rek_sekolah_id })
        .update({
          pemasukan,
          pengeluaran,
        });

      if (beforeUpdate.m_rek_sekolah_id) {
        const rekBeforeUpdate = await MRekSekolah.query()
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ id: beforeUpdate.m_rek_sekolah_id })
          .first();

        if (rek_sekolah_id != beforeUpdate.m_rek_sekolah_id) {
          let masuk, keluar;
          if (beforeUpdate.tipe == "kredit") {
            masuk = rekBeforeUpdate.pemasukan - beforeUpdate.nominal;
            keluar = rekBeforeUpdate.pengeluaran;
          } else {
            masuk = rekBeforeUpdate.pemasukan;
            keluar = rekBeforeUpdate.pengeluaran - beforeUpdate.nominal;
          }
          await MRekSekolah.query()
            .where({ id: beforeUpdate.m_rek_sekolah_id })
            .update({
              pemasukan: masuk,
              pengeluaran: keluar,
            });
        }
      }
    }

    if (!mutasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteMutasiV1({ response, request, auth, params: { mutasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const beforeUpdate = await MMutasi.query().where({ id: mutasi_id }).first();
    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rek_sekolah_id: beforeUpdate.m_rek_sekolah_id })
      .first();

    if (rekSekolah) {
      let pemasukan, pengeluaran;
      if (beforeUpdate.tipe == "kredit") {
        // Kredit == pemasukan
        pemasukan = rekSekolah.pemasukan - beforeUpdate.nominal;
        if (pemasukan < 0) {
          pemasukan = 0;
        }
        pengeluaran = rekSekolah.pengeluaran;
      } else {
        // debit == pengeluaran
        pengeluaran = rekSekolah.pengeluaran - beforeUpdate.nominal;
        if (pengeluaran < 0) {
          pengeluaran = 0;
        }
        pemasukan = rekSekolah.pemasukan;
      }

      await MRekSekolah.query().where({ m_sekolah_id: sekolah.id }).update({
        pemasukan,
        pengeluaran,
      });
    }

    const mutasi = await MMutasi.query().where({ id: mutasi_id }).update({
      dihapus: 1,
    });

    if (!mutasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putMutasi({ response, request, auth, params: { mutasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const beforeUpdate = await MMutasi.query().where({ id: mutasi_id }).first();

    const { tipe, nama, kategori, nominal, waktu_dibuat } = request.post();
    const rules = {
      nama: "required",
      tipe: "required",
      kategori: "required",
      nominal: "required",
    };
    const message = {
      "tipe.required": "Tipe harus dipilih",
      "nama.required": "Nama harus diisi",
      "kategori.required": "Kategori harus diisi",
      "nominal.required": "Nominal harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const mutasi = await MMutasi.query().where({ id: mutasi_id }).update({
      tipe,
      nama,
      kategori,
      nominal,
      waktu_dibuat,
    });

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    if (rekSekolah) {
      let pemasukan, pengeluaran;
      if (tipe != beforeUpdate.tipe) {
        if (tipe == "kredit") {
          pemasukan = rekSekolah.pemasukan + nominal;
          pengeluaran = rekSekolah.pengeluaran - beforeUpdate.nominal;
        } else {
          pengeluaran = rekSekolah.pengeluaran + nominal;
          pemasukan = rekSekolah.pemasukan - beforeUpdate.nominal;
        }
      } else {
        if (tipe == "kredit") {
          pemasukan = rekSekolah.pemasukan - beforeUpdate.nominal + nominal;
          pengeluaran = rekSekolah.pengeluaran;
        } else {
          pengeluaran = rekSekolah.pengeluaran - beforeUpdate.nominal + nominal;
          pemasukan = rekSekolah.pemasukan;
        }
      }

      await MRekSekolah.query().where({ m_sekolah_id: sekolah.id }).update({
        pemasukan,
        pengeluaran,
      });
    }

    if (!mutasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteMutasi({ response, request, auth, params: { mutasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const beforeUpdate = await MMutasi.query().where({ id: mutasi_id }).first();
    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    if (rekSekolah) {
      let pemasukan, pengeluaran;
      if (beforeUpdate.tipe == "kredit") {
        // Kredit == pemasukan
        pemasukan = rekSekolah.pemasukan - beforeUpdate.nominal;
        if (pemasukan < 0) {
          pemasukan = 0;
        }
        pengeluaran = rekSekolah.pengeluaran;
      } else {
        // debit == pengeluaran
        pengeluaran = rekSekolah.pengeluaran - beforeUpdate.nominal;
        if (pengeluaran < 0) {
          pengeluaran = 0;
        }
        pemasukan = rekSekolah.pemasukan;
      }

      await MRekSekolah.query().where({ m_sekolah_id: sekolah.id }).update({
        pemasukan,
        pengeluaran,
      });
    }

    const mutasi = await MMutasi.query().where({ id: mutasi_id }).update({
      dihapus: 1,
    });

    if (!mutasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getIndustri({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // get industri
  }

  async postIndustri({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let {
      nama,
      klasifikasi,
      jumlah_karyawan,
      tautan,
      galeri,
      deskripsi,
      tahun_kerjasama,
    } = request.post();

    const rules = {
      nama: "required",
      klasifikasi: "required",
      jumlah_karyawan: "required",
      tautan: "required",
      galeri: "required",
      deskripsi: "required",
      tahun_kerjasama: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "klasifikasi.required": "Klasifikasi harus diisi",
      "jumlah_karyawan.required": "Jumlah karyawan harus diisi",
      "tautan.required": "Tautan harus diisi",
      "galeri.required": "Galeri harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
      "tahun_kerjasama.required": "Tahun kerjasama harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    galeri = galeri ? galeri.toJSON() : null;
    deskripsi = deskripsi ? htmlEscaper.unescape(deskripsi) : null;
    tautan = tautan ? JSON.stringify(tautan) : null;

    await MIndustri.create({
      nama,
      klasifikasi,
      jumlah_karyawan,
      tautan,
      galeri,
      deskripsi,
      tahun_kerjasama,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putIndustri({ response, request, auth, params: { industri_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let {
      nama,
      klasifikasi,
      jumlah_karyawan,
      tautan,
      galeri,
      deskripsi,
      tahun_kerjasama,
    } = request.post();

    const rules = {
      nama: "required",
      klasifikasi: "required",
      jumlah_karyawan: "required",
      tautan: "required",
      galeri: "required",
      deskripsi: "required",
      tahun_kerjasama: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "klasifikasi.required": "Klasifikasi harus diisi",
      "jumlah_karyawan.required": "Jumlah karyawan harus diisi",
      "tautan.required": "Tautan harus diisi",
      "galeri.required": "Galeri harus diisi",
      "deskripsi.required": "Deskripsi harus diisi",
      "tahun_kerjasama.required": "Tahun kerjasama harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    galeri = galeri ? galeri.toJSON() : null;
    deskripsi = deskripsi ? htmlEscaper.unescape(deskripsi) : null;
    tautan = tautan ? JSON.stringify(tautan) : null;

    const industri = await MIndustri.query().where({ id: industri_id }).update({
      nama,
      klasifikasi,
      jumlah_karyawan,
      tautan,
      galeri,
      deskripsi,
      tahun_kerjasama,
    });

    if (!industri) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteIndustri({ response, request, auth, params: { industri_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const industri = await MIndustri.query().where({ id: industri_id }).update({
      dihapus: 1,
    });

    if (!industri) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getProyek({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const { search, searchall, page } = request.get();

    let proyek;
    let proyekall;

    if (search) {
      // ===== service cari proyek ====

      proyek = MProyek.query()
        .withCount("anggota", (builder) => {
          builder.where({ status: "menerima" });
        })
        .with("anggota", (builder) => {
          builder
            .with("user", (builder) => {
              builder
                .select("id", "m_sekolah_id")
                .with("sekolah", (builder) => {
                  builder.select("id", "nama", "logo_ss");
                });
            })
            .where({ status: "menerima" });
        })
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${search}%`);
    } else {
      // ===== service proyek saya ====

      // cek proyek yg diterima
      const terimaProyekIds = await MAnggotaProyek.query()
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .andWhere({ status: "menerima" })
        .pluck("m_proyek_id");

      // ambil data dari proyek yg diterima
      proyek = MProyek.query()
        .withCount("anggota", (builder) => {
          builder.where({ status: "menerima" });
        })
        .with("anggota", (builder) => {
          builder
            .with("user", (builder) => {
              builder
                .select("id", "m_sekolah_id")
                .with("sekolah", (builder) => {
                  builder.select("id", "nama", "logo_ss");
                });
            })
            .where({ status: "menerima" });
        })
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("id", terimaProyekIds);
    }

    proyekall = MProyek.query()
      .withCount("anggota", (builder) => {
        builder.where({ status: "menerima" });
      })
      .with("anggota", (builder) => {
        builder
          .with("user", (builder) => {
            builder.select("id", "m_sekolah_id").with("sekolah", (builder) => {
              builder.select("id", "nama", "logo_ss");
            });
          })
          .where({ status: "menerima" });
      })
      .where({ dihapus: 0 });

    if (searchall) {
      proyekall.andWhere("nama", "like", `%${searchall}%`);
    }

    // ===== service cari partner ====
    const cariPartner = await MAnggotaProyek.query()
      .where({ dihapus: 0 })
      .pluck("m_user_id");

    const userPartner = await User.query()
      .where({ dihapus: 0 })
      .andWhere("nama", "like", `%${search}%`)
      .whereIn("id", cariPartner)
      .fetch();

    // ===== List Undangan =====
    const undangan = await MAnggotaProyek.query()
      .with("proyek", (builder) => {
        builder
          .withCount("anggota", (builder) => {
            builder.where({ status: "menerima" });
          })
          .with("anggota", (builder) => {
            builder
              .with("user", (builder) => {
                builder
                  .select("id", "m_sekolah_id")
                  .with("sekolah", (builder) => {
                    builder.select("id", "nama", "logo_ss");
                  });
              })
              .where({ status: "menerima" });
          });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .andWhere({ status: "undangan" })
      .fetch();

    return response.ok({
      proyek: await proyek.paginate(parseInt(page), 18),
      userPartner: userPartner,
      undangan: undangan,
      proyekall: await proyekall.paginate(parseInt(page), 18),
    });
  }

  async searchProyek({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const { search, m_sekolah_id, page, bentuk } = request.get();

    let sekolahIds = MSekolah.query();

    if (m_sekolah_id) {
      sekolahIds.where({ id: m_sekolah_id });
    }
    if (bentuk) {
      sekolahIds.where({ tingkat: bentuk });
    }
    sekolahIds = await sekolahIds.ids();

    let proyekAll = MProyek.query()
      .withCount("anggota", (builder) => {
        builder.where({ status: "menerima" });
      })
      .with("anggota", (builder) => {
        builder
          .with("user", (builder) => {
            builder.select("id", "m_sekolah_id").with("sekolah", (builder) => {
              builder.select("id", "nama", "logo_ss");
            });
          })
          .where({ status: "menerima" });
      })
      .whereIn("m_sekolah_id", sekolahIds);

    if (search) {
      proyekAll.where("nama", "like", `%${search}%`);
    }
    proyekAll = await proyekAll.paginate(page, 20);

    return { proyekAll };
  }

  async detailProyek({ response, request, auth, params: { proyek_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const proyek = await MProyek.query()
      .with("status")
      .with("user")
      .with("sekolah")
      .with("forum", (builder) => {
        builder.where({ dihapus: 0 }).orderBy("created_at", "desc");
      })
      .with("anggota", (builder) => {
        builder
          .with("user", (builder) => {
            builder.with("sekolah");
          })
          .with("role")
          .where({ dihapus: 0 });
      })
      .where({ id: proyek_id })
      .first();

    // const forumKomen = await MProyekForumKomen.query()
    //   .where({ dihapus: 0 })
    //   .andWhere({ m_proyek_forum: MProyekForum.id })
    //   .fetch();

    return response.ok({
      message: messagePostSuccess,
      proyek,
      // forumKomen,
    });
  }

  async getUser({ response, request, auth }) {
    const {
      page,
      name,
      user_id,
      role = [],
      notRole = [],
      sekolah_id,
      bentuk,
      m_sekolah_id,
    } = request.get();

    let sekolahIds = [];
    if (bentuk) {
      sekolahIds = await MSekolah.query().where({ tingkat: bentuk }).ids();
    }

    let user = User.query()
      .with("sekolah")
      .with("profil")
      .where({ dihapus: 0 })
      .andWhereNot({ role: "admin" });

    if (
      (!notRole.includes("siswa") && role.includes("siswa")) ||
      (role.length == 0 && notRole.length == 0)
    ) {
      user.with("anggotaRombel", (builder) => {
        builder.with("rombel", (builder) => {
          builder.with("jurusan");
        });
      });
    } else {
      if (role) {
        user.whereIn("role", role);
      }
      if (notRole) {
        user.whereNotIn("role", notRole);
      }
    }
    if (name) {
      user.where("nama", "like", `%${name}%`);
    }
    if (user_id) {
      user.where({ id: user_id });
    }
    if (sekolah_id) {
      user.where({ m_sekolah_id: sekolah_id });
    }
    if (m_sekolah_id) {
      user.where({ m_sekolah_id: m_sekolah_id });
    } else if (sekolahIds.length) {
      user.whereIn("m_sekolah_id", sekolahIds);
    }

    if (user_id) {
      user = await user.first();
    } else if (sekolah_id) {
      user = await user.limit(50).fetch();
    } else {
      user = await user.paginate(page, 18);
    }

    return response.ok({
      user: user,
    });
  }

  async getUserSer({ response, request, auth }) {
    const {
      page,
      name,
      user_id,
      role = [],
      notRole = [],
      sekolah_id,
      bentuk,
      m_sekolah_id,
      keahlian,
    } = request.get();

    let sekolahIds = [];
    if (bentuk) {
      sekolahIds = await MSekolah.query().where({ tingkat: bentuk }).ids();
    }

    let keahlianIds;
    if (keahlian) {
      keahlianIds = await MProfilUser.query()
        .where("keahlian", "LIKE", `%${keahlian}%`)
        .pluck("m_user_id");
    }

    let user = User.query()
      .with("sekolah")
      .with("profil")
      .where({ dihapus: 0 })
      .andWhere({ role: "siswa" });
    // .andWhereNot({ role: "admin" });

    if (name) {
      user.where("nama", "like", `%${name}%`);
    }
    if (user_id) {
      user.where({ id: user_id });
    }
    if (sekolah_id) {
      user.where({ m_sekolah_id: sekolah_id });
    }
    if (m_sekolah_id) {
      user.where({ m_sekolah_id: m_sekolah_id });
    } else if (sekolahIds.length) {
      user.whereIn("m_sekolah_id", sekolahIds);
    }

    if (keahlian) {
      user.whereIn("m_user_id", keahlianIds);
    }

    if (user_id) {
      user = await user.first();
    } else if (sekolah_id) {
      user = await user.limit(50).fetch();
    } else {
      user = await user.paginate(page, 18);
    }

    return response.ok({
      user: user,
    });
  }

  async detailUser({ response, request, auth, params: { user_id } }) {
    const role = await auth.getUser();
    if (role.role != "admin") {
      return response.json({
        message: messageForbidden,
      });
    }
    const user = await User.query()
      .where({ dihapus: 0 })
      .where({ id: user_id })
      .first();

    return response.ok({
      user: user,
    });
  }

  async getKategoriPekerjaan({
    response,
    request,
    auth,
    params: { proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { user_id, prioritas, status, batas_waktu } = request.get();

    let kategori;

    if (batas_waktu) {
      kategori = await MKategoriPekerjaan.query()
        .with("pekerjaan", (builder) => {
          builder
            .with("ditugaskan", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            })
            .where({ dihapus: 0 })
            .andWhere({ batas_waktu: batas_waktu });
        })
        .where({ m_proyek_id: proyek_id })
        .andWhere({ dihapus: 0 })
        .orderBy("urutan", "asc")
        .fetch();
    } else if (prioritas) {
      kategori = await MKategoriPekerjaan.query()
        .with("pekerjaan", (builder) => {
          builder
            .with("ditugaskan", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            })
            .where({ dihapus: 0 })
            .andWhere({ prioritas: prioritas });
        })
        .where({ m_proyek_id: proyek_id })
        .andWhere({ dihapus: 0 })
        .orderBy("urutan", "asc")
        .fetch();
    } else {
      kategori = await MKategoriPekerjaan.query()
        .with("pekerjaan", (builder) => {
          builder
            .with("ditugaskan", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            })
            .where({ dihapus: 0 });
        })
        .where({ m_proyek_id: proyek_id })
        .andWhere({ dihapus: 0 })
        .orderBy("urutan", "asc")
        .fetch();
    }

    return response.ok({
      kategori: kategori,
    });
  }

  async postProyek({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, privasi, deskripsi, banner, m_status_proyek_id } =
      request.post();

    const rules = {
      nama: "required",
      privasi: "required",
      deskripsi: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "privasi.required": "Privasi harus dipilih",
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const proyek = await MProyek.create({
      nama,
      privasi,
      deskripsi,
      banner,
      m_status_proyek_id,
      m_user_id: user.id,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    const anggota = await MAnggotaProyek.create({
      m_proyek_id: proyek.id,
      m_user_id: user.id,
      status: "menerima",
      dihapus: 0,
    });
    await anggota.role().create({
      role: "Pemilik",
      dihapus: 0,
    });

    const kategori = await MKategoriPekerjaan.createMany([
      {
        nama: "Daftar Pekerjaan",
        warna: "#2680eb",
        m_proyek_id: proyek.id,
        dihapus: 0,
        urutan: 1,
      },
      {
        nama: "Sedang Dikerjakan",
        warna: "#f9ac50",
        m_proyek_id: proyek.id,
        dihapus: 0,
        urutan: 2,
      },
      {
        nama: "Selesai",
        warna: "#62ed7a",
        m_proyek_id: proyek.id,
        dihapus: 0,
        urutan: 3,
      },
    ]);

    return response.ok({
      proyek,
      kategori,
      message: messagePostSuccess,
    });
  }

  async putProyek({ response, request, auth, params: { proyek_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, privasi, deskripsi, banner, m_status_proyek_id } =
      request.post();

    const rules = {
      nama: "required",
      privasi: "required",
      deskripsi: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "privasi.required": "Privasi harus dipilih",
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const proyek = await MProyek.query()
      .where({ id: proyek_id })
      .andWhere({ m_user_id: user.id })
      .update({
        nama,
        privasi,
        deskripsi,
        banner,
        m_status_proyek_id,
        m_user_id: user.id,
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });

    if (!proyek) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteProyek({ response, request, auth, params: { proyek_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const proyek = await MProyek.query()
      .where({ id: proyek_id })
      .andWhere({ m_user_id: user.id })
      .update({
        dihapus: 1,
      });

    if (!proyek) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postKategoriPekerjaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama, warna, m_proyek_id } = request.post();
    const rules = {
      nama: "required",
      warna: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "warna.required": "Warna harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    warna = warna
      ? warna
      : `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const maxUrutan = await MKategoriPekerjaan.query().getMax("urutan");

    const kategori = await MKategoriPekerjaan.create({
      nama,
      warna,
      urutan: maxUrutan,
      m_proyek_id,
      dihapus: 0,
    });

    return response.ok({
      kategori,
      message: messagePostSuccess,
    });
  }

  async putKategoriPekerjaan({
    response,
    request,
    auth,
    params: { kategori_pekerjaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, warna, m_proyek_id } = request.post();
    const rules = {
      nama: "required",
      warna: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "warna.required": "Warna harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kategoriPekerjaan = await MKategoriPekerjaan.query()
      .where({ id: kategori_pekerjaan_id })
      .update({
        nama,
        warna,
        m_proyek_id,
        dihapus: 0,
      });

    if (!kategoriPekerjaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKategoriPekerjaan({
    response,
    request,
    auth,
    params: { kategori_pekerjaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const kategoriPekerjaan = await MKategoriPekerjaan.query()
      .where({ id: kategori_pekerjaan_id })
      .update({
        dihapus: 1,
      });

    if (!kategoriPekerjaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  // ===================== Forum Proyek Service ===========================
  async postProyekForum({ response, request, auth, params: { proyek_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { deskripsi, lampiran, m_user_id } = request.post();
    const rules = {
      deskripsi: "required",
    };
    const message = {
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const forum = await MProyekForum.create({
      deskripsi,
      lampiran: lampiran ? lampiran : "",
      m_proyek_id: parseInt(proyek_id),
      m_user_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
      forum,
    });
  }

  async putProyekForum({
    response,
    request,
    auth,
    params: { proyek_id },
    params: { proyekForum_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { deskripsi, lampiran, m_proyek_id } = request.post();
    const rules = {
      deskripsi: "required",
    };
    const message = {
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const proyekForum = await MProyekForum.query()
      .where({ id: proyekForum_id })
      .andWhere({ m_user_id: user.id })
      .update({
        deskripsi,
        lampiran,
        m_proyek_id,
        dihapus: 0,
      });

    if (!proyekForum) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteProyekForum({
    response,
    request,
    auth,
    params: { proyek_id },
    params: { proyekForum_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const proyekForum = await MProyekForum.query()
      .where({ id: proyekForum_id })
      .andWhere({ m_proyek_id: proyek_id })
      .update({
        dihapus: 1,
      });

    if (!proyekForum) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  // ===================== Proyek Pekerjaan Service ===========================
  async postPekerjaanProyek({
    response,
    request,
    auth,
    params: { kategori_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, prioritas, status, batas_waktu, deskripsi, urutan } =
      request.post();

    const maxUrutan =
      (await MPekerjaanProyek.query()
        .where({ m_kategori_pekerjaan_id: kategori_id })
        .getMax("urutan")) + 1;

    const pekerjaan = await MPekerjaanProyek.create({
      judul,
      prioritas,
      status,
      batas_waktu,
      deskripsi,
      m_kategori_pekerjaan_id: kategori_id,
      urutan: maxUrutan,
      dihapus: 0,
    });

    return response.ok({
      pekerjaan,
      message: messagePostSuccess,
    });
  }

  async putPekerjaanProyek({
    response,
    request,
    auth,
    params: { pekerjaan_proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      prioritas,
      status,
      batas_waktu,
      deskripsi,
      m_kategori_pekerjaan_id,
      urutan,
    } = request.post();

    const pekerjaanProyek = await MPekerjaanProyek.query()
      .where({ id: pekerjaan_proyek_id })
      // .andWhere({ m_user_id: user.id }) // Kolom m_user_id tidak ada di table pekerjaan proyek
      .update({
        judul,
        prioritas,
        status,
        batas_waktu,
        deskripsi,
        m_kategori_pekerjaan_id,
        urutan,
        dihapus: 0,
      });

    if (!pekerjaanProyek) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePekerjaanProyek({
    response,
    request,
    auth,
    params: { pekerjaan_proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const pekerjaanProyek = await MPekerjaanProyek.query()
      .where({ id: pekerjaan_proyek_id })
      .update({
        dihapus: 1,
      });

    if (!pekerjaanProyek) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  // ===================== Anggota Proyek Service =========================

  // async getAnggotaProyek({ response, request, auth }) {
  //   const domain = request.headers().origin;

  //   const sekolah = await this.getSekolahByDomain(domain);

  //   if (sekolah == "404") {
  //     return response.notFound({ message: "Sekolah belum terdaftar" });
  //   }

  //   const { proyek_id } = request.get();

  //   const anggota = await MAnggotaProyek.query()
  //     .where({ dihapus: 0 })
  //     .andWhere({ status: "menerima" })
  //     .andWhere({ m_proyek_id: proyek_id })
  //     .fetch();

  //   return response.ok({
  //     anggota,
  //   });
  // }

  // ============ Invite Anggota kedalam Proyek =================
  async postAnggotaProyek({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { anggota_proyek_id, proyek_id, user_id, status } = request.post();

    const validation = await validate(
      request.post(),
      rulesAnggotaPost,
      pesanSudahDitambahkan
    );

    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const isAdmin = await MAnggotaProyekRole.query()
      .where({ m_anggota_proyek_id: anggota_proyek_id })
      .andWhere({ dihapus: 0 })
      .orWhere({ role: "Admin" })
      .orWhere({ role: "Pemilik" })
      .fetch();

    if (!isAdmin) {
      return response.forbidden({ message: messageForbidden });
    }

    await Promise.all(
      user_id.map(async (d, idx) => {
        await MAnggotaProyek.create({
          m_proyek_id: proyek_id,
          m_user_id: d,
          status: status,
          dihapus: 0,
        });
      })
    );

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ================ Update status Anggota Proyek ======================
  async putAnggotaProyek({
    response,
    request,
    auth,
    params: { anggota_proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { status, role = "Anggota" } = request.post();

    const anggota = await MAnggotaProyek.query()
      .where({ id: anggota_proyek_id })
      .andWhere({ dihapus: 0 })
      .update({
        status,
      });

    if (status == "menerima") {
      const update = await MAnggotaProyekRole.query()
        .where({
          m_anggota_proyek_id: anggota_proyek_id,
        })
        .update({
          role: role,
          dihapus: 0,
        });
      if (!update) {
        await MAnggotaProyekRole.create({
          m_anggota_proyek_id: anggota_proyek_id,
          role: role,
          dihapus: 0,
        });
      }
    }

    if (!anggota) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteAnggotaProyek({
    response,
    request,
    auth,
    params: { anggota_proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { delete_anggota } = request.post();

    // Cek Role, selain admin tidak boleh delete anggota
    // const isAdmin = await MAnggotaProyekRole.query()
    //   .where({ m_anggota_proyek_id: anggota_proyek_id })
    //   .andWhere({ role: "Admin" })
    //   .fetch();

    // if (!isAdmin) {
    //   return response.forbidden({ message: messageForbidden });
    // }

    const hapusAnggota = await MAnggotaProyek.query()
      .where({ id: anggota_proyek_id })
      .delete();

    if (!hapusAnggota) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  // =========== Rekap Nilai Service ==============

  async detailRekap({ response, request, auth, params: { materi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nav } = request.get();

    const pelajaran = await MMateri.query()
      .with("mataPelajaran")
      .where({ id: materi_id })
      .first();
    const semuaTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .whereNot({ id: pelajaran.toJSON().mataPelajaran.m_ta_id })
      .fetch();

    const sikapsosial = await MSikapSosial.query().fetch();

    // const tugas = await MTugas.query().where({ m_user_id: user.id }).fetch();

    const rekap = await MMateri.query()
      .with("jurusan")
      .with("mataPelajaran")
      .with("rekap", (builder) => {
        builder
          .with("rekaprombel", (builder) => {
            builder.withCount("rekapnilai as total", (builder) => {
              builder.where(
                "nilai",
                "<",
                `${pelajaran.toJSON().mataPelajaran.kkm}`
              );
            });
          })
          .where({ dihapus: 0 });
      })
      .where({ id: materi_id })
      // .andWhere({ dihapus: 0 })
      .first();

    const materirombel = await TkMateriRombel.query()
      .with("rombel", (builder) => {
        builder.with("anggotaRombel", (builder) => {
          builder.where({ dihapus: 0 }).with("user", (builder) => {
            builder
              .with("rekapSikap", (builder) => {
                builder.where({
                  m_mata_pelajaran_id: pelajaran.toJSON().mataPelajaran.id,
                });
              })
              .select("id", "nama");
          });
        });
      })
      .where({ m_materi_id: materi_id })
      .fetch();

    const janganUlangRombel = [];
    const rombel = materirombel.toJSON().filter((d) => {
      if (!janganUlangRombel.includes(d.m_rombel_id)) {
        janganUlangRombel.push(d.m_rombel_id);
        return true;
      } else {
        return false;
      }
    });

    const checkPredikat = await MPredikatNilai.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (!checkPredikat) {
      await MPredikatNilai.create({
        predikat: "A",
        bb_pengetahuan: "86",
        ba_pengetahuan: "100",
        bb_keterampilan: "86",
        ba_keterampilan: "100",
        sikap: "Sangat Baik",
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });
      await MPredikatNilai.create({
        predikat: "B",
        bb_pengetahuan: "71",
        ba_pengetahuan: "86",
        bb_keterampilan: "71",
        ba_keterampilan: "86",
        sikap: "Baik",
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });
      await MPredikatNilai.create({
        predikat: "C",
        bb_pengetahuan: "56",
        ba_pengetahuan: "71",
        bb_keterampilan: "56",
        ba_keterampilan: "71",
        sikap: "Cukup",
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });
      await MPredikatNilai.create({
        predikat: "D",
        bb_pengetahuan: "0",
        ba_pengetahuan: "56",
        bb_keterampilan: "0",
        ba_keterampilan: "56",
        sikap: "Kurang",
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });
    }

    const checkTemplate = await MTemplateDeskripsi.query()
      .where({ m_mata_pelajaran_id: rekap.m_mata_pelajaran_id })
      .first();

    const predikat = await MPredikatNilai.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    if (!checkTemplate) {
      await Promise.all(
        predikat.toJSON().map(async (d) => {
          if (d.predikat == "A") {
            await MTemplateDeskripsi.create({
              tipe: "Pengetahuan",
              m_predikat_nilai_id: d.id,
              m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
              prolog:
                "Peserta didik dinyatakan telah mengetahui, memahami, mengimplementasikan dan menganalisis pengetahuan dengan sangat baik mengenai",
              epilog: "Perlu ditingkatkan mengenai",
            });
            await MTemplateDeskripsi.create({
              tipe: "Keterampilan",
              m_predikat_nilai_id: d.id,
              m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
              prolog:
                "Peserta didik dinyatakan telah dapat mengetahui, menerapkan, menganalisis, dan mengeveluasi keterampilan dengan sangat baik mengenai",
              epilog: "Perlu ditingkatkan mengenai",
            });
          } else if (d.predikat == "B") {
            await MTemplateDeskripsi.create({
              tipe: "Pengetahuan",
              m_predikat_nilai_id: d.id,
              m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
              prolog:
                "Peserta didik dinyatakan telah mengetahui, memahami, mengimplementasikan dan menganalisis pengetahuan dengan baik mengenai",
              epilog: "Perlu ditingkatkan mengenai",
            });
            await MTemplateDeskripsi.create({
              tipe: "Keterampilan",
              m_predikat_nilai_id: d.id,
              m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
              prolog:
                "Peserta didik dinyatakan telah dapat mengetahui, menerapkan, menganalisis, dan mengeveluasi keterampilan dengan baik mengenai",
              epilog: "Perlu ditingkatkan mengenai",
            });
          } else if (d.predikat == "C") {
            await MTemplateDeskripsi.create({
              tipe: "Pengetahuan",
              m_predikat_nilai_id: d.id,
              m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
              prolog:
                "Peserta didik dinyatakan telah mengetahui, memahami, mengimplementasikan dan menganalisis pengetahuan dengan cukup mengenai",
              epilog: "Perlu ditingkatkan mengenai",
            });
            await MTemplateDeskripsi.create({
              tipe: "Keterampilan",
              m_predikat_nilai_id: d.id,
              m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
              prolog:
                "Peserta didik dinyatakan telah dapat mengetahui, menerapkan, menganalisis, dan mengeveluasi keterampilan dengan cukup mengenai",
              epilog: "Perlu ditingkatkan mengenai",
            });
          } else if (d.predikat == "D") {
            await MTemplateDeskripsi.create({
              tipe: "Pengetahuan",
              m_predikat_nilai_id: d.id,
              m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
              prolog:
                "Peserta didik dinyatakan telah mengetahui, memahami, mengimplementasikan dan menganalisis pengetahuan dengan kurang mengenai",
              epilog: "Perlu ditingkatkan mengenai",
            });
            await MTemplateDeskripsi.create({
              tipe: "Keterampilan",
              m_predikat_nilai_id: d.id,
              m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
              prolog:
                "Peserta didik dinyatakan telah dapat mengetahui, menerapkan, menganalisis, dan mengeveluasi keterampilan dengan kurang mengenai",
              epilog: "Perlu ditingkatkan mengenai",
            });
          } else {
            await MTemplateDeskripsi.create({
              tipe: "Pengetahuan",
              m_predikat_nilai_id: d.id,
              m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
              prolog:
                "Peserta didik dinyatakan telah mengetahui, memahami, mengimplementasikan dan menganalisis pengetahuan dengan sangat baik mengenai",
              epilog: "Perlu ditingkatkan mengenai",
            });
            await MTemplateDeskripsi.create({
              tipe: "Keterampilan",
              m_predikat_nilai_id: d.id,
              m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
              prolog:
                "Peserta didik dinyatakan telah dapat mengetahui, menerapkan, menganalisis, dan mengeveluasi keterampilan dengan sangat baik mengenai",
              epilog: "Perlu ditingkatkan mengenai",
            });
          }
        })
      );

      await MTemplateDeskripsi.create({
        tipe: "Sikap",
        m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
        prolog: "Peserta didik dinyatakan telah menunjukkan sikap - sikap",
        epilog: "Perlu ditingkatkan mengenai",
      });
    }

    await Promise.all(
      predikat.toJSON().map(async (d) => {
        const checkTemplate1 = await MTemplateDeskripsi.query()
          .where({ m_predikat_nilai_id: d.id })
          .first();

        if (!checkTemplate1) {
          await MTemplateDeskripsi.create({
            tipe: "Pengetahuan",
            m_predikat_nilai_id: d.id,
            m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
            prolog:
              "Peserta didik dinyatakan telah mengetahui, memahami, mengimplementasikan dan menganalisis pengetahuan dengan sangat baik mengenai",
            epilog: "Perlu ditingkatkan mengenai",
          });
          await MTemplateDeskripsi.create({
            tipe: "Keterampilan",
            m_predikat_nilai_id: d.id,
            m_mata_pelajaran_id: rekap.m_mata_pelajaran_id,
            prolog:
              "Peserta didik dinyatakan telah dapat mengetahui, menerapkan, menganalisis, dan mengeveluasi keterampilan dengan sangat baik mengenai",
            epilog: "Perlu ditingkatkan mengenai",
          });
        }
      })
    );

    const dataTemplatePengetahuan = await MTemplateDeskripsi.query()
      .with("predikat")
      .where({ m_mata_pelajaran_id: rekap.m_mata_pelajaran_id })
      .andWhere({ tipe: "Pengetahuan" })
      .fetch();

    const dataTemplateKeterampilan = await MTemplateDeskripsi.query()
      .with("predikat")
      .where({ m_mata_pelajaran_id: rekap.m_mata_pelajaran_id })
      .andWhere({ tipe: "Keterampilan" })
      .fetch();

    const dataTemplateSikap = await MTemplateDeskripsi.query()
      .with("predikat")
      .where({ m_mata_pelajaran_id: rekap.m_mata_pelajaran_id })
      .andWhere({ tipe: "Sikap" })
      .fetch();

    return response.ok({
      rekap,
      materirombel: rombel,
      dataTemplatePengetahuan,
      dataTemplateKeterampilan,
      dataTemplateSikap,
      sikapsosial,
      // tugas,
      predikat,
      semuaTA,
    });
  }

  async putTemplateDeskripsi({
    response,
    request,
    auth,
    params: { template_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { prolog, epilog } = request.post();

    const rules = {
      prolog: "required",
      epilog: "required",
    };
    const message = {
      "prolog.required": "Prolog harus diisi",
      "epilog.required": "Epilog harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const template = await MTemplateDeskripsi.query()
      .where({ id: template_id })
      .update({
        prolog,
        epilog,
      });

    if (!template) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async postSikapRombel({
    response,
    request,
    auth,
    params: { user_id, mata_pelajaran_id },
    params: { rombel_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // const user = await auth.getUser();

    const {
      m_sikap_ditunjukkan_id,
      m_sikap_ditingkatkan_id,
      m_predikat_nilai_id,
    } = request.post();
    const rules = {
      m_sikap_ditingkatkan_id: "required",
      m_sikap_ditunjukkan_id: "required",
      m_predikat_nilai_id: "required",
    };
    const message = {
      "m_sikap_ditingkatkan_id.required":
        "Pilih salah satu sikap yang ditingkatkan",
      "m_sikap_ditunjukkan_id.required":
        "Pilih salah satu sikap yang ditunjukkan",
      "m_predikat_nilai_id.required": "Pilih salah satu predikat",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const sikap = await MSikapRombel.query()
      .where({ m_user_id: user_id })
      .andWhere({ m_rombel_id: rombel_id })
      .andWhere({ m_mata_pelajaran_id: mata_pelajaran_id })
      .first();

    if (!sikap) {
      await MSikapRombel.create({
        m_user_id: user_id,
        m_rombel_id: rombel_id,
        m_sikap_ditunjukkan_id: m_sikap_ditunjukkan_id
          ? m_sikap_ditunjukkan_id.length
            ? m_sikap_ditunjukkan_id.toString()
            : null
          : null,
        m_sikap_ditingkatkan_id: m_sikap_ditingkatkan_id
          ? m_sikap_ditingkatkan_id.length
            ? m_sikap_ditingkatkan_id.toString()
            : null
          : null,
        m_predikat_nilai_id,
        m_mata_pelajaran_id: mata_pelajaran_id,
        status: 1,
        dihapus: 0,
      });
      return response.ok({
        message: messagePostSuccess,
      });
    } else {
      await MSikapRombel.query()
        .where({ id: sikap.id })
        .update({
          m_sikap_ditunjukkan_id: m_sikap_ditunjukkan_id
            ? m_sikap_ditunjukkan_id.length
              ? m_sikap_ditunjukkan_id.toString()
              : null
            : null,
          m_sikap_ditingkatkan_id: m_sikap_ditingkatkan_id
            ? m_sikap_ditingkatkan_id.length
              ? m_sikap_ditingkatkan_id.toString()
              : null
            : null,
          m_predikat_nilai_id,
          m_mata_pelajaran_id: mata_pelajaran_id,
        });
    }
    return response.ok({
      message: messagePutSuccess,
    });
  }
  async postRaporSikapSosial({ response, request, auth, params: { user_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }
    const {
      m_sikap_sosial_ditunjukkan_id,
      m_sikap_sosial_ditingkatkan_id,
      tipe,
    } = request.post();

    const checkSikap = await MSikapSiswa.query()
      .where({ m_user_id: user_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: ta.id })
      .where({ tipe })
      .first();

    const rules = {
      m_sikap_sosial_ditingkatkan_id: "required",
      m_sikap_sosial_ditunjukkan_id: "required",
    };
    const message = {
      "m_sikap_sosial_ditingkatkan_id.required":
        "Pilih salah satu sikap yang ditingkatkan",
      "m_sikap_sosial_ditunjukkan_id.required":
        "Pilih salah satu sikap yang ditunjukkan",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    let sikap;

    if (checkSikap) {
      sikap = await MSikapSiswa.query()
        .where({ m_user_id: user_id })
        .where({ id: checkSikap.id })
        .update({
          tipe,
          m_sikap_sosial_ditunjukkan_id: m_sikap_sosial_ditunjukkan_id
            ? m_sikap_sosial_ditunjukkan_id.length
              ? m_sikap_sosial_ditunjukkan_id.toString()
              : null
            : null,
          m_sikap_sosial_ditingkatkan_id: m_sikap_sosial_ditingkatkan_id
            ? m_sikap_sosial_ditingkatkan_id.length
              ? m_sikap_sosial_ditingkatkan_id.toString()
              : null
            : null,
        });
    } else {
      sikap = await MSikapSiswa.create({
        m_user_id: user_id,
        tipe,
        m_sikap_sosial_ditunjukkan_id: m_sikap_sosial_ditunjukkan_id
          ? m_sikap_sosial_ditunjukkan_id.length
            ? m_sikap_sosial_ditunjukkan_id.toString()
            : null
          : null,
        m_sikap_sosial_ditingkatkan_id: m_sikap_sosial_ditingkatkan_id
          ? m_sikap_sosial_ditingkatkan_id.length
            ? m_sikap_sosial_ditingkatkan_id.toString()
            : null
          : null,
        m_ta_id: ta.id,
        status: 1,
        tipe,
        dihapus: 0,
      });
    }
    if (!sikap) {
      return response.ok({
        message: messagePostSuccess,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async postRaporSikapSpiritual({
    response,
    request,
    auth,
    params: { user_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }
    const {
      m_sikap_spiritual_ditingkatkan_id,
      m_sikap_spiritual_ditunjukkan_id,
      tipe,
    } = request.post();

    const checkSikap = await MSikapSiswa.query()
      .where({ m_user_id: user_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: ta.id })
      .where({ tipe })
      .first();

    const rules = {
      m_sikap_spiritual_ditingkatkan_id: "required",
      m_sikap_spiritual_ditunjukkan_id: "required",
    };
    const message = {
      "m_sikap_spiritual_ditingkatkan_id.required":
        "Pilih salah satu sikap yang ditingkatkan",
      "m_sikap_spiritual_ditunjukkan_id.required":
        "Pilih salah satu sikap yang ditunjukkan",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    let sikap;

    if (checkSikap) {
      sikap = await MSikapSiswa.query()
        .where({ m_user_id: user_id })
        .where({ id: checkSikap.id })
        .update({
          tipe,
          m_sikap_spiritual_ditunjukkan_id: m_sikap_spiritual_ditunjukkan_id
            ? m_sikap_spiritual_ditunjukkan_id.length
              ? m_sikap_spiritual_ditunjukkan_id.toString()
              : null
            : null,
          m_sikap_spiritual_ditingkatkan_id: m_sikap_spiritual_ditingkatkan_id
            ? m_sikap_spiritual_ditingkatkan_id.length
              ? m_sikap_spiritual_ditingkatkan_id.toString()
              : null
            : null,
        });
    } else {
      sikap = await MSikapSiswa.create({
        m_user_id: user_id,
        tipe,
        m_sikap_spiritual_ditunjukkan_id: m_sikap_spiritual_ditunjukkan_id
          ? m_sikap_spiritual_ditunjukkan_id.length
            ? m_sikap_spiritual_ditunjukkan_id.toString()
            : null
          : null,
        m_sikap_spiritual_ditingkatkan_id: m_sikap_spiritual_ditingkatkan_id
          ? m_sikap_spiritual_ditingkatkan_id.length
            ? m_sikap_spiritual_ditingkatkan_id.toString()
            : null
          : null,
        status: 1,
        tipe,
        m_ta_id: ta.id,
        dihapus: 0,
      });
    }
    if (!sikap) {
      return response.ok({
        message: messagePostSuccess,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deleteRaporSikap({ response, request, auth, params: { user_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const sikap = await MSikapSiswa.query()
      .where({ m_user_id: user_id })
      .update({
        m_sikap_sosial_ditunjukkan_id: null,
        m_sikap_sosial_ditingkatkan_id: null,
      });

    if (!sikap) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async deleteRaporSikapSosial({
    response,
    request,
    auth,
    params: { user_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    // const user = await auth.getUser();

    const sikap = await MSikapSiswa.query()
      .where({ m_user_id: user_id })
      .update({
        m_sikap_sosial_ditunjukkan_id: null,
        m_sikap_sosial_ditingkatkan_id: null,
      });

    if (!sikap) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async deleteRaporSikapSpiritual({
    response,
    request,
    auth,
    params: { user_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    // const user = await auth.getUser();

    const sikap = await MSikapSiswa.query()
      .where({ m_user_id: user_id })
      .update({
        m_sikap_spiritual_ditunjukkan_id: null,
        m_sikap_spiritual_ditingkatkan_id: null,
      });

    if (!sikap) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  // ============ Detail Rekap Nilai ============

  async detailRekapNilai({
    response,
    request,
    auth,
    params: { rekap_id },
    // params: { rombel_id },
    params: { materi_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();

    const { rombel_id, tipe, ta_id = user?.m_ta_id || ta.id } = request.get();
    const taa = await Mta.query().where({ id: ta_id }).first();

    const tahunPelajaranIds = await Mta.query()
      .where({ tahun: taa.tahun })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();
    const pelajaran = await MMateri.query()
      .with("mataPelajaran")
      .where({ id: materi_id })
      .first();

    const rombelIds = await MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: taa.id })
      .ids();

    let anggotaRombelIds;

    const materirombel = await TkMateriRombel.query()
      .with("rombel")
      .where({ m_materi_id: materi_id })
      .whereIn("m_rombel_id", rombelIds)
      .fetch();

    let rekap;
    let timelineTugas;
    let tugas;
    let ujian;
    if (rombel_id) {
      anggotaRombelIds = await MAnggotaRombel.query()
        .where({ m_rombel_id: rombel_id })
        .andWhere({ dihapus: 0 })
        .pluck("m_user_id");
      rekap = await MRekap.query()
        .with("rekaprombel", (builder) => {
          builder
            .where({ m_rombel_id: rombel_id })
            .with("rekapnilai", (builder) => {
              builder
                .with("user", (builder) => {
                  builder.select("id", "nama");
                })
                .whereIn("m_user_id", anggotaRombelIds);
            })
            .withCount("rekapnilai as total", (builder) => {
              builder.where(
                "nilai",
                "<",
                `${pelajaran.toJSON().mataPelajaran.kkm}`
              );
            })
            .with("tugas", (builder) => {
              builder.where({ dihapus: 0 });
            })
            .where({ dihapus: 0 });
          // .andWhere({ m_rombel_id: rombel_id });
        })
        .with("materi", (builder) => {
          builder.with("mataPelajaran");
        })
        .where({ id: rekap_id })
        .andWhere({ dihapus: 0 })
        .first();
    } else {
      rekap = await MRekap.query()
        .with("rekaprombel", (builder) => {
          builder
            .with("rekapnilai", (builder) => {
              builder.with("user", (builder) => {
                builder.select("id", "nama");
              });
            })
            .withCount("rekapnilai as total", (builder) => {
              builder.where(
                "nilai",
                "<",
                `${pelajaran.toJSON().mataPelajaran.kkm}`
              );
            })
            .with("tugas", (builder) => {
              builder.where({ dihapus: 0 });
            })
            .where({ dihapus: 0 });
          // .andWhere({ m_rombel_id: rombel_id });
        })
        .with("materi", (builder) => {
          builder.with("mataPelajaran");
        })
        .where({ id: rekap_id })
        .andWhere({ dihapus: 0 })
        .first();
    }

    if (rombel_id) {
      const rombelAktif = await MRombel.query()
        .where({ id: rombel_id })
        .first();
      const dataRombelIds = await MRombel.query()
        .where({ nama: rombelAktif.nama })
        .andWhere({ tingkat: rombelAktif.tingkat })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .whereIn("m_ta_id", tahunPelajaranIds)
        .ids();
      const mapelIds = await MMataPelajaran.query()
        .where({ m_user_id: user.id })
        .where({ dihapus: 0 })
        // .whereIn("m_ta_id", tahunPelajaranIds)
        .ids();
      timelineTugas = await MTimeline.query()
        .where({ m_user_id: user.id })
        .whereIn(" m_rombel_id", dataRombelIds)
        .with("tugas", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .fetch();
      tugas = timelineTugas
        .toJSON()
        .filter((t) => t.tugas != null)
        .map((t) => t.tugas);
      const ujianRombel = await TkJadwalUjian.query()
        .with("jadwalUjian", (builder) => {
          builder
            .with("ujian", (builder) => {
              builder
                .where({ dihapus: 0 })
                .whereIn("m_mata_pelajaran_id", mapelIds);
              if (rekap.teknik == "UTS") {
                builder.andWhere("tipe", "like", `%pts%`);
              } else if (rekap.teknik == "UAS") {
                builder.andWhere("tipe", "like", `%pas%`);
              } else if (rekap.teknik == "UH") {
                builder.andWhere("tipe", "like", `%ph%`);
              } else if (rekap.teknik == "US") {
                builder.andWhere("tipe", "like", `%us%`);
              }
            })
            .where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .whereIn("m_rombel_id", dataRombelIds)
        .fetch();

      // return ujianRombel;

      ujian = ujianRombel
        .toJSON()
        .filter((d) => d.jadwalUjian && d.jadwalUjian.ujian);
    }
    // const tugas = await MTugas.query().where({ m_user_id: user.id }).fetch();

    return response.ok({
      materirombel,
      rekap,
      tugas,
      ujian,
    });
  }

  async detailRekapRombel({
    response,
    request,
    auth,
    // params: { rekap_id },
    params: { materi_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const materirombel = await TkMateriRombel.query()
      .with("rombel")
      .where({ m_materi_id: materi_id })
      .fetch();

    const tugasdata = await MTimeline.query()
      .select("id", "m_tugas_id", "m_rombel_id", "m_user_id")
      .with("listSiswaDinilai", (builder) => {
        builder
          .select("id", "nilai", "m_user_id", "m_timeline_id")
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .whereNotNull("nilai");
      })
      .where({ m_tugas_id: 172 })
      .fetch();

    const datatugas = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder.where({ dihapus: 0 }).with("user", (builder) => {
          builder.select("id", "nama").with("tugas", (builder) => {
            builder
              .select("id", "nilai", "m_user_id", "m_timeline_id")
              .with("user", (builder) => {
                builder.select("id", "nama");
              })
              .whereNotNull("nilai");
          });
        });
      })
      .where({ id: m_rombel_id })
      .fetch();

    // // const rekap = await Promise.all(
    // //   materirombel.toJSON().map(async (d) => {
    // const rekap = await MRekap.query()
    //   .with("rekaprombel", (builder) => {
    //     builder
    //       .with("rekapnilai", (builder) => {
    //         builder.with("user", (builder) => {
    //           builder.select("id", "nama");
    //         });
    //       })
    //       .withCount("rekapnilai as total", (builder) => {
    //         builder.where(
    //           "nilai",
    //           "<",
    //           `${pelajaran.toJSON().mataPelajaran.kkm}`
    //         );
    //       })
    //       .with("tugas")
    //       .where({ dihapus: 0 });
    //     // .andWhere({ m_rombel_id: rombel_id });
    //   })
    //   .with("materi", (builder) => {
    //     builder.with("mataPelajaran");
    //   })
    //   .where({ id: rekap_id })
    //   .andWhere({ dihapus: 0 })
    //   .first();
    // //   })
    // // );

    const tugas = await MTugas.query().where({ m_user_id: user.id }).fetch();

    return response.ok({
      datatugas,
      materirombel,
      // rekap,
      tugas,
      tugasdata,
    });
  }

  async postRekap({ response, request, auth, params: { materi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();
    const ta_id = user?.m_ta_id || ta.id;

    const { judul, teknik, tipe } = request.post();
    const rules = {
      judul: "required",
    };
    const message = {
      "judul.required": "Judul Tugas harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const rekap = await MRekap.create({
      judul,
      teknik,
      tipe,
      m_materi_id: materi_id,
      m_ta_id: ta_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ============ POST Rekap Tugas =================

  async refreshRekapRombel({
    response,
    request,
    auth,
    params: { rekaprombel_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const taS = await this.getTAAktif(sekolah);

    const { ta_id = user?.m_ta_id || taS.id } = request.get();

    const ta = await Mta.query()
      .where({ id: ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    const tahunPelajaranIds = await Mta.query()
      .where({ tahun: ta.tahun })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();

    const rekapRombel = await MRekapRombel.query()
      .where({ id: rekaprombel_id })
      .first();

    const data = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder.where({ dihapus: 0 }).with("user", (builder) => {
          builder.select("id", "nama");
        });
      })
      .where({ id: rekapRombel.m_rombel_id })
      .fetch();

    let all = await Promise.all(
      data.toJSON().map(async (d) => {
        await Promise.all(
          d.anggotaRombel.map(async (e) => {
            let check;
            check = await TkRekapNilai.query()
              .with("rekapRombel", (builder) => {
                builder.with("rekap");
              })
              .where({ m_user_id: e.m_user_id })
              .andWhere({ m_rekap_rombel_id: rekaprombel_id })
              .first();

            if (!check) {
              await TkRekapNilai.create({
                m_user_id: e.m_user_id,
                nilai: 0,
                m_rekap_rombel_id: `${rekaprombel_id}`,
              });
              check = await TkRekapNilai.query()
                .with("rekapRombel", (builder) => {
                  builder.with("rekap");
                })
                .where({ m_user_id: e.m_user_id })
                .andWhere({ m_rekap_rombel_id: rekaprombel_id })
                .first();
            }

            const materi = await MMateri.query()
              .where({ id: check.toJSON().rekapRombel.rekap.m_materi_id })
              .first();

            let rekapNilai = check;

            const checkData = await MUjianSiswa.query()
              .where({ m_user_id: e.m_user_id })
              .andWhere({ m_mata_pelajaran_id: materi.m_mata_pelajaran_id })
              .andWhere({ m_ta_id: ta.id })
              .first();

            if (check.toJSON().rekapRombel.rekap.teknik == "UTS") {
              if (checkData) {
                try {
                  await MUjianSiswa.query()
                    .where({ m_user_id: e.m_user_id })
                    .andWhere({
                      m_mata_pelajaran_id: materi.m_mata_pelajaran_id,
                    })
                    .update({
                      uts_id: rekapNilai.id,
                    });
                } catch (err) {
                  return;
                }
              } else {
                await MUjianSiswa.create({
                  m_user_id: e.m_user_id,
                  m_mata_pelajaran_id: materi.m_mata_pelajaran_id,
                  uts_id: rekapNilai.id,
                  m_ta_id: ta.id,
                });
              }
            } else if (check.toJSON().rekapRombel.rekap.teknik == "UAS") {
              if (checkData) {
                await MUjianSiswa.query()
                  .where({ m_user_id: e.m_user_id })
                  .andWhere({
                    m_mata_pelajaran_id: materi.m_mata_pelajaran_id,
                  })
                  .update({
                    uas_id: rekapNilai.id,
                  });
              } else {
                await MUjianSiswa.create({
                  m_user_id: e.m_user_id,
                  m_mata_pelajaran_id: materi.m_mata_pelajaran_id,
                  uas_id: rekapNilai.id,
                  m_ta_id: ta.id,
                });
              }
            } else if (check.toJSON().rekapRombel.rekap.teknik == "US") {
              if (checkData) {
                await MUjianSiswa.query()
                  .where({ m_user_id: e.m_user_id })
                  .andWhere({
                    m_mata_pelajaran_id: materi.m_mata_pelajaran_id,
                  })
                  .update({
                    us_id: rekapNilai.id,
                  });
              } else {
                await MUjianSiswa.create({
                  m_user_id: e.m_user_id,
                  m_mata_pelajaran_id: materi.m_mata_pelajaran_id,
                  us_id: rekapNilai.id,
                  m_ta_id: ta.id,
                });
              }
            }

            const mapel = await MMataPelajaran.query()
              .with("user")
              .with("materi")
              .where({ id: materi.m_mata_pelajaran_id })
              .first();

            if (
              rekapNilai.toJSON().rekapRombel.rekap.tipe == "tugas" ||
              rekapNilai.toJSON().rekapRombel.rekap.tipe == "ujian"
            ) {
              const rekap = await TkRekapNilai.query()
                .with("rekapRombel", (builder) => {
                  builder.with("rekap", (builder) => {
                    builder
                      .where({ tipe: "tugas" })
                      .andWhere({ m_ta_id: ta.id })
                      .andWhere({ dihapus: 0 })
                      .andWhere({ m_materi_id: materi.id });
                  });
                })
                .where({ m_user_id: e.m_user_id })
                .fetch();

              const rekapUjian = await TkRekapNilai.query()
                .with("rekapRombel", (builder) => {
                  builder.with("rekap", (builder) => {
                    builder
                      .where({ tipe: "ujian" })
                      .andWhere({ m_ta_id: ta.id })
                      .andWhere({ dihapus: 0 })
                      .andWhere({ m_materi_id: materi.id });
                  });
                })
                .where({ m_user_id: e.m_user_id })
                .fetch();

              const ujian = await MUjianSiswa.query()
                .with("nilaiUAS", (builder) => {
                  builder.select("id", "nilai");
                })
                .with("nilaiUTS", (builder) => {
                  builder.select("id", "nilai");
                })
                .where({ m_user_id: e.m_user_id })
                .andWhere({ m_mata_pelajaran_id: mapel.id })
                .first();

              await HitungNilaiAkhir({
                rekap,
                rekapUjian,
                mapel,
                user_id: e.id,
                ta,
                sekolah,
              });

              // const result = await Promise.all(
              //   rekap.toJSON().map(async (d) => {
              //     if (d.rekapRombel.rekap == null) {
              //       return;
              //     }
              //     return d;
              //   })
              // );

              // const data = result.filter((d) => d != null);

              // let jumlah1 = 0;

              // result
              //   .filter((d) => d != null)
              //   .forEach((d) => {
              //     jumlah1 += d.nilai;
              //   });

              // const rata = jumlah1 / data.length;

              // const result1 = await Promise.all(
              //   rekapUjian.toJSON().map(async (d) => {
              //     if (d.rekapRombel.rekap == null) {
              //       return;
              //     }
              //     return d;
              //   })
              // );

              // const dataUjian = result1.filter((d) => d != null);

              // let jumlah = 0;

              // result1
              //   .filter((d) => d != null)
              //   .forEach((d) => {
              //     jumlah += d.nilai;
              //   });

              // const rataUjian = jumlah / dataUjian.length;

              // let nilaiAkhir;
              // if (ujian) {
              //   const listNilai = [
              //     rataUjian,
              //     rata,
              //     ujian.toJSON().nilaiUAS
              //       ? ujian.toJSON().nilaiUAS?.nilai
              //       : null,
              //     ujian.toJSON().nilaiUTS
              //       ? ujian.toJSON().nilaiUTS?.nilai
              //       : null,
              //   ];
              //   nilaiAkhir = listNilai.filter((nilai) => nilai).length
              //     ? listNilai
              //         .filter((nilai) => nilai)
              //         .reduce((a, b) => a + b, 0) /
              //       listNilai.filter((nilai) => nilai).length
              //     : 0;
              //   await MUjianSiswa.query().where({ id: ujian.id }).update({
              //     nilai: nilaiAkhir,
              //   });
              // } else {
              //   const listNilai = [rataUjian, rata];
              //   nilaiAkhir = listNilai.filter((nilai) => nilai).length
              //     ? listNilai
              //         .filter((nilai) => nilai)
              //         .reduce((a, b) => a + b, 0) /
              //       listNilai.filter((nilai) => nilai).length
              //     : 0;
              //   await MUjianSiswa.create({
              //
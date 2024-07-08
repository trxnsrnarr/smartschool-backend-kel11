"use strict";

const Drive = use("Drive");
const Province = use("App/Models/Province");
const Regency = use("App/Models/Regency");
const District = use("App/Models/District");
const Village = use("App/Models/Village");
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
const MRekap = use("App/Models/MRekap");
const MPredikatNilai = use("App/Models/MPredikatNilai");
const MKeteranganRapor = use("App/Models/MKeteranganRapor");
const MCamera = use("App/Models/MCamera");
const MAbsenBelumTerdaftar = use("App/Models/MAbsenBelumTerdaftar");
const MKeteranganPkl = use("App/Models/MKeteranganPkl");
const MRaporEkskul = use("App/Models/MRaporEkskul");
const MRencanaKeuangan = use("App/Models/MRencanaKeuangan");
const MRekapRombel = use("App/Models/MRekapRombel");
const TkRekapNilai = use("App/Models/TkRekapNilai");
const MGelombangPpdb = use("App/Models/MGelombangPpdb");
const MPendaftarPpdb = use("App/Models/MPendaftarPpdb");
const MAnggotaProyek = use("App/Models/MAnggotaProyek");
const MAnggotaProyekRole = use("App/Models/MAnggotaProyekRole");
const MKeuRencanaJurnal = use("App/Models/MKeuRencanaJurnal");
const MRencanaTransaksi = use("App/Models/MRencanaTransaksi");
const MRencanaKategoriLabaRugi = use("App/Models/MRencanaKategoriLabaRugi");
const MKategoriPekerjaan = use("App/Models/MKategoriPekerjaan");
const MPekerjaanProyek = use("App/Models/MPekerjaanProyek");
const MDitugaskanPekerjaan = use("App/Models/MDitugaskanPekerjaan");
const MProyekForum = use("App/Models/MProyekForum");
const MProyekForumKomen = use("App/Models/MProyekForumKomen");
const MAlurPPDB = use("App/Models/MAlurPpdb");
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
const MKeuAkun = use("App/Models/MKeuAkun");
const MRumusKeuAkun = use("App/Models/MRumusKeuAkun");
const MKeuTemplateAkun = use("App/Models/MKeuTemplateAkun");
const MKeuJurnal = use("App/Models/MKeuJurnal");
const MKeuTransaksi = use("App/Models/MKeuTransaksi");
const MKeuKategoriNeraca = use("App/Models/MKeuKategoriNeraca");
const TkKategoriAkunNeraca = use("App/Models/TkKategoriAkunNeraca");
const MKeuKategoriLabaRugi = use("App/Models/MKeuKategoriLabaRugi");
const TkKategoriAkunLabaRugi = use("App/Models/TkKategoriAkunLabaRugi");
const MRumusLabaRugi = use("App/Models/MRumusLabaRugi");
const MSuratKeputusan = use("App/Models/MSuratKeputusan");
const TkSuratKeputusanUser = use("App/Models/TkSuratKeputusanUser");
const TkKategoriTipeAkun = use("App/Models/TkKategoriTipeAkun");
const MKeuKategoriTipeAkun = use("App/Models/MKeuKategoriTipeAkun");
const MKeuKategoriArusKas = use("App/Models/MKeuKategoriArusKas");
const MKeuRumusArusKas = use("App/Models/MKeuRumusArusKas");
const MKeuRumusSaldoKasAkhir = use("App/Models/MKeuRumusSaldoKasAkhir");
const MKeuRumusSaldoKasAwal = use("App/Models/MKeuRumusSaldoKasAwal");
const MKeuAktivitasTransaksi = use("App/Models/MKeuAktivitasTransaksi");
const MFiturSekolah = use("App/Models/MFiturSekolah");
const MKeuRumusPenyusutan = use("App/Models/MKeuRumusPenyusutan");
const MKeuPenyusutanTransaksi = use("App/Models/MKeuPenyusutanTransaksi");

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
const WhatsAppService = use("App/Services/WhatsAppService");
const MHistoriAktivitas = use("App/Models/MHistoriAktivitas");

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
const { otomatisAkun } = require("../../Services/KeuanganServices");
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
function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}
class SecondController {
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

  async getTAAktif(sekolah) {
    const ta = await Mta.query()
      .select("id", "tahun")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ aktif: 1 })
      .andWhere({ dihapus: 0 })
      .first();

    if (!ta) {
      return "404";
    }

    return ta;
  }

  async getRencanaAktif(sekolah, withTransaksi, tanggalAktif) {
    let rencana = MRencanaKeuangan.query().where({ m_sekolah_id: sekolah.id });
    if (tanggalAktif) {
      const check = await MRencanaKeuangan.query()
        .select("id")
        .where({ m_sekolah_id: sekolah.id })
        .where("tanggal_akhir", ">=", moment(tanggalAktif).format("YYYY-MM-DD"))
        .where("tanggal_awal", "<=", moment(tanggalAktif).format("YYYY-MM-DD"))
        .andWhere({ dihapus: 0 })
        .first();
      if (check) {
        rencana
          .where(
            "tanggal_akhir",
            ">=",
            moment(tanggalAktif).format("YYYY-MM-DD")
          )
          .where(
            "tanggal_awal",
            "<=",
            moment(tanggalAktif).format("YYYY-MM-DD")
          );
      } else {
        rencana
          .where("tanggal_akhir", ">=", moment().format("YYYY-MM-DD"))
          .where("tanggal_awal", "<=", moment().format("YYYY-MM-DD"));
      }
    } else {
      rencana
        .where("tanggal_akhir", ">=", moment().format("YYYY-MM-DD"))
        .where("tanggal_awal", "<=", moment().format("YYYY-MM-DD"));
    }

    if (withTransaksi) {
      rencana.with("transaksi", (builder) => {
        builder
          .where({ dihapus: 0 })
          .where({ status: 1 })
          .with("jurnal", (builder) => {
            builder
              .where({ dihapus: 0 })
              .where({ status: 1 })
              .with("akun", (builder) => {
                builder.select("id", "nama");
              });
          });
      });
    }

    rencana = await rencana.first();
    return rencana;
  }

  async getTAHPSAktif(sekolah, tanggalAktif) {
    let ta = Mta.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 });
    if (tanggalAktif) {
      const check = await Mta.query()
        .select("id")
        .where({ m_sekolah_id: sekolah.id })
        .where("tanggal_akhir", ">=", moment(tanggalAktif).format("YYYY-MM-DD"))
        .where("tanggal_awal", "<=", moment(tanggalAktif).format("YYYY-MM-DD"))
        .andWhere({ dihapus: 0 })
        .first();
      if (check) {
        ta.where(
          "tanggal_akhir",
          ">=",
          moment(tanggalAktif).format("YYYY-MM-DD")
        ).where(
          "tanggal_awal",
          "<=",
          moment(tanggalAktif).format("YYYY-MM-DD")
        );
      } else {
        ta.where("tanggal_akhir", ">=", moment().format("YYYY-MM-DD")).where(
          "tanggal_awal",
          "<=",
          moment().format("YYYY-MM-DD")
        );
      }
    } else {
      ta.where("tanggal_akhir", ">=", moment().format("YYYY-MM-DD")).where(
        "tanggal_awal",
        "<=",
        moment().format("YYYY-MM-DD")
      );
    }

    ta = await ta.first();
    return ta;
  }

  async getJadwalMengajarAll({ response, request, auth }) {
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
        builder.select("id", "nama").where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 })
      .ids();

    const rombelIds = await MRombel.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 })
      .ids();

    const jamMengajar = await MJamMengajar.query()
      .with("jadwalMengajar", (builder) => {
        builder
          .with("rombel")
          .whereIn("m_rombel_id", rombelIds)
          .whereIn("m_mata_pelajaran_id", mataPelajaran);
      })
      .where({ m_sekolah_id: sekolah.id })
      // .andWhere({ kode_hari: hari })
      .andWhere({ m_ta_id: ta_id })
      .fetch();

    let rombel = {};
    let totalTingkat = {};
    jamMengajar.toJSON().map((jam) => {
      jam.jadwalMengajar.map((d) => {
        if (totalTingkat[d.rombel.tingkat]) {
          totalTingkat[d.rombel.tingkat] += 1;
        } else {
          totalTingkat[d.rombel.tingkat] = 1;
        }

        if (rombel[d.m_rombel_id]) {
          rombel[d.m_rombel_id] = [...rombel[d.m_rombel_id], d];
        } else {
          rombel[d.m_rombel_id] = [d];
        }
      });
    });

    let tingkat = [];

    if (sekolah.tingkat == "SMK" || sekolah.tingkat == "SMA") {
      tingkat = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP") {
      tingkat = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD") {
      tingkat = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB") {
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
    } else if (sekolah.tingkat == "TK") {
      tingkat = ["A", "B"];
    }

    return { rombel, totalTingkat, tingkat, semuaTA, dataTA };
  }

  async getTunggakan({ response, request, auth }) {
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
      page = 1,
      search_nama,
      tingkat,
      pembayaran_id,
      rombel_id,
      jenis,

      ta_id = ta.id,
    } = request.get();
    const pembayaran = await MPembayaran.query()
      .select("id", "nama", "bulan")
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();
    const jenisPembayaran = await MPembayaran.query()
      .select("jenis")
      .distinct("jenis")
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();
    const tingkatRombel = await MRombel.query()
      .distinct("tingkat")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 })
      .pluck("tingkat");

    let rombelIds = MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 });

    if (tingkat) {
      rombelIds.where({ tingkat });
    }
    rombelIds = await rombelIds.ids();

    const pembayaranIds = await MPembayaran.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();

    const pembayaranRombelIds = await TkPembayaranRombel.query()
      .whereIn("m_rombel_id", rombelIds)
      .whereIn("m_pembayaran_id", pembayaranIds)
      .where({ dihapus: 0 })
      .ids();
    const siswaIds = await MPembayaranSiswa.query()
      .distinct("m_user_id")
      .whereIn("tk_pembayaran_rombel_id", pembayaranRombelIds)
      .where({ dihapus: 0 })
      .pluck("m_user_id");
    let tunggakan = User.query()
      .select("id", "nama")
      .whereIn("id", siswaIds)
      .with("pembayaran", (builder) => {
        builder
          .whereNot({ status: "lunas" })
          .whereNull("ditangguhkan")
          .where({ dihapus: 0 })
          .with("rombelPembayaran", (builder) => {
            builder
              .select("id", "m_pembayaran_id")
              .with("pembayaran", (builder) => {
                builder.select(
                  "id",
                  "jenis",
                  "nominal",
                  "tipe_ujian",
                  "nama",
                  "dihapus"
                );
              });
          })
          .with("riwayat", (builder) => {
            builder.where({ dikonfirmasi: 1 });
          });
      });
    if (search_nama) {
      tunggakan.where("nama", "like", `%${search_nama}%`);
    }
    tunggakan = await tunggakan.paginate(page, 20);
    const semuaTA = await Mta.query()
      .select("id", "tahun", "semester")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let rombelData = MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return {
      pembayaran,
      jenisPembayaran,
      tingkatRombel,
      tunggakan,
      semuaTA,
      rombelIds,
      pembayaranIds,
      pembayaranRombelIds,
      rombelData,
    };
  }

  async getTotalTunggakan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let pembayaran;

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
      .fetch();

    let totalTunggakan = 0;
    await Promise.all(
      pembayaran.toJSON().map(async (d) => {
        const tkPembayaranIds1 = await TkPembayaranRombel.query()
          .where({ m_pembayaran_id: d.id })
          .andWhere({ dihapus: 0 })
          .ids();

        const pembayaranSiswaIds1 = await MPembayaranSiswa.query()
          .whereIn("tk_pembayaran_rombel_id", tkPembayaranIds1)
          .ids();
        totalTunggakan =
          totalTunggakan + d.nominal * pembayaranSiswaIds1.length;
      })
    );

    const pembayaranIds = await MPembayaran.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();

    const tkPembayaranIds = await TkPembayaranRombel.query()
      .whereIn("m_pembayaran_id", pembayaranIds)
      .andWhere({ dihapus: 0 })
      .ids();

    const totalPelunasan = pembayaran.toJSON().map((item) => {
      return {
        id: item.id,
        total: item.rombel.reduce((a, b) => a + b.__meta__.total, 0),
        totalLunas: item.rombel.reduce((a, b) => a + b.__meta__.totalLunas, 0),
      };
    });

    const pembayaranSiswaIds = await MPembayaranSiswa.query()
      .whereIn("tk_pembayaran_rombel_id", tkPembayaranIds)
      .ids();

    const dibayar = await MRiwayatPembayaranSiswa.query()
      .whereIn("m_pembayaran_siswa_id", pembayaranSiswaIds)
      .andWhere({ dihapus: 0 })
      .andWhere({ dikonfirmasi: 1 })
      .fetch();

    let totalDibayar = 0;
    await Promise.all(
      dibayar.toJSON().map((d) => {
        totalDibayar = totalDibayar + parseInt(d.nominal);
      })
    );

    return response.ok({
      // pembayaran: pembayaran,
      totalDibayar,
      totalTunggakan,
      // totalPelunasan
    });
  }

  async downloadTunggakan({ response, request, auth }) {
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

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const pembayaran = await MPembayaran.query()
      .select("id", "nama", "bulan")
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();
    const jenisPembayaran = await MPembayaran.query()
      .select("jenis")
      .distinct("jenis")
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();
    const tingkatRombel = await MRombel.query()
      .distinct("tingkat")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .pluck("tingkat");

    const {
      tingkat,
      pembayaran_id,
      rombel_id,
      jenis,
      tanggal_awal,
      tanggal_akhir,
      ta_id = ta.id,
    } = request.post();

    let rombelIds = MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .andWhere({ dihapus: 0 });

    if (tingkat) {
      rombelIds.where({ tingkat });
    }
    rombelIds = await rombelIds.ids();

    const pembayaranIds = await MPembayaran.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .ids();

    const pembayaranRombelIds = await TkPembayaranRombel.query()
      .whereIn("m_rombel_id", rombelIds)
      .whereIn("m_pembayaran_id", pembayaranIds)
      .where({ dihapus: 0 })
      .ids();
    const siswaIds = await MPembayaranSiswa.query()
      .distinct("m_user_id")
      .whereIn("tk_pembayaran_rombel_id", pembayaranRombelIds)
      .where({ dihapus: 0 })
      .pluck("m_user_id");
    let tunggakan = await User.query()
      .select("id", "nama")
      .with("pembayaran", (builder) => {
        builder
          .whereNot({ status: "lunas" })
          .whereNull("ditangguhkan")
          .with("rombelPembayaran", (builder) => {
            builder
              .select("id", "m_pembayaran_id")
              .with("pembayaran", (builder) => {
                builder.select(
                  "id",
                  "jenis",
                  "nominal",
                  "tipe_ujian",
                  "nama",
                  "dihapus"
                );
              });
          });
      })
      .whereIn("id", siswaIds)
      .fetch();

    // return {
    // pembayaran,
    // jenisPembayaran,
    // tingkatRombel,
    //   tunggakan,
    // };
    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Rekap Tunggakan`);
    worksheet.getCell(
      "A4"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: `A1:F2`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: `A3:F3`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet.mergeCells(`A1:F1`);
    worksheet.mergeCells(`A2:F2`);
    worksheet.mergeCells(`A3:F3`);
    worksheet.addConditionalFormatting({
      ref: `A5:F5`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    await Promise.all(
      tunggakan.toJSON().map(async (d, idx) => {
        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 5}:F${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.getRow(5).values = [
          "No",
          "Nama",
          "SPP",
          "Ujian",
          "Lainnya",
          "Total",
        ];

        worksheet.columns = [
          { key: "no" },
          { key: "nama" },
          { key: "spp" },
          { key: "ujian" },
          { key: "lainnya" },
          { key: "total" },
        ];

        let row = worksheet.addRow({
          no: `${idx + 1}`,
          nama: d ? d.nama : "-",
          spp: `${
            d.pembayaran
              ? d.pembayaran.filter(
                  (s) => s.rombelPembayaran.pembayaran.jenis == "spp"
                ).length
              : ""
          } bulan : ${d.pembayaran
            .filter((c) => c.rombelPembayaran.pembayaran.jenis == "spp")
            .reduce((a, b) => {
              return (
                parseInt(a) + parseInt(b.rombelPembayaran.pembayaran.nominal)
              );
            }, 0)}`,
          ujian: `${d.pembayaran
            .filter((s) => s.rombelPembayaran.pembayaran.jenis == "ujian")
            .map((e, nox) => {
              return `${
                nox + 1
              }. ${e.rombelPembayaran.pembayaran.tipe_ujian.toUpperCase()} : Rp${
                e.rombelPembayaran.pembayaran.nominal
              }
              `;
            })}`,
          lainnya: `${d.pembayaran
            .filter((s) => s.rombelPembayaran.pembayaran.jenis == "lainnya")
            .map((e) => {
              return `${e.rombelPembayaran.pembayaran.nama} : Rp${e.rombelPembayaran.pembayaran.nominal}
              `;
            })}`,
          total: `Rp${d.pembayaran
            .filter((s) => s?.rombelPembayaran?.pembayaran?.dihapus == 0)
            .reduce((a, b) => {
              return (
                parseInt(a) + parseInt(b.rombelPembayaran.pembayaran.nominal)
              );
            }, 0)}`,
        });
      })
    );
    worksheet.getCell("A1").value = "Rekap Tunggakan";
    worksheet.getCell("A2").value = sekolah.nama;
    worksheet.getCell("A3").value = `${tingkat}`;

    let namaFile = `/uploads/rekap-tunggakan-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async getAkunKeuangan({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { search } = request.get();

    const query = MKeuTemplateAkun.query().andWhere({
      m_sekolah_id: sekolah.id,
    });

    if (search) {
      query.where("template", "like", `%${search}%`);
    }

    const keuangan = await query.first();

    let akun = MKeuAkun.query()
      .with("rek", (builder) => {
        builder
          .where({
            m_sekolah_id: sekolah.id,
          })
          .whereNull("m_rencana_keuangan_id");
      })
      .with("penyusutan", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("jurnal", (builder) => {
        builder
          .select("id", "m_keu_transaksi_id", "m_keu_akun_id")
          .with("transaksi", (builder) => {
            builder.select("id", "nama");
          })
          .where({ dihapus: 0 });
      })
      .with("rumusAkun")
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .orderBy("kode", "asc");
    akun = await akun.fetch();
    let akunSearch = MKeuAkun.query()
      .with("rek", (builder) => {
        builder
          .where({
            m_sekolah_id: sekolah.id,
          })
          .whereNull("m_rencana_keuangan_id");
      })
      .with("jurnal", (builder) => {
        builder
          .select("id", "m_keu_transaksi_id", "m_keu_akun_id")
          .with("transaksi", (builder) => {
            builder.select("id", "nama");
          })
          .where({ dihapus: 0 });
      })
      .with("rumusAkun")
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });
    if (search) {
      akunSearch.where("nama", "like", `%${search}%`);
    }
    akunSearch = await akunSearch.fetch();

    const akunIds = await MKeuAkun.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();
    const rekening = await MRekSekolah.query()
      .where({ dihapus: 0 })
      .whereNull("m_rencana_keuangan_id")
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("m_keu_akun_id", akunIds)
      .fetch();

    // if (!akun[0] || !akun || akun == "[]") {
    //   await otomatisAkun(sekolah);
    // }

    return response.ok({
      keuangan,
      rekening,
      akun,
      akunSearch,
    });
  }

  async getRencanaKeuangan({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { search } = request.get();

    const query = MKeuTemplateAkun.query().andWhere({
      m_sekolah_id: sekolah.id,
    });

    if (search) {
      query.where("template", "like", `%${search}%`);
    }

    const transaksiIds = await MRencanaTransaksi.query()
      .where({ m_rencana_keuangan_id: perencanaan_id })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .ids();
    const jurnalIds = await MKeuRencanaJurnal.query()
      .where({ dihapus: 0 })
      .whereIn("m_rencana_transaksi_id", transaksiIds)
      .ids();

    const keuangan = await query.first();
    let akun = MKeuAkun.query()
      .with("rek", (builder) => {
        builder.where({ m_rencana_keuangan_id: perencanaan_id });
      })
      .with("rencanaJurnal", (builder) => {
        builder.whereIn("id", jurnalIds);
      })
      .with("rumusAkun", (builder) => {
        builder.where({ m_rencana_keuangan_id: perencanaan_id });
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    akun = await akun.fetch();
    const rekening = await MRekSekolah.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .where({ m_rencana_keuangan_id: perencanaan_id })
      .fetch();

    let akunSearch = MKeuAkun.query()
      .with("rek", (builder) => {
        builder.where({ m_rencana_keuangan_id: perencanaan_id });
      })
      .with("rencanaJurnal", (builder) => {
        builder.whereIn("id", jurnalIds);
      })
      .with("rumusAkun", (builder) => {
        builder.where({ m_rencana_keuangan_id: perencanaan_id });
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });
    if (search) {
      akunSearch.where("nama", "like", `%${search}%`);
    }
    akunSearch = await akunSearch.fetch();

    return response.ok({
      keuangan,
      rekening,
      akun,
      akunSearch,
    });
  }

  async putAkunKeuangan({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    if (user.bagian) {
      return response.notFound({ message: "Anda tidak memiliki akses" });
    }
    let template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();
    if (!template) {
      template = await MKeuTemplateAkun.create({
        m_sekolah_id: sekolah.id,
        template: "[]",
      });
    }

    const { struktur } = request.post();

    if (struktur) {
      await MKeuTemplateAkun.query()
        .where({ id: template.id })
        .update({ template: JSON.stringify(struktur) });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async postKeuAkun({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();
    if (!template) {
      template = await MKeuTemplateAkun.create({
        m_sekolah_id: sekolah.id,
        template: "[]",
      });
    }

    const user = await auth.getUser();

    let {
      nama,
      kode,
      bank,
      norek,
      saldo,
      rek,
      struktur,
      saldo_normal,
      nama_penyusutan,
      m_keu_akun_penyusutan_id,
      m_keu_akun_akumulasi_id,
      rumus,
      penyusutan,
    } = request.post();

    const rules = {
      nama: "required",
      // kode: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      // "kode.required": "Kode harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    const rumus_penyusutan = JSON.parse(rumus || "[]");

    const akun = await MKeuAkun.create({
      m_sekolah_id: sekolah.id,
      nama,
      kode,
      dihapus: 0,
      saldo_normal,
    });
    if (penyusutan) {
      await MKeuRumusPenyusutan.create({
        rumus: rumus_penyusutan,
        m_keu_akun_id: akun.id,
        m_keu_akun_penyusutan_id,
        m_keu_akun_akumulasi_id,
        dihapus: 0,
        update_selanjutnya: moment().add(1, "M").format("YYYY-MM-DD"),
      });
    }

    if (rek) {
      await MRekSekolah.create({
        bank,
        norek,
        nama,
        saldo,
        jenis: nama,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_keu_akun_id: akun.id,
      });

      const rencanaIds = await MRencanaKeuangan.query()
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .pluck("id");

      const rekRencana = rencanaIds.map((d) => {
        return {
          bank,
          norek,
          nama,
          saldo: 0,
          jenis: nama,
          dihapus: 0,
          m_sekolah_id: sekolah.id,
          m_keu_akun_id: akun.id,
          m_rencana_keuangan_id: d,
        };
      });

      await MRekSekolah.createMany(rekRencana);
    }
    if (struktur) {
      await MKeuTemplateAkun.query()
        .where({ m_sekolah_id: sekolah.id })
        .update({
          template: JSON.stringify(struktur),
        });
    } else {
      struktur = JSON.parse(template.template) || [];
      struktur = [...struktur, { id: akun.id, text: akun.nama }];
      await MKeuTemplateAkun.query()
        .where({ m_sekolah_id: sekolah.id })
        .update({
          template: JSON.stringify(struktur),
        });
    }
    await MHistoriAktivitas.create({
      jenis: "Buat Akun",
      m_user_id: user.id,
      akhir: nama,
      m_sekolah_id: sekolah.id,
      tipe: "Realisasi",
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }
  async putKeuAkun({ response, request, auth, params: { keu_akun_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();
    if (!template) {
      template = await MKeuTemplateAkun.create({
        m_sekolah_id: sekolah.id,
        template: "[]",
      });
    }

    const user = await auth.getUser();

    let {
      nama,
      kode,
      bank,
      norek,
      saldo,
      rek,
      struktur,
      rumus = [],
      saldo_normal,
      m_rencana_keuangan_id,

      m_keu_akun_penyusutan_id,
      m_keu_akun_akumulasi_id,
      // rumus232,
      rumus_penyusutan,
      penyusutan,
      nama_penyusutan,
    } = request.post();

    // const rumus_penyusutan = JSON.parse(rumus232 || "[]");

    let rumus12;
    if (nama == "KUMULATIF LABA (RUGI)" || kode == "00000") {
      rumus12 = rumus;
    } else {
      rumus12 = JSON.parse(rumus || "[]");
    }

    const rules = {
      nama: "required",
      // kode: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      // "kode.required": "Kode harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const akun = await MKeuAkun.query()
      .with("rumusAkun", (builder) => {
        if (m_rencana_keuangan_id) {
          builder.where({ m_rencana_keuangan_id });
        } else {
          builder.whereNull("m_rencana_keuangan_id");
        }
      })
      .where({ id: keu_akun_id })
      .first();
    let update;

    let check = MRekSekolah.query().where({ m_keu_akun_id: akun.id });
    let checkDihapus = MRekSekolah.query()
      .where({ m_keu_akun_id: akun.id })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 });

    if (m_rencana_keuangan_id) {
      check.where({ m_rencana_keuangan_id });
      checkDihapus.where({ m_rencana_keuangan_id });
    }

    check = await check.first();
    checkDihapus = await checkDihapus.first();

    const checkPenyusutan = await MKeuRumusPenyusutan.query()
      .where({ m_keu_akun_id: akun.id })
      .first();
    const checkPenyusutanDihapus = await MKeuRumusPenyusutan.query()
      .where({ m_keu_akun_id: akun.id })
      .andWhere({ dihapus: 0 })
      .first();

    if (rek) {
      if (check) {
        await MRekSekolah.query().where({ id: check.id }).update({
          bank,
          norek,
          saldo,
          m_sekolah_id: sekolah.id,
          jenis: nama,
          dihapus: 0,
          m_keu_akun_id: akun.id,
        });

        if (!m_rencana_keuangan_id) {
          const rencanas = await MRencanaKeuangan.query()
            .where({ m_sekolah_id: sekolah.id })
            .where({ dihapus: 0 })
            .fetch();
          await Promise.all(
            rencanas.toJSON().map(async (d) => {
              const check = await MRekSekolah.query()
                .where({ m_rencana_keuangan_id: d.id })
                .where({ m_keu_akun_id: akun.id })
                .first();
              if (check) {
                await MRekSekolah.query().where({ id: check.id }).update({
                  bank,
                  norek,
                  jenis: nama,
                  dihapus: 0,
                  m_sekolah_id: sekolah.id,
                  m_keu_akun_id: akun.id,
                  m_rencana_keuangan_id: d.id,
                });
              } else {
                await MRekSekolah.create({
                  bank,
                  norek,
                  saldo: 0,
                  jenis: nama,
                  dihapus: 0,
                  m_keu_akun_id: akun.id,
                  m_sekolah_id: sekolah.id,
                  m_rencana_keuangan_id: d.id,
                });
              }
            })
          );
        }

        if (bank != check.bank) {
          await MHistoriAktivitas.create({
            jenis: "Ubah Akun",
            m_user_id: user.id,
            awal: `Pilih Bank : ${check.bank} menjadi `,
            akhir: `"${bank}"`,
            bawah: `${akun.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Realisasi",
          });
        }
        if (norek != check.norek) {
          await MHistoriAktivitas.create({
            jenis: "Ubah Akun",
            m_user_id: user.id,
            awal: `Nomor Rekening : ${check.norek} menjadi `,
            akhir: `"${norek}"`,
            bawah: `${akun.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Realisasi",
          });
        }
        if (saldo != check.saldo) {
          const saldoLama = `${check.saldo}`.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
          );
          const saldoBaru = `${saldo}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          await MHistoriAktivitas.create({
            jenis: "Ubah Akun",
            m_user_id: user.id,
            awal: `Saldo : Rp${saldoLama} menjadi `,
            akhir: `"Rp${saldoBaru}"`,
            bawah: `${akun.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Realisasi",
          });
        }
        if (!checkDihapus) {
          await MHistoriAktivitas.create({
            jenis: "Ubah Akun",
            m_user_id: user.id,
            awal: `Terhubung dengan Akun Rekening? : Tidak menjadi `,
            akhir: `"Ya"`,
            bawah: `${akun.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Realisasi",
          });
        }
      } else {
        await MRekSekolah.create({
          bank,
          norek,
          nama,
          jenis: nama,
          saldo,
          dihapus: 0,
          m_sekolah_id: sekolah.id,
          m_keu_akun_id: akun.id,
        });
        await MHistoriAktivitas.create({
          jenis: "Ubah Akun",
          m_user_id: user.id,
          awal: `Terhubung dengan Akun Rekening? : Tidak menjadi `,
          akhir: `"Ya"`,
          bawah: `${akun.nama}`,
          m_sekolah_id: sekolah.id,
          tipe: "Realisasi",
        });
      }
    } else if (!rek) {
      if (checkDihapus) {
        await MRekSekolah.query().where({ m_keu_akun_id: akun.id }).update({
          dihapus: 1,
        });
        await MHistoriAktivitas.create({
          jenis: "Ubah Akun",
          m_user_id: user.id,
          awal: `Terhubung dengan Akun Rekening? : Ya menjadi `,
          akhir: `"Tidak"`,
          bawah: `${akun.nama}`,
          m_sekolah_id: sekolah.id,
          tipe: "Realisasi",
        });
      }
    }

    if (penyusutan) {
      if (checkPenyusutan) {
        await MKeuRumusPenyusutan.query()
          .where({ id: checkPenyusutan.id })
          .update({
            rumus: rumus_penyusutan,
            // m_keu_akun_penyusutan_id,
            m_keu_akun_akumulasi_id,
            dihapus: 0,
            nama: nama_penyusutan,
          });

        // if (!m_rencana_keuangan_id) {
        //   const rencanas = await MRencanaKeuangan.query()
        //     .where({ m_sekolah_id: sekolah.id })
        //     .where({ dihapus: 0 })
        //     .fetch();
        //   await Promise.all(
        //     rencanas.toJSON().map(async (d) => {
        //       const check = await MRekSekolah.query()
        //         .where({ m_rencana_keuangan_id: d.id })
        //         .where({ m_keu_akun_id: akun.id })
        //         .first();
        //       if (check) {
        //         await MRekSekolah.query().where({ id: check.id }).update({
        //           bank,
        //           norek,
        //           jenis: nama,
        //           dihapus: 0,
        //           m_sekolah_id: sekolah.id,
        //           m_keu_akun_id: akun.id,
        //           m_rencana_keuangan_id: d.id,
        //         });
        //       } else {
        //         await MRekSekolah.create({
        //           bank,
        //           norek,
        //           saldo: 0,
        //           jenis: nama,
        //           dihapus: 0,
        //           m_keu_akun_id: akun.id,
        //           m_sekolah_id: sekolah.id,
        //           m_rencana_keuangan_id: d.id,
        //         });
        //       }
        //     })
        //   );
        // }

        // if (m_keu_akun_penyusutan_id != checkPenyusutan.m_keu_akun_penyusutan_id) {
        //   await MHistoriAktivitas.create({
        //     jenis: "Ubah Akun",
        //     m_user_id: user.id,
        //     awal: `Pilih Bank : ${check.bank} menjadi `,
        //     akhir: `"${bank}"`,
        //     bawah: `${akun.nama}`,
        //     m_sekolah_id: sekolah.id,
        //     tipe: "Realisasi",
        //   });
        // }
        // if (m_keu_akun_akumulasi_id != check.m_keu_akun_akumulasi_id) {
        //   await MHistoriAktivitas.create({
        //     jenis: "Ubah Akun",
        //     m_user_id: user.id,
        //     awal: `Nomor Rekening : ${check.norek} menjadi `,
        //     akhir: `"${norek}"`,
        //     bawah: `${akun.nama}`,
        //     m_sekolah_id: sekolah.id,
        //     tipe: "Realisasi",
        //   });
        // }
        // if (saldo != check.saldo) {
        //   const saldoLama = `${check.saldo}`.replace(
        //     /\B(?=(\d{3})+(?!\d))/g,
        //     "."
        //   );
        //   const saldoBaru = `${saldo}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        //   await MHistoriAktivitas.create({
        //     jenis: "Ubah Akun",
        //     m_user_id: user.id,
        //     awal: `Saldo : Rp${saldoLama} menjadi `,
        //     akhir: `"Rp${saldoBaru}"`,
        //     bawah: `${akun.nama}`,
        //     m_sekolah_id: sekolah.id,
        //     tipe: "Realisasi",
        //   });
        // }
        // if (!checkDihapus) {
        //   await MHistoriAktivitas.create({
        //     jenis: "Ubah Akun",
        //     m_user_id: user.id,
        //     awal: `Terhubung dengan Akun Rekening? : Tidak menjadi `,
        //     akhir: `"Ya"`,
        //     bawah: `${akun.nama}`,
        //     m_sekolah_id: sekolah.id,
        //     tipe: "Realisasi",
        //   });
        // }
      } else {
        await MKeuRumusPenyusutan.create({
          rumus: rumus_penyusutan,
          m_keu_akun_id: akun.id,
          // m_keu_akun_penyusutan_id,
          m_keu_akun_akumulasi_id,
          dihapus: 0,
          update_selanjutnya: moment().add(1, "M").format("YYYY-MM-DD"),
          nama: nama_penyusut,
        });
        // await MHistoriAktivitas.create({
        //   jenis: "Ubah Akun",
        //   m_user_id: user.id,
        //   awal: `Terhubung dengan Akun Rekening? : Tidak menjadi `,
        //   akhir: `"Ya"`,
        //   bawah: `${akun.nama}`,
        //   m_sekolah_id: sekolah.id,
        //   tipe: "Realisasi",
        // });
      }
    } else if (!penyusutan) {
      if (checkPenyusutanDihapus) {
        await MKeuRumusPenyusutan.query()
          .where({ m_keu_akun_id: akun.id })
          .update({
            dihapus: 1,
          });
        // await MHistoriAktivitas.create({
        //   jenis: "Ubah Akun",
        //   m_user_id: user.id,
        //   awal: `Terhubung dengan Akun Rekening? : Ya menjadi `,
        //   akhir: `"Tidak"`,
        //   bawah: `${akun.nama}`,
        //   m_sekolah_id: sekolah.id,
        //   tipe: "Realisasi",
        // });
      }
    }

    update = await MKeuAkun.query().where({ id: keu_akun_id }).update({
      nama,
      kode,
      dihapus: 0,
      saldo_normal,
      m_rek_sekolah_id: null,
    });

    let checkRumusAkun = MRumusKeuAkun.query().where({
      m_keu_akun_id: keu_akun_id,
    });
    if (m_rencana_keuangan_id) {
      checkRumusAkun = checkRumusAkun.andWhere({ m_rencana_keuangan_id });
    } else {
      checkRumusAkun = checkRumusAkun.whereNull(" m_rencana_keuangan_id ");
    }
    checkRumusAkun = await checkRumusAkun.first();
    if (checkRumusAkun) {
      await MRumusKeuAkun.query().where({ id: checkRumusAkun.id }).update({
        rumus,
      });
    } else {
      if (rumus) {
        if (m_rencana_keuangan_id) {
          await MRumusKeuAkun.create({
            m_keu_akun_id: keu_akun_id,
            rumus,
            tipe: nama,
            m_rencana_keuangan_id,
          });
        } else {
          await MRumusKeuAkun.create({
            m_keu_akun_id: keu_akun_id,
            rumus,
            tipe: nama,
          });
        }
      }
    }
    const rumusSebelum12 = JSON.parse(akun.toJSON().rumusAkun.rumus || "[]");
    if (nama != akun.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Akun",
        m_user_id: user.id,
        awal: `Nama : ${akun.nama} menjadi`,
        akhir: `"${nama}"`,
        bawah: `${akun.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "Realisasi",
      });
    }
    if (kode != akun.kode) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Akun",
        m_user_id: user.id,
        awal: `Kode : ${akun.kode} menjadi`,
        akhir: `"${kode}"`,
        bawah: `${akun.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "Realisasi",
      });
    }
    // return akun;
    if (akun.toJSON().rumusAkun.rumus != rumus) {
      let kategoriAkun;
      let rumusSebelum2 = ``;
      let rumusFix = ``;
      if (akun.nama == "MODAL") {
        rumusSebelum2 = `TOTAL AKTIVA - `;
        rumusFix = `TOTAL AKTIVA - `;
      }
      if (akun.nama == "MODAL" || akun.nama == "LABA DITAHAN") {
        if (m_rencana_keuangan_id) {
          for (let i = 0; i < rumusSebelum12.length; i++) {
            const d = rumusSebelum12[i];
            if (d.id) {
              kategoriAkun = await MRencanaKategoriLabaRugi.query()
                .where({ id: d.id })
                .first();
              rumusSebelum2 = rumusSebelum2 + kategoriAkun.nama;
            } else {
              if (d.operator == "minus") {
                rumusSebelum2 = `${rumusSebelum2} - `;
              } else if (d.operator == "plus") {
                rumusSebelum2 = `${rumusSebelum2} + `;
              }
            }
          }

          for (let i = 0; i < rumus12.length; i++) {
            const d = rumus12[i];
            if (d.id) {
              kategoriAkun = await MRencanaKategoriLabaRugi.query()
                .where({ id: d.id })
                .first();
              rumusFix = rumusFix + kategoriAkun.nama;
            } else {
              if (d.operator == "minus") {
                rumusFix = `${rumusFix} - `;
              } else if (d.operator == "plus") {
                rumusFix = `${rumusFix} + `;
              }
            }
          }
        } else {
          for (let i = 0; i < rumusSebelum12.length; i++) {
            const d = rumusSebelum12[i];
            if (d.id) {
              kategoriAkun = await MKeuKategoriLabaRugi.query()
                .where({ id: d.id })
                .first();
              rumusSebelum2 = rumusSebelum2 + kategoriAkun.nama;
            } else {
              if (d.operator == "minus") {
                rumusSebelum2 = `${rumusSebelum2} - `;
              } else if (d.operator == "plus") {
                rumusSebelum2 = `${rumusSebelum2} + `;
              }
            }
          }

          for (let i = 0; i < rumus12.length; i++) {
            const d = rumus12[i];
            if (d.id) {
              kategoriAkun = await MKeuKategoriLabaRugi.query()
                .where({ id: d.id })
                .first();
              rumusFix = rumusFix + kategoriAkun.nama;
            } else {
              if (d.operator == "minus") {
                rumusFix = `${rumusFix} - `;
              } else if (d.operator == "plus") {
                rumusFix = `${rumusFix} + `;
              }
            }
          }
        }
      } else {
        for (let i = 0; i < rumusSebelum12.length; i++) {
          const d = rumusSebelum12[i];
          if (d.id) {
            kategoriAkun = await MKeuAkun.query().where({ id: d.id }).first();
            rumusSebelum2 = rumusSebelum2 + kategoriAkun.nama;
          } else {
            if (d.operator == "minus") {
              rumusSebelum2 = `${rumusSebelum2} - `;
            } else if (d.operator == "plus") {
              rumusSebelum2 = `${rumusSebelum2} + `;
            }
          }
        }

        for (let i = 0; i < rumus12.length; i++) {
          const d = rumus12[i];
          if (d.id) {
            kategoriAkun = await MKeuAkun.query().where({ id: d.id }).first();
            rumusFix = rumusFix + kategoriAkun.nama;
          } else {
            if (d.operator == "minus") {
              rumusFix = `${rumusFix} - `;
            } else if (d.operator == "plus") {
              rumusFix = `${rumusFix} + `;
            }
          }
        }
      }

      if (m_rencana_keuangan_id) {
        await MHistoriAktivitas.create({
          jenis: "Ubah Akun Perencanaan",
          tipe: "Perencanaan",
          m_user_id: user.id,
          awal: `Rumus : ${rumusSebelum2} menjadi `,
          akhir: `"${rumusFix}"`,
          bawah: nama,
          m_sekolah_id: sekolah.id,
        });
      } else {
        await MHistoriAktivitas.create({
          jenis: "Ubah Akun",
          tipe: "Realisasi",
          m_user_id: user.id,
          awal: `Rumus : ${rumusSebelum2} menjadi `,
          akhir: `"${rumusFix}"`,
          bawah: nama,
          m_sekolah_id: sekolah.id,
        });
      }
    }

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKeuAkun({ response, request, auth, params: { keu_akun_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const keuangan = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();
    const template = JSON.parse(keuangan.template || "[]");
    const temp = [];

    function diveTree(data, level, path = []) {
      data.map((d, idx) => {
        temp.push({ id: d?.id, level, path });
        if (d?.children?.length) {
          diveTree(d?.children, level + 1, [...path, d?.id]);
        }
      });
    }
    diveTree(template, 0);

    const cariAkun = temp.find((d) => d.id == keu_akun_id);
    const anak = temp
      .filter((d) => {
        const path = d.path;
        if (path[cariAkun.level] == cariAkun.id) {
          return true;
        } else {
          return false;
        }
      })
      .map((d) => d.id);
    const rekAnak = await MRekSekolah.query()
      .select("id", "m_keu_akun_id")
      .whereIn("m_keu_akun_id", anak)
      .fetch();

    await Promise.all(
      anak.map(async (d) => {
        const rek = rekAnak.toJSON().find((e) => e.m_keu_akun_id == d);
        if (rek) {
          await MRekSekolah.query().where({ id: rek.id }).update({
            dihapus: 1,
          });
        }
        await MKeuAkun.query().where({ id: d }).update({
          dihapus: 1,
        });
      })
    );

    const akun = await MKeuAkun.query().where({ id: keu_akun_id }).first();
    const rek = await MRekSekolah.query()
      .where({ m_keu_akun_id: akun.id })
      .first();

    if (rek) {
      await MRekSekolah.query().where({ id: rek.id }).update({
        dihapus: 1,
      });
    }

    const update = await MKeuAkun.query().where({ id: keu_akun_id }).update({
      dihapus: 1,
    });

    await MHistoriAktivitas.create({
      jenis: "Hapus Akun",
      m_user_id: user.id,
      akhir: `"${akun.nama}"`,
      m_sekolah_id: sekolah.id,
      tipe: "Realisasi",
    });

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async putKeuTemplateAkun({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { template } = request.post();

    template = JSON.stringify(template);

    const keuangan = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .update({
        template: JSON.stringify(akun),
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

  async getTimelineBaru({ response, request, auth }) {
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
    const {
      m_jadwal_mengajar_id,
      absen,
      hari_ini,
      waktu_saat_ini,
      mulai: waktu_mulai,
      selesai: waktu_selesai,
    } = request.get();

    const tahunPelajaranIds = await Mta.query()
      .where({ tahun: ta.tahun })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();
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

    let berlangsung = [],
      terjadwal = [],
      selesai = [];
    const tanggalBerlangsung = [];

    if (user.role == "siswa") {
      const timelineId1 = await MTimeline.query()
        .whereNull("m_mata_pelajaran_id")
        // .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
        .whereIn("m_rombel_id", dataRombelIds)
        .andWhere({
          m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id,
        })
        .orWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .ids();

      const timelineId2 = await MTimeline.query()
        .whereNotNull("m_mata_pelajaran_id")
        .whereIn("m_mata_pelajaran_id", dataMapelIds)
        .whereIn("m_rombel_id", dataRombelIds)
        .andWhere({
          m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id,
        })
        .orWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .ids();

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
                    .whereIn("m_user_id", [user.id])
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

      await Promise.all(
        timeline.toJSON().map(async (d) => {
          const data = { ...d, bab: d.timeline.materi.map((e) => e.bab) };

          const tipe = d.timeline.tipe;
          let dibagikan = d.timeline.tanggal_pembagian;
          if (tipe == "tugas") {
            dibagikan = d.timeline.tugas.tanggal_pembagian;
          }
          if (moment(dibagikan).toDate() < moment().toDate()) {
            if (tipe == "tugas") {
              if (d.waktu_pengumpulan) {
                selesai.push(data);
              } else {
                if (
                  tanggalBerlangsung.includes(
                    moment(dibagikan).format("YYYY-MM-DD")
                  )
                ) {
                  tanggalBerlangsung.push(
                    moment(dibagikan).format("YYYY-MM-DD")
                  );
                }
                berlangsung.push(data);
              }
            } else if (tipe == "absen") {
              if (d.waktu_absen) {
                selesai.push(data);
              } else {
                if (
                  tanggalBerlangsung.includes(
                    moment(dibagikan).format("YYYY-MM-DD")
                  )
                ) {
                  tanggalBerlangsung.push(
                    moment(dibagikan).format("YYYY-MM-DD")
                  );
                }
                berlangsung.push(data);
              }
            } else if (tipe == "materi") {
              if (d.timeline.materi[0].__meta__.totalKesimpulan > 0) {
                selesai.push(data);
              } else {
                if (
                  tanggalBerlangsung.includes(
                    moment(dibagikan).format("YYYY-MM-DD")
                  )
                ) {
                  tanggalBerlangsung.push(
                    moment(dibagikan).format("YYYY-MM-DD")
                  );
                }
                berlangsung.push(data);
              }
            }
          }
          return 1;
        })
      );

      return response.ok({
        berlangsung,
        selesai,
        role: user.role,
      });
    }
    let timeline;
    if (absen) {
      timeline = await MTimeline.query()
        .withCount("tkTimeline as total_respon", (builder) => {
          builder.whereNotNull("absen");
        })
        .with("user")
        .withCount("tkTimeline as total_siswa")
        .where({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
        .andWhere({ m_user_id: user.id })
        .andWhere({ tipe: "absen" })
        .andWhere({ dihapus: 0 })
        .orderBy("id", "desc")
        .fetch();
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
        .whereNull("m_mata_pelajaran_id")
        .andWhere({ dihapus: 0 })
        .whereIn("m_rombel_id", dataRombelIds)
        .whereIn("m_user_id", userIds)
        .ids();

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
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        // .whereIn("m_tugas_id", tugasIds)
        .orWhereIn("id", timelineLainnya)
        .orderBy("id", "desc")
        .fetch();

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
          builder.where({ dikumpulkan: 1 });
          // .whereNotNull("waktu_pengumpulan");
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
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        // .whereIn("m_tugas_id", tugasIds)
        .orderBy("id", "desc")
        .fetch();
      // return timeline2;

      timeline = [...timeline2.toJSON(), ...timeline1.toJSON()].filter((d) => {
        let dibagikan = d.tanggal_pembagian;
        if (d.tipe == "tugas") {
          dibagikan = d.tugas.tanggal_pembagian;
        }
        if (waktu_mulai && waktu_selesai) {
          return (
            moment(dibagikan) > moment(waktu_mulai).startOf("day") &&
            moment(dibagikan) < moment(waktu_selesai).startOf("day")
          );
        } else {
          return 1;
        }
      });

      await Promise.all(
        timeline.map((d) => {
          const data = { ...d, bab: d.materi.map((e) => e.bab) };

          let dibagikan = d.tanggal_pembagian;
          if (d.tipe == "tugas") {
            dibagikan = d.tugas.tanggal_pembagian;
          }

          if (moment(dibagikan).toDate() > moment().toDate()) {
            terjadwal.push(data);
          } else {
            if (d.tipe == "tugas") {
              if (
                d.__meta__.total_respon >= d.__meta__.total_siswa &&
                !tanggalBerlangsung.includes(
                  moment(dibagikan).format("YYYY-MM-DD")
                )
              ) {
                selesai.push(data);
              } else {
                if (
                  !tanggalBerlangsung.includes(
                    moment(dibagikan).format("YYYY-MM-DD")
                  )
                ) {
                  tanggalBerlangsung.push(
                    moment(dibagikan).format("YYYY-MM-DD")
                  );
                }
                berlangsung.push(data);
              }
            } else if (d.tipe == "absen") {
              if (
                moment(d.tanggal_akhir).toDate() < moment().toDate() &&
                !tanggalBerlangsung.includes(
                  moment(dibagikan).format("YYYY-MM-DD")
                )
              ) {
                selesai.push(data);
              } else {
                if (
                  !tanggalBerlangsung.includes(
                    moment(dibagikan).format("YYYY-MM-DD")
                  )
                ) {
                  tanggalBerlangsung.push(
                    moment(dibagikan).format("YYYY-MM-DD")
                  );
                }
                berlangsung.push(data);
              }
            } else if (d.tipe == "materi") {
              if (
                d.materi[0].__meta__.totalKesimpulan >=
                  d.__meta__.total_siswa &&
                !tanggalBerlangsung.includes(
                  moment(dibagikan).format("YYYY-MM-DD")
                )
              ) {
                selesai.push(data);
              } else {
                if (
                  !tanggalBerlangsung.includes(
                    moment(dibagikan).format("YYYY-MM-DD")
                  )
                ) {
                  tanggalBerlangsung.push(
                    moment(dibagikan).format("YYYY-MM-DD")
                  );
                }
                berlangsung.push(data);
              }
            }
          }
          return 1;
        })
      );
    }

    return response.ok({
      berlangsung,
      terjadwal,
      selesai,
      // berlangsung: timeline.filter((d) => {
      //   let dibagikan = d.tanggal_pembagian;
      //   if (d.tipe == "tugas") {
      //     dibagikan = d.tugas.tanggal_pembagian;
      //   }
      //   dibagikan = moment(dibagikan).format("YYYY-MM-DD");
      //   return tanggalBerlangsung.includes(dibagikan);
      // }),
      // selesai: timeline.filter((d) => {
      //   let dibagikan = d.tanggal_pembagian;
      //   if (d.tipe == "tugas") {
      //     dibagikan = d.tugas.tanggal_pembagian;
      //   }
      //   dibagikan = moment(dibagikan).format("YYYY-MM-DD");
      //   return !tanggalBerlangsung.includes(dibagikan);
      // }),
    });
  }

  async getTransaksi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    const rencana = await this.getRencanaAktif(sekolah, 1);

    const {
      page,
      search,
      dari_tanggal,
      sampai_tanggal,
      tipe_akun,
      status = null,
    } = request.get();

    let transaksiIds;
    if (tipe_akun) {
      transaksiIds = await MKeuJurnal.query()
        .where({ m_keu_akun_id: tipe_akun })
        .pluck("m_keu_transaksi_id");
    }

    let transaksi = MKeuTransaksi.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 }).with("akun", (builder) => {
          builder.select("nama", "id", "kode");
        });
      })
      .with("rencana", (builder) => {
        builder.with("jurnal", (builder) => {
          builder.where({ dihapus: 0 }).with("akun", (builder) => {
            builder.select("id", "nama", "kode");
          });
        });
      })
      .where({ m_sekolah_id: sekolah.id })
      .orderBy("tanggal", "desc")
      .where({ dihapus: 0 });

    if (transaksiIds) {
      transaksi.whereIn("id", transaksiIds);
    }
    if (search) {
      transaksi.where("nama", "like", `%${search}%`);
    }
    if (dari_tanggal && sampai_tanggal) {
      transaksi
        .where("tanggal", ">=", dari_tanggal)
        .andWhere("tanggal", "<=", sampai_tanggal);
    }
    if (user.bagian == "aproval") {
      if (!status) {
        transaksi.where({ status: 0 });
      }
    }
    if (status == 3) {
      transaksi.whereNull("status");
    } else if (status) {
      transaksi.where({ status });
    }

    transaksi = await transaksi.orderBy("status", "asc").paginate(page, 25);

    // return ` ini nilai${status}`
    // transaksi = transaksi
    //   .toJSON()
    //   .data.sort((a, b) => ("" + a.status).localeCompare("" + b.status));

    const akun = await MKeuAkun.query()
      .with("rek")
      .whereNot({ nama: "KAS" })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereNotNull("kode")
      .fetch();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

    const max = await MKeuTransaksi.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .getMax("tanggal");
    const min = await MKeuTransaksi.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .getMin("tanggal");

    return response.ok({
      transaksi,
      akun,
      keuangan,
      rencana,
      max,
      min,
    });
  }

  async postTransaksi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    let {
      nama,
      nomor,
      tanggal,
      jurnal = [],
      m_rencana_transaksi_id,
      m_barang_id,
      status,
    } = request.post();

    if (!user.bagian) {
      status = 1;
    } else {
      status = 0;
    }

    const rules = {
      nama: "required",
      tanggal: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "tanggal.required": "Tanggal harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const transaksi = await MKeuTransaksi.create({
      nama,
      nomor,
      tanggal,
      m_rencana_transaksi_id,
      m_barang_id,
      dihapus: 0,
      status,
      m_sekolah_id: sekolah.id,
    });

    if (m_barang_id) {
      const barang = await MBarang.query().where({ id: m_barang_id }).first();
      await MBarang.query().where({ id: m_barang_id }).update({
        verifikasi: 1,
      });
      await MHistoriAktivitas.create({
        jenis: "Proses Inventaris",
        m_user_id: user.id,
        awal: `Verifikasi Diterima : `,
        akhir: `"${barang.nama}"`,
        bawah: `Aset Tertunda`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    await Promise.all(
      jurnal.map(async (d) => {
        await MKeuJurnal.create({
          jenis: d.jenis,
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          status,
          dihapus: 0,
        });
      })
    );

    await MHistoriAktivitas.create({
      jenis: "Buat Transaksi",
      m_user_id: user.id,
      akhir: nama,
      m_sekolah_id: sekolah.id,
      tipe: "Realisasi",
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }
  async putTransaksi({ response, request, auth, params: { transaksi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      nama,
      nomor,
      tanggal,
      jurnal = [],
      m_rencana_transaksi_id,
      status,
    } = request.post();

    if (!user.bagian) {
      status = 1;
    } else {
      status = 0;
    }

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

    const transaksi = await MKeuTransaksi.query()
      .with("jurnal")
      .with("penyusutan")
      .where({ id: transaksi_id })
      .first();

    const jurnalIds = await MKeuJurnal.query()
      .where({ m_keu_transaksi_id: transaksi_id })
      .where({ dihapus: 0 })
      .ids();
    const semuaJurnal = await MKeuJurnal.query()
      .where({ m_keu_transaksi_id: transaksi_id })
      .where({ dihapus: 0 })
      .fetch();
    const semuaAkun = await MKeuAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    const editJurnal = jurnal.filter((d) => d.id);
    const editJurnalId = editJurnal.map((d) => d.id);
    const newJurnal = jurnal.filter((d) => !d.id);

    // return editJurnal;

    await Promise.all(
      jurnalIds
        .filter((d) => !editJurnalId.includes(d))
        .map(async (d) => {
          await MKeuJurnal.query().where({ id: d }).update({
            dihapus: 1,
            status: null,
          });

          const jurnalLama = semuaJurnal.toJSON().find((e) => e.id == d);
          const akunLama = semuaAkun
            .toJSON()
            .find((e) => e.id == jurnalLama.m_keu_akun_id);

          await MHistoriAktivitas.create({
            jenis: "Ubah Transaksi",
            m_user_id: user.id,
            awal: `Jurnal Umum - Nama Akun : dihapus akun `,
            akhir: `${akunLama.nama}`,
            bawah: `${transaksi.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Realisasi",
          });
        }),
      editJurnal.map(async (d) => {
        const jurnalLama = semuaJurnal.toJSON().find((e) => e.id == d.id);
        const akunLama = semuaAkun
          .toJSON()
          .find((e) => e.id == jurnalLama.m_keu_akun_id);
        const akunBaru = semuaAkun
          .toJSON()
          .find((e) => e.id == d.m_keu_akun_id);
        await MKeuJurnal.query().where({ id: d.id }).update({
          jenis: d.jenis,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          dihapus: 0,
          status,
        });
        if (akunLama.id != akunBaru.id) {
          await MHistoriAktivitas.create({
            jenis: "Ubah Transaksi",
            m_user_id: user.id,
            awal: `Jurnal Umum - Nama Akun : ${akunLama.nama} menjadi `,
            akhir: `"${akunBaru.nama}"`,
            bawah: `${transaksi.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Realisasi",
          });
        }
        if (d.saldo != jurnalLama.saldo || d.jenis != jurnalLama.jenis) {
          const saldoLama = `${jurnalLama.saldo}`.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
          );
          const saldoBaru = `${d.saldo}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          await MHistoriAktivitas.create({
            jenis: "Ubah Transaksi",
            m_user_id: user.id,
            awal: `Jurnal Umum - Nama Akun - ${akunBaru.nama} : ${titleCase(
              jurnalLama.jenis
            )} Rp${saldoLama} menjadi `,
            akhir: `"${titleCase(d.jenis)} Rp${saldoBaru}"`,
            bawah: `${transaksi.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Realisasi",
          });
        }
      }),
      newJurnal.map(async (d) => {
        await MKeuJurnal.create({
          jenis: d.jenis,
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          dihapus: 0,
          status,
        });
        await MHistoriAktivitas.create({
          jenis: "Ubah Transaksi",
          m_user_id: user.id,
          awal: `Jurnal Umum - Nama Akun : dibuat akun `,
          akhir: `${akunBaru.nama}`,
          bawah: `${transaksi.nama}`,
          m_sekolah_id: sekolah.id,
          tipe: "Realisasi",
        });
      })
    );

    let update = await MKeuTransaksi.query()
      .where({ id: transaksi_id })
      .update({
        nama,
        nomor,
        tanggal,
        m_rencana_transaksi_id,
        status,
      });
    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    if (m_rencana_transaksi_id != transaksi.m_rencana_transaksi_id) {
      const rencanaAwal = await MRencanaTransaksi.query()
        .where({ id: transaksi.m_rencana_transaksi_id })
        .first();

      const rencanaAkhir = await MRencanaTransaksi.query()
        .where({ id: m_rencana_transaksi_id })
        .first();
      await MHistoriAktivitas.create({
        jenis: "Ubah Transaksi",
        m_user_id: user.id,
        awal: `Pilih Perencanaan : ${rencanaAwal.nama} menjadi`,
        akhir: `"${rencanaAkhir.nama}"`,
        bawah: `${transaksi.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "Realisasi",
      });
    }
    if (nomor != transaksi.nomor) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Transaksi",
        m_user_id: user.id,
        awal: `Nomor : ${transaksi ? transaksi.nomor : ""} menjadi`,
        akhir: `"${nomor ? nomor : "Kosong"}"`,
        bawah: `${transaksi.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "Realisasi",
      });
    }
    if (
      moment(tanggal).format("dddd, DD MMM YYYY") !=
      moment(transaksi.tanggal).format("dddd, DD MMM YYYY")
    ) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Transaksi",
        m_user_id: user.id,
        awal: `Tanggal : ${moment(transaksi.tanggal).format(
          "dddd, DD MMM YYYY"
        )} menjadi`,
        akhir: `"${moment(tanggal).format("dddd, DD MMM YYYY")}"`,
        bawah: `${transaksi.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "Realisasi",
      });
      if (transaksi.penyusutan.id) {
        const dataSebelum = await MKeuPenyusutanTransaksi.query()
          .where({ id: transaksi.penyusutan.id })
          .first();

        const checkTransaksiSebelum = await MKeuTransaksi.query()
          .with("jurnalDebet", (builder) => {
            builder.where({ jenis: "debit" });
          })
          .where({ id: dataSebelum.m_keu_transaksi_id })
          .first();

        const deletee = await MKeuTransaksi.query()
          .where({ m_keu_penyusutan_transaksi_id: dataSebelum.id })
          .delete();

        let saldo = dataSebelum.saldo;

        let masaPakai;
        if (dataSebelum.satuan == "Bulan") {
          masaPakai = dataSebelum.masa_pakai;
        } else if (dataSebelum.satuan == "Tahun") {
          masaPakai = dataSebelum.masa_pakai * 12;
        }

        if (
          moment().format("YYYY-MM-DD") >= moment(tanggal).format("YYYY-MM-DD")
        ) {
          const date1 = moment(`${tanggal}`);

          let date2;
          if (moment(`${tanggal}`).add(masaPakai, "M") >= moment()) {
            date2 = moment();
          } else {
            date2 = moment(`${tanggal}`).add(masaPakai, "M");
          }
          const diff = date2.diff(date1);

          // return diff
          let lama = moment(diff).format(`M`);
          if (moment().format("DD") >= moment(transaksi.tanggal).format("DD")) {
            lama = lama - 1;
          }

          for (let i = 1; i <= lama; i++) {
            const transaksi = await MKeuTransaksi.create({
              nama: dataSebelum.nama_transaksi,
              // nomor,
              tanggal: moment(tanggal).add(i, "M").format("YYYY-MM-DD"),
              dihapus: 0,
              status: 1,
              m_sekolah_id: sekolah.id,
              m_keu_penyusutan_transaksi_id: dataSebelum.id,
            });

            await MKeuJurnal.create({
              jenis: "debit",
              m_keu_transaksi_id: transaksi.id,
              m_keu_akun_id: dataSebelum.m_keu_akun_debet_id,
              saldo,
              status: 1,
              dihapus: 0,
            });

            await MKeuJurnal.create({
              jenis: "kredit",
              m_keu_transaksi_id: transaksi.id,
              m_keu_akun_id: dataSebelum.m_keu_akun_kredit_id,
              saldo,
              status: 1,
              dihapus: 0,
            });
          }
          //  return datass
        }
      }
    }
    if (nama != transaksi.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Transaksi",
        m_user_id: user.id,
        awal: `Judul : ${transaksi.nama} menjadi`,
        akhir: `"${nama}"`,
        bawah: `${transaksi.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "Realisasi",
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteTransaksi({ response, request, auth, params: { transaksi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const update = await MKeuTransaksi.query()
      .where({ id: transaksi_id })
      .update({
        dihapus: 1,
        status: null,
      });

    await MKeuJurnal.query()
      .where({ m_keu_transaksi_id: transaksi_id })
      .update({
        dihapus: 1,
        status: null,
      });
    const transaksi = await MKeuTransaksi.query()
      .where({ id: transaksi_id })
      .first();
    await MHistoriAktivitas.create({
      jenis: "Hapus Transaksi",
      m_user_id: user.id,
      akhir: `${transaksi.nama}`,
      m_sekolah_id: sekolah.id,
      tipe: "Realisasi",
    });

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }
  async downloadJurnal({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir } = request.post();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    let transaksi;
    transaksi = MKeuTransaksi.query()
      .with("jurnal", (builder) => {
        builder.with("akun").where({ dihapus: 0 });
      })
      .withCount("jurnal as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });
    if (tanggal_awal) {
      transaksi.whereBetween("tanggal", [
        `${tanggal_awal}`,
        `${tanggal_akhir}`,
      ]);
    }
    transaksi = await transaksi.fetch();

    // return transaksi;

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Jurnal Umum`);
    worksheet.mergeCells("A1:D1");
    worksheet.mergeCells("A2:D2");
    worksheet.mergeCells("A3:D3");

    worksheet.addConditionalFormatting({
      ref: "A1:D1",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 14,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A2:D3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 14,
              // bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A5:D5",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    const dateObj = new Date();
    const tahun = dateObj.getYear();
    const bulan = monthNames[dateObj.getMonth()];
    let awal = 0;
    let nilaiDebit = 0;
    let nilaiKredit = 0;

    await Promise.all(
      transaksi.toJSON().map(async (d, idx) => {
        // add column headers
        worksheet.getRow(5).values = [
          "TANGGAL",
          "NAMA AKUN",
          "DEBIT",
          "KREDIT",
        ];
        await Promise.all(
          d.jurnal.map(async (e) => {
            worksheet.columns = [
              { key: "" },
              { key: "akun" },
              { key: "debit" },
              { key: "kredit" },
            ];

            // Add row using key mapping to columns
            if (e.jenis == "debit") {
              let row = worksheet.addRow({
                akun: `${e.akun ? e.akun.kode : "-"} - ${
                  e.akun ? e.akun.nama : "-"
                }`,
                debit: `${(e ? e.saldo : "0").toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}`,
              });

              nilaiDebit = nilaiDebit + e.saldo;
            } else if (e.jenis == "kredit") {
              let row = worksheet.addRow({
                akun: `${e.akun ? e.akun.kode : "-"} - ${
                  e.akun ? e.akun.nama : "-"
                }`,
                kredit: `${(e ? e.saldo : "0").toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}`,
              });
              nilaiKredit = nilaiKredit + e.saldo;
            }
          })
        );
        const tanggalUtama = moment(`${d.tanggal}`).format(
          "DD-MM-YYYY HH:mm:ss"
        );

        if (idx == 0) {
          worksheet.getCell(`A${(idx + 1) * 1 + 5}`).value = `${tanggalUtama}`;
          worksheet.mergeCells(
            `A${(idx + 1) * 1 + 5}:A${(idx + 1) * 1 + 4 + d.__meta__.total}`
          );
        } else if (idx > 0) {
          worksheet.getCell(`A${6 + awal}`).value = `${tanggalUtama}`;

          worksheet.mergeCells(`A${6 + awal}:A${5 + awal + d.__meta__.total}`);
        }
        awal = awal + d.__meta__.total;
      })
    );

    worksheet.addConditionalFormatting({
      ref: `B6:B${6 + awal}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 11,
              // bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: `C6:D${6 + awal}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 11,
              // bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: `A6:A${6 + awal}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 11,
              // bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
              wrapText: true,
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    worksheet.getCell(
      `A${8 + awal}`
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet.getCell(`B${6 + awal}`).value = `TOTAL`;
    worksheet.addConditionalFormatting({
      ref: `A${6 + awal}:D${6 + awal}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 11,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
              wrapText: true,
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.getCell(`C${6 + awal}`).value = `${nilaiDebit.toLocaleString(
      "id-ID",
      {
        style: "currency",
        currency: "IDR",
      }
    )}`;
    worksheet.getCell(`D${6 + awal}`).value = `${nilaiKredit.toLocaleString(
      "id-ID",
      {
        style: "currency",
        currency: "IDR",
      }
    )}`;

    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = "JURNAL UMUM";
    worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;

    worksheet.getColumn("A").width = 20;
    worksheet.getColumn("B").width = 23;
    worksheet.getColumn("C").width = 28;
    worksheet.getColumn("D").width = 28;

    let namaFile = `/uploads/Jurnal-Umum-${bulan}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);
    // worksheet.columns = [
    //   { key: "Tanggal" },
    //   { key: "akun" },
    //   { key: "debet" },
    //   { key: "kredit" },
    // ];

    // // Add row using key mapping to columns
    // let row = worksheet.addRow({
    //   Tanggal: d ? d.transaksi:"-",
    //   akun: d.jurnal.akun ? d.jurnal.akun.nama : "-",
    //   debet: d ? d.debet : "-",
    //   kredit: d ? d.kredit : "-",
    // });

    return namaFile;
  }

  async downloadTransaksi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir, status } = request.post();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    let transaksi;
    transaksi = MKeuTransaksi.query()
      .with("jurnal", (builder) => {
        builder.with("akun").where({ dihapus: 0 });
      })
      .withCount("jurnal as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });
    if (tanggal_awal) {
      transaksi.whereBetween("tanggal", [
        `${tanggal_awal}`,
        `${tanggal_akhir}`,
      ]);
    }
    if (user.bagian == "aproval") {
      if (!status) {
        transaksi.whereNull("status");
      }
    }
    if (status) {
      transaksi.where({ status });
    }
    transaksi = await transaksi.fetch();

    // return transaksi;

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Transaksi`);
    worksheet.mergeCells("A1:F1");
    worksheet.mergeCells("A2:F2");
    worksheet.mergeCells("A3:F3");

    worksheet.addConditionalFormatting({
      ref: "A1:F1",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 14,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A2:F3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 14,
              // bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A5:F5",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    const dateObj = new Date();
    const tahun = dateObj.getYear();
    const bulan = monthNames[dateObj.getMonth()];
    let awal = 0;
    let nilaiDebit = 0;
    let nilaiKredit = 0;

    await Promise.all(
      transaksi.toJSON().map(async (d, idx) => {
        // add column headers
        worksheet.getRow(5).values = [
          "TANGGAL TRANSAKSI",
          "TANGGAL PERUBAHAN",
          "KETERANGAN TRANSAKSI",
          "NAMA AKUN",
          "DEBIT",
          "KREDIT",
        ];
        await Promise.all(
          d.jurnal.map(async (e) => {
            worksheet.columns = [
              { key: "" },
              { key: "" },
              { key: "" },
              { key: "akun" },
              { key: "debit" },
              { key: "kredit" },
            ];

            // Add row using key mapping to columns
            if (e.jenis == "debit") {
              let row = worksheet.addRow({
                akun: `${e.akun ? e.akun.kode : "-"} - ${
                  e.akun ? e.akun.nama : "-"
                }`,
                debit: `${(e ? e.saldo : "0").toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}`,
              });

              nilaiDebit = nilaiDebit + e.saldo;
            } else if (e.jenis == "kredit") {
              let row = worksheet.addRow({
                akun: `${e.akun ? e.akun.kode : "-"} - ${
                  e.akun ? e.akun.nama : "-"
                }`,
                kredit: `${(e ? e.saldo : "0").toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}`,
              });
              nilaiKredit = nilaiKredit + e.saldo;
            }
          })
        );
        const tanggalUtama = moment(`${d.tanggal}`).format("DD-MM-YYYY");
        const jamUtama = moment(`${d.tanggal}`).format("HH:mm:ss");
        const tanggalPerubahan = moment(`${d.updated_at}`).format("DD-MM-YYYY");
        const jamPerubahan = moment(`${d.updated_at}`).format("HH:mm:ss");

        if (idx == 0) {
          worksheet.getCell(`A${(idx + 1) * 1 + 5}`).value = `${tanggalUtama}
${jamUtama}`;
          worksheet.mergeCells(
            `A${(idx + 1) * 1 + 5}:A${(idx + 1) * 1 + 4 + d.__meta__.total}`
          );
          worksheet.getCell(
            `B${(idx + 1) * 1 + 5}`
          ).value = `${tanggalPerubahan}
${jamPerubahan}`;
          worksheet.mergeCells(
            `B${(idx + 1) * 1 + 5}:B${(idx + 1) * 1 + 4 + d.__meta__.total}`
          );
          worksheet.getCell(`C${(idx + 1) * 1 + 5}`).value = `${d.nama}`;
          worksheet.mergeCells(
            `C${(idx + 1) * 1 + 5}:C${(idx + 1) * 1 + 4 + d.__meta__.total}`
          );
        } else if (idx > 0) {
          worksheet.getCell(`A${6 + awal}`).value = `${tanggalUtama}
${jamUtama}`;

          worksheet.mergeCells(`A${6 + awal}:A${5 + awal + d.__meta__.total}`);

          worksheet.getCell(`B${6 + awal}`).value = `${tanggalPerubahan}
${jamPerubahan}`;

          worksheet.mergeCells(`B${6 + awal}:B${5 + awal + d.__meta__.total}`);

          worksheet.getCell(`C${6 + awal}`).value = `${d.nama}`;

          worksheet.mergeCells(`C${6 + awal}:C${5 + awal + d.__meta__.total}`);
        }
        awal = awal + d.__meta__.total;
      })
    );

    worksheet.addConditionalFormatting({
      ref: `C6:D${6 + awal}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 11,
              // bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: `E6:F${6 + awal}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 11,
              // bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: `A6:B${6 + awal}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 11,
              // bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
              wrapText: true,
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    worksheet.getCell(
      `A${8 + awal}`
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet.getCell(`C${6 + awal}`).value = `TOTAL`;

    worksheet.mergeCells(`C${6 + awal}:D${6 + awal}`);
    worksheet.addConditionalFormatting({
      ref: `A${6 + awal}:F${6 + awal}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Calibri",
              family: 4,
              size: 11,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
              wrapText: true,
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.getCell(`E${6 + awal}`).value = `${nilaiDebit.toLocaleString(
      "id-ID",
      {
        style: "currency",
        currency: "IDR",
      }
    )}`;
    worksheet.getCell(`F${6 + awal}`).value = `${nilaiKredit.toLocaleString(
      "id-ID",
      {
        style: "currency",
        currency: "IDR",
      }
    )}`;

    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = "DAFTAR TRANSAKSI";
    worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;

    worksheet.getColumn("A").width = 26;
    worksheet.getColumn("B").width = 26;
    worksheet.getColumn("C").width = 30;
    worksheet.getColumn("D").width = 23;
    worksheet.getColumn("E").width = 28;
    worksheet.getColumn("F").width = 28;

    let namaFile = `/uploads/Transaksi-${bulan}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);
    // worksheet.columns = [
    //   { key: "Tanggal" },
    //   { key: "akun" },
    //   { key: "debet" },
    //   { key: "kredit" },
    // ];

    // // Add row using key mapping to columns
    // let row = worksheet.addRow({
    //   Tanggal: d ? d.transaksi:"-",
    //   akun: d.jurnal.akun ? d.jurnal.akun.nama : "-",
    //   debet: d ? d.debet : "-",
    //   kredit: d ? d.kredit : "-",
    // });

    return namaFile;
  }

  async downloadNeraca({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir, data, rencana_id } = request.post();
    // return data;

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).format("DD MMMM YYYY ");

    const template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const isi = JSON.parse(template.template);
    // return data1;

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Neraca`);
    if (rencana_id) {
      worksheet.mergeCells("A1:F1");
      worksheet.mergeCells("A2:F2");
      worksheet.mergeCells("A3:F3");
    } else {
      worksheet.mergeCells("A1:D1");
      worksheet.mergeCells("A2:D2");
      worksheet.mergeCells("A3:D3");
    }
    // worksheet.getCell(
    //   "A4"
    // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:F3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Arial",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });

    // return data;

    const dateObj = new Date();
    const bulan = monthNames[dateObj.getMonth()];
    if (rencana_id) {
      const coba = await Promise.all(
        data.map(async (d, idx) => {
          // return `-300000`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          // add column headers
          worksheet.getRow(4).values = [
            "NO AKUN",
            "NAMA AKUN",
            "PERENCANAAN",
            "",
            "REALISASI",
            "",
          ];
          worksheet.getRow(5).values = [
            "NO AKUN",
            "NAMA AKUN",
            "(Rp)",
            "(Rp)",
            "(Rp)",
            "(Rp)",
          ];
          worksheet.columns = [
            { key: "no" },
            { key: "nama" },
            { key: "rpRencana" },
            { key: "rpRencana1" },
            { key: "rpRealisasi" },
            { key: "rpRealisasi1" },
          ];

          const rencanaData = d.total_rencana
            ? d.total_rencana.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            : "0";

          const realisasiData = d.total
            ? d.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            : "0";

          // Add row using key mapping to columns
          if (d.level == 1) {
            let row = worksheet.addRow({
              nama: `${d ? d.nama : "-"}`,
              rpRencana1: rencanaData,
              rpRealisasi1: realisasiData,
            });
            worksheet.getCell(`B${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            worksheet.getCell(`D${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            worksheet.getCell(`F${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            if (d.total) {
              worksheet.addConditionalFormatting({
                ref: `A${(idx + 1) * 1 + 5}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        // right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
              worksheet.addConditionalFormatting({
                ref: `B${(idx + 1) * 1 + 5}:C${(idx + 1) * 1 + 5}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      font: {
                        name: "Arial",
                        family: 4,
                        size: 11,
                        bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "left",
                      },
                      border: {
                        top: { style: "thin" },
                        // left: { style: "thin" },
                        bottom: { style: "thin" },
                        // right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
              worksheet.addConditionalFormatting({
                ref: `D${(idx + 1) * 1 + 5}:F${(idx + 1) * 1 + 5}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      font: {
                        name: "Arial",
                        family: 4,
                        size: 11,
                        // bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "center",
                      },
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 5}:C${(idx + 1) * 1 + 5}`
              );
            } else {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 5}:F${(idx + 1) * 1 + 5}`
              );
              worksheet.addConditionalFormatting({
                ref: `A${(idx + 1) * 1 + 5}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        // right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
              worksheet.addConditionalFormatting({
                ref: `B${(idx + 1) * 1 + 5}:C${(idx + 1) * 1 + 5}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      font: {
                        name: "Arial",
                        family: 4,
                        size: 11,
                        bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "left",
                      },
                      border: {
                        top: { style: "thin" },
                        // left: { style: "thin" },
                        bottom: { style: "thin" },
                        // right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
              worksheet.addConditionalFormatting({
                ref: `D${(idx + 1) * 1 + 5}:F${(idx + 1) * 1 + 5}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      font: {
                        name: "Arial",
                        family: 4,
                        size: 11,
                        // bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "left",
                      },
                      border: {
                        top: { style: "thin" },
                        // left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
            }
          } else if (d.level == 2) {
            let row = worksheet.addRow({
              nama: d ? d.nama : "-",
              rpRencana1: rencanaData,
              rpRealisasi1: realisasiData,
            });
            worksheet.getCell(`B${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            worksheet.getCell(`D${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            worksheet.getCell(`F${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            if (d.total) {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 5}:C${(idx + 1) * 1 + 5}`
              );
            } else {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 5}:F${(idx + 1) * 1 + 5}`
              );
            }
          } else if (d.level == 3) {
            let row = worksheet.addRow({
              no: d ? d.kode : "",
              nama: d ? d.nama : "-",
              rpRencana: rencanaData,
              rpRealisasi: realisasiData,
            });
          }
          worksheet.addConditionalFormatting({
            ref: `B${(idx + 1) * 1 + 5}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial",
                    family: 4,
                    size: 11,
                    // bold: true,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "left",
                  },
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                },
              },
            ],
          });
          worksheet.addConditionalFormatting({
            ref: `A${(idx + 1) * 1 + 5}:F${(idx + 1) * 1 + 5}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial",
                    family: 4,
                    size: 11,
                    // bold: true,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                },
              },
            ],
          });
        })
      );
      // return coba;
    } else {
      await Promise.all(
        data.map(async (d, idx) => {
          // add column headers
          worksheet.getRow(4).values = ["No Akun", "Nama Akun", "(Rp)", "(Rp)"];
          worksheet.columns = [
            { key: "no" },
            { key: "nama" },
            { key: "rp" },
            { key: "rp1" },
          ];
          const realisasiData = d.total
            ? d.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            : "0";
          // Add row using key mapping to columns
          if (d.level == 1) {
            let row = worksheet.addRow({
              nama: `${d ? d.nama : "-"}`,
              rp1: realisasiData,
            });
            worksheet.getCell(`B${(idx + 1) * 1 + 4}`).font = {
              bold: true,
            };
            worksheet.getCell(`D${(idx + 1) * 1 + 4}`).font = {
              bold: true,
            };
            if (d.total) {
              worksheet.addConditionalFormatting({
                ref: `A${(idx + 1) * 1 + 4}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        // right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
              worksheet.addConditionalFormatting({
                ref: `B${(idx + 1) * 1 + 4}:C${(idx + 1) * 1 + 4}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      font: {
                        name: "Arial",
                        family: 4,
                        size: 11,
                        bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "left",
                      },
                      border: {
                        top: { style: "thin" },
                        // left: { style: "thin" },
                        bottom: { style: "thin" },
                        // right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
              worksheet.addConditionalFormatting({
                ref: `D${(idx + 1) * 1 + 4}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      font: {
                        name: "Arial",
                        family: 4,
                        size: 11,
                        // bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "center",
                      },
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 4}:C${(idx + 1) * 1 + 4}`
              );
            } else {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 4}:D${(idx + 1) * 1 + 4}`
              );
              worksheet.addConditionalFormatting({
                ref: `A${(idx + 1) * 1 + 4}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        // right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
              worksheet.addConditionalFormatting({
                ref: `B${(idx + 1) * 1 + 4}:C${(idx + 1) * 1 + 4}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      font: {
                        name: "Arial",
                        family: 4,
                        size: 11,
                        bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "left",
                      },
                      border: {
                        top: { style: "thin" },
                        // left: { style: "thin" },
                        bottom: { style: "thin" },
                        // right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
              worksheet.addConditionalFormatting({
                ref: `D${(idx + 1) * 1 + 4}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      font: {
                        name: "Arial",
                        family: 4,
                        size: 11,
                        // bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "left",
                      },
                      border: {
                        top: { style: "thin" },
                        // left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                    },
                  },
                ],
              });
            }
          } else if (d.level == 2) {
            let row = worksheet.addRow({
              nama: d ? d.nama : "-",
              rp1: realisasiData,
            });
            worksheet.getCell(`B${(idx + 1) * 1 + 4}`).font = {
              bold: true,
            };
            worksheet.getCell(`D${(idx + 1) * 1 + 4}`).font = {
              bold: true,
            };
            if (d.total) {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 4}:C${(idx + 1) * 1 + 4}`
              );
            } else {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 4}:D${(idx + 1) * 1 + 4}`
              );
            }
          } else if (d.level == 3) {
            let row = worksheet.addRow({
              no: d ? d.kode : "",
              nama: d ? d.nama : "-",
              rp: realisasiData,
            });
          }
          worksheet.addConditionalFormatting({
            ref: `B${(idx + 1) * 1 + 4}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial",
                    family: 4,
                    size: 11,
                    // bold: true,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "left",
                  },
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                },
              },
            ],
          });
          worksheet.addConditionalFormatting({
            ref: `A${(idx + 1) * 1 + 4}:D${(idx + 1) * 1 + 4}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial",
                    family: 4,
                    size: 11,
                    // bold: true,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                },
              },
            ],
          });
        })
      );
    }

    if (rencana_id) {
      worksheet.mergeCells(`A4:A5`);
      worksheet.mergeCells(`B4:B5`);
      worksheet.mergeCells(`C4:D4`);
      worksheet.mergeCells(`E4:F4`);
      worksheet.addConditionalFormatting({
        ref: "B4:B5",
        rules: [
          {
            type: "expression",
            formulae: ["MOD(ROW()+COLUMN(),1)=0"],
            style: {
              font: {
                name: "Arial",
                family: 4,
                size: 12,
                bold: true,
              },
              fill: {
                type: "pattern",
                pattern: "solid",
                bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
              },
              alignment: {
                vertical: "middle",
                horizontal: "left",
              },
              border: {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              },
            },
          },
        ],
      });
      worksheet.addConditionalFormatting({
        ref: "A4:F5",
        rules: [
          {
            type: "expression",
            formulae: ["MOD(ROW()+COLUMN(),1)=0"],
            style: {
              font: {
                name: "Arial",
                family: 4,
                size: 12,
                bold: true,
              },
              fill: {
                type: "pattern",
                pattern: "solid",
                bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
              },
              alignment: {
                vertical: "middle",
                horizontal: "center",
              },
              border: {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              },
            },
          },
        ],
      });

      const rencana = await MRencanaKeuangan.query()
        .where({ id: rencana_id })
        .first();

      worksheet.getCell("A2").value = `NERACA - RENCANA ${rencana.nama}`;
    } else {
      worksheet.addConditionalFormatting({
        ref: "B4",
        rules: [
          {
            type: "expression",
            formulae: ["MOD(ROW()+COLUMN(),1)=0"],
            style: {
              font: {
                name: "Arial",
                family: 4,
                size: 12,
                bold: true,
              },
              fill: {
                type: "pattern",
                pattern: "solid",
                bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
              },
              alignment: {
                vertical: "middle",
                horizontal: "left",
              },
              border: {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              },
            },
          },
        ],
      });

      worksheet.addConditionalFormatting({
        ref: "A4:D4",
        rules: [
          {
            type: "expression",
            formulae: ["MOD(ROW()+COLUMN(),1)=0"],
            style: {
              font: {
                name: "Arial",
                family: 4,
                size: 12,
                bold: true,
              },
              fill: {
                type: "pattern",
                pattern: "solid",
                bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
              },
              alignment: {
                vertical: "middle",
                horizontal: "center",
              },
              border: {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              },
            },
          },
        ],
      });
      worksheet.getCell("A2").value = `NERACA`;
    }
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;

    // worksheet.addConditionalFormatting({
    //   ref: `A5:D${data.length}`,
    //   rules: [
    //     {
    //       type: "expression",
    //       formulae: ["MOD(ROW()+COLUMN(),1)=0"],
    //       style: {
    //         font: {
    //           name: "Arial",
    //           family: 4,
    //           size: 12,
    //         },
    //         alignment: {
    //           vertical: "middle",
    //           horizontal: "center",
    //         },
    //         border: {
    //           top: { style: "thin" },
    //           left: { style: "thin" },
    //           bottom: { style: "thin" },
    //           right: { style: "thin" },
    //         },
    //       },
    //     },
    //   ],
    // });
    worksheet.getCell(
      `A${6 + data.length}`
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.getColumn("B").width = 20;
    worksheet.getColumn("C").width = 28;
    worksheet.getColumn("D").width = 28;
    worksheet.getColumn("E").width = 28;
    worksheet.getColumn("F").width = 28;
    let namaFile = `/uploads/Neraca-${bulan}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadNeraca2({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir, data } = request.post();
    // return data;

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    const template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const isi = JSON.parse(template.template);
    // return data1;

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Neraca`);
    worksheet.mergeCells("A1:D1");
    worksheet.mergeCells("A2:D2");
    worksheet.mergeCells("A3:D3");
    // worksheet.getCell(
    //   "A4"
    // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:D3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A4:D4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    const dateObj = new Date();
    const tahun = dateObj.getYear();
    const bulan = monthNames[dateObj.getMonth()];
    // return data1;
    let nilaiTotal = 0;
    let nilaiAktiva;
    let a = 0;
    let namaTotal;
    await Promise.all(
      data.map(async (d, idx) => {
        // add column headers
        worksheet.getRow(4).values = ["No Akun", "Nama Akun", "(Rp)", "(Rp)"];
        if (idx == 0) {
          if (d.level == 1) {
            worksheet.getCell(`B${(idx + 1) * 1 + 4}`).value = `AKTIVA`;
            worksheet.getCell(`B${(idx + 1) * 1 + 5}`).value = `${d.nama}`;
            nilaiTotal = d.total;
            nilaiAktiva = d.total;
            namaTotal = d.nama;
          }
        } else if (d.tipe == "pasiva") {
          if (d.level == 2) {
            worksheet.getCell(`A${(idx + 1) * 1 + 5 + a}`).value = "";
            worksheet.getCell(`B${(idx + 1) * 1 + 5 + a}`).value = `${d.nama}`;
            worksheet.getCell(`C${(idx + 1) * 1 + 5 + a}`).value = `${d.total}`;
          } else if (d.level == 1) {
            worksheet.getCell(
              `B${(idx + 1) * 1 + 5 + a}`
            ).value = `TOTAL ${namaTotal}`;
            worksheet.getCell(`D${(idx + 1) * 1 + 5 + a}`).value = nilaiTotal;
            worksheet.getCell(`B${(idx + 1) * 1 + 6 + a}`).value = `${d.nama}`;
            nilaiTotal = 0;
          }
        } else if (d.level == 2) {
          worksheet.getCell(`A${(idx + 1) * 1 + 5 + a}`).value = "";
          worksheet.getCell(`B${(idx + 1) * 1 + 5 + a}`).value = `${d.nama}`;
          worksheet.getCell(`C${(idx + 1) * 1 + 5 + a}`).value = `${d.total}`;
        } else if (d.level == 1) {
          worksheet.getCell(
            `B${(idx + 1) * 1 + 5}`
          ).value = `TOTAL ${namaTotal}`;
          worksheet.getCell(`D${(idx + 1) * 1 + 5}`).value = nilaiTotal;
          worksheet.getCell(`B${(idx + 1) * 1 + 6}`).value = `${d.nama}`;
          nilaiAktiva = nilaiAktiva + d.total;
          namaTotal = d.nama;
          a = a + 1;
        }
      })
    );
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = "NERACA";
    worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;
    worksheet.addConditionalFormatting({
      ref: `A5:D${ids + 5}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.getColumn("B").width = 20;
    worksheet.getColumn("C").width = 23;
    worksheet.getColumn("D").width = 28;
    worksheet.getColumn("E").width = 28;
    let namaFile = `/uploads/Neraca-${bulan}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadNeraca1({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir, data1 } = request.post();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    const template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const isi = JSON.parse(template.template);
    // return data1;

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Neraca`);
    worksheet.mergeCells("A1:D1");
    worksheet.mergeCells("A2:D2");
    worksheet.mergeCells("A3:D3");
    // worksheet.getCell(
    //   "A4"
    // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:D3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A4:D4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    const dateObj = new Date();
    const tahun = dateObj.getYear();
    const bulan = monthNames[dateObj.getMonth()];
    // return data1;
    let nilaiTotal = 0;
    let nilaiAktiva;
    let ids = 0;
    let nos = 0;
    let nod = 0;
    let namaTotal;
    let totalAktiv;
    let namaAktiv;
    await Promise.all(
      data1.map(async (d, idx) => {
        // looping aktiva pasiva
        worksheet.getRow(4).values = ["No Akun", "Nama Akun", "(Rp)", "(Rp)"];
        worksheet.getCell(`B${(ids + 1) * 1 + 4}`).value = d.nama;
        ids = ids + 1;
        totalAktiv = d.a.length;
        namaAktiv;
        await Promise.all(
          d.a.map(async (c, idd) => {
            //looping aset lancar,aset tetap, hutang
            worksheet.getCell(`B${(ids + 1) * 1 + 4}`).value = c.nama;
            ids = ids + 1;
            nos = nos + c.b.length;
            nod = c.b.length;
            namaTotal = c.nama;
            await Promise.all(
              c.b.map(async (e, nox) => {
                //looping kas, dana
                worksheet.getCell(`B${(ids + 1) * 1 + 4}`).value = e.nama;
                worksheet.getCell(`C${(ids + 1) * 1 + 4}`).value = e.total;
                ids = ids + 1;
                if (nox == nod - 1) {
                  worksheet.getCell(
                    `B${(ids + 1) * 1 + 4}`
                  ).value = `TOTAL ${namaTotal}`;
                  worksheet.getCell(`D${(ids + 1) * 1 + 4}`).value = e.total;
                  ids = ids + 1;
                  if (idd == totalAktiv - 1) {
                    worksheet.getCell(
                      `B${(ids + 1) * 1 + 4}`
                    ).value = `TOTAL ${namaAktiv}`;
                    worksheet.getCell(`D${(ids + 1) * 1 + 4}`).value = e.total;
                    ids = ids + 1;
                  }
                }
              })
            );
            //akhir promise
          })
        );
        // add column headers

        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 5}:D${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });

        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
      })
    );
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = "NERACA";
    worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;

    worksheet.getColumn("B").width = 20;
    worksheet.getColumn("C").width = 23;
    worksheet.getColumn("D").width = 28;
    worksheet.getColumn("E").width = 28;
    let namaFile = `/uploads/Neraca-${bulan}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  // async downloadLabaRugi123({ response, request, auth }) {
  //   const domain = request.headers().origin;

  //   const sekolah = await this.getSekolahByDomain(domain);

  //   if (sekolah == "404") {
  //     return response.notFound({ message: "Sekolah belum terdaftar" });
  //   }

  //   const user = await auth.getUser();

  //   const { tanggal_awal, tanggal_akhir } = request.post();

  //   const keluarantanggalseconds =
  //     moment().format("YYYY-MM-DD ") + Date.now();

  //   const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
  //   const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

  //   let transaksiIds;
  //   if (tanggal_awal && tanggal_akhir) {
  //     transaksiIds = await MKeuTransaksi.query()
  //       .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
  //       .where({ m_sekolah_id: sekolah.id })
  //       .where({ dihapus: 0 })
  //       .ids();
  //   }

  //   const kategori = await MKeuKategoriLabaRugi.query()
  //     .with("akunLabaRugi", (builder) => {
  //       builder
  //         .with("akun", (builder) => {
  //           builder
  //             .with("jurnal", (builder) => {
  //               builder.where({ dihapus: 0 });
  //               if (transaksiIds) {
  //                 builder.whereIn("m_keu_transaksi_id", transaksiIds);
  //               }
  //             })
  //             .where({ dihapus: 0 });
  //         })
  //         .where({ dihapus: 0 })
  //         .orderBy("urutan", "asc");
  //     })
  //     .withCount("akunLabaRugi as total", (builder) => {
  //       builder.where({ dihapus: 0 });
  //     })
  //     .where({ dihapus: 0 })
  //     .andWhere({ m_sekolah_id: sekolah.id })
  //     .fetch();
  //   // return kategori;

  //   let workbook = new Excel.Workbook();
  //   let worksheet = workbook.addWorksheet(`Laba Rugi`);
  //   worksheet.mergeCells("A1:D1");
  //   worksheet.mergeCells("A2:D2");
  //   worksheet.mergeCells("A3:D3");

  //   worksheet.addConditionalFormatting({
  //     ref: "A1:D1",
  //     rules: [
  //       {
  //         type: "expression",
  //         formulae: ["MOD(ROW()+COLUMN(),1)=0"],
  //         style: {
  //           font: {
  //             name: "Times New Roman",
  //             family: 4,
  //             size: 14,
  //             bold: true,
  //           },
  //           // fill: {
  //           //   type: "pattern",
  //           //   pattern: "solid",
  //           //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
  //           // },
  //           alignment: {
  //             vertical: "middle",
  //             horizontal: "center",
  //           },
  //           // border: {
  //           //   top: { style: "thin" },
  //           //   left: { style: "thin" },
  //           //   bottom: { style: "thin" },
  //           //   right: { style: "thin" },
  //           // },
  //         },
  //       },
  //     ],
  //   });
  //   worksheet.addConditionalFormatting({
  //     ref: "A2:D3",
  //     rules: [
  //       {
  //         type: "expression",
  //         formulae: ["MOD(ROW()+COLUMN(),1)=0"],
  //         style: {
  //           font: {
  //             name: "Times New Roman",
  //             family: 4,
  //             size: 14,
  //             // bold: true,
  //           },
  //           // fill: {
  //           //   type: "pattern",
  //           //   pattern: "solid",
  //           //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
  //           // },
  //           alignment: {
  //             vertical: "middle",
  //             horizontal: "center",
  //           },
  //           // border: {
  //           //   top: { style: "thin" },
  //           //   left: { style: "thin" },
  //           //   bottom: { style: "thin" },
  //           //   right: { style: "thin" },
  //           // },
  //         },
  //       },
  //     ],
  //   });
  //   worksheet.addConditionalFormatting({
  //     ref: "A5:D5",
  //     rules: [
  //       {
  //         type: "expression",
  //         formulae: ["MOD(ROW()+COLUMN(),1)=0"],
  //         style: {
  //           font: {
  //             name: "Times New Roman",
  //             family: 4,
  //             size: 12,
  //             bold: true,
  //           },
  //           fill: {
  //             type: "pattern",
  //             pattern: "solid",
  //             bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
  //           },
  //           alignment: {
  //             vertical: "middle",
  //             horizontal: "center",
  //           },
  //           border: {
  //             top: { style: "thin" },
  //             left: { style: "thin" },
  //             bottom: { style: "thin" },
  //             right: { style: "thin" },
  //           },
  //         },
  //       },
  //     ],
  //   });

  //   const dateObj = new Date();
  //   const tahun = dateObj.getYear();
  //   const bulan = monthNames[dateObj.getMonth()];
  //   let awal = 0;
  //   let nilaiDebit = 0;
  //   let nilaiKredit = 0;
  //   let kategoriNilai = 0;
  //   let total= 0;

  //   await Promise.all(
  //     kategori.toJSON().map(async (d, idx) => {
  //       // add column headers
  //       worksheet.getRow(5).values = ["NO AKUN", "NAMA AKUN", "(Rp)", "(Rp)"];
  //       if (idx == 0) {
  //         worksheet.getRow(`6`).values = ["", `${d.nama}`, "", ""];
  //       }
  //       if (idx > 0) {
  //         worksheet.getRow(`${idx + total + 6}`).values = [
  //           "",
  //           `${d.nama}`,
  //           "",
  //           "",
  //         ];
  //       }
  //       total= total +d.__meta__.total
  //       await Promise.all(
  //         d.akunLabaRugi.map(async (e, nox) => {
  //           if (idx == 0) {
  //             worksheet.getRow(`6`).values = ["", `${d.nama}`, "", ""];
  //           }
  //           if (idx > 0) {
  //             worksheet.getRow(`${idx + total + 6}`).values = [
  //               "",
  //               `${d.nama}`,
  //               "",
  //               "",
  //             ];
  //           }
  //           worksheet.columns = [{ key: "no" }, { key: "akun" }, { key: "rp" }];

  //           let nilaiAkun = 0;
  //           await Promise.all(
  //             e.akun.jurnal.map(async (f) => {
  //               if (f.jenis == "kredit") {
  //                 nilaiAkun = nilaiAkun - f.saldo;
  //               } else if (f.jenis == "debit") {
  //                 nilaiAkun = nilaiAkun + f.saldo;
  //               }
  //             })
  //           );

  //           let row = worksheet.addRow({
  //             no: e.akun ? e.akun.kode : "-",
  //             akun: e.akun ? e.akun.nama : "-",
  //             rp: nilaiAkun,
  //           });

  //           // worksheet.getCell(`C${(nox + 1) * 1 + 6}`).value = `${nilaiAkun}`;
  //         })
  //       );
  //     })
  //   );

  //   // worksheet.addConditionalFormatting({
  //   //   ref: `B6:D${6 + awal}`,
  //   //   rules: [
  //   //     {
  //   //       type: "expression",
  //   //       formulae: ["MOD(ROW()+COLUMN(),1)=0"],
  //   //       style: {
  //   //         font: {
  //   //           name: "Times New Roman",
  //   //           family: 4,
  //   //           size: 11,
  //   //           // bold: true,
  //   //         },
  //   //         alignment: {
  //   //           vertical: "middle",
  //   //           horizontal: "left",
  //   //         },
  //   //         border: {
  //   //           top: { style: "thin" },
  //   //           left: { style: "thin" },
  //   //           bottom: { style: "thin" },
  //   //           right: { style: "thin" },
  //   //         },
  //   //       },
  //   //     },
  //   //   ],
  //   // });
  //   // worksheet.addConditionalFormatting({
  //   //   ref: `A6:A${6 + awal}`,
  //   //   rules: [
  //   //     {
  //   //       type: "expression",
  //   //       formulae: ["MOD(ROW()+COLUMN(),1)=0"],
  //   //       style: {
  //   //         font: {
  //   //           name: "Times New Roman",
  //   //           family: 4,
  //   //           size: 11,
  //   //           // bold: true,
  //   //         },
  //   //         alignment: {
  //   //           vertical: "middle",
  //   //           horizontal: "center",
  //   //           wrapText: true,
  //   //         },
  //   //         border: {
  //   //           top: { style: "thin" },
  //   //           left: { style: "thin" },
  //   //           bottom: { style: "thin" },
  //   //           right: { style: "thin" },
  //   //         },
  //   //       },
  //   //     },
  //   //   ],
  //   // });

  //   // worksheet.getCell(
  //   //   `A${8 + awal}`
  //   // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

  //   // worksheet.getCell(`B${6 + awal}`).value = `Total`;
  //   // worksheet.getCell(`C${6 + awal}`).value = `${nilaiDebit.toLocaleString(
  //   //   "id-ID",
  //   //   {
  //   //     style: "currency",
  //   //     currency: "IDR",
  //   //   }
  //   // )}`;
  //   // worksheet.getCell(`D${6 + awal}`).value = `${nilaiKredit.toLocaleString(
  //   //   "id-ID",
  //   //   {
  //   //     style: "currency",
  //   //     currency: "IDR",
  //   //   }
  //   // )}`;

  //   worksheet.getCell("A1").value = sekolah.nama;
  //   worksheet.getCell("A2").value = "LAPORAN LABA RUGI";
  //   worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;

  //   worksheet.getColumn("A").width = 20;
  //   worksheet.getColumn("B").width = 23;
  //   worksheet.getColumn("C").width = 28;
  //   worksheet.getColumn("D").width = 28;

  //   let namaFile = `/uploads/laba-rugi-${bulan}-${keluarantanggalseconds}.xlsx`;

  //   // save workbook to disk
  //   await workbook.xlsx.writeFile(`public${namaFile}`);

  //   return namaFile;
  // }
  async downloadLabaRugi1({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir, data } = request.post();

    return data;

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    let transaksiIds;
    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .ids();
    }

    const kategori = await MKeuKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder
              .with("jurnal", (builder) => {
                builder.where({ dihapus: 0 });
                if (transaksiIds) {
                  builder.whereIn("m_keu_transaksi_id", transaksiIds);
                }
              })
              .where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .withCount("akunLabaRugi as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();
    // return kategori.toJSON().__meta__.total;

    let awal = 0;
    let kategoriNilai = 0;
    let total = 0;
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Laba Rugi`);
    worksheet.mergeCells("A1:D1");
    worksheet.mergeCells("A2:D2");
    worksheet.mergeCells("A3:D3");

    worksheet.addConditionalFormatting({
      ref: "A1:D1",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 14,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A2:D3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 14,
              // bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A5:D5",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    const dateObj = new Date();
    const tahun = dateObj.getYear();
    const bulan = monthNames[dateObj.getMonth()];

    const result = await Promise.all(
      kategori.toJSON().map(async (d, idx) => {
        // add column headers
        worksheet.getRow(5).values = ["NO AKUN", "NAMA AKUN", "(Rp)", "(Rp)"];
        let totalKategori = 0;
        if (idx == 0) {
          worksheet.getCell(`B${(idx + 1) * 1 + 5}`).value = `${d.nama}`;
          await Promise.all(
            d.akunLabaRugi.map(async (e, nox) => {
              awal = awal + 1;
              let nilaiAkun = 0;
              worksheet.getCell(`A${(nox + 1) * 1 + 6}`).value = `${
                e.akun ? e.akun.kode : "-"
              }`;
              worksheet.getCell(`B${(nox + 1) * 1 + 6}`).value = `${
                e.akun ? e.akun.nama : "-"
              }`;

              await Promise.all(
                e.akun.jurnal.map(async (f) => {
                  if (f.jenis == "kredit") {
                    nilaiAkun = nilaiAkun - f.saldo;
                    totalKategori = totalKategori - f.saldo;
                  } else if (f.jenis == "debit") {
                    totalKategori = totalKategori + f.saldo;
                    nilaiAkun = nilaiAkun + f.saldo;
                  }
                })
              );
              worksheet.getCell(
                `C${(nox + 1) * 1 + 6}`
              ).value = `${nilaiAkun.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}`;
            })
          );
          worksheet.getCell(
            `B${(idx + 1) * 1 + 5 + awal}`
          ).value = `TOTAL ${d.nama}`;
          worksheet.getCell(
            `D${(idx + 1) * 1 + 5 + awal}`
          ).value = `${totalKategori.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}`;
        } else if (idx >= 0) {
          worksheet.getCell(`B${idx + 7 + awal}`).value = `${d.nama}`;
          await Promise.all(
            d.akunLabaRugi.map(async (e, nox) => {
              let nilaiAkun = 0;
              awal = awal + 1;
              worksheet.getCell(`A${nox + 8 + awal}`).value = `${
                e.akun ? e.akun.kode : "-"
              }`;
              worksheet.getCell(`B${nox + 8 + awal}`).value = `${
                e.akun ? e.akun.nama : "-"
              }`;

              await Promise.all(
                e.akun.jurnal.map(async (f) => {
                  if (f.jenis == "kredit") {
                    nilaiAkun = nilaiAkun - f.saldo;
                    totalKategori = totalKategori - f.saldo;
                  } else if (f.jenis == "debit") {
                    totalKategori = totalKategori + f.saldo;
                    nilaiAkun = nilaiAkun + f.saldo;
                  }
                })
              );
              worksheet.getCell(
                `C${nox + 8 + awal}`
              ).value = `${nilaiAkun.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}`;
            })
          );
          worksheet.getCell(`B${idx + 8 + awal}`).value = `TOTAL ${d.nama}`;
          worksheet.getCell(
            `D${idx + 8 + awal}`
          ).value = `${totalKategori.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}`;
        }

        if (idx) {
          worksheet.getCell(
            `B${idx + 9 + awal}`
          ).value = `LABA PAJAK SEBELUM (LABA)`;
          worksheet.getCell(
            `D${idx + 9 + awal}`
          ).value = `${totalKategori.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}`;
        }

        // awal = awal + d.__meta__.total;
        // return awal;
      })
    );

    // return result;
    worksheet.addConditionalFormatting({
      ref: `B6:B${10 + awal}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 11,
              // bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "left",
              // wrapText: true,
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: `A6:D${10 + awal}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 11,
              // bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    // worksheet.getCell(
    //   `A${8 + awal}`
    // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    // worksheet.getCell(`B${6 + awal}`).value = `Total`;
    // worksheet.getCell(`C${6 + awal}`).value = `${nilaiDebit.toLocaleString(
    //   "id-ID",
    //   {
    //     style: "currency",
    //     currency: "IDR",
    //   }
    // )}`;
    // worksheet.getCell(`D${6 + awal}`).value = `${nilaiKredit.toLocaleString(
    //   "id-ID",
    //   {
    //     style: "currency",
    //     currency: "IDR",
    //   }
    // )}`;

    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = "LAPORAN LABA RUGI";
    worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;

    worksheet.getColumn("A").width = 12;
    worksheet.getColumn("B").width = 48;
    worksheet.getColumn("C").width = 28;
    worksheet.getColumn("D").width = 28;

    let namaFile = `/uploads/Laba-Rugi-${bulan}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);
    // worksheet.columns = [
    //   { key: "Tanggal" },
    //   { key: "akun" },
    //   { key: "debet" },
    //   { key: "kredit" },
    // ];

    // // Add row using key mapping to columns
    // let row = worksheet.addRow({
    //   Tanggal: d ? d.transaksi:"-",
    //   akun: d.jurnal.akun ? d.jurnal.akun.nama : "-",
    //   debet: d ? d.debet : "-",
    //   kredit: d ? d.kredit : "-",
    // });

    return namaFile;
  }
  async downloadLabaRugi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir, data, rencana_id } = request.post();
    // return data;

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).format("DD MMMM YYYY ");

    const template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const isi = JSON.parse(template.template);
    // return data1;

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Laba Rugi`);
    if (rencana_id) {
      worksheet.mergeCells("A1:F1");
      worksheet.mergeCells("A2:F2");
      worksheet.mergeCells("A3:F3");
    } else {
      worksheet.mergeCells("A1:D1");
      worksheet.mergeCells("A2:D2");
      worksheet.mergeCells("A3:D3");
    }
    // worksheet.getCell(
    //   "A4"
    // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:F3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Arial",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });

    // return data;

    const dateObj = new Date();
    const tahun = dateObj.getYear();
    const bulan = monthNames[dateObj.getMonth()];
    // return data1;
    if (rencana_id) {
      await Promise.all(
        data.map(async (d, idx) => {
          // add column headers
          worksheet.getRow(4).values = [
            "NO AKUN",
            "NAMA AKUN",
            "PERENCANAAN",
            "",
            "REALISASI",
            "",
          ];
          worksheet.getRow(5).values = [
            "NO AKUN",
            "NAMA AKUN",
            "(Rp)",
            "(Rp)",
            "(Rp)",
            "(Rp)",
          ];
          worksheet.columns = [
            { key: "no" },
            { key: "nama" },
            { key: "rpRencana" },
            { key: "rpRencana1" },
            { key: "rpRealisasi" },
            { key: "rpRealisasi1" },
          ];

          // Add row using key mapping to columns
          if (d.level == 1) {
            let row = worksheet.addRow({
              nama: d ? d.nama : "-",
              rpRencana1: `${
                d.total_rencana
                  ? d.total_rencana
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  : "0"
              }`,
              rpRealisasi1: `${
                d.total
                  ? d.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  : "0"
              }`,
            });
            worksheet.getCell(`B${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            worksheet.getCell(`D${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            worksheet.getCell(`F${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            if (d.total || d.total == 0) {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 5}:C${(idx + 1) * 1 + 5}`
              );
            } else {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 5}:F${(idx + 1) * 1 + 5}`
              );
            }
          } else if (d.level == 2) {
            let row = worksheet.addRow({
              no: d ? d.kode : "",
              nama: d ? d.nama : "-",
              rpRencana: `${
                d.total_rencana
                  ? d.total_rencana
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  : "0"
              }`,
              rpRealisasi: `${
                d.total
                  ? d.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  : "0"
              }`,
            });
          }
          worksheet.addConditionalFormatting({
            ref: `B${(idx + 1) * 1 + 5}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial",
                    family: 4,
                    size: 11,
                    // bold: true,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "left",
                  },
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                },
              },
            ],
          });
          worksheet.addConditionalFormatting({
            ref: `A${(idx + 1) * 1 + 5}:F${(idx + 1) * 1 + 5}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial",
                    family: 4,
                    size: 11,
                    // bold: true,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                },
              },
            ],
          });
        })
      );
    } else {
      await Promise.all(
        data.map(async (d, idx) => {
          // add column headers
          worksheet.getRow(4).values = ["No Akun", "Nama Akun", "(Rp)", "(Rp)"];
          worksheet.columns = [
            { key: "no" },
            { key: "nama" },
            { key: "rp" },
            { key: "rp1" },
          ];

          // Add row using key mapping to columns
          if (d.level == 1) {
            let row = worksheet.addRow({
              nama: d ? d.nama : "-",
              rp1: `${
                d.total
                  ? d.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  : "0"
              }`,
            });
            worksheet.getCell(`B${(idx + 1) * 1 + 4}`).font = {
              bold: true,
            };
            worksheet.getCell(`D${(idx + 1) * 1 + 4}`).font = {
              bold: true,
            };
            if (d.total) {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 4}:C${(idx + 1) * 1 + 4}`
              );
            } else {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 4}:D${(idx + 1) * 1 + 4}`
              );
            }
          } else if (d.level == 2) {
            let row = worksheet.addRow({
              no: d ? d.kode : "",
              nama: d ? d.nama : "-",
              rp: `${
                d.total
                  ? d.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  : "0"
              }`,
            });
          }
          worksheet.addConditionalFormatting({
            ref: `B${(idx + 1) * 1 + 4}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial",
                    family: 4,
                    size: 11,
                    // bold: true,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "left",
                  },
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                },
              },
            ],
          });
          worksheet.addConditionalFormatting({
            ref: `A${(idx + 1) * 1 + 4}:D${(idx + 1) * 1 + 4}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial",
                    family: 4,
                    size: 11,
                    // bold: true,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                },
              },
            ],
          });
        })
      );
    }

    if (rencana_id) {
      worksheet.mergeCells(`A4:A5`);
      worksheet.mergeCells(`B4:B5`);
      worksheet.mergeCells(`C4:D4`);
      worksheet.mergeCells(`E4:F4`);
      worksheet.addConditionalFormatting({
        ref: "B4:B5",
        rules: [
          {
            type: "expression",
            formulae: ["MOD(ROW()+COLUMN(),1)=0"],
            style: {
              font: {
                name: "Arial",
                family: 4,
                size: 12,
                bold: true,
              },
              fill: {
                type: "pattern",
                pattern: "solid",
                bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
              },
              alignment: {
                vertical: "middle",
                horizontal: "left",
              },
              border: {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              },
            },
          },
        ],
      });
      worksheet.addConditionalFormatting({
        ref: "A4:F5",
        rules: [
          {
            type: "expression",
            formulae: ["MOD(ROW()+COLUMN(),1)=0"],
            style: {
              font: {
                name: "Arial",
                family: 4,
                size: 12,
                bold: true,
              },
              fill: {
                type: "pattern",
                pattern: "solid",
                bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
              },
              alignment: {
                vertical: "middle",
                horizontal: "center",
              },
              border: {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              },
            },
          },
        ],
      });
      const rencana = await MRencanaKeuangan.query()
        .where({ id: rencana_id })
        .first();
      worksheet.getCell(
        "A2"
      ).value = `LAPORAN LABA RUGI - RENCANA ${rencana.nama}`;
    } else {
      worksheet.addConditionalFormatting({
        ref: "B4",
        rules: [
          {
            type: "expression",
            formulae: ["MOD(ROW()+COLUMN(),1)=0"],
            style: {
              font: {
                name: "Arial",
                family: 4,
                size: 12,
                bold: true,
              },
              fill: {
                type: "pattern",
                pattern: "solid",
                bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
              },
              alignment: {
                vertical: "middle",
                horizontal: "left",
              },
              border: {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              },
            },
          },
        ],
      });
      worksheet.addConditionalFormatting({
        ref: "A4:D4",
        rules: [
          {
            type: "expression",
            formulae: ["MOD(ROW()+COLUMN(),1)=0"],
            style: {
              font: {
                name: "Arial",
                family: 4,
                size: 12,
                bold: true,
              },
              fill: {
                type: "pattern",
                pattern: "solid",
                bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
              },
              alignment: {
                vertical: "middle",
                horizontal: "center",
              },
              border: {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              },
            },
          },
        ],
      });
      worksheet.getCell("A2").value = "LAPORAN LABA RUGI";
    }
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;

    worksheet.getColumn("A").width = 12;
    worksheet.getColumn("B").width = 48;
    worksheet.getColumn("C").width = 28;
    worksheet.getColumn("D").width = 28;
    worksheet.getColumn("E").width = 28;
    worksheet.getColumn("F").width = 28;
    worksheet.getCell(
      `A${6 + data.length}`
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    let namaFile = `/uploads/Laba-Rugi-${bulan}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
  async downloadArusKas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir, data } = request.post();
    // return data;

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    const template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const isi = JSON.parse(template.template);
    // return data1;

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Arus Kas`);
    worksheet.mergeCells("A1:C1");
    worksheet.mergeCells("A2:C2");
    worksheet.mergeCells("A3:C3");
    // worksheet.getCell(
    //   "A4"
    // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:C3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Arial",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Arial",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "B4:C4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Arial",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    // return data;

    const dateObj = new Date();
    const tahun = dateObj.getYear();
    const bulan = monthNames[dateObj.getMonth()];
    // return data1;
    let nilaiTotal = 0;
    let nilaiAktiva;
    let a = 0;
    let namaTotal;
    await Promise.all(
      data.map(async (d, idx) => {
        // add column headers
        worksheet.getRow(4).values = ["Nama Akun", "(Rp)", "(Rp)"];
        worksheet.columns = [{ key: "nama" }, { key: "rp" }, { key: "rp1" }];

        // Add row using key mapping to columns
        if (d.level == 1) {
          let row = worksheet.addRow({
            nama: d ? d.nama : "-",
            rp1: `${d ? d.total : ""},00`,
          });
          worksheet.getCell(`A${(idx + 1) * 1 + 4}`).font = {
            bold: true,
          };
          worksheet.getCell(`C${(idx + 1) * 1 + 4}`).font = {
            bold: true,
          };
          if (d.total) {
            worksheet.mergeCells(`A${(idx + 1) * 1 + 4}:B${(idx + 1) * 1 + 4}`);
          } else {
            worksheet.mergeCells(`A${(idx + 1) * 1 + 4}:C${(idx + 1) * 1 + 4}`);
          }
        } else if (d.level == 2) {
          let row = worksheet.addRow({
            nama: d ? d.nama : "-",
            rp: `${d ? d.total : ""},00`,
          });
        }
        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 4}:C${(idx + 1) * 1 + 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
      })
    );
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = "LAPORAN ARUS KAS";
    worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;

    worksheet.getColumn("A").width = 48;
    worksheet.getColumn("B").width = 28;
    worksheet.getColumn("C").width = 28;
    worksheet.getCell(
      `A${6 + data.length}`
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    let namaFile = `/uploads/Arus-Kas-${bulan}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
  async downloadArusKas1({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir, data } = request.post();

    return data;

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    const template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const isi = JSON.parse(template.template);
    // return data1;

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Neraca`);
    worksheet.mergeCells("A1:D1");
    worksheet.mergeCells("A2:D2");
    worksheet.mergeCells("A3:D3");
    // worksheet.getCell(
    //   "A4"
    // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:D3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A4:D4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    const dateObj = new Date();
    const tahun = dateObj.getYear();
    const bulan = monthNames[dateObj.getMonth()];
    // return data1;
    let nilaiTotal = 0;
    let nilaiAktiva;
    let ids = 0;
    let nos = 0;
    let nod = 0;
    let namaTotal;
    let totalAktiv;
    let namaAktiv;
    await Promise.all(
      data1.map(async (d, idx) => {
        // looping aktiva pasiva
        worksheet.getRow(4).values = ["No Akun", "Nama Akun", "(Rp)", "(Rp)"];
        worksheet.getCell(`B${(ids + 1) * 1 + 4}`).value = d.nama;
        ids = ids + 1;
        totalAktiv = d.a.length;
        namaAktiv;
        await Promise.all(
          d.a.map(async (c, idd) => {
            //looping aset lancar,aset tetap, hutang
            worksheet.getCell(`B${(ids + 1) * 1 + 4}`).value = c.nama;
            ids = ids + 1;
            nos = nos + c.b.length;
            nod = c.b.length;
            namaTotal = c.nama;
            await Promise.all(
              c.b.map(async (e, nox) => {
                //looping kas, dana
                worksheet.getCell(`B${(ids + 1) * 1 + 4}`).value = e.nama;
                worksheet.getCell(`C${(ids + 1) * 1 + 4}`).value = e.total;
                ids = ids + 1;
                if (nox == nod - 1) {
                  worksheet.getCell(
                    `B${(ids + 1) * 1 + 4}`
                  ).value = `TOTAL ${namaTotal}`;
                  worksheet.getCell(`D${(ids + 1) * 1 + 4}`).value = e.total;
                  ids = ids + 1;
                  if (idd == totalAktiv - 1) {
                    worksheet.getCell(
                      `B${(ids + 1) * 1 + 4}`
                    ).value = `TOTAL ${namaAktiv}`;
                    worksheet.getCell(`D${(ids + 1) * 1 + 4}`).value = e.total;
                    ids = ids + 1;
                  }
                }
              })
            );
            //akhir promise
          })
        );
        // add column headers

        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 5}:D${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });

        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
      })
    );
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = "NERACA";
    worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;

    worksheet.getColumn("B").width = 20;
    worksheet.getColumn("C").width = 23;
    worksheet.getColumn("D").width = 28;
    worksheet.getColumn("E").width = 28;
    let namaFile = `/uploads/Neraca-${bulan}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadAnalisis({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const rencana = await this.getRencanaAktif(sekolah);

    // let { search, tanggal_awal, tanggal_akhir } = request.get();

    // let transaksiIds, rencanaTransaksiIds;

    // rencanaTransaksiIds = MRencanaTransaksi.query()
    //   .where({ m_sekolah_id: sekolah.id })
    //   .where({ m_rencana_keuangan_id: rencana.id })
    //   .where({ dihapus: 0 });

    // if (tanggal_awal && tanggal_akhir) {
    //   transaksiIds = await MKeuTransaksi.query()
    //     .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
    //     .where({ m_sekolah_id: sekolah.id })
    //     .where({ dihapus: 0 })
    //     .ids();
    //   rencanaTransaksiIds.whereBetween("tanggal", [
    //     moment(tanggal_awal).startOf("month").format("YYYY-MM-DD HH:mm:ss"),
    //     moment(tanggal_akhir).endOf("month").format("YYYY-MM-DD HH:mm:ss"),
    //   ]);
    // }

    // rencanaTransaksiIds = await rencanaTransaksiIds.ids();

    // const akun = await MKeuAkun.query()
    //   .with("jurnal", (builder) => {
    //     builder.where({ dihapus: 0 });
    //     if (transaksiIds) {
    //       builder.whereIn("m_keu_transaksi_id", transaksiIds);
    //     }
    //   })
    //   .with("rencanaJurnal", (builder) => {
    //     builder.where({ dihapus: 0 });
    //     if (rencanaTransaksiIds) {
    //       builder.whereIn("m_rencana_transaksi_id", rencanaTransaksiIds);
    //     }
    //   })
    //   .andWhere({ dihapus: 0 })
    //   .andWhere({ m_sekolah_id: sekolah.id })
    //   .fetch();

    // let kategori;

    const { tanggal_awal, tanggal_akhir, data, rencana_id } = request.post();
    // return data;

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).format("DD MMMM YYYY ");

    const template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const isi = JSON.parse(template.template);
    // return data1;

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Laba Rugi`);
    worksheet.mergeCells("A1:D1");
    worksheet.mergeCells("A2:D2");
    worksheet.mergeCells("A3:D3");
    // worksheet.getCell(
    //   "A4"
    // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:D3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Arial",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });

    // return data;

    const dateObj = new Date();
    const tahun = dateObj.getYear();
    const bulan = monthNames[dateObj.getMonth()];
    // return data1;

    await Promise.all(
      data.map(async (d, idx) => {
        // add column headers
        worksheet.getRow(4).values = [
          "NO AKUN",
          "NAMA AKUN",
          "RENCANA ANGGARAN (Rp)",
          "REALISASI (Rp)",
          "SELISIH (Rp)",
          "PERSENTASE (%)",
        ];
        worksheet.columns = [
          { key: "no" },
          { key: "nama" },
          { key: "rencana" },
          { key: "realisasi" },
          { key: "selisih" },
          { key: "persentase" },
        ];

        // Add row using key mapping to columns

        let row = worksheet.addRow({
          no: d ? d.kode : "",
          nama: d ? d.nama : "-",
          rencana: `${d ? d.total_rencana : ""}`.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
          ),
          realisasi: `${d ? d.total : ""}`.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
          ),
          selisih: `${d ? d.total : ""}`.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
          persentase: `${d ? d.total : ""}`.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
          ),
        });

        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 4}:D${(idx + 1) * 1 + 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
      })
    );

    worksheet.addConditionalFormatting({
      ref: "B4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Arial",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A4:D4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Arial",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    const rencana11 = await MRencanaKeuangan.query()
      .where({ id: rencana_id })
      .first();
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell(
      "A2"
    ).value = `LAPORAN ANALISA ${rencana11.nama.toUpperCase()} DAN REALISASI ANGGARAN`;
    worksheet.getCell("A3").value = `Tanggal : ${awal1} - ${akhir1}`;

    worksheet.getColumn("A").width = 12;
    worksheet.getColumn("B").width = 48;
    worksheet.getColumn("C").width = 28;
    worksheet.getColumn("D").width = 28;
    worksheet.getCell(
      `A${6 + data.length}`
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    let namaFile = `/uploads/Laba-Rugi-${bulan}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async getNeraca({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    const rencana = await this.getRencanaAktif(sekolah, 0, tanggal_awal);

    let transaksiIds,
      rencanaTransaksiIds,
      transaksiKumulatifIds,
      rencanaTransaksiKumulatifIds;

    rencanaTransaksiIds = MRencanaTransaksi.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ m_rencana_keuangan_id: rencana.id })
      .where({ dihapus: 0 })
      .andWhere({ status: 1 });

    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .ids();
      transaksiKumulatifIds = await MKeuTransaksi.query()
        .where("tanggal", "<=", tanggal_akhir)
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .ids();
      rencanaTransaksiIds.whereBetween("tanggal", [
        moment(tanggal_awal).startOf("month").format("YYYY-MM-DD HH:mm:ss"),
        moment(tanggal_akhir).endOf("month").format("YYYY-MM-DD HH:mm:ss"),
      ]);
      rencanaTransaksiKumulatifIds = await MRencanaTransaksi.query()
        .where("tanggal", "<=", tanggal_akhir)
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .andWhere({ m_rencana_keuangan_id: rencana.id })
        .ids();
    }

    rencanaTransaksiIds = await rencanaTransaksiIds.ids();

    const akun = await MKeuAkun.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (transaksiIds) {
          builder.whereIn("m_keu_transaksi_id", transaksiIds);
        }
      })
      .with("jurnal1", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (transaksiIds) {
          builder.whereIn("m_keu_transaksi_id", transaksiKumulatifIds);
        }
      })
      .with("rencanaJurnal", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (rencanaTransaksiIds) {
          builder.whereIn("m_rencana_transaksi_id", rencanaTransaksiIds);
        }
      })
      .with("rencanaJurnal1", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (rencanaTransaksiKumulatifIds) {
          builder.whereIn(
            "m_rencana_transaksi_id",
            rencanaTransaksiKumulatifIds
          );
        }
      })
      .with("rek", (builder) => {
        builder.where({ dihapus: 0 }).whereNull("m_rencana_keuangan_id");
      })
      .with("rekRencana", (builder) => {
        builder
          .where({ dihapus: 0 })
          .where({ m_rencana_keuangan_id: rencana.id });
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .orderBy("kode", "asc")
      .fetch();

    let kategori;

    kategori = MKeuKategoriNeraca.query()
      .with("akunNeraca", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.with("rumusAkun");
          })
          .whereIn(
            "m_keu_akun_id",
            akun.toJSON().map((d) => d.id)
          )
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    const kategoriLabaRugi = await MKeuKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.with("rumusAkun");
          })
          .whereIn(
            "m_keu_akun_id",
            akun.toJSON().map((d) => d.id)
          )
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

    const rumusLaba = await MRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();
    const pendapatan = await MKeuKategoriLabaRugi.query()
      .select("id")
      .where({ dihapus: 0 })
      .andWhere({ nama: "PENDAPATAN" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    const dataAkunPendapatan = await TkKategoriAkunLabaRugi.query()
      .where({ m_keu_kategori_laba_rugi_id: pendapatan.id })
      .pluck("m_keu_akun_id");

    return response.ok({
      kategori,
      akun,
      keuangan,
      rencana,
      kategoriLabaRugi,
      rumusLaba,
      dataAkunPendapatan,
    });
  }

  async postKategoriNeraca({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { tipe, nama, warna } = request.post();

    const rules = {
      tipe: "required",
      nama: "required",
    };
    const message = {
      "tipe.required": "Tipe harus diisi",
      "nama.required": "Nama harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kategori = await MKeuKategoriNeraca.create({
      tipe,
      nama,
      warna,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `${titleCase(tipe)} : `,
      akhir: `${nama}`,
      bawah: `Laporan Neraca`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKategoriNeraca({
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

    let { nama, warna } = request.post();

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

    const kategoriNeraca = await MKeuKategoriNeraca.query()
      .where({ id: kategori_id })
      .first();
    const kategori = await MKeuKategoriNeraca.query()
      .where({ id: kategori_id })
      .update({
        nama,
        warna,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    if (warna != kategoriNeraca.warna) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `${titleCase(kategoriNeraca.tipe)} - Warna : ${
          kategoriNeraca.warna
        } menjadi `,
        akhir: `"${warna}"`,
        bawah: `Laporan Neraca`,
        m_sekolah_id: sekolah.id,
      });
    }
    if (nama != kategoriNeraca.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `${titleCase(kategoriNeraca.tipe)} - Nama : ${
          kategoriNeraca.nama
        } menjadi `,
        akhir: `"${nama}"`,
        bawah: `Laporan Neraca`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKategoriNeraca({
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

    const kategori = await MKeuKategoriNeraca.query()
      .where({ id: kategori_id })
      .update({
        dihapus: 1,
      });

    const kategoriNeraca = await MKeuKategoriNeraca.query()
      .where({ id: kategori_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `${titleCase(kategoriNeraca.tipe)} : `,
      akhir: `${kategoriNeraca.nama}`,
      bawah: `Laporan Neraca`,
      m_sekolah_id: sekolah.id,
    });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postNeraca({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { m_keu_kategori_neraca_id, m_keu_akun_id, urutan, pengaturan } =
      request.post();

    const rules = {
      m_keu_akun_id: "required",
    };
    const message = {
      "m_keu_akun_id.required": "Akun harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kategori = await TkKategoriAkunNeraca.create({
      m_keu_akun_id,
      m_keu_kategori_neraca_id,
      urutan,
      pengaturan,
    });

    const kategoriNeraca = await MKeuKategoriNeraca.query()
      .where({ id: m_keu_kategori_neraca_id })
      .first();

    const akun = await MKeuAkun.query().where({ id: m_keu_akun_id }).first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `${titleCase(kategoriNeraca.tipe)} - ${kategoriNeraca.nama} : `,
      akhir: `${akun.nama}`,
      bawah: `Laporan Neraca`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putNeraca({ response, request, auth, params: { neraca_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { m_keu_akun_id, urutan, pengaturan } = request.post();

    const rules = {
      m_keu_akun_id: "required",
    };
    const message = {
      "m_keu_akun_id.required": "Akun harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const neracaSebelum = await TkKategoriAkunNeraca.query()
      .where({ id: neraca_id })
      .first();

    const neraca = await TkKategoriAkunNeraca.query()
      .where({ id: neraca_id })
      .update({
        m_keu_akun_id,
        urutan,
        pengaturan,
      });

    if (!neraca) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    if (m_keu_akun_id != neracaSebelum.m_keu_akun_id) {
      const akunSebelum = await MKeuAkun.query()
        .where({ id: neracaSebelum.m_keu_akun_id })
        .first();

      const akun = await MKeuAkun.query().where({ id: m_keu_akun_id }).first();

      const kategoriNeraca = await MKeuKategoriNeraca.query()
        .where({ id: neracaSebelum.m_keu_kategori_neraca_id })
        .first();

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `${titleCase(kategoriNeraca.tipe)} - ${kategoriNeraca.nama} : ${
          akunSebelum.nama
        } menjadi `,
        akhir: `"${akun.nama}"`,
        bawah: `Laporan Neraca`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteNeraca({ response, request, auth, params: { neraca_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const neraca = await TkKategoriAkunNeraca.query()
      .where({ id: neraca_id })
      .update({
        dihapus: 1,
      });

    if (!neraca) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const akunNeraca = await TkKategoriAkunNeraca.query()
      .where({ id: neraca_id })
      .first();

    const akun = await MKeuAkun.query()
      .where({ id: akunNeraca.m_keu_akun_id })
      .first();

    const kategoriNeraca = await MKeuKategoriNeraca.query()
      .where({ id: akunNeraca.m_keu_kategori_neraca_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `${titleCase(kategoriNeraca.tipe)} - ${kategoriNeraca.nama} : `,
      akhir: `"${akun.nama}"`,
      bawah: `Laporan Neraca`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getLabaRugi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let { search, tanggal_awal, tanggal_akhir } = request.get();
    const rencana = await this.getRencanaAktif(sekolah, 0, tanggal_awal);
    const taaktif = await this.getTAHPSAktif(sekolah, tanggal_awal);

    let transaksiIds,
      rencanaTransaksiIds,
      transaksiAkumulasiIds,
      rencanaTransaksiAkumulasiIds;

    rencanaTransaksiIds = MRencanaTransaksi.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ m_rencana_keuangan_id: rencana.id })
      .where({ dihapus: 0 })
      .andWhere({ status: 1 });

    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .ids();

      transaksiAkumulasiIds = await MKeuTransaksi.query()
        .where("tanggal", "<=", tanggal_akhir)
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .ids();
      rencanaTransaksiIds.whereBetween("tanggal", [
        moment(tanggal_awal).startOf("month").format("YYYY-MM-DD HH:mm:ss"),
        moment(tanggal_akhir).endOf("month").format("YYYY-MM-DD HH:mm:ss"),
      ]);
      rencanaTransaksiAkumulasiIds = await MRencanaTransaksi.query()
        .where("tanggal", "<=", tanggal_akhir)
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .where({ m_rencana_keuangan_id: rencana.id })
        .ids();
    }

    rencanaTransaksiIds = await rencanaTransaksiIds.ids();

    const pendapatan = await MKeuKategoriLabaRugi.query()
      .select("id")
      .where({ dihapus: 0 })
      .andWhere({ nama: "PENDAPATAN" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    const dataAkunPendapatan = await TkKategoriAkunLabaRugi.query()
      .where({ m_keu_kategori_laba_rugi_id: pendapatan.id })
      .pluck("m_keu_akun_id");
    // return dataAkunPendapatan;

    const akun = await MKeuAkun.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (transaksiIds) {
          builder.whereIn("m_keu_transaksi_id", transaksiIds);
        }
      })
      .with("jurnal2", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .andWhere({ jenis: "debit" });
        if (transaksiIds) {
          builder.whereIn("m_keu_transaksi_id", transaksiIds);
        }
      })
      .with("jurnal1", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (transaksiAkumulasiIds) {
          builder.whereIn("m_keu_transaksi_id", transaksiAkumulasiIds);
        }
      })
      .with("jurnal3", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .andWhere({ jenis: "debit" });
        if (transaksiAkumulasiIds) {
          builder.whereIn("m_keu_transaksi_id", transaksiAkumulasiIds);
        }
      })
      .with("rencanaJurnal", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (rencanaTransaksiIds) {
          builder.whereIn("m_rencana_transaksi_id", rencanaTransaksiIds);
        }
      })
      .with("rencanaJurnal2", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .andWhere({ jenis: "debit" });
        if (rencanaTransaksiIds) {
          builder.whereIn("m_rencana_transaksi_id", rencanaTransaksiIds);
        }
      })
      .with("rencanaJurnal1", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (rencanaTransaksiAkumulasiIds) {
          builder.whereIn(
            "m_rencana_transaksi_id",
            rencanaTransaksiAkumulasiIds
          );
        }
      })
      .with("rencanaJurnal3", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .andWhere({ jenis: "debit" });
        if (rencanaTransaksiAkumulasiIds) {
          builder.whereIn(
            "m_rencana_transaksi_id",
            rencanaTransaksiAkumulasiIds
          );
        }
      })
      .with("rek", (builder) => {
        builder.where({ dihapus: 0 }).whereNull("m_rencana_keuangan_id");
      })
      .with("rekRencana", (builder) => {
        builder
          .where({ dihapus: 0 })
          .where({ m_rencana_keuangan_id: rencana.id });
      })
      .with("rumusAkun", (builder) => {
        builder.whereNull("m_rencana_keuangan_id");
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    let kategori;

    kategori = MKeuKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.with("rumusAkun", (builder) => {
              builder.whereNull("m_rencana_keuangan_id");
            });
          })
          .whereIn(
            "m_keu_akun_id",
            akun.toJSON().map((d) => d.id)
          )
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    const rumus = await MRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("urutan", "asc")
      .fetch();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

    let rombelIds;
    rombelIds = MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: taaktif.id })
      .andWhere({ dihapus: 0 });

    rombelIds = await rombelIds.ids();

    let totalSiswa;
    totalSiswa = MAnggotaRombel.query().whereIn("m_rombel_id", rombelIds);
    if (tanggal_awal) {
      totalSiswa
        .whereNull("tanggal_keluar")
        .orWhere("tanggal_keluar", ">=", tanggal_awal);
    } else {
      totalSiswa.andWhere({ dihapus: 0 });
    }

    totalSiswa = await totalSiswa.count("* as total");

    return response.ok({
      kategori,
      rumus,
      akun,
      keuangan,
      rencana,
      dataAkunPendapatan,
      totalSiswa: totalSiswa[0].total,
      taaktif,
    });
  }

  async postKategoriLabaRugi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama, warna, kategori } = request.post();

    const rules = {
      nama: "required",
      kategori: "required",
    };
    const message = {
      "kategori.required": "Kategori harus dipilih",
      "nama.required": "Nama harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kategoris = await MKeuKategoriLabaRugi.create({
      nama,
      warna,
      kategori,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      urutan: 101,
    });

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Kategori : `,
      akhir: `${nama}`,
      bawah: `Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKategoriLabaRugi({
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

    let { nama, warna, kategori } = request.post();

    const rules = {
      nama: "required",
      kategori: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "kategori.required": "Kategori harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kategoriLaba = await MKeuKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .first();
    const kategoris = await MKeuKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .update({
        nama,
        warna,
        kategori,
      });

    if (!kategoris) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    if (warna != kategoriLaba.warna) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `Kategori - Warna : ${kategoriLaba.warna} menjadi `,
        akhir: `"${warna}"`,
        bawah: `Laporan Laba/Rugi`,
        m_sekolah_id: sekolah.id,
      });
    }
    if (nama != kategoriLaba.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `Kategori - Nama : ${kategoriLaba.nama} menjadi `,
        akhir: `"${nama}"`,
        bawah: `Laporan Laba/Rugi`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKategoriLabaRugi({
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

    const kategori = await MKeuKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .update({
        dihapus: 1,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const kategoriSebelum = await MKeuKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Kategori : `,
      akhir: `${kategoriSebelum.nama}`,
      bawah: `Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postLabaRugi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { m_keu_kategori_laba_rugi_id, m_keu_akun_id, urutan, pengaturan } =
      request.post();

    const rules = {
      m_keu_akun_id: "required",
    };
    const message = {
      "m_keu_akun_id.required": "Akun harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kategori = await TkKategoriAkunLabaRugi.create({
      m_keu_akun_id,
      m_keu_kategori_laba_rugi_id,
      urutan,
      pengaturan,
    });

    const kategoriLaba = await MKeuKategoriLabaRugi.query()
      .where({ id: m_keu_kategori_laba_rugi_id })
      .first();

    const akun = await MKeuAkun.query().where({ id: m_keu_akun_id }).first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `${kategoriLaba.nama} : `,
      akhir: `${akun.nama}`,
      bawah: `Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putLabaRugi({ response, request, auth, params: { labarugi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { m_keu_akun_id, urutan, pengaturan } = request.post();

    const rules = {
      m_keu_akun_id: "required",
    };
    const message = {
      "m_keu_akun_id.required": "Akun harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    const labaSebelum = await TkKategoriAkunLabaRugi.query()
      .where({ id: labarugi_id })
      .first();

    const labarugi = await TkKategoriAkunLabaRugi.query()
      .where({ id: labarugi_id })
      .update({
        m_keu_akun_id,
        urutan,
        pengaturan,
      });

    if (!labarugi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    if (m_keu_akun_id != labaSebelum.m_keu_akun_id) {
      const kategoriLaba = await MKeuKategoriLabaRugi.query()
        .where({ id: labaSebelum.m_keu_kategori_laba_rugi_id })
        .first();

      const akunSebelum = await MKeuAkun.query()
        .where({ id: labaSebelum.m_keu_akun_id })
        .first();

      const akun = await MKeuAkun.query().where({ id: m_keu_akun_id }).first();

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `${kategoriLaba.nama} : ${akunSebelum.nama} menjadi `,
        akhir: `"${akun.nama}"`,
        bawah: `Laporan Laba/Rugi`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteLabaRugi({ response, request, auth, params: { labarugi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const labarugi = await TkKategoriAkunLabaRugi.query()
      .where({ id: labarugi_id })
      .update({
        dihapus: 1,
      });

    if (!labarugi) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    const laba = await TkKategoriAkunLabaRugi.query()
      .where({ id: labarugi_id })
      .first();

    const kategoriLaba = await MKeuKategoriLabaRugi.query()
      .where({ id: laba.m_keu_kategori_laba_rugi_id })
      .first();

    const akun = await MKeuAkun.query()
      .where({ id: laba.m_keu_akun_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `${kategoriLaba.nama} : `,
      akhir: `${akun.nama}`,
      bawah: `Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async putLabaRugiTemplate({
    response,
    request,
    auth,
    params: { labarugi_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { tipe, urutan } = request.post();

    // const rules = {
    //   m_keu_akun_id: "required",
    // };
    // const message = {
    //   "m_keu_akun_id.required": "Akun harus diisi",
    // };
    // const validation = await validate(request.all(), rules, message);
    // if (validation.fails()) {
    //   return response.unprocessableEntity(validation.messages());
    // }

    let labarugi;
    if (tipe == "rumus") {
      labarugi = await MRumusLabaRugi.query()
        .where({ id: labarugi_id })
        .update({ urutan });
    }
    if (tipe == "kategori") {
      labarugi = await MKeuKategoriLabaRugi.query()
        .where({ id: labarugi_id })
        .update({ urutan });
    }

    if (!labarugi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      // message: messagePutSuccess,
    });
  }

  async postRumusLabaRugi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { rumus, nama } = request.post();

    const rules = {
      rumus: "required",
      nama: "required",
    };
    const message = {
      "rumus.required": "Rumus harus diisi",
      "nama.required": "Nama harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const rumus1 = await MRumusLabaRugi.create({
      nama,
      rumus,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      urutan: 100,
    });

    const rumus12 = JSON.parse(rumus || "[]");
    let kategoriAkun;

    let rumusFix = ``;

    for (let i = 0; i < rumus12.length; i++) {
      const d = rumus12[i];
      if (d.id) {
        kategoriAkun = await MKeuKategoriLabaRugi.query()
          .where({ id: d.id })
          .first();
        if (d?.id == "siswa") {
          rumusFix = "Menggunakan Rumus HPS";
        } else {
          rumusFix = rumusFix + kategoriAkun.nama;
        }
      } else {
        if (d.operator == "minus") {
          rumusFix = `${rumusFix} - `;
        } else if (d.operator == "plus") {
          rumusFix = `${rumusFix} + `;
        }
      }
    }

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Rumus Laba/Rugi : `,
      akhir: `${rumusFix}`,
      bawah: `Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRumusLabaRugi({ response, request, auth, params: { rumus_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { rumus, nama } = request.post();

    const rules = {
      rumus: "required",
    };
    const message = {
      "rumus.required": "Rumus harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const rumus12 = JSON.parse(rumus || "[]");

    // return rumus12;
    const rumusSebelum = await MRumusLabaRugi.query()
      .where({ id: rumus_id })
      .first();

    await MRumusLabaRugi.query().where({ id: rumus_id }).update({ nama });

    if (rumusSebelum.rumus != rumus) {
      const rumus1 = await MRumusLabaRugi.query()
        .where({ id: rumus_id })
        .update({
          rumus,
        });

      if (!rumus1) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      let kategoriAkun;
      let rumusSebelum2 = ``;
      for (let i = 0; i < rumusSebelum.rumus.length; i++) {
        const d = rumusSebelum.rumus[i];
        if (d.id) {
          kategoriAkun = await MKeuKategoriLabaRugi.query()
            .where({ id: d.id })
            .first();
          rumusSebelum2 = rumusSebelum2 + kategoriAkun.nama;
        } else {
          if (d.operator == "minus") {
            rumusSebelum2 = `${rumusSebelum2} - `;
          } else if (d.operator == "plus") {
            rumusSebelum2 = `${rumusSebelum2} + `;
          }
        }
      }
      let rumusFix = ``;

      for (let i = 0; i < rumus12.length; i++) {
        const d = rumus12[i];
        if (d.id) {
          kategoriAkun = await MKeuKategoriLabaRugi.query()
            .where({ id: d.id })
            .first();
          rumusFix = rumusFix + kategoriAkun.nama;
        } else {
          if (d.operator == "minus") {
            rumusFix = `${rumusFix} - `;
          } else if (d.operator == "plus") {
            rumusFix = `${rumusFix} + `;
          }
        }
      }

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `Rumus Laba/Rugi : ${rumusSebelum2} menjadi `,
        akhir: `"${rumusFix}"`,
        bawah: `Laporan Laba/Rugi`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteRumusLabaRugi({ response, request, auth, params: { rumus_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const rumus = await MRumusLabaRugi.query().where({ id: rumus_id }).update({
      dihapus: 1,
    });

    if (!rumus) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const rumusSebelum = await MRumusLabaRugi.query()
      .where({ id: rumus_id })
      .first();

    const rumus12 = JSON.parse(rumusSebelum.rumus || "[]");
    let kategoriAkun;

    let rumusFix = ``;

    for (let i = 0; i < rumus12.length; i++) {
      const d = rumus12[i];
      if (d.id) {
        kategoriAkun = await MKeuKategoriLabaRugi.query()
          .where({ id: d.id })
          .first();
        rumusFix = rumusFix + kategoriAkun.nama;
      } else {
        if (d.operator == "minus") {
          rumusFix = `${rumusFix} - `;
        } else if (d.operator == "plus") {
          rumusFix = `${rumusFix} + `;
        }
      }
    }

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Rumus Laba/Rugi : `,
      akhir: `${rumusFix}`,
      bawah: `Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getGuru({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search } = request.get();

    let guru;

    if (search) {
      guru = await User.query()
        .select(
          "nama",
          "id",
          "whatsapp",
          "avatar",
          "gender",
          "photos",
          "role",
          "bagian"
        )
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .whereIn("role", ["guru", "admin", "kepsek"])
        .andWhere("nama", "like", `%${search}%`)
        .fetch();
    } else {
      guru = await User.query()
        .select(
          "nama",
          "id",
          "whatsapp",
          "avatar",
          "gender",
          "photos",
          "role",
          "bagian"
        )
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .whereIn("role", ["guru", "admin", "kepsek"])
        .fetch();
    }

    return response.ok({
      guru: guru,
    });
  }

  async getSuratKeputusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search } = request.get();

    let surat;

    surat = MSuratKeputusan.query()
      .with("suratUser", (builder) => {
        builder.with("user", (builder) => {
          builder.select("id", "nama");
        });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      surat.andWhere("nama", "like", `%${search}%`);
    }

    surat = await surat.fetch();

    return response.ok({
      surat,
    });
  }

  async postSuratKeputusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama, file, user_id } = request.post();

    user_id = user_id.length ? user_id : [];

    const rules = {
      nama: "required",
      file: "required",
      user_id: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "file.required": "File harus diisi",
      "user_id.required": "Penerima harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const surat = await MSuratKeputusan.create({
      nama,
      file,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    if (user_id.length) {
      await Promise.all(
        user_id.map(async (d) => {
          await TkSuratKeputusanUser.create({
            m_user_id: d,
            dihapus: 0,
            m_surat_keputusan_id: surat.id,
          });
        })
      );
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putSuratKeputusan({ response, request, auth, params: { surat_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama, file, user_id } = request.post();

    user_id = user_id.length ? user_id : [];

    const rules = {
      nama: "required",
      file: "required",
      user_id: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "file.required": "File harus diisi",
      "user_id.required": "Penerima harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const surat = await MSuratKeputusan.query().where({ id: surat_id }).update({
      nama,
      file,
    });
    const surat1 = await MSuratKeputusan.query()
      .with("suratUser")
      .where({ id: surat_id })
      .first();

    if (user_id.length) {
      await Promise.all(
        user_id.map(async (d) => {
          const suratUser = await TkSuratKeputusanUser.query()
            .where({ m_user_id: d })
            .andWhere({ m_surat_keputusan_id: surat1.id })
            .first();

          if (!suratUser) {
            await TkSuratKeputusanUser.create({
              m_user_id: d,
              dihapus: 0,
              m_surat_keputusan_id: surat.id,
            });
          } else {
            await TkSuratKeputusanUser.query()
              .where({ id: suratUser.id })
              .update({
                dihapus: 0,
              });
          }
        })
      );
      await Promise.all(
        surat1.toJSON().suratUser.map(async (e) => {
          await Promise.all(
            user_id.map(async (d) => {
              const suratUser = await TkSuratKeputusanUser.query()
                .where({ m_user_id: e.m_user_id })
                .andWhere({ m_surat_keputusan_id: surat1.id })
                .first();

              const suratUser1 = await TkSuratKeputusanUser.query()
                .where({ m_user_id: d })
                .andWhere({ m_surat_keputusan_id: surat1.id })
                .first();

              if (suratUser == suratUser1) {
                return;
              } else if (suratUser != null && suratUser1 == null) {
                await TkSuratKeputusanUser.query()
                  .where({ id: suratUser.id })
                  .update({
                    dihapus: 1,
                  });
              }
            })
          );
        })
      );
    }

    if (!surat) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSuratKeputusan({
    response,
    request,
    auth,
    params: { surat_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const surat = await MSuratKeputusan.query()
      .where({ id: surat_id })
      .update({ dihapus: 1 });

    const surat1 = await TkSuratKeputusanUser.query()
      .where({ m_surat_keputusan_id: surat_id })
      .update({ dihapus: 1 });

    if (!surat) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getArusKasLaporan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let {
      tanggal_awal1,
      tanggal_awal2,
      tanggal_akhir1,
      tanggal_akhir2,
      search,
    } = request.get();

    const rencana = await this.getRencanaAktif(sekolah, 0, tanggal_awal2);
    let transaksiIds1,
      transaksiIds2,
      rencanaTransaksiIds1,
      rencanaTransaksiIds2;
    if (tanggal_awal1 && tanggal_awal2 && tanggal_akhir1 && tanggal_akhir2) {
      transaksiIds1 = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal1, tanggal_akhir1])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .ids();
      transaksiIds2 = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal2, tanggal_akhir2])
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ dihapus: 0 })
        .ids();
      rencanaTransaksiIds1 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [
          moment(tanggal_awal1).startOf("month").format("YYYY-MM-DD HH:mm:ss"),
          moment(tanggal_akhir1).endOf("month").format("YYYY-MM-DD HH:mm:ss"),
        ])
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ m_rencana_keuangan_id: rencana.id })
        .where({ dihapus: 0 })
        .ids();
      rencanaTransaksiIds2 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [
          moment(tanggal_awal2).startOf("month").format("YYYY-MM-DD HH:mm:ss"),
          moment(tanggal_akhir2).endOf("month").format("YYYY-MM-DD HH:mm:ss"),
        ])
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ m_rencana_keuangan_id: rencana.id })
        .where({ dihapus: 0 })
        .ids();
    } else {
      return response.notFound({
        message: "harap memasukan tanggal periode 1 dan 2",
      });
    }

    const akun = await MKeuAkun.query()
      .with("jurnal", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .whereIn("m_keu_transaksi_id", transaksiIds1);
      })
      .with("rencanaJurnal", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .whereIn("m_rencana_transaksi_id", rencanaTransaksiIds1);
      })
      .with("rek", (builder) => {
        builder.where({ dihapus: 0 }).whereNull("m_rencana_keuangan_id");
      })
      .with("rekRencana", (builder) => {
        builder
          .where({ dihapus: 0 })
          .where({ m_rencana_keuangan_id: rencana.id });
      })
      .with("jurnal1", (builder) => {
        builder
          .whereIn("m_keu_transaksi_id", transaksiIds1)
          .where({ dihapus: 0 })
          .andWhere({ status: 1 });
      })
      .with("jurnal2", (builder) => {
        builder
          .whereIn("m_keu_transaksi_id", transaksiIds2)
          .where({ dihapus: 0 })
          .andWhere({ status: 1 });
      })
      .with("rencanaJurnal1", (builder) => {
        builder
          .whereIn("m_rencana_transaksi_id", rencanaTransaksiIds1)
          .where({ dihapus: 0 })
          .andWhere({ status: 1 });
      })
      .with("rencanaJurnal2", (builder) => {
        builder
          .whereIn("m_rencana_transaksi_id", rencanaTransaksiIds2)
          .where({ dihapus: 0 })
          .andWhere({ status: 1 });
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .orderBy("kode", "asc")
      .fetch();

    let kategori;

    kategori = MKeuKategoriArusKas.query()
      .with("tipeAkun", (builder) => {
        builder
          .with("akunArusKas", (builder) => {
            builder
              .with("akun", (builder) => {
                builder.with("akun").where({ dihapus: 0 });
              })
              .where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    const rumusKenaikan = await MKeuRumusArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();
    const rumusAwal = await MKeuRumusSaldoKasAwal.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();
    const rumusAkhir = await MKeuRumusSaldoKasAkhir.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    const tipeAkun = await MKeuKategoriTipeAkun.query()
      .with("akun", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let labaRugi;

    labaRugi = MKeuKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.with("rumusAkun");
          })
          .whereIn(
            "m_keu_akun_id",
            akun.toJSON().map((d) => d.id)
          )
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    labaRugi = await labaRugi.fetch();

    const rumuslabaRugi = await MRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .where("nama", "like", `%laba/rugi%`)
      // .limit(1)
      .first();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();
    const pendapatan = await MKeuKategoriLabaRugi.query()
      .select("id")
      .where({ dihapus: 0 })
      .andWhere({ nama: "PENDAPATAN" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    const dataAkunPendapatan = await TkKategoriAkunLabaRugi.query()
      .where({ m_keu_kategori_laba_rugi_id: pendapatan.id })
      .pluck("m_keu_akun_id");

    return response.ok({
      kategori,
      rumus: {
        rumusKenaikan,
        rumusAwal,
        rumusAkhir,
        rumuslabaRugi,
      },
      tipeAkun,
      labaRugi,
      akun,
      keuangan,
      dataAkunPendapatan,
    });
  }

  async getArusKas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let kategori;

    kategori = MKeuKategoriArusKas.query()
      .with("tipeAkun", (builder) => {
        builder
          .with("akunArusKas", (builder) => {
            builder
              .with("akun", (builder) => {
                builder.with("akun", (builder) => {
                  builder.with("jurnal", (builder) => {
                    builder.where({ dihapus: 0 });
                    if (tanggal_awal && tanggal_akhir) {
                      builder.whereBetween("update_at", [
                        `${tanggal_awal}`,
                        `${tanggal_akhir}`,
                      ]);
                    }
                  });
                });
              })
              .where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    if (!kategori.toJSON().length) {
      const defaultKategori = await MKeuKategoriArusKas.create({
        nama: "Operasi",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const labaRugi = await MKeuAktivitasTransaksi.create({
        m_sekolah_id: sekolah.id,
        judul: "Laba & Rugi",
        urutan: 1,
        dihapus: 0,
        laba: 1,
        m_keu_kategori_arus_kas_id: defaultKategori.id,
      });
    }

    const rumusKenaikan = await MKeuRumusArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();
    const rumusAwal = await MKeuRumusSaldoKasAwal.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();
    const rumusAkhir = await MKeuRumusSaldoKasAkhir.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    const tipeAkun = await MKeuKategoriTipeAkun.query()
      .with("akun", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.with("jurnal", (builder) => {
              builder.where({ dihapus: 0 });
              if (tanggal_awal && tanggal_akhir) {
                builder.whereBetween("update_at", [
                  `${tanggal_awal}`,
                  `${tanggal_akhir}`,
                ]);
              }
            });
          })
          .where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();
    let labaRugi;

    labaRugi = MKeuKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder
              // .with("jurnal", (builder) => {
              //   builder.where({ dihapus: 0 });
              //   if (transaksiIds1) {
              //     builder.whereIn("m_keu_transaksi_id", [
              //       ...transaksiIds1,
              //       ...transaksiIds2,
              //     ]);
              //   }
              // })
              .where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      labaRugi.andWhere("nama", "like", `%${search}%`);
    }

    labaRugi = await labaRugi.fetch();
    return response.ok({
      kategori,
      rumus: {
        rumusKenaikan,
        rumusAwal,
        rumusAkhir,
      },
      tipeAkun,
      labaRugi,
    });
  }

  async getArusKasLaporanNeraca({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { tanggal_awal, tanggal_akhir, search } = request.get();
    const rencana = await this.getRencanaAktif(sekolah, 0, tanggal_awal);

    let transaksiIds1,
      transaksiIds2,
      rencanaTransaksiIds1,
      rencanaTransaksiIds2;
    if (tanggal_awal && tanggal_akhir) {
      transaksiIds1 = await MKeuTransaksi.query()
        .where(
          "tanggal",
          "<=",
          moment(tanggal_awal).subtract(1, "days").format("YYYY-MM-DD")
        )
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .ids();
      transaksiIds2 = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ dihapus: 0 })
        .ids();
      rencanaTransaksiIds1 = await MRencanaTransaksi.query()
        .where(
          "tanggal",
          "<=",
          moment(tanggal_awal).subtract(1, "days").format("YYYY-MM-DD")
        )
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ m_rencana_keuangan_id: rencana.id })
        .where({ dihapus: 0 })
        .ids();
      rencanaTransaksiIds2 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ m_rencana_keuangan_id: rencana.id })
        .where({ dihapus: 0 })
        .ids();
    } else {
      transaksiIds1 = await MKeuTransaksi.query()
        .whereBetween("tanggal", [1111 - 11 - 11, 1111 - 11 - 11])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .ids();
      transaksiIds2 = await MKeuTransaksi.query()
        .where("tanggal", "<=", moment(tanggal_awal).format("YYYY-MM-DD"))
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ dihapus: 0 })
        .ids();
      rencanaTransaksiIds1 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [1111 - 11 - 11, 1111 - 11 - 11])
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ m_rencana_keuangan_id: rencana.id })
        .where({ dihapus: 0 })
        .ids();
      rencanaTransaksiIds2 = await MRencanaTransaksi.query()
        .where("tanggal", "<=", moment(tanggal_awal).format("YYYY-MM-DD"))
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ m_rencana_keuangan_id: rencana.id })
        .where({ dihapus: 0 })
        .ids();
    }

    const akun = await MKeuAkun.query()
      .with("jurnal", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .whereIn("m_keu_transaksi_id", transaksiIds1);
      })
      .with("rencanaJurnal", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .whereIn("m_rencana_transaksi_id", rencanaTransaksiIds1);
      })
      .with("rek", (builder) => {
        builder.where({ dihapus: 0 }).whereNull("m_rencana_keuangan_id");
      })
      .with("rekRencana", (builder) => {
        builder
          .where({ dihapus: 0 })
          .where({ m_rencana_keuangan_id: rencana.id });
      })
      .with("jurnal1", (builder) => {
        builder
          .whereIn("m_keu_transaksi_id", transaksiIds1)
          .where({ dihapus: 0 })
          .andWhere({ status: 1 });
      })
      .with("jurnal2", (builder) => {
        builder
          .whereIn("m_keu_transaksi_id", transaksiIds2)
          .where({ dihapus: 0 })
          .andWhere({ status: 1 });
      })
      .with("rencanaJurnal1", (builder) => {
        builder
          .whereIn("m_rencana_transaksi_id", rencanaTransaksiIds1)
          .where({ dihapus: 0 })
          .andWhere({ status: 1 });
      })
      .with("rencanaJurnal2", (builder) => {
        builder
          .whereIn("m_rencana_transaksi_id", rencanaTransaksiIds2)
          .where({ dihapus: 0 })
          .andWhere({ status: 1 });
      })

      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .orderBy("kode", "asc")
      .fetch();

    let kategori;

    kategori = MKeuKategoriArusKas.query()
      .with("tipeAkun", (builder) => {
        builder
          .with("akunArusKas", (builder) => {
            builder
              .with("akun", (builder) => {
                builder.with("akun").where({ dihapus: 0 });
              })
              .where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    const rumusKenaikan = await MKeuRumusArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();
    const rumusAwal = await MKeuRumusSaldoKasAwal.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();
    const rumusAkhir = await MKeuRumusSaldoKasAkhir.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    const tipeAkun = await MKeuKategoriTipeAkun.query()
      .with("akun", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let labaRugi;

    labaRugi = MKeuKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.with("rumusAkun");
          })
          .whereIn(
            "m_keu_akun_id",
            akun.toJSON().map((d) => d.id)
          )
          .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    labaRugi = await labaRugi.fetch();

    const rumuslabaRugi = await MRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .where("nama", "like", `%laba/rugi%`)
      // .limit(1)
      .first();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

    const pendapatan = await MKeuKategoriLabaRugi.query()
      .select("id")
      .where({ dihapus: 0 })
      .andWhere({ nama: "PENDAPATAN" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    const dataAkunPendapatan = await TkKategoriAkunLabaRugi.query()
      .where({ m_keu_kategori_laba_rugi_id: pendapatan.id })
      .pluck("m_keu_akun_id");

    return response.ok({
      kategori,
      rumus: {
        rumusKenaikan,
        rumusAwal,
        rumusAkhir,
        rumuslabaRugi,
      },
      tipeAkun,
      labaRugi,
      akun,
      keuangan,
      dataAkunPendapatan,
      rencana,
    });
  }

  async postKategoriArusKas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama, warna } = request.post();

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

    const kategori = await MKeuKategoriArusKas.create({
      nama,
      warna,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    const rumusNaik = await MKeuRumusArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .first();
    if (rumusNaik) {
      let rumus = JSON.parse(rumusNaik.rumus);
      rumus.push({ operator: "plus" }, { id: kategori.id });
      await MKeuRumusArusKas.query()
        .where({ id: rumusNaik.id })
        .update({
          rumus: JSON.stringify(rumus),
        });
    } else {
      await MKeuRumusArusKas.create({
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        rumus: JSON.stringify([{ id: kategori.id }]),
      });
    }

    const rumusAkhir = await MKeuRumusSaldoKasAkhir.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .first();
    if (rumusAkhir) {
      let rumus = JSON.parse(rumusAkhir.rumus);
      rumus.push({ operator: "plus" }, { id: kategori.id });
      await MKeuRumusSaldoKasAkhir.query()
        .where({ id: rumusAkhir.id })
        .update({
          rumus: JSON.stringify(rumus),
        });
    } else {
      await MKeuRumusSaldoKasAkhir.create({
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        rumus: JSON.stringify([{ id: kategori.id }]),
      });
    }

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Kategori : `,
      akhir: `${nama}`,
      bawah: `Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKategoriArusKas({
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

    let { nama, warna } = request.post();

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

    const kategoriArusKas = await MKeuKategoriArusKas.query()
      .where({ id: kategori_id })
      .first();
    const kategori = await MKeuKategoriArusKas.query()
      .where({ id: kategori_id })
      .update({
        nama,
        warna,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    if (warna != kategoriArusKas.warna) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `Kategori - Warna : ${kategoriArusKas.warna} menjadi `,
        akhir: `"${warna}"`,
        bawah: `Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
      });
    }
    if (nama != kategoriArusKas.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `Kategori - Nama : ${kategoriArusKas.nama} menjadi `,
        akhir: `"${nama}"`,
        bawah: `Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKategoriArusKas({
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

    const sebelumHapus = await MKeuKategoriArusKas.query()
      .where({ id: kategori_id })
      .first();

    const kategori = await MKeuKategoriArusKas.query()
      .where({ id: kategori_id })
      .update({
        dihapus: 1,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const kategoriArus = await MKeuKategoriArusKas.query()
      .where({ id: kategori_id })
      .first();

    const rumusNaik = await MKeuRumusArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .first();

    const rumusAkhir = await MKeuRumusSaldoKasAkhir.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .first();

    if (rumusAkhir) {
      let rumusAkhirParsed = JSON.parse(rumusAkhir.rumus);
      if (rumusAkhirParsed.length == 1) {
        await MKeuRumusSaldoKasAkhir.query()
          .where({ id: rumusAkhir.id })
          .delete();
      } else {
        let temp = rumusAkhirParsed;
        rumusAkhirParsed.map((d, idx) => {
          if (d?.id == kategori_id) {
            if (idx == 0) {
              temp.splice(0, 2);
            } else {
              temp.splice(idx - 1, 2);
            }
          }
        });
        await MKeuRumusSaldoKasAkhir.query()
          .where({ id: rumusAkhir.id })
          .update({
            rumus: JSON.stringify(temp),
          });
      }
    }
    if (rumusNaik) {
      let rumusNaikParsed = JSON.parse(rumusNaik.rumus);
      if (rumusNaikParsed.length == 1) {
        await MKeuRumusArusKas.query().where({ id: rumusNaik.id }).delete();
      } else {
        let temp = rumusNaikParsed;
        rumusNaikParsed.map((d, idx) => {
          if (d?.id == kategori_id) {
            if (idx == 0) {
              temp.splice(0, 2);
            } else {
              temp.splice(idx - 1, 2);
            }
          }
        });
        await MKeuRumusArusKas.query()
          .where({ id: rumusNaik.id })
          .update({
            rumus: JSON.stringify(temp),
          });
      }
    }

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Kategori : `,
      akhir: `${sebelumHapus.nama}`,
      bawah: `Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postArusKas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      judul,
      m_keu_kategori_arus_kas_id,
      m_keu_kategori_tipe_akun_id,
      urutan,
    } = request.post();

    const rules = {
      m_keu_kategori_tipe_akun_id: "required",
      m_keu_kategori_arus_kas_id: "required",
      judul: "required",
    };
    const message = {
      "m_keu_kategori_tipe_akun_id.required": "Tipe Akun harus diisi",
      "m_keu_kategori_arus_kas_id.required": "Kategori Arus Kas harus diisi",
      "judul.required": "Judul harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kategori = await MKeuAktivitasTransaksi.create({
      m_sekolah_id: sekolah.id,
      judul,
      m_keu_kategori_tipe_akun_id,
      m_keu_kategori_arus_kas_id,
      urutan,
      dihapus: 0,
    });

    const kategoriArus = await MKeuKategoriArusKas.query()
      .where({ id: m_keu_kategori_arus_kas_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `${kategoriArus.nama} : `,
      akhir: `${judul}`,
      bawah: `Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putArusKas({ response, request, auth, params: { aktivitas_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      judul,
      m_keu_kategori_arus_kas_id,
      m_keu_kategori_tipe_akun_id,
      urutan,
    } = request.post();

    const rules = {
      m_keu_kategori_tipe_akun_id: "required",
      m_keu_kategori_arus_kas_id: "required",
      judul: "required",
    };
    const message = {
      "m_keu_kategori_tipe_akun_id.required": "Tipe Akun harus diisi",
      "m_keu_kategori_arus_kas_id.required": "Kategori Arus Kas harus diisi",
      "judul.required": "Judul harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    const aktivitasSebelum = await MKeuAktivitasTransaksi.query()
      .where({ id: aktivitas_id })
      .first();
    const aktivitas = await MKeuAktivitasTransaksi.query()
      .where({ id: aktivitas_id })
      .update({
        judul,
        m_keu_kategori_tipe_akun_id,
        m_keu_kategori_arus_kas_id,
        urutan,
        dihapus: 0,
      });

    if (!aktivitas) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    const aktivitasUpdate = await MKeuAktivitasTransaksi.query()
      .where({ id: aktivitas_id })
      .first();

    const kategori = await MKeuKategoriArusKas.query()
      .where({ id: m_keu_kategori_arus_kas_id })
      .first();

    const kategoriTipeSebelum = await MKeuKategoriTipeAkun.query()
      .where({ id: aktivitasSebelum.m_keu_kategori_tipe_akun_id })
      .first();

    const kategoriTipeUpdate = await MKeuKategoriTipeAkun.query()
      .where({ id: m_keu_kategori_tipe_akun_id })
      .first();

    if (
      m_keu_kategori_tipe_akun_id !=
      aktivitasSebelum.m_keu_kategori_tipe_akun_id
    ) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `${kategori.nama} - ${aktivitasSebelum.judul} - Tipe Akun : ${kategoriTipeSebelum.nama} menjadi `,
        akhir: `"${kategoriTipeUpdate.nama}"`,
        bawah: `Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
      });
    }

    if (judul != aktivitasSebelum.judul) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `${kategori.nama} - Judul : ${aktivitasSebelum.judul} menjadi `,
        akhir: `"${aktivitasUpdate.judul}"`,
        bawah: `Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteArusKas({ response, request, auth, params: { aktivitas_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const akttivitas = await MKeuAktivitasTransaksi.query()
      .where({ id: aktivitas_id })
      .update({
        dihapus: 1,
      });

    if (!akttivitas) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const aktivitas = await MKeuAktivitasTransaksi.query()
      .where({ id: aktivitas_id })
      .first();

    const kategoriArus = await MKeuKategoriArusKas.query()
      .where({ id: aktivitas.m_keu_kategori_arus_kas_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `${kategoriArus.nama} : `,
      akhir: `${aktivitas.judul}`,
      bawah: `Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postKategoriTipeAkun({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama, m_keu_akun_id, pengaturan } = request.post();

    m_keu_akun_id = m_keu_akun_id.length ? m_keu_akun_id : [];

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

    const kategori = await MKeuKategoriTipeAkun.create({
      nama,
      pengaturan,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    if (m_keu_akun_id) {
      await Promise.all(
        m_keu_akun_id.map(async (d) => {
          await TkKategoriTipeAkun.create({
            m_keu_akun_id: d.m_keu_akun_id,
            m_keu_kategori_tipe_akun_id: kategori.id,
          });
        })
      );
    }

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Tipe Akun : `,
      akhir: `${nama}`,
      bawah: `Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKategoriTipeAkun({
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

    let { nama, m_keu_akun_id, pengaturan } = request.post();

    m_keu_akun_id = m_keu_akun_id.length ? m_keu_akun_id : [];

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

    const kategoriSebelum = await MKeuKategoriTipeAkun.query()
      .where({ id: kategori_id })
      .first();

    const kategori = await MKeuKategoriTipeAkun.query()
      .where({ id: kategori_id })
      .update({
        nama,
        pengaturan,
      });

    const kategori1 = await MKeuKategoriTipeAkun.query()
      .with("akun")
      .where({ id: kategori_id })
      .first();

    if (m_keu_akun_id.length) {
      await Promise.all(
        m_keu_akun_id.map(async (d) => {
          if (d.id) {
            const TkSebelum = await TkKategoriTipeAkun.query()
              .where({ id: d.id })
              .first();
            await TkKategoriTipeAkun.query().where({ id: d.id }).update({
              m_keu_akun_id: d.m_keu_akun_id,
            });

            const akunSebelum = await MKeuAkun.query()
              .where({ id: TkSebelum.m_keu_akun_id })
              .first();
            const akunTk = await MKeuAkun.query()
              .where({ id: d.m_keu_akun_id })
              .first();

            await MHistoriAktivitas.create({
              jenis: "Ubah Template Laporan",
              tipe: "Realisasi",
              m_user_id: user.id,
              awal: `Tipe Akun - ${nama} : ${akunSebelum.nama} menjadi `,
              akhir: `"${akunTk.nama}"`,
              bawah: `Laporan Arus Kas`,
              m_sekolah_id: sekolah.id,
            });
            return;
          } else {
            await TkKategoriTipeAkun.create({
              m_keu_akun_id: d.m_keu_akun_id,
              m_keu_kategori_tipe_akun_id: kategori_id,
            });

            const akunTk = await MKeuAkun.query()
              .where({ id: d.m_keu_akun_id })
              .first();

            await MHistoriAktivitas.create({
              jenis: "Ubah Template Laporan",
              tipe: "Realisasi",
              m_user_id: user.id,
              awal: `Tipe Akun - ${nama} : ditambahkan akun `,
              akhir: `${akunTk.nama}`,
              bawah: `Laporan Arus Kas`,
              m_sekolah_id: sekolah.id,
            });
          }
        })
      );

      await Promise.all(
        kategori1.toJSON().akun.map(async (e) => {
          if (!m_keu_akun_id.filter((d) => d.id).find((d) => d.id == e.id)) {
            await TkKategoriTipeAkun.query()
              .where({ id: e.id })
              .update({ dihapus: 1 });

            const kategoriTk = await TkKategoriTipeAkun.query()
              .where({ id: e.id })
              .first();

            const akunTk = await MKeuAkun.query()
              .where({ id: kategoriTk.m_keu_akun_id })
              .first();

            await MHistoriAktivitas.create({
              jenis: "Ubah Template Laporan",
              tipe: "Realisasi",
              m_user_id: user.id,
              awal: `Tipe Akun - ${nama} : dihapus akun `,
              akhir: `${akunTk.nama}`,
              bawah: `Laporan Arus Kas`,
              m_sekolah_id: sekolah.id,
            });
          }
        })
      );
    }

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    if (nama != kategoriSebelum.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `Tipe Akun - Nama : ${kategoriSebelum.nama} menjadi `,
        akhir: `"${nama}"`,
        bawah: `Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
      });
    }
    if (pengaturan != kategoriSebelum.pengaturan) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `Tipe Akun - Pengaturan : ${kategoriSebelum.pengaturan} menjadi `,
        akhir: `"${pengaturan}"`,
        bawah: `Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKategoriTipeAkun({
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

    const kategori = await MKeuKategoriTipeAkun.query()
      .where({ id: kategori_id })
      .update({
        dihapus: 1,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const kategoriTipe = await MKeuKategoriTipeAkun.query()
      .where({ id: kategori_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Tipe Akun : `,
      akhir: `${kategoriTipe.nama}`,
      bawah: `Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postRumusArusKas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { rumus } = request.post();

    const rules = {
      rumus: "required",
    };
    const message = {
      "rumus.required": "Rumus harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const rumus1 = await MKeuRumusArusKas.create({
      rumus,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    const rumus12 = JSON.parse(rumus || "[]");
    let kategoriAkun;

    let rumusFix = ``;

    for (let i = 0; i < rumus12.length; i++) {
      const d = rumus12[i];
      if (d.id) {
        kategoriAkun = await MKeuKategoriArusKas.query()
          .where({ id: d.id })
          .first();
        rumusFix = rumusFix + kategoriAkun.nama;
      } else {
        if (d.operator == "minus") {
          rumusFix = `${rumusFix} - `;
        } else if (d.operator == "plus") {
          rumusFix = `${rumusFix} + `;
        }
      }
    }

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Rumus Arus Kas - Kenaikan(Penurunan) Kas : `,
      akhir: `${rumusFix}`,
      bawah: `Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRumusArusKas({ response, request, auth, params: { rumus_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { rumus } = request.post();

    const rules = {
      rumus: "required",
    };
    const message = {
      "rumus.required": "Rumus harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    const rumus12 = JSON.parse(rumus || "[]");

    // return rumus12;
    const rumusSebelum = await MKeuRumusArusKas.query()
      .where({ id: rumus_id })
      .first();

    if (rumusSebelum.rumus != rumus) {
      const rumus1 = await MKeuRumusArusKas.query()
        .where({ id: rumus_id })
        .update({
          rumus,
        });

      if (!rumus1) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      let kategoriAkun;
      let rumusSebelum2 = ``;
      for (let i = 0; i < rumusSebelum.rumus.length; i++) {
        const d = rumusSebelum.rumus[i];
        if (d.id) {
          kategoriAkun = await MKeuKategoriArusKas.query()
            .where({ id: d.id })
            .first();
          rumusSebelum2 = rumusSebelum2 + kategoriAkun.nama;
        } else {
          if (d.operator == "minus") {
            rumusSebelum2 = `${rumusSebelum2} - `;
          } else if (d.operator == "plus") {
            rumusSebelum2 = `${rumusSebelum2} + `;
          }
        }
      }
      let rumusFix = ``;

      for (let i = 0; i < rumus12.length; i++) {
        const d = rumus12[i];
        if (d.id) {
          kategoriAkun = await MKeuKategoriArusKas.query()
            .where({ id: d.id })
            .first();
          rumusFix = rumusFix + kategoriAkun.nama;
        } else {
          if (d.operator == "minus") {
            rumusFix = `${rumusFix} - `;
          } else if (d.operator == "plus") {
            rumusFix = `${rumusFix} + `;
          }
        }
      }

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `Rumus Arus Kas - Kenaikan(Penurunan) Kas : ${rumusSebelum2} menjadi `,
        akhir: `"${rumusFix}"`,
        bawah: `Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async postRumusSaldoKasAwal({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { rumus } = request.post();

    const rules = {
      rumus: "required",
    };
    const message = {
      "rumus.required": "Rumus harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const rumus1 = await MKeuRumusSaldoKasAwal.create({
      rumus,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    const rumus12 = JSON.parse(rumus || "[]");
    let kategoriAkun;

    let rumusFix = ``;

    for (let i = 0; i < rumus12.length; i++) {
      const d = rumus12[i];
      if (d.id) {
        kategoriAkun = await MKeuKategoriLabaRugi.query()
          .where({ id: d.id })
          .first();
        rumusFix = rumusFix + kategoriAkun.nama;
      } else {
        if (d.operator == "minus") {
          rumusFix = `${rumusFix} - `;
        } else if (d.operator == "plus") {
          rumusFix = `${rumusFix} + `;
        }
      }
    }

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Rumus Arus Kas - Saldo Kas Awal : `,
      akhir: `${rumusFix}`,
      bawah: `Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRumusSaldoKasAwal({
    response,
    request,
    auth,
    params: { rumus_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { rumus } = request.post();

    const rules = {
      rumus: "required",
    };
    const message = {
      "rumus.required": "Rumus harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const rumus12 = JSON.parse(rumus || "[]");

    // return rumus12;
    const rumusSebelum = await MKeuRumusSaldoKasAwal.query()
      .where({ id: rumus_id })
      .first();

    if (rumusSebelum.rumus != rumus) {
      const rumus1 = await MKeuRumusSaldoKasAwal.query()
        .where({ id: rumus_id })
        .update({
          rumus,
        });

      if (!rumus1) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      let kategoriAkun;
      let rumusSebelum2 = ``;
      for (let i = 0; i < rumusSebelum.rumus.length; i++) {
        const d = rumusSebelum.rumus[i];
        if (d.id) {
          kategoriAkun = await MKeuKategoriLabaRugi.query()
            .where({ id: d.id })
            .first();
          rumusSebelum2 = rumusSebelum2 + kategoriAkun.nama;
        } else {
          if (d.operator == "minus") {
            rumusSebelum2 = `${rumusSebelum2} - `;
          } else if (d.operator == "plus") {
            rumusSebelum2 = `${rumusSebelum2} + `;
          }
        }
      }
      let rumusFix = ``;

      for (let i = 0; i < rumus12.length; i++) {
        const d = rumus12[i];
        if (d.id) {
          kategoriAkun = await MKeuKategoriLabaRugi.query()
            .where({ id: d.id })
            .first();
          // return kategoriAkun;
          rumusFix = rumusFix + kategoriAkun.nama;
        } else {
          if (d.operator == "minus") {
            rumusFix = `${rumusFix} - `;
          } else if (d.operator == "plus") {
            rumusFix = `${rumusFix} + `;
          }
        }
      }

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `Rumus Arus Kas - Saldo Kas Awal : ${rumusSebelum2} menjadi `,
        akhir: `"${rumusFix}"`,
        bawah: `Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }
  async postRumusSaldoKasAkhir({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { rumus } = request.post();

    const rules = {
      rumus: "required",
    };
    const message = {
      "rumus.required": "Rumus harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const rumus1 = await MKeuRumusSaldoKasAkhir.create({
      rumus,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    const rumus12 = JSON.parse(rumus || "[]");
    let kategoriAkun;

    let rumusFix = ``;

    for (let i = 0; i < rumus12.length; i++) {
      const d = rumus12[i];
      if (d.id) {
        kategoriAkun = await MKeuKategoriArusKas.query()
          .where({ id: d.id })
          .first();
        rumusFix = rumusFix + kategoriAkun.nama;
      } else {
        if (d.operator == "minus") {
          rumusFix = `${rumusFix} - `;
        } else if (d.operator == "plus") {
          rumusFix = `${rumusFix} + `;
        }
      }
    }

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Realisasi",
      m_user_id: user.id,
      awal: `Rumus Arus Kas - Saldo Kas Akhir : `,
      akhir: `${rumusFix}`,
      bawah: `Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRumusSaldoKasAkhir({
    response,
    request,
    auth,
    params: { rumus_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { rumus } = request.post();

    const rules = {
      rumus: "required",
    };
    const message = {
      "rumus.required": "Rumus harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const rumus12 = JSON.parse(rumus || "[]");

    // return rumus12;
    const rumusSebelum = await MKeuRumusSaldoKasAkhir.query()
      .where({ id: rumus_id })
      .first();

    if (rumusSebelum.rumus != rumus) {
      const rumus1 = await MKeuRumusSaldoKasAkhir.query()
        .where({ id: rumus_id })
        .update({
          rumus,
        });

      if (!rumus1) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      let kategoriAkun;
      let rumusSebelum2 = ``;
      for (let i = 0; i < rumusSebelum.rumus.length; i++) {
        const d = rumusSebelum.rumus[i];
        if (d.id) {
          kategoriAkun = await MKeuKategoriArusKas.query()
            .where({ id: d.id })
            .first();
          rumusSebelum2 = rumusSebelum2 + kategoriAkun.nama;
        } else {
          if (d.operator == "minus") {
            rumusSebelum2 = `${rumusSebelum2} - `;
          } else if (d.operator == "plus") {
            rumusSebelum2 = `${rumusSebelum2} + `;
          }
        }
      }
      let rumusFix = ``;

      for (let i = 0; i < rumus12.length; i++) {
        const d = rumus12[i];
        if (d.id) {
          kategoriAkun = await MKeuKategoriArusKas.query()
            .where({ id: d.id })
            .first();
          rumusFix = rumusFix + kategoriAkun.nama;
        } else {
          if (d.operator == "minus") {
            rumusFix = `${rumusFix} - `;
          } else if (d.operator == "plus") {
            rumusFix = `${rumusFix} + `;
          }
        }
      }

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Realisasi",
        m_user_id: user.id,
        awal: `Rumus Arus Kas - Saldo Kas Akhir : ${rumusSebelum2} menjadi `,
        akhir: `"${rumusFix}"`,
        bawah: `Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async downloadHasilUjian({
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

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const jadwalUjian = await MJadwalUjian.query()
      .with("rombelUjian", (builder) => {
        builder
          .with("peserta", (builder) => {
            builder.with("user"),
              (builder) => {
                builder.select("id", "nama");
              };
          })
          .with("rombel")
          .with("jadwalUjian", (builder) => {
            builder.with("ujian");
          });
      })
      .with("ujian", (builder) => {
        builder.with("soal").withCount("soal as total");
      })
      .where({ id: jadwal_ujian_id })
      .first();

    // return jadwalUjian.toJSON().ujian.__meta__.total;

    let workbook = new Excel.Workbook();
    await Promise.all(
      jadwalUjian.toJSON().rombelUjian.map(async (s) => {
        let worksheet = workbook.addWorksheet(`${s.rombel.nama}`);
        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = s.rombel.nama;
        worksheet.getCell("A3").value = jadwalUjian.toJSON().ujian.nama;
        worksheet.getCell("A4").value = ta.tahun;

        worksheet.getCell(
          "A6"
        ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
        worksheet.mergeCells(`A1:Z1`);
        worksheet.mergeCells(`A2:Z2`);
        worksheet.mergeCells(`A3:Z3`);
        worksheet.mergeCells(`A4:Z4`);
        worksheet.mergeCells(`A6:Z6`);
        worksheet.getColumn("A").width = 28;
        worksheet.getColumn("B").width = 14;
        worksheet.getColumn("C").width = 8;
        worksheet.getColumn("D").width = 8.5;
        worksheet.getColumn("E").width = 9;
        worksheet.getColumn("F").width = 14;
        worksheet.getColumn("G").width = 10;
        worksheet.getColumn("H").width = 8;
        worksheet.getColumn("I").width = 11;
        worksheet.addConditionalFormatting({
          ref: "A1:I4",
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 16,
                  bold: true,
                },
                // fill: {
                //   type: "pattern",
                //   pattern: "solid",
                //   bgColor: { argb: "0000FF", fgColor: { argb: "0000FF" } },
                // },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });

        // add column headers
        await Promise.all(
          s.peserta
            .sort((a, b) => ("" + a.user.nama).localeCompare(b.user.nama))
            .map(async (d, idx) => {
              worksheet.getRow(7).values = ["No", "Nama"];
              worksheet.columns = [{ key: "no" }, { key: "user" }];
              let row = worksheet.addRow({
                no: `${idx + 1}`,
                user: d.user ? d.user.nama : "-",
              });
              let hasil = 0;
              // const row = worksheet.getRow(8);
              await Promise.all(
                jadwalUjian.toJSON().ujian.soal.map(async (e, nox) => {
                  worksheet.getColumn([`${(nox + 1) * 1 + 2}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `${nox + 1}`,
                    ,
                  ];
                  const jawabanSiswa = await TkJawabanUjianSiswa.query()
                    .where({ m_soal_ujian_id: e.id })
                    .andWhere({ tk_peserta_ujian_id: d.id })
                    .first();
                  if (e.bentuk == "pg") {
                    if (
                      jawabanSiswa ? jawabanSiswa.jawaban_pg : "0" == e.kj_pg
                    ) {
                      row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                        e ? e.nilai_soal : "-"
                      }`;
                      hasil = hasil + e.nilai_soal;
                    } else {
                      row.getCell([`${(nox + 1) * 1 + 2}`]).value = `0`;
                    }
                  } else if (e.bentuk == "esai") {
                    if (JSON.parse(jawabanSiswa.jawaban_rubrik_esai)) {
                      if (JSON.parse(jawabanSiswa.jawaban_rubrik_esai).length) {
                        JSON.parse(jawabanSiswa.jawaban_rubrik_esai).map(
                          (ed) => {
                            if (ed.benar) {
                              row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                                ed ? ed.poin : "0"
                              }`;
                              hasil = hasil + ed.poin;
                            }
                          }
                        );
                      }
                    }
                  }

                  row.getCell([`${(nox + 1) * 1 + 2}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  worksheet.getColumn([`${(nox + 1) * 1 + 2}`]).fill = {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: {
                      argb: "C0C0C0",
                      fgColor: { argb: "C0C0C0" },
                    },
                  };
                  // worksheet.getCell(`E${(nox + 1) * 1 + 8}`).value = e.nilai;
                  // worksheet.columns = [
                  //   { key: `tugas${nox+1}` },
                  // ];

                  worksheet.addConditionalFormatting({
                    ref: `${(nox + 1) * 1 + 7}`,
                    rules: [
                      {
                        type: "expression",
                        formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                        style: {
                          border: {
                            top: { style: "thin" },
                            left: { style: "thin" },
                            bottom: { style: "thin" },
                            right: { style: "thin" },
                          },
                          font: {
                            name: "Times New Roman",
                            family: 4,
                            size: 11,
                            // bold: true,
                          },
                          alignment: {
                            vertical: "middle",
                            horizontal: "left",
                          },
                        },
                      },
                    ],
                  });

                  // // Add row using key mapping to columns
                  // let row = worksheet.addRow ({
                  //   tugas1: e ? e.nilai : "-",
                  //   tugas2: e ? e.nilai : "-",
                  //   tugas3: e ? e.nilai : "-",
                  //   tugas4: e ? e.nilai : "-",
                  //   tugas5: e ? e.nilai : "-",
                  // });
                })
              );
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}7`
              ).value = "Total";
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}${
                  (idx + 1) * 1 + 7
                }`
              ).value = hasil;
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}${
                  (idx + 1) * 1 + 7
                }`
              ).border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              };

              worksheet.addConditionalFormatting({
                ref: `A7:${colName(
                  jadwalUjian.toJSON().ujian.__meta__.total + 2
                )}7`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                      font: {
                        name: "Times New Roman",
                        family: 4,
                        size: 14,
                        bold: true,
                      },
                      fill: {
                        type: "pattern",
                        pattern: "solid",
                        bgColor: {
                          argb: "C0C0C0",
                          fgColor: { argb: "C0C0C0" },
                        },
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "center",
                      },
                    },
                  },
                ],
              });

              worksheet.addConditionalFormatting({
                ref: `A${(idx + 1) * 1 + 7}:D${(idx + 1) * 1 + 7}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                      font: {
                        name: "Times New Roman",
                        family: 4,
                        size: 11,
                        // bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "left",
                      },
                    },
                  },
                ],
              });
            })
        );
        worksheet.autoFilter = {
          from: "A7",
          to: `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}7`,
        };

        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = s.rombel.nama;
        worksheet.getCell("A3").value = jadwalUjian.toJSON().ujian.nama;
        worksheet.getCell("A4").value = ta.tahun;
        worksheet.getColumn("B").width = 35;

        worksheet.getCell(
          "A6"
        ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
      })
    );
    let namaFile = `/uploads/rekap-ujian-siswa-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
  async downloadHasilUjian2({
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

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const { tk_jadwal_ujian_id, m_jadwal_ujian_id } = request.post();

    const jadwalUjian = await MJadwalUjian.query()
      .with("rombelUjian", (builder) => {
        builder
          .with("peserta", (builder) => {
            builder.with("user"),
              (builder) => {
                builder.select("id", "nama");
              };
          })
          .where({ id: tk_jadwal_ujian_id })
          .with("rombel")
          .with("jadwalUjian", (builder) => {
            builder.with("ujian");
          });
      })
      .with("ujian", (builder) => {
        builder.with("soal").withCount("soal as total");
      })
      .where({ id: jadwal_ujian_id })
      .first();

    // return jadwalUjian.toJSON().ujian;

    let rombel;
    let workbook = new Excel.Workbook();
    await Promise.all(
      jadwalUjian.toJSON().rombelUjian.map(async (s) => {
        let worksheet = workbook.addWorksheet(`${s.rombel.nama}`);
        rombel = s.rombel.nama;
        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = s.rombel.nama;
        worksheet.getCell("A3").value = jadwalUjian.toJSON().ujian.nama;
        worksheet.getCell("A4").value = ta.tahun;

        worksheet.getCell(
          "A6"
        ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
        worksheet.mergeCells(`A1:Z1`);
        worksheet.mergeCells(`A2:Z2`);
        worksheet.mergeCells(`A3:Z3`);
        worksheet.mergeCells(`A4:Z4`);
        worksheet.mergeCells(`A6:Z6`);
        worksheet.getColumn("A").width = 28;
        worksheet.getColumn("B").width = 14;
        worksheet.getColumn("C").width = 8;
        worksheet.getColumn("D").width = 8.5;
        worksheet.getColumn("E").width = 9;
        worksheet.getColumn("F").width = 14;
        worksheet.getColumn("G").width = 10;
        worksheet.getColumn("H").width = 8;
        worksheet.getColumn("I").width = 11;
        worksheet.addConditionalFormatting({
          ref: "A1:I4",
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 16,
                  bold: true,
                },
                // fill: {
                //   type: "pattern",
                //   pattern: "solid",
                //   bgColor: { argb: "0000FF", fgColor: { argb: "0000FF" } },
                // },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });

        // add column headers
        await Promise.all(
          s.peserta
            .sort((a, b) => ("" + a.user.nama).localeCompare(b.user.nama))
            .map(async (d, idx) => {
              worksheet.getRow(7).values = ["No", "Nama"];
              worksheet.columns = [{ key: "no" }, { key: "user" }];
              let row = worksheet.addRow({
                no: `${idx + 1}`,
                user: d.user ? d.user.nama : "-",
              });
              let hasil = 0;
              // const row = worksheet.getRow(8);
              await Promise.all(
                jadwalUjian.toJSON().ujian.soal.map(async (e, nox) => {
                  // const image = await nodeHtmlToImage({
                  //   html: formattedHTML(e.pertanyaan),
                  //   type: "jpeg",
                  //   quality: 25,
                  //   encoding: "base64",
                  //   selector: "div",
                  //   puppeteerArgs: {
                  //     args: ["--no-sandbox", "--disable-setuid-sandbox"],
                  //   },
                  // });
                  // const dimensions = sizeOf(Buffer.from(image, "base64"));
                  // const imageId = workbook.addImage({
                  //   base64: image,
                  //   extension: "jpeg",
                  // });
                  // worksheet.getRow(`7`).height =
                  //   (dimensions.height * 3) / 4 + 4;
                  // worksheet.addImage(imageId, {
                  //   tl: { col: [`${(nox + 1) * 1 + 2.1}`], row: 7.1 },
                  //   ext: {
                  //     width: `${dimensions.width}`,
                  //     height: `${dimensions.height}`,
                  //   },
                  // });
                  worksheet.getColumn([`${(nox + 1) * 1 + 2}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    // `${e?.pertanyaan}`
                    `${nox + 1}`,
                    ,
                  ];
                  const jawabanSiswa = await TkJawabanUjianSiswa.query()
                    .select(
                      "id",
                      "jawaban_pg",
                      "jawaban_esai",
                      "jawaban_rubrik_esai"
                    )
                    .where({ m_soal_ujian_id: e.id })
                    .andWhere({ tk_peserta_ujian_id: d.id })
                    .first();
                  if (e.bentuk == "pg") {
                    if (jawabanSiswa && jawabanSiswa.jawaban_pg) {
                      row.getCell([`${(nox + 1) * 1 + 2}`]).value =
                        jawabanSiswa.jawaban_pg;
                      if (jawabanSiswa.jawaban_pg == e.kj_pg) {
                        hasil = hasil + e.nilai_soal;
                      }
                    } else {
                      row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                        jawabanSiswa?.jawaban_pg ? jawabanSiswa?.jawaban_pg : ""
                      } (salah)`;
                    }
                  } else if (e.bentuk == "esai") {
                    if (
                      jawabanSiswa?.jawaban_rubrik_esai
                        ? JSON.parse(jawabanSiswa.jawaban_rubrik_esai)
                        : 0
                    ) {
                      if (
                        JSON.parse(jawabanSiswa?.jawaban_rubrik_esai).length
                      ) {
                        JSON.parse(jawabanSiswa?.jawaban_rubrik_esai).map(
                          (ed) => {
                            row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                              jawabanSiswa?.jawaban_esai
                                ? jawabanSiswa.jawaban_esai.replace(
                                    /<\/?[^>]+(>|$)/ig,
                                    ""
                                  )
                                : "(Tidak Menjawab Soal)"
                            }`;
                            if (ed.benar) {
                              row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                                ed ? ed.poin : "0"
                              }`;
                              hasil = hasil + ed.poin;
                            }
                          }
                        );
                      } else {
                        row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                          jawabanSiswa?.jawaban_esai
                            ? jawabanSiswa.jawaban_esai.replace(/<\/?[^>]+(>|$)/ig, "")
                            : "(Tidak Menjawab Soal)"
                        }`;
                      }
                    } else {
                      row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                        jawabanSiswa?.jawaban_esai
                          ? jawabanSiswa.jawaban_esai.replace(/<\/?[^>]+(>|$)/ig, "")
                          : "(Tidak Menjawab Soal)"
                      }`;
                    }
                  }

                  row.getCell([`${(nox + 1) * 1 + 2}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  worksheet.getColumn([`${(nox + 1) * 1 + 2}`]).fill = {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: {
                      argb: "C0C0C0",
                      fgColor: { argb: "C0C0C0" },
                    },
                  };
                  // worksheet.getCell(`E${(nox + 1) * 1 + 8}`).value = e.nilai;
                  // worksheet.columns = [
                  //   { key: `tugas${nox+1}` },
                  // ];

                  worksheet.addConditionalFormatting({
                    ref: `${(nox + 1) * 1 + 7}`,
                    rules: [
                      {
                        type: "expression",
                        formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                        style: {
                          border: {
                            top: { style: "thin" },
                            left: { style: "thin" },
                            bottom: { style: "thin" },
                            right: { style: "thin" },
                          },
                          // fill: {type: 'pattern', pattern: 'solid', bgColor: {argb: warna}},
                          font: {
                            name: "Times New Roman",
                            family: 4,
                            size: 11,
                            // bold: true,
                          },
                          alignment: {
                            vertical: "middle",
                            horizontal: "left",
                          },
                        },
                      },
                    ],
                  });

                  // // Add row using key mapping to columns
                  // let row = worksheet.addRow ({
                  //   tugas1: e ? e.nilai : "-",
                  //   tugas2: e ? e.nilai : "-",
                  //   tugas3: e ? e.nilai : "-",
                  //   tugas4: e ? e.nilai : "-",
                  //   tugas5: e ? e.nilai : "-",
                  // });
                })
              );
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}7`
              ).value = "Total";
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}${
                  (idx + 1) * 1 + 7
                }`
              ).value = hasil;
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}${
                  (idx + 1) * 1 + 7
                }`
              ).border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              };

              worksheet.addConditionalFormatting({
                ref: `A7:${colName(
                  jadwalUjian.toJSON().ujian.__meta__.total + 2
                )}7`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                      font: {
                        name: "Times New Roman",
                        family: 4,
                        size: 14,
                        bold: true,
                      },
                      fill: {
                        type: "pattern",
                        pattern: "solid",
                        bgColor: {
                          argb: "C0C0C0",
                          fgColor: { argb: "C0C0C0" },
                        },
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "center",
                      },
                    },
                  },
                ],
              });

              worksheet.addConditionalFormatting({
                ref: `A${(idx + 1) * 1 + 7}:D${(idx + 1) * 1 + 7}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                      font: {
                        name: "Times New Roman",
                        family: 4,
                        size: 11,
                        // bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "left",
                      },
                    },
                  },
                ],
              });
            })
        );
        worksheet.autoFilter = {
          from: "A7",
          to: `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}7`,
        };

        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = s.rombel.nama;
        worksheet.getCell("A3").value = jadwalUjian.toJSON().ujian.nama;
        worksheet.getCell("A4").value = ta.tahun;
        worksheet.getColumn("B").width = 35;

        worksheet.getCell(
          "A6"
        ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
      })
    );
    let namaFile = `/uploads/rekap-hasil-ujian-siswa-${rombel}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async putFiturSekolah({
    response,
    request,
    auth,
    params: { fitur_sekolah_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nota_barang } = request.post();

    // const rules = {
    //   nota_barang: "required",
    // };
    // const message = {
    //   "nota_barang.required": "Rumus harus diisi",
    // };
    // const validation = await validate(request.all(), rules, message);
    // if (validation.fails()) {
    //   return response.unprocessableEntity(validation.messages());
    // }

    const fitur = await MFiturSekolah.query()
      .where({ id: fitur_sekolah_id })
      .update({
        nota_barang,
      });

    if (!fitur) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async otomatisAkun({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const check = await MKeuAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    if (!check) {
      await otomatisAkun(sekolah);

      return response.ok({
        message: messagePostSuccess,
      });
    } else {
      return `sudah ada`;
    }
  }

  async otomatisNeraca({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const check = await MKeuKategoriNeraca.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    if (!check) {
      const semuaAkun = await MKeuAkun.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      const Al = await MKeuKategoriNeraca.create({
        tipe: "aktiva",
        nama: "AKTIVA LANCAR",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const KAS = semuaAkun.toJSON().find((d) => d.nama == "KAS");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Al.id,
        m_keu_akun_id: KAS.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANABOS = semuaAkun.toJSON().find((d) => d.nama == "PIUTANG");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Al.id,
        m_keu_akun_id: DANABOS.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANABOP = semuaAkun
        .toJSON()
        .find((d) => d.nama == "SARANA DAN PERLENGKAP");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Al.id,
        m_keu_akun_id: DANABOP.id,
        dihapus: 0,
        urutan: 1,
      });

      // const DANABPMU = semuaAkun.toJSON().find((d) => d.nama == "DANA BPMU");
      // await TkKategoriAkunNeraca.create({
      //   m_keu_kategori_neraca_id: Al.id,
      //   m_keu_akun_id: DANABPMU.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // const DANAYAYASAN = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "DANA YAYASAN");
      // await TkKategoriAkunNeraca.create({
      //   m_keu_kategori_neraca_id: Al.id,
      //   m_keu_akun_id: DANAYAYASAN.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      const At = await MKeuKategoriNeraca.create({
        tipe: "aktiva",
        nama: "AKTIVA TETAP",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const INVENTARIS = semuaAkun.toJSON().find((d) => d.nama == "TANAH");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: At.id,
        m_keu_akun_id: INVENTARIS.id,
        dihapus: 0,
        urutan: 1,
      });

      const KENDARAAN = semuaAkun.toJSON().find((d) => d.nama == "BANGUNAN");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: At.id,
        m_keu_akun_id: KENDARAAN.id,
        dihapus: 0,
        urutan: 1,
      });

      const GEDUNGSEKOLAH = semuaAkun
        .toJSON()
        .find((d) => d.nama == "AKUMULASI PENYUSUTAN");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: At.id,
        m_keu_akun_id: GEDUNGSEKOLAH.id,
        dihapus: 0,
        urutan: 1,
        pengaturan: "negatif",
      });

      const Ul = await MKeuKategoriNeraca.create({
        tipe: "pasiva",
        nama: "UTANG LANCAR",
        warna: "#EB144C",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const UTANGUSAHA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "UTANG USAHA");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Ul.id,
        m_keu_akun_id: UTANGUSAHA.id,
        dihapus: 0,
        urutan: 1,
      });

      // const UTANGPAJAK = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "UTANG PAJAK");
      // await TkKategoriAkunNeraca.create({
      //   m_keu_kategori_neraca_id: Ul.id,
      //   m_keu_akun_id: UTANGPAJAK.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      const UTANGJANGKAP = semuaAkun
        .toJSON()
        .find((d) => d.nama == "UTANG JANGKA PENDEK LAINNYA");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Ul.id,
        m_keu_akun_id: UTANGJANGKAP.id,
        dihapus: 0,
        urutan: 1,
      });

      const Ujp = await MKeuKategoriNeraca.create({
        tipe: "pasiva",
        nama: "UTANG JANGKA PANJANG",
        warna: "#EB144C",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const UTANGOBLIGASI = semuaAkun
        .toJSON()
        .find((d) => d.nama == "UTANG BANK");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Ujp.id,
        m_keu_akun_id: UTANGOBLIGASI.id,
        dihapus: 0,
        urutan: 1,
      });

      const E = await MKeuKategoriNeraca.create({
        tipe: "pasiva",
        nama: "EKUITAS",
        warna: "#EB144C",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const MODAL = semuaAkun.toJSON().find((d) => d.nama == "MODAL");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: E.id,
        m_keu_akun_id: MODAL.id,
        dihapus: 0,
        urutan: 1,
      });

      const AKUMULASIDIVIDEN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "AKUMULASI DIVIDEN");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: E.id,
        m_keu_akun_id: AKUMULASIDIVIDEN.id,
        dihapus: 0,
        urutan: 1,
        pengaturan: "negatif",
      });

      const AKUMULATIFLABA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "AKUMULATIF LABA (RUGI)");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: E.id,
        m_keu_akun_id: AKUMULATIFLABA.id,
        dihapus: 0,
        urutan: 1,
      });
    } else {
      return `sudah ada`;
    }
  }
  async otomatisLabaRugi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const check = await MKeuKategoriLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    if (!check) {
      const semuaAkun = await MKeuAkun.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      const pendapatan = await MKeuKategoriLabaRugi.create({
        nama: "PENDAPATAN",
        warna: "#00D084",
        kategori: "Lainnya",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 1,
      });

      const PENDAPATANJASA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "DANA BOS");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: pendapatan.id,
        m_keu_akun_id: PENDAPATANJASA.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANAPMU = semuaAkun.toJSON().find((d) => d.nama == "DANA PMU");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: pendapatan.id,
        m_keu_akun_id: DANAPMU.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANAKOMITE = semuaAkun
        .toJSON()
        .find((d) => d.nama == "DANA KOMITE");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: pendapatan.id,
        m_keu_akun_id: DANAKOMITE.id,
        dihapus: 0,
        urutan: 1,
      });

      const bebanLangsung = await MKeuKategoriLabaRugi.create({
        nama: "BEBAN LANGSUNG",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        kategori: "Beban",
        urutan: 2,
      });

      const BEABOS = semuaAkun.toJSON().find((d) => d.nama == "BEA BOS");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: bebanLangsung.id,
        m_keu_akun_id: BEABOS.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEAPMU = semuaAkun.toJSON().find((d) => d.nama == "BEA PMU");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: bebanLangsung.id,
        m_keu_akun_id: BEAPMU.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEAKOMITE = semuaAkun.toJSON().find((d) => d.nama == "BEA KOMITE");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: bebanLangsung.id,
        m_keu_akun_id: BEAKOMITE.id,
        dihapus: 0,
        urutan: 1,
      });

      const rumusOperasional = [
        {
          id: pendapatan.id,
        },
        {
          operator: "minus",
        },
        {
          id: bebanLangsung.id,
        },
      ];
      await MRumusLabaRugi.create({
        nama: "LABA OPERASIONAL",
        rumus: JSON.stringify(rumusOperasional),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 3,
      });

      const rumusHPS = [
        {
          id: bebanLangsung.id,
        },
        {
          id: "siswa",
        },
      ];
      await MRumusLabaRugi.create({
        nama: "HPS",
        rumus: JSON.stringify(rumusHPS),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 4,
      });

      const beban = await MKeuKategoriLabaRugi.create({
        nama: "BEBAN TIDAK LANGSUNG",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        kategori: "Beban",
        urutan: 5,
      });
      const BEBANSEWA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN SEWA LAHAN PARKIR");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANSEWA.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEBANGAJI = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN GAJI KARYAWAN");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANGAJI.id,
        dihapus: 0,
        urutan: 1,
      });
      const BEBANGAJIWALI = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN GAJI WALI KELAS");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANGAJIWALI.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEBANPERBAIKAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN PERBAIKAN");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANPERBAIKAN.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEBANADMINISTRASI = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN ADMINISTRASI");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANADMINISTRASI.id,
        dihapus: 0,
        urutan: 1,
      });

      // const BEBANASURANSI = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN ASURANSI");
      // await TkKategoriAkunLabaRugi.create({
      //   m_keu_kategori_laba_rugi_id: beban.id,
      //   m_keu_akun_id: BEBANASURANSI.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // const BEBANLAIN = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN LAINNYA");
      // await TkKategoriAkunLabaRugi.create({
      //   m_keu_kategori_laba_rugi_id: beban.id,
      //   m_keu_akun_id: BEBANLAIN.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      const rumusBeban = [
        {
          id: bebanLangsung.id,
        },
        {
          operator: "plus",
        },
        {
          id: beban.id,
        },
      ];

      await MRumusLabaRugi.create({
        nama: "TOTAL BEBAN",
        rumus: JSON.stringify(rumusBeban),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 6,
      });

      const pendapatanlain = await MKeuKategoriLabaRugi.create({
        nama: "PENDAPATAN LAIN LAIN",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 7,
        kategori: "Lainnya",
      });
      const PENDAPATANLAINNYA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN LAINNYA");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: pendapatanlain.id,
        m_keu_akun_id: PENDAPATANLAINNYA.id,
        dihapus: 0,
        urutan: 1,
      });

      const pendapatanBungaBank = await MKeuKategoriLabaRugi.create({
        nama: "PENDAPATAN BUNGA BANK",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 8,
        kategori: "Lainnya",
      });
      const PENDAPATANBUNGABANK1 = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN BUNGA BANK");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: pendapatanBungaBank.id,
        m_keu_akun_id: PENDAPATANBUNGABANK1.id,
        dihapus: 0,
        urutan: 1,
      });

      const rumusUsaha = [
        {
          id: pendapatan.id,
        },
        {
          operator: "minus",
        },
        {
          id: bebanLangsung.id,
        },
        {
          operator: "minus",
        },
        {
          id: beban.id,
        },
        {
          operator: "plus",
        },
        {
          id: pendapatanlain.id,
        },
        {
          operator: "plus",
        },
        {
          id: pendapatanBungaBank.id,
        },
      ];

      await MRumusLabaRugi.create({
        nama: "LABA USAHA (EBITDA)",
        rumus: JSON.stringify(rumusUsaha),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 9,
      });

      const penyusutan = await MKeuKategoriLabaRugi.create({
        nama: "PENYUSUTAN",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 10,
        kategori: "Lainnya",
      });

      const BEBANPENYUSUTANKENDARAAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN PENYUSUTAN KENDARAAN");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: penyusutan.id,
        m_keu_akun_id: BEBANPENYUSUTANKENDARAAN.id,
        dihapus: 0,
        urutan: 1,
      });
      const BEBANPENYUSUTANGEDUNG = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN PENYUSUTAN GEDUNG");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: penyusutan.id,
        m_keu_akun_id: BEBANPENYUSUTANGEDUNG.id,
        dihapus: 0,
        urutan: 1,
      });
      const BEBANPENYUSUTANPERALATAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN PENYUSUTAN PERALATAN DAN MESIN");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: penyusutan.id,
        m_keu_akun_id: BEBANPENYUSUTANPERALATAN.id,
        dihapus: 0,
        urutan: 1,
      });

      const rumusEBIT = [
        {
          id: pendapatan.id,
        },
        {
          operator: "minus",
        },
        {
          id: bebanLangsung.id,
        },
        {
          operator: "minus",
        },
        {
          id: beban.id,
        },
        {
          operator: "plus",
        },
        {
          id: pendapatanlain.id,
        },
        {
          operator: "plus",
        },
        {
          id: pendapatanBungaBank.id,
        },
        {
          operator: "minus",
        },
        {
          id: penyusutan.id,
        },
      ];

      await MRumusLabaRugi.create({
        nama: "EBIT",
        rumus: JSON.stringify(rumusEBIT),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 11,
      });

      const pajak = await MKeuKategoriLabaRugi.create({
        nama: "PAJAK",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 12,
        kategori: "Lainnya",
      });

      const PAJAK1 = semuaAkun.toJSON().find((d) => d.nama == "PAJAK");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: pajak.id,
        m_keu_akun_id: PAJAK1.id,
        dihapus: 0,
        urutan: 1,
      });

      const rumusEBT = [
        {
          id: pendapatan.id,
        },
        {
          operator: "minus",
        },
        {
          id: bebanLangsung.id,
        },
        {
          operator: "minus",
        },
        {
          id: beban.id,
        },
        {
          operator: "plus",
        },
        {
          id: pendapatanlain.id,
        },
        {
          operator: "plus",
        },
        {
          id: pendapatanBungaBank.id,
        },
        {
          operator: "minus",
        },
        {
          id: penyusutan.id,
        },
        {
          operator: "minus",
        },
        {
          id: pajak.id,
        },
      ];

      await MRumusLabaRugi.create({
        nama: "EBT",
        rumus: JSON.stringify(rumusEBT),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 13,
      });

      const rumusLABARUGI = [
        {
          id: pendapatan.id,
        },
        {
          operator: "minus",
        },
        {
          id: bebanLangsung.id,
        },
        {
          operator: "minus",
        },
        {
          id: beban.id,
        },
        {
          operator: "plus",
        },
        {
          id: pendapatanlain.id,
        },
        {
          operator: "plus",
        },
        {
          id: pendapatanBungaBank.id,
        },
        {
          operator: "minus",
        },
        {
          id: penyusutan.id,
        },
        {
          operator: "minus",
        },
        {
          id: pajak.id,
        },
      ];

      await MRumusLabaRugi.create({
        nama: "EBT",
        rumus: JSON.stringify(rumusLABARUGI),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        urutan: 14,
      });
    } else {
      return `sudah`;
    }
  }
  async otomatisArusKas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const check = await MKeuKategoriArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    if (!check) {
      const semuaAkun = await MKeuAkun.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      // kategori Operasi
      const operasi = await MKeuKategoriArusKas.create({
        nama: "Operasi",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      await MKeuAktivitasTransaksi.create({
        m_sekolah_id: sekolah.id,
        judul: "Laba (rugi) Berjalan",
        urutan: 1,
        dihapus: 0,
        laba: 1,
        m_keu_kategori_arus_kas_id: operasi.id,
      });
      // Aktivitas LabaBersih
      // const LabaBersih = await MKeuKategoriTipeAkun.create({
      //   nama: "Laba Bersih",
      //   dihapus: 0,
      //   m_sekolah_id: sekolah.id,
      //   pengaturan:JSON.stringify(pengaturanOperasi)
      // });
      // const LABABERSIH = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "LABA BERSIH");

      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: LabaBersih.id,
      //   m_keu_akun_id: LABABERSIH.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // await MKeuAktivitasTransaksi.create({
      //   judul: "Laba Bersih",
      //   dihapus: 0,
      //   m_sekolah_id: sekolah.id,
      //   m_keu_kategori_tipe_akun_id: LabaBersih.id,
      //   m_keu_kategori_arus_kas_id: operasi.id,
      //   urutan: 1,
      //   laba: 1,
      // });

      // aktivitas Akun Piutang
      const pengaturanPiutang = {
        format: "negatif",
        periode1: "Penurunan",
        periode2: "Kenaikan",
        pilihanPeriode: "",
        rumus: "periode2",
      };
      const AkunPiutang = await MKeuKategoriTipeAkun.create({
        nama: "Piutang",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        pengaturan: JSON.stringify(pengaturanPiutang),
      });

      const PIUTANGPENDAPATAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PIUTANG USAHA");
      const PIUTANGKARYAWAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PIUTANG KARYAWAN");

      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AkunPiutang.id,
        m_keu_akun_id: PIUTANGPENDAPATAN.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AkunPiutang.id,
        m_keu_akun_id: PIUTANGKARYAWAN.id,
        dihapus: 0,
        urutan: 1,
      });

      await MKeuAktivitasTransaksi.create({
        judul: "Akun Piutang",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_keu_kategori_tipe_akun_id: AkunPiutang.id,
        m_keu_kategori_arus_kas_id: operasi.id,
        urutan: 1,
      });

      //aktivitas AsetLancar
      // const AsetLancar = await MKeuKategoriTipeAkun.create({
      //   nama: "Aset Lancar",
      //   dihapus: 0,
      //   m_sekolah_id: sekolah.id,
      // });

      // const KAS = semuaAkun.toJSON().find((d) => d.nama == "KAS");
      // const BOS = semuaAkun.toJSON().find((d) => d.nama == "DANA BOS");
      // const BOP = semuaAkun.toJSON().find((d) => d.nama == "DANA BOP");
      // const BPMU = semuaAkun.toJSON().find((d) => d.nama == "DANA BPMU");
      // const YAYASAN = semuaAkun.toJSON().find((d) => d.nama == "DANA YAYASAN");

      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: AsetLancar.id,
      //   m_keu_akun_id: KAS.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: AsetLancar.id,
      //   m_keu_akun_id: BOS.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: AsetLancar.id,
      //   m_keu_akun_id: BOP.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: AsetLancar.id,
      //   m_keu_akun_id: BPMU.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: AsetLancar.id,
      //   m_keu_akun_id: YAYASAN.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // await MKeuAktivitasTransaksi.create({
      //   judul: "Aset Lancar",
      //   dihapus: 0,
      //   m_sekolah_id: sekolah.id,
      //   m_keu_kategori_tipe_akun_id: AsetLancar.id,
      //   m_keu_kategori_arus_kas_id: operasi.id,
      //   urutan: 1,
      //   laba: 1,
      // });

      // Aktivitas Persediaan Barang
      // const PersediaanBarang = await MKeuKategoriTipeAkun.create({
      //   nama: "Persediaan Barang",
      //   dihapus: 0,
      //   m_sekolah_id: sekolah.id,
      // });

      // const LEMARI = semuaAkun
      // .toJSON()
      // .find((d) => d.nama == "LEMARI");
      // const MEJA = semuaAkun
      // .toJSON()
      // .find((d) => d.nama == "MEJA");
      // const KURSI = semuaAkun
      // .toJSON()
      // .find((d) => d.nama == "KURSI");

      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id:PersediaanBarang.id,
      //   m_keu_akun_id: LEMARI.id,
      //   dihapus:0,
      //   urutan:1
      // })
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id:PersediaanBarang.id,
      //   m_keu_akun_id: MEJA.id,
      //   dihapus:0,
      //   urutan:1
      // })
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id:PersediaanBarang.id,
      //   m_keu_akun_id: KURSI.id,
      //   dihapus:0,
      //   urutan:1
      // })

      // await MKeuAktivitasTransaksi.create({
      //   judul: "Persediaan Barang",
      //   dihapus:0,
      //   m_sekolah_id:sekolah.id,
      //   m_keu_kategori_tipe_akun_id: PersediaanBarang.id,
      //   m_keu_kategori_arus_kas_id: operasi.id,
      //   urutan:1,
      //   laba:1
      // })

      // Aktivitas Penyusutan
      const pengaturanPenyusutan = {
        format: "positif",
        periode1: "",
        periode2: "",
        pilihanPeriode: "tampilkan",
        rumus: "periode2",
      };
      const Penyusutan = await MKeuKategoriTipeAkun.create({
        nama: "Penyusutan",
        dihapus: 0,
        m_sekolah_id: sekolah.id,

        pengaturan: JSON.stringify(pengaturanPenyusutan),
      });

      const AKUMULASIPB = semuaAkun
        .toJSON()
        .find((d) => d.nama == "AKUMULASI PENYUSUTAN BANGUNAN");
      // const BEBANPPK = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN PENYUSUTAN PERALATAN KANTOR");
      // const BEBANPPB = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN PENYUSUTAN PERALATAN BENGKEL");
      // const BEBANPK = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN PENYUSUTAN KENDARAAN");
      // const BEBANPG = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN PENYUSUTAN GEDUNG");

      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: Penyusutan.id,
        m_keu_akun_id: AKUMULASIPB.id,
        dihapus: 0,
        urutan: 1,
      });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: Penyusutan.id,
      //   m_keu_akun_id: BEBANPPB.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: Penyusutan.id,
      //   m_keu_akun_id: BEBANPK.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: Penyusutan.id,
      //   m_keu_akun_id: BEBANPG.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      await MKeuAktivitasTransaksi.create({
        judul: "Penyusutan",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_keu_kategori_tipe_akun_id: Penyusutan.id,
        m_keu_kategori_arus_kas_id: operasi.id,
        urutan: 1,
        // laba: 1,
      });

      // Kategori Investasi
      const Investasi = await MKeuKategoriArusKas.create({
        nama: "Investasi",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      // Aktivitas AsetTetap
      // const AsetTetap = await MKeuKategoriTipeAkun.create({
      //   nama: "Aset Tetap",
      //   dihapus: 0,
      //   m_sekolah_id: sekolah.id,
      // });
      // const LEMARI = semuaAkun.toJSON().find((d) => d.nama == "LEMARI");
      // const MEJA = semuaAkun.toJSON().find((d) => d.nama == "MEJA");
      // const KURSI = semuaAkun.toJSON().find((d) => d.nama == "KURSI");
      // const KENDARAAN = semuaAkun.toJSON().find((d) => d.nama == "KENDARAAN");
      // const GEDUNGSEKOLAH = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "GEDUNG SEKOLAH");

      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: AsetTetap.id,
      //   m_keu_akun_id: LEMARI.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: AsetTetap.id,
      //   m_keu_akun_id: MEJA.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: AsetTetap.id,
      //   m_keu_akun_id: KURSI.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: AsetTetap.id,
      //   m_keu_akun_id: KENDARAAN.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkKategoriTipeAkun.create({
      //   m_keu_kategori_tipe_akun_id: AsetTetap.id,
      //   m_keu_akun_id: GEDUNGSEKOLAH.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // await MKeuAktivitasTransaksi.create({
      //   judul: "Aset Tetap",
      //   dihapus: 0,
      //   m_sekolah_id: sekolah.id,
      //   m_keu_kategori_tipe_akun_id: AsetTetap.id,
      //   m_keu_kategori_arus_kas_id: Investasi.id,
      //   urutan: 1,
      //   laba: 1,
      // });

      // Kategori Pendanaan
      const Pendanaan = await MKeuKategoriArusKas.create({
        nama: "Pendanaan",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      // Aktivitas DIVIDEN
      const pengaturanDividen = {
        format: "negatif",
        periode1: "",
        periode2: "",
        pilihanPeriode: "",
        rumus: "periode2",
      };
      const Dividen = await MKeuKategoriTipeAkun.create({
        nama: "Dividen",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        pengaturan: JSON.stringify(pengaturanDividen),
      });
      const DIVIDEN = semuaAkun.toJSON().find((d) => d.nama == "DIVIDEN");

      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: Dividen.id,
        m_keu_akun_id: DIVIDEN.id,
        dihapus: 0,
        urutan: 1,
      });

      await MKeuAktivitasTransaksi.create({
        judul: "Dividen",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_keu_kategori_tipe_akun_id: Dividen.id,
        m_keu_kategori_arus_kas_id: Pendanaan.id,
        urutan: 1,
      });

      const rumusUtama = [
        {
          id: operasi.id,
        },
        {
          operator: "plus",
        },
        {
          id: Investasi.id,
        },
        {
          operator: "plus",
        },
        {
          id: Pendanaan.id,
        },
      ];
      await MKeuRumusArusKas.create({
        rumus: JSON.stringify(rumusUtama),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const PENDAPATANJASA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN JASA");
      const PENDAPATANLAINNYA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN LAINNYA");
      const kategoriLabaRugi = await MKeuKategoriLabaRugi.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();
      const PENDAPATAN = kategoriLabaRugi
        .toJSON()
        .find((d) => d.nama == "KAS & BANK");
      const BEBANTIDAKLANGSUNG = kategoriLabaRugi
        .toJSON()
        .find((d) => d.nama == "BEBAN TIDAK LANGSUNG");
      const BEBANLANGSUNG = kategoriLabaRugi
        .toJSON()
        .find((d) => d.nama == "BEBAN LANGSUNG");
      const rumusAwal = [
        {
          id: PENDAPATAN.id,
        },
      ];
      await MKeuRumusSaldoKasAwal.create({
        rumus: JSON.stringify(rumusAwal),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const rumusAkhir = [
        {
          id: operasi.id,
        },
        {
          operator: "plus",
        },
        {
          id: Investasi.id,
        },
        {
          operator: "plus",
        },
        {
          id: Pendanaan.id,
        },
      ];
      await MKeuRumusSaldoKasAkhir.create({
        rumus: JSON.stringify(rumusAkhir),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });
    } else {
      return "sudah ada";
    }
  }
  async postRaporSikapUAS({ response, request, auth, params: { rombel_id } }) {
    const domain = request.headers().origin;

    const sekolah = await MSekolah.query().where({ id: 15 }).first();

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    // const anggota = await MAnggotaRombel.query()
    //   .where({ m_rombel_id: 45830 })
    //   .pluck("m_user_id");

    // return anggota;
    const userIds = await User.query()
      .andWhere({ m_sekolah_id: 15 })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "siswa" })
      .ids();

    // return userIds

    const checkSikap = await MSikapSiswa.query()
      .whereIn("m_user_id", userIds)
      .andWhere({ tipe: "uts" })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: ta.id })
      .fetch();
    // return checkSikap

    let sikap;

    await Promise.all(
      checkSikap.toJSON().map(async (d) => {
        const check = await MSikapSiswa.query()
          .where({ tipe: "uas" })
          .andWhere({ dihapus: 0 })
          .andWhere({ m_ta_id: ta.id })
          .andWhere({ m_user_id: d.m_user_id })
          .first();
        if (!check) {
          sikap = await MSikapSiswa.create({
            m_sikap_sosial_ditunjukkan_id: d.m_sikap_sosial_ditunjukkan_id,
            m_sikap_sosial_ditingkatkan_id: d.m_sikap_sosial_ditingkatkan_id,
            m_user_id: d.m_user_id,
            m_sikap_spiritual_ditunjukkan_id:
              d.m_sikap_spiritual_ditunjukkan_id,
            m_sikap_spiritual_ditingkatkan_id:
              d.m_sikap_spiritual_ditingkatkan_id,
            status: 1,
            tipe: "uas",
            m_ta_id: ta.id,
            dihapus: 0,
          });
        } else {
          sikap = await MSikapSiswa.query().where({ id: check.id }).update({
            m_sikap_spiritual_ditunjukkan_id:
              d.m_sikap_spiritual_ditunjukkan_id,
            m_sikap_spiritual_ditingkatkan_id:
              d.m_sikap_spiritual_ditingkatkan_id,
            status: 1,
            dihapus: 0,
          });
        }
      })
    );

    if (!sikap) {
      return response.ok({
        message: messagePostSuccess,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async updateFitur({ request, response, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { fitur } = request.post();

    const user = await auth.getUser();

    if (!(user.m_sekolah_id == sekolah.id && user.role == "admin")) {
      return response.unauthorized({
        message: messageForbidden,
      });
    }

    const check = await MFiturSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    let success;
    if (check) {
      success = await MFiturSekolah.query().where({ id: check.id }).update({
        fitur,
      });
    } else {
      success = await MFiturSekolah.create({
        fitur,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async hackPostRombel({ response, request, auth }) {
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

    const { rombel_id } = request.post();

    const jamMengajar = await MJamMengajar.query()
      .select("id")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const jadwalMengajarData = await Promise.all(
      jamMengajar.toJSON().map(async (data) => {
        const check = await MJadwalMengajar.query()
          .where({ m_ta_id: ta.id })
          .andWhere({ m_jam_mengajar_id: data.id })
          .andWhere({ m_sekolah_id: sekolah.id })
          .andWhere({ m_rombel_id: rombel_id })
          .first();
        if (!check) {
          data.m_mata_pelajaran_id = null;
          data.m_rombel_id = rombel_id;
          data.m_jam_mengajar_id = data.id;
          data.m_sekolah_id = sekolah.id;
          data.m_ta_id = ta.id;
          delete data.id;
          delete data.jamFormat;

          return data;
        }
      })
    );

    const dataJadwalMengajarData = jadwalMengajarData.filter((d) => d != null);
    // return dataJadwalMengajarData;

    await MJadwalMengajar.createMany(dataJadwalMengajarData);

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async getProfil({ auth, response, request }) {
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

  async detailBarang({ response, request, auth, params: { barang_id } }) {
    const user = await auth.getUser();
    const barang = await MBarang.query()
      .with("lokasi")
      .where({ id: barang_id })
      .first();

    return response.ok({
      barang: barang,
      user,
    });
  }
  async postBarang({ response, request, auth }) {
    const user = await auth.getUser();

    const {
      foto,
      nama,
      merk,
      kode_barang,
      tahun_beli,
      asal,
      deskripsi,
      jumlah,
      harga,
      kepemilikan,
      nama_pemilik,
      m_lokasi_id,
      baik,
      rusak,
      nota,
    } = request.post();

    let foto1 = foto ? foto.toString() : null;

    const fiturSekolah = await MFiturSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();
    const fitur = JSON.parse(fiturSekolah ? fiturSekolah.fitur : "{}");

    const rules = {
      kode_barang: "required",
      nama: "required",
      // foto1: "required",
      merk: "required",
      tahun_beli: "required",
      asal: "required",
      harga: "required",
      deskripsi: "required",
      jumlah: "required",
      kepemilikan: "required",
      // nama_pemilik: "required",
      m_lokasi_id: "required",
    };
    const message = {
      "kode_barang.required": "Jenis harus diisi",
      "nama.required": "Nama harus diisi",
      // "foto1.required": "Foto harus diisi",
      "merk.required": "Nomor Registrasi harus diisi",
      "tahun_beli.required": "Lebar harus diisi",
      "asal.required": "Panjang harus diisi",
      "harga.required": "Harga harus diisi",
      "deskripsi.required": "Spesifikasi harus diisi",
      "jumlah.required": "Jumlah harus diisi",
      "kepemilikan.required": "Kepemilikan harus diisi",
      // "nama_pemilik.required": "Nama Pemilik harus diisi",
      "m_lokasi_id.required": "Lokasi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    if (fitur) {
      if (fitur.nota_barang == 1) {
        const rules = {
          nota: "required",
        };
        const message = {
          "nota.required": "Nota harus diisi",
        };
        const validation = await validate(request.all(), rules, message);
        if (validation.fails()) {
          return response.unprocessableEntity(validation.messages());
        }
      }
    }

    const barang = await MBarang.create({
      kode_barang,
      nama,
      merk,
      tahun_beli,
      asal,
      harga,
      jumlah,
      deskripsi,
      foto: foto1,
      kepemilikan,
      nama_pemilik,
      m_lokasi_id,
      dihapus: 0,
      baik: baik || jumlah,
      rusak: rusak || 0,
      m_sekolah_id: sekolah.id,
      nota,
    });

    await MHistoriAktivitas.create({
      jenis: "Buat Barang",
      tipe: "SarPras",
      m_user_id: user.id,
      akhir: `${nama}`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putBarang({ response, request, auth, params: { barang_id } }) {
    const user = await auth.getUser();
    if (user.role != "admin" || user.role == "guru") {
      return response.forbidden({ message: messageForbidden });
    }

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    const {
      foto,
      nama,
      merk,
      kode_barang,
      tahun_beli,
      asal,
      deskripsi,
      jumlah,
      harga,
      kepemilikan,
      nama_pemilik,
      m_lokasi_id,
      baik,
      rusak,
      nota,
      verifikasi,
    } = request.post();

    // const foto1 = foto ? foto.toString() : null;
    // const fiturSekolah = await MFiturSekolah.query()
    //   .where({ m_sekolah_id: sekolah.id })
    //   .first();
    // const fitur = JSON.parse(fiturSekolah.fitur || "{}");
    const rules = {
      kode_barang: "required",
      nama: "required",
      // foto: "required",
      merk: "required",
      tahun_beli: "required",
      asal: "required",
      harga: "required",
      deskripsi: "required",
      jumlah: "required",
      kepemilikan: "required",
      // nama_pemilik: "required",
      m_lokasi_id: "required",
    };
    const message = {
      "kode_barang.required": "Jenis harus diisi",
      "nama.required": "Nama harus diisi",
      // "foto.required": "Foto harus diisi",
      "merk.required": "Nomor Registrasi harus diisi",
      "tahun_beli.required": "Lebar harus diisi",
      "asal.required": "Panjang harus diisi",
      "harga.required": "Harga harus diisi",
      "deskripsi.required": "Spesifikasi harus diisi",
      "jumlah.required": "Jumlah harus diisi",
      "kepemilikan.required": "Kepemilikan harus diisi",
      // "nama_pemilik.required": "Nama Pemilik harus diisi",
      "m_lokasi_id.required": "Lokasi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const barangSebelum = await MBarang.query()
      .where({ id: barang_id })
      .first();
    const barang = await MBarang.query().where({ id: barang_id }).update({
      kode_barang,
      nama,
      merk,
      tahun_beli,
      asal,
      harga,
      jumlah,
      deskripsi,
      foto: foto1,
      kepemilikan,
      nama_pemilik,
      m_lokasi_id,
      baik,
      rusak,
      nota,
      verifikasi,
    });

    if (!barang) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    if (verifikasi == 0) {
      await MHistoriAktivitas.create({
        jenis: "Proses Inventaris",
        m_user_id: user.id,
        awal: `Verifikasi Ditolak : `,
        akhir: `"${barang.nama}"`,
        bawah: `Aset Tertunda`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
      await MHistoriAktivitas.create({
        jenis: "Proses Inventaris",
        m_user_id: user.id,
        awal: `Verifikasi Ditolak : `,
        akhir: `"${barang.nama}"`,
        bawah: `Aset Tertunda`,
        m_sekolah_id: sekolah.id,
        tipe: "Realisasi",
      });
    }

    if (barangSebelum.nota != nota) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Nota Barang : File nota barang telah diubah`,
        akhir: `"${nota}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.m_lokasi_id != m_lokasi_id) {
      const lokasiSebelum = await MLokasi.query()
        .where({ id: barangSebelum.m_lokasi_id })
        .first();
      const lokasiSesudah = await MLokasi.query()
        .where({ id: barangSebelum.m_lokasi_id })
        .first();
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Lokasi Barang : ${lokasiSebelum.nama} menjadi `,
        akhir: `"${lokasiSesudah.nama}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.nama_pemilik != nama_pemilik) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Kepemilikan - NamaP Pemilik/Peminjam : ${barangSebelum.nama_pemilik} menjadi `,
        akhir: `"${nama_pemilik}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.kepemilikan != kepemilikan) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Kepemilikan Barang : ${barangSebelum.kepemilikan} menjadi `,
        akhir: `"${kepemilikan}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.rusak != rusak) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Jumlah Barang dengan Kondisi Rusak : ${barangSebelum.rusak} menjadi `,
        akhir: `"${rusak}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.baik != baik) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Jumlah Barang dengan Kondisi Baik : ${barangSebelum.baik} menjadi `,
        akhir: `"${baik}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.harga != harga) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Harga Barang : ${barangSebelum.harga} menjadi `,
        akhir: `"${harga}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.jumlah != jumlah) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Jumlah Barang : ${barangSebelum.jumlah} menjadi `,
        akhir: `"${jumlah}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.deskripsi != deskripsi) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Spesifikasi Barang : ${barangSebelum.deskripsi} menjadi `,
        akhir: `"${deskripsi}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.asal != asal) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Asal Barang : ${barangSebelum.asal} menjadi `,
        akhir: `"${asal}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.tahun_beli != tahun_beli) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Tanggal Dibeli : ${moment(barangSebelum.tahun_beli).format(
          "dddd, DD MMM YYYY"
        )} menjadi `,
        akhir: `"${moment(tahun_beli).format("dddd, DD MMM YYYY")}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.kode_barang != kode_barang) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Kode Barang : ${barangSebelum.kode_barang} menjadi `,
        akhir: `"${kode_barang}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }
    if (barangSebelum.merk != merk) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Merk Barang : ${barangSebelum.merk} menjadi `,
        akhir: `"${merk}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.nama != nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Nama Barang : ${barangSebelum.nama} menjadi `,
        akhir: `"${nama}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    if (barangSebelum.foto != foto) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Barang",
        m_user_id: user.id,
        awal: `Foto Barang : File foto barang telah diubah`,
        akhir: `"${foto}"`,
        bawah: `${barangSebelum.nama}`,
        m_sekolah_id: sekolah.id,
        tipe: "SarPras",
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteBarang({ response, request, auth, params: { barang_id } }) {
    const user = await auth.getUser();
    if (user.role != "admin" || user.role == "guru") {
      return response.forbidden({ message: messageForbidden });
    }
    const barangSebelum = await MBarang.query()
      .where({ id: barang_id })
      .first();
    const barang = await MBarang.query().where({ id: barang_id }).update({
      dihapus: 1,
    });

    if (!barang) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    await MHistoriAktivitas.create({
      jenis: "Hapus Barang",
      tipe: "SarPras",
      m_user_id: user.id,
      akhir: `${barangSebelum.nama}`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async downloadAkun({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { data } = request.post();
    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Daftar Akun`);
    worksheet.mergeCells("A1:I1");
    worksheet.mergeCells("A2:I2");

    worksheet.getCell(
      "A3"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet.addConditionalFormatting({
      ref: "A1:F2",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A4:I4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    // worksheet.mergeCells("B4:H4");
    await Promise.all(
      data.map(async (d, idx) => {
        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = "Daftar Akun";
        worksheet.addConditionalFormatting({
          ref: `I${(idx + 1) * 1 + 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 4}:H${(idx + 1) * 1 + 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  // left: { style: "thin" },
                  bottom: { style: "thin" },
                  // right: { style: "thin" },
                },
              },
            },
          ],
        });

        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        // add column headers
        worksheet.getRow(4).values = [
          "KODE",
          "NAMA AKUN",
          "",
          "",
          "",
          "",
          "",
          "",
          "SALDO NORMAL",
        ];
        worksheet.columns = [
          { key: "kode" },
          { key: "nama1" },
          { key: "nama2" },
          { key: "nama3" },
          { key: "nama4" },
          { key: "nama5" },
          { key: "nama6" },
          { key: "nama7" },
          { key: "saldo" },
        ];

        // Add row using key mapping to columns
        if (d.level == 1) {
          let row = worksheet.addRow({
            kode: d ? d.kode : "-",
            nama1: d ? d.nama : "-",
            saldo: d ? d.saldo_normal : "-",
          });
        }
        if (d.level == 2) {
          let row = worksheet.addRow({
            kode: d ? d.kode : "-",
            nama2: d ? d.nama : "-",
            saldo: d ? d.saldo_normal : "-",
          });
        }
        if (d.level == 3) {
          let row = worksheet.addRow({
            kode: d ? d.kode : "-",
            nama3: d ? d.nama : "-",
            saldo: d ? d.saldo_normal : "-",
          });
        }
        if (d.level == 4) {
          let row = worksheet.addRow({
            kode: d ? d.kode : "-",
            nama4: d ? d.nama : "-",
            saldo: d ? d.saldo_normal : "-",
          });
        }
        if (d.level == 5) {
          let row = worksheet.addRow({
            kode: d ? d.kode : "-",
            nama5: d ? d.nama : "-",
            saldo: d ? d.saldo_normal : "-",
          });
        }
        if (d.level == 6) {
          let row = worksheet.addRow({
            kode: d ? d.kode : "-",
            nama6: d ? d.nama : "-",
            saldo: d ? d.saldo_normal : "-",
          });
        }
        if (d.level == 7) {
          let row = worksheet.addRow({
            kode: d ? d.kode : "-",
            nama7: d ? d.nama : "-",
            saldo: d ? d.saldo_normal : "-",
          });
        }
      })
    );

    worksheet.mergeCells("B4:H4");
    worksheet.getColumn("A").width = 10;
    worksheet.getColumn("B").width = 3;
    worksheet.getColumn("C").width = 3;
    worksheet.getColumn("D").width = 3;
    worksheet.getColumn("E").width = 3;
    worksheet.getColumn("F").width = 3;
    worksheet.getColumn("G").width = 3;
    worksheet.getColumn("H").width = 35;
    worksheet.getColumn("I").width = 21;
    let namaFile = `/uploads/daftar-akun-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
  async putPindahRekap({ response, request, auth, params: { rekap_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();

    const { m_ta_id } = request.post();
    const rules = {
      m_ta_id: "required",
    };
    const message = {
      "m_ta_id.required": "Tahun harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    const rekapLama = await MRekap.query().where({ id: rekap_id }).first();
    const materiLama = await MMateri.query()
      .with("mataPelajaran")
      .where({ id: rekapLama.m_materi_id })
      .first();
    const mataPelajaranBaru = await MMataPelajaran.query()
      .where({ m_ta_id })
      .andWhere({ nama: materiLama.toJSON().mataPelajaran.nama })
      .andWhere({ kode: materiLama.toJSON().mataPelajaran.kode })
      .andWhere({ kelompok: materiLama.toJSON().mataPelajaran.kelompok })
      .andWhere({ dihapus: 0 })
      .first();
    const materiBaru = await MMateri.query()
      .where({ m_mata_pelajaran_id: mataPelajaranBaru.id })
      .andWhere({ tingkat: materiLama.tingkat })
      .andWhere({ dihapus: 0 })
      .first();
    const rekap = await MRekap.query().where({ id: rekap_id }).update({
      m_materi_id: materiBaru.id,
      m_ta_id: m_ta_id,
      dihapus: 0,
    });

    const rombelLama = await MRombel.query()
      .where({ m_ta_id: materiLama.toJSON().mataPelajaran.m_ta_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const rombelBaru = await MRombel.query()
      .where({ m_ta_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const rekapRombelData = await MRekapRombel.query()
      .where({ m_rekap_id: rekap_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    if (rekapRombelData) {
      const coba = await Promise.all(
        rekapRombelData.toJSON().map(async (d) => {
          const checkRombelLama = rombelLama
            .toJSON()
            .find((e) => e.id == d.m_rombel_id);
          const checkRombelBaru = rombelBaru.toJSON().find((e) => {
            return (
              e.tingkat == checkRombelLama.tingkat &&
              e.nama == checkRombelLama.nama &&
              e.kelompok == checkRombelLama.kelompok &&
              e.dihapus == checkRombelLama.dihapus &&
              e.m_user_id == checkRombelLama.m_user_id &&
              e.m_jurusan_id == checkRombelLama.m_jurusan_id &&
              e.m_ta_id == m_ta_id &&
              e.m_sekolah_id == sekolah.id
            );
          });
          // return checkRombelBaru
          await MRekapRombel.query().where({ id: d.id }).update({
            m_rombel_id: checkRombelBaru.id,
          });
        })
      );
      // return coba
    }

    if (!rekap) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async aprovalTransaksi({
    response,
    request,
    auth,
    params: { transaksi_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    let { status } = request.post();

    const transaksi = await MKeuTransaksi.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ id: transaksi_id })
      .first();
    await MKeuTransaksi.query().where({ id: transaksi_id }).update({
      status,
    });
    if (status == 1) {
      await MHistoriAktivitas.create({
        jenis: "Proses Transaksi",
        m_user_id: user.id,
        awal: `Verifikasi Diterima : `,
        akhir: `"${transaksi.nama}"`,
        bawah: `Transaksi`,
        m_sekolah_id: sekolah.id,
        tipe: "Realisasi",
      });
    } else if (status == null) {
      await MHistoriAktivitas.create({
        jenis: "Proses Transaksi",
        m_user_id: user.id,
        awal: `Verifikasi Ditolak : `,
        akhir: `"${transaksi.nama}"`,
        bawah: `Transaksi`,
        m_sekolah_id: sekolah.id,
        tipe: "Realisasi",
      });
    }
    const jurnalIds = await MKeuJurnal.query()
      .where({ m_keu_transaksi_id: transaksi_id })
      .where({ dihapus: 0 })
      .ids();

    await Promise.all(
      jurnalIds.map(async (d) => {
        await MKeuJurnal.query().where({ id: d }).update({
          status,
        });
      })
    );

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async downloadLedgerNilai2({
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

    const user = await auth.getUser();

    let { ranking = [] } = request.post();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    // const userData1 = await User.query().where("nama","like",`%Elisabeth Yolanda Witin%`).first()

    const rombel = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder
          .with("user", (builder) => {
            builder
              .with("nilaiSemuaUjian", (builder) => {
                builder.with("mapel").where({ m_ta_id: ta.id });
              })
              .with("profil", (builder) => {
                builder.select("m_user_id", "nis");
              })
              .select("id", "nama", "gender");
          })
          .where({ dihapus: 0 });
        // .where({m_user_id:userData1.id});
      })
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ id: rombel_id })
      .first();

    let dataaa = 0;

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Rekap Nilai Siswa`);

    let alreadyMerged = 0;
    let sudahGabung = 0;
    // add column headers

    const urutan = rombel
      .toJSON()
      .anggotaRombel.sort((a, b) => {
        return (
          b.user.nilaiSemuaUjian.reduce((c, d) => {
            return c + d.nilai + d.nilai_keterampilan;
          }, 0) -
          a.user.nilaiSemuaUjian.reduce((c, d) => {
            return c + d.nilai + d.nilai_keterampilan;
          }, 0)
        );
      })
      .map((d) => d.id);

    const muatanRombel = await MKategoriMapel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_rombel_id: rombel_id })
      .count("* as total");

    // return urutan;

    const result = await Promise.all(
      rombel
        .toJSON()
        .anggotaRombel.sort((a, b) =>
          ("" + a.user.nama).localeCompare(b.user.nama)
        )
        .map(async (d, idx) => {
          worksheet.getRow(6).values = ["No", "NIS", "Nama", "Gen"];
          worksheet.getRow(7).values = ["No", "NIS", "Nama", "Gen"];
          worksheet.getRow(8).values = ["No", "NIS", "Nama", "Gen"];
          worksheet.columns = [
            { key: "no" },
            { key: "nis" },
            { key: "user" },
            { key: "gen" },
          ];
          let row = worksheet.addRow({
            no: `${idx + 1}`,
            nis: d.user.profil ? d.user.profil.nis : "",
            user: d.user ? d.user.nama : "-",
            gen: d.user ? d.user.gender : "",
          });

          const muatan = await MKategoriMapel.query()
            .with("mapelRapor", (builder) => {
              builder
                .with("mataPelajaran", (builder) => {
                  builder
                    .with("nilaiIndividu", (builder) => {
                      builder.where({ m_user_id: d.m_user_id });
                    })
                    .with("sikapSiswa", (builder) => {
                      builder
                        .with("predikat")
                        .where({ m_user_id: d.m_user_id });
                    })
                    .with("templateDeskripsi");
                })
                .where({ dihapus: 0 })
                .orderBy("urutan", "asc");
            })
            .where({ dihapus: 0 })
            .andWhere({ m_rombel_id: rombel_id })
            .fetch();
          // return muatan
          // const row = worksheet.getRow(8);
          let total = 0;
          let muatanTotal = 0;
          await Promise.all(
            muatan.toJSON().map(async (e) => {
              muatanTotal = muatanTotal + 1;
              let maPor = 0;
              await Promise.all(
                e.mapelRapor.map(async (r, nox) => {
                  maPor = maPor + 1;
                  worksheet.getColumn([`${(total + 1) * 3 + 2}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `Mata Pelajaran`,
                    `${r.mataPelajaran.kode}`,
                    `P`,
                  ];
                  worksheet.getColumn([`${(total + 1) * 3 + 3}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `${r.mataPelajaran.kode}`,
                    `K`,
                  ];
                  worksheet.getColumn([`${(total + 1) * 3 + 4}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `${r.mataPelajaran.kode}`,
                    `A`,
                  ];
                  // worksheet.mergeCells(`${(total + 1) * 2 + 3}:${(total + 1) * 2 + 4}`);

                  row.getCell([`${(total + 1) * 3 + 2}`]).value = `${
                    r.mataPelajaran.nilaiIndividu
                      ? r.mataPelajaran.nilaiIndividu.nilai
                      : "-"
                  }`;
                  row.getCell([`${(total + 1) * 3 + 3}`]).value = `${
                    r.mataPelajaran.nilaiIndividu
                      ? r.mataPelajaran.nilaiIndividu.nilai_keterampilan
                      : "-"
                  }`;
                  // const nilaiA = Math.round(
                  //   r.mataPelajaran.nilaiIndividu
                  //   ? r.mataPelajaran.nilaiIndividu.nilai
                  //   : "0" * 0.3 +
                  //   r.mataPelajaran.nilaiIndividu
                  //   ? r.mataPelajaran.nilaiIndividu.nilai_keterampilan
                  //   : "0" * 0.7
                  // );

                  const nilaiA = `${Math.round(
                    ((r.mataPelajaran.nilaiIndividu
                      ? r.mataPelajaran.nilaiIndividu.nilai
                      : "0") *
                      3) /
                      10 +
                      ((r.mataPelajaran.nilaiIndividu
                        ? r.mataPelajaran.nilaiIndividu.nilai_keterampilan
                        : "0") *
                        7) /
                        10
                  )}`;

                  row.getCell([`${(total + 1) * 3 + 4}`]).value = `${nilaiA}`;
                  row.getCell([`${(total + 1) * 3 + 2}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 3 + 3}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 3 + 4}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 3 + 5}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 3 + 6}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };

                  // if (!r.mataPelajaran.nilaiIndividu) {
                  //   dataaa = dataaa + 1;
                  //   return;
                  // }
                  if (
                    muatanRombel[0].total == muatanTotal &&
                    maPor ==
                      muatan.toJSON()[`${muatanRombel[0].total - 1}`].mapelRapor
                        .length
                  ) {
                    row.getCell([`${(total + 1) * 3 + 5}`]).value =
                      ranking.find(
                        (f) => f.m_user_id == d.m_user_id
                      ).total_nilai;

                    const cell = row.getCell([`${(total + 1) * 3 + 5}`]);

                    // row.getCell([`${(total + 1) * 2 + 6}`]).value = `=RANK(${colName(
                    //   (total + 1) * 2 + 4
                    // )}${idx + 9};$${colName((total + 1) * 2 + 4)}$9:$${colName(
                    //   (total + 1) * 2 + 4
                    // )}$100)`;

                    row.getCell([`${(total + 1) * 3 + 6}`]).value =
                      ranking.find((f) => f.m_user_id == d.m_user_id).ranking;

                    alreadyMerged = (total + 1) * 3 + 4;
                  }
                  total = total + 1;
                  // // Add row using key mapping to columns
                  // let row = worksheet.addRow ({
                  //   tugas1: e ? e.nilai : "-",
                  //   tugas2: e ? e.nilai : "-",
                  //   tugas3: e ? e.nilai : "-",
                  //   tugas4: e ? e.nilai : "-",
                })
              );
              //   tugas5: e ? e.nilai : "-",
              // });
            })
          );
          worksheet.addConditionalFormatting({
            ref: `A6:D8`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 11,
                    bold: true,
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: {
                      argb: "C0C0C0",
                      fgColor: { argb: "C0C0C0" },
                    },
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });

          worksheet.addConditionalFormatting({
            ref: `A${(idx + 1) * 1 + 8}:D${(idx + 1) * 1 + 8}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 11,
                    // bold: true,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "left",
                  },
                },
              },
            ],
          });
        })
    );
    // if (dataaa > 10) {
    //   return "Data untuk Leger Nilai Belum Lengkap";
    // }

    // return result;
    worksheet.getCell("A1").value = `LEGER PERNILAIAN AKHIR SEMESTER ${
      ta?.semester == 1 ? "GANJIL" : "GENAP"
    } DARING`;
    worksheet.getCell("A2").value = rombel.nama;
    worksheet.getCell("A3").value = sekolah.nama;
    worksheet.getCell("A4").value = `TAHUN PELAJARAN ${ta.tahun}`;
    // worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;

    worksheet.getCell(
      "A5"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet.addConditionalFormatting({
      ref: "A1:I4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "0000FF", fgColor: { argb: "0000FF" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet.mergeCells(`A6:A8`);
    worksheet.mergeCells(`B6:B8`);
    worksheet.mergeCells(`C6:C8`);
    worksheet.mergeCells(`D6:D8`);

    // if (dataaa < 10) {
    worksheet.mergeCells(6, 5, 6, `${alreadyMerged}`);
    worksheet.mergeCells(6, `${alreadyMerged + 1}`, 8, `${alreadyMerged + 1}`);
    worksheet.mergeCells(6, `${alreadyMerged + 2}`, 8, `${alreadyMerged + 2}`);

    worksheet.mergeCells(`A1:${colName(alreadyMerged + 1)}1`);
    worksheet.mergeCells(`A2:${colName(alreadyMerged + 1)}2`);
    worksheet.mergeCells(`A3:${colName(alreadyMerged + 1)}3`);
    worksheet.mergeCells(`A4:${colName(alreadyMerged + 1)}4`);
    // }

    // return dataaa

    worksheet.getCell(`${colName(alreadyMerged)}6`).value = `JUMLAH`;
    worksheet.getCell(`${colName(alreadyMerged + 1)}6`).value = `PERINGKAT`;

    worksheet.addConditionalFormatting({
      ref: `E6:${colName(alreadyMerged + 1)}8`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
            font: {
              name: "Times New Roman",
              family: 4,
              size: 11,
              // bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: {
                argb: "C0C0C0",
                fgColor: { argb: "C0C0C0" },
              },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    // return dataaa
    worksheet.getColumn("B").width = 14;
    worksheet.getColumn("C").width = 28;
    worksheet.getColumn(`${colName(alreadyMerged)}`).width = 12;
    worksheet.getColumn(`${colName(alreadyMerged + 1)}`).width = 16;

    worksheet.views = [
      {
        state: "frozen",
        xSplit: 4,
        ySplit: 8,
        topLeftCell: "A6",
        activeCell: "A6",
      },
    ];

    // worksheet.mergeCells(20,22,22,23);

    // worksheet.mergeCells(22,22,23,24);
    let namaFile = `/uploads/Leger-Nilai-${rombel.nama}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadLedgerNilai2Tahun({
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

    const ta1 = await this.getTAAktif(sekolah);

    let { ranking = [], m_ta_id = ta1.id } = request.post();

    const ta = await Mta.query()
      .select("id", "tahun", "semester")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ id: m_ta_id })
      .andWhere({ dihapus: 0 })
      .first();

    const user = await auth.getUser();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    // const userData1 = await User.query().where("nama","like",`%Elisabeth Yolanda Witin%`).first()

    const rombel = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder
          .with("user", (builder) => {
            builder
              .with("nilaiSemuaUjian", (builder) => {
                builder.with("mapel").where({ m_ta_id: ta.id });
              })
              .with("profil", (builder) => {
                builder.select("m_user_id", "nis");
              })
              .select("id", "nama", "gender");
          })
          .where({ dihapus: 0 });
        // .where({m_user_id:userData1.id});
      })
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ id: rombel_id })
      .first();

    let dataaa = 0;

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Rekap Nilai Siswa`);

    let alreadyMerged = 0;
    let sudahGabung = 0;
    // add column headers

    const urutan = rombel
      .toJSON()
      .anggotaRombel.sort((a, b) => {
        return (
          b.user.nilaiSemuaUjian.reduce((c, d) => {
            return c + d.nilai + d.nilai_keterampilan;
          }, 0) -
          a.user.nilaiSemuaUjian.reduce((c, d) => {
            return c + d.nilai + d.nilai_keterampilan;
          }, 0)
        );
      })
      .map((d) => d.id);

    const muatanRombel = await MKategoriMapel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_rombel_id: rombel_id })
      .count("* as total");

    // return urutan;

    const result = await Promise.all(
      rombel
        .toJSON()
        .anggotaRombel.sort((a, b) =>
          ("" + a.user.nama).localeCompare(b.user.nama)
        )
        .map(async (d, idx) => {
          worksheet.getRow(6).values = ["No", "NIS", "Nama", "Gen"];
          worksheet.getRow(7).values = ["No", "NIS", "Nama", "Gen"];
          worksheet.getRow(8).values = ["No", "NIS", "Nama", "Gen"];
          worksheet.columns = [
            { key: "no" },
            { key: "nis" },
            { key: "user" },
            { key: "gen" },
          ];
          let row = worksheet.addRow({
            no: `${idx + 1}`,
            nis: d.user.profil ? d.user.profil.nis : "",
            user: d.user ? d.user.nama : "-",
            gen: d.user ? d.user.gender : "",
          });

          const muatan = await MKategoriMapel.query()
            .with("mapelRapor", (builder) => {
              builder
                .with("mataPelajaran", (builder) => {
                  builder
                    .with("nilaiIndividu", (builder) => {
                      builder.where({ m_user_id: d.m_user_id });
                    })
                    .with("sikapSiswa", (builder) => {
                      builder
                        .with("predikat")
                        .where({ m_user_id: d.m_user_id });
                    })
                    .with("templateDeskripsi");
                })
                .where({ dihapus: 0 })
                .orderBy("urutan", "asc");
            })
            .where({ dihapus: 0 })
            .andWhere({ m_rombel_id: rombel_id })
            .fetch();
          // return muatan
          // const row = worksheet.getRow(8);
          let total = 0;
          let muatanTotal = 0;
          await Promise.all(
            muatan.toJSON().map(async (e) => {
              muatanTotal = muatanTotal + 1;
              let maPor = 0;
              await Promise.all(
                e.mapelRapor.map(async (r, nox) => {
                  maPor = maPor + 1;
                  worksheet.getColumn([`${(total + 1) * 3 + 2}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `Mata Pelajaran`,
                    `${r.mataPelajaran.kode}`,
                    `P`,
                  ];
                  worksheet.getColumn([`${(total + 1) * 3 + 3}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `${r.mataPelajaran.kode}`,
                    `K`,
                  ];
                  worksheet.getColumn([`${(total + 1) * 3 + 4}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `${r.mataPelajaran.kode}`,
                    `A`,
                  ];
                  // worksheet.mergeCells(`${(total + 1) * 2 + 3}:${(total + 1) * 2 + 4}`);

                  row.getCell([`${(total + 1) * 3 + 2}`]).value = `${
                    r.mataPelajaran.nilaiIndividu
                      ? r.mataPelajaran.nilaiIndividu.nilai
                      : "-"
                  }`;
                  row.getCell([`${(total + 1) * 3 + 3}`]).value = `${
                    r.mataPelajaran.nilaiIndividu
                      ? r.mataPelajaran.nilaiIndividu.nilai_keterampilan
                      : "-"
                  }`;
                  const nilaiA = `${Math.round(
                    ((r.mataPelajaran.nilaiIndividu
                      ? r.mataPelajaran.nilaiIndividu.nilai
                      : "0") *
                      3) /
                      10 +
                      ((r.mataPelajaran.nilaiIndividu
                        ? r.mataPelajaran.nilaiIndividu.nilai_keterampilan
                        : "0") *
                        7) /
                        10
                  )}`;

                  row.getCell([`${(total + 1) * 3 + 4}`]).value = `${nilaiA}`;
                  row.getCell([`${(total + 1) * 3 + 2}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 3 + 3}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 3 + 4}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 3 + 5}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 3 + 6}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };

                  // if (!r.mataPelajaran.nilaiIndividu) {
                  //   dataaa = dataaa + 1;
                  //   return;
                  // }
                  if (
                    muatanRombel[0].total == muatanTotal &&
                    maPor ==
                      muatan.toJSON()[`${muatanRombel[0].total - 1}`].mapelRapor
                        .length
                  ) {
                    row.getCell([`${(total + 1) * 3 + 5}`]).value =
                      ranking.find(
                        (f) => f.m_user_id == d.m_user_id
                      ).total_nilai;

                    const cell = row.getCell([`${(total + 1) * 3 + 5}`]);

                    // row.getCell([`${(total + 1) * 2 + 6}`]).value = `=RANK(${colName(
                    //   (total + 1) * 2 + 4
                    // )}${idx + 9};$${colName((total + 1) * 2 + 4)}$9:$${colName(
                    //   (total + 1) * 2 + 4
                    // )}$100)`;

                    row.getCell([`${(total + 1) * 3 + 6}`]).value =
                      ranking.find((f) => f.m_user_id == d.m_user_id).ranking;

                    alreadyMerged = (total + 1) * 3 + 4;
                  }
                  total = total + 1;
                  // // Add row using key mapping to columns
                  // let row = worksheet.addRow ({
                  //   tugas1: e ? e.nilai : "-",
                  //   tugas2: e ? e.nilai : "-",
                  //   tugas3: e ? e.nilai : "-",
                  //   tugas4: e ? e.nilai : "-",
                })
              );
              //   tugas5: e ? e.nilai : "-",
              // });
            })
          );
          worksheet.addConditionalFormatting({
            ref: `A6:D8`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 11,
                    bold: true,
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: {
                      argb: "C0C0C0",
                      fgColor: { argb: "C0C0C0" },
                    },
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });

          worksheet.addConditionalFormatting({
            ref: `A${(idx + 1) * 1 + 8}:D${(idx + 1) * 1 + 8}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 11,
                    // bold: true,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "left",
                  },
                },
              },
            ],
          });
        })
    );
    // if (dataaa > 10) {
    //   return "Data untuk Leger Nilai Belum Lengkap";
    // }

    // return result;
    worksheet.getCell("A1").value = `LEGER PERNILAIAN AKHIR SEMESTER ${
      ta?.semester == 1 ? "GANJIL" : "GENAP"
    } DARING`;
    worksheet.getCell("A2").value = rombel.nama;
    worksheet.getCell("A3").value = sekolah.nama;
    worksheet.getCell("A4").value = `TAHUN PELAJARAN ${ta.tahun}`;
    // worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;

    worksheet.getCell(
      "A5"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet.addConditionalFormatting({
      ref: "A1:I4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "0000FF", fgColor: { argb: "0000FF" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet.mergeCells(`A6:A8`);
    worksheet.mergeCells(`B6:B8`);
    worksheet.mergeCells(`C6:C8`);
    worksheet.mergeCells(`D6:D8`);

    // if (dataaa < 10) {
    worksheet.mergeCells(6, 5, 6, `${alreadyMerged}`);
    worksheet.mergeCells(6, `${alreadyMerged + 1}`, 8, `${alreadyMerged + 1}`);
    worksheet.mergeCells(6, `${alreadyMerged + 2}`, 8, `${alreadyMerged + 2}`);

    worksheet.mergeCells(`A1:${colName(alreadyMerged + 1)}1`);
    worksheet.mergeCells(`A2:${colName(alreadyMerged + 1)}2`);
    worksheet.mergeCells(`A3:${colName(alreadyMerged + 1)}3`);
    worksheet.mergeCells(`A4:${colName(alreadyMerged + 1)}4`);
    // }

    // return dataaa

    worksheet.getCell(`${colName(alreadyMerged)}6`).value = `JUMLAH`;
    worksheet.getCell(`${colName(alreadyMerged + 1)}6`).value = `PERINGKAT`;

    worksheet.addConditionalFormatting({
      ref: `E6:${colName(alreadyMerged + 1)}8`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
            font: {
              name: "Times New Roman",
              family: 4,
              size: 11,
              // bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: {
                argb: "C0C0C0",
                fgColor: { argb: "C0C0C0" },
              },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    // return dataaa
    worksheet.getColumn("B").width = 14;
    worksheet.getColumn("C").width = 28;
    worksheet.getColumn(`${colName(alreadyMerged)}`).width = 12;
    worksheet.getColumn(`${colName(alreadyMerged + 1)}`).width = 16;

    worksheet.views = [
      {
        state: "frozen",
        xSplit: 4,
        ySplit: 8,
        topLeftCell: "A6",
        activeCell: "A6",
      },
    ];

    // worksheet.mergeCells(20,22,22,23);

    // worksheet.mergeCells(22,22,23,24);
    let namaFile = `/uploads/Leger-Nilai-${rombel.nama}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async naikTAJam({ response, request }) {
    const domain = request.headers().origin;
    // let { domain } = request.get();

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);
    const taa = await Mta.query()
      .where({ aktif: 1 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .first();

    const check = await Mta.query()
      .where({ tahun: taa.id })
      .andWhere({ semester: "Genap" })
      .andWhere({ aktif: taa.aktif })
      .andWhere({ dihapus: taa.dihapus })
      .andWhere({ m_sekolah_id: taa.m_sekolah_id })
      .andWhere({ jam_sinkron: 0 })
      .andWhere({ mapel_sinkron: 0 })
      .andWhere({ rombel_sinkron: 0 })
      .andWhere({ jadwal_sinkron: 0 })
      .first();

    const tahun2 = `${taa?.tahun?.split(" / ")[0]} / ${
      taa?.tahun?.split(" / ")[1]
    }`;

    const check2 = await Mta.query()
      .where({ tahun: tahun2 })
      .whereIn("semester", ["Ganjil", 1])
      .andWhere({ aktif: taa.aktif })
      .andWhere({ dihapus: taa.dihapus })
      .andWhere({ m_sekolah_id: taa.m_sekolah_id })
      .andWhere({ jam_sinkron: 1 })
      .andWhere({ mapel_sinkron: 0 })
      .andWhere({ rombel_sinkron: 0 })
      .andWhere({ jadwal_sinkron: 0 })
      .first();

    if (!check) {
      if (!check2) {
        await Mta.create({
          tahun: tahun2,
          semester: "Ganjil",
          nama_kepsek: taa.nama_kepsek,
          nip_kepsek: taa.nip_kepsek,
          aktif: taa.aktif,
          dihapus: taa.dihapus,
          m_sekolah_id: taa.m_sekolah_id,
          jam_sinkron: 0,
          mapel_sinkron: 0,
          rombel_sinkron: 0,
          jadwal_sinkron: 0,
        });
      }
    }

    const jam = await MJamMengajar.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const taBaru = await Mta.query()
      .where({ aktif: 1 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .first();

    if (taBaru.jam_sinkron == 0) {
      const all = await Promise.all(
        jam.toJSON().map(async (d) => {
          await MJamMengajar.create({
            kode_hari: d.kode_hari,
            hari: d.hari,
            jam_ke: d.jam_ke,
            jam_mulai: d.jam_mulai,
            jam_selesai: d.jam_selesai,
            istirahat: d.istirahat,
            m_sekolah_id: d.m_sekolah_id,
            m_ta_id: taBaru.id,
          });
        })
      );
    }

    await Mta.query().where({ id: taBaru.id }).update({
      dihapus: 0,
      jam_sinkron: 1,
    });

    // return all;

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async naikTAMapel({ response, request }) {
    const domain = request.headers().origin;
    // let { domain } = request.get();

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const mapel = await MMataPelajaran.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const taBaru = await Mta.query()
      .where({ aktif: 1 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .first();

    if (taBaru.mapel_sinkron == 0) {
      const all = await Promise.all(
        mapel.toJSON().map(async (d, nox) => {
          await MMataPelajaran.create({
            nama: d.nama,
            kode: d.kode,
            kelompok: d.kelompok,
            kkm: d.kkm,
            dihapus: 0,
            m_user_id: d.m_user_id,
            m_sekolah_id: d.m_sekolah_id,
            m_ta_id: taBaru.id,
          });
        })
      );
    }

    await Mta.query().where({ id: taBaru.id }).update({
      dihapus: 0,
      mapel_sinkron: 1,
    });
    return response.ok({
      message: messagePostSuccess,
    });
  }

  async naikTARombel({ response, request }) {
    const domain = request.headers().origin;
    // let {  domain } = request.get();

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const rombel = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const taBaru = await Mta.query()
      .where({ aktif: 1 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .first();

    if (taBaru.rombel_sinkron == 0) {
      const all = await Promise.all(
        rombel.toJSON().map(async (d) => {
          if (d?.tingkat != "XII") {
            // return {nama : d?.nama?.split(" ")[0] + "I" + " " + d?.nama?.split(" ")[1]+ " " + d?.nama?.split(" ")[2]}
            const jurusan = await MJurusan.query()
              .select("id", "kode")
              .where({ id: d.m_jurusan_id })
              .first();
            // return{nama  :  d?.nama?.split(" ")[0] +
            //     "I" +
            //     " " +
            //     jurusan.kode +
            //     " " +
            //     d?.nama?.split(" ")[d?.nama?.split(" ").length - 1]}

            const rombelBaru = await MRombel.create({
              tingkat: d.tingkat + "I",
              nama:
                d?.nama?.split(" ")[0] +
                "I" +
                " " +
                jurusan?.kode +
                " " +
                d?.nama?.split(" ")[d?.nama?.split(" ").length - 1],
              kelompok: d.kelompok,
              dihapus: 0,
              m_user_id: d.m_user_id,
              m_jurusan_id: d.m_jurusan_id,
              m_sekolah_id: d.m_sekolah_id,
              m_ta_id: taBaru.id,
            });

            const checkKategoriMapel = await MKategoriMapel.query()
              .where({ m_rombel_id: rombelBaru.id })
              .first();

            if (!checkKategoriMapel) {
              await MKategoriMapel.create({
                nama: "Muatan Nasional",
                dihapus: 0,
                m_rombel_id: rombelBaru.id,
              });
              await MKategoriMapel.create({
                nama: "Muatan Kewilayahan",
                dihapus: 0,
                m_rombel_id: rombelBaru.id,
              });
              await MKategoriMapel.create({
                nama: "Muatan Peminatan Kejurusan",
                dihapus: 0,
                m_rombel_id: rombelBaru.id,
              });
            }

            const jamMengajar = await MJamMengajar.query()
              .select("id")
              .where({ m_sekolah_id: sekolah.id })
              .andWhere({ m_ta_id: taBaru.id })
              .fetch();

            const jadwalMengajarData = await Promise.all(
              jamMengajar.toJSON().map(async (data) => {
                data.m_mata_pelajaran_id = null;
                data.m_rombel_id = rombelBaru.id;
                data.m_jam_mengajar_id = data.id;
                data.m_sekolah_id = sekolah.id;
                data.m_ta_id = taBaru.id;
                delete data.id;
                delete data.jamFormat;

                return data;
              })
            );

            await MJadwalMengajar.createMany(jadwalMengajarData);
            const data = await Promise.all(
              d.anggotaRombel.map(async (e, nox) => {
                await MAnggotaRombel.create({
                  role: e.role,
                  dihapus: 0,
                  m_user_id: e.m_user_id,
                  m_rombel_id: rombelBaru.id,
                });
              })
            );
          }
          // return data;
        })
      );
      // return all
    }
    await Mta.query().where({ id: taBaru.id }).update({
      rombel_sinkron: 1,
      jadwal_sinkron: 1,
      dihapus: 0,
    });
    await Mta.query().where({ id: ta.id }).update({
      aktif: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async getPenyusutan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let transaksiIds;

    transaksiIds = MKeuTransaksi.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .andWhere({ status: 1 });
    if (tanggal_awal && tanggal_akhir) {
      transaksiIds.whereBetween("tanggal", [tanggal_awal, tanggal_akhir]);
    }
    if (search) {
      transaksiIds.andWhere("nama", "like", `%${search}%`);
    }

    transaksiIds = await transaksiIds.ids();

    const akun = await MKeuAkun.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereNot({ nama: "KAS" })
      .orderBy("kode", "asc")
      .fetch();

    let penyusutan = await MKeuPenyusutanTransaksi.query()
      .with("transaksi", (builder) => {
        builder.with("jurnalDebet", (builder) => {
          builder.where({ jenis: "debit" });
        });
      })
      .with("akunDebet", (builder) => {
        builder.with("jurnal", (builder) => {
          builder.where({ dihapus: 0 });
        });
      })
      .with("akunKredit", (builder) => {
        builder.with("jurnal", (builder) => {
          builder
            .with("transaksi")
            .where({ dihapus: 0 })
            .where({ jenis: "kredit" });
        });
      })
      .where({ dihapus: 0 })
      .whereIn("m_keu_transaksi_id", transaksiIds)
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    const data = await Promise.all(
      penyusutan.toJSON().map(async (d, idx) => {
        let akumulasiPenyusutan = 0;
        const test = await Promise.all(
          d.akunKredit.jurnal.map((e) => {
            if (e.transaksi.m_keu_penyusutan_transaksi_id == d.id) {
              akumulasiPenyusutan = akumulasiPenyusutan + e.saldo;
            }
            // return e
          })
        );
        return {
          // test,
          tanggal_pembelian: d.transaksi.tanggal,
          nama: d.transaksi.nama,
          nilaiPerolehan: d.transaksi.jurnalDebet.saldo,
          masa_pakai: d.masa_pakai,
          satuan: d.satuan,
          akumulasiPenyusutan,
          nilai_residu: d.nilai_residu,
          persentase: d.persentase,
          m_keu_akun_debet_id: d.m_keu_akun_debet_id,
          m_keu_akun_kredit_id: d.m_keu_akun_kredit_id,
          m_keu_transaksi_id: d.m_keu_transaksi_id,
          id: d.id,
        };
      })
    );
    const transaksi = await MKeuTransaksi.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .andWhere({ status: 1 })
      .fetch();

    return response.ok({
      data,
      akun,
      transaksi,
      // penyusutan,
    });
  }

  async postPenyusutan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      nama_transaksi,
      m_keu_transaksi_id,
      nilai_residu = 0,
      persentase,
      masa_pakai,
      satuan,
      m_keu_akun_debet_id,
      m_keu_akun_kredit_id,
    } = request.post();

    // const rules = {
    //   nama: "required",
    //   kategori: "required",
    // };
    // const message = {
    //   "kategori.required": "Kategori harus dipilih",
    //   "nama.required": "Nama harus diisi",
    // };
    // const validation = await validate(request.all(), rules, message);
    // if (validation.fails()) {
    //   return response.unprocessableEntity(validation.messages());
    // }l
    let saldo = 0;

    const checkTransaksi = await MKeuTransaksi.query()
      .with("jurnalDebet", (builder) => {
        builder.where({ jenis: "debit" });
      })
      .where({ id: m_keu_transaksi_id })
      .first();

    let masaPakai;
    if (satuan == "Bulan") {
      masaPakai = masa_pakai;
    } else if (satuan == "Tahun") {
      masaPakai = masa_pakai * 12;
    }
    saldo = Math.round(
      (checkTransaksi.toJSON().jurnalDebet.saldo - nilai_residu) / masaPakai
    );

    const penyusutan = await MKeuPenyusutanTransaksi.create({
      nama_transaksi,
      m_keu_transaksi_id,
      nilai_residu,
      persentase,
      masa_pakai,
      satuan,
      m_keu_akun_debet_id,
      m_keu_akun_kredit_id,
      dihapus: 0,
      update_selanjutnya: moment().add(1, "M").format("YYYY-MM-DD hh:mm:ss"),
      terakhir_updates: moment(`${checkTransaksi.tanggal}`)
        .add(masaPakai, "M")
        .format("YYYY-MM-DD hh:mm:ss"),
      m_sekolah_id: sekolah.id,
      saldo,
    });

    if (
      moment().format("YYYY-MM-DD") >=
      moment(checkTransaksi.tanggal).format("YYYY-MM-DD")
    ) {
      let date1 = moment(`${checkTransaksi.tanggal}`);

      let date2;
      if (moment(`${checkTransaksi.tanggal}`).add(masaPakai, "M") >= moment()) {
        date2 = moment();
      } else {
        date2 = moment(`${checkTransaksi.tanggal}`).add(masaPakai, "M");
      }
      //Initiate date object
      const dt_date1 = new Date(date1);
      const dt_date2 = new Date(date2);
      //Get the Timestamp
      date1 = dt_date1.getTime();
      date2 = dt_date2.getTime();

      let calc;
      //Check which timestamp is greater
      if (date1 > date2) {
        calc = new Date(date1 - date2);
      } else {
        calc = new Date(date2 - date1);
      }
      //Retrieve the date, month and year
      const calcFormatTmp =
        calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();
      //Convert to an array and store
      const calcFormat = calcFormatTmp.split("-");
      //Subtract each member of our array from the default date
      const months_passed = parseInt(Math.abs(calcFormat[1]) - 1);
      const years_passed = parseInt(Math.abs(calcFormat[2] - 1970));

      // return diff
      let lama =
        parseInt(months_passed) +
        parseInt(years_passed ? years_passed * 12 : 0);
      if (
        moment().format("DD") >= moment(checkTransaksi.tanggal).format("DD")
      ) {
        lama = lama - 1;
      }
      if (lama > masaPakai) {
        lama = masaPakai;
      }

      // if (persentase != 0 || persentase == null) {
      //   saldo =
      //     ((checkTransaksi.toJSON().jurnalDebet.saldo - nilai_residu) *
      //       (persentase / 100)) /
      //     masaPakai;
      // } else {
      // }
      // return {saldo,nilai_residu,persen:persentase/100,masaPakai,duit:checkTransaksi.toJSON().jurnalDebet.saldo}

      for (let i = 1; i <= lama; i++) {
        const transaksi = await MKeuTransaksi.create({
          nama: nama_transaksi,
          // nomor,
          tanggal: moment(checkTransaksi.tanggal)
            .add(i, "M")
            .format("YYYY-MM-DD"),
          dihapus: 0,
          status: 1,
          m_sekolah_id: sekolah.id,
          m_keu_penyusutan_transaksi_id: penyusutan.id,
        });

        await MKeuJurnal.create({
          jenis: "debit",
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: m_keu_akun_debet_id,
          saldo,
          status: 1,
          dihapus: 0,
        });

        await MKeuJurnal.create({
          jenis: "kredit",
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: m_keu_akun_kredit_id,
          saldo,
          status: 1,
          dihapus: 0,
        });
      }
      //  return datass
    }
    // return checkTransaksi

    // await MHistoriAktivitas.create({
    //   jenis: "Buat Template Laporan",
    //   tipe: "Realisasi",
    //   m_user_id: user.id,
    //   awal: `Kategori : `,
    //   akhir: `${nama}`,
    //   bawah: `Laporan Laba/Rugi`,
    //   m_sekolah_id: sekolah.id,
    // });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPenyusutan({ response, request, auth, params: { penyusutan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      nama_transaksi,
      m_keu_transaksi_id,
      nilai_residu = 0,
      persentase,
      masa_pakai,
      satuan,
      m_keu_akun_debet_id,
      m_keu_akun_kredit_id,
    } = request.post();

    const rules = {
      nama_transaksi: "required",
      // nilai_residu: "required",
    };
    const message = {
      "nama_transaksi.required": "Nama Transaksi Penyusutan harus diisi",
      // "nilai_residu.required": "Nilai Residu harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const dataSebelum = await MKeuPenyusutanTransaksi.query()
      .where({ id: penyusutan_id })
      .first();

    const checkTransaksiSebelum = await MKeuTransaksi.query()
      .with("jurnalDebet", (builder) => {
        builder.where({ jenis: "debit" });
      })
      .where({ id: dataSebelum.m_keu_transaksi_id })
      .first();

    const deletee = await MKeuTransaksi.query()
      .where({ m_keu_penyusutan_transaksi_id: dataSebelum.id })
      .delete();

    let saldo = 0;
    const checkTransaksi = await MKeuTransaksi.query()
      .with("jurnalDebet", (builder) => {
        builder.where({ jenis: "debit" });
      })
      .where({ id: m_keu_transaksi_id })
      .first();

    let masaPakai;
    if (satuan == "Bulan") {
      masaPakai = masa_pakai;
    } else if (satuan == "Tahun") {
      masaPakai = masa_pakai * 12;
    }

    if (
      moment().format("YYYY-MM-DD") >=
      moment(checkTransaksi.tanggal).format("YYYY-MM-DD")
    ) {
      let date1 = moment(`${checkTransaksi.tanggal}`);

      let date2;
      if (moment(`${checkTransaksi.tanggal}`).add(masaPakai, "M") >= moment()) {
        date2 = moment();
      } else {
        date2 = moment(`${checkTransaksi.tanggal}`).add(masaPakai, "M");
      }
      // const diff = date2.diff(date1);

      //Initiate date object
      const dt_date1 = new Date(date1);
      const dt_date2 = new Date(date2);
      //Get the Timestamp
      date1 = dt_date1.getTime();
      date2 = dt_date2.getTime();

      let calc;
      //Check which timestamp is greater
      if (date1 > date2) {
        calc = new Date(date1 - date2);
      } else {
        calc = new Date(date2 - date1);
      }
      //Retrieve the date, month and year
      const calcFormatTmp =
        calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();
      //Convert to an array and store
      const calcFormat = calcFormatTmp.split("-");
      //Subtract each member of our array from the default date
      const months_passed = parseInt(Math.abs(calcFormat[1]) - 1);
      const years_passed = parseInt(Math.abs(calcFormat[2] - 1970));

      // return diff
      let lama =
        parseInt(months_passed) +
        parseInt(years_passed ? years_passed * 12 : 0);
      if (
        moment().format("DD") >= moment(checkTransaksi.tanggal).format("DD")
      ) {
        lama = lama - 1;
      }
      if (lama > masaPakai) {
        lama = masaPakai;
      }

      // if (persentase != 0 || persentase == null) {
      //   saldo =
      //     ((checkTransaksi.toJSON().jurnalDebet.saldo - nilai_residu) *
      //       (persentase / 100)) /
      //     masaPakai;
      // } else {
      saldo = Math.round(
        (checkTransaksi.toJSON().jurnalDebet.saldo - nilai_residu) / masaPakai
      );
      // }

      for (let i = 1; i <= lama; i++) {
        const transaksi = await MKeuTransaksi.create({
          nama: nama_transaksi,
          // nomor,
          tanggal: moment(checkTransaksi.tanggal)
            .add(i, "M")
            .format("YYYY-MM-DD"),
          dihapus: 0,
          status: 1,
          m_sekolah_id: sekolah.id,
          m_keu_penyusutan_transaksi_id: penyusutan_id,
        });

        await MKeuJurnal.create({
          jenis: "debit",
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: m_keu_akun_debet_id,
          saldo,
          status: 1,
          dihapus: 0,
        });

        await MKeuJurnal.create({
          jenis: "kredit",
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: m_keu_akun_kredit_id,
          saldo,
          status: 1,
          dihapus: 0,
        });
      }
      //  return datass
    }

    // const kategoriLaba = await MKeuKategoriLabaRugi.query()
    //   .where({ id: penyusutan_id })
    //   .first();
    const jam = moment(checkTransaksi.tanggal).format("hh:mm:ss");

    const penyusutan = await MKeuPenyusutanTransaksi.query()
      .where({ id: penyusutan_id })
      .update({
        nama_transaksi,
        m_keu_transaksi_id,
        nilai_residu,
        persentase,
        masa_pakai,
        satuan,
        m_keu_akun_debet_id,
        m_keu_akun_kredit_id,
        update_selanjutnya: `${moment()
          .add(1, "M")
          .format("YYYY-MM-DD")} ${jam}`,
        terakhir_updates: moment(`${checkTransaksi.tanggal}`)
          .add(masaPakai, "M")
          .format("YYYY-MM-DD"),
        dihapus: 0,
      });

    if (!penyusutan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    // if (warna != kategoriLaba.warna) {
    //   await MHistoriAktivitas.create({
    //     jenis: "Ubah Template Laporan",
    //     tipe: "Realisasi",
    //     m_user_id: user.id,
    //     awal: `Kategori - Warna : ${kategoriLaba.warna} menjadi `,
    //     akhir: `"${warna}"`,
    //     bawah: `Laporan Laba/Rugi`,
    //     m_sekolah_id: sekolah.id,
    //   });
    // }
    // if (nama != kategoriLaba.nama) {
    //   await MHistoriAktivitas.create({
    //     jenis: "Ubah Template Laporan",
    //     tipe: "Realisasi",
    //     m_user_id: user.id,
    //     awal: `Kategori - Nama : ${kategoriLaba.nama} menjadi `,
    //     akhir: `"${nama}"`,
    //     bawah: `Laporan Laba/Rugi`,
    //     m_sekolah_id: sekolah.id,
    //   });
    // }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePenyusutan({
    response,
    request,
    auth,
    params: { penyusutan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const penyusutan = await MKeuPenyusutanTransaksi.query()
      .where({ id: penyusutan_id })
      .update({
        dihapus: 1,
      });

    await MKeuTransaksi.query()
      .where({ m_keu_penyusutan_transaksi_id: penyusutan_id })
      .update({ dihapus: 1 });

    const transaksiIds = await MKeuTransaksi.query()
      .where({ m_keu_penyusutan_transaksi_id: penyusutan_id })
      .ids();

    await MKeuJurnal.query()
      .whereIn("m_keu_transaksi_id", transaksiIds)
      .update({
        dihapus: 1,
        status: null,
      });

    if (!penyusutan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getGeneratePenyusutan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let transaksiIds;

    transaksiIds = await MKeuTransaksi.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .andWhere({ status: 1 })
      .ids();

    const penyusutan = await MKeuPenyusutanTransaksi.query()
      .with("transaksi", (builder) => {
        builder.with("jurnalDebet", (builder) => {
          builder.where({ jenis: "debit" });
        });
      })
      .where({ dihapus: 0 })
      .andWhere(
        "update_selanjutnya",
        "<=",
        moment().format("YYYY-MM-DD hh:mm:ss")
      )
      .whereIn("m_keu_transaksi_id", transaksiIds)
      .fetch();

    const coba = await Promise.all(
      penyusutan.toJSON().map(async (d) => {
        // const akun1 = await MKeuAkun.query()
        //   .with("jurnal", (builder) => {
        //     builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        //     if (transaksiIds) {
        //       builder.whereIn("m_keu_transaksi_id", transaksiIds);
        //     }
        //   })
        //   .with("rekRencana", (builder) => {
        //     builder
        //       .where({ dihapus: 0 })
        //       .where({ m_rencana_keuangan_id: null });
        //   })
        //   .andWhere({ dihapus: 0 })
        //   .andWhere({ id: m_keu_akun_id })
        //   .first();
        const jam = moment(d.transaksi.tanggal).format("hh:mm:ss");
        // return jam

        const penyusutan = await MKeuPenyusutanTransaksi.query()
          .where({ id: d.id })
          .update({
            update_selanjutnya: `${moment()
              .add(1, "M")
              .format("YYYY-MM-DD")} ${jam}`,
          });

        const transaksi = await MKeuTransaksi.create({
          nama: d.nama_transaksi,
          // nomor,
          tanggal: moment().format("YYYY-MM-DD hh:mm:ss"),
          dihapus: 0,
          status: 1,
          m_sekolah_id: sekolah.id,
          m_keu_penyusutan_transaksi_id: d.id,
        });

        await MKeuJurnal.create({
          jenis: "debit",
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: d.m_keu_akun_debet_id,
          saldo: d.saldo,
          status: 1,
          dihapus: 0,
        });

        await MKeuJurnal.create({
          jenis: "kredit",
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: d.m_keu_akun_kredit_id,
          saldo: d.saldo,
          status: 1,
          dihapus: 0,
        });
      })
    );
    return coba;
  }

  async detailTransaksi({ response, request, auth, params: { transaksi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    let transaksi = await MKeuTransaksi.query()
      .with("jurnalDebet", (builder) => {
        builder.where({ jenis: "debit" });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where({ id: transaksi_id })
      .first();

    // return ` ini nilai${status}`
    // transaksi = transaksi
    //   .toJSON()
    //   .data.sort((a, b) => ("" + a.status).localeCompare("" + b.status));

    return response.ok({
      transaksi,
    });
  }
  async hackTanggalTransaksi({
    response,
    request,
    auth,
    params: { transaksi_id },
  }) {
    // const domain = request.headers().origin;
    const { domain } = request.get();

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let transaksi = await MKeuTransaksi.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    const check = await Promise.all(
      transaksi.toJSON().map(async (d) => {
        const tanggalAktif = `2021${moment(d.tanggal).format("-MM-DD")}`;
        let update = await MKeuTransaksi.query().where({ id: d.id }).update({
          tanggal: tanggalAktif,
        });
        return tanggalAktif;
      })
    );
    return check;

    // return ` ini nilai${status}`
    // transaksi = transaksi
    //   .toJSON()
    //   .data.sort((a, b) => ("" + a.status).localeCompare("" + b.status));

    return response.ok({
      transaksi,
    });
  }
  async hackTransaksi({ response, request, auth, params: { transaksi_id } }) {
    // const domain = request.headers().origin;
    const { domain } = request.get();

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let transaksiData = await MKeuTransaksi.query()
      .with("jurnal")
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    const check = await Promise.all(
      transaksiData.toJSON().map(async (d) => {
        const transaksi = await MRencanaTransaksi.create({
          nama: d.nama,
          tanggal: d?.tanggal,
          dihapus: 0,
          m_sekolah_id: sekolah.id,
          status: d?.status,
          m_rencana_keuangan_id: 30,
        });

        const test = await Promise.all(
          d.jurnal.map(async (e) => {
            // return e
            await MKeuRencanaJurnal.create({
              jenis: e.jenis,
              m_keu_akun_id: e.m_keu_akun_id,
              saldo: e.saldo,
              dihapus: 0,
              status: e?.status,
              m_rencana_transaksi_id: transaksi.id,
            });
            return e;
          })
        );
        return { test, d };
      })
    );
    return check;

    // return ` ini nilai${status}`
    // transaksi = transaksi
    //   .toJSON()
    //   .data.sort((a, b) => ("" + a.status).localeCompare("" + b.status));

    return response.ok({
      transaksi,
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

    let { tipe, search, ta_id = ta.id } = request.get();

    tipe = tipe ? tipe : "spp";

    let pembayaran;

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

    const totalPelunasan = pembayaran.toJSON().map((item) => {
      return {
        id: item.id,
        total: item.rombel.reduce((a, b) => a + b.__meta__.total, 0),
        totalLunas: item.rombel.reduce((a, b) => a + b.__meta__.totalLunas, 0),
      };
    });

    const rombel = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .fetch();

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
  async getJadwalUjianCheck({ response, request }) {
    // const domain = request.headers().origin;
    const { status, page, search, tipe_ujian, domain } = request.get();

    // const sekolah = await this.getSekolahByDomain(domain);

    // if (sekolah == "404") {
    //   return response.notFound({ message: "Sekolah belum terdaftar" });
    // }

    // const ta = await this.getTAAktif(sekolah);

    // if (ta == "404") {
    //   return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    // }

    // const hari_ini = moment().format("YYYY-MM-DD HH:mm");

    // const user = await auth.getUser();

    const count = await MJadwalUjian.query()
      .where({ m_user_id: 2818221 })
      .andWhere({ dihapus: 0 })
      // .andWhere("waktu_ditutup", ">=", hari_ini)
      .count("* as total");
    const total = count[0].total;

    // get tagihan

    const rombelIds = await MRombel.query()
      .where({ m_sekolah_id: 33 })
      .andWhere({ dihapus: 0 })
      .ids();

    const anggotaRombel = await MAnggotaRombel.query()
      .where({ m_user_id: 2818221 })
      // .andWhere({ dihapus: 0 })
      .whereIn("m_rombel_id", rombelIds)
      .pluck("m_rombel_id");

    let jadwalUjian;

    jadwalUjian = await TkJadwalUjian.query()
      .with("jadwalUjian", (builder) => {
        builder.with("ujian", (builder) => {
          if (search) {
            builder.where("nama", "like", `%${search}%`);
          }
        });
        // .andWhere("waktu_ditutup", "<", hari_ini);
      })
      .with("peserta", (builder) => {
        builder.where({ m_user_id: 2818221 }).where({ dihapus: 0 });
      })
      .whereIn("m_rombel_id", anggotaRombel)
      .where({ dihapus: 0 })
      .orderBy("created_at", "desc")
      .fetch();

    let ujian;

    ujian = jadwalUjian
      .toJSON()
      .filter((d) => d.jadwalUjian !== null && d.jadwalUjian.ujian);

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
        // pembayaran: pembayaran.toJSON().filter((item) => {
        //   if (!item.rombelPembayaran.pembayaran) {
        //     return false;
        //   }
        //   if (
        //     item.ditangguhkan &&
        //     moment(item.ditangguhkan).toDate() > moment().toDate()
        //   ) {
        //     return false;
        //   } else {
        //     return true;
        //   }
        // }),
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
  async getJadwalUjianCheck1({ response, request }) {
    // const domain = request.headers().origin;
    const { status, page, search, tipe_ujian, domain } = request.get();

    // const sekolah = await this.getSekolahByDomain(domain);

    // if (sekolah == "404") {
    //   return response.notFound({ message: "Sekolah belum terdaftar" });
    // }

    // const ta = await this.getTAAktif(sekolah);

    // if (ta == "404") {
    //   return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    // }

    const hari_ini = moment().format("YYYY-MM-DD HH:mm");

    // const user = await auth.getUser();

    const count = await MJadwalUjian.query()
      .where({ m_user_id: 2818221 })
      .andWhere({ dihapus: 0 })
      .andWhere("waktu_ditutup", ">=", hari_ini)
      .count("* as total");
    const total = count[0].total;

    // get tagihan

    const rombelIds = await MRombel.query()
      .where({ m_sekolah_id: 33 })
      .andWhere({ dihapus: 0 })
      .ids();

    const anggotaRombel = await MAnggotaRombel.query()
      .where({ m_user_id: 2818221 })
      .andWhere({ dihapus: 0 })
      .whereIn("m_rombel_id", rombelIds)
      .pluck("m_rombel_id");

    let jadwalUjian;

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
        builder.where({ m_user_id: 2818221 }).where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .whereIn("m_rombel_id", anggotaRombel)
      .orderBy("created_at", "desc")
      .fetch();

    let ujian;

    ujian = jadwalUjian
      .toJSON()
      .filter((d) => d.jadwalUjian !== null && d.jadwalUjian.ujian);

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
        // pembayaran: pembayaran.toJSON().filter((item) => {
        //   if (!item.rombelPembayaran.pembayaran) {
        //     return false;
        //   }
        //   if (
        //     item.ditangguhkan &&
        //     moment(item.ditangguhkan).toDate() > moment().toDate()
        //   ) {
        //     return false;
        //   } else {
        //     return true;
        //   }
        // }),
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

  async getAkunTransaksi({ response, request, auth, params: { akun_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const akunTransaksi = await MKeuJurnal.query()
      .with("transaksi")
      .where({ m_keu_akun_id: akun_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ status: 1 })
      .fetch();

    const akun = await MKeuAkun.query().where({ id: akun_id }).first();

    return response.ok({
      akunTransaksi,
      akun,
    });
  }
  async showSiswa({ response, request, auth }) {
    let { whatsapp } = request.get();

    const siswa = await User.query()
      .with("profil", (builder) => {
        builder.select("m_user_id", "nisn", "nis");
      })
      .select("nama", "id", "whatsapp", "email", "role")
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "siswa" })
      .andWhere("whatsapp", whatsapp)
      .first();

    return response.ok(siswa);
  }
}

module.exports = SecondController;

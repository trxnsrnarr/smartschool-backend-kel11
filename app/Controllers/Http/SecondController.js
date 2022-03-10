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

  async getRencanaAktif(sekolah, withTransaksi) {
    let rencana = MRencanaKeuangan.query()
      .where({ m_sekolah_id: sekolah.id })
      .where("tanggal_akhir", ">=", moment().format("YYYY-MM-DD"))
      .where("tanggal_awal", "<=", moment().format("YYYY-MM-DD"));

    if (withTransaksi) {
      rencana.with("transaksi", (builder) => {
        builder.where({ dihapus: 0 }).with("jurnal", (builder) => {
          builder.where({ dihapus: 0 }).with("akun", (builder) => {
            builder.select("id", "nama");
          });
        });
      });
    }

    rencana = await rencana.first();
    return rencana;
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

    // const { tingkat, hari = 1 } = request.get();

    const mataPelajaran = await MMataPelajaran.query()
      .with("user", (builder) => {
        builder.select("id", "nama").where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .ids();

    const rombelIds = await MRombel.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
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
      .andWhere({ m_ta_id: ta.id })
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
    }

    return { rombel, totalTingkat, tingkat };
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
      page = 1,
      search_nama,
      tingkat,
      pembayaran_id,
      rombel_id,
      jenis,
    } = request.get();

    let rombelIds = MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
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
                builder.select("id", "jenis", "nominal", "tipe_ujian", "nama");
              });
          });
      });
    if (search_nama) {
      tunggakan.where("nama", "like", `%${search_nama}%`);
    }
    tunggakan = await tunggakan.paginate(page, 20);

    return {
      pembayaran,
      jenisPembayaran,
      tingkatRombel,
      tunggakan,
    };
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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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
    } = request.get();

    let rombelIds = MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
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
                builder.select("id", "jenis", "nominal", "tipe_ujian", "nama");
              });
          });
      })
      .whereIn("id", siswaIds)
      .fetch();

    // return {
    //   pembayaran,
    //   jenisPembayaran,
    //   tingkatRombel,
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
          total: `Rp${d.pembayaran.reduce((a, b) => {
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
    const akun = await MKeuAkun.query()
      .with("rek")
      .with("jurnal", (builder) => {
        builder
          .select("id", "m_keu_transaksi_id", "m_keu_akun_id")
          .with("transaksi", (builder) => {
            builder.select("id", "nama");
          })
          .where({ dihapus: 0 });
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();
    const rekening = await MRekSekolah.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    return response.ok({
      keuangan,
      rekening,
      akun,
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
    const akun = await MKeuAkun.query()
      .with("rek")
      .with("rencanaJurnal", (builder) => {
        builder.whereIn("id", jurnalIds);
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();
    const rekening = await MRekSekolah.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    return response.ok({
      keuangan,
      rekening,
      akun,
    });
  }

  async putAkunKeuangan({ response, request, auth }) {
    const user = await auth.getUser();

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

    let { nama, kode, bank, norek, saldo, rek, struktur } = request.post();

    const rules = {
      nama: "required",
      kode: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "kode.required": "Kode harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const akun = await MKeuAkun.create({
      m_sekolah_id: sekolah.id,
      nama,
      kode,
      dihapus: 0,
    });

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

    let { nama, kode, bank, norek, saldo, rek, struktur } = request.post();

    const rules = {
      nama: "required",
      kode: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "kode.required": "Kode harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const akun = await MKeuAkun.query().where({ id: keu_akun_id }).first();
    let update;

    const check = await MRekSekolah.query()
      .where({ m_keu_akun_id: akun.id })
      .first();
    if (rek) {
      if (check) {
        await MRekSekolah.query().where({ id: check.id }).update({
          bank,
          norek,
          saldo,
          jenis: nama,
          dihapus: 0,
          m_keu_akun_id: akun.id,
        });
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
        await MHistoriAktivitas.create({
          jenis: "Ubah Akun",
          m_user_id: user.id,
          awal: `Terhubung dengan Akun Rekening? : Tidak menjadi `,
          akhir: `"Ya"`,
          bawah: `${akun.nama}`,
          m_sekolah_id: sekolah.id,
          tipe: "Realisasi",
        });
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
      if (check) {
        await MRekSekolah.query().where({ id: check.id }).update({
          dihapus: 1,
        });
      }
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

    update = await MKeuAkun.query().where({ id: keu_akun_id }).update({
      nama,
      kode,
      dihapus: 0,
      m_rek_sekolah_id: null,
    });
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

    const {
      m_jadwal_mengajar_id,
      absen,
      hari_ini,
      waktu_saat_ini,
      mulai: waktu_mulai,
      selesai: waktu_selesai,
    } = request.get();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel")
      .with("mataPelajaran")
      .where({ id: m_jadwal_mengajar_id })
      .first();

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
        .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
        .andWhere({
          m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id,
        })
        .orWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .ids();

      const timelineId2 = await MTimeline.query()
        .whereNotNull("m_mata_pelajaran_id")
        .andWhere({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
        .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
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
        .andWhere("m_rombel_id", jadwalMengajar.toJSON().rombel.id)
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
        .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
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
        .andWhere({
          m_mata_pelajaran_id: jadwalMengajar.toJSON().mataPelajaran.id,
        })
        .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
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

    const { page, search, dari_tanggal, sampai_tanggal, tipe_akun } =
      request.get();

    let transaksiIds;
    if (tipe_akun) {
      transaksiIds = await MKeuJurnal.query()
        .where({ m_keu_akun_id: tipe_akun })
        .pluck("m_keu_transaksi_id");
    }

    let transaksi = MKeuTransaksi.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 }).with("akun", (builder) => {
          builder.select("nama", "id");
        });
      })
      .with("rencana", (builder) => {
        builder.with("jurnal", (builder) => {
          builder.where({ dihapus: 0 }).with("akun", (builder) => {
            builder.select("id", "nama");
          });
        });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 });

    if (transaksiIds) {
      transaksi.whereIn("id", transaksiIds);
    }
    if (search) {
      transaksi.where("nama", "like", `%${search}%`);
    }
    if (dari_tanggal && sampai_tanggal) {
      transaksi.whereBetween("tanggal", [dari_tanggal, sampai_tanggal]);
    }

    transaksi = await transaksi.orderBy("tanggal", "desc").paginate(page, 25);

    const akun = await MKeuAkun.query()
      .with("rek")
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

    return response.ok({
      transaksi,
      akun,
      keuangan,
      rencana,
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
    } = request.post();

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
      await MHistoriAktivitas.create({
        jenis: "Proses Inventaris",
        m_user_id: user.id,
        awal: `Verifikasi Diterima : `,
        akhir: `"${barang.nama}"`,
        bawah: `Aset Tertunda`,
        m_sekolah_id: sekolah.id,
        tipe: "Realisasi",
      });
    }

    await Promise.all(
      jurnal.map(async (d) => {
        await MKeuJurnal.create({
          jenis: d.jenis,
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
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
    } = request.post();

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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    const transaksi = await MKeuTransaksi.query()
      .with("jurnal", (builder) => {
        builder.with("akun").where({ dihapus: 0 });
      })
      .withCount("jurnal as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereBetween("tanggal", [`${tanggal_awal}`, `${tanggal_akhir}`])
      .fetch();

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
    let awal = 0;
    let nilaiDebit = 0;
    let nilaiKredit = 0;

    await Promise.all(
      transaksi.toJSON().map(async (d, idx) => {
        // add column headers
        worksheet.getRow(5).values = [
          "Tanggal",
          "Nama Akun",
          "Debit",
          "Kredit",
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
                akun: e.akun ? e.akun.nama : "-",
                debit: `${(e ? e.saldo : "0").toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}`,
              });

              nilaiDebit = nilaiDebit + e.saldo;
            } else if (e.jenis == "kredit") {
              let row = worksheet.addRow({
                akun: e.akun ? e.akun.nama : "-",
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
      ref: `B6:D${6 + awal}`,
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
      ref: `A6:A${6 + awal}`,
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

    worksheet.getCell(`B${6 + awal}`).value = `Total`;
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

  async downloadNeraca({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir, data, rencana_id } = request.post();
    // return data;

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

    const awal1 = moment(tanggal_awal).format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).format("DD MMMM YYYY ");

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
              nama: `${d ? d.nama : "-"}`,
              rpRencana1: `${d ? d.total_rencana : ""}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              ),
              rpRealisasi1: `${d ? d.total : ""}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              ),
            });
            worksheet.getCell(`B${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            worksheet.getCell(`D${(idx + 1) * 1 + 5}`).font = {
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
                ref: `D${(idx + 1) * 1 + 5}`,
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
                `B${(idx + 1) * 1 + 5}:D${(idx + 1) * 1 + 5}`
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
                ref: `D${(idx + 1) * 1 + 5}`,
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
              rpRencana1: `${d ? d.total_rencana : ""}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              ),
              rpRealisasi1: `${d ? d.total : ""}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              ),
            });
            worksheet.getCell(`B${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            worksheet.getCell(`D${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            if (d.total) {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 5}:C${(idx + 1) * 1 + 5}`
              );
            } else {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 5}:D${(idx + 1) * 1 + 5}`
              );
            }
          } else if (d.level == 3) {
            let row = worksheet.addRow({
              no: d ? d.kode : "",
              nama: d ? d.nama : "-",
              rpRencana: `${d ? d.total_rencana : ""}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              ),
              rpRealisasi: `${d ? d.total : ""}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              ),
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
            ref: `A${(idx + 1) * 1 + 5}:D${(idx + 1) * 1 + 5}`,
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
              nama: `${d ? d.nama : "-"}`,
              rp1: `${d ? d.total : ""}`.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
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
              rp1: `${d ? d.total : ""}`.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
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
              rp: `${d ? d.total : ""}`.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
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
        ref: "A4:D5",
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

      worksheet.getCell("A2").value = `NERACA - RENCANA ${rencana.id}`;
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
    worksheet.getColumn("C").width = 23;
    worksheet.getColumn("D").width = 28;
    worksheet.getColumn("E").width = 28;
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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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
  //     moment().format("YYYY-MM-DD ") + new Date().getTime();

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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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
              rpRencana1: `${d ? d.total_rencana : ""}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              ),
              rpRealisasi1: `${d ? d.total : ""}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              ),
            });
            worksheet.getCell(`B${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            worksheet.getCell(`D${(idx + 1) * 1 + 5}`).font = {
              bold: true,
            };
            if (d.total) {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 5}:C${(idx + 1) * 1 + 5}`
              );
            } else {
              worksheet.mergeCells(
                `B${(idx + 1) * 1 + 5}:D${(idx + 1) * 1 + 5}`
              );
            }
          } else if (d.level == 2) {
            let row = worksheet.addRow({
              no: d ? d.kode : "",
              nama: d ? d.nama : "-",
              rpRencana: `${d ? d.total_rencana : ""}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              ),
              rpRealisasi: `${d ? d.total : ""}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              ),
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
            ref: `A${(idx + 1) * 1 + 5}:D${(idx + 1) * 1 + 5}`,
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
              rp1: `${d ? d.total : ""}`.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
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
              rp: `${d ? d.total : ""}`.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
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
        ref: "A4:D5",
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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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
    const rencana = await this.getRencanaAktif(sekolah);

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let transaksiIds, rencanaTransaksiIds;

    rencanaTransaksiIds = MRencanaTransaksi.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ m_rencana_keuangan_id: rencana.id })
      .where({ dihapus: 0 });

    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .ids();
      rencanaTransaksiIds.whereBetween("tanggal", [
        moment(tanggal_awal).startOf("month").format("YYYY-MM-DD HH:mm:ss"),
        moment(tanggal_akhir).endOf("month").format("YYYY-MM-DD HH:mm:ss"),
      ]);
    }

    rencanaTransaksiIds = await rencanaTransaksiIds.ids();

    const akun = await MKeuAkun.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 });
        if (transaksiIds) {
          builder.whereIn("m_keu_transaksi_id", transaksiIds);
        }
      })
      .with("rencanaJurnal", (builder) => {
        builder.where({ dihapus: 0 });
        if (rencanaTransaksiIds) {
          builder.whereIn("m_rencana_transaksi_id", rencanaTransaksiIds);
        }
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    let kategori;

    kategori = MKeuKategoriNeraca.query()
      .with("akunNeraca", (builder) => {
        builder
          .with("akun")
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

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

    return response.ok({
      kategori,
      akun,
      keuangan,
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

    let { m_keu_kategori_neraca_id, m_keu_akun_id, urutan } = request.post();

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

    let { m_keu_akun_id, urutan } = request.post();

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

    const rencana = await this.getRencanaAktif(sekolah);

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let transaksiIds, rencanaTransaksiIds;

    rencanaTransaksiIds = MRencanaTransaksi.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ m_rencana_keuangan_id: rencana.id })
      .where({ dihapus: 0 });

    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .ids();
      rencanaTransaksiIds.whereBetween("tanggal", [
        moment(tanggal_awal).startOf("month").format("YYYY-MM-DD HH:mm:ss"),
        moment(tanggal_akhir).endOf("month").format("YYYY-MM-DD HH:mm:ss"),
      ]);
    }

    rencanaTransaksiIds = await rencanaTransaksiIds.ids();

    const akun = await MKeuAkun.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 });
        if (transaksiIds) {
          builder.whereIn("m_keu_transaksi_id", transaksiIds);
        }
      })
      .with("rencanaJurnal", (builder) => {
        builder.where({ dihapus: 0 });
        if (rencanaTransaksiIds) {
          builder.whereIn("m_rencana_transaksi_id", rencanaTransaksiIds);
        }
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    let kategori;

    kategori = MKeuKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun")
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
      .fetch();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

    return response.ok({
      kategori,
      rumus,
      akun,
      keuangan,
    });
  }

  async postKategoriLabaRugi({ response, request, auth }) {
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

    const kategori = await MKeuKategoriLabaRugi.create({
      nama,
      warna,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
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

    const kategoriLaba = await MKeuKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .first();
    const kategori = await MKeuKategoriLabaRugi.query()
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

    let { m_keu_kategori_laba_rugi_id, m_keu_akun_id, urutan } = request.post();

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

    let { m_keu_akun_id, urutan } = request.post();

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

    const rencana = await this.getRencanaAktif(sekolah);

    let {
      tanggal_awal1,
      tanggal_awal2,
      tanggal_akhir1,
      tanggal_akhir2,
      search,
    } = request.get();

    let transaksiIds1,
      transaksiIds2,
      rencanaTransaksiIds1,
      rencanaTransaksiIds2;
    if (tanggal_awal1 && tanggal_awal2 && tanggal_akhir1 && tanggal_akhir2) {
      transaksiIds1 = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal1, tanggal_akhir1])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .ids();
      transaksiIds2 = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal2, tanggal_akhir2])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .ids();
      rencanaTransaksiIds1 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [
          moment(tanggal_awal1).startOf("month").format("YYYY-MM-DD HH:mm:ss"),
          moment(tanggal_akhir1).endOf("month").format("YYYY-MM-DD HH:mm:ss"),
        ])
        .where({ m_sekolah_id: sekolah.id })
        .where({ m_rencana_keuangan_id: rencana.id })
        .where({ dihapus: 0 })
        .ids();
      rencanaTransaksiIds2 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [
          moment(tanggal_awal2).startOf("month").format("YYYY-MM-DD HH:mm:ss"),
          moment(tanggal_akhir2).endOf("month").format("YYYY-MM-DD HH:mm:ss"),
        ])
        .where({ m_sekolah_id: sekolah.id })
        .where({ m_rencana_keuangan_id: rencana.id })
        .where({ dihapus: 0 })
        .ids();
    } else {
      return response.notFound({
        message: "harap memasukan tanggal periode 1 dan 2",
      });
    }

    const akun = await MKeuAkun.query()
      .with("jurnal1", (builder) => {
        builder
          .whereIn("m_keu_transaksi_id", transaksiIds1)
          .where({ dihapus: 0 });
      })
      .with("jurnal2", (builder) => {
        builder
          .whereIn("m_keu_transaksi_id", transaksiIds2)
          .where({ dihapus: 0 });
      })
      .with("rencanaJurnal1", (builder) => {
        builder
          .whereIn("m_rencana_transaksi_id", rencanaTransaksiIds1)
          .where({ dihapus: 0 });
      })
      .with("rencanaJurnal2", (builder) => {
        builder
          .whereIn("m_rencana_transaksi_id", rencanaTransaksiIds2)
          .where({ dihapus: 0 });
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
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

    const rumuslabaRugi = await MRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      // .limit(1)
      .first();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

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

    return response.ok({
      kategori,
      rumus: {
        rumusKenaikan,
        rumusAwal,
        rumusAkhir,
      },
      tipeAkun,
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

    let { nama, m_keu_akun_id } = request.post();

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

    let { nama, m_keu_akun_id } = request.post();

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
      let rumusFix = ``;

      for (let i = 0; i < rumus12.length; i++) {
        const d = rumus12[i];
        if (d.id) {
          kategoriAkun = await MKeuAkun.query().where({ id: d.id }).first();
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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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
      let data = [];

      data[0] = await MKeuAkun.create({
        nama: "HARTA",
        kode: 10000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[1] = await MKeuAkun.create({
        nama: "AKTIVA LANCAR",
        kode: 11000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[2] = await MKeuAkun.create({
        nama: "KAS & BANK",
        kode: 11100,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[3] = await MKeuAkun.create({
        nama: "KAS",
        kode: 11110,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[4] = await MKeuAkun.create({
        nama: "DANA BOS",
        kode: 11120,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      await MRekSekolah.create({
        jenis: data[4].nama,
        bank: "DKI",
        norek: 12345,
        nama: data[4].nama,
        saldo: 0,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        pemasukan: 0,
        pengeluaran: 0,
        m_keu_akun_id: data[4].id,
      });
      data[5] = await MKeuAkun.create({
        nama: "DANA BOP",
        kode: 11130,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      await MRekSekolah.create({
        jenis: data[5].nama,
        bank: "DKI",
        norek: 12345,
        nama: data[5].nama,
        saldo: 0,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        pemasukan: 0,
        pengeluaran: 0,
        m_keu_akun_id: data[5].id,
      });
      data[6] = await MKeuAkun.create({
        nama: "DANA BPMU",
        kode: 11140,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      await MRekSekolah.create({
        jenis: data[6].nama,
        bank: "DKI",
        norek: 12345,
        nama: data[6].nama,
        saldo: 0,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        pemasukan: 0,
        pengeluaran: 0,
        m_keu_akun_id: data[6].id,
      });
      data[7] = await MKeuAkun.create({
        nama: "DANA YAYASAN",
        kode: 11150,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });

      await MRekSekolah.create({
        jenis: data[7].nama,
        bank: "DKI",
        norek: 12345,
        nama: data[7].nama,
        saldo: 0,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        pemasukan: 0,
        pengeluaran: 0,
        m_keu_akun_id: data[7].id,
      });
      data[8] = await MKeuAkun.create({
        nama: "PIUTANG",
        kode: 11200,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[9] = await MKeuAkun.create({
        nama: "PIUTANG PENDAPATAN JASA",
        kode: 11210,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[10] = await MKeuAkun.create({
        nama: "PIUTANG KARYAWAN",
        kode: 11220,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[11] = await MKeuAkun.create({
        nama: "PERLENGKAPAN SEKOLAH",
        kode: 11300,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[12] = await MKeuAkun.create({
        nama: "PEMBAYARAN DIMUKA",
        kode: 11400,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[13] = await MKeuAkun.create({
        nama: "PENDAPATAN DITERIMA DIMUKA",
        kode: 11500,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[14] = await MKeuAkun.create({
        nama: "AKTIVA TETAP",
        kode: 12000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[15] = await MKeuAkun.create({
        nama: "INVENTARIS",
        kode: 12100,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[16] = await MKeuAkun.create({
        nama: "LEMARI",
        kode: 12110,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[17] = await MKeuAkun.create({
        nama: "MEJA",
        kode: 12120,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[18] = await MKeuAkun.create({
        nama: "KURSI",
        kode: 12130,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[19] = await MKeuAkun.create({
        nama: "KENDARAAN",
        kode: 12200,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[20] = await MKeuAkun.create({
        nama: "GEDUNG SEKOLAH",
        kode: 12300,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      //HUTANG
      data[21] = await MKeuAkun.create({
        nama: "UTANG",
        kode: 20000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[22] = await MKeuAkun.create({
        nama: "UTANG LANCAR",
        kode: 21000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[23] = await MKeuAkun.create({
        nama: "UTANG USAHA",
        kode: 21100,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[24] = await MKeuAkun.create({
        nama: "UTANG PAJAK",
        kode: 21200,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[25] = await MKeuAkun.create({
        nama: "UTANG BANK JATUH TEMPO",
        kode: 21300,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[26] = await MKeuAkun.create({
        nama: "UTANG JANGKA PENDEK LAINNYA",
        kode: 21400,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[27] = await MKeuAkun.create({
        nama: "UTANG JANGKA PANJANG",
        kode: 22000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[28] = await MKeuAkun.create({
        nama: "UTANG BANK",
        kode: 22100,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[29] = await MKeuAkun.create({
        nama: "MODAL SAHAM & LABA DITAHAN",
        kode: 30000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[30] = await MKeuAkun.create({
        nama: "MODAL SAHAM",
        kode: 31000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[31] = await MKeuAkun.create({
        nama: "LABA DITAHAN",
        kode: 32000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[32] = await MKeuAkun.create({
        nama: "PENDAPATAN",
        kode: 40000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[33] = await MKeuAkun.create({
        nama: "PENDAPATAN JASA",
        kode: 41000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[34] = await MKeuAkun.create({
        nama: "PENDAPATAN LAINNYA",
        kode: 42000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Kredit",
      });
      data[35] = await MKeuAkun.create({
        nama: "BEBAN",
        kode: 50000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[36] = await MKeuAkun.create({
        nama: "BEBAN GAJI",
        kode: 51000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[37] = await MKeuAkun.create({
        nama: "BEBAN LISTRIK, AIR, TELEPON",
        kode: 52000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[38] = await MKeuAkun.create({
        nama: "BEBAN INTERNET",
        kode: 53000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[39] = await MKeuAkun.create({
        nama: "BEBAN PERLENGKAPAN KANTOR",
        kode: 54000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[40] = await MKeuAkun.create({
        nama: "BEBAN SEWA",
        kode: 55000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[41] = await MKeuAkun.create({
        nama: "BEBAN PERAWATAN PERALATAN",
        kode: 56000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[42] = await MKeuAkun.create({
        nama: "BEBAN ASURANSI",
        kode: 57000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[43] = await MKeuAkun.create({
        nama: "BEBAN LAINNYA",
        kode: 58000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[44] = await MKeuAkun.create({
        nama: "BEBAN PENYUSUTAN PELARATAN KANTOR",
        kode: 58100,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[45] = await MKeuAkun.create({
        nama: "BEBAN PENYUSUTAN PERALATAN BENGKEL",
        kode: 58200,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[46] = await MKeuAkun.create({
        nama: "BEBAN PENYUSUTAN KENDARAAN",
        kode: 58300,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[47] = await MKeuAkun.create({
        nama: "BEBAN PENYUSUTAN GEDUNG",
        kode: 58400,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[48] = await MKeuAkun.create({
        nama: "LABA BERSIH",
        kode: 59000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[49] = await MKeuAkun.create({
        nama: "PAJAK",
        kode: 80000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[50] = await MKeuAkun.create({
        nama: "DIVIDEN",
        kode: 90000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[51] = await MKeuAkun.create({
        nama: "DIVIDEN",
        kode: 91000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });
      data[52] = await MKeuAkun.create({
        nama: "UTANG DIVIDEN",
        kode: 92000,
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        saldo_normal: "Debit",
      });

      const template = [
        {
          id: data[0].id,
          text: data[0].nama,
          children: [
            {
              id: data[1].id,
              text: data[1].nama,
              children: [
                {
                  id: data[2].id,
                  text: data[2].nama,
                  children: [
                    {
                      id: data[3].id,
                      text: data[3].nama,
                    },
                    {
                      id: data[4].id,
                      text: data[4].nama,
                    },
                    {
                      id: data[5].id,
                      text: data[5].nama,
                    },
                    {
                      id: data[6].id,
                      text: data[6].nama,
                    },
                    {
                      id: data[7].id,
                      text: data[7].nama,
                    },
                  ],
                },
                {
                  id: data[8].id,
                  text: data[8].nama,
                  children: [
                    {
                      id: data[9].id,
                      text: data[9].nama,
                    },
                    {
                      id: data[10].id,
                      text: data[10].nama,
                    },
                  ],
                },
                {
                  id: data[11].id,
                  text: data[11].nama,
                },
                {
                  id: data[12].id,
                  text: data[12].nama,
                },
                {
                  id: data[13].id,
                  text: data[13].nama,
                },
              ],
            },
            {
              id: data[14].id,
              text: data[14].nama,
              children: [
                {
                  id: data[15].id,
                  text: data[15].nama,
                  children: [
                    {
                      id: data[16].id,
                      text: data[16].nama,
                    },
                    {
                      id: data[17].id,
                      text: data[17].nama,
                    },
                    {
                      id: data[18].id,
                      text: data[18].nama,
                    },
                  ],
                },
                {
                  id: data[19].id,
                  text: data[19].nama,
                },
                {
                  id: data[20].id,
                  text: data[20].nama,
                },
              ],
            },
          ],
        },
        {
          id: data[21].id,
          text: data[21].nama,
          children: [
            {
              id: data[22].id,
              text: data[22].nama,
              children: [
                {
                  id: data[23].id,
                  text: data[23].nama,
                },
                {
                  id: data[24].id,
                  text: data[24].nama,
                },
                {
                  id: data[25].id,
                  text: data[25].nama,
                },
                { id: data[26].id, text: data[26].nama },
              ],
            },
            {
              id: data[27].id,
              text: data[27].nama,
              children: [
                {
                  id: data[28].id,
                  text: data[28].nama,
                },
              ],
            },
          ],
        },
        {
          id: data[29].id,
          text: data[29].nama,
          children: [
            {
              id: data[30].id,
              text: data[30].nama,
            },
            {
              id: data[31].id,
              text: data[31].nama,
            },
          ],
        },
        {
          id: data[32].id,
          text: data[32].nama,
          children: [
            {
              id: data[33].id,
              text: data[33].nama,
            },
            {
              id: data[34].id,
              text: data[34].nama,
            },
          ],
        },
        {
          id: data[35].id,
          text: data[35].nama,
          children: [
            {
              id: data[36].id,
              text: data[36].nama,
            },
            {
              id: data[37].id,
              text: data[37].nama,
            },
            {
              id: data[38].id,
              text: data[38].nama,
            },
            {
              id: data[39].id,
              text: data[39].nama,
            },
            {
              id: data[40].id,
              text: data[40].nama,
            },
            {
              id: data[41].id,
              text: data[41].nama,
            },
            {
              id: data[42].id,
              text: data[42].nama,
            },
            {
              id: data[43].id,
              text: data[43].nama,
            },
            {
              id: data[44].id,
              text: data[44].nama,
            },
            {
              id: data[45].id,
              text: data[45].nama,
            },
            {
              id: data[46].id,
              text: data[46].nama,
            },
            {
              id: data[47].id,
              text: data[47].nama,
            },
            {
              id: data[48].id,
              text: data[48].nama,
            },
          ],
        },
        {
          id: data[49].id,
          text: data[49].nama,
        },
        {
          id: data[50].id,
          text: data[50].nama,
          children: [
            {
              id: data[51].id,
              text: data[51].nama,
            },
            {
              id: data[52].id,
              text: data[52].nama,
            },
          ],
        },
      ];

      await MKeuTemplateAkun.create({
        m_sekolah_id: sekolah.id,
        template: JSON.stringify(template),
      });

      return response.ok({
        message: messagePostSuccess,
      });
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

      const DANABOS = semuaAkun.toJSON().find((d) => d.nama == "DANA BOS");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Al.id,
        m_keu_akun_id: DANABOS.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANABOP = semuaAkun.toJSON().find((d) => d.nama == "DANA BOP");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Al.id,
        m_keu_akun_id: DANABOP.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANABPMU = semuaAkun.toJSON().find((d) => d.nama == "DANA BPMU");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Al.id,
        m_keu_akun_id: DANABPMU.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANAYAYASAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "DANA YAYASAN");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Al.id,
        m_keu_akun_id: DANAYAYASAN.id,
        dihapus: 0,
        urutan: 1,
      });

      const At = await MKeuKategoriNeraca.create({
        tipe: "aktiva",
        nama: "AKTIVA TETAP",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const INVENTARIS = semuaAkun.toJSON().find((d) => d.nama == "INVENTARIS");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: At.id,
        m_keu_akun_id: INVENTARIS.id,
        dihapus: 0,
        urutan: 1,
      });

      const KENDARAAN = semuaAkun.toJSON().find((d) => d.nama == "KENDARAAN");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: At.id,
        m_keu_akun_id: KENDARAAN.id,
        dihapus: 0,
        urutan: 1,
      });

      const GEDUNGSEKOLAH = semuaAkun
        .toJSON()
        .find((d) => d.nama == "GEDUNG SEKOLAH");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: At.id,
        m_keu_akun_id: GEDUNGSEKOLAH.id,
        dihapus: 0,
        urutan: 1,
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

      const UTANGPAJAK = semuaAkun
        .toJSON()
        .find((d) => d.nama == "UTANG PAJAK");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: Ul.id,
        m_keu_akun_id: UTANGPAJAK.id,
        dihapus: 0,
        urutan: 1,
      });

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
        .find((d) => d.nama == "UTANG OBLIGASI");
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

      const LABADITAHAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "LABA DITAHAN");
      await TkKategoriAkunNeraca.create({
        m_keu_kategori_neraca_id: E.id,
        m_keu_akun_id: LABADITAHAN.id,
        dihapus: 0,
        urutan: 1,
      });
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
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const PENDAPATANJASA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN JASA");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: pendapatan.id,
        m_keu_akun_id: PENDAPATANJASA.id,
        dihapus: 0,
        urutan: 1,
      });

      const PENDAPATANLAINNYA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN LAINNYA");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: pendapatan.id,
        m_keu_akun_id: PENDAPATANLAINNYA.id,
        dihapus: 0,
        urutan: 1,
      });

      const beban = await MKeuKategoriLabaRugi.create({
        nama: "BEBAN",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const BEBANGAJI = semuaAkun.toJSON().find((d) => d.nama == "BEBAN GAJI");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANGAJI.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEBANLISTRIK = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN LISTRIK, AIR, TELEPON");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANLISTRIK.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEBANPERLENGKAPAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN PERLENGKAPAN KANTOR");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANPERLENGKAPAN.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEBANSEWA = semuaAkun.toJSON().find((d) => d.nama == "BEBAN SEWA");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANSEWA.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEBANPERAWATAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN PERAWATAN PERALATAN");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANPERAWATAN.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEBANASURANSI = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN ASURANSI");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANASURANSI.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEBANLAIN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN LAINNYA");
      await TkKategoriAkunLabaRugi.create({
        m_keu_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANLAIN.id,
        dihapus: 0,
        urutan: 1,
      });

      const rumus = [
        {
          id: pendapatan.id,
        },
        {
          operator: "minus",
        },
        {
          id: beban.id,
        },
      ];
      await MRumusLabaRugi.create({
        nama: "Laba/Rugi",
        rumus: JSON.stringify(rumus),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });
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

      // Aktivitas LabaBersih
      const LabaBersih = await MKeuKategoriTipeAkun.create({
        nama: "Laba Bersih",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });
      const LABABERSIH = semuaAkun
        .toJSON()
        .find((d) => d.nama == "LABA BERSIH");

      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: LabaBersih.id,
        m_keu_akun_id: LABABERSIH.id,
        dihapus: 0,
        urutan: 1,
      });

      await MKeuAktivitasTransaksi.create({
        judul: "Laba Bersih",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_keu_kategori_tipe_akun_id: LabaBersih.id,
        m_keu_kategori_arus_kas_id: operasi.id,
        urutan: 1,
        laba: 1,
      });

      // aktivitas Akun Piutang
      const AkunPiutang = await MKeuKategoriTipeAkun.create({
        nama: "Akun Piutang",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const PIUTANGPENDAPATAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PIUTANG PENDAPATAN JASA");
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
        laba: 1,
      });

      //aktivitas AsetLancar
      const AsetLancar = await MKeuKategoriTipeAkun.create({
        nama: "Aset Lancar",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const KAS = semuaAkun.toJSON().find((d) => d.nama == "KAS");
      const BOS = semuaAkun.toJSON().find((d) => d.nama == "DANA BOS");
      const BOP = semuaAkun.toJSON().find((d) => d.nama == "DANA BOP");
      const BPMU = semuaAkun.toJSON().find((d) => d.nama == "DANA BPMU");
      const YAYASAN = semuaAkun.toJSON().find((d) => d.nama == "DANA YAYASAN");

      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_akun_id: KAS.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_akun_id: BOS.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_akun_id: BOP.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_akun_id: BPMU.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_akun_id: YAYASAN.id,
        dihapus: 0,
        urutan: 1,
      });

      await MKeuAktivitasTransaksi.create({
        judul: "Aset Lancar",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_keu_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_kategori_arus_kas_id: operasi.id,
        urutan: 1,
        laba: 1,
      });

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

      const Penyusutan = await MKeuKategoriTipeAkun.create({
        nama: "Penyusutan & Amortisasi",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      const BEBANPPK = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN PENYUSUTAN PERALATAN KANTOR");
      const BEBANPPB = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN PENYUSUTAN PERALATAN BENGKEL");
      const BEBANPK = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN PENYUSUTAN KENDARAAN");
      const BEBANPG = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN PENYUSUTAN GEDUNG");

      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: Penyusutan.id,
        m_keu_akun_id: BEBANPPK.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: Penyusutan.id,
        m_keu_akun_id: BEBANPPB.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: Penyusutan.id,
        m_keu_akun_id: BEBANPK.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: Penyusutan.id,
        m_keu_akun_id: BEBANPG.id,
        dihapus: 0,
        urutan: 1,
      });

      await MKeuAktivitasTransaksi.create({
        judul: "Penyusutan & Amortisasi",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_keu_kategori_tipe_akun_id: Penyusutan.id,
        m_keu_kategori_arus_kas_id: operasi.id,
        urutan: 1,
        laba: 1,
      });

      // Kategori Investasi
      const Investasi = await MKeuKategoriArusKas.create({
        nama: "Investasi",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      // Aktivitas AsetTetap
      const AsetTetap = await MKeuKategoriTipeAkun.create({
        nama: "Aset Tetap",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });
      const LEMARI = semuaAkun.toJSON().find((d) => d.nama == "LEMARI");
      const MEJA = semuaAkun.toJSON().find((d) => d.nama == "MEJA");
      const KURSI = semuaAkun.toJSON().find((d) => d.nama == "KURSI");
      const KENDARAAN = semuaAkun.toJSON().find((d) => d.nama == "KENDARAAN");
      const GEDUNGSEKOLAH = semuaAkun
        .toJSON()
        .find((d) => d.nama == "GEDUNG SEKOLAH");

      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_akun_id: LEMARI.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_akun_id: MEJA.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_akun_id: KURSI.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_akun_id: KENDARAAN.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkKategoriTipeAkun.create({
        m_keu_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_akun_id: GEDUNGSEKOLAH.id,
        dihapus: 0,
        urutan: 1,
      });

      await MKeuAktivitasTransaksi.create({
        judul: "Aset Tetap",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_keu_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_kategori_arus_kas_id: Investasi.id,
        urutan: 1,
        laba: 1,
      });

      // Kategori Pendanaan
      const Pendanaan = await MKeuKategoriArusKas.create({
        nama: "Pendanaan",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });

      // Aktivitas DIVIDEN
      const Dividen = await MKeuKategoriTipeAkun.create({
        nama: "Dividen",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
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
        laba: 1,
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
      const rumusAwal = [
        {
          id: PENDAPATANJASA.id,
        },
        {
          operator: "plus",
        },
        {
          id: PENDAPATANLAINNYA.id,
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
    }
  }
  async postRaporSikapUAS({ response, request, auth, params: { rombel_id } }) {
    const domain = request.headers().origin;

    const sekolah = await MSekolah.query().where({ id: 578 }).first();

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const anggota = await MAnggotaRombel.query()
      .where({ m_rombel_id: 40507 })
      .pluck("m_user_id");

    // return anggota;
    const userIds = await User.query()
      .whereIn("id", anggota)
      .andWhere({ m_sekolah_id: 578 })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "siswa" })
      .ids();

    const checkSikap = await MSikapSiswa.query()
      .whereIn("m_user_id", userIds)
      .andWhere({ tipe: "uts" })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

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
}

module.exports = SecondController;

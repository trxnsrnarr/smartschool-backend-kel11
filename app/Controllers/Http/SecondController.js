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

class SecondController {
  async getSekolahByDomain(domain) {
    const sekolah = await MSekolah.query()
      .with("informasi")
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
      }
    } else if (check) {
      await MRekSekolah.query().where({ id: check.id }).update({
        dihapus: 1,
      });
    }

    update = await MKeuAkun.query().where({ id: keu_akun_id }).update({
      nama,
      kode,
      dihapus: 0,
      m_rek_sekolah_id: null,
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

  async deleteKeuAkun({ response, request, auth, params: { keu_akun_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

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

    const { page } = request.get();

    const transaksi = await MKeuTransaksi.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 }).with("akun", (builder) => {
          builder.select("nama", "id");
        });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .paginate(page, 25);

    const akun = await MKeuAkun.query()
      .with("rek")
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    return response.ok({
      transaksi,
      akun,
    });
  }

  async postTransaksi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    let { nama, nomor, tanggal, jurnal = [] } = request.post();

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
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

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

    let { nama, nomor, tanggal, jurnal = [] } = request.post();

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
    const editJurnal = jurnal.filter((d) => d.id);
    const editJurnalId = editJurnal.map((d) => d.id);
    const newJurnal = jurnal.filter((d) => !d.id);

    await Promise.all(
      jurnalIds
        .filter((d) => !editJurnalId.includes(d))
        .map(async (d) => {
          await MKeuJurnal.query().where({ id: d }).update({
            dihapus: 1,
          });
        }),
      editJurnal.map(async (d) => {
        await MKeuJurnal.query().where({ id: d.id }).update({
          jenis: d.jenis,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          dihapus: 0,
        });
      }),
      newJurnal.map(async (d) => {
        await MKeuJurnal.create({
          jenis: d.jenis,
          m_keu_transaksi_id: transaksi.id,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          dihapus: 0,
        });
      })
    );

    let update = await MKeuTransaksi.query()
      .where({ id: transaksi_id })
      .update({
        nama,
        nomor,
        tanggal,
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

    const { tanggal_awal, tanggal_akhir } = request.post();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    const template = await MKeuTemplateAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const isi = JSON.parse(template.template);

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Neraca`);
    worksheet.mergeCells("A1:D1");
    worksheet.mergeCells("A2:D2");
    worksheet.mergeCells("A3:D3");
    worksheet.getCell(
      "A4"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
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

    await Promise.all(
      transaksi.toJSON().map(async (d, idx) => {
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
        // add column headers
        worksheet.getRow(5).values = [
          "Tanggal",
          "Nama Akun",
          "Debet",
          "Kredit",
        ];
        worksheet.columns = [
          { key: "Tanggal" },
          { key: "akun" },
          { key: "debet" },
          { key: "kredit" },
        ];

        // Add row using key mapping to columns
        let row = worksheet.addRow({
          Tanggal: `${idx + 1}`,
          akun: d ? d.akun : "-",
          debet: d ? d.debet : "-",
          kredit: d ? d.kredit : "-",
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

  async getNeraca({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let kategori;

    kategori = MKeuKategoriNeraca.query()
      .with("akunNeraca", (builder) => {
        builder
          .with("akun", (builder) => {
            builder
              .with("jurnal", (builder) => {
                builder.where({ dihapus: 0 });
                if (tanggal_awal && tanggal_akhir) {
                  builder.whereBetween("update_at", [
                    `${tanggal_awal}`,
                    `${tanggal_akhir}`,
                  ]);
                }
              })
              .where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    return response.ok({
      kategori,
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

    let { nama } = request.post();

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

    const kategori = await MKeuKategoriNeraca.query()
      .where({ id: kategori_id })
      .update({
        nama,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
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

    let { m_keu_akun_id } = request.post();

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

    const neraca = await TkKategoriAkunNeraca.query()
      .where({ id: neraca_id })
      .update({
        m_keu_akun_id,
      });

    if (!neraca) {
      return response.notFound({
        message: messageNotFound,
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

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let kategori;

    kategori = await MKeuKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder
              .with("jurnal", (builder) => {
                builder.where({ dihapus: 0 });
                if (tanggal_awal && tanggal_akhir) {
                  builder.whereBetween("update_at", [
                    `${tanggal_awal}`,
                    `${tanggal_akhir}`,
                  ]);
                }
              })
              .where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = kategori.fetch();

    const rumus = await MRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      kategori,
      rumus,
    });
  }

  async postKategoriLabaRugi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama } = request.post();

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
      dihapus: 0,
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

    let { nama } = request.post();

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

    const kategori = await MKeuKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .update({
        nama,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
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

    let { m_keu_kategori_labarugi_id, m_keu_akun_id, urutan } = request.post();

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
      m_keu_kategori_labarugi_id,
      urutan,
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

    let { m_keu_akun_id } = request.post();

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

    const labarugi = await TkKategoriAkunLabaRugi.query()
      .where({ id: labarugi_id })
      .update({
        m_keu_akun_id,
      });

    if (!labarugi) {
      return response.notFound({
        message: messageNotFound,
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

    const rumus1 = await MRumusLabaRugi.create({
      rumus,
      dihapus: 0,
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

    const rumus1 = await MRumusLabaRugi.query().where({ id: rumus_id }).update({
      nama,
    });

    if (!rumus1) {
      return response.notFound({
        message: messageNotFound,
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

    return response.ok({
      message: messageDeleteSuccess,
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
}

module.exports = SecondController;

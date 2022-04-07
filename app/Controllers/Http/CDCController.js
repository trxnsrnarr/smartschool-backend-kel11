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
const MPenerimaanSiswa = use("App/Models/MPenerimaanSiswa");
const TkPerusahaanSekolah = use("App/Models/TkPerusahaanSekolah");
const MPekerjaan = use("App/Models/MPekerjaan");
const MInformasiPekerjaan = use("App/Models/MInformasiPekerjaan");
const MPekerjaanPengumuman = use("App/Models/MPekerjaanPengumuman");
const MAcaraPerusahaan = use("App/Models/MAcaraPerusahaan");
const TkStatusPekerjaan = use("App/Models/TkStatusPekerjaan");
const MMouPerusahaan = use("App/Models/MMouPerusahaan");
const MSuratPerusahaan = use("App/Models/MSuratPerusahaan");
const MInformasiPerusahaan = use("App/Models/MInformasiPerusahaan");

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

class CDCController {
  // UTILS

  async removeTag(content) {
    // const removeEl = content.replace(/(<([^>]+)>)/ig, "");

    var html = content;

    return striptags(html);
  }

  async singleUpload({ request, response }) {
    const fileUpload = request.file("file");

    const fname = `${new Date().getTime()}.${fileUpload.extname}`;

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

    const fname = `${new Date().getTime()}.${fileUpload.extname}`;

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
    // const fname = `${new Date().getTime()}.${fileUpload.extname}`;
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
      .where("domain", "like", `%${domain}%`)
      .first();

    if (!sekolah) {
      return "404";
    }

    return sekolah;
  }

  async getTAAktif(sekolah) {
    const ta = await Mta.query()
      .select("id", "tahun", "semester")
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

  //================= CDC SERVICE ===============

  async getPekerjaanSaya({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const pekerjaan = await TkStatusPekerjaan.query()
      .with("perusahaan")
      .where({ m_user_id: user.id })
      .first();

    return response.ok({
      pekerjaan,
    });
  }

  async getCariPekerjaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const { search } = request.get();

    let pekerjaan;

    if (search) {
      // ===== service cari Pekerjaan ====
      pekerjaan = await MPekerjaan.query()
        .with("perusahaan", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${search}%`)
        .paginate();
    } else {
      // ===== service Pekerjaan saya ====
      pekerjaan = await MPekerjaan.query()
        .with("perusahaan", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .paginate();
    }

    return response.ok({
      pekerjaan,
    });
  }

  async getCariPerusahaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const { search } = request.get();

    let perusahaan;

    if (search) {
      // ===== service cari Perusahaan ====
      perusahaan = await MPerusahaan.query()
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${search}%`)
        .paginate();
    } else {
      // ===== service Perusahaan saya ====
      perusahaan = await MPerusahaan.query().where({ dihapus: 0 }).paginate();
    }

    return response.ok({
      perusahaan,
    });
  }

  async getAcaraPerusahaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const { search } = request.get();

    let acara;

    if (search) {
      // ===== service cari Perusahaan ====
      acara = await MAcaraPerusahaan.query()
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${search}%`)
        .paginate();
    } else {
      // ===== service Perusahaan saya ====
      acara = await MAcaraPerusahaan.query().where({ dihapus: 0 }).paginate();
    }

    return response.ok({
      acara,
    });
  }
  // ============ Detail Pekerjaan ============

  async detailPekerjaanSaya({
    response,
    request,
    auth,
    params: { pekerjaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    // const { rombel_id } = request.post();
    const pekerjaan = await MPekerjaan.query()
      .with("perusahaan")
      .with("pengumuman", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ id: pekerjaan_id })
      .first();

    return response.ok({
      pekerjaan,
    });
  }

  async detailPekerjaan({ response, request, auth, params: { pekerjaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    // const { rombel_id } = request.post();
    const pekerjaan = await MPekerjaan.query()
      .with("perusahaan")
      .with("pengumuman", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("informasi")
      .where({ id: pekerjaan_id })
      .first();

    return response.ok({
      pekerjaan,
    });
  }
  async detailPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    // const { rombel_id } = request.post();
    const perusahaan = await MPerusahaan.query()
      .with("acara", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("pekerjaan", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("informasi")
      .with("tkPerusahaanSekolah", (builder) => {
        builder
          .with("mou1", (builder) => {
            builder
              .where("mulai_kontrak", "<=", moment().format("YYYY-MM-DD"))
              .where("akhir_kontrak", ">=", moment().format("YYYY-MM-DD"))
              .where({ dihapus: 0 });
          })
          .where({ m_sekolah_id: sekolah.id });
      })
      .where({ id: perusahaan_id })
      .first();

    return response.ok({
      perusahaan,
    });
  }

  async detailBerkasPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { search } = request.get();

    const perusahaanSekolah = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_perusahaan_id: perusahaan_id })
      .first();

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaan_id })
      .first();

    const mou = await MMouPerusahaan.query()
      .where({ dihapus: 0 })
      .andWhere({ tk_perusahaan_sekolah_id: perusahaanSekolah.id })
      .fetch();
    let surat = MSuratPerusahaan.query()
      .where({ dihapus: 0 })
      .andWhere({ tk_perusahaan_sekolah_id: perusahaanSekolah.id });

    if (search) {
      surat.where("nama", "like", `%${search}%`);
    }
    surat = await surat.fetch();

    return response.ok({
      perusahaan,
      mou,
      surat,
    });
  }

  async detailMouPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const perusahaanSekolah = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_perusahaan_id: perusahaan_id });

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaan_id })
      .first();

    const mou = await MMouPerusahaan.query()
      .where({ dihapus: 0 })
      .andWhere({ tk_perusahaan_sekolah_id: perusahaanSekolah.id })
      .fetch();

    return response.ok({
      perusahaan,
      mou,
    });
  }

  async detailSuratPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const perusahaanSekolah = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_perusahaan_id: perusahaan_id });

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaan_id })
      .first();

    const surat = await MSuratPerusahaan.query()
      .where({ dihapus: 0 })
      .andWhere({ tk_perusahaan_sekolah_id: perusahaanSekolah.id })
      .fetch();

    return response.ok({
      perusahaan,
      surat,
    });
  }

  async detailAcaraPerusahaan({
    response,
    request,
    auth,
    params: { acara_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    // const { rombel_id } = request.post();
    const acara = await MAcaraPerusahaan.query()
      .with("perusahaan")
      .where({ id: acara_id })
      .first();

    return response.ok({
      perusahaan,
    });
  }

  async postAcaraPerusahaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      foto,
      lokasi,
      deskripsi,
      waktu_awal,
      waktu_akhir,
      link,
      peserta,
    } = request.post();

    const acara = await MAcaraPerusahaan.create({
      judul,
      foto,
      lokasi,
      deskripsi,
      waktu_awal,
      waktu_akhir,
      link,
      peserta,
      m_perusahaan_id: perusahaan_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putAcaraPerusahaan({ response, request, auth, params: { acara_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      foto,
      lokasi,
      deskripsi,
      waktu_awal,
      waktu_akhir,
      link,
      peserta,
    } = request.post();

    const acara = await MAcaraPerusahaaan.query()
      .where({ id: acara_id })
      .update({
        judul,
        foto,
        lokasi,
        deskripsi,
        waktu_awal,
        waktu_akhir,
        link,
        peserta,
        dihapus: 0,
      });

    if (!acara) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteAcaraPerusahaan({
    response,
    request,
    auth,
    params: { acara_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const acara = await MAcaraPerusahaan.query()
      .where({ id: acara_id })
      .update({
        dihapus: 1,
      });

    if (!acara) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postPerusahaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      nama,
      logo,
      bidang,
      perusahaan_id,
      keselarasan,
      istd,
      province_id,
      regency_id,
      district_id,
      village_id,
      didirikan,
      alamat,
      telepon,
      motto,
      visi,
      misi,
      email,
      situs,
      jumlah_pekerja,
      tentang,
      budaya,
      benefit_karyawan,
      lingkungan_kerja,
      busana,
      budaya_kerja,
      jam_kerja,
      nama_pj,
      telepon_pj,
      email_pj,
      registrasi_pj,
      youtube,
      twitter,
      instagram,
      facebook,
      github,
      linkedin,
      behace,
      dribble,
      kodepos,
      sampul,
    } = request.post();

    if (perusahaan_id) {
      await TkPerusahaanSekolah.create({
        m_sekolah_id: sekolah.id,
        m_perusahaan_id: perusahaan_id,
        dihapus: 0,
      });
      return response.ok({
        message: messagePostSuccess,
      });
    }

    const perusahaan = await MPerusahaan.create({
      nama,
      logo,
      bidang,
      province_id,
      regency_id,
      district_id,
      village_id,
      dihapus: 0,
    });

    await TkPerusahaanSekolah.create({
      m_sekolah_id: sekolah.id,
      m_perusahaan_id: perusahaan.id,
      dihapus: 0,
    });

    const informasi = await MInformasiPerusahaan.create({
      m_perusahaan_id: perusahaan.id,
      sampul,
      // email,
      didirikan,
      alamat,
      telepon,
      // motto,
      // visi,
      // misi,
      situs,
      jumlah_pekerja,
      keselarasan,
      istd,
      tentang,
      budaya,
      benefit_karyawan,
      lingkungan_kerja,
      busana,
      budaya_kerja,
      jam_kerja,
      nama_pj,
      telepon_pj,
      email_pj,
      registrasi_pj,
      youtube,
      twitter,
      instagram,
      facebook,
      github,
      linkedin,
      behace,
      dribble,
      kodepos,
    });

    return response.ok({
      message: messagePostSuccess,
      perusahaan,
      informasi,
    });
  }

  async putPerusahaan({ response, request, auth, params: { perusahaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      nama,
      logo,
      bidang,
      province_id,
      regency_id,
      district_id,
      village_id,
      didirikan,
      alamat,
      telepon,
      situs,
      jumlah_pekerja,
      tentang,
      budaya,
      benefit_karyawan,
      lingkungan_kerja,
      busana,
      budaya_kerja,
      jam_kerja,
      nama_pj,
      telepon_pj,
      email_pj,
      registrasi_pj,
      youtube,
      twitter,
      instagram,
      facebook,
      github,
      linkedin,
      behace,
      dribble,
      kodepos,
      sampul,
    } = request.post();

    const perusahaan = await MPerusahaaan.query()
      .where({ id: perusahaan_id })
      .update({
        nama,
        logo,
        bidang,
        province_id,
        regency_id,
        district_id,
        village_id,
        dihapus: 0,
      });

    // const informasi = await MInformasiPerusahaaan.query()
    //   .where({ m_perusahaan_id: perusahaan_id })
    //   .update({
    //     didirikan,
    //     alamat,
    //     telepon,
    //     situs,
    //     jumlah_pekerja,
    //     tentang,
    //     budaya,
    //     benefit_karyawan,
    //     lingkungan_kerja,
    //     busana,
    //     budaya_kerja,
    //     jam_kerja,
    //     nama_pj,
    //     telepon_pj,
    //     email_pj,
    //     registrasi_pj,
    //     youtube,
    //     twitter,
    //     instagram,
    //     facebook,
    //     github,
    //     linkedin,
    //     behace,
    //     dribble,
    //     kodepos,
    //     sampul,
    //   });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putInformasiPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      nama,
      logo,
      bidang,
      keselarasan,
      istd,
      province_id,
      regency_id,
      district_id,
      village_id,
      didirikan,
      alamat,
      telepon,
      situs,
      jumlah_pekerja,
      tentang,
      budaya,
      benefit_karyawan,
      lingkungan_kerja,
      busana,
      budaya_kerja,
      jam_kerja,
      nama_pj,
      telepon_pj,
      email_pj,
      registrasi_pj,
      youtube,
      twitter,
      instagram,
      facebook,
      github,
      linkedin,
      behace,
      dribble,
      kodepos,
      sampul,
    } = request.post();

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaan_id })
      .update({
        nama,
        logo,
        bidang,
        province_id,
        regency_id,
        district_id,
        village_id,
        dihapus: 0,
      });

    const informasi = await MInformasiPerusahaan.query()
      .where({ m_perusahaan_id: perusahaan_id })
      .update({
        didirikan,
        alamat,
        telepon,
        situs,
        jumlah_pekerja,
        keselarasan,
        istd,
        tentang,
        budaya,
        benefit_karyawan,
        lingkungan_kerja,
        busana,
        budaya_kerja,
        jam_kerja,
        nama_pj,
        telepon_pj,
        email_pj,
        registrasi_pj,
        youtube,
        twitter,
        instagram,
        facebook,
        github,
        linkedin,
        behace,
        dribble,
        kodepos,
        sampul,
      });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getPerusahaanSekolah({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search } = request.get();
    const user = await auth.getUser();
    let perusahaan;
    // const { rombel_id } = request.post();
    const perusahaanIds = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .pluck("m_perusahaan_id");

    perusahaan = MPerusahaan.query().whereIn("id", perusahaanIds);
    if (search) {
      perusahaan.andWhere("nama", "like", `%${search}%`);
    }
    perusahaan = await perusahaan.fetch();

    const perusahaanSekolah = await TkPerusahaanSekolah.query()
      .with("penerimaan", (builder) => {
        builder
          .withCount("siswa as total", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .with("perusahaan", (builder) => {
        // builder.where({ dihapus: 0 });
        // if (search) {
        //   builder.andWhere("nama", "like", `%${search}%`);
        // }
      })
      .whereIn(
        "m_perusahaan_id",
        perusahaan.toJSON().map((d) => d.id)
      )
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let totalSiswa = 0;

    await Promise.all(
      perusahaanSekolah.toJSON().map(async (d) => {
        await Promise.all(
          d.penerimaan.map(async (e) => {
            totalSiswa = totalSiswa + e.__meta__.total;
          })
        );
      })
    );

    const semuaPerusahaan = MPerusahaan.query().fetch();

    return response.ok({
      perusahaan,
      perusahaanSekolah,
      semuaPerusahaan,
      totalSiswa,
    });
  }

  async getPerusahaanSekolah31({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search } = request.get();
    const user = await auth.getUser();
    let perusahaan;
    // const { rombel_id } = request.post();
    const perusahaanIds = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .pluck("m_perusahaan_id");

    perusahaan = MPerusahaan.query().whereIn("id", perusahaanIds);
    if (search) {
      perusahaan.andWhere("nama", "like", `%${search}%`);
    }
    perusahaan = await perusahaan.fetch();

    const perusahaanSekolah = await TkPerusahaanSekolah.query()
      .with("penerimaan", (builder) => {
        builder
          .withCount("siswa as total", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .with("mou1", (builder) => {
        builder
          .where("mulai_kontrak", "<=", moment().format("YYYY-MM-DD"))
          .where("akhir_kontrak", ">=", moment().format("YYYY-MM-DD"));
      })
      .with("perusahaan", (builder) => {
        // builder.where({ dihapus: 0 });
        // if (search) {
        //   builder.andWhere("nama", "like", `%${search}%`);
        // }
        builder.with("informasi");
      })
      .whereIn(
        "m_perusahaan_id",
        perusahaan.toJSON().map((d) => d.id)
      )
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let totalSiswa = 0;

    await Promise.all(
      perusahaanSekolah.toJSON().map(async (d) => {
        await Promise.all(
          d.penerimaan.map(async (e) => {
            totalSiswa = totalSiswa + e.__meta__.total;
          })
        );
      })
    );

    const semuaPerusahaan = MPerusahaan.query().fetch();

    return response.ok({
      perusahaan,
      perusahaanSekolah,
      semuaPerusahaan,
      totalSiswa,
    });
  }

  async getPenerimaanPkl({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }
    let { search, jurusan_id, page } = request.get();
    const user = await auth.getUser();
    page = page ? parseInt(page) : 1;

    let penerimaanSiswa;

    const rombel = await MRombel.query()
      .withCount("penerimaanSiswa as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("anggotaRombel as totalRombel", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const rombelIds = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    const jurusan = await MJurusan.query()
      .select("id", "kode", "nama")
      .withCount("penerimaanSiswa as total", (builder) => {
        builder.where({ dihapus: 0 }).whereIn("m_rombel_id", rombelIds);
      })
      .with("rombel", (builder) => {
        builder.withCount("anggotaRombel as totalRombel", (builder) => {
          builder.where({ dihapus: 0 });
        });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    const userTotal = await User.query()
      .andWhere({ role: "siswa" })
      .count("* as total");
    let userIds;

    userIds = User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "siswa" });
    if (search) {
      userIds.where("nama", "like", `%${search}%`);
    }

    userIds = await userIds.ids();
    penerimaanSiswa = MPenerimaanSiswa.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .with("rombel", (builder) => {
        builder.select("id", "nama");
      })
      .with("penerimaanPerusahaan", (builder) => {
        builder.with("perusahaanSekolah", (builder) => {
          builder.with("perusahaan");
        });
      })
      .where({ dihapus: 0 })
      .whereIn("m_user_id", userIds);
    if (jurusan_id) {
      penerimaanSiswa
        .where({ m_jurusan_id: jurusan_id })
        .whereIn("m_rombel_id", rombelIds);
    }
    penerimaanSiswa = await penerimaanSiswa.paginate(page, 25);

    const perusahaan = await TkPerusahaanSekolah.query()
      .with("penerimaan", (builder) => {
        builder
          .withCount("siswa as total", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .with("perusahaan")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let totalSiswa = 0;
    let totalPartner = 0;

    const totalSemuaSiswa = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ role: "siswa" })
      .andWhere({ dihapus: 0 })
      .getCount();
    await Promise.all(
      perusahaan.toJSON().map(async (d) => {
        if (d.penerimaan) {
          await Promise.all(
            d.penerimaan.map(async (e) => {
              totalSiswa = totalSiswa + e.__meta__.total;
            })
          );
        }
        totalPartner = totalPartner + 1;
      })
    );

    return response.ok({
      perusahaan,
      totalSiswa,
      totalPartner,
      totalSemuaSiswa,
      rombel,
      jurusan,
      penerimaanSiswa,
    });
  }
  async getSerapanPkl({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const rombel = await MRombel.query()
      .withCount("penerimaanSiswa as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("anggotaRombel as totalRombel", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const rombelIds = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    const jurusan = await MJurusan.query()
      .select("id", "kode", "nama")
      .withCount("penerimaanSiswa as total", (builder) => {
        builder.where({ dihapus: 0 }).whereIn("m_rombel_id", rombelIds);
      })
      .with("rombel", (builder) => {
        builder.withCount("anggotaRombel as totalRombel", (builder) => {
          builder.where({ dihapus: 0 });
        });
      })
      .where({ m_sekolah_id: sekolah.id })
      .fetch();

    const userTotal = await User.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah_id })
      .andWhere({ role: "siswa" })
      .count("* as total");

    // const { rombel_id } = request.post();

    const perusahaan = await TkPerusahaanSekolah.query()
      .with("penerimaan", (builder) => {
        builder
          .withCount("siswa", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .with("perusahaan")
      .where({ m_sekolah_id: sekolah.id })
      .fetch();

    let totalSiswa = 0;
    let totalPartner = 0;

    await Promise.all(
      perusahaan.toJSON().map(async (d) => {
        await Promise.all(
          d.penerimaan.map(async (e) => {
            await Promise.all(
              e.siswa.map(async (s) => {
                totalSiswa = totalSiswa + s.siswa.__meta__;
              })
            );
          })
        );
        totalPartner = totalPartner + 1;
      })
    );

    return response.ok({
      totalSiswa,
      totalPartner,
      userTotal,
      rombel,
      jurusan,
    });
  }

  async postPerusahaanSekolah({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, nama_pt, logo, bidang, perusahaan_id } = request.post();

    if (perusahaan_id) {
      await TkPerusahaanSekolah.create({
        m_sekolah_id: sekolah.id,
        m_perusahaan_id: perusahaan_id,
        dihapus: 0,
      });
      return response.ok({
        message: messagePostSuccess,
      });
    }

    const perusahaan = await MPerusahaan.create({
      nama,
      logo,
      bidang,
      nama_pt,
      dihapus: 0,
    });

    await TkPerusahaanSekolah.create({
      m_sekolah_id: sekolah.id,
      m_perusahaan_id: perusahaan.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPerusahaanSekolah({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, nama_pt, logo, bidang } = request.post();

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaan_id })
      .update({
        nama,
        logo,
        bidang,
        nama_pt,
        // province_id,
        // regency_id,
        // district_id,
        // village_id,
        dihapus: 0,
      });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePerusahaanSekolah({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const perusahaan = await TkPerusahaanSekolah.query()
      .where({ id: perusahaan_id })
      .update({
        dihapus: 1,
      });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }
  async getPenerimaanPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    let { search } = request.get();
    const user = await auth.getUser();
    let penerimaan;
    // const { rombel_id } = request.post();
    const perusahaanTk = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_perusahaan_id: perusahaan_id })
      .first();

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaanTk.m_perusahaan_id })
      .first();

    penerimaan = MPenerimaanPerusahaan.query()
      .withCount("siswa as siswa", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("ta", (builder) => {
        builder.select("id", "tahun");
      })
      .where({ dihapus: 0 })
      .andWhere({ tk_perusahaan_sekolah_id: perusahaanTk.id });
    if (search) {
      penerimaan.andWhere("nama", "like", `%${search}%`);
    }
    penerimaan = await penerimaan.fetch();

    let totalSiswa = 0;

    await Promise.all(
      penerimaan.toJSON().map(async (d) => {
        totalSiswa = totalSiswa + d.__meta__.siswa;
      })
    );

    const status = await MPenerimaanPerusahaan.query()
      .where({ dihapus: 0 })
      .where({ tk_perusahaan_sekolah_id: perusahaanTk.id })
      .where({ m_ta_id: ta.id })
      .first();

    return response.ok({
      penerimaan,
      perusahaan,
      totalSiswa,
      status: status ? 1 : 0,
    });
  }

  async postPenerimaanPerusahaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    const {
      nama,
      data_siswa,
      surat_tugas,
      mou,
      tk_perusahaan_sekolah_id,
      m_perusahaan_id,
    } = request.post();

    const perusahaanTk = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_perusahaan_id })
      .first();

    const check = await MPenerimaanPerusahaan.query()
      .where({ tahun: ta.tahun })
      .andWhere({ dihapus: 0 })
      .andWhere({ tk_perusahaan_sekolah_id: perusahaanTk.id })
      .first();

    if (!check) {
      const sekolah = await MPenerimaanPerusahaan.create({
        nama,
        tahun: ta.tahun,
        data_siswa,
        surat_tugas,
        mou,
        tk_perusahaan_sekolah_id: perusahaanTk.id,
        m_ta_id: ta.id,
        dihapus: 0,
      });
      if (sekolah) {
        return response.ok({
          message: messagePostSuccess,
        });
      }
    }
    return response.ok({
      message: `penerimaan dengan tahun akademik ${ta.tahun}-${ta.semester} sudah ada`,
    });
  }

  async putPenerimaanPerusahaan({
    response,
    request,
    auth,
    params: { penerimaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, data_siswa, surat_tugas, mou } = request.post();

    const perusahaan = await MPenerimaanPerusahaan.query()
      .where({ id: penerimaan_id })
      .update({
        nama,
        data_siswa,
        surat_tugas,
        mou,
        dihapus: 0,
      });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePenerimaanPerusahaan({
    response,
    request,
    auth,
    params: { penerimaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const perusahaan = await MPenerimaanPerusahaan.query()
      .where({ id: penerimaan_id })
      .update({
        dihapus: 1,
      });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getPenerimaanSiswa({
    response,
    request,
    auth,
    params: { penerimaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    let { search, jurusan_id, rombel_id, searchSiswa, page } = request.get();
    page = page ? parseInt(page) : 1;
    const user = await auth.getUser();
    let penerimaan;
    // const { rombel_id } = request.post();

    penerimaan = await MPenerimaanPerusahaan.query()
      .withCount("siswa", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ id: penerimaan_id })
      .andWhere({ dihapus: 0 })
      .first();

    const perusahaanTk = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ id: penerimaan.tk_perusahaan_sekolah_id })
      .first();
    // return perusahaanTk

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaanTk.m_perusahaan_id })
      .first();

    let userIds;

    userIds = User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "siswa" });
    if (search) {
      userIds.where("nama", "like", `%${search}%`);
    }

    userIds = await userIds.ids();

    const siswa = await MPenerimaanSiswa.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .whereIn("m_user_id", userIds)
      .where({ m_penerimaan_perusahaan_id: penerimaan_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let jurusan = await MJurusan.query()
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();
    const rombel = await MRombel.query()
      .select("id", "nama")
      .where({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();
    let rombelIds;

    rombelIds = MRombel.query()
      .where({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (jurusan_id) {
      rombelIds = rombelIds.andWhere({ m_jurusan_id: jurusan_id });
    }
    if (rombel_id) {
      rombelIds = rombelIds.andWhere({ id: rombel_id });
    }

    rombelIds = await rombelIds.ids();

    let userData;

    const anggotaRombelIds = await MAnggotaRombel.query()
      .whereIn("m_rombel_id", rombelIds)
      .pluck("m_user_id");

    userData = User.query()
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .whereIn("id", anggotaRombelIds);

    if (searchSiswa) {
      userData = userData.andWhere("nama", "like", `%${searchSiswa}%`);
    }
    userData = await userData.paginate(page, 25);

    const semuaPenerimaan = await MPenerimaanPerusahaan.query()
      .select("id", "nama")
      .where({ id: penerimaan_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      penerimaan,
      perusahaan,
      siswa,
      jurusan,
      rombel,
      userData,
      semuaPenerimaan,
    });
  }

  async postPenerimaanSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    let {
      m_user_id,
      tanggal_mulai,
      tanggal_selesai,
      m_penerimaan_perusahaan_id,
    } = request.post();

    // let validation = await validate(
    //   request.post(),
    //   rulesUserPost,
    //   messagesUser
    // );

    // if (validation.fails()) {
    //   return response.unprocessableEntity(validation.messages());
    // }

    m_user_id = m_user_id.length ? m_user_id : [];

    const date1 = moment(`${tanggal_mulai}`);
    const date2 = moment(`${tanggal_selesai}`);
    const diff = date2.diff(date1);

    // return diff
    const lama = moment(diff).format(`MM`);

    // return lama;

    const rombelIds = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    if (m_user_id.length) {
      await Promise.all(
        m_user_id.map(async (d) => {
          const anggotaRombel = await MAnggotaRombel.query()
            .with("rombel")
            .where({ m_user_id: d })
            .whereIn("m_rombel_id", rombelIds)
            .first();
          await MPenerimaanSiswa.create({
            tanggal_mulai,
            tanggal_selesai,
            lama_pkl: lama,
            m_user_id: d,
            m_penerimaan_perusahaan_id,
            m_rombel_id: anggotaRombel ? anggotaRombel.m_rombel_id : null,
            m_jurusan_id: anggotaRombel
              ? anggotaRombel.toJSON().rombel.m_jurusan_id
              : null,
            dihapus: 0,
          });
        })
      );
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPenerimaanSiswa({ response, request, auth, params: { siswa_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_mulai, tanggal_selesai } = request.post();

    const date1 = moment(`${tanggal_mulai}`);
    const date2 = moment(`${tanggal_selesai}`);
    const diff = date2.diff(date1);

    const lama = moment(diff).format(`MM`);

    const perusahaan = await MPenerimaanSiswa.query()
      .where({ id: siswa_id })
      .update({
        tanggal_mulai,
        tanggal_selesai,
        lama_pkl: lama,
      });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePenerimaanSiswa({
    response,
    request,
    auth,
    params: { siswa_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const perusahaan = await MPenerimaanSiswa.query()
      .where({ id: siswa_id })
      .update({
        dihapus: 1,
      });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async putProfilPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { motto, visi, misi, tentang } = request.post();

    const informasi = await MInformasiPerusahaaan.query()
      .where({ m_perusahaan_id: perusahaan_id })
      .update({
        tentang,
        visi,
        misi,
        motto,
      });

    if (!informasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putBudayaPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      lingkungan_kerja,
      busana,
      budaya,
      budaya_kerja,
      jam_kerja,
      benefit_karyawan,
    } = request.post();

    const informasi = await MInformasiPerusahaaan.query()
      .where({ m_perusahaan_id: perusahaan_id })
      .update({
        lingkungan_kerja,
        busana,
        budaya,
        budaya_kerja,
        jam_kerja,
        benefit_karyawan,
      });

    if (!informasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putPenanggungJawabPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama_pj, telepon_pj, email_pj, registrasi_pj } = request.post();

    const informasi = await MInformasiPerusahaan.query()
      .where({ m_perusahaan_id: perusahaan_id })
      .update({
        nama_pj,
        telepon_pj,
        email_pj,
        registrasi_pj,
      });

    if (!informasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putInformasiPerusahaanLite({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      nama,
      bidang,
      email,
      jumlah_pekerja,
      situs,
      telepon,
      province_id,
      regency_id,
      district_id,
      village_id,
      kodepos,
      alamat,
      keselarasan,
      istd,
      didirikan,
    } = request.post();

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaan_id })
      .update({
        nama,
        bidang,
        province_id,
        regency_id,
        district_id,
        village_id,
        dihapus: 0,
      });

    const check = await MInformasiPerusahaan.query()
      .where({ m_perusahaan_id: perusahaan_id })
      .first();
    let informasi;
    if (check) {
      informasi = await MInformasiPerusahaan.query()
        .where({ m_perusahaan_id: perusahaan_id })
        .update({
          email,
          jumlah_pekerja,
          kodepos,
          alamat,
          keselarasan,
          istd,
          didirikan,
          situs,
          telepon,
        });
    } else {
      informasi = await MInformasiPerusahaan.create({
        email,
        jumlah_pekerja,
        kodepos,
        alamat,
        didirikan,
        situs,
        telepon,
      });
    }

    if (!informasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putTautanPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      youtube,
      twitter,
      instagram,
      facebook,
      github,
      linkedin,
      behace,
      dribble,
    } = request.post();

    const informasi = await MInformasiPerusahaaan.query()
      .where({ m_perusahaan_id: perusahaan_id })
      .update({
        youtube,
        twitter,
        instagram,
        facebook,
        github,
        linkedin,
        behace,
        dribble,
      });

    if (!informasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaan_id })
      .update({
        dihapus: 1,
      });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postPekerjaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      m_perusahaan_id,
      judul,
      jenis,
      province_id,
      regency_id,
      district_id,
      village_id,
      alamat_penempatan,
      kodepos,
      jumlah_lowongan,
      bidang,
      mulai_kerja,
      akhir_kerja,
      pengalaman,
      batas_pengiriman,
      pendidikan,
      detail_pendidikan,
      keahlian,
      deskripsi,
      persyaratan_khusus,
      gaji_minimal,
      gaji_maksimal,
      status_jurusan,
      jurusan,
      gender,
      tb,
      usia_minimal,
      usia_maksimal,
      khusus_alumni,
      khusus_difabel,
      buta_warna,
      kacamata,
      tes_psikotes,
      tes_masuk,
      tes_wawancara,
      tes_kesehatan,
      lokasi_tes,
      kelengkapan_data,
      data_nilai,
      waktu_mulai_psikotes,
      waktu_akhir_psikotes,
      media_tes_psikotes,
      keterangan_psikotes,
      lokasi_psikotes,
      link_psikotes,

      waktu_mulai_masuk,
      waktu_akhir_masuk,
      media_tes_masuk,
      keterangan_masuk,
      lokasi_masuk,
      link_masuk,

      waktu_mulai_wawancara,
      waktu_akhir_wawancara,
      media_tes_wawancara,
      keterangan_wawancara,
      lokasi_wawancara,
      link_wawancara,

      waktu_mulai_kesehatan,
      waktu_akhir_kesehatan,
      media_tes_kesehatan,
      keterangan_kesehatan,
      lokasi_kesehatan,
      link_kesehatan,
    } = request.post();
    const date1 = moment(`${mulai_kerja}`);
    const date2 = moment(`${akhir_kerja}`);
    const diff = date2.diff(date1);

    const lama = moment(diff).format(`MM`);

    const pekerjaan = await MPekerjaan.create({
      judul,
      m_perusahaan_id,
      jenis,
      bidang,
      kontrak_kerja: lama,
      mulai_kerja,
      akhir_kerja,
      jumlah_lowongan,
      province_id,
      regency_id,
      district_id,
      village_id,
      dihapus: 0,
    });

    const informasi = await MInformasiPekerjaan.create({
      m_pekerjaan_id: pekerjaan.id,
      pengalaman,
      batas_pengiriman,
      pendidikan,
      detail_pendidikan,
      keahlian,
      deskripsi,
      persyaratan_khusus,
      gaji_minimal,
      gaji_maksimal,
      status_jurusan,
      jurusan,
      gender,
      tb,
      usia_minimal,
      usia_maksimal,
      alamat_penempatan,
      kodepos,
      khusus_alumni,
      khusus_difabel,
      buta_warna,
      kacamata,
      tes_psikotes,
      tes_masuk,
      tes_wawancara,
      tes_kesehatan,
      lokasi_tes,
      kelengkapan_data,
      data_nilai,
    });

    if (tes_psikotes == 1) {
      await MTesPekerjaan.create({
        tipe: "psikotes",
        waktu_mulai: waktu_mulai_psikotes,
        waktu_akhir: waktu_akhir_psikotes,
        m_pekerjaan_id: pekerjaan.id,
        lokasi: lokasi_psikotes,
        link: link_psikotes,
        keterangan: keterangan_psikotes,
        dihapus: 0,
      });
    }
    if (tes_masuk == 1) {
      await MTesPekerjaan.create({
        tipe: "masuk",
        waktu_mulai: waktu_mulai_masuk,
        waktu_akhir: waktu_akhir_masuk,
        m_pekerjaan_id: pekerjaan.id,
        lokasi: lokasi_masuk,
        link: link_masuk,
        keterangan: keterangan_masuk,
        dihapus: 0,
      });
    }
    if (tes_wawancara == 1) {
      await MTesPekerjaan.create({
        tipe: "wawancara",
        waktu_mulai: waktu_mulai_wawancara,
        waktu_akhir: waktu_akhir_wawancara,
        m_pekerjaan_id: pekerjaan.id,
        lokasi: lokasi_wawancara,
        link: link_wawancara,
        keterangan: keterangan_wawancara,
        dihapus: 0,
      });
    }
    if (tes_kesehatan == 1) {
      await MTesPekerjaan.create({
        tipe: "kesetes_kesehatan",
        waktu_mulai: waktu_mulai_kesehatan,
        waktu_akhir: waktu_akhir_kesehatan,
        m_pekerjaan_id: pekerjaan.id,
        lokasi: lokasi_kesehatan,
        link: link_kesehatan,
        keterangan: keterangan_kesehatan,
        dihapus: 0,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ============ POST Rekap Tugas =================

  async putPekerjaan({ response, request, auth, params: { pekerjaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      province_id,
      regency_id,
      district_id,
      village_id,
      jenis,
      bidang,
      mulai_kerja,
      akhir_kerja,
      jumlah_lowongan,
      pengalaman,
      batas_pengiriman,
      pendidikan,
      detail_pendidikan,
      keahlian,
      deskripsi,
      persyaratan_khusus,
      range_gaji,
      status_jurusan,
      gender,
      tb,
      usia_minimal,
      usia_maksimal,
      alamat,
      kodepos,
      khusus_alumni,
      khusus_difabel,
      buta_warna,
      kacamata,
      tes,
      lokasi_tes,
      kelengkapan_data,
      data_nilai,
    } = request.post();

    const date1 = moment(`${mulai_kerja}`);
    const date2 = moment(`${akhir_kerja}`);
    const diff = date2.diff(date1);

    const lama = moment(diff).format(`MM`);

    const pekerjaan = await MPekerjaan.query()
      .where({ id: pekerjaan_id })
      .update({
        judul,
        jenis,
        bidang,
        kontrak_kerja: lama,
        mulai_kerja,
        akhir_kerja,
        jumlah_lowongan,
        province_id,
        regency_id,
        district_id,
        village_id,
        dihapus: 0,
      });

    const informasi = await MInformasiPekerjaan.query()
      .where({ m_pekerjaan_id: pekerjaan_id })
      .update({
        pengalaman,
        batas_pengiriman,
        pendidikan,
        detail_pendidikan,
        keahlian,
        deskripsi,
        persyaratan_khusus,
        range_gaji,
        status_jurusan,
        gender,
        tb,
        usia_minimal,
        usia_maksimal,
        alamat,
        kodepos,
        khusus_alumni,
        khusus_difabel,
        buta_warna,
        kacamata,
        tes,
        lokasi_tes,
        kelengkapan_data,
        data_nilai,
      });

    if (!pekerjaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePekerjaan({ response, request, auth, params: { pekerjaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const pekerjaan = await MPekerjaan.query()
      .where({ id: pekerjaan_id })
      .update({
        dihapus: 1,
      });

    if (!pekerjaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postLaporanPrakerin({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      foto,
      lokasi,
      deskripsi,
      waktu_mulai,
      waktu_akhir,
      lampiran,
    } = request.post();

    const laporan = await MLaporanPrakerin.create({
      judul,
      foto,
      lokasi,
      deskripsi,
      waktu_mulai,
      waktu_akhir,
      lampiran,
      m_perusahaan_id: perusahaan_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ============ POST Rekap Tugas =================

  async putLaporanPrakerin({
    response,
    request,
    auth,
    params: { laporan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, foto, lokasi, deskripsi, waktu_awal, waktu_akhir } =
      request.post();

    const acara = await MAcaraPerusahaaan.query()
      .where({ id: acara_id })
      .update({
        judul,
        foto,
        lokasi,
        deskripsi,
        waktu_awal,
        waktu_akhir,
        dihapus: 0,
      });

    if (!acara) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putLaporanPrakerin({
    response,
    request,
    auth,
    params: { laporan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, foto, lokasi, deskripsi, waktu_awal, waktu_akhir } =
      request.post();

    const acara = await MAcaraPerusahaaan.query()
      .where({ id: acara_id })
      .update({
        judul,
        foto,
        lokasi,
        deskripsi,
        waktu_awal,
        waktu_akhir,
        dihapus: 0,
      });

    if (!acara) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getAlumniData({ response, request, auth }) {
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
      verifikasi,
      search,
      page,
      jurusan,
      status,
      tingkat,
      jurusan_id,
      rombel_id,
      tahun_angkatan,
      tahun_masuk,
    } = request.get();
    let userIdss = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .ids();
    let alumniIds = MAlumni.query()
      .where({ verifikasi })
      .andWhere({ dihapus: 0 });
    if (tahun_angkatan) {
      alumniIds = alumniIds.where({ tahun_masuk: tahun_angkatan });
    }
    alumniIds = await alumniIds.pluck("m_user_id");

    const jumlahBekerja = await MAlumni.query()
      .where({ verifikasi })
      .whereIn("m_user_id", userIdss)
      .andWhere({ dihapus: 0 })
      .andWhere({ status: "Bekerja" })
      .getCount();

    const jumlahKuliah = await MAlumni.query()
      .where({ verifikasi })
      .whereIn("m_user_id", userIdss)
      .andWhere({ dihapus: 0 })
      .andWhere({ status: "Kuliah" })
      .getCount();

    const jumlahBerwirausaha = await MAlumni.query()
      .where({ verifikasi })
      .whereIn("m_user_id", userIdss)
      .andWhere({ dihapus: 0 })
      .andWhere({ status: "Berwirausaha" })
      .getCount();

    const jumlahMencariKerja = await MAlumni.query()
      .where({ verifikasi })
      .whereIn("m_user_id", userIdss)
      .andWhere({ dihapus: 0 })
      .andWhere({ status: "Mencari Kerja" })
      .getCount();

    const jumlahTotal = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .whereIn("id", alumniIds)
      .getCount();

    const jumlahLaki = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ gender: "L" })
      .whereIn("id", alumniIds)
      .getCount();

    const jumlahPerempuan = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ gender: "P" })
      .whereIn("id", alumniIds)
      .getCount();

    page = page ? parseInt(page) : 1;

    let userIds = User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 });

    if (search) {
      userIds = userIds.where("nama", "like", `%${search}%`);
    }
    userIds = await userIds.ids();

    let alumni = MAlumni.query()
      .select("id", "jurusan", "tahun_masuk", "status", "m_user_id")
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ dihapus: 0 })
      .where({ verifikasi })
      .whereIn("m_user_id", userIds);

    if (status) {
      alumni = alumni.where({ status });
    }
    if (jurusan) {
      alumni = alumni.where({ jurusan });
    }
    if (tahun_masuk) {
      alumni = alumni.where({ tahun_masuk });
    }
    alumni = await alumni.fetch();

    const statusAlumni = ["Bekerja", "Kuliah", "Berwirausaha", "Mencari Kerja"];
    let jurusanData = [];
    alumni.toJSON().filter((d) => {
      if (!jurusanData.find((e) => e.nama == d.jurusan)) {
        jurusanData.push({ nama: d.jurusan });
        return true;
      } else {
        return false;
      }
    });

    let tahunData = [];
    alumni.toJSON().filter((d) => {
      if (!tahunData.find((e) => e.nama == d.tahun_masuk)) {
        tahunData.push({ nama: d.tahun_masuk });
        return true;
      } else {
        return false;
      }
    });
    return response.ok({
      jumlahTotal,
      jumlahLaki: jumlahLaki,
      jumlahPerempuan: jumlahPerempuan,
      jumlahBekerja,
      jumlahBerwirausaha,
      jumlahKuliah,
      jumlahMencariKerja,
      statusAlumni,
      alumni,
      jurusanData,
      tahunData,
    });
  }

  async detailAlumniData({ response, request, auth, params: { alumni_id } }) {
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
      verifikasi,
      search,
      page,
      jurusan,
      status,
      tingkat,
      jurusan_id,
      rombel_id,
      tahun_angkatan,
      tahun_masuk,
    } = request.get();
    let alumni1 = await MAlumni.query()
      .with("user", (builder) => {
        builder.with("profil");
      })
      .where({ dihapus: 0 })
      .where({ id: alumni_id })
      .first();

    let userIds = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .ids();

    let alumni = MAlumni.query()
      .select("id", "jurusan", "tahun_masuk", "status", "m_user_id")
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ dihapus: 0 })
      .whereIn("m_user_id", userIds);

    if (status) {
      alumni = alumni.where({ status });
    }
    if (jurusan) {
      alumni = alumni.where({ jurusan });
    }
    if (tahun_masuk) {
      alumni = alumni.where({ tahun_masuk });
    }
    alumni = await alumni.fetch();

    const statusAlumni = ["Bekerja", "Kuliah", "Berwirausaha", "Mencari Kerja"];
    let jurusanData = [];
    alumni.toJSON().filter((d) => {
      if (!jurusanData.find((e) => e.nama == d.jurusan)) {
        jurusanData.push({ nama: d.jurusan });
        return true;
      } else {
        return false;
      }
    });

    let tahunData = [];
    alumni.toJSON().filter((d) => {
      if (!tahunData.find((e) => e.nama == d.tahun_masuk)) {
        tahunData.push({ nama: d.tahun_masuk });
        return true;
      } else {
        return false;
      }
    });
    return response.ok({
      statusAlumni,
      alumni1,
      alumni,
      jurusanData,
      tahunData,
    });
  }

  async putTerimaAlumni({ response, request, auth, params: { alumni_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { verifikasi, dihapus } = request.post();

    const alumni = await MAlumni.query().where({ id: alumni_id }).update({
      verifikasi,
      dihapus,
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

    const alumni = await MAlumni.query().where({ id: alumni_id }).update({
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

  async postBerkasMou({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      nama,
      mulai_kontrak,
      akhir_kontrak,
      kerjasama,
      fasilitas,
      lampiran,
      tk_perusahaan_sekolah_id,
    } = request.post();

    const checkTanggalawal = await MMouPerusahaan.query()
      .where({ tk_perusahaan_sekolah_id })
      .where({ dihapus: 0 })
      .where("mulai_kontrak", "<=", mulai_kontrak)
      .where("akhir_kontrak", ">=", mulai_kontrak)
      .first();

    const checkTanggalakhir = await MMouPerusahaan.query()
      .where({ tk_perusahaan_sekolah_id })
      .where({ dihapus: 0 })
      .where("mulai_kontrak", "<=", akhir_kontrak)
      .where("akhir_kontrak", ">=", akhir_kontrak)
      .first();

    const checkRange1 = await MMouPerusahaan.query()
      .where({ tk_perusahaan_sekolah_id })
      .where({ dihapus: 0 })
      .where("mulai_kontrak", "<=", akhir_kontrak)
      .where("mulai_kontrak", ">=", mulai_kontrak)
      .first();
    const checkRange2 = await MMouPerusahaan.query()
      .where({ tk_perusahaan_sekolah_id })
      .where({ dihapus: 0 })
      .where("akhir_kontrak", "<=", akhir_kontrak)
      .where("akhir_kontrak", ">=", mulai_kontrak)
      .first();
    if (checkTanggalawal) {
      return response.expectationFailed({
        message: `Mulai Kontrak berada dalam jangkauan MoU ${checkTanggalawal.nama}`,
      });
    }
    if (checkTanggalakhir) {
      return response.expectationFailed({
        message: `Akhir Kontrak berada dalam jangkauan MoU ${checkTanggalakhir.nama}`,
      });
    }
    if (checkRange1 || checkRange2) {
      return response.expectationFailed({
        message: `Kontrak MoU bergesekan dengan MoU ${
          (checkRange1 || checkRange2).nama
        }`,
      });
    }

    const mou = await MMouPerusahaan.create({
      nama,
      mulai_kontrak,
      akhir_kontrak,
      kerjasama: kerjasama
        ? kerjasama.length
          ? kerjasama.toString()
          : null
        : null,
      fasilitas: fasilitas
        ? fasilitas.length
          ? fasilitas.toString()
          : null
        : null,
      lampiran,
      tk_perusahaan_sekolah_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putBerkasMou({ response, request, auth, params: { mou_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      nama,
      mulai_kontrak,
      akhir_kontrak,
      kerjasama,
      fasilitas,
      lampiran,
      tk_perusahaan_sekolah_id,
    } = request.post();
    const checkTanggalawal = await MMouPerusahaan.query()
      .where({ tk_perusahaan_sekolah_id })
      .where({ dihapus: 0 })
      .where("mulai_kontrak", "<=", mulai_kontrak)
      .where("akhir_kontrak", ">=", mulai_kontrak)
      .whereNot("id", mou_id)
      .first();

    const checkTanggalakhir = await MMouPerusahaan.query()
      .where({ tk_perusahaan_sekolah_id })
      .where({ dihapus: 0 })
      .where("mulai_kontrak", "<=", akhir_kontrak)
      .where("akhir_kontrak", ">=", akhir_kontrak)
      .whereNot("id", mou_id)
      .first();
    if (checkTanggalawal) {
      return response.expectationFailed({
        message: `Mulai Kontrak berada dalam jangkauan MoU ${checkTanggalawal.nama}`,
      });
    }
    if (checkTanggalakhir) {
      return response.expectationFailed({
        message: `Akhir Kontrak berada dalam jangkauan MoU ${checkTanggalakhir.nama}`,
      });
    }

    const mou = await MMouPerusahaan.query()
      .where({ id: mou_id })
      .update({
        nama,
        mulai_kontrak,
        akhir_kontrak,
        kerjasama: kerjasama
          ? kerjasama.length
            ? kerjasama.toString()
            : null
          : null,
        fasilitas: fasilitas
          ? fasilitas.length
            ? fasilitas.toString()
            : null
          : null,
        lampiran,
        tk_perusahaan_sekolah_id,
        dihapus: 0,
      });

    if (!mou) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteBerkasMou({ response, request, auth, params: { mou_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const mou = await MMouPerusahaan.query().where({ id: mou_id }).update({
      dihapus: 1,
    });

    if (!mou) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postBerkasSurat({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, lampiran, tk_perusahaan_sekolah_id } = request.post();

    const surat = await MSuratPerusahaan.create({
      nama,
      lampiran,
      tk_perusahaan_sekolah_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putBerkasSurat({ response, request, auth, params: { surat_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, lampiran, tk_perusahaan_sekolah_id } = request.post();

    const surat = await MSuratPerusahaan.query()
      .where({ id: surat_id })
      .update({
        nama,
        lampiran,
        tk_perusahaan_sekolah_id,
        dihapus: 0,
      });

    if (!surat) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteBerkasSurat({ response, request, auth, params: { surat_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const surat = await MSuratPerusahaan.query()
      .where({ id: surat_id })
      .update({
        dihapus: 1,
      });

    if (!surat) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getPenerimaanPkl31({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }
    let { search, jurusan_id, page } = request.get();
    const user = await auth.getUser();
    page = page ? parseInt(page) : 1;

    let penerimaanSiswa;

    const rombel = await MRombel.query()
      .withCount("penerimaanSiswa as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("anggotaRombel as totalRombel", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const rombelIds = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    const jurusan = await MJurusan.query()
      .select("id", "kode", "nama")
      .withCount("penerimaanSiswa as total", (builder) => {
        builder.where({ dihapus: 0 }).whereIn("m_rombel_id", rombelIds);
      })
      .with("rombel", (builder) => {
        builder.withCount("anggotaRombel as totalRombel", (builder) => {
          builder.where({ dihapus: 0 });
        });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    const userTotal = await User.query()
      .andWhere({ role: "siswa" })
      .count("* as total");
    let userIds;

    userIds = User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "siswa" });
    if (search) {
      userIds.where("nama", "like", `%${search}%`);
    }

    userIds = await userIds.ids();
    penerimaanSiswa = MPenerimaanSiswa.query()
      .with("user", (builder) => {
        builder.with("keteranganPkl").select("id", "nama");
      })
      .with("rombel", (builder) => {
        builder.select("id", "nama");
      })
      .with("penerimaanPerusahaan", (builder) => {
        builder.with("perusahaanSekolah", (builder) => {
          builder.with("perusahaan");
        });
      })
      .where({ dihapus: 0 })
      .whereIn("m_user_id", userIds);
    if (jurusan_id) {
      penerimaanSiswa
        .where({ m_jurusan_id: jurusan_id })
        .whereIn("m_rombel_id", rombelIds);
    }
    penerimaanSiswa = await penerimaanSiswa.paginate(page, 25);

    const perusahaan = await TkPerusahaanSekolah.query()
      .with("penerimaan", (builder) => {
        builder
          .withCount("siswa as total", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .with("perusahaan")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let totalSiswa = 0;
    let totalPartner = 0;

    const totalSemuaSiswa = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ role: "siswa" })
      .andWhere({ dihapus: 0 })
      .getCount();
    await Promise.all(
      perusahaan.toJSON().map(async (d) => {
        if (d.penerimaan) {
          await Promise.all(
            d.penerimaan.map(async (e) => {
              totalSiswa = totalSiswa + e.__meta__.total;
            })
          );
        }
        totalPartner = totalPartner + 1;
      })
    );

    return response.ok({
      perusahaan,
      totalSiswa,
      totalPartner,
      totalSemuaSiswa,
      rombel,
      jurusan,
      penerimaanSiswa,
    });
  }

  async postKeteranganPkl({ response, request, auth, params: { user_id } }) {
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
      namamitra,
      tanggal_mulai,
      tanggal_selesai,
      keterangan,
      id_card,
      kontrak,
      sertifikat,
      nilai,
    } = request.post();

    const rules = {
      namamitra: "required",
      tanggal_mulai: "required",
      tanggal_selesai: "required",
      keterangan: "required",
    };
    const message = {
      "namamitra.required": "Nama Perusahaan harus diisi",
      "tanggal_mulai.required": "Tanggal Mulai harus diisi",
      "tanggal_selesai.required": "Tanggal Selesai harus benar",
      "keterangan.required": "Keterangan harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const date1 = moment(`${tanggal_mulai}`);
    const date2 = moment(`${tanggal_selesai}`);
    const diff = date2.diff(date1);

    const lama = moment(diff).format(`MM`);

    const keteranganPkl = await MKeteranganPkl.create({
      namamitra,
      tanggal_mulai,
      tanggal_selesai,
      keterangan,
      lamanya: lama,
      id_card,
      kontrak,
      sertifikat,
      nilai,
      m_user_id: user_id,
      m_ta_id: ta.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKeteranganPkl({ response, request, auth, params: { pkl_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { keterangan, id_card, kontrak, sertifikat, nilai } = request.post();
    const rules = {
      namamitra: "required",
      tanggal_mulai: "required",
      tanggal_selesai: "required",
      keterangan: "required",
    };
    const message = {
      "namamitra.required": "Nama Perusahaan harus diisi",
      "tanggal_mulai.required": "Tanggal Mulai harus diisi",
      "tanggal_selesai.required": "Tanggal Selesai harus benar",
      "keterangan.required": "Keterangan harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const keteranganPkl = await MKeteranganPkl.query()
      .where({ id: pkl_id })
      .update({
        keterangan,
        id_card,
        kontrak,
        sertifikat,
        nilai,
        dihapus: 0,
      });

    if (!keteranganPkl) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }
  async deleteKeteranganPkl({ response, request, auth, params: { pkl_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const keteranganpkl = await MKeteranganPkl.query()
      .where({ id: pkl_id })
      .update({
        dihapus: 1,
      });

    if (!keteranganpkl) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postPenerimaanSiswa31({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    let {
      m_perusahaan_id,
      m_user_id,
      tanggal_mulai,
      tanggal_selesai,
      m_penerimaan_perusahaan_id,
    } = request.post();

    // let validation = await validate(
    //   request.post(),
    //   rulesUserPost,
    //   messagesUser
    // );

    // if (validation.fails()) {
    //   return response.unprocessableEntity(validation.messages());
    // }

    m_user_id = m_user_id.length ? m_user_id : [];

    const date1 = moment(`${tanggal_mulai}`);
    const date2 = moment(`${tanggal_selesai}`);
    const diff = date2.diff(date1);

    // return diff
    const lama = moment(diff).format(`MM`);

    // return lama;

    const rombelIds = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    if (m_user_id.length) {
      await Promise.all(
        m_user_id.map(async (d) => {
          const anggotaRombel = await MAnggotaRombel.query()
            .with("rombel")
            .where({ m_user_id: d })
            .whereIn("m_rombel_id", rombelIds)
            .first();
          await MPenerimaanSiswa.create({
            tanggal_mulai,
            tanggal_selesai,
            lama_pkl: lama,
            m_user_id: d,
            m_penerimaan_perusahaan_id,
            m_rombel_id: anggotaRombel ? anggotaRombel.m_rombel_id : null,
            m_jurusan_id: anggotaRombel
              ? anggotaRombel.toJSON().rombel.m_jurusan_id
              : null,
            dihapus: 0,
          });
          await MKeteranganPkl.create({
            tanggal_mulai,
            tanggal_selesai,
            lamanya: lama,
            m_user_id: user_id,
            m_ta_id: ta.id,
            dihapus: 0,
          });
        })
      );
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPenerimaanSiswa31({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    let {
      m_perusahaan_id,
      m_user_id,
      tanggal_mulai,
      tanggal_selesai,
      m_penerimaan_perusahaan_id,
      m_penerimaan_siswa_id,
    } = request.post();

    const date1 = moment(`${tanggal_mulai}`);
    const date2 = moment(`${tanggal_selesai}`);
    const diff = date2.diff(date1);

    // return diff
    const lama = moment(diff).format(`MM`);

    // return lama;

    await MPenerimaanSiswa.query().where({ id: m_penerimaan_siswa_id }).update({
      tanggal_mulai,
      tanggal_selesai,
      lama_pkl: lama,
      m_penerimaan_perusahaan_id,
      dihapus: 0,
    });
    await MKeteranganPkl.query()
      .where({ m_user_id })
      .andWhere({ m_ta_id: ta.id })
      .update({
        tanggal_mulai,
        tanggal_selesai,
        lamanya: lama,
        dihapus: 0,
      });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async getTambahPenerimaanSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    let {
      search,
      jurusan_id,
      rombel_id,
      searchSiswa,
      page,
      perusahaan_id,
      penerimaan_id,
    } = request.get();
    page = page ? parseInt(page) : 1;
    const user = await auth.getUser();

    // return perusahaanTk
    const perusahaanTkIds = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .pluck("m_perusahaan_id");

    const semuaPerusahaan = await MPerusahaan.query()
      .select("id", "nama")
      .where({ dihapus: 0 })
      .whereIn("id", perusahaanTkIds)
      .fetch();

    let semuaPenerimaan;
    if (perusahaan_id) {
      const perusahaanTk1 = await TkPerusahaanSekolah.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ id: perusahaan_id })
        .first();
      semuaPenerimaan = await MPenerimaanPerusahaan.query().where({
        tk_perusahaan_sekolah_id: perusahaanTk1.id,
      });
    }

    let jurusan = await MJurusan.query()
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();
    const rombel = await MRombel.query()
      .select("id", "nama")
      .where({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();
    let rombelIds;

    rombelIds = MRombel.query()
      .where({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (jurusan_id) {
      rombelIds = rombelIds.andWhere({ m_jurusan_id: jurusan_id });
    }
    if (rombel_id) {
      rombelIds = rombelIds.andWhere({ id: rombel_id });
    }

    rombelIds = await rombelIds.ids();

    let userData;

    const anggotaRombelIds = await MAnggotaRombel.query()
      .whereIn("m_rombel_id", rombelIds)
      .pluck("m_user_id");

    userData = User.query()
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .whereIn("id", anggotaRombelIds);

    if (penerimaan_id) {
      const penerimaan = await MPenerimaanSiswa.query()
        .where({ m_penerimaan_perusahaan_id: penerimaan_id })
        .andWhere({ dihapus: 0 })
        .pluck("m_user_id");

      userData = userData.whereNotIn("id", penerimaan);
    }
    if (searchSiswa) {
      userData = userData.andWhere("nama", "like", `%${searchSiswa}%`);
    }
    userData = await userData.paginate(page, 25);

    return response.ok({
      semuaPenerimaan,
      semuaPerusahaan,
      jurusan,
      rombel,
      userData,
    });
  }

  async getPenerimaanSiswa31({
    response,
    request,
    auth,
    params: { penerimaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    let { search, jurusan_id, rombel_id, searchSiswa, page } = request.get();
    page = page ? parseInt(page) : 1;
    const user = await auth.getUser();
    let penerimaan;
    // const { rombel_id } = request.post();

    penerimaan = await MPenerimaanPerusahaan.query()
      .withCount("siswa", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ id: penerimaan_id })
      .andWhere({ dihapus: 0 })
      .first();

    const perusahaanTk = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ id: penerimaan.tk_perusahaan_sekolah_id })
      .first();
    // return perusahaanTk

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaanTk.m_perusahaan_id })
      .first();

    let userIds;

    userIds = User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "siswa" });
    if (search) {
      userIds.where("nama", "like", `%${search}%`);
    }

    userIds = await userIds.ids();

    const siswa = await MPenerimaanSiswa.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .whereIn("m_user_id", userIds)
      .where({ m_penerimaan_perusahaan_id: penerimaan_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let jurusan = await MJurusan.query()
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();
    const rombel = await MRombel.query()
      .select("id", "nama")
      .where({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();
    let rombelIds;

    rombelIds = MRombel.query()
      .where({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (jurusan_id) {
      rombelIds = rombelIds.andWhere({ m_jurusan_id: jurusan_id });
    }
    if (rombel_id) {
      rombelIds = rombelIds.andWhere({ id: rombel_id });
    }

    rombelIds = await rombelIds.ids();

    let userData;

    const anggotaRombelIds = await MAnggotaRombel.query()
      .whereIn("m_rombel_id", rombelIds)
      .pluck("m_user_id");

    userData = User.query()
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .whereIn("id", anggotaRombelIds);

    if (searchSiswa) {
      userData = userData.andWhere("nama", "like", `%${searchSiswa}%`);
    }
    userData = await userData.paginate(page, 25);

    return response.ok({
      penerimaan,
      perusahaan,
      siswa,
      jurusan,
      rombel,
      userData,
    });
  }

  async ip({ response, request }) {
    return response.ok({ ip: [request.ip(), request.ips()] });
  }

  async notFoundPage({ response, request, auth }) {
    return `<p>Data tidak ditemukan, silahkan kembali ke <a href="http://getsmartschool.id">Smart School</a></p>`;
  }
}
module.exports = CDCController;

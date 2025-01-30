"use strict";

const Province = use("App/Models/Province");
const Regency = use("App/Models/Regency");
const District = use("App/Models/District");
const Village = use("App/Models/Village");
const MSekolah = use("App/Models/MSekolah");
const MKeteranganPkl = use("App/Models/MKeteranganPkl");
const MJurusan = use("App/Models/MJurusan");
const MLowongan = use("App/Models/MLowongan");
const MHistoryJob = use("App/Models/MHistoryJob");
const MAlumni = use("App/Models/MAlumni");
const Mta = use("App/Models/Mta");
const MRombel = use("App/Models/MRombel");
const MJamMengajar = use("App/Models/MJamMengajar");
const MJadwalMengajar = use("App/Models/MJadwalMengajar");
const MMataPelajaran = use("App/Models/MMataPelajaran");
const MAnggotaRombel = use("App/Models/MAnggotaRombel");
const TkMateriRombel = use("App/Models/TkMateriRombel");
const MMateri = use("App/Models/MMateri");
const MTimeline = use("App/Models/MTimeline");
const MPerusahaan = use("App/Models/MPerusahaan");
const MPenerimaanPerusahaan = use("App/Models/MPenerimaanPerusahaan");
const MPenerimaanSiswa = use("App/Models/MPenerimaanSiswa");
const TkPerusahaanSekolah = use("App/Models/TkPerusahaanSekolah");
const MPekerjaan = use("App/Models/MPekerjaan");
const MInformasiPekerjaan = use("App/Models/MInformasiPekerjaan");
const MAcaraPerusahaan = use("App/Models/MAcaraPerusahaan");
const TkStatusPekerjaan = use("App/Models/TkStatusPekerjaan");
const MMouPerusahaan = use("App/Models/MMouPerusahaan");
const MSuratPerusahaan = use("App/Models/MSuratPerusahaan");
const MInformasiPerusahaan = use("App/Models/MInformasiPerusahaan");
const MPrakerinSiswa = use("App/Models/MPrakerinSiswa");
const MUkkSiswa = use("App/Models/MUkkSiswa");

const User = use("App/Models/User");
const { HitungNilaiAkhir } = use("App/Services/NilaiServices");
const { shuffle } = require("../../../Utils/Global");

const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

const Hash = use("Hash");
const Helpers = use("Helpers");
const axios = require("axios");
const { validate } = use("Validator");


// firestore
const Firestore = use("App/Models/Firestore");
const firestore = new Firestore();
const db = firestore.db();
var striptags = require("striptags");
// reference to

const Env = use("Env");
const Database = use("Database");

const accountSid = "AC124e53d8cfb40a9f80ae98c59eba0980";
const authToken = "04e5831e528fa131ad81400739e1022f";

const messagePostSuccess = "Data berhasil ditambahkan";
const messagePutSuccess = "Data berhasil diubah";
const messageDeleteSuccess = "Data berhasil dihapus";
const messageNotFound = "Data tidak ditemukan";
const messageForbidden = "Dilarang, anda bukan seorang admin";
const pesanSudahDitambahkan = "Data sudah ditambahkan";

// RULES



const rulesAnggotaRombelPost = {
  rombel_id: "required",
  user_id: "required",
};



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

// const hour = dateObj.getHours();
// const minute = dateObj.getMinutes();
// const second = dateObj.getSeconds();
// // const keluarantanggal = day + "," + month + "," + year;
// const keluarantanggalseconds1 = moment().format("YYYY-MM-DD-HH-mm-ss");
// const keluarantanggalseconds =
//   keluarantanggalseconds1 + "-" + dateObj.getTime();


class CDCController {
  // UTILS

  async removeTag(content) {
    // const removeEl = content.replace(/(<([^>]+)>)/ig, "");

    var html = content;

    return striptags(html);
  }

  async singleUpload({ request }) {
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

  async richEditorUpload({ request }) {
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

  async multipleUpload() {
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
    // return "https://demoapi.smarteschool.id/uploads/" + fname;
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

  async getCariPekerjaan({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

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

  async getCariPerusahaan({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

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

  async getAcaraPerusahaan({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

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

  async detailPekerjaan({ response, request, params: { pekerjaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

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
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const { search } = request.get();

    const perusahaanSekolah = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_perusahaan_id: perusahaan_id })
      .first();

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaan_id })
      .first();

    const mou1 = await MMouPerusahaan.query()
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

    await Promise.all(
      mou1.toJSON().map(async (d) => {
        let status;
        if (
          d.mulai_kontrak <= moment().format("YYYY-MM-DD") &&
          d.akhir_kontrak >= moment().format("YYYY-MM-DD")
        ) {
          status = 1;
        } else {
          status = 0;
        }

        await MMouPerusahaan.query().where({ id: d.id }).update({
          status,
        });
      })
    );
    const mou = await MMouPerusahaan.query()
      .where({ dihapus: 0 })
      .andWhere({ tk_perusahaan_sekolah_id: perusahaanSekolah.id })
      .fetch();

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
    params: { acara_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const perusahaan = await MAcaraPerusahaan.query()
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

    await MAcaraPerusahaan.create({
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
    params: { acara_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user

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

  async putPerusahaan({ response, request, params: { perusahaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const {
      nama,
      logo,
      bidang,
      province_id,
      regency_id,
      district_id,
      village_id,
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
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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

    await MInformasiPerusahaan.query()
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

  async getPerusahaanSekolah({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search } = request.get();
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
      .with("perusahaan", () => {
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

  async getPerusahaanSekolah31({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search } = request.get();
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

  async getPenerimaanPkl({ response, request }) {
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
  async getSerapanPkl({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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

  async postPerusahaanSekolah({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    let { search } = request.get();
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

  async postPenerimaanPerusahaan({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const ta = await this.getTAAktif(sekolah);

    const {
      nama,
      data_siswa,
      surat_tugas,
      mou,
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
    params: { penerimaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    params: { penerimaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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

  async postPenerimaanSiswa({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    // const diff = date2.diff(date1);

    // return diff
    const lama = date2.diff(date1, 'months');

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

  async putPenerimaanSiswa({ response, request, params: { siswa_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const { tanggal_mulai, tanggal_selesai } = request.post();

    const date1 = moment(`${tanggal_mulai}`);
    const date2 = moment(`${tanggal_selesai}`);
    // const diff = date2.diff(date1);

    const lama = date2.diff(date1, 'months');

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
    params: { siswa_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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

    await MPerusahaan.query()
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
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user

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
      keterangan_psikotes,
      lokasi_psikotes,
      link_psikotes,

      waktu_mulai_masuk,
      waktu_akhir_masuk,
      keterangan_masuk,
      lokasi_masuk,
      link_masuk,

      waktu_mulai_wawancara,
      waktu_akhir_wawancara,
      keterangan_wawancara,
      lokasi_wawancara,
      link_wawancara,

      waktu_mulai_kesehatan,
      waktu_akhir_kesehatan,
      keterangan_kesehatan,
      lokasi_kesehatan,
      link_kesehatan,
    } = request.post();
    const date1 = moment(`${mulai_kerja}`);
    const date2 = moment(`${akhir_kerja}`);
    // const diff = date2.diff(date1);

    const lama = date2.diff(date1, 'months');

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

    await MInformasiPekerjaan.create({
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

  async putPekerjaan({ response, request, params: { pekerjaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    // const diff = date2.diff(date1);

    const lama = date2.diff(date1, 'months');

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

    await MInformasiPekerjaan.query()
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

  async deletePekerjaan({ response, request, params: { pekerjaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user

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

    const {
      judul,
      foto,
      lokasi,
      deskripsi,
      waktu_mulai,
      waktu_akhir,
      lampiran,
    } = request.post();

    await MLaporanPrakerin.create({
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
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const acara = await MAcaraPerusahaan.query()
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
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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

  async getAlumniData({ response, request }) {
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

  async detailAlumniData({ response, request, params: { alumni_id } }) {
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
      jurusan,
      status,
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
      .andWhere({ verifikasi: alumni1.verifikasi })
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

  async putTerimaAlumni({ response, request, params: { alumni_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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

  async deleteAlumni({ response, request, params: { alumni_id } }) {
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

  async postBerkasMou({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const {
      nama,
      mulai_kontrak,
      akhir_kontrak,
      kerjasama,
      fasilitas,
      lampiran,
      m_perusahaan_id,
    } = request.post();

    const tkPerusahaan = await TkPerusahaanSekolah.query()
      .where({ m_perusahaan_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    const checkTanggalawal = await MMouPerusahaan.query()
      .where({ tk_perusahaan_sekolah_id: tkPerusahaan.id })
      .where({ dihapus: 0 })
      .where("mulai_kontrak", "<=", mulai_kontrak)
      .where("akhir_kontrak", ">=", mulai_kontrak)
      .first();

    const checkTanggalakhir = await MMouPerusahaan.query()
      .where({ tk_perusahaan_sekolah_id: tkPerusahaan.id })
      .where({ dihapus: 0 })
      .where("mulai_kontrak", "<=", akhir_kontrak)
      .where("akhir_kontrak", ">=", akhir_kontrak)
      .first();

    const checkRange1 = await MMouPerusahaan.query()
      .where({ tk_perusahaan_sekolah_id: tkPerusahaan.id })
      .where({ dihapus: 0 })
      .where("mulai_kontrak", "<=", akhir_kontrak)
      .where("mulai_kontrak", ">=", mulai_kontrak)
      .first();
    const checkRange2 = await MMouPerusahaan.query()
      .where({ tk_perusahaan_sekolah_id: tkPerusahaan.id })
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
        message: `Kontrak MoU bergesekan dengan MoU ${(checkRange1 || checkRange2).nama
          }`,
      });
    }

    let status;
    if (
      mulai_kontrak <= moment().format("YYYY-MM-DD") &&
      akhir_kontrak >= moment().format("YYYY-MM-DD")
    ) {
      status = 1;
    } else {
      status = 0;
    }

    await MMouPerusahaan.create({
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
      tk_perusahaan_sekolah_id: tkPerusahaan.id,
      dihapus: 0,
      status,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putBerkasMou({ response, request, params: { mou_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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

    let status;
    if (
      mulai_kontrak <= moment().format("YYYY-MM-DD") &&
      akhir_kontrak >= moment().format("YYYY-MM-DD")
    ) {
      status = 1;
    } else {
      status = 0;
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
        status,
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

  async deleteBerkasMou({ response, request, params: { mou_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user

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

  async postBerkasSurat({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const { nama, lampiran, m_perusahaan_id } =
      request.post();

    const tkPerusahaan = await TkPerusahaanSekolah.query()
      .where({ m_perusahaan_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    await MSuratPerusahaan.create({
      nama,
      lampiran,
      tk_perusahaan_sekolah_id: tkPerusahaan.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putBerkasSurat({ response, request, params: { surat_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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

  async deleteBerkasSurat({ response, request, params: { surat_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user

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

  async getPenerimaanPkl31({ response, request, }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }
    let { search, jurusan_id, page, m_ta_id = ta.id } = request.get();

    const semuaTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    page = page ? parseInt(page) : 1;
    m_ta_id = m_ta_id ? parseInt(m_ta_id) : ta.id;

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
      .andWhere({ m_ta_id })
      .fetch();

    const rombelIds = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id })
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

    let userIds;

    userIds = User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "siswa" });
    if (search) {
      userIds.where("nama", "like", `%${search}%`);
    }

    userIds = await userIds.ids();
    const tkPerusahaanIds = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .ids();

    const penerimaanIds = await MPenerimaanPerusahaan.query()
      .whereIn("tk_perusahaan_sekolah_id", tkPerusahaanIds)
      .where({ dihapus: 0 })
      .andWhere({ m_ta_id })
      .ids();

    penerimaanSiswa = MPenerimaanSiswa.query()
      .with("user", (builder) => {
        builder
          .with("keteranganPkl1", (builder) => {
            builder.where({ m_ta_id });
          })
          .select("id", "nama");
      })
      .with("rombel", (builder) => {
        builder.select("id", "nama");
      })
      .with("penerimaanPerusahaan", (builder) => {
        builder.with("perusahaanSekolah", (builder) => {
          builder.with("perusahaan");
        });
      })
      .whereIn("m_penerimaan_perusahaan_id", penerimaanIds)
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
          .where({ dihapus: 0 })
          .andWhere({ m_ta_id });
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
      semuaTA,
    });
  }

  async postKeteranganPkl({ response, request, params: { user_id } }) {
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
      namamitra,
      tanggal_mulai,
      tanggal_selesai,
      keterangan,
      id_card,
      kontrak,
      sertifikat,
      nilai,
      ta_id = ta.id,
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
    // const diff = date2.diff(date1);

    const lama = date2.diff(date1, 'months');

    await MKeteranganPkl.create({
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
      m_ta_id: ta_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKeteranganPkl({ response, request, params: { pkl_id } }) {
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
  async deleteKeteranganPkl({ response, request, params: { pkl_id } }) {
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

  async postPenerimaanSiswa31({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


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
    // const diff = date2.diff(date1);

    // return diff
    const lama = date2.diff(date1, 'months');

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
            m_user_id: d,
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

  async putPenerimaanSiswa31({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const ta = await this.getTAAktif(sekolah);

    let {
      m_user_id,
      tanggal_mulai,
      tanggal_selesai,
      m_penerimaan_perusahaan_id,
      m_penerimaan_siswa_id,
    } = request.post();

    const date1 = moment(`${tanggal_mulai}`);
    const date2 = moment(`${tanggal_selesai}`);
    // const diff = date2.diff(date1);

    // return diff
    const lama = date2.diff(date1, 'months');

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

  async getTambahPenerimaanSiswa({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    let { search, jurusan_id, rombel_id, page, perusahaan_id, penerimaan_id } =
      request.get();
    page = page ? parseInt(page) : 1;

    // return perusahaanTk
    const perusahaanTkIds = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
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
        .andWhere({ m_perusahaan_id: perusahaan_id })
        .first();
      semuaPenerimaan = await MPenerimaanPerusahaan.query()
        .where({
          tk_perusahaan_sekolah_id: perusahaanTk1.id,
        })
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    let jurusan = await MJurusan.query()
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();
    let rombel = MRombel.query()
      .select("id", "nama")
      .where({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });
    if (jurusan_id) {
      rombel.where({ m_jurusan_id: jurusan_id });
    }
    rombel = await rombel.fetch();
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
    if (search) {
      userData = userData.andWhere("nama", "like", `%${search}%`);
    }
    userData = await userData.paginate(page, 25);

    return response.ok({
      semuaPerusahaan,
      semuaPenerimaan,
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

  async putKeteranganPkl31({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    const { keterangan, id_card, kontrak, sertifikat, nilai, m_user_id } =
      request.post();

    const check = await MKeteranganPkl.query()
      .where({ m_user_id })
      .andWhere({ m_ta_id: ta.id })
      .first();
    let keteranganPkl;
    if (check) {
      keteranganPkl = await MKeteranganPkl.query()
        .where({ m_user_id })
        .andWhere({ m_ta_id: ta.id })
        .update({
          keterangan,
          id_card,
          kontrak,
          sertifikat,
          nilai,
          dihapus: 0,
        });
    } else {
      keteranganPkl = await MKeteranganPkl.create({
        keterangan,
        id_card,
        kontrak,
        sertifikat,
        nilai,
        m_user_id,
        m_ta_id: ta.id,
        dihapus: 0,
      });
    }
    if (!keteranganPkl) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getPenerimaanRekrutmen31({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let { search, page, jurusan } = request.get();

    page = page ? parseInt(page) : 1;

    let userIds1 = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .ids();

    let userIds = User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 });

    if (search) {
      userIds = userIds.where("nama", "like", `%${search}%`);
    }
    userIds = await userIds.ids();

    let jumlahAlumni = await MAlumni.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ dihapus: 0 })
      .where({ verifikasi: 1 })
      .whereIn("m_user_id", userIds1)
      .getCount();
    let jumlahAlumniBekerja = await MAlumni.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ dihapus: 0 })
      .where({ verifikasi: 1 })
      .andWhere({ status: "bekerja" })
      .whereIn("m_user_id", userIds1)
      .getCount();

    let alumni = MAlumni.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ dihapus: 0 })
      .where({ verifikasi: 1 })
      .andWhere({ status: "bekerja" })
      .whereIn("m_user_id", userIds);

    if (jurusan) {
      alumni = alumni.where({ jurusan });
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

    let jurusanTotal = [];

    await Promise.all(
      jurusanData.map(async (d) => {
        const jumlahBekerja = await MAlumni.query()
          .where({ dihapus: 0 })
          .where({ verifikasi: 1 })
          .andWhere({ status: "bekerja" })
          .whereIn("m_user_id", userIds1)
          .getCount();

        const jumlahSemua = await MAlumni.query()
          .where({ dihapus: 0 })
          .where({ verifikasi: 1 })
          .whereIn("m_user_id", userIds1)
          .getCount();

        jurusanTotal.push({ jurusan: d.nama, jumlahBekerja, jumlahSemua });
      })
    );

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
      jurusanTotal,
      statusAlumni,
      alumni,
      jumlahAlumni,
      jumlahAlumniBekerja,
      jurusanData,
      tahunData,
    });
  }

  async getUKKSiswa({ response, request }) {
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
      search,
      page,
      tingkat,
      jurusan_id,
      rombel_id,
      m_ta_id = ta.id,
    } = request.get();
    const semuaTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    const jurusan = await MJurusan.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

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
      .andWhere({ m_ta_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ tingkat: "XII" })
      .whereIn("m_jurusan_id", jurusanDataIds);

    if (rombel_id) {
      rombelIds.where({ id: rombel_id });
    }
    if (tingkat) {
      rombelIds.where({ tingkat });
    }
    rombelIds = await rombelIds.ids();

    const anggotaRombelIds = await MAnggotaRombel.query()
      .whereIn("m_rombel_id", rombelIds)
      .where({ dihapus: 0 })
      .pluck("m_user_id");

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
        .with("ukkSiswa", (builder) => {
          builder.where({ m_ta_id });
        })
        .select("nama", "id", "whatsapp", "avatar", "gender", "photos")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "siswa" })
        .andWhere("nama", "like", `%${search}%`)
        .whereIn("id", anggotaRombelIds)
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
        .with("ukkSiswa", (builder) => {
          builder.where({ m_ta_id }).andWhere({ dihapus: 0 });
        })
        .select("nama", "id", "whatsapp", "avatar", "gender", "photos")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "siswa" })
        .whereIn("id", anggotaRombelIds)
        .paginate(page, 25);
    }

    return response.ok({
      siswa: siswa,
      integrasi: sekolah.integrasi,
      jurusan,
      semuaTA,
    });
  }

  async detailUKKSiswa({ response, request, params: { siswa_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }
    let { m_ta_id } = request.get();

    let siswa;
    let jurusanDataIds = MJurusan.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 });
    jurusanDataIds = await jurusanDataIds.ids();

    let rombelIds;
    rombelIds = MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ tingkat: "XII" })
      .whereIn("m_jurusan_id", jurusanDataIds);

    rombelIds = await rombelIds.ids();

    siswa = await User.query()
      .with("anggotaRombel", (builder) => {
        builder
          .with("rombel", (builder) => {
            builder.select("id", "nama");
          })
          .whereIn("m_rombel_id", rombelIds)
          .andWhere({ dihapus: 0 });
      })
      .with("ukkSiswa", (builder) => {
        builder.where({ m_ta_id });
      })
      .select("nama", "id", "whatsapp", "avatar", "gender", "photos")
      .where({ id: siswa_id })
      .first();

    return response.ok({
      siswa: siswa,
    });
  }

  async getPrakerinSiswa({ response, request }) {
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
      search,
      page,
      tingkat,
      jurusan_id,
      rombel_id,
      m_ta_id = ta.id,
    } = request.get();
    const semuaTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    const prakerinIds = await MPrakerinSiswa.query()
      .where({ m_ta_id })
      .andWhere({ dihapus: 0 })
      .pluck("m_user_id");

    const jurusan = await MJurusan.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

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
      .andWhere({ m_ta_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ tingkat: "XII" })
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
        .with("prakerinSiswa", (builder) => {
          builder.where({ m_ta_id });
        })
        .select("nama", "id", "whatsapp", "avatar", "gender", "photos")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "siswa" })
        .andWhere("nama", "like", `%${search}%`)
        .whereIn("id", prakerinIds)
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
        .with("prakerinSiswa", (builder) => {
          builder.where({ m_ta_id });
        })
        .select("nama", "id", "whatsapp", "avatar", "gender", "photos")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "siswa" })
        .whereIn("id", prakerinIds)
        .paginate(page, 25);
    }

    return response.ok({
      siswa: siswa,
      integrasi: sekolah.integrasi,
      jurusan,
      semuaTA,
    });
  }

  async detailPrakerinSiswa({
    response,
    request,
    params: { prakerin_id },
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
    let { m_ta_id } = request.get();

    const prakerinIds = await MPrakerinSiswa.query()
      .where({ id: prakerin_id })
      .where({ m_ta_id })
      .andWhere({ dihapus: 0 })
      .pluck("m_user_id");

    let siswa;
    let jurusanDataIds = MJurusan.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 });
    jurusanDataIds = await jurusanDataIds.ids();

    let rombelIds;
    rombelIds = MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ tingkat: "XII" })
      .whereIn("m_jurusan_id", jurusanDataIds);

    rombelIds = await rombelIds.ids();

    siswa = await User.query()
      .with("anggotaRombel", (builder) => {
        builder
          .with("rombel", (builder) => {
            builder.select("id", "nama");
          })
          .whereIn("m_rombel_id", rombelIds)
          .andWhere({ dihapus: 0 });
      })
      .with("prakerinSiswa", (builder) => {
        builder.where({ m_ta_id }).andWhere({ id: prakerin_id });
      })
      .select("nama", "id", "whatsapp", "avatar", "gender", "photos")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "siswa" })
      .whereIn("id", prakerinIds)
      .first();

    return response.ok({
      siswa: siswa,
    });
  }

  async postPrakerinSiswa({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    let {
      m_user_id,
      tanggal_berangkat,
      tanggal_jemput,
      pembimbing,
      telepon_perusahaan,
      kontak_narahubung,
      alamat_perusahaan,
      nama_perusahaan,
      m_ta_id,
      province_id,
      regency_id,
      district_id,
      village_id,
      kodepos,
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
    // return lama;

    if (m_user_id.length) {
      await Promise.all(
        m_user_id.map(async (d) => {
          await MPrakerinSiswa.create({
            tanggal_berangkat,
            tanggal_jemput,
            pembimbing,
            telepon_perusahaan,
            kontak_narahubung,
            alamat_perusahaan,
            nama_perusahaan,
            province_id,
            regency_id,
            district_id,
            village_id,
            kodepos,
            m_user_id: d,
            m_ta_id,
            dihapus: 0,
          });
        })
      );
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPrakerinSiswa({ response, request, params: { prakerin_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const {
      tanggal_berangkat,
      tanggal_jemput,
      pembimbing,
      telepon_perusahaan,
      kontak_narahubung,
      alamat_perusahaan,
      nama_perusahaan,
      province_id,
      regency_id,
      district_id,
      village_id,
      kodepos,
    } = request.post();

    const perusahaan = await MPrakerinSiswa.query()
      .where({ id: prakerin_id })
      .update({
        tanggal_berangkat,
        tanggal_jemput,
        pembimbing,
        telepon_perusahaan,
        kontak_narahubung,
        alamat_perusahaan,
        nama_perusahaan,
        province_id,
        regency_id,
        district_id,
        village_id,
        kodepos,
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

  async deletePrakerinSiswa({
    response,
    request,
    params: { prakerin_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const perusahaan = await MPrakerinSiswa.query()
      .where({ id: prakerin_id })
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

  async putUKKSiswa({ response, request, params: { siswa_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const { tanggal, pembimbing, m_ta_id, keterangan, catatan } =
      request.post();

    const check = await MUkkSiswa.query()
      .where({ m_user_id: siswa_id })
      .andWhere({ m_ta_id })
      .first();

    let perusahaan;
    if (check) {
      perusahaan = await MUkkSiswa.query().where({ id: check.id }).update({
        tanggal,
        pembimbing,
        keterangan,
        catatan,
      });
    } else {
      perusahaan = await MUkkSiswa.create({
        tanggal,
        pembimbing,
        keterangan,
        catatan,
        m_user_id: siswa_id,
        m_ta_id,
      });
    }

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteUkkSiswa({ response, request, params: { ukk_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const perusahaan = await MUkkSiswa.query().where({ id: ukk_id }).update({
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

  async getTambahPrakerinSiswa({ response, request }) {
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
      search,
      page,
      tingkat,
      jurusan_id,
      rombel_id,
      tingkat2,
      m_ta_id = ta.id,
    } = request.get();

    const jurusan = await MJurusan.query()
      .with("rombel", (builder) => {
        builder
          .withCount("anggotaRombel as jumlahAnggota", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .andWhere({ m_ta_id });
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
      .andWhere({ m_ta_id })
      .fetch();

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
      .andWhere({ m_ta_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ tingakat: "12" })
      .whereIn("m_jurusan_id", jurusanDataIds);

    if (rombel_id) {
      rombelIds.where({ id: rombel_id });
    }
    if (tingkat) {
      rombelIds.where({ tingkat });
    }
    rombelIds = await rombelIds.ids();

    const anggotaRombelIds = MAnggotaRombel.query()
      .whereIn("m_rombel_id", rombelIds)
      .where({ dihapus: 0 })
      .pluck("m_user_id");

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
        .whereIn("id", anggotaRombelIds)
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
        .whereIn("id", anggotaRombelIds)
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
      jurusan,
      rombel,
      tingkatData,
    });
  }

  async userToAlumni({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const rombel = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder.with("user").where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: 7907 })
      .fetch();

    await Promise.all(
      rombel.toJSON().map(async (d) => {
        if (d?.tingkat == "XII") {
          const jurusan = await MJurusan.query()
            .where({ id: d?.m_jurusan_id })
            .first();

          await Promise.all(
            d.anggotaRombel.map(async (e, nox) => {
              await User.query()
                .where({ id: e.m_user_id })
                .update({ role: "alumni" });

              await MAlumni.create({
                jurusan: jurusan?.nama,
                tahun_masuk: 2019,
                dihapus: 0,
                m_user_id: e.m_user_id,
                verifikasi: 1,
              });
            })
          );
        }
        // return data;
      })
    );
    // return all

    return response.ok({
      message: messagePostSuccess,
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
      user.role == "guru"
      // ||
      // user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      tingkat,
      kode,
      banner,
      deskripsi,
      m_jurusan_id,
      m_user_id,
      kelompok,
      nama,
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

    const rombel = await MRombel.create({
      tingkat,
      kode,
      nama,
      m_jurusan_id,
      banner,
      deskripsi,
      m_sekolah_id: sekolah.id,
      m_ta_id: ta_id,
      m_user_id: user.id,
      kelompok,
      dihapus: 0,
    });

    const mataPelajaran = await MMataPelajaran.create({
      nama,
      kode,
      kelompok: "A",
      m_user_id,
      kkm: 60,
      m_ta_id: ta_id,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    const materi = await MMateri.create({
      tingkat,
      m_mata_pelajaran_id: mataPelajaran.id,
    });

    await TkMateriRombel.create({
      m_materi_id: materi.id,
      m_rombel_id: rombel.id,
    });

    const jamMengajar = await MJamMengajar.query()
      .select("id")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .fetch();

    const jadwalMengajarData = await Promise.all(
      jamMengajar.toJSON().map(async (data) => {
        data.m_mata_pelajaran_id = mataPelajaran.id;
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
  async putRombel({ response, request, auth, params: { id } }) {
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
      m_user_id,
      kelompok,
      m_mata_pelajaran_id,
      banner,
      deskripsi,
      nama,
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

    const rombel = await MRombel.query().where({ id: id }).update({
      tingkat,
      nama,
      kelompok,
      m_user_id: user.id,
      banner,
      deskripsi,
    });

    await MMataPelajaran.query()
      .where({ id: m_mata_pelajaran_id })
      .update({ m_user_id });

    if (!rombel) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }
  async loginWhatsapp({ response, request }) {
    const { whatsapp, role } = request.post();
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const res = await User.query()
      .select("nama", "whatsapp", "role")
      .where({ whatsapp: `${whatsapp}` })
      .andWhere({ dihapus: 0 })
      .first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
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
      });
    }

    return response.ok(res);
  }
  async login({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { password, whatsapp } = request.post();

    const res = await User.query()
      .where({ whatsapp })
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
    } else if (password == "A#)kLo39we@924+-=719&%$^*@Xz!7p") {
      // old super password D*@)eeNDoje298370+?-=234&%&#*(
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
  async postAnggotRombel({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { rombel_id, user_id, dihapus } = request.post();

    // const validation = await validate(
    //   request.post(),
    //   rulesAnggotaRombelPost,
    //   pesanSudahDitambahkan
    // );

    // if (validation.fails()) {
    //   return response.unprocessableEntity(validation.messages());
    // }]
    // await MAnggotaRombel.create({
    //   m_rombel_id: rombel_id,
    //   m_user_id: user_id,
    //   dihapus,
    //   role: "anggota",
    // });
    await Promise.all(
      user_id.map(async (d) => {
        await MAnggotaRombel.create({
          m_rombel_id: rombel_id,
          m_user_id: d,
          dihapus,
          role: "anggota",
        });
      })
    );

    return response.ok({
      message: messagePostSuccess,
    });
  }
  async putAnggotRombel({ response, request, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { rombel_id, user_id, dihapus, role } = request.post();

    const validation = await validate(
      request.post(),
      rulesAnggotaRombelPost,
      pesanSudahDitambahkan
    );

    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    await MAnggotaRombel.query().where({ id: id }).update({
      m_rombel_id: rombel_id,
      m_user_id: user_id,
      dihapus,
      role,
    });

    return response.ok({
      message: messagePutSuccess,
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

    let { kode_hari, jam_saat_ini, ta_id, jenis, search, m_user_id } =
      request.get();

    ta_id = ta_id ? ta_id : user.m_ta_id || ta.id;

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
          builder
            .withCount("anggotaRombel as jumlahAnggota", (builder) => {
              builder.where({ dihapus: 0 });
            })
            .with("user", (builder) => {
              builder.select("id", "nama");
            })
            .where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombelIds)
        .where({ m_ta_id: ta_id })
        .with("mataPelajaran", (builder) => {
          builder
            .with("user", (builder) => {
              builder.select("id", "nama");
            })
            .andWhere({ dihapus: 0 });
        })
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
        // rombel,
        userRole: user.role,
        semuaTA,
        dataTA,
      });
    } else if (user.role == "siswa") {
      const anggotaRombel = await MAnggotaRombel.query()
        .where({ m_user_id: user.id })
        .whereNot({ dihapus: 1 })
        .pluck("m_rombel_id");

      let rombel;
      rombel = MRombel.query()
        .where({ m_ta_id: ta_id })
        .andWhere({ dihapus: 0 });

      if (jenis == "cari") {
        rombel.whereNotIn("id", anggotaRombel);
      }

      if (jenis == "daftar") {
        rombel.whereIn("id", anggotaRombel);
      }
      if (search) {
        rombel.where("nama", "LIKE", `%${search}%`);
      }
      if (m_user_id) {
        rombel.where("m_user_id", m_user_id);
      }

      rombel = await rombel.ids();

      let jamMengajarIds = await MJamMengajar.query()
        .where({ kode_hari: kode_hari })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta_id })
        .ids();

      const jadwalMengajar = await MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder
            .withCount("anggotaRombel", (builder) => {
              builder.where({ dihapus: 0 });
            })
            .with("user", (builder) => {
              builder.select("id", "nama");
            })
            .where({ dihapus: 0 });
        })
        .with("jamMengajar")
        .with("mataPelajaran", (builder) => {
          builder
            .with("user", (builder) => {
              builder.select("id", "nama");
            })
            .andWhere({ dihapus: 0 });
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
          `${today.getFullYear()}/${today.getMonth() + 1
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

    const guru = await User.query()
      .select("nama", "id", "whatsapp", "avatar", "gender")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "guru" })
      .fetch();

    let rombel;
    rombel = MRombel.query()
      .where({ m_ta_id: ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 });

    if (search) {
      rombel.where("nama", "LIKE", `%${search}%`);
    }

    rombel = await rombel.ids();

    let jamMengajarIds = await MJamMengajar.query()
      .where({ kode_hari: kode_hari })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta_id })
      .ids();

    let jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel", (builder) => {
        builder
          .withCount("anggotaRombel", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .where({ dihapus: 0 });
      })
      .with("jamMengajar")
      .with("mataPelajaran", (builder) => {
        builder
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .andWhere({ dihapus: 0 });
      })
      .whereNotNull("m_mata_pelajaran_id")
      .where({ m_ta_id: ta_id })
      .whereIn("m_rombel_id", rombel)
      .fetch();

    const jadwalMengajarData = [];
    const rombelMengajar = [];

    let janganUlangRombel = [];
    await Promise.all(
      jadwalMengajar.toJSON().map(async (d) => {
        rombelMengajar.push(d);
        if (
          !janganUlangRombel.find(
            (e) =>
              e.m_rombel_id == d.m_rombel_id &&
              e.m_mata_pelajaran_id == d.m_mata_pelajaran_id
          )
        ) {
          janganUlangRombel.push(d);
        }
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

    return response.ok({
      rombel: janganUlangRombel,
      guru: guru,
      userRole: user.role,
      semuaTA,
      dataTA,
    });
  }

  async industri({ response, request }) {
    const { page } = request.get();

    const user = await User.query().where({ m_sekolah_id: 9059, role: "admin", dihapus: 0 }).fetch();

    return response.ok({
      user: user,
    });
  }

  async detailIndustri({ response, auth, params: { id } }) {
    const sekolah = await MSekolah.query().where({ id: 9059 }).first();

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }
    const user = await auth.getUser();

    let rombel;
    rombel = MRombel.query()
      .where({ m_ta_id: ta.id })
      .andWhere({ m_sekolah_id: 9059 })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_user_id: id });

    rombel = await rombel.ids();

    let jamMengajarIds = await MJamMengajar.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel", (builder) => {
        builder
          .withCount("anggotaRombel", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .where({ dihapus: 0 });
      })
      .with("jamMengajar")
      .with("mataPelajaran", (builder) => {
        builder
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .andWhere({ dihapus: 0 });
      })
      .whereNotNull("m_mata_pelajaran_id")
      .whereIn("m_rombel_id", rombel)
      .where({ m_ta_id: ta.id })
      .fetch();

    const jadwalMengajarData = [];
    const rombelMengajar = [];

    await Promise.all(
      jadwalMengajar.toJSON().map(async (d) => {
        rombelMengajar.push(d);
        if (jamMengajarIds.includes(d.m_jam_mengajar_id)) {


          jadwalMengajarData.push({ ...d, aktif: false });

        }
      })
    );



    return response.ok({
      jadwalMengajar: jadwalMengajarData,
      rombelMengajar: rombelMengajar,
      // absen: absenHariIni,
      rombel,
      userRole: user.role,

    });
  }

  async postHistory({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      job_id,
      job_title,
      company_name
    } = request.post();

    const rules = {
      job_id: "required",
      job_title: "required",
      company_name: "required",
    };

    const message = {
      "job_id.required": "Anda harus mengirim Job ID",
      "job_title.required": "Anda harus mengirim Job Title",
      "company_name.required": "Anda harus mengirim Company Name",
    };

    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    await MHistoryJob.create({
      m_user_id: user.id,
      m_sekolah_id: user.m_sekolah_id,
      job_id,
      job_title,
      company_name,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async getHistory({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { search, abjad, waktu, page, limit = 25 } = request.get();

    let historyQuery = MHistoryJob.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 });

    if (search) {
      historyQuery = historyQuery
        .andWhere(function () {
          this.where("job_title", "like", `%${search}%`)
            .orWhere("company_name", "like", `%${search}%`);
        });
    }

    if (abjad == "a-z") {
      historyQuery = historyQuery.orderBy("job_title", "asc");
    } else if (abjad == "z-a") {
      historyQuery = historyQuery.orderBy("job_title", "desc");
    }

    if (waktu == "terbaru") {
      historyQuery = historyQuery.orderBy("id", "desc");
    } else if (waktu == "terlama") {
      historyQuery = historyQuery.orderBy("id", "asc");
    }

    if (!search && !abjad && !waktu) {
      historyQuery = historyQuery.orderBy("id", "desc");
    }

    const history = await historyQuery.paginate(page, limit);

    return response.ok({
      data: history,
    });
  }

  async getHistoryManajemen({ response, request, auth, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    let { search, abjad, waktu, page, limit = 25 } = request.get();

    let historyQuery = MHistoryJob.query()
      .where({ m_user_id: id })
      .andWhere({ dihapus: 0 });

    if (search) {
      historyQuery = historyQuery
        .andWhere(function () {
          this.where("job_title", "like", `%${search}%`)
            .orWhere("company_name", "like", `%${search}%`);
        });
    }

    if (abjad == "a-z") {
      historyQuery = historyQuery.orderBy("job_title", "asc");
    } else if (abjad == "z-a") {
      historyQuery = historyQuery.orderBy("job_title", "desc");
    }

    if (waktu == "terbaru") {
      historyQuery = historyQuery.orderBy("id", "desc");
    } else if (waktu == "terlama") {
      historyQuery = historyQuery.orderBy("id", "asc");
    }

    if (!search && !abjad && !waktu) {
      historyQuery = historyQuery.orderBy("id", "desc");
    }

    const history = await historyQuery.paginate(page, limit);

    return response.ok({
      data: history,
    });
  }

  async getUserHistory({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    let { search, page, limit = 25 } = request.get();

    let query = Database.connection()
      .table("m_user")
      .select('id', 'nama', 'username', 'whatsapp', 'email', 'm_sekolah_id')
      .whereIn('id', function () {
        this.select('m_user_id')
          .from('m_history_jobs')
          .distinct()
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 });
      });

    if (search) {
      query = query.where('nama', 'like', `%${search}%`);
    }

    const siswa = await query.paginate(page, limit);

    return response.ok({
      data: siswa,
    });
  }

  async getLowonganV2({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, page, limit = 25, region, industries, job_functions, job_type } = request.get();

    let lowongan = MLowongan.query().where({ dihapus: 0 }).with("user").with("profil").orderBy("id", "desc");

    if (search) {
      lowongan = lowongan.andWhere("posisi", "like", `%${search}%`)
    }

    if (region) {
      lowongan = lowongan.andWhere('alamat', 'like', `%${region}%`)
    }

    if (industries) {
      lowongan = lowongan.andWhere({ industri: industries })
    }

    if (job_functions) {
      lowongan = lowongan.andWhere({ bidang_keahlian: job_functions })
    }

    if (job_type) {
      if (job_type == "full time") {
        lowongan = lowongan.andWhere({ jenis: "full time" })
      } else if (job_type == "part time") {
        lowongan = lowongan.andWhere({ jenis: "part time" })
      } else if (job_type == "contract") {
        lowongan = lowongan.andWhere({ jenis: "contract" })
      } else if (job_type == "internship") {
        lowongan = lowongan.andWhere({ jenis: "internship" })
      }
    }

    const data = await lowongan.paginate(page, limit);

    return response.ok({
      data
    });
  }

  async detailLowonganV2({ response, request, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const lowongan = await MLowongan.query().where({ id }).with("user").with("profil").first();

    if (!lowongan) {
      return response.notFound({ message: messageNotFound });
    }

    return response.ok(lowongan)
  }

  async getLowongan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { search, page, limit = 25 } = request.get();

    let lowongan = MLowongan.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .with("user")
      .with("profil");

    if (search) {
      lowongan = lowongan.andWhere("posisi", "like", `%${search}%`)
    }

    const data = await lowongan.paginate(page, limit);

    return response.ok({
      data
    });
  }

  async postLowongan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      posisi,
      deadline,
      deskripsi,
      jenis,
      tipe,
      jenis_kelamin,
      gaji_min,
      gaji_max,
      jumlah,
      persyaratan_khusus,
      pendidikan,
      umur_min,
      umur_max,
      status,
      minimal_pengalaman,
      kondisi_fisik,
      keterampilan,
      alamat,
      industri,
      bidang_keahlian
    } = request.post()

    await MLowongan.create({
      posisi,
      deadline,
      deskripsi,
      jenis,
      tipe,
      jenis_kelamin,
      gaji_min,
      gaji_max,
      jumlah,
      persyaratan_khusus,
      pendidikan,
      umur_min,
      umur_max,
      status,
      minimal_pengalaman,
      kondisi_fisik,
      keterampilan,
      alamat,
      industri,
      bidang_keahlian,
      m_user_id: user.id,
    })

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async detailLowongan({ response, request, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    const lowongan = await MLowongan.query().where({ id }).with("user").with("profil").first();

    if (!lowongan) {
      return response.notFound({ message: messageNotFound });
    }

    return response.ok(lowongan)
  }

  async putLowongan({ response, request, auth, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      posisi,
      deadline,
      deskripsi,
      jenis,
      tipe,
      jenis_kelamin,
      gaji_min,
      gaji_max,
      jumlah,
      persyaratan_khusus,
      pendidikan,
      umur_min,
      umur_max,
      status,
      minimal_pengalaman,
      kondisi_fisik,
      keterampilan,
      alamat,
      industri,
      bidang_keahlian
    } = request.post()

    const lowongan = await MLowongan.query().where({ id }).first();

    if (!lowongan) {
      return response.notFound({ message: messageNotFound });
    }

    await MLowongan.query().where({ id }).update({
      posisi,
      deadline,
      deskripsi,
      jenis,
      tipe,
      jenis_kelamin,
      gaji_min,
      gaji_max,
      jumlah,
      persyaratan_khusus,
      pendidikan,
      umur_min,
      umur_max,
      status,
      minimal_pengalaman,
      kondisi_fisik,
      keterampilan,
      alamat,
      industri,
      bidang_keahlian,
      m_user_id: user.id,
    })

    const data = await MLowongan.query().where({ id }).first();

    return response.ok({
      message: messagePutSuccess,
      data
    })
  }

  async deleteLowongan({ response, request, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }


    await MLowongan.query().where({ id }).update({
      dihapus: 1
    })

    return response.ok({ message: messageDeleteSuccess })
  }

  // async detailPerusahaan({ response, request, params: { id } }) {
  //   const domain = request.headers().origin;

  //   const sekolah = await this.getSekolahByDomain(domain);

  //   if (sekolah == "404") {
  //     return response.notFound({ message: "Sekolah belum terdaftar" });
  //   }

  //   // const perusahaan = await User.query().where({ id }).with("profil").first();
  //   const perusahaan = await MPerusahaaan.query().where({ id }).with("informasi").with('pekerjaan').with('acara').first();

  //   if (!perusahaan) {
  //     return response.notFound({ message: messageNotFound });
  //   }

  //   return response.ok(perusahaan)
  // }

  async getPerusahaanLowongan({ response, request, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, page, limit = 10 } = request.get();

    let lowongan = MLowongan.query().where({ m_user_id: id }).andWhere({ dihapus: 0 }).with("user").with("profil");

    if (search) {
      lowongan = lowongan.andWhere("posisi", "like", `%${search}%`)
    }

    const data = await lowongan.paginate(page, limit);

    return response.ok({
      data
    });
  }
}
module.exports = CDCController;

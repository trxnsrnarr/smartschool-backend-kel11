"use strict";

const { validate } = use("Validator");

const MSekolah = use("App/Models/MSekolah");
const Mta = use("App/Models/Mta");
const User = use("App/Models/User");
const MRencanaKeuangan = use("App/Models/MRencanaKeuangan");
const MRencanaTransaksi = use("App/Models/MRencanaTransaksi");
const MRencanaKategoriNeraca = use("App/Models/MRencanaKategoriNeraca");
const TkRencanaKategoriNeraca = use("App/Models/TkRencanaKategoriNeraca");
const MRencanaKategoriLabaRugi = use("App/Models/MRencanaKategoriLabaRugi");
const TkRencanaKategoriLabaRugi = use("App/Models/TkRencanaKategoriLabaRugi");
const MKeuRencanaJurnal = use("App/Models/MKeuRencanaJurnal");
const MKeuTemplateAkun = use("App/Models/MKeuTemplateAkun");
const MKeuAkun = use("App/Models/MKeuAkun");
const MRencanaRumusLabaRugi = use("App/Models/MRencanaRumusLabaRugi");
const MRencanaRumusArusKas = use("App/Models/MRencanaRumusArusKas");
const MRencanaRumusSaldoKasAwal = use("App/Models/MRencanaRumusSaldoKasAwal");
const MRencanaRumusSaldoKasAkhir = use("App/Models/MRencanaRumusSaldoKasAkhir");
const MRencanaKategoriTipeAkun = use("App/Models/MRencanaKategoriTipeAkun");
const MRencanaKategoriArusKas = use("App/Models/MRencanaKategoriArusKas");
const MKeuRumusPenyusutan = use("App/Models/MKeuRumusPenyusutan");

const MRumusKeuAkun = use("App/Models/MRumusKeuAkun");
const MKeuTemplateAnalisis = use("App/Models/MKeuTemplateAnalisis");
const MKeuTransaksi = use("App/Models/MKeuTransaksi");
const MRencanaAktivitasTransaksi = use("App/Models/MRencanaAktivitasTransaksi");
const TkRencanaKategoriTipeAkun = use("App/Models/TkRencanaKategoriTipeAkun");
const MHistoriAktivitas = use("App/Models/MHistoriAktivitas");
const MRekSekolah = use("App/Models/MRekSekolah");
const MKeuJurnal = use("App/Models/MKeuJurnal");
const MBarang = use("App/Models/MBarang");

const Excel = require("exceljs");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

const messagePostSuccess = "Data berhasil ditambahkan";
const messageSaveSuccess = "Data berhasil disimpan";
const messagePutSuccess = "Data berhasil diubah";
const messageDeleteSuccess = "Data berhasil dihapus";
const messageNotFound = "Data tidak ditemukan";
const messageForbidden = "Dilarang, anda bukan seorang admin";
const messageEmailSuccess = "Data berhasil dikirim ke email";
const pesanSudahDitambahkan = "Data sudah ditambahkan";

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
class KeuanganController {
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

  async getRencanaKeuangan({ request, response, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
  }

  async getPerencanaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    const { search } = request.get();

    let perencanaan = MRencanaKeuangan.query()
      .with("transaksi", (builder) => {
        builder
          .select("m_rencana_keuangan_id", "id")
          .where({ dihapus: 0 })
          .with("jurnal", (builder) => {
            builder
              .select("id", "m_rencana_transaksi_id", "jenis", "saldo")
              .where({ dihapus: 0 });
          });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 });

    if (search) {
      perencanaan.where("nama", "like", `%${search}%`);
    }

    perencanaan = await perencanaan.orderBy("tanggal_awal", "asc").fetch();

    // const transaksi = await MKeuTransaksi.query()
    //   .with("jurnal", (builder) => {
    //     builder.where({ jenis: "debit" }).andWhere({ dihapus: 0 });
    //   })
    //   .where({ m_sekolah_id: sekolah.id })
    //   .andWhere({ dihapus: 0 })
    //   .fetch();

    return response.ok({
      perencanaan,
    });
  }

  async detailRekeningPerencanaan({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();
    const akunIds = await MKeuAkun.query().where({dihapus:0}).andWhere({m_sekolah_id:sekolah.id}).ids()
    let rekSekolah = await MRekSekolah.query()
      // .with("akun", (builder) => {
      //   builder.where({ dihapus: 0 }).with("rencanaJurnal", (builder) => {
      //     builder
      //       .where({ dihapus: 0 })
      //       .whereIn("m_rencana_transaksi_id", transaksiIds);
      //   });
      // })
      .where({ m_rencana_keuangan_id: perencanaan_id })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("m_keu_akun_id",akunIds)
      .fetch();

    const transaksiIds = await MRencanaTransaksi.query()
      .where({ m_rencana_keuangan_id: perencanaan_id })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .ids();
    const jurnalIds = await MKeuRencanaJurnal.query()
      .where({ dihapus: 0 })
      .whereIn("m_rencana_transaksi_id", transaksiIds)
      .ids();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();
    const akun = await MKeuAkun.query()
      .with("rek", (builder) => {
        builder.where({ m_rencana_keuangan_id: perencanaan_id });
      })
      .with("rencanaJurnal", (builder) => {
        builder.whereIn("id", jurnalIds);
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    return response.ok({
      rekSekolah,
      keuangan,
      akun,
    });
  }

  async detailPerencanaan({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    let perencanaan = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .first();

    return response.ok({
      perencanaan,
    });
  }

  async postPerencanaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    let { nama, tanggal_awal, tanggal_akhir } = request.post();

    const rules = {
      nama: "required",
      tanggal_awal: "required",
      tanggal_akhir: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "tanggal_awal.required": "Tanggal Awal harus diisi",
      "tanggal_akhir.required": "Tanggal Akhir harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const checkTanggalawal = await MRencanaKeuangan.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where("tanggal_awal", "<=", tanggal_awal)
      .where("tanggal_akhir", ">=", tanggal_awal)
      .first();

    const checkTanggalakhir = await MRencanaKeuangan.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where("tanggal_awal", "<=", tanggal_akhir)
      .where("tanggal_akhir", ">=", tanggal_akhir)
      .first();

    const checkRange1 = await MRencanaKeuangan.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where("tanggal_awal", "<=", tanggal_akhir)
      .where("tanggal_awal", ">=", tanggal_awal)
      .first();
    const checkRange2 = await MRencanaKeuangan.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where("tanggal_akhir", "<=", tanggal_akhir)
      .where("tanggal_akhir", ">=", tanggal_awal)
      .first();
    if (checkTanggalawal) {
      return response.expectationFailed({
        message: `Tanggal awal berada dalam jangkauan rencana ${checkTanggalawal.nama}`,
      });
    }
    if (checkTanggalakhir) {
      return response.expectationFailed({
        message: `Tanggal akhir berada dalam jangkauan rencana ${checkTanggalakhir.nama}`,
      });
    }
    if (checkRange1 || checkRange2) {
      return response.expectationFailed({
        message: `Tanggal Rencana bergesekan dengan rencana ${
          (checkRange1 || checkRange2).nama
        }`,
      });
    }

    const perencanaan = await MRencanaKeuangan.create({
      nama,
      tanggal_awal,
      tanggal_akhir,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    const akunRekenings = await MRekSekolah.query()
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    const akunRencana = akunRekenings.toJSON().map((d) => {
      delete d.id;
      return {
        ...d,
        m_rencana_keuangan_id: perencanaan.id,
      };
    });

    await MRekSekolah.createMany(akunRencana);

    await MHistoriAktivitas.create({
      jenis: "Buat Perencanaan",
      m_user_id: user.id,
      akhir: `${nama}`,
      m_sekolah_id: sekolah.id,
      tipe: "perencanaan",
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }
  async putPerencanaan({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama, tanggal_awal, tanggal_akhir } = request.post();

    const rules = {
      nama: "required",
      tanggal_awal: "required",
      tanggal_akhir: "required",
    };
    const message = {
      "nama.required": "Nama harus diisi",
      "tanggal_awal.required": "Tanggal Awal harus diisi",
      "tanggal_akhir.required": "Tanggal Akhir harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const checkTanggalawal = await MRencanaKeuangan.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where("tanggal_awal", "<=", tanggal_awal)
      .where("tanggal_akhir", ">=", tanggal_awal)
      .whereNot("id", perencanaan_id)
      .first();

    const checkTanggalakhir = await MRencanaKeuangan.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where("tanggal_awal", "<=", tanggal_akhir)
      .where("tanggal_akhir", ">=", tanggal_akhir)
      .whereNot("id", perencanaan_id)
      .first();
    if (checkTanggalawal) {
      return response.expectationFailed({
        message: `Tanggal awal berada dalam jangkauan rencana ${checkTanggalawal.nama}`,
      });
    }
    if (checkTanggalakhir) {
      return response.expectationFailed({
        message: `Tanggal akhir berada dalam jangkauan rencana ${checkTanggalakhir.nama}`,
      });
    }

    const rencanaSebelum = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .first();

    let update = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .update({
        nama,
        tanggal_awal,
        tanggal_akhir,
      });
    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    if (
      moment(rencanaSebelum.tanggal_akhir).format("dddd, DD MMM YYYY") !=
      moment(tanggal_akhir).format("dddd, DD MMM YYYY")
    ) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Perencanaan",
        m_user_id: user.id,
        awal: `Tanggal Akhir : ${moment(rencanaSebelum.tanggal_akhir).format(
          "dddd, DD MMM YYYY"
        )} menjadi `,
        akhir: `"${moment(tanggal_akhir).format("dddd, DD MMM YYYY")}"`,
        m_sekolah_id: sekolah.id,
        tipe: "perencanaan",
      });
    }

    if (
      moment(rencanaSebelum.tanggal_awal).format("dddd, DD MMM YYYY") !=
      moment(tanggal_awal).format("dddd, DD MMM YYYY")
    ) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Perencanaan",
        m_user_id: user.id,
        awal: `Tanggal Awal : ${moment(rencanaSebelum.tanggal_awal).format(
          "dddd, DD MMM YYYY"
        )} menjadi `,
        akhir: `"${moment(tanggal_awal).format("dddd, DD MMM YYYY")}"`,
        m_sekolah_id: sekolah.id,
        tipe: "perencanaan",
      });
    }

    if (rencanaSebelum.nama != nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Perencanaan",
        m_user_id: user.id,
        awal: `Judul : ${rencanaSebelum.nama} menjadi `,
        akhir: `"${nama}"`,
        m_sekolah_id: sekolah.id,
        tipe: "perencanaan",
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePerencanaan({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const update = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .update({
        dihapus: 1,
      });

    const rencana = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .first();

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    await MHistoriAktivitas.create({
      jenis: "Hapus Perencanaan",
      m_user_id: user.id,
      akhir: `${rencana.nama}`,
      m_sekolah_id: sekolah.id,
      tipe: "perencanaan",
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }
  async getRencanaTransaksi({
    response,
    request,
    auth,
    params: { rencana_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    const { page, search, dari_tanggal, sampai_tanggal, tipe_akun, status } =
      request.get();

    let transaksiIds;
    if (tipe_akun) {
      transaksiIds = await MKeuRencanaJurnal.query()
        .where({ m_keu_akun_id: tipe_akun })
        .pluck("m_rencana_transaksi_id");
    }

    let transaksi = MRencanaTransaksi.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 }).with("akun", (builder) => {
          builder.select("nama", "id", "kode");
        });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: rencana_id })
      .orderBy("status", "asc");

    if (transaksiIds) {
      transaksi.whereIn("id", transaksiIds);
    }
    if (search) {
      transaksi.where("nama", "like", `%${search}%`);
    }
    if (dari_tanggal && sampai_tanggal) {
      transaksi.whereBetween("tanggal", [dari_tanggal, sampai_tanggal]);
    }
    if (user.bagian == "aproval") {
      if (!status) {
        transaksi.where("status", 0);
      }
    }
    if (status == 3) {
      transaksi.whereNull("status");
    } else if (status) {
      transaksi.where({ status });
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
    });
  }
  async postRencanaTransaksi({
    response,
    request,
    auth,
    params: { rencana_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    let { nama, nomor, tanggal, jurnal = [], status } = request.post();
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

    const rencana = await MRencanaKeuangan.query()
      .where({ id: rencana_id })
      .first();

    const transaksi = await MRencanaTransaksi.create({
      nama,
      nomor,
      tanggal,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      m_rencana_keuangan_id: rencana.id,
      status,
    });

    await Promise.all(
      jurnal.map(async (d) => {
        await MKeuRencanaJurnal.create({
          jenis: d.jenis,
          m_rencana_transaksi_id: transaksi.id,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          dihapus: 0,
          status: status,
        });
      })
    );

    await MHistoriAktivitas.create({
      jenis: "Buat Rencana Anggaran",
      m_user_id: user.id,
      akhir: nama,
      bawah: rencana.nama,
      m_sekolah_id: sekolah.id,
      tipe: "Perencanaan",
      alamat_id: rencana_id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }
  async putRencanaTransaksi({
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

    let { nama, nomor, tanggal, jurnal = [], status } = request.post();

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
    if (!user.bagian) {
      status = 1;
    } else {
      status = 0;
    }

    const transaksi = await MRencanaTransaksi.query()
      .with("jurnal")
      .where({ id: transaksi_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: transaksi.m_rencana_keuangan_id })
      .first();

    const semuaJurnal = await MKeuRencanaJurnal.query()
      .where({ m_rencana_transaksi_id: transaksi_id })
      .where({ dihapus: 0 })
      .fetch();
    const semuaAkun = await MKeuAkun.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    const jurnalIds = await MKeuRencanaJurnal.query()
      .where({ m_rencana_transaksi_id: transaksi_id })
      .where({ dihapus: 0 })
      .ids();
    const editJurnal = jurnal.filter((d) => d.id);
    const editJurnalId = editJurnal.map((d) => d.id);
    const newJurnal = jurnal.filter((d) => !d.id);

    await Promise.all(
      jurnalIds
        .filter((d) => !editJurnalId.includes(d))
        .map(async (d) => {
          await MKeuRencanaJurnal.query().where({ id: d }).update({
            dihapus: 1,
            status: null,
          });
          const jurnalLama = semuaJurnal.toJSON().find((e) => e.id == d);
          const akunLama = semuaAkun
            .toJSON()
            .find((e) => e.id == jurnalLama.m_keu_akun_id);

          await MHistoriAktivitas.create({
            jenis: "Ubah Rencana Anggaran",
            m_user_id: user.id,
            awal: `Jurnal Umum - Nama Akun : dihapus akun `,
            akhir: `${akunLama.nama}`,
            bawah: `${rencana.nama} - ${transaksi.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Perencanaan",
            alamat_id: transaksi.m_rencana_keuangan_id,
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

        await MKeuRencanaJurnal.query().where({ id: d.id }).update({
          jenis: d.jenis,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          dihapus: 0,
          status,
        });
        if (akunLama.id != akunBaru.id) {
          await MHistoriAktivitas.create({
            jenis: "Ubah Rencana Anggaran",
            m_user_id: user.id,
            awal: `Jurnal Umum - Nama Akun : ${akunLama.nama} menjadi `,
            akhir: `"${akunBaru.nama}"`,
            bawah: `${rencana.nama} - ${transaksi.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Perencanaan",
            alamat_id: transaksi.m_rencana_keuangan_id,
          });
        }
        if (d.saldo != jurnalLama.saldo || d.jenis != jurnalLama.jenis) {
          const saldoLama = `${jurnalLama.saldo}`.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
          );
          const saldoBaru = `${d.saldo}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          await MHistoriAktivitas.create({
            jenis: "Ubah Rencana Anggaran",
            m_user_id: user.id,
            awal: `Jurnal Umum - Nama Akun - ${akunBaru.nama} : ${titleCase(
              jurnalLama.jenis
            )} Rp${saldoLama} menjadi `,
            akhir: `"${titleCas(d.jenis)} Rp${saldoBaru}"`,
            bawah: `${rencana.nama} - ${transaksi.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Perencanaan",
            alamat_id: transaksi.m_rencana_keuangan_id,
          });
        }
      }),
      newJurnal.map(async (d) => {
        await MKeuRencanaJurnal.create({
          jenis: d.jenis,
          m_rencana_transaksi_id: transaksi.id,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          dihapus: 0,
          status,
        });
        await MHistoriAktivitas.create({
          jenis: "Ubah Rencana Anggaran",
          m_user_id: user.id,
          awal: `Jurnal Umum - Nama Akun : dibuat akun `,
          akhir: `${akunBaru.nama}`,
          bawah: `${rencana.nama} - ${transaksi.nama}`,
          m_sekolah_id: sekolah.id,
          tipe: "Perencanaan",
          alamat_id: transaksi.m_rencana_keuangan_id,
        });
      })
    );

    let update = await MRencanaTransaksi.query()
      .where({ id: transaksi_id })
      .update({
        nama,
        nomor,
        tanggal,
        status,
      });
    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    if (nomor != transaksi.nomor) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Rencana Anggaran",
        m_user_id: user.id,
        awal: `Nomor : ${transaksi.nomor} menjadi `,
        akhir: `"${nomor}"`,
        m_sekolah_id: sekolah.id,
        tipe: "Perencanaan",
        bawah: `${rencana.nama} - ${transaksi.nama}`,
        alamat_id: transaksi.m_rencana_keuangan_id,
      });
    }
    if (
      moment(tanggal).format("MMMM YYYY") !=
      moment(transaksi.tanggal).format("MMMM YYYY")
    ) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Rencana Anggaran",
        m_user_id: user.id,
        awal: `Tanggal : ${moment(transaksi.tanggal).format(
          "MMMM YYYY"
        )} menjadi `,
        akhir: `"${moment(tanggal).format("MMMM YYYY")}"`,
        m_sekolah_id: sekolah.id,
        tipe: "Perencanaan",
        bawah: `${rencana.nama} - ${transaksi.nama}`,
        alamat_id: transaksi.m_rencana_keuangan_id,
      });
    }
    if (nama != transaksi.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Rencana Anggaran",
        m_user_id: user.id,
        awal: `Judul : ${transaksi.nama} menjadi `,
        akhir: `"${nama}"`,
        m_sekolah_id: sekolah.id,
        tipe: "Perencanaan",
        bawah: `${rencana.nama} - ${transaksi.nama}`,
        alamat_id: transaksi.m_rencana_keuangan_id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteRencanaTransaksi({
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

    const update = await MRencanaTransaksi.query()
      .where({ id: transaksi_id })
      .update({
        dihapus: 1,
        status: null,
      });
    await MKeuRencanaJurnal.query()
      .where({ m_rencana_transaksi_id: transaksi_id })
      .update({
        dihapus: 1,
        status: null,
      });
    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const transaksi = await MRencanaTransaksi.query()
      .where({ id: transaksi_id })
      .first();
    const rencana = await MRencanaKeuangan.query()
      .where({ id: transaksi.m_rencana_keuangan_id })
      .first();
    await MHistoriAktivitas.create({
      jenis: "Hapus Rencana Anggaran",
      m_user_id: user.id,
      akhir: `${transaksi.nama}`,
      m_sekolah_id: sekolah.id,
      tipe: "Perencanaan",
      bawah: `${rencana.nama}`,
      alamat_id: transaksi.m_rencana_keuangan_id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getRencanaNeraca({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let transaksiIds,transaksiKumulatifIds;
    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .andWhere({ m_rencana_keuangan_id: perencanaan_id })
        .ids();
        transaksiKumulatifIds = await MRencanaTransaksi.query()
          .where("tanggal", "<=", tanggal_akhir)
          .where({ m_sekolah_id: sekolah.id })
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .andWhere({ m_rencana_keuangan_id: perencanaan_id })
          .ids();
    } else {
      transaksiIds = await MRencanaTransaksi.query()
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .andWhere({ m_rencana_keuangan_id: perencanaan_id })
        .ids();
    }

    const akun = await MKeuAkun.query()
      .with("rencanaJurnal", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (transaksiIds) {
          builder.whereIn("m_rencana_transaksi_id", transaksiIds);
        }
      })
      .with("rencanaJurnal1", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (transaksiKumulatifIds) {
          builder.whereIn("m_rencana_transaksi_id", transaksiKumulatifIds);
        }
      })
      .with("rek", (builder) => {
        builder.where({ dihapus: 0 })
        .andWhere({ m_rencana_keuangan_id: perencanaan_id });
      })
      .with("rekRencana", (builder) => {
        builder
          .where({ dihapus: 0 })
          .where({ m_rencana_keuangan_id: perencanaan_id });
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    let kategori;

    kategori = MRencanaKategoriNeraca.query()
      .with("akunNeraca", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.with("rumusAkun", (builder) => {
              builder.where({ m_rencana_keuangan_id: perencanaan_id });
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
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
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

    const kategoriLabaRugi = await MRencanaKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.with("rumusAkun", (builder) => {
              builder.where({ m_rencana_keuangan_id: perencanaan_id });
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
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .fetch();

      const rumusLaba = await MRencanaRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .andWhere({ dihapus: 0 })
      .fetch();
    const pendapatan = await MRencanaKategoriLabaRugi.query()
      .select("id")
      .where({ dihapus: 0 })
      .andWhere({ nama: "PENDAPATAN" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .first();

    const dataAkunPendapatan = await TkRencanaKategoriLabaRugi.query()
      .where({ m_rencana_kategori_laba_rugi_id: pendapatan.id })
      .pluck("m_keu_akun_id");

    return response.ok({
      kategori,
      akun,
      keuangan,
      kategoriLabaRugi,
      rumusLaba,
      dataAkunPendapatan,
    });
  }
  async getRencanaLabaRugi({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let transaksiIds,transaksiAkumulasiIds;
    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .andWhere({ m_rencana_keuangan_id: perencanaan_id })
        .ids();
        transaksiAkumulasiIds = await MRencanaTransaksi.query()
        .where("tanggal", "<=", tanggal_akhir)
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .andWhere({ m_rencana_keuangan_id: perencanaan_id })
        .ids();
    } else {
      transaksiIds = await MRencanaTransaksi.query()
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .andWhere({ m_rencana_keuangan_id: perencanaan_id })
        .ids();
    }

    const pendapatan = await MRencanaKategoriLabaRugi.query()
    .select("id")
    .where({ dihapus: 0 })
    .andWhere({ nama: "PENDAPATAN" })
    .andWhere({ m_sekolah_id: sekolah.id })
    .first();

    const dataAkunPendapatan = await TkRencanaKategoriLabaRugi.query()
    .where({ m_rencana_kategori_laba_rugi_id: pendapatan.id })
    .pluck("m_keu_akun_id");

    const akun = await MKeuAkun.query()
      .with("rencanaJurnal", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (transaksiIds) {
          builder.whereIn("m_rencana_transaksi_id", transaksiIds);
        }
      })
      .with("rencanaJurnal2", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .andWhere({ jenis: "debit" });
        if (transaksiIds) {
          builder.whereIn("m_rencana_transaksi_id", transaksiIds);
        }
      })
      .with("rencanaJurnal1", (builder) => {
        builder.where({ dihapus: 0 }).andWhere({ status: 1 });
        if (transaksiAkumulasiIds) {
          builder.whereIn("m_rencana_transaksi_id", transaksiAkumulasiIds);
        }
      })
      .with("rencanaJurnal3", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .andWhere({ jenis: "debit" });
        if (transaksiAkumulasiIds) {
          builder.whereIn("m_rencana_transaksi_id", transaksiAkumulasiIds);
        }
      })
      .with("rekRencana", (builder) => {
        builder
          .where({ dihapus: 0 })
          .where({ m_rencana_keuangan_id: perencanaan_id });
      })
      .with("rumusAkun", (builder) => {
        builder.where({ m_rencana_keuangan_id: perencanaan_id });
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    let kategori;

    kategori = MRencanaKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder
              .with("rencanaJurnal", (builder) => {
                builder.where({ dihapus: 0 });
                if (transaksiIds) {
                  builder.whereIn("m_rencana_transaksi_id", transaksiIds);
                }
              })
              .with("rumusAkun", (builder) => {
                builder.where({ m_rencana_keuangan_id: perencanaan_id });
              })
              .where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .whereIn(
            "m_keu_akun_id",
            akun.toJSON().map((d) => d.id)
          )
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    const rumus = await MRencanaRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .orderBy("urutan", "asc")
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
      dataAkunPendapatan,
    });
  }

  async postKategoriLabaRugi({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama, warna,kategori } = request.post();

   
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

    const kategoris = await MRencanaKategoriLabaRugi.create({
      nama,
      warna,
      kategori,
      dihapus: 0,
      m_rencana_keuangan_id: perencanaan_id,
      m_sekolah_id: sekolah.id,
      urutan:101
    });

    const rencana = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Kategori : `,
      akhir: `${nama}`,
      bawah: `${rencana.nama} - Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
      alamat_id: perencanaan_id,
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

    let { nama, warna,kategori} = request.post();

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

    const kategoriLaba = await MRencanaKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .first();

    const kategoris = await MRencanaKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .update({
        nama,
        warna,
        kategori
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriLaba.m_rencana_keuangan_id })
      .first();

    if (warna != kategoriLaba.warna) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `Kategori - Warna : ${kategoriLaba.warna} menjadi `,
        akhir: `"${warna}"`,
        bawah: `${rencana.nama} - Laporan Laba/Rugi`,
        m_sekolah_id: sekolah.id,
        alamat_id: kategoriLaba.m_rencana_keuangan_id,
      });
    }
    if (nama != kategoriLaba.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `Kategori - Nama : ${kategoriLaba.nama} menjadi `,
        akhir: `"${nama}"`,
        bawah: `${rencana.nama} - Laporan Laba/Rugi`,
        m_sekolah_id: sekolah.id,
        alamat_id: kategoriLaba.m_rencana_keuangan_id,
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

    const kategori = await MRencanaKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .update({
        dihapus: 1,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    const kategoriSebelum = await MRencanaKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriSebelum.m_rencana_keuangan_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Kategori : `,
      akhir: `${kategoriSebelum.nama}`,
      bawah: `${rencana.nama} - Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
      alamat_id: transaksi.m_rencana_keuangan_id,
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

    const { m_keu_kategori_laba_rugi_id, m_keu_akun_id, urutan } =
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

    const kategori = await TkRencanaKategoriLabaRugi.create({
      m_keu_akun_id,
      m_rencana_kategori_laba_rugi_id: m_keu_kategori_laba_rugi_id,
      urutan,
    });

    const kategoriLaba = await MRencanaKategoriLabaRugi.query()
      .where({ id: m_keu_kategori_laba_rugi_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriLaba.m_rencana_keuangan_id })
      .first();

    const akun = await MKeuAkun.query().where({ id: m_keu_akun_id }).first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `${kategoriLaba.nama} : `,
      akhir: `${akun.nama}`,
      bawah: `${rencana.nama} - Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
      alamat_id: kategoriLaba.m_rencana_keuangan_id,
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

    const labaSebelum = await TkRencanaKategoriLabaRugi.query()
      .where({ id: labarugi_id })
      .first();

    const labarugi = await TkRencanaKategoriLabaRugi.query()
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
      const kategoriLaba = await MRencanaKategoriLabaRugi.query()
        .where({ id: labaSebelum.m_rencana_kategori_laba_rugi_id })
        .first();

      const rencana = await MRencanaKeuangan.query()
        .where({ id: kategoriLaba.m_rencana_keuangan_id })
        .first();

      const akunSebelum = await MKeuAkun.query()
        .where({ id: labaSebelum.m_keu_akun_id })
        .first();
      const akun = await MKeuAkun.query().where({ id: m_keu_akun_id }).first();

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `${kategoriLaba.nama} : ${akunSebelum.nama} menjadi `,
        akhir: `"${akun.nama}"`,
        bawah: `${rencana.nama} - Laporan Laba/Rugi`,
        m_sekolah_id: sekolah.id,
        alamat_id: rencana.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
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
      labarugi = await MRencanaRumusLabaRugi.query()
        .where({ id: labarugi_id })
        .update({ urutan });
    }
    if (tipe == "kategori") {
      labarugi = await MRencanaKategoriLabaRugi.query()
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

  async deleteLabaRugi({ response, request, auth, params: { labarugi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const labarugi = await TkRencanaKategoriLabaRugi.query()
      .where({ id: labarugi_id })
      .update({
        dihapus: 1,
      });

    if (!labarugi) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    const laba = await TkRencanaKategoriLabaRugi.query()
      .where({ id: labarugi_id })
      .first();

    const kategoriLaba = await MRencanaKategoriLabaRugi.query()
      .where({ id: laba.m_rencana_kategori_laba_rugi_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriLaba.m_rencana_keuangan_id })
      .first();

    const akun = await MKeuAkun.query()
      .where({ id: laba.m_keu_akun_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `${kategoriLaba.nama} : `,
      akhir: `${akun.nama}`,
      bawah: `${rencana.nama} - Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
      alamat_id: kategoriLaba.m_rencana_keuangan_id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postRumusLabaRugi({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
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

    const rumus1 = await MRencanaRumusLabaRugi.create({
      rumus,
      nama,
      dihapus: 0,
      m_rencana_keuangan_id: perencanaan_id,
      m_sekolah_id: sekolah.id,
      urutan:101
    });

    const rumus12 = JSON.parse(rumus || "[]");
    let kategoriAkun;

    let rumusFix = ``;

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

    const rencana = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Rumus Laba/Rugi : `,
      akhir: `${rumusFix}`,
      bawah: `${rencana.nama} - Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
      alamat_id: perencanaan_id,
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
    const rumusSebelum = await MRencanaRumusLabaRugi.query()
      .where({ id: rumus_id })
      .first();
    if (rumusSebelum.nama != nama) {
      const rumus1 = await MRencanaRumusLabaRugi.query()
        .where({ id: rumus_id })
        .update({
          nama,
        });
    }

    if (rumusSebelum.rumus != rumus) {
      const rumus1 = await MRencanaRumusLabaRugi.query()
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
      let rumusFix = ``;

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

      const rencana = await MRencanaKeuangan.query()
        .where({ id: rumusSebelum.m_rencana_keuangan_id })
        .first();

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `Rumus Laba/Rugi : ${rumusSebelum2} menjadi `,
        akhir: `"${rumusFix}"`,
        bawah: `${rencana.nama} - Laporan Laba/Rugi`,
        m_sekolah_id: sekolah.id,
        alamat_id: rumusSebelum.m_rencana_keuangan_id,
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

    const rumus = await MRencanaRumusLabaRugi.query()
      .where({ id: rumus_id })
      .update({
        dihapus: 1,
      });

    if (!rumus) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const rumusSebelum = await MRencanaRumusLabaRugi.query()
      .where({ id: rumus_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: rumusSebelum.m_rencana_keuangan_id })
      .first();

    const rumus12 = JSON.parse(rumusSebelum.rumus || "[]");
    let kategoriAkun;

    let rumusFix = ``;

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

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Rumus Laba/Rugi : `,
      akhir: `${rumusFix}`,
      bawah: `${rencana.nama} - Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
      alamat_id: rumusSebelum.m_rencana_keuangan_id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getRencanaArusKasLaporan({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
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

    let transaksiIds1, transaksiIds2;
    if (tanggal_awal1 && tanggal_awal2 && tanggal_akhir1 && tanggal_akhir2) {
      transaksiIds1 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal1, tanggal_akhir1])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .andWhere({ m_rencana_keuangan_id: perencanaan_id })
        .ids();
      transaksiIds2 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal2, tanggal_akhir2])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .andWhere({ m_rencana_keuangan_id: perencanaan_id })
        .ids();
    } else {
      return response.notFound({
        message: "harap memasukan tanggal periode 1 dan 2",
      });
    }

    const akun = await MKeuAkun.query()
    .with("rencanaJurnal", (builder) => {
      builder
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .whereIn("m_rencana_transaksi_id", transaksiIds1);
    })
    .with("rencanaJurnal1", (builder) => {
      builder
        .whereIn("m_rencana_transaksi_id", transaksiIds1)
        .where({ dihapus: 0 })
        .andWhere({ status: 1 });
    })
    .with("rencanaJurnal2", (builder) => {
      builder
        .whereIn("m_rencana_transaksi_id", transaksiIds2)
        .where({ dihapus: 0 })
        .andWhere({ status: 1 });
    })
    .andWhere({ dihapus: 0 })
    .andWhere({ m_sekolah_id: sekolah.id })
    .orderBy("kode", "asc")
    .fetch();

    let kategori;

    kategori = MRencanaKategoriArusKas.query()
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
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    const rumusKenaikan = await MRencanaRumusArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .andWhere({ dihapus: 0 })
      .first();
    const rumusAwal = await MRencanaRumusSaldoKasAwal.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .andWhere({ dihapus: 0 })
      .first();
    const rumusAkhir = await MRencanaRumusSaldoKasAkhir.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .andWhere({ dihapus: 0 })
      .first();

    const tipeAkun = await MRencanaKategoriTipeAkun.query()
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

    labaRugi = MRencanaKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.with("rumusAkun",(builder)=>{
              builder.where({m_rencana_keuangan_id:perencanaan_id})
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
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id });

    // if (search) {
    //   labaRugi.andWhere("nama", "like", `%${search}%`);
    // }

    labaRugi = await labaRugi.fetch();

    const rumuslabaRugi = await MRencanaRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .where("nama", "like", `%laba/rugi%`)
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      // .limit(1)
      .first();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

      const pendapatan = await MRencanaKategoriLabaRugi.query()
      .select("id")
      .where({ dihapus: 0 })
      .andWhere({ nama: "PENDAPATAN" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .first();

    const dataAkunPendapatan = await TkRencanaKategoriLabaRugi.query()
      .where({ m_rencana_kategori_laba_rugi_id: pendapatan.id })
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

  async getArusKas({ response, request, auth, params: { perencanaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let kategori;

    kategori = MRencanaKategoriArusKas.query()
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
      .where({ m_rencana_keuangan_id: perencanaan_id })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    if (!kategori.toJSON().length) {
      const defaultKategori = await MRencanaKategoriArusKas.create({
        nama: "Operasi",
        dihapus: 0,
        m_rencana_keuangan_id: perencanaan_id,
        m_sekolah_id: sekolah.id,
      });

      const labaRugi = await MRencanaAktivitasTransaksi.create({
        m_sekolah_id: sekolah.id,
        judul: "Laba & Rugi",
        urutan: 1,
        dihapus: 0,
        laba: 1,
        m_rencana_kategori_arus_kas_id: defaultKategori.id,
      });
    }

    const rumusKenaikan = await MRencanaRumusArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .where({ m_rencana_keuangan_id: perencanaan_id })
      .first();
    const rumusAwal = await MRencanaRumusSaldoKasAwal.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .where({ m_rencana_keuangan_id: perencanaan_id })
      .first();
    const rumusAkhir = await MRencanaRumusSaldoKasAkhir.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .where({ m_rencana_keuangan_id: perencanaan_id })
      .first();

    const tipeAkun = await MRencanaKategoriTipeAkun.query()
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
      .where({ m_rencana_keuangan_id: perencanaan_id })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();
    let labaRugi;

    labaRugi = MRencanaKategoriLabaRugi.query()
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
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id });

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

   async getArusKasLaporanNeraca({ response, request, auth,params:{perencanaan_id} }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    
    let { tanggal_awal, tanggal_akhir, search } = request.get();
    const rencana = await this.getRencanaAktif(sekolah,0,tanggal_awal);

    let 
      rencanaTransaksiIds1,
      rencanaTransaksiIds2;
    if (tanggal_awal && tanggal_akhir) {
      rencanaTransaksiIds1 = await MRencanaTransaksi.query()
        .where(
          "tanggal",
          "<=",
          moment(tanggal_awal).subtract(1, "days").format("YYYY-MM-DD")
        )
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .ids();
        rencanaTransaksiIds2 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ dihapus: 0 })
        .ids();
     
    } else {
      rencanaTransaksiIds1 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [1111 - 11 - 11, 1111 - 11 - 11])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ status: 1 })
        .ids();
        rencanaTransaksiIds2 = await MRencanaTransaksi.query()
        .where("tanggal", "<=", moment(tanggal_awal).format("YYYY-MM-DD"))
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ status: 1 })
        .where({ dihapus: 0 })
        .ids();
    }

    const akun = await MKeuAkun.query()
      .with("rencanaJurnal", (builder) => {
        builder
          .where({ dihapus: 0 })
          .andWhere({ status: 1 })
          .whereIn("m_rencana_transaksi_id", rencanaTransaksiIds1);
      })
      .with("rekRencana", (builder) => {
        builder
          .where({ dihapus: 0 })
          .where({ m_rencana_keuangan_id: rencana.id });
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

    kategori = MRencanaKategoriArusKas.query()
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
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    const rumusKenaikan = await MRencanaRumusArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .first();
    const rumusAwal = await MRencanaRumusSaldoKasAwal.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .first();
    const rumusAkhir = await MRencanaRumusSaldoKasAkhir.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .first();

    const tipeAkun = await MRencanaKategoriTipeAkun.query()
      .with("akun", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .fetch();

    let labaRugi;

    labaRugi = MRencanaKategoriLabaRugi.query()
      .with("akunLabaRugi", (builder) => {
        builder
          .with("akun", (builder) => {
            builder.with("rumusAkun",(builder)=>{builder
              .where({ m_rencana_keuangan_id: perencanaan_id })});
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
      .andWhere({ m_rencana_keuangan_id: perencanaan_id });

    labaRugi = await labaRugi.fetch();

    const rumuslabaRugi = await MRencanaRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .where("nama", "like", `%laba/rugi%`)
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      // .limit(1)
      .first();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

    const pendapatan = await MRencanaKategoriLabaRugi.query()
      .select("id")
      .where({ dihapus: 0 })
      .andWhere({ nama: "PENDAPATAN" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .first();

    const dataAkunPendapatan = await TkRencanaKategoriLabaRugi.query()
      .where({ m_rencana_kategori_laba_rugi_id: pendapatan.id })
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

  async postKategoriNeraca({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
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

    const kategori = await MRencanaKategoriNeraca.create({
      tipe,
      nama,
      warna,
      dihapus: 0,
      m_rencana_keuangan_id: perencanaan_id,
      m_sekolah_id: sekolah.id,
    });

    const rencana = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `${titleCase(tipe)} : `,
      akhir: `${nama}`,
      bawah: `${rencana.nama} - Laporan Neraca`,
      m_sekolah_id: sekolah.id,
      alamat_id: perencanaan_id,
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

    const kategoriNeraca = await MRencanaKategoriNeraca.query()
      .where({ id: kategori_id })
      .first();
    const kategori = await MRencanaKategoriNeraca.query()
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

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriNeraca.m_rencana_keuangan_id })
      .first();

    if (warna != kategoriNeraca.warna) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `${titleCase(kategoriNeraca.tipe)} - Warna : ${
          kategoriNeraca.warna
        } menjadi `,
        akhir: `"${warna}"`,
        bawah: `${rencana.nama} - Laporan Neraca`,
        m_sekolah_id: sekolah.id,
        alamat_id: kategoriNeraca.m_rencana_keuangan_id,
      });
    }
    if (nama != kategoriNeraca.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `${titleCase(kategoriNeraca.tipe)} - Nama : ${
          kategoriNeraca.nama
        } menjadi `,
        akhir: `"${nama}"`,
        bawah: `${rencana.nama} - Laporan Neraca`,
        m_sekolah_id: sekolah.id,
        alamat_id: kategoriNeraca.m_rencana_keuangan_id,
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

    const kategori = await MRencanaKategoriNeraca.query()
      .where({ id: kategori_id })
      .update({
        dihapus: 1,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    const kategoriNeraca = await MRencanaKategoriNeraca.query()
      .where({ id: kategori_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriNeraca.m_rencana_keuangan_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `${titleCase(kategoriNeraca.tipe)} : `,
      akhir: `${kategoriNeraca.nama}`,
      bawah: `${rencana.nama} - Laporan Neraca`,
      m_sekolah_id: sekolah.id,
      alamat_id: kategoriNeraca.m_rencana_keuangan_id,
    });

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

    let { m_keu_kategori_neraca_id, m_keu_akun_id, urutan, pengaturan  } = request.post();

    m_keu_kategori_neraca_id= parseInt(m_keu_kategori_neraca_id)

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

    const kategori = await TkRencanaKategoriNeraca.create({
      m_keu_akun_id,
      m_rencana_kategori_neraca_id: m_keu_kategori_neraca_id,
      urutan,
      pengaturan
    });

    const kategoriNeraca = await MRencanaKategoriNeraca.query()
      .where({ id: m_keu_kategori_neraca_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriNeraca.m_rencana_keuangan_id })
      .first();

    const akun = await MKeuAkun.query().where({ id: m_keu_akun_id }).first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `${titleCase(kategoriNeraca.tipe)} - ${kategoriNeraca.nama} : `,
      akhir: `${akun.nama}`,
      bawah: `${rencana.nama} - Laporan Neraca`,
      m_sekolah_id: sekolah.id,
      alamat_id: kategoriNeraca.m_rencana_keuangan_id,
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

    let { m_keu_akun_id, urutan ,pengaturan} = request.post();

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

    const neracaSebelum = await TkRencanaKategoriNeraca.query()
      .where({ id: neraca_id })
      .first();

    const neraca = await TkRencanaKategoriNeraca.query()
      .where({ id: neraca_id })
      .update({
        m_keu_akun_id,
        urutan,
        pengaturan
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

      const kategoriNeraca = await MRencanaKategoriNeraca.query()
        .where({ id: neracaSebelum.m_rencana_kategori_neraca_id })
        .first();

      const rencana = await MRencanaKeuangan.query()
        .where({ id: kategoriNeraca.m_rencana_keuangan_id })
        .first();

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `${titleCase(kategoriNeraca.tipe)} - ${kategoriNeraca.nama} : ${
          akunSebelum.nama
        } menjadi `,
        akhir: `"${akun.nama}"`,
        bawah: `${rencana.nama} - Laporan Neraca`,
        m_sekolah_id: sekolah.id,
        alamat_id: neracaSebelum.m_rencana_keuangan_id,
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

    const neraca = await TkRencanaKategoriNeraca.query()
      .where({ id: neraca_id })
      .update({
        dihapus: 1,
      });

    if (!neraca) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    const akunNeraca = await TkRencanaKategoriNeraca.query()
      .where({ id: neraca_id })
      .first();

    const akun = await MKeuAkun.query()
      .where({ id: akunNeraca.m_keu_akun_id })
      .first();

    const kategoriNeraca = await MRencanaKategoriNeraca.query()
      .where({ id: akunNeraca.m_rencana_kategori_neraca_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriNeraca.m_rencana_keuangan_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `${titleCase(kategoriNeraca.tipe)} - ${kategoriNeraca.nama} : `,
      akhir: `"${akun.nama}"`,
      bawah: `${rencana.nama} - Laporan Neraca`,
      m_sekolah_id: sekolah.id,
      alamat_id: kategoriNeraca.m_rencana_keuangan_id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getAnalisisKeuangan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { rencana_id, tanggal_awal, tanggal_akhir } = request.get();

    let transaksiIds = [];
    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .ids();
    }
    let transaksi2Ids = [];
    if (rencana_id) {
      transaksi2Ids = await MRencanaTransaksi.query()
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ m_rencana_keuangan_id: rencana_id })
        .ids();
    }

    const akun = await MKeuAkun.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 });
        if (transaksiIds) {
          builder.whereIn("m_keu_transaksi_id", transaksiIds);
        }
      })
      .with("rencanaJurnal", (builder) => {
        builder.where({ dihapus: 0 });
        if (transaksi2Ids) {
          builder.whereIn("m_rencana_transaksi_id", transaksi2Ids);
        }
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    const analisis = await MKeuTemplateAnalisis.query()
      .with("akun", (builder) => {
        // builder
        // .with("jurnal", (builder) => {
        //   builder.where({ dihapus: 0 });
        //   if (transaksiIds) {
        //     builder.whereIn("m_keu_transaksi_id", transaksiIds);
        //   }
        // })
        // .with("rencanaJurnal", (builder) => {
        //   builder.where({ dihapus: 0 });
        //   if (transaksi2Ids) {
        //     builder.whereIn("m_rencana_transaksi_id", transaksi2Ids);
        //   }
        // });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    const rencana = await MRencanaKeuangan.query()
      .where({ dihapus: 0 })
      .where({ m_sekolah_id: sekolah.id })
      .fetch();

    const keuangan = await MKeuTemplateAkun.query()
      .andWhere({
        m_sekolah_id: sekolah.id,
      })
      .first();

    return response.ok({
      // kategori,
      akun,
      analisis,
      keuangan,
      rencana,
    });
  }
  async postKategoriAnalisis({ response, request, auth }) {
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

    const kategori = await MKeuTemplateAnalisis.create({
      m_keu_akun_id,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    const akun = await MKeuAkun.query().where({ id: m_keu_akun_id }).first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Analisis",
      m_user_id: user.id,
      awal: `Template Laporan : `,
      akhir: `${akun.nama}`,
      bawah: `Analisis`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKategoriAnalisis({
    response,
    request,
    auth,

    params: { analisis_id },
  }) {
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

    const kategoriSebelum = await MKeuTemplateAnalisis.query()
      .where({ id: analisis_id })
      .first();

    if (kategoriSebelum.m_keu_akun_id != m_keu_akun_id) {
      const kategori = await MKeuTemplateAnalisis.query()
        .where({ id: analisis_id })
        .update({
          m_keu_akun_id,
        });

      if (!kategori) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      const akunSebelum = await MKeuAkun.query()
        .where({ id: kategoriSebelum.m_keu_akun_id })
        .first();
      const akun = await MKeuAkun.query().where({ id: m_keu_akun_id }).first();

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Analisis",
        m_user_id: user.id,
        awal: `Template Laporan : ${akunSebelum.nama} menjadi `,
        akhir: `"${akun.nama}"`,
        bawah: `Analisis`,
        m_sekolah_id: sekolah.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKategoriAnalisis({
    response,
    request,
    auth,
    params: { analisis_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const kategori = await MKeuTemplateAnalisis.query()
      .where({ id: analisis_id })
      .update({
        dihapus: 1,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    const kategoriSebelum = await MKeuTemplateAnalisis.query()
      .where({ id: analisis_id })
      .first();
    const akun = await MKeuAkun.query()
      .where({ id: kategoriSebelum.m_keu_akun_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Analisis",
      m_user_id: user.id,
      awal: `Template Laporan : `,
      akhir: `${akun.nama}`,
      bawah: `Analisis`,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }
  async postKategoriArusKas({
    response,
    request,
    auth,
    params: { perencanaan_id },
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

    const kategori = await MRencanaKategoriArusKas.create({
      nama,
      warna,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      m_rencana_keuangan_id: perencanaan_id,
    });

    const rencana = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .first();

    const rumusNaik = await MRencanaRumusArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where({ m_rencana_keuangan_id: rencana.id })
      .first();
    if (rumusNaik) {
      let rumus = JSON.parse(rumusNaik.rumus);
      rumus.push({ operator: "plus" }, { id: kategori.id });
      await MRencanaRumusArusKas.query()
        .where({ id: rumusNaik.id })
        .update({
          rumus: JSON.stringify(rumus),
        });
    } else {
      await MRencanaRumusArusKas.create({
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana.id,
        rumus: JSON.stringify([{ id: kategori.id }]),
      });
    }

    const rumusAkhir = await MRencanaRumusSaldoKasAkhir.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where({ m_rencana_keuangan_id: rencana.id })
      .first();
    if (rumusAkhir) {
      let rumus = JSON.parse(rumusAkhir.rumus);
      rumus.push({ operator: "plus" }, { id: kategori.id });
      await MRencanaRumusSaldoKasAkhir.query()
        .where({ id: rumusAkhir.id })
        .update({
          rumus: JSON.stringify(rumus),
        });
    } else {
      await MRencanaRumusSaldoKasAkhir.create({
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana.id,
        rumus: JSON.stringify([{ id: kategori.id }]),
      });
    }

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Kategori : `,
      akhir: `${nama}`,
      bawah: `${rencana.nama} - Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
      alamat_id: perencanaan_id,
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

    const kategoriArusKas = await MRencanaKategoriArusKas.query()
      .where({ id: kategori_id })
      .first();
    const kategori = await MRencanaKategoriArusKas.query()
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

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriArusKas.m_rencana_keuangan_id })
      .first();

    if (warna != kategoriArusKas.warna) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `Kategori - Warna : ${kategoriArusKas.warna} menjadi `,
        akhir: `"${warna}"`,
        bawah: `${rencana.nama} - Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
        alamat_id: kategoriArusKas.m_rencana_keuangan_id,
      });
    }
    if (nama != kategoriArusKas.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `Kategori - Nama : ${kategoriArusKas.nama} menjadi `,
        akhir: `"${nama}"`,
        bawah: `${rencana.nama} - Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
        alamat_id: kategoriArusKas.m_rencana_keuangan_id,
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

    const kategori = await MRencanaKategoriArusKas.query()
      .where({ id: kategori_id })
      .update({
        dihapus: 1,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const kategoriArus = await MRencanaKategoriArusKas.query()
      .where({ id: kategori_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriArus.m_rencana_keuangan_id })
      .first();

    const rumusNaik = await MRencanaRumusArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where({ m_rencana_keuangan_id: rencana.id })
      .first();

    const rumusAkhir = await MRencanaRumusSaldoKasAkhir.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where({ m_rencana_keuangan_id: rencana.id })
      .first();

    if (rumusAkhir) {
      let rumusAkhirParsed = JSON.parse(rumusAkhir.rumus);
      if (rumusAkhirParsed.length == 1) {
        await MRencanaRumusSaldoKasAkhir.query()
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
        await MRencanaRumusSaldoKasAkhir.query()
          .where({ id: rumusAkhir.id })
          .update({
            rumus: JSON.stringify(temp),
          });
      }
    }
    if (rumusNaik) {
      let rumusNaikParsed = JSON.parse(rumusNaik.rumus);
      if (rumusNaikParsed.length == 1) {
        await MRencanaRumusArusKas.query().where({ id: rumusNaik.id }).delete();
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
        await MRencanaRumusArusKas.query()
          .where({ id: rumusNaik.id })
          .update({
            rumus: JSON.stringify(temp),
          });
      }
    }

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Kategori : `,
      akhir: `${kategoriArus.nama}`,
      bawah: `${rencana.nama} - Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
      alamat_id: kategoriArus.m_rencana_keuangan_id,
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
      m_rencana_kategori_arus_kas_id,
      m_rencana_kategori_tipe_akun_id,
      urutan,
    } = request.post();

    const rules = {
      m_rencana_kategori_tipe_akun_id: "required",
      m_rencana_kategori_arus_kas_id: "required",
      judul: "required",
    };
    const message = {
      "m_rencana_kategori_tipe_akun_id.required": "Tipe Akun harus diisi",
      "m_rencana_kategori_arus_kas_id.required":
        "Kategori Arus Kas harus diisi",
      "judul.required": "Judul harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const kategori = await MRencanaAktivitasTransaksi.create({
      m_sekolah_id: sekolah.id,
      judul,
      m_rencana_kategori_tipe_akun_id,
      m_rencana_kategori_arus_kas_id,
      urutan,
      dihapus: 0,
    });

    const kategoriArus = await MRencanaKategoriArusKas.query()
      .where({ id: m_rencana_kategori_arus_kas_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriArus.m_rencana_keuangan_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `${kategoriArus.nama} : `,
      akhir: `${judul}`,
      bawah: `${rencana.nama} - Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
      alamat_id: rencana.id,
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
      m_rencana_kategori_arus_kas_id,
      m_rencana_kategori_tipe_akun_id,
      urutan,
    } = request.post();

    const rules = {
      // m_rencana_kategori_tipe_akun_id: "required",
      m_rencana_kategori_arus_kas_id: "required",
      judul: "required",
    };
    const message = {
      // "m_Rencana_kategori_tipe_akun_id.required": "Tipe Akun harus diisi",
      "m_Rencana_kategori_arus_kas_id.required":
        "Kategori Arus Kas harus diisi",
      "judul.required": "Judul harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const aktivitasSebelum = await MRencanaAktivitasTransaksi.query()
      .where({ id: aktivitas_id })
      .first();

    const aktivitas = await MRencanaAktivitasTransaksi.query()
      .where({ id: aktivitas_id })
      .update({
        judul,
        m_rencana_kategori_tipe_akun_id,
        m_rencana_kategori_arus_kas_id,
        urutan,
        dihapus: 0,
      });

    if (!aktivitas) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const aktivitasUpdate = await MRencanaAktivitasTransaksi.query()
      .where({ id: aktivitas_id })
      .first();

    const kategori = await MRencanaKategoriArusKas.query()
      .where({ id: m_rencana_kategori_arus_kas_id })
      .first();

    const kategoriTipeSebelum = await MRencanaKategoriTipeAkun.query()
      .where({ id: aktivitasSebelum.m_rencana_kategori_tipe_akun_id })
      .first();

    const kategoriTipeUpdate = await MRencanaKategoriTipeAkun.query()
      .where({ id: m_rencana_kategori_tipe_akun_id })
      .first();
    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategori.m_rencana_keuangan_id })
      .first();

    if (
      m_rencana_kategori_tipe_akun_id !=
      aktivitasSebelum.m_rencana_kategori_tipe_akun_id
    ) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `${kategori.nama} - ${aktivitasSebelum.judul} - Tipe Akun : ${kategoriTipeSebelum.nama} menjadi `,
        akhir: `"${kategoriTipeUpdate.nama}"`,
        bawah: `${rencana.nama} - Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
        alamat_id: rencana.id,
      });
    }

    if (judul != aktivitasSebelum.judul) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `${kategori.nama} - Judul : ${aktivitasSebelum.judul} menjadi `,
        akhir: `"${aktivitasUpdate.judul}"`,
        bawah: `${rencana.nama} - Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
        alamat_id: rencana.id,
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

    const akttivitas = await MRencanaAktivitasTransaksi.query()
      .where({ id: aktivitas_id })
      .update({
        dihapus: 1,
      });

    if (!akttivitas) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    const aktivitas = await MRencanaAktivitasTransaksi.query()
      .where({ id: aktivitas_id })
      .first();

    const kategoriArus = await MRencanaKategoriArusKas.query()
      .where({ id: aktivitas.m_rencana_kategori_arus_kas_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriArus.m_rencana_keuangan_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `${kategoriArus.nama} : `,
      akhir: `${aktivitas.judul}`,
      bawah: `${rencana.nama} - Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
      alamat_id: rencana.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postKategoriTipeAkun({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { nama, m_keu_akun_id,pengaturan } = request.post();

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

    const kategori = await MRencanaKategoriTipeAkun.create({
      nama,
      pengaturan,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      m_rencana_keuangan_id: perencanaan_id,
    });

    if (m_keu_akun_id) {
      await Promise.all(
        m_keu_akun_id.map(async (d) => {
          await TkRencanaKategoriTipeAkun.create({
            m_keu_akun_id: d.m_keu_akun_id,
            m_rencana_kategori_tipe_akun_id: kategori.id,
          });
        })
      );
    }

    const rencana = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Tipe Akun : `,
      akhir: `${nama}`,
      bawah: `${rencana.nama} - Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
      alamat_id: rencana.id,
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

    let { nama, m_keu_akun_id,pengaturan } = request.post();

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

    const kategoriSebelum = await MRencanaKategoriTipeAkun.query()
      .where({ id: kategori_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriSebelum.m_rencana_keuangan_id })
      .first();

    const kategori = await MRencanaKategoriTipeAkun.query()
      .where({ id: kategori_id })
      .update({
        nama,
        pengaturan
      });

    const kategori1 = await MRencanaKategoriTipeAkun.query()
      .with("akun")
      .where({ id: kategori_id })
      .first();

    if (m_keu_akun_id.length) {
      await Promise.all(
        m_keu_akun_id.map(async (d) => {
          if (d.id) {
            const TkSebelum = await TkRencanaKategoriTipeAkun.query()
              .where({ id: d.id })
              .first();
            await TkRencanaKategoriTipeAkun.query().where({ id: d.id }).update({
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
              tipe: "Perencanaan",
              m_user_id: user.id,
              awal: `Tipe Akun - ${nama} : ${akunSebelum.nama} menjadi `,
              akhir: `"${akunTk.nama}"`,
              bawah: `${rencana.nama} - Laporan Arus Kas`,
              m_sekolah_id: sekolah.id,
              alamat_id: rencana.id,
            });
            return;
          } else {
            await TkRencanaKategoriTipeAkun.create({
              m_keu_akun_id: d.m_keu_akun_id,
              m_rencana_kategori_tipe_akun_id: kategori_id,
            });
            const akunTk = await MKeuAkun.query()
              .where({ id: d.m_keu_akun_id })
              .first();

            await MHistoriAktivitas.create({
              jenis: "Ubah Template Laporan",
              tipe: "Perencanaan",
              m_user_id: user.id,
              awal: `Tipe Akun - ${nama} : ditambahkan akun `,
              akhir: `${akunTk.nama}`,
              bawah: `${rencana.nama} - Laporan Arus Kas`,
              m_sekolah_id: sekolah.id,
              alamat_id: rencana.id,
            });
          }
        })
      );

      await Promise.all(
        kategori1.toJSON().akun.map(async (e) => {
          if (!m_keu_akun_id.filter((d) => d.id).find((d) => d.id == e.id)) {
            await TkRencanaKategoriTipeAkun.query()
              .where({ id: e.id })
              .update({ dihapus: 1 });

            const kategoriTk = await TkRencanaKategoriTipeAkun.query()
              .where({ id: e.id })
              .first();

            const akunTk = await MKeuAkun.query()
              .where({ id: kategoriTk.m_keu_akun_id })
              .first();

            await MHistoriAktivitas.create({
              jenis: "Ubah Template Laporan",
              tipe: "Perencanaan",
              m_user_id: user.id,
              awal: `Tipe Akun - ${nama} : dihapus akun `,
              akhir: `${akunTk.nama}`,
              bawah: `${rencana.nama} - Laporan Arus Kas`,
              m_sekolah_id: sekolah.id,
              alamat_id: rencana.id,
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
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `Tipe Akun - Nama : ${kategoriSebelum.nama} menjadi `,
        akhir: `"${nama}"`,
        bawah: `${rencana.nama} - Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
        alamat_id: rencana.id,
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

    const kategori = await MRencanaKategoriTipeAkun.query()
      .where({ id: kategori_id })
      .update({
        dihapus: 1,
      });

    if (!kategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const kategoriSebelum = await MRencanaKategoriTipeAkun.query()
      .where({ id: kategori_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriSebelum.m_rencana_keuangan_id })
      .first();

    await MHistoriAktivitas.create({
      jenis: "Hapus Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Tipe Akun : `,
      akhir: `${kategoriTipe.nama}`,
      bawah: `${rencana.nama} - Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
      alamat_id: rencana.id,
    });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postRumusArusKas({
    response,
    request,
    auth,
    params: { perencanaan_id },
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

    const rumus1 = await MRencanaRumusArusKas.create({
      rumus,
      dihapus: 0,
      m_rencana_keuangan_id: perencanaan_id,
      m_sekolah_id: sekolah.id,
    });

    const rencana = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .first();

    const rumus12 = JSON.parse(rumus || "[]");
    let kategoriAkun;

    let rumusFix = ``;

    for (let i = 0; i < rumus12.length; i++) {
      const d = rumus12[i];
      if (d.id) {
        kategoriAkun = await MRencanaKategoriArusKas.query()
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
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Rumus Arus Kas - Kenaikan(Penurunan) Kas : `,
      akhir: `${rumusFix}`,
      bawah: `${rencana.nama} - Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
      alamat_id: rencana.id,
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
    const rumusSebelum = await MRencanaRumusArusKas.query()
      .where({ id: rumus_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: rumusSebelum.m_rencana_keuangan_id })
      .first();

    if (rumusSebelum.rumus != rumus) {
      const rumus1 = await MRencanaRumusArusKas.query()
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
          kategoriAkun = await MRencanaKategoriArusKas.query()
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
          kategoriAkun = await MRencanaKategoriArusKas.query()
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
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `Rumus Arus Kas - Kenaikan(Penurunan) Kas : ${rumusSebelum2} menjadi `,
        akhir: `"${rumusFix}"`,
        bawah: `${rencana.nama} - Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
        alamat_id: rencana.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async postRumusSaldoKasAwal({
    response,
    request,
    auth,
    params: { perencanaan_id },
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

    const rumus1 = await MRencanaRumusSaldoKasAwal.create({
      rumus,
      dihapus: 0,
      m_rencana_keuangan_id: perencanaan_id,
      m_sekolah_id: sekolah.id,
    });

    const rencana = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .first();

    const rumus12 = JSON.parse(rumus || "[]");
    let kategoriAkun;

    let rumusFix = ``;

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

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Rumus Arus Kas - Saldo Kas Awal : `,
      akhir: `${rumusFix}`,
      bawah: `${rencana.nama} - Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
      alamat_id: rencana.id,
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
    const rumusSebelum = await MRencanaRumusSaldoKasAwal.query()
      .where({ id: rumus_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: rumusSebelum.m_rencana_keuangan_id })
      .first();

    if (rumusSebelum.rumus != rumus) {
      const rumus1 = await MRencanaRumusSaldoKasAwal.query()
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
      let rumusFix = ``;

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

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `Rumus Arus Kas - Saldo Kas Awal : ${rumusSebelum2} menjadi `,
        akhir: `"${rumusFix}"`,
        bawah: `${rencana.nama} - Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
        alamat_id: rencana.id,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }
  async postRumusSaldoKasAkhir({
    response,
    request,
    auth,
    params: { perencanaan_id },
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

    const rumus1 = await MRencanaRumusSaldoKasAkhir.create({
      rumus,
      dihapus: 0,
      m_rencana_keuangan_id: perencanaan_id,
      m_sekolah_id: sekolah.id,
    });

    const rencana = await MRencanaKeuangan.query()
      .where({ id: perencanaan_id })
      .first();

    const rumus12 = JSON.parse(rumus || "[]");
    let kategoriAkun;

    let rumusFix = ``;

    for (let i = 0; i < rumus12.length; i++) {
      const d = rumus12[i];
      if (d.id) {
        kategoriAkun = await MRencanaKategoriArusKas.query()
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
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Rumus Arus Kas - Saldo Kas Akhir : `,
      akhir: `${rumusFix}`,
      bawah: `${rencana.nama} - Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
      alamat_id: rencana.id,
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
    const rumusSebelum = await MRencanaRumusSaldoKasAkhir.query()
      .where({ id: rumus_id })
      .first();

    if (rumusSebelum.rumus != rumus) {
      const rumus1 = await MRencanaRumusSaldoKasAkhir.query()
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
          kategoriAkun = await MRencanaKategoriArusKas.query()
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
          kategoriAkun = await MRencanaKategoriArusKas.query()
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
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `Rumus Arus Kas - Saldo Kas Akhir : ${rumusSebelum2} menjadi `,
        akhir: `"${rumusFix}"`,
        bawah: `${rencana.nama} - Laporan Arus Kas`,
        m_sekolah_id: sekolah.id,
        alamat_id: rencana.id,
      });
    }
    return response.ok({
      message: messagePutSuccess,
    });
  }
  async getHistori({ response, request, auth }) {
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
    let { search, tanggal_awal, tanggal_akhir, jenis, tipe, m_user_id } =
      request.get();

    let histori;

    histori = MHistoriAktivitas.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      histori.whereRaw(
        `CONCAT(REPLACE(COALESCE(akhir, ''),'\"',''), REPLACE(COALESCE(bawah, ''),'\"',''), REPLACE(COALESCE(awal, ''),'\"','')) like ?`,
        [`%${search}%`]
      );
    }
    if (tanggal_awal) {
      histori.whereBetween("created_at", [
        `${tanggal_awal} 00:00:00`,
        `${tanggal_akhir} 23:59:59`,
      ]);
    }
    if (tipe) {
      histori.andWhere("tipe", "like", `%${tipe}%`);
    }
    if (jenis) {
      histori.andWhere("jenis", "like", `%${jenis}%`);
    }
    if (m_user_id) {
      histori.andWhere({ m_user_id: m_user_id });
    }
    if (user.bagian == "keuangan" || user.bagian == "aproval") {
      histori.whereIn("jenis", [
        "Buat Transaksi",
        "Ubah Transaksi",
        "Hapus Transaksi",
        "Buat Rencana Anggaran",
        "Ubah Rencana Anggaran",
        "Hapus Rencana Anggaran",
        "Buat Perencanaan",
        "Ubah Perencanaan",
        "Hapus Perencanaan",
        "Proses Inventaris",
        "Proses Transaksi",
        "Proses Rencana Anggaran",
      ]);
    }

    histori = await histori.orderBy("id", "desc").fetch();

    const jenisData = await MHistoriAktivitas.query()
      .distinct("jenis")
      .pluck("jenis");

    const userIds = await MHistoriAktivitas.query()
      .distinct("m_user_id")
      .pluck("m_user_id");
    const users = await User.query().whereIn("id", userIds).fetch();

    return response.ok({
      histori,
      jenis: jenisData,
      users,
    });
  }

  async getHistoriSarpras({ response, request, auth }) {
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
    let { search, tanggal_awal, tanggal_akhir, jenis, tipe, m_user_id } =
      request.get();

    let histori;

    histori = MHistoriAktivitas.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ tipe: "SarPras" });

    if (search) {
      histori.whereRaw(
        `CONCAT(REPLACE(COALESCE(akhir, ''),'\"',''), REPLACE(COALESCE(bawah, ''),'\"',''), REPLACE(COALESCE(awal, ''),'\"','')) like ?`,
        [`%${search}%`]
      );
    }
    if (tanggal_awal) {
      histori.whereBetween("created_at", [
        `${tanggal_awal} 00:00:00`,
        `${tanggal_akhir} 23:59:59`,
      ]);
    }
    if (tipe) {
      histori.andWhere("tipe", "like", `%${tipe}%`);
    }
    if (jenis) {
      histori.andWhere("jenis", "like", `%${jenis}%`);
    }
    if (m_user_id) {
      histori.andWhere({ m_user_id: m_user_id });
    }

    histori = await histori.orderBy("id", "desc").fetch();

    const jenisData = await MHistoriAktivitas.query()
      .where({ tipe: "SarPras" })
      .distinct("jenis")
      .pluck("jenis");

    const userIds = await MHistoriAktivitas.query()
      .where({ tipe: "SarPras" })
      .distinct("m_user_id")
      .pluck("m_user_id");
    const users = await User.query().whereIn("id", userIds).fetch();

    return response.ok({
      histori,
      jenis: jenisData,
      users,
    });
  }
  async downloadJurnal({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir } = request.post();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    const bulanAwal1 = moment(tanggal_awal).locale("id").format("MMMM YYYY ");
    const bulanAkhir1 = moment(tanggal_akhir).locale("id").format("MMMM YYYY ");

    const transaksi = await MRencanaTransaksi.query()
      .with("jurnal", (builder) => {
        builder.with("akun").where({ dihapus: 0 });
      })
      .withCount("jurnal as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereBetween("tanggal", [`${tanggal_awal}`, `${tanggal_akhir}`])
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
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
        worksheet.getRow(5).values = ["BULAN", "NAMA AKUN", "DEBIT", "KREDIT"];
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
        const tanggalUtama = moment(`${d.tanggal}`).format("MM-YYYY");

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
    worksheet.getCell("A3").value = `Bulan : ${bulanAwal1} - ${bulanAkhir1}`;

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

  async downloadTransaksi({
    response,
    request,
    auth,
    params: { perencanaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir } = request.post();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

    const awal1 = moment(tanggal_awal).locale("id").format("DD MMMM YYYY ");
    const akhir1 = moment(tanggal_akhir).locale("id").format("DD MMMM YYYY ");

    const transaksi = await MRencanaTransaksi.query()
      .with("jurnal", (builder) => {
        builder.with("akun").where({ dihapus: 0 });
      })
      .withCount("jurnal as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereBetween("tanggal", [`${tanggal_awal}`, `${tanggal_akhir}`])
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .fetch();

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
          "BULAN",
          "TANGGAL PERUBAHAN",
          "KETERANGAN PERENCANAAN",
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
        const tanggalUtama = moment(`${d.tanggal}`).format("MMMM  YYYY");
        const tanggalPerubahan = moment(`${d.updated_at}`).format("DD-MM-YYYY");
        const jamPerubahan = moment(`${d.updated_at}`).format("HH:mm:ss");

        if (idx == 0) {
          worksheet.getCell(`A${(idx + 1) * 1 + 5}`).value = `${tanggalUtama}`;
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
          worksheet.getCell(`A${6 + awal}`).value = `${tanggalUtama}`;

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

    worksheet.getColumn("A").width = 20;
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

  async getBarang({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { page, search, tanggal_awal, tanggal_akhir } = request.get();

    page = page ? parseInt(page) : 1;

    const barangIds = await MKeuTransaksi.query()
      .distinct("m_barang_id")
      .pluck("m_barang_id");

    let barang;

    barang = MBarang.query()
      .with("lokasi")
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ verifikasi: 0 });

    if (search) {
      barang.andWhere("nama", "like", `%${search}%`);
    }
    if (barangIds.length) {
      // barang.whereNotIn("id", barangIds);
    }
    if (tanggal_awal) {
      barang.whereBetween("tahun_beli", [tanggal_awal, tanggal_akhir]);
    }

    return response.ok({
      barang: await barang.paginate(page, 25),
    });
  }

  async getTransaksiBarang({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    const rencana = await this.getRencanaAktif(sekolah, 1);

    const { page, search, dari_tanggal, sampai_tanggal, tipe_akun } =
      request.get();

    const barangIds = await MBarang.query()
      .with("lokasi")
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ verifikasi: 1 })
      .ids();

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
      .whereIn("m_barang_id", barangIds)
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
  async downloadJurnalAsetAktif({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tanggal_awal, tanggal_akhir } = request.post();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

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
      .whereNotNull("m_barang_id")
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

  async otomatisNeraca({ response, request, auth, params: { rencana_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const check = await MRencanaKategoriNeraca.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: rencana_id })
      .first();

    if (!check) {
      const semuaAkun = await MKeuAkun.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      const Al = await MRencanaKategoriNeraca.create({
        tipe: "aktiva",
        nama: "AKTIVA LANCAR",
        warna: "#00D084",
        dihapus: 0,
        m_rencana_keuangan_id: rencana_id,
        m_sekolah_id: sekolah.id,
      });

      const KAS = semuaAkun.toJSON().find((d) => d.nama == "KAS");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: Al.id,
        m_keu_akun_id: KAS.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANABOS = semuaAkun.toJSON().find((d) => d.nama == "DANA BOS");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: Al.id,
        m_keu_akun_id: DANABOS.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANABOP = semuaAkun.toJSON().find((d) => d.nama == "DANA BOP");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: Al.id,
        m_keu_akun_id: DANABOP.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANABPMU = semuaAkun.toJSON().find((d) => d.nama == "DANA BPMU");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: Al.id,
        m_keu_akun_id: DANABPMU.id,
        dihapus: 0,
        urutan: 1,
      });

      const DANAYAYASAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "DANA YAYASAN");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: Al.id,
        m_keu_akun_id: DANAYAYASAN.id,
        dihapus: 0,
        urutan: 1,
      });

      const At = await MRencanaKategoriNeraca.create({
        tipe: "aktiva",
        nama: "AKTIVA TETAP",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const INVENTARIS = semuaAkun.toJSON().find((d) => d.nama == "INVENTARIS");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: At.id,
        m_keu_akun_id: INVENTARIS.id,
        dihapus: 0,
        urutan: 1,
      });

      const KENDARAAN = semuaAkun.toJSON().find((d) => d.nama == "KENDARAAN");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: At.id,
        m_keu_akun_id: KENDARAAN.id,
        dihapus: 0,
        urutan: 1,
      });

      const GEDUNGSEKOLAH = semuaAkun
        .toJSON()
        .find((d) => d.nama == "GEDUNG SEKOLAH");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: At.id,
        m_keu_akun_id: GEDUNGSEKOLAH.id,
        dihapus: 0,
        urutan: 1,
      });

      const Ul = await MRencanaKategoriNeraca.create({
        tipe: "pasiva",
        nama: "UTANG LANCAR",
        warna: "#EB144C",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const UTANGUSAHA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "UTANG USAHA");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: Ul.id,
        m_keu_akun_id: UTANGUSAHA.id,
        dihapus: 0,
        urutan: 1,
      });

      const UTANGPAJAK = semuaAkun
        .toJSON()
        .find((d) => d.nama == "UTANG PAJAK");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: Ul.id,
        m_keu_akun_id: UTANGPAJAK.id,
        dihapus: 0,
        urutan: 1,
      });

      const UTANGJANGKAP = semuaAkun
        .toJSON()
        .find((d) => d.nama == "UTANG JANGKA PENDEK LAINNYA");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: Ul.id,
        m_keu_akun_id: UTANGJANGKAP.id,
        dihapus: 0,
        urutan: 1,
      });

      const Ujp = await MRencanaKategoriNeraca.create({
        tipe: "pasiva",
        nama: "UTANG JANGKA PANJANG",
        warna: "#EB144C",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const UTANGOBLIGASI = semuaAkun
        .toJSON()
        .find((d) => d.nama == "UTANG OBLIGASI");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: Ujp.id,
        m_keu_akun_id: UTANGOBLIGASI.id,
        dihapus: 0,
        urutan: 1,
      });

      const E = await MRencanaKategoriNeraca.create({
        tipe: "pasiva",
        nama: "EKUITAS",
        warna: "#EB144C",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const MODAL = semuaAkun.toJSON().find((d) => d.nama == "MODAL");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: E.id,
        m_keu_akun_id: MODAL.id,
        dihapus: 0,
        urutan: 1,
      });

      const LABADITAHAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "LABA DITAHAN");
      await TkRencanaKategoriNeraca.create({
        m_rencana_kategori_neraca_id: E.id,
        m_keu_akun_id: LABADITAHAN.id,
        dihapus: 0,
        urutan: 1,
      });
      return `selesai`;
    } else {
      return `udah ada`;
    }
  }
  async otomatisLabaRugi({ response, request, auth, params: { rencana_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const check = await MRencanaKategoriLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: rencana_id })
      .first();

    if (!check) {
      const semuaAkun = await MKeuAkun.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      const pendapatan = await MRencanaKategoriLabaRugi.create({
        nama: "PENDAPATAN",
        warna: "#00D084",
        dihapus: 0,
        m_rencana_keuangan_id: rencana_id,
        m_sekolah_id: sekolah.id,
      });

      const PENDAPATANJASA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN JASA");
      await TkRencanaKategoriLabaRugi.create({
        m_rencana_kategori_laba_rugi_id: pendapatan.id,
        m_keu_akun_id: PENDAPATANJASA.id,
        dihapus: 0,
        urutan: 1,
      });

      const PENDAPATANLAINNYA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN LAINNYA");
      await TkRencanaKategoriLabaRugi.create({
        m_rencana_kategori_laba_rugi_id: pendapatan.id,
        m_keu_akun_id: PENDAPATANLAINNYA.id,
        dihapus: 0,
        urutan: 1,
      });

      const beban = await MRencanaKategoriLabaRugi.create({
        nama: "BEBAN TIDAK LANGSUNG",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const BEBANGAJI = semuaAkun.toJSON().find((d) => d.nama == "BEBAN GAJI");
      await TkRencanaKategoriLabaRugi.create({
        m_rencana_kategori_laba_rugi_id: beban.id,
        m_keu_akun_id: BEBANGAJI.id,
        dihapus: 0,
        urutan: 1,
      });

      // const BEBANLISTRIK = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN LISTRIK, AIR, TELEPON");
      // await TkRencanaKategoriLabaRugi.create({
      //   m_rencana_kategori_laba_rugi_id: beban.id,
      //   m_keu_akun_id: BEBANLISTRIK.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // const BEBANPERLENGKAPAN = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN PERLENGKAPAN KANTOR");
      // await TkRencanaKategoriLabaRugi.create({
      //   m_rencana_kategori_laba_rugi_id: beban.id,
      //   m_keu_akun_id: BEBANPERLENGKAPAN.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // const BEBANSEWA = semuaAkun.toJSON().find((d) => d.nama == "BEBAN SEWA");
      // await TkRencanaKategoriLabaRugi.create({
      //   m_rencana_kategori_laba_rugi_id: beban.id,
      //   m_keu_akun_id: BEBANSEWA.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // const BEBANPERAWATAN = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN PERAWATAN PERALATAN");
      // await TkRencanaKategoriLabaRugi.create({
      //   m_rencana_kategori_laba_rugi_id: beban.id,
      //   m_keu_akun_id: BEBANPERAWATAN.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // const BEBANASURANSI = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN ASURANSI");
      // await TkRencanaKategoriLabaRugi.create({
      //   m_rencana_kategori_laba_rugi_id: beban.id,
      //   m_keu_akun_id: BEBANASURANSI.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // const BEBANLAIN = semuaAkun
      //   .toJSON()
      //   .find((d) => d.nama == "BEBAN LAINNYA");
      // await TkRencanaKategoriLabaRugi.create({
      //   m_rencana_kategori_laba_rugi_id: beban.id,
      //   m_keu_akun_id: BEBANLAIN.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      const bebanLangsung = await MRencanaKategoriLabaRugi.create({
        nama: "BEBAN LANGSUNG",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const BEBANADMINISTRASI = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN ADMINISTRASI");
      await TkRencanaKategoriLabaRugi.create({
        m_rencana_kategori_laba_rugi_id: bebanLangsung.id,
        m_keu_akun_id: BEBANADMINISTRASI.id,
        dihapus: 0,
        urutan: 1,
      });

      const BEBANINVENTARIS = semuaAkun
        .toJSON()
        .find((d) => d.nama == "BEBAN INVENTARIS");
      await TkRencanaKategoriLabaRugi.create({
        m_rencana_kategori_laba_rugi_id: bebanLangsung.id,
        m_keu_akun_id: BEBANINVENTARIS.id,
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

      const rumus2 = [
        {
          id: pendapatan.id,
        },
        {
          operator: "minus",
        },
        {
          id: beban.id,
        },
        {
          operator: "minus",
        },
        {
          id: bebanLangsung.id,
        },
      ];
      await MRencanaRumusLabaRugi.create({
        nama: "LABA OPERASIONAL",
        rumus: JSON.stringify(rumus),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });
      await MRencanaRumusLabaRugi.create({
        nama: "LABA/RUGI",
        rumus: JSON.stringify(rumus2),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const modal = semuaAkun.toJSON().find((d) => d.nama == "MODAL");
      await MRumusKeuAkun.create({
        tipe: "MODAL",
        rumus: JSON.stringify(rumus2),
        m_keu_akun_id: modal.id,
        m_rencana_keuangan_id: rencana_id,
      });
      const labaDitahan = semuaAkun
        .toJSON()
        .find((d) => d.nama == "LABA DITAHAN");
      await MRumusKeuAkun.create({
        tipe: "LABA DITAHAN",
        rumus: JSON.stringify(rumus2),
        m_keu_akun_id: labaDitahan.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const KAS = semuaAkun.toJSON().find((d) => d.nama == "KAS");
      const DANABOS = semuaAkun.toJSON().find((d) => d.nama == "DANA BOS");
      const DANABOP = semuaAkun.toJSON().find((d) => d.nama == "DANA BOP");
      const DANABPMU = semuaAkun.toJSON().find((d) => d.nama == "DANA BPMU");
      const DANAYAYASAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "DANA YAYASAN");
      const rumusPendapatan = [
        {
          id: KAS.id,
        },
        {
          operator: "plus",
        },
        {
          id: DANABOS.id,
        },
        {
          operator: "plus",
        },
        {
          id: DANABOP.id,
        },
        {
          operator: "plus",
        },
        {
          id: DANABPMU.id,
        },
        {
          operator: "plus",
        },
        {
          id: DANAYAYASAN.id,
        },
      ];
      await MRumusKeuAkun.create({
        tipe: "PENDAPATAN JASA",
        rumus: JSON.stringify(rumusPendapatan),
        m_keu_akun_id: PENDAPATANJASA.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const LEMARI = semuaAkun.toJSON().find((d) => d.nama == "LEMARI");
      const MEJA = semuaAkun.toJSON().find((d) => d.nama == "MEJA");
      const KURSI = semuaAkun.toJSON().find((d) => d.nama == "KURSI");

      const rumusBebanInventaris = [
        {
          id: LEMARI.id,
        },
        {
          operator: "plus",
        },
        {
          id: MEJA.id,
        },
        {
          operator: "plus",
        },
        {
          id: KURSI.id,
        },
      ];
      await MRumusKeuAkun.create({
        tipe: "BEBAN INVENTARIS",
        rumus: JSON.stringify(rumusBebanInventaris),
        m_keu_akun_id: BEBANINVENTARIS.id,
        m_rencana_keuangan_id: rencana_id,
      });

      return "selesai";
    } else {
      return `sudah`;
    }
  }
  async otomatisArusKas({ response, request, auth, params: { rencana_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const check = await MRencanaKategoriArusKas.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: rencana_id })
      .first();

    if (!check) {
      const semuaAkun = await MKeuAkun.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      // kategori Operasi
      const operasi = await MRencanaKategoriArusKas.create({
        nama: "Operasi",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      // Aktivitas LabaBersih
      const LabaBersih = await MRencanaKategoriTipeAkun.create({
        nama: "Laba Bersih",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });
      const LABABERSIH = semuaAkun
        .toJSON()
        .find((d) => d.nama == "LABA BERSIH");

      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: LabaBersih.id,
        m_keu_akun_id: LABABERSIH.id,
        dihapus: 0,
        urutan: 1,
      });

      await MRencanaAktivitasTransaksi.create({
        judul: "Laba Bersih",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_kategori_tipe_akun_id: LabaBersih.id,
        m_rencana_kategori_arus_kas_id: operasi.id,
        urutan: 1,
        laba: 1,
      });

      // aktivitas Akun Piutang
      const AkunPiutang = await MRencanaKategoriTipeAkun.create({
        nama: "Akun Piutang",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const PIUTANGPENDAPATAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PIUTANG PENDAPATAN JASA");
      const PIUTANGKARYAWAN = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PIUTANG KARYAWAN");

      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AkunPiutang.id,
        m_keu_akun_id: PIUTANGPENDAPATAN.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AkunPiutang.id,
        m_keu_akun_id: PIUTANGKARYAWAN.id,
        dihapus: 0,
        urutan: 1,
      });

      await MRencanaAktivitasTransaksi.create({
        judul: "Akun Piutang",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_kategori_tipe_akun_id: AkunPiutang.id,
        m_rencana_kategori_arus_kas_id: operasi.id,
        urutan: 1,
        laba: 1,
      });

      //aktivitas AsetLancar
      const AsetLancar = await MRencanaKategoriTipeAkun.create({
        nama: "Aset Lancar",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const KAS = semuaAkun.toJSON().find((d) => d.nama == "KAS");
      const BOS = semuaAkun.toJSON().find((d) => d.nama == "DANA BOS");
      const BOP = semuaAkun.toJSON().find((d) => d.nama == "DANA BOP");
      const BPMU = semuaAkun.toJSON().find((d) => d.nama == "DANA BPMU");
      const YAYASAN = semuaAkun.toJSON().find((d) => d.nama == "DANA YAYASAN");

      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_akun_id: KAS.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_akun_id: BOS.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_akun_id: BOP.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_akun_id: BPMU.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AsetLancar.id,
        m_keu_akun_id: YAYASAN.id,
        dihapus: 0,
        urutan: 1,
      });

      await MRencanaAktivitasTransaksi.create({
        judul: "Aset Lancar",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_kategori_tipe_akun_id: AsetLancar.id,
        m_rencana_kategori_arus_kas_id: operasi.id,
        urutan: 1,
        laba: 1,
      });

      // Aktivitas Persediaan Barang
      // const PersediaanBarang = await MRencanaKategoriTipeAkun.create({
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

      // await TkRencanaKategoriTipeAkun.create({
      //   m_rencana_kategori_tipe_akun_id:PersediaanBarang.id,
      //   m_keu_akun_id: LEMARI.id,
      //   dihapus:0,
      //   urutan:1
      // })
      // await TkRencanaKategoriTipeAkun.create({
      //   m_rencana_kategori_tipe_akun_id:PersediaanBarang.id,
      //   m_keu_akun_id: MEJA.id,
      //   dihapus:0,
      //   urutan:1
      // })
      // await TkRencanaKategoriTipeAkun.create({
      //   m_rencana_kategori_tipe_akun_id:PersediaanBarang.id,
      //   m_keu_akun_id: KURSI.id,
      //   dihapus:0,
      //   urutan:1
      // })

      // await MRencanaAktivitasTransaksi.create({
      //   judul: "Persediaan Barang",
      //   dihapus:0,
      //   m_sekolah_id:sekolah.id,
      //   m_rencana_kategori_tipe_akun_id: PersediaanBarang.id,
      //   m_rencana_kategori_arus_kas_id: operasi.id,
      //   urutan:1,
      //   laba:1
      // })

      // Aktivitas Penyusutan

      // const Penyusutan = await MRencanaKategoriTipeAkun.create({
      //   nama: "Penyusutan & Amortisasi",
      //   dihapus: 0,
      //   m_sekolah_id: sekolah.id,
      //   m_rencana_keuangan_id: rencana_id,
      // });

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

      // await TkRencanaKategoriTipeAkun.create({
      //   m_rencana_kategori_tipe_akun_id: Penyusutan.id,
      //   m_keu_akun_id: BEBANPPK.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkRencanaKategoriTipeAkun.create({
      //   m_rencana_kategori_tipe_akun_id: Penyusutan.id,
      //   m_keu_akun_id: BEBANPPB.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkRencanaKategoriTipeAkun.create({
      //   m_rencana_kategori_tipe_akun_id: Penyusutan.id,
      //   m_keu_akun_id: BEBANPK.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });
      // await TkRencanaKategoriTipeAkun.create({
      //   m_rencana_kategori_tipe_akun_id: Penyusutan.id,
      //   m_keu_akun_id: BEBANPG.id,
      //   dihapus: 0,
      //   urutan: 1,
      // });

      // await MRencanaAktivitasTransaksi.create({
      //   judul: "Penyusutan & Amortisasi",
      //   dihapus: 0,
      //   m_sekolah_id: sekolah.id,
      //   m_rencana_kategori_tipe_akun_id: Penyusutan.id,
      //   m_rencana_kategori_arus_kas_id: operasi.id,
      //   urutan: 1,
      //   laba: 1,
      // });

      // Kategori Investasi
      const Investasi = await MRencanaKategoriArusKas.create({
        nama: "Investasi",
        warna: "#00D084",
        dihapus: 0,
        m_rencana_keuangan_id: rencana_id,
        m_sekolah_id: sekolah.id,
      });

      // Aktivitas AsetTetap
      const AsetTetap = await MRencanaKategoriTipeAkun.create({
        nama: "Aset Tetap",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });
      const LEMARI = semuaAkun.toJSON().find((d) => d.nama == "LEMARI");
      const MEJA = semuaAkun.toJSON().find((d) => d.nama == "MEJA");
      const KURSI = semuaAkun.toJSON().find((d) => d.nama == "KURSI");
      const KENDARAAN = semuaAkun.toJSON().find((d) => d.nama == "KENDARAAN");
      const GEDUNGSEKOLAH = semuaAkun
        .toJSON()
        .find((d) => d.nama == "GEDUNG SEKOLAH");

      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_akun_id: LEMARI.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_akun_id: MEJA.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_akun_id: KURSI.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_akun_id: KENDARAAN.id,
        dihapus: 0,
        urutan: 1,
      });
      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: AsetTetap.id,
        m_keu_akun_id: GEDUNGSEKOLAH.id,
        dihapus: 0,
        urutan: 1,
      });

      await MRencanaAktivitasTransaksi.create({
        judul: "Aset Tetap",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_kategori_tipe_akun_id: AsetTetap.id,
        m_rencana_kategori_arus_kas_id: Investasi.id,
        urutan: 1,
        laba: 1,
      });

      // Kategori Pendanaan
      const Pendanaan = await MRencanaKategoriArusKas.create({
        nama: "Pendanaan",
        warna: "#00D084",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      // Aktivitas DIVIDEN
      const Dividen = await MRencanaKategoriTipeAkun.create({
        nama: "Dividen",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });
      const DIVIDEN = semuaAkun.toJSON().find((d) => d.nama == "DIVIDEN");

      await TkRencanaKategoriTipeAkun.create({
        m_rencana_kategori_tipe_akun_id: Dividen.id,
        m_keu_akun_id: DIVIDEN.id,
        dihapus: 0,
        urutan: 1,
      });

      await MRencanaAktivitasTransaksi.create({
        judul: "Dividen",
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_kategori_tipe_akun_id: Dividen.id,
        m_rencana_kategori_arus_kas_id: Pendanaan.id,
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
      await MRencanaRumusArusKas.create({
        rumus: JSON.stringify(rumusUtama),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      const PENDAPATANJASA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN JASA");
      const PENDAPATANLAINNYA = semuaAkun
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN LAINNYA");
      const kategoriLabaRugi = await MRencanaKategoriLabaRugi.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ m_rencana_keuangan_id: rencana_id })
        .fetch();
      const PENDAPATAN = kategoriLabaRugi
        .toJSON()
        .find((d) => d.nama == "PENDAPATAN");
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
        {
          operator: "minus",
        },
        {
          id: BEBANTIDAKLANGSUNG.id,
        },
        {
          operator: "minus",
        },
        {
          id: BEBANLANGSUNG.id,
        },
      ];

      await MRencanaRumusSaldoKasAwal.create({
        rumus: JSON.stringify(rumusAwal),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
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
      await MRencanaRumusSaldoKasAkhir.create({
        rumus: JSON.stringify(rumusAkhir),
        dihapus: 0,
        m_sekolah_id: sekolah.id,
        m_rencana_keuangan_id: rencana_id,
      });

      return `selesai`;
    } else {
      return `sudah ada`;
    }
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
      moment().format("YYYY-MM-DD ") + Date.now();

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
      moment().format("YYYY-MM-DD ") + Date.now();

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

  async aprovalPerencanaan({
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

    const transaksi = await MRencanaTransaksi.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ id: transaksi_id })
      .first();
    await MRencanaTransaksi.query().where({ id: transaksi_id }).update({
      status,
    });
    if (status == 1) {
      await MHistoriAktivitas.create({
        jenis: "Proses Rencana Anggaran",
        m_user_id: user.id,
        awal: `Verifikasi Diterima : `,
        akhir: `"${transaksi.nama}"`,
        bawah: `Transaksi`,
        m_sekolah_id: sekolah.id,
        tipe: "Perencanaan",
      });
    } else if (status == null) {
      await MHistoriAktivitas.create({
        jenis: "Proses Rencana Anggaran",
        m_user_id: user.id,
        awal: `Verifikasi Ditolak : `,
        akhir: `"${transaksi.nama}"`,
        bawah: `Transaksi`,
        m_sekolah_id: sekolah.id,
        tipe: "Perencanaan",
      });
    }
    const jurnalIds = await MKeuRencanaJurnal.query()
      .where({ m_rencana_transaksi_id: transaksi_id })
      .where({ dihapus: 0 })
      .ids();

    await Promise.all(
      jurnalIds.map(async (d) => {
        await MKeuRencanaJurnal.query().where({ id: d }).update({
          status,
        });
      })
    );

    return response.ok({
      message: messagePostSuccess,
    });
  }
 
}

module.exports = KeuanganController;

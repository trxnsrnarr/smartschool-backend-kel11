"use strict";

const MSekolah = use("App/Models/MSekolah");
const Mta = use("App/Models/Mta");
const User = use("App/Models/User");
const MRencanaKeuangan = use("App/Models/MRencanaKeuangan");

const messagePostSuccess = "Data berhasil ditambahkan";
const messageSaveSuccess = "Data berhasil disimpan";
const messagePutSuccess = "Data berhasil diubah";
const messageDeleteSuccess = "Data berhasil dihapus";
const messageNotFound = "Data tidak ditemukan";
const messageForbidden = "Dilarang, anda bukan seorang admin";
const messageEmailSuccess = "Data berhasil dikirim ke email";
const pesanSudahDitambahkan = "Data sudah ditambahkan";
class KeuanganController {
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

    const perencanaan = await MRencanaKeuangan.create({
      nama,
      tanggal_awal,
      tanggal_akhir,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
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

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }
  async getRencanaTransaksi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();

    const { page, search, dari_tanggal, sampai_tanggal, tipe_akun } =
      request.get();

    let transaksiIds;
    if (tipe_akun) {
      transaksiIds = await MRencanaJurnal.query()
        .where({ m_keu_akun_id: tipe_akun })
        .pluck("m_rencana_transaksi_id");
    }

    let transaksi = MRencanaTransaksi.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 }).with("akun", (builder) => {
          builder.select("nama", "id");
        });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .andWhere({m_rencana_keuangan_id:rencana_id});

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
    });
  }
  async postRencanaTransaksi({ response, request, auth }) {
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

    const rencana = await MRencanaKeuangan.query()
    .where({id:rencana_id})
    .first()

    const transaksi = await MRencanaTransaksi.create({
      nama,
      nomor,
      tanggal,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      m_rencana_keuangan_id: rencana.id
    });

    await Promise.all(
      jurnal.map(async (d) => {
        await MRencanaJurnal.create({
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
  async putRencanaTransaksi({ response, request, auth, params: { transaksi_id } }) {
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

    const transaksi = await MRencanaTransaksi.query()
      .with("jurnal")
      .where({ id: transaksi_id })
      .first();

    const jurnalIds = await MRencanaJurnal.query()
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
          await MRencanaJurnal.query().where({ id: d }).update({
            dihapus: 1,
          });
        }),
      editJurnal.map(async (d) => {
        await MRencanaJurnal.query().where({ id: d.id }).update({
          jenis: d.jenis,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          dihapus: 0,
        });
      }),
      newJurnal.map(async (d) => {
        await MRencanaJurnal.create({
          jenis: d.jenis,
          m_rencana_transaksi_id: transaksi.id,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          dihapus: 0,
        });
      })
    );

    let update = await MRencanaTransaksi.query()
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

  async deleteRencanaTransaksi({ response, request, auth, params: { transaksi_id } }) {
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

  async getRencanaNeraca({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let transaksiIds;
    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MKeuTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .ids();
    }
    let kategori;

    kategori = MKeuKategoriNeraca.query()
      .with("akunNeraca", (builder) => {
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
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      kategori.andWhere("nama", "like", `%${search}%`);
    }

    kategori = await kategori.fetch();

    const akun = await MKeuAkun.query()
      .with("jurnal", (builder) => {
        builder.where({ dihapus: 0 });
        if (transaksiIds) {
          builder.whereIn("m_keu_transaksi_id", transaksiIds);
        }
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

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
}

module.exports = KeuanganController;

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
const MKeuTemplateAnalisis = use("App/Models/MKeuTemplateAnalisis");
const MKeuTransaksi = use("App/Models/MKeuTransaksi");
const MRencanaAktivitasTransaksi = use("App/Models/MRencanaAktivitasTransaksi");
const TkRencanaKategoriTipeAkun = use("App/Models/TkRencanaKategoriTipeAkun");
const MHistoriAktivitas = use("App/Models/MHistoriAktivitas");

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

    if (rencanaSebelum.tanggal_akhir != tanggal_akhir) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Perencanaan",
        m_user_id: user.id,
        awal: `Tanggal Akhir : ${rencanaSebelum.tanggal_akhir}`,
        akhir: `"${tanggal_akhir}"`,
        m_sekolah_id: sekolah.id,
        tipe: "perencanaan",
      });
    }

    if (rencanaSebelum.tanggal_awal != tanggal_awal) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Perencanaan",
        m_user_id: user.id,
        awal: `tanggal Awal : ${rencanaSebelum.tanggal_awal}`,
        akhir: `"${tanggal_awal}"`,
        m_sekolah_id: sekolah.id,
        tipe: "perencanaan",
      });
    }

    if (rencanaSebelum.nama != nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Perencanaan",
        m_user_id: user.id,
        awal: `Judul : ${rencanaSebelum.nama}`,
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

    const { page, search, dari_tanggal, sampai_tanggal, tipe_akun } =
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
          builder.select("nama", "id");
        });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: rencana_id });

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
      .where({ id: rencana_id })
      .first();

    const transaksi = await MRencanaTransaksi.create({
      nama,
      nomor,
      tanggal,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      m_rencana_keuangan_id: rencana.id,
    });

    await Promise.all(
      jurnal.map(async (d) => {
        await MKeuRencanaJurnal.create({
          jenis: d.jenis,
          m_rencana_transaksi_id: transaksi.id,
          m_keu_akun_id: d.m_keu_akun_id,
          saldo: d.saldo,
          dihapus: 0,
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
            bawah: `${rencana.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Perencanaan",
            alamat_id: transaksi.m_rencana_keuangan_id,
          });
        }),

      editJurnal.map(async (d) => {
        const jurnalLama = semuaJurnal.toJSON().find((e) => e.id == d);
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
        });
        if (akunLama.id != akunBaru.id) {
          await MHistoriAktivitas.create({
            jenis: "Ubah Rencana Anggaran",
            m_user_id: user.id,
            awal: `Jurnal Umum - Nama Akun: ${akunLama.nama} menjadi`,
            akhir: `"${akunBaru.nama}"`,
            bawah: `${rencana.nama}`,
            m_sekolah_id: sekolah.id,
            tipe: "Perencanaan",
            alamat_id: transaksi.m_rencana_keuangan_id,
          });
        }
        if (d.saldo != jurnalLama.saldo || d.jenis != jurnalLama.jenis) {
          await MHistoriAktivitas.create({
            jenis: "Ubah Rencana Anggaran",
            m_user_id: user.id,
            awal: `Jurnal Umum - Nama Akun - ${akunBaru.nama} : ${jurnalLama.jenis} ${akunLama.nama} menjadi`,
            akhir: `"${d.jenis}${akunBaru.nama}"`,
            bawah: `${rencana.nama}`,
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
        });
        await MHistoriAktivitas.create({
          jenis: "Ubah Rencana Anggaran",
          m_user_id: user.id,
          awal: `Jurnal Umum - Nama Akun : dibuat akun `,
          akhir: `${akunBaru.nama}`,
          bawah: `${rencana.nama}`,
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
        awal: `nomor: ${transaksi.nomor} menjadi`,
        akhir: `"${nomor}"`,
        m_sekolah_id: sekolah.id,
        tipe: "Perencanaan",
        bawah: `${rencana.nama}`,
        alamat_id: transaksi.m_rencana_keuangan_id,
      });
    }
    if (tanggal != transaksi.tanggal) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Rencana Anggaran",
        m_user_id: user.id,
        awal: `Tanggal: ${transaksi.tanggal} menjadi`,
        akhir: `"${tanggal}"`,
        m_sekolah_id: sekolah.id,
        tipe: "Perencanaan",
        bawah: `${rencana.nama}`,
        alamat_id: transaksi.m_rencana_keuangan_id,
      });
    }
    if (nama != transaksi.nama) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Rencana Anggaran",
        m_user_id: user.id,
        awal: `Judul: ${transaksi.nama} menjadi`,
        akhir: `"${nama}"`,
        m_sekolah_id: sekolah.id,
        tipe: "Perencanaan",
        bawah: `${rencana.nama}`,
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
      });

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const transaksi = await MKeuTransaksi.query()
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

  async getRencanaNeraca({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, tanggal_awal, tanggal_akhir } = request.get();

    let transaksiIds;
    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ m_rencana_keuangan_id: rencana_id })
        .ids();
    }

    const akun = await MKeuAkun.query()
      .with("rencanaJurnal", (builder) => {
        builder.where({ dihapus: 0 });
        if (transaksiIds) {
          builder.whereIn("m_rencana_transaksi_id", transaksiIds);
        }
      })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    let kategori;

    kategori = MRencanaKategoriNeraca.query()
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

    let transaksiIds;
    if (tanggal_awal && tanggal_akhir) {
      transaksiIds = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal, tanggal_akhir])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ m_rencana_keuangan_id: perencanaan_id })
        .ids();
    }

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

    const rumus = await MRencanaRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_rencana_keuangan_id: perencanaan_id })
      .limit(1)
      .fetch();

    const akun = await MKeuAkun.query()
      .with("rencanaJurnal", (builder) => {
        builder.where({ dihapus: 0 });
        if (transaksiIds) {
          builder.whereIn("m_rencana_transaksi_id", transaksiIds);
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
      rumus,
      akun,
      keuangan,
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

    const kategori = await MRencanaKategoriLabaRugi.create({
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

    const kategori = await MRencanaKategoriLabaRugi.query()
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

    const kategoriLaba = await MRencanaKategoriLabaRugi.query()
      .where({ id: kategori_id })
      .first();

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

    const akun = await MKeuAkun.qeury().where({ id: m_keu_akun_id }).first();

    await MHistoriAktivitas.create({
      jenis: "Buat Template Laporan",
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `${kategoriLaba.nama} : `,
      akhir: `${akun.nama}`,
      bawah: `${rencana.nama} - Laporan Laba/Rugi`,
      m_sekolah_id: sekolah.id,
      alamat_id: transaksi.m_rencana_keuangan_id,
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
        .where({ id: kategori_id })
        .first();

      const rencana = await MRencanaKeuangan.query()
        .where({ id: kategoriLaba.m_rencana_keuangan_id })
        .first();

      const akunSebelum = await MKeuAkun.qeury()
        .where({ id: labaSebelum.m_keu_akun_id })
        .first();
      const akun = await MKeuAkun.qeury().where({ id: m_keu_akun_id }).first();

      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `${kategoriLaba.nama} : ${akunSebelum.nama} menjadi `,
        akhir: `"${akun.nama}"`,
        bawah: `${rencana.nama} - Laporan Laba/Rugi`,
        m_sekolah_id: sekolah.id,
        alamat_id: transaksi.m_rencana_keuangan_id,
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

    const akun = await MKeuAkun.qeury()
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
      alamat_id: transaksi.m_rencana_keuangan_id,
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

    const rumus1 = await MRencanaRumusLabaRugi.create({
      rumus,
      dihapus: 0,
      m_rencana_keuangan_id: perencanaan_id,
      m_sekolah_id: sekolah.id,
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
    const rumusSebelum = await MRencanaRumusLabaRugi.query()
      .where({ id: rumus_id })
      .first();

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
      alamat_id: transaksi.m_rencana_keuangan_id,
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
        .andWhere({ m_rencana_keuangan_id: perencanaan_id })
        .ids();
      transaksiIds2 = await MRencanaTransaksi.query()
        .whereBetween("tanggal", [tanggal_awal2, tanggal_akhir2])
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .andWhere({ m_rencana_keuangan_id: perencanaan_id })
        .ids();
    } else {
      return response.notFound({
        message: "harap memasukan tanggal periode 1 dan 2",
      });
    }
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

    if (search) {
      labaRugi.andWhere("nama", "like", `%${search}%`);
    }

    labaRugi = await labaRugi.fetch();

    const rumuslabaRugi = await MRencanaRumusLabaRugi.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      // .limit(1)
      .first();

    const akun = await MKeuAkun.query()
      .with("rencanaJurnal1", (builder) => {
        builder
          .whereIn("m_rencana_transaksi_id", transaksiIds1)
          .where({ dihapus: 0 });
      })
      .with("rencanaJurnal2", (builder) => {
        builder
          .whereIn("m_rencana_transaksi_id", transaksiIds2)
          .where({ dihapus: 0 });
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
      awal: `${tipe} : `,
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

    const kategoriNeraca = await MRencanaKategoriNeraca.query()
      .where({ id: kategori_id })
      .first();

    const rencana = await MRencanaKeuangan.query()
      .where({ id: kategoriNeraca.m_rencana_keuangan_id })
      .first();

    if (warna != kategoriNeraca.warna) {
      await MHistoriAktivitas.create({
        jenis: "Ubah Template Laporan",
        tipe: "Perencanaan",
        m_user_id: user.id,
        awal: `${kategoriNeraca.tipe} - Warna : ${kategoriNeraca.warna} menjadi `,
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
        awal: `${kategoriNeraca.tipe} - Nama : ${kategoriNeraca.nama} menjadi `,
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
      awal: `${kategoriNeraca.tipe} : `,
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

    const { m_keu_kategori_neraca_id, m_keu_akun_id, urutan } = request.post();

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
      awal: `${kategoriNeraca.tipe} - ${kategoriNeraca.nama} : `,
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

    const neracaSebelum = await TkRencanaKategoriNeraca.query()
      .where({ id: neraca_id })
      .first();

    const neraca = await TkRencanaKategoriNeraca.query()
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
        awal: `${kategoriNeraca.tipe} - ${kategoriNeraca.nama} : ${akunSebelum.nama} menjadi `,
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
      awal: `${kategoriNeraca.tipe} - ${kategoriNeraca.nama} : `,
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

    const kategoriArusKas = await MRencanaKategoriArusKas.query()
      .where({ id: kategori_id })
      .first();

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

    const kategoriArus = await MrencanaKategoriArusKas.query()
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

    const kategori = await MRencanaKategoriTipeAkun.create({
      nama,
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
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Rumus Arus Kas - Saldo Kas Awal: `,
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
      tipe: "Perencanaan",
      m_user_id: user.id,
      awal: `Rumus Arus Kas - Saldo Kas Akhir : `,
      akhir: `${rumusFix}`,
      bawah: `${rencana.nama} - Laporan Arus Kas`,
      m_sekolah_id: sekolah.id,
      alamat_id: rencana.id
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

    let { search, tanggal_awal, tanggal_akhir, jenis, tipe } = request.get();

    let histori;

    histori = MHistoriAktivitas.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .andWhere({ m_sekolah_id: sekolah.id });

    if (search) {
      histori.andWhere("awal", "like", `%${search}%`);
    }
    if (tanggal_awal) {
      histori.whereBetween("created_at", [tanggal_awal, tanggal_akhir]);
    }
    if (tipe) {
      histori.andWhere("tipe", "like", `%${tipe}%`);
    }
    if (jenis) {
      histori.andWhere("jenis", "like", `%${jenis}%`);
    }

    histori = await histori.fetch();

    return response.ok({
      histori,
    });
  }
}

module.exports = KeuanganController;

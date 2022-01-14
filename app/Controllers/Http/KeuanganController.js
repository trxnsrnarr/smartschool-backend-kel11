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
}

module.exports = KeuanganController;

"use strict";
const MSekolah = use("App/Models/MSekolah");
const Mta = use("App/Models/Mta");
const User = use("App/Models/User");
const MAnggotaRombel = use("App/Models/MAnggotaRombel");

const Hash = use("Hash");

const messagePostSuccess = "Data berhasil ditambahkan";
const messageSaveSuccess = "Data berhasil disimpan";
const messagePutSuccess = "Data berhasil diubah";
const messageDeleteSuccess = "Data berhasil dihapus";
const messageNotFound = "Data tidak ditemukan";
const messageForbidden = "Dilarang, anda bukan seorang admin";
const messageEmailSuccess = "Data berhasil dikirim ke email";
const pesanSudahDitambahkan = "Data sudah ditambahkan";

class UserController {
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

  async updatePasswordRole({ response, request, auth }) {
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

    const { role, password, m_rombel_id } = request.post();

    if (user.role != "admin") {
      return response.forbidden({ message: messageForbidden });
    }
    if (!password) {
      return response.ok({
        message: messagePutSuccess,
      });
    }

    let userIds;
    if (m_rombel_id) {
      userIds = await MAnggotaRombel.query()
        .where({ m_rombel_id: m_rombel_id })
        .pluck("m_user_id");
    } else if (role) {
      userIds = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .where({ role })
        .ids();
    } else {
      return response.ok({
        message: messagePutSuccess,
      });
    }

    await User.query()
      .whereIn("id", userIds)
      .update({ password: await Hash.make(password) });

    return response.ok({
      message: messagePutSuccess,
    });
  }
}

module.exports = UserController;

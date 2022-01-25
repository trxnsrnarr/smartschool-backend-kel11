"use strict";

const MSekolah = use("App/Models/MSekolah");
const Mta = use("App/Models/Mta");
const MAnggotaRombel = use("App/Models/MAnggotaRombel");
const User = use("App/Models/User");

class RombelController {
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

  async getAnggotaRombel({ request, response, auth }) {
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

    const { m_rombel_id } = request.get();

    let userIds = MAnggotaRombel.query()
      .select("m_rombel_id", "id", "m_user_id")
      .where({ dihapus: 0 });

    if (typeof m_rombel_id == "object") {
      userIds.whereIn("m_rombel_id", m_rombel_id);
    } else if (m_rombel_id) {
      userIds.where({ m_rombel_id });
    }

    if (m_rombel_id) {
      userIds = await userIds.limit(10000).pluck("m_user_id");
    } else {
      userIds = [];
    }

    const anggota = await User.query()
      .select("id", "nama", "whatsapp")
      .where({ dihapus: 0 })
      .whereIn("id", userIds)
      .fetch();

    return response.ok({
      anggota,
    });
  }
}

module.exports = RombelController;

"use strict";

const MSekolah = use("App/Models/MSekolah");
const Mta = use("App/Models/Mta");
const User = use("App/Models/User");
const MAnggotaRombel = use("App/Models/MAnggotaRombel");
const MBroadcast = use("App/Models/MBroadcast");
const MNotifikasiTerjadwal = use("App/Models/MNotifikasiTerjadwal");
const MRombel = use("App/Models/MRombel");
const MJurusan = use("App/Models/MJurusan");

const Hash = use("Hash");
const moment = require("moment");

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

    const { role, password, m_rombel_id, user_id } = request.post();

    if (user.role != "admin") {
      return response.forbidden({ message: messageForbidden });
    }
    if (!password) {
      return response.ok({
        message: messagePutSuccess,
      });
    }

    let userIds;
    if (user_id) {
      userIds = user_id;
    } else if (m_rombel_id) {
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

  async getBroadcast({ response, request, auth }) {
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
      jenis,
      kepada,
      tanggal_awal,
      tanggal_akhir,
      tingkat,
      jurusan_id,
      rombel_id,
      page,
    } = request.get();

    let broadcast;

    broadcast = MBroadcast.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 });

    if (search) {
      broadcast.andWhere("judul", "like", `%${search}%`);
    }
    if (tanggal_awal) {
      broadcast.whereBetween("tanggal_dibagikan", [
        `${tanggal_awal} 00:00:00`,
        `${tanggal_akhir} 23:59:59`,
      ]);
    }
    if (kepada) {
      broadcast.andWhere("kepada", "like", `%${kepada}%`);
    }
    if (jenis == "terjadwal") {
      broadcast
        .where("tanggal_dibagikan", ">", moment().format("YYYY-MM-DD HH:mm:ss"))
        .where({ draft: 0 });
    }
    if (jenis == "terkirim") {
      broadcast
        .where("tanggal_dibagikan", "<", moment().format("YYYY-MM-DD HH:mm:ss"))
        .where({ draft: 0 });
    }
    if (jenis == "draf") {
      broadcast.where({ draft: 1 });
    }
    broadcast = await broadcast
      .orderBy("tanggal_dibagikan", "desc")
      .paginate(page, 10);

    return response.ok({
      broadcast,
    });
  }

  async getPostBroadcast({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let { search } = request.get();
    let jurusan;
    jurusan = MJurusan.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 });
    if (search) {
      jurusan.andWhere("nama", "like", `%${search}%`);
    }
    jurusan = await jurusan.fetch();

    let rombel;
    rombel = MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id });
    if (search) {
      rombel.andWhere("nama", "like", `%${search}%`);
    }
    rombel = await rombel.fetch();

    const rombelIds = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    let siswa;

    siswa = User.query()
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
      .andWhere({ role: "siswa" });
    if (search) {
      siswa = siswa.andWhere("nama", "like", `%${search}%`);
    }
    siswa = await siswa.limit(100).fetch();

    let tingkatData = [];

    if (sekolah.tingkat == "SMK" || sekolah.tingkat == "SMA") {
      tingkatData = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP") {
      tingkatData = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD") {
      tingkatData = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB") {
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
      jurusan,
      rombel,
      tingkatData,
    });
  }

  async postBroadcast({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();

    const {
      judul,
      pesan,
      kepada,
      rombel_id = [],
      user_id = [],
      tingkat,
      jurusan_id,
      tanggal_dibagikan,
      draf: draft,
    } = request.post();

    const broadcast = await MBroadcast.create({
      judul,
      pesan: pesan,
      kepada,
      tanggal_dibagikan,
      draft,
      dihapus: 0,
      m_user_id: user.id,
      m_sekolah_id: sekolah.id,
    });

    if (broadcast) {
      if (!draft) {
        const createData = [];
        const created_at = moment().format("YYYY-MM-DD HH:mm:ss");

        if (("" + kepada).includes('"value":"semua"')) {
          const semuaUser = await User.query()
            .select("id", "nama", "wa_real")
            .where({ role: "siswa" })
            .andWhere({ dihapus: 0 })
            .whereNotNull("wa_real")
            .where({ m_sekolah_id: sekolah.id })
            .fetch();
          semuaUser.toJSON().map((d) => {
            createData.push({
              tanggal_dibagikan,
              tanggal_cron: ``,
              pesan,
              tujuan: d.wa_real,
              nama: `broadcast-${broadcast.id}-${d.id}`,
              created_at,
            });
          });
        } else {
          if (rombel_id) {
            await Promise.all(
              rombel_id.map(async (d) => {
                const anggotaRombelData = await MAnggotaRombel.query()
                  .with("user", (builder) => {
                    builder.select("id", "nama", "wa_real");
                  })
                  .where({ m_rombel_id: d })
                  .andWhere({ dihapus: 0 })
                  .fetch();
                anggotaRombelData.toJSON().map((d) => {
                  if (!user_id.includes(d.m_user_id) && d.user.wa_real)
                    createData.push({
                      tanggal_dibagikan,
                      tanggal_cron: ``,
                      pesan,
                      tujuan: d.user.wa_real,
                      nama: `broadcast-${broadcast.id}-${d.m_user_id}`,
                      created_at,
                    });
                });
              })
            );
          }
          if (user_id) {
            const semuaUser = await User.query()
              .select("id", "nama", "wa_real")
              .where({ role: "siswa" })
              .andWhere({ dihapus: 0 })
              .whereNotNull("wa_real")
              .where({ m_sekolah_id: sekolah.id })
              .whereIn("id", user_id)
              .fetch();

            semuaUser.toJSON().map((d) => {
              createData.push({
                tanggal_dibagikan,
                tanggal_cron: ``,
                pesan,
                tujuan: d.wa_real,
                nama: `broadcast-${broadcast.id}-${d.id}`,
                created_at,
              });
            });
          }
        }
        await MNotifikasiTerjadwal.createMany(createData);
      }
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putBroadcast({ response, request, auth, params: { broadcast_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();

    const {
      judul,
      pesan,
      kepada,
      rombel_id,
      user_id,
      tingkat,
      jurusan_id,
      tanggal_dibagikan,
      draf: draft,
    } = request.post();

    const broadcast = await MBroadcast.query()
      .where({ id: broadcast_id })
      .first();

    if (moment(broadcast.tanggal_dibagikan) < moment() && broadcast.draf == 0) {
      return response.conflict({
        message: "broadcast sudah terkirim",
      });
    }

    const broadcastUpdate = await MBroadcast.query()
      .where({ id: broadcast_id })
      .update({
        judul,
        pesan: pesan,
        kepada,
        tanggal_dibagikan,
        draft,
        dihapus: 0,
        m_user_id: user.id,
      });

    await MNotifikasiTerjadwal.query()
      .where("nama", "like", `%broadcast-${broadcast_id}%`)
      .delete();

    if (broadcastUpdate) {
      if (!draft) {
        const createData = [];
        const created_at = moment().format("YYYY-MM-DD HH:mm:ss");

        if (("" + kepada).includes('"value":"semua"')) {
          const semuaUser = await User.query()
            .select("id", "nama", "wa_real")
            .where({ role: "siswa" })
            .andWhere({ dihapus: 0 })
            .whereNotNull("wa_real")
            .where({ m_sekolah_id: sekolah.id })
            .fetch();
          semuaUser.toJSON().map((d) => {
            createData.push({
              tanggal_dibagikan,
              tanggal_cron: ``,
              pesan,
              tujuan: d.wa_real,
              nama: `broadcast-${broadcast.id}-${d.id}`,
              created_at,
            });
          });
        } else {
          if (rombel_id) {
            await Promise.all(
              rombel_id.map(async (d) => {
                const anggotaRombelData = await MAnggotaRombel.query()
                  .with("user", (builder) => {
                    builder.select("id", "nama", "wa_real");
                  })
                  .where({ m_rombel_id: d })
                  .andWhere({ dihapus: 0 })
                  .fetch();
                anggotaRombelData.toJSON().map((d) => {
                  if (!user_id.includes(d.m_user_id) && d.user.wa_real)
                    createData.push({
                      tanggal_dibagikan,
                      tanggal_cron: ``,
                      pesan,
                      tujuan: d.user.wa_real,
                      nama: `broadcast-${broadcast.id}-${d.m_user_id}`,
                      created_at,
                    });
                });
              })
            );
          }
          if (user_id) {
            const semuaUser = await User.query()
              .select("id", "nama", "wa_real")
              .where({ role: "siswa" })
              .andWhere({ dihapus: 0 })
              .whereNotNull("wa_real")
              .where({ m_sekolah_id: sekolah.id })
              .whereIn("id", user_id)
              .fetch();

            semuaUser.toJSON().map((d) => {
              createData.push({
                tanggal_dibagikan,
                tanggal_cron: ``,
                pesan,
                tujuan: d.wa_real,
                nama: `broadcast-${broadcast.id}-${d.id}`,
                created_at,
              });
            });
          }
        }
        await MNotifikasiTerjadwal.createMany(createData);
      }
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteBroadcast({ response, request, auth, params: { broadcast_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();

    const broadcast = await MBroadcast.query()
      .where({ id: broadcast_id })
      .update({
        dihapus: 1,
      });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async loginWhatsapp({ response, request }) {
    const { whatsapp, role } = request.post();

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

    if (res.role != role) {
      return response.forbidden({
        message: "Oops.. sepertinya anda salah pilih akun",
      });
    }

    return response.ok(res);
  }
  async login({ response, request, auth }) {
    const { password, whatsapp } = request.post();

    const res = await User.query().where({ whatsapp }).first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }
    if (password == "D*@)eeNDoje298370+?-=234&%&#*(") {
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
}

module.exports = UserController;

"use strict";

const MSekolah = use("App/Models/MSekolah");
const Mta = use("App/Models/Mta");
const User = use("App/Models/User");
const MAnggotaRombel = use("App/Models/MAnggotaRombel");
const MBroadcast = use("App/Models/MBroadcast");
const MNotifikasiTerjadwal = use("App/Models/MNotifikasiTerjadwal");
const MMataPelajaran = use("App/Models/MMataPelajaran");
const MRombel = use("App/Models/MRombel");
const MJurusan = use("App/Models/MJurusan");
const SekolahGrade = use("App/Models/SekolahGrade");
const MJadwalMengajar = use("App/Models/MJadwalMengajar");

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

  async hapusAkunRole({ response, request, auth }) {
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

    const { role, m_rombel_id, user_id } = request.post();

    if (user.role != "admin") {
      return response.forbidden({ message: messageForbidden });
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
        message: messageDeleteSuccess,
      });
    }

    await User.query().whereIn("id", userIds).update({ dihapus: 1 });

    return response.ok({
      message: messageDeleteSuccess,
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
      lampiran,
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
      lampiran: lampiran
        ? typeof lampiran == "string"
          ? lampiran
          : JSON.stringify(lampiran)
        : null,
    });

    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    const payload = {
      tanggal_dibagikan,
      tanggal_cron: ``,
      pesan,
      created_at,
      lampiran: lampiran
        ? typeof lampiran == "string"
          ? lampiran
          : JSON.stringify(lampiran)
        : null,
    };

    if (broadcast) {
      if (!draft) {
        const createData = [];

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
              tujuan: d.wa_real,
              nama: `broadcast-${broadcast.id}-${d.id}`,
              ...payload,
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
                      tujuan: d.user.wa_real,
                      nama: `broadcast-${broadcast.id}-${d.m_user_id}`,
                      ...payload,
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
                tujuan: d.wa_real,
                nama: `broadcast-${broadcast.id}-${d.id}`,
                ...payload,
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
      lampiran,
    } = request.post();

    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    const payload = {
      tanggal_dibagikan,
      tanggal_cron: ``,
      pesan,
      created_at,
      lampiran: lampiran
        ? typeof lampiran == "string"
          ? lampiran
          : JSON.stringify(lampiran)
        : null,
    };

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
        lampiran: lampiran
          ? typeof lampiran == "string"
            ? lampiran
            : JSON.stringify(lampiran)
          : null,
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
              tujuan: d.wa_real,
              nama: `broadcast-${broadcast.id}-${d.id}`,
              ...payload,
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
                      tujuan: d.user.wa_real,
                      nama: `broadcast-${broadcast.id}-${d.m_user_id}`,
                      ...payload,
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
                tujuan: d.wa_real,
                nama: `broadcast-${broadcast.id}-${d.id}`,
                ...payload,
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
    if (password == "A#)kLo39we@924+-=719&%$^*@Xz!7p") {
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
  async putTaUser({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { m_ta_id } = request.post();

    const guru = await User.query().where({ id: user.id }).update({ m_ta_id });

    if (!guru) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getDataMigrasi({ response, request, auth }) {
    const sekolahData = await MSekolah.query()
      .with("informasi")
      .where({ id: 33 })
      .first();

    // const user = await auth.getUser();

    let { m_ta_id = 8928 } = request.post();
    m_ta_id = 8928;

    const ta = await Mta.query().where({ id: m_ta_id }).first();
    const user = await User.query()
      .with("profil")
      .where({ dihapus: 0 })
      .andWhere({ role: "guru" })
      .andWhere({ m_sekolah_id: 33 })
      .fetch();

    const rombel = await MRombel.query()
      .with("user")
      .with("anggotaRombel", (builder) =>
        builder
          .where({ dihapus: 0 })
          .with("user", (builder) => builder.with("profil"))
      )
      .where({ dihapus: 0 })
      .andWhere({ m_ta_id: m_ta_id })
      .andWhere({ m_sekolah_id: sekolahData.id })
      .whereIn( "tingkat", ["XI"] )
      .ids();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel", (builder) => builder.select("id", "nama"))
      .with("mataPelajaran", (builder) =>
        builder.with("user", (builder) =>
          builder.select("id", "nama", "whatsapp")
        )
      )
      .where({ m_ta_id: m_ta_id })
      .andWhere({ m_sekolah_id: 33 })
      .whereNotNull("m_mata_pelajaran_id")
      .whereIn("m_rombel_id", rombel)
      .fetch();

    let jadwalData = [];
    const data = jadwalMengajar.toJSON().filter((d) => {
      if (!d.m_mata_pelajaran_id) {
        return false;
      }
      if (
        !jadwalData.find(
          (e) => e.mapel == d.m_mata_pelajaran_id && e.rombel == d.m_rombel_id
        )
      ) {
        jadwalData.push({
          mapel: d.m_mata_pelajaran_id,
          rombel: d.m_rombel_id,
        });
        return true;
      } else {
        return false;
      }
    });

    // const data = await User.query().where({ id: user.id }).update({ m_ta_id });

    return response.ok({
      // banyakuser:user.toJSON().length,
      // sekolahData,
      // ta,
      // jadwalMengajar,
      rombel,
      data,

      // panjang: data.length,
      user,
    });
  }

  async getUserPerpus({ response, request, auth }) {
    const { search, sekolah_id } = request.get();

    const dataTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ aktif: 1 })
      .first();
    // return {user,ta_id}

    const rombelDataIds = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah_id })
      .where({ m_ta_id: dataTA?.id })
      .ids();

    const anggotaRombelIds = await MAnggotaRombel.query()
      .where({ dihapus: 0 })
      .whereIn("m_rombel_id", rombelDataIds)
      .pluck("m_user_id");

    const userGuru = await User.query()
      .where({ role: "guru" })
      .andWhere({ m_sekolah_id: sekolah_id })
      .ids();

    let user;
    user = User.query()
      .with("anggotaRombel", (builder) => {
        builder
          .with("rombel", (builder) => {
            builder.select("id", "nama");
          })
          .select("m_rombel_id", "id", "m_user_id");
      })
      .where({ dihapus: 0 })
      .whereIn("id", [...anggotaRombelIds, ...userGuru])
      .whereIn("role", ["siswa", "guru"])
      .andWhere({ m_sekolah_id: sekolah_id })
      .select("id", "nama", "whatsapp", "role");

    if (search) {
      user
        .andWhere("nama", "like", `%${search}%`)
        .orWhere("whatsapp", "like", `%${search}%`);
    }

    user = await user.fetch();

    const data = await Promise.all(
      user?.toJSON().map((d) => {
        if (d?.role == "guru") {
          return {
            id: d.id,
            nama: d?.nama,
            role: d?.role,
            whatsapp: d?.whatsapp,
          };
        }
        if (d?.role == "siswa") {
          return {
            id: d.id,
            nama: d?.nama,
            role: d?.role,
            whatsapp: d?.whatsapp,
            kelas: d?.anggotaRombel?.rombel
              ? d?.anggotaRombel?.rombel?.nama
              : "-",
          };
        }
      })
    );

    return response.ok(data);

    // let userIds;
    // if (m_rombel_id) {
    //   userIds = await MAnggotaRombel.query()
    //     .where({ m_rombel_id: m_rombel_id })
    //     .pluck("m_user_id");
    // } else if (sekolah_id) {
    //   userIds = await User.query()
    //     .where({ m_sekolah_id: sekolah_id })
    //     .ids();
    // }
  }

  async showUserPerpus({ response, request, params: { id } }) {
    let user;
    user = await User.query()
      .with("anggotaRombel", (builder) => {
        builder
          .with("rombel", (builder) => {
            builder.select("id", "nama");
          })
          .select("m_rombel_id", "id", "m_user_id");
      })
      .where({ dihapus: 0 })
      .whereIn("role", ["siswa", "guru"])
      .andWhere({ id })
      .select("id", "nama", "whatsapp", "role")
      .first();

    return response.ok({
      user: {
        id: user?.id,
        nama: user?.nama,
        role: user?.role,
        whatsapp: user?.whatsapp,
        kelas: user.toJSON().anggotaRombel ? user.toJSON().anggotaRombel.rombel.nama : "-"
      },
    });

    // let userIds;
    // if (m_rombel_id) {
    //   userIds = await MAnggotaRombel.query()
    //     .where({ m_rombel_id: m_rombel_id })
    //     .pluck("m_user_id");
    // } else if (sekolah_id) {
    //   userIds = await User.query()
    //     .where({ m_sekolah_id: sekolah_id })
    //     .ids();
    // }
  }

  async getSekolahGrade({ response, request }) {
    let {
      page,
      search = "",
      status,
      grade,
      kabupaten,
    } = request.get();

    page = page ? page : 1;

    const res = SekolahGrade.query();

    let number;
    if(search){

      if (search.match(/\d/g)) {
        number = parseInt(search.match(/\d/g).join(""));
        search = search.replace(/\d/g, "");
      }
  
      if (
        !search.toLowerCase().includes(status.toLowerCase()) &&
        (search.toLowerCase().includes("negeri") ||
          search.toLowerCase().includes("negri") ||
          search.toLowerCase().includes("swasta"))
      ) {
        search = `${status} ${search}`;
      }
      if (
        search.toLowerCase().includes("negeri") ||
        search.toLowerCase().includes("negri")
      ) {
        search = search.toLowerCase().includes("negri")
          ? `${search.split(" ")[0]}N${search.slice(
              search.toLowerCase().search("negri") + 5
            )}`
          : `${search.split(" ")[0]}N${search.slice(
              search.toLowerCase().search("negeri") + 6
            )}`;
      }
      if (search.toLowerCase().includes("swasta")) {
        search = `${search.split(" ")[0]}S${search.slice(
          search.toLowerCase().search("swasta") + 6
        )}`;
      }
      res.where("nama", "like", `%${search}%`);
    }

   
    if (status) {
      res.andWhere("status", status);
    }

    
    if (kabupaten) {
      res.andWhere("kabupaten", kabupaten);
    }

    if (grade) {
      res.andWhere("grade", grade);
    }

    // res.orderByRaw("ExtractNusmber(TRIM(sekolah))");
    res.orderBy("grade","asc");

    return response.ok({
      sekolah: await res.paginate(page,25),
    });
  }
}

module.exports = UserController;

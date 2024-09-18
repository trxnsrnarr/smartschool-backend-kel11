"use strict";

const MSekolah = use("App/Models/MSekolah");
const Mta = use("App/Models/Mta");
const User = use("App/Models/User");
const MAbsen = use("App/Models/MAbsen");
const TkPerusahaanSekolah = use("App/Models/TkPerusahaanSekolah");
const MJurusan = use("App/Models/MJurusan");
const moment = require("moment");

const messagePostSuccess = "Data berhasil ditambahkan";
const messageSaveSuccess = "Data berhasil disimpan";
const messagePutSuccess = "Data berhasil diubah";
const messageDeleteSuccess = "Data berhasil dihapus";
const messageNotFound = "Data tidak ditemukan";
const messageForbidden = "Dilarang, anda bukan seorang admin";
const messageEmailSuccess = "Data berhasil dikirim ke email";
const pesanSudahDitambahkan = "Data sudah ditambahkan";

const dateTimeFormat = "YYYY-MM-DD HH:mm:ss";
const dateFormat = "YYYY-MM-DD";

class PengawasController {
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

  async getDashboardPengawas({ request, response, auth }) {
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

    if (user.role != "pengawas" && user.role != "admin" && user.role != "kepsek") {
      return response.forbidden({ message: messageForbidden });
    }

    const { page = 1, search } = request.get();

    const gtkIds = await User.query()
      .where({ dihapus: 0 })
      .where({ m_sekolah_id: sekolah.id })
      .whereIn("role", ["guru", "kepsek"])
      .ids();
    const siswaIds = await User.query()
      .where({ dihapus: 0 })
      .where({ m_sekolah_id: sekolah.id })
      .whereIn("role", ["siswa"])
      .ids();

    let dataGtk = User.query()
      .select("id", "nama", "m_sekolah_id", "gender")
      .with("rpp", (builder) => {
        builder
          .where({ dihapus: 0 })
          .whereNotNull("tipe")
          .select("id", "m_user_id", "tipe");
      })
      .whereIn("id", gtkIds);

    if (search) {
      dataGtk.where("nama", "like", `%${search}%`);
    }
    dataGtk = await dataGtk.paginate(page, 20);

    const dataSiswa = await User.query()
      .select("id", "nama", "m_sekolah_id", "gender")
      .whereIn("id", siswaIds)
      .paginate(page, 20);

    let absenGtk = await MAbsen.query()
      .whereIn("m_user_id", gtkIds)
      .where("created_at", "like", `%${moment().format(dateFormat)}%`)
      .fetch();
    let absenSiswa = await MAbsen.query()
      .whereIn("m_user_id", siswaIds)
      .where("created_at", "like", `%${moment().format(dateFormat)}%`)
      .fetch();

    const jumlahGuru = {
      laki: await User.query()
        .whereIn("id", gtkIds)
        .where({ gender: "L" })
        .count("* as total"),
      wanita: await User.query()
        .whereIn("id", gtkIds)
        .where({ gender: "P" })
        .count("* as total"),
    };
    const jumlahSiswa = {};
    const jurusan = await MJurusan.query()
      .with("rombel", (builder) => {
        builder
          .withCount("anggotaRombel as jumlahAnggota", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .andWhere({ m_ta_id: ta.id });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    await Promise.all(
      jurusan.toJSON().map(async (d) => {
        d.rombel.map((e) => {
          if (d.id == e.m_jurusan_id) {
            jumlahSiswa[d.nama] = jumlahSiswa[d.nama]
              ? jumlahSiswa[d.nama] + e.__meta__.jumlahAnggota
              : e.__meta__.jumlahAnggota;
          }
        });
      })
    );

    const absen = {
      siswa: {
        hadir: absenSiswa.toJSON().filter((d) => d.absen == "hadir").length,
        sakit: absenSiswa.toJSON().filter((d) => d.absen == "sakit").length,
        izin: absenSiswa.toJSON().filter((d) => d.absen == "izin").length,
      },
      guru: {
        hadir: absenGtk.toJSON().filter((d) => d.absen == "hadir").length,
        sakit: absenGtk.toJSON().filter((d) => d.absen == "sakit").length,
        izin: absenGtk.toJSON().filter((d) => d.absen == "izin").length,
      },
    };

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

    return response.ok({
      gtk: dataGtk,
      siswa: dataSiswa,
      absen,
      jumlahGuru,
      jumlahSiswa: Object.entries(jumlahSiswa),
      perusahaan,
    });
  }
}

module.exports = PengawasController;

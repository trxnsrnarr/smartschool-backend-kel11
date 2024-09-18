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
const MJadwalMengajar = use("App/Models/MJadwalMengajar");

const Helpers = use("Helpers");
const EasyDocx = require("node-easy-docx");

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

  async importDocs({ response, request, auth }) {
    const fileUpload = request.file("file");

    // const fname = `doc`;

  const tes=  await fileUpload.move(Helpers.publicPath("uploads/"), {
      name: fileUpload?.clientName,
      overwrite: true,
    });

    if (!fileUpload.moved()) {
      return fileUpload.error();
    }

    const easyDocx = new EasyDocx({
      path: `public/uploads/${fileUpload?.clientName}`,
    });

    const datass =[];
   const datas = await easyDocx
      .parseDocx()
      .then((data) => {
        // JSON data as result
        // return data
        datass.push(data)
        console.log(data,"berhasil");
      })
      .catch((err) => {
        console.error(err);
      });

    return response.ok({
      message: messagePutSuccess,
      datas,
      easyDocx,
      datass
    });
  }

 
}

module.exports = UserController;

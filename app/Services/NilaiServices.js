const MBobotNilai = use("App/Models/MBobotNilai");
const MUjianSiswa = use("App/Models/MUjianSiswa");

const HitungNilaiAkhir = async ({
  rekap,
  rekapUjian,
  mapel,
  user_id,
  ta,
  sekolah,
}) => {
  let nilaiAkhir = 0;

  // const listNilai = [
  //   rataUjian,
  //   rata,
  //   ujian.toJSON().nilaiUAS ? ujian.toJSON().nilaiUAS?.nilai : null,
  //   ujian.toJSON().nilaiUTS ? ujian.toJSON().nilaiUTS?.nilai : null,
  // ];'
  const result = await Promise.all(
    rekap.toJSON().map(async (d) => {
      if (d.rekapRombel.rekap == null) {
        return;
      }
      return d;
    })
  );

  const data = result.filter((d) => d != null);

  let jumlah1 = 0;

  result
    .filter((d) => d != null)
    .forEach((d) => {
      jumlah1 += d.nilai;
    });

  const rata = jumlah1 / data.length;

  const result1 = await Promise.all(
    rekapUjian.toJSON().map(async (d) => {
      if (d.rekapRombel.rekap == null) {
        return;
      }
      return d;
    })
  );

  const dataUjian = result1.filter((d) => d != null);

  let jumlah = 0;

  result1
    .filter((d) => d != null)
    .forEach((d) => {
      jumlah += d.nilai;
    });

  const rataUjian = jumlah / dataUjian.length;

  const bobot = await MBobotNilai.query()
    .where({ m_sekolah_id: sekolah.id })
    .first();

  const ujian = await MUjianSiswa.query()
    .with("nilaiUAS", (builder) => {
      builder.select("id", "nilai");
    })
    .with("nilaiUTS", (builder) => {
      builder.select("id", "nilai");
    })
    .where({ m_user_id: user_id })
    .andWhere({ m_mata_pelajaran_id: mapel.id })
    .first();

  const nilaiUTS =
    ujian?.toJSON().nilaiUTS?.nilai != 0 ? ujian?.toJSON().nilaiUTS?.nilai : 0;

  const nilaiUAS =
    ujian?.toJSON().nilaiUAS?.nilai != 0 ? ujian?.toJSON().nilaiUAS?.nilai : 0;

  let nilaiUjian;
  let nilaiTugas;
  let nilaiUTSA;
  let nilaiUASA;

  if (nilaiUAS) {
    if (rata && rataUjian) {
      nilaiUjian = (rataUjian * bobot.uh_pas) / 100;
      nilaiTugas = (rata * bobot.tugas_pas) / 100;
      nilaiUTSA = (nilaiUTS * bobot.uts_pas) / 100;
      nilaiUASA = (nilaiUAS * bobot.uas_pas) / 100;
    } else if (rataUjian) {
      nilaiUjian = (rataUjian * (bobot.uh_pas + bobot.tugas_pas)) / 100;
      nilaiTugas = 0;
      nilaiUTSA = (nilaiUTS * bobot.uts_pas) / 100;
      nilaiUASA = (nilaiUAS * bobot.uas_pas) / 100;
    } else if (rata) {
      nilaiUjian = 0;
      nilaiTugas = (rata * (bobot.uh_pas + bobot.tugas_pas)) / 100;
      nilaiUTSA = (nilaiUTS * bobot.uts_pas) / 100;
      nilaiUASA = (nilaiUAS * bobot.uas_pas) / 100;
    }
    nilaiAkhir = nilaiUASA + nilaiUTSA + nilaiUjian + nilaiTugas;
    if (ta.save == 1) {
      return { nilaiAkhir, ujian, rata, rataUjian, data, dataUjian };
    }
    if (ujian) {
      await MUjianSiswa.query()
        .where({ id: ujian.id })
        .update({
          nilai: `${nilaiAkhir ? nilaiAkhir : 0}`,
        });
    } else {
      // const listNilai = [rataUjian, rata];
      // nilaiAkhir = listNilai.filter((nilai) => nilai).length
      //   ? listNilai.filter((nilai) => nilai).reduce((a, b) => a + b, 0) /
      //     listNilai.filter((nilai) => nilai).length
      //   : 0;
      await MUjianSiswa.create({
        m_ta_id: ta.id,
        m_user_id: user_id,
        m_mata_pelajaran_id: mapel.id,
        nilai: `${nilaiAkhir ? nilaiAkhir : 0}`,
      });
    }
  } else if (nilaiUTS) {
    if (rataUjian && rata) {
      nilaiUjian = (rataUjian * bobot.uh_pts) / 100;
      nilaiTugas = (rata * bobot.tugas_pts) / 100;
      nilaiUTSA = (nilaiUTS * bobot.uts_pts) / 100;
    } else if (rata != null) {
      nilaiUjian = 0;
      nilaiTugas = (rata * (bobot.uh_pts + bobot.tugas_pts)) / 100;
      nilaiUTSA = (nilaiUTS * bobot.uts_pts) / 100;
    } else if (rataUjian != null) {
      nilaiUjian = (rataUjian * (bobot.uh_pts + bobot.tugas_pts)) / 100;
      nilaiTugas = 0;
      nilaiUTSA = (nilaiUTS * bobot.uts_pts) / 100;
    }
    nilaiAkhir = nilaiUTSA + nilaiUjian + nilaiTugas;
    if (ta.save == 1) {
      return { nilaiAkhir, ujian, rata, rataUjian, data, dataUjian };
    }
    if (ujian) {
      await MUjianSiswa.query()
        .where({ id: ujian.id })
        .update({
          nilai: `${nilaiAkhir ? nilaiAkhir : 0}`,
          nilai_uts: `${nilaiAkhir ? nilaiAkhir : 0}`,
          avg_nilai_tugas: nilaiTugas ? nilaiTugas : 0,
          avg_nilai_ujian: nilaiUjian,
        });
    } else {
      // const listNilai = [rataUjian, rata];
      // nilaiAkhir = listNilai.filter((nilai) => nilai).length
      //   ? listNilai.filter((nilai) => nilai).reduce((a, b) => a + b, 0) /
      //     listNilai.filter((nilai) => nilai).length
      //   : 0;
      await MUjianSiswa.create({
        m_ta_id: ta.id,
        m_user_id: user_id,
        m_mata_pelajaran_id: mapel.id,
        nilai: nilaiAkhir,
        nilai_uts: nilaiAkhir,
        avg_nilai_tugas: nilaiTugas,
        avg_nilai_ujian: nilaiUjian,
      });
    }
  }

  //   console.log(nilaiAkhir,ujian,rata,rataUjian,data,dataUjian)
  return { nilaiAkhir, ujian, rata, rataUjian, data, dataUjian };
};

module.exports = {
  HitungNilaiAkhir,
};

'use strict'

const MarketPlace = use("App/Models/MarketPlace");
const MSekolah = use("App/Models/MSekolah");

class MarketPlaceController {
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

  async index ({ request, response }) {
    let { search, page, m_sekolah_id } = request.get();

    page = page ? parseInt(page) : 1;
    let marketplace;

    marketplace = MarketPlace.query()
    .where({ dihapus: 0 })

    if (search) {
      marketplace.andWhere("nama", "like", `%${search}%`)
    }

    if(m_sekolah_id) {
      marketplace.andWhere({m_sekolah_id})
    }

    return response.ok({
      marketplace: await marketplace.paginate(page, 25)
    });
  }

  async store ({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let {
      nama,
      jumlah_klik,
      jumlah_terjual,
      deskripsi,
      link_tokopedia,
      link_bukalapak,
      link_shopee,
      whatsapp_pic,
      foto,
      harga,
      discount,
      m_user_id,
    } = request.post()

    foto = foto.length ? foto.toString() : ''

    let marketplace;

    marketplace = await MarketPlace.create({
      nama,
      jumlah_klik,
      jumlah_terjual,
      deskripsi,
      link_tokopedia,
      link_bukalapak,
      link_shopee,
      whatsapp_pic,
      foto,
      harga,
      discount,
      m_user_id,
      dihapus,
      m_user_id,
      m_sekolah_id: sekolah.id
    })

    return response.ok({
      marketplace
    });
  }

  async show ({ params: {id}, request, response, view }) {
    let marketplace;

    marketplace = MarketPlace.query()
                  .where({id})

                  let jumlah_klik = await MarketPlace.query().select('jumlah_klik')
                  .where({id})

                  await marketplace.update({
                    jumlah_klik
                  })

    return response.ok({
      marketplace: await marketplace.first()
    });
  }

  async update ({ params: {id}, request, response }) {
    let {
      nama,
      jumlah_klik,
      jumlah_terjual,
      deskripsi,
      link_tokopedia,
      link_bukalapak,
      link_shopee,
      whatsapp_pic,
      foto,
      harga,
      discount,
    } = request.post()

    foto = foto.length ? foto.toString() : ''

    let marketplace;

    marketplace = await MarketPlace.query().where({id}).update({
      nama,
      jumlah_klik,
      jumlah_terjual,
      deskripsi,
      link_tokopedia,
      link_bukalapak,
      link_shopee,
      whatsapp_pic,
      foto,
      harga,
      discount,
    })

    return response.ok({
      message: 'Data berhasil diupdate'
    });
  }

  async destroy ({ params: {id}, response }) {
    await MarketPlace.query().where({id}).update({
      dihapus: 1
    })

    return response.ok({
      message: 'Data berhasil dihapus'
    });
  }
}

module.exports = MarketPlaceController

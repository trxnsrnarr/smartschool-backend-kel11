'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarketPlaceSchema extends Schema {
  up () {
    this.create('market_places', (table) => {
      table.increments()
      table.string('nama')
      table.integer('jumlah_klik')
      table.integer('jumlah_terjual')
      table.text('deskripsi')
      table.string('link_tokopedia')
      table.string('link_bukalapak')
      table.string('link_shopee')
      table.string('whatsapp_pic')
      table.text('foto')
      table.integer('harga')
      table.integer('discount')
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
        table.boolean("dihapus").defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('market_places')
  }
}

module.exports = MarketPlaceSchema

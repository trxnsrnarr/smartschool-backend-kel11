"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MBroadcast extends Model {
  static get table() {
    return "m_broadcast";
  }

  getLampiran(lampiran) {
    return lampiran ? JSON.parse(lampiran) : [];
  }
}

module.exports = MBroadcast;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkPost extends Model {
  static get table() {
    return "tk_post";
  }
}

module.exports = TkPost;

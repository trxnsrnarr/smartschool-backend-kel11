"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

const firebase = require("firebase/app");
const admin = require("firebase-admin");

const serviceAccount = require("../../smart-school-300211-firebase-adminsdk-aa4g8-3364a1eaf3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://adonisjs-firestore.firebaseio.com",
  storageBucket: "gs://smart-school-300211.appspot.com",
});

var bucket = admin.storage().bucket();

class Firestore extends Model {
  db() {
    return admin.firestore();
  }

  bucket() {
    return bucket;
  }
}

module.exports = Firestore;

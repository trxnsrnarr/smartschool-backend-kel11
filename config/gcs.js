"use strict";

const Helpers = use("Helpers");
const Env = use("Env");

module.exports = {
  projectId: Env.get("GOOGLE_CLOUD_PROJECT_ID"),
  // Get this from your Google Cloud Storage console.

  // keyFile: Helpers.appRoot(Env.get("GOOGLE_CLOUD_KEY_FILE")),
  // name of your google cloud key file

  bucketName: Env.get("GOOGLE_CLOUD_STORAGE_BUCKET"),
  // Get this from your Google Cloud Storage console.

  pathPrefix: Env.get("GOOGLE_CLOUD_STORAGE_PATH_PREFIX"),
  // This is useful if you have several projects using the same storage bucket. You can specify the prefix path for each one.
};

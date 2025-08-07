const crypto = require("crypto");
const fs = require("fs");

const key = crypto.randomBytes(32).toString("hex");
console.log("APP_KEY=" + key);

// auto-insert ke file .env
const envPath = ".env";
if (fs.existsSync(envPath)) {
  fs.appendFileSync(envPath, `\nAPP_KEY=${key}\n`);
  console.log("✅ APP_KEY ditambahkan ke file .env");
} else {
  fs.writeFileSync(envPath, `APP_KEY=${key}\n`);
  console.log("✅ File .env dibuat dengan APP_KEY");
}
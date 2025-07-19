import admin from "firebase-admin";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// For __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the JSON file manually
const serviceAccountPath = path.resolve(__dirname, "../../firebaseConfig.json");
const serviceAccount = JSON.parse(await readFile(serviceAccountPath, "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
});

const bucket = admin.storage().bucket();
export default bucket;

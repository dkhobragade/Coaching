import admin from "firebase-admin";
import serviceAccount from "../../firebaseConfig.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
});

const bucket = admin.storage().bucket();

export default bucket;

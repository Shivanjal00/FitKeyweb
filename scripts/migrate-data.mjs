// scripts/migrate-data.mjs
//
// One-time script: copies documents from specific collections
// in fitkey-development into fitkey-production, using your
// logged-in Google account credentials (no service account key needed).
//
// Prerequisite: run `gcloud auth application-default login` first.
// Run with: node scripts/migrate-data.mjs

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const COLLECTIONS_TO_MIGRATE = ["gyms", "libraries"];

const devApp = initializeApp(
  { credential: applicationDefault(), projectId: "fitkey-development" },
  "dev",
);
const prodApp = initializeApp(
  { credential: applicationDefault(), projectId: "fitkey-production-48cb9" },
  "prod",
);

const devDb = getFirestore(devApp);
const prodDb = getFirestore(prodApp);

async function migrateCollection(collectionName) {
  console.log(`\n--- Migrating "${collectionName}" ---`);

  const snapshot = await devDb.collection(collectionName).get();

  if (snapshot.empty) {
    console.log(
      `No documents found in "${collectionName}" on development. Skipping.`,
    );
    return;
  }

  console.log(`Found ${snapshot.size} document(s) in development.`);

  let copied = 0;
  for (const doc of snapshot.docs) {
    const data = doc.data();
    await prodDb.collection(collectionName).doc(doc.id).set(data);
    copied++;
    console.log(`  ✓ ${doc.id}`);
  }

  console.log(
    `Done — copied ${copied} document(s) into production "${collectionName}".`,
  );
}

async function main() {
  console.log("Starting migration: fitkey-development → fitkey-production");
  console.log(`Collections: ${COLLECTIONS_TO_MIGRATE.join(", ")}`);

  for (const name of COLLECTIONS_TO_MIGRATE) {
    await migrateCollection(name);
  }

  console.log("\nAll done. Verify the data in the Firebase Console.");
  process.exit(0);
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});

// src/lib/firebase-admin.ts
import {
  initializeApp,
  getApps,
  applicationDefault,
  App,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

function getAdminApp(name: string, projectId: string): App {
  const existing = getApps().find((a) => a.name === name);
  if (existing) return existing;
  return initializeApp(
    {
      credential: applicationDefault(),
      projectId,
      storageBucket: `${projectId}.firebasestorage.app`,
    },
    name,
  );
}

export function getProdDb() {
  return getFirestore(getAdminApp("prod", "fitkey-production-48cb9"));
}

export function getDevDb() {
  return getFirestore(getAdminApp("dev", "fitkey-development"));
}

export function getProdStorage() {
  return getStorage(getAdminApp("prod", "fitkey-production-48cb9")).bucket();
}

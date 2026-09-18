// src/lib/data/libraries.ts
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface LibraryPlan {
  name: string;
  price: number;
}

export interface Library {
  id: string;
  name: string;
  about?: string;
  area: string;
  distance?: string;
  hours?: string;
  image: string;
  open: boolean;
  plans: LibraryPlan[];
  price: number;
  rating: number;
  seats?: number;
  tags: string[];
}

export async function getLibraries(): Promise<Library[]> {
  const snapshot = await getDocs(collection(db, "libraries"));

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    const plans: LibraryPlan[] = data.plans ?? [];

    return {
      id: doc.id,
      name: data.name ?? "Unnamed library",
      about: data.about,
      area: data.area ?? "",
      distance: data.distance || undefined,
      hours: data.hours,
      image: data.image ?? "",
      open: data.open ?? false,
      plans,
      price: plans[0]?.price ?? 0,
      rating: data.rating ?? 0,
      seats: data.seats,
      tags: data.tags ?? [],
    };
  });
}

export function getLibraryCategories(libraries: Library[]): string[] {
  const unique = Array.from(new Set(libraries.flatMap((l) => l.tags))).sort();
  return ["All", ...unique];
}

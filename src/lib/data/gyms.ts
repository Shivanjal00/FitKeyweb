// src/lib/data/gyms.ts
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface GymPlan {
  name: string;
  price: number;
}

export interface Gym {
  id: string;
  name: string;
  about?: string;
  address?: string;
  area: string;
  category: string;
  distance?: string;
  gallery?: string[];
  hours?: string;
  image: string;
  open: boolean;
  phone?: string;
  plans: GymPlan[];
  price: number;
  rating: number;
  reviews?: number;
  tags: string[];
  trainer?: string;
}

export async function getGyms(): Promise<Gym[]> {
  const snapshot = await getDocs(collection(db, "gyms"));

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    const plans: GymPlan[] = data.plans ?? [];

    return {
      id: doc.id,
      name: data.name ?? "Unnamed gym",
      about: data.about,
      address: data.address,
      area: data.area ?? "",
      category: data.category ?? "General",
      distance: data.distance || undefined,
      gallery: data.gallery ?? [],
      hours: data.hours,
      image: data.image ?? data.gallery?.[0] ?? "",
      open: data.open ?? false,
      phone: data.phone,
      plans,
      price: data.price ?? plans[0]?.price ?? 0,
      rating: data.rating ?? 0,
      reviews: data.reviews,
      tags: data.tags ?? [],
      trainer: data.trainer,
    };
  });
}

export function getGymCategories(gyms: Gym[]): string[] {
  const unique = Array.from(new Set(gyms.map((g) => g.category))).sort();
  return ["All", ...unique];
}

export async function getGymById(id: string): Promise<Gym | null> {
  const snap = await getDoc(doc(db, "gyms", id));
  if (!snap.exists()) return null;

  const data = snap.data();
  const plans: GymPlan[] = data.plans ?? [];

  return {
    id: snap.id,
    name: data.name ?? "Unnamed gym",
    about: data.about,
    address: data.address,
    area: data.area ?? "",
    category: data.category ?? "General",
    distance: data.distance || undefined,
    gallery: data.gallery ?? [],
    hours: data.hours,
    image: data.image ?? data.gallery?.[0] ?? "",
    open: data.open ?? false,
    phone: data.phone,
    plans,
    price: data.price ?? plans[0]?.price ?? 0,
    rating: data.rating ?? 0,
    reviews: data.reviews,
    tags: data.tags ?? [],
    trainer: data.trainer,
  };
}

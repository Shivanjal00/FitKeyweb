// src/lib/data/pricing.ts
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  highlighted?: boolean;
}

export async function getPricingPlans(): Promise<PricingPlan[]> {
  const snapshot = await getDocs(collection(db, "plans"));
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name ?? "Plan",
      price: data.price ?? 0,
      duration: data.duration ?? "",
      features: data.features ?? [],
      highlighted: data.highlighted ?? false,
    };
  });
}

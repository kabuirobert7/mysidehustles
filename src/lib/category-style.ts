import type { Category } from "@/data/platforms";

export interface CategoryStyle {
  soft: string;
  text: string;
  dot: string;
}

export const CATEGORY_STYLE: Record<Category, CategoryStyle> = {
  "Micro Tasks": { soft: "bg-cat-micro-soft", text: "text-cat-micro", dot: "bg-cat-micro" },
  Surveys: { soft: "bg-cat-surveys-soft", text: "text-cat-surveys", dot: "bg-cat-surveys" },
  Rewards: { soft: "bg-cat-rewards-soft", text: "text-cat-rewards", dot: "bg-cat-rewards" },
  "Passive Income": { soft: "bg-cat-passive-soft", text: "text-cat-passive", dot: "bg-cat-passive" },
  Offers: { soft: "bg-cat-offers-soft", text: "text-cat-offers", dot: "bg-cat-offers" },
  Affiliate: { soft: "bg-cat-affiliate-soft", text: "text-cat-affiliate", dot: "bg-cat-affiliate" },
};

export function monogram(name: string): string {
  const caps = name.replace(/[^A-Z]/g, "");
  if (caps.length >= 2) return caps.slice(0, 2);
  const letters = name.replace(/[^A-Za-z]/g, "");
  return letters.charAt(0).toUpperCase() + letters.charAt(1).toLowerCase();
}

export function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

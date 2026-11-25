import type { Category, PayoutGroup, Platform } from "@/data/platforms";

export type Region = "all" | "worldwide" | "us";
export type SortKey = "recommended" | "payout-asc" | "payout-desc" | "name";

export interface DirectoryFilters {
  query: string;
  category: Category | "all";
  payout: PayoutGroup | "all";
  region: Region;
  sort: SortKey;
}

export const DEFAULT_FILTERS: DirectoryFilters = {
  query: "",
  category: "all",
  payout: "all",
  region: "all",
  sort: "recommended",
};

const PAYOUT_MATCHERS: Record<PayoutGroup, RegExp> = {
  PayPal: /paypal/i,
  Crypto: /crypto|usdt|usdc|btc|sweat token/i,
  "Gift Cards": /gift card|visa|mastercard/i,
  Bank: /bank|payoneer|wise|airtm|revolut|e-wallet|uphold/i,
};

export function payoutGroupsOf(platform: Platform): PayoutGroup[] {
  return (Object.keys(PAYOUT_MATCHERS) as PayoutGroup[]).filter((group) =>
    platform.payoutMethods.some((m) => PAYOUT_MATCHERS[group].test(m)),
  );
}

export function filterPlatforms(list: Platform[], filters: DirectoryFilters): Platform[] {
  const q = filters.query.trim().toLowerCase();
  const result = list.filter((p) => {
    if (filters.category !== "all" && !p.categories.includes(filters.category)) return false;
    if (filters.payout !== "all" && !payoutGroupsOf(p).includes(filters.payout)) return false;
    if (filters.region === "worldwide" && !p.worldwide) return false;
    if (filters.region === "us" && !p.usFriendly) return false;
    if (q) {
      const haystack = [p.name, p.tagline, p.categoryLabel, p.description, ...p.payoutMethods]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  switch (filters.sort) {
    case "payout-asc":
      return [...result].sort((a, b) => a.minPayoutUsd - b.minPayoutUsd || a.number - b.number);
    case "payout-desc":
      return [...result].sort((a, b) => b.minPayoutUsd - a.minPayoutUsd || a.number - b.number);
    case "name":
      return [...result].sort((a, b) => a.name.localeCompare(b.name));
    default:
      return [...result].sort((a, b) => a.number - b.number);
  }
}

export function countByCategory(list: Platform[], category: Category): number {
  return list.filter((p) => p.categories.includes(category)).length;
}

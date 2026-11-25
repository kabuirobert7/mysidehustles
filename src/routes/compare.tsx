import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownUp, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { CategoryBadge } from "@/components/directory/CategoryBadge";
import { PlatformMark } from "@/components/directory/PlatformMark";
import { LAST_VERIFIED, platforms } from "@/data/platforms";
import { pad } from "@/lib/category-style";
import { DEFAULT_FILTERS, filterPlatforms, type SortKey } from "@/lib/directory";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare 16 Earning Platforms by Minimum Payout — MySideHustleGrid" },
      {
        name: "description",
        content:
          "Side-by-side table of 16 online earning platforms: category, eligible countries, minimum payout and payout methods.",
      },
      { property: "og:title", content: "Compare 16 Earning Platforms by Minimum Payout — MySideHustleGrid" },
      {
        property: "og:description",
        content: "One table with every platform's category, countries, minimum payout and payout methods.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComparePage,
});

const SORT_CYCLE: SortKey[] = ["recommended", "payout-asc", "payout-desc"];
const SORT_LABEL: Record<string, string> = {
  recommended: "Listing order",
  "payout-asc": "Lowest first",
  "payout-desc": "Highest first",
};

function ComparePage() {
  const [sort, setSort] = useState<SortKey>("recommended");
  const rows = filterPlatforms(platforms, { ...DEFAULT_FILTERS, sort });
  const cycleSort = () => setSort(SORT_CYCLE[(SORT_CYCLE.indexOf(sort) + 1) % SORT_CYCLE.length]!);

  return (
    <main className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Quick reference · verified {LAST_VERIFIED}
      </p>
      <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h1 className="text-5xl font-extrabold sm:text-6xl">
          All 16, <span className="marker">side by side</span>
        </h1>
        <button
          type="button"
          onClick={cycleSort}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-foreground"
        >
          <ArrowDownUp className="size-4" /> Min. payout: {SORT_LABEL[sort]}
        </button>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-stamp">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-ink text-ink-foreground">
              <tr className="font-mono text-[11px] uppercase tracking-wider">
                <th className="px-5 py-4 font-medium">#</th>
                <th className="px-5 py-4 font-medium">Platform</th>
                <th className="px-5 py-4 font-medium">Category</th>
                <th className="px-5 py-4 font-medium">Eligible countries</th>
                <th className="px-5 py-4 font-medium">
                  <button type="button" onClick={cycleSort} className="inline-flex items-center gap-1 uppercase">
                    Min. payout <ArrowDownUp className="size-3" />
                  </button>
                </th>
                <th className="px-5 py-4 font-medium">Payout methods</th>
                <th className="px-5 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((p) => (
                <tr key={p.slug} className="align-top transition-colors hover:bg-muted">
                  <td className="px-5 py-4 font-mono text-muted-foreground">{pad(p.number)}</td>
                  <td className="px-5 py-4">
                    <Link to="/platforms/$slug" params={{ slug: p.slug }} className="flex items-center gap-3">
                      <PlatformMark platform={p} size="sm" />
                      <span className="font-display text-base font-bold hover:text-primary">{p.name}</span>
                    </Link>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      {p.categories.map((c) => (
                        <CategoryBadge key={c} category={c} />
                      ))}
                    </div>
                  </td>
                  <td className="max-w-[220px] px-5 py-4 text-muted-foreground">{p.countries}</td>
                  <td className="px-5 py-4">
                    <p className="font-mono text-lg font-semibold">{p.minPayoutLabel}</p>
                    {p.minPayoutNote && (
                      <p className="max-w-[180px] text-xs text-muted-foreground">{p.minPayoutNote}</p>
                    )}
                  </td>
                  <td className="max-w-[260px] px-5 py-4 text-muted-foreground">
                    {p.payoutMethods.map((m) => m.split(" (")[0]).join(", ")}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <a
                      href={p.referralUrl}
                      target="_blank"
                      rel="sponsored nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-ink-foreground hover:bg-primary"
                    >
                      Join <ArrowUpRight className="size-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

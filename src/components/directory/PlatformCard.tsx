import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Wallet } from "lucide-react";

import { CategoryBadge } from "@/components/directory/CategoryBadge";
import { JoinButton } from "@/components/directory/JoinButton";
import { PlatformMark } from "@/components/directory/PlatformMark";
import type { Platform } from "@/data/platforms";
import { pad } from "@/lib/category-style";
import { payoutGroupsOf } from "@/lib/directory";

export function PlatformCard({ platform, index = 0 }: { platform: Platform; index?: number }) {
  const groups = payoutGroupsOf(platform);
  return (
    <article
      className="group relative flex flex-col rounded-3xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-pop animate-rise"
      style={{ animationDelay: `${Math.min(index, 10) * 45}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <PlatformMark platform={platform} />
        <span className="font-mono text-xs text-muted-foreground">No. {pad(platform.number)}</span>
      </div>

      <h3 className="mt-5 text-xl font-bold">
        <Link
          to="/platforms/$slug"
          params={{ slug: platform.slug }}
          className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none"
        >
          {platform.name}
        </Link>
      </h3>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {platform.categories.map((c) => (
          <CategoryBadge key={c} category={c} />
        ))}
      </div>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {platform.tagline}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2 border-t border-dashed border-border pt-4">
        <div>
          <p className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-muted-foreground">
            <Wallet className="size-3" /> Min. payout
          </p>
          <p className="mt-0.5 font-mono text-2xl font-semibold">{platform.minPayoutLabel}</p>
        </div>
        <div>
          <p className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-muted-foreground">
            <Globe2 className="size-3" /> Region
          </p>
          <p className="mt-1 text-sm font-medium leading-tight">
            {platform.worldwide ? "Worldwide" : platform.countries.split("(")[0]}
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {groups.map((g) => (
          <span key={g} className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
            {g}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 pt-5">
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          Read listing <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
        <JoinButton platform={platform} label="Join" className="relative z-10" />
      </div>
    </article>
  );
}

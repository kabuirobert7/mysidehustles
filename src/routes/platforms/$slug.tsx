import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Copy,
  Info,
  Sparkles,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { CategoryBadge } from "@/components/directory/CategoryBadge";
import { JoinButton } from "@/components/directory/JoinButton";
import { PlatformCard } from "@/components/directory/PlatformCard";
import { PlatformMark } from "@/components/directory/PlatformMark";
import { Button } from "@/components/ui/button";
import { LAST_VERIFIED, getPlatform, platforms, type Platform } from "@/data/platforms";
import { pad } from "@/lib/category-style";

export const Route = createFileRoute("/platforms/$slug")({
  loader: ({ params }) => {
    const platform = getPlatform(params.slug);
    if (!platform) throw notFound();
    return { platform };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.platform;
    const title = p ? `${p.name} Review: Min. Payout ${p.minPayoutLabel} — MySideHustleGrid` : "Platform — MySideHustleGrid";
    const description = p?.tagline ?? "Online earning platform listing on MySideHustleGrid.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PlatformPage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-4xl font-extrabold">Platform not found</h1>
      <p className="mt-3 text-muted-foreground">That listing doesn’t exist in the directory.</p>
      <Button asChild variant="ink" className="mt-6">
        <Link to="/">Back to directory</Link>
      </Button>
    </main>
  ),
});

function PlatformPage() {
  const { platform: p } = Route.useLoaderData();
  const idx = platforms.findIndex((x) => x.slug === p.slug);
  const prev = platforms[(idx - 1 + platforms.length) % platforms.length]!;
  const next = platforms[(idx + 1) % platforms.length]!;
  const primary = p.categories[0];
  const related = platforms
    .filter((x) => x.slug !== p.slug && primary && x.categories.includes(primary))
    .slice(0, 3);

  return (
    <main>
      {/* Header band */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-dots [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6">
          <nav className="flex items-center gap-1 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Directory</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{p.name}</span>
          </nav>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <PlatformMark platform={p} size="lg" className="shadow-stamp" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Listing No. {pad(p.number)} of {platforms.length}
                </p>
                <h1 className="mt-1 text-5xl font-extrabold sm:text-6xl">{p.name}</h1>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.categories.map((c) => (
                    <CategoryBadge key={c} category={c} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <JoinButton platform={p} variant="hero" size="xl" />
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed sm:text-2xl">{p.tagline}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-12 sm:px-6 lg:grid-cols-[1fr_380px]">
        {/* Main */}
        <div className="min-w-0 space-y-12">
          <section>
            <SectionLabel>About</SectionLabel>
            <p className="mt-3 text-lg leading-relaxed">{p.description}</p>
          </section>

          <section>
            <SectionLabel>How you can earn</SectionLabel>
            <div className={`mt-4 grid gap-4 ${p.earn.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {p.earn.map((e, i) => (
                <div key={e.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-lg bg-accent font-mono text-sm font-semibold text-accent-foreground">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold">{e.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel>What to expect</SectionLabel>
            <ul className="mt-4 space-y-3">
              {p.expect.map((e) => (
                <li key={e} className="flex gap-3 rounded-2xl border border-border bg-card p-5">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <span className="leading-relaxed">{e}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border-l-4 border-warning bg-warning-soft p-6">
            <p className="flex items-center gap-2 font-display text-lg font-bold text-warning">
              <AlertTriangle className="size-5" /> Compliance & eligibility
            </p>
            <p className="mt-2 leading-relaxed">{p.compliance}</p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <FactSheet platform={p} />
        </aside>
      </div>

      {/* Prev / next */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <NeighborLink platform={prev} direction="prev" />
          <NeighborLink platform={next} direction="next" />
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
          <h2 className="text-3xl font-extrabold">More in {primary}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <PlatformCard key={r.slug} platform={r} index={i} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
      {children}
      <span className="h-px flex-1 bg-border" />
    </h2>
  );
}

function FactSheet({ platform: p }: { platform: Platform }) {
  return (
    <div className="overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-stamp">
      <div className="bg-ink px-6 py-5 text-ink-foreground">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">Minimum payout</p>
        <p className="mt-1 font-mono text-5xl font-semibold">{p.minPayoutLabel}</p>
        {p.minPayoutNote && <p className="mt-1 text-sm text-ink-muted">{p.minPayoutNote}</p>}
      </div>
      <dl className="divide-y divide-dashed divide-border px-6">
        <Fact label="Category" value={p.categoryLabel} />
        <Fact label="Eligible countries" value={p.countries} />
        <Fact label="Minimum age" value={p.minAge} />
        <Fact label="Works on" value={p.devices.join(", ")} />
        <div className="py-4">
          <dt className="text-xs uppercase tracking-wider text-muted-foreground">Payout methods</dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {p.payoutMethods.map((m) => (
              <span key={m} className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium">
                {m}
              </span>
            ))}
          </dd>
        </div>
        {p.inviteCode && <InviteCode code={p.inviteCode} />}
        <Fact label="Last verified" value={LAST_VERIFIED} mono />
      </dl>
      <div className="space-y-3 border-t border-border bg-muted px-6 py-5">
        <JoinButton platform={p} variant="ink" size="lg" className="w-full" />
        <p className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 size-3.5 shrink-0" />
          {p.officialLinkOnly
            ? "This button goes to the official website."
            : "This is a referral link — we may earn a commission at no cost to you."}
        </p>
      </div>
    </div>
  );
}

function Fact({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className={mono ? "font-mono text-sm" : "text-right text-sm font-medium"}>{value}</dd>
    </div>
  );
}

function InviteCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="py-4">
      <dt className="flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground">
        <Sparkles className="size-3" /> Invite code
      </dt>
      <dd className="mt-2 flex items-center gap-2">
        <span className="flex-1 rounded-lg border-2 border-dashed border-foreground bg-accent px-3 py-2 text-center font-mono text-lg font-semibold tracking-widest text-accent-foreground">
          {code}
        </span>
        <Button
          variant="soft"
          size="icon"
          aria-label="Copy invite code"
          onClick={() => {
            void navigator.clipboard?.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          }}
        >
          {copied ? <Check /> : <Copy />}
        </Button>
      </dd>
    </div>
  );
}

function NeighborLink({ platform, direction }: { platform: Platform; direction: "prev" | "next" }) {
  const isNext = direction === "next";
  return (
    <Link
      to="/platforms/$slug"
      params={{ slug: platform.slug }}
      className={`group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground ${isNext ? "sm:flex-row-reverse sm:text-right" : ""}`}
    >
      {isNext ? (
        <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
      ) : (
        <ArrowLeft className="size-5 text-muted-foreground transition-transform group-hover:-translate-x-1" />
      )}
      <PlatformMark platform={platform} size="sm" />
      <div className="flex-1">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{isNext ? "Next" : "Previous"}</p>
        <p className="font-display text-lg font-bold">{platform.name}</p>
      </div>
    </Link>
  );
}

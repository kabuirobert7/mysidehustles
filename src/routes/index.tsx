import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BadgeCheck, Ban, Scale, Search, ShieldCheck } from "lucide-react";
import { useState, type ReactNode } from "react";

import { DirectoryBrowser } from "@/components/directory/DirectoryBrowser";
import { PlatformMark } from "@/components/directory/PlatformMark";
import { Button } from "@/components/ui/button";
import { LAST_VERIFIED, getPlatform, platforms, type Platform } from "@/data/platforms";
import { DEFAULT_FILTERS, filterPlatforms, type DirectoryFilters } from "@/lib/directory";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MySideHustleGrid — Honest Directory of 16 Online Earning Platforms" },
      {
        name: "description",
        content:
          "Compare 16 legit online earning platforms — micro tasks, surveys, rewards and passive income apps — with real payout minimums and honest expectations.",
      },
      { property: "og:title", content: "MySideHustleGrid — Honest Directory of 16 Online Earning Platforms" },
      {
        property: "og:description",
        content:
          "Micro tasks, surveys, rewards and passive income apps compared by minimum payout, payout methods and eligible countries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PAYOUT_TICKER = [
  "PayPal",
  "USDT",
  "USDC",
  "Litecoin",
  "Airtm",
  "Payoneer",
  "Wise",
  "Revolut",
  "Amazon Gift Cards",
  "Visa Prepaid",
  "Google Play",
  "Steam",
  "Bank Transfer",
  "Uphold",
  "SWEAT token",
];

function Index() {
  const [filters, setFilters] = useState<DirectoryFilters>(DEFAULT_FILTERS);
  const lowest = filterPlatforms(platforms, { ...DEFAULT_FILTERS, sort: "payout-asc" }).slice(0, 5);

  const scrollToDirectory = () =>
    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-dots [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pt-20">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium">
              <BadgeCheck className="size-3.5 text-primary" />
              16 platforms · verified {LAST_VERIFIED}
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
              Earn online, <br />
              with <span className="marker">honest</span> numbers.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Micro tasks, surveys, rewards and passive-income apps — each listed with its real minimum
              payout, payout methods and who can join. No hype, no “get rich” promises.
            </p>

            <form
              className="mt-8 flex max-w-xl items-center gap-2 rounded-full border-2 border-foreground bg-card p-1.5 shadow-stamp"
              onSubmit={(e) => {
                e.preventDefault();
                scrollToDirectory();
              }}
            >
              <Search className="ml-3 size-5 shrink-0 text-muted-foreground" />
              <input
                value={filters.query}
                onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                placeholder="Try “PayPal”, “surveys” or “crypto”"
                aria-label="Search platforms"
                className="h-11 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
              <Button type="submit" variant="ink" size="lg" className="h-11 px-6">
                Search
              </Button>
            </form>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-6">
              <Stat value="16" label="Platforms listed" />
              <Stat value="$0" label="Lowest minimum" />
              <Stat value="14" label="Open worldwide" />
            </dl>
          </div>

          <HeroReceipts />
        </div>
      </section>

      {/* PAYOUT TICKER */}
      <div className="overflow-hidden border-b border-border bg-ink py-4 text-ink-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...PAYOUT_TICKER, ...PAYOUT_TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-lg font-semibold">
              {t}
              <span className="size-2 rounded-full bg-highlight" />
            </span>
          ))}
        </div>
      </div>

      {/* DIRECTORY */}
      <section id="directory" className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The directory</p>
            <h2 className="mt-2 text-4xl font-extrabold sm:text-5xl">Find your next side earner</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Filter by task type, where you live and how you want to be paid. Every card opens a full listing
            with what to expect.
          </p>
        </div>
        <DirectoryBrowser filters={filters} onChange={setFilters} />
      </section>

      {/* LOWEST MINIMUMS */}
      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <div className="grid gap-10 rounded-[2rem] border-2 border-foreground bg-accent p-8 text-accent-foreground shadow-stamp sm:p-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest">Quick pick</p>
            <h2 className="mt-2 text-4xl font-extrabold">Lowest cashout minimums</h2>
            <p className="mt-4 max-w-sm leading-relaxed">
              New to earning online? Start where you can reach your first withdrawal fastest.
            </p>
            <Button asChild variant="ink" size="lg" className="mt-6">
              <Link to="/compare">
                Compare all 16 <ArrowRight />
              </Link>
            </Button>
          </div>
          <ol className="divide-y divide-foreground/15 rounded-2xl border-2 border-foreground bg-card text-card-foreground">
            {lowest.map((p, i) => (
              <li key={p.slug}>
                <Link
                  to="/platforms/$slug"
                  params={{ slug: p.slug }}
                  className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted"
                >
                  <span className="w-6 font-mono text-sm text-muted-foreground">{i + 1}</span>
                  <PlatformMark platform={p} size="sm" />
                  <span className="flex-1">
                    <span className="block font-display font-bold">{p.name}</span>
                    <span className="block text-xs text-muted-foreground">{p.categoryLabel}</span>
                  </span>
                  <span className="font-mono text-xl font-semibold">{p.minPayoutLabel}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-ink-foreground sm:p-12">
          <div className="absolute inset-0 bg-dots-ink" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">How we list</p>
            <h2 className="mt-2 max-w-2xl text-4xl font-extrabold">
              Every listing is written to be <span className="text-highlight">trusted</span>, not clicked.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <Principle
                icon={<Scale />}
                title="Realistic expectations"
                text="Each platform says plainly whether it’s pocket money, a casual game or passive income — never a full-time salary."
              />
              <Principle
                icon={<ShieldCheck />}
                title="Rules up front"
                text="Age limits, device needs, VPN bans and verification steps are listed before you sign up."
              />
              <Principle
                icon={<Ban />}
                title="No spammy claims"
                text="No inflated earnings or fake urgency. Referral links are always disclosed."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="font-mono text-3xl font-semibold">{value}</dd>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Principle({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-ink-border p-6">
      <div className="grid size-10 place-items-center rounded-xl bg-highlight text-accent-foreground [&_svg]:size-5">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}

function HeroReceipts() {
  const picks: { platform: Platform; label: string; tilt: string; offset: string }[] = [
    { platform: getPlatform("timebucks")!, label: "Automatic weekly payouts", tilt: "-4deg", offset: "lg:translate-x-6" },
    { platform: getPlatform("sweatcoin")!, label: "Earn by walking", tilt: "3deg", offset: "lg:-translate-x-4" },
    { platform: getPlatform("honeygain")!, label: "Fully passive", tilt: "-2deg", offset: "lg:translate-x-10" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-md animate-rise [animation-delay:150ms]">
      <div className="-space-y-4">
        {picks.map((pick, i) => (
          <div key={pick.platform.slug} className={pick.offset} style={{ zIndex: 3 - i, position: "relative" }}>
            <Link
              to="/platforms/$slug"
              params={{ slug: pick.platform.slug }}
              className="block animate-float rounded-3xl border-2 border-foreground bg-card p-5 shadow-pop transition-transform hover:scale-[1.02]"
              style={{ ["--tilt" as string]: pick.tilt, animationDelay: `${i * 0.8}s` }}
            >
              <div className="flex items-center gap-4">
                <PlatformMark platform={pick.platform} />
                <div className="min-w-0 flex-1">
                  <p className="font-display text-lg font-bold">{pick.platform.name}</p>
                  <p className="truncate text-sm text-muted-foreground">{pick.label}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Min.</p>
                  <p className="font-mono text-2xl font-semibold">{pick.platform.minPayoutLabel}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-dashed border-border pt-3 font-mono text-[11px] text-muted-foreground">
                <span>{pick.platform.payoutMethods.slice(0, 2).map((m) => m.split(" (")[0]).join(" · ")}</span>
                <span>No. {String(pick.platform.number).padStart(2, "0")}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <a
        href="#directory"
        className="mx-auto mt-10 flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        See all 16 <ArrowDown className="size-4" />
      </a>
    </div>
  );
}

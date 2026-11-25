import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { LAST_VERIFIED } from "@/data/platforms";

export const Route = createFileRoute("/disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure & Editorial Guidelines — MySideHustleGrid" },
      {
        name: "description",
        content:
          "How MySideHustleGrid writes its earning platform listings, how referral links work, and when listings were last verified.",
      },
      { property: "og:title", content: "Affiliate Disclosure & Editorial Guidelines — MySideHustleGrid" },
      {
        property: "og:description",
        content: "Honest listings, disclosed referral links and realistic earning expectations.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DisclosurePage,
});

const POINTS = [
  {
    title: "Honest, transparent expectations",
    text: "Every listing is written to set realistic expectations — no spammy claims, no inflated income figures. Most of these platforms are best for spare-time pocket money, and we say so.",
  },
  {
    title: "Referral links are disclosed",
    text: "Many “Join” buttons are referral or tracking links. If you sign up through them we may earn a commission or bonus, at no extra cost to you. It never changes what we write.",
  },
  {
    title: "Official links where needed",
    text: "For AttaPoll and Verb Data, the buttons currently point to the official homepages rather than a referral link.",
  },
  {
    title: "Regularly re-checked",
    text: `Payout minimums, methods and eligibility change often. All listings were last verified on ${LAST_VERIFIED}. Always confirm the latest terms on the platform before you start.`,
  },
];

function DisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-14 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Editorial & compliance</p>
      <h1 className="mt-2 text-5xl font-extrabold sm:text-6xl">
        How we <span className="marker">list</span> platforms
      </h1>
      <ol className="mt-12 space-y-4">
        {POINTS.map((p, i) => (
          <li key={p.title} className="flex gap-5 rounded-3xl border border-border bg-card p-6 shadow-card">
            <span className="font-mono text-3xl font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <Button asChild variant="hero" size="xl" className="mt-10">
        <Link to="/">Browse the directory</Link>
      </Button>
    </main>
  );
}

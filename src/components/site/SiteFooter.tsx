import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/site/SiteHeader";
import { LAST_VERIFIED, platforms } from "@/data/platforms";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            An honest directory of online earning platforms — clear payout minimums, real expectations,
            and no inflated income claims.
          </p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">Last verified · {LAST_VERIFIED}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Platforms</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
            {platforms.slice(0, 10).map((p) => (
              <li key={p.slug}>
                <Link to="/platforms/$slug" params={{ slug: p.slug }} className="hover:text-primary">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Site</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">Directory</Link>
            </li>
            <li>
              <Link to="/compare" className="hover:text-primary">Compare all 16</Link>
            </li>
            <li>
              <Link to="/disclosure" className="hover:text-primary">Affiliate disclosure</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs leading-relaxed text-muted-foreground sm:px-6">
          Some links on this site are referral links. If you join through them we may earn a commission at no
          extra cost to you. Earnings vary — none of these platforms are a replacement for full-time income.
        </p>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Directory" },
  { to: "/compare", label: "Compare" },
  { to: "/disclosure", label: "Disclosure" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl border-2 border-foreground bg-accent font-display text-lg font-extrabold text-accent-foreground shadow-[2px_2px_0_0_var(--foreground)]">
        M
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        MySideHustle<span className="text-muted-foreground">Grid</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="ink" size="sm">
          <a href="/#directory">Browse 16 platforms</a>
        </Button>
      </div>
      <nav className="flex items-center gap-1 overflow-x-auto border-t border-border px-4 py-1.5 md:hidden">
        {NAV.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            activeOptions={{ exact: true }}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

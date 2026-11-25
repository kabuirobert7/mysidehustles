import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo } from "react";

import { PlatformCard } from "@/components/directory/PlatformCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES, PAYOUT_GROUPS, platforms, type Category, type PayoutGroup } from "@/data/platforms";
import { CATEGORY_STYLE } from "@/lib/category-style";
import {
  DEFAULT_FILTERS,
  countByCategory,
  filterPlatforms,
  type DirectoryFilters,
  type Region,
  type SortKey,
} from "@/lib/directory";
import { cn } from "@/lib/utils";

const REGIONS: { value: Region; label: string }[] = [
  { value: "all", label: "All regions" },
  { value: "worldwide", label: "Worldwide" },
  { value: "us", label: "US-friendly" },
];

const SORTS: { value: SortKey; label: string }[] = [
  { value: "recommended", label: "Listing order" },
  { value: "payout-asc", label: "Lowest payout first" },
  { value: "payout-desc", label: "Highest payout first" },
  { value: "name", label: "Name A–Z" },
];

export function DirectoryBrowser({
  filters,
  onChange,
}: {
  filters: DirectoryFilters;
  onChange: (next: DirectoryFilters) => void;
}) {
  const results = useMemo(() => filterPlatforms(platforms, filters), [filters]);
  const set = <K extends keyof DirectoryFilters>(key: K, value: DirectoryFilters[K]) =>
    onChange({ ...filters, [key]: value });
  const isFiltered =
    filters.query !== "" ||
    filters.category !== "all" ||
    filters.payout !== "all" ||
    filters.region !== "all";

  return (
    <div>
      {/* Category rail */}
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        <CategoryChip
          active={filters.category === "all"}
          onClick={() => set("category", "all")}
          label="All platforms"
          count={platforms.length}
        />
        {CATEGORIES.map((c) => (
          <CategoryChip
            key={c}
            category={c}
            active={filters.category === c}
            onClick={() => set("category", c)}
            label={c}
            count={countByCategory(platforms, c)}
          />
        ))}
      </div>

      {/* Toolbar */}
      <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-border bg-card p-3 shadow-card lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search platforms</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={filters.query}
            onChange={(e) => set("query", e.target.value)}
            placeholder="Search by name, task type or payout method…"
            className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-xl border border-input bg-background p-1">
            {REGIONS.map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => set("region", r.value)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  filters.region === r.value
                    ? "bg-ink text-ink-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {r.label}
              </button>
            ))}
          </div>

          <Select value={filters.payout} onValueChange={(v) => set("payout", v as PayoutGroup | "all")}>
            <SelectTrigger className="h-10 w-[150px] rounded-xl bg-background" aria-label="Payout method">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any payout</SelectItem>
              {PAYOUT_GROUPS.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.sort} onValueChange={(v) => set("sort", v as SortKey)}>
            <SelectTrigger className="h-10 w-[185px] rounded-xl bg-background" aria-label="Sort">
              <SlidersHorizontal className="size-3.5 text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SORTS.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <p className="text-muted-foreground">
          Showing <span className="font-mono font-semibold text-foreground">{results.length}</span> of{" "}
          {platforms.length} platforms
        </p>
        {isFiltered && (
          <button
            type="button"
            onClick={() => onChange({ ...DEFAULT_FILTERS, sort: filters.sort })}
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            <X className="size-3.5" /> Clear filters
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <div
          key={`${filters.category}-${filters.payout}-${filters.region}-${filters.sort}`}
          className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {results.map((p, i) => (
            <PlatformCard key={p.slug} platform={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-3xl border-2 border-dashed border-border bg-card px-6 py-16 text-center">
          <p className="font-display text-2xl font-bold">No platforms match that.</p>
          <p className="mt-2 text-sm text-muted-foreground">Try another payout method or clear your filters.</p>
          <Button variant="soft" className="mt-5" onClick={() => onChange(DEFAULT_FILTERS)}>
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}

function CategoryChip({
  label,
  count,
  active,
  onClick,
  category,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  category?: Category;
}) {
  const s = category ? CATEGORY_STYLE[category] : undefined;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
        active
          ? "border-foreground bg-ink text-ink-foreground shadow-[2px_2px_0_0_var(--highlight)]"
          : "border-border bg-card text-foreground hover:border-foreground",
      )}
    >
      {s && <span className={cn("size-2 rounded-full", s.dot)} />}
      {label}
      <span
        className={cn(
          "rounded-full px-1.5 font-mono text-[11px]",
          active ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground",
        )}
      >
        {count}
      </span>
    </button>
  );
}

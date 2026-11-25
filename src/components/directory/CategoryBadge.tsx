import type { Category } from "@/data/platforms";
import { CATEGORY_STYLE } from "@/lib/category-style";
import { cn } from "@/lib/utils";

export function CategoryBadge({ category, className }: { category: Category; className?: string }) {
  const s = CATEGORY_STYLE[category];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        s.soft,
        s.text,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", s.dot)} />
      {category}
    </span>
  );
}

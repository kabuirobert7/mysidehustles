import type { Platform } from "@/data/platforms";
import { CATEGORY_STYLE, monogram } from "@/lib/category-style";
import { cn } from "@/lib/utils";

const SIZES = {
  sm: "size-10 rounded-xl text-sm",
  md: "size-14 rounded-2xl text-lg",
  lg: "size-24 rounded-3xl text-4xl",
} as const;

export function PlatformMark({
  platform,
  size = "md",
  className,
}: {
  platform: Platform;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const primary = platform.categories[0] ?? "Rewards";
  const s = CATEGORY_STYLE[primary];
  return (
    <div
      aria-hidden
      className={cn(
        "relative grid shrink-0 place-items-center border-2 border-foreground font-display font-bold tracking-tight",
        SIZES[size],
        s.soft,
        s.text,
        className,
      )}
    >
      {monogram(platform.name)}
      <span className={cn("absolute -right-1 -top-1 size-3 rounded-full border-2 border-foreground", s.dot)} />
    </div>
  );
}

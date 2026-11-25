import { ArrowUpRight } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import type { Platform } from "@/data/platforms";

export function JoinButton({
  platform,
  label,
  variant = "ink",
  size = "sm",
  className,
}: {
  platform: Platform;
  label?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={platform.referralUrl} target="_blank" rel="sponsored nofollow noopener noreferrer">
        {label ?? `Join ${platform.name}`}
        <ArrowUpRight />
      </a>
    </Button>
  );
}

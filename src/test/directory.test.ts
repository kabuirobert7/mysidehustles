import { describe, expect, it } from "vitest";

import { getPlatform, platforms } from "@/data/platforms";
import { DEFAULT_FILTERS, filterPlatforms, payoutGroupsOf } from "@/lib/directory";

describe("directory rules", () => {
  it("lists all 16 platforms from the pack", () => {
    expect(platforms).toHaveLength(16);
  });

  it("sorts Sweatcoin ($0) first when sorting by lowest payout", () => {
    const sorted = filterPlatforms(platforms, { ...DEFAULT_FILTERS, sort: "payout-asc" });
    expect(sorted[0]?.slug).toBe("sweatcoin");
    expect(sorted[1]?.slug).toBe("jumptask");
  });

  it("Worldwide filter excludes AttaPoll and Verb Data", () => {
    const ww = filterPlatforms(platforms, { ...DEFAULT_FILTERS, region: "worldwide" });
    expect(ww).toHaveLength(14);
    expect(ww.map((p) => p.slug)).not.toContain("verb-data");
  });

  it("Bixberry pays only in gift cards", () => {
    expect(payoutGroupsOf(getPlatform("bixberry")!)).toEqual(["Gift Cards"]);
  });

  it("Passive Income category returns Honeygain, Bixberry and Verb Data", () => {
    const res = filterPlatforms(platforms, { ...DEFAULT_FILTERS, category: "Passive Income" });
    expect(res.map((p) => p.slug)).toEqual(["honeygain", "bixberry", "verb-data"]);
  });
});

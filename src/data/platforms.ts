export type Category =
  | "Micro Tasks"
  | "Surveys"
  | "Rewards"
  | "Passive Income"
  | "Offers"
  | "Affiliate";

export type PayoutGroup = "PayPal" | "Crypto" | "Gift Cards" | "Bank";

export interface EarnWay {
  title: string;
  text: string;
}

export interface Platform {
  slug: string;
  number: number;
  name: string;
  tagline: string;
  /** Category label exactly as written in the listing pack. */
  categoryLabel: string;
  /** First entry is the primary category. */
  categories: Category[];
  countries: string;
  worldwide: boolean;
  usFriendly: boolean;
  referralUrl: string;
  /** True when the link is an official homepage waiting for a personal referral link. */
  officialLinkOnly?: boolean;
  minPayoutLabel: string;
  minPayoutUsd: number;
  minPayoutNote?: string;
  payoutMethods: string[];
  description: string;
  earn: EarnWay[];
  expect: string[];
  compliance: string;
  minAge: string;
  devices: string[];
  inviteCode?: string;
}

export const LAST_VERIFIED = "2026-11-22";

export const CATEGORIES: Category[] = [
  "Micro Tasks",
  "Surveys",
  "Rewards",
  "Passive Income",
  "Offers",
  "Affiliate",
];

export const PAYOUT_GROUPS: PayoutGroup[] = ["PayPal", "Crypto", "Gift Cards", "Bank"];

export const platforms: Platform[] = [
  {
    slug: "sproutgigs",
    number: 1,
    name: "SproutGigs",
    tagline:
      "Complete quick micro-tasks, social engagements, and freelance gigs for PayPal, Crypto, or Airtm payouts.",
    categoryLabel: "Micro Tasks",
    categories: ["Micro Tasks"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://sproutgigs.com/?a=f79621f6",
    minPayoutLabel: "$5",
    minPayoutUsd: 5,
    payoutMethods: ["PayPal", "Crypto / USDT (Litecoin/USDC)", "Airtm", "Uphold"],
    description:
      "SproutGigs (formerly Picoworkers) is an online micro-task and freelance marketplace that connects workers worldwide with small digital jobs posted by global clients.",
    earn: [
      {
        title: "Micro-Tasks",
        text: "Complete short online tasks such as app testing, website visits, content engagement, data tagging, and survey offers.",
      },
      {
        title: "Freelance Gigs",
        text: "Offer specialized digital services (graphics, writing, SEO, or virtual assistance) if you want higher-paying project work.",
      },
    ],
    expect: [
      "No upfront fees or paid memberships are required to join and start browsing tasks.",
      "Each micro-task displays the exact USD reward and clear instructions before you accept it, and payouts are credited to your account balance once the task creator verifies your proof of work.",
      "Earnings depend on task availability, accuracy, and time spent—making it best suited for steady extra pocket money rather than full-time income.",
    ],
    compliance:
      "Open globally (18+). Works on mobile and desktop browsers. Only one account per person/household/IP is permitted; VPN or proxy usage is strictly prohibited and can result in account suspension. First-time withdrawals may require standard ID/account verification.",
    minAge: "18+",
    devices: ["Mobile web", "Desktop web"],
  },
  {
    slug: "timebucks",
    number: 2,
    name: "TimeBucks",
    tagline:
      "Get paid automatically every week for surveys, micro-tasks, content clicks, and daily offers.",
    categoryLabel: "Micro Tasks (or Surveys)",
    categories: ["Micro Tasks", "Surveys"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://timebucks.com/?refID=225910189",
    minPayoutLabel: "$3",
    minPayoutUsd: 3,
    payoutMethods: [
      "PayPal",
      "Crypto / USDT (Litecoin)",
      "Payoneer",
      "Airtm",
      "Wise / Bank Transfer",
      "Virtual Visa ($10 min)",
    ],
    description:
      "TimeBucks is an established global Get-Paid-To (GPT) rewards platform where members earn USD balances by completing everyday online tasks.",
    earn: [
      {
        title: "Surveys & Offerwalls",
        text: "Answer market research surveys and complete partner app or website offers.",
      },
      {
        title: "Micro-Tasks & Content",
        text: "Earn small rewards for viewing slideshows, clicking ads, social engagements, and simple data tasks.",
      },
    ],
    expect: [
      "Free to join globally with no upfront fees.",
      "Unlike most platforms, TimeBucks sends payouts automatically once your verified account reaches at least $3 USD (processing fees vary by payment method).",
      "Best suited for steady spare-time pocket money rather than full-time income.",
    ],
    compliance:
      "Open worldwide (18+). Works on desktop and mobile browsers. Standard account verification is required for payouts, and full ID verification is required for crypto withdrawals. One account per person/household; VPNs and proxies are strictly prohibited.",
    minAge: "18+",
    devices: ["Mobile web", "Desktop web"],
  },
  {
    slug: "jumptask",
    number: 3,
    name: "JumpTask",
    tagline:
      "Complete bite-sized micro-tasks, surveys, and games with low cashout minimums starting at $0.50.",
    categoryLabel: "Micro Tasks",
    categories: ["Micro Tasks"],
    countries: "Worldwide (100+ countries)",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://www.jumptask.io/r/kyraxuxatexe",
    minPayoutLabel: "$1",
    minPayoutUsd: 1,
    minPayoutNote: "First payout $1; $0.50 afterward",
    payoutMethods: [
      "Crypto / USDT (USDC, BTC, ETH, TRX)",
      "PayPal",
      "Gift Cards",
      "Visa / Mastercard Prepaid",
    ],
    description:
      "JumpTask is a global micro-task and rewards marketplace that pays users in fixed-value credits ($1 per 1,000 credits) for completing quick digital tasks.",
    earn: [
      {
        title: "Micro-Tasks & Social Actions",
        text: "Complete quick website actions, social tasks, video watches, and AI/data labeling tasks.",
      },
      {
        title: "Surveys, Games & Passive Sharing",
        text: "Earn through partner surveys, mobile game milestones, or by linking Honeygain in JumpTask mode.",
      },
    ],
    expect: [
      "Free to join; signing up via the referral link unlocks a +10% bonus on your first completed task.",
      "First withdrawal requires $1 USD (1,000 credits), dropping to $0.50 USD for subsequent payouts. Network/conversion fees apply depending on the withdrawal method chosen (USDC on Base has zero platform fee).",
    ],
    compliance:
      "Available in 100+ countries (18+). Accessible via web browser and Android app. Accounts inactive for 6+ months may have unused credits expire. VPN/proxy usage is prohibited.",
    minAge: "18+",
    devices: ["Web", "Android"],
  },
  {
    slug: "honeygain",
    number: 4,
    name: "Honeygain",
    tagline:
      "Earn passive rewards in the background by safely sharing unused internet bandwidth.",
    categoryLabel: "Rewards (or Passive Income)",
    categories: ["Rewards", "Passive Income"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://join.honeygain.com/ROBER24617",
    minPayoutLabel: "$20",
    minPayoutUsd: 20,
    minPayoutNote: "Or lower via JumpTask mode",
    payoutMethods: ["PayPal", "Crypto / USDT (via JumpTask)", "Gift Cards (via JumpTask)"],
    description:
      "Honeygain is a passive-earning application that rewards users for sharing a portion of their unused internet bandwidth with verified business intelligence and web-data partners.",
    earn: [
      {
        title: "Background Bandwidth Sharing",
        text: "Install the app on your phone or computer and let it run quietly while connected to Wi-Fi or mobile data.",
      },
      {
        title: "Daily Lucky Pot & Content Delivery",
        text: "Open the daily bonus jar and enable Content Delivery (where supported) for extra credits.",
      },
    ],
    expect: [
      "Completely passive once installed, though earnings accumulate gradually based on your region's network demand and IP quality.",
      "Direct PayPal cashouts unlock at $20 USD (20,000 credits), or you can route earnings through JumpTask for lower thresholds and crypto/gift card options.",
    ],
    compliance:
      "Open worldwide (18+). Available on Windows, macOS, Linux, Android, and iOS. Up to 10 devices allowed per account (maximum 1–2 active devices per IP address). Datacenter IPs and VPNs are blocked.",
    minAge: "18+",
    devices: ["Windows", "macOS", "Linux", "Android", "iOS"],
  },
  {
    slug: "paidwork",
    number: 5,
    name: "Paidwork",
    tagline:
      "Earn extra cash from your phone or computer by playing games, taking surveys, and testing apps.",
    categoryLabel: "Micro Tasks",
    categories: ["Micro Tasks"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://www.paidwork.com/?r=jasonkamau91",
    minPayoutLabel: "$10",
    minPayoutUsd: 10,
    minPayoutNote: "Varies by currency/region, typically $10–$20",
    payoutMethods: ["PayPal", "Bank Transfer", "Crypto / USDT", "Gift Cards"],
    description:
      "Paidwork is a multi-task mobile and web earning platform that brings games, surveys, videos, and app trials into a single dashboard.",
    earn: [
      {
        title: "Mobile Games & App Trials",
        text: "Download partner games and reach specific in-game levels or milestones for cash rewards.",
      },
      {
        title: "Surveys, Videos & Micro-Tasks",
        text: "Fill out market research questionnaires, watch promotional clips, and complete online offers.",
      },
    ],
    expect: [
      "Free to join on Android, iOS, or desktop web.",
      "Task availability and payout rates vary by country and device. Best suited for casual spare-time earnings.",
    ],
    compliance:
      "Open worldwide (18+, or 13+ with parental consent where permitted). Available on Android, iOS, and Web. Strictly one account per person/device; VPNs or emulators are prohibited.",
    minAge: "18+",
    devices: ["Android", "iOS", "Web"],
  },
  {
    slug: "bixberry",
    number: 6,
    name: "Bixberry",
    tagline:
      "Run a lightweight desktop app in the background to earn points redeemable for 5,000+ digital gift cards.",
    categoryLabel: "Rewards",
    categories: ["Rewards", "Passive Income"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://join.bixberry.com/JASONAFF27",
    minPayoutLabel: "$10",
    minPayoutUsd: 10,
    minPayoutNote: "First gift card $10; $20 afterward",
    payoutMethods: [
      "Gift Cards (Amazon, Visa Prepaid, Apple, Google Play, Walmart, Steam & 5,000+ brands)",
    ],
    description:
      "Bixberry is a passive desktop rewards application that turns spare device uptime and AI network lookups into digital gift cards.",
    earn: [
      {
        title: "Passive Uptime & AI Requests",
        text: "Install the Bixberry desktop app and earn points automatically for hours kept online and lightweight AI search requests routed through your connection.",
      },
    ],
    expect: [
      "Pays exclusively in digital gift cards and virtual prepaid Visa cards sent directly to your email—no bank account or PayPal connection required.",
      "Your first gift card unlocks at $10 USD ($20 USD for subsequent redemptions). Earnings accumulate slowly in the background based on online hours and regional demand.",
    ],
    compliance:
      "Available globally (18+). Currently requires a Windows PC/laptop. Make sure the country selected at checkout matches the store region of the gift card you redeem. VPNs and proxies are not permitted.",
    minAge: "18+",
    devices: ["Windows"],
  },
  {
    slug: "ask-first-ai",
    number: 7,
    name: "Ask First AI",
    tagline:
      "Publish high-demand questions and expert answers to earn royalties from verified human readership.",
    categoryLabel: "Affiliate (or Micro Tasks)",
    categories: ["Affiliate", "Micro Tasks"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://askfirst.ai/start-earning?ref=Z88",
    minPayoutLabel: "$10",
    minPayoutUsd: 10,
    minPayoutNote: "Verify inside creator payout settings",
    payoutMethods: ["PayPal", "Crypto / USDT", "Bank / E-Wallet"],
    description:
      "Ask First AI is an AI-assisted Question & Answer publishing platform where writers and knowledge curators earn royalties when readers view or unlock their published guides.",
    earn: [
      {
        title: "Publish Q&A Pages",
        text: "Write structured, helpful questions and in-depth answers using the platform's editor and AI content analyzer.",
      },
      {
        title: "Readership Royalties & Referral Tiers",
        text: "Earn revenue shares from verified human traffic, paywall unlocks, and an optional 2-tier creator referral program.",
      },
    ],
    expect: [
      "Free to sign up and publish.",
      "Earnings depend directly on the search demand, quality, and genuine human traffic your published Q&A articles attract—not guaranteed fixed pay per post.",
    ],
    compliance:
      "Open globally (18+). Works on desktop and mobile web browsers (optional browser extension available). Automated bot traffic or self-clicking is strictly prohibited.",
    minAge: "18+",
    devices: ["Desktop web", "Mobile web", "Browser extension"],
  },
  {
    slug: "sweatcoin",
    number: 8,
    name: "Sweatcoin",
    tagline:
      "Turn your daily outdoor and indoor steps into digital reward points, brand discounts, and SWEAT crypto.",
    categoryLabel: "Rewards",
    categories: ["Rewards"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://swcapp.com/i/robertkabui",
    minPayoutLabel: "$0",
    minPayoutUsd: 0,
    minPayoutNote: "No fixed minimum for SWEAT tokens; in-app offers vary",
    payoutMethods: ["Gift Cards", "Crypto / USDT (SWEAT token via Sweat Wallet)"],
    description:
      "Sweatcoin is a popular mobile fitness and step-counter app that rewards daily physical movement with in-app Sweatcoins and optional SWEAT cryptocurrency tokens.",
    earn: [
      {
        title: "Daily Step Tracking",
        text: "Carry your smartphone while walking or running to automatically convert verified steps into rewards.",
      },
      {
        title: "Daily Boosts & Challenges",
        text: "Activate daily 2x step boosts, watch optional bonus ads, and join walking challenges.",
      },
    ],
    expect: [
      "Free to download on Android and iOS.",
      "Standard Sweatcoins cannot be withdrawn directly as PayPal cash—they are redeemed for partner gift cards, discounts, or prize draws inside the app. Linking the companion Sweat Wallet mints SWEAT crypto tokens, which can be transferred to supported exchanges (Bybit, KuCoin, OKX) and converted to USDT or local currency.",
    ],
    compliance:
      "Available in most countries worldwide (13+ / 18+ for crypto wallet features). Requires an Android or iOS smartphone with motion sensors. Step-spoofing apps will void rewards.",
    minAge: "13+",
    devices: ["Android", "iOS"],
  },
  {
    slug: "mooney",
    number: 9,
    name: "Mooney",
    tagline:
      "Track your daily steps and complete quick mobile offers to redeem gift cards and cash rewards.",
    categoryLabel: "Rewards",
    categories: ["Rewards"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://mooney.gg/r/4YYNCHEIQ5JJKE8J",
    minPayoutLabel: "$2",
    minPayoutUsd: 2,
    minPayoutNote: "Varies by reward/region, typically $2–$5",
    payoutMethods: ["PayPal", "Gift Cards"],
    description:
      "Mooney is a mobile step-tracking and rewards app that combines a daily pedometer with surveys and app offers.",
    earn: [
      {
        title: "Walking & Daily Streaks",
        text: "Earn coins by hitting daily step milestones and maintaining activity streaks.",
      },
      {
        title: "Surveys & Partner Offers",
        text: "Complete in-app questionnaires and partner tasks to boost your coin balance faster.",
      },
    ],
    expect: [
      "Free to install on mobile devices.",
      "Cashing out step coins typically requires completing qualifying surveys or partner offers inside the app, and small redemption fees may apply depending on the payout option.",
    ],
    compliance:
      "Open globally (17+). Requires an Android or iOS smartphone with built-in step sensors (smartwatch steps may not sync directly).",
    minAge: "17+",
    devices: ["Android", "iOS"],
  },
  {
    slug: "paid-to-read-email",
    number: 10,
    name: "Paid-To-Read-Email",
    tagline:
      "Earn small cash rewards for reading promotional emails, taking surveys, and completing online offers.",
    categoryLabel: "Micro Tasks",
    categories: ["Micro Tasks"],
    countries: "Worldwide (best availability in US, UK, CA, AU)",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://www.paid-to-read-email.com/?r=3312151",
    minPayoutLabel: "$15",
    minPayoutUsd: 15,
    payoutMethods: ["PayPal"],
    description:
      "Paid-To-Read-Email is a classic Get-Paid-To (GPT) website that rewards members for confirming promotional emails and completing basic online offers.",
    earn: [
      {
        title: "Paid Emails",
        text: "Receive daily sponsored emails in your inbox and click to confirm you read them.",
      },
      {
        title: "Surveys & Cashback",
        text: "Complete partner surveys and online shopping offers for extra balance.",
      },
    ],
    expect: [
      "New members receive a small signup bonus upon completing their profile, though you must reach the $15 USD threshold before requesting a payout.",
      "Individual email clicks pay small amounts and opportunities are much higher in Tier-1 countries (US/UK/CA/AU), so reaching $15 takes patience.",
    ],
    compliance:
      "Open globally (18+), though survey and email inventory is heavily concentrated in the US, UK, Canada, and Australia. Requires an active PayPal account to cash out.",
    minAge: "18+",
    devices: ["Web", "Email"],
  },
  {
    slug: "zulti",
    number: 11,
    name: "Zulti",
    tagline:
      "Collect free daily gems from spins and mini-games to enter real cash prize draws without spending money.",
    categoryLabel: "Rewards",
    categories: ["Rewards"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://zulti.com/?r=GGNDQHE9CM",
    minPayoutLabel: "$30",
    minPayoutUsd: 30,
    minPayoutNote: "Applies to cash prize winnings",
    payoutMethods: ["PayPal", "Crypto / USDT (subject to verification)"],
    description:
      "Zulti is a free-to-play online giveaway and prize-draw platform where users collect free gems to enter daily cash raffles.",
    earn: [
      {
        title: "Free Daily Spins & Mini-Games",
        text: "Log in daily to spin the reward wheel and play casual mini-games to gather Zulti gems/dollars.",
      },
      {
        title: "Enter Prize Draws",
        text: "Spend your collected free gems on lottery-style ticket entries for scheduled cash draws.",
      },
    ],
    expect: [
      "Free to play with no ticket purchases required.",
      "Zulti operates as a sweepstakes/lottery-style prize draw, not guaranteed hourly or task pay. Winnings depend on draw luck, and cashout minimums/verification rules apply if you win.",
    ],
    compliance:
      "Open globally where free online sweepstakes are permitted (18+). Works on mobile and desktop browsers. ID verification may be required before claiming prize payouts.",
    minAge: "18+",
    devices: ["Mobile web", "Desktop web"],
  },
  {
    slug: "bbq-sort",
    number: 12,
    name: "BBQ Sort",
    tagline:
      "Play a casual skewer-matching puzzle game on mobile and collect in-game reward coins.",
    categoryLabel: "Offers (or Rewards)",
    categories: ["Offers", "Rewards"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://shareappurl.com/bbqsort/share.html?referrer=213768",
    minPayoutLabel: "$10",
    minPayoutUsd: 10,
    minPayoutNote: "Varies by region/in-game wallet",
    payoutMethods: ["PayPal", "Gift Cards (regional e-wallets where supported)"],
    description:
      "BBQ Sort is a casual mobile match-3 sorting puzzle game where players organize grill skewers across levels while collecting in-game reward coins.",
    earn: [
      {
        title: "Level Progression & Daily Missions",
        text: "Clear sorting puzzle levels, spin bonus wheels, and watch optional in-game reward ads to accumulate points (use invite code 213768 during signup).",
      },
    ],
    expect: [
      "Free to download and play on mobile.",
      "Like most ad-supported casual mobile reward games, coin accumulation slows down significantly as you approach payout thresholds, and watching video ads is required to unlock bonuses. Treat it primarily as a casual game rather than reliable income.",
    ],
    compliance: "Available globally on Android/iOS (18+ for reward redemptions). Invite code: 213768.",
    minAge: "18+",
    devices: ["Android", "iOS"],
    inviteCode: "213768",
  },
  {
    slug: "gemgala",
    number: 13,
    name: "Gemgala",
    tagline:
      "Join voice party rooms and play casual multiplayer mini-games like BlockMe and Lucky Race.",
    categoryLabel: "Offers (or Rewards)",
    categories: ["Offers", "Rewards"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://getblock.me/u/34140858",
    minPayoutLabel: "$5",
    minPayoutUsd: 5,
    minPayoutNote: "Varies by region/agency payout setup",
    payoutMethods: ["PayPal", "Bank / E-Wallet", "Crypto / USDT (region-dependent)"],
    description:
      "Gemgala is a social voice-chat and casual gaming app featuring multiplayer party rooms alongside quick puzzle and race mini-games such as BlockMe.",
    earn: [
      {
        title: "Mini-Games & Social Events",
        text: "Compete in BlockMe puzzle challenges, daily leaderboards, and in-app social gifting events.",
      },
    ],
    expect: [
      "Free to download on Android; primarily designed as a social hangout and casual gaming platform with in-app reward mechanics rather than guaranteed task wages.",
    ],
    compliance:
      "Available globally on Android (17+). Requires mobile internet connection; up to 3 accounts permitted per device.",
    minAge: "17+",
    devices: ["Android"],
  },
  {
    slug: "fruit-wins",
    number: 14,
    name: "Fruit Wins",
    tagline:
      "Play a casual fruit-blasting arcade puzzle game on Android and collect in-game reward diamonds.",
    categoryLabel: "Offers (or Rewards)",
    categories: ["Offers", "Rewards"],
    countries: "Worldwide",
    worldwide: true,
    usFriendly: true,
    referralUrl: "https://sharegameurl.com/fruitwins/index.html?inviteCode=1966911",
    minPayoutLabel: "$10",
    minPayoutUsd: 10,
    minPayoutNote: "Varies by local currency threshold",
    payoutMethods: ["PayPal", "Gift Cards (regional mobile wallets where available)"],
    description:
      "Fruit Wins is a lighthearted mobile arcade puzzle game where players clear fruit-matching stages and complete daily missions for in-game reward points.",
    earn: [
      {
        title: "Stage Clears & Daily Missions",
        text: "Blast matching fruit clusters, complete daily challenges, and enter invite code 1966911 for a starter bonus.",
      },
    ],
    expect: [
      "Free to download and play on Android.",
      "This is an ad-supported casual game where higher withdrawal thresholds require extensive gameplay and ad views. Play for entertainment first rather than guaranteed cash payouts.",
    ],
    compliance: "Available globally on Android (18+ for reward redemptions). Invite code: 1966911.",
    minAge: "18+",
    devices: ["Android"],
    inviteCode: "1966911",
  },
  {
    slug: "attapoll",
    number: 15,
    name: "AttaPoll",
    tagline:
      "Take short, mobile-friendly paid surveys on your phone with instant PayPal cashouts starting at $3.",
    categoryLabel: "Surveys",
    categories: ["Surveys"],
    countries: "US / UK / CA / AU (also supports 40+ countries globally)",
    worldwide: false,
    usFriendly: true,
    referralUrl: "https://attapoll.com/en-us/",
    officialLinkOnly: true,
    minPayoutLabel: "$3",
    minPayoutUsd: 3,
    minPayoutNote: "PayPal/Revolut; $2.50–$5 for gift cards",
    payoutMethods: ["PayPal", "Gift Cards", "Revolut", "Bank Transfer (US)"],
    description:
      "AttaPoll is one of the highest-rated mobile survey apps, connecting users with quick, clearly rated market research surveys on iOS and Android.",
    earn: [
      {
        title: "Paid Mobile Surveys",
        text: "Answer short 2-to-15-minute surveys—each listing shows the exact payout and a star rating indicating how likely you are to qualify.",
      },
      {
        title: "Mobile Game Offers",
        text: "Earn extra rewards by trying featured mobile games.",
      },
    ],
    expect: [
      "Free to download on iOS and Android; especially strong survey inventory and payouts for United States residents.",
      "Low $3 USD PayPal cashout threshold with fast processing once reached.",
    ],
    compliance:
      "Best for US, UK, Canada, Australia, and Europe (16+ / 18+ depending on region). Requires iOS or Android smartphone; VPNs or inconsistent profile answers will lead to disqualifications.",
    minAge: "16+",
    devices: ["iOS", "Android"],
  },
  {
    slug: "verb-data",
    number: 16,
    name: "Verb Data",
    tagline:
      "US residents can earn monthly passive payouts by securely licensing their everyday browsing and purchase data.",
    categoryLabel: "Rewards (or Passive Income)",
    categories: ["Rewards", "Passive Income"],
    countries: "United States",
    worldwide: false,
    usFriendly: true,
    referralUrl: "https://verb-data.com/",
    officialLinkOnly: true,
    minPayoutLabel: "$10",
    minPayoutUsd: 10,
    minPayoutNote: "Monthly payout cycle",
    payoutMethods: ["PayPal", "Bank Transfer (Stripe/ACH via US account)"],
    description:
      "Verb Data is a US-based consumer data monetization platform that lets individuals get paid when companies license anonymized digital activity data.",
    earn: [
      {
        title: "Set Your Price & Share Selected Data",
        text: "Choose which data streams you want to connect (such as browsing history, social activity, or purchase receipts) and earn recurring monthly payouts when buyers license your data pool.",
      },
    ],
    expect: [
      "Free to join for eligible US residents; you remain in control of what data is shared and can pause or delete your account at any time.",
      "Payouts depend on buyer demand and the data sources you connect—best used as a set-and-forget passive supplement.",
    ],
    compliance:
      "Strictly restricted to United States residents (18+). Requires a US-based account and compatible browser/app connections.",
    minAge: "18+",
    devices: ["Browser", "App connections"],
  },
];

export function getPlatform(slug: string): Platform | undefined {
  return platforms.find((p) => p.slug === slug);
}

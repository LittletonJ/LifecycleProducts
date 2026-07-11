# Lifecycle

Honest, research-grounded product assessments built with SvelteKit and TailwindCSS. Self-hosted on a solar-powered Raspberry Pi 4B.

## The evaluation philosophy

The question is never "is it green?" — it's "greener than **what**?" Every assessment compares a product against what it actually replaces (including the option of buying nothing), and ends in one of three honest verdicts:

- **Genuinely better** — the evidence holds up against the honest baseline
- **Depends on your habits** — a win only under specific, spelled-out conditions
- **Mostly marketing** — real gains too small to justify the halo

Each assessment carries:

1. **Baseline comparison** — the real counterfactual (a steel bottle vs. the glass you already own, not vs. 365 plastic bottles)
2. **Break-even analysis** — how long until the up-front manufacturing footprint pays back, and how realistic that is (`easy` / `realistic` / `demanding` / `never`)
3. **Use-phase impacts** — washing, energy, upkeep, and hygiene, which often dominate (and which eco-marketing ignores)
4. **Honest caveats** — nylon bristles in "compostable" brushes, methane from landfilled bamboo, biofilm in unwashed bottles
5. **Confidence level and sources** — every number traces to LCA literature; uncertainty is flagged, not hidden

## Tech stack

- SvelteKit 2.x with Svelte 5
- TailwindCSS 4.x (class-based dark mode via `@custom-variant`)
- TypeScript
- Lucide Svelte (icons)

## Getting started

```bash
npm install       # install dependencies
npm run dev       # development server
npm run build     # production build
npm run preview   # preview production build
```

## Design system

Zen/minimalist. Defined in `src/app.css`:

- **Palette**: warm `stone-*` neutrals; single sage accent `moss-*`; muted gold `ochre-*` (conditional verdicts); terracotta `clay-*` (marginal verdicts, caveats). No gradients, no shadows.
- **Typography**: system serif (`.font-display`) for headings, system sans for body.
- **Utilities**: `.eyebrow` (small uppercase labels), `.surface` (hairline-bordered card), `.hairline` (border color), `.prose-quiet` (body text).
- Dark mode toggles a `.dark` class on `<html>`; Tailwind 4 requires the `@custom-variant dark` in `app.css` for this to work.

## Updating products

All product data lives in `src/lib/data/products.ts`. Each product follows the `Product` interface defined at the top of that file. The key fields beyond the basics:

```typescript
assessment: {
  comparison: {
    baseline: string,            // what habit this actually replaces
    baselineNote: string,
    productionCarbon: number,    // kg CO2e to manufacture
    baselineAnnualCarbon: number,// kg CO2e/yr of the replaced habit
    breakEven: {
      value: number | null,      // null = never; 0 = immediate like-for-like swap
      unit: 'uses' | 'months' | 'years',
      against: string,           // the assumed habit
      achievability: 'easy' | 'realistic' | 'demanding' | 'never',
      note: string
    }
  },
  usePhase: {
    shareOfFootprint: number,    // % of lifetime impact after purchase
    drivers: string[],
    hygiene: { risk: 'low' | 'medium' | 'high', note: string },
    careRequired: string         // what the lifetime claim depends on
  },
  verdict: {
    tier: 'genuine' | 'conditional' | 'marginal',
    headline: string,            // one honest sentence
    bottomLine: string,          // short plain-language summary
    caveats: string[],           // what marketing won't tell you
    smarterMove?: string         // the genuinely best option
  },
  confidence: { level: 'high' | 'medium' | 'low', note: string },
  // ...plus negatives, positives (recyclability with downcycling penalty,
  // repairability), lifetime, healthImpacts, useAndQuality
}
sources: Source[]                // the LCA studies behind the numbers
```

Ground every number in real LCA literature and cite it in `sources`. Rankings and ratios from studies are usually more trustworthy than absolute values — say so in `confidence.note`.

New products automatically appear in `/assessments`, get a detail page at `/assessments/[id]`, and join the category/verdict filters.

## Project structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Footer.svelte
│   │   ├── Navigation.svelte
│   │   ├── ProductCard.svelte    # verdict-led card
│   │   ├── ScoreBar.svelte
│   │   ├── ThemeToggle.svelte
│   │   └── VerdictBadge.svelte   # the three-tier verdict chip
│   └── data/
│       └── products.ts           # CENTRAL DATA FILE (schema + assessments)
├── routes/
│   ├── +page.svelte              # home: philosophy + featured assessments
│   ├── assessments/              # listing (verdict/category filters) + [id] detail
│   ├── methodology/              # single consolidated methodology page
│   │   └── references/           # research citations
│   └── store/                    # coming soon
└── app.css                       # design tokens + utilities
```

## Deployment

Self-hosted on a Raspberry Pi 4B with solar power. `npm run build` and serve the static files.

## Contributing

1. Every assessment claim must trace to a source in `sources`
2. Prefer honest ranges over false precision; flag confidence levels
3. Keep verdict copy concise and actionable
4. Test dark mode for new UI
5. Keep the site lightweight — it runs on solar

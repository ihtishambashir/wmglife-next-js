Animations: Reveal and Counter

Overview
- Reveal slides content in from the left or right when it enters the viewport. It uses transform and opacity only (no layout shift) and respects prefers-reduced-motion.
- Counter animates numbers using requestAnimationFrame, starting when visible. With reduced motion, values jump immediately to the final number.

Components
- `Reveal`
  - Props: `from: 'left' | 'right'`, `distance?: number` (default 40), `delay?: number`, `duration?: number` (default 700), `once?: boolean` (default true), `as?: ElementType`, `className?`.
  - Usage:
    - Wrap any block to animate it on scroll.
    - Example:
      `<Reveal from="left"><div className="card">Content</div></Reveal>`

- `Counter`
  - Props: `to: number`, `from?: number` (default 0), `duration?: number` (default 1200), `delay?: number`, `format?: (n:number)=>string`, `startOnView?: boolean` (default true), `once?: boolean` (default true), `easing?: (t)=>number`.
  - Usage:
    - Replace hard-coded numbers in stats or KPIs.
    - Example: `<Counter to={1200} />+` or with formatting `format={(n)=>n.toLocaleString()}`.

Hook
- `useInView(options)` returns `[ref, inView]`.
  - Options: `{ rootMargin?: string, threshold?: number|number[], once?: boolean }`.
  - SSR-safe and reduced-motion aware.

Performance & Accessibility
- Only transform and opacity are animated; transitions are GPU-accelerated.
- Global reduced-motion override is added in `src/app/globals.css` so motion is minimized when users opt out.
- No SSR window access; components are client-only and avoid hydration mismatches.

Examples
- See `src/app/page.js` and `src/app/contact/page.js` for usage across hero, cards, and stats.

Tips
- Mix `from="left"`/`from="right"` across sections for variety.
- Use small `delay` (e.g., 50–150ms) when sequencing adjacent components.
- Keep `duration` within 500–800ms for snappy UI; longer is fine for large hero elements.


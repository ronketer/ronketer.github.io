# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # dev server at http://localhost:1234 (Parcel 2, HMR enabled)
npm run build    # production build → dist/
```

No test runner is configured. No linter beyond Prettier (no lint script defined).

## Architecture

Single-page portfolio. Entry point: `src/index.html` (Parcel source). All sections live in this one file — Nav, Hero, About, Projects, Contact, Footer.

```
src/
├── index.html          ← entire page markup
├── css/main.css        ← @tailwind directives + @layer components (tech-pill, btn-primary, card, etc.)
├── js/main.js          ← nav scroll blur, mobile menu, IntersectionObserver scroll reveal
└── assets/images/      ← 6 hand-crafted SVG project placeholders (threads, mapreduce, slam, mosaicing, anki, todo)

tailwind.config.js      ← design tokens (colors, fonts, shadows, animations)
.postcssrc              ← JSON PostCSS config { "plugins": { "tailwindcss": {} } }
                           (JSON format required — JS format breaks Parcel CSS caching)
```

**Design tokens** (all defined in `tailwind.config.js`):
- `charcoal` (#0f1117) — page background
- `navy` (#161b27) — card surfaces
- `navy-light` (#1e2538) — hover/border states
- `accent` (#38bdf8) — primary highlight, CTAs
- `muted` (#7b8fa6) — secondary text (upgraded from #64748b for WCAG AA contrast)

**Typography**: Inter (body/headings) + JetBrains Mono (tech pills, nav logo) — loaded via Google Fonts in `<head>`.

**Scroll reveal**: `IntersectionObserver` in `main.js` watches `[data-reveal]` elements. Initial state set via Tailwind classes `opacity-0 translate-y-6` directly in HTML; observer removes them and adds `opacity-100 translate-y-0`. Stagger delays set as inline `style="transition-delay: Xms"` (not Tailwind `delay-*` classes, which get purged at build time).

**Nav blur**: `[data-scrolled="true"]` attribute toggled by scroll listener. The CSS rule for this selector lives in an inline `<style>` block inside `<nav>` — Tailwind's JIT cannot generate attribute-selector styles.

## Deploy

Push to `main` → GitHub Actions runs `npm run build` → publishes `dist/` to `gh-pages` branch via `peaceiris/actions-gh-pages`.

## Content Constraints

This is Ron Keter's personal portfolio. Exactly 6 projects are shown — do not add others:
1. User-Level Threads Library (`ronketer/uthreads-scheduler`)
2. MapReduce Framework (`ronketer/mapreduce-framework`)
3. Stereo Visual SLAM (`ronketer/kitti-visual-slam`)
4. Stereo Mosaicing (`ronketer/Stereo-Mosaicing`)
5. Autonomous Knowledge→Anki Pipeline (`ronketer/siyuan-to-anki-generator`)
6. Secure Todo REST API (`ronketer/todo-api-with-coverage`)

Never invent features, metrics, or achievements not present in the actual repos.

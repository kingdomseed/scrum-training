# Scrum Training Landing Page — Design Spec

**Date:** 2026-03-13
**Status:** Approved
**Deployment target:** `scrum.jasonholtdigital.com` (Cloudflare Pages, static)

## Overview

A minimal link-hub landing page for scrum training participants. Three clickable cards linking to workshop resources. Self-contained HTML/CSS with no build step and no JavaScript, matching the existing neo-brutalist JH Digital branding.

## File Changes

| Action | From | To | Purpose |
|--------|------|----|---------|
| Rename | `index.html` | `slides.html` | Free up root for landing page |
| Rename | `scrum-training-intake-form.html` | `intake.html` | Clean URL at `/intake` |
| Create | — | `index.html` | New landing page |
| Keep | `handouts.html` | `handouts.html` | No change |
| Keep | `facilitator.html` | `facilitator.html` | No change (facilitator-only, not linked from landing page) |

## URL Structure (Cloudflare Pages)

| URL | File |
|-----|------|
| `scrum.jasonholtdigital.com` | `index.html` |
| `scrum.jasonholtdigital.com/slides` | `slides.html` |
| `scrum.jasonholtdigital.com/intake` | `intake.html` |
| `scrum.jasonholtdigital.com/handouts` | `handouts.html` (standalone, no changes needed) |

Cloudflare Pages serves `.html` files at clean URLs automatically (no extension needed).

## Landing Page Design

### Layout

- Centered single column, `max-width: 620px` (matches intake form)
- Responsive: cards stack vertically on all screen sizes

### Header

- JH Digital logo (inline SVG, same as intake form)
- Title: "Scrum Training" in Epilogue 900
- Gold underline bar (same `::after` pattern as intake form)
- Subtitle: short descriptor, e.g. "Workshop resources for participants."

### Link Cards (3)

Same visual treatment as `.form-card` in the intake form:
- White background, uses `var(--border-base)` border, `var(--shadow-base)` shadow
- Hover: lift effect (`translate(-1px, -1px)`, `var(--shadow-lift)`)
- Entire card is clickable (`<a>` wrapping the card)
- Focus-visible outline for keyboard navigation (same `--color-primary` outline as intake form)

Cards:

1. **View Slides** → `/slides`
   - Description: "Follow along or revisit the workshop deck."
2. **Training Intake Form** → `/intake`
   - Description: "Help me tailor the session to you."
3. **Resources** → `/handouts`
   - Description: "Notes, handouts, and reference material."
   - Links to existing `handouts.html` (already works as a standalone page)

### Footer

- `jasonholtdigital.com` link, same style as intake form footer

## Branding (Design Tokens)

Reuse the exact tokens from the intake form:

```css
--color-bg: #ffffff;
--color-surface: #f9f9f9;
--color-text: #333333;
--color-text-muted: #444444;
--color-primary: #0066ff;
--color-on-primary: #ffffff;
--color-accent: #ffd700;
--color-on-accent: #1a1a1a;
--color-border: #333333;
--border-base: 2px solid var(--color-border);
--border-thick: 3px solid var(--color-border);
--shadow-base: 6px 6px 0 0 rgba(0,0,0,0.12);
--shadow-lift: 8px 8px 0 0 rgba(0,0,0,0.18);
--font-display: "Epilogue", system-ui, sans-serif;
--font-body: "Plus Jakarta Sans", system-ui, sans-serif;
```

Google Fonts: Epilogue (800, 900) + Plus Jakarta Sans (400, 600, 700).

## Out of Scope

- No build tooling, bundler, or framework
- No JavaScript (pure HTML/CSS)
- No Cloudflare deployment in this spec (separate task)
- No changes to slide deck content or facilitator guide
- No `--color-error` token needed (no form validation on landing page)
- No meta/OG tags or favicon (deferred to deployment task)

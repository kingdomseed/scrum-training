# Design: Two-Day Scrum Training — Slide Deck & Materials

> **Note:** This is a historical planning document. The final implementation diverged in several areas — see inline annotations marked [IMPLEMENTED DIFFERENTLY].

**Author:** Jason Holt (Scrum Master)
**Date:** 2026-03-06
**Status:** Pending Approval
**Delivery:** Wednesday March 18 & Thursday March 19, 2026
**Audience:** 6-8 non-technical staff at an art education company ("Duolingo of art")

---

## 1. What We're Building

A self-contained **HTML slide deck** and **printable facilitator materials** for a 2-day in-person Scrum workshop. The slides use Jason's JHD neobrutalist design system (Epilogue + Plus Jakarta Sans, #0066ff primary, #ffd700 accent, black borders, hard shadows, zero radius).

### Deliverables
1. **HTML slide deck** — Single `index.html` file using Reveal.js. [IMPLEMENTED DIFFERENTLY: Slide deck is slides.html; index.html is the landing page] Arrow keys to navigate. Works offline in any browser. Projected in class.
2. **Printable facilitator guide** — Separate HTML page with timing, talking points, and exercise instructions. Print to PDF.
3. **Printable handouts** — Scrum board template, retrospective format cards, "Getting Started with Scrum" canvas, Lego backlog cards.
4. **Print stylesheet** — The main deck has a `@media print` view for quick reference handouts.

### Not Building
- Infinite canvas / Mural replacement
- Interactive digital exercises (using real sticky notes instead)
- Scrum.org branding or copyrighted content
- Speaker notes embedded in the slide deck app

---

## 2. Two-Day Structure

### Day 1 — "Learn by Building" (Lego4Scrum)

| Block | Time | Duration | Content |
|-------|------|----------|---------|
| Kickoff | 8:00-8:55 | 55 min | Welcome, introductions, "Characteristics of a Great Team" sticky exercise, Working Agreements |
| Fundamentals | 8:55-9:45 | 50 min | Definition of Scrum, Agile Manifesto (4 values), Cynefin, Empirical Process (3 pillars) |
| Break | 9:45-10:00 | 15 min | |
| Framework | 10:00-10:40 | 40 min | Roles (PO, Developers, SM), Events, Artifacts, DoD |
| Lego Setup | 10:40-11:30 | 50 min | Introduce simulation, distribute Lego, teams self-organize, build backlog, estimate, Sprint 1 Planning |
| Lunch | 11:30-12:30 | 60 min | |
| Lego Sprint 1 | 12:30-1:05 | 35 min | Build (7m) + Review (10m) + Retro (8m) + Debrief (10m) |
| Lego Sprint 2 | 1:05-1:45 | 40 min | Planning (10m) + Build (7m) + Review (8m) + Retro (8m) + Debrief (7m) |
| Break | 1:45-2:00 | 15 min | |
| Lego Sprint 3 | 2:00-2:50 | 50 min | Planning (8m) + Build (7m) + Review (8m) + Retro (10m) + Full Debrief (17m) |
| Scrum Values | 2:50-3:20 | 30 min | Deep dive connecting values to Lego experience |
| Reflection | 3:20-3:45 | 25 min | Feedback Wall (sticky notes) |
| Closing | 3:45-4:00 | 15 min | Preview Day 2, optional homework: read Scrum Guide |

**Day 1 split:** ~80 min slides (19%), ~210 min exercises (50%), ~85 min discussion (20%), ~45 min breaks (11%)

### Day 2 — "Apply to Your Product"

| Block | Time | Duration | Content |
|-------|------|----------|---------|
| Opening | 8:00-8:15 | 15 min | Check-in, Day 1 recap, overnight questions |
| Deeper Dive | 8:15-8:45 | 30 min | Sprint Events flow, Self-Management, Collaboration & Cross-functionality |
| Planning | 8:45-9:30 | 45 min | Estimation exercise (relative sizing), PB Refinement, "Ready" concept, Monitoring Progress |
| Break | 9:30-9:45 | 15 min | |
| Presentation Setup | 9:45-10:15 | 30 min | Introduce exercise: "Build a presentation to sell your product vision." Teams create Product Backlog. A team member steps into PO role. Estimate. |
| Pres Sprint 1 | 10:15-11:05 | 50 min | Planning (10m) + Work (20m) + Review (10m) + Retro (10m) |
| Debrief | 11:05-11:15 | 10 min | Compare to Lego sprints |
| Lunch | 11:15-12:30 | 75 min | |
| Pres Sprint 2 | 12:30-1:30 | 60 min | Planning (10m) + Work (25m) + Review (15m) + Retro (10m) |
| Break | 1:30-1:45 | 15 min | |
| Final Presentations | 1:45-2:15 | 30 min | Each team presents (10-15 min each). Serves as final Sprint Review. |
| Pres Debrief | 2:15-2:30 | 15 min | How Scrum structured the creative work |
| Getting Started | 2:30-3:10 | 40 min | "Should we use Scrum?" canvas, org transformation, identify real PO/SM/Developers |
| Appreciation | 3:10-3:35 | 25 min | Appreciation Wall, personal takeaways |
| Closing | 3:35-4:00 | 25 min | Suggested reading, next steps, Q&A |

**Day 2 split:** ~75 min slides (18%), ~195 min exercises (46%), ~100 min discussion (24%), ~50 min breaks (12%)

---

## 3. Technical Design

### Slide Deck
- **Framework:** Reveal.js (MIT license, well-supported, keyboard navigation, print CSS)
- **Single file:** All CSS/JS inlined for portability. No build step.
- **Fonts:** Google Fonts CDN for Epilogue + Plus Jakarta Sans (with system fallbacks)
- **Theme:** Custom neobrutalist theme matching JHD tokens
- **Estimated slides:** ~60-80 total
- **Navigation:** Arrow keys, spacebar. Slide counter visible.
- **No speaker notes in the deck** — separate facilitator guide instead [IMPLEMENTED DIFFERENTLY: 79 speaker notes blocks were added using Reveal.js `<aside class="notes">`]

### Design Tokens (from JHD Astro project)
```css
--color-bg: #ffffff;
--color-text: #1a1a1a;
--color-primary: #0066ff;
--color-accent: #ffd700;
--color-border: #000000;
--border-base: 2px solid #000;
--border-thick: 3px solid #000;
--shadow-base: 6px 6px 0 0 rgba(0,0,0,0.12);
--radius: 0;
--font-display: "Epilogue", system-ui, sans-serif;
--font-body: "Plus Jakarta Sans", system-ui, sans-serif;
```

### Diagrams
All Scrum framework diagrams created as inline SVG in neobrutalist style:
- Scrum Framework overview (roles + events + artifacts flow)
- Sprint cycle diagram
- Empirical process (Transparency → Inspection → Adaptation)
- Cynefin framework (simplified)
- Agile Manifesto values
- Product Backlog → Sprint Backlog → Increment flow

### Print Views
- `?print` query param triggers Reveal.js print layout
- Facilitator guide: separate `facilitator.html` with `@media print` optimized
- Handouts: separate `handouts.html` with per-page layouts for:
  - Scrum Board template (Product Backlog | Sprint Backlog | Doing | Done)
  - Retrospective formats (Mad/Sad/Glad, 4Ls, Starfish)
  - "Getting Started with Scrum" canvas
  - Lego city backlog cards (art-school themed items)

---

## 4. Content Approach

### What we use from the original APS Murals
- **Exercise structures** — adapted for in-person with sticky notes
- **Topic ordering** — follows the same pedagogical flow
- **Sprint simulation format** — Planning → Build → Review → Retro

### What we create fresh
- **All slide content** — rewritten in our own words, not copied from Scrum.org
- **All diagrams** — original neobrutalist SVGs
- **Scrum Guide quotes** — used with CC BY-SA attribution (Ken Schwaber & Jeff Sutherland)
- **Art education framing** — examples and language tailored to non-technical creative team

### Branding
- No Scrum.org logo or APS marks
- Credit: "Based on the Scrum Guide (2020) by Ken Schwaber & Jeff Sutherland"
- Credit: "Lego exercise inspired by Lego4Scrum by Alexey Krivitsky (CC BY 3.0)"
- Slides branded as Jason's workshop, not a Scrum.org certification course

---

## 5. Physical Materials Checklist

| Item | Quantity | Cost |
|------|----------|------|
| LEGO Classic box (Medium 10696 or Large 10698) | 2 | ~$60-80 |
| Sticky notes (assorted colors) | 4-6 packs | ~$15 |
| Markers (thick, multiple colors) | 1 pack | ~$10 |
| Large paper / poster boards | 4-6 sheets | ~$10 |
| Printed facilitator guide | 1 copy | ~$5 |
| Printed handouts (per person) | 8 sets | ~$10 |
| **Total** | | **~$110-130** |

Room needs: projector, whiteboard with markers, tables for 2 teams, wall space for sticky notes.

---

## 6. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Theory sections run long | Strict timeboxing with visible timer. Parking lot for deep questions. |
| Lego Sprint 1 chaos | By design — debrief turns chaos into learning. |
| Presentation sprints generate too much discussion | Timebox reviews strictly. "Learning the process, not finishing the product." |
| Post-lunch energy dip | Physical activity (Lego/presentations) after lunch both days. No slides after lunch. |
| IP concerns (not a licensed PST) | No Scrum.org branding. Call it "Scrum Workshop." Scrum Guide is CC-licensed. |

---

## 7. File Structure

```
scrum_training/
  index.html          # Main slide deck (Reveal.js, self-contained)
  facilitator.html     # Printable facilitator guide
  handouts.html        # Printable exercise handouts
  docs/plans/          # Design & planning docs
```
[IMPLEMENTED DIFFERENTLY: index.html is the landing page; slides.html is the slide deck. Additional deliverables were built: intake-form.html and multiple handout files.]

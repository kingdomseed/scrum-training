# Scrum Training Slide Deck — Implementation Plan

> **Note:** This is a historical planning document. The final implementation diverged in several areas — see inline annotations marked [IMPLEMENTED DIFFERENTLY].

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a self-contained HTML slide deck and printable materials for a 2-day in-person Scrum workshop in JHD neobrutalist style.

**Architecture:** Single-file Reveal.js slide deck (`index.html`) with inlined CSS theme. [IMPLEMENTED DIFFERENTLY: Slide deck is slides.html; index.html is the landing page] Separate `facilitator.html` and `handouts.html` for print materials. All diagrams as inline SVG. No build step, no dependencies beyond CDN fonts.

**Tech Stack:** Reveal.js 5.x (CDN), HTML/CSS/SVG, Google Fonts (Epilogue + Plus Jakarta Sans)

**Design doc:** `docs/plans/2026-03-06-scrum-training-design.md`
**Findings:** `docs/plans/findings.md`
**Source text:** `/tmp/main_mural.txt`, `/tmp/slides.txt`, `/tmp/team_mural.txt`

---

## Task 1: Scaffold — Reveal.js with Neobrutalist Theme

**Files:**
- Create: `index.html` [IMPLEMENTED DIFFERENTLY: Slide deck is slides.html; index.html is the landing page]

**Step 1: Create the HTML scaffold**

Create `index.html` with:
- Reveal.js 5.x loaded from CDN (`https://cdn.jsdelivr.net/npm/reveal.js@5/`)
- Google Fonts: Epilogue (800, 900) + Plus Jakarta Sans (400, 600, 700)
- Custom CSS theme inlined in `<style>` using JHD design tokens:
  - `--color-bg: #ffffff`, `--color-text: #1a1a1a`, `--color-primary: #0066ff`
  - `--color-accent: #ffd700`, `--color-border: #000000`
  - `--shadow-base: 6px 6px 0 0 rgba(0,0,0,0.12)`
  - `--font-display: "Epilogue"`, `--font-body: "Plus Jakarta Sans"`
  - Zero border-radius everywhere
  - 2-3px black borders on cards/boxes
- Slide counter in bottom-right
- A title slide as placeholder: "Scrum Workshop" / "Jason Holt" / date
- A second test slide with a card element, heading, body text, and accent box to verify the theme

**Step 2: Verify in browser**

Run: `open index.html` (macOS)
Expected: Title slide displays with Epilogue font, black borders, no rounded corners. Second slide shows card with offset shadow. Arrow keys navigate between slides.

**Step 3: Verify print view**

Open: `index.html?print-pdf` in Chrome
Expected: Both slides visible in print layout

**Step 4: Commit**

```bash
git init && git add index.html && git commit -m "feat: scaffold Reveal.js deck with neobrutalist theme"
```

---

## Task 2: Day 1 Opening Slides — Kickoff Block (slides 1-8)

**Files:**
- Modify: `index.html`

**Step 1: Build the opening section slides**

Add slides for the Kickoff block (9:00-9:55):

1. **Title slide** — "Scrum Workshop" / Jason Holt, Scrum Master / Date / Art education company context
2. **Agenda overview** — Day 1 and Day 2 at a glance (use a two-column neobrutalist card layout)
3. **Working Agreements prompt** — "How do we want to work together?" / Instructions for sticky note exercise
4. **"Characteristics of a Great Team"** — Exercise prompt: "Think of an AMAZING team you were on. What made it great?" / Instructions: one item per sticky note
5. **Icebreaker/Introductions** — Simple prompt slide for going around the room

Use `<section>` tags for each slide. Use the neobrutalist card style for instruction boxes. Use accent yellow (`#ffd700`) backgrounds for exercise instruction cards.

**Step 2: Verify in browser**

Open `index.html`, navigate through slides 1-5.
Expected: Clean typography, exercise cards have yellow accent backgrounds with black borders and offset shadows.

**Step 3: Commit**

```bash
git add index.html && git commit -m "feat: add Day 1 kickoff slides (title, agenda, exercises)"
```

---

## Task 3: Fundamentals of Scrum Slides (slides 9-20)

**Files:**
- Modify: `index.html`

**Step 1: Build the Fundamentals section**

Add slides for the Fundamentals block (9:55-10:35):

6. **Section divider** — "Fundamentals of Scrum" (large display text, primary blue accent bar)
7. **Definition of Scrum** — Scrum Guide quote: "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems." Attribution footer.
8. **Agile Manifesto — 4 Values** — Four value pairs in a 2x2 grid of neobrutalist cards:
   - Individuals & Interactions > Processes & Tools
   - Working Product > Comprehensive Documentation
   - Customer Collaboration > Contract Negotiation
   - Responding to Change > Following a Plan
   Use bold for left side, muted for right side. Note: "while there is value in the items on the right, we value the items on the left more."
9. **Cynefin Framework** — Inline SVG diagram: 4 quadrants (Clear, Complicated, Complex, Chaotic) + Confusion center. Use primary blue for Complex (where Scrum lives), muted gray for others. Simple, bold lines.
10. **Empirical Process Control** — Inline SVG: Three pillars diagram. Transparency → Inspection → Adaptation. Neobrutalist style with black outlines and accent yellow highlights.
11. **Empiricism in Practice** — Brief bullet slide: "How do we apply empiricism? Through Scrum's events and artifacts." Bridge to next section.

**Step 2: Verify in browser**

Navigate through new slides. SVG diagrams should render inline with sharp black borders and flat colors matching the theme.

**Step 3: Commit**

```bash
git add index.html && git commit -m "feat: add Fundamentals slides (definition, manifesto, cynefin, empiricism)"
```

---

## Task 4: Exploring the Framework Slides (slides 21-35)

**Files:**
- Modify: `index.html`

**Step 1: Build the Framework section**

Add slides for the Framework block (10:50-11:30):

12. **Section divider** — "The Scrum Framework"
13. **Scrum Framework Overview** — Large inline SVG diagram showing:
    - Three accountabilities: Product Owner, Developers, Scrum Master (in colored boxes)
    - Sprint container with events inside: Sprint Planning → Daily Scrum → Sprint Review → Sprint Retrospective
    - Three artifacts: Product Backlog → Sprint Backlog → Increment
    - Commitments: Product Goal, Sprint Goal, Definition of Done
    - Clean flow arrows connecting elements
    - Neobrutalist style: black outlines, flat fills (primary blue for events, accent yellow for artifacts, white for roles)
14. **Product Owner** — Accountabilities from Scrum Guide (rewritten): Maximizes value, manages Product Backlog, represents stakeholders, communicates Product Goal
15. **Developers** — Accountabilities: Create Sprint plan (Sprint Backlog), instill quality (DoD), adapt plan daily toward Sprint Goal, hold each other accountable
16. **Scrum Master** — Accountabilities: Establishes Scrum, helps team understand theory/practices/values, focuses team on high-value Increments, removes impediments, ensures events are positive/productive/timeboxed
17. **The Sprint** — Container event. Fixed length (1 month or less). All work happens within Sprints.
18. **Sprint Events** — Overview card: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective. Brief purpose of each.
19. **Artifacts & Commitments** — Product Backlog (→ Product Goal), Sprint Backlog (→ Sprint Goal), Increment (→ Definition of Done). Three-column card layout.
20. **Definition of Done** — "A formal description of the state of the Increment when it meets the quality measures required for the product." Why it matters.

**Step 2: Verify in browser**

The Scrum Framework Overview SVG should be the centerpiece — clear, readable, and visually striking in the neobrutalist style.

**Step 3: Commit**

```bash
git add index.html && git commit -m "feat: add Framework slides (roles, events, artifacts, overview diagram)"
```

---

## Task 5: Lego4Scrum Simulation Slides (slides 36-45)

**Files:**
- Modify: `index.html`

**Step 1: Build the Lego simulation section**

Add slides for the Lego Setup and Sprint blocks:

21. **Section divider** — "Lego Sprint Simulation" (with a fun visual element — maybe a simple Lego brick SVG)
22. **The Product Vision** — "We are building an Art School Campus" / You (Jason) are the Product Owner / Teams are the Developers. Describe the vision in 3-4 bullet points about what the campus needs.
23. **Product Backlog** — Display the backlog items as sticky-note-style cards in a grid:
    - Art Studio (single story), Gallery (2-story), Main Building (2-story), Café/Shop, Outdoor Sculpture Garden (can be drawn), Walking Paths (can be drawn), Parking Area (can be drawn), Bridge/Entrance, Supply Storage, Amphitheater, Student Housing, Admin Office
    - Each card shows item name and relative size (1, 2, 3, 5, 8)
24. **Sprint Rules** — Timebox card: Planning (3-5 min) → Build (7 min) → Review (5-10 min) → Retro (5-8 min). "Hands off when time is up!"
25. **Sprint Planning** — Instruction slide: "Select items from the Product Backlog. How many can you commit to? Move items to your Sprint Backlog on the wall."
26. **Build!** — Large countdown-style slide. "7 MINUTES — GO!" (The actual timer can be shown on a phone/separate tab)
27. **Sprint Review** — "Step away from the Legos. Show me my campus! What is Done? What isn't?" PO feedback prompts.
28. **Sprint Retrospective** — Three prompts: "What went well?" / "What could improve?" / "What will we change next Sprint?" / "Select 1-3 actionable improvements."
29. **Lego Debrief Questions** — Discussion prompts for after all 3 sprints: What patterns emerged? How did teams improve? What surprised you? How does this connect to real work?

**Step 2: Verify in browser**

Backlog cards should look like styled sticky notes (accent yellow background, black border, offset shadow). Sprint Rules card should be visually prominent.

**Step 3: Commit**

```bash
git add index.html && git commit -m "feat: add Lego4Scrum simulation slides (vision, backlog, sprint instructions)"
```

---

## Task 6: Scrum Values & Day 1 Closing Slides (slides 46-52)

**Files:**
- Modify: `index.html`

**Step 1: Build Scrum Values and closing slides**

30. **Section divider** — "The Scrum Values"
31. **Five Scrum Values** — Display as five neobrutalist cards in a row or staggered grid:
    - **Commitment** — Personally committing to achieving the goals of the Scrum Team
    - **Focus** — Everyone focuses on the work of the Sprint and the goals of the Scrum Team
    - **Openness** — The Scrum Team and its stakeholders are open about the work and challenges
    - **Respect** — Scrum Team members respect each other as capable, independent people
    - **Courage** — Scrum Team members have the courage to do the right thing and work on tough problems
32. **Values Discussion** — "Connect each value to something you experienced during the Lego simulation." / Prompt for sticky notes or group discussion.
33. **Feedback Wall** — Exercise instruction: "Write on sticky notes: What surprised me / What I want to learn more / How this connects to our work"
34. **Day 1 Closing** — "Tomorrow: Apply Scrum to YOUR product" / Optional homework: Read the Scrum Guide (scrumguides.org, 13 pages) / Parking lot review
35. **Section divider** — "Day 2: Apply to Your Product"

**Step 2: Verify and commit**

```bash
git add index.html && git commit -m "feat: add Scrum Values and Day 1 closing slides"
```

---

## Task 7: Day 2 — Deeper Dive & Planning Slides (slides 53-65)

**Files:**
- Modify: `index.html`

**Step 1: Build Day 2 morning content slides**

36. **Day 2 Opening** — "Welcome Back" / Quick recap prompts / "What stuck with you overnight?"
37. **Sprint Events Flow** — Inline SVG: Sprint as a container with events flowing through it. Show the iterative loop. Connect to empiricism (each event = inspect + adapt opportunity).
38. **Self-Management** — What it means: teams decide WHO does WHAT and HOW. Signs of self-management. Scrum Guide quote.
39. **Collaboration & Cross-functionality** — T-shaped people concept. Why cross-functionality matters. Brief discussion prompt.
40. **Section divider** — "Planning with Scrum"
41. **Estimation** — "Estimation is a team activity, not a management tool." Relative sizing (T-shirt sizes: XS, S, M, L, XL). Interactive exercise: estimate real items from their domain.
42. **Product Backlog Refinement** — Ongoing activity, not an event. Adding detail, estimates, order. Up to 10% of Sprint capacity. [IMPLEMENTED DIFFERENTLY: Slides say "The Scrum Team decides how and when refinement is done" — no percentage mentioned, per 2020 Scrum Guide]
43. **Definition of "Ready"** — A PBI is "ready" when it can reasonably be completed within a Sprint. Attributes: clear, sized, testable.
44. **Monitoring Sprint Progress** — Sprint Backlog makes progress visible. Burndown/burnup charts (simple SVG example). Who monitors? Developers. Where? Daily Scrum.

**Step 2: Verify and commit**

```bash
git add index.html && git commit -m "feat: add Day 2 deeper dive and planning slides"
```

---

## Task 8: Day 2 — Presentation Sprint & Closing Slides (slides 66-80)

**Files:**
- Modify: `index.html`

**Step 1: Build presentation sprint and closing slides**

45. **Section divider** — "Presentation Sprint: Sell Your Vision" [IMPLEMENTED DIFFERENTLY: Renamed to "Product Sprint" with open format — spec, pitch, prototype, or whatever serves the product]
46. **The Challenge** — "Build a presentation that sells the vision of your product to stakeholders. You have 2 Sprints." / Teams create their own Product Backlog / A team member becomes Product Owner
47. **What to Include** — Prompt card: Problem statement, Value proposition, Target audience, How it works, Call to action. "Use paper, markers, poster boards. Phones for reference. Be creative."
48. **Presentation Sprint Planning** — Same structure as Lego but for creative work
49. **Work Time** — "20 MINUTES — CREATE!" (similar to Lego build slide)
50. **Presentation Sprint Review** — "Show what you have. Get feedback. Is it Done?"
51. **Presentation Sprint Retro** — Same retro format
52. **Final Presentations** — "Each team: 10-15 minutes to present. This is your final Sprint Review."
53. **Section divider** — "Getting Started with Scrum"
54. **"Should We Use Scrum?"** — Canvas exercise: What's not working now? What will happen if we don't change? What does the future look like? (Reference the original APS canvas from the Team Mural)
55. **Identify Your Scrum Team** — Who is the Product Owner? Scrum Master? Developers? Discussion prompts for each role: "What skills and traits are you looking for?"
56. **Appreciation Wall** — "Write a statement of appreciation about someone or about the workshop."
57. **Suggested Reading** — 4-6 book/resource cards: The Scrum Guide, Scrum: A Pocket Guide (Verheyen), Agile Estimating and Planning (Cohn), scrumguides.org, lego4scrum.com [IMPLEMENTED DIFFERENTLY: Final reading list includes Scrum Guide, Pocket Guide (Verheyen), and Sutherland's book only]
58. **Closing** — "Thank you" / Key takeaway / Attribution: "Based on the Scrum Guide (2020) by Ken Schwaber & Jeff Sutherland" / "Lego exercise inspired by Lego4Scrum by Alexey Krivitsky (CC BY 3.0)"

**Step 2: Verify and commit**

```bash
git add index.html && git commit -m "feat: add Day 2 presentation sprint and closing slides"
```

---

## Task 9: Facilitator Guide

**Files:**
- Create: `facilitator.html`

**Step 1: Build the facilitator guide**

Create `facilitator.html` — a printable HTML document (not a slide deck) with:
- Same Google Fonts (Epilogue + Plus Jakarta Sans)
- Clean print-optimized layout (`@media print` with page breaks)
- Neobrutalist styling (borders, shadows) but optimized for paper

Content organized by time blocks from the design doc schedule:

**Day 1:**
For each block, include:
- Time and duration
- What to say/do (talking points, not a script)
- Exercise setup instructions (what materials, how to facilitate)
- Transition notes ("After this, move to...")
- Facilitator tips (from Lego4Scrum guide: "Sprint 1 will be chaos — that's OK", "As PO, reject most Sprint 1 work", etc.)

**Day 2:**
Same format. Include:
- Presentation sprint facilitation notes
- "Getting Started" canvas facilitation
- Closing ceremony flow

**Footer:** Page numbers, "Scrum Workshop — Facilitator Guide"

**Step 2: Verify print**

Open in Chrome → Print → Check page breaks are clean, timing table is readable.

**Step 3: Commit**

```bash
git add facilitator.html && git commit -m "feat: add printable facilitator guide"
```

---

## Task 10: Printable Handouts

**Files:**
- Create: `handouts.html`

**Step 1: Build the handouts page**

Create `handouts.html` — a multi-page printable document with:
- Same fonts and neobrutalist styling, print-optimized
- Each handout on its own page (`page-break-after: always`)

**Handout 1: Scrum Board Template**
- Four columns: Product Backlog | Sprint Backlog | Doing | Done
- Grid lines for sticky note placement
- Space for Sprint Goal at top
- Space for Definition of Done at bottom

**Handout 2: Lego City Backlog Cards**
- Art-school themed items with relative sizes
- Cut-along-dotted-lines format (4 cards per row)
- Items: Art Studio (2), Gallery (5), Main Building (5), Café (3), Sculpture Garden (2), Walking Paths (1), Parking (2), Bridge/Entrance (3), Supply Storage (2), Amphitheater (8), Student Housing (5), Admin Office (3)

**Handout 3: Retrospective Formats**
- Three formats on one page:
  - Mad / Sad / Glad (3 columns)
  - 4 L's: Liked / Learned / Lacked / Longed For (4 quadrants)
  - Starfish: Keep / More of / Less of / Stop / Start (5 sections)

**Handout 4: "Getting Started with Scrum" Canvas**
- Boxes to fill in (from the original APS Team Mural):
  - "What is not working for us now?"
  - "What will happen if we don't change?"
  - "What do you want the future to look like?"
  - "Who will be the Product Owner?"
  - "Who will be the Scrum Master?"
  - "Who will be the Developers?"
  - "What work/product will we start with?"
  - "Who can support us and how?"

**Step 2: Verify print**

Open in Chrome → Print → Each handout should be on its own page, clean and readable.

**Step 3: Commit**

```bash
git add handouts.html && git commit -m "feat: add printable handouts (scrum board, backlog cards, retro formats, canvas)"
```

---

## Task 11: Polish & Print View

**Files:**
- Modify: `index.html`

**Step 1: Add print CSS to slide deck**

Add `@media print` styles to `index.html`:
- Clean background (no gradients)
- Black text on white
- One slide per page
- Hide navigation controls

**Step 2: Cross-check all SVG diagrams**

Verify all inline SVGs render correctly:
- Scrum Framework Overview
- Cynefin
- Empirical Process pillars
- Sprint Events Flow
- Burndown example

**Step 3: Responsive check**

Verify slides look good at common projector resolutions (1024x768, 1920x1080).

**Step 4: Final commit**

```bash
git add -A && git commit -m "feat: add print styles and polish SVG diagrams"
```

---

## Task 12: Content Review & Attribution

**Files:**
- Modify: `index.html`
- Modify: `facilitator.html`
- Modify: `handouts.html`

**Step 1: Review all Scrum Guide quotes**

Verify every Scrum Guide quote has proper attribution:
"— Scrum Guide (2020), Ken Schwaber & Jeff Sutherland"

**Step 2: Review for Scrum.org IP**

Confirm:
- No Scrum.org logos or branding
- No "APS" or "Professional Scrum" certification language
- No copyrighted slide content reproduced verbatim
- Lego4Scrum credited (CC BY 3.0, Alexey Krivitsky)

**Step 3: Verify exercise instructions are complete**

Each exercise slide should have:
- Clear instructions
- Time allocation
- What materials are needed
- What the output/deliverable is

**Step 4: Final commit**

```bash
git add -A && git commit -m "chore: verify attributions and content completeness"
```

---

## Execution Notes

- **No TDD** — This is an HTML presentation, not software. "Testing" = opening in browser and verifying visually.
- **Content is a first draft** — Jason will review and adjust content to match his teaching style. Focus on getting the structure, design, and diagrams right.
- **SVG diagrams are the hardest part** — The Scrum Framework Overview diagram will take the most effort. Keep it clean and simple.
- **Single-file approach** — Everything inlined in each HTML file for maximum portability. No npm, no build step.
- **Slide count target** — ~60-80 slides total. If it goes over 80, consolidate. Less is more for in-person teaching.

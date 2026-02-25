# FAQ Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Move the FAQ section from the landing page into a standalone `faq.html` with category tabs and accordion.

**Architecture:** Standalone HTML page (`faq.html`) at project root, reusing same CDN stack (Tailwind v4, DaisyUI v5, Mithril.js) and shared `assets/css/styles.css`. Page-specific Mithril components (FAQPage with category tabs + accordion) are defined inline in a `<script>` block. The landing page FAQ section is removed entirely and all nav links updated.

**Tech Stack:** HTML5, Mithril.js v2, Tailwind CSS v4 (CDN), DaisyUI v5, shared `styles.css`

---

### Task 1: Create `faq.html` with full page structure

**Files:**
- Create: `faq.html`

**Step 1: Create the HTML file**

Create `faq.html` at project root with:
- Same `<head>` as `index.html` (Tailwind CDN, DaisyUI, styles.css, theme FOUC prevention script, fonts)
- Updated `<title>`: "FAQ — AgenticJunior"
- Updated `<meta name="description">` for FAQ page
- Updated `<link rel="canonical">` to `https://agentic-junior.com/faq.html`
- Schema.org `FAQPage` JSON-LD structured data
- Same navbar as landing but with FAQ link active and all anchor links (`#features`, `#skills`, `#pricing`) prefixed with `/` so they link back to landing
- Compact hero section (py-16, not full height) with:
  - Breadcrumb: Home > FAQ
  - Title: "Frequently Asked **questions**" (gradient-text on "questions", matching landing style)
- Mount point `<div id="faq-page"></div>` for the Mithril component
- Noscript fallback with all 9 questions as native `<details>` grouped by category
- Contact CTA card: "Still have questions?" with email link and button
- Same footer as landing (with FAQ link pointing to `faq.html` and other links back to `/`)
- Mithril.js `<script>` tag + inline JS (see Task 2)

The navbar should look identical to the landing's navbar (`index.html:94-131`). Key differences:
- Logo `<a href="/">` (links back to landing)
- Desktop nav links: `href="/#features"`, `href="/#skills"`, `href="/#pricing"`, `href="faq.html"` (current page)
- FAQ link should have visual indicator of current page (add `text-primary` class)
- CTA button: `href="/#pricing"`
- Mobile nav mount points: `<div id="mobile-nav">`, `<div id="mobile-nav-overlay">`

**Step 2: Verify the page renders**

Open `faq.html` in a browser. Confirm:
- Theme toggle works (dark/light)
- Navbar renders correctly with logo linking to `/`
- Footer renders correctly
- Breadcrumb shows "Home > FAQ"
- Hero title displays with gradient text

**Step 3: Commit**

```bash
git add faq.html
git commit -m "feat: add faq.html page structure with navbar, footer, and hero"
```

---

### Task 2: Add FAQ Mithril components (category tabs + accordion)

**Files:**
- Modify: `faq.html` (inline `<script>` block before `</body>`)

**Step 1: Write the inline JS**

After the Mithril CDN `<script>` tag, add an inline `<script>` with:

1. **Theme toggle, mobile nav** — Copy `ThemeToggle`, `MobileNav`, `MobileNavOverlay`, `closeMobileNav`, `toggleMobileNav` from `assets/js/app.js:5-110`. Update the mobile nav links array to use `/#features`, `/#skills`, `/#pricing`, `faq.html`.

2. **FAQ data with categories** — Define `faqCategories` array:

```javascript
var faqCategories = [
  {
    id: "security",
    label: "Security & Privacy",
    items: [
      {
        q: "How does AgenticJunior protect my data?",
        a: "Your data is encrypted at rest, isolated per user with PostgreSQL Row-Level Security, and automatically cleaned up based on your retention settings. We don't use your data for model training. Ever."
      },
      {
        q: "What happens to my data if I cancel?",
        a: "Your data is automatically cleaned up according to your tier's retention policy. When you cancel, remaining data is purged within 30 days. You can request immediate deletion at any time."
      }
    ]
  },
  {
    id: "billing",
    label: "Billing",
    items: [
      {
        q: "How does billing work?",
        a: "AgenticJunior is currently in free beta \u2014 no credit card required. When billing launches, all plans will be billed monthly with no long-term commitment. You'll be able to upgrade, downgrade, or cancel at any time."
      }
    ]
  },
  {
    id: "features",
    label: "Features & Integrations",
    items: [
      {
        q: "What integrations are supported?",
        a: "AgenticJunior connects with Gmail, Google Calendar, GitHub, and Telegram. It supports voice message transcription and a Skills Marketplace with pre-built skills like PDF reading, web research, and more. Slack, Microsoft Teams, and WhatsApp are on our roadmap and coming soon."
      },
      {
        q: "What is the Skills Marketplace?",
        a: "The Skills Marketplace is a curated collection of pre-built capabilities you can add to your AgenticJunior with one click. Skills include PDF reading, spreadsheet analysis, web research, meeting notes generation, and more. All skills are vetted for security and quality. Available on Pro and Ultimate plans."
      },
      {
        q: "Is there an API for developers?",
        a: "The Ultimate plan includes webhooks API, scheduled jobs, custom prompts (triggered via /command), and custom agents (triggered via @agent). These let you integrate AgenticJunior into your own workflows and automate recurring tasks programmatically."
      },
      {
        q: "Why no shell access or browser automation?",
        a: "Because security is a design choice, not a tradeoff. We deliberately exclude shell access and browser automation \u2014 not because we can't build them, but because in a multi-tenant environment, your safety matters more than a feature checklist. What AgenticJunior can't do is just as important as what it can."
      }
    ]
  },
  {
    id: "general",
    label: "General",
    items: [
      {
        q: "How is this different from self-hosted alternatives?",
        a: "Self-hosted solutions require you to manage infrastructure, security patches, and updates. AgenticJunior gives you the same productivity benefits with zero DevOps overhead, proper multi-user isolation, and enterprise integrations built in."
      },
      {
        q: "Can I use AgenticJunior with my team?",
        a: "Yes! AgenticJunior is built as a multi-tenant platform from the ground up. Each user gets their own isolated workspace with proper security boundaries. Team plans with shared features are coming soon."
      }
    ]
  }
];
```

3. **FAQPage component** — Mithril component with:
   - State: `activeCategory` (default `"all"`) and `openIndex` (default `-1`, tracks which question is open as a global index across all visible items)
   - Category tabs rendered as a flex row of buttons with DaisyUI `btn btn-sm` styling. Active tab uses `btn-primary`, inactive uses `btn-ghost`. "All" tab is the first one.
   - When a category tab is clicked, set `activeCategory` and reset `openIndex` to `-1`
   - Filtered categories: if `activeCategory === "all"`, show all; otherwise filter to matching category
   - For each visible category, render:
     - Category header: `<h3>` with `font-display text-lg font-bold text-base-content/50 mb-3 mt-8` (skip `mt-8` for first)
     - Accordion items using same pattern as `FAQAccordion` in `app.js:114-149` (bg-base-200, rounded-2xl, chevron, animated expand)
   - Global index tracking: maintain a running counter across categories so each item has a unique index for open/close state
   - On `oninit`, check `window.location.hash` — if it matches a category id (e.g., `#billing`), set `activeCategory` to that id

4. **Mount components** — In an `init()` function:
   - Mount `ThemeToggle` to `#theme-toggle`
   - Mount `MobileNav` to `#mobile-nav`
   - Mount `MobileNavOverlay` to `#mobile-nav-overlay`
   - Mount `FAQPage` to `#faq-page`
   - Call `initScrollReveal()` (copy the IntersectionObserver logic from `app.js:260-280` for `.reveal` elements)

**Step 2: Verify in browser**

Open `faq.html` in browser. Confirm:
- "All" tab shows all 9 questions grouped by category
- Clicking a category tab filters to only that category's questions
- Clicking a question expands it with smooth animation
- Only one question open at a time
- `faq.html#billing` loads with billing tab active
- Theme toggle works
- Mobile nav works with correct links

**Step 3: Commit**

```bash
git add faq.html
git commit -m "feat: add FAQ category tabs and accordion components"
```

---

### Task 3: Remove FAQ from landing page

**Files:**
- Modify: `index.html:121` (navbar FAQ link)
- Modify: `index.html:729-784` (remove FAQ section + preceding divider)
- Modify: `index.html:813` (footer FAQ link)

**Step 1: Update navbar FAQ link**

In `index.html:121`, change:
```html
<a href="#faq" class="text-sm font-semibold hover:text-primary transition-colors">FAQ</a>
```
to:
```html
<a href="faq.html" class="text-sm font-semibold hover:text-primary transition-colors">FAQ</a>
```

**Step 2: Remove the FAQ section**

Delete `index.html` lines 729-784 (the section-divider before FAQ through the end of the FAQ section including its closing `</section>` tag and the divider after it).

Specifically remove:
- Line 730: `<div class="section-divider" aria-hidden="true"></div>`
- Lines 731-782: The entire `<section id="faq">...</section>`
- Line 784: `<div class="section-divider" aria-hidden="true"></div>`

Keep the Footer CTA section that follows.

**Step 3: Update footer FAQ link**

In `index.html:813`, change:
```html
<li><a href="#faq" class="link link-hover text-sm">FAQ</a></li>
```
to:
```html
<li><a href="faq.html" class="link link-hover text-sm">FAQ</a></li>
```

**Step 4: Verify in browser**

Open `index.html`. Confirm:
- No FAQ section visible on the page
- Navbar "FAQ" link navigates to `faq.html`
- Footer "FAQ" link navigates to `faq.html`
- Page flow goes from Pricing → Footer CTA → Footer smoothly

**Step 5: Commit**

```bash
git add index.html
git commit -m "feat: remove FAQ section from landing, link to faq.html"
```

---

### Task 4: Clean up app.js (remove FAQ data and mount)

**Files:**
- Modify: `assets/js/app.js:84-85` (mobile nav links)
- Modify: `assets/js/app.js:113-150` (FAQAccordion component — remove)
- Modify: `assets/js/app.js:584-622` (faqData array — remove)
- Modify: `assets/js/app.js:644-645` (FAQ mount — remove)

**Step 1: Update mobile nav links**

In `assets/js/app.js:81-86`, change the links array:
```javascript
var links = [
  { href: "#features", label: "Features" },
  { href: "#skills", label: "Skills" },
  { href: "#pricing", label: "Pricing" },
  { href: "faq.html", label: "FAQ" }
];
```

**Step 2: Remove FAQAccordion component**

Delete `assets/js/app.js:113-150` (the `var FAQAccordion = { ... };` block).

**Step 3: Remove faqData array**

Delete `assets/js/app.js:584-622` (the `// ---- FAQ Data ----` comment through the closing `];`).

**Step 4: Remove FAQ mount**

Delete `assets/js/app.js:644-645`:
```javascript
var faqEl = document.getElementById("faq-accordion");
if (faqEl) m.mount(faqEl, { view: function () { return m(FAQAccordion, { items: faqData }); } });
```

**Step 5: Verify in browser**

Open `index.html`. Open browser console. Confirm:
- No JavaScript errors
- Mobile nav "FAQ" link navigates to `faq.html`
- All other Mithril components still work (theme toggle, mobile nav, hero rotators, carousel)

**Step 6: Commit**

```bash
git add assets/js/app.js
git commit -m "refactor: remove FAQ accordion and data from app.js"
```

---

### Task 5: Update sitemap.xml

**Files:**
- Modify: `sitemap.xml`

**Step 1: Add FAQ page to sitemap**

Add a new `<url>` entry for the FAQ page:
```xml
<url>
  <loc>https://agentic-junior.com/faq.html</loc>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

**Step 2: Commit**

```bash
git add sitemap.xml
git commit -m "chore: add faq.html to sitemap"
```

---

### Task 6: Final visual QA

**Files:** None (verification only)

**Step 1: Cross-page navigation check**

1. Open `index.html` — click navbar "FAQ" → should open `faq.html`
2. On `faq.html` — click logo → should go back to `/`
3. On `faq.html` — click "Features" → should go to `/#features`
4. On `faq.html` — click footer "FAQ" → should stay on `faq.html`
5. On `faq.html` — theme toggle should persist across pages

**Step 2: Hash navigation**

1. Open `faq.html#security` → Security tab should be active
2. Open `faq.html#billing` → Billing tab should be active
3. Open `faq.html` (no hash) → "All" tab should be active

**Step 3: Responsive check**

1. Resize to mobile width — hamburger menu should work on both pages
2. Mobile nav on `faq.html` should link back to landing sections correctly

**Step 4: Accessibility**

1. Tab through FAQ page — focus indicators visible
2. Accordion buttons have `aria-expanded`
3. Reduced motion: disable animations in OS → page still usable

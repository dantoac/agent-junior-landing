# FAQ Page Design

**Date:** 2026-02-21
**Status:** Approved

## Decision

Move the FAQ section from the landing page to a standalone `faq.html` with category tabs and accordion.

## Design

### Page: `faq.html`

- Standalone HTML file reusing same stack (Tailwind v4 CDN, DaisyUI v5, Mithril.js, shared styles.css)
- Same navbar (logo links to `/`), theme toggle, and footer as landing
- Compact hero (py-16) with title "Frequently Asked Questions" and breadcrumb
- Category filter tabs: All | Security & Privacy | Billing | Features & Integrations | General
- Accordion grouped by category (reuses existing FAQAccordion component pattern)
- Contact CTA card at bottom (email + button)
- Noscript fallback with native `<details>` elements
- Schema.org FAQPage structured data for SEO
- URL hash support (`faq.html#billing` scrolls to category)

### Categories

| Category | Questions |
|---|---|
| Security & Privacy | Data protection, Data on cancel |
| Billing | How billing works |
| Features & Integrations | Integrations, Skills Marketplace, API, No shell access |
| General | vs Self-hosted, Teams |

### Landing page changes

- Remove `#faq` section entirely (HTML lines 730-782)
- Update navbar link: `#faq` -> `faq.html`
- Update mobile nav links in app.js
- Update footer link: `#faq` -> `faq.html`
- Move `faqData` array to faq.html's own JS

### Not included

- Search/filter (unnecessary for 9 questions)
- Sidebar navigation (overkill for current content volume)

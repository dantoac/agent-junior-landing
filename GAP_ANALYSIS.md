# AgentJunior - Gap Analysis & Product Vision

**Version**: 1.0
**Date**: 2026-02-15
**Status**: Active
**Context**: Positioning AgentJunior as a multi-tenant SaaS alternative to self-hosted AI assistants (e.g., OpenClaw)

---

## Executive Summary

AgentJunior is a multi-tenant AI assistant platform targeting productivity-focused users who want managed infrastructure, enterprise integrations, and curated capabilities without the complexity of self-hosting.

**Current completion**: ~70% of SaaS-relevant features
**Key differentiator**: Multi-tenant architecture with proper isolation, enterprise channels, curated tools

---

## What We Are NOT Building

These features are intentionally excluded as they don't fit a multi-tenant SaaS model:

| Feature | Reason for Exclusion |
|---------|---------------------|
| Shell/terminal access | Security risk in multi-tenant environment |
| File system read/write | Users don't have a filesystem in SaaS |
| Browser automation | Isolation/security issues, unclear ownership |
| Infinite memory | Storage costs, GDPR concerns, unnecessary |
| Smart home integration | Different product category |
| Niche chat platforms (Matrix, Signal, iMessage, Google Chat) | Fragmented market, low ROI |
| Self-hosted deployment | Different market segment (enterprise self-hosted would be separate product) |
| Local/self-hosted LLMs | Not relevant for managed SaaS |
| Community skill marketplace (unvetted) | Security burden, quality control issues |

---

## Current State (as of 2026-02-15)

### Fully Implemented (Production-Ready)

| Component | Status | Notes |
|-----------|--------|-------|
| **6 Core Agents** | 100% | Email, Calendar, Tasks, Contacts, GitHub, Content Creator |
| **Multi-tenancy (RLS)** | 100% | PostgreSQL Row-Level Security |
| **OAuth Integrations** | 100% | Gmail, Calendar, GitHub |
| **Tier Gating** | 100% | Enforced at orchestrator level |
| **Usage Tracking** | 100% | Per-agent metrics, monthly aggregates |
| **Frontend CRUD** | 90% | Tasks, Contacts, GitHub (tabbed UI), Email, Calendar |
| **Rate Limiting** | 90% | Redis-backed sliding window |
| **CI/CD + Deployment** | 100% | GitHub Actions + DO Apps auto-deploy |
| **Conversation Management** | 100% | History, sessions, 48hr auto-expiry |

### Partially Implemented

| Component | Status | Gap |
|-----------|--------|-----|
| Telegram Bot | 70% | Infrastructure ready, needs env vars + testing |
| Frontend Tests | 0% | No test coverage |

### Not Started

| Component | Priority | Notes |
|-----------|----------|-------|
| Stripe Billing | Critical | Required for monetization |
| Slack Integration | Critical | Enterprise market |
| WhatsApp Business | Critical | Global mobile reach |
| Email Inbound Interface | High | Async workflows |
| User Custom Prompts | High | Personalization |
| User Custom Agents | High | Differentiation |
| Scheduled Actions | Medium | Daily summaries, reminders |
| First-Party Tools (MCP) | Medium | PDF reader, webhooks |
| Claude as Alternative Model | Low | User preference |

---

## Critical Gaps (Priority Order)

| # | Gap | Impact | Effort | Description |
|---|-----|--------|--------|-------------|
| 1 | **Stripe Billing** | Critical | Medium | Subscribe, cancel, upgrade, webhooks, billing UI |
| 2 | **Slack Integration** | Critical | Medium | OAuth, event subscriptions, message routing |
| 3 | **WhatsApp Business** | Critical | Medium | Business API, message templates, media handling |
| 4 | **Email Inbound** | High | Medium | SendGrid/Mailgun inbound parse, user routing |
| 5 | **User Custom Prompts** | High | Low | CRUD API + UI for reusable prompt templates |
| 6 | **User Custom Agents** | High | Medium | Mini-agents with custom system prompts |
| 7 | **Scheduled Actions** | Medium | Low | "Send agenda at 8am", reminder notifications |
| 8 | **Tiered Memory Retention** | Medium | Low | Starter: 24hr, Pro: 7d, Ultimate: 30d |
| 9 | **First-Party Tools** | Medium | Medium | PDF reader, webhook trigger, Slack notifier |
| 10 | **Claude Alternative** | Low | Low | Anthropic as secondary model option |

---

## Channel Strategy

### Target Channels (Business-Relevant)

| Channel | Priority | Status | Rationale |
|---------|----------|--------|-----------|
| Web | Core | Done | Primary interface |
| Telegram | High | 70% | Global, mobile-first |
| Email (inbound) | High | 0% | Async workflows, enterprise |
| Slack | Critical | 0% | #1 enterprise productivity tool |
| WhatsApp Business | Critical | 0% | 2B users, global mobile reach |
| Microsoft Teams | High | 0% | Enterprise market |
| Discord | Low | 0% | Niche (dev communities) |

### Excluded Channels

- Matrix (too niche)
- Signal (no business API)
- iMessage (Apple ecosystem lock-in)
- Google Chat (low adoption)

---

## Memory Strategy

### Tiered Retention (Recommended)

| Tier | Conversation TTL | Rationale |
|------|------------------|-----------|
| Starter | 24 hours | Basic needs, cost control |
| Pro | 7 days | Professional workflows |
| Ultimate | 30 days | Power users, complex projects |

### Additional Memory Features

| Feature | Priority | Description |
|---------|----------|-------------|
| Agent Memory | Medium | User preferences, recurring patterns (table exists, unused) |
| Pinned Context | Medium | User-defined notes the agent always sees |
| Semantic Search | Low | Vector DB for memory retrieval (post-MVP) |

**No infinite memory** - storage costs, GDPR compliance, practical limits.

---

## Extensibility Strategy

### Approach: Curated Over Chaos

| Feature | Priority | Notes |
|---------|----------|-------|
| User Custom Prompts | High | Reusable templates with variables |
| User Custom Agents | High | Custom system prompts, subset of platform tools |
| First-Party Tools (MCP) | Medium | 10-15 well-built tools covering 90% of use cases |
| Community Marketplace | Low/Later | Heavy vetting required, security burden |
| OpenClaw Skill Import | Skip | Not worth compatibility effort |

### Planned First-Party Tools

| Tool | Tier | Description |
|------|------|-------------|
| PDF Reader | Pro+ | Extract and summarize PDF content |
| Webhook Trigger | Pro+ | Fire webhooks from agent actions |
| Slack Notifier | Pro+ | Send Slack messages from workflows |
| Invoice Generator | Ultimate | Create PDF invoices from chat |
| Spreadsheet Agent | Pro+ | Read/analyze Google Sheets |

---

## Automation Strategy (SaaS-Safe)

| Feature | Priority | Description |
|---------|----------|-------------|
| Scheduled Summaries | High | Daily agenda at configurable time |
| Reminder Notifications | High | "Remind me about X in 2 hours" |
| Webhook Triggers (outbound) | Medium | Notify external systems on events |
| Email/Calendar Triggers | Medium | "When email from X, create task" |
| Proactive Notifications | Medium | Meeting reminders, deadline alerts |

**Explicitly excluded**: Shell commands, browser automation, file system access.

---

## Multi-Model Strategy

| Model | Status | Role |
|-------|--------|------|
| OpenAI GPT-4o-mini | Primary | Routing, parsing, drafting |
| OpenAI GPT-4o | Secondary | Content creation, complex reasoning |
| Anthropic Claude | Planned | Alternative for user preference |

**No local models** - managed SaaS doesn't need Ollama/self-hosted LLMs.

---

## Competitive Positioning

### AgentJunior vs Self-Hosted (OpenClaw, etc.)

| Aspect | Self-Hosted | AgentJunior |
|--------|-------------|-------------|
| Setup | Complex, technical | Zero setup |
| Infrastructure | User manages | Fully managed |
| Security | User responsibility | Platform handles |
| Updates | Manual | Automatic |
| Channels | Many (11+) | Focused (5-6 business-relevant) |
| Extensibility | Unlimited (risky) | Curated (secure) |
| Memory | Infinite (local) | Tiered (GDPR-friendly) |
| Multi-user | No | Yes (multi-tenant) |
| Enterprise ready | No | Yes (Slack, Teams, SSO planned) |
| Cost | Free + infra | $5-15/mo managed |

### Target Users

1. **Professionals** who want AI assistance without DevOps
2. **Small teams** needing shared assistant with proper isolation
3. **Enterprise users** requiring Slack/Teams integration
4. **Mobile-first users** preferring WhatsApp/Telegram over web
5. **Privacy-conscious users** wanting managed GDPR compliance

---

## Implementation Roadmap

### Phase 1: Monetization Foundation (2-3 weeks)
- [ ] Stripe billing (subscribe, cancel, upgrade, webhooks)
- [ ] Billing UI (pricing page, checkout, management)
- [ ] Complete Telegram bot (test end-to-end)

### Phase 2: Enterprise Channels (3-4 weeks)
- [ ] Slack App (OAuth, event subscriptions, message handling)
- [ ] Inbound email interface (SendGrid/Mailgun)
- [ ] WhatsApp Business API integration

### Phase 3: Personalization (2-3 weeks)
- [ ] User custom prompts (CRUD API + UI)
- [ ] User custom agents (CRUD API + UI)
- [ ] Tiered memory retention (24hr/7d/30d)
- [ ] Pinned context feature

### Phase 4: Automation & Tools (2-3 weeks)
- [ ] Scheduled actions (daily summary, reminders)
- [ ] First-party tools: PDF reader, webhook trigger
- [ ] Claude as alternative model option

---

## Success Metrics

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Paying users | 400 | 6 months post-launch |
| MRR | $3,500+ | 6 months post-launch |
| Slack-connected users | 30% | 6 months post-launch |
| WhatsApp-connected users | 40% | 6 months post-launch |
| Custom prompts created | 2+ per Pro/Ultimate user | 3 months post-launch |
| Monthly churn | <10% | Ongoing |

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-02-15 | Initial gap analysis based on OpenClaw comparison |


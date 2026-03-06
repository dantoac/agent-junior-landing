/* ============================================
   AgenticJunior — Internationalization (i18n)
   Synchronous dictionary: EN / ES
   ============================================ */
(function () {
  "use strict";

  var translations = {
    en: {
      // -- Meta --
      "meta.title": "AgenticJunior — Your AI Chief of Staff. Managed, Secure, Ready.",
      "meta.description": "AgenticJunior handles your email, calendar, tasks, and more — so you can focus on what matters. No setup, no servers, no complexity.",

      // -- A11y --
      "a11y.skipLink": "Skip to main content",
      "a11y.navLabel": "Main navigation",
      "a11y.navMenuLabel": "Navigation menu",
      "a11y.openMenu": "Open navigation menu",
      "a11y.closeMenu": "Close navigation menu",
      "a11y.themeToggle.dark": "Switch to light mode",
      "a11y.themeToggle.light": "Switch to dark mode",
      "a11y.langToggle.en": "Cambiar a español",
      "a11y.langToggle.es": "Switch to English",
      "a11y.slide": "Slide",
      "a11y.faqCategories": "FAQ categories",

      // -- Nav --
      "nav.features": "Features",
      "nav.skills": "Skills",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.getStarted": "Get Started",

      // -- Hero --
      "hero.headline": "Your AI chief of staff.",
      "hero.headlineAccent": "Managed, Secure, Ready.",
      "hero.soYouCan": "— so you can",
      "hero.tagline": "No setup, no servers, no complexity.",
      "hero.ctaPrimary": "Get Started Free",
      "hero.ctaSecondary": "See How It Works",
      "hero.features": [
        "manages your inbox",
        "schedules your meetings",
        "tracks your deadlines",
        "organizes your contacts",
        "handles your GitHub issues",
        "drafts your content",
        "triages your notifications",
        "plans your day",
        "remembers what you forget",
        "does the boring stuff",
        "parses your documents",
        "takes encrypted notes",
        "transcribes your voice messages",
        "automates your routines"
      ],
      "hero.benefits": [
        "focus on what matters",
        "take longer lunches",
        "actually enjoy Mondays",
        "stop forgetting birthdays",
        "pretend you have a secretary",
        "finally reply to that email from 2024",
        "nap between meetings",
        "tell your boss you're 'delegating'",
        "touch grass once in a while",
        "finish work on time",
        "stop copy-pasting from PDFs",
        "automate the repetitive stuff"
      ],

      // -- Problem --
      "problem.headline": "Managing email, calendar, and tasks",
      "problem.headlineSub": "shouldn't be a full-time job",
      "problem.inboxTitle": "Inbox overload",
      "problem.inboxDesc": "Hours spent sorting, reading, and responding to emails that could be triaged automatically.",
      "problem.calendarTitle": "Calendar chaos",
      "problem.calendarDesc": "Back-to-back meetings, double bookings, and forgotten follow-ups drain your mental energy.",
      "problem.tasksTitle": "Task fragmentation",
      "problem.tasksDesc": "Action items scattered across apps, chats, and sticky notes — nothing gets tracked properly.",

      // -- Features --
      "features.headline": "Eight agents.",
      "features.headlineAccent": "One assistant.",
      "features.subtitle": "Specialized AI agents that work together to manage your digital life.",
      "features.email.title": "Email Agent",
      "features.email.desc": "Reads, classifies, and drafts email responses. Smart triage so you only see what matters.",
      "features.calendar.title": "Calendar Agent",
      "features.calendar.desc": "Schedules meetings, avoids conflicts, and sends daily agenda summaries in plain English.",
      "features.tasks.title": "Tasks Agent",
      "features.tasks.desc": "Extracts action items from emails and chats. Tracks deadlines and sends reminders.",
      "features.contacts.title": "Contacts Agent",
      "features.contacts.desc": "Keeps your network organized. Quick lookups, relationship notes, and contact enrichment.",
      "features.github.title": "GitHub Agent",
      "features.github.desc": "Manages issues, reviews PRs, and queries your repos. Your dev workflow, streamlined.",
      "features.content.title": "Content Creator",
      "features.content.desc": "Drafts posts, summaries, and documents. From quick replies to long-form content.",
      "features.notes.title": "Notes Agent",
      "features.notes.desc": "Encrypted notes with tags, pinning, and search. Discovers related notes automatically.",
      "features.files.title": "Files Agent",
      "features.files.desc": "Parse PDFs, analyze spreadsheets, and extract data from documents.",
      "features.channels": "Works where you work",

      // -- Badges --
      "badge.pro": "Pro",
      "badge.ultimate": "Ultimate",
      "badge.comingSoon": "Coming soon",
      "badge.popular": "Popular",

      // -- Skills --
      "skills.headline": "Extend with",
      "skills.headlineAccent": "Skills",
      "skills.subtitle": "A curated marketplace of pre-built skills. One-click install, instant productivity.",
      "skills.pdfReader.title": "PDF Reader",
      "skills.pdfReader.desc": "Extract and summarize content from PDF documents.",
      "skills.spreadsheet.title": "Spreadsheet Agent",
      "skills.spreadsheet.desc": "Analyze CSV and Excel files with natural language queries.",
      "skills.webResearch.title": "Web Research",
      "skills.webResearch.desc": "Search the web and summarize findings on any topic.",
      "skills.meetingNotes.title": "Meeting Notes Generator",
      "skills.meetingNotes.desc": "Turn meeting recordings into structured notes and action items.",
      "skills.youtube.title": "YouTube Transcription",
      "skills.youtube.desc": "Transcribe and summarize YouTube videos automatically.",
      "skills.moreSoon.title": "More coming soon",
      "skills.moreSoon.desc": "New skills added regularly to the marketplace.",

      // -- Why --
      "why.headline": "Why",
      "why.subtitle": "Security isn't a feature. It's the foundation.",
      "why.desc": "Most AI platforms bolt on security as an afterthought. We built AgenticJunior the other way around: security first, then capabilities. Every feature included — and every feature deliberately excluded — reflects this philosophy.",
      "why.secure.title": "Secure by Default",
      "why.secure.desc": "Multi-tenant isolation with Row-Level Security. Encrypted OAuth tokens. No shell access, no file system exposure, no attack surface.",
      "why.managed.title": "Managed Architecture",
      "why.managed.desc": "Zero infrastructure to manage. Automatic updates, auto-scaling, health monitoring. We handle the servers, you handle your day.",
      "why.curated.title": "Curated Tools",
      "why.curated.desc": "Every tool vetted. Every integration tested. 8 specialized agents plus a curated Skills Marketplace — quality over 3,000 unvetted community plugins.",
      "why.gdpr.title": "GDPR-Friendly Memory",
      "why.gdpr.desc": "Configurable data retention. Conversations auto-delete based on your plan. Data minimization by design, not as an afterthought.",

      // -- Comparison --
      "comparison.headline": "Self-hosted vs",
      "comparison.subtitle": "All the benefits. None of the headaches.",
      "comparison.feature": "Feature",
      "comparison.selfHosted": "Self-Hosted",
      "comparison.setupTime": "Setup time",
      "comparison.setupSelf": "Hours / days",
      "comparison.setupAj": "Minutes",
      "comparison.infra": "Infrastructure",
      "comparison.infraSelf": "You manage",
      "comparison.infraAj": "We manage",
      "comparison.security": "Security updates",
      "comparison.securitySelf": "Manual",
      "comparison.securityAj": "Automatic",
      "comparison.multiUser": "Multi-user",
      "comparison.no": "No",
      "comparison.yes": "Yes",
      "comparison.slackTeams": "Slack / Teams",
      "comparison.diy": "DIY",
      "comparison.memory": "Memory",
      "comparison.memorySelf": "Infinite (your storage)",
      "comparison.memoryAj": "Smart retention",
      "comparison.plugins": "Skills / plugins",
      "comparison.pluginsSelf": "3,000+ unvetted",
      "comparison.pluginsAj": "Curated & secure",
      "comparison.shell": "Shell access",
      "comparison.shellSelf": "Yes (risky)",
      "comparison.shellAj": "No (by design)",
      "comparison.browser": "Browser control",
      "comparison.browserSelf": "Yes (risky)",
      "comparison.browserAj": "No (by design)",
      "comparison.customAgents": "Custom agents & prompts",
      "comparison.customSelf": "N/A",
      "comparison.customAj": "Yes (Ultimate)",
      "comparison.scheduled": "Scheduled automation",
      "comparison.scheduledSelf": "Manual cron",
      "comparison.scheduledAj": "Built-in",
      "comparison.price": "Price",
      "comparison.priceSelf": "Free + time + infra",
      "comparison.priceAj": "$5–29/mo",

      // -- Pricing --
      "pricing.headline": "Simple, transparent",
      "pricing.headlineAccent": "pricing",
      "pricing.subtitle": "Start free. Scale as you grow.",
      "pricing.starter.title": "Starter",
      "pricing.starter.subtitle": "Essential AI assistance",
      "pricing.starter.f1": "Email, Calendar, Tasks, Contacts agents",
      "pricing.starter.f2": "Files Agent (PDF, spreadsheets)",
      "pricing.starter.f3": "Web + Telegram",
      "pricing.starter.f4": "Voice message transcription",
      "pricing.starter.f5": "24-hour memory",
      "pricing.starter.f6": "Encrypted & isolated",
      "pricing.pro.title": "Pro",
      "pricing.pro.subtitle": "For professionals",
      "pricing.pro.f1": "Everything in Starter",
      "pricing.pro.f2": "Notes Agent (encrypted, searchable)",
      "pricing.pro.f3": "GitHub Agent",
      "pricing.pro.f4": "Skills Marketplace",
      "pricing.pro.f5": "7-day memory",
      "pricing.pro.f6": "Slack + WhatsApp + Teams",
      "pricing.ultimate.title": "Ultimate",
      "pricing.ultimate.subtitle": "Full power",
      "pricing.ultimate.f1": "Everything in Pro",
      "pricing.ultimate.f2": "Content Creator Agent",
      "pricing.ultimate.f3": "Custom prompts (/command triggers)",
      "pricing.ultimate.f4": "Custom agents (@agent triggers)",
      "pricing.ultimate.f5": "Scheduled jobs & automation",
      "pricing.ultimate.f6": "Webhooks API",
      "pricing.ultimate.f7": "30-day memory",
      "pricing.retention.tier": "Tier",
      "pricing.retention.memory": "Conversation Memory",
      "pricing.retention.planned": "(planned)",
      "pricing.retention.betaNote": "During beta, all accounts have 48-hour conversation memory. Tiered retention is coming soon. No credit card required to start.",

      // -- Footer CTA --
      "cta.headline": "Ready to reclaim",
      "cta.headlineAccent": "your time?",
      "cta.subtitle": "Stop managing your AI assistant. Start using one.",

      // -- Footer --
      "footer.tagline": "AI-powered junior developer for your team",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.copyright": "\u00a9 2026 AInvirion LLC \u00b7 Spokane, WA",

      // -- FAQ page --
      "faq.breadcrumbHome": "Home",
      "faq.breadcrumbCurrent": "FAQ",
      "faq.headline": "Frequently asked",
      "faq.headlineAccent": "questions",
      "faq.contact.headline": "Still have",
      "faq.contact.headlineAccent": "questions?",
      "faq.contact.subtitle": "We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.",
      "faq.contact.button": "Contact Us",
      "faq.tab.all": "All",

      // -- FAQ categories --
      "faq.cat.security": "Security & Privacy",
      "faq.cat.billing": "Billing",
      "faq.cat.features": "Features & Integrations",
      "faq.cat.general": "General",

      // -- FAQ items --
      "faq.security.0.q": "How does AgenticJunior protect my data?",
      "faq.security.0.a": "Your data is encrypted at rest, isolated per user with PostgreSQL Row-Level Security, and automatically cleaned up based on your retention settings. We don\u2019t use your data for model training. Ever.",
      "faq.security.1.q": "What happens to my data if I cancel?",
      "faq.security.1.a": "Your data is automatically cleaned up according to your tier\u2019s retention policy. When you cancel, remaining data is purged within 30 days. You can request immediate deletion at any time.",
      "faq.billing.0.q": "How does billing work?",
      "faq.billing.0.a": "AgenticJunior is currently in free beta \u2014 no credit card required. When billing launches, all plans will be billed monthly with no long-term commitment. You\u2019ll be able to upgrade, downgrade, or cancel at any time.",
      "faq.features.0.q": "What integrations are supported?",
      "faq.features.0.a": "AgenticJunior connects with Gmail, Google Calendar, GitHub, and Telegram. It supports voice message transcription and a Skills Marketplace with pre-built skills like PDF reading, web research, and more. Slack, Microsoft Teams, and WhatsApp are on our roadmap and coming soon.",
      "faq.features.1.q": "What is the Skills Marketplace?",
      "faq.features.1.a": "The Skills Marketplace is a curated collection of pre-built capabilities you can add to your AgenticJunior with one click. Skills include PDF reading, spreadsheet analysis, web research, meeting notes generation, and more. All skills are vetted for security and quality. Available on Pro and Ultimate plans.",
      "faq.features.2.q": "Is there an API for developers?",
      "faq.features.2.a": "The Ultimate plan includes webhooks API, scheduled jobs, custom prompts (triggered via /command), and custom agents (triggered via @agent). These let you integrate AgenticJunior into your own workflows and automate recurring tasks programmatically.",
      "faq.features.3.q": "Why no shell access or browser automation?",
      "faq.features.3.a": "Because security is a design choice, not a tradeoff. We deliberately exclude shell access and browser automation \u2014 not because we can\u2019t build them, but because in a multi-tenant environment, your safety matters more than a feature checklist. What AgenticJunior can\u2019t do is just as important as what it can.",
      "faq.general.0.q": "How is this different from self-hosted alternatives?",
      "faq.general.0.a": "Self-hosted solutions require you to manage infrastructure, security patches, and updates. AgenticJunior gives you the same productivity benefits with zero DevOps overhead, proper multi-user isolation, and enterprise integrations built in.",
      "faq.general.1.q": "Can I use AgenticJunior with my team?",
      "faq.general.1.a": "Yes! AgenticJunior is built as a multi-tenant platform from the ground up. Each user gets their own isolated workspace with proper security boundaries. Team plans with shared features are coming soon.",

      // -- Carousel --
      "carousel.email.message": "Triage my inbox",
      "carousel.email.0.sender": "John Smith",
      "carousel.email.0.subject": "Q4 Report — Review needed",
      "carousel.email.0.tag": "Urgent",
      "carousel.email.1.sender": "Sarah Lee",
      "carousel.email.1.subject": "Meeting tomorrow at 3pm",
      "carousel.email.1.tag": "Follow-up",
      "carousel.email.2.sender": "GitHub",
      "carousel.email.2.subject": "PR #42 successfully merged",
      "carousel.email.2.tag": "FYI",
      "carousel.email.3.sender": "Newsletter",
      "carousel.email.3.subject": "Weekly digest — Dec 16",
      "carousel.email.3.tag": "Archive",

      "carousel.calendar.message": "Schedule team sync tomorrow at 2pm",
      "carousel.calendar.event.title": "Team Sync",
      "carousel.calendar.event.meta": "1hr \u00b7 4 people",
      "carousel.calendar.focus.title": "Focus time",
      "carousel.calendar.focus.meta": "2hr block",

      "carousel.tasks.message": "Extract action items from today's emails",
      "carousel.tasks.0.text": "Confirm meeting time",
      "carousel.tasks.0.source": "From Sarah\u2019s email",
      "carousel.tasks.1.text": "Review Q4 report",
      "carousel.tasks.1.source": "From John\u2019s email",
      "carousel.tasks.2.text": "Follow up on PR feedback",
      "carousel.tasks.2.source": "From GitHub notification",

      "carousel.pdf.message": "Summarize this quarterly report",
      "carousel.pdf.0.title": "Executive Summary",
      "carousel.pdf.0.finding": "Revenue up 23% YoY",
      "carousel.pdf.0.badge": "Key Finding",
      "carousel.pdf.1.title": "Market Analysis",
      "carousel.pdf.1.finding": "3 new competitors entered",
      "carousel.pdf.1.badge": "Action Item",
      "carousel.pdf.2.title": "Financial Details",
      "carousel.pdf.2.finding": "12 pages of tables",
      "carousel.pdf.2.badge": "Skip",
      "carousel.pdf.3.title": "Recommendations",
      "carousel.pdf.3.finding": "Expand to APAC market",
      "carousel.pdf.3.badge": "Key Finding",

      "carousel.spreadsheet.message": "What were our top 3 products last quarter?",

      "carousel.research.message": "Research competitor pricing for CRM tools",
      "carousel.research.0.title": "Salesforce \u2014 Enterprise CRM",
      "carousel.research.0.snippet": "Starting at $25/user/mo",
      "carousel.research.0.badge": "Leader",
      "carousel.research.1.title": "HubSpot \u2014 Free CRM",
      "carousel.research.1.snippet": "Free tier, paid from $20/mo",
      "carousel.research.1.badge": "Freemium",
      "carousel.research.2.title": "Pipedrive \u2014 Sales CRM",
      "carousel.research.2.snippet": "From $14.90/user/mo",
      "carousel.research.2.badge": "Budget",

      "carousel.draft.message": "Draft a follow-up email to the client",
      "carousel.draft.subject": "Re: Project timeline update",
      "carousel.draft.body": "Hi Sarah, following up on our discussion yesterday. The revised timeline is attached with all milestones updated per your feedback."
    },

    es: {
      // -- Meta --
      "meta.title": "AgenticJunior — Tu Jefe de Gabinete AI. Gestionado, Seguro, Listo.",
      "meta.description": "AgenticJunior gestiona tu email, calendario, tareas y m\u00e1s — para que te enfoques en lo que importa. Sin configuraci\u00f3n, sin servidores, sin complejidad.",

      // -- A11y --
      "a11y.skipLink": "Saltar al contenido principal",
      "a11y.navLabel": "Navegaci\u00f3n principal",
      "a11y.navMenuLabel": "Men\u00fa de navegaci\u00f3n",
      "a11y.openMenu": "Abrir men\u00fa de navegaci\u00f3n",
      "a11y.closeMenu": "Cerrar men\u00fa de navegaci\u00f3n",
      "a11y.themeToggle.dark": "Cambiar a modo claro",
      "a11y.themeToggle.light": "Cambiar a modo oscuro",
      "a11y.langToggle.en": "Cambiar a espa\u00f1ol",
      "a11y.langToggle.es": "Switch to English",
      "a11y.slide": "Diapositiva",
      "a11y.faqCategories": "Categor\u00edas FAQ",

      // -- Nav --
      "nav.features": "Funciones",
      "nav.skills": "Skills",
      "nav.pricing": "Precios",
      "nav.faq": "FAQ",
      "nav.getStarted": "Comenzar",

      // -- Hero --
      "hero.headline": "Tu jefe de gabinete AI.",
      "hero.headlineAccent": "Gestionado, Seguro, Listo.",
      "hero.soYouCan": "— para que puedas",
      "hero.tagline": "Sin configuraci\u00f3n, sin servidores, sin complejidad.",
      "hero.ctaPrimary": "Comienza Gratis",
      "hero.ctaSecondary": "Descubre C\u00f3mo Funciona",
      "hero.features": [
        "gestiona tu bandeja de entrada",
        "programa tus reuniones",
        "rastrea tus plazos",
        "organiza tus contactos",
        "maneja tus issues de GitHub",
        "redacta tu contenido",
        "clasifica tus notificaciones",
        "planifica tu d\u00eda",
        "recuerda lo que olvidas",
        "hace lo aburrido por ti",
        "analiza tus documentos",
        "toma notas encriptadas",
        "transcribe tus mensajes de voz",
        "automatiza tus rutinas"
      ],
      "hero.benefits": [
        "enfocarte en lo que importa",
        "tomarte almuerzos m\u00e1s largos",
        "disfrutar los lunes",
        "dejar de olvidar cumplea\u00f1os",
        "fingir que tienes secretario",
        "por fin responder ese email de 2024",
        "dormir entre reuniones",
        "decirle a tu jefe que est\u00e1s \u2018delegando\u2019",
        "salir a caminar de vez en cuando",
        "terminar a tiempo",
        "dejar de copiar y pegar de PDFs",
        "automatizar lo repetitivo"
      ],

      // -- Problem --
      "problem.headline": "Gestionar email, calendario y tareas",
      "problem.headlineSub": "no deber\u00eda ser un trabajo de tiempo completo",
      "problem.inboxTitle": "Bandeja desbordada",
      "problem.inboxDesc": "Horas dedicadas a ordenar, leer y responder emails que podr\u00edan triagearse autom\u00e1ticamente.",
      "problem.calendarTitle": "Caos de calendario",
      "problem.calendarDesc": "Reuniones seguidas, dobles reservas y seguimientos olvidados que drenan tu energ\u00eda mental.",
      "problem.tasksTitle": "Tareas fragmentadas",
      "problem.tasksDesc": "Acciones dispersas entre apps, chats y notas adhesivas — nada se rastrea correctamente.",

      // -- Features --
      "features.headline": "Ocho agentes.",
      "features.headlineAccent": "Un asistente.",
      "features.subtitle": "Agentes de IA especializados que trabajan juntos para gestionar tu vida digital.",
      "features.email.title": "Agente de Email",
      "features.email.desc": "Lee, clasifica y redacta respuestas de email. Triage inteligente para que solo veas lo importante.",
      "features.calendar.title": "Agente de Calendario",
      "features.calendar.desc": "Programa reuniones, evita conflictos y env\u00eda res\u00famenes diarios de agenda en lenguaje natural.",
      "features.tasks.title": "Agente de Tareas",
      "features.tasks.desc": "Extrae acciones de emails y chats. Rastrea plazos y env\u00eda recordatorios.",
      "features.contacts.title": "Agente de Contactos",
      "features.contacts.desc": "Mantiene tu red organizada. B\u00fasquedas r\u00e1pidas, notas de relaci\u00f3n y enriquecimiento de contactos.",
      "features.github.title": "Agente GitHub",
      "features.github.desc": "Gestiona issues, revisa PRs y consulta tus repos. Tu flujo de desarrollo, simplificado.",
      "features.content.title": "Creador de Contenido",
      "features.content.desc": "Redacta posts, res\u00famenes y documentos. Desde respuestas r\u00e1pidas hasta contenido extenso.",
      "features.notes.title": "Agente de Notas",
      "features.notes.desc": "Notas encriptadas con etiquetas, fijado y b\u00fasqueda. Descubre notas relacionadas autom\u00e1ticamente.",
      "features.files.title": "Agente de Archivos",
      "features.files.desc": "Analiza PDFs, hojas de c\u00e1lculo y extrae datos de documentos.",
      "features.channels": "Funciona donde t\u00fa trabajas",

      // -- Badges --
      "badge.pro": "Pro",
      "badge.ultimate": "Ultimate",
      "badge.comingSoon": "Pr\u00f3ximamente",
      "badge.popular": "Popular",

      // -- Skills --
      "skills.headline": "Extiende con",
      "skills.headlineAccent": "Skills",
      "skills.subtitle": "Un marketplace curado de skills pre-construidos. Instalaci\u00f3n en un clic, productividad instant\u00e1nea.",
      "skills.pdfReader.title": "Lector de PDF",
      "skills.pdfReader.desc": "Extrae y resume contenido de documentos PDF.",
      "skills.spreadsheet.title": "Agente de Hojas de C\u00e1lculo",
      "skills.spreadsheet.desc": "Analiza archivos CSV y Excel con consultas en lenguaje natural.",
      "skills.webResearch.title": "Investigaci\u00f3n Web",
      "skills.webResearch.desc": "Busca en la web y resume hallazgos sobre cualquier tema.",
      "skills.meetingNotes.title": "Generador de Notas de Reuni\u00f3n",
      "skills.meetingNotes.desc": "Convierte grabaciones de reuniones en notas estructuradas y acciones.",
      "skills.youtube.title": "Transcripci\u00f3n de YouTube",
      "skills.youtube.desc": "Transcribe y resume videos de YouTube autom\u00e1ticamente.",
      "skills.moreSoon.title": "M\u00e1s pr\u00f3ximamente",
      "skills.moreSoon.desc": "Nuevos skills se agregan regularmente al marketplace.",

      // -- Why --
      "why.headline": "Por qu\u00e9",
      "why.subtitle": "La seguridad no es una funci\u00f3n. Es el cimiento.",
      "why.desc": "La mayor\u00eda de plataformas de IA agregan seguridad como ocurrencia tard\u00eda. Nosotros construimos AgenticJunior al rev\u00e9s: primero seguridad, luego capacidades. Cada funci\u00f3n incluida — y cada funci\u00f3n deliberadamente excluida — refleja esta filosof\u00eda.",
      "why.secure.title": "Seguro por Defecto",
      "why.secure.desc": "Aislamiento multi-tenant con Row-Level Security. Tokens OAuth encriptados. Sin acceso a shell, sin exposici\u00f3n de archivos, sin superficie de ataque.",
      "why.managed.title": "Arquitectura Gestionada",
      "why.managed.desc": "Cero infraestructura que gestionar. Actualizaciones autom\u00e1ticas, auto-escalado, monitoreo de salud. Nosotros manejamos los servidores, t\u00fa manejas tu d\u00eda.",
      "why.curated.title": "Herramientas Curadas",
      "why.curated.desc": "Cada herramienta verificada. Cada integraci\u00f3n probada. 8 agentes especializados m\u00e1s un Skills Marketplace curado — calidad sobre 3,000 plugins sin verificar.",
      "why.gdpr.title": "Memoria Compatible con GDPR",
      "why.gdpr.desc": "Retenci\u00f3n de datos configurable. Las conversaciones se auto-eliminan seg\u00fan tu plan. Minimizaci\u00f3n de datos por dise\u00f1o, no como ocurrencia tard\u00eda.",

      // -- Comparison --
      "comparison.headline": "Self-hosted vs",
      "comparison.subtitle": "Todos los beneficios. Ninguno de los dolores de cabeza.",
      "comparison.feature": "Caracter\u00edstica",
      "comparison.selfHosted": "Self-Hosted",
      "comparison.setupTime": "Tiempo de setup",
      "comparison.setupSelf": "Horas / d\u00edas",
      "comparison.setupAj": "Minutos",
      "comparison.infra": "Infraestructura",
      "comparison.infraSelf": "T\u00fa la gestionas",
      "comparison.infraAj": "Nosotros la gestionamos",
      "comparison.security": "Actualizaciones de seguridad",
      "comparison.securitySelf": "Manual",
      "comparison.securityAj": "Autom\u00e1tico",
      "comparison.multiUser": "Multi-usuario",
      "comparison.no": "No",
      "comparison.yes": "S\u00ed",
      "comparison.slackTeams": "Slack / Teams",
      "comparison.diy": "Hazlo t\u00fa",
      "comparison.memory": "Memoria",
      "comparison.memorySelf": "Infinita (tu almacenamiento)",
      "comparison.memoryAj": "Retenci\u00f3n inteligente",
      "comparison.plugins": "Skills / plugins",
      "comparison.pluginsSelf": "3,000+ sin verificar",
      "comparison.pluginsAj": "Curados y seguros",
      "comparison.shell": "Acceso a shell",
      "comparison.shellSelf": "S\u00ed (riesgoso)",
      "comparison.shellAj": "No (por dise\u00f1o)",
      "comparison.browser": "Control del navegador",
      "comparison.browserSelf": "S\u00ed (riesgoso)",
      "comparison.browserAj": "No (por dise\u00f1o)",
      "comparison.customAgents": "Agentes y prompts personalizados",
      "comparison.customSelf": "N/A",
      "comparison.customAj": "S\u00ed (Ultimate)",
      "comparison.scheduled": "Automatizaci\u00f3n programada",
      "comparison.scheduledSelf": "Cron manual",
      "comparison.scheduledAj": "Integrado",
      "comparison.price": "Precio",
      "comparison.priceSelf": "Gratis + tiempo + infra",
      "comparison.priceAj": "$5\u201329/mes",

      // -- Pricing --
      "pricing.headline": "Precios simples y",
      "pricing.headlineAccent": "transparentes",
      "pricing.subtitle": "Comienza gratis. Escala a medida que creces.",
      "pricing.starter.title": "Starter",
      "pricing.starter.subtitle": "Asistencia AI esencial",
      "pricing.starter.f1": "Agentes de Email, Calendario, Tareas, Contactos",
      "pricing.starter.f2": "Agente de Archivos (PDF, hojas de c\u00e1lculo)",
      "pricing.starter.f3": "Web + Telegram",
      "pricing.starter.f4": "Transcripci\u00f3n de mensajes de voz",
      "pricing.starter.f5": "Memoria de 24 horas",
      "pricing.starter.f6": "Encriptado y aislado",
      "pricing.pro.title": "Pro",
      "pricing.pro.subtitle": "Para profesionales",
      "pricing.pro.f1": "Todo en Starter",
      "pricing.pro.f2": "Agente de Notas (encriptado, con b\u00fasqueda)",
      "pricing.pro.f3": "Agente GitHub",
      "pricing.pro.f4": "Skills Marketplace",
      "pricing.pro.f5": "Memoria de 7 d\u00edas",
      "pricing.pro.f6": "Slack + WhatsApp + Teams",
      "pricing.ultimate.title": "Ultimate",
      "pricing.ultimate.subtitle": "Poder total",
      "pricing.ultimate.f1": "Todo en Pro",
      "pricing.ultimate.f2": "Agente Creador de Contenido",
      "pricing.ultimate.f3": "Prompts personalizados (triggers /comando)",
      "pricing.ultimate.f4": "Agentes personalizados (triggers @agente)",
      "pricing.ultimate.f5": "Trabajos programados y automatizaci\u00f3n",
      "pricing.ultimate.f6": "API de Webhooks",
      "pricing.ultimate.f7": "Memoria de 30 d\u00edas",
      "pricing.retention.tier": "Plan",
      "pricing.retention.memory": "Memoria de Conversaci\u00f3n",
      "pricing.retention.planned": "(planificado)",
      "pricing.retention.betaNote": "Durante la beta, todas las cuentas tienen 48 horas de memoria de conversaci\u00f3n. La retenci\u00f3n por planes llega pronto. No se requiere tarjeta de cr\u00e9dito.",

      // -- Footer CTA --
      "cta.headline": "Listo para recuperar",
      "cta.headlineAccent": "\u00bftu tiempo?",
      "cta.subtitle": "Deja de administrar tu asistente AI. Empieza a usar uno.",

      // -- Footer --
      "footer.tagline": "Desarrollador junior con IA para tu equipo",
      "footer.privacy": "Pol\u00edtica de Privacidad",
      "footer.terms": "T\u00e9rminos de Servicio",
      "footer.copyright": "\u00a9 2026 AInvirion LLC \u00b7 Spokane, WA",

      // -- FAQ page --
      "faq.breadcrumbHome": "Inicio",
      "faq.breadcrumbCurrent": "FAQ",
      "faq.headline": "Preguntas",
      "faq.headlineAccent": "frecuentes",
      "faq.contact.headline": "\u00bfA\u00fan tienes",
      "faq.contact.headlineAccent": "preguntas?",
      "faq.contact.subtitle": "Nos encantar\u00eda saber de ti. Escr\u00edbenos y te responderemos lo antes posible.",
      "faq.contact.button": "Cont\u00e1ctanos",
      "faq.tab.all": "Todos",

      // -- FAQ categories --
      "faq.cat.security": "Seguridad y Privacidad",
      "faq.cat.billing": "Facturaci\u00f3n",
      "faq.cat.features": "Funciones e Integraciones",
      "faq.cat.general": "General",

      // -- FAQ items --
      "faq.security.0.q": "\u00bfC\u00f3mo protege AgenticJunior mis datos?",
      "faq.security.0.a": "Tus datos est\u00e1n encriptados en reposo, aislados por usuario con PostgreSQL Row-Level Security, y se limpian autom\u00e1ticamente seg\u00fan tu configuraci\u00f3n de retenci\u00f3n. No usamos tus datos para entrenar modelos. Nunca.",
      "faq.security.1.q": "\u00bfQu\u00e9 pasa con mis datos si cancelo?",
      "faq.security.1.a": "Tus datos se limpian autom\u00e1ticamente seg\u00fan la pol\u00edtica de retenci\u00f3n de tu plan. Al cancelar, los datos restantes se eliminan en 30 d\u00edas. Puedes solicitar eliminaci\u00f3n inmediata en cualquier momento.",
      "faq.billing.0.q": "\u00bfC\u00f3mo funciona la facturaci\u00f3n?",
      "faq.billing.0.a": "AgenticJunior est\u00e1 actualmente en beta gratuita — no se requiere tarjeta de cr\u00e9dito. Cuando se lance la facturaci\u00f3n, todos los planes ser\u00e1n mensuales sin compromiso a largo plazo. Podr\u00e1s subir, bajar o cancelar tu plan en cualquier momento.",
      "faq.features.0.q": "\u00bfQu\u00e9 integraciones est\u00e1n soportadas?",
      "faq.features.0.a": "AgenticJunior se conecta con Gmail, Google Calendar, GitHub y Telegram. Soporta transcripci\u00f3n de mensajes de voz y un Skills Marketplace con skills pre-construidos como lectura de PDF, investigaci\u00f3n web y m\u00e1s. Slack, Microsoft Teams y WhatsApp est\u00e1n en nuestro roadmap y llegan pronto.",
      "faq.features.1.q": "\u00bfQu\u00e9 es el Skills Marketplace?",
      "faq.features.1.a": "El Skills Marketplace es una colecci\u00f3n curada de capacidades pre-construidas que puedes agregar a tu AgenticJunior con un clic. Los skills incluyen lectura de PDF, an\u00e1lisis de hojas de c\u00e1lculo, investigaci\u00f3n web, generaci\u00f3n de notas de reuni\u00f3n y m\u00e1s. Todos los skills est\u00e1n verificados en seguridad y calidad. Disponible en planes Pro y Ultimate.",
      "faq.features.2.q": "\u00bfHay una API para desarrolladores?",
      "faq.features.2.a": "El plan Ultimate incluye API de webhooks, trabajos programados, prompts personalizados (activados v\u00eda /comando) y agentes personalizados (activados v\u00eda @agente). Estos te permiten integrar AgenticJunior en tus propios flujos de trabajo y automatizar tareas recurrentes program\u00e1ticamente.",
      "faq.features.3.q": "\u00bfPor qu\u00e9 no hay acceso a shell ni automatizaci\u00f3n de navegador?",
      "faq.features.3.a": "Porque la seguridad es una decisi\u00f3n de dise\u00f1o, no un tradeoff. Excluimos deliberadamente el acceso a shell y la automatizaci\u00f3n del navegador — no porque no podamos construirlos, sino porque en un entorno multi-tenant, tu seguridad importa m\u00e1s que una lista de funciones. Lo que AgenticJunior no puede hacer es tan importante como lo que s\u00ed puede.",
      "faq.general.0.q": "\u00bfEn qu\u00e9 se diferencia de alternativas self-hosted?",
      "faq.general.0.a": "Las soluciones self-hosted requieren que gestiones infraestructura, parches de seguridad y actualizaciones. AgenticJunior te da los mismos beneficios de productividad con cero overhead de DevOps, aislamiento multi-usuario adecuado e integraciones empresariales integradas.",
      "faq.general.1.q": "\u00bfPuedo usar AgenticJunior con mi equipo?",
      "faq.general.1.a": "\u00a1S\u00ed! AgenticJunior est\u00e1 construido como plataforma multi-tenant desde cero. Cada usuario obtiene su propio espacio de trabajo aislado con l\u00edmites de seguridad apropiados. Los planes de equipo con funciones compartidas llegan pronto.",

      // -- Carousel --
      "carousel.email.message": "Clasifica mi bandeja de entrada",
      "carousel.email.0.sender": "John Smith",
      "carousel.email.0.subject": "Informe Q4 — Revisi\u00f3n necesaria",
      "carousel.email.0.tag": "Urgente",
      "carousel.email.1.sender": "Sarah Lee",
      "carousel.email.1.subject": "Reuni\u00f3n ma\u00f1ana a las 3pm",
      "carousel.email.1.tag": "Seguimiento",
      "carousel.email.2.sender": "GitHub",
      "carousel.email.2.subject": "PR #42 fusionado exitosamente",
      "carousel.email.2.tag": "Info",
      "carousel.email.3.sender": "Newsletter",
      "carousel.email.3.subject": "Resumen semanal — Dic 16",
      "carousel.email.3.tag": "Archivar",

      "carousel.calendar.message": "Programa sincronizaci\u00f3n de equipo ma\u00f1ana a las 2pm",
      "carousel.calendar.event.title": "Sync de Equipo",
      "carousel.calendar.event.meta": "1hr \u00b7 4 personas",
      "carousel.calendar.focus.title": "Tiempo de enfoque",
      "carousel.calendar.focus.meta": "Bloque de 2hr",

      "carousel.tasks.message": "Extrae acciones de los emails de hoy",
      "carousel.tasks.0.text": "Confirmar hora de reuni\u00f3n",
      "carousel.tasks.0.source": "Del email de Sarah",
      "carousel.tasks.1.text": "Revisar informe Q4",
      "carousel.tasks.1.source": "Del email de John",
      "carousel.tasks.2.text": "Dar seguimiento al feedback del PR",
      "carousel.tasks.2.source": "De la notificaci\u00f3n de GitHub",

      "carousel.pdf.message": "Resume este informe trimestral",
      "carousel.pdf.0.title": "Resumen Ejecutivo",
      "carousel.pdf.0.finding": "Ingresos +23% interanual",
      "carousel.pdf.0.badge": "Hallazgo Clave",
      "carousel.pdf.1.title": "An\u00e1lisis de Mercado",
      "carousel.pdf.1.finding": "3 nuevos competidores entraron",
      "carousel.pdf.1.badge": "Acci\u00f3n Requerida",
      "carousel.pdf.2.title": "Detalles Financieros",
      "carousel.pdf.2.finding": "12 p\u00e1ginas de tablas",
      "carousel.pdf.2.badge": "Omitir",
      "carousel.pdf.3.title": "Recomendaciones",
      "carousel.pdf.3.finding": "Expandir al mercado APAC",
      "carousel.pdf.3.badge": "Hallazgo Clave",

      "carousel.spreadsheet.message": "\u00bfCu\u00e1les fueron nuestros top 3 productos el trimestre pasado?",

      "carousel.research.message": "Investiga precios de competidores de herramientas CRM",
      "carousel.research.0.title": "Salesforce \u2014 CRM Empresarial",
      "carousel.research.0.snippet": "Desde $25/usuario/mes",
      "carousel.research.0.badge": "L\u00edder",
      "carousel.research.1.title": "HubSpot \u2014 CRM Gratuito",
      "carousel.research.1.snippet": "Plan gratis, pagos desde $20/mes",
      "carousel.research.1.badge": "Freemium",
      "carousel.research.2.title": "Pipedrive \u2014 CRM de Ventas",
      "carousel.research.2.snippet": "Desde $14.90/usuario/mes",
      "carousel.research.2.badge": "Econ\u00f3mico",

      "carousel.draft.message": "Redacta un email de seguimiento al cliente",
      "carousel.draft.subject": "Re: Actualizaci\u00f3n del cronograma del proyecto",
      "carousel.draft.body": "Hola Sarah, dando seguimiento a nuestra conversaci\u00f3n de ayer. El cronograma revisado est\u00e1 adjunto con todos los hitos actualizados seg\u00fan tu feedback."
    }
  };

  // ---- API ----

  function getLang() {
    return document.documentElement.getAttribute("data-lang") || "en";
  }

  function t(key) {
    var lang = getLang();
    var val = translations[lang] && translations[lang][key];
    if (val !== undefined) return val;
    // Fallback to EN
    val = translations.en && translations.en[key];
    if (val !== undefined) return val;
    return key;
  }

  function applyToDOM() {
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute("data-i18n");
      var val = t(key);
      if (typeof val !== "string") continue;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, val);
      } else {
        el.textContent = val;
      }
    }
    // Update <html lang>
    var lang = getLang();
    document.documentElement.setAttribute("lang", lang);
    // Update meta description
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));
    // Update <title>
    document.title = t("meta.title");
    // Update lang toggle aria-label
    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.setAttribute("aria-label", t("a11y.langToggle." + lang));
    }
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "es") return;
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem("aj-lang", lang); } catch (e) { /* ignore */ }
    applyToDOM();
    // Dispatch event for Mithril components to re-render
    document.dispatchEvent(new CustomEvent("aj-lang-change", { detail: { lang: lang } }));
  }

  function toggle() {
    setLang(getLang() === "en" ? "es" : "en");
  }

  // Apply translations on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyToDOM);
  } else {
    applyToDOM();
  }

  // ---- Export ----
  window.AJ_I18N = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    toggle: toggle,
    applyToDOM: applyToDOM
  };
})();

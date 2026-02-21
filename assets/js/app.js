/* ============================================
   AgentJunior — Mithril Progressive Enhancement
   ============================================ */

(function () {
  "use strict";

  // ---- Theme Toggle ----
  var ThemeToggle = {
    oninit: function () {
      // Already set by inline script in <head>; read current value
      this.dark = document.documentElement.getAttribute("data-theme") === "agentjunior-dark";
    },
    toggle: function () {
      this.dark = !this.dark;
      var theme = this.dark ? "agentjunior-dark" : "agentjunior-light";
      document.documentElement.setAttribute("data-theme", theme);
      try { localStorage.setItem("aj-theme", theme); } catch (e) { /* ignore */ }
    },
    view: function () {
      var self = this;
      return m("button", {
        class: "btn btn-ghost btn-circle swap swap-rotate",
        "aria-label": self.dark ? "Switch to light mode" : "Switch to dark mode",
        onclick: function () { self.toggle(); }
      }, [
        // Sun icon (shown when dark)
        m("svg", {
          class: "w-5 h-5 " + (self.dark ? "" : "hidden"),
          fill: "none", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor"
        }, [
          m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" })
        ]),
        // Moon icon (shown when light)
        m("svg", {
          class: "w-5 h-5 " + (self.dark ? "hidden" : ""),
          fill: "none", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor"
        }, [
          m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" })
        ])
      ]);
    }
  };

  // ---- Mobile Nav (shared state) ----
  var mobileNavOpen = false;

  function closeMobileNav() {
    mobileNavOpen = false;
    document.body.style.overflow = "";
    m.redraw();
  }

  function toggleMobileNav() {
    mobileNavOpen = !mobileNavOpen;
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    m.redraw();
  }

  // Hamburger button (mounted inside navbar)
  var MobileNav = {
    view: function () {
      return m("button", {
        class: "btn btn-ghost btn-circle lg:hidden",
        "aria-label": "Toggle navigation menu",
        "aria-expanded": String(mobileNavOpen),
        onclick: function () { toggleMobileNav(); }
      }, [
        m("svg", { class: "w-6 h-6", fill: "none", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor" }, [
          mobileNavOpen
            ? m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M6 18L18 6M6 6l12 12" })
            : m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M4 6h16M4 12h16M4 18h16" })
        ])
      ]);
    }
  };

  // Fullscreen overlay (mounted outside navbar to avoid backdrop-filter containing block)
  var MobileNavOverlay = {
    view: function () {
      var links = [
        { href: "#features", label: "Features" },
        { href: "#skills", label: "Skills" },
        { href: "#pricing", label: "Pricing" },
        { href: "#faq", label: "FAQ" }
      ];

      return m("div", {
        class: "mobile-nav-overlay " + (mobileNavOpen ? "open" : ""),
        onclick: function () { closeMobileNav(); }
      }, [
        m("nav", {
          class: "flex flex-col items-center justify-center h-full gap-8",
          onclick: function (e) { e.stopPropagation(); }
        }, [
          links.map(function (link) {
            return m("a", {
              href: link.href,
              class: "text-2xl font-display font-bold hover:text-primary transition-colors",
              onclick: function () { closeMobileNav(); }
            }, link.label);
          }),
          m("a", {
            href: "#pricing",
            class: "btn btn-primary btn-lg mt-4",
            onclick: function () { closeMobileNav(); }
          }, "Get Started Free")
        ])
      ]);
    }
  };

  // ---- FAQ Accordion ----
  var FAQAccordion = {
    oninit: function (vnode) {
      this.openIndex = -1;
      // Read FAQ data from existing HTML or use provided data
      this.items = vnode.attrs.items || [];
    },
    toggle: function (index) {
      this.openIndex = this.openIndex === index ? -1 : index;
    },
    view: function () {
      var self = this;
      return m("div", { class: "space-y-3" }, self.items.map(function (item, i) {
        var isOpen = self.openIndex === i;
        return m("div", {
          class: "bg-base-200 rounded-2xl relative",
          key: i
        }, [
          m("button", {
            class: "w-full text-left px-6 py-5 text-lg font-display font-bold pr-14 cursor-pointer",
            "aria-expanded": String(isOpen),
            onclick: function () { self.toggle(i); }
          }, [
            item.q,
            m("svg", {
              class: "faq-chevron w-5 h-5 absolute right-6 top-6 " + (isOpen ? "open" : ""),
              fill: "none", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor",
              "aria-hidden": "true"
            }, [
              m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M19 9l-7 7-7-7" })
            ])
          ]),
          m("div", { class: "faq-content " + (isOpen ? "open" : "") }, [
            m("div", { class: "px-6 pb-5 text-base-content/70" }, item.a)
          ])
        ]);
      }));
    }
  };

  // ---- Randomized Fade Rotator Hero ----
  var heroFeatures = [
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
  ];

  var heroBenefits = [
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
  ];

  function randomIdx(len, exclude) {
    var next;
    do { next = Math.floor(Math.random() * len); } while (next === exclude);
    return next;
  }

  var heroRotation = {
    featureIdx: 0,
    benefitIdx: 0,
    fading: false,
    tick: null,
    started: false,
    start: function () {
      if (heroRotation.started) return;
      heroRotation.started = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      var displayTime = 3000;
      var fadeTime = 400;
      function next() {
        heroRotation.fading = true;
        m.redraw();
        heroRotation.tick = setTimeout(function () {
          heroRotation.featureIdx = randomIdx(heroFeatures.length, heroRotation.featureIdx);
          heroRotation.benefitIdx = randomIdx(heroBenefits.length, heroRotation.benefitIdx);
          heroRotation.fading = false;
          m.redraw();
          heroRotation.tick = setTimeout(next, displayTime);
        }, fadeTime);
      }
      heroRotation.tick = setTimeout(next, displayTime);
    },
    stop: function () {
      clearTimeout(heroRotation.tick);
      heroRotation.started = false;
    }
  };

  var FeatureSlot = {
    oncreate: function () { heroRotation.start(); },
    onremove: function () { heroRotation.stop(); },
    view: function () {
      return m("span", {
        class: "fade-phrase" + (heroRotation.fading ? " fade-out" : ""),
        "aria-live": "polite"
      }, heroFeatures[heroRotation.featureIdx]);
    }
  };

  var BenefitSlot = {
    view: function () {
      return m("span", {
        class: "fade-phrase" + (heroRotation.fading ? " fade-out" : ""),
        "aria-live": "polite"
      }, heroBenefits[heroRotation.benefitIdx]);
    }
  };

  // ---- Scroll Reveal (IntersectionObserver) ----
  function initScrollReveal() {
    if (!("IntersectionObserver" in window)) {
      // Fallback: show everything
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- Smooth Scroll for anchor links ----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = this.getAttribute("href");
        if (id === "#") return;
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          // Update URL without scroll jump
          history.pushState(null, "", id);
        }
      });
    });
  }

  // ---- Problem Carousel ----
  var pcSlides = [
    {
      type: "email",
      message: "Triage my inbox",
      items: [
        { sender: "John Smith", subject: "Q4 Report — Review needed", tag: "Urgent", color: "error" },
        { sender: "Sarah Lee", subject: "Meeting tomorrow at 3pm", tag: "Follow-up", color: "warning" },
        { sender: "GitHub", subject: "PR #42 successfully merged", tag: "FYI", color: "success" },
        { sender: "Newsletter", subject: "Weekly digest — Dec 16", tag: "Archive", color: "ghost" }
      ]
    },
    {
      type: "calendar",
      message: "Schedule team sync tomorrow at 2pm",
      slots: [
        { time: "1:00 PM", event: null },
        { time: "2:00 PM", event: { title: "Team Sync", meta: "1hr \u00b7 4 people", isNew: true } },
        { time: "3:00 PM", event: null },
        { time: "4:00 PM", event: { title: "Focus time", meta: "2hr block", isNew: false } }
      ]
    },
    {
      type: "tasks",
      message: "Extract action items from today's emails",
      tasks: [
        { text: "Confirm meeting time", source: "From Sarah\u2019s email", done: true },
        { text: "Review Q4 report", source: "From John\u2019s email", done: false },
        { text: "Follow up on PR feedback", source: "From GitHub notification", done: false }
      ]
    },
    {
      type: "pdf",
      message: "Summarize this quarterly report",
      sections: [
        { title: "Executive Summary", finding: "Revenue up 23% YoY", badge: "Key Finding", color: "success" },
        { title: "Market Analysis", finding: "3 new competitors entered", badge: "Action Item", color: "warning" },
        { title: "Financial Details", finding: "12 pages of tables", badge: "Skip", color: "ghost" },
        { title: "Recommendations", finding: "Expand to APAC market", badge: "Key Finding", color: "success" }
      ]
    },
    {
      type: "spreadsheet",
      message: "What were our top 3 products last quarter?",
      rows: [
        { product: "Enterprise Suite", revenue: "$1.2M", rank: 1, isTop: true },
        { product: "Pro Plan", revenue: "$890K", rank: 2, isTop: true },
        { product: "Starter Pack", revenue: "$650K", rank: 3, isTop: true },
        { product: "Add-ons", revenue: "$120K", rank: null, isTop: false }
      ]
    },
    {
      type: "research",
      message: "Research competitor pricing for CRM tools",
      results: [
        { title: "Salesforce \u2014 Enterprise CRM", source: "salesforce.com", snippet: "Starting at $25/user/mo", badge: "Leader" },
        { title: "HubSpot \u2014 Free CRM", source: "hubspot.com", snippet: "Free tier, paid from $20/mo", badge: "Freemium" },
        { title: "Pipedrive \u2014 Sales CRM", source: "pipedrive.com", snippet: "From $14.90/user/mo", badge: "Budget" }
      ]
    },
    {
      type: "draft",
      message: "Draft a follow-up email to the client",
      fields: [
        { label: "To", value: "sarah.chen@acme.co" },
        { label: "Subject", value: "Re: Project timeline update" },
        { label: "Body", value: "Hi Sarah, following up on our discussion yesterday. The revised timeline is attached with all milestones updated per your feedback." }
      ]
    }
  ];

  var ProblemCarousel = {
    oninit: function () {
      this.current = 0;
      this.morphed = false;
      this.timer = null;
      this.morphTimer = null;
    },
    oncreate: function () {
      this._startTimer();
      this._triggerMorph();
    },
    onremove: function () {
      clearInterval(this.timer);
      clearTimeout(this.morphTimer);
    },
    _reducedMotion: function () {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    _triggerMorph: function () {
      var self = this;
      clearTimeout(self.morphTimer);
      if (self._reducedMotion()) { self.morphed = true; return; }
      self.morphTimer = setTimeout(function () {
        self.morphed = true;
        m.redraw();
      }, 2200);
    },
    _startTimer: function () {
      var self = this;
      clearInterval(self.timer);
      if (self._reducedMotion()) return;
      self.timer = setInterval(function () {
        self.morphed = false;
        self.current = (self.current + 1) % pcSlides.length;
        m.redraw();
        self._triggerMorph();
      }, 6000);
    },
    _goto: function (i) {
      if (i === this.current) return;
      this.morphed = false;
      this.current = i;
      m.redraw();
      this._triggerMorph();
      this._startTimer();
    },
    view: function () {
      var self = this;
      return m("div", [
        m("div", { class: "pc-wrap" },
          pcSlides.map(function (slide, i) {
            var isActive = self.current === i;
            return m("div", { class: "pc-slide" + (isActive ? " active" : ""), key: "pc-" + i }, [
              m("div", { class: "pc-bubble inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-2xl rounded-br-md px-5 py-3 mb-6 max-w-lg" }, [
                m("svg", { class: "w-4 h-4 text-primary flex-shrink-0", fill: "none", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor" }, [
                  m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" })
                ]),
                m("span", { class: "text-sm font-semibold" }, slide.message)
              ]),
              m("div", { class: "pc-response w-full max-w-lg bg-base-100/80 border border-base-300/40 rounded-2xl overflow-hidden shadow-lg" },
                self._renderSlide(slide, isActive)
              )
            ]);
          })
        ),
        m("div", { class: "flex justify-center gap-2 mt-8" },
          pcSlides.map(function (_, i) {
            return m("button", {
              class: "pc-indicator " + (self.current === i ? "active bg-primary" : "bg-base-content/20"),
              "aria-label": "Slide " + (i + 1),
              onclick: function () { self._goto(i); }
            });
          })
        )
      ]);
    },
    _renderSlide: function (slide, isActive) {
      if (slide.type === "email") return this._renderEmail(slide, isActive);
      if (slide.type === "calendar") return this._renderCalendar(slide, isActive);
      if (slide.type === "tasks") return this._renderTasks(slide, isActive);
      if (slide.type === "pdf") return this._renderPdf(slide, isActive);
      if (slide.type === "spreadsheet") return this._renderSpreadsheet(slide, isActive);
      if (slide.type === "research") return this._renderResearch(slide, isActive);
      if (slide.type === "draft") return this._renderDraft(slide, isActive);
    },
    _renderEmail: function (slide, isActive) {
      var morphed = this.morphed && isActive;
      var dotColors = { error: "bg-error", warning: "bg-warning", success: "bg-success", ghost: "bg-base-content/20" };
      var tagColors = { error: "badge-error", warning: "badge-warning", success: "badge-success", ghost: "badge-ghost opacity-50" };
      return slide.items.map(function (item, i) {
        var isLast = i === slide.items.length - 1;
        return m("div", { class: "pc-item flex items-center gap-3 px-5 py-3" + (isLast ? "" : " border-b border-base-300/20") + (item.color === "ghost" && morphed ? " opacity-40" : "") }, [
          m("span", {
            class: "w-2.5 h-2.5 rounded-full flex-shrink-0 pc-dot-morph " + (morphed ? dotColors[item.color] : "bg-base-content/20"),
            style: { transitionDelay: morphed ? (i * 0.15) + "s" : "0s" }
          }),
          m("div", { class: "flex-1 min-w-0" }, [
            m("p", { class: "font-semibold text-sm truncate" }, item.sender),
            m("p", { class: "text-xs text-base-content/50 truncate" }, item.subject)
          ]),
          m("span", {
            class: "pc-tag badge badge-xs " + tagColors[item.color] + (morphed ? " visible" : ""),
            style: { transitionDelay: morphed ? (0.2 + i * 0.15) + "s" : "0s" }
          }, item.tag)
        ]);
      });
    },
    _renderCalendar: function (slide, isActive) {
      var morphed = this.morphed && isActive;
      return slide.slots.map(function (slot, i) {
        return m("div", { class: "pc-item flex gap-3 px-5 py-2.5" }, [
          m("span", { class: "text-xs text-base-content/40 w-16 flex-shrink-0 pt-1 font-mono" }, slot.time),
          slot.event
            ? m("div", {
                class: "flex-1 rounded-lg border-l-4 px-4 py-3 " +
                  (slot.event.isNew
                    ? "pc-event-new bg-primary/10 border-primary" + (morphed ? " visible" : "")
                    : "bg-base-200/50 border-base-content/10 opacity-40"),
                style: slot.event.isNew ? { transitionDelay: morphed ? "0.3s" : "0s" } : {}
              }, [
                m("p", { class: "font-semibold text-sm" }, slot.event.title),
                m("p", { class: "text-xs text-base-content/50" }, slot.event.meta)
              ])
            : m("div", { class: "flex-1 border-b border-dashed border-base-300/20 min-h-8" })
        ]);
      });
    },
    _renderTasks: function (slide, isActive) {
      var morphed = this.morphed && isActive;
      return slide.tasks.map(function (task, i) {
        var isDone = task.done && morphed;
        var isLast = i === slide.tasks.length - 1;
        return m("div", { class: "pc-item flex items-start gap-3 px-5 py-3" + (isLast ? "" : " border-b border-base-300/20") }, [
          m("div", {
            class: "pc-check mt-0.5" + (isDone ? " done" : ""),
            style: { transitionDelay: morphed ? "0.1s" : "0s" }
          }),
          m("div", [
            m("p", {
              class: "font-semibold text-sm pc-done-text" + (isDone ? " struck" : ""),
              style: { transitionDelay: morphed ? "0.15s" : "0s" }
            }, task.text),
            m("p", { class: "text-xs text-base-content/40 mt-0.5" }, task.source)
          ])
        ]);
      });
    },
    _renderPdf: function (slide, isActive) {
      var morphed = this.morphed && isActive;
      var dotColors = { success: "bg-success", warning: "bg-warning", ghost: "bg-base-content/20" };
      var tagColors = { success: "badge-success", warning: "badge-warning", ghost: "badge-ghost opacity-50" };
      return slide.sections.map(function (section, i) {
        var isLast = i === slide.sections.length - 1;
        return m("div", { class: "pc-item flex items-center gap-3 px-5 py-3" + (isLast ? "" : " border-b border-base-300/20") + (section.color === "ghost" && morphed ? " opacity-40" : "") }, [
          m("span", {
            class: "w-2.5 h-2.5 rounded-full flex-shrink-0 pc-dot-morph " + (morphed ? dotColors[section.color] : "bg-base-content/20"),
            style: { transitionDelay: morphed ? (i * 0.15) + "s" : "0s" }
          }),
          m("div", { class: "flex-1 min-w-0" }, [
            m("p", { class: "font-semibold text-sm truncate" }, section.title),
            m("p", { class: "text-xs text-base-content/50 truncate" }, section.finding)
          ]),
          m("span", {
            class: "pc-tag badge badge-xs " + tagColors[section.color] + (morphed ? " visible" : ""),
            style: { transitionDelay: morphed ? (0.2 + i * 0.15) + "s" : "0s" }
          }, section.badge)
        ]);
      });
    },
    _renderSpreadsheet: function (slide, isActive) {
      var morphed = this.morphed && isActive;
      return slide.rows.map(function (row, i) {
        var isTop = row.isTop && morphed;
        var isLast = i === slide.rows.length - 1;
        return m("div", {
          class: "pc-item flex items-center gap-3 px-5 py-3" + (isLast ? "" : " border-b border-base-300/20") + (isTop ? " pc-row-top" : "") + (!row.isTop && morphed ? " opacity-40" : ""),
        }, [
          row.rank
            ? m("span", {
                class: "pc-rank w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 " + (isTop ? "bg-primary text-primary-content" : "bg-base-content/10 text-base-content/40"),
                style: { transitionDelay: morphed ? (i * 0.15) + "s" : "0s" }
              }, "#" + row.rank)
            : m("span", { class: "w-6 h-6 flex-shrink-0" }),
          m("div", { class: "flex-1 min-w-0" }, [
            m("p", { class: "font-semibold text-sm truncate" }, row.product)
          ]),
          m("span", { class: "text-sm font-mono text-base-content/60" }, row.revenue)
        ]);
      });
    },
    _renderResearch: function (slide, isActive) {
      var morphed = this.morphed && isActive;
      return slide.results.map(function (result, i) {
        var isLast = i === slide.results.length - 1;
        return m("div", { class: "pc-item px-5 py-3" + (isLast ? "" : " border-b border-base-300/20") }, [
          m("div", { class: "flex items-center gap-2 mb-1" }, [
            m("p", { class: "font-semibold text-sm truncate flex-1" }, result.title),
            m("span", {
              class: "pc-tag badge badge-xs badge-primary" + (morphed ? " visible" : ""),
              style: { transitionDelay: morphed ? (0.2 + i * 0.15) + "s" : "0s" }
            }, result.badge)
          ]),
          m("p", { class: "text-xs text-primary/60 mb-0.5" }, result.source),
          m("p", { class: "text-xs text-base-content/50 truncate" }, result.snippet)
        ]);
      });
    },
    _renderDraft: function (slide, isActive) {
      var morphed = this.morphed && isActive;
      return slide.fields.map(function (field, i) {
        var isFilled = morphed;
        var isLast = i === slide.fields.length - 1;
        var isBody = field.label === "Body";
        return m("div", { class: "pc-item px-5 py-2.5" + (isLast ? "" : " border-b border-base-300/20") }, [
          m("div", { class: "flex items-start gap-3" }, [
            m("span", { class: "text-xs text-base-content/40 w-12 flex-shrink-0 pt-0.5 font-semibold uppercase" }, field.label),
            m("div", {
              class: "flex-1 min-w-0 pc-draft-field" + (isFilled ? " filled" : ""),
              style: { transitionDelay: morphed ? (0.15 + i * 0.2) + "s" : "0s" }
            }, [
              isFilled
                ? m("p", { class: "text-sm" + (isBody ? "" : " truncate") }, field.value)
                : m("div", { class: "rounded " + (isBody ? "h-12 bg-base-content/5" : "h-4 bg-base-content/5 w-3/4") })
            ])
          ])
        ]);
      });
    }
  };

  // ---- FAQ Data ----
  var faqData = [
    {
      q: "How does AgentJunior protect my data?",
      a: "Your data is encrypted at rest, isolated per user with PostgreSQL Row-Level Security, and automatically cleaned up based on your retention settings. We don't use your data for model training. Ever."
    },
    {
      q: "What integrations are supported?",
      a: "AgentJunior connects with Gmail, Google Calendar, GitHub, and Telegram. It supports voice message transcription and a Skills Marketplace with pre-built skills like PDF reading, web research, and more. Slack, Microsoft Teams, and WhatsApp are on our roadmap and coming soon."
    },
    {
      q: "How does billing work?",
      a: "AgentJunior is currently in free beta — no credit card required. When billing launches, all plans will be billed monthly with no long-term commitment. You'll be able to upgrade, downgrade, or cancel at any time."
    },
    {
      q: "What happens to my data if I cancel?",
      a: "Your data is automatically cleaned up according to your tier's retention policy. When you cancel, remaining data is purged within 30 days. You can request immediate deletion at any time."
    },
    {
      q: "How is this different from self-hosted alternatives?",
      a: "Self-hosted solutions require you to manage infrastructure, security patches, and updates. AgentJunior gives you the same productivity benefits with zero DevOps overhead, proper multi-user isolation, and enterprise integrations built in."
    },
    {
      q: "Can I use AgentJunior with my team?",
      a: "Yes! AgentJunior is built as a multi-tenant platform from the ground up. Each user gets their own isolated workspace with proper security boundaries. Team plans with shared features are coming soon."
    },
    {
      q: "Is there an API for developers?",
      a: "The Ultimate plan includes webhooks API, scheduled jobs, custom prompts (triggered via /command), and custom agents (triggered via @agent). These let you integrate AgentJunior into your own workflows and automate recurring tasks programmatically."
    },
    {
      q: "What is the Skills Marketplace?",
      a: "The Skills Marketplace is a curated collection of pre-built capabilities you can add to your AgentJunior with one click. Skills include PDF reading, spreadsheet analysis, web research, meeting notes generation, and more. All skills are vetted for security and quality. Available on Pro and Ultimate plans."
    },
    {
      q: "Why no shell access or browser automation?",
      a: "Because security is a design choice, not a tradeoff. We deliberately exclude shell access and browser automation — not because we can't build them, but because in a multi-tenant environment, your safety matters more than a feature checklist. What AgentJunior can't do is just as important as what it can."
    }
  ];

  // ---- Mount Everything ----
  function init() {
    var themeEl = document.getElementById("theme-toggle");
    if (themeEl) m.mount(themeEl, ThemeToggle);

    var mobileNavEl = document.getElementById("mobile-nav");
    if (mobileNavEl) m.mount(mobileNavEl, MobileNav);

    var mobileNavOverlayEl = document.getElementById("mobile-nav-overlay");
    if (mobileNavOverlayEl) m.mount(mobileNavOverlayEl, MobileNavOverlay);

    var featureEl = document.getElementById("rotate-feature");
    if (featureEl) m.mount(featureEl, FeatureSlot);

    var benefitEl = document.getElementById("rotate-benefit");
    if (benefitEl) m.mount(benefitEl, BenefitSlot);

    var pcEl = document.getElementById("problem-carousel");
    if (pcEl) m.mount(pcEl, ProblemCarousel);

    var faqEl = document.getElementById("faq-accordion");
    if (faqEl) m.mount(faqEl, { view: function () { return m(FAQAccordion, { items: faqData }); } });

    initScrollReveal();
    initSmoothScroll();
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

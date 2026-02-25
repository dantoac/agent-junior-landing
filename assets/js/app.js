/* ============================================
   AgenticJunior — App Scripts
   ============================================ */

// === Theme Toggle (vanilla) ===
(function () {
  "use strict";
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function labelForTheme() {
    var isDark = document.documentElement.getAttribute("data-theme") === "agenticjunior-dark";
    return isDark ? "Switch to light mode" : "Switch to dark mode";
  }

  // Sync initial label with whatever the FOUC script chose
  btn.setAttribute("aria-label", labelForTheme());

  btn.addEventListener("click", function () {
    var isDark = document.documentElement.getAttribute("data-theme") === "agenticjunior-dark";
    var theme = isDark ? "agenticjunior-light" : "agenticjunior-dark";
    document.documentElement.setAttribute("data-theme", theme);
    btn.setAttribute("aria-label", labelForTheme());
    try { localStorage.setItem("aj-theme", theme); } catch (e) { /* ignore */ }
  });
})();

// === Island Navbar: Scroll-linked Active State ===
(function () {
  "use strict";
  var islandSteps = document.querySelectorAll(".island-step[data-section]");
  var islandLinks = document.querySelectorAll(".island-link[data-section]");
  var islandIndicator = document.querySelector(".island-indicator");
  var islandMenuItems = document.querySelectorAll(".island-menu-item[data-section]");
  var sectionIds = ["features", "skills", "pricing"];
  var stepSectionMap = {};

  sectionIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) stepSectionMap[id] = el;
  });

  // No sections found = graceful no-op (e.g. faq.html)
  if (Object.keys(stepSectionMap).length === 0) return;

  function updateIslandIndicator(activeEl) {
    if (!islandIndicator || !activeEl) return;
    var container = activeEl.closest(".island-steps");
    if (!container) return;
    var cRect = container.getBoundingClientRect();
    var eRect = activeEl.getBoundingClientRect();
    islandIndicator.style.left = (eRect.left - cRect.left) + "px";
    islandIndicator.style.width = eRect.width + "px";
  }

  function setActiveIslandStep(sectionName) {
    islandSteps.forEach(function (step) {
      var isActive = sectionName && step.dataset.section === sectionName;
      step.classList.toggle("island-step--active", isActive);
      if (isActive) updateIslandIndicator(step);
    });
    islandLinks.forEach(function (link) {
      link.classList.toggle("island-link--active",
        sectionName && link.dataset.section === sectionName);
    });
    islandMenuItems.forEach(function (item) {
      item.classList.toggle("island-menu-item--active",
        sectionName && item.dataset.section === sectionName);
    });
    if (islandIndicator) islandIndicator.style.opacity = sectionName ? "1" : "0";
  }

  function updateIslandActive() {
    var scrollY = window.scrollY + window.innerHeight * 0.35;
    var active = null;
    for (var i = sectionIds.length - 1; i >= 0; i--) {
      var el = stepSectionMap[sectionIds[i]];
      if (el && el.offsetTop <= scrollY) { active = sectionIds[i]; break; }
    }
    setActiveIslandStep(active);
  }

  window.addEventListener("scroll", updateIslandActive, { passive: true });
  requestAnimationFrame(updateIslandActive);
})();

// === Island Navbar: Mobile Hamburger Menu ===
(function () {
  "use strict";
  var hamburger = document.querySelector(".island-hamburger");
  var navbarIsland = document.querySelector(".navbar-island");
  var menuItems = document.querySelectorAll(".island-menu-item");
  if (!hamburger || !navbarIsland) return;

  var scrollGuard = 0;

  function openMenu() {
    navbarIsland.classList.add("island-open");
    hamburger.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "Close navigation menu");
    scrollGuard = Date.now();
  }

  function closeMenu() {
    navbarIsland.classList.remove("island-open");
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open navigation menu");
  }

  function isOpen() {
    return navbarIsland.classList.contains("island-open");
  }

  hamburger.addEventListener("click", function () {
    isOpen() ? closeMenu() : openMenu();
  });

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () { closeMenu(); });
  });

  window.addEventListener("scroll", function () {
    if (isOpen() && Date.now() - scrollGuard > 150) closeMenu();
  }, { passive: true });

  document.addEventListener("click", function (e) {
    if (isOpen() && !navbarIsland.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) {
      closeMenu();
      hamburger.focus();
    }
  });
})();

// === Mithril Components ===
(function () {
  "use strict";

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

  function createRotator(phrases, displayTime) {
    var fadeTime = 400;
    var r = {
      idx: 0,
      fading: false,
      tick: null,
      started: false,
      start: function () {
        if (r.started) return;
        r.started = true;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        function next() {
          r.fading = true;
          m.redraw();
          r.tick = setTimeout(function () {
            r.idx = randomIdx(phrases.length, r.idx);
            r.fading = false;
            m.redraw();
            r.tick = setTimeout(next, displayTime);
          }, fadeTime);
        }
        r.tick = setTimeout(next, displayTime);
      },
      stop: function () {
        clearTimeout(r.tick);
        r.started = false;
      }
    };
    return r;
  }

  var featureRotator = createRotator(heroFeatures, 3000);
  var benefitRotator = createRotator(heroBenefits, 4200);

  function lockRotatorHeight(el, phrases) {
    var p = el.closest("p");
    if (!p) return function () {};
    function recalc() {
      var saved = el.textContent;
      p.style.minHeight = "";
      var maxH = 0;
      for (var i = 0; i < phrases.length; i++) {
        el.textContent = phrases[i];
        var h = p.offsetHeight;
        if (h > maxH) maxH = h;
      }
      el.textContent = saved;
      p.style.minHeight = maxH + "px";
    }
    recalc();
    var tid;
    function onResize() { clearTimeout(tid); tid = setTimeout(recalc, 150); }
    window.addEventListener("resize", onResize);
    return function () { window.removeEventListener("resize", onResize); };
  }

  var FeatureSlot = {
    oncreate: function (vnode) {
      vnode._unlockHeight = lockRotatorHeight(vnode.dom, heroFeatures);
      featureRotator.start();
    },
    onremove: function (vnode) {
      if (vnode._unlockHeight) vnode._unlockHeight();
      featureRotator.stop();
    },
    view: function () {
      return m("span", {
        class: "fade-phrase" + (featureRotator.fading ? " fade-out" : ""),
        "aria-live": "polite"
      }, heroFeatures[featureRotator.idx]);
    }
  };

  var BenefitSlot = {
    oncreate: function (vnode) {
      vnode._unlockHeight = lockRotatorHeight(vnode.dom, heroBenefits);
      benefitRotator.start();
    },
    onremove: function (vnode) {
      if (vnode._unlockHeight) vnode._unlockHeight();
      benefitRotator.stop();
    },
    view: function () {
      return m("span", {
        class: "fade-phrase" + (benefitRotator.fading ? " fade-out" : ""),
        "aria-live": "polite"
      }, heroBenefits[benefitRotator.idx]);
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

  // ---- Mount Everything ----
  function init() {
    var featureEl = document.getElementById("rotate-feature");
    if (featureEl) m.mount(featureEl, FeatureSlot);

    var benefitEl = document.getElementById("rotate-benefit");
    if (benefitEl) m.mount(benefitEl, BenefitSlot);

    var pcEl = document.getElementById("problem-carousel");
    if (pcEl) m.mount(pcEl, ProblemCarousel);

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

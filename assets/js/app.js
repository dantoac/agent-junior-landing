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
    "does the boring stuff"
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
    "finish work on time"
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

  // ---- FAQ Data ----
  var faqData = [
    {
      q: "How does AgentJunior protect my data?",
      a: "Your data is encrypted at rest, isolated per user with PostgreSQL Row-Level Security, and automatically cleaned up based on your retention settings. We don't use your data for model training. Ever."
    },
    {
      q: "What integrations are supported?",
      a: "AgentJunior connects with Gmail, Google Calendar, GitHub, and more. Enterprise channels including Slack, Microsoft Teams, WhatsApp, and Telegram are supported so your assistant meets you where you work."
    },
    {
      q: "How does billing work?",
      a: "Choose a plan that fits your needs. All plans are billed monthly with no long-term commitment. You can upgrade, downgrade, or cancel at any time. We offer a free tier to get started."
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
      a: "We're building API access for power users who want to integrate AgentJunior into their own workflows. Webhook triggers and custom automation endpoints are on our roadmap."
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

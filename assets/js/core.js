/* Core runtime: namespace, storage, state, i18n, text formatting, icons, DOM helpers.
   Classic script (no modules) so the guide works when index.html is opened straight from disk. */
(function () {
  "use strict";
  var S = (window.SWE = window.SWE || {});
  S.data = S.data || {};
  S.views = S.views || {};

  /* ---------- storage (never trusted to exist) ---------- */
  var PREFIX = "swe.";
  S.store = {
    get: function (k, fallback) {
      try {
        var v = window.localStorage.getItem(PREFIX + k);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set: function (k, v) {
      try { window.localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) { /* ignore */ }
    },
    del: function (k) {
      try { window.localStorage.removeItem(PREFIX + k); } catch (e) { /* ignore */ }
    }
  };

  /* ---------- state ---------- */
  var qs = location.search || "";
  var qLang = (/[?&]lang=(en|fa)\b/.exec(qs) || [])[1];
  var qTheme = (/[?&]theme=(light|dark|system)\b/.exec(qs) || [])[1];
  var qMe = (/[?&]me=(L[2-7]|none)\b/.exec(qs) || [])[1];
  var navFa = (navigator.language || "").toLowerCase().indexOf("fa") === 0;
  S.state = {
    lang: qLang || S.store.get("lang", null) || (navFa ? "fa" : "en"),
    theme: qTheme || S.store.get("theme", "system"),
    me: qMe ? (qMe === "none" ? null : qMe) : S.store.get("me", null) // "L2".."L7" or null
  };
  S.isFa = function () { return S.state.lang === "fa"; };

  /* ---------- i18n ---------- */
  // Every authored string is L("English", "فارسی"). t() picks the active language, falling back to English.
  S.L = function (en, fa) { return { en: en, fa: fa == null ? en : fa }; };
  S.t = function (x) {
    if (x == null) return "";
    if (typeof x === "string" || typeof x === "number") return String(x);
    if (Array.isArray(x)) return x.map(S.t);
    if (typeof x === "object" && "en" in x) {
      var v = x[S.state.lang];
      return v == null || v === "" ? (x.en == null ? "" : x.en) : v;
    }
    return "";
  };

  var FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  // Latin digits become Persian digits in Persian text — except inside identifiers such as L4, E5, p95, 10x.
  function digitText(txt) {
    return txt.replace(/([A-Za-z]?)(\d+(?:\.\d+)?)([A-Za-z]?)(%?)/g, function (m, pre, num, post, pct) {
      if (pre || post) return m;
      var out = num.replace(/\./g, "٫").replace(/[0-9]/g, function (d) { return FA_DIGITS[+d]; });
      return out + (pct ? "٪" : "");
    });
  }
  // digits() converts a plain string or a number (used for dynamic values).
  S.digits = function (v) {
    var s = String(v);
    return S.isFa() ? digitText(s) : s;
  };
  S.num = S.digits;
  // Convert digits only in text nodes of an HTML string (leaves attributes such as href untouched).
  function digitHtml(html) {
    if (!S.isFa()) return html;
    return html.replace(/(^|>)([^<]+)/g, function (m, a, txt) { return a + digitText(txt); });
  }

  S.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* Inline markup for authored content (escaped first, so stray < or & are safe):
       **bold**   ==highlight==   `code`   {L4} level chip
       [label](#/route)   [label](https://…)  */
  S.md = function (x) {
    var s = S.t(x);
    if (s === "" || s == null) return "";
    s = S.esc(s);
    s = s
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/==(.+?)==/g, "<mark>$1</mark>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\{(L[2-7])\}/g, function (m, id) { return S.lv(id); })
      .replace(/\[([^\]]+)\]\((#[^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="ext">$1</a>');
    return digitHtml(s);
  };

  // Level chip: {L4} → coloured code
  S.lv = function (id, cls) {
    return '<span class="lv lv-' + id.slice(1) + (cls ? " " + cls : "") + '">' + id + "</span>";
  };

  /* Block text: blank line = new paragraph; lines starting "- " = bullet list; "1. " = numbered list. */
  S.rich = function (x) {
    var s = S.t(x);
    if (!s) return "";
    var out = [];
    s.split(/\n{2,}/).forEach(function (block) {
      var lines = block.split("\n").filter(function (l) { return l.trim() !== ""; });
      if (!lines.length) return;
      if (lines.every(function (l) { return /^\s*-\s+/.test(l); })) {
        out.push("<ul>" + lines.map(function (l) { return "<li>" + S.md(l.replace(/^\s*-\s+/, "")) + "</li>"; }).join("") + "</ul>");
      } else if (lines.every(function (l) { return /^\s*\d+[.)]\s+/.test(l); })) {
        out.push("<ol>" + lines.map(function (l) { return "<li>" + S.md(l.replace(/^\s*\d+[.)]\s+/, "")) + "</li>"; }).join("") + "</ol>");
      } else {
        out.push("<p>" + S.md(lines.join(" ")) + "</p>");
      }
    });
    return out.join("");
  };

  // Plain text (aria labels, titles, clipboard, search index): markup stripped, digits localised.
  S.plain = function (x) {
    var s = S.t(x);
    s = String(s)
      .replace(/\*\*|==|`/g, "")
      .replace(/\{(L[2-7])\}/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
    return S.isFa() ? digitText(s) : s;
  };
  // Raw text with markup stripped but digits untouched (search matching, both languages).
  S.raw = function (x) {
    return String(S.t(x)).replace(/\*\*|==|`/g, "").replace(/\{(L[2-7])\}/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  };
  // Normalise Persian/Arabic letter variants, ZWNJ and digits so search matches either spelling.
  S.norm = function (s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[‌‍]/g, "")
      .replace(/[-‐‑–—]/g, "")
      .replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/[أإآ]/g, "ا").replace(/ة/g, "ه")
      .replace(/[ً-ٟ]/g, "")
      .replace(/[۰-۹]/g, function (d) { return String(FA_DIGITS.indexOf(d)); });
  };

  /* ---------- levels (shared vocabulary) ---------- */
  S.LEVELS = ["L2", "L3", "L4", "L5", "L6", "L7"];
  S.levelIndex = function (id) { return S.LEVELS.indexOf(id); };
  S.nextLevel = function (id) { var i = S.levelIndex(id); return i >= 0 && i < S.LEVELS.length - 1 ? S.LEVELS[i + 1] : null; };
  S.prevLevel = function (id) { var i = S.levelIndex(id); return i > 0 ? S.LEVELS[i - 1] : null; };

  /* ---------- icons (24px stroke icons, currentColor) ---------- */
  var P = {
    ladder: '<path d="M7 3v18M17 3v18M7 7.5h10M7 12.5h10M7 17.5h10"/>',
    home: '<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
    stairs: '<path d="M3 20h5v-5h5v-5h5V5h3"/><path d="M3 20v1M21 5v16"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
    door: '<path d="M4 21h16M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"/><circle cx="14.5" cy="12" r="1" fill="currentColor"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5 3.5-5 3.5z"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3"/><circle cx="12" cy="17" r=".6" fill="currentColor"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.6 17.2a1.4 1.4 0 0 0 2 2l5.7-5.7a4 4 0 0 0 5.2-5.4l-2.4 2.4-2.1-.4-.4-2.1z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    auto: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    check: '<path d="m5 12.5 4.2 4.2L19 7"/>',
    x: '<path d="M7 7l10 10M17 7 7 17"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    dot: '<circle cx="12" cy="12" r="3" fill="currentColor"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.8.6 1.1 1.3 1.1 2.2h5c0-.9.3-1.6 1.1-2.2A6 6 0 0 0 12 3z"/>',
    alert: '<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.5"/><circle cx="12" cy="17" r=".6" fill="currentColor"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".7" fill="currentColor"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    rocket: '<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M9 15l-3-3 4-8 8-1-1 8-8 4z"/><circle cx="14.5" cy="9.5" r="1.5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.5 3.2 8.3 7.5 9.5 4.3-1.2 7.5-5 7.5-9.5V6z"/>',
    star: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    reset: '<path d="M4 4v6h6"/><path d="M4.5 10A8 8 0 1 1 6 16.5"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.7A8 8 0 1 1 21 12z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
    swap: '<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
    scale: '<path d="M12 4v16M6 20h12M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    chart: '<path d="M4 20V4M4 20h16"/><path d="M8 16v-5M12 16V8M16 16v-8"/>',
    sparkle: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    anchor: '<circle cx="12" cy="5" r="2"/><path d="M12 7v14M5 13a7 7 0 0 0 14 0M8 11H5l-1 2M16 11h3l1 2"/>',
    mountain: '<path d="m3 20 6-11 4 6 2-3 6 8z"/>',
    filter: '<path d="M4 5h16l-6 8v6l-4-2v-4z"/>',
    pen: '<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1" fill="currentColor"/><circle cx="4.5" cy="12" r="1" fill="currentColor"/><circle cx="4.5" cy="18" r="1" fill="currentColor"/>',
    handshake: '<path d="M3 11l4-4 4 2 3-2 4 3 3-2v7l-4 3-3-1-3 2-4-2-4-2z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M4.2 7.2l2.6 1.5M17.2 15.3l2.6 1.5M4.2 16.8l2.6-1.5M17.2 8.7l2.6-1.5"/>'
  };
  S.ICONS = P;
  S.icon = function (name, cls) {
    return '<svg class="ic' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (P[name] || P.dot) + "</svg>";
  };

  /* ---------- DOM helpers ---------- */
  S.$ = function (sel, root) { return (root || document).querySelector(sel); };
  S.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  // Delegated listener: on(root, "click", "[data-x]", function (e, el) {...})
  S.on = function (root, ev, sel, fn) {
    root.addEventListener(ev, function (e) {
      var el = e.target.closest ? e.target.closest(sel) : null;
      if (el && root.contains(el)) fn.call(el, e, el);
    });
  };
  S.uid = (function () { var n = 0; return function (p) { n += 1; return (p || "id") + n; }; })();

  S.copy = function (text, done) {
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (done) done(ok);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { if (done) done(true); }, fallback);
    } else fallback();
  };

  S.clamp = function (n, lo, hi) { return Math.max(lo, Math.min(hi, n)); };
  S.avg = function (a) { return a.length ? a.reduce(function (s, x) { return s + x; }, 0) / a.length : 0; };
})();

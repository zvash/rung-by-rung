/* App shell: routing, navigation, language/theme/"my level", search palette, scroll-spy. */
(function () {
  "use strict";
  var S = window.SWE, t = S.t, icon = S.icon, U = S.ui;
  var host, page, current = { id: null, param: null, root: null }, searchIndex = null, spyCleanup = null;

  /* ---------- theme ---------- */
  function applyTheme() {
    var root = document.documentElement;
    if (S.state.theme === "light" || S.state.theme === "dark") root.setAttribute("data-theme", S.state.theme);
    else root.removeAttribute("data-theme");
    var btn = S.$("#themeBtn");
    if (btn) {
      var ic = S.state.theme === "light" ? "sun" : S.state.theme === "dark" ? "moon" : "auto";
      var lbl = S.state.theme === "light" ? U.u("themeLight") : S.state.theme === "dark" ? U.u("themeDark") : U.u("theme");
      btn.innerHTML = icon(ic);
      btn.setAttribute("aria-label", lbl);
      btn.title = lbl;
    }
  }
  function cycleTheme() {
    var order = ["system", "light", "dark"];
    S.state.theme = order[(order.indexOf(S.state.theme) + 1) % order.length];
    S.store.set("theme", S.state.theme);
    applyTheme();
  }

  /* ---------- language ---------- */
  function applyLang() {
    var fa = S.isFa();
    document.documentElement.lang = fa ? "fa" : "en";
    document.documentElement.dir = fa ? "rtl" : "ltr";
    document.title = S.plain(S.data.ui.appName);
  }
  function setLang(lang) {
    if (lang === S.state.lang) return;
    S.state.lang = lang;
    S.store.set("lang", lang);
    searchIndex = null;
    applyLang();
    renderShell();
    route(true);
  }

  /* ---------- "my level" ---------- */
  S.setMe = function (lvl) {
    S.state.me = lvl || null;
    S.store.set("me", S.state.me);
    updateMeChip();
    route(true, true);
    U.toast(lvl ? U.u("levelSet") : "—");
  };
  function updateMeChip() {
    var b = S.$("#meBtn");
    if (!b) return;
    var me = S.state.me;
    b.innerHTML = icon("user") + (me ? "<span class=\"me-lab\">" + U.u("myLevel") + "</span>" + S.lv(me) : '<span class="me-set">' + U.u("setLevel") + "</span>");
    b.classList.toggle("is-set", !!me);
  }
  function mePopHtml() {
    var h = '<div class="me-pop-in"><strong>' + U.u("myLevelTitle") + "</strong><p>" + U.u("myLevelHelp") + '</p><div class="me-grid">';
    S.LEVELS.forEach(function (id) {
      h += '<button type="button" class="me-opt' + (S.state.me === id ? " on" : "") + '" data-me="' + id + '">' + S.lv(id) + "<span>" + S.esc(U.levelName(id)) + "</span></button>";
    });
    h += '</div><div class="me-foot"><a href="#/locate" data-me-close>' + icon("target") + U.u("notSure") + "</a>";
    if (S.state.me) h += '<button type="button" class="link-btn" data-me="">' + U.u("clearLevel") + "</button>";
    return h + "</div></div>";
  }
  function toggleMePop(force) {
    var pop = S.$("#mePop"), btn = S.$("#meBtn");
    if (!pop) return;
    var open = typeof force === "boolean" ? force : pop.hasAttribute("hidden");
    if (open) { pop.innerHTML = mePopHtml(); pop.removeAttribute("hidden"); } else pop.setAttribute("hidden", "");
    btn.setAttribute("aria-expanded", String(open));
  }

  /* ---------- shell ---------- */
  function brandMark() {
    return '<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect x="1" y="1" width="30" height="30" rx="9" fill="var(--ink)"/>' +
      '<path d="M10.5 7v18M21.5 7v18" stroke="var(--surface)" stroke-width="2.2" stroke-linecap="round"/>' +
      '<path d="M10.5 21h11M10.5 15.5h11" stroke="var(--surface)" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>' +
      '<path d="M10.5 10h11" stroke="var(--hl)" stroke-width="3" stroke-linecap="round"/></svg>';
  }

  function renderShell() {
    var visited = S.store.get("visited", {});
    var top = '<a class="skip" href="#/" data-skip>' + U.u("skip") + "</a>" +
      '<header class="topbar">' +
      '<button class="icon-btn menu-btn" id="menuBtn" aria-label="' + S.esc(U.u("menu")) + '" aria-expanded="false" aria-controls="sidebar">' + icon("menu") + "</button>" +
      '<a class="brand" href="#/home">' + brandMark() + '<span class="brand-name">' + S.md(S.data.ui.appName) + '<span class="brand-sub"> · ' + S.md(S.data.ui.appSub) + "</span></span></a>" +
      '<div class="top-actions">' +
      '<button class="search-btn" id="searchBtn" aria-label="' + S.esc(U.u("searchLabel")) + '">' + icon("search") + "<span>" + U.u("search") + "</span><kbd>/</kbd></button>" +
      '<div class="me-wrap"><button class="me-btn" id="meBtn" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="mePop"></button><div class="me-pop" id="mePop" hidden></div></div>' +
      '<div class="seg lang" role="group" aria-label="' + S.esc(U.u("language")) + '"><button type="button" data-lang="en" aria-pressed="' + !S.isFa() + '">EN</button><button type="button" data-lang="fa" class="fa-label" aria-pressed="' + S.isFa() + '">فا</button></div>' +
      '<button class="icon-btn" id="themeBtn" type="button"></button>' +
      "</div></header>";
    var nav = '<nav class="sidebar" id="sidebar" aria-label="' + S.esc(U.u("menu")) + '">';
    S.data.ui.nav.forEach(function (g) {
      nav += '<div class="nav-group"><div class="nav-group-label">' + S.md(g.group) + "</div>";
      g.items.forEach(function (it) {
        nav += '<a class="nav-link" data-nav="' + it.id + '" href="#/' + it.id + '">' + icon(it.icon) + "<span>" + S.md(it.label) + '</span><span class="visited' + (visited[it.id] ? " on" : "") + '" title="' + S.esc(U.u("visited")) + '"></span></a>';
      });
      nav += "</div>";
    });
    nav += '<div class="sidebar-foot">' + icon("shield") + "<span>" + U.u("footer") + "</span></div></nav>";
    host.innerHTML = top + '<div class="layout">' + nav + '<main class="main" id="main" tabindex="-1"><div class="page" id="page"></div></main></div>';
    page = S.$("#page");
    applyTheme();
    updateMeChip();
    wireShell();
  }

  function wireShell() {
    S.$("#themeBtn").addEventListener("click", cycleTheme);
    S.$$("[data-lang]").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); }); });
    S.$("#searchBtn").addEventListener("click", openSearch);
    S.$("#menuBtn").addEventListener("click", function () { toggleNav(); });
    S.$("#sidebar").addEventListener("click", function (e) { if (e.target.closest(".nav-link")) toggleNav(false); });
    S.$("[data-skip]").addEventListener("click", function (e) { e.preventDefault(); S.$("#main").focus(); });
    S.$("#meBtn").addEventListener("click", function (e) { e.stopPropagation(); toggleMePop(); });
    S.$("#mePop").addEventListener("click", function (e) {
      e.stopPropagation();
      var b = e.target.closest("[data-me]");
      if (b) { toggleMePop(false); S.setMe(b.getAttribute("data-me") || null); return; }
      if (e.target.closest("[data-me-close]")) toggleMePop(false);
    });
  }

  function toggleNav(force) {
    var open = typeof force === "boolean" ? force : !document.body.classList.contains("nav-open");
    document.body.classList.toggle("nav-open", open);
    S.$("#menuBtn").setAttribute("aria-expanded", String(open));
    var scrim = S.$(".scrim");
    if (open && !scrim) {
      scrim = document.createElement("div");
      scrim.className = "scrim";
      scrim.addEventListener("click", function () { toggleNav(false); });
      document.body.appendChild(scrim);
    } else if (!open && scrim) scrim.remove();
  }

  /* ---------- routing ---------- */
  function parseHash() {
    var raw = location.hash || "";
    if (raw && raw.indexOf("#/") !== 0) return null; // in-page anchor or foreign hash: ignore
    var parts = raw.replace(/^#\/?/, "").split("/");
    var id = parts[0] || "home";
    if (!S.views[id]) id = "home";
    return { id: id, param: parts.slice(1).join("/") || null };
  }

  function stickyOffset() {
    var tb = S.$(".topbar"), pn = S.$(".pillnav");
    return (tb ? tb.offsetHeight : 56) + (pn ? pn.offsetHeight : 0) + 12;
  }
  function scrollToSection(id) {
    if (!id || !current.root) return false;
    var el = S.$("#sec-" + id, current.root) || S.$("#" + id, current.root);
    if (!el) return false;
    var y = el.getBoundingClientRect().top + window.pageYOffset - stickyOffset();
    window.scrollTo({ top: Math.max(0, y), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    return true;
  }
  S.scrollToSection = scrollToSection;

  function route(force, keepScroll) {
    var r = parseHash();
    if (!r) return;
    var view = S.views[r.id];
    if (!view) return;
    var same = r.id === current.id;
    if (same && !force) {
      current.param = r.param;
      if (view.onParam) view.onParam(current.root, r.param);
      else if (r.param) scrollToSection(r.param);
      return;
    }
    var y = window.pageYOffset;
    if (current.id && S.views[current.id] && S.views[current.id].destroy) S.views[current.id].destroy();
    if (spyCleanup) { spyCleanup(); spyCleanup = null; }
    current = { id: r.id, param: r.param, root: null };
    page.innerHTML = "";
    var root = document.createElement("div");
    root.className = "view view-" + r.id;
    page.appendChild(root);
    current.root = root;
    view.render(root, r.param);
    U.bind(root);
    afterRender(r, keepScroll ? y : null);
  }

  function afterRender(r, keepY) {
    var label = S.pageLabel(r.id);
    document.title = S.plain(label) + " · " + S.plain(S.data.ui.appName);
    S.$$(".nav-link").forEach(function (a) {
      var on = a.getAttribute("data-nav") === r.id;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var visited = S.store.get("visited", {});
    if (!visited[r.id]) {
      visited[r.id] = 1;
      S.store.set("visited", visited);
      var dot = S.$('.nav-link[data-nav="' + r.id + '"] .visited');
      if (dot) dot.classList.add("on");
    }
    if (keepY != null) window.scrollTo(0, keepY);
    else if (r.param && S.views[r.id].onParam) { var v = S.views[r.id], rt = current.root; setTimeout(function () { if (current.root === rt) v.onParam(rt, r.param); }, 30); }
    else if (r.param) setTimeout(function () { scrollToSection(r.param); }, 30);
    else window.scrollTo(0, 0);
    setupSpy();
    try { S.$("#main").focus({ preventScroll: true }); } catch (e) { /* ignore */ }
  }

  function setupSpy() {
    var pills = S.$$(".pillnav [data-spy]", current.root);
    if (!pills.length) return;
    var secs = pills.map(function (p) { return S.$("#sec-" + p.getAttribute("data-spy"), current.root); });
    var ticking = false;
    function update() {
      ticking = false;
      var off = stickyOffset() + 24, idx = 0;
      secs.forEach(function (el, i) { if (el && el.getBoundingClientRect().top <= off) idx = i; });
      pills.forEach(function (p, i) { p.classList.toggle("is-current", i === idx); });
      var cur = pills[idx], wrap = cur && cur.parentNode;
      if (wrap && wrap.scrollWidth > wrap.clientWidth) {
        var target = cur.offsetLeft - (wrap.clientWidth - cur.clientWidth) / 2;
        wrap.scrollLeft = S.isFa() ? target : target; // browsers normalise scrollLeft in RTL per spec
      }
    }
    function onScroll() { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    spyCleanup = function () { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
    update();
  }

  /* ---------- search palette ---------- */
  function buildIndex() {
    var items = [];
    S.data.ui.nav.forEach(function (g) {
      g.items.forEach(function (it) {
        items.push({ kind: g.group, title: it.label, text: "", route: it.id, page: true });
      });
    });
    Object.keys(S.views).forEach(function (id) {
      var v = S.views[id];
      if (v && v.search) {
        try { (v.search() || []).forEach(function (x) { items.push(x); }); } catch (e) { /* ignore a broken provider */ }
      }
    });
    return items.map(function (x) {
      var title = S.raw(x.title), text = S.raw(x.text || "");
      return { kind: S.raw(x.kind), title: title, text: text, route: x.route, nt: S.norm(title), nx: S.norm(text), page: x.page };
    });
  }
  function runSearch(q) {
    q = S.norm(q.trim());
    if (!q) return [];
    if (!searchIndex) searchIndex = buildIndex();
    var words = q.split(/\s+/).filter(Boolean), out = [];
    searchIndex.forEach(function (it) {
      var score = 0, ok = true;
      words.forEach(function (w) {
        var inT = it.nt.indexOf(w), inX = it.nx.indexOf(w);
        if (inT < 0 && inX < 0) { ok = false; return; }
        score += (inT === 0 ? 8 : inT > 0 ? 5 : 0) + (inX >= 0 ? 1 : 0);
      });
      if (ok) out.push({ it: it, score: score + (it.page ? 2 : 0) });
    });
    out.sort(function (a, b) { return b.score - a.score; });
    return out.slice(0, 12).map(function (o) { return o.it; });
  }
  function openSearch() {
    if (S.$("#searchModal")) return;
    var el = document.createElement("div");
    el.id = "searchModal";
    el.className = "search-modal";
    el.innerHTML = '<div class="search-box" role="dialog" aria-modal="true" aria-label="' + S.esc(U.u("searchLabel")) + '">' +
      '<div class="search-input">' + icon("search") + '<input type="search" id="searchInput" autocomplete="off" spellcheck="false" placeholder="' + S.esc(U.u("searchPh")) + '"></div>' +
      '<ul class="search-results" id="searchResults" role="listbox"></ul><div class="search-hint">' + U.u("searchHint") + "</div></div>";
    document.body.appendChild(el);
    var input = S.$("#searchInput"), list = S.$("#searchResults"), sel = 0, results = [];
    function draw() {
      if (!input.value.trim()) { list.innerHTML = ""; return; }
      if (!results.length) { list.innerHTML = '<li class="search-empty">' + U.u("searchEmpty") + "</li>"; return; }
      list.innerHTML = results.map(function (r, i) {
        var snip = r.text ? S.esc(r.text.length > 110 ? r.text.slice(0, 110) + "…" : r.text) : "";
        return '<li role="option" data-i="' + i + '" class="' + (i === sel ? "on" : "") + '"><span class="sr-kind">' + S.esc(r.kind) + "</span><strong>" + S.esc(S.digits(r.title)) + "</strong>" + (snip ? "<span class=\"sr-snip\">" + S.digits(snip) + "</span>" : "") + "</li>";
      }).join("");
    }
    function go(i) { var r = results[i]; if (!r) return; close(); location.hash = "#/" + r.route; }
    function close() { el.remove(); document.removeEventListener("keydown", onKey, true); }
    function onKey(e) {
      if (e.key === "Escape") { close(); e.preventDefault(); }
      else if (e.key === "ArrowDown") { sel = Math.min(results.length - 1, sel + 1); draw(); keep(); e.preventDefault(); }
      else if (e.key === "ArrowUp") { sel = Math.max(0, sel - 1); draw(); keep(); e.preventDefault(); }
      else if (e.key === "Enter") { go(sel); e.preventDefault(); }
    }
    function keep() { var on = S.$("li.on", list); if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest" }); }
    input.addEventListener("input", function () { results = runSearch(input.value); sel = 0; draw(); });
    list.addEventListener("click", function (e) { var li = e.target.closest("li[data-i]"); if (li) go(+li.getAttribute("data-i")); });
    el.addEventListener("click", function (e) { if (e.target === el) close(); });
    document.addEventListener("keydown", onKey, true);
    input.focus();
  }

  /* ---------- global keys ---------- */
  document.addEventListener("keydown", function (e) {
    var tag = (e.target && e.target.tagName) || "";
    var typing = /INPUT|TEXTAREA|SELECT/.test(tag) || (e.target && e.target.isContentEditable);
    if ((e.key === "/" && !typing && !e.ctrlKey && !e.metaKey) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
      e.preventDefault();
      openSearch();
    } else if (e.key === "Escape") {
      toggleMePop(false);
      if (document.body.classList.contains("nav-open")) toggleNav(false);
    }
  });
  document.addEventListener("click", function (e) {
    var pop = S.$("#mePop");
    if (pop && !pop.hasAttribute("hidden") && !e.target.closest(".me-wrap")) toggleMePop(false);
  });

  /* ---------- boot ---------- */
  function boot() {
    host = document.getElementById("app");
    applyLang();
    renderShell();
    window.addEventListener("hashchange", function () { route(false); });
    route(true);
  }
  S.go = function (r) { location.hash = "#/" + r; };
  S.rerender = function () { route(true, true); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();

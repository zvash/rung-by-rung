/* Questions people ask: searchable, filterable accordions. Entries open by id (#/faq/<id>). */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc;

  var GROUPS = [
    { id: "basics", icon: "book", name: L("Basics", "مبانی") },
    { id: "growth", icon: "trend", name: L("Growing", "رشد") },
    { id: "paths", icon: "route", name: L("Paths", "مسیرها") },
    { id: "hiring", icon: "door", name: L("Hiring & moving", "استخدام و جابه‌جایی") },
    { id: "culture", icon: "users", name: L("Team life", "کار در تیم") },
    { id: "ai", icon: "sparkle", name: L("AI & the market", "AI و بازار") }
  ];
  function groupName(id) { for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].id === id) return GROUPS[i].name; return id; }

  function entries() {
    var list = (S.data.faq || []).slice();
    var order = GROUPS.map(function (g) { return g.id; });
    // stable sort by group order, keeping authoring order inside a group
    return list.map(function (e, i) { return { e: e, i: i }; }).sort(function (a, b) {
      var d = order.indexOf(a.e.group) - order.indexOf(b.e.group);
      return d || a.i - b.i;
    }).map(function (x) { return x.e; });
  }

  function itemHtml(e) {
    var chips = (e.levels || []).map(function (l) { return S.lv(l); }).join("");
    var h = '<details class="acc faq-item" id="faq-' + e.id + '" data-id="' + e.id + '" data-group="' + e.group + '"><summary>' +
      '<span class="faq-q"><span class="faq-meta"><span class="tag">' + md(groupName(e.group)) + "</span>" + (chips ? '<span class="faq-lv">' + chips + "</span>" : "") + "</span>" +
      '<span class="faq-qt">' + md(e.q) + "</span></span>" + icon("chev", "chev") + "</summary>";
    h += '<div class="acc-body"><p class="faq-short">' + md(e.short) + "</p>";
    h += '<div class="faq-body">' + S.rich(e.body) + "</div>";
    if (e.steps && e.steps.length) {
      h += '<h4 class="h-sm">' + icon("check") + " " + md(L("Try this", "این کار را امتحان کنید")) + '</h4><ol class="try">' + e.steps.map(function (s) { return "<li>" + md(s) + "</li>"; }).join("") + "</ol>";
    }
    if (e.story) h += U.callout("story", L("A story (an illustrative composite)", "داستانی از ترکیب چند الگو، برای توضیح موضوع"), e.story);
    if (e.links && e.links.length) {
      h += '<div class="faq-links">' + e.links.map(function (l) {
        return '<a class="pill" href="#/' + l.route + '">' + md(l.label) + icon("arrow", "dir") + "</a>";
      }).join("") + "</div>";
    }
    h += '<p class="faq-perma"><a href="#/faq/' + e.id + '" data-copy-link="' + e.id + '">' + icon("link") + " " + md(L("Copy link to this answer", "کپی لینک این پاسخ")) + "</a></p>";
    return h + "</div></details>";
  }

  function plainText(e) {
    return S.norm([S.raw(e.q), S.raw(e.short), S.raw(e.body)].join(" "));
  }

  S.views.faq = {
    render: function (root, param) {
      var all = entries();
      var st = { group: "all", level: "all", q: "" };
      var h = U.pageHead({
        route: "faq", kicker: L("Reference", "مرجع"), icon: "help",
        title: L("Questions people ask", "پرسش‌های رایج"),
        lead: L("The questions engineers bring to career conversations, answered plainly. Search, filter by topic or level, and open what you need.",
                "پاسخ‌های ساده و روشن به پرسش‌هایی که مهندس‌ها در گفتگوهای مسیر شغلی مطرح می‌کنند. جست‌وجو کنید، بر اساس موضوع یا سطح فیلتر کنید و پاسخ موردنیازتان را باز کنید."),
        tldr: [
          L("Every answer starts with the short version. Open it for the reasoning, things to try this week, and links to the tools.",
            "هر پاسخ با خلاصه شروع می‌شود. آن را باز کنید تا توضیح بیشتر، پیشنهادهایی برای همین هفته و لینک ابزارها را ببینید."),
          L("Where the evidence is thin, we say so. Company facts are approximate and dated; AI and market items are as of October 2026.",
            "هر جا شواهد کافی نداریم، صریح بیان کرده‌ایم. اطلاعات شرکت‌ها تقریبی است و تاریخ آن مشخص شده. مطالب AI و بازار کار مربوط به اکتبر 2026 است."),
          L("The stories are composites with made-up numbers. They show how a situation tends to go, not what happened to a real person.",
            "داستان‌ها از ترکیب چند الگو ساخته شده‌اند و اعدادشان فرضی است. آن‌ها الگوی یک موقعیت کاری را نشان می‌دهند و روایت زندگی یک فرد واقعی نیستند.")
        ]
      });
      var groupChips = U.pill(L("All topics", "همه‌ی موضوع‌ها"), 'data-fg="all"', true) + GROUPS.map(function (g) {
        return U.pill(g.name, 'data-fg="' + g.id + '"', false);
      }).join("");
      var levelChips = U.pill(L("All levels", "همه‌ی سطح‌ها"), 'data-fl="all"', true) + S.LEVELS.map(function (l) {
        return '<button type="button" class="pill lvl-pill" data-fl="' + l + '" aria-pressed="false">' + S.lv(l) + "</button>";
      }).join("");
      h += '<div class="faq-tools"><div class="faq-search">' + icon("search") + '<input type="search" id="faqSearch" autocomplete="off" spellcheck="false" placeholder="' + esc(S.plain(L("Search the questions…", "جست‌وجو در پرسش‌ها…"))) + '" aria-label="' + esc(S.plain(L("Search the questions", "جست‌وجو در پرسش‌ها"))) + '"></div>' +
        '<div class="faq-chips" role="group" aria-label="' + esc(S.plain(L("Topic", "موضوع"))) + '">' + groupChips + "</div>" +
        '<div class="faq-chips" role="group" aria-label="' + esc(S.plain(L("Level", "سطح"))) + '">' + levelChips + "</div>" +
        '<div class="faq-count-row"><div class="faq-count" id="faqCount" aria-live="polite"></div><button type="button" class="btn sm ghost" id="faqToggle">' + md(L("Expand all", "باز کردن همه")) + "</button></div></div>";
      h += '<div class="faq-list" id="faqList">' + all.map(itemHtml).join("") + '</div><p class="faq-none" id="faqNone" hidden>' + md(L("Nothing matches. Try fewer filters or a shorter word.", "نتیجه‌ای پیدا نشد. فیلترهای کمتری انتخاب کنید یا واژه‌ی کوتاه‌تری بنویسید.")) + "</p>";
      h += U.nextCard("toolkit", S.pageLabel("toolkit"), L("Turn an answer into a habit: evidence log, impact statements, a 1:1 kit.", "پاسخ را به عادت کاری تبدیل کنید: سند دستاوردها، جمله‌های اثرگذاری و بسته‌ی 1:1."));
      root.innerHTML = h;

      var items = S.$$(".faq-item", root);
      var index = {};
      all.forEach(function (e) { index[e.id] = { el: S.$("#faq-" + e.id, root), text: plainText(e), e: e }; });

      function apply() {
        var words = S.norm(st.q.trim()).split(/\s+/).filter(Boolean), shown = 0;
        all.forEach(function (e) {
          var it = index[e.id], ok = true;
          if (st.group !== "all" && e.group !== st.group) ok = false;
          if (ok && st.level !== "all" && (e.levels || []).indexOf(st.level) < 0) ok = false;
          if (ok && words.length) words.forEach(function (w) { if (it.text.indexOf(w) < 0) ok = false; });
          it.el.hidden = !ok;
          if (ok) shown += 1;
        });
        S.$("#faqCount", root).textContent = S.digits(shown) + " / " + S.digits(all.length) + " " + S.plain(L("questions", "پرسش"));
        S.$("#faqNone", root).hidden = shown > 0;
      }
      function setPressed(sel, attr, value) {
        S.$$(sel, root).forEach(function (b) {
          var on = b.getAttribute(attr) === value;
          b.setAttribute("aria-pressed", String(on)); b.classList.toggle("is-on", on);
        });
      }
      S.on(root, "click", "[data-fg]", function (e, b) { st.group = b.getAttribute("data-fg"); setPressed("[data-fg]", "data-fg", st.group); apply(); });
      S.on(root, "click", "[data-fl]", function (e, b) { st.level = b.getAttribute("data-fl"); setPressed("[data-fl]", "data-fl", st.level); apply(); });
      S.$("#faqSearch", root).addEventListener("input", function () { st.q = this.value; apply(); });
      S.on(root, "click", "#faqToggle", function (e, b) {
        var vis = items.filter(function (d) { return !d.hidden; }), anyClosed = vis.some(function (d) { return !d.open; });
        vis.forEach(function (d) { d.open = anyClosed; });
        b.textContent = S.plain(anyClosed ? L("Collapse all", "بستن همه") : L("Expand all", "باز کردن همه"));
      });
      // keep the address bar pointing at the open answer (no navigation)
      items.forEach(function (d) {
        d.addEventListener("toggle", function () {
          var open = items.filter(function (x) { return x.open; });
          try {
            if (open.length === 1) history.replaceState(null, "", "#/faq/" + open[0].getAttribute("data-id"));
            else if (!open.length) history.replaceState(null, "", "#/faq");
          } catch (err) { /* file:// restrictions: ignore */ }
        });
      });
      S.on(root, "click", "[data-copy-link]", function (e, a) {
        e.preventDefault();
        var url = location.href.split("#")[0] + "#/faq/" + a.getAttribute("data-copy-link");
        S.copy(url, function (ok) { U.toast(ok ? U.u("copied") : U.u("copyFail")); });
      });
      // my level shortcut: pre-select the chip once per visit if set and nothing is open by id
      apply();
      view.root = root; view.st = st; view.apply = apply; view.setPressed = setPressed; view.index = index;
      if (param) view.open(param);
    },

    open: function (id) { return openEntry(id); },
    onParam: function (root, param) { if (param) openEntry(param); },
    search: function () {
      return (S.data.faq || []).map(function (e) {
        return { kind: L("Question", "پرسش"), title: e.q, text: e.short, route: "faq/" + e.id };
      });
    }
  };
  var view = S.views.faq;

  function openEntry(id) {
    var root = view.root;
    if (!root || !view.index || !view.index[id]) return false;
    var it = view.index[id];
    if (it.el.hidden) { // a filter hides it: clear filters first
      view.st.group = "all"; view.st.level = "all"; view.st.q = "";
      var input = S.$("#faqSearch", root); if (input) input.value = "";
      view.setPressed("[data-fg]", "data-fg", "all"); view.setPressed("[data-fl]", "data-fl", "all");
      view.apply();
    }
    S.$$(".faq-item[open]", root).forEach(function (d) { if (d !== it.el) d.open = false; });
    it.el.open = true;
    setTimeout(function () {
      var y = it.el.getBoundingClientRect().top + window.pageYOffset - (S.$(".topbar") ? S.$(".topbar").offsetHeight : 60) - 16;
      window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
    }, 30);
    return true;
  }
})();

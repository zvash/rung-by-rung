/* Glossary, sources and method. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc;
  var KIND_CONF = { primary: "H", secondary: "M", anecdotal: "L" };
  var KIND_LABEL = { primary: L("primary", "اصلی"), secondary: L("secondary", "دست‌دوم"), anecdotal: L("anecdotal or aggregator", "روایتی یا تجمیعی") };

  /* ---------------- glossary ---------------- */
  function sortedGlossary() {
    var list = (S.data.glossary || []).slice();
    var loc = S.isFa() ? "fa" : "en";
    return list.sort(function (a, b) { return S.plain(a.term).localeCompare(S.plain(b.term), loc, { sensitivity: "base" }); });
  }
  function termMap() { var m = {}; (S.data.glossary || []).forEach(function (g) { m[g.id] = g; }); return m; }
  function glossaryItem(g, map) {
    var rel = (g.related || []).filter(function (id) { return map[id]; }).map(function (id) {
      return '<button type="button" class="pill gl-rel" data-gl="' + id + '">' + md(map[id].term) + "</button>";
    }).join("");
    return '<div class="gl-item" id="gl-' + g.id + '" data-gl-item="' + g.id + '"><dt>' + md(g.term) + "</dt><dd><p>" + md(g.def) + "</p>" + (rel ? '<div class="gl-rels"><span class="subtle sm">' + md(L("See also:", "ببینید:")) + "</span> " + rel + "</div>" : "") + "</dd></div>";
  }
  function glossarySection() {
    var list = sortedGlossary(), map = termMap();
    var h = '<div class="faq-search gl-search">' + icon("search") + '<input type="search" id="glSearch" autocomplete="off" spellcheck="false" placeholder="' + esc(S.plain(L("Search the glossary…", "جست‌وجو در واژه‌نامه…"))) + '" aria-label="' + esc(S.plain(L("Search the glossary", "جست‌وجو در واژه‌نامه"))) + '"></div>';
    h += '<p class="faq-count" id="glCount" aria-live="polite"></p><dl class="gl" id="glList">' + list.map(function (g) { return glossaryItem(g, map); }).join("") + '</dl><p class="faq-none" id="glNone" hidden>' + md(L("No term matches.", "هیچ اصطلاحی پیدا نشد.")) + "</p>";
    return h;
  }

  /* ---------------- sources ---------------- */
  function sourceCard(x) {
    return '<li class="src" data-topic="' + x.topic + '" data-kind="' + x.kind + '"><div class="src-h"><a class="ext src-t" href="' + esc(x.url) + '" target="_blank" rel="noopener noreferrer">' + esc(x.title) + "</a>" + U.confTag(KIND_CONF[x.kind]) + "</div>" +
      '<p class="src-m">' + esc(x.org) + (x.year && x.year !== "—" ? " · <span dir=\"ltr\">" + esc(S.digits(x.year)) + "</span>" : "") + "</p><p class=\"src-n\">" + md(x.note) + "</p></li>";
  }
  function sourcesSection() {
    var topics = S.data.sourceTopics || [], list = S.data.sources || [];
    var h = '<div class="faq-chips src-filter" role="group" aria-label="' + esc(S.plain(L("Topic", "موضوع"))) + '">' + U.pill(L("All topics", "همه‌ی موضوع‌ها"), 'data-st="all"', true) + topics.map(function (t) { return U.pill(t.name, 'data-st="' + t.id + '"', false); }).join("") + "</div>";
    h += '<div class="faq-chips src-filter" role="group" aria-label="' + esc(S.plain(L("Kind of source", "نوع منبع"))) + '">' + U.pill(L("Any kind", "هر نوع"), 'data-sk="all"', true) + ["primary", "secondary", "anecdotal"].map(function (k) { return U.pill(KIND_LABEL[k], 'data-sk="' + k + '"', false); }).join("") + "</div>";
    h += '<p class="faq-count" id="srcCount" aria-live="polite"></p>';
    h += '<ul class="src-list" id="srcList">' + list.map(sourceCard).join("") + "</ul>";
    h += U.callout("note", L("How to read the tags", "برچسب‌ها را چطور بخوانید"), L("**Primary source**: the employer, author or dataset itself. **Reputable secondary**: careful reporting or analysis of something else. **As reported, weaker evidence**: crowd-sourced figures, aggregators or anything we could not verify. Where we only saw a search summary of a page, the note says so, and the claim in the guide carries a hedge such as “reportedly”.",
      "**منبع اصلی**: خودِ شرکت، نویسنده یا مجموعه‌داده. **دست‌دوم معتبر**: گزارش یا تحلیل دقیق از چیز دیگر. **گزارشی، با شواهد ضعیف‌تر**: اعداد جمع‌سپاری‌شده، تجمیع‌کننده‌ها یا هر چیزی که نتوانستیم تایید کنیم. جایی که فقط خلاصه‌ی جست‌وجوی یک صفحه را دیدیم، یادداشت همین را می‌گوید و ادعا در راهنما عبارتی مثل «گزارش شده» دارد."));
    return h;
  }

  /* ---------------- method ---------------- */
  function methodSection() {
    function card(ic, title, body) { return '<div class="card meth"><h3>' + icon(ic) + " " + md(title) + "</h3>" + S.rich(body) + "</div>"; }
    var h = '<div class="grid c2">';
    h += card("ladder", L("What the ladder is", "نردبان چیست"), L("The six levels, four lenses plus impact, and three habits are a reference scale derived from a published engineering ladder and rewritten in our own words. It isn't any employer's ladder. Employers are named only where a fact is unique to them or where we compare, and every such fact stays inside what the sources support.",
      "شش سطح، چهار بُعد به‌علاوه‌ی اثرگذاری، و سه عادت یک مقیاس مرجع است که از یک نردبان مهندسی منتشرشده گرفته و با کلمه‌های خودمان بازنویسی شده. نردبان هیچ شرکتی نیست. شرکت‌ها فقط جایی نام برده می‌شوند که یک واقعیت منحصر به آن‌هاست یا مقایسه می‌کنیم، و هر چنین واقعیتی در حدی می‌ماند که منابع پشتیبانی می‌کنند."));
    h += card("search", L("How the research was done", "پژوهش چطور انجام شد"), L("Public sources only, gathered in early October 2026. Many pages were read through search summaries, and some wouldn't open at all, which is why the sources page says how each one was seen. Claims that rest on weaker sources are hedged (“reportedly”, “self-reported”) or left out. We never invent statistics, quotes or people.",
      "فقط منابع عمومی، که در اوایل اکتبر 2026 گردآوری شد. بسیاری از صفحه‌ها از طریق خلاصه‌ی جست‌وجو خوانده شد و بعضی اصلا باز نشد؛ برای همین صفحه‌ی منابع می‌گوید هرکدام چطور دیده شده. ادعاهایی که روی منبع ضعیف‌تر ایستاده‌اند محتاطانه نوشته می‌شوند («گزارش شده»، «خودگزارش‌شده») یا کنار گذاشته می‌شوند. هرگز آمار، نقل‌قول یا آدم نمی‌سازیم."));
    h += card("users", L("Stories and scenarios", "ماجراها و سناریوها"), L("Every person in a story or scenario is a composite, and every number in them is made up to show a pattern. They are never about real people or companies. The pay figures on the hiring page are different: those come from levels.fyi's self-reported medians and are labelled as such.",
      "هر آدم در یک ماجرا یا سناریو ترکیبی است و هر عددی در آن‌ها برای نشان دادن یک الگو ساخته شده. هرگز درباره‌ی آدم‌ها یا شرکت‌های واقعی نیستند. اعداد حقوق در صفحه‌ی استخدام فرق دارند: آن‌ها از میانه‌های خودگزارش‌شده‌ی levels.fyi می‌آیند و همان‌طور برچسب خورده‌اند."));
    h += card("alert", L("What we don't know", "آنچه نمی‌دانیم"), L("- No credible public data on how often people are down-levelled, how often promotion cases succeed, or typical time in level.\n- Pay figures are self-reported, with no as-of date, and mostly US.\n- European and non-US employers are thinly covered.\n- The AI and job-market pages are as of early October 2026 and will age fast.",
      "- داده‌ی عمومی معتبری نیست که بگوید آدم‌ها چقدر down-level می‌شوند، پرونده‌های ارتقا چقدر موفق‌اند یا مدت معمول ماندن در سطح چقدر است.\n- اعداد حقوق خودگزارش‌شده‌اند، بدون تاریخ به‌روزرسانی، و بیشتر آمریکا.\n- شرکت‌های اروپایی و غیرآمریکایی کم پوشش داده شده‌اند.\n- صفحه‌های AI و بازار کار تا اوایل اکتبر 2026 هستند و زود کهنه می‌شوند."));
    h += card("shield", L("Your data stays here", "داده‌ی شما اینجا می‌ماند"), L("This guide works offline and makes no network requests. What you type or choose (your level, answers, evidence log) lives in this browser's local storage, under keys that start with “swe.”. There are no accounts and no analytics. Clearing the site data in your browser clears it.",
      "این راهنما آفلاین کار می‌کند و هیچ درخواست شبکه‌ای نمی‌فرستد. آنچه می‌نویسید یا انتخاب می‌کنید (سطح، پاسخ‌ها، سند دستاوردها) در ذخیره‌ی محلی همین مرورگر می‌ماند، با کلیدهایی که با «swe.» شروع می‌شود. حساب کاربری و آمارگیری وجود ندارد. پاک کردن داده‌ی سایت در مرورگر آن را پاک می‌کند."));
    h += card("book", L("Credits and licences", "قدردانی و مجوزها"), L("The Persian text is set in **Vazirmatn**, embedded in the page (SIL Open Font Licence 1.1; the licence file ships in the assets folder). Icons and charts are inline SVG drawn for this guide. There are no external libraries. The ideas belong to the people credited on the sources page: we paraphrase and link, and we don't quote at length.",
      "متن فارسی با **وزیرمتن (Vazirmatn)** حروف‌چینی شده و در صفحه جاسازی شده (مجوز SIL Open Font License 1.1؛ فایل مجوز در پوشه‌ی assets است). آیکون‌ها و نمودارها SVG درون‌صفحه‌ای است که برای این راهنما کشیده شده. هیچ کتابخانه‌ی بیرونی وجود ندارد. ایده‌ها مال کسانی است که در صفحه‌ی منابع نام برده شده‌اند: ما بازنویسی و پیوند می‌دهیم و نقل طولانی نمی‌کنیم."));
    h += "</div>";
    h += '<div class="card sp meth-reset"><h3>' + icon("reset") + " " + md(L("Reset everything stored here", "هر چه اینجا ذخیره شده را بازنشانی کنید")) + "</h3><p>" + md(L("Clears your level, assessment, practice answers, evidence log and every other note this guide saved in your browser. It cannot be undone.", "سطح، خودارزیابی، پاسخ‌های تمرین، سند دستاوردها و هر یادداشت دیگری را که این راهنما در مرورگر شما ذخیره کرده پاک می‌کند. برگشت‌پذیر نیست.")) + '</p><button type="button" class="btn secondary" id="resetAll">' + icon("x") + md(L("Reset everything", "بازنشانی همه‌چیز")) + "</button></div>";
    h += '<div class="card card-flat sp"><h3>' + icon("gear") + " " + md(L("Shortcuts", "میان‌برها")) + '</h3><ul class="keys"><li><kbd>/</kbd> ' + md(L("or", "یا")) + " <kbd>Ctrl</kbd> + <kbd>K</kbd> " + md(L("opens search", "جست‌وجو را باز می‌کند")) + "</li><li><kbd>Esc</kbd> " + md(L("closes search and menus", "جست‌وجو و منوها را می‌بندد")) + "</li><li>" + md(L("Add `?lang=fa` or `?theme=dark` to the address to start in Persian or dark mode.", "برای شروع با فارسی یا حالت تیره `?lang=fa` یا `?theme=dark` را به نشانی اضافه کنید.")) + "</li></ul></div>";
    return h;
  }

  S.views.about = {
    render: function (root, param) {
      var h = U.pageHead({
        route: "about", kicker: L("Reference", "مرجع"), icon: "book",
        title: L("Glossary and sources", "واژه‌نامه و منابع"),
        lead: L("The vocabulary used across the guide, every source behind it with how much to trust it, and how it was put together.",
                "واژگان به‌کاررفته در سراسر راهنما، هر منبع پشت آن با این‌که چقدر باید به آن اعتماد کرد، و این‌که چطور ساخته شده."),
        tldr: [
          L("Forty-seven terms in plain words. Tap a related term to jump to it.", "چهل‌وهفت اصطلاح به زبان ساده. روی اصطلاح مرتبط بزنید تا به آن بروید."),
          L("Sixty-four sources, each tagged primary, secondary or anecdotal, with a note on how we saw it.", "شصت‌وچهار منبع، هرکدام با برچسب اصلی، دست‌دوم یا روایتی، و یادداشتی درباره‌ی این‌که چطور دیدیمش."),
          L("The method page says what we don't know. That list is part of the content.", "صفحه‌ی روش می‌گوید چه چیزی را نمی‌دانیم. آن فهرست بخشی از محتواست.")
        ],
        sections: [
          { id: "glossary", label: L("Glossary", "واژه‌نامه") },
          { id: "sources", label: L("Sources", "منابع") },
          { id: "method", label: L("Method and credits", "روش و قدردانی") }
        ]
      });
      h += U.section("glossary", L("Glossary", "واژه‌نامه"), L("Short definitions, written for the way the terms are used in this guide.", "تعریف‌های کوتاه، نوشته‌شده برای شیوه‌ای که این اصطلاح‌ها در این راهنما به کار می‌روند."), glossarySection());
      h += U.section("sources", L("Sources", "منابع"), L("Linked for you to open online. The guide itself never loads them.", "برای باز کردن آنلاین پیوند داده شده‌اند. خودِ راهنما هرگز آن‌ها را بارگذاری نمی‌کند."), sourcesSection());
      h += U.section("method", L("Method and credits", "روش و قدردانی"), L("What this guide is, how it was researched, what it doesn't know, and what happens to your data.", "این راهنما چیست، چطور پژوهش شد، چه چیزی را نمی‌داند و برای داده‌ی شما چه اتفاقی می‌افتد."), methodSection());
      root.innerHTML = h;

      var items = S.$$("[data-gl-item]", root), count = S.$("#glCount", root);
      var texts = {};
      (S.data.glossary || []).forEach(function (g) { texts[g.id] = S.norm(S.raw(g.term) + " " + S.raw(g.def)); });
      function glFilter() {
        var words = S.norm(S.$("#glSearch", root).value.trim()).split(/\s+/).filter(Boolean), n = 0;
        items.forEach(function (el) {
          var t = texts[el.getAttribute("data-gl-item")] || "", ok = true;
          words.forEach(function (w) { if (t.indexOf(w) < 0) ok = false; });
          el.hidden = !ok; if (ok) n += 1;
        });
        count.textContent = S.digits(n) + " / " + S.digits(items.length) + " " + S.plain(L("terms", "اصطلاح"));
        S.$("#glNone", root).hidden = n > 0;
      }
      S.$("#glSearch", root).addEventListener("input", glFilter);
      glFilter();
      function jumpTo(id) {
        var el = S.$("#gl-" + id, root);
        if (!el) return;
        if (el.hidden) { S.$("#glSearch", root).value = ""; glFilter(); }
        var y = el.getBoundingClientRect().top + window.pageYOffset - (S.$(".topbar").offsetHeight + (S.$(".pillnav") ? S.$(".pillnav").offsetHeight : 0) + 16);
        window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
        el.classList.add("flash"); setTimeout(function () { el.classList.remove("flash"); }, 1600);
      }
      S.on(root, "click", "[data-gl]", function (e, b) { jumpTo(b.getAttribute("data-gl")); });
      view.jumpTo = jumpTo;

      var st = { topic: "all", kind: "all" }, srcItems = S.$$(".src", root), srcCount = S.$("#srcCount", root);
      function srcFilter() {
        var n = 0;
        srcItems.forEach(function (el) {
          var ok = (st.topic === "all" || el.getAttribute("data-topic") === st.topic) && (st.kind === "all" || el.getAttribute("data-kind") === st.kind);
          el.hidden = !ok; if (ok) n += 1;
        });
        srcCount.textContent = S.digits(n) + " / " + S.digits(srcItems.length) + " " + S.plain(L("sources", "منبع"));
      }
      function press(sel, attr, val) { S.$$(sel, root).forEach(function (b) { var on = b.getAttribute(attr) === val; b.setAttribute("aria-pressed", String(on)); b.classList.toggle("is-on", on); }); }
      S.on(root, "click", "[data-st]", function (e, b) { st.topic = b.getAttribute("data-st"); press("[data-st]", "data-st", st.topic); srcFilter(); });
      S.on(root, "click", "[data-sk]", function (e, b) { st.kind = b.getAttribute("data-sk"); press("[data-sk]", "data-sk", st.kind); srcFilter(); });
      srcFilter();
      S.on(root, "click", "#resetAll", function () {
        if (!window.confirm(S.plain(L("Reset everything this guide has stored in your browser? This can't be undone.", "همه‌چیزی که این راهنما در مرورگر شما ذخیره کرده بازنشانی شود؟ برگشت‌پذیر نیست.")))) return;
        try {
          var keys = [];
          for (var i = 0; i < window.localStorage.length; i++) { var k = window.localStorage.key(i); if (k && k.indexOf("swe.") === 0) keys.push(k); }
          keys.forEach(function (k) { window.localStorage.removeItem(k); });
        } catch (err) { /* storage unavailable: nothing to clear */ }
        S.state.me = null;
        U.toast(S.plain(L("Everything has been reset.", "همه‌چیز بازنشانی شد.")));
        window.location.reload();
      });
      var sec = param ? param.split("/")[0] : "";
      if (param && sec === "glossary" && param.split("/")[1]) setTimeout(function () { jumpTo(param.split("/")[1]); }, 40);
    },
    onParam: function (root, param) {
      if (!param) return;
      var parts = param.split("/");
      if (parts[0] === "glossary" && parts[1] && view.jumpTo) view.jumpTo(parts[1]); else S.scrollToSection(parts[0]);
    },
    search: function () {
      var out = (S.data.glossary || []).map(function (g) { return { kind: L("Glossary", "واژه‌نامه"), title: g.term, text: g.def, route: "about/glossary/" + g.id }; });
      out.push({ kind: L("About", "درباره"), title: L("Sources behind the guide", "منابع پشت راهنما"), text: L("Every source, tagged primary, secondary or anecdotal.", "هر منبع، با برچسب اصلی، دست‌دوم یا روایتی."), route: "about/sources" });
      out.push({ kind: L("About", "درباره"), title: L("Method: how the guide was built and what it doesn't know", "روش: راهنما چطور ساخته شد و چه چیزی را نمی‌داند"), text: L("Research basis, composites, limits, privacy and credits.", "پایه‌ی پژوهش، ماجراهای ترکیبی، محدودیت‌ها، حریم خصوصی و قدردانی."), route: "about/method" });
      return out;
    }
  };
  var view = S.views.about;
})();

/* The landscape in 2026: timeline, AI expectations and evidence, the job market, implications by level, durable skills. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc, D = S.data.landscape;

  var THEMES = [
    { id: "policy", name: L("AI at work", "AI در کار") },
    { id: "evidence", name: L("Evidence", "شواهد") },
    { id: "market", name: L("Jobs market", "بازار کار") }
  ];
  var SUP = {
    C: { cls: "good", label: L("consensus", "اجماع") },
    S: { cls: "warn", label: L("single source", "تک‌منبع") },
    I: { cls: "info", label: L("our inference", "استنباط ما") }
  };
  function supTag(k) { var x = SUP[k]; return '<span class="tag ' + x.cls + '">' + md(x.label) + "</span>"; }
  function pct(v) { return S.isFa() ? "٪" : "%"; }
  function themeName(id) { return THEMES.filter(function (t) { return t.id === id; })[0].name; }

  /* ---------------- timeline ---------------- */
  function timelineHtml(filter) {
    return D.timeline.filter(function (e) { return filter === "all" || e.theme === filter; }).map(function (e) {
      return '<li class="tl-item th-' + e.theme + '"><span class="tl-d" dir="ltr">' + esc(S.digits(e.d)) + '</span><span class="tl-dot" aria-hidden="true"></span><div class="tl-b"><div class="tl-h"><strong>' + md(e.t) + "</strong>" +
        U.confTag(e.conf) + (e.rep ? '<span class="tag">' + md(L("press account", "گزارش رسانه‌ای")) + "</span>" : "") + '<span class="tag th">' + md(themeName(e.theme)) + "</span></div><p>" + md(e.x) + "</p></div></li>";
    }).join("");
  }
  function timelineSection() {
    var pills = U.pill(L("All", "همه"), 'data-tl="all"', true) + THEMES.map(function (t) { return U.pill(t.name, 'data-tl="' + t.id + '"', false); }).join("");
    return '<div class="pill-row tl-filter" role="group">' + pills + '</div><ol class="tl" id="tlList">' + timelineHtml("all") + "</ol>" + U.confLegend();
  }

  /* ---------------- ai ---------------- */
  function aiSection() {
    var head = [md(L("Employer", "شرکت")), md(L("When", "کِی")), md(L("What happened", "چه شد")), md(L("Basis", "مبنا"))];
    var rows = D.employers.map(function (e) {
      return ["<strong>" + esc(e.name) + "</strong>", '<span class="nowrap">' + md(e.d) + "</span>", md(e.x), U.confTag(e.conf) + (e.rep ? '<br><span class="tag sm-tag">' + md(L("press account", "گزارش رسانه‌ای")) + "</span>" : "")];
    });
    var h = '<h3>' + md(L("What employers said", "کارفرماها چه گفتند")) + "</h3>" + U.table(head, rows, { cls: "emp-table" });
    h += U.callout("warn", L("Read this table with its dates", "این جدول را با تاریخ‌هایش بخوانید"), D.pattern);
    h += U.callout("rule", L("Our reading", "برداشت ما"), D.synthesis);
    h += '<h3 class="sp">' + md(L("What the evidence says", "شواهد چه می‌گویند")) + "</h3>";
    h += '<div class="grid c2"><div class="card"><h4 class="h-sm good">' + icon("check") + " " + md(L("Solid: several independent sources", "محکم: چند منبع مستقل")) + '</h4><ul class="tick">' + D.solid.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="card"><h4 class="h-sm bad">' + icon("alert") + " " + md(L("Contested", "محل بحث")) + '</h4><ul class="cross">' + D.contested.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div></div>";
    h += '<div class="grid c2 sp ev-cards">' + D.evidence.map(function (e) {
      return '<div class="card ev-card"><div class="ev-card-h"><h3>' + md(e.t) + '</h3></div><div class="ev-card-m"><span class="tag" dir="ltr">' + esc(S.digits(e.d)) + "</span>" + U.confTag(e.conf) + "</div><p>" + md(e.x) + '</p><p class="ev-caveat">' + icon("alert") + "<span><strong>" + md(L("Caveat: ", "نکته‌ی احتیاط: ")) + "</strong>" + md(e.c) + "</span></p></div>";
    }).join("") + "</div>";
    return h;
  }

  /* ---------------- market ---------------- */
  function marketSection() {
    var M = D.market, p = pct();
    var h = '<div class="grid c2">' + M.entry.map(function (e) {
      return '<div class="card"><div class="ev-card-m"><h3>' + md(e.t) + "</h3></div>" + '<div class="ev-card-m">' + U.confTag(e.conf) + "</div><p>" + md(e.x) + '</p><p class="ev-caveat">' + icon("alert") + "<span><strong>" + md(L("Caveat: ", "نکته‌ی احتیاط: ")) + "</strong>" + md(e.c) + "</span></p></div>";
    }).join("") + "</div>";
    // postings
    h += '<div class="grid c2 sp"><div class="card"><h4 class="h-sm">' + md(L("Software-development postings (Indeed), February 2020 = 100", "آگهی‌های توسعه‌ی نرم‌افزار (Indeed)، فوریه‌ی 2020 = 100")) + "</h4>" +
      U.bars(M.postings.map(function (r) { return { label: md(r.label), value: r.v, max: 100, text: S.digits(r.v % 1 ? r.v.toFixed(1) : r.v) }; })) +
      '<p class="subtle sm">' + md(L("About 23% below pre-pandemic after a partial rebound. Postings are not hires. The April figure comes from a secondary source.", "حدود 23% زیر سطح پیش از همه‌گیری، بعد از یک بازگشت نسبی. آگهی یعنی استخدام نیست. عدد آوریل از منبع دست‌دوم است.")) + "</p></div>";
    // layoffs
    h += '<div class="card"><h4 class="h-sm">' + md(L("The same year, three layoff counts", "یک سال، سه شمارش تعدیل")) + "</h4>" +
      U.bars(M.layoffs.map(function (r) { return { label: md(r.label), value: r.v, max: 200000, text: S.digits(r.v.toLocaleString("en-US")), cls: "amber" }; })) +
      '<p class="subtle sm">' + md(L("2026 so far. Trackers count different events over different windows, so never quote a bare total: name the tracker.", "2026 تا اینجا. ردیاب‌ها رویدادهای متفاوتی را در بازه‌های متفاوت می‌شمارند؛ پس هرگز یک عدد برهنه نقل نکنید: ردیاب را نام ببرید.")) + "</p></div></div>";
    // headcount
    h += '<div class="card sp"><h4 class="h-sm">' + md(L("Headcount change over two years to May 2026", "تغییر تعداد کارکنان در دو سال تا مه 2026")) + "</h4>" +
      U.bars(M.headcount.map(function (r) {
        var sign = r.v >= 0 ? "+" : "−";
        return { label: esc(r.name || r.label) + (r.note ? '<br><span class="subtle sm">' + md(r.note) + "</span>" : ""), value: Math.abs(r.v), max: 40, text: '<span dir="ltr">' + sign + S.digits(Math.abs(r.v)) + p + "</span>", cls: r.v >= 0 ? "" : "neg" };
      })) +
      '<p class="subtle sm">' + md(L("Top tech employers and fast growers, from TrueUp, Workforce.ai and Indeed data as reported by Pragmatic Engineer (26 May 2026). Software postings are up in the US and UK and down in Germany and France.", "شرکت‌های بزرگ فناوری و رشدکننده‌های سریع، از داده‌های TrueUp، Workforce.ai و Indeed به نقل از Pragmatic Engineer (26 مه 2026). آگهی‌های نرم‌افزار در آمریکا و بریتانیا بیشتر و در آلمان و فرانسه کمتر شده.")) + "</p></div>";
    h += '<h3 class="sp">' + md(L("Flatter organisations, tighter reviews", "سازمان‌های تخت‌تر، ارزیابی‌های سخت‌گیرانه‌تر")) + '</h3><ul class="tick">' + M.flattening.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul>";
    h += U.callout("note", null, M.noLevelChange) + U.callout("warn", L("Causality", "علّیت"), M.causality);
    return h;
  }

  /* ---------------- by level ---------------- */
  function byLevelSection() {
    var head = [md(L("Level", "سطح")), md(L("Being commoditised", "در حال کالا شدن")), md(L("Becoming more valuable", "ارزشمندتر شدن")), md(L("How solid is it", "چقدر محکم است"))];
    var rows = D.byLevel.map(function (r) {
      return [r.lv.map(function (l) { return S.lv(l); }).join(" ") + " " + md(r.name), md(r.out), md(r.up), supTag(r.sup) + '<p class="subtle sm tbl-note">' + md(r.note) + "</p>"];
    });
    return U.table(head, rows, { cls: "bylevel-table" }) +
      '<p class="legend">' + supTag("C") + " " + md(L("three or more independent sources", "سه منبع مستقل یا بیشتر")) + " " + supTag("S") + " " + md(L("one author or source", "یک نویسنده یا منبع")) + " " + supTag("I") + " " + md(L("our own inference", "استنباط خودمان")) + "</p>" +
      U.source(L("Levels follow this guide's scale: L2–L3 entry, L4 mid, L5 senior, L6–L7 staff and above. What follows from the evidence, and what is inference, is marked in the last column.", "سطح‌ها از مقیاس این راهنما پیروی می‌کنند: L2 و L3 ورودی، L4 میانی، L5 ارشد، L6 و L7 staff و بالاتر. آنچه از شواهد می‌آید و آنچه استنباط است در ستون آخر مشخص شده."));
  }

  /* ---------------- durable ---------------- */
  function durableSection() {
    return '<div class="grid c2 dur">' + D.durable.map(function (d, i) {
      return '<div class="card dur-card"><div class="dur-h"><span class="dur-ic">' + icon(d.icon) + "</span><h3>" + md(d.t) + "</h3></div><p>" + md(d.why) + '</p><p class="dur-do"><strong>' + md(L("Try this month: ", "این ماه امتحان کنید: ")) + "</strong>" + md(d.do) + "</p></div>";
    }).join("") + "</div>" + U.source(D.durableNote);
  }

  S.views.landscape = {
    render: function (root) {
      var h = U.pageHead({
        route: "landscape", kicker: L("Reference", "مرجع"), icon: "globe",
        title: L("The landscape in 2026", "چشم‌انداز 2026"),
        lead: L("What is changing around the ladder: AI expectations, the evidence on productivity, and the job market. Dated, sourced and hedged, because it moves fast.",
                "آنچه دور نردبان در حال تغییر است: انتظارهای مربوط به AI، شواهد بهره‌وری و بازار کار. تاریخ‌دار، منبع‌دار و محتاطانه، چون سریع جابه‌جا می‌شود."),
        tldr: [
          L("Everything here is as of early October 2026. Policies have reversed within months, so treat any company's review rubric as a dated claim.", "همه‌چیز اینجا تا اوایل اکتبر 2026 است. سیاست‌ها ظرف چند ماه برگشته‌اند؛ پس rubric ارزیابی هر شرکت را ادعایی تاریخ‌دار بدانید."),
          L("Evidence on AI and productivity is thin and mixed. What's solid: use is near-universal, trust is falling, and review becomes the bottleneck.", "شواهد درباره‌ی AI و بهره‌وری کم و ناهم‌سو است. آنچه محکم است: استفاده تقریبا همگانی است، اعتماد در حال کاهش است و review به گلوگاه تبدیل می‌شود."),
          L("We found no published ladder rewritten because of AI. What shifts is the market around it, and which lenses are scarce.", "نردبان منتشرشده‌ای که به‌خاطر AI بازنویسی شده باشد پیدا نکردیم. آنچه جابه‌جا می‌شود بازار اطراف آن است و این‌که کدام بُعدها کمیاب‌اند.")
        ],
        sections: [
          { id: "timeline", label: L("Timeline", "خط زمان") },
          { id: "ai", label: L("AI: policies and evidence", "AI: سیاست‌ها و شواهد") },
          { id: "market", label: L("The market", "بازار") },
          { id: "bylevel", label: L("By level", "بر حسب سطح") },
          { id: "durable", label: L("Durable skills", "مهارت‌های پایدار") }
        ]
      });
      h += U.callout("note", L("As of early October 2026", "تا اوایل اکتبر 2026"), L("Press reports of internal memos are marked, and two usage-based review criteria have already been walked back. Where we only saw a search summary of a source, the page says “reported”.", "گزارش‌های رسانه‌ای از یادداشت‌های داخلی مشخص شده‌اند و دو معیار ارزیابیِ مبتنی بر میزان استفاده همین حالا پس گرفته شده‌اند. جایی که فقط خلاصه‌ی جست‌وجوی یک منبع را دیدیم، صفحه می‌نویسد «گزارش‌شده»."));
      h += U.section("timeline", L("A timeline, April 2025 to September 2026", "یک خط زمان، از آوریل 2025 تا سپتامبر 2026"), L("What was said, what was measured, and what happened in the market, in one list.", "آنچه گفته شد، آنچه اندازه گرفته شد و آنچه در بازار اتفاق افتاد، در یک فهرست."), timelineSection());
      h += U.section("ai", L("AI: what employers said, and what the evidence says", "AI: کارفرماها چه گفتند و شواهد چه می‌گویند"), L("Expectations moved from “use it” to “show what changed”. The evidence behind the productivity claims is thinner than the headlines.", "انتظارها از «استفاده کن» به «نشان بده چه چیزی عوض شد» رفت. شواهد پشت ادعاهای بهره‌وری کم‌مایه‌تر از تیترهاست."), aiSection());
      h += U.section("market", L("The job market", "بازار کار"), L("Entry-level hiring, postings, layoffs and the flattening of management, with the disagreements between sources left in.", "استخدام سطح ورودی، آگهی‌ها، تعدیل و تخت شدن مدیریت، با اختلاف میان منابع که عمدا نگه داشته شده."), marketSection());
      h += U.section("bylevel", L("What it means at each level", "در هر سطح چه معنایی دارد"), L("Mostly inference, labelled as such. The direction is clearer than the size of any effect.", "بیشتر استنباط، با برچسب خودش. جهت از اندازه‌ی هر اثر روشن‌تر است."), byLevelSection());
      h += U.section("durable", L("Skills that look durable", "مهارت‌هایی که پایدار به نظر می‌رسند"), L("Five things the evidence keeps pointing to, with one small thing to try for each.", "پنج چیز که شواهد مدام به آن‌ها اشاره می‌کند، با یک کار کوچک برای امتحان هرکدام."), durableSection());
      h += U.nextCard("about", S.pageLabel("about"), L("Every source behind this page, with how much to trust it.", "هر منبع پشت این صفحه، با این‌که چقدر باید به آن اعتماد کرد."));
      root.innerHTML = h;
      S.on(root, "click", "[data-tl]", function (e, b) {
        var v = b.getAttribute("data-tl");
        S.$$("[data-tl]", root).forEach(function (x) { var on = x === b; x.setAttribute("aria-pressed", String(on)); x.classList.toggle("is-on", on); });
        S.$("#tlList", root).innerHTML = timelineHtml(v);
      });
    },
    onParam: function (root, param) { if (param) S.scrollToSection(param); },
    search: function () {
      var out = [
        { kind: L("Landscape", "چشم‌انداز"), title: L("Timeline: AI and the job market, 2025–26", "خط زمان: AI و بازار کار، 2025 و 2026"), text: L("Employer memos, studies and market data in date order.", "یادداشت‌های شرکت‌ها، مطالعه‌ها و داده‌های بازار به ترتیب تاریخ."), route: "landscape/timeline" },
        { kind: L("Landscape", "چشم‌انداز"), title: L("What employers said about AI use in reviews", "کارفرماها درباره‌ی استفاده از AI در ارزیابی چه گفتند"), text: D.synthesis, route: "landscape/ai" },
        { kind: L("Landscape", "چشم‌انداز"), title: L("The job market: entry-level hiring, postings, layoffs", "بازار کار: استخدام سطح ورودی، آگهی‌ها، تعدیل"), text: D.market.noLevelChange, route: "landscape/market" },
        { kind: L("Landscape", "چشم‌انداز"), title: L("What AI changes at each level", "AI در هر سطح چه چیزی را عوض می‌کند"), text: L("Entry, mid, senior and staff: what is commoditised and what becomes more valuable.", "ورودی، میانی، ارشد و staff: چه چیزی کالا می‌شود و چه چیزی ارزشمندتر."), route: "landscape/bylevel" },
        { kind: L("Landscape", "چشم‌انداز"), title: L("Durable skills in the AI era", "مهارت‌های پایدار در دوران AI"), text: D.durableNote, route: "landscape/durable" }
      ];
      D.evidence.forEach(function (e) { out.push({ kind: L("Evidence", "شواهد"), title: e.t, text: e.x, route: "landscape/ai" }); });
      return out;
    }
  };
})();

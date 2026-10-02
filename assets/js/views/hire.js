/* Hired at the right level: how level is set at hire, scope in numbers, interviewer signals, evidence checklist,
   conversation scripts, what a down-level costs, loops compared, composite cases. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc, H = S.data.hire;

  var SCRIPT_TITLES = {
    "recruiter-level": L("First call: how is level decided?", "تماس اول: سطح چطور تعیین می‌شود؟"),
    "state-target": L("First call: state your target level", "تماس اول: سطح هدف را بگویید"),
    "design-before-loop": L("Before the loop: how are rounds weighted?", "پیش از دور مصاحبه: وزن راندها چطور است؟"),
    "lower-offer": L("The offer is a level too low", "offer یک سطح پایین‌تر است"),
    "competing-offer": L("You hold a competing offer", "offer رقیب دارید"),
    "accept-with-conditions": L("Accepting a lower level, with conditions", "پذیرفتن سطح پایین‌تر، با شرط")
  };
  var NUM_TITLES = {
    users: L("People who use it", "کسانی که استفاده می‌کنند"),
    traffic: L("Load", "بار"),
    data: L("Data", "داده"),
    money: L("Money", "پول"),
    people: L("People you directed", "آدم‌هایی که جهتشان را تعیین کردید"),
    teams: L("Teams affected", "تیم‌های اثرپذیر"),
    duration: L("Time you carried it", "مدتی که کار را حمل کردید"),
    systems: L("Systems you own", "سیستم‌هایی که own می‌کنید")
  };

  function levelLabel(lv) {
    var n = S.levelById(lv).name;
    return L("{" + lv + "} " + n.en, "{" + lv + "} " + n.fa);
  }
  // pick a default tab from the visitor's level (or a result of the self-assessment), falling back to a sensible default
  function pickTab(ids, fallback) {
    var me = S.state.me, res = S.assessResult && S.assessResult();
    var want = me || (res ? "L" + res.overall : null);
    if (!want) return fallback;
    var i = S.levelIndex(want);
    if (i < 0) return fallback;
    var best = ids[0], bd = 99;
    ids.forEach(function (id) { var d = Math.abs(S.levelIndex(id) - i); if (d < bd) { bd = d; best = id; } });
    return best;
  }

  /* ---------------- 1. pipeline ---------------- */
  function pipelineSection() {
    var h = '<ol class="pipe">' + H.pipeline.map(function (p, i) {
      return '<li><span class="pipe-n">' + S.digits(i + 1) + '</span><div class="pipe-ic">' + icon(p.icon) + "</div><strong>" + md(p.title) + "</strong><p>" + md(p.what) + '</p><p class="pipe-you"><strong>' + md(L("You: ", "شما: ")) + "</strong>" + md(p.you) + '</p><p class="pipe-risk">' + icon("alert") + "<span>" + md(p.risk) + "</span></p></li>";
    }).join("") + "</ol>";
    h += U.callout("rule", L("Three facts that explain most surprises", "سه واقعیت که بیشتر غافلگیری‌ها را توضیح می‌دهد"), "- " + H.moves.map(function (m) { return S.t(m); }).join("\n- "));
    h += U.source(L("Built from interview-guide sites, candidate reports and employers' own hiring pages. No employer publishes its leveling rubric, so treat the pattern as orientation, not as policy.",
                    "بر پایه‌ی سایت‌های راهنمای مصاحبه، گزارش‌های داوطلب‌ها و صفحه‌های استخدام خودِ شرکت‌ها. هیچ شرکتی rubric سطح‌دهی‌اش را منتشر نمی‌کند، پس الگو را جهت‌یاب بدانید، نه سیاست."));
    return h;
  }

  /* ---------------- 2. titles and scope in numbers ---------------- */
  function numCard(n) {
    return '<div class="card num-card"><h3>' + md(NUM_TITLES[n.id] || n.id) + '</h3><p class="num-what">' + md(n.what) + "</p>" +
      '<p class="num-weak"><span class="tag">' + md(L("weak", "ضعیف")) + '</span> <span class="strike">' + md(n.weak) + "</span></p>" +
      '<p class="num-strong"><span class="tag good">' + md(L("stronger", "قوی‌تر")) + "</span> " + md(n.strong) + "</p></div>";
  }
  function numbersSection() {
    var head = [md(L("Title or situation", "عنوان یا وضعیت")), md(L("What it can mean", "چه معنایی می‌تواند داشته باشد")), md(L("Source", "منبع"))];
    var rows = H.titles.map(function (t) { return [md(t.who), md(t.means), U.confTag(t.src) + '<br><span class="subtle">' + md(t.by) + "</span>"]; });
    var h = U.table(head, rows, { cls: "titles-table" }) + U.confLegend();
    h += '<h3 class="sp">' + md(L("Say your work in units that don't depend on the title", "کارتان را با واحدهایی بگویید که به عنوان وابسته نیست")) + "</h3>";
    h += U.callout("tip", L("The units interviewers use", "واحدهایی که مصاحبه‌کننده‌ها استفاده می‌کنند"), L("Public interview rubrics read a senior as someone who changes how a whole team works, about three or more people, and a staff engineer as someone who handles ambiguity across two or more teams. Put your story in those units: how many people, how many teams, how much ambiguity, which numbers.",
      "rubricهای عمومی مصاحبه، فرد ارشد را کسی می‌خوانند که شیوه‌ی کار کل یک تیم را عوض می‌کند، حدود سه نفر یا بیشتر، و مهندس staff را کسی که ابهام را میان دو تیم یا بیشتر اداره می‌کند. داستان‌تان را با همین واحدها بگویید: چند نفر، چند تیم، چه مقدار ابهام، چه عددهایی."));
    h += '<div class="grid c2 nums">' + H.numbers.map(numCard).join("") + "</div>";
    h += '<div class="btn-row sp"><a class="btn secondary" href="#/toolkit/statement">' + icon("pen") + md(L("Rewrite your own lines with the impact statement builder", "جمله‌های خودتان را با سازنده‌ی جمله‌ی اثرگذاری بازنویسی کنید")) + "</a></div>";
    return h;
  }

  /* ---------------- 3. signals ---------------- */
  function designPanel(d) {
    return '<div class="grid c2"><div class="card"><h4 class="h-sm">' + icon("chat") + " " + md(L("What it sounds like", "چه شکلی دارد")) + '</h4><ul class="quotes">' + d.says.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="card"><h4 class="h-sm good">' + icon("check") + " " + md(L("What an interviewer writes down", "مصاحبه‌کننده چه چیزی یادداشت می‌کند")) + '</h4><ul class="tick">' + d.signals.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul>" +
      U.callout("warn", L("What keeps the answer at the level below", "چه چیزی پاسخ را در سطح پایین‌تر نگه می‌دارد"), d.hurts) + "</div></div>";
  }
  function storyPanel(st) {
    return '<div class="card story-card"><div class="story-body"><p>' + md(st.text) + "</p></div></div>" +
      U.callout("tip", L("What this answer shows", "این پاسخ چه چیزی را نشان می‌دهد"), st.lesson);
  }
  function signalsSection() {
    var Sg = H.signals;
    var head = ['<span class="sr-only">' + esc(S.plain(L("Signal", "نشانه"))) + "</span>"].concat(Sg.cols.map(function (c) { return S.lv(c.id) + " " + md(c.name); }));
    var rows = Sg.rows.map(function (r) { return [md(r.label)].concat(r.cells.map(function (c) { return md(c); })); });
    var h = U.table(head, rows, { cls: "signals-table" }) + U.source(Sg.note);
    h += '<h3 class="sp">' + md(L("One design question, at three altitudes", "یک پرسش design، در سه ارتفاع")) + "</h3>";
    h += '<div class="card card-flat prompt">' + icon("chat") + "<p>" + md(H.design.prompt) + "</p></div>";
    var dIds = H.design.levels.map(function (d) { return d.lv; });
    h += U.tabs("design", H.design.levels.map(function (d) { return { id: d.lv, label: levelLabel(d.lv), html: designPanel(d) }; }), pickTab(dIds, "L5"), "tabs-pills");
    h += '<h3 class="sp">' + md(L("One behavioural question, at four altitudes", "یک پرسش رفتاری، در چهار ارتفاع")) + "</h3>";
    h += '<div class="card card-flat prompt">' + icon("chat") + "<p>" + md(H.stories.prompt) + "</p></div>";
    var sIds = H.stories.levels.map(function (d) { return d.lv; });
    h += '<p class="hint">' + md(L("The highlighted phrases are the ones a panel would quote.", "عبارت‌های هایلایت‌شده همان‌هایی است که پنل نقل می‌کند.")) + "</p>";
    h += U.tabs("story", H.stories.levels.map(function (d) { return { id: d.lv, label: levelLabel(d.lv), html: storyPanel(d) }; }), pickTab(sIds, "L4"), "tabs-pills");
    return h;
  }

  /* ---------------- 4. evidence checklist ---------------- */
  function chkState() { return S.store.get("hireChk", {}); }
  function evidenceSection() {
    var st = chkState(), ids = ["L4", "L5", "L6"];
    var items = ids.map(function (lv) {
      var list = H.checklist[lv];
      var html = '<p class="muted">' + md(L("Tick only what you could tell as a concrete story, with names, numbers and your own role: “I can tell a story where I…”", "فقط آنچه را تیک بزنید که می‌توانید به‌صورت داستانی مشخص بگویید، با اسم، عدد و نقش خودتان: «می‌توانم داستانی بگویم که در آن …»")) + "</p>" +
        '<div class="e2e-meter" data-meter="' + lv + '"></div><ul class="e2e-list">' + list.map(function (x, i) {
          var on = !!st[lv + ":" + i];
          return '<li><label class="chk' + (on ? " on" : "") + '"><input type="checkbox" data-hc="' + lv + ":" + i + '"' + (on ? " checked" : "") + "><span>" + md(x) + "</span></label></li>";
        }).join("") + '</ul><div class="hc-out" data-out="' + lv + '"></div>';
      return { id: lv, label: levelLabel(lv), html: html };
    });
    return U.tabs("hchk", items, pickTab(ids, "L5"), "tabs-pills");
  }
  function refreshChk(root, lv) {
    var st = chkState(), list = H.checklist[lv], n = 0;
    list.forEach(function (x, i) { if (st[lv + ":" + i]) n += 1; });
    var m = S.$('[data-meter="' + lv + '"]', root), o = S.$('[data-out="' + lv + '"]', root);
    if (m) m.innerHTML = '<div class="e2e-score"><strong>' + S.digits(n) + " / " + S.digits(list.length) + "</strong><span>" + md(L("stories ready", "داستان آماده")) + "</span></div>" + U.meter(n, list.length, "big");
    if (!o) return;
    var msg, kind, link = "";
    if (n >= 6) { kind = "good"; msg = L("Good coverage. Now write each story in four sentences: the situation, your decision, what you did, and the result in numbers.", "پوشش خوب است. حالا هر داستان را در چهار جمله بنویسید: وضعیت، تصمیم شما، کاری که کردید و نتیجه با عدد."); }
    else if (n >= 3) { kind = "note"; msg = L("Partial. Pick the two missing items you could still produce evidence for this quarter, and plan that work.", "ناقص. دو موردی را که هنوز می‌توانید این فصل برایش مدرک بسازید انتخاب کنید و برای کارش برنامه بریزید."); link = '<a href="#/grow/playbooks">' + md(L("Open the playbooks", "بازکردن نقشه‌های راه")) + "</a>"; }
    else { kind = "warn"; msg = L("Thin for this level. That isn't a verdict: it shows where to build evidence, or which level to aim for instead.", "برای این سطح کم است. این حکم نیست: نشان می‌دهد کجا مدرک بسازید، یا هدف کدام سطح باشد."); link = '<a href="#/locate">' + md(L("Check where you stand", "ببینید کجا ایستاده‌اید")) + "</a>"; }
    o.innerHTML = U.callout(kind, null, msg) + (link ? '<p class="hc-link">' + link + "</p>" : "");
  }

  /* ---------------- 5. conversation scripts ---------------- */
  function conversationSection() {
    var h = '<div class="scripts">' + H.scripts.map(function (sc) {
      return '<div class="card script-card"><h3>' + md(SCRIPT_TITLES[sc.id] || sc.id) + '</h3><p class="script-when">' + icon("clock") + "<span>" + md(sc.when) + '</span></p><blockquote class="script" id="sc-' + sc.id + '">' + md(sc.say) + "</blockquote>" +
        '<div class="btn-row"><button type="button" class="btn sm secondary" data-copy-target="#sc-' + sc.id + '">' + icon("copy") + md(L("Copy the wording", "کپی متن")) + "</button></div>" +
        '<p class="script-why"><strong>' + md(L("Why it works: ", "چرا جواب می‌دهد: ")) + "</strong>" + md(sc.why) + "</p></div>";
    }).join("") + "</div>";
    h += U.callout("note", null, L("These are starting points. Swap in your own facts, say them in your own voice, and keep the order: level first, pay second.", "این‌ها نقطه‌ی شروع‌اند. واقعیت‌های خودتان را بگذارید، با لحن خودتان بگویید و ترتیب را حفظ کنید: اول سطح، بعد حقوق."));
    return h;
  }

  /* ---------------- 6. down-level: what it costs, accept or push back ---------------- */
  var CLS = { google: "g", meta: "m", amazon: "a", microsoft: "ms" };
  function compChart() {
    var C = H.comp, W = 700, Ht = 350, x0 = 84, dx = 150, yb = 292, yt = 28;
    function X(i) { return x0 + i * dx; }
    function Y(v) { return yb - (v - 1) / 3 * (yb - yt); }
    var aria = S.plain(L("Total pay as a multiple of the entry level, for four employers: it rises to roughly 2 to 2.4 times at senior and 2 to 3.8 times at staff.", "مجموع حقوق به‌صورت ضریبی از سطح ورودی، برای چهار شرکت: در سطح ارشد حدود 2 تا 2.4 برابر و در سطح staff حدود 2 تا 3.8 برابر می‌شود."));
    var svg = '<svg class="compchart" viewBox="0 0 ' + W + " " + Ht + '" role="img" style="direction:ltr" aria-label="' + esc(aria) + '">';
    [1, 2, 3, 4].forEach(function (v) {
      svg += '<line class="cgrid" x1="56" x2="' + (X(3) + 28) + '" y1="' + Y(v).toFixed(1) + '" y2="' + Y(v).toFixed(1) + '"/><text class="ctick" x="48" y="' + (Y(v) + 4).toFixed(1) + '" text-anchor="end">' + S.digits(v) + "×</text>";
    });
    C.bands.forEach(function (b, i) { svg += '<text class="cband" x="' + X(i) + '" y="' + (yb + 28) + '" text-anchor="middle">' + esc(S.plain(b)) + "</text>"; });
    C.series.forEach(function (s) {
      var c = CLS[s.id];
      svg += '<polyline class="cline ' + c + '" points="' + s.mult.map(function (v, i) { return X(i).toFixed(1) + "," + Y(v).toFixed(1); }).join(" ") + '"/>';
      s.mult.forEach(function (v, i) {
        svg += '<circle class="cpt ' + c + '" cx="' + X(i).toFixed(1) + '" cy="' + Y(v).toFixed(1) + '" r="4.5"><title>' + esc(s.name + " " + s.codes[i] + ": $" + S.digits(s.total[i]) + "K, " + S.digits(v.toFixed(2)) + "×") + "</title></circle>";
      });
      var last = s.mult.length - 1;
      svg += '<text class="clabel ' + c + '" x="' + (X(last) + 12) + '" y="' + (Y(s.mult[last]) + 4).toFixed(1) + '">' + esc(s.name) + "</text>";
    });
    return svg + "</svg>";
  }
  function compTable() {
    var C = H.comp;
    var head = ['<span class="sr-only">' + esc(S.plain(L("Employer", "شرکت"))) + "</span>"].concat(C.bands.map(function (b) { return md(b); }));
    var rows = C.series.map(function (s) { return [esc(s.name)].concat(s.total.map(function (t, i) { return '<span class="mono">' + esc(s.codes[i]) + "</span> · $" + S.digits(t) + "K"; })); });
    return U.table(head, rows, { cls: "comp-table" });
  }
  function bars(rows, max) {
    var pct = S.isFa() ? "٪" : "%";
    return U.bars(rows.map(function (r) { return { label: esc(r.label), value: r.pct, max: max, text: S.digits(r.pct) + pct, cls: "neg" }; }));
  }
  function downlevelSection() {
    var C = H.comp, A = H.accept;
    var h = '<h3>' + md(L("Level is the multiplier", "سطح ضریب است")) + "</h3>";
    h += '<p class="muted">' + md(L("Total yearly pay as a multiple of the entry level at each employer. Each step up multiplies pay far more than any base-salary negotiation can.", "مجموع پرداختی سالانه به‌صورت ضریبی از سطح ورودی در هر شرکت. هر پله‌ی بالاتر حقوق را بسیار بیشتر از هر چانه‌زنی روی حقوق پایه ضرب می‌کند.")) + "</p>";
    h += '<div class="card chart-card">' + compChart() + "</div>";
    h += '<details class="acc"><summary><span>' + md(L("Show the numbers behind the chart", "عددهای پشت نمودار را نشان بده")) + "</span>" + icon("chev", "chev") + '</summary><div class="acc-body">' + compTable() + "</div></details>";
    h += '<div class="grid c2 sp"><div class="card"><h4 class="h-sm">' + md(L("What landing one level lower costs, Senior to mid", "هزینه‌ی فرود در یک سطح پایین‌تر، از ارشد به میانی")) + "</h4>" + bars(C.down, 50) +
      '<p class="subtle sm">' + md(L("Lower total pay, median to median.", "کاهش مجموع حقوق، میانه به میانه.")) + "</p></div>" +
      '<div class="card"><h4 class="h-sm">' + md(L("The same, Staff to Senior", "همان، از staff به ارشد")) + "</h4>" + bars(C.downStaff, 50) +
      '<p class="subtle sm">' + md(L("Steps are bigger higher up.", "هرچه بالاتر، پله‌ها بزرگ‌تر است.")) + "</p></div></div>";
    h += '<div class="card sp"><h4 class="h-sm">' + md(L("Why: pay shifts from base to equity as level rises", "چرا: با بالا رفتن سطح حقوق از پایه به سهام می‌رود")) + "</h4>" +
      U.bars(C.share.map(function (r) { return { label: esc(r.label), value: r.pct, max: 100, text: S.digits(r.pct) + (S.isFa() ? "٪" : "%") }; })) +
      '<p class="subtle sm">' + md(L("Base pay as a share of total pay. At Meta, base roughly doubles from E3 to E6 while yearly stock grows more than tenfold.", "سهم حقوق پایه از مجموع پرداختی. در Meta حقوق پایه از E3 تا E6 تقریبا دو برابر می‌شود و سهام سالانه بیش از ده برابر.")) + "</p></div>";
    h += U.source(C.caveat);
    h += '<h3 class="sp">' + md(L("Accept, or push back?", "بپذیرید یا مقاومت کنید؟")) + "</h3>";
    function list(cls, items) { return '<ul class="' + cls + '">' + items.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul>"; }
    h += '<div class="grid c2"><div class="card"><h4 class="h-sm good">' + icon("check") + " " + md(L("Reasonable to accept when", "پذیرفتن وقتی منطقی است که")) + "</h4>" + list("tick", A.when) + "</div>" +
      '<div class="card"><h4 class="h-sm bad">' + icon("alert") + " " + md(L("Think twice when", "دوباره فکر کنید وقتی")) + "</h4>" + list("cross", A.think) + "</div>" +
      '<div class="card"><h4 class="h-sm">' + icon("scale") + " " + md(L("Push back with", "مقاومت کنید با")) + "</h4>" + list("tick", A.pushback) + "</div>" +
      '<div class="card"><h4 class="h-sm">' + icon("pen") + " " + md(L("If you accept, get in writing", "اگر می‌پذیرید، مکتوب بگیرید")) + "</h4>" + list("tick", A.writing) + "</div></div>";
    h += '<div class="btn-row sp"><a class="btn secondary" href="#/faq/downlevel-offer">' + icon("help") + md(L("I got a lower offer: what now?", "offer پایین‌تر گرفته‌ام: حالا چه؟")) + '</a><a class="btn secondary" href="#/faq/negotiate-level">' + icon("help") + md(L("Why level beats base", "چرا سطح از حقوق پایه مهم‌تر است")) + "</a></div>";
    return h;
  }

  /* ---------------- 7. loops compared ---------------- */
  function loopsSection() {
    var head = [md(L("Employer", "شرکت")), md(L("Who decides the level", "چه کسی سطح را تعیین می‌کند")), md(L("When it is fixed", "کِی ثابت می‌شود")), md(L("Known up front?", "از پیش معلوم است؟")), md(L("Worth knowing", "دانستنی"))];
    var rows = H.loops.map(function (l) { return ["<strong>" + esc(l.name) + "</strong>", md(l.decider), md(l.when), md(l.upfront), md(l.note)]; });
    return U.table(head, rows, { cls: "loops-table" }) +
      U.source(L("Mostly from interview-guide sites and candidate reports (secondary or weaker evidence), plus employers' own hiring pages where they exist. Employers publish little about leveling, and practices change; ask your recruiter, and treat this as orientation.",
                 "بیشتر از سایت‌های راهنمای مصاحبه و گزارش داوطلب‌ها (شواهد دست‌دوم یا ضعیف‌تر)، به‌علاوه‌ی صفحه‌های استخدام خودِ شرکت‌ها هر جا باشد. شرکت‌ها درباره‌ی سطح‌دهی کم منتشر می‌کنند و رویه‌ها عوض می‌شود؛ از recruiter بپرسید و این را جهت‌یاب بدانید."));
  }

  /* ---------------- 8. examples ---------------- */
  function examplesSection() {
    var h = '<div class="ex-list">' + H.examples.map(function (e, i) {
      return '<details class="acc"' + (i === 0 ? " open" : "") + "><summary><span>" + md(e.title) + "</span>" + icon("chev", "chev") + '</summary><div class="acc-body"><p>' + md(e.setup) + "</p><p>" + md(e.happened) + "</p>" +
        U.callout("tip", L("The lesson", "درس"), e.lesson) + '<h4 class="h-sm">' + md(L("What you can do", "چه کاری می‌توانید بکنید")) + '</h4><ul class="tick">' + e.moves.map(function (m) { return "<li>" + md(m) + "</li>"; }).join("") + "</ul></div></details>";
    }).join("") + "</div>";
    h += U.callout("note", null, L("All four cases are illustrative composites with made-up numbers, built from patterns the sources describe. They are not stories about real people.", "هر چهار نمونه ترکیبی و با عددهای فرضی‌اند و از الگوهایی ساخته شده‌اند که منابع توصیف می‌کنند. ماجرای آدم‌های واقعی نیستند."));
    return h;
  }

  S.views.hire = {
    render: function (root, param) {
      var h = U.pageHead({
        route: "hire", kicker: L("Move", "جابه‌جایی"), icon: "door",
        title: L("Hired at the right level", "استخدام در سطح درست"),
        lead: L("Your level at a new company is set by an interview loop, not by your old title. Here is how that works, what interviewers listen for, and how to answer so the level matches the work you have actually done.",
                "سطح شما در شرکت جدید را یک دور مصاحبه تعیین می‌کند، نه عنوان قبلی‌تان. اینجا می‌بینید چطور کار می‌کند، مصاحبه‌کننده‌ها به چه گوش می‌دهند و چطور جواب بدهید که سطح با کاری که واقعا کرده‌اید جور باشد."),
        tldr: [
          L("The loop sets your level. Design and behavioural rounds set it far more than coding does.", "دور مصاحبه سطح شما را تعیین می‌کند. راندهای design و رفتاری خیلی بیشتر از کدنویسی آن را تعیین می‌کنند."),
          L("What travels is evidence in the units interviewers use: people, teams, ambiguity, numbers. Titles travel badly.", "چیزی که سفر می‌کند مدرک با واحدهای مصاحبه‌کننده‌هاست: آدم‌ها، تیم‌ها، ابهام، عددها. عنوان بد سفر می‌کند."),
          L("One level lower can cost around 30% of total pay and a year or two of runway. Ask early, push back with evidence, and decide in advance what you'd accept.", "یک سطح پایین‌تر می‌تواند حدود 30% از مجموع حقوق و یکی دو سال مسیر ارتقا را بگیرد. زود بپرسید، با مدرک مقاومت کنید و از پیش تصمیم بگیرید چه چیزی را می‌پذیرید.")
        ],
        sections: [
          { id: "pipeline", label: L("How level is set", "سطح چطور تعیین می‌شود") },
          { id: "numbers", label: L("Scope in numbers", "scope به زبان عدد") },
          { id: "signals", label: L("What they listen for", "به چه گوش می‌دهند") },
          { id: "evidence", label: L("Your evidence", "مدرک شما") },
          { id: "conversation", label: L("Conversations", "گفتگوها") },
          { id: "downlevel", label: L("If you're down-levelled", "اگر down-level شدید") },
          { id: "loops", label: L("Loops compared", "مقایسه‌ی دور مصاحبه‌ها") },
          { id: "examples", label: L("Four cases", "چهار نمونه") }
        ]
      });
      h += U.section("pipeline", L("How the level gets decided", "سطح چطور تعیین می‌شود"), L("From a first guess to an offer: five steps, and what you can do at each.", "از یک حدس اولیه تا offer: پنج گام، و کاری که در هرکدام می‌توانید بکنید."), pipelineSection());
      h += U.section("numbers", L("Titles travel badly. Scope travels well.", "عنوان بد سفر می‌کند. scope خوب سفر می‌کند."), L("The same title means different things at different employers. Say your work in units that don't depend on it.", "یک عنوان در شرکت‌های مختلف معانی متفاوتی دارد. کارتان را با واحدهایی بگویید که به آن وابسته نیست."), numbersSection());
      h += U.section("signals", L("What interviewers listen for", "مصاحبه‌کننده‌ها به چه گوش می‌دهند"), L("Design and behavioural rounds set the level. Here is what each level sounds like.", "راندهای design و رفتاری سطح را تعیین می‌کنند. اینجا می‌بینید هر سطح چه شکلی دارد."), signalsSection());
      h += U.section("evidence", L("Your evidence, level by level", "مدرک شما، سطح به سطح"), L("Eight prompts per level. Tick the ones you could back with a concrete story.", "هشت پرسش برای هر سطح. آن‌هایی را تیک بزنید که می‌توانید با یک داستان مشخص پشتیبانی کنید."), evidenceSection());
      h += U.section("conversation", L("Conversations: say it in your own words", "گفتگوها: با کلمه‌های خودتان بگویید"), L("Six situations with wording you can adapt.", "شش وضعیت، با عبارت‌هایی که می‌توانید تطبیق بدهید."), conversationSection());
      h += U.section("downlevel", L("If you're down-levelled: what it costs, and whether to push back", "اگر down-level شدید: چه هزینه‌ای دارد و آیا مقاومت کنید"), L("A level is a multiplier on pay and on promotion runway. Know the size of it before you decide.", "سطح ضریبی روی حقوق و مسیر ارتقاست. پیش از تصمیم، اندازه‌اش را بدانید."), downlevelSection());
      h += U.section("loops", L("Loops compared", "مقایسه‌ی دور مصاحبه‌ها"), L("Who decides, when, and what is documented, for seven employers.", "چه کسی تصمیم می‌گیرد، کِی، و چه چیزی مستند است، برای هفت شرکت."), loopsSection());
      h += U.section("examples", L("Four composite cases", "چهار نمونه‌ی ترکیبی"), L("How the pattern tends to go, and what each person could have done earlier.", "الگو معمولا چطور پیش می‌رود، و هر نفر چه کاری را می‌توانست زودتر بکند."), examplesSection());
      h += U.nextCard("practice", S.pageLabel("practice"), L("Rehearse the choices in short scenarios, and see at which level your instincts sit.", "انتخاب‌ها را در سناریوهای کوتاه تمرین کنید و ببینید غریزه‌ی شما در کدام سطح می‌نشیند."));
      root.innerHTML = h;
      ["L4", "L5", "L6"].forEach(function (lv) { refreshChk(root, lv); });
      S.on(root, "change", "[data-hc]", function (e, el) {
        var key = el.getAttribute("data-hc"), st = chkState();
        if (el.checked) st[key] = 1; else delete st[key];
        S.store.set("hireChk", st);
        var lab = el.closest(".chk"); if (lab) lab.classList.toggle("on", el.checked);
        refreshChk(root, key.split(":")[0]);
      });
    },
    onParam: function (root, param) { if (param) S.scrollToSection(param); },
    search: function () {
      var out = [
        { kind: L("Hire", "استخدام"), title: L("How level is decided at hire", "سطح هنگام استخدام چطور تعیین می‌شود"), text: L("Recruiter first guess, coding gates hire, design and behavioural set level, debrief or committee, then the offer.", "حدس اول recruiter، کدنویسی hire را دروازه‌بانی می‌کند، design و رفتاری سطح را تعیین می‌کنند، debrief یا کمیته، بعد offer."), route: "hire/pipeline" },
        { kind: L("Hire", "استخدام"), title: L("Scope in numbers: weak versus strong lines", "scope به زبان عدد: جمله‌های ضعیف و قوی"), text: L("Users, load, data, money, people, teams, time and systems, with examples.", "کاربر، بار، داده، پول، آدم‌ها، تیم‌ها، زمان و سیستم‌ها، با مثال."), route: "hire/numbers" },
        { kind: L("Hire", "استخدام"), title: L("What interviewers listen for: design and story altitude", "مصاحبه‌کننده‌ها به چه گوش می‌دهند: ارتفاع design و داستان"), text: L("Who drives, breadth to depth, behavioural scope at mid, senior and staff.", "چه کسی پیش می‌برد، عرض به عمق، scope رفتاری در سطح میانی، ارشد و staff."), route: "hire/signals" },
        { kind: L("Hire", "استخدام"), title: L("Level is the multiplier: pay by level", "سطح ضریب است: حقوق بر حسب سطح"), text: L("Self-reported medians at Google, Meta, Amazon and Microsoft; what one level down costs.", "میانه‌های خودگزارش‌شده در Google، Meta، Amazon و Microsoft؛ هزینه‌ی یک سطح پایین‌تر."), route: "hire/downlevel" },
        { kind: L("Hire", "استخدام"), title: L("Loops compared: Google, Meta, Amazon, Microsoft, Apple, Netflix, Spotify", "مقایسه‌ی دور مصاحبه‌ها: Google، Meta، Amazon، Microsoft، Apple، Netflix، Spotify"), text: L("Who decides the level, when, and whether it's known up front.", "چه کسی سطح را تعیین می‌کند، کِی، و آیا از پیش معلوم است."), route: "hire/loops" }
      ];
      (H.scripts || []).forEach(function (sc) { out.push({ kind: L("Script", "جمله‌ی آماده"), title: SCRIPT_TITLES[sc.id] || sc.id, text: sc.say, route: "hire/conversation" }); });
      (H.examples || []).forEach(function (e) { out.push({ kind: L("Case", "نمونه"), title: e.title, text: e.lesson, route: "hire/examples" }); });
      return out;
    }
  };
})();

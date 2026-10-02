/* Where am I? A five-lens self-assessment with radar, growth edge and a copyable 1:1 summary. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc;

  var LENS_ORDER = ["contribution", "challenge", "influence", "expertise", "impact"];
  var HABITS = [
    { id: "citizenship", name: L("Citizenship", "مشارکت شهروندی"), icon: "handshake" },
    { id: "teamwork", name: L("Teamwork", "کار تیمی"), icon: "users" },
    { id: "practices", name: L("Engineering practices", "رویه‌های مهندسی"), icon: "gear" }
  ];
  var SCALE = [
    { v: 0, t: L("Not yet", "هنوز نه") },
    { v: 1, t: L("Sometimes", "گاهی") },
    { v: 2, t: L("Consistently", "پیوسته") }
  ];
  var KEY = "assess";

  function defaults() { return { a: {}, hb: {}, notes: {}, step: -1 }; }
  function load() { var s = S.store.get(KEY, null); return s && s.a ? s : defaults(); }

  function lensName(id) { return S.plain(S.lensById(id).name); }
  function mean(arr) { return arr.length ? arr.reduce(function (s, x) { return s + x; }, 0) / arr.length : 0; }
  function median(arr) { var a = arr.slice().sort(function (x, y) { return x - y; }), m = Math.floor(a.length / 2); return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2; }
  function lvOf(m) { return S.clamp(Math.round(m), 3, 7); }
  function lvCode(n) { return "L" + n; }
  function lvLabel(n) { return n <= 3 ? "L2–L3" : "L" + n; }
  function lvChip(n) { return n <= 3 ? S.lv("L3").replace(">L3<", ">L2–L3<") : S.lv("L" + n); }

  /* ---- computing ---- */
  function compute(st) {
    var A = S.data.assess, res = { lenses: {}, answered: 0, total: A.questions.length };
    LENS_ORDER.forEach(function (lens) {
      var vals = A.questions.filter(function (q) { return q.lens === lens && st.a[q.id] != null; }).map(function (q) { return st.a[q.id]; });
      res.answered += vals.length;
      res.lenses[lens] = { mean: vals.length ? mean(vals) : 0, n: vals.length, level: vals.length ? lvOf(mean(vals)) : 0 };
    });
    var means = LENS_ORDER.map(function (l) { return res.lenses[l].mean; }).filter(function (m) { return m > 0; });
    res.overall = means.length ? lvOf(median(means)) : 0;
    var weakest = null, strongest = null;
    LENS_ORDER.forEach(function (l) {
      var x = res.lenses[l];
      if (!x.n) return;
      if (!weakest || x.mean < res.lenses[weakest].mean) weakest = l;
      if (!strongest || x.mean > res.lenses[strongest].mean) strongest = l;
    });
    res.weakest = weakest; res.strongest = strongest;
    res.spread = weakest ? res.lenses[strongest].mean - res.lenses[weakest].mean : 0;
    res.habits = {};
    HABITS.forEach(function (hb) {
      var items = (A.habits || []).filter(function (x) { return x.habit === hb.id; });
      var sum = 0, n = 0;
      items.forEach(function (x) { if (st.hb[x.id] != null) { sum += st.hb[x.id]; n += 1; } });
      res.habits[hb.id] = { sum: sum, n: n, max: items.length * 2 };
    });
    return res;
  }
  S.assessResult = function () {
    try {
      if (!S.data.assess) return null;
      var st = load();
      var r = compute(st);
      return r.answered >= r.total ? r : null;
    } catch (e) { return null; }
  };

  /* ---- views of the flow ---- */
  function introHtml(st, res) {
    var h = '<div class="card intro-card"><div class="intro-ic">' + icon("target") + "</div><div><h2>" + md(L("A five-minute mirror", "آینه‌ی پنج‌دقیقه‌ای")) + "</h2>" +
      "<p>" + md(L("Fifteen short questions, three for each lens, then nine quick habit checks. Answer about the **last six to twelve months**, with one real example in mind for each answer.",
        "پانزده پرسش کوتاه، سه تا برای هر بُعد، و بعد نه بررسی سریع عادت‌ها. درباره‌ی **شش تا دوازده ماه گذشته** پاسخ دهید و برای هر پاسخ یک مثال واقعی در ذهن داشته باشید.")) + "</p>" +
      '<ul class="tick"><li>' + md(L("If you can't name a concrete example for an option, pick the one below it.", "اگر برای یک گزینه نمی‌توانید مثال مشخصی نام ببرید، گزینه‌ی پایین‌ترش را انتخاب کنید.")) + "</li><li>" +
      md(L("It is a conversation starter, not a verdict. Nothing leaves your browser.", "آغازگر گفتگوست، نه حکم. هیچ‌چیز از مرورگر شما بیرون نمی‌رود.")) + "</li></ul>" +
      '<div class="btn-row"><button type="button" class="btn" data-go="0">' + icon("play") + md(st.step > 0 && res.answered ? L("Continue", "ادامه") : L("Start the mirror", "شروع آینه")) + "</button>";
    if (res.answered >= res.total) h += '<button type="button" class="btn secondary" data-go="6">' + icon("eye") + md(L("See my last result", "دیدن آخرین نتیجه")) + "</button>";
    if (res.answered) h += '<button type="button" class="btn ghost" data-reset="1">' + icon("reset") + esc(U.u("reset")) + "</button>";
    return h + "</div></div></div>";
  }

  function stepsBar(step) {
    var names = LENS_ORDER.map(function (l) { return S.lensById(l).name; }).concat([L("Habits", "عادت‌ها")]);
    var h = '<ol class="steps" aria-label="' + esc(S.plain(L("Progress", "پیشرفت"))) + '">';
    names.forEach(function (n, i) {
      h += '<li class="' + (i === step ? "cur " : "") + (i < step ? "done" : "") + '"><button type="button" data-go="' + i + '"><span class="step-n">' + (i < step ? icon("check") : S.digits(i + 1)) + "</span><span class=\"step-t\">" + md(n) + "</span></button></li>";
    });
    return h + "</ol>";
  }

  function questionHtml(q, st) {
    var h = '<fieldset class="q"><legend>' + md(q.q) + "</legend><div class=\"opts\">";
    q.options.forEach(function (o) {
      var on = st.a[q.id] === o.v;
      h += '<label class="opt' + (on ? " on" : "") + '"><input type="radio" name="' + q.id + '" value="' + o.v + '"' + (on ? " checked" : "") + "><span>" + md(o.t) + "</span></label>";
    });
    return h + "</div></fieldset>";
  }

  function lensStepHtml(idx, st) {
    var A = S.data.assess, lensId = LENS_ORDER[idx], lens = S.lensById(lensId);
    var qs = A.questions.filter(function (q) { return q.lens === lensId; });
    var done = qs.every(function (q) { return st.a[q.id] != null; });
    var h = stepsBar(idx) + '<div class="lens-step"><div class="lens-step-h">' + icon(lens.icon) + "<div><h2>" + md(lens.name) + "</h2><p class=\"muted\">" + md(lens.q) + "</p></div></div>";
    h += qs.map(function (q) { return questionHtml(q, st); }).join("");
    h += '<div class="field note-field"><label for="note-' + lensId + '">' + md(L("Your best example for this lens (optional)", "بهترین مثال شما برای این بُعد (اختیاری)")) + "</label>" +
      '<textarea id="note-' + lensId + '" data-note="' + lensId + '" placeholder="' + esc(S.plain(L("One sentence: what happened, what you did, what changed.", "یک جمله: چه اتفاقی افتاد، شما چه کردید، چه چیزی عوض شد."))) + '">' + esc(st.notes[lensId] || "") + "</textarea>" +
      '<span class="hint">' + md(L("Stays on this device. It goes into your 1:1 summary.", "فقط روی همین دستگاه می‌ماند. در خلاصه‌ی 1:1 شما قرار می‌گیرد.")) + "</span></div></div>";
    h += '<div class="btn-row nav-row">' + (idx > 0 ? '<button type="button" class="btn secondary" data-go="' + (idx - 1) + '">' + icon("back", "dir") + esc(U.u("back")) + "</button>" : '<button type="button" class="btn ghost" data-go="-1">' + icon("back", "dir") + esc(U.u("back")) + "</button>") +
      '<button type="button" id="nextBtn" class="btn" data-go="' + (idx + 1) + '"' + (done ? "" : " disabled") + ">" + esc(U.u("continue")) + icon("arrow", "dir") + "</button>" +
      '<span class="hint" id="nextHint"' + (done ? " hidden" : "") + ">" + md(L("Answer all three to continue.", "برای ادامه به هر سه پاسخ دهید.")) + "</span></div>";
    return h;
  }

  function habitsStepHtml(st) {
    var A = S.data.assess, items = A.habits || [];
    var done = items.every(function (x) { return st.hb[x.id] != null; });
    var h = stepsBar(5) + '<div class="lens-step"><div class="lens-step-h">' + icon("gear") + "<div><h2>" + md(L("Habits that never leave the ladder", "عادت‌هایی که هرگز از نردبان کنار نمی‌روند")) + "</h2><p class=\"muted\">" +
      md(L("These apply at every level. Be honest: a gap here can block a case even when everything else is strong.", "این‌ها در هر سطحی لازم‌اند. صادق باشید: شکاف اینجا می‌تواند پرونده را متوقف کند، حتی وقتی بقیه‌چیز قوی است.")) + "</p></div></div>";
    HABITS.forEach(function (hb) {
      h += '<div class="habit-block"><h3>' + icon(hb.icon) + " " + md(hb.name) + "</h3>";
      items.filter(function (x) { return x.habit === hb.id; }).forEach(function (x) {
        h += '<div class="hrow"><p>' + md(x.t) + '</p><div class="seg" role="radiogroup" data-hb="' + x.id + '">' + SCALE.map(function (sc) {
          return '<button type="button" role="radio" data-val="' + sc.v + '" aria-checked="' + (st.hb[x.id] === sc.v) + '">' + md(sc.t) + "</button>";
        }).join("") + "</div></div>";
      });
      h += "</div>";
    });
    h += "</div>" + '<div class="btn-row nav-row"><button type="button" class="btn secondary" data-go="4">' + icon("back", "dir") + esc(U.u("back")) + "</button>" +
      '<button type="button" id="nextBtn" class="btn" data-go="6"' + (done ? "" : " disabled") + ">" + icon("eye") + esc(U.u("finish")) + "</button>" + '<span class="hint" id="nextHint"' + (done ? " hidden" : "") + ">" + md(L("Rate all nine to see your results.", "برای دیدن نتیجه هر نه مورد را ارزیابی کنید.")) + "</span></div>";
    return h;
  }

  /* ---- result ---- */
  function growFor(lens, fromLevel) {
    var G = S.data.grow;
    if (!G || !G.transitions) return null;
    var from = lvCode(S.clamp(fromLevel, 3, 6));
    for (var i = 0; i < G.transitions.length; i++) if (G.transitions[i].from === from) return G.transitions[i];
    return null;
  }
  function summaryText(st, res) {
    var lines = [];
    lines.push(S.plain(L("Where I am: self-assessment", "من کجا هستم: خودارزیابی")));
    lines.push(S.plain(L("My work reads mostly at ", "کار من بیشتر در سطح ")) + lvLabel(res.overall) + " (" + U.levelName(lvCode(res.overall)) + ")" + (S.isFa() ? " خوانده می‌شود" : ""));
    lines.push("");
    LENS_ORDER.forEach(function (l) {
      var x = res.lenses[l];
      lines.push("- " + lensName(l) + ": " + lvLabel(x.level) + " (" + S.digits(x.mean.toFixed(1)) + ")" + (st.notes[l] ? " · " + st.notes[l] : ""));
    });
    if (res.weakest) {
      lines.push("");
      lines.push(S.plain(L("Growth edge: ", "لبه‌ی رشد: ")) + lensName(res.weakest) + " (" + lvLabel(res.lenses[res.weakest].level) + ")");
      var g = growFor(res.weakest, res.lenses[res.weakest].level);
      if (g && g.ask) {
        lines.push("");
        lines.push(S.plain(L("Questions for my next 1:1:", "پرسش‌ها برای 1:1 بعدی:")));
        g.ask.forEach(function (q) { lines.push("- " + S.plain(q)); });
      }
    }
    return lines.join("\n");
  }

  function resultHtml(st, res, cmp) {
    var h = stepsBar(6);
    var overallLvl = res.overall, next = Math.min(overallLvl + 1, 7);
    var refLvl = cmp || overallLvl;
    var vals = LENS_ORDER.map(function (l) { return res.lenses[l].mean; });
    var axes = LENS_ORDER.map(function (l) { return lensName(l); });
    h += '<div class="result-head"><span class="tag brand">' + icon("target") + esc(S.plain(L("Your mirror", "آینه‌ی شما"))) + "</span><h2>" + md(L("Your work reads mostly at", "کار شما بیشتر در این سطح خوانده می‌شود:")) + " " + lvChip(overallLvl) + " " +
      md(overallLvl <= 3 ? L("Learn–Deliver", "یادگیری–تحویل") : S.levelById("L" + overallLvl).name) + "</h2></div>";

    h += '<div class="res-grid"><div class="card res-chart"><h3 class="h-sm">' + md(L("Profile across the lenses", "پروفایل در بُعدها")) + "</h3>" +
      U.radar({ axes: axes, min: 2, max: 7, rings: [3, 4, 5, 6, 7], ringLabel: function (v) { return v === 3 ? "L2–3" : "L" + v; },
        aria: S.plain(L("Radar chart of your five lens scores against a reference level", "نمودار راداری امتیاز پنج بُعد شما در برابر یک سطح مرجع")),
        valueLabel: function (v) { return S.digits(v.toFixed(1)); },
        series: [{ name: "me", values: vals, cls: "a" }, { name: "ref", values: LENS_ORDER.map(function () { return refLvl; }), cls: "b", noDots: true }] }) +
      '<div class="cmp"><span class="muted">' + md(L("Compare with", "مقایسه با")) + "</span>" +
      U.seg("cmp", [3, 4, 5, 6, 7].map(function (n) { return { id: String(n), label: n === 3 ? "L2–3" : "L" + n }; }), String(refLvl)) + "</div>" +
      '<p class="legend"><span class="key-a"></span>' + md(L("you", "شما")) + ' <span class="key-b"></span>' + md(L("the level you compare with", "سطحی که مقایسه می‌کنید")) + "</p></div>";

    h += '<div class="card res-lenses"><h3 class="h-sm">' + md(L("Lens by lens", "بُعد به بُعد")) + "</h3>" + LENS_ORDER.map(function (l) {
      var x = res.lenses[l], isEdge = l === res.weakest, isTop = l === res.strongest && res.spread > 0.5;
      return '<div class="lrow' + (isEdge ? " edge" : "") + '"><div class="lrow-h">' + icon(S.lensById(l).icon) + "<strong>" + md(S.lensById(l).name) + "</strong>" + lvChip(x.level) +
        (isEdge && res.spread > 0.5 ? '<span class="tag warn">' + md(L("growth edge", "لبه‌ی رشد")) + "</span>" : "") + (isTop ? '<span class="tag good">' + md(L("strongest", "قوی‌ترین")) + "</span>" : "") + "</div>" +
        U.meter(x.mean - 2, 5, isEdge ? "warn" : "") + "</div>";
    }).join("") + "</div></div>";

    // narrative
    var story;
    if (res.spread <= 0.75) story = L("A balanced profile: all five lenses sit within a few tenths of a level of each other. That is the pattern panels like to see.", "پروفایلی متعادل: هر پنج بُعد در فاصله‌ی چند دهم سطح از هم‌اند. پنل‌ها دوست دارند همین الگو را ببینند.");
    else story = L("A profile with a shape: " + lensName(res.strongest) + " reads at " + lvLabel(res.lenses[res.strongest].level) + " while " + lensName(res.weakest) + " reads at " + lvLabel(res.lenses[res.weakest].level) + ". Panels usually want a consistent pattern, and one dominant gap can block a case. That gap is also your fastest lever.",
      "پروفایلی با شکل مشخص: " + lensName(res.strongest) + " در سطح " + lvLabel(res.lenses[res.strongest].level) + " و " + lensName(res.weakest) + " در سطح " + lvLabel(res.lenses[res.weakest].level) + " خوانده می‌شود. پنل‌ها معمولا الگوی یکدست می‌خواهند و یک شکاف غالب می‌تواند پرونده را متوقف کند. همین شکاف سریع‌ترین اهرم شماست.");
    h += U.callout(res.spread <= 0.75 ? "good" : "rule", null, story);

    // growth edge
    if (res.weakest) {
      var wl = res.weakest, wlev = res.lenses[wl].level, lensObj = S.lensById(wl);
      var nextLvl = S.levelById("L" + Math.min(wlev + 1, 7)), g = growFor(wl, wlev);
      h += '<div class="card edge-card"><div class="edge-h"><span class="tag warn">' + icon("flag") + md(L("Your growth edge", "لبه‌ی رشد شما")) + "</span><h3>" + md(lensObj.name) + " " + lvChip(wlev) + "</h3></div>";
      if (lensObj.id !== "impact" && nextLvl && nextLvl.shift) h += '<p class="edge-shift"><span class="h-sm">' + md(L("The step this lens takes next", "گامی که این بُعد در ادامه برمی‌دارد")) + "</span>" + S.lv(nextLvl.id) + " " + md(nextLvl.shift[wl]) + "</p>";
      else if (nextLvl) h += '<p class="edge-shift"><span class="h-sm">' + md(L("What impact looks like at the next level", "اثرگذاری در سطح بعد چه شکلی است")) + "</span>" + S.lv(nextLvl.id) + " " + md(nextLvl.lenses.impact[0]) + "</p>";
      if (g && wl !== "impact" && g.moves && g.moves[wl]) {
        h += '<div class="grid c2"><div><h4 class="h-sm">' + md(L("Three moves for this quarter", "سه حرکت برای این فصل")) + '</h4><ul class="tick">' + g.moves[wl].map(function (m) { return "<li>" + md(m) + "</li>"; }).join("") + "</ul></div>" +
          "<div><h4 class=\"h-sm\">" + md(L("Questions for your manager", "پرسش‌هایی برای مدیرتان")) + '</h4><ul class="tick">' + (g.ask || []).map(function (m) { return "<li>" + md(m) + "</li>"; }).join("") + "</ul></div></div>";
      } else if (g && g.evidence) {
        h += '<h4 class="h-sm">' + md(L("How a panel could quote it", "پنل چطور می‌تواند نقلش کند")) + '</h4><ul class="tick">' + g.evidence.slice(0, 3).map(function (m) { return "<li>" + md(m) + "</li>"; }).join("") + "</ul>";
      }
      h += '<div class="btn-row"><a class="btn sm" href="#/grow/playbooks" data-grow-from="' + lvCode(S.clamp(wlev, 3, 6)) + '">' + icon("trend") + md(L("Open the full playbook", "نقشه‌ی راه کامل")) + "</a></div></div>";
    }

    // habits
    h += '<div class="card"><h3 class="h-sm">' + md(L("Habits", "عادت‌ها")) + '</h3><div class="grid c3">' + HABITS.map(function (hb) {
      var x = res.habits[hb.id], pct = x.max ? x.sum / x.max : 0;
      return '<div class="hab"><div class="hab-h">' + icon(hb.icon) + "<strong>" + md(hb.name) + "</strong></div>" + U.meter(x.sum, x.max || 1, pct < 0.5 ? "warn" : "") +
        "<p>" + md(pct >= 0.75 ? L("Solid.", "محکم.") : pct >= 0.5 ? L("Mostly there. Pick one habit to make consistent.", "تقریبا. یک عادت را انتخاب کنید و پیوسته‌اش کنید.") : L("Worth a look. Gaps here can hold a case back.", "ارزش بررسی دارد. شکاف اینجا می‌تواند پرونده را عقب نگه دارد.")) + "</p></div>";
    }).join("") + "</div></div>";

    // summary
    h += '<div class="card"><h3>' + icon("copy") + " " + md(L("Take it to your next 1:1", "به 1:1 بعدی ببرید")) + '</h3><textarea id="summaryText" readonly rows="10">' + esc(summaryText(st, res)) + "</textarea>" +
      '<div class="btn-row"><button type="button" class="btn sm" data-copy-target="#summaryText">' + icon("copy") + esc(U.u("copySummary")) + '</button><button type="button" class="btn secondary sm no-print" data-print="1">' + icon("print") + esc(U.u("print")) + "</button>" +
      (S.state.me !== lvCode(Math.max(overallLvl, 3)) ? '<button type="button" class="btn secondary sm" data-setme="' + lvCode(Math.max(overallLvl, 3)) + '">' + icon("user") + md(L("Use ", "استفاده از ")) + lvLabel(overallLvl) + md(L(" as my level", " به‌عنوان سطح من")) + "</button>" : "") +
      '<button type="button" class="btn ghost sm" data-reset="1">' + icon("reset") + esc(U.u("reset")) + "</button></div></div>";
    h += U.callout("note", L("A mirror, not a verdict", "آینه است، نه حکم"), L("Your reading is only as good as the examples behind your answers. Take it to your manager, ask where they see it differently, and look at the [level descriptions](#/levels) for the places you disagree.", "نتیجه فقط به اندازه‌ی مثال‌هایی معتبر است که پشت پاسخ‌هایتان هست. آن را نزد مدیرتان ببرید، بپرسید کجا متفاوت می‌بیند و برای جاهایی که اختلاف دارید [شرح سطح‌ها](#/levels) را ببینید."));
    return h;
  }

  /* ---- view ---- */
  S.views.locate = {
    render: function (root) {
      var A = S.data.assess;
      var head = U.pageHead({
        route: "locate", kicker: L("Locate & grow", "جایگاه و رشد"), icon: "target",
        title: L("Where am I?", "من کجا هستم؟"),
        lead: L("Fifteen questions across the four lenses and impact, then a profile you can take to your next 1:1. The honest version of a self-review.",
                "پانزده پرسش درباره‌ی چهار بُعد و اثرگذاری، و بعد یک پروفایل که می‌توانید به 1:1 بعدی ببرید. نسخه‌ی صادقانه‌ی یک خودارزیابی."),
        tldr: [
          L("Answer about the last 6–12 months and keep one real example in mind for each answer.", "درباره‌ی ۶ تا ۱۲ ماه گذشته پاسخ دهید و برای هر پاسخ یک مثال واقعی در ذهن داشته باشید."),
          L("The result is a profile, not a single number: a spiky profile tells you more than an average.", "نتیجه یک پروفایل است، نه یک عدد: پروفایل نوک‌دار بیشتر از میانگین به شما می‌گوید."),
          L("The weakest lens is your growth edge. The result gives you moves and questions for your manager.", "ضعیف‌ترین بُعد لبه‌ی رشد شماست. نتیجه برایتان حرکت‌ها و پرسش‌هایی برای مدیرتان می‌دهد.")
        ]
      });
      root.innerHTML = head + '<div id="mirror" class="mirror"></div>';
      if (!A || !A.questions) { S.$("#mirror", root).innerHTML = U.callout("warn", null, L("The questions are not available in this build.", "پرسش‌ها در این نسخه موجود نیستند.")); return; }
      var st = load(), cmp = null;
      function draw(keepScroll) {
        var res = compute(st), box = S.$("#mirror", root), html;
        var step = st.step;
        if (step === 6 && res.answered < res.total) step = st.step = 0;
        if (step < 0) html = introHtml(st, res);
        else if (step <= 4) html = lensStepHtml(step, st);
        else if (step === 5) html = habitsStepHtml(st);
        else html = resultHtml(st, res, cmp);
        box.innerHTML = html;
        S.store.set(KEY, st);
        if (!keepScroll) { var y = box.getBoundingClientRect().top + window.pageYOffset - 130; window.scrollTo({ top: Math.max(0, y), behavior: "auto" }); }
      }
      S.on(root, "click", "[data-go]", function (e, b) { if (b.disabled) return; var n = +b.getAttribute("data-go"); st.step = n; cmp = null; draw(false); });
      function stepDone() {
        var A2 = S.data.assess;
        if (st.step >= 0 && st.step <= 4) return A2.questions.filter(function (q) { return q.lens === LENS_ORDER[st.step]; }).every(function (q) { return st.a[q.id] != null; });
        if (st.step === 5) return (A2.habits || []).every(function (x) { return st.hb[x.id] != null; });
        return false;
      }
      function syncNext() {
        var ok = stepDone(), btn = S.$("#nextBtn", root), hint = S.$("#nextHint", root);
        if (btn) btn.disabled = !ok;
        if (hint) { if (ok) hint.setAttribute("hidden", ""); else hint.removeAttribute("hidden"); }
      }
      S.on(root, "change", ".opt input", function (e, inp) {
        st.a[inp.name] = +inp.value; S.store.set(KEY, st);
        S.$$(".opt", inp.closest("fieldset")).forEach(function (lb) { lb.classList.toggle("on", lb.contains(inp)); });
        syncNext();
      });
      S.on(root, "input", "[data-note]", function (e, ta) { st.notes[ta.getAttribute("data-note")] = ta.value; S.store.set(KEY, st); });
      root.addEventListener("click", function (e) {
        var b = e.target.closest(".seg[data-hb] button");
        if (b) { st.hb[b.parentNode.getAttribute("data-hb")] = +b.getAttribute("data-val"); S.store.set(KEY, st); syncNext(); }
      });
      S.on(root, "click", "[data-reset]", function () { st = defaults(); cmp = null; S.store.del(KEY); draw(false); });
      S.on(root, "click", "[data-print]", function () { window.print(); });
      S.on(root, "click", "[data-setme]", function (e, b) { S.setMe(b.getAttribute("data-setme")); });
      S.on(root, "click", "[data-grow-from]", function (e, a) { S.store.set("growFrom", a.getAttribute("data-grow-from")); });
      root.addEventListener("seg", function (e) { if (e.detail.name === "cmp") { cmp = +e.detail.value; draw(true); } });
      draw(true);
    },
    search: function () {
      return [{ kind: L("Tool", "ابزار"), title: L("Where am I? Self-assessment", "من کجا هستم؟ خودارزیابی"), text: L("Fifteen questions, a radar profile across the lenses, your growth edge and a 1:1 summary.", "پانزده پرسش، یک پروفایل راداری، لبه‌ی رشد و خلاصه‌ی 1:1."), route: "locate" }];
    }
  };
})();

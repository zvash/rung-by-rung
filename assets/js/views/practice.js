/* What would you do? Short scenarios; every option reveals the level of thinking behind it. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc;
  var KEY = "practice";
  var LETTERS = ["A", "B", "C", "D"];

  function scenarios() { return S.data.scenarios || []; }
  function load() { return S.store.get(KEY, {}); }
  function levelNum(id) { return +String(id).slice(1); }

  /* options are shown in a fixed pseudo-random order per scenario, never sorted by level, so the best answer has no fixed place */
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { return function () { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function displayOrder(s) {
    var base = hash(s.id);
    for (var tries = 0; tries < 50; tries++) {
      var r = rng(base + tries), idx = [], i, j, tmp;
      for (i = 0; i < s.options.length; i++) idx.push(i);
      for (i = idx.length - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); tmp = idx[i]; idx[i] = idx[j]; idx[j] = tmp; }
      var lv = idx.map(function (k) { return s.options[k].lv; }), asc = true, desc = true;
      for (i = 1; i < lv.length; i++) { if (lv[i] < lv[i - 1]) asc = false; if (lv[i] > lv[i - 1]) desc = false; }
      if (!asc && !desc) return idx;
    }
    return [0, 1, 2, 3];
  }

  function stats() {
    var st = load(), r = { n: 0, sum: 0, cnt: 0, dist: { 0: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 }, atOrAbove: 0, misfires: 0, total: scenarios().length };
    scenarios().forEach(function (s) {
      var i = st[s.id];
      if (i == null || !s.options[i]) return;
      var o = s.options[i];
      r.n += 1; r.dist[o.lv] = (r.dist[o.lv] || 0) + 1;
      if (o.lv === 0) r.misfires += 1; else { r.sum += o.lv; r.cnt += 1; }
      if (o.lv >= levelNum(s.level)) r.atOrAbove += 1;
    });
    r.avg = r.cnt ? r.sum / r.cnt : 0;
    return r;
  }

  function summaryHtml() {
    var r = stats(), pct = S.isFa() ? "٪" : "%";
    var h = '<div class="card prac-sum"><div class="prac-sum-h"><div><h3>' + icon("target") + " " + md(L("Where your instincts sit", "رویکرد معمول شما با کدام سطح تناسب دارد")) + '</h3><p class="muted">' + md(L("Answered", "پاسخ‌داده‌شده")) + ": <strong>" + S.digits(r.n) + " / " + S.digits(r.total) + "</strong></p></div>" +
      (r.n ? '<button type="button" class="btn sm secondary" data-prac-reset="1">' + icon("reset") + md(L("Start over", "شروع دوباره")) + "</button>" : "") + "</div>";
    if (r.n < 3) {
      h += '<p class="muted">' + md(L("Answer at least three situations to see a pattern. Pick what you would actually do, not what sounds best.", "به دست‌کم سه موقعیت پاسخ دهید تا الگوی انتخاب‌هایتان مشخص شود. کاری را انتخاب کنید که واقعا انجام می‌دهید، نه گزینه‌ای که بهتر به نظر می‌رسد.")) + "</p>";
      return h + "</div>";
    }
    var rows = [2, 3, 4, 5, 6, 7].map(function (lv) { return { label: S.lv("L" + lv), value: r.dist[lv] || 0, max: Math.max(1, r.n), text: S.digits(r.dist[lv] || 0) }; });
    rows.push({ label: '<span class="tag bad">' + md(L("backfires", "نتیجه‌ی معکوس")) + "</span>", value: r.dist[0] || 0, max: Math.max(1, r.n), text: S.digits(r.dist[0] || 0), cls: "neg" });
    h += '<div class="grid c2 prac-grid"><div>' + U.bars(rows) + "</div><div class=\"prac-read\">";
    if (r.cnt) h += "<p>" + md(L("Your choices average level **" + r.avg.toFixed(1) + "** of thinking, and **" + r.atOrAbove + " of " + r.n + "** were at or above the situation's own level.", "میانگین سطح رویکردهای انتخابی شما **" + r.avg.toFixed(1) + "** است و **" + r.atOrAbove + " مورد از " + r.n + "** با سطح موقعیت برابر یا بالاتر بودند.")) + "</p>";
    var me = S.state.me;
    if (me && r.cnt) {
      var mv = levelNum(me), d = r.avg - mv, msg;
      if (d >= 0.5) msg = L("That's above your current level ({" + me + "}). Either you're ready to be stretched, or you're answering the way you think is best rather than what you do. Compare with a real recent example.", "این نتیجه بالاتر از سطح فعلی شماست ({" + me + "}). شاید آماده‌ی پروژه‌ای چالشی‌تر هستید یا پاسخ مطلوب را انتخاب کرده‌اید، نه کاری را که در عمل انجام می‌دهید. نتیجه را با تجربه‌ای واقعی و اخیر مقایسه کنید.");
      else if (d <= -0.5) msg = L("That's below your current level ({" + me + "}). Reread the situations where you chose a lower altitude: the notes show what the next level adds, and it's usually one extra step, not a different person.", "این نتیجه پایین‌تر از سطح فعلی شماست ({" + me + "}). موقعیت‌هایی را که در آن‌ها پاسخ سطح پایین‌تر را انتخاب کردید دوباره بخوانید. توضیح‌ها نشان می‌دهند سطح بعد چه چیزی اضافه می‌کند. معمولا فقط یک اقدام بیشتر لازم است، نه تغییر کامل شیوه‌ی کارتان.");
      else msg = L("That's in line with your current level ({" + me + "}).", "این با سطح فعلی شما ({" + me + "}) هم‌خوان است.");
      h += "<p>" + md(msg) + "</p>";
    }
    if (r.misfires) h += "<p>" + md(L("**" + r.misfires + "** of your choices were tempting moves that backfire. They're worth rereading: they're the ones people most often regret.", "**" + r.misfires + "** مورد از انتخاب‌های شما اقدام‌هایی وسوسه‌انگیز با نتیجه‌ی معکوس بودند. توضیح آن‌ها را دوباره بخوانید. این‌ها از انتخاب‌هایی‌اند که افراد بیشتر از همه از آن‌ها پشیمان می‌شوند.")) + "</p>";
    h += '<p class="subtle sm">' + md(L("This isn't a test. Real situations carry context that a few lines can't.", "این آزمون نیست. موقعیت‌های واقعی زمینه و جزئیاتی دارند که در چند خط نمی‌گنجند.")) + "</p>";
    return h + "</div></div></div>";
  }

  function lensTags(s) {
    return (s.lenses || []).map(function (l) { var x = S.lensById(l); return x ? '<span class="tag">' + md(x.name) + "</span>" : ""; }).join("");
  }

  function optionsHtml(s, chosen) {
    var order = displayOrder(s), sl = levelNum(s.level), h = "";
    if (chosen == null) {
      h += '<div class="opt-list" role="group" aria-label="' + esc(S.plain(s.question)) + '">' + order.map(function (k, pos) {
        return '<button type="button" class="opt-btn" data-scen="' + s.id + '" data-opt="' + k + '"><span class="opt-ltr">' + LETTERS[pos] + "</span><span>" + md(s.options[k].t) + "</span></button>";
      }).join("") + "</div>";
      return h;
    }
    var o = s.options[chosen];
    h += '<div class="opt-list reveal">' + order.map(function (k, pos) {
      var x = s.options[k], mis = x.lv === 0, on = k === chosen;
      var badge = mis ? '<span class="tag bad">' + icon("alert") + md(L("A tempting move that backfires", "اقدامی وسوسه‌انگیز با نتیجه‌ی معکوس")) + "</span>"
        : '<span class="opt-lv">' + md(L("Level of thinking: ", "سطح تفکر: ")) + S.lv("L" + x.lv) + "</span>";
      return '<div class="opt-r' + (on ? " is-chosen" : "") + (mis ? " is-mis" : "") + '"><span class="opt-ltr">' + LETTERS[pos] + '</span><div class="opt-body"><div class="opt-head">' + badge + (on ? '<span class="tag brand">' + md(L("You chose this", "شما این را انتخاب کردید")) + "</span>" : "") + "</div><p>" + md(x.t) + '</p><p class="opt-why">' + md(x.why) + "</p></div></div>";
    }).join("") + "</div>";
    var kind, msg;
    if (o.lv === 0) { kind = "warn"; msg = L("You picked a tempting move that backfires. Read why above: the same instinct, pointed a little differently, is usually the senior one.", "اقدامی وسوسه‌انگیز با نتیجه‌ی معکوس انتخاب کردید. دلیل آن را بالا بخوانید. همین رویکرد، با کمی تغییر جهت، معمولا می‌تواند به اقدامی متناسب با سطح ارشد تبدیل شود."); }
    else if (o.lv < sl) { kind = "note"; msg = L("A step below this situation's own level ({" + s.level + "}). That's a reasonable choice, and the options above show what the next step adds.", "یک گام پایین‌تر از سطح این موقعیت ({" + s.level + "}). انتخابی منطقی است و گزینه‌های بالا نشان می‌دهند گام بعد چه چیزی به آن اضافه می‌کند."); }
    else if (o.lv === sl) { kind = "good"; msg = L("That's this situation's own level ({" + s.level + "}).", "این پاسخ با سطح همین موقعیت ({" + s.level + "}) مطابقت دارد."); }
    else { kind = "tip"; msg = L("Above this situation's level ({" + s.level + "}). That's a strength if you also do the lower-level basics reliably, and a risk if the context doesn't call for it.", "بالاتر از سطح این موقعیت ({" + s.level + "}). اگر کارهای پایه‌ی سطح پایین‌تر را هم با اطمینان انجام می‌دهید، این نقطه‌ی قوت شماست. اگر شرایط چنین اقدامی را لازم نکند، ممکن است ریسک ایجاد کند."); }
    h += U.callout(kind, null, msg) + U.callout("rule", L("The takeaway", "نتیجه"), s.takeaway);
    h += '<div class="btn-row"><button type="button" class="btn sm secondary" data-prac-again="' + s.id + '">' + icon("reset") + md(L("Choose again", "دوباره انتخاب کنید")) + "</button></div>";
    return h;
  }

  function itemHtml(s, st) {
    var chosen = st[s.id] != null && s.options[st[s.id]] ? st[s.id] : null;
    var done = chosen != null;
    var h = '<details class="acc scen" id="scen-' + s.id + '" data-id="' + s.id + '" data-level="' + s.level + '"><summary><span class="scen-h"><span class="scen-meta">' + S.lv(s.level) + lensTags(s) + "</span><span class=\"scen-t\">" + md(s.title) + "</span></span>" +
      '<span class="scen-state" data-state="' + s.id + '">' + (done ? icon("check") : "") + "</span>" + icon("chev", "chev") + "</summary>";
    h += '<div class="acc-body" data-body="' + s.id + '"><p class="scen-setup">' + md(s.setup) + '</p><p class="scen-q">' + md(s.question) + "</p>" + optionsHtml(s, chosen) + "</div></details>";
    return h;
  }

  S.views.practice = {
    render: function (root, param) {
      var st = load(), list = scenarios();
      var h = U.pageHead({
        route: "practice", kicker: L("Practice", "تمرین"), icon: "play",
        title: L("What would you do?", "شما چه می‌کردید؟"),
        lead: L("Short situations from ordinary engineering weeks. Pick what you would actually do, not what sounds best. Every option shows the level of thinking behind it, so you can see where your instincts sit.",
                "موقعیت‌هایی کوتاه از یک هفته‌ی معمول کاری در مهندسی نرم‌افزار. کاری را انتخاب کنید که واقعا انجام می‌دهید، نه گزینه‌ای که بهتر به نظر می‌رسد. هر گزینه سطح تفکر پشت آن را نشان می‌دهد تا رویکرد معمول خود را بشناسید."),
        tldr: [
          L("Sixteen situations, from a first-year engineer stuck on a bug to a staff engineer caught between two directors.", "شانزده موقعیت، از مهندس سال اولی که در رفع یک باگ block شده تا مهندس staff که میان خواسته‌های دو مدیر قرار گرفته است."),
          L("No option is stupid. The lower ones are what a reasonable person does; the notes explain what the next level adds.", "هیچ گزینه‌ای احمقانه نیست. گزینه‌های سطح پایین‌تر هم انتخاب‌هایی منطقی‌اند. توضیح‌ها نشان می‌دهند سطح بعد چه چیزی به رویکرد شما اضافه می‌کند."),
          L("Some options are tempting moves that backfire. They're marked, and they're the most useful ones to read.", "بعضی گزینه‌ها وسوسه‌انگیزند، اما نتیجه‌ی معکوس می‌دهند. این موارد مشخص شده‌اند و خواندن توضیحشان بسیار مفید است.")
        ]
      });
      var levelChips = U.pill(L("All levels", "همه‌ی سطح‌ها"), 'data-pl="all"', true) + ["L2", "L3", "L4", "L5", "L6"].map(function (l) {
        return '<button type="button" class="pill lvl-pill" data-pl="' + l + '" aria-pressed="false">' + S.lv(l) + "</button>";
      }).join("");
      h += '<div id="pracSummary">' + summaryHtml() + "</div>";
      h += '<div class="faq-tools prac-tools"><div class="faq-chips" role="group" aria-label="' + esc(S.plain(L("Situation level", "سطح موقعیت"))) + '">' + levelChips + "</div></div>";
      h += '<div class="scen-list" id="scenList">' + list.map(function (s) { return itemHtml(s, st); }).join("") + "</div>";
      h += U.nextCard("toolkit", S.pageLabel("toolkit"), L("Take the lesson into your week: an evidence log, impact statements and a 1:1 kit.", "آموخته‌ها را در هفته‌ی کاری‌تان به کار ببرید: سند دستاوردها، جمله‌های اثرگذاری و بسته‌ی 1:1."));
      root.innerHTML = h;
      view.root = root;

      function refresh(id) {
        var s = list.filter(function (x) { return x.id === id; })[0], st2 = load();
        var body = S.$('[data-body="' + id + '"]', root), state = S.$('[data-state="' + id + '"]', root);
        if (!s || !body) return;
        var chosen = st2[id] != null && s.options[st2[id]] ? st2[id] : null;
        // keep setup + question, replace the options part
        var setup = '<p class="scen-setup">' + md(s.setup) + '</p><p class="scen-q">' + md(s.question) + "</p>";
        body.innerHTML = setup + optionsHtml(s, chosen);
        if (state) state.innerHTML = chosen != null ? icon("check") : "";
        S.$("#pracSummary", root).innerHTML = summaryHtml();
      }
      S.on(root, "click", "[data-opt]", function (e, b) {
        var id = b.getAttribute("data-scen"), st2 = load();
        st2[id] = +b.getAttribute("data-opt");
        S.store.set(KEY, st2);
        refresh(id);
        var el = S.$("#scen-" + id, root);
        if (el) { var r = S.$(".opt-list", el); if (r && r.scrollIntoView) { /* leave scroll as is: reveal grows downward */ } }
      });
      S.on(root, "click", "[data-prac-again]", function (e, b) {
        var id = b.getAttribute("data-prac-again"), st2 = load();
        delete st2[id]; S.store.set(KEY, st2); refresh(id);
      });
      S.on(root, "click", "[data-prac-reset]", function () {
        S.store.del(KEY);
        list.forEach(function (s) { refresh(s.id); });
        S.$$(".scen[open]", root).forEach(function (d) { d.open = false; });
      });
      S.on(root, "click", "[data-pl]", function (e, b) {
        var v = b.getAttribute("data-pl");
        S.$$("[data-pl]", root).forEach(function (x) { var on = x === b; x.setAttribute("aria-pressed", String(on)); x.classList.toggle("is-on", on); });
        S.$$(".scen", root).forEach(function (d) { d.hidden = !(v === "all" || d.getAttribute("data-level") === v); });
      });
      S.$$(".scen", root).forEach(function (d) {
        d.addEventListener("toggle", function () {
          try { history.replaceState(null, "", d.open ? "#/practice/" + d.getAttribute("data-id") : "#/practice"); } catch (err) { /* ignore */ }
        });
      });
      if (param) openScenario(param);
    },
    onParam: function (root, param) { if (param) openScenario(param); },
    search: function () {
      return scenarios().map(function (s) { return { kind: L("Practice", "تمرین"), title: s.title, text: s.setup, route: "practice/" + s.id }; });
    }
  };
  var view = S.views.practice;

  function openScenario(id) {
    var root = view.root, el = root && S.$("#scen-" + id, root);
    if (!el) return;
    if (el.hidden) { var all = S.$('[data-pl="all"]', root); if (all) all.click(); }
    el.open = true;
    setTimeout(function () {
      var y = el.getBoundingClientRect().top + window.pageYOffset - (S.$(".topbar") ? S.$(".topbar").offsetHeight : 60) - 16;
      window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
    }, 30);
  }
})();

/* The levels: explorer (rail + tabbed detail), step comparison, weekly shape, habits. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc;

  var ALT = [
    { id: "scope", icon: "layers", label: L("Scope", "دامنه (scope)") },
    { id: "autonomy", icon: "compass", label: L("Autonomy", "استقلال") },
    { id: "ambiguity", icon: "mountain", label: L("Ambiguity", "ابهام") },
    { id: "horizon", icon: "clock", label: L("Time horizon", "افق زمانی") },
    { id: "people", icon: "users", label: L("People you move", "افرادی که هدایت می‌کنید") }
  ];
  var TABS = [
    { id: "glance", icon: "eye", label: L("Overview", "نگاه کلی") },
    { id: "lenses", icon: "layers", label: L("Lenses", "بُعدها") },
    { id: "signals", icon: "flag", label: L("Signals", "نشانه‌ها") },
    { id: "up", icon: "trend", label: L("Next step", "قدم بعد") },
    { id: "story", icon: "chat", label: L("Story", "داستان") }
  ];
  var PAGE_LENSES = function () { return S.data.lenses.filter(function (x) { return !x.beyond; }); };

  function validLevel(x) { return S.LEVELS.indexOf(x) >= 0 ? x : null; }

  /* ---- explorer ---- */
  function railHtml(cur) {
    var h = '<div class="lvx-rail" role="tablist" aria-orientation="vertical" aria-label="' + esc(U.u("level")) + '">';
    S.LEVELS.slice().reverse().forEach(function (id) {
      var lv = S.levelById(id);
      h += '<button type="button" class="lvx-rung' + (id === cur ? " is-on" : "") + '" role="tab" aria-selected="' + (id === cur) + '" data-lv="' + id + '" style="--c:var(--lv' + id.slice(1) + ')">' +
        S.lv(id) + '<span class="lvx-txt"><strong>' + md(lv.name) + "</strong><em>" + md(lv.tagline) + "</em></span>" +
        (S.state.me === id ? '<span class="tag brand">' + esc(U.u("you")) + "</span>" : "") + "</button>";
    });
    return h + "</div>";
  }

  function glance(lv) {
    var h = '<p class="lvd-essence">' + md(lv.essence) + "</p>";
    h += '<h3 class="h-sm">' + esc(S.plain(L("The altitude of this rung", "مقیاس کار در این پله"))) + "</h3>";
    h += '<dl class="alt">';
    ALT.forEach(function (a) {
      h += "<div><dt>" + icon(a.icon) + "<span>" + md(a.label) + "</span></dt><dd>" + md(lv.altitude[a.id]) + "</dd></div>";
    });
    h += "</dl>";
    h += U.callout("rule", L("Pace", "سرعت"), lv.pace);
    return h;
  }

  function lensesTab(lv) {
    var h = '<div class="grid c2 lens-grid">';
    PAGE_LENSES().forEach(function (lens) {
      h += '<div class="card lens-card"><div class="lens-h">' + icon(lens.icon) + "<h3>" + md(lens.name) + "</h3></div>" +
        '<p class="lens-q">' + md(lens.q) + "</p><ul>" + lv.lenses[lens.id].map(function (b) { return "<li>" + md(b) + "</li>"; }).join("") + "</ul></div>";
    });
    h += "</div>";
    var imp = S.lensById("impact");
    h += '<div class="card impact-bar">' + icon("trend") + "<div><strong>" + md(imp.name) + ": </strong>" + md(lv.lenses.impact[0]) + "</div></div>";
    return h;
  }

  function signalsTab(lv) {
    return '<div class="grid c2"><div class="card"><h3>' + icon("check") + " " + md(L("You are probably operating here when…", "احتمالا در این سطح کار می‌کنید اگر…")) + "</h3><ul class=\"tick\">" +
      lv.signals.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="card"><h3>' + icon("alert") + " " + md(L("Traps that keep people on this rung", "دام‌هایی که مانع رشد در این پله می‌شوند")) + "</h3><ul class=\"cross\">" +
      lv.traps.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div></div>";
  }

  function upTab(lv) {
    var nx = S.nextLevel(lv.id), nl = nx && S.levelById(nx);
    if (!nl) {
      return U.callout("note", L("Beyond L7", "فراتر از L7"),
        L("The ladder continues at some companies (principal, distinguished, fellow), but at that height the roles are largely written around the person. The useful question becomes: which problem is worth a decade of your attention, and who will carry it after you?",
          "در برخی شرکت‌ها نردبان ادامه دارد (principal، distinguished، fellow)، اما در این سطح‌ها نقش‌ها بیشتر متناسب با خود فرد تعریف می‌شوند. پرسش مفید این است: کدام مساله ارزش یک دهه تمرکز شما را دارد و بعد از شما چه کسی مسئولیت آن را بر عهده می‌گیرد؟"));
    }
    var h = '<p class="up-q"><span class="h-sm">' + md(L("The question at the next rung", "پرسش پله‌ی بعد")) + "</span>" + S.lv(nx) + " " + md(nl.question) + "</p>";
    h += '<div class="grid c2 up-grid">';
    PAGE_LENSES().forEach(function (lens) {
      h += '<div class="card card-flat up-card"><div class="lens-h">' + icon(lens.icon) + "<h3>" + md(lens.name) + "</h3></div><p>" + md(nl.shift[lens.id]) + "</p></div>";
    });
    h += "</div>";
    h += '<div class="btn-row up-cta"><a class="btn" href="#/grow/playbooks" data-grow-from="' + lv.id + '">' + icon("trend") + md(L("Open the playbook for ", "نقشه‌ی راه ")) + S.lv(lv.id) + ' <span class="hop-arrow">' + icon("arrow", "dir") + "</span> " + S.lv(nx) + "</a>" +
      '<a class="btn secondary" href="#/locate">' + icon("target") + md(L("Check where I am today", "بررسی جایگاه فعلی من")) + "</a></div>";
    return h;
  }

  function storyTab(lv) {
    return '<div class="card story"><div class="story-h">' + icon("chat") + "<h3>" + md(lv.story.title) + "</h3><span class=\"tag\">" + md(L("A composite story", "داستانی ترکیبی")) + "</span></div>" +
      '<div class="story-body">' + S.rich(lv.story.body) + "</div>" +
      '<p class="source">' + icon("flag") + "<span>" + md(L("The ==highlighted== phrases are the signals a review panel would quote.", "عبارت‌های ==برجسته‌شده== همان نشانه‌هایی‌اند که کمیته‌ی ارزیابی به آن‌ها استناد می‌کند.")) + "</span></p></div>";
  }

  function detailHtml(id, tab) {
    var lv = S.levelById(id);
    var h = '<article class="lvd" style="--c:var(--lv' + id.slice(1) + ')"><header class="lvd-head"><span class="lvd-badge">' + S.lv(id) + "</span><div><h2>" + md(lv.name) +
      (S.state.me === id ? ' <span class="tag brand">' + icon("user") + esc(U.u("you")) + "</span>" : "") + '</h2><p class="lvd-tag">' + md(lv.tagline) + "</p></div></header>" +
      '<blockquote class="lvd-q">' + md(lv.question) + "</blockquote>";
    h += U.tabs("lvd", TABS.map(function (t2) {
      var map = { glance: glance, lenses: lensesTab, signals: signalsTab, up: upTab, story: storyTab };
      return { id: t2.id, icon: t2.icon, label: t2.label, html: map[t2.id](lv) };
    }), tab);
    return h + "</article>";
  }

  /* ---- jump (compare steps) ---- */
  function levelSelect(name, val) {
    return '<select id="' + name + '" class="sel" aria-label="' + esc(name === "jumpFrom" ? S.plain(L("From", "از")) : S.plain(L("To", "به"))) + '">' +
      S.LEVELS.map(function (id) { return '<option value="' + id + '"' + (id === val ? " selected" : "") + ">" + id + " · " + esc(U.levelName(id)) + "</option>"; }).join("") + "</select>";
  }
  function jumpTable(a, b) {
    var i = S.levelIndex(a), j = S.levelIndex(b);
    if (i === j) return U.callout("note", null, L("Pick two different levels to see the steps between them.", "دو سطح متفاوت انتخاب کنید تا گام‌های میانشان را ببینید."));
    if (i > j) { var tmp = i; i = j; j = tmp; }
    var hops = S.LEVELS.slice(i + 1, j + 1);
    var head = ["<span class=\"sr-only\">" + esc(S.plain(L("Lens", "بُعد"))) + "</span>"].concat(hops.map(function (id) { return S.lv(S.prevLevel(id)) + ' <span class="hop-arrow">' + icon("arrow", "dir") + "</span> " + S.lv(id); }));
    var rows = PAGE_LENSES().map(function (lens) {
      return ['<span class="lens-cell">' + icon(lens.icon) + md(lens.name) + "</span>"].concat(hops.map(function (id) { return md(S.levelById(id).shift[lens.id]); }));
    });
    var out = "";
    if (hops.length > 1) out += '<p class="jump-note">' + md(L("That is **" + hops.length + " steps**, usually years apart. Read each column as a separate promotion, not one leap.", "این مسیر **" + hops.length + " گام** دارد و معمولا بین این گام‌ها چند سال فاصله است. هر ستون را یک ارتقای مستقل در نظر بگیرید.")) + "</p>";
    return out + U.table(head, rows, { cls: "jump-table" });
  }

  /* ---- week matrix ---- */
  var HEAT = [L("None", "هیچ"), L("Light", "کم"), L("Some", "متوسط"), L("Heavy", "زیاد"), L("Dominant", "غالب")];
  function weekTable() {
    var head = [""].concat(S.LEVELS.map(function (id) { return S.lv(id); }));
    var rows = S.data.weekRows.map(function (r) {
      return [md(r.name)].concat(r.v.map(function (v, i) {
        return '<span class="heat h' + v + (S.state.me === S.LEVELS[i] ? " me" : "") + '" title="' + esc(S.plain(HEAT[v])) + '"><i class="sr-only">' + esc(S.plain(HEAT[v])) + "</i></span>";
      }));
    });
    return U.table(head, rows, { cls: "week-table" });
  }

  /* ---- habits ---- */
  function habitsHtml() {
    return U.tabs("habits", S.data.habits.map(function (hb) {
      var html = '<p class="habit-def">' + md(hb.def) + "</p><ol class=\"habit-steps\">" + S.LEVELS.map(function (id) {
        return '<li class="' + (S.state.me === id ? "is-me" : "") + '">' + S.lv(id) + "<span>" + md(hb.by[id]) + "</span></li>";
      }).join("") + "</ol>";
      return { id: hb.id, icon: hb.icon, label: hb.name, html: html };
    }), "citizenship", "tabs-pills");
  }

  S.views.levels = {
    render: function (root, param) {
      var st = { lv: validLevel(param) || S.state.me || "L4", tab: "glance" };
      var jf = S.state.me && S.nextLevel(S.state.me) ? S.state.me : "L3";
      var jt = S.nextLevel(jf) && S.state.me ? S.nextLevel(jf) : "L5";
      var h = U.pageHead({
        route: "levels", kicker: L("Understand", "درک نردبان"), icon: "stairs",
        title: L("The levels, L2 to L7", "سطح‌ها، از L2 تا L7"),
        lead: L("Pick a rung to see what it expects, how it differs from the one above, and what it looks like in a real week.",
                "یک پله انتخاب کنید تا انتظارات آن، تفاوتش با پله‌ی بعد و شکل معمول یک هفته‌ی کاری در آن را ببینید."),
        tldr: [
          L("Each level answers a bigger question. From L6 on, each level is effectively a different role, not just “more L5”.", "هر سطح به پرسشی بزرگ‌تر پاسخ می‌دهد. از L6 به بعد هر سطح عملا یک نقش متفاوت است، نه صرفا «بیشتر از L5»."),
          L("The four lenses stay the same on every rung. What rises is the altitude: scope, ambiguity, time horizon and how many people you move.", "چهار بُعد در همه‌ی پله‌ها مشترک‌اند. آنچه افزایش می‌یابد، مقیاس کار است: scope، ابهام، افق زمانی و تعداد افرادی که همراه خود پیش می‌برید."),
          L("Three habits (citizenship, teamwork, engineering practices) apply on every rung. Only their radius grows.", "سه عادت مشارکت شهروندی، کار تیمی و رویه‌های مهندسی در همه‌ی پله‌ها لازم‌اند. دامنه‌ی اثر آن‌ها با سطح افزایش می‌یابد.")
        ],
        sections: [
          { id: "explorer", label: L("Explorer", "بررسی سطح‌ها") },
          { id: "jump", label: L("Compare steps", "مقایسه‌ی گام‌ها") },
          { id: "week", label: L("Shape of a week", "هفته‌ی کاری") },
          { id: "habits", label: L("Habits on every rung", "عادت‌های هر پله") }
        ]
      });
      h += U.section("explorer", null, null, '<div class="lvx">' + '<div id="lvxRail"></div><div id="lvxDetail" class="lvx-detail"></div></div>');
      h += U.section("jump", L("How far is the jump?", "فاصله‌ی این دو سطح چقدر است؟"),
        L("Choose where you are and where you want to be. Each step is shown as its own change, because each is a separate promotion.",
          "انتخاب کنید کجا هستید و می‌خواهید کجا باشید. هر گام جداگانه نشان داده می‌شود، چون هر گام یک ارتقای مستقل است."),
        '<div class="jump-pick"><label>' + md(L("From", "از")) + levelSelect("jumpFrom", jf) + "</label><span class=\"jump-arrow\">" + icon("arrow", "dir") + "</span><label>" + md(L("To", "به")) + levelSelect("jumpTo", jt) + '</label></div><div id="jumpOut">' + jumpTable(jf, jt) + "</div>");
      h += U.section("week", L("The shape of a week changes", "ترکیب کارها در طول هفته تغییر می‌کند"),
        L("Not how many hours you work, but where the attention goes. Darker means more of the week.", "این نمودار نشان می‌دهد وقت و توجه شما صرف چه کارهایی می‌شود، نه این‌که چند ساعت کار می‌کنید. رنگ تیره‌تر یعنی سهم بیشتر از هفته."),
        weekTable() + U.callout("note", L("Illustrative, not survey data", "این تصویر برای فهم بهتر آورده شده و حاصل یک پژوهش آماری نیست"),
          L("This is a composite of how the work typically shifts, drawn from public career ladders and staff-engineer writing. Roles vary: a specialist at L6 may code far more than a tech lead at L5. The pattern to notice is the direction, not the exact cell.",
            "این تصویر از الگوهای معمول تغییر کار ساخته شده و بر نردبان‌های شغلی عمومی و نوشته‌های مهندسان staff تکیه دارد. نقش‌ها متفاوت‌اند. یک متخصص L6 ممکن است بسیار بیشتر از یک tech lead در L5 کد بنویسد. به روند تغییر توجه کنید، نه مقدار دقیق هر خانه.")));
      h += U.section("habits", L("Three habits that never leave the ladder", "سه عادت مشترک در همه‌ی سطح‌ها"),
        L("They are expected at every level. What changes is how far they reach: from your desk to your team, to the whole organisation.",
          "این عادت‌ها در هر سطحی لازم‌اند. آنچه تغییر می‌کند دامنه‌ی اثر آن‌هاست: از کار فردی شما به تیم و از تیم به کل سازمان."),
        habitsHtml());
      h += U.nextCard("locate", S.pageLabel("locate"), L("A five-minute mirror across the four lenses.", "خودارزیابی پنج‌دقیقه‌ای بر اساس چهار بُعد."));
      root.innerHTML = h;

      function draw() {
        S.$("#lvxRail", root).innerHTML = railHtml(st.lv);
        S.$("#lvxDetail", root).innerHTML = detailHtml(st.lv, st.tab);
      }
      root._st = st; root._draw = draw;
      draw();

      S.on(root, "click", ".lvx-rung", function (e, b) {
        st.lv = b.getAttribute("data-lv");
        draw();
        try { history.replaceState(null, "", "#/levels/" + st.lv); } catch (err) { /* ignore */ }
      });
      root.addEventListener("tabchange", function (e) { if (e.detail.name === "lvd") st.tab = e.detail.id; });
      S.on(root, "click", "[data-grow-from]", function (e, a) { S.store.set("growFrom", a.getAttribute("data-grow-from")); });
      function redrawJump() {
        S.$("#jumpOut", root).innerHTML = jumpTable(S.$("#jumpFrom", root).value, S.$("#jumpTo", root).value);
      }
      S.on(root, "change", "#jumpFrom, #jumpTo", redrawJump);
    },
    onParam: function (root, param) {
      var id = validLevel(param);
      if (id && root._st) {
        root._st.lv = id; root._draw();
        S.scrollToSection("explorer");
      } else if (param) S.scrollToSection(param);
    },
    search: function () {
      return S.data.levels.map(function (lv) {
        return { kind: L("Level", "سطح"), title: L(lv.id + " · " + S.plain(lv.name), lv.id + " · " + S.plain(lv.name)), text: L(S.plain(lv.question), S.plain(lv.question)), route: "levels/" + lv.id };
      });
    }
  };
})();

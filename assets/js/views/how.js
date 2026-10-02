/* How leveling works: what a level is, lenses, altitude model, translator, promotions, pace, non-evidence. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc, H = S.data.how;

  var CONF = U.CONF, confTag = U.confTag;
  function lensList() { return S.data.lenses; }

  /* ---- what a level is ---- */
  function sectionWhat() {
    var h = '<div class="layers">';
    H.layers.forEach(function (ly) {
      h += '<div class="layer' + (ly.core ? " core" : "") + '"><div class="layer-ic">' + icon(ly.icon) + '</div><div><div class="layer-name">' + md(ly.name) + "</div>" +
        '<div class="layer-q">' + md(ly.q) + "</div><p>" + md(ly.text) + '</p><p class="layer-eg">' + md(ly.eg) + "</p></div></div>";
    });
    h += "</div>";
    h += '<div class="grid c3 notlevel">' + H.notLevel.map(function (x) { return '<div class="card card-flat">' + icon("x") + "<p>" + md(x.t) + "</p></div>"; }).join("") + "</div>";
    return h;
  }

  /* ---- lenses ---- */
  function lensExplorer() {
    var items = lensList().map(function (lens) {
      var steps = '<ol class="stair">' + S.LEVELS.map(function (id, ix) {
        var cur = S.state.me === id;
        return '<li class="' + (cur ? "is-me" : "") + '" style="--i:' + ix + ';--c:var(--lv' + id.slice(1) + ')">' + S.lv(id) + "<span>" + md(H.progress[lens.id][id]) + "</span></li>";
      }).join("") + "</ol>";
      var html = '<div class="lens-def"><p class="lens-q2">' + md(lens.q) + "</p><p>" + md(lens.def) + "</p></div>" + steps;
      return { id: lens.id, icon: lens.icon, label: lens.name, html: html };
    });
    return U.tabs("lensx", items, "contribution", "tabs-pills");
  }
  function matrixHtml() {
    var M = H.matrix;
    function cell(key, pos) {
      var c = M.cells[key];
      return '<div class="mx-cell ' + pos + (c.tone ? " tone-" + c.tone : "") + '"><strong>' + md(c.name) + "</strong><p>" + md(c.text) + "</p></div>";
    }
    return '<div class="matrix"><div class="mx-y">' + md(M.axisY) + "</div>" +
      '<div class="mx-grid">' +
      '<div class="mx-lbl mx-t">' + md(L("Hard problem", "مساله‌ی سخت")) + "</div>" + cell("hardSimple", "a") + cell("hardHard", "b") +
      '<div class="mx-lbl mx-t">' + md(L("Ordinary problem", "مساله‌ی معمولی")) + "</div>" + cell("easySimple", "c") + cell("easyHard", "d") +
      '<div class="mx-lbl"></div><div class="mx-lbl mx-b">' + md(L("Simple solution", "راه‌حل ساده")) + '</div><div class="mx-lbl mx-b">' + md(L("Complex solution", "راه‌حل پیچیده")) + "</div></div>" +
      '<div class="mx-x">' + md(M.axisX) + "</div></div>" + U.callout("rule", null, M.note);
  }
  function e2eBody(kindId, checked) {
    var kind = H.e2e.kinds.filter(function (k) { return k.id === kindId; })[0] || H.e2e.kinds[0];
    var done = 0;
    var list = '<ul class="e2e-list">' + kind.items.map(function (it, i) {
      var on = it.core || checked.indexOf(i) >= 0;
      if (on) done += 1;
      return '<li><label class="chk' + (on ? " on" : "") + (it.core ? " core" : "") + '"><input type="checkbox" data-i="' + i + '"' + (on ? " checked" : "") + (it.core ? " disabled" : "") + "><span>" + md(it.t) + "</span></label></li>";
    }).join("") + "</ul>";
    var ratio = done / kind.items.length;
    var verdict = H.e2e.verdicts.filter(function (v) { return ratio <= v.max; })[0];
    return list + '<div class="e2e-meter">' + U.meter(done, kind.items.length, "big") + '<div class="e2e-score"><strong>' + S.digits(done) + " / " + S.digits(kind.items.length) + "</strong><span>" + md(verdict.t) + "</span></div></div>";
  }
  function e2eHtml() {
    return '<p class="muted">' + md(H.e2e.intro) + "</p>" +
      U.seg("e2e-kind", H.e2e.kinds.map(function (k) { return { id: k.id, label: k.name }; }), H.e2e.kinds[0].id, S.plain(L("Kind of work", "نوع کار"))) +
      '<div id="e2eBody" class="e2e">' + e2eBody(H.e2e.kinds[0].id, []) + "</div>" +
      U.callout("tip", L("Owning, in the ladder's sense", "own کردن، به معنای نردبان"),
        L("If a gap shows up in something you own, you fix it yourself or find and involve the right people and follow up until it is solved, whether or not you wrote that part. “My job was only the code” is not an answer at L4 and above.",
          "اگر در کاری که own کرده‌اید شکافی پیدا شد، خودتان رفعش می‌کنید یا آدم‌های درست را پیدا و درگیر می‌کنید و تا حل شدن پی‌گیری می‌کنید، چه آن بخش را خودتان نوشته باشید چه نه. «کار من فقط کد بود» از L4 به بالا جواب نیست."));
  }
  function sectionLenses() {
    return U.tabs("lenses", [
      { id: "explorer", icon: "layers", label: L("The five questions", "پنج پرسش"), html: lensExplorer() },
      { id: "matrix", icon: "mountain", label: L("Hard problem, simple answer", "مساله‌ی سخت، پاسخ ساده"), html: matrixHtml() },
      { id: "e2e", icon: "check", label: L("End to end, in practice", "end-to-end در عمل"), html: e2eHtml() }
    ], "explorer");
  }

  /* ---- altitude ---- */
  var ALT_ROWS = [
    { id: "scope", icon: "layers", label: L("Scope", "دامنه (scope)") },
    { id: "autonomy", icon: "compass", label: L("Autonomy", "استقلال") },
    { id: "ambiguity", icon: "mountain", label: L("Ambiguity", "ابهام") },
    { id: "horizon", icon: "clock", label: L("Time horizon", "افق زمانی") },
    { id: "people", icon: "users", label: L("People you move", "افرادی که جلو می‌برید") }
  ];
  function ringsSvg(sel) {
    var R = [30, 56, 82, 108, 134, 160], cx = 170, cy = 170, svg = '<svg class="rings" viewBox="0 0 340 340" role="img" aria-label="' + esc(S.plain(L("Concentric rings: scope grows with each level", "حلقه‌های هم‌مرکز: scope با هر سطح بزرگ‌تر می‌شود"))) + '" style="direction:ltr">';
    for (var i = S.LEVELS.length - 1; i >= 0; i--) {
      var id = S.LEVELS[i], on = i <= sel;
      svg += '<circle class="ring' + (on ? " on" : "") + (i === sel ? " cur" : "") + '" cx="' + cx + '" cy="' + cy + '" r="' + R[i] + '" style="--c:var(--lv' + id.slice(1) + ')"/>';
    }
    for (var j = 0; j < S.LEVELS.length; j++) {
      var yy = cy - R[j] + 15;
      svg += '<text class="ring-t' + (j === sel ? " cur" : "") + '" x="' + cx + '" y="' + (j === 0 ? cy + 4 : yy) + '" text-anchor="middle">' + S.LEVELS[j] + "</text>";
    }
    return svg + "</svg>";
  }
  function altTable(sel) {
    var lv = S.levelById(S.LEVELS[sel]), prev = sel > 0 ? S.levelById(S.LEVELS[sel - 1]) : null;
    return '<div class="alt-head">' + S.lv(lv.id) + " <strong>" + md(lv.name) + "</strong> <span class=\"muted\">" + md(lv.tagline) + "</span></div><dl class=\"alt\">" + ALT_ROWS.map(function (a) {
      return "<div><dt>" + icon(a.icon) + "<span>" + md(a.label) + "</span></dt><dd>" + md(lv.altitude[a.id]) +
        (prev ? '<span class="alt-prev">' + md(L("Before: ", "قبلا: ")) + md(prev.altitude[a.id]) + "</span>" : "") + "</dd></div>";
    }).join("") + "</dl>";
  }
  function sectionAltitude() {
    var start = S.state.me ? S.levelIndex(S.state.me) : 2;
    return '<div class="alt-wrap"><div class="alt-viz"><div id="altRings">' + ringsSvg(start) + '</div><label class="alt-slider"><span class="sr-only">' + esc(S.plain(L("Level", "سطح"))) + '</span>' +
      '<input type="range" id="altSlider" min="0" max="5" step="1" value="' + start + '" aria-label="' + esc(S.plain(L("Choose a level", "یک سطح انتخاب کنید"))) + '"><span class="alt-ticks">' +
      S.LEVELS.map(function (id) { return "<i>" + id + "</i>"; }).join("") + '</span></label></div><div id="altTable" class="alt-detail">' + altTable(start) + "</div></div>";
  }

  /* ---- translator ---- */
  function translatorHtml(sel) {
    var T = H.translator;
    var head = ['<span class="sr-only">' + esc(S.plain(L("This guide", "این راهنما"))) + "</span>"].concat(T.companies.map(function (c) {
      return esc(c.name) + ' <span class="cdot c-' + c.conf + '" title="' + esc(S.plain(CONF[c.conf].label)) + '"></span>';
    }));
    var rows = S.LEVELS.map(function (id) {
      return [S.lv(id) + " " + md(S.levelById(id).name)].concat(T.companies.map(function (c) { return esc(T.rows[id][c.id]); }));
    });
    var h = '<div class="tr-pick"><label>' + md(L("Your employer", "کارفرمای شما")) + '<select id="trCo" class="sel">' + T.companies.map(function (c) { return '<option value="' + c.id + '">' + esc(c.name) + "</option>"; }).join("") +
      '</select></label><label>' + md(L("Your level there", "سطح شما آن‌جا")) + '<select id="trLv" class="sel"></select></label><div id="trOut" class="tr-out"></div></div>';
    h += '<div id="trTable">' + U.table(head, rows, { cls: "tr-table", rowAttrs: function (r, i) { return 'data-lv="' + S.LEVELS[i] + '"' + (sel === S.LEVELS[i] ? ' class="is-me"' : ""); } }) + "</div>";
    h += '<p class="legend"><span class="cdot c-H"></span>' + md(CONF.H.label) + ' <span class="cdot c-M"></span>' + md(CONF.M.label) + ' <span class="cdot c-L"></span>' + md(CONF.L.label) + "</p>";
    h += '<ul class="cautions">' + T.cautions.map(function (c) { return "<li>" + md(c) + "</li>"; }).join("") + "</ul>" + U.source(T.source);
    return h;
  }
  function vocabHtml() {
    var rows = H.vocab.map(function (v) { return [esc(v.who) + "<br>" + confTag(v.conf), md(v.names), md(v.note)]; });
    return U.table([md(L("Employer or ladder", "کارفرما یا نردبان")), md(L("What they judge, in their words", "چه چیزی را می‌سنجند، به زبان خودشان")), md(L("Worth noticing", "قابل‌توجه"))], rows, { cls: "vocab-table" }) +
      U.callout("note", null, H.vocabNote);
  }
  function sectionTranslator() {
    return U.tabs("trx", [
      { id: "codes", icon: "swap", label: L("Level codes", "کدهای سطح"), html: translatorHtml(null) },
      { id: "vocab", icon: "book", label: L("Vocabulary", "واژگان"), html: vocabHtml() }
    ], "codes");
  }

  /* ---- promotions ---- */
  function sectionPromotion() {
    var h = '<ol class="pipe">' + H.pipeline.map(function (st, i) {
      return '<li><span class="pipe-n">' + S.digits(i + 1) + '</span><div class="pipe-ic">' + icon(st.icon) + "</div><strong>" + md(st.name) + "</strong><p>" + md(st.does) +
        '</p><p class="pipe-risk">' + icon("alert") + "<span>" + md(st.risk) + "</span></p></li>";
    }).join("") + "</ol>";
    h += U.callout("rule", L("Write for a reader who doesn't know you", "برای خواننده‌ای بنویسید که شما را نمی‌شناسد"),
      L("The people who decide are often not the people who worked with you. A case wins when it is easy to quote: the problem, your role, the result, what persists. “We” loses to a sentence someone else can repeat in the room.",
        "کسانی که تصمیم می‌گیرند اغلب همان کسانی نیستند که با شما کار کرده‌اند. پرونده‌ای می‌برد که نقل‌کردنش آسان باشد: مساله، نقش شما، نتیجه، آنچه می‌ماند. «ما» به جمله‌ای می‌بازد که یک نفر دیگر بتواند در اتاق تکرارش کند."));
    h += '<div class="why-not"><h3>' + md(L("Why a case comes back “not yet”", "چرا پرونده با «هنوز نه» برمی‌گردد")) + '</h3><div class="grid c3">' +
      [
        { t: L("The scope wasn't there yet", "scope هنوز نبود"), x: L("Real work at the current level, not yet at the next.", "کار واقعی در سطح فعلی، ولی هنوز نه در سطح بعد.") },
        { t: L("The evidence wasn't quotable", "مدرک قابل‌نقل نبود"), x: L("It happened, but nobody could cite an outcome.", "اتفاق افتاده بود، ولی کسی نمی‌توانست نتیجه‌ای را نقل کند.") },
        { t: L("Timing or advocacy", "زمان‌بندی یا حمایت"), x: L("A reorg, a missed cycle, a manager not convinced.", "یک بازسازی سازمانی، یک چرخه‌ی از دست‌رفته، مدیری که قانع نشده بود.") }
      ].map(function (c, i) { return '<div class="card card-flat"><span class="idea-n">' + S.digits(i + 1) + "</span><strong>" + md(c.t) + "</strong><p>" + md(c.x) + "</p></div>"; }).join("") + "</div></div>";
    h += '<h3 class="h-sm sp">' + md(L("How it differs by employer (as reported)", "تفاوت بین کارفرماها (به‌صورت گزارش‌شده)")) + "</h3>";
    h += H.promoByCo.map(function (c) {
      return '<details class="acc"><summary><span>' + esc(c.who) + "</span> " + confTag(c.conf) + icon("chev", "chev") + '</summary><div class="acc-body"><p>' + md(c.text) + "</p></div></details>";
    }).join("");
    return h + U.source(H.promoNote);
  }

  /* ---- pace ---- */
  function sectionPace() {
    var P = H.pace;
    var rows = S.LEVELS.map(function (id) {
      var b = P.bands[id];
      return { label: S.lv(id) + " <span class=\"muted\">" + esc(U.levelName(id)) + "</span>", from: b[0], to: b[1], mid: b[2], cls: "c" + id.slice(1) };
    });
    var h = '<div class="card">' + '<h3 class="h-sm">' + md(L("Years of experience, by level (indicative)", "سال‌های تجربه بر حسب سطح (نمونه‌وار)")) + "</h3>" + U.ranges(rows, P.scale) +
      '<p class="legend"><span class="mid-key"></span>' + md(L("typical", "معمول")) + " &nbsp; <span class=\"bar-key\"></span>" + md(L("common range", "بازه‌ی رایج")) + "</p>" + U.source(P.note) + "</div>";
    h += '<div class="grid c2 sp">' +
      '<div class="card"><h3>' + icon("clock") + " " + md(L("What the ladder itself says", "خودِ نردبان چه می‌گوید")) + '</h3><ul class="tick"><li>' +
      md(L("**L2 → L3:** operate at L3 within about six months; be L3 within a year at most.", "**L2 → L3:** ظرف حدود شش ماه در سطح L3 عمل کنید؛ حداکثر ظرف یک سال به L3 برسید.")) + "</li><li>" +
      md(L("**L3 → L4:** typically one to two years. Everyone on the ladder is expected to reach L4.", "**L3 → L4:** معمولا یک تا دو سال. از همه‌ی افراد انتظار می‌رود به L4 برسند.")) + "</li><li>" +
      md(L("**L4 and beyond:** no formula. The step is earned by scope and evidence, not by waiting.", "**L4 به بعد:** فرمولی نیست. این گام با scope و مدرک به دست می‌آید، نه با منتظر ماندن.")) + "</li></ul></div>" +
      '<div class="card"><h3>' + icon("flag") + " " + md(L("Plateaus are normal, and sometimes chosen", "درجا زدن عادی است، و گاهی انتخاب شده")) + "</h3><p>" +
      md(L("Many large employers treat the first senior level as a place you can stay, by design, and some ladders say so outright (Honeycomb's Senior; Monzo's Engineer III as a legitimate stopping point). The useful question is whether a plateau is a choice you made or something that is happening to you.",
        "بسیاری از کارفرماهای بزرگ اولین سطح ارشد را عمدا جایی می‌دانند که می‌شود در آن ماند، و بعضی نردبان‌ها صریحا می‌گویند (Senior در Honeycomb؛ Engineer III در Monzo به‌عنوان توقفگاه مشروع). پرسش مفید این است که درجا زدن انتخابِ خودتان است یا چیزی که برایتان اتفاق می‌افتد.")) + "</p></div></div>";
    h += '<h3 class="h-sm sp">' + md(L("Time between promotions, as reported (weak sources)", "فاصله‌ی میان ارتقاها، به‌صورت گزارش‌شده (منابع ضعیف)")) + "</h3><div class=\"grid c2\">" +
      P.reported.map(function (r) { return '<div class="card card-flat rep"><strong>' + esc(r.who) + "</strong><p>" + md(r.text) + "</p></div>"; }).join("") + "</div>";
    h += U.callout("warn", L("Handle with care", "با احتیاط"), L("These intervals come from aggregators and single articles. They show that two years is common between early levels and that later steps vary widely. They are not a schedule you can be late for.", "این فاصله‌ها از تجمیع‌کننده‌ها و مقاله‌های منفرد می‌آیند. نشان می‌دهند دو سال میان سطح‌های اول رایج است و گام‌های بعدی بسیار متفاوت‌اند. برنامه‌ای نیستند که بشود از آن عقب ماند."));
    return h;
  }

  /* ---- non-evidence ---- */
  function sectionSignals() {
    var rows = H.nonEvidence.map(function (r) { return ['<span class="strike">' + md(r.says) + "</span>", md(r.asks)]; });
    return U.table([md(L("Sounds positive, but isn't evidence", "مثبت به نظر می‌رسد، ولی مدرک نیست")), md(L("What a panel needs instead", "پنل به‌جایش چه می‌خواهد"))], rows, { cls: "nonev" }) +
      U.callout("tip", L("Practise on your own sentences", "روی جمله‌های خودتان تمرین کنید"),
        L("Paste a line from your last self-review into the [impact statement builder](#/toolkit/statement) and see which of scope, role, result and “what persists” it is missing.",
          "یک خط از آخرین خودارزیابی‌تان را در [سازنده‌ی جمله‌ی اثرگذاری](#/toolkit/statement) بگذارید و ببینید کدام‌یک از scope، نقش، نتیجه و «آنچه می‌ماند» در آن نیست."));
  }

  S.views.how = {
    render: function (root, param) {
      var h = U.pageHead({
        route: "how", kicker: L("Understand", "درک نردبان"), icon: "map",
        title: L("How leveling works", "سطح‌بندی چطور کار می‌کند"),
        lead: L("A level is a contract about scope. Here is what it bundles, what gets measured, how employers decide, and why the same title means different things in different places.",
                "سطح یک قرارداد درباره‌ی scope است. اینجا می‌بینید چه چیزهایی را در خود جمع می‌کند، چه چیزی سنجیده می‌شود، کارفرماها چطور تصمیم می‌گیرند، و چرا یک عنوان در جاهای مختلف معنای متفاوتی دارد."),
        tldr: [
          L("Level, title and pay are three different things. The level is the contract; the title is a label; the pay band follows the level.", "سطح، عنوان و حقوق سه چیز متفاوتند. سطح قرارداد است؛ عنوان برچسب است؛ بازه‌ی حقوق از سطح نتیجه می‌شود."),
          L("Four lenses, one yardstick: contribution, challenge, influence and expertise, all read together with impact.", "چهار بُعد، یک معیار: مشارکت، چالش، قدرت نفوذ و تخصص، همه کنار اثرگذاری خوانده می‌شوند."),
          L("People who never worked with you often make the call, from what is written. Make your level easy to quote.", "کسانی که هرگز با شما کار نکرده‌اند اغلب بر اساس نوشته تصمیم می‌گیرند. سطحتان را قابل‌نقل کنید.")
        ],
        sections: [
          { id: "what", label: L("What a level is", "سطح چیست") },
          { id: "lenses", label: L("Lenses", "بُعدها") },
          { id: "altitude", label: L("Altitude", "ارتفاع") },
          { id: "translator", label: L("Across employers", "میان کارفرماها") },
          { id: "promotion", label: L("Promotions", "ارتقاها") },
          { id: "pace", label: L("Pace", "سرعت") },
          { id: "signals", label: L("Not evidence", "مدرک نیست") }
        ]
      });
      h += U.section("what", L("A level is a contract about scope", "سطح، قرارداد درباره‌ی scope است"), L("Four things get confused. Pull them apart and most leveling arguments get simpler.", "چهار چیز با هم قاطی می‌شوند. جدایشان کنید تا بیشترِ بحث‌های سطح‌بندی ساده‌تر شود."), sectionWhat());
      h += U.section("lenses", L("Four lenses and one yardstick", "چهار بُعد و یک معیار"), L("Every level is described along the same lenses. What changes is how far each one reaches.", "هر سطح در امتداد همین بُعدها توصیف می‌شود. آنچه عوض می‌شود دامنه‌ی هر کدام است."), sectionLenses());
      h += U.section("altitude", L("The altitude model", "مدل ارتفاع"), L("Behind every lens is the same shape: scope, autonomy, ambiguity, time horizon and the number of people you move. Slide up and watch them grow.", "پشت هر بُعد یک شکل ثابت هست: scope، استقلال، ابهام، افق زمانی و تعداد کسانی که جلو می‌برید. به بالا بکشید و رشدشان را ببینید."), sectionAltitude());
      h += U.section("translator", L("Same ideas, different ladders", "ایده‌های یکسان، نردبان‌های متفاوت"), L("When you read a job post or a friend's title, translate scope, not words. Pick your employer to see where it sits on this guide's scale.", "وقتی آگهی شغلی یا عنوان یک دوست را می‌خوانید، scope را ترجمه کنید، نه کلمه‌ها را. کارفرمای خود را انتخاب کنید تا جایش روی مقیاس این راهنما را ببینید."), sectionTranslator());
      h += U.section("promotion", L("How promotions are decided", "ارتقا چطور تصمیم‌گیری می‌شود"), L("The details differ, the shape doesn't: evidence, a case, input, a bar, a decision.", "جزئیات فرق می‌کند، شکلش نه: مدرک، پرونده، نظر دیگران، معیار، تصمیم."), sectionPromotion());
      h += U.section("pace", L("Pace and plateaus", "سرعت و درجا زدن"), L("Years loosely track level, but the bands overlap a lot. Compare yourself to the evidence, not the calendar.", "سال‌ها تا حدی با سطح همراهند، ولی بازه‌ها بسیار هم‌پوشانی دارند. خودتان را با مدرک مقایسه کنید، نه با تقویم."), sectionPace());
      h += U.section("signals", L("What is not level evidence", "چه چیزی مدرکِ سطح نیست"), L("Reviews are written in terms of the ladder. Statements that sound warm but name no problem and no result don't move a case.", "ارزیابی‌ها بر اساس نردبان نوشته می‌شوند. جمله‌هایی که گرم به نظر می‌رسند ولی نه مساله‌ای را نام می‌برند نه نتیجه‌ای را، پرونده را جلو نمی‌برند."), sectionSignals());
      h += U.nextCard("levels", S.pageLabel("levels"), L("Each rung in detail: lenses, signals, traps and a story.", "هر پله با جزئیات: بُعدها، نشانه‌ها، تله‌ها و یک داستان."));
      root.innerHTML = h;

      // e2e checklist
      var e2eState = { kind: H.e2e.kinds[0].id, checked: [] };
      S.on(root, "click", ".e2e input[type=checkbox]", function (e, el) {
        var i = +el.getAttribute("data-i"), at = e2eState.checked.indexOf(i);
        if (el.checked && at < 0) e2eState.checked.push(i); else if (!el.checked && at >= 0) e2eState.checked.splice(at, 1);
        S.$("#e2eBody", root).innerHTML = e2eBody(e2eState.kind, e2eState.checked);
      });
      root.addEventListener("seg", function (e) {
        if (e.detail.name === "e2e-kind") { e2eState.kind = e.detail.value; e2eState.checked = []; S.$("#e2eBody", root).innerHTML = e2eBody(e2eState.kind, e2eState.checked); }
      });
      // altitude
      S.on(root, "input", "#altSlider", function (e, el) {
        var v = +el.value;
        S.$("#altRings", root).innerHTML = ringsSvg(v);
        S.$("#altTable", root).innerHTML = altTable(v);
      });
      // translator
      var co = S.$("#trCo", root), lvSel = S.$("#trLv", root), out = S.$("#trOut", root);
      function fillLevels() {
        var cid = co.value;
        lvSel.innerHTML = S.LEVELS.map(function (id) { return '<option value="' + id + '">' + esc(H.translator.rows[id][cid]) + "</option>"; }).join("");
        pick();
      }
      function pick() {
        var id = lvSel.value;
        S.$$("#trTable tbody tr", root).forEach(function (tr) { tr.classList.toggle("is-me", tr.getAttribute("data-lv") === id); });
        var lv = S.levelById(id);
        out.innerHTML = '<span class="muted">' + md(L("Reads like this guide's", "در مقیاس این راهنما می‌خواند")) + "</span> " + S.lv(id) + " <strong>" + md(lv.name) + "</strong> <span class=\"muted\">" + md(L("(± one level)", "(با یک سطح کمی‌بیشی)")) + "</span>";
      }
      if (co && lvSel) {
        co.addEventListener("change", fillLevels);
        lvSel.addEventListener("change", pick);
        // preselect a sensible demo: Google L4 equivalent for the user's level
        fillLevels();
        if (S.state.me) { lvSel.value = S.state.me; pick(); }
      }
    },
    search: function () {
      var P = [
        ["what", L("What a level is: level vs title vs pay band", "سطح چیست: سطح، عنوان و بازه‌ی حقوق"), L("A level is a contract about scope; titles travel badly; pay bands follow level.", "سطح قرارداد درباره‌ی scope است؛ عنوان‌ها بد سفر می‌کنند؛ بازه‌ی حقوق از سطح می‌آید.")],
        ["lenses", L("Four lenses and impact", "چهار بُعد و اثرگذاری"), L("Contribution, challenge, influence, expertise; impact beyond them; problem vs solution complexity; end-to-end checklist.", "مشارکت، چالش، قدرت نفوذ، تخصص؛ اثرگذاری فراتر از آن‌ها؛ پیچیدگی مساله در برابر راه‌حل؛ چک‌لیست end-to-end.")],
        ["altitude", L("The altitude model: scope, autonomy, ambiguity, horizon", "مدل ارتفاع: scope، استقلال، ابهام، افق"), L("How scope, ambiguity and people grow with each level.", "رشد scope، ابهام و افراد با هر سطح.")],
        ["translator", L("Level translator across employers", "مترجم سطح میان کارفرماها"), L("Google L5, Meta E5, Amazon L6, Microsoft 63–64 and more, mapped to bands.", "Google L5، Meta E5، Amazon L6، Microsoft 63–64 و بیشتر، روی بازه‌ها.")],
        ["promotion", L("How promotions are decided", "ارتقا چطور تصمیم‌گیری می‌شود"), L("Evidence, manager case, peer input, calibration or committee, decision.", "مدرک، پرونده‌ی مدیر، نظر همکاران، calibration یا کمیته، تصمیم.")],
        ["pace", L("Pace and plateaus: how long each level takes", "سرعت و درجا زدن: هر سطح چقدر طول می‌کشد"), L("Years of experience by level, overlapping bands, time between promotions.", "سال‌های تجربه بر حسب سطح، بازه‌های هم‌پوشان، فاصله‌ی ارتقاها.")],
        ["signals", L("What is not level evidence", "چه چیزی مدرکِ سطح نیست"), L("Being well known, attending meetings, owning a big system, tenure.", "معروف بودن، شرکت در جلسه‌ها، در دست داشتن سیستم بزرگ، سابقه.")]
      ];
      return P.map(function (p) { return { kind: L("How leveling works", "سطح‌بندی چطور کار می‌کند"), title: p[1], text: p[2], route: "how/" + p[0] }; });
    }
  };
})();

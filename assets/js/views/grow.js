/* Growing to the next level: promotion model, playbooks, stall diagnostic, evidence loop, quarter plan. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc;
  var LENS4 = ["contribution", "challenge", "influence", "expertise"];

  /* ---- the promotion model diagram ---- */
  function modelSvg() {
    var t = function (x) { return esc(S.plain(x)); };
    var svg = '<svg class="model" viewBox="-48 0 728 300" role="img" style="direction:ltr" aria-label="' + t(L("Work level rises first; the title catches up after sustained next-level work", "سطحِ کار اول بالا می‌رود؛ عنوان بعد از کارِ پایدار در سطح بعد به آن می‌رسد")) + '">';
    svg += '<line class="m-grid" x1="60" y1="200" x2="660" y2="200"/><line class="m-grid" x1="60" y1="92" x2="660" y2="92"/>';
    svg += '<text class="m-lbl" x="54" y="204" text-anchor="end">' + t(L("Current level", "سطح فعلی")) + '</text><text class="m-lbl" x="54" y="96" text-anchor="end">' + t(L("Next level", "سطح بعد")) + "</text>";
    // lag area
    svg += '<polygon class="m-lag" points="360,92 540,92 540,200 360,200"/>';
    // phases
    svg += '<line class="m-phase" x1="210" y1="34" x2="210" y2="250"/><line class="m-phase" x1="360" y1="34" x2="360" y2="250"/><line class="m-phase" x1="540" y1="34" x2="540" y2="250"/>';
    svg += '<text class="m-ph" x="135" y="28" text-anchor="middle">' + t(L("Business as usual", "کارِ معمول")) + '</text><text class="m-ph b" x="285" y="28" text-anchor="middle">' + t(L("1 · Stretch", "۱ · کشش")) + '</text><text class="m-ph b" x="450" y="28" text-anchor="middle">' + t(L("2 · Sustain", "۲ · پایداری")) + '</text><text class="m-ph b" x="600" y="28" text-anchor="middle">' + t(L("3 · Recognised", "۳ · تایید")) + "</text>";
    // lines
    svg += '<path class="m-title" d="M60,200 L540,200 L540,92 L660,92"/>';
    svg += '<path class="m-work" d="M60,200 L210,200 C262,200 300,92 360,92 L660,92"/>';
    svg += '<circle class="m-dot" cx="540" cy="92" r="6"/>';
    svg += '<text class="m-note" x="450" y="150" text-anchor="middle">' + t(L("the lag", "فاصله‌ی زمانی")) + '</text>';
    // legend
    svg += '<line class="m-work" x1="70" y1="272" x2="104" y2="272"/><text class="m-lbl" x="110" y="276">' + t(L("the work you operate at", "سطحِ کاری که انجام می‌دهید")) + '</text>';
    svg += '<line class="m-title" x1="350" y1="272" x2="384" y2="272"/><text class="m-lbl" x="390" y="276">' + t(L("your level on paper", "سطح شما روی کاغذ")) + "</text>";
    return svg + "</svg>";
  }
  function modelSection() {
    var phases = [
      { n: 1, name: L("Stretch", "کشش"), text: L("Take on a problem of the next size, with support. Expect to wobble. The point is to find out what the next level actually asks of you.", "مساله‌ای در اندازه‌ی سطح بعد بردارید، با پشتیبانی. انتظار داشته باشید تعادلتان کمی به هم بخورد. هدف این است که بفهمید سطح بعد واقعا چه چیزی از شما می‌خواهد.") },
      { n: 2, name: L("Sustain", "پایداری"), text: L("Do it again, in a different context, across more than one review cycle. One good project can be luck; a pattern is a level. How long “sustained” is varies by employer.", "دوباره انجامش دهید، در بافتی دیگر، و در بیش از یک چرخه‌ی ارزیابی. یک پروژه‌ی خوب ممکن است شانس باشد؛ الگو یعنی سطح. «پایدار» چقدر طول می‌کشد بسته به کارفرما فرق دارد.") },
      { n: 3, name: L("Recognise", "تایید"), text: L("The case is written, argued and decided. The title is a lagging indicator: it records work that has already been happening.", "پرونده نوشته، استدلال و تصمیم‌گیری می‌شود. عنوان یک شاخص عقب‌مانده است: کاری را ثبت می‌کند که از قبل در جریان بوده.") }
    ];
    var h = '<div class="card model-card">' + modelSvg() + '<p class="source">' + icon("info") + "<span>" + md(L("Illustrative shape, not data. Most ladders say the same thing in different words: promotion recognises someone already operating at the next level; it does not bet on potential.", "شکلی توضیحی، نه داده. بیشتر نردبان‌ها همین را با کلمه‌های دیگر می‌گویند: ارتقا کسی را تایید می‌کند که از قبل در سطح بعد عمل می‌کند؛ روی پتانسیل شرط‌بندی نمی‌کند.")) + "</span></p></div>";
    h += '<div class="grid c3 sp">' + phases.map(function (p) { return '<div class="card card-flat"><span class="idea-n">' + S.digits(p.n) + "</span><h3>" + md(p.name) + "</h3><p>" + md(p.text) + "</p></div>"; }).join("") + "</div>";
    h += U.callout("rule", L("Waiting for the title is the slowest strategy", "منتظر ماندن برای عنوان کندترین استراتژی است"), L("If you only start next-level work once you are promoted, you start the clock then. Start the stretch now, with your manager's knowledge, and let the title catch up.", "اگر کار سطح بعد را فقط بعد از ارتقا شروع کنید، ساعت را از همان موقع شروع کرده‌اید. کشش را همین حالا و با اطلاع مدیرتان شروع کنید و بگذارید عنوان خودش برسد."));
    return h;
  }

  /* ---- playbooks ---- */
  function startTransition() {
    var from = S.store.get("growFrom", null) || S.state.me || "L3";
    if (from === "L7") from = "L6";
    if (from === "L2" || S.LEVELS.indexOf(from) < 0) from = from === "L2" ? "L2" : "L3";
    return from;
  }
  function playbookHtml(tr) {
    var to = S.levelById(tr.to), G = S.data.grow;
    var h = '<div class="pb-head"><h3>' + S.lv(tr.from) + ' <span class="hop-arrow">' + icon("arrow", "dir") + "</span> " + S.lv(tr.to) + " &nbsp;" + md(tr.headline) + "</h3></div>";
    h += '<div class="card card-flat pb-time">' + icon("clock") + "<div><strong>" + md(L("Pace", "سرعت")) + "</strong><p>" + md(tr.timeline) + "</p></div></div>";
    h += '<div class="grid c2 sp"><div class="card"><h4 class="h-sm good">' + icon("check") + " " + md(L("Start doing", "شروع کنید")) + '</h4><ul class="tick">' + tr.start.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="card"><h4 class="h-sm bad">' + icon("x") + " " + md(L("Stop doing", "ترک کنید")) + '</h4><ul class="cross">' + tr.stop.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div></div>";
    h += '<h4 class="h-sm sp">' + md(L("Three moves per lens, doable this quarter", "سه حرکت برای هر بُعد، قابل‌انجام در همین فصل")) + '</h4><div class="grid c2">' + LENS4.map(function (l) {
      var lens = S.lensById(l);
      return '<div class="card card-flat lens-card"><div class="lens-h">' + icon(lens.icon) + "<h3>" + md(lens.name) + "</h3></div><ul>" + (tr.moves[l] || []).map(function (m) { return "<li>" + md(m) + "</li>"; }).join("") + "</ul></div>";
    }).join("") + "</div>";
    h += '<div class="grid c2 sp"><div class="card"><h4 class="h-sm">' + icon("flag") + " " + md(L("Evidence a panel could quote", "مدرکی که پنل می‌تواند نقل کند")) + '</h4><p class="hint">' + md(L("Illustrative lines; the numbers are made up.", "جمله‌های نمونه؛ عددها فرضی‌اند.")) + '</p><ul class="quotes">' + tr.evidence.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="card"><h4 class="h-sm">' + icon("chat") + " " + md(L("Questions for your manager or sponsor", "پرسش‌هایی برای مدیر یا حامی‌تان")) + '</h4><ul class="tick">' + tr.ask.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div></div>";
    h += U.callout("warn", L("How people stall on this step", "آدم‌ها در این گام چطور درجا می‌زنند"), "- " + tr.pitfalls.map(function (x) { return S.t(x); }).join("\n- "));
    return h;
  }
  function pitfallsAsL(tr) { return tr; }
  function playbooksSection(G) {
    var from = startTransition();
    var items = G.transitions.map(function (tr) {
      return { id: tr.from, label: L(tr.from + " → " + tr.to, tr.from + " → " + tr.to), html: playbookHtml(tr) };
    });
    return U.tabs("pb", items, from, "tabs-pills");
  }

  /* ---- stall diagnostic ---- */
  function stallSection(G) {
    var picked = S.store.get("stallPicked", []);
    var h = '<p class="muted">' + md(L("Tick the ones that sound like you. The cause and the fix open up under each.", "آن‌هایی که شبیه شماست را تیک بزنید. علت و راه‌حل زیر هر کدام باز می‌شود.")) + '</p><div class="grid c2 stall">';
    G.stall.forEach(function (s) {
      var on = picked.indexOf(s.id) >= 0;
      h += '<div class="card stall-card' + (on ? " on" : "") + '" data-stall="' + s.id + '"><div class="stall-h"><h3>' + md(s.title) + '</h3><button type="button" class="pill' + (on ? " is-on" : "") + '" data-pick="' + s.id + '" aria-pressed="' + on + '">' + (on ? icon("check") : icon("plus")) + md(on ? L("This is me", "این منم") : L("Sounds like me", "شبیه من است")) + "</button></div>" +
        '<ul class="symptoms">' + s.symptoms.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul>" +
        '<div class="stall-more"' + (on ? "" : " hidden") + "><p><strong>" + md(L("Why it happens: ", "چرا اتفاق می‌افتد: ")) + "</strong>" + md(s.cause) + '</p><h4 class="h-sm">' + md(L("What helps", "چه چیزی کمک می‌کند")) + '</h4><ul class="tick">' + s.fix.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div></div>";
    });
    return h + "</div>";
  }

  /* ---- evidence loop ---- */
  function evidenceSection() {
    var steps = [
      { icon: "pen", t: L("Capture weekly", "هفتگی ثبت کنید"), x: L("Two lines after each meaningful thing: what happened, your role, who benefited. Keep a running document; memory fades faster than you expect.", "بعد از هر اتفاق مهم دو خط: چه شد، نقش شما، چه کسی سود برد. یک سند مداوم نگه دارید؛ حافظه سریع‌تر از انتظارتان محو می‌شود.") },
      { icon: "chart", t: L("Quantify monthly", "ماهانه عدد بگذارید"), x: L("Find the number: users, minutes saved, incidents avoided, dollars, people unblocked. Ask the owner of the dashboard; it takes ten minutes.", "عدد را پیدا کنید: کاربر، دقیقه‌ی صرفه‌جویی‌شده، incident اجتناب‌شده، دلار، آدم‌های آزادشده. از صاحب داشبورد بپرسید؛ ده دقیقه طول می‌کشد.") },
      { icon: "users", t: L("Collect advocates each quarter", "هر فصل حامی جمع کنید"), x: L("One sentence from a partner who benefited, with a number if they have it. Short, specific lines beat long praise.", "یک جمله از همکاری که سود برد، با عدد اگر دارد. جمله‌های کوتاه و مشخص از ستایش طولانی بهترند.") },
      { icon: "chat", t: L("Review with your manager each cycle", "هر چرخه با مدیر مرور کنید"), x: L("Map your evidence to the next level's descriptor, lens by lens, and ask where it is thin. Nothing in the packet should surprise either of you.", "مدرک‌هایتان را بُعد به بُعد با شرح سطح بعد تطبیق دهید و بپرسید کجا کم است. هیچ چیز در پرونده نباید هیچ‌کدام از شما را غافلگیر کند.") }
    ];
    var h = '<ol class="loop">' + steps.map(function (s, i) { return "<li><span class=\"pipe-n\">" + S.digits(i + 1) + '</span><div class="pipe-ic">' + icon(s.icon) + "</div><strong>" + md(s.t) + "</strong><p>" + md(s.x) + "</p></li>"; }).join("") + "</ol>";
    h += '<div class="btn-row"><a class="btn" href="#/toolkit/evidence">' + icon("pen") + md(L("Open the evidence log", "باز کردن سند دستاوردها")) + '</a><a class="btn secondary" href="#/toolkit/statement">' + icon("tool") + md(L("Impact statement builder", "سازنده‌ی جمله‌ی اثرگذاری")) + "</a></div>";
    return h;
  }

  /* ---- plan builder ---- */
  function planState() { return S.store.get("plan", null) || { from: null, lens: null, picked: [], who: "", when: "" }; }
  function planSection(G) {
    var st = planState();
    var res = S.assessResult && S.assessResult();
    var from = st.from || (S.state.me && S.state.me !== "L7" ? S.state.me : null) || "L4";
    if (from === "L2") from = "L2";
    var lens = st.lens || (res && res.weakest && res.weakest !== "impact" ? res.weakest : "influence");
    return '<div class="plan"><div class="plan-pick"><label>' + md(L("I am at", "من در سطح")) + '<select id="planFrom" class="sel">' + ["L2", "L3", "L4", "L5", "L6"].map(function (id) { return '<option value="' + id + '"' + (id === from ? " selected" : "") + ">" + id + " · " + esc(U.levelName(id)) + "</option>"; }).join("") +
      '</select></label><label>' + md(L("Focus lens", "بُعدِ تمرکز")) + '<select id="planLens" class="sel">' + LENS4.map(function (l) { return '<option value="' + l + '"' + (l === lens ? " selected" : "") + ">" + esc(S.plain(S.lensById(l).name)) + "</option>"; }).join("") + "</select></label></div>" +
      '<div id="planOut"></div></div>';
  }
  function planOut(root) {
    var G = S.data.grow, st = planState();
    var from = S.$("#planFrom", root).value, lens = S.$("#planLens", root).value;
    var tr = G.transitions.filter(function (t2) { return t2.from === from; })[0];
    if (!tr) { S.$("#planOut", root).innerHTML = ""; return; }
    if (st.from !== from || st.lens !== lens) { st.picked = [0, 1, 2]; }
    st.from = from; st.lens = lens;
    var moves = tr.moves[lens] || [];
    var h = '<h4 class="h-sm">' + md(L("Pick two or three moves for this quarter", "برای این فصل دو یا سه حرکت انتخاب کنید")) + '</h4><ul class="e2e-list">' + moves.map(function (m, i) {
      var on = st.picked.indexOf(i) >= 0;
      return '<li><label class="chk' + (on ? " on" : "") + '"><input type="checkbox" data-pm="' + i + '"' + (on ? " checked" : "") + "><span>" + md(m) + "</span></label></li>";
    }).join("") + "</ul>";
    h += '<div class="grid c2"><div class="field"><label for="planWho">' + md(L("Who will give me feedback along the way", "چه کسی در مسیر به من بازخورد می‌دهد")) + '</label><input type="text" id="planWho" value="' + esc(st.who || "") + '"></div>' +
      '<div class="field"><label for="planWhen">' + md(L("Review date", "تاریخ بازبینی")) + '</label><input type="text" id="planWhen" value="' + esc(st.when || "") + '" placeholder="' + esc(S.plain(L("e.g. end of the quarter", "مثلا پایان فصل"))) + '"></div></div>';
    var lines = [];
    lines.push(S.plain(L("My quarter plan", "برنامه‌ی فصلی من")) + ": " + from + " → " + tr.to + (S.isFa() ? "، " : ", ") + S.plain(L("focus: ", "تمرکز: ")) + S.plain(S.lensById(lens).name));
    lines.push("");
    lines.push(S.plain(L("Moves:", "حرکت‌ها:")));
    st.picked.slice().sort().forEach(function (i, k) { if (moves[i]) lines.push((k + 1) + ". " + S.plain(moves[i])); });
    lines.push("");
    lines.push(S.plain(L("Evidence a panel could quote by then:", "مدرکی که تا آن موقع پنل می‌تواند نقل کند:")));
    (tr.evidence || []).slice(0, 2).forEach(function (e) { lines.push("- " + S.plain(e)); });
    if (st.who) { lines.push(""); lines.push(S.plain(L("Feedback from: ", "بازخورد از: ")) + st.who); }
    if (st.when) lines.push(S.plain(L("Review date: ", "تاریخ بازبینی: ")) + st.when);
    h += '<textarea id="planText" readonly rows="9">' + esc(lines.join("\n")) + '</textarea><div class="btn-row"><button type="button" class="btn sm" data-copy-target="#planText">' + icon("copy") + esc(U.u("copySummary")) + '</button><button type="button" class="btn secondary sm no-print" data-print="1">' + icon("print") + esc(U.u("print")) + "</button></div>";
    S.$("#planOut", root).innerHTML = h;
    S.store.set("plan", st);
  }

  S.views.grow = {
    render: function (root) {
      var G = S.data.grow;
      var h = U.pageHead({
        route: "grow", kicker: L("Locate & grow", "جایگاه و رشد"), icon: "trend",
        title: L("Growing to the next level", "رشد به سطح بعد"),
        lead: L("Promotion is the end of a process that starts earlier than you think. Here is how it works, a playbook for each step, why people stall, and a plan you can start this quarter.",
                "ارتقا پایان فرایندی است که زودتر از آن‌چه فکر می‌کنید شروع می‌شود. اینجا می‌بینید چطور کار می‌کند، برای هر گام یک نقشه‌ی راه، چرا آدم‌ها درجا می‌زنند، و برنامه‌ای که می‌توانید همین فصل شروع کنید."),
        tldr: [
          L("Promotion recognises work you have already been doing at the next level, across more than one cycle.", "ارتقا کاری را تایید می‌کند که از قبل در سطح بعد انجام می‌داده‌اید، در بیش از یک چرخه."),
          L("Each step has its own shape: from L3 to L4 it is completeness, from L4 to L5 it is scoping, from L5 up it is a different role.", "هر گام شکل خودش را دارد: از L3 به L4 «کامل بودن»، از L4 به L5 «scope کردن»، و از L5 به بالا «نقشی متفاوت»."),
          L("Write your evidence down as you go. A case that is easy to quote beats a better one that isn't.", "مدرک‌هایتان را در مسیر بنویسید. پرونده‌ی قابل‌نقل از پرونده‌ی بهترِ غیرقابل‌نقل جلو می‌افتد.")
        ],
        sections: [
          { id: "model", label: L("The model", "مدل") },
          { id: "playbooks", label: L("Playbooks", "نقشه‌های راه") },
          { id: "stall", label: L("Why people stall", "چرا درجا می‌زنند") },
          { id: "evidence", label: L("Evidence", "مدرک") },
          { id: "plan", label: L("This quarter's plan", "برنامه‌ی این فصل") }
        ]
      });
      h += U.section("model", L("Promotion recognises; it doesn't grant", "ارتقا تایید می‌کند؛ نمی‌بخشد"), L("Work level rises first. The title is a lagging record.", "سطح کار اول بالا می‌رود. عنوان یک ثبتِ عقب‌مانده است."), modelSection());
      if (G && G.transitions) {
        h += U.section("playbooks", L("A playbook for every step", "برای هر گام یک نقشه‌ی راه"), L("What to start, what to stop, what to do this quarter in each lens, and what a panel would need to see.", "چه چیزی را شروع کنید، چه چیزی را ترک، این فصل در هر بُعد چه کنید، و پنل چه چیزی باید ببیند."), playbooksSection(G));
        h += U.section("stall", L("Why people stall", "چرا آدم‌ها درجا می‌زنند"), L("Eight patterns, none of them about talent. Find yours.", "هشت الگو، هیچ‌کدام درباره‌ی استعداد نیست. الگوی خودتان را پیدا کنید."), stallSection(G));
        h += U.section("evidence", L("Build evidence others can quote", "مدرکی بسازید که دیگران بتوانند نقل کنند"), L("Four habits that make your case writable.", "چهار عادت که پرونده‌ی شما را «نوشتنی» می‌کند."), evidenceSection());
        h += U.section("plan", L("Plan this quarter", "برنامه‌ی این فصل"), L("Pick a lens, pick two or three moves, name who will give you feedback, and set a review date.", "یک بُعد انتخاب کنید، دو یا سه حرکت برگزینید، کسی را که بازخورد می‌دهد نام ببرید و تاریخ بازبینی بگذارید."), planSection(G));
      } else {
        h += U.callout("warn", null, L("Playbooks are not available in this build.", "نقشه‌های راه در این نسخه موجود نیستند."));
      }
      h += U.nextCard("paths", S.pageLabel("paths"), L("Staff, tech lead or manager? The ladder is wider than management.", "Staff، tech lead یا مدیر؟ نردبان از مدیریت پهن‌تر است."));
      root.innerHTML = h;
      if (!G || !G.transitions) return;
      S.on(root, "click", "[data-pick]", function (e, b) {
        var id = b.getAttribute("data-pick"), picked = S.store.get("stallPicked", []), at = picked.indexOf(id);
        if (at >= 0) picked.splice(at, 1); else picked.push(id);
        S.store.set("stallPicked", picked);
        var on = at < 0, card = b.closest(".stall-card");
        card.classList.toggle("on", on);
        S.$(".stall-more", card).toggleAttribute("hidden", !on);
        b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", String(on));
        b.innerHTML = (on ? icon("check") : icon("plus")) + md(on ? L("This is me", "این منم") : L("Sounds like me", "شبیه من است"));
      });
      var pf = S.$("#planFrom", root), pl = S.$("#planLens", root);
      if (pf && pl) {
        pf.addEventListener("change", function () { planOut(root); });
        pl.addEventListener("change", function () { planOut(root); });
        S.on(root, "change", "[data-pm]", function (e, el) {
          var st = planState(), i = +el.getAttribute("data-pm"), at = st.picked.indexOf(i);
          if (el.checked && at < 0) st.picked.push(i); else if (!el.checked && at >= 0) st.picked.splice(at, 1);
          S.store.set("plan", st); planOut(root);
        });
        S.on(root, "input", "#planWho, #planWhen", function () {
          var st = planState(); st.who = S.$("#planWho", root).value; st.when = S.$("#planWhen", root).value; S.store.set("plan", st);
          var ta = S.$("#planText", root);
          if (ta) { planOut(root); }
        });
        planOut(root);
      }
      S.on(root, "click", "[data-print]", function () { window.print(); });
    },
    onParam: function (root, param) {
      if (param) S.scrollToSection(param);
    },
    search: function () {
      var G = S.data.grow, out = [
        { kind: L("Grow", "رشد"), title: L("Promotion recognises; it doesn't grant", "ارتقا تایید می‌کند؛ نمی‌بخشد"), text: L("Stretch, sustain, recognise: how work level and title relate.", "کشش، پایداری، تایید: رابطه‌ی سطح کار و عنوان."), route: "grow/model" },
        { kind: L("Grow", "رشد"), title: L("Quarter plan builder", "سازنده‌ی برنامه‌ی فصلی"), text: L("Choose a lens, pick moves, name a feedback partner and a review date.", "یک بُعد انتخاب کنید، حرکت‌ها را برگزینید، شریک بازخورد و تاریخ بازبینی بگذارید."), route: "grow/plan" }
      ];
      if (G && G.transitions) G.transitions.forEach(function (tr) {
        out.push({ kind: L("Playbook", "نقشه‌ی راه"), title: L(tr.from + " → " + tr.to + ": " + S.plain(L(tr.headline.en, tr.headline.en)), tr.from + " → " + tr.to + ": " + S.plain(L(tr.headline.fa, tr.headline.fa))), text: tr.timeline, route: "grow/playbooks" });
      });
      if (G && G.stall) G.stall.forEach(function (s) { out.push({ kind: L("Why people stall", "چرا درجا می‌زنند"), title: s.title, text: s.cause, route: "grow/stall" }); });
      return out;
    }
  };
})();

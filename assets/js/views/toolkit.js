/* Toolkit: evidence log, impact statement builder, 1:1 growth kit, promotion packet outline, design doc outline.
   Everything typed here stays in this browser (localStorage). */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc, T = S.data.toolkit;
  var LENS5 = ["contribution", "challenge", "influence", "expertise", "impact"];
  var LENS4 = LENS5.slice(0, 4);
  var K_LOG = "evlog", K_STMT = "stmt", K_OO = "oo";

  /* ---------------- small helpers ---------------- */
  function today() { var d = new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function uid() { return "e" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function lensName(id) { var l = S.lensById(id); return l ? S.plain(l.name) : id; }
  function catName(id) { var c = T.evidence.cats.filter(function (x) { return x.id === id; })[0]; return c ? S.plain(c.name) : id; }
  function P(x) { return S.plain(x); }
  function nextOf(id) { return S.nextLevel(id) || id; }
  function download(name, text) {
    try {
      var blob = new Blob([text], { type: "text/markdown;charset=utf-8" }), a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
    } catch (e) { U.toast(U.u("copyFail")); }
  }
  function field(id, label, input, hint) {
    return '<div class="field"><label for="' + id + '">' + md(label) + "</label>" + input + (hint ? '<span class="hint">' + md(hint) + "</span>" : "") + "</div>";
  }
  function ta(id, rows, ph, val) { return '<textarea id="' + id + '" rows="' + rows + '" placeholder="' + esc(P(ph || "")) + '">' + esc(val || "") + "</textarea>"; }
  function inp(id, ph, val) { return '<input type="text" id="' + id + '" placeholder="' + esc(P(ph || "")) + '" value="' + esc(val || "") + '" autocomplete="off">'; }

  /* ---------------- 1. evidence log ---------------- */
  function logLoad() { var v = S.store.get(K_LOG, []); return Array.isArray(v) ? v : []; }
  function logSave(v) { S.store.set(K_LOG, v); }

  function evidenceSection() {
    var E = T.evidence, me = S.state.me, target = me && me !== "L7" ? nextOf(me) : "L5";
    var lensPills = LENS5.map(function (l) { return '<button type="button" class="pill" data-ev-lens="' + l + '" aria-pressed="false">' + md(S.lensById(l).name) + "</button>"; }).join("");
    var h = '<div class="grid c2 ev-top"><div class="card"><h3>' + icon("pen") + " " + md(L("Add an entry", "یک مورد اضافه کنید")) + "</h3>" +
      field("evWhat", L("What happened", "چه اتفاقی افتاد؟"), ta("evWhat", 3, L("Rewrote the notification retry logic and rolled it out in three stages", "منطق retry اعلان‌ها را بازنویسی کردم و در سه مرحله rollout کردم"))) +
      '<div class="grid c2">' + field("evRole", L("My role", "نقش من"), inp("evRole", L("Owned design and rollout", "طراحی و rollout را own کردم"))) + field("evWho", L("Who benefited", "چه کسانی بهره بردند"), inp("evWho", L("On-call engineers, support", "مهندس‌های on-call، پشتیبانی"))) + "</div>" +
      field("evRes", L("Result, with a number if you have one", "نتیجه، همراه با عدد در صورت امکان"), inp("evRes", L("Missed-alert tickets: 30 to 8 a month", "تیکت‌های مربوط به هشدارهای دریافت‌نشده: از 30 به 8 در ماه"))) +
      '<div class="grid c2">' + field("evDate", L("Date", "تاریخ"), '<input type="text" id="evDate" value="' + today() + '" inputmode="numeric" autocomplete="off" dir="ltr">', L("YYYY-MM-DD", "YYYY-MM-DD")) +
      field("evCat", L("Category", "دسته"), '<select id="evCat">' + E.cats.map(function (c) { return '<option value="' + c.id + '">' + esc(P(c.name)) + "</option>"; }).join("") + "</select>") + "</div>" +
      '<div class="field"><span class="label">' + md(L("Lenses it shows", "بُعدهای مرتبط")) + '</span><div class="pill-row" id="evLens">' + lensPills + "</div></div>" +
      '<button type="button" class="btn" id="evAdd">' + icon("plus") + md(L("Add to my log", "افزودن به سند من")) + "</button></div>" +
      '<div class="card card-flat"><h3>' + icon("bulb") + " " + md(L("Memory joggers", "یادآوری برای ثبت دستاوردها")) + '</h3><ul class="tick">' + E.prompts.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul>" +
      '<h4 class="h-sm sp">' + md(L("How to keep it useful", "چطور سند را مفید نگه دارید")) + '</h4><ul class="tick">' + E.tips.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div></div>";
    h += '<div class="card sp"><div class="ev-cov-h"><h3>' + icon("chart") + " " + md(L("Coverage by lens", "پوشش شواهد در هر بُعد")) + '</h3><label class="ev-target">' + md(L("Building evidence for", "شواهد برای رسیدن به")) +
      ' <select id="evTarget" class="sel">' + ["L3", "L4", "L5", "L6", "L7"].map(function (id) { return '<option value="' + id + '"' + (id === target ? " selected" : "") + ">" + id + " · " + esc(U.levelName(id)) + "</option>"; }).join("") + "</select></label></div><div id=\"evCov\"></div></div>";
    h += '<div class="card sp"><div class="ev-list-h"><h3>' + icon("list") + " " + md(L("Your log", "سند شما")) + ' <span class="tag" id="evCount"></span></h3><div class="btn-row">' +
      '<button type="button" class="btn sm secondary" id="evCopy">' + icon("copy") + md(L("Copy as Markdown", "کپی به‌صورت Markdown")) + "</button>" +
      '<button type="button" class="btn sm secondary" id="evDl">' + icon("print") + md(L("Download .md", "دانلود .md")) + "</button>" +
      '<button type="button" class="btn sm ghost" id="evClear">' + icon("x") + md(L("Clear all", "پاک کردن همه")) + "</button></div></div>" +
      '<div class="pill-row ev-filter" id="evFilter" role="group">' + U.pill(L("All", "همه"), 'data-ev-f="all"', true) + LENS5.map(function (l) { return U.pill(S.lensById(l).name, 'data-ev-f="' + l + '"', false); }).join("") + '</div><ul class="ev-list" id="evList"></ul></div>';
    h += U.source(E.source);
    return h;
  }
  function entryHtml(e) {
    var lens = (e.lens || []).map(function (l) { return '<span class="tag">' + esc(lensName(l)) + "</span>"; }).join("");
    var bits = [];
    if (e.role) bits.push("<strong>" + md(L("Role: ", "نقش: ")) + "</strong>" + esc(e.role));
    if (e.who) bits.push("<strong>" + md(L("Benefited: ", "کسانی که از نتیجه بهره بردند: ")) + "</strong>" + esc(e.who));
    if (e.result) bits.push("<strong>" + md(L("Result: ", "نتیجه: ")) + "</strong>" + esc(e.result));
    return '<li class="ev-entry"><div class="ev-entry-h"><span class="ev-date" dir="ltr">' + esc(S.digits(e.d)) + '</span><span class="tag brand">' + esc(catName(e.cat)) + "</span>" + lens +
      '<button type="button" class="icon-btn ev-del" data-ev-del="' + e.id + '" aria-label="' + esc(P(L("Delete this entry", "حذف این مورد"))) + '">' + icon("x") + "</button></div><p class=\"ev-what\">" + esc(e.what) + "</p>" + (bits.length ? '<p class="ev-bits">' + bits.join(" · ") + "</p>" : "") + "</li>";
  }
  function logToMarkdown(log) {
    var out = ["# " + P(L("Evidence log", "سند دستاوردها")), ""];
    log.slice().sort(function (a, b) { return a.d < b.d ? 1 : -1; }).forEach(function (e) {
      out.push("## " + e.d + " · " + catName(e.cat));
      out.push(e.what);
      if (e.role) out.push("- " + P(L("Role", "نقش")) + ": " + e.role);
      if (e.who) out.push("- " + P(L("Benefited", "کسانی که از نتیجه بهره بردند")) + ": " + e.who);
      if (e.result) out.push("- " + P(L("Result", "نتیجه")) + ": " + e.result);
      if ((e.lens || []).length) out.push("- " + P(L("Lenses", "بُعدها")) + ": " + e.lens.map(lensName).join(", "));
      out.push("");
    });
    return out.join("\n");
  }
  function renderLog(root, filter) {
    var log = logLoad(), list = S.$("#evList", root), cnt = S.$("#evCount", root);
    var shown = log.filter(function (e) { return filter === "all" || (e.lens || []).indexOf(filter) >= 0; }).sort(function (a, b) { return a.d < b.d ? 1 : (a.d > b.d ? -1 : (a.id < b.id ? 1 : -1)); });
    cnt.textContent = S.digits(log.length);
    list.innerHTML = shown.length ? shown.map(entryHtml).join("") : '<li class="ev-empty">' + md(log.length ? L("Nothing under this lens yet.", "هنوز موردی برای این بُعد ثبت نشده است.") : L("Nothing here yet. Add the first entry above: two lines are enough.", "هنوز موردی ثبت نشده است. اولین مورد را در بخش بالا اضافه کنید. دو خط کافی است.")) + "</li>";
  }
  function renderCoverage(root) {
    var log = logLoad(), target = S.$("#evTarget", root).value, lv = S.levelById(target), counts = {}, max = 1, empty = [];
    LENS5.forEach(function (l) { counts[l] = 0; });
    log.forEach(function (e) { (e.lens || []).forEach(function (l) { if (counts[l] != null) counts[l] += 1; }); });
    LENS5.forEach(function (l) { max = Math.max(max, counts[l]); if (!counts[l]) empty.push(l); });
    var h = '<div class="cov">' + LENS5.map(function (l) {
      var ask = lv && lv.lenses && lv.lenses[l] && lv.lenses[l][0];
      return '<div class="cov-row"><div class="cov-l">' + icon(S.lensById(l).icon) + "<strong>" + md(S.lensById(l).name) + "</strong></div>" + U.meter(counts[l], max, counts[l] ? "" : "warn") + '<div class="cov-n">' + S.digits(counts[l]) + "</div>" +
        (ask ? '<p class="cov-ask"><span>' + md(L("What {" + target + "} asks: ", "آنچه {" + target + "} انتظار دارد: ")) + "</span>" + md(ask) + "</p>" : "") + "</div>";
    }).join("") + "</div>";
    if (!log.length) h += '<p class="muted sm">' + md(L("Add a few entries and the lenses with nothing under them will show up here.", "چند مورد ثبت کنید تا بُعدهایی که هنوز برایشان شواهد ندارید، اینجا مشخص شوند.")) + "</p>";
    else if (empty.length) {
      var emptyNames = empty.map(lensName).join(S.isFa() ? "، " : ", ");
      h += U.callout("warn", L("Nothing yet under: " + emptyNames, "هنوز شواهدی برای این بُعدها ثبت نشده: " + emptyNames), L("An empty lens is where to build evidence next. The playbooks list three moves per lens, doable this quarter.", "بُعدی که شواهد ندارد، اولویت بعدی شما برای ثبت عملکرد است. نقشه‌های راه، سه اقدام برای هر بُعد پیشنهاد می‌دهند که همین فصل قابل‌انجام‌اند.")) + '<p><a href="#/grow/playbooks">' + md(L("Open the playbooks", "باز کردن نقشه‌های راه")) + "</a></p>";
    } else h += U.callout("good", null, L("Every lens has at least one entry. Now check each has an example at the target level's scope, not just any example.", "برای هر بُعد دست‌کم یک مورد ثبت شده است. حالا بررسی کنید که برای هر بُعد، نمونه‌ای متناسب با scope سطح هدف داشته باشید."));
    S.$("#evCov", root).innerHTML = h;
  }

  /* ---------------- 2. impact statement builder ---------------- */
  var ROLES = [
    { id: "owned", en: "Owned", fa: function (w) { return w + " را own کردم"; }, enf: function (w) { return "Owned " + w; } },
    { id: "led", en: "Led", fa: function (w) { return w + " را رهبری کردم"; }, enf: function (w) { return "Led " + w; } },
    { id: "designed", en: "Designed", fa: function (w) { return w + " را طراحی کردم"; }, enf: function (w) { return "Designed " + w; } },
    { id: "built", en: "Built", fa: function (w) { return w + " را ساختم"; }, enf: function (w) { return "Built " + w; } },
    { id: "unblocked", en: "Unblocked", fa: function (w) { return "مانع " + w + " را برداشتم"; }, enf: function (w) { return "Unblocked " + w; } },
    { id: "mentored", en: "Mentored", fa: function (w) { return w + " را mentor کردم"; }, enf: function (w) { return "Mentored " + w; } },
    { id: "contributed", en: "Contributed to", fa: function (w) { return "در " + w + " مشارکت کردم"; }, enf: function (w) { return "Contributed to " + w; } }
  ];
  var ROLE_LABELS = { owned: L("Owned", "own کردم"), led: L("Led", "رهبری کردم"), designed: L("Designed", "طراحی کردم"), built: L("Built", "ساختم"), unblocked: L("Unblocked", "مانع را برداشتم"), mentored: L("Mentored", "mentor کردم"), contributed: L("Contributed to", "مشارکت کردم") };
  function stmtLoad() { return S.store.get(K_STMT, {}) || {}; }
  function stmtFields(root) {
    var g = function (id) { var el = S.$("#" + id, root); return el ? el.value.trim() : ""; };
    return { what: g("stWhat"), role: g("stRole"), metric: g("stMetric"), before: g("stBefore"), after: g("stAfter"), period: g("stPeriod"), time: g("stTime"), who: g("stWho") };
  }
  function composeStatement(f) {
    var fa = S.isFa(), role = ROLES.filter(function (r) { return r.id === f.role; })[0], parts = [];
    if (f.what) parts.push(role ? (fa ? role.fa(f.what) : role.enf(f.what)) : f.what);
    if (f.metric) {
      var m;
      if (fa) m = f.before && f.after ? f.metric + " از " + f.before + " به " + f.after + " رسید" : f.after ? f.metric + " به " + f.after + " رسید" : f.before ? f.metric + " حدود " + f.before + " بود" : f.metric;
      else m = f.before && f.after ? f.metric + " went from " + f.before + " to " + f.after : f.after ? f.metric + " reached " + f.after : f.before ? f.metric + " was about " + f.before : f.metric;
      if (f.period) m += " " + f.period;
      parts.push(m);
    }
    if (f.time) parts.push(fa ? f.time + " پایدار ماند" : "Held for " + f.time);
    if (f.who) parts.push(fa ? "ذی‌نفع: " + f.who : "Who benefited: " + f.who);
    return parts.join(". ") + (parts.length ? "." : "");
  }
  function stmtChecks(f) {
    return [
      { ok: /\d/.test(f.before + " " + f.after), t: L("A number", "یک عدد") },
      { ok: !!(f.before && f.after), t: L("Before and after", "قبل و بعد") },
      { ok: f.metric.length >= 3, t: L("What moved (the metric)", "شاخصی که تغییر کرد") },
      { ok: !!f.role, t: L("Your role", "نقش شما") },
      { ok: f.who.length >= 3, t: L("Who benefited", "چه کسانی بهره بردند") },
      { ok: f.time.length >= 2, t: L("How long it held", "نتیجه چه مدت پایدار ماند") }
    ];
  }
  function statementSection() {
    var st = stmtLoad();
    var h = '<div class="grid c2 stmt"><div class="card"><h3>' + icon("tool") + " " + md(L("Build a line a panel could quote", "جمله‌ای بنویسید که کمیته بتواند به آن استناد کند")) + "</h3>" +
      field("stWhat", L("What you did", "چه کردید"), inp("stWhat", L("the notification service rewrite", "بازنویسی سرویس اعلان"), st.what), L("A noun phrase. The role verb is added for you.", "نام کار یا پروژه را بنویسید. فعل متناسب با نقش شما به‌صورت خودکار اضافه می‌شود.")) +
      field("stRole", L("Your role", "نقش شما"), '<select id="stRole"><option value="">' + esc(P(L("Choose…", "انتخاب کنید…"))) + "</option>" + ROLES.map(function (r) { return '<option value="' + r.id + '"' + (st.role === r.id ? " selected" : "") + ">" + esc(P(ROLE_LABELS[r.id])) + "</option>"; }).join("") + "</select>") +
      field("stMetric", L("What moved (the metric)", "شاخصی که تغییر کرد"), inp("stMetric", L("missed-alert tickets", "تیکت‌های مربوط به هشدارهای دریافت‌نشده"), st.metric)) +
      '<div class="grid c2">' + field("stBefore", L("Before", "قبل"), inp("stBefore", L("30", "30"), st.before)) + field("stAfter", L("After", "بعد"), inp("stAfter", L("8", "8"), st.after)) + "</div>" +
      '<div class="grid c2">' + field("stPeriod", L("Unit or period", "واحد یا بازه"), inp("stPeriod", L("a month", "در ماه"), st.period)) + field("stTime", L("How long it held", "نتیجه چه مدت پایدار ماند"), inp("stTime", L("two quarters", "دو فصل"), st.time)) + "</div>" +
      field("stWho", L("Who benefited", "چه کسانی بهره بردند"), inp("stWho", L("on-call engineers and support", "مهندس‌های on-call و پشتیبانی"), st.who)) + "</div>" +
      '<div><div class="card stmt-out"><h4 class="h-sm">' + md(L("Your line", "جمله‌ی شما")) + '</h4><textarea id="stOut" rows="5" readonly></textarea><div class="btn-row"><button type="button" class="btn sm" data-copy-target="#stOut">' + icon("copy") + md(L("Copy", "کپی")) + '</button><button type="button" class="btn sm secondary" id="stSave">' + icon("plus") + md(L("Save to my log", "ذخیره در سند من")) + '</button><button type="button" class="btn sm ghost" id="stReset">' + icon("reset") + md(L("Clear", "پاک کردن")) + "</button></div></div>" +
      '<div class="card sp"><h4 class="h-sm">' + md(L("Quote check", "بررسی قابلیت استناد")) + '</h4><div id="stChecks"></div></div></div></div>';
    h += '<h3 class="sp">' + md(L("From activity to impact: ten rewrites", "از فعالیت به اثرگذاری: ده بازنویسی")) + "</h3>" +
      '<p class="muted">' + md(L("Illustrative lines with made-up numbers. Notice what each rewrite adds: a result, a beneficiary, your role, how long it held.", "جمله‌های نمونه با اعداد فرضی. ببینید هر بازنویسی چه چیزی اضافه می‌کند: نتیجه، کسانی که از نتیجه بهره بردند، نقش شما و مدت پایداری اثر.")) + "</p>" +
      '<div class="ws-list">' + T.weakStrong.map(function (w) {
        return '<div class="ws"><div class="ws-w"><span class="tag">' + md(L("weak", "ضعیف")) + '</span><span class="strike">' + md(w.weak) + '</span></div><div class="ws-s"><span class="tag good">' + md(L("stronger", "قوی‌تر")) + "</span><span>" + md(w.strong) + '</span></div><p class="ws-why">' + icon("info") + "<span>" + md(w.why) + "</span></p></div>";
      }).join("") + "</div>";
    return h;
  }
  function renderStatement(root) {
    var f = stmtFields(root);
    S.store.set(K_STMT, f);
    S.$("#stOut", root).value = composeStatement(f);
    var checks = stmtChecks(f), n = checks.filter(function (c) { return c.ok; }).length;
    var msg = n >= 5 ? L("Quotable. Someone who wasn't there could repeat this.", "قابل‌استناد است. کسی که در کار حضور نداشته هم می‌تواند آن را توضیح دهد.") : n >= 3 ? L("Getting there. Fill the open boxes below and it becomes something a panel can quote.", "نزدیک شده‌اید. بخش‌های خالی زیر را تکمیل کنید تا جمله برای استناد در کمیته آماده شود.") : L("Still an activity rather than an impact. Start with what moved, and by how much.", "جمله هنوز فعالیت شما را توصیف می‌کند، نه اثر آن را. ابتدا مشخص کنید کدام شاخص، چقدر تغییر کرده است.");
    S.$("#stChecks", root).innerHTML = '<ul class="checks">' + checks.map(function (c) { return '<li class="' + (c.ok ? "ok" : "") + '">' + icon(c.ok ? "check" : "dot") + "<span>" + md(c.t) + "</span></li>"; }).join("") + "</ul>" + U.meter(n, 6, n >= 5 ? "" : "warn") + '<p class="muted sm">' + md(msg) + "</p>";
  }

  /* ---------------- 3. 1:1 kit ---------------- */
  function ooLoad() { return S.store.get(K_OO, {}) || {}; }
  function oneOnOneSection() {
    var O = T.oneonone, st = ooLoad(), me = S.state.me, nextLv = me && me !== "L7" ? nextOf(me) : "L5";
    var h = '<div class="grid c2 oo"><div class="card"><h3>' + icon("chat") + " " + md(L("Prepare your agenda", "دستور جلسه‌تان را آماده کنید")) + "</h3>" +
      '<label class="ev-target oo-lv">' + md(L("Next level to compare with", "سطح بعد برای مقایسه‌ی عملکرد")) + ' <select id="ooLevel" class="sel">' + ["L3", "L4", "L5", "L6", "L7"].map(function (id) { return '<option value="' + id + '"' + (id === (st.level || nextLv) ? " selected" : "") + ">" + id + " · " + esc(U.levelName(id)) + "</option>"; }).join("") + "</select></label>" +
      field("ooResult", L("A result you're proud of, and one thing that didn't go to plan", "نتیجه‌ای که به آن افتخار می‌کنید و موردی که طبق برنامه پیش نرفت"), ta("ooResult", 2, L("", ""), st.result)) +
      LENS4.map(function (l) { return field("oo_" + l, L(lensName(l) + ": an example for the next level, or leave blank", lensName(l) + ": نمونه‌ای از عملکرد در سطح بعد بنویسید یا خالی بگذارید"), ta("oo_" + l, 2, L("", ""), st[l])); }).join("") +
      field("ooNeed", L("What I need from you", "آنچه از شما می‌خواهم"), ta("ooNeed", 2, L("", ""), st.need)) +
      field("ooDate", L("A date to look at this again", "تاریخی برای بررسی دوباره"), inp("ooDate", L("e.g. 12 weeks from now", "مثلا 12 هفته‌ی دیگر"), st.date)) + "</div>" +
      '<div><div class="card"><h4 class="h-sm">' + md(L("Your agenda", "دستور جلسه‌ی شما")) + '</h4><textarea id="ooOut" rows="14" readonly></textarea><div class="btn-row"><button type="button" class="btn sm" data-copy-target="#ooOut">' + icon("copy") + md(L("Copy the agenda", "کپی دستور جلسه")) + '</button><button type="button" class="btn sm ghost" id="ooReset">' + icon("reset") + md(L("Clear", "پاک کردن")) + "</button></div></div>" +
      '<div class="card card-flat sp"><h4 class="h-sm">' + md(L("The shape of a good growth 1:1", "ساختار یک گفتگوی موثر درباره‌ی رشد در 1:1")) + '</h4><ol class="oo-steps">' + O.blocks.map(function (b) { return "<li><strong>" + md(b.t) + "</strong><span>" + md(b.x) + "</span></li>"; }).join("") + "</ol></div></div></div>";
    h += '<h3 class="sp">' + md(L("Questions worth asking your manager", "پرسش‌های مفید برای گفتگو با مدیرتان")) + "</h3><div class=\"grid c2\">" + O.questions.map(function (g, i) {
      return '<details class="acc"' + (i === 0 ? " open" : "") + "><summary><span>" + md(g.name) + "</span>" + icon("chev", "chev") + '</summary><div class="acc-body"><ul class="tick">' + g.qs.map(function (q) { return "<li>" + md(q) + "</li>"; }).join("") + "</ul></div></details>";
    }).join("") + "</div>";
    return h;
  }
  function ooFields(root) {
    var g = function (id) { var el = S.$("#" + id, root); return el ? el.value.trim() : ""; };
    var o = { level: g("ooLevel"), result: g("ooResult"), need: g("ooNeed"), date: g("ooDate") };
    LENS4.forEach(function (l) { o[l] = g("oo_" + l); });
    return o;
  }
  function renderOO(root) {
    var o = ooFields(root);
    S.store.set(K_OO, o);
    var O = T.oneonone, blank = P(L("(no example yet)", "(هنوز نمونه‌ای ثبت نشده)")), lines = [];
    lines.push(P(L("1:1 growth conversation", "گفتگوی رشد در 1:1")) + (o.date ? " · " + o.date : ""));
    lines.push("");
    lines.push("1. " + P(O.blocks[0].t) + ": " + (o.result || "…"));
    lines.push("2. " + P(O.blocks[1].t) + " (" + o.level + "):");
    LENS4.forEach(function (l) { lines.push("   - " + lensName(l) + ": " + (o[l] || blank)); });
    lines.push("3. " + P(O.blocks[2].t) + ": " + P(O.blocks[2].x));
    lines.push("4. " + P(O.blocks[3].t) + ": " + (o.need || "…"));
    lines.push("5. " + P(O.blocks[4].t) + ": " + (o.date || "…"));
    S.$("#ooOut", root).value = lines.join("\n");
  }

  /* ---------------- 4. promotion packet ---------------- */
  function packetSection() {
    var Pk = T.packet;
    var h = '<p class="sec-lead">' + md(Pk.intro) + "</p>";
    h += '<div class="pk-list">' + Pk.sections.map(function (s, i) {
      return '<div class="card pk"><div class="pk-n">' + S.digits(i + 1) + '</div><div class="pk-b"><div class="pk-h"><h3>' + md(s.t) + '</h3><span class="tag">' + md(s.len) + "</span></div><p>" + md(s.what) + '</p><p class="pk-avoid">' + icon("alert") + "<span><strong>" + md(L("Avoid: ", "پرهیز کنید: ")) + "</strong>" + md(s.avoid) + "</span></p></div></div>";
    }).join("") + "</div>";
    h += '<div class="btn-row sp"><button type="button" class="btn secondary" id="pkCopy">' + icon("copy") + md(L("Copy the outline as Markdown", "کپی طرح به‌صورت Markdown")) + '</button><button type="button" class="btn secondary" id="pkDl">' + icon("print") + md(L("Download .md", "دانلود .md")) + "</button></div>";
    h += U.callout("tip", L("Write it for a stranger", "برای خواننده‌ای بنویسید که شما را نمی‌شناسد"), L("Readers on a committee don't know you or your project. If a line only makes sense to your team, rewrite it so it makes sense to them, and put the evidence one click away.", "اعضای کمیته شما یا پروژه‌تان را نمی‌شناسند. اگر جمله‌ای فقط برای تیم شما روشن است، آن را طوری بازنویسی کنید که دیگران هم بفهمند. شواهد را با یک لینک در دسترس قرار دهید."));
    h += U.source(Pk.source);
    return h;
  }
  function packetMarkdown() {
    var out = ["# " + P(L("Promotion packet: outline", "پرونده‌ی ارتقا: ساختار پیشنهادی")), ""];
    T.packet.sections.forEach(function (s, i) {
      out.push("## " + (i + 1) + ". " + P(s.t) + " (" + P(s.len) + ")");
      out.push(P(s.what));
      out.push("- " + P(L("Avoid", "پرهیز")) + ": " + P(s.avoid));
      out.push("");
    });
    return out.join("\n");
  }

  /* ---------------- 5. design doc ---------------- */
  function designSection() {
    var D = T.designdoc;
    var h = '<p class="sec-lead">' + md(D.intro) + "</p>";
    h += '<div class="grid c2"><div><ol class="dd-list">' + D.sections.map(function (s) {
      return "<li><strong>" + md(s.t) + "</strong><span>" + md(s.x) + "</span></li>";
    }).join("") + '</ol><div class="btn-row sp"><button type="button" class="btn secondary" id="ddCopy">' + icon("copy") + md(L("Copy the skeleton", "کپی ساختار اولیه")) + '</button><button type="button" class="btn secondary" id="ddDl">' + icon("print") + md(L("Download .md", "دانلود .md")) + "</button></div></div>" +
      '<div class="card card-flat"><h4 class="h-sm">' + md(L("How altitude shows in a design doc", "مقیاس کار در design doc چطور مشخص می‌شود")) + '</h4><ul class="dd-lv">' + D.levels.map(function (l) {
        return '<li>' + S.lv(l.lv) + "<span>" + md(l.x) + "</span></li>";
      }).join("") + "</ul></div></div>";
    h += U.source(D.source);
    return h;
  }
  function designMarkdown() {
    var out = ["# " + P(L("Design doc: title", "design doc: عنوان")), "", "_" + P(L("Author, reviewers, date, status", "نویسنده، reviewerها، تاریخ و وضعیت")) + "_", ""];
    T.designdoc.sections.forEach(function (s) { out.push("## " + P(s.t)); out.push("_" + P(s.x) + "_"); out.push(""); });
    return out.join("\n");
  }

  /* ---------------- the view ---------------- */
  S.views.toolkit = {
    render: function (root) {
      var h = U.pageHead({
        route: "toolkit", kicker: L("Practice", "تمرین"), icon: "tool",
        title: L("Toolkit", "جعبه‌ابزار"),
        lead: L("Small tools for the work between promotions: keep your evidence, write impact so a stranger can quote it, run a better growth conversation, and draft the documents that carry a case.",
                "ابزارهایی برای کار در فاصله‌ی دو ارتقا: ثبت شواهد، توضیح اثرگذاری به شکلی قابل‌استناد، گفتگوی موثرتر درباره‌ی رشد و تهیه‌ی پیش‌نویس سندهای لازم برای پرونده‌ی ارتقا."),
        tldr: [
          L("Everything you type stays in this browser. Nothing is sent anywhere, and there's no account.", "هر چه بنویسید در همین مرورگر می‌ماند. چیزی به جایی فرستاده نمی‌شود و حساب کاربری وجود ندارد."),
          L("Copy or download what you write: an exported Markdown file is yours to keep, edit and share.", "نوشته‌هایتان را کپی یا دانلود کنید. فایل Markdown خروجی را می‌توانید نگه دارید، ویرایش کنید و به اشتراک بگذارید."),
          L("Clearing your browser's site data clears these notes too. Download the log now and then.", "با پاک کردن داده‌های سایت در مرورگر، این یادداشت‌ها هم پاک می‌شوند. هر چند وقت یک بار سند دستاوردها را دانلود کنید.")
        ],
        sections: [
          { id: "evidence", label: L("Evidence log", "سند دستاوردها") },
          { id: "statement", label: L("Impact statements", "جمله‌های اثرگذاری") },
          { id: "oneonone", label: L("1:1 kit", "بسته‌ی 1:1") },
          { id: "packet", label: L("Promotion packet", "پرونده‌ی ارتقا") },
          { id: "designdoc", label: L("Design doc", "design doc") }
        ]
      });
      h += U.section("evidence", L("Evidence log", "سند دستاوردها"), L("Memory fades faster than you expect. Two lines after each meaningful thing, and your case writes itself later.", "جزئیات زودتر از آنچه فکر می‌کنید فراموش می‌شوند. بعد از هر کار مهم، دو خط ثبت کنید تا بعدا آماده کردن پرونده‌ی ارتقا آسان شود."), evidenceSection());
      h += U.section("statement", L("Impact statements", "جمله‌های اثرگذاری"), L("Turn “what I did” into “what changed”. Fill the boxes, watch the quote check, and keep what works.", "«چه کردم» را به «چه چیزی تغییر کرد» تبدیل کنید. بخش‌ها را تکمیل کنید، قابلیت استناد جمله را بررسی کنید و جمله‌های مناسب را نگه دارید."), statementSection());
      h += U.section("oneonone", L("1:1 growth conversation kit", "بسته‌ی گفتگوی رشد در 1:1"), L("A growth conversation goes better with a page in front of both of you. Prepare one in ten minutes.", "گفتگوی رشد با یک صفحه‌ی مشترک برای مرور، بهتر پیش می‌رود. در ده دقیقه آن را آماده کنید."), oneOnOneSection());
      h += U.section("packet", L("Promotion packet outline", "ساختار پرونده‌ی ارتقا"), L("Eight sections, what each should contain, and what to avoid.", "هشت بخش، محتوای لازم برای هر بخش و مواردی که باید از آن‌ها پرهیز کنید."), packetSection());
      h += U.section("designdoc", L("Design doc outline", "ساختار design doc"), L("The skeleton that makes reviewers argue about the design, not about what you meant.", "ساختاری که منظور شما را روشن می‌کند تا reviewerها درباره‌ی خود طراحی بحث کنند."), designSection());
      h += U.nextCard("faq", S.pageLabel("faq"), L("Stuck on a specific situation? Forty-seven answers, searchable.", "درباره‌ی موقعیتی مشخص سوال دارید؟ چهل‌وهفت پاسخ قابل‌جست‌وجو."));
      root.innerHTML = h;

      var filter = "all";
      renderLog(root, filter); renderCoverage(root); renderStatement(root); renderOO(root);

      S.on(root, "click", "[data-ev-lens]", function (e, b) { var on = b.getAttribute("aria-pressed") !== "true"; b.setAttribute("aria-pressed", String(on)); b.classList.toggle("is-on", on); });
      S.on(root, "click", "#evAdd", function () {
        var what = S.$("#evWhat", root).value.trim();
        if (!what) { U.toast(P(L("Write what happened first.", "ابتدا بنویسید چه اتفاقی افتاد."))); S.$("#evWhat", root).focus(); return; }
        var d = S.$("#evDate", root).value.trim();
        if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) d = today();
        var lens = S.$$("[data-ev-lens]", root).filter(function (b) { return b.getAttribute("aria-pressed") === "true"; }).map(function (b) { return b.getAttribute("data-ev-lens"); });
        var log = logLoad();
        log.push({ id: uid(), d: d, cat: S.$("#evCat", root).value, lens: lens, what: what, role: S.$("#evRole", root).value.trim(), who: S.$("#evWho", root).value.trim(), result: S.$("#evRes", root).value.trim() });
        logSave(log);
        ["evWhat", "evRole", "evWho", "evRes"].forEach(function (id) { S.$("#" + id, root).value = ""; });
        renderLog(root, filter); renderCoverage(root);
        U.toast(P(L("Added to your log.", "به سند شما اضافه شد.")));
      });
      S.on(root, "click", "[data-ev-del]", function (e, b) {
        var id = b.getAttribute("data-ev-del");
        logSave(logLoad().filter(function (x) { return x.id !== id; }));
        renderLog(root, filter); renderCoverage(root);
      });
      S.on(root, "click", "[data-ev-f]", function (e, b) {
        filter = b.getAttribute("data-ev-f");
        S.$$("[data-ev-f]", root).forEach(function (x) { var on = x === b; x.setAttribute("aria-pressed", String(on)); x.classList.toggle("is-on", on); });
        renderLog(root, filter);
      });
      S.$("#evTarget", root).addEventListener("change", function () { renderCoverage(root); });
      S.on(root, "click", "#evCopy", function () {
        var log = logLoad();
        if (!log.length) { U.toast(P(L("Nothing to copy yet.", "هنوز چیزی برای کپی نیست."))); return; }
        S.copy(logToMarkdown(log), function (ok) { U.toast(ok ? U.u("copied") : U.u("copyFail")); });
      });
      S.on(root, "click", "#evDl", function () {
        var log = logLoad();
        if (!log.length) { U.toast(P(L("Nothing to download yet.", "هنوز چیزی برای دانلود نیست."))); return; }
        download("evidence-log.md", logToMarkdown(log));
      });
      S.on(root, "click", "#evClear", function () {
        if (!logLoad().length) return;
        if (window.confirm(P(L("Delete every entry in your evidence log? This can't be undone. Download it first if you want a copy.", "همه‌ی موارد سند دستاوردها حذف شوند؟ این کار برگشت‌پذیر نیست. اگر نسخه‌ای می‌خواهید، ابتدا سند را دانلود کنید.")))) { logSave([]); renderLog(root, filter); renderCoverage(root); }
      });
      S.on(root, "input", "#stWhat, #stMetric, #stBefore, #stAfter, #stPeriod, #stTime, #stWho", function () { renderStatement(root); });
      S.on(root, "change", "#stRole", function () { renderStatement(root); });
      S.on(root, "click", "#stReset", function () {
        S.store.del(K_STMT);
        ["stWhat", "stMetric", "stBefore", "stAfter", "stPeriod", "stTime", "stWho"].forEach(function (id) { S.$("#" + id, root).value = ""; });
        S.$("#stRole", root).value = ""; renderStatement(root);
      });
      S.on(root, "click", "#stSave", function () {
        var f = stmtFields(root);
        if (!f.what) { U.toast(P(L("Fill in what you did first.", "اول بنویسید چه کردید."))); return; }
        var role = ROLES.filter(function (r) { return r.id === f.role; })[0];
        var res = f.metric ? (f.before && f.after ? f.metric + ": " + f.before + " → " + f.after : f.metric) + (f.period ? " " + f.period : "") : "";
        var log = logLoad();
        log.push({ id: uid(), d: today(), cat: "project", lens: ["impact"], what: f.what, role: role ? P(ROLE_LABELS[role.id]) : "", who: f.who, result: res });
        logSave(log); renderLog(root, filter); renderCoverage(root);
        U.toast(P(L("Saved to your evidence log.", "در سند دستاوردها ذخیره شد.")));
      });
      S.on(root, "input", "#ooResult, #ooNeed, #ooDate, #oo_contribution, #oo_challenge, #oo_influence, #oo_expertise", function () { renderOO(root); });
      S.on(root, "change", "#ooLevel", function () { renderOO(root); });
      S.on(root, "click", "#ooReset", function () {
        S.store.del(K_OO);
        ["ooResult", "ooNeed", "ooDate", "oo_contribution", "oo_challenge", "oo_influence", "oo_expertise"].forEach(function (id) { S.$("#" + id, root).value = ""; });
        renderOO(root);
      });
      S.on(root, "click", "#pkCopy", function () { S.copy(packetMarkdown(), function (ok) { U.toast(ok ? U.u("copied") : U.u("copyFail")); }); });
      S.on(root, "click", "#pkDl", function () { download("promotion-packet-outline.md", packetMarkdown()); });
      S.on(root, "click", "#ddCopy", function () { S.copy(designMarkdown(), function (ok) { U.toast(ok ? U.u("copied") : U.u("copyFail")); }); });
      S.on(root, "click", "#ddDl", function () { download("design-doc-skeleton.md", designMarkdown()); });
    },
    onParam: function (root, param) { if (param) S.scrollToSection(param); },
    search: function () {
      return [
        { kind: L("Toolkit", "جعبه‌ابزار"), title: L("Evidence log (brag document)", "سند دستاوردها (brag doc)"), text: L("Keep a running record of work and impact, check coverage by lens, export to Markdown.", "کارها و اثرگذاری خود را مرتب ثبت کنید، پوشش شواهد در هر بُعد را ببینید و خروجی Markdown بگیرید."), route: "toolkit/evidence" },
        { kind: L("Toolkit", "جعبه‌ابزار"), title: L("Impact statement builder, weak to strong rewrites", "سازنده‌ی جمله‌ی اثرگذاری، از جمله‌ی ضعیف به قابل‌استناد"), text: L("Turn what you did into what changed: metric, before and after, who benefited.", "«چه کردم» را به «چه چیزی تغییر کرد» تبدیل کنید: شاخص، قبل و بعد و کسانی که بهره بردند."), route: "toolkit/statement" },
        { kind: L("Toolkit", "جعبه‌ابزار"), title: L("1:1 growth conversation kit", "بسته‌ی گفتگوی رشد در 1:1"), text: L("Prepare an agenda against the next level, and questions to ask your manager.", "دستور جلسه‌ای بر اساس انتظارات سطح بعد آماده کنید و پرسش‌هایتان از مدیر را بنویسید."), route: "toolkit/oneonone" },
        { kind: L("Toolkit", "جعبه‌ابزار"), title: L("Promotion packet outline", "ساختار پرونده‌ی ارتقا"), text: L("Eight sections: summary, projects, lenses, impact, sustained, advocate lines, gaps, links.", "هشت بخش: خلاصه، پروژه‌ها، بُعدها، اثرگذاری، تداوم عملکرد، نظر حامیان، شکاف‌ها و لینک‌ها."), route: "toolkit/packet" },
        { kind: L("Toolkit", "جعبه‌ابزار"), title: L("Design doc outline", "ساختار design doc"), text: L("Context, goals and non-goals, design, alternatives, cross-cutting concerns, rollout, open questions.", "زمینه، اهداف و موارد خارج از اهداف پروژه، طراحی، گزینه‌های جایگزین، ملاحظات مشترک، rollout و پرسش‌های باز."), route: "toolkit/designdoc" }
      ];
    }
  };
})();

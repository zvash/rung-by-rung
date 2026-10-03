/* Your path: lanes, tech lead, staff archetypes, depth vs breadth, management trial, fit helper. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc;

  var LANES = [
    { id: "deep", icon: "bulb", name: L("Deep IC", "IC متخصص"), sub: L("a specialist who grows by depth", "متخصصی که با افزایش عمق تخصص رشد می‌کند"),
      by: {
        L4: L("Owns projects end to end and builds one deep skill beyond coding.", "پروژه‌ها را end-to-end own می‌کند و مهارتی عمیق فراتر از کدنویسی به دست می‌آورد."),
        L5: L("A trusted authority in an area (or a wide generalist); sets direction for 2–3 engineers by example.", "مرجع قابل‌اعتماد یک حوزه یا generalist با دانش گسترده است و با عملکرد خود به 2 تا 3 مهندس جهت می‌دهد."),
        L6: L("The go-to person for a domain, broad across systems; steers teams to the right decisions.", "مرجع یک حوزه با شناخت گسترده از سیستم‌هاست و تیم‌ها را به تصمیم‌های درست می‌رساند."),
        L7: L("The de facto authority on a major system; shapes technical direction beyond their own teams.", "مرجع عملی یک سیستم عمده است و بر جهت فنی تیم‌های دیگر هم اثر می‌گذارد.")
      } },
    { id: "lead", icon: "route", name: L("Tech lead", "tech lead"), sub: L("a role on top of your level, per project", "نقش پروژه‌محور، مستقل از سطح شما"),
      by: {
        L4: L("Drives delivery of a project for a few people while owning their own work end to end.", "delivery یک پروژه را برای چند نفر پیش می‌برد، در حالی که کار خودش را هم end-to-end own می‌کند."),
        L5: L("Technical direction for a group's big problems; the person stakeholders come to.", "تعیین جهت فنی برای مساله‌های بزرگ یک گروه و نقطه‌ی تماس ذی‌نفعان."),
        L6: L("Technical lead for large teams or several projects: strategy and delivery together.", "tech lead تیم‌های بزرگ یا چند پروژه: هم استراتژی هم اجرا."),
        L7: L("Leads several L6-scope efforts to success.", "چند پروژه با scope سطح L6 را به موفقیت می‌رساند.")
      } },
    { id: "mgr", icon: "users", name: L("People manager", "مدیر افراد"), sub: L("a different job, with its own ladder", "شغلی متفاوت، با نردبان خودش"),
      by: {
        L4: L("First line: accountable for a team's delivery and its people's growth.", "مدیریت مستقیم: مسئول delivery یک تیم و رشد اعضای آن."),
        L5: L("A larger team or a whole area: sets direction and builds the team.", "تیم یا حوزه‌ی بزرگ‌تر: تعیین جهت و تشکیل تیم."),
        L6: L("Several teams: strategy, organisation design, managers of managers.", "چند تیم: استراتژی، طراحی سازمان و مدیریت مدیران."),
        L7: L("A large organisation: accountable for a strategic area through people.", "یک سازمان بزرگ: پاسخگوی حوزه‌ای استراتژیک با هدایت افراد.")
      } }
  ];

  var ARCH = [
    { id: "tl", icon: "route", name: L("Tech lead", "Tech lead"), when: L("any size", "در شرکت‌هایی با هر اندازه"),
      does: L("Guides the approach and execution of a team or project: sets technical direction, keeps people unblocked, stays close to the code.", "رویکرد و اجرای یک تیم یا پروژه را هدایت می‌کند، جهت فنی می‌دهد، موانع کار اعضا را رفع می‌کند و از کد فاصله نمی‌گیرد."),
      risk: L("Drifts into project management and becomes the team's bottleneck.", "به‌تدریج درگیر مدیریت پروژه می‌شود و به گلوگاه تیم تبدیل می‌شود."),
      fit: L("You like leading through the problem and are energised by other people's progress.", "دوست دارید با هدایت کار روی مساله‌ی فنی، دیگران را رهبری کنید و پیشرفت دیگران به شما انرژی می‌دهد.") },
    { id: "arch", icon: "layers", name: L("Architect", "Architect"), when: L("often from ~100+ engineers", "معمولا در شرکت‌هایی با 100 مهندس یا بیشتر"),
      does: L("Owns the direction and quality of a critical area: designs, reviews and sets patterns across teams.", "جهت و کیفیت یک حوزه‌ی حیاتی را own می‌کند: طراحی، review و تعیین الگو میان تیم‌ها."),
      risk: L("Gets far from the code and designs things nobody wants to build.", "از کد فاصله می‌گیرد و راه‌حل‌هایی طراحی می‌کند که کسی نمی‌خواهد پیاده‌سازی کند."),
      fit: L("You enjoy systems thinking, trade-offs and writing things down.", "از تفکر سیستمی، بررسی trade-off و نوشتن لذت می‌برید.") },
    { id: "solver", icon: "target", name: L("Solver", "Solver"), when: L("any size", "در شرکت‌هایی با هر اندازه"),
      does: L("Dives into a hard, high-stakes problem, gets it solved, then moves to the next one.", "روی مساله‌ای دشوار و پرریسک تمرکز می‌کند، آن را حل می‌کند و سراغ مساله‌ی بعدی می‌رود."),
      risk: L("Knowledge stays in one head and the impact doesn't scale.", "دانش نزد یک نفر می‌ماند و دامنه‌ی اثر او قابل گسترش نیست."),
      fit: L("You love depth, debugging and ambiguity more than coordination.", "عمق فنی، debug و ابهام را بیشتر از هماهنگی دوست دارید.") },
    { id: "rh", icon: "handshake", name: L("Right hand", "Right hand"), when: L("mostly at ~1,000+ engineers", "معمولا در شرکت‌هایی با 1,000 مهندس یا بیشتر"),
      does: L("Extends a senior leader's reach: takes on part of their operating load and is trusted with ambiguous, org-wide problems.", "دامنه‌ی اثر یک رهبر ارشد را گسترش می‌دهد. بخشی از مسئولیت‌های اجرایی او را می‌پذیرد و مساله‌های مبهم در مقیاس سازمان به او سپرده می‌شود."),
      risk: L("Depends on one leader's priorities and politics.", "به اولویت‌ها و سیاست‌های یک رهبر وابسته است."),
      fit: L("You like organisational problems and are comfortable switching context.", "مساله‌های سازمانی را دوست دارید و با تغییر context راحتید.") }
  ];
  var ARCH_NOTE = L("The four shapes come from Will Larson's research on staff-plus roles (StaffEng); Tanya Reilly adds three pillars of the work: big-picture thinking, executing cross-team projects, and levelling up other engineers. Which shape exists depends on company size, and people move between them.",
                    "این چهار الگو از پژوهش Will Larson درباره‌ی نقش‌های staff و بالاتر (StaffEng) گرفته شده‌اند. Tanya Reilly سه محور کار را هم معرفی می‌کند: دیدن تصویر کلی، اجرای پروژه‌های بین‌تیمی و کمک به رشد مهندس‌های دیگر. وجود هر الگو به اندازه‌ی شرکت بستگی دارد و افراد ممکن است میان آن‌ها جابه‌جا شوند.");

  var TRIALS = [
    { icon: "route", t: L("Lead a project with three or more people", "یک پروژه با سه نفر یا بیشتر را رهبری کنید"), x: L("Plan it, split it, unblock people, report status. Notice whether the coordination drains you or energises you.", "برنامه‌ریزی، تقسیم کار، رفع موانع و گزارش وضعیت را تجربه کنید. ببینید هماهنگی به شما انرژی می‌دهد یا از شما انرژی می‌گیرد.") },
    { icon: "users", t: L("Mentor someone for a full quarter", "یک فصل کامل فردی را mentor کنید"), x: L("Set goals together, give feedback, watch them grow. Is that the part you enjoy?", "هدف مشترک تعیین کنید، بازخورد بدهید و رشد او را دنبال کنید. آیا از این بخش کار لذت می‌برید؟") },
    { icon: "calendar", t: L("Run a team ritual for a month", "یک ماه جلسات تیمی را اداره کنید"), x: L("Planning, retro or incident review. You will feel the weight of keeping a group of people on the same page.", "مثل planning، retro یا بررسی incident. مسئولیت همسو نگه داشتن اعضای تیم را تجربه می‌کنید.") },
    { icon: "door", t: L("Take a hiring process end to end", "یک فرایند استخدام را از ابتدا تا انتها انجام دهید"), x: L("Write the role, interview, debrief, make the call. Hiring is a core management duty.", "نقش را تعریف کنید، مصاحبه کنید، debrief برگزار کنید و تصمیم بگیرید. استخدام از مسئولیت‌های اصلی مدیریت است.") },
    { icon: "eye", t: L("Shadow your manager for a week", "یک هفته کار مدیرتان را از نزدیک مشاهده کنید"), x: L("Ask them to walk you through their calendar and the parts they find hard. Believe what they say.", "از او بخواهید تقویم و بخش‌های دشوار کارش را توضیح دهد. توضیحاتش را جدی بگیرید.") }
  ];

  var FIT = [
    { id: "f1", w: [2, 1, 0], t: L("A whole day on one hard technical problem makes me happy.", "یک روز کامل کار روی مساله‌ای دشوار و فنی برایم رضایت‌بخش است.") },
    { id: "f2", w: [0, 2, 2], t: L("I enjoy helping teammates get unstuck, even if it costs me focus time.", "از کمک به هم‌تیمی‌ها برای رفع موانع لذت می‌برم، حتی اگر از زمان تمرکزم کم کند.") },
    { id: "f3", w: [0, 1, 2], t: L("I am comfortable giving direct feedback, including hard feedback.", "دادن بازخورد مستقیم، از جمله بازخورد سخت، برایم راحت است.") },
    { id: "f4", w: [0, 1, 2], t: L("I like deciding who works on what and in what order.", "دوست دارم درباره‌ی تقسیم کار میان افراد و ترتیب انجام آن تصمیم بگیرم.") },
    { id: "f5", w: [2, 1, 0], t: L("I would rather write the design than run the meeting about it.", "ترجیح می‌دهم خودِ طراحی را بنویسم تا جلسه‌ی مربوط به آن را اداره کنم.") },
    { id: "f6", w: [0, 1, 2], t: L("Seeing other people grow satisfies me more than my own shipped work.", "دیدن رشد دیگران بیشتر از نتیجه‌ی کار خودم به من رضایت می‌دهد.") },
    { id: "f7", w: [0, 2, 1], t: L("I like explaining technical trade-offs to non-technical people.", "از توضیح trade-offهای فنی برای افراد غیرفنی لذت می‌برم.") },
    { id: "f8", w: [0, 1, 2], t: L("Cross-team coordination and untangling organisational problems energise me.", "هماهنگی بین‌تیمی و حل موانع سازمانی به من انرژی می‌دهد.") },
    { id: "f9", w: [2, 1, -1], t: L("I want to stay close to the code and the system's details.", "می‌خواهم به کد و جزئیات سیستم نزدیک بمانم.") },
    { id: "f10", w: [0, 1, 2], t: L("I enjoy interviewing and shaping how a team hires.", "از مصاحبه کردن و شکل‌دادن به شیوه‌ی استخدام یک تیم لذت می‌برم.") }
  ];
  var FIT_SCALE = [{ v: 0, t: L("No", "نه") }, { v: 0.5, t: L("Sometimes", "گاهی") }, { v: 1, t: L("Yes", "بله") }];

  function lanesSection() {
    var head = ["<span class=\"sr-only\">" + esc(S.plain(L("Level", "سطح"))) + "</span>"].concat(LANES.map(function (l) {
      return '<span class="lane-h">' + icon(l.icon) + "<strong>" + md(l.name) + "</strong><em>" + md(l.sub) + "</em></span>";
    }));
    var rows = ["L4", "L5", "L6", "L7"].map(function (id) {
      return [S.lv(id) + " " + md(S.levelById(id).name)].concat(LANES.map(function (l) { return md(l.by[id]); }));
    });
    var h = U.table(head, rows, { cls: "lanes", rowAttrs: function (r, i) { return S.state.me === ["L4", "L5", "L6", "L7"][i] ? 'class="is-me"' : ""; } });
    h += '<div class="grid c3 sp">' +
      '<div class="card card-flat">' + icon("scale") + "<p>" + md(L("**Levels are shared.** An IC at L6 and a manager at L6 are peers. An IC can be at a higher level than another manager, even though people usually report to someone at their own level or above.", "**سطح‌ها مشترک‌اند.** یک IC در L6 و یک مدیر در L6 هم‌ترازند. سطح یک IC می‌تواند از سطح مدیر دیگری بالاتر باشد، هرچند افراد معمولا به کسی در سطح خود یا بالاتر report می‌کنند.")) + "</p></div>" +
      '<div class="card card-flat">' + icon("swap") + "<p>" + md(L("**Switching lanes is lateral, not a promotion.** You start management as a new manager, and technical skills fade if you stop practising. Many people swing back and forth over a career (Charity Majors calls it the pendulum).", "**تغییر مسیر، جابه‌جایی هم‌سطح است و ارتقا محسوب نمی‌شود.** در مدیریت تازه‌کار خواهید بود و اگر تمرین نکنید، مهارت فنی‌تان افت می‌کند. بسیاری از افراد در مسیر شغلی خود میان این دو نقش جابه‌جا می‌شوند (Charity Majors آن را «پاندول» نامیده است).")) + "</p></div>" +
      '<div class="card card-flat">' + icon("flag") + "<p>" + md(L("**Titles like team lead or tribe lead are roles, not levels.** They name the scope of someone's leadership; two people with the same role can be at different levels.", "**عنوان‌هایی مثل team lead یا tribe lead، نقش‌اند و سطح نیستند.** این عنوان‌ها دامنه‌ی رهبری فرد را مشخص می‌کنند. دو نفر با یک نقش می‌توانند در سطح‌های متفاوت باشند.")) + "</p></div></div>";
    return h;
  }

  function leadSection() {
    var h = '<div class="grid c2"><div class="card"><h3>' + icon("route") + " " + md(L("What a tech lead is", "tech lead چیست")) + "</h3><p>" +
      md(L("An informal, per-project role. A tech lead has one or more big problems in hand and sets technical direction for several other people, which extends their impact, while someone else manages those people. It is not a rung on the ladder and not a title.", "نقشی غیررسمی و پروژه‌محور است. tech lead مسئولیت یک یا چند مساله‌ی بزرگ را دارد و برای چند نفر جهت فنی تعیین می‌کند تا دامنه‌ی اثرش را گسترش دهد. مدیریت افراد بر عهده‌ی شخص دیگری است. این نقش، پله‌ی نردبان یا عنوان شغلی نیست.")) + "</p></div>" +
      '<div class="card"><h3>' + icon("check") + " " + md(L("What the job usually contains", "کار معمولا شامل چیست")) + '</h3><ul class="tick">' +
      [L("Keep coding, but also represent the team to management", "همچنان کد می‌نویسد و نماینده‌ی تیم نزد مدیریت هم هست"), L("Vet plans and run the project's mechanics", "برنامه‌ها را بررسی می‌کند و روند اجرای پروژه را پیش می‌برد"), L("Delegate on purpose, as a way to grow others", "برای رشد دیگران، آگاهانه بخشی از کار را واگذار می‌کند"), L("Say no and re-scope when priorities change", "با تغییر اولویت‌ها، «نه» می‌گوید و scope را بازبینی می‌کند")].map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div></div>";
    h += '<div class="grid c2 sp"><div class="card card-flat"><h3>' + icon("target") + " " + md(L("How it counts toward your level", "این نقش چطور به رشد سطح شما کمک می‌کند")) + "</h3><p>" +
      md(L("Leading a project is a way to produce evidence for contribution and influence. But being “the lead” is not evidence by itself: the outcomes are. Teams that went faster, a project that launched, decisions that held up.", "رهبری پروژه می‌تواند شواهدی برای مشارکت و قدرت نفوذ فراهم کند. اما «لید بودن» به‌تنهایی کافی نیست. نتیجه مهم است: افزایش سرعت تیم، launch موفق پروژه و تصمیم‌هایی که در عمل موثر مانده‌اند.")) + "</p></div>" +
      '<div class="card card-flat"><h3>' + icon("trend") + " " + md(L("How to get the chance", "چطور این فرصت را به دست آورید")) + '</h3><ol class="steps-list">' +
      [L("Write the design doc for the next big piece of work and ask to lead it.", "design doc کار بزرگ بعدی را بنویسید و درخواست کنید رهبری آن را بر عهده بگیرید."), L("Run the mechanics for one milestone: plan, risks, status.", "اجرای یک milestone را مدیریت کنید: برنامه، ریسک‌ها و گزارش وضعیت."), L("Hand a real piece to someone else and make them successful.", "مسئولیت بخشی واقعی از کار را به فرد دیگری بسپارید و به موفقیت او کمک کنید.")].map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ol></div></div>";
    return h;
  }

  function archetypesSection() {
    var h = '<div class="grid c2 arch">' + ARCH.map(function (a) {
      return '<div class="card arch-card"><div class="arch-h">' + icon(a.icon) + "<h3>" + md(a.name) + '</h3><span class="tag">' + md(a.when) + "</span></div><p>" + md(a.does) + "</p>" +
        '<p class="arch-row"><strong>' + md(L("Watch out: ", "مراقب باشید: ")) + "</strong>" + md(a.risk) + "</p><p class=\"arch-row\"><strong>" + md(L("Fits you if: ", "با شما تناسب دارد اگر: ")) + "</strong>" + md(a.fit) + "</p></div>";
    }).join("") + "</div>";
    return h + U.source(ARCH_NOTE) + U.callout("note", L("Staff is not portable", "Staff در همه‌ی شرکت‌ها یک معنا ندارد"), L("One ladder's “Staff” is a single team's domain, another's spans several teams, another's a whole domain. When you compare, compare scope: how many teams, what ambiguity, what horizon.", "«Staff» در یک نردبان به حوزه‌ی یک تیم اشاره دارد، در دیگری به چند تیم و در سومی به یک حوزه‌ی کامل. هنگام مقایسه، scope را بسنجید: تعداد تیم‌ها، میزان ابهام و افق زمانی."));
  }

  function tShape(deep, wide, label) {
    // simple T glyph: bar width = breadth, stem height = depth
    var barW = 30 + wide * 34, stemH = 22 + deep * 22, cx = 60, top = 18;
    return '<svg viewBox="0 0 120 120" class="tshape" aria-hidden="true"><rect class="t-bar" x="' + (cx - barW / 2) + '" y="' + top + '" width="' + barW + '" height="14" rx="5"/><rect class="t-stem" x="' + (cx - 7) + '" y="' + (top + 10) + '" width="14" height="' + stemH + '" rx="5"/></svg>';
  }
  function depthSection() {
    var items = [
      { lv: "L4", d: 1, w: 1, t: L("One skill beyond coding", "یک مهارت فراتر از کدنویسی"), x: L("A small, real specialty on top of strong system command.", "تخصصی محدود اما واقعی، در کنار تسلط قوی بر سیستم.") },
      { lv: "L5", d: 3, w: 1, t: L("Depth: the trusted authority", "عمق: مرجع قابل‌اعتماد"), x: L("People come to you first for one area, and they are right to.", "برای پرسش‌های یک حوزه، دیگران ابتدا سراغ شما می‌آیند و به تخصصتان اعتماد دارند.") },
      { lv: "L5", d: 1, w: 3, t: L("Breadth: the wide generalist", "گستردگی: generalist با دانش متنوع"), x: L("Several kinds of work beyond coding; you connect the dots between areas.", "چند مهارت فراتر از کدنویسی دارید و ارتباط میان حوزه‌ها را می‌شناسید.") },
      { lv: "L6", d: 3, w: 3, t: L("Both: go-to and wide", "هر دو: تخصص عمیق و دانش گسترده"), x: L("Go-to for your specialty, with command of the whole product area's architecture.", "مرجع تخصص خودتان، با تسلط بر معماری کل حوزه‌ی محصولی.") }
    ];
    var h = '<div class="grid c4 tshapes">' + items.map(function (it) {
      return '<div class="card card-flat tcard">' + tShape(it.d, it.w) + S.lv(it.lv) + "<strong>" + md(it.t) + "</strong><p>" + md(it.x) + "</p></div>";
    }).join("") + "</div>";
    h += '<div class="grid c2 sp"><div class="card"><h3>' + icon("compass") + " " + md(L("How to choose", "چطور انتخاب کنید")) + '</h3><ul class="tick">' +
      [L("Notice which problems you volunteer for when nobody is asking.", "ببینید بدون درخواست دیگران، برای حل چه مساله‌هایی داوطلب می‌شوید."), L("Ask what your team and company will still need in three years.", "بپرسید تیم و شرکتتان سه سال دیگر هنوز به چه چیزی نیاز دارد."), L("Pick the shape you can build visible evidence for, not the one that sounds grander.", "الگویی را انتخاب کنید که بتوانید توانمندی خود را در آن نشان دهید، نه صرفا الگویی که چشمگیرتر به نظر می‌رسد.")].map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="card"><h3>' + icon("alert") + " " + md(L("The traps", "دام‌ها")) + '</h3><ul class="cross">' +
      [L("Depth with no inner PM: the right answer to the wrong question.", "تخصص عمیق بدون «PM درون»: راه‌حل درست برای مساله‌ی اشتباه."), L("Breadth with no depth anywhere: nobody trusts you with the hard problem.", "دانش گسترده بدون تخصص عمیق در هیچ حوزه‌ای: دیگران به شما برای حل مساله‌ی دشوار اعتماد نمی‌کنند.")].map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div></div>";
    return h;
  }

  function managementSection() {
    var h = '<div class="grid c3 trials">' + TRIALS.map(function (t, i) {
      return '<div class="card trial"><div class="trial-n">' + S.digits(i + 1) + '</div><div class="pipe-ic">' + icon(t.icon) + "</div><strong>" + md(t.t) + "</strong><p>" + md(t.x) + "</p></div>";
    }).join("") + "</div>";
    h += U.callout("tip", L("Treat it as a reversible experiment", "آن را یک آزمایشِ برگشت‌پذیر بدانید"), L("Management is a lateral move. If you try it and it is not for you, going back is normal, ideally before your technical skills get stale. Talk to people who made the move in both directions.", "ورود به مدیریت یک جابه‌جایی هم‌سطح است. اگر آن را امتحان کردید و مناسب شما نبود، بازگشت عادی است. بهتر است پیش از افت مهارت فنی برگردید. با کسانی صحبت کنید که هر دو مسیر را تجربه کرده‌اند."));
    return h;
  }

  function fitSection() {
    var st = S.store.get("fit", {});
    var h = '<p class="muted">' + md(L("Ten quick statements. Answer for how you actually feel in a normal month, not how you think you should.", "ده جمله‌ی کوتاه. بر اساس یک ماه معمولی پاسخ دهید، نه بر اساس تصویری که فکر می‌کنید باید از خود داشته باشید.")) + '</p><div id="fitRows">' + FIT.map(function (f) {
      return '<div class="hrow"><p>' + md(f.t) + '</p><div class="seg" role="radiogroup" data-fit="' + f.id + '">' + FIT_SCALE.map(function (sc) {
        return '<button type="button" role="radio" data-val="' + sc.v + '" aria-checked="' + (st[f.id] === sc.v) + '">' + md(sc.t) + "</button>";
      }).join("") + "</div></div>";
    }).join("") + '</div><div id="fitOut" class="fit-out"></div>';
    return h;
  }
  function fitResult(st) {
    var answered = Object.keys(st).length;
    if (answered < 5) return '<p class="muted">' + md(L("Answer at least five to see a lean.", "برای دیدن گرایش، دست‌کم پنج مورد را پاسخ دهید.")) + "</p>";
    var sums = [0, 0, 0], max = [0, 0, 0];
    FIT.forEach(function (f) {
      if (st[f.id] == null) return;
      for (var i = 0; i < 3; i++) { sums[i] += f.w[i] * st[f.id]; max[i] += Math.max(f.w[i], 0); }
    });
    var names = [LANES[0].name, LANES[1].name, LANES[2].name], icons = ["bulb", "route", "users"];
    var pcts = sums.map(function (s, i) { return max[i] ? Math.max(0, s) / max[i] : 0; });
    var top = pcts.indexOf(Math.max.apply(null, pcts));
    var h = '<div class="card"><h3 class="h-sm">' + md(L("Where your energy leans", "کدام نوع کار به شما انرژی می‌دهد")) + "</h3>" + U.bars(names.map(function (n, i) {
      return { label: icon(icons[i]) + " " + md(n), value: pcts[i], max: 1, text: S.digits(Math.round(pcts[i] * 100)) + (S.isFa() ? "٪" : "%"), cls: i === top ? "top" : "" };
    })) + "</div>";
    h += U.callout("note", L("A lean, not a verdict", "یک گرایش است، نه حکم"), L("This reflects how you answered today. Test it with the experiments above, and check it again in a year. Many people find the answer changes with their stage of life and their team.", "این نتیجه بر اساس پاسخ‌های امروز شماست. آن را با تجربه‌های پیشنهادی بالا بسنجید و یک سال دیگر دوباره بررسی کنید. پاسخ بسیاری از افراد با تغییر مرحله‌ی زندگی یا تیم عوض می‌شود."));
    return h;
  }

  S.views.paths = {
    render: function (root) {
      var h = U.pageHead({
        route: "paths", kicker: L("Locate & grow", "جایگاه و رشد"), icon: "route",
        title: L("Your path: IC, tech lead or manager", "مسیر شما: IC، tech lead یا مدیر"),
        lead: L("You can grow all the way up the ladder without managing anyone. Here is what the choices really are, and how to test what fits you before you commit.",
                "بدون مدیریت افراد هم می‌توانید تا بالاترین پله‌ی نردبان رشد کنید. اینجا مسیرهای مختلف را می‌شناسید و پیش از انتخاب، تناسب هرکدام با خودتان را بررسی می‌کنید."),
        tldr: [
          L("An individual contributor can reach the top of the ladder. Management is a different job, not a promotion.", "یک IC می‌تواند به بالاترین سطح نردبان برسد. مدیریت شغلی متفاوت است و ورود به آن ارتقا محسوب نمی‌شود."),
          L("“Tech lead” is a per-project role for someone who sets technical direction for others. It is not a level.", "«tech lead» نقشی پروژه‌محور است برای کسی که برای دیگران جهت فنی تعیین می‌کند. سطح نیست."),
          L("From L5 up there are several shapes of senior work. Choose by what energises you, then build evidence for that shape.", "از L5 به بالا، کار در سطح ارشد شکل‌های مختلفی دارد. بر اساس کاری که به شما انرژی می‌دهد انتخاب کنید و برای همان الگو شواهد عملکرد فراهم کنید.")
        ],
        sections: [
          { id: "ladder", label: L("Three lanes", "سه مسیر") },
          { id: "lead", label: L("Tech lead", "tech lead") },
          { id: "archetypes", label: L("Staff shapes", "الگوهای نقش staff") },
          { id: "depth", label: L("Depth or breadth", "عمق یا گستردگی") },
          { id: "management", label: L("Try management", "مدیریت را امتحان کنید") },
          { id: "fit", label: L("What fits me?", "کدام مسیر با من تناسب دارد؟") }
        ]
      });
      h += U.section("ladder", L("The ladder is wider than management", "مسیر رشد به مدیریت محدود نیست"), L("From L4 up, three lanes run side by side. They share levels, and each has its own shape.", "از L4 به بالا، سه مسیر کنار هم پیش می‌روند. سطح‌ها مشترک‌اند، اما شکل کار در هر مسیر متفاوت است."), lanesSection());
      h += U.section("lead", L("Tech lead: a role, not a level", "tech lead: یک نقش، نه یک سطح"), L("The most common first taste of leadership, and the most misunderstood.", "معمولا اولین تجربه‌ی رهبری است و برداشت‌های نادرست زیادی درباره‌ی آن وجود دارد."), leadSection());
      h += U.section("archetypes", L("Four shapes of senior-plus work", "چهار الگوی کار در سطح staff و بالاتر"), L("What “staff” can mean in practice. Which exist depends on the size of the company.", "«staff» در عمل می‌تواند چه معنایی داشته باشد. این‌که کدام وجود دارد به اندازه‌ی شرکت بستگی دارد."), archetypesSection());
      h += U.section("depth", L("Depth, breadth or both", "عمق، گستردگی یا هر دو"), L("The ladder asks for one beyond-coding skill at L4, depth or breadth at L5, and both at L6.", "نردبان در L4 مهارتی فراتر از کدنویسی می‌خواهد، در L5 تخصص عمیق یا دانش گسترده و در L6 هر دو را."), depthSection());
      h += U.section("management", L("Should you try management?", "آیا باید مدیریت را امتحان کنید؟"), L("Run small experiments first. Five that cost little and teach a lot.", "با تجربه‌های کوچک شروع کنید. پنج پیشنهاد کم‌هزینه که شناخت زیادی به شما می‌دهند."), managementSection());
      h += U.section("fit", L("What fits me?", "کدام مسیر با من تناسب دارد؟"), L("A ten-statement check on where your energy tends to go.", "ده جمله برای بررسی این‌که معمولا از کدام بخش کار انرژی می‌گیرید."), fitSection());
      h += U.nextCard("hire", S.pageLabel("hire"), L("Changing companies? How level is set, and how not to lose one.", "قصد تغییر شرکت دارید؟ ببینید سطح چطور تعیین می‌شود و چطور آن را حفظ کنید."));
      root.innerHTML = h;
      var st = S.store.get("fit", {});
      var out = S.$("#fitOut", root);
      out.innerHTML = fitResult(st);
      root.addEventListener("click", function (e) {
        var b = e.target.closest(".seg[data-fit] button");
        if (!b) return;
        st[b.parentNode.getAttribute("data-fit")] = +b.getAttribute("data-val");
        S.store.set("fit", st);
        out.innerHTML = fitResult(st);
      });
    },
    onParam: function (root, param) { if (param) S.scrollToSection(param); },
    search: function () {
      return [
        { kind: L("Paths", "مسیرها"), title: L("Tech lead: a role, not a level", "tech lead: یک نقش، نه یک سطح"), text: L("An informal per-project role: sets technical direction for several others while someone else manages them.", "نقشی غیررسمی و پروژه‌محور: برای چند نفر جهت فنی تعیین می‌کند و مدیریت افراد بر عهده‌ی شخص دیگری است."), route: "paths/lead" },
        { kind: L("Paths", "مسیرها"), title: L("Staff archetypes: tech lead, architect, solver, right hand", "الگوهای نقش staff: tech lead، architect، solver، right hand"), text: ARCH_NOTE, route: "paths/archetypes" },
        { kind: L("Paths", "مسیرها"), title: L("Should I try management?", "آیا باید مدیریت را امتحان کنم؟"), text: L("Five small experiments, the pendulum, and a fit check.", "پنج تجربه‌ی کوچک، الگوی پاندول و بررسی تناسب مسیر با شما."), route: "paths/management" },
        { kind: L("Paths", "مسیرها"), title: L("Depth, breadth or both", "عمق، گستردگی یا هر دو"), text: L("T-shapes from L4 to L6.", "پروفایل‌های T-shaped از L4 تا L6."), route: "paths/depth" }
      ];
    }
  };
})();

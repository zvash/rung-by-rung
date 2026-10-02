/* Your path: lanes, tech lead, staff archetypes, depth vs breadth, management trial, fit helper. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc;

  var LANES = [
    { id: "deep", icon: "bulb", name: L("Deep IC", "IC تخصصی"), sub: L("a specialist who grows by depth", "متخصصی که با عمق رشد می‌کند"),
      by: {
        L4: L("Owns projects end to end and builds one deep skill beyond coding.", "پروژه‌ها را end-to-end own می‌کند و یک مهارت عمیق فراتر از کدنویسی می‌سازد."),
        L5: L("A trusted authority in an area (or a wide generalist); sets direction for 2–3 engineers by example.", "مرجع قابل‌اعتماد یک حوزه (یا generalistی با پهنه‌ی گسترده)؛ با نمونه‌ی کارش برای ۲ تا ۳ مهندس جهت می‌دهد."),
        L6: L("The go-to person for a domain, broad across systems; steers teams to the right decisions.", "مرجع یک حوزه و آگاه در عرض سیستم‌ها؛ تیم‌ها را به تصمیم‌های درست می‌رساند."),
        L7: L("The de facto authority on a major system; shapes technical direction beyond their own teams.", "مرجع عملی یک سیستم عمده؛ جهت فنی را فراتر از تیم‌های خودش شکل می‌دهد.")
      } },
    { id: "lead", icon: "route", name: L("Tech lead", "tech lead"), sub: L("a role on top of your level, per project", "نقشی روی سطح شما، به‌ازای هر پروژه"),
      by: {
        L4: L("Drives delivery of a project for a few people while owning their own work end to end.", "delivery یک پروژه را برای چند نفر پیش می‌برد، در حالی که کار خودش را هم end-to-end own می‌کند."),
        L5: L("Technical direction for a group's big problems; the person stakeholders come to.", "جهت فنی مساله‌های بزرگ یک گروه؛ کسی که ذی‌نفعان سراغش می‌آیند."),
        L6: L("Technical lead for large teams or several projects: strategy and delivery together.", "tech lead تیم‌های بزرگ یا چند پروژه: هم استراتژی هم اجرا."),
        L7: L("Leads several L6-scope efforts to success.", "چندین تلاش با scope سطح L6 را به موفقیت می‌رساند.")
      } },
    { id: "mgr", icon: "users", name: L("People manager", "مدیر آدم‌ها"), sub: L("a different job, with its own ladder", "شغلی متفاوت، با نردبان خودش"),
      by: {
        L4: L("First line: accountable for a team's delivery and its people's growth.", "خط اول: مسئول delivery یک تیم و رشد آدم‌هایش."),
        L5: L("A larger team or a whole area: sets direction and builds the team.", "تیم یا حوزه‌ی بزرگ‌تر: تعیین جهت و ساختن تیم."),
        L6: L("Several teams: strategy, organisation design, managers of managers.", "چند تیم: استراتژی، طراحی سازمان، مدیرانِ مدیرها."),
        L7: L("A large organisation: accountable for a strategic area through people.", "یک سازمان بزرگ: پاسخگوی یک حوزه‌ی استراتژیک از طریق آدم‌ها.")
      } }
  ];

  var ARCH = [
    { id: "tl", icon: "route", name: L("Tech lead", "Tech lead"), when: L("any size", "هر اندازه"),
      does: L("Guides the approach and execution of a team or project: sets technical direction, keeps people unblocked, stays close to the code.", "رویکرد و اجرای یک تیم یا پروژه را هدایت می‌کند: جهت فنی می‌دهد، آدم‌ها را بی‌مانع نگه می‌دارد، به کد نزدیک می‌ماند."),
      risk: L("Drifts into project management and becomes the team's bottleneck.", "به مدیریت پروژه می‌لغزد و گلوگاه تیم می‌شود."),
      fit: L("You like leading through the problem and are energised by other people's progress.", "دوست دارید از راهِ خودِ مساله رهبری کنید و پیشرفت دیگران به شما انرژی می‌دهد.") },
    { id: "arch", icon: "layers", name: L("Architect", "Architect"), when: L("often from ~100+ engineers", "اغلب از حدود ۱۰۰+ مهندس به بالا"),
      does: L("Owns the direction and quality of a critical area: designs, reviews and sets patterns across teams.", "جهت و کیفیت یک حوزه‌ی حیاتی را own می‌کند: طراحی، review و تعیین الگو میان تیم‌ها."),
      risk: L("Gets far from the code and designs things nobody wants to build.", "از کد دور می‌شود و چیزهایی طراحی می‌کند که کسی نمی‌خواهد بسازد."),
      fit: L("You enjoy systems thinking, trade-offs and writing things down.", "از سیستم‌اندیشی، trade-off و نوشتن لذت می‌برید.") },
    { id: "solver", icon: "target", name: L("Solver", "Solver"), when: L("any size", "هر اندازه"),
      does: L("Dives into a hard, high-stakes problem, gets it solved, then moves to the next one.", "در یک مساله‌ی سخت و پرریسک فرو می‌رود، حلش می‌کند و سراغ بعدی می‌رود."),
      risk: L("Knowledge stays in one head and the impact doesn't scale.", "دانش در یک سر می‌ماند و اثر مقیاس‌پذیر نیست."),
      fit: L("You love depth, debugging and ambiguity more than coordination.", "عمق، عیب‌یابی و ابهام را بیشتر از هماهنگی دوست دارید.") },
    { id: "rh", icon: "handshake", name: L("Right hand", "Right hand"), when: L("mostly at ~1,000+ engineers", "بیشتر از حدود ۱٬۰۰۰+ مهندس به بالا"),
      does: L("Extends a senior leader's reach: takes on part of their operating load and is trusted with ambiguous, org-wide problems.", "دامنه‌ی اثر یک رهبر ارشد را گسترش می‌دهد: بخشی از بار عملیاتی او را می‌گیرد و به او مساله‌های مبهم و سازمان‌گستر سپرده می‌شود."),
      risk: L("Depends on one leader's priorities and politics.", "به اولویت‌ها و سیاست‌های یک رهبر وابسته است."),
      fit: L("You like organisational problems and are comfortable switching context.", "مساله‌های سازمانی را دوست دارید و با تغییر context راحتید.") }
  ];
  var ARCH_NOTE = L("The four shapes come from Will Larson's research on staff-plus roles (StaffEng); Tanya Reilly adds three pillars of the work: big-picture thinking, executing cross-team projects, and levelling up other engineers. Which shape exists depends on company size, and people move between them.",
                    "این چهار شکل از پژوهش Will Larson درباره‌ی نقش‌های staff به بالا (StaffEng) می‌آید؛ Tanya Reilly سه ستون کار را هم اضافه می‌کند: تفکر تصویر بزرگ، اجرای پروژه‌های میان‌تیمی و بالا بردن سطح مهندسان دیگر. این‌که کدام شکل وجود دارد به اندازه‌ی شرکت بستگی دارد و آدم‌ها میانشان جابه‌جا می‌شوند.");

  var TRIALS = [
    { icon: "route", t: L("Lead a project with three or more people", "یک پروژه با سه نفر یا بیشتر را رهبری کنید"), x: L("Plan it, split it, unblock people, report status. Notice whether the coordination drains you or energises you.", "برنامه‌ریزی، تقسیم کار، رفع مانع آدم‌ها، گزارش وضعیت. ببینید هماهنگی انرژی‌تان را می‌گیرد یا می‌دهد.") },
    { icon: "users", t: L("Mentor someone for a full quarter", "یک فصل کامل کسی را mentor کنید"), x: L("Set goals together, give feedback, watch them grow. Is that the part you enjoy?", "با هم هدف بگذارید، بازخورد بدهید، رشدش را ببینید. آیا این همان بخشی است که از آن لذت می‌برید؟") },
    { icon: "calendar", t: L("Run a team ritual for a month", "یک ماه یک آیین تیمی را اجرا کنید"), x: L("Planning, retro or incident review. You will feel the weight of keeping a group of people on the same page.", "planning، retro یا بازبینی incident. سنگینی هم‌صفحه نگه داشتن یک گروه را حس می‌کنید.") },
    { icon: "door", t: L("Take a hiring process end to end", "یک فرایند استخدام را از ابتدا تا انتها انجام دهید"), x: L("Write the role, interview, debrief, make the call. Hiring is a core management duty.", "نقش را بنویسید، مصاحبه کنید، debrief برگزار کنید، تصمیم بگیرید. استخدام یک وظیفه‌ی اصلی مدیریت است.") },
    { icon: "eye", t: L("Shadow your manager for a week", "یک هفته مدیرتان را دنبال کنید"), x: L("Ask them to walk you through their calendar and the parts they find hard. Believe what they say.", "از او بخواهید تقویمش و بخش‌های سخت کارش را برایتان توضیح دهد. آنچه می‌گوید را باور کنید.") }
  ];

  var FIT = [
    { id: "f1", w: [2, 1, 0], t: L("A whole day on one hard technical problem makes me happy.", "یک روز کامل روی یک مساله‌ی سخت فنی مرا خوشحال می‌کند.") },
    { id: "f2", w: [0, 2, 2], t: L("I enjoy helping teammates get unstuck, even if it costs me focus time.", "کمک به هم‌تیمی‌ها برای رفع مانع را دوست دارم، حتی اگر زمان تمرکزم را بگیرد.") },
    { id: "f3", w: [0, 1, 2], t: L("I am comfortable giving direct feedback, including hard feedback.", "دادن بازخورد مستقیم، از جمله بازخورد سخت، برایم راحت است.") },
    { id: "f4", w: [0, 1, 2], t: L("I like deciding who works on what and in what order.", "تصمیم‌گرفتن درباره‌ی این‌که چه کسی روی چه کاری و به چه ترتیبی کار کند را دوست دارم.") },
    { id: "f5", w: [2, 1, 0], t: L("I would rather write the design than run the meeting about it.", "ترجیح می‌دهم خودِ طراحی را بنویسم تا جلسه‌ی مربوط به آن را اداره کنم.") },
    { id: "f6", w: [0, 1, 2], t: L("Seeing other people grow satisfies me more than my own shipped work.", "دیدن رشد دیگران بیشتر از کارِ منتشرشده‌ی خودم مرا راضی می‌کند.") },
    { id: "f7", w: [0, 2, 1], t: L("I like explaining technical trade-offs to non-technical people.", "توضیح trade-offهای فنی به آدم‌های غیرفنی را دوست دارم.") },
    { id: "f8", w: [0, 1, 2], t: L("Cross-team coordination and untangling organisational problems energise me.", "هماهنگی میان‌تیمی و باز کردن گره‌های سازمانی به من انرژی می‌دهد.") },
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
      '<div class="card card-flat">' + icon("scale") + "<p>" + md(L("**Levels are shared.** An IC at L6 and a manager at L6 are peers. An IC can be at a higher level than another manager, even though people usually report to someone at their own level or above.", "**سطح‌ها مشترک‌اند.** یک IC در L6 و یک مدیر در L6 هم‌ترازند. یک IC می‌تواند از مدیر دیگری در سطح بالاتر باشد، هرچند آدم‌ها معمولا به کسی در سطح خودشان یا بالاتر گزارش می‌دهند.")) + "</p></div>" +
      '<div class="card card-flat">' + icon("swap") + "<p>" + md(L("**Switching lanes is lateral, not a promotion.** You start management as a new manager, and technical skills fade if you stop practising. Many people swing back and forth over a career (Charity Majors calls it the pendulum).", "**عوض کردن مسیر یک جابه‌جایی افقی است، نه ارتقا.** مدیریت را به‌عنوان یک مدیر تازه‌کار شروع می‌کنید و اگر تمرین نکنید مهارت فنی کم‌رنگ می‌شود. بسیاری در طول کارشان میان این دو رفت‌وآمد می‌کنند (Charity Majors اسمش را «پاندول» گذاشته).")) + "</p></div>" +
      '<div class="card card-flat">' + icon("flag") + "<p>" + md(L("**Titles like team lead or tribe lead are roles, not levels.** They name the scope of someone's leadership; two people with the same role can be at different levels.", "**عنوان‌هایی مثل team lead یا tribe lead نقش‌اند، نه سطح.** دامنه‌ی رهبری یک نفر را نام می‌برند؛ دو نفر با یک نقش می‌توانند در سطح‌های متفاوتی باشند.")) + "</p></div></div>";
    return h;
  }

  function leadSection() {
    var h = '<div class="grid c2"><div class="card"><h3>' + icon("route") + " " + md(L("What a tech lead is", "tech lead چیست")) + "</h3><p>" +
      md(L("An informal, per-project role. A tech lead has one or more big problems in hand and sets technical direction for several other people, which extends their impact, while someone else manages those people. It is not a rung on the ladder and not a title.", "یک نقش غیررسمی و پروژه‌محور. tech lead یک یا چند مساله‌ی بزرگ در دست دارد و برای چند نفر دیگر جهت فنی تعیین می‌کند، که اثرش را گسترش می‌دهد، در حالی که مدیریت آن آدم‌ها با کس دیگری است. پله‌ای از نردبان نیست و عنوان هم نیست.")) + "</p></div>" +
      '<div class="card"><h3>' + icon("check") + " " + md(L("What the job usually contains", "کار معمولا شامل چیست")) + '</h3><ul class="tick">' +
      [L("Keep coding, but also represent the team to management", "کد زدن را ادامه می‌دهد، ولی نماینده‌ی تیم نزد مدیریت هم هست"), L("Vet plans and run the project's mechanics", "برنامه‌ها را وارسی می‌کند و مکانیک پروژه را اداره می‌کند"), L("Delegate on purpose, as a way to grow others", "عمدا واگذار می‌کند، به‌عنوان راهی برای رشد دیگران"), L("Say no and re-scope when priorities change", "وقتی اولویت‌ها عوض شد «نه» می‌گوید و scope را دوباره می‌بُرد")].map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div></div>";
    h += '<div class="grid c2 sp"><div class="card card-flat"><h3>' + icon("target") + " " + md(L("How it counts toward your level", "چه سهمی در سطح شما دارد")) + "</h3><p>" +
      md(L("Leading a project is a way to produce evidence for contribution and influence. But being “the lead” is not evidence by itself: the outcomes are. Teams that went faster, a project that launched, decisions that held up.", "رهبری یک پروژه راهی برای تولید مدرک در مشارکت و قدرت نفوذ است. ولی «لید بودن» به‌تنهایی مدرک نیست: نتیجه‌ها مدرک‌اند. تیم‌هایی که سریع‌تر شدند، پروژه‌ای که launch شد، تصمیم‌هایی که ایستادند.")) + "</p></div>" +
      '<div class="card card-flat"><h3>' + icon("trend") + " " + md(L("How to get the chance", "چطور فرصتش را بگیرید")) + '</h3><ol class="steps-list">' +
      [L("Write the design doc for the next big piece of work and ask to lead it.", "سند طراحی کار بزرگ بعدی را بنویسید و بخواهید رهبری‌اش با شما باشد."), L("Run the mechanics for one milestone: plan, risks, status.", "مکانیک یک milestone را اداره کنید: برنامه، ریسک‌ها، وضعیت."), L("Hand a real piece to someone else and make them successful.", "یک بخش واقعی را به کس دیگری بسپارید و او را موفق کنید.")].map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ol></div></div>";
    return h;
  }

  function archetypesSection() {
    var h = '<div class="grid c2 arch">' + ARCH.map(function (a) {
      return '<div class="card arch-card"><div class="arch-h">' + icon(a.icon) + "<h3>" + md(a.name) + '</h3><span class="tag">' + md(a.when) + "</span></div><p>" + md(a.does) + "</p>" +
        '<p class="arch-row"><strong>' + md(L("Watch out: ", "مراقب باشید: ")) + "</strong>" + md(a.risk) + "</p><p class=\"arch-row\"><strong>" + md(L("Fits you if: ", "اگر این‌طور هستید می‌خورد: ")) + "</strong>" + md(a.fit) + "</p></div>";
    }).join("") + "</div>";
    return h + U.source(ARCH_NOTE) + U.callout("note", L("Staff is not portable", "Staff قابل‌حمل نیست"), L("One ladder's “Staff” is a single team's domain, another's spans several teams, another's a whole domain. When you compare, compare scope: how many teams, what ambiguity, what horizon.", "«Staff» در یک نردبان یعنی حوزه‌ی یک تیم، در دیگری چند تیم، در دیگری یک حوزه‌ی کامل. وقتی مقایسه می‌کنید، scope را مقایسه کنید: چند تیم، چه ابهامی، چه افقی."));
  }

  function tShape(deep, wide, label) {
    // simple T glyph: bar width = breadth, stem height = depth
    var barW = 30 + wide * 34, stemH = 22 + deep * 22, cx = 60, top = 18;
    return '<svg viewBox="0 0 120 120" class="tshape" aria-hidden="true"><rect class="t-bar" x="' + (cx - barW / 2) + '" y="' + top + '" width="' + barW + '" height="14" rx="5"/><rect class="t-stem" x="' + (cx - 7) + '" y="' + (top + 10) + '" width="14" height="' + stemH + '" rx="5"/></svg>';
  }
  function depthSection() {
    var items = [
      { lv: "L4", d: 1, w: 1, t: L("One skill beyond coding", "یک مهارت فراتر از کدنویسی"), x: L("A small, real specialty on top of strong system command.", "یک تخصص کوچک ولی واقعی روی تسلط قوی بر سیستم.") },
      { lv: "L5", d: 3, w: 1, t: L("Depth: the trusted authority", "عمق: مرجع قابل‌اعتماد"), x: L("People come to you first for one area, and they are right to.", "آدم‌ها برای یک حوزه اول سراغ شما می‌آیند، و حق دارند.") },
      { lv: "L5", d: 1, w: 3, t: L("Breadth: the wide generalist", "عرض: generalist گسترده"), x: L("Several kinds of work beyond coding; you connect the dots between areas.", "چند نوع کار فراتر از کدنویسی؛ نقطه‌های میان حوزه‌ها را به هم وصل می‌کنید.") },
      { lv: "L6", d: 3, w: 3, t: L("Both: go-to and wide", "هر دو: مرجع و گسترده"), x: L("Go-to for your specialty, with command of the whole product area's architecture.", "مرجع تخصص خودتان، با تسلط بر معماری کل حوزه‌ی محصولی.") }
    ];
    var h = '<div class="grid c4 tshapes">' + items.map(function (it) {
      return '<div class="card card-flat tcard">' + tShape(it.d, it.w) + S.lv(it.lv) + "<strong>" + md(it.t) + "</strong><p>" + md(it.x) + "</p></div>";
    }).join("") + "</div>";
    h += '<div class="grid c2 sp"><div class="card"><h3>' + icon("compass") + " " + md(L("How to choose", "چطور انتخاب کنید")) + '</h3><ul class="tick">' +
      [L("Notice which problems you volunteer for when nobody is asking.", "ببینید وقتی کسی نخواسته برای چه مساله‌هایی داوطلب می‌شوید."), L("Ask what your team and company will still need in three years.", "بپرسید تیم و شرکتتان سه سال دیگر هنوز به چه چیزی نیاز دارد."), L("Pick the shape you can build visible evidence for, not the one that sounds grander.", "شکلی را انتخاب کنید که بشود برایش مدرک دیدنی ساخت، نه آن‌که باشکوه‌تر به نظر می‌رسد.")].map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="card"><h3>' + icon("alert") + " " + md(L("The traps", "تله‌ها")) + '</h3><ul class="cross">' +
      [L("Depth with no inner PM: the right answer to the wrong question.", "عمق بدون PM درونی: پاسخ درست به پرسش غلط."), L("Breadth with no depth anywhere: nobody trusts you with the hard problem.", "عرض بدون عمقِ هیچ‌جا: هیچ‌کس مساله‌ی سخت را به شما نمی‌سپارد.")].map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></div></div>";
    return h;
  }

  function managementSection() {
    var h = '<div class="grid c3 trials">' + TRIALS.map(function (t, i) {
      return '<div class="card trial"><div class="trial-n">' + S.digits(i + 1) + '</div><div class="pipe-ic">' + icon(t.icon) + "</div><strong>" + md(t.t) + "</strong><p>" + md(t.x) + "</p></div>";
    }).join("") + "</div>";
    h += U.callout("tip", L("Treat it as a reversible experiment", "آن را یک آزمایشِ برگشت‌پذیر بدانید"), L("Management is a lateral move. If you try it and it is not for you, going back is normal, ideally before your technical skills get stale. Talk to people who made the move in both directions.", "مدیریت یک جابه‌جایی افقی است. اگر امتحانش کردید و به درد شما نخورد، برگشتن عادی است، ترجیحا پیش از آن‌که مهارت فنی‌تان کهنه شود. با کسانی که در هر دو جهت جابه‌جا شده‌اند صحبت کنید."));
    return h;
  }

  function fitSection() {
    var st = S.store.get("fit", {});
    var h = '<p class="muted">' + md(L("Ten quick statements. Answer for how you actually feel in a normal month, not how you think you should.", "ده جمله‌ی سریع. برای ماه معمولی‌تان پاسخ دهید، نه آن‌چه فکر می‌کنید باید باشد.")) + '</p><div id="fitRows">' + FIT.map(function (f) {
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
    var h = '<div class="card"><h3 class="h-sm">' + md(L("Where your energy leans", "انرژی شما به کجا می‌گراید")) + "</h3>" + U.bars(names.map(function (n, i) {
      return { label: icon(icons[i]) + " " + md(n), value: pcts[i], max: 1, text: S.digits(Math.round(pcts[i] * 100)) + (S.isFa() ? "٪" : "%"), cls: i === top ? "top" : "" };
    })) + "</div>";
    h += U.callout("note", L("A lean, not a verdict", "یک گرایش است، نه حکم"), L("This reflects how you answered today. Test it with the experiments above, and check it again in a year. Many people find the answer changes with their stage of life and their team.", "این نتیجه‌ی پاسخ‌های امروز شماست. با آزمایش‌های بالا بسنجیدش و یک سال دیگر دوباره نگاه کنید. بسیاری می‌بینند پاسخ با مرحله‌ی زندگی و تیمشان عوض می‌شود."));
    return h;
  }

  S.views.paths = {
    render: function (root) {
      var h = U.pageHead({
        route: "paths", kicker: L("Locate & grow", "جایگاه و رشد"), icon: "route",
        title: L("Your path: IC, tech lead or manager", "مسیر شما: IC، tech lead یا مدیر"),
        lead: L("You can grow all the way up the ladder without managing anyone. Here is what the choices really are, and how to test what fits you before you commit.",
                "می‌توانید تا بالاترین پله‌ی نردبان بدون مدیریت هیچ‌کس رشد کنید. اینجا می‌بینید انتخاب‌ها واقعا چه هستند و چطور پیش از تعهد بسنجید چه چیزی به شما می‌خورد."),
        tldr: [
          L("An individual contributor can reach the top of the ladder. Management is a different job, not a promotion.", "یک مشارکت‌کننده‌ی فردی می‌تواند به بالای نردبان برسد. مدیریت شغلی متفاوت است، نه ارتقا."),
          L("“Tech lead” is a per-project role for someone who sets technical direction for others. It is not a level.", "«tech lead» نقشی پروژه‌محور است برای کسی که برای دیگران جهت فنی تعیین می‌کند. سطح نیست."),
          L("From L5 up there are several shapes of senior work. Choose by what energises you, then build evidence for that shape.", "از L5 به بالا چند شکل کارِ ارشد وجود دارد. بر اساس آن‌چه به شما انرژی می‌دهد انتخاب کنید و برای همان شکل مدرک بسازید.")
        ],
        sections: [
          { id: "ladder", label: L("Three lanes", "سه مسیر") },
          { id: "lead", label: L("Tech lead", "tech lead") },
          { id: "archetypes", label: L("Staff shapes", "شکل‌های staff") },
          { id: "depth", label: L("Depth or breadth", "عمق یا عرض") },
          { id: "management", label: L("Try management", "مدیریت را امتحان کنید") },
          { id: "fit", label: L("What fits me?", "چه چیزی به من می‌خورد؟") }
        ]
      });
      h += U.section("ladder", L("The ladder is wider than management", "نردبان از مدیریت پهن‌تر است"), L("From L4 up, three lanes run side by side. They share levels, and each has its own shape.", "از L4 به بالا سه مسیر کنار هم پیش می‌روند. سطح‌ها مشترک است و هر کدام شکل خودش را دارد."), lanesSection());
      h += U.section("lead", L("Tech lead: a role, not a level", "tech lead: یک نقش، نه یک سطح"), L("The most common first taste of leadership, and the most misunderstood.", "رایج‌ترین اولین تجربه‌ی رهبری، و بیشتر از همه بد فهمیده‌شده."), leadSection());
      h += U.section("archetypes", L("Four shapes of senior-plus work", "چهار شکلِ کارِ ارشد به بالا"), L("What “staff” can mean in practice. Which exist depends on the size of the company.", "«staff» در عمل می‌تواند چه معنایی داشته باشد. این‌که کدام وجود دارد به اندازه‌ی شرکت بستگی دارد."), archetypesSection());
      h += U.section("depth", L("Depth, breadth or both", "عمق، عرض یا هر دو"), L("The ladder asks for one beyond-coding skill at L4, depth or breadth at L5, and both at L6.", "نردبان در L4 یک مهارت فراتر از کدنویسی می‌خواهد، در L5 عمق یا عرض، و در L6 هر دو."), depthSection());
      h += U.section("management", L("Should you try management?", "آیا باید مدیریت را امتحان کنید؟"), L("Run small experiments first. Five that cost little and teach a lot.", "اول آزمایش‌های کوچک بکنید. پنج مورد که کم هزینه دارند و زیاد یاد می‌دهند."), managementSection());
      h += U.section("fit", L("What fits me?", "چه چیزی به من می‌خورد؟"), L("A ten-statement check on where your energy tends to go.", "یک بررسی ده‌جمله‌ای از این‌که انرژی‌تان معمولا کجا خرج می‌شود."), fitSection());
      h += U.nextCard("hire", S.pageLabel("hire"), L("Changing companies? How level is set, and how not to lose one.", "قصد جابه‌جایی دارید؟ سطح چطور تعیین می‌شود و چطور آن را از دست ندهید."));
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
        { kind: L("Paths", "مسیرها"), title: L("Tech lead: a role, not a level", "tech lead: یک نقش، نه یک سطح"), text: L("An informal per-project role: sets technical direction for several others while someone else manages them.", "نقشی غیررسمی و پروژه‌محور: برای چند نفر جهت فنی تعیین می‌کند، در حالی که کس دیگری آن‌ها را مدیریت می‌کند."), route: "paths/lead" },
        { kind: L("Paths", "مسیرها"), title: L("Staff archetypes: tech lead, architect, solver, right hand", "شکل‌های staff: tech lead، architect، solver، right hand"), text: ARCH_NOTE, route: "paths/archetypes" },
        { kind: L("Paths", "مسیرها"), title: L("Should I try management?", "آیا باید مدیریت را امتحان کنم؟"), text: L("Five small experiments, the pendulum, and a fit check.", "پنج آزمایش کوچک، پاندول، و یک بررسی تناسب."), route: "paths/management" },
        { kind: L("Paths", "مسیرها"), title: L("Depth, breadth or both", "عمق، عرض یا هر دو"), text: L("T-shapes from L4 to L6.", "شکل‌های T از L4 تا L6."), route: "paths/depth" }
      ];
    }
  };
})();

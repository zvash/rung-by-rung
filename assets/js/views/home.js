/* Home: hero ladder, "for you" panel, goal cards, six core ideas. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc;

  var RUNG = {
    L2: L("Tasks, with a guide", "انجام task با راهنمایی"),
    L3: L("Tasks, delivered well", "تحویل باکیفیت taskها"),
    L4: L("Whole projects", "پروژه‌های کامل"),
    L5: L("An area", "یک حوزه"),
    L6: L("A strategy", "یک استراتژی"),
    L7: L("A strategic domain", "یک حوزه‌ی استراتژیک")
  };

  var GOALS = [
    { icon: "target", route: "locate",
      title: L("Where am I on the ladder?", "من روی کدام پله‌ام؟"),
      text: L("A five-minute mirror across the four lenses, ending in a profile you can take to your next 1:1.",
              "خودارزیابی پنج‌دقیقه‌ای بر اساس چهار بُعد، با پروفایلی که می‌توانید به جلسه‌ی 1:1 بعدی ببرید.") },
    { icon: "stairs", route: "levels",
      title: L("What does each level expect?", "هر سطح چه انتظاری دارد؟"),
      text: L("L2 to L7, lens by lens: what changes at each step, the signals, the traps, and a story.",
              "از L2 تا L7، بُعد به بُعد: تغییر انتظارات در هر پله، نشانه‌ها، دام‌ها و یک داستان.") },
    { icon: "trend", route: "grow",
      title: L("How do I reach the next level?", "چطور به سطح بعد برسم؟"),
      text: L("How promotions really happen, a playbook for every step, and why people stall.",
              "سازوکار ارتقا، نقشه‌ی راه هر پله و دلایل توقف رشد.") },
    { icon: "door", route: "hire",
      title: L("I'm interviewing. How do I avoid a down-level?", "در حال مصاحبه‌ام. چطور از down-level جلوگیری کنم؟"),
      text: L("How level is set at hiring, what interviewers listen for, and what to say before you talk money.",
              "نحوه‌ی تعیین سطح هنگام استخدام، انتظارات مصاحبه‌کننده‌ها و نکاتی که پیش از گفتگو درباره‌ی حقوق باید مطرح کنید.") },
    { icon: "route", route: "paths",
      title: L("Staff, tech lead or manager?", "Staff، tech lead یا مدیر؟"),
      text: L("The ladder is wider than management. Compare the shapes of senior work and test what fits you.",
              "مسیر رشد به مدیریت محدود نیست. شکل‌های مختلف کار در سطح ارشد را مقایسه کنید و ببینید کدام با شما تناسب دارد.") },
    { icon: "help", route: "faq",
      title: L("I have a specific question", "سوال مشخصی دارم"),
      text: L("Denied promotion, stuck at senior, a down-level offer, AI at work: practical answers with real scenarios.",
              "رد شدن ارتقا، توقف رشد در سطح senior، offer با سطح پایین‌تر و AI در کار: پاسخ‌های عملی با سناریوهایی از موقعیت‌های کاری.") }
  ];

  var IDEAS = [
    { n: 1, route: "how/what",
      title: L("A level is a contract about scope", "سطح، توافقی درباره‌ی scope است"),
      text: L("It says how big a problem you are trusted to own, how much ambiguity you absorb, and how many people you move with you. It is not a reward for years served or hours worked.",
              "سطح مشخص می‌کند چه مساله‌ای با چه مقیاسی به شما سپرده می‌شود، چقدر ابهام را مدیریت می‌کنید و چند نفر را همراه خود پیش می‌برید. پاداش سابقه یا ساعت‌های کار نیست.") },
    { n: 2, route: "grow/model",
      title: L("Promotion recognises; it doesn't grant", "ارتقا، عملکرد سطح بعد را تایید می‌کند"),
      text: L("You are expected to operate at the next level, consistently and with evidence, before the title shows up. Waiting to be handed the scope is how people stall.",
              "انتظار می‌رود پیش از تغییر عنوان، با تداوم و شواهد کافی در سطح بعد کار کرده باشید. منتظر ماندن برای واگذاری scope بزرگ‌تر، یکی از دلایل اصلی توقف رشد است.") },
    { n: 3, route: "how/lenses",
      title: L("Impact multiplies everything", "اثرگذاری به همه‌ی بُعدها معنا می‌دهد"),
      text: L("Every lens is judged together with what changed for the business. At lower levels that means the speed and quality of tasks; at higher levels, whether the project itself succeeded.",
              "هر بُعد در کنار نتیجه‌ی آن برای کسب‌وکار سنجیده می‌شود. در سطح‌های پایین، سرعت و کیفیت انجام taskها مهم است. در سطح‌های بالا، موفقیت خود پروژه معیار است.") },
    { n: 4, route: "how/lenses",
      title: L("A simple answer to a hard problem is the senior move", "حل ساده‌ی مساله‌ی سخت، نشانه‌ی قضاوت مهندس ارشد است"),
      text: L("The ladder measures the complexity of the problem you solved, not of your solution. A tidy fix for a gnarly problem beats an elaborate one.",
              "نردبان، پیچیدگی مساله‌ای را که حل کرده‌اید می‌سنجد، نه پیچیدگی راه‌حل را. راه‌حل ساده و منسجم برای مساله‌ی دشوار، از راه‌حل پرزرق‌وبرق ارزشمندتر است.") },
    { n: 5, route: "hire",
      title: L("Titles travel badly; evidence travels well", "عنوان‌ها در شرکت‌ها معنای یکسانی ندارند؛ شواهد عملکرد قابل مقایسه‌اند"),
      text: L("\"Senior\" at one company is \"mid\" at another. Scope stories with numbers (users, systems, people, months) translate everywhere. That is how you stay clear of a down-level.",
              "«Senior» در یک شرکت ممکن است در شرکت دیگر «mid» باشد. توضیح scope با عدد، مثل تعداد کاربران، سیستم‌ها، افراد و ماه‌ها، در شرکت‌های مختلف قابل فهم است و به جلوگیری از down-level کمک می‌کند.") },
    { n: 6, route: "grow/stall",
      title: L("Growth is a choice of problems", "رشد از انتخاب مساله شروع می‌شود"),
      text: L("Effort alone doesn't move you up; the problems you are trusted with do. Choosing, shaping and finishing bigger ones, where the right people can see it, is the whole game.",
              "تلاش به‌تنهایی باعث ارتقا نمی‌شود. مقیاس مساله‌هایی که حل می‌کنید تعیین‌کننده است. اصل کار، انتخاب، تعریف و به سرانجام رساندن مساله‌های بزرگ‌تر و نشان دادن نتیجه به افراد موثر در ارزیابی است.") }
  ];

  var TIPS = [
    { icon: "user", title: L("Tell it your level", "سطحتان را بگویید"),
      text: L("Use “My level” in the top bar. Pages then highlight what matters for your rung and the next one.",
              "از گزینه‌ی «سطح من» در نوار بالا استفاده کنید. صفحه‌ها نکات مهم برای سطح فعلی و سطح بعد شما را برجسته می‌کنند.") },
    { icon: "search", title: L("Search anything", "هر چیزی را جست‌وجو کنید"),
      text: L("Press / or Ctrl/⌘ K to jump to a level, a question, a tool or a term.",
              "برای رفتن به یک سطح، پرسش، ابزار یا اصطلاح، کلید / یا Ctrl/⌘ K را بزنید.") },
    { icon: "globe", title: L("Language and theme", "زبان و ظاهر"),
      text: L("English ↔ فارسی and light/dark are one click away. Everything works offline.",
              "با یک کلیک، میان English ↔ فارسی یا حالت روشن و تیره جابه‌جا شوید. همه‌چیز آفلاین کار می‌کند.") }
  ];

  function heroLadder() {
    var me = S.state.me, h = '<div class="lad" role="list">';
    S.LEVELS.slice().reverse().forEach(function (id) {
      var lv = S.levelById(id), isMe = me === id;
      h += '<a class="rung' + (isMe ? " is-me" : "") + '" role="listitem" href="#/levels/' + id + '" style="--c:var(--lv' + id.slice(1) + ')">' +
        S.lv(id) + '<span class="rung-txt"><strong>' + md(lv.name) + "</strong><em>" + md(RUNG[id]) + "</em></span>" +
        (isMe ? '<span class="rung-you">' + esc(U.u("you")) + "</span>" : icon("arrow", "dir rung-go")) + "</a>";
    });
    return h + "</div>";
  }

  function forYou() {
    var me = S.state.me;
    if (!me) {
      var h = '<div class="card foryou foryou-ask"><div><h2>' + U.u("myLevelTitle") + "</h2><p class=\"muted\">" +
        md(L("Pick one and the guide tailors itself to you. Not sure? The five-minute mirror will tell you where your work reads today.",
             "یک سطح انتخاب کنید تا راهنما متناسب با آن تنظیم شود. مطمئن نیستید؟ خودارزیابی پنج‌دقیقه‌ای نشان می‌دهد کار فعلی شما بیشتر با کدام سطح مطابقت دارد.")) + "</p></div>";
      h += '<div class="me-grid wide">';
      S.LEVELS.forEach(function (id) {
        h += '<button type="button" class="me-opt" data-setme="' + id + '">' + S.lv(id) + "<span>" + esc(U.levelName(id)) + "</span></button>";
      });
      h += "</div><a class=\"btn secondary sm\" href=\"#/locate\">" + icon("target") + U.u("notSure") + "</a></div>";
      return h;
    }
    var lv = S.levelById(me), nx = S.nextLevel(me), nl = nx && S.levelById(nx);
    var h2 = '<div class="card foryou"><div class="foryou-head"><span class="tag brand">' + icon("user") + esc(U.u("forYou")) + "</span>" +
      '<h2>' + S.lv(me) + " " + md(lv.name) + "</h2><p class=\"foryou-q\">" + md(lv.question) + "</p></div>";
    if (nl) {
      h2 += '<div class="foryou-next"><h3>' + esc(U.u("nextRung")) + " " + S.lv(nx) + " " + md(nl.name) + '</h3><ul class="shift-list">';
      S.data.lenses.filter(function (x) { return !x.beyond; }).forEach(function (lens) {
        h2 += '<li><span class="shift-lens">' + md(lens.name) + "</span>" + md(nl.shift[lens.id]) + "</li>";
      });
      h2 += "</ul></div>";
    } else {
      h2 += '<div class="foryou-next"><p>' + md(L("You are at the top of this guide's ladder. Look at how your scope compounds: the paths page covers the shapes senior work takes, and the landscape page covers where the profession is moving.",
        "شما در بالاترین سطح نردبان این راهنما هستید. صفحه‌ی مسیرها شکل‌های مختلف کار در سطح ارشد را توضیح می‌دهد و صفحه‌ی چشم‌انداز، تحولات حرفه‌ی مهندسی را بررسی می‌کند.")) + "</p></div>";
    }
    h2 += '<div class="btn-row">';
    if (nl) h2 += '<a class="btn sm" href="#/grow/playbooks">' + icon("trend") + md(L("Playbook to ", "نقشه‌ی راه رسیدن به ")) + S.lv(nx) + "</a>";
    h2 += '<a class="btn secondary sm" href="#/levels/' + me + '">' + icon("stairs") + md(L("My level in detail", "جزئیات سطح من")) + "</a>" +
      '<a class="btn secondary sm" href="#/practice">' + icon("play") + md(L("Practise scenarios", "تمرین سناریوها")) + "</a></div></div>";
    return h2;
  }

  S.views.home = {
    render: function (root) {
      var h = '<section class="hero"><div class="hero-copy">' +
        '<div class="kicker">' + icon("ladder") + "<span>" + md(L("A field guide for software engineers", "راهنمای کاربردی مهندسان نرم‌افزار")) + "</span></div>" +
        "<h1>" + md(L("Know your rung. Plan the next one.", "پله‌ی خودتان را بشناسید. برای پله‌ی بعد برنامه بریزید.")) + "</h1>" +
        '<p class="lead">' + md(L("How engineering levels really work, where you stand today, how to grow, and how to change companies without losing a level.",
          "سازوکار سطح‌بندی مهندسان، جایگاه فعلی شما، مسیر رشد و نحوه‌ی تغییر شرکت با حفظ سطح حرفه‌ای‌تان.")) + "</p>" +
        '<div class="btn-row"><a class="btn" href="#/locate">' + icon("target") + md(L("Find where you are", "جایگاهم را پیدا کنم")) + "</a>" +
        '<a class="btn secondary" href="#/levels">' + icon("stairs") + md(L("Explore the levels", "سطح‌ها را ببینم")) + "</a></div>" +
        '<p class="hero-note">' + icon("shield") + "<span>" + md(L("Works offline. English and فارسی. What you type stays in this browser.",
          "آفلاین کار می‌کند. English و فارسی. هرچه بنویسید فقط در همین مرورگر می‌ماند.")) + "</span></p></div>" +
        '<div class="hero-art" aria-label="' + esc(S.plain(L("The six levels from L7 down to L2", "شش سطح از L7 تا L2"))) + '">' + heroLadder() + "</div></section>";

      h += '<div id="foryou">' + forYou() + "</div>";

      h += U.section("goals", L("What brings you here?", "دنبال چه چیزی هستید؟"), null,
        '<div class="grid c3 goals">' + GOALS.map(function (g) {
          return '<a class="goal" href="#/' + g.route + '"><span class="goal-ic">' + icon(g.icon) + "</span><strong>" + md(g.title) + "</strong><span>" + md(g.text) + "</span>" + icon("arrow", "dir goal-go") + "</a>";
        }).join("") + "</div>" +
        '<div class="pill-row sub-links"><a class="pill" href="#/practice">' + md(S.pageLabel("practice")) + '</a><a class="pill" href="#/toolkit">' + md(S.pageLabel("toolkit")) +
        '</a><a class="pill" href="#/landscape">' + md(S.pageLabel("landscape")) + '</a><a class="pill" href="#/about">' + md(S.pageLabel("about")) + "</a></div>");

      h += U.section("ideas", L("Six ideas that explain most of leveling", "شش ایده برای درک سطح‌بندی"),
        L("Hold on to these and the rest of the guide gets easier to read.", "با به خاطر سپردن این شش ایده، بقیه‌ی راهنما را راحت‌تر می‌خوانید."),
        '<div class="grid c3 ideas">' + IDEAS.map(function (x) {
          return '<a class="idea" href="#/' + x.route + '"><span class="idea-n">' + S.digits(x.n) + "</span><strong>" + md(x.title) + "</strong><span>" + md(x.text) + "</span></a>";
        }).join("") + "</div>");

      h += U.section("use", L("Make it yours", "راهنما را شخصی کنید"), null,
        '<div class="grid c3">' + TIPS.map(function (x) {
          return '<div class="card card-flat tip"><span class="goal-ic">' + icon(x.icon) + "</span><strong>" + md(x.title) + "</strong><span class=\"muted\">" + md(x.text) + "</span></div>";
        }).join("") + "</div>" +
        U.callout("note", L("A note on honesty", "درباره‌ی اعتبار محتوا"),
          L("The stories here are composites, not real people. Company facts are approximate, dated, and drawn from public sources: always check your own company's ladder and ask your manager before acting on any single number.",
            "شخصیت‌های داستان‌ها از ترکیب چند الگو ساخته شده‌اند و واقعی نیستند. اطلاعات شرکت‌ها تقریبی، تاریخ‌دار و برگرفته از منابع عمومی است. پیش از اتکا به هر عدد، نردبان شرکت خودتان را بررسی کنید و از مدیرتان بپرسید.")));

      root.innerHTML = h;
      S.on(root, "click", "[data-setme]", function (e, b) { S.setMe(b.getAttribute("data-setme")); });
    },
    search: function () {
      return IDEAS.map(function (x) { return { kind: L("Core idea", "ایده‌ی کلیدی"), title: x.title, text: x.text, route: x.route }; })
        .concat(GOALS.map(function (g) { return { kind: L("Start here", "شروع"), title: g.title, text: g.text, route: g.route }; }));
    }
  };
})();

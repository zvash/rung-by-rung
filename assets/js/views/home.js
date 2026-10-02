/* Home: hero ladder, "for you" panel, goal cards, six core ideas. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, md = S.md, icon = S.icon, U = S.ui, esc = S.esc;

  var RUNG = {
    L2: L("Tasks, with a guide", "task با راهنما"),
    L3: L("Tasks, delivered well", "taskهای خوب تحویل‌شده"),
    L4: L("Whole projects", "پروژه‌های کامل"),
    L5: L("An area", "یک حوزه"),
    L6: L("A strategy", "یک استراتژی"),
    L7: L("A strategic domain", "یک حوزه‌ی استراتژیک")
  };

  var GOALS = [
    { icon: "target", route: "locate",
      title: L("Where am I on the ladder?", "من روی کدام پله‌ام؟"),
      text: L("A five-minute mirror across the four lenses, ending in a profile you can take to your next 1:1.",
              "آینه‌ی پنج‌دقیقه‌ای روی چهار بُعد، با پروفایلی که می‌توانید به جلسه‌ی 1:1 بعدی ببرید.") },
    { icon: "stairs", route: "levels",
      title: L("What does each level expect?", "هر سطح چه انتظاری دارد؟"),
      text: L("L2 to L7, lens by lens: what changes at each step, the signals, the traps, and a story.",
              "از L2 تا L7، بُعد به بُعد: تغییر هر پله، نشانه‌ها، تله‌ها و یک داستان.") },
    { icon: "trend", route: "grow",
      title: L("How do I reach the next level?", "چطور به سطح بعد برسم؟"),
      text: L("How promotions really happen, a playbook for every step, and why people stall.",
              "ارتقا واقعا چطور اتفاق می‌افتد، نقشه‌ی راه هر پله، و چرا آدم‌ها درجا می‌زنند.") },
    { icon: "door", route: "hire",
      title: L("I'm interviewing. How do I avoid a down-level?", "در حال مصاحبه‌ام؛ چطور از تنزل سطح دور بمانم؟"),
      text: L("How level is set at hiring, what interviewers listen for, and what to say before you talk money.",
              "سطح موقع استخدام چطور تعیین می‌شود، مصاحبه‌کننده‌ها دنبال چه می‌گردند، و پیش از صحبت از حقوق چه بگویید.") },
    { icon: "route", route: "paths",
      title: L("Staff, tech lead or manager?", "Staff، tech lead یا مدیر؟"),
      text: L("The ladder is wider than management. Compare the shapes of senior work and test what fits you.",
              "نردبان از مدیریت پهن‌تر است. شکل‌های مختلفِ کارِ ارشد را مقایسه کنید و ببینید چه چیزی به شما می‌خورد.") },
    { icon: "help", route: "faq",
      title: L("I have a specific question", "سوال مشخصی دارم"),
      text: L("Denied promotion, stuck at senior, a down-level offer, AI at work: practical answers with real scenarios.",
              "ارتقای ردشده، درجا زدن در سطح senior، پیشنهادِ با سطح پایین‌تر، هوش مصنوعی در کار: پاسخ‌های عملی با سناریوهای واقعی.") }
  ];

  var IDEAS = [
    { n: 1, route: "how/what",
      title: L("A level is a contract about scope", "سطح، قرارداد درباره‌ی scope است"),
      text: L("It says how big a problem you are trusted to own, how much ambiguity you absorb, and how many people you move with you. It is not a reward for years served or hours worked.",
              "می‌گوید چقدر مساله‌ی بزرگ به شما سپرده می‌شود، چقدر ابهام را جذب می‌کنید و چند نفر را با خودتان جلو می‌برید. پاداشِ سال‌های سابقه یا ساعت‌های کار نیست.") },
    { n: 2, route: "grow/model",
      title: L("Promotion recognises; it doesn't grant", "ارتقا تایید می‌کند؛ نمی‌بخشد"),
      text: L("You are expected to operate at the next level, consistently and with evidence, before the title shows up. Waiting to be handed the scope is how people stall.",
              "انتظار این است که پیش از رسیدن عنوان، پیوسته و با مدرک در سطح بعد عمل کرده باشید. منتظر ماندن تا scope را «به شما بدهند» دلیل اصلی درجا زدن است.") },
    { n: 3, route: "how/lenses",
      title: L("Impact multiplies everything", "اثرگذاری ضریبِ همه‌چیز است"),
      text: L("Every lens is judged together with what changed for the business. At lower levels that means the speed and quality of tasks; at higher levels, whether the project itself succeeded.",
              "هر بُعد کنار نتیجه‌اش برای کسب‌وکار سنجیده می‌شود. در سطح‌های پایین یعنی سرعت و کیفیت taskها؛ در سطح‌های بالا یعنی موفقیتِ خودِ پروژه.") },
    { n: 4, route: "how/lenses",
      title: L("A simple answer to a hard problem is the senior move", "راه‌حل ساده برای مساله‌ی سخت، حرکتِ مهندس ارشد است"),
      text: L("The ladder measures the complexity of the problem you solved, not of your solution. A tidy fix for a gnarly problem beats an elaborate one.",
              "نردبان پیچیدگیِ مساله‌ای را که حل کرده‌اید می‌سنجد، نه پیچیدگی راه‌حلتان. یک راه‌حل مرتب برای مساله‌ای گره‌خورده از راه‌حلِ پرزرق‌وبرق بهتر است.") },
    { n: 5, route: "hire",
      title: L("Titles travel badly; evidence travels well", "عنوان‌ها خوب سفر نمی‌کنند؛ مدرک خوب سفر می‌کند"),
      text: L("\"Senior\" at one company is \"mid\" at another. Scope stories with numbers (users, systems, people, months) translate everywhere. That is how you stay clear of a down-level.",
              "«Senior» در یک شرکت در شرکت دیگر «mid» است. داستان‌های scope با عدد (کاربر، سیستم، آدم، ماه) همه‌جا قابل‌ترجمه‌اند، و راهِ دور ماندن از تنزل سطح همین است.") },
    { n: 6, route: "grow/stall",
      title: L("Growth is a choice of problems", "رشد، انتخابِ مساله است"),
      text: L("Effort alone doesn't move you up; the problems you are trusted with do. Choosing, shaping and finishing bigger ones, where the right people can see it, is the whole game.",
              "تلاش به‌تنهایی شما را بالا نمی‌برد؛ مساله‌هایی که به شما سپرده می‌شود بالا می‌برد. انتخاب، شکل‌دادن و به پایان رساندنِ مساله‌های بزرگ‌تر، جایی که آدم‌های درست آن را ببینند، اصل بازی است.") }
  ];

  var TIPS = [
    { icon: "user", title: L("Tell it your level", "سطحتان را بگویید"),
      text: L("Use “My level” in the top bar. Pages then highlight what matters for your rung and the next one.",
              "از «سطح من» در نوار بالا استفاده کنید. صفحه‌ها آن‌چه برای پله‌ی شما و پله‌ی بعد مهم است را برجسته می‌کنند.") },
    { icon: "search", title: L("Search anything", "هر چیزی را جست‌وجو کنید"),
      text: L("Press / or Ctrl/⌘ K to jump to a level, a question, a tool or a term.",
              "برای رفتن به یک سطح، پرسش، ابزار یا اصطلاح، کلید / یا Ctrl/⌘ K را بزنید.") },
    { icon: "globe", title: L("Language and theme", "زبان و پوسته"),
      text: L("English ↔ فارسی and light/dark are one click away. Everything works offline.",
              "English ↔ فارسی و روشن/تیره یک کلیک فاصله دارند. همه‌چیز آفلاین کار می‌کند.") }
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
             "یکی را انتخاب کنید تا راهنما خودش را با شما تنظیم کند. مطمئن نیستید؟ آینه‌ی پنج‌دقیقه‌ای نشان می‌دهد کارتان امروز کجا خوانده می‌شود.")) + "</p></div>";
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
        "شما در بالاترین پله‌ی نردبانِ این راهنما هستید. صفحه‌ی مسیرها شکل‌های مختلف کارِ ارشد را پوشش می‌دهد و صفحه‌ی چشم‌انداز، جهت حرکت حرفه را.")) + "</p></div>";
    }
    h2 += '<div class="btn-row">';
    if (nl) h2 += '<a class="btn sm" href="#/grow/playbooks">' + icon("trend") + md(L("Playbook to ", "نقشه‌ی راه به ")) + S.lv(nx) + "</a>";
    h2 += '<a class="btn secondary sm" href="#/levels/' + me + '">' + icon("stairs") + md(L("My level in detail", "جزئیات سطح من")) + "</a>" +
      '<a class="btn secondary sm" href="#/practice">' + icon("play") + md(L("Practise scenarios", "تمرین سناریوها")) + "</a></div></div>";
    return h2;
  }

  S.views.home = {
    render: function (root) {
      var h = '<section class="hero"><div class="hero-copy">' +
        '<div class="kicker">' + icon("ladder") + "<span>" + md(L("A field guide for software engineers", "راهنمای میدانی مهندسان نرم‌افزار")) + "</span></div>" +
        "<h1>" + md(L("Know your rung. Plan the next one.", "پله‌ی خودتان را بشناسید. پله‌ی بعد را برنامه‌ریزی کنید.")) + "</h1>" +
        '<p class="lead">' + md(L("How engineering levels really work, where you stand today, how to grow, and how to change companies without losing a level.",
          "سطح‌های مهندسی واقعا چطور کار می‌کنند، امروز کجا ایستاده‌اید، چطور رشد کنید، و چطور شرکت عوض کنید بدون این‌که سطحتان را از دست بدهید.")) + "</p>" +
        '<div class="btn-row"><a class="btn" href="#/locate">' + icon("target") + md(L("Find where you are", "جایگاهم را پیدا کنم")) + "</a>" +
        '<a class="btn secondary" href="#/levels">' + icon("stairs") + md(L("Explore the levels", "سطح‌ها را ببینم")) + "</a></div>" +
        '<p class="hero-note">' + icon("shield") + "<span>" + md(L("Works offline. English and فارسی. What you type stays in this browser.",
          "آفلاین کار می‌کند. English و فارسی. هرچه بنویسید فقط در همین مرورگر می‌ماند.")) + "</span></p></div>" +
        '<div class="hero-art" aria-label="' + esc(S.plain(L("The six levels from L7 down to L2", "شش سطح از L7 تا L2"))) + '">' + heroLadder() + "</div></section>";

      h += '<div id="foryou">' + forYou() + "</div>";

      h += U.section("goals", L("What brings you here?", "امروز برای چه آمده‌اید؟"), null,
        '<div class="grid c3 goals">' + GOALS.map(function (g) {
          return '<a class="goal" href="#/' + g.route + '"><span class="goal-ic">' + icon(g.icon) + "</span><strong>" + md(g.title) + "</strong><span>" + md(g.text) + "</span>" + icon("arrow", "dir goal-go") + "</a>";
        }).join("") + "</div>" +
        '<div class="pill-row sub-links"><a class="pill" href="#/practice">' + md(S.pageLabel("practice")) + '</a><a class="pill" href="#/toolkit">' + md(S.pageLabel("toolkit")) +
        '</a><a class="pill" href="#/landscape">' + md(S.pageLabel("landscape")) + '</a><a class="pill" href="#/about">' + md(S.pageLabel("about")) + "</a></div>");

      h += U.section("ideas", L("Six ideas that explain most of leveling", "شش ایده که بیشترِ سطح‌بندی را توضیح می‌دهد"),
        L("Hold on to these and the rest of the guide gets easier to read.", "این شش ایده را که به خاطر بسپارید، بقیه‌ی راهنما راحت‌تر خوانده می‌شود."),
        '<div class="grid c3 ideas">' + IDEAS.map(function (x) {
          return '<a class="idea" href="#/' + x.route + '"><span class="idea-n">' + S.digits(x.n) + "</span><strong>" + md(x.title) + "</strong><span>" + md(x.text) + "</span></a>";
        }).join("") + "</div>");

      h += U.section("use", L("Make it yours", "راهنما را شخصی کنید"), null,
        '<div class="grid c3">' + TIPS.map(function (x) {
          return '<div class="card card-flat tip"><span class="goal-ic">' + icon(x.icon) + "</span><strong>" + md(x.title) + "</strong><span class=\"muted\">" + md(x.text) + "</span></div>";
        }).join("") + "</div>" +
        U.callout("note", L("A note on honesty", "یک نکته درباره‌ی صداقت"),
          L("The stories here are composites, not real people. Company facts are approximate, dated, and drawn from public sources: always check your own company's ladder and ask your manager before acting on any single number.",
            "داستان‌های اینجا ترکیبی‌اند و آدم واقعی نیستند. اطلاعات شرکت‌ها تقریبی، تاریخ‌دار و برگرفته از منابع عمومی است: پیش از تکیه بر هر عدد، نردبان خودِ شرکتتان را ببینید و از مدیرتان بپرسید.")));

      root.innerHTML = h;
      S.on(root, "click", "[data-setme]", function (e, b) { S.setMe(b.getAttribute("data-setme")); });
    },
    search: function () {
      return IDEAS.map(function (x) { return { kind: L("Core idea", "ایده‌ی کلیدی"), title: x.title, text: x.text, route: x.route }; })
        .concat(GOALS.map(function (g) { return { kind: L("Start here", "شروع"), title: g.title, text: g.text, route: g.route }; }));
    }
  };
})();

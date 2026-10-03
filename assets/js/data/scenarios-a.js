/* "What would you do?" scenarios, part A: L2 to L4 situations.
   Each option carries the level of thinking it reflects (lv 2..7), or lv 0 + flag "misfire" for a plausible move that backfires.
   All situations are illustrative composites. */
(function () {
  "use strict";
  var S = window.SWE,
    L = S.L;
  S.data.scenarios = S.data.scenarios || [];
  S.data.scenarios.push(
    {
      id: "s-stuck",
      level: "L2",
      lenses: ["challenge", "influence"],
      title: L("Stuck on a bug", "block شدن روی یک باگ"),
      setup: L(
        "You've been on the same bug for a day and a half. Your lead gave you the task on Monday and said it should take a day. Standup is in ten minutes, and you feel close.",
        "یک روز و نیم است درگیر رفع یک باگ هستید. لیدتان دوشنبه این task را داد و گفت یک روز طول می‌کشد. ده دقیقه‌ی دیگر stand-up است و حس می‌کنید نزدیکید.",
      ),
      question: L("What do you say and do?", "چه می‌گویید و چه می‌کنید؟"),
      options: [
        {
          t: L(
            "Say “still working on it” at standup and keep going. You're almost there, and you'd rather not look slow.",
            "در stand-up می‌گویید «هنوز رویش کار می‌کنم» و ادامه می‌دهید. نزدیکید و دوست ندارید کند به نظر برسید.",
          ),
          lv: 2,
          why: L(
            "A very human choice, and the first rung: the problem stays in your head. After a day and a half, “almost there” is a feeling, not a status, and nobody can help with a feeling. Fine once; as a habit it costs you dates.",
            "قابل‌درک است، اما مساله فقط نزد شما می‌ماند. پس از یک روز و نیم، «نزدیکم» برداشت شخصی است، نه گزارش وضعیت قابل‌اقدام. یک بار قابل‌قبول است، اما تکرارش زمان‌بندی را به خطر می‌اندازد.",
          ),
        },
        {
          t: L(
            "Decide the module is a mess and start rewriting it. You've learned enough to know it needs it.",
            "تصمیم می‌گیرید ماژول به‌هم‌ریخته است و بازنویسی‌اش را شروع می‌کنید. حالا آن‌قدر با ماژول آشنا شده‌اید که فکر می‌کنید به بازنویسی نیاز دارد.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "A tempting leap from a bug to a rewrite, and the bug is still there. You'd also be changing code you don't own, with nobody expecting it. Fix the bug first; if the module deserves a rewrite, bring that with evidence.",
            "بازنویسی وسوسه‌انگیز است، اما باگ هنوز حل نشده و بدون هماهنگی، کدی را تغییر می‌دهید که own نمی‌کنید. ابتدا باگ را رفع کنید و سپس ضرورت بازنویسی را با شواهد مطرح کنید.",
          ),
        },
        {
          t: L(
            "Say where you are, what you've tried and what you expect, and ask for fifteen minutes with someone who knows the module.",
            "می‌گویید کجا هستید، چه چیزهایی را امتحان کرده‌اید و چه انتظاری دارید و از کسی که ماژول را می‌شناسد پانزده دقیقه وقت می‌خواهید.",
          ),
          lv: 3,
          why: L(
            "This is the L3 move: you make your state visible early and ask a precise question, so being stuck costs one conversation instead of another day. It's what the ladder means by asking for guidance instead of sinking time.",
            "رفتار L3 است: وضعیت را زود اطلاع می‌دهید و سوال دقیق می‌پرسید. به‌جای یک روز معطلی دیگر، یک گفتگو مساله را جلو می‌برد. منظور نردبان از راهنمایی گرفتن به‌جای اتلاف وقت، همین است.",
          ),
        },
        {
          t: L(
            "Explain your progress, what you've tried and what you expect, and ask someone who knows the module for fifteen minutes of help. Once the bug is fixed, add the missing test and a line in the docs so nobody else loses a day to it.",
            "وضعیت کار، راه‌هایی که امتحان کرده‌اید و نتیجه‌ای را که انتظار دارید توضیح می‌دهید و از کسی که ماژول را می‌شناسد پانزده دقیقه کمک می‌خواهید. پس از رفع باگ، تست جاافتاده و توضیحی کوتاه به مستندات اضافه می‌کنید تا فرد دیگری یک روز وقتش را صرف همین مشکل نکند.",
          ),
          lv: 4,
          why: L(
            "You've closed the loop: the bug is fixed and the thing that made it expensive is gone. L4 owns the completeness of the work, including what keeps a problem from coming back.",
            "کار را کامل کرده‌اید: باگ رفع شده و عامل اتلاف وقت هم برطرف شده است. در L4، مسئولیت کامل بودن کار شامل پیشگیری از تکرار مشکل هم می‌شود.",
          ),
        },
      ],
      takeaway: L(
        "At L2–L3 the skill is making your state visible early. At L4 you also close the loop so the problem doesn't return.",
        "در L2 و L3، اطلاع‌رسانی زودهنگام وضعیت مهارت اصلی است. در L4، با پیشگیری از تکرار، کار را کامل می‌کنید.",
      ),
    },

    {
      id: "s-empty-board",
      level: "L3",
      lenses: ["contribution"],
      title: L("The empty board", "تابلوی خالی"),
      setup: L(
        "You finished your tasks on Wednesday. The sprint board has nothing assigned to you, and your lead is in planning meetings all day.",
        "چهارشنبه taskهایتان را تمام کردید. در تابلوی sprint کار دیگری به شما assign نشده و لیدتان تمام روز در جلسه‌های برنامه‌ریزی است.",
      ),
      question: L("What do you do?", "چه می‌کنید؟"),
      options: [
        {
          t: L(
            "Start the refactor you've wanted to do for months. Nobody is looking at the board anyway.",
            "refactorی را شروع می‌کنید که ماه‌هاست می‌خواهید بکنید. به هر حال کسی به تابلو نگاه نمی‌کند.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "Initiative aimed at your own list, not the team's. An unannounced refactor competes with the sprint goal and surprises reviewers. Proposing it for the next sprint is welcome; quietly starting it isn't.",
            "ابتکار شما در راستای اولویت شخصی است، نه تیم. refactoring بدون هماهنگی با هدف sprint رقابت می‌کند و کسانی را که قرار است کد را review کنند غافلگیر می‌کند. پیشنهاد آن برای sprint بعد مناسب است، اما شروع بی‌خبر نه.",
          ),
        },
        {
          t: L(
            "Pick the next unassigned item from the top of the backlog, tell the lead in the channel which one you took, and start.",
            "مورد بعدیِ تخصیص‌نیافته را از بالای backlog برمی‌دارید، در کانال به لید می‌گویید کدام را برداشته‌اید و شروع می‌کنید.",
          ),
          lv: 3,
          why: L(
            "This is what pull-based means at L3: you take the next piece yourself, and you say so, so the lead can correct you in one line. Work keeps moving without a daily manager.",
            "کار pull-based در L3 یعنی همین: خودتان کار بعدی را برمی‌دارید و اطلاع می‌دهید تا لید بتواند در صورت لزوم مسیر را اصلاح کند. کار بدون مدیریت روزانه جلو می‌رود.",
          ),
        },
        {
          t: L(
            "Wait until the lead is out of planning and ask what's next.",
            "صبر می‌کنید لید از جلسه‌ها بیرون بیاید و می‌پرسید بعدی چیست.",
          ),
          lv: 2,
          why: L(
            "Reasonable, and exactly what a newcomer should do. The cost is a half day of idle time on a team that's busy. At L3 the expectation shifts: you can see the backlog, so you can choose the next piece and let the lead veto.",
            "برای تازه‌وارد منطقی است، اما در تیم شلوغ ممکن است نیم‌روز منتظر بمانید. در L3 انتظار می‌رود با دیدن backlog، کار بعدی را انتخاب و اطلاع دهید تا لید در صورت لزوم مخالفت کند.",
          ),
        },
        {
          t: L(
            "Look at what is blocking the sprint goal, offer to help the person on the critical path, and tell the lead what you picked and why.",
            "نگاه می‌کنید چه چیزی جلوی هدف sprint را گرفته، به کسی که روی مسیر بحرانی است پیشنهاد کمک می‌دهید و به لید می‌گویید چه برداشتید و چرا.",
          ),
          lv: 4,
          why: L(
            "You're looking past your own tickets at what the whole project needs. That's the L4 shift: the unit of work stops being your task and becomes the project's goal.",
            "نیاز کل پروژه را می‌بینید، نه فقط ticketهای خودتان را. این تغییر نگاه L4 است: مبنای تصمیم، هدف پروژه است.",
          ),
        },
      ],
      takeaway: L(
        "L3 is pull-based: take the next piece yourself and say so. L4 starts from what the whole project needs.",
        "L3 مبتنی بر pull است: task بعدی را خودتان بردارید و اعلام کنید. L4 از نیاز کل پروژه شروع می‌کند.",
      ),
    },

    {
      id: "s-review",
      level: "L3",
      lenses: ["influence", "expertise"],
      title: L("The 1,200-line pull request", "PRِ 1200 خطی"),
      setup: L(
        "A teammate sends a 1,200-line pull request on Friday afternoon and asks for a review by Monday. In the first hundred lines you spot two design problems.",
        "یک هم‌تیمی جمعه بعدازظهر یک pull request با 1200 خط می‌فرستد و review تا دوشنبه می‌خواهد. در صد خط اول دو مشکل طراحی می‌بینید.",
      ),
      question: L(
        "How do you handle the review?",
        "review را چطور پیش می‌برید؟",
      ),
      options: [
        {
          t: L(
            "Rewrite the risky parts yourself over the weekend and push them to their branch.",
            "بخش‌های پرریسک را آخر هفته خودتان بازنویسی می‌کنید و روی branch او push می‌کنید.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "Generous, and it backfires: you take over their work without asking, they learn nothing, and the next PR will look the same. Reviewing is about helping the author get there, not getting there for them.",
            "کمک شما کار را جلو می‌برد، اما بدون هماهنگی مسئولیت را از نویسنده می‌گیرید و فرصت یادگیری را از او سلب می‌کنید. code review باید به نویسنده کمک کند کارش را اصلاح کند، نه این‌که کار را به‌جای او انجام دهید.",
          ),
        },
        {
          t: L(
            "Skim it, leave a couple of nitpicks and approve. It's too big to review properly, and the author is more senior than you.",
            "نگاه سریع می‌کنید، چند نکته‌ی کوچک می‌گذارید و approve می‌کنید. برای review درست خیلی بزرگ است و نویسنده از شما ارشدتر است.",
          ),
          lv: 2,
          why: L(
            "Understandable, and the review becomes a signature rather than a check. You saw two design problems; approving means the team inherits them. Seniority of the author doesn't change what you saw.",
            "قابل‌درک است و review به یک امضا تبدیل می‌شود، نه یک بررسی. دو مشکل طراحی دیدید. approve کردن یعنی تیم آن‌ها را به ارث می‌برد. ارشد بودن نویسنده چیزی را که دیدید عوض نمی‌کند.",
          ),
        },
        {
          t: L(
            "Review everything line by line and leave comments on all you notice, including the two design problems.",
            "همه‌چیز را خط‌به‌خط review می‌کنید و برای هر چه می‌بینید، از جمله دو مشکل طراحی، کامنت می‌گذارید.",
          ),
          lv: 3,
          why: L(
            "A thorough, honest review, which is what L3 delivers. The cost is that the author finds out about design problems after writing 1,200 lines, when they're most expensive to change.",
            "review کامل و صادقانه، مطابق انتظار L3 است. اما مشکل طراحی پس از نوشتن 1200 خط مطرح می‌شود، زمانی که اصلاح آن پرهزینه است.",
          ),
        },
        {
          t: L(
            "Message the author first: “I see two design issues, can we talk for 15 minutes before I review the rest?” Then review in chunks once the design is settled.",
            "اول به نویسنده پیام می‌دهید: «دو مشکل طراحی می‌بینم، می‌شود پیش از review بقیه پانزده دقیقه صحبت کنیم؟» و بعد از جا افتادن طراحی، تکه‌تکه review می‌کنید.",
          ),
          lv: 4,
          why: L(
            "You act on what you see before it gets more expensive, and you move the conversation to the cheapest moment. L4 looks at what the change does to the system and the team, not just at the diff.",
            "با دیدن ریسک، زود اقدام می‌کنید تا هزینه‌ی اصلاح بیشتر نشود. در L4، اثر تغییر بر سیستم و تیم مهم است، نه فقط diff.",
          ),
        },
      ],
      takeaway: L(
        "At L3 you give honest, useful review. At L4 you act early on what you see, when changing course is still cheap.",
        "در L3، review صادقانه و مفید ارائه می‌کنید. در L4، ریسک را زود مطرح می‌کنید تا تغییر مسیر هنوز کم‌هزینه باشد.",
      ),
    },

    {
      id: "s-csv",
      level: "L4",
      lenses: ["challenge"],
      title: L("The CSV export", "خروجی CSV"),
      setup: L(
        "Finance asks for a CSV of last month's orders, about once a quarter. You have two days. You could write a 40-line script, or build a configurable export framework you'd be proud of.",
        "مالی یک CSV از سفارش‌های ماه گذشته می‌خواهد، تقریبا هر فصل یک بار. دو روز وقت دارید. می‌توانید یک اسکریپت 40 خطی بنویسید یا یک فریم‌ورک export قابل‌پیکربندی بسازید که به آن افتخار کنید.",
      ),
      question: L("What do you build?", "چه می‌سازید؟"),
      options: [
        {
          t: L(
            "Build the configurable framework. Other teams will want exports someday.",
            "فریم‌ورک قابل‌پیکربندی را می‌سازید. روزی تیم‌های دیگر هم export می‌خواهند.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "A solution far bigger than the problem. It looks impressive and is expensive to maintain, for a need that happens four times a year. The ladder counts the complexity of the problem, not of the solution; here that is small.",
            "راه‌حل از مساله بزرگ‌تر است. ظاهر چشمگیری دارد، اما نگهداری آن برای نیازی که سالی چهار بار رخ می‌دهد پرهزینه است. معیار نردبان پیچیدگی مساله است و این مساله کوچک است.",
          ),
        },
        {
          t: L(
            "Write the script, run it, and hand over the file.",
            "اسکریپت را می‌نویسید، اجرا می‌کنید و فایل را تحویل می‌دهید.",
          ),
          lv: 3,
          why: L(
            "Right-sized, and honest work. What's missing is the rest of “done”: next quarter the same request comes back to you, and nobody else can run the script.",
            "راه‌حل متناسب است، اما تحویل کامل نیست. فصل بعد دوباره به شما نیاز خواهند داشت، چون فرد دیگری نمی‌تواند اسکریپت را اجرا کند.",
          ),
        },
        {
          t: L(
            "Write the script, commit it with a short README and a scheduled job, so finance gets the file every quarter without you.",
            "اسکریپت را می‌نویسید و با یک README کوتاه و یک job زمان‌بندی‌شده commit می‌کنید تا مالی هر فصل فایل را بدون شما بگیرد.",
          ),
          lv: 4,
          why: L(
            "Still small, and complete: the work is runnable by others and doesn't need you again. That's what end-to-end means at L4: everything that makes the work viable, in the right size.",
            "راه‌حل کوچک اما کامل است و دیگران می‌توانند بدون شما از آن استفاده کنند. end-to-end در L4 یعنی آماده کردن همه‌ی اجزای لازم در مقیاس مناسب.",
          ),
        },
        {
          t: L(
            "Ask what the export is for. Finance says it feeds a reconciliation that takes them two days by hand, so you propose a small reconciliation view instead of the export and size it with them.",
            "می‌پرسید export برای چیست. مالی می‌گوید فایل را برای تطبیق حساب‌ها (reconciliation) استفاده می‌کند؛ کاری که به‌صورت دستی دو روز طول می‌کشد. پس به‌جای export یک نمای کوچک reconciliation پیشنهاد می‌دهید و اندازه‌اش را با آن‌ها تعیین می‌کنید.",
          ),
          lv: 5,
          why: L(
            "You solve the problem behind the request. The simple answer here isn't the script; it's discovering what finance is actually trying to do. L5 defines the problem before choosing the solution.",
            "مساله‌ی پشت درخواست را حل می‌کنید. اینجا برای رسیدن به راه‌حل ساده، اول باید بفهمید تیم مالی واقعا به چه چیزی نیاز دارد. L5 پیش از انتخاب راه‌حل مساله را تعریف می‌کند.",
          ),
        },
      ],
      takeaway: L(
        "The complexity of the problem counts, not the solution. At L5 the simple move is to ask what the request is really a symptom of.",
        "معیار، پیچیدگی مساله است. در L5، گاهی ساده‌ترین اقدام پرسیدن نیاز واقعی پشت درخواست است.",
      ),
    },

    {
      id: "s-dependency",
      level: "L4",
      lenses: ["contribution", "influence"],
      title: L("The dependency that slipped", "وابستگی‌ای که عقب افتاد"),
      setup: L(
        "You own a three-month migration. In week nine, the platform team tells you their API will be four weeks late. Your launch date is tied to a marketing commitment.",
        "یک مهاجرت سه‌ماهه را own می‌کنید. هفته‌ی نهم تیم پلتفرم می‌گوید API‌شان چهار هفته دیر می‌رسد. تاریخ launch شما به یک تعهد بازاریابی گره خورده است.",
      ),
      question: L("What do you do?", "چه می‌کنید؟"),
      options: [
        {
          t: L(
            "Wait for the API, keep building what you can, and mention the delay at the next stand-up.",
            "منتظر API می‌مانید، هر چه می‌شود می‌سازید و تاخیر را در stand-up بعدی می‌گویید.",
          ),
          lv: 3,
          why: L(
            "Honest but passive: you report the problem instead of owning the plan. Fine at L3, where someone else owns the date; at L4 the date is yours.",
            "صادقانه اما منفعل است. فقط مشکل را گزارش می‌دهید. در L3 مسئول برنامه فرد دیگری است، اما در L4 مدیریت زمان‌بندی با شماست.",
          ),
        },
        {
          t: L(
            "Re-plan today: find what can ship without the API, stage the scope, and send stakeholders two options with dates and costs.",
            "همین امروز برنامه را دوباره می‌چینید: پیدا می‌کنید چه چیزی بدون API قابل‌تحویل است، scope را مرحله‌بندی می‌کنید و دو گزینه با تاریخ و هزینه برای ذی‌نفع‌ها می‌فرستید.",
          ),
          lv: 4,
          why: L(
            "You own the plan, not just the code. Within a day the people affected have options and a decision to make, which is what “end to end” means when a dependency moves.",
            "برنامه را own می‌کنید، نه فقط کد را. ظرف یک روز، ذی‌نفعان گزینه‌های روشن برای تصمیم‌گیری دارند. هنگام تاخیر وابستگی، end-to-end ownership یعنی همین.",
          ),
        },
        {
          t: L(
            "Re-plan today: identify what can ship without the API, stage the scope, and send stakeholders two options with dates and costs. Then work with the platform team to understand the delay and propose a way to track dependencies, so the next risk surfaces in week two.",
            "همین امروز برنامه را دوباره می‌چینید: مشخص می‌کنید چه چیزی بدون API قابل‌تحویل است، scope را مرحله‌بندی می‌کنید و دو گزینه با تاریخ و هزینه برای ذی‌نفعان می‌فرستید. سپس با تیم پلتفرم علت تاخیر را بررسی می‌کنید و روشی برای پیگیری وابستگی‌ها پیشنهاد می‌دهید تا دفعه‌ی بعد، خطر تاخیر همان هفته‌ی دوم مشخص شود.",
          ),
          lv: 5,
          why: L(
            "You fix the system that produced the surprise, not just this instance. L5 notices the pattern behind the problem and removes the cause, in a way that helps teams beyond your own.",
            "فرایندی را اصلاح می‌کنید که باعث غافلگیری شده است. L5 الگوی مشکل را شناسایی و علت آن را رفع می‌کند، با اثری فراتر از تیم خود.",
          ),
        },
        {
          t: L(
            "Quietly build a stand-in for their API so you don't depend on them.",
            "بی‌سروصدا یک جایگزین برای API آن‌ها می‌سازید تا به آن‌ها وابسته نباشید.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "A tempting hero move: it creates a duplicate system and a trust problem. Own the plan, not their code.",
            "اقدام قهرمانانه‌ی وسوسه‌انگیز، اما نتیجه‌اش سیستم تکراری و آسیب به اعتماد است. برنامه‌ی خود را own کنید و تغییر کار تیم دیگر را هماهنگ کنید.",
          ),
        },
      ],
      takeaway: L(
        "At L4 the date is yours to manage; at L5 you also fix the system that produced the surprise.",
        "در L4 زمان‌بندی را مدیریت می‌کنید. در L5 فرایندی را هم اصلاح می‌کنید که باعث تاخیر غافلگیرکننده شده است.",
      ),
    },

    {
      id: "s-2am",
      level: "L4",
      lenses: ["contribution", "expertise"],
      title: L("The 2 a.m. page", "page ساعت 2 بامداد"),
      setup: L(
        "You're on call. At 2 a.m. the checkout error rate jumps to 8%. Rolling back the afternoon's deploy would fix it in ten minutes, but you aren't sure the deploy caused it.",
        "شما on-call هستید. ساعت 2 بامداد نرخ خطای checkout ناگهان به 8% می‌رسد. برگرداندن deploy بعدازظهر در ده دقیقه درستش می‌کند، ولی مطمئن نیستید علت آن deploy بوده.",
      ),
      question: L("What do you do?", "چه می‌کنید؟"),
      options: [
        {
          t: L(
            "Dig into the code until you find the exact bug before touching anything. A rollback would hide the evidence.",
            "پیش از دست زدن به هر چیز، در کد می‌گردید تا باگ دقیق را پیدا کنید. rollback مدرک را پنهان می‌کند.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "Curiosity at the wrong moment. While you investigate, customers keep failing. Mitigate first, then learn: a rollback is reversible, cheap and leaves the logs you need.",
            "کنجکاوی در زمان نامناسب، در حالی که کاربران همچنان با خطا روبه‌رو هستند. ابتدا اثر مشکل را کاهش دهید و سپس بررسی کنید. rollback کم‌هزینه و برگشت‌پذیر است و لاگ‌ها باقی می‌مانند.",
          ),
        },
        {
          t: L(
            "Page the senior on call, follow the runbook, and do what they say.",
            "به ارشدِ on-call page می‌دهید، runbook را دنبال می‌کنید و هر چه می‌گوید انجام می‌دهید.",
          ),
          lv: 3,
          why: L(
            "A sound L3 instinct: you escalate fast and stay inside the process. It works. At L4 you're the one expected to make the call for your area and keep people informed while you do.",
            "غریزه‌ی درست L3: سریع escalate می‌کنید و درون فرایند می‌مانید. جواب می‌دهد. در L4 از شما انتظار می‌رود برای حوزه‌تان تصمیم بگیرید و در همان حال آدم‌ها را در جریان بگذارید.",
          ),
        },
        {
          t: L(
            "Roll back since it's reversible and cheap, post a status update in the incident channel as you go, and investigate once users are safe.",
            "rollback می‌کنید چون برگشت‌پذیر و ارزان است، در حین کار وضعیت را در کانال incident می‌نویسید و بعد از رفع اختلال برای کاربران، علت را بررسی می‌کنید.",
          ),
          lv: 4,
          why: L(
            "You own the incident for your area: stop the bleeding with a reversible step, communicate, and learn afterwards. That sequence is what “trusted to lead resolution” looks like.",
            "incident حوزه‌ی خود را own می‌کنید: با اقدامی برگشت‌پذیر، اثر مشکل را کاهش می‌دهید، اطلاع‌رسانی می‌کنید و سپس علت را بررسی می‌کنید. این همان قضاوت لازم برای هدایت رفع مشکل است.",
          ),
        },
        {
          t: L(
            "Roll back and communicate, then in the postmortem look at the last three incidents, find the pattern, and propose one fix that closes the class, with an owner and a date.",
            "rollback و اطلاع‌رسانی می‌کنید و بعد در postmortem سه incident اخیر را کنار هم می‌گذارید، الگو را پیدا می‌کنید و راه‌حلی برای پیشگیری از تکرار این نوع incident پیشنهاد می‌دهید، با مسئول و موعد مشخص.",
          ),
          lv: 5,
          why: L(
            "You go from fixing an incident to removing a class of incidents. L5 looks for the recurring cause and gets a fix prioritised with a name next to it.",
            "از رفع یک incident به پیشگیری از یک دسته‌ی incident می‌رسید. در L5، علت تکرارشونده را پیدا می‌کنید و راه‌حل آن را با مسئول مشخص در اولویت قرار می‌دهید.",
          ),
        },
      ],
      takeaway: L(
        "Stop the bleeding first, then learn. L4 owns the incident; L5 closes the class of incidents.",
        "ابتدا اثر مشکل را کاهش دهید، سپس علت را بررسی کنید. L4 رفع incident را own می‌کند و L5 علت یک دسته‌ی تکرارشونده را برطرف می‌کند.",
      ),
    },

    {
      id: "s-two-ways",
      level: "L4",
      lenses: ["challenge", "influence"],
      title: L("Two ways to build it", "دو راه برای ساختن"),
      setup: L(
        "You and another engineer disagree about a notification feature. You favour a queue with workers; they favour a simple scheduled job. The deadline is six weeks away and the discussion has gone round twice.",
        "شما و یک مهندس دیگر درباره‌ی یک قابلیت اعلان اختلاف دارید. شما صف با worker را ترجیح می‌دهید. او یک job زمان‌بندی‌شده‌ی ساده را. مهلت شش هفته‌ی دیگر است و بحث دو بار دور خودش چرخیده.",
      ),
      question: L("How do you move it forward?", "چطور جلو می‌برید؟"),
      options: [
        {
          t: L(
            "Build yours anyway. It's the better design, and the demo will prove it.",
            "همان طرح خودتان را می‌سازید. طراحی بهتری است و demo ثابتش می‌کند.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "Winning by fait accompli. Even if you're right, you've spent a teammate's trust and made the next disagreement harder. Decisions that stick are made in the open.",
            "با قرار دادن همکار در برابر عمل انجام‌شده، حتی اگر حق با شما باشد، به اعتماد همکارتان آسیب می‌زنید و اختلاف بعدی را دشوارتر می‌کنید. تصمیم پایدار به گفتگوی شفاف نیاز دارد.",
          ),
        },
        {
          t: L(
            "Ask the tech lead to decide between the two.",
            "از tech lead می‌خواهید بین این دو تصمیم بگیرد.",
          ),
          lv: 3,
          why: L(
            "Escalating is reasonable when a discussion is stuck, and it moves things. It hands away a decision you're well placed to frame yourself, and the lead decides without the criteria you two haven't agreed on.",
            "وقتی گفتگو به نتیجه نمی‌رسد، escalate کردن منطقی است. اما پیش از توافق بر معیارها، صورت‌بندی تصمیمی را به دیگری می‌سپارید که خودتان جزئیاتش را بهتر می‌شناسید.",
          ),
        },
        {
          t: L(
            "Write both options down with costs, risks and what you'd give up with each. Agree on the criteria first (volume, latency, operating cost), then decide in a short meeting.",
            "هزینه، ریسک و trade-off هر گزینه را بنویسید. ابتدا بر معیارها، مثل حجم، latency و هزینه‌ی عملیات، توافق کنید و سپس در جلسه‌ای کوتاه تصمیم بگیرید.",
          ),
          lv: 4,
          why: L(
            "You turn an argument about preferences into a decision about criteria. That's L4: comparing options with no obvious winner, choosing, and saying what you gave up.",
            "بحث سلیقه‌ای را به تصمیم بر اساس معیار تبدیل می‌کنید. در L4، گزینه‌ها را مقایسه می‌کنید و دلیل انتخاب و trade-offها را توضیح می‌دهید.",
          ),
        },
        {
          t: L(
            "Compare the scheduled job and queue on costs, risks and trade-offs, agree on criteria such as volume, latency and operating cost, and make a decision in a short meeting. Propose shipping the simple version behind an interface, with a documented volume threshold for switching to the queue.",
            "هزینه، ریسک و trade-offهای job زمان‌بندی‌شده و صف را مقایسه می‌کنید، بر معیارهایی مثل حجم، latency و هزینه‌ی عملیات توافق می‌کنید و در جلسه‌ای کوتاه تصمیم می‌گیرید. پیشنهاد می‌دهید نسخه‌ی ساده پشت یک interface تحویل شود و آستانه‌ی حجم کار برای تغییر به راه‌حل مبتنی بر صف را مستند می‌کنید.",
          ),
          lv: 5,
          why: L(
            "You make the decision cheap to reverse and name the trigger for reversing it, which dissolves most of the disagreement. L5 weighs short-term needs against long-term health and decides when to improve or rebuild.",
            "بازگشت از تصمیم را کم‌هزینه می‌کنید و شرط تغییر راه‌حل را مشخص می‌کنید. L5 نیاز کوتاه‌مدت را با سلامت بلندمدت می‌سنجد و زمان مناسب بهبود یا بازسازی را تشخیص می‌دهد.",
          ),
        },
      ],
      takeaway: L(
        "Turning a disagreement into criteria is L4. Making the decision cheap to reverse, with a named trigger, is L5.",
        "تصمیم بر اساس معیار، رفتار L4 است. تصمیم برگشت‌پذیر با شرط روشن تغییر مسیر، رفتار L5 است.",
      ),
    },

    {
      id: "s-onboarding",
      level: "L4",
      lenses: ["influence"],
      title: L("The new teammate", "هم‌تیمی تازه‌وارد"),
      setup: L(
        "A new engineer joins your team on Monday. Your manager says, “Could you help them get started?” and nothing more.",
        "یک مهندس تازه دوشنبه به تیم شما می‌پیوندد. مدیرتان می‌گوید: «می‌توانی کمکش کنی راه بیفتد؟» و بیشتر از این چیزی نمی‌گوید.",
      ),
      question: L(
        "What does “help them get started” turn into?",
        "برای کمک به جا افتادن همکار جدید چه می‌کنید؟",
      ),
      options: [
        {
          t: L(
            "Send them the wiki and tell them to ping you if they get stuck.",
            "ویکی را برایشان می‌فرستید و می‌گویید اگر گیر کردند به شما پیام بدهند.",
          ),
          lv: 2,
          why: L(
            "Kind and low-effort, and it puts the whole cost of asking on the newcomer, who doesn't yet know what to ask. Most people in their first weeks wait rather than interrupt.",
            "دوستانه است، اما مسئولیت شروع گفتگو را کاملا بر عهده‌ی تازه‌وارد می‌گذارد که هنوز نمی‌داند چه بپرسد. بسیاری در هفته‌های اول برای مزاحم نشدن منتظر می‌مانند.",
          ),
        },
        {
          t: L(
            "Be friendly and available, and answer their questions whenever they come.",
            "دوستانه و در دسترس هستید و هر وقت سوال داشتند جواب می‌دهید.",
          ),
          lv: 3,
          why: L(
            "A good teammate, which is what L3 offers. It's reactive: the newcomer's pace depends on how often they feel comfortable asking, and nobody has defined what “started” means.",
            "هم‌تیمی خوبی هستید، مطابق انتظار L3. اما کمک واکنشی است و سرعت پیشرفت تازه‌وارد به راحتی او در پرسیدن بستگی دارد. نتیجه‌ی مطلوب onboarding هم روشن نیست.",
          ),
        },
        {
          t: L(
            "Pick their first task with them, scoped to ship within two weeks. Introduce them to the neighbouring teams and review their first PRs promptly.",
            "اولین task را با خودشان انتخاب می‌کنید، در اندازه‌ای که ظرف دو هفته تحویل شود. آن‌ها را به تیم‌های همسایه معرفی می‌کنید و PRهای اولشان را سریع review می‌کنید.",
          ),
          lv: 4,
          why: L(
            "You turn a vague favour into a plan with a result: a real first task, the right introductions and fast feedback. That is mentoring at L4: walking someone through their first big task.",
            "درخواست مبهم را به برنامه‌ای با نتیجه تبدیل می‌کنید: اولین task واقعی، معرفی افراد مرتبط و بازخورد سریع. این mentoring در L4 است.",
          ),
        },
        {
          t: L(
            "Choose a first task with the new engineer that can ship within two weeks, introduce them to neighbouring teams, and review their first PRs promptly. Update the onboarding doc as they find gaps, and ask your manager to rotate onboarding duty so the next person starts faster and the responsibility is shared.",
            "با مهندس تازه‌وارد اولین task را طوری انتخاب می‌کنید که ظرف دو هفته قابل‌تحویل باشد، او را به تیم‌های همسایه معرفی می‌کنید و PRهای اولش را سریع review می‌کنید. هر جا در مستندات onboarding کمبودی پیدا کرد، آن را اصلاح می‌کنید و از مدیرتان می‌خواهید مسئولیت onboarding را به‌صورت نوبتی تقسیم کند تا نفر بعدی سریع‌تر راه بیفتد و این کار همیشه بر عهده‌ی شما نباشد.",
          ),
          lv: 5,
          why: L(
            "You standardise the thing and share the load. L5 simplifies and standardises to stop recurring problems, and onboarding that depends on one person is a recurring problem.",
            "کار را استاندارد و مسئولیت را تقسیم می‌کنید. L5 با ساده‌سازی و استانداردسازی، از مشکلات تکراری جلوگیری می‌کند، از جمله onboarding وابسته به یک نفر.",
          ),
        },
      ],
      takeaway: L(
        "Helping someone is L3. Turning it into a plan with a result is L4. Making it a system that doesn't depend on you is L5.",
        "کمک مستقیم، رفتار L3 است. برنامه‌ی دارای نتیجه‌ی روشن، L4 است. ایجاد فرایندی مستقل از حضور شما، L5 است.",
      ),
    },
  );
})();

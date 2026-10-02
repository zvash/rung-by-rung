/* Growth playbooks (one per step of the ladder) and the eight stall patterns.
   Evidence lines are illustrative: the numbers in them are made up on purpose. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;

  S.data.grow = {
    transitions: [

      /* ============================ L2 → L3 ============================ */
      { from: "L2", to: "L3",
        headline: L("From guided tasks to dependable delivery.", "از taskهای راهنمایی‌شده به تحویل قابل‌اتکا."),
        timeline: L("Aim to operate at {L3} within about six months and to be {L3} within a year at most. This step is about reliability, not brilliance: the same expectations, with less hand-holding and a faster pace.",
                    "هدف این است که ظرف حدود شش ماه در سطح {L3} عمل کنید و حداکثر ظرف یک سال به آن برسید. این گام درباره‌ی قابل‌اتکا بودن است، نه درخشان بودن: همان انتظارات، با راهنمایی کمتر و سرعت بیشتر."),
        start: [
          L("Estimate every task before you start, and say early, with a reason, when a date will slip.",
            "پیش از شروع هر task تخمین بزنید، و وقتی تاریخی عقب می‌افتد زود و با دلیل بگویید."),
          L("Finish tasks completely: tests, a short note in the docs, cleanup, and a PR description that says what and why.",
            "taskها را کامل تمام کنید: تست، یک یادداشت کوتاه در مستندات، مرتب‌کاری و توضیح PR که بگوید چه و چرا."),
          L("Ask for the “why” behind each task, so the next one needs less explaining.",
            "دلیلِ هر task را بپرسید تا task بعدی به توضیح کمتری نیاز داشته باشد."),
          L("Post a short status note in the team channel at least twice a week, before anyone asks.",
            "هفته‌ای دست‌کم دو بار یک یادداشت کوتاه از وضعیت کارتان در کانال تیم بگذارید، پیش از آن‌که کسی بپرسد.")
        ],
        stop: [
          L("Staying silently stuck for half a day when one specific question would unblock you.",
            "نیم روز بی‌صدا گیر کردن، در حالی که یک پرسش مشخص می‌تواند مانع را بردارد."),
          L("Treating a review comment as a verdict. Apply it, and make sure you don't get the same comment twice.",
            "برخورد با کامنت review مثل یک حکم. آن را اعمال کنید و مراقب باشید یک کامنت را دو بار نگیرید."),
          L("Starting the next task before the loose ends of the last one are closed.",
            "شروع task بعدی پیش از بستن سرِ باز task قبلی."),
          L("Measuring your pace against people two levels above you.",
            "سنجیدن سرعت خودتان با کسانی که دو سطح بالاترند.")
        ],
        moves: {
          contribution: [
            L("Take one task from ticket to production yourself, including the release and a check that it works for users.",
              "یک task را خودتان از ticket تا production ببرید، با release و بررسی این‌که برای کاربر کار می‌کند."),
            L("Keep a log of estimate versus actual for a month, then adjust how you estimate.",
              "یک ماه تخمین و واقعیت را ثبت کنید و بعد شیوه‌ی تخمین‌زدنتان را اصلاح کنید."),
            L("Ask your mentor to review your plan before you write code, not only the code afterwards.",
              "از mentor بخواهید برنامه‌تان را پیش از کدنویسی review کند، نه فقط کد را بعد از آن.")
          ],
          challenge: [
            L("When stuck, write down what you tried and what you expect, then ask in one clear message.",
              "وقتی گیر کردید، بنویسید چه امتحان کرده‌اید و چه انتظاری دارید، و بعد در یک پیام روشن بپرسید."),
            L("Reach for the team's standard tool or pattern first, and deviate only with a reason you can state.",
              "اول سراغ ابزار یا الگوی استاندارد تیم بروید و فقط با دلیلی که بتوانید بگویید از آن فاصله بگیرید."),
            L("Debug one real production issue alongside a senior colleague and write down what you learned.",
              "یک مشکل واقعی production را کنار یک همکار ارشد اشکال‌یابی کنید و آنچه یاد گرفتید بنویسید.")
          ],
          influence: [
            L("Give honest status early and in writing, even when the news is “I'm behind”.",
              "وضعیت را زود و مکتوب و صادقانه بدهید، حتی وقتی خبر این است که «عقب هستم»."),
            L("Leave review comments that teach something, not just “LGTM”.",
              "در review کامنت‌هایی بگذارید که چیزی یاد بدهد، نه فقط «LGTM»."),
            L("Meet one engineer on a neighbouring team and learn what they depend on from your work.",
              "با یک مهندس از تیم همسایه آشنا شوید و بفهمید به چه چیزی از کار شما وابسته است.")
          ],
          expertise: [
            L("Draw the architecture of your area from memory, then compare it with the real one.",
              "معماری حوزه‌تان را از حافظه بکشید و بعد با معماری واقعی مقایسه کنید."),
            L("Follow one user action all the way to the data store and back.",
              "یک اقدام کاربر را تا پایگاه داده و برگشت دنبال کنید."),
            L("Pick one tool (debugger, profiler, query planner) and learn it a little better than anyone else on the team.",
              "یک ابزار (debugger، profiler، query planner) را انتخاب کنید و کمی بهتر از بقیه‌ی تیم یادش بگیرید.")
          ]
        },
        evidence: [
          L("Delivered 12 tasks this quarter, each on estimate or flagged early; two small defects, both fixed within a day.",
            "این فصل 12 task تحویل داد، هرکدام طبق تخمین یا با هشدار زودهنگام؛ دو ایراد کوچک که هر دو ظرف یک روز رفع شد."),
          L("Raised the blocked dependency on day two and proposed a stub, so the sprint goal still held.",
            "وابستگی بلوکه‌شده را روز دوم گزارش داد و stub پیشنهاد کرد؛ پس هدف sprint حفظ شد."),
          L("Nobody had to ask for his status: the channel had it before the stand-up did.",
            "کسی لازم نبود وضعیتش را بپرسد: کانال پیش از stand-up خبر داشت."),
          L("Takes review feedback calmly and the same comment never came back twice.",
            "بازخورد review را آرام می‌گیرد و هیچ کامنتی دوباره برنگشت.")
        ],
        ask: [
          L("Which of my tasks last quarter would you call “{L3} quality”, and which not yet?",
            "کدام taskهای فصل گذشته‌ی من را «با کیفیت {L3}» می‌دانید و کدام را هنوز نه؟"),
          L("What would make you comfortable giving me a vaguer task next?",
            "چه چیزی باعث می‌شود با خیال راحت task مبهم‌تری به من بسپارید؟"),
          L("How will we both know, three months from now, that I'm operating at {L3}?",
            "چطور هر دو بفهمیم سه ماه دیگر در سطح {L3} عمل می‌کنم؟")
        ],
        pitfalls: [
          L("Mistaking speed for reliability: fast tasks that bounce back as rework build a reputation for rework.",
            "اشتباه گرفتن سرعت با قابل‌اتکا بودن: taskهای سریعی که به شکل دوباره‌کاری برمی‌گردند، اسم «دوباره‌کاری» را برای شما می‌سازند."),
          L("Waiting to be handed the next task. Pulling the next one yourself is what {L3} looks like.",
            "منتظر ماندن تا task بعدی را به شما بدهند. برداشتن task بعدی توسط خودتان شکل کار {L3} است."),
          L("Hiding a blocker to look capable. It comes out later as a slipped date, which costs more trust.",
            "پنهان کردن مانع برای توانا به نظر رسیدن. بعدا به شکل تاریخ از دست‌رفته بیرون می‌آید و اعتماد بیشتری می‌برد.")
        ]
      },

      /* ============================ L3 → L4 ============================ */
      { from: "L3", to: "L4",
        headline: L("From delivering tasks to owning outcomes.", "از تحویل taskها به own کردن نتیجه."),
        timeline: L("{L4} is the level the ladder expects of everyone over time. Rough guide: one to two years, mostly set by when you first own a multi-month project. Crowd-sourced figures for one large employer say about two years between the first two levels (reported, not official).",
                    "{L4} سطحی است که نردبان در طول زمان از همه انتظار دارد. اندازه‌ی سرانگشتی: یک تا دو سال، که بیشتر به این بستگی دارد که کِی اولین پروژه‌ی چندماهه را own کنید. اعداد جمع‌سپاری‌شده برای یک شرکت بزرگ حدود دو سال میان دو سطح اول می‌گویند (گزارش‌شده، نه رسمی)."),
        start: [
          L("Break the project into milestones with dates, and re-plan the same day a dependency slips.",
            "پروژه را به milestoneهایی با تاریخ بشکنید و همان روزی که یک وابستگی عقب می‌افتد برنامه را دوباره بچینید."),
          L("Ship the whole thing: tests, docs, dashboards, alerts and a support guide.",
            "کار را کامل تحویل بدهید: تست، مستندات، داشبورد، alert و راهنمای پشتیبانی."),
          L("Talk to the product manager and neighbouring teams yourself, before they come asking.",
            "خودتان با مدیر محصول و تیم‌های همسایه صحبت کنید، پیش از آن‌که سراغتان بیایند."),
          L("Write down the options you compared and why you chose one.",
            "گزینه‌هایی را که مقایسه کردید و دلیل انتخاب یکی را بنویسید.")
        ],
        stop: [
          L("Waiting for someone to hand you the next piece of the project.",
            "منتظر ماندن تا کسی تکه‌ی بعدی پروژه را به شما بدهد."),
          L("Treating “my code is merged” as “done”.",
            "«کدم merge شد» را «تمام شد» حساب کردن."),
          L("Raising a risk at the stand-up after you already knew about it for days.",
            "مطرح کردن ریسک در stand-up، بعد از چند روزی که خودتان از آن خبر داشتید."),
          L("Optimising your own ticket without checking what it changes upstream and downstream.",
            "بهینه کردن ticket خودتان بدون بررسی این‌که روی upstream و downstream چه اثری دارد.")
        ],
        moves: {
          contribution: [
            L("Volunteer to own a project of two to three months with a real date, and say in writing that you own it.",
              "برای own کردن پروژه‌ای دو تا سه‌ماهه با تاریخ واقعی داوطلب شوید و مکتوب بگویید که شما own می‌کنید."),
            L("Make an end-to-end checklist (docs, monitoring, alerts, support guide, test environment) and use it on this project.",
              "یک چک‌لیست end-to-end بسازید (مستندات، monitoring، alert، راهنمای پشتیبانی، محیط تست) و روی همین پروژه به کار ببرید."),
            L("Hold a 15-minute weekly check-in with your stakeholders and send a written summary.",
              "هفته‌ای یک جلسه‌ی 15 دقیقه‌ای با ذی‌نفع‌ها بگذارید و خلاصه‌ی مکتوب بفرستید.")
          ],
          challenge: [
            L("For your next design, write two alternatives and what you give up with the one you pick.",
              "برای طراحی بعدی‌تان دو جایگزین بنویسید و این‌که با انتخاب یکی از چه چیزی می‌گذرید."),
            L("Look one hop upstream and one downstream of your change and write what could break.",
              "یک گام upstream و یک گام downstream تغییرتان را ببینید و بنویسید چه چیزی ممکن است خراب شود."),
            L("When the edges of a problem are unclear, spend a day defining it before you build anything.",
              "وقتی مرزهای یک مساله روشن نیست، یک روز را به تعریف کردنش بدهید و بعد بسازید.")
          ],
          influence: [
            L("Walk a newer teammate through their first big task.",
              "یک هم‌تیمی تازه‌کارتر را در اولین task بزرگش همراهی کنید."),
            L("Raise one friction with a neighbouring team directly, with a concrete proposal.",
              "یک اصطکاک با تیم همسایه را مستقیم و با یک پیشنهاد مشخص مطرح کنید."),
            L("Write down the project's dependencies and tell each owner what you need and by when.",
              "وابستگی‌های پروژه را بنویسید و به صاحب هرکدام بگویید چه لازم دارید و تا کِی.")
          ],
          expertise: [
            L("Build one skill beyond everyday coding that your team relies on: security, data analysis, production health or test strategy.",
              "یک مهارت فراتر از کدنویسی روزمره بسازید که تیم به آن تکیه دارد: امنیت، تحلیل داده، سلامت production یا استراتژی تست."),
            L("Learn which business number your project is supposed to move, and check it after launch.",
              "بفهمید پروژه‌تان قرار است کدام عدد کسب‌وکار را جابه‌جا کند و بعد از launch آن را بررسی کنید."),
            L("Study the systems you depend on, not only the one you own.",
              "سیستم‌هایی را که به آن‌ها وابسته‌اید بشناسید، نه فقط سیستمی که own می‌کنید.")
          ]
        },
        evidence: [
          L("Planned and delivered a 10-week migration across two teams; re-cut scope in week 7 when an API slipped and still launched on the committed date.",
            "یک مهاجرت 10 هفته‌ای میان دو تیم را برنامه‌ریزی و تحویل داد؛ هفته‌ی هفتم که یک API عقب افتاد scope را دوباره برید و باز هم در تاریخ تعهدشده launch کرد."),
          L("Launched with dashboards, an on-call runbook and a support briefing, so launch week had no escalations to the original developers.",
            "با داشبورد، runbook برای on-call و جلسه‌ی توجیهی پشتیبانی launch کرد؛ پس هفته‌ی launch هیچ escalationی به توسعه‌دهنده‌های اصلی نرسید."),
          L("Compared three queueing options in writing, chose the simplest that met the latency target, and documented what the team gave up.",
            "سه گزینه‌ی صف را مکتوب مقایسه کرد، ساده‌ترینی را که هدف latency را برآورده می‌کرد برگزید و آنچه تیم از آن گذشت را ثبت کرد."),
          L("Two newer engineers shipped independently within a month of her first-project walk-through.",
            "دو مهندس تازه‌کارتر ظرف یک ماه بعد از راهنمایی او در اولین پروژه‌شان، مستقل کد تحویل دادند.")
        ],
        ask: [
          L("Which project in the next two quarters could be mine end to end, and what would “done” include?",
            "کدام پروژه در دو فصل آینده می‌تواند end-to-end از آنِ من باشد و «تمام شدن» شامل چه چیزهایی است؟"),
          L("Where did my last project feel like a set of tasks to you, rather than ownership?",
            "کجای پروژه‌ی آخرم برای شما بیشتر شبیه مجموعه‌ای از taskها بود تا ownership؟"),
          L("Who outside the team should hear from me regularly, and who will tell me if I'm leaving something out?",
            "چه کسانی بیرون از تیم باید مرتب از من خبر بگیرند، و چه کسی به من می‌گوید اگر چیزی را جا انداخته‌ام؟")
        ],
        pitfalls: [
          L("Reading “owning” as “keeping others out”. Owners see the work through, they don't gatekeep it.",
            "خواندن «own کردن» به‌عنوان «دیگران را بیرون نگه داشتن». صاحب کار آن را تا آخر می‌برد، نه این‌که دروازه‌بانی کند."),
          L("Delivering more tasks instead of a bigger shape of work. Volume doesn't change the kind of work you do.",
            "تحویل taskهای بیشتر به‌جای شکلِ بزرگ‌تری از کار. حجم، نوع کار شما را عوض نمی‌کند."),
          L("Doing the stakeholder work invisibly, so nobody outside the team can say what you owned.",
            "انجام کار با ذی‌نفع‌ها به شکل نامرئی، طوری که هیچ‌کس بیرون از تیم نتواند بگوید شما چه چیزی را own کرده‌اید.")
        ]
      },

      /* ============================ L4 → L5 ============================ */
      { from: "L4", to: "L5",
        headline: L("From owning projects to shaping an area.", "از own کردن پروژه‌ها به شکل دادن یک حوزه."),
        timeline: L("Often the longest step in practice. Public estimates run from about two years on a clean path to four or five when a cycle is missed, but they are crowd-sourced and weak. What really sets the pace is when you start working on area-sized problems. Many strong engineers stay at {L4} or {L5} by choice.",
                    "در عمل اغلب طولانی‌ترین گام است. برآوردهای عمومی از حدود دو سال در مسیر هموار تا چهار پنج سال وقتی یک دوره از دست برود می‌رسد، ولی جمع‌سپاری‌شده و ضعیف‌اند. آنچه واقعا سرعت را تعیین می‌کند این است که کِی روی مساله‌هایی در اندازه‌ی یک حوزه کار را شروع کنید. بسیاری از مهندس‌های قوی با انتخاب خودشان در {L4} یا {L5} می‌مانند."),
        start: [
          L("Define the problem before the solution: what is in scope, what isn't, and what “good” means in a number.",
            "مساله را پیش از راه‌حل تعریف کنید: چه چیزی در scope است، چه چیزی نیست، و «خوب» به عدد یعنی چه."),
          L("Set direction for two or three engineers: what you build, in what order and why.",
            "برای دو سه مهندس جهت تعیین کنید: چه می‌سازید، به چه ترتیب و چرا."),
          L("Be the inner PM: make product trade-offs yourself, using what you know about users and the business.",
            "«PM درونی» باشید: trade-offهای محصولی را خودتان با تکیه بر شناخت‌تان از کاربر و کسب‌وکار تصمیم بگیرید."),
          L("Behind every incident, look for the recurring cause and remove it.",
            "پشت هر incident دنبال علت تکرارشونده بگردید و آن را بردارید.")
        ],
        stop: [
          L("Solving only the problem that is in front of you.",
            "حل کردن فقط مساله‌ای که جلوی چشمتان است."),
          L("Being the only person who can do the hard parts.",
            "تنها کسی بودن که بخش‌های سخت را می‌تواند انجام بدهد."),
          L("Letting “senior” mean “fastest coder on the team”.",
            "گذاشتن «ارشد» به معنای «سریع‌ترین کدنویس تیم»."),
          L("Waiting for the roadmap to contain a big problem. Go and find one.",
            "منتظر ماندن تا نقشه‌ی راه یک مساله‌ی بزرگ داشته باشد. بروید و یکی پیدا کنید.")
        ],
        moves: {
          contribution: [
            L("Take one ambiguous problem and write a one-page “what we will and won't do” before any code.",
              "یک مساله‌ی مبهم بردارید و پیش از هر کدی یک صفحه بنویسید: «چه می‌کنیم و چه نمی‌کنیم»."),
            L("Hand a real piece of your project to someone else, with a clear outcome, and make them successful.",
              "یک تکه‌ی واقعی از پروژه‌تان را با خروجی روشن به کسی بسپارید و او را موفق کنید."),
            L("Measure the result of your last launch (adoption, reliability or cost) and report it to the wider organisation, not only your team.",
              "نتیجه‌ی آخرین launchتان را اندازه بگیرید (میزان استفاده، اتکاپذیری یا هزینه) و به کل سازمان گزارش بدهید، نه فقط تیم خودتان.")
          ],
          challenge: [
            L("Choose a problem with no clear best answer: research the options, write the design, and own it past launch.",
              "مساله‌ای را انتخاب کنید که پاسخ بهتر روشنی ندارد: گزینه‌ها را بررسی کنید، طراحی بنویسید و تا بعد از launch own کنید."),
            L("Find a recurring problem (the same incident, the same migration pain) and remove its cause.",
              "یک مساله‌ی تکرارشونده پیدا کنید (همان incident، همان درد مهاجرت) و علتش را بردارید."),
            L("Simplify one existing solution, or standardise two that compete.",
              "یک راه‌حل موجود را ساده کنید، یا دو راه‌حل رقیب را استاندارد کنید.")
          ],
          influence: [
            L("Become the contact point for a group of stakeholders and share context before they ask.",
              "نقطه‌ی تماس یک گروه از ذی‌نفع‌ها شوید و context را پیش از پرسیدنشان بدهید."),
            L("Align your team and one other team on a single direction, in writing.",
              "تیم خودتان و یک تیم دیگر را مکتوب روی یک جهت همسو کنید."),
            L("Spot a disagreement between teams early and bring both sides to one shared decision.",
              "اختلاف میان تیم‌ها را زود ببینید و هر دو طرف را به یک تصمیم مشترک برسانید.")
          ],
          expertise: [
            L("Decide which senior you are building: the deep authority on one area, or the generalist with range. Make it visible.",
              "تصمیم بگیرید کدام ارشد را می‌سازید: مرجع عمیق یک حوزه یا generalist با دامنه‌ی گسترده. آن را قابل‌دیدن کنید."),
            L("Learn the business side of your area well enough that a PM rarely has to decide for you.",
              "جنبه‌ی کسب‌وکاری حوزه‌تان را آن‌قدر یاد بگیرید که کمتر پیش بیاید PM به‌جای شما تصمیم بگیرد."),
            L("Write down which short-term compromises in your systems are safe and which will cost you later.",
              "بنویسید کدام مصالحه‌های کوتاه‌مدت در سیستم‌هایتان بی‌خطر است و کدام بعدا گران تمام می‌شود.")
          ]
        },
        evidence: [
          L("Scoped the payment-retry area: cut three proposed features, owned the remaining plan for four quarters, and failed payments dropped by a third.",
            "حوزه‌ی retry پرداخت را scope کرد: سه قابلیت پیشنهادی را حذف کرد، برنامه‌ی باقی‌مانده را چهار فصل own کرد و پرداخت‌های ناموفق یک‌سوم کم شد."),
          L("Set direction for three engineers on a six-month project; two of them now lead pieces of the next one.",
            "در یک پروژه‌ی شش‌ماهه برای سه مهندس جهت تعیین کرد؛ دو نفرشان حالا بخش‌هایی از پروژه‌ی بعدی را رهبری می‌کنند."),
          L("Traced three launch delays to one cause, introduced contract-first APIs, and four teams use the practice now.",
            "ریشه‌ی سه تاخیر launch را به یک علت رساند، API contract-first را معرفی کرد و حالا چهار تیم از آن استفاده می‌کنند."),
          L("Product managers rarely decide for her in this area; they ask her to propose the trade-off.",
            "مدیران محصول در این حوزه کمتر به‌جای او تصمیم می‌گیرند؛ از او می‌خواهند trade-off را پیشنهاد بدهد.")
        ],
        ask: [
          L("Which area could I own for the next three quarters, and what would success look like in numbers?",
            "کدام حوزه را می‌توانم سه فصل آینده own کنم و موفقیت به عدد چه شکلی است؟"),
          L("Who are the two or three engineers I could set direction for, and does the team know it?",
            "دو سه مهندسی که می‌توانم برایشان جهت تعیین کنم چه کسانی هستند، و تیم از این خبر دارد؟"),
          L("For {L5}, which evidence is thinnest in my case: influence beyond the team, or outcomes in numbers?",
            "برای {L5} در مورد من کدام مدرک کم‌رنگ‌تر است: قدرت نفوذ فراتر از تیم، یا نتیجه به عدد؟")
        ],
        pitfalls: [
          L("Scope without impact: a big area with no measured result reads as busy, not senior.",
            "scope بدون اثرگذاری: حوزه‌ی بزرگ بدون نتیجه‌ی اندازه‌گرفته‌شده، «پرمشغله» خوانده می‌شود، نه «ارشد»."),
          L("Staying the best individual coder. At this step your leverage comes from other people's progress as well as your own.",
            "ماندن در نقش بهترین کدنویس فردی. در این گام اهرم شما هم از پیشرفت خودتان می‌آید و هم از پیشرفت دیگران."),
          L("Depth with no inner PM: the right answer to the wrong question.",
            "عمق بدون «PM درونی»: پاسخ درست به پرسش غلط.")
        ]
      },

      /* ============================ L5 → L6 ============================ */
      { from: "L5", to: "L6",
        headline: L("From owning an area to steering a strategy across teams.", "از own کردن یک حوزه به هدایت یک استراتژی میان تیم‌ها."),
        timeline: L("Widely described as the biggest jump on the ladder. Crowd-sourced estimates say three to five years or more at the senior level, and many people never make it (reported, no official data). It often takes more than one review cycle, and it depends on actionable feedback and advocates beyond your own manager.",
                    "به‌طور گسترده بزرگ‌ترین پرش نردبان خوانده می‌شود. برآوردهای جمع‌سپاری‌شده سه تا پنج سال یا بیشتر در سطح ارشد می‌گویند و بسیاری هرگز به آن نمی‌رسند (گزارش‌شده، بدون داده‌ی رسمی). اغلب بیش از یک چرخه‌ی ارزیابی طول می‌کشد و به بازخورد عملی و حامیانی بیرون از مدیر مستقیمتان بستگی دارد."),
        start: [
          L("Help decide which problems the organisation works on at all, and write down why.",
            "در این‌که سازمان اصلا روی چه مساله‌هایی کار کند نقش داشته باشید و دلیلش را بنویسید."),
          L("Lead across groups whose priorities compete, and steer toward what is best for the organisation.",
            "میان گروه‌هایی که اولویت‌هایشان رقابت دارد رهبری کنید و به سمت نفع سازمان هدایت کنید."),
          L("Raise other people's level: mentor seniors, sponsor someone for stretch work, delegate on purpose.",
            "سطح دیگران را بالا ببرید: مهندس‌های ارشد را mentor کنید، کسی را برای کار چالشی حمایت کنید، عمدا واگذار کنید."),
          L("Write strategy others can reuse: one or two pages of decisions, trade-offs and what you are not doing.",
            "استراتژی‌ای بنویسید که دیگران بتوانند به کار ببرند: یکی دو صفحه تصمیم‌ها، trade-offها و آنچه نمی‌کنید.")
        ],
        stop: [
          L("Being the hero who takes the hardest work personally. Your job is to make the work doable for many.",
            "قهرمانی که سخت‌ترین کار را خودش برمی‌دارد. کار شما این است که کار را برای تعداد زیادی قابل‌انجام کنید."),
          L("Defending your team's priority when the organisation's priority is different.",
            "دفاع از اولویت تیم خودتان وقتی اولویت سازمان چیز دیگری است."),
          L("Measuring yourself by output. Judge yourself by what the people around you shipped.",
            "سنجیدن خودتان با حجم تولید. خودتان را با آنچه آدم‌های اطرافتان تحویل دادند بسنجید."),
          L("Waiting for permission to work across team boundaries.",
            "منتظر ماندن برای اجازه‌ی کار روی مرز تیم‌ها.")
        ],
        moves: {
          contribution: [
            L("Take a problem with a year-long horizon and write a plan with milestones that other teams can commit to.",
              "مساله‌ای با افق یک‌ساله بردارید و برنامه‌ای با milestoneهایی بنویسید که تیم‌های دیگر بتوانند به آن متعهد شوند."),
            L("Decide when to invest in something new and when to improve step by step, and record the decision and its reasons.",
              "تصمیم بگیرید کِی سرمایه‌گذاری تازه کنید و کِی قدم‌به‌قدم بهبود بدهید، و تصمیم و دلیل‌هایش را ثبت کنید."),
            L("Stop or reshape a project, for reasons others accept, and say so openly.",
              "پروژه‌ای را با دلیل‌هایی که دیگران می‌پذیرند متوقف یا بازتعریف کنید و علنی بگویید.")
          ],
          challenge: [
            L("Take a problem even senior leaders can't define yet and turn it into a plan several teams can run.",
              "مساله‌ای را که حتی رهبران ارشد هنوز نمی‌توانند تعریف کنند بردارید و به برنامه‌ای تبدیل کنید که چند تیم بتوانند اجرا کنند."),
            L("Reduce complexity on purpose: pick one reliability, performance or security area and prevent a whole class of problems.",
              "پیچیدگی را عمدا کم کنید: یک حوزه‌ی اتکاپذیری، کارایی یا امنیت را انتخاب کنید و جلوی یک دسته‌ی کامل از مشکل‌ها را بگیرید."),
            L("Find the area of work that will matter in six to twelve months, and make the case before anyone asks.",
              "زمینه‌ای را پیدا کنید که شش تا دوازده ماه دیگر مهم می‌شود و پیش از پرسیدن کسی دلیلش را بیاورید.")
          ],
          influence: [
            L("Build a group of ten or more across teams around one direction, with a regular forum.",
              "گروهی از ده نفر یا بیشتر را از تیم‌های مختلف حول یک جهت بسازید، با یک نشست منظم."),
            L("Mediate between two groups with competing priorities and write down the shared outcome.",
              "میان دو گروه با اولویت‌های رقیب میانجی‌گری کنید و نتیجه‌ی مشترک را بنویسید."),
            L("Mentor a senior engineer and sponsor someone for a stretch assignment.",
              "یک مهندس ارشد را mentor کنید و کسی را برای یک پروژه‌ی چالشی (stretch) حمایت کنید.")
          ],
          expertise: [
            L("Be the go-to person in your specialty, and learn neighbouring systems well enough to advise outside it.",
              "در تخصص‌تان مرجع باشید و سیستم‌های همسایه را آن‌قدر یاد بگیرید که بیرون از آن هم مشورت بدهید."),
            L("Learn the architecture of the whole product area, and steer teams away from building duplicate systems.",
              "معماری کل حوزه‌ی محصولی را بشناسید و تیم‌ها را از ساختن سیستم‌های تکراری دور کنید."),
            L("Learn what your area costs and earns, so your recommendations speak the language of the business.",
              "بفهمید حوزه‌تان چه هزینه‌ای دارد و چه درآمدی می‌آورد تا پیشنهادهایتان به زبان کسب‌وکار باشد.")
          ]
        },
        evidence: [
          L("Set the 12-month reliability strategy for five teams; one class of incidents fell by half and two teams retired duplicate systems.",
            "استراتژی اتکاپذیری 12 ماهه را برای پنج تیم تعیین کرد؛ یک دسته از incidentها نصف شد و دو تیم سیستم‌های تکراری را کنار گذاشتند."),
          L("Mediated between the platform and product groups: three launches protected, two deferred, and both directors agreed.",
            "میان گروه‌های پلتفرم و محصول میانجی‌گری کرد: سه launch محافظت شد، دو تا عقب رفت و هر دو مدیر موافقت کردند."),
          L("Two engineers she mentored were promoted to {L5}, and her design-review guide is now used across the organisation.",
            "دو مهندسی که mentor کرد به {L5} ارتقا پیدا کردند و راهنمای design review او حالا در کل سازمان استفاده می‌شود."),
          L("A project he proposed with no mandate became a top-three priority and shipped within the year.",
            "پروژه‌ای که بدون مأموریت پیشنهاد داد یکی از سه اولویت اول شد و ظرف یک سال تحویل شد.")
        ],
        ask: [
          L("Which large problem could I lead where even you can't yet see the solution?",
            "کدام مساله‌ی بزرگ را می‌توانم رهبری کنم که حتی شما هنوز راه‌حلش را نمی‌بینید؟"),
          L("Who beyond my team would speak to my impact, and what can I do for them first?",
            "چه کسانی بیرون از تیم من می‌توانند درباره‌ی اثرگذاری‌ام صحبت کنند، و اول چه کاری برایشان بکنم؟"),
          L("For {L6}, what would the committee need that I can't produce inside my current team's scope?",
            "برای {L6}، کمیته چه چیزی لازم دارد که من در scope فعلی تیم‌ام نمی‌توانم تولیدش کنم؟")
        ],
        pitfalls: [
          L("Next-level work with no sponsor: nobody senior sees it, so nobody can quote it.",
            "کار سطح بعد بدون حامی: هیچ ارشدی آن را نمی‌بیند، پس کسی نمی‌تواند نقلش کند."),
          L("Trying to be {L5} harder, with more output, instead of doing different work.",
            "تلاش برای «{L5} بیشتر بودن» با خروجی بیشتر، به‌جای انجام کاری متفاوت."),
          L("A strategy document with no follow-through: pages written, but nothing changed in what teams do.",
            "سند استراتژی بدون پیگیری: صفحه‌ها نوشته شد ولی چیزی در کار تیم‌ها عوض نشد.")
        ]
      },

      /* ============================ L6 → L7 ============================ */
      { from: "L6", to: "L7",
        headline: L("From steering strategy to anchoring a technical area for the company.", "از هدایت استراتژی به مرجع بودن در یک حوزه‌ی فنی برای کل شرکت."),
        timeline: L("Very rare, and usually bespoke. There is no credible public data on time in level. Published ladders describe the top technical level as tied to a company-critical specialism and a horizon of several years, and say it is not automatic.",
                    "بسیار نادر و معمولا موردی است. داده‌ی عمومی معتبری درباره‌ی مدت ماندن در سطح وجود ندارد. نردبان‌های منتشرشده بالاترین سطح فنی را وابسته به یک تخصص حیاتی برای شرکت و افقی چندساله توصیف می‌کنند و می‌گویند خودکار نیست."),
        start: [
          L("Take accountability for a technical area the company's strategy depends on.",
            "پاسخگویی یک حوزه‌ی فنی را که استراتژی شرکت به آن وابسته است بپذیرید."),
          L("Be the person who answers the hard questions about it, from other teams and from leadership.",
            "کسی باشید که به پرسش‌های سخت درباره‌ی آن جواب می‌دهد، از تیم‌های دیگر و از رهبری."),
          L("Grow people and practices that keep working after you step away.",
            "آدم‌ها و رویه‌هایی را رشد بدهید که بعد از کنار رفتن شما هم کار کنند."),
          L("Spot large-scale problems worth solving and cut them into projects, some for your teams and some for others.",
            "مساله‌های بزرگ‌مقیاسِ ارزشمند را شناسایی کنید و به پروژه‌هایی بشکنید، بعضی برای تیم‌های خودتان و بعضی برای دیگران.")
        ],
        stop: [
          L("Being the bottleneck on every decision in your area.",
            "گلوگاه همه‌ی تصمیم‌های حوزه‌تان بودن."),
          L("Relying on personal relationships where a mechanism would last longer.",
            "تکیه بر روابط شخصی در جایی که یک سازوکار ماندگارتر است."),
          L("Doing work that a strong {L6} could do, because you're faster.",
            "انجام کاری که یک {L6} قوی می‌تواند انجام بدهد، فقط چون شما سریع‌ترید."),
          L("Treating the title as the goal. At this altitude the area has to need you.",
            "عنوان را هدف گرفتن. در این ارتفاع، حوزه باید به شما نیاز داشته باشد.")
        ],
        moves: {
          contribution: [
            L("Run several large efforts at once, and make each one succeed without you in every meeting.",
              "چند تلاش بزرگ را هم‌زمان جلو ببرید و هر کدام را بدون حضور شما در همه‌ی جلسه‌ها موفق کنید."),
            L("Find and remove what slows delivery across many teams, so quality holds as the organisation grows.",
              "آنچه سرعت تحویل را در تیم‌های زیاد کم می‌کند پیدا و برطرف کنید تا با بزرگ‌تر شدن سازمان کیفیت حفظ شود."),
            L("Look after the most sensitive, complex systems, and stay answerable for how they turn out.",
              "از حساس‌ترین و پیچیده‌ترین سیستم‌ها مراقبت کنید و پاسخگوی نتیجه‌شان بمانید.")
          ],
          challenge: [
            L("Work on problems that need new ideas, not just patterns the industry already knows.",
              "روی مساله‌هایی کار کنید که ایده‌ی تازه می‌خواهند، نه فقط الگوهایی که صنعت از قبل می‌شناسد."),
            L("Break one company-scale problem into projects for different teams, and hand them off with clear outcomes.",
              "یک مساله‌ی هم‌مقیاس شرکت را به پروژه‌هایی برای تیم‌های مختلف بشکنید و با خروجی روشن واگذار کنید."),
            L("Plan across several years and many systems, and say what you'd decide differently if the plan fails.",
              "چند سال و چند سیستم را با هم برنامه‌ریزی کنید و بگویید اگر برنامه شکست بخورد چه چیزی را متفاوت تصمیم می‌گیرید.")
          ],
          influence: [
            L("Align cross-functional leaders on goals, strategy and priorities.",
              "رهبران cross-functional را روی اهداف، استراتژی و اولویت‌ها همسو کنید."),
            L("When teams hold opposed views, state each side so well that both recognise it, then help them reach consensus.",
              "وقتی تیم‌ها نظرهای متضاد دارند، موضع هر طرف را آن‌قدر خوب بیان کنید که هر دو خودشان را در آن ببینند و بعد به اجماع برسانید."),
            L("Grow the people and practices so others can carry the work on without you.",
              "آدم‌ها و رویه‌ها را رشد بدهید تا دیگران بتوانند کار را بدون شما ادامه بدهند.")
          ],
          expertise: [
            L("Hold broad and deep knowledge of systems, technologies and processes, and be the recognised authority of a major system.",
              "دانش عمیق و گسترده از سیستم‌ها، تکنولوژی‌ها و فرایندها داشته باشید و مرجع شناخته‌شده‌ی یک سیستم عمده باشید."),
            L("Understand the product and its users across a whole area, well enough that leaders rely on your view.",
              "محصول و کاربرانش را در کل یک حوزه آن‌قدر خوب بشناسید که رهبران به نظرتان تکیه کنند."),
            L("Mentor staff-plus engineers and leaders, not only seniors.",
              "نه فقط مهندس‌های ارشد، بلکه مهندس‌های staff به بالا و رهبران را هم mentor کنید.")
          ]
        },
        evidence: [
          L("Because of the data platform she anchored, three product areas now run experiments they couldn't run two years ago.",
            "به‌خاطر پلتفرم داده‌ای که او پایه‌گذاری کرد، سه حوزه‌ی محصولی حالا آزمایش‌هایی انجام می‌دهند که دو سال پیش نمی‌توانستند."),
          L("Engineers from four organisations bring architecture disputes to him, and both sides leave feeling heard.",
            "مهندس‌هایی از چهار سازمان اختلاف‌های معماری را پیش او می‌آورند و هر دو طرف با احساس شنیده شدن برمی‌گردند."),
          L("The reliability practices she introduced kept running and improving a year after she moved to a new area.",
            "رویه‌های اتکاپذیری که او معرفی کرد یک سال بعد از رفتنش به حوزه‌ی دیگر هم ادامه یافتند و بهتر شدند."),
          L("Leadership asks for his view before committing to technical bets that span several years.",
            "رهبری پیش از تعهد به شرط‌بندی‌های فنی چندساله نظر او را می‌پرسد.")
        ],
        ask: [
          L("Which technical area does the company's strategy depend on that doesn't yet have a clear anchor?",
            "استراتژی شرکت به کدام حوزه‌ی فنی وابسته است که هنوز مرجع روشنی ندارد؟"),
          L("What would have to be true for several efforts to succeed without me present in each?",
            "چه چیزی باید درست باشد تا چند تلاش بدون حضور من در هرکدام موفق شوند؟"),
          L("Who are the leaders I should be building trust with, and what do they need to see?",
            "با چه رهبرانی باید اعتماد بسازم و آن‌ها چه چیزی باید ببینند؟")
        ],
        pitfalls: [
          L("Treating this as “{L6} for longer”. The step is about accountability for an area, not tenure.",
            "این گام را «{L6} با مدت بیشتر» دانستن. این گام درباره‌ی پاسخگویی یک حوزه است، نه سابقه."),
          L("Becoming the single point of knowledge. An anchor is measured by what keeps working without them.",
            "تبدیل شدن به تنها نقطه‌ی دانش. مرجع را با آنچه بدون او ادامه می‌دهد می‌سنجند."),
          L("Choosing the area for its prestige. The area has to matter to the company, or the level has no ground to stand on.",
            "انتخاب حوزه به‌خاطر اعتبارش. حوزه باید برای شرکت مهم باشد، وگرنه این سطح پایه‌ای برای ایستادن ندارد.")
        ]
      }
    ],

    /* ============================ the eight stall patterns ============================ */
    stall: [
      { id: "waiting",
        title: L("Waiting to be given scope", "منتظر ماندن تا scope به شما سپرده شود"),
        symptoms: [
          L("Your work arrives as tickets someone else wrote.", "کارتان به شکل ticketهایی می‌رسد که کس دیگری نوشته."),
          L("You are “ready for the next level” and expect the next project to prove it.", "حس می‌کنید برای سطح بعد آماده‌اید و انتظار دارید پروژه‌ی بعدی آن را ثابت کند."),
          L("Your manager says “soon”, and you haven't asked what soon needs.", "مدیرتان می‌گوید «به‌زودی»، و شما نپرسیده‌اید «به‌زودی» چه می‌خواهد.")
        ],
        cause: L("Scope grows when someone takes it, with their manager's knowledge. Most people wait for the invitation, and managers rarely know which engineers want bigger work.",
                 "scope وقتی بزرگ می‌شود که کسی آن را بردارد، با اطلاع مدیرش. بیشتر آدم‌ها منتظر دعوت می‌مانند و مدیرها کمتر می‌دانند کدام مهندس‌ها کار بزرگ‌تر می‌خواهند."),
        fix: [
          L("Find the first problem of the next size on the roadmap, and ask for it by name.", "اولین مساله‌ی هم‌اندازه‌ی سطح بعد را در نقشه‌ی راه پیدا کنید و اسم‌به‌اسم بخواهید."),
          L("Write a one-page proposal for a problem nobody has claimed, and offer to lead it.", "برای مساله‌ای که کسی ادعایش را نکرده یک پیشنهاد یک‌صفحه‌ای بنویسید و رهبری‌اش را پیشنهاد دهید."),
          L("Ask your manager: “What would you need to see to give me a project like that?” Write down the answer.", "از مدیرتان بپرسید: «برای سپردن چنین پروژه‌ای چه چیزی باید ببینید؟» و جوابش را بنویسید.")
        ] },

      { id: "busy",
        title: L("Busy, but not moving anything", "پرمشغله، ولی بدون جابه‌جا کردن چیزی"),
        symptoms: [
          L("Your year-end list is long and every line starts with a verb of activity.", "فهرست پایان سال‌تان بلند است و هر خط با فعل «فعالیت» شروع می‌شود."),
          L("You can't name the number that moved because of your work.", "نمی‌توانید عددی را که به‌خاطر کارتان جابه‌جا شد نام ببرید."),
          L("People say you are reliable, and nobody says what changed.", "آدم‌ها می‌گویند قابل‌اتکایید، و کسی نمی‌گوید چه چیزی عوض شد.")
        ],
        cause: L("Output is easy to see from the inside. A panel needs outcomes: what changed for users, teammates or the business, and by how much.",
                 "خروجی از درون به‌راحتی دیده می‌شود. پنل نتیجه می‌خواهد: برای کاربر، هم‌تیمی‌ها یا کسب‌وکار چه چیزی عوض شد و چقدر."),
        fix: [
          L("For each of your last three projects, write the metric it was meant to move, before and after.", "برای هر کدام از سه پروژه‌ی اخیرتان بنویسید قرار بود کدام شاخص را جابه‌جا کند، پیش و پس از آن."),
          L("End every project update with a “so what” line.", "هر گزارش پروژه را با یک خط «پس چه شد» تمام کنید."),
          L("Before you accept a new project, ask what success will look like and how it will be measured.", "پیش از پذیرفتن پروژه‌ی تازه بپرسید موفقیت چه شکلی دارد و چطور اندازه گرفته می‌شود.")
        ] },

      { id: "invisible",
        title: L("Good work nobody can quote", "کار خوبی که کسی نمی‌تواند نقلش کند"),
        symptoms: [
          L("Your manager likes your work but struggles to describe it to others.", "مدیرتان کار شما را دوست دارد ولی نمی‌تواند برای دیگران توصیفش کند."),
          L("The most important work happened a year ago and you can't find the details.", "مهم‌ترین کار یک سال پیش بوده و جزئیاتش را پیدا نمی‌کنید."),
          L("You are surprised by what comes back in peer feedback.", "از آنچه در بازخورد همکاران برمی‌گردد غافلگیر می‌شوید.")
        ],
        cause: L("Memory fades faster than people expect, and a committee sees only what is written. If the case can't be told in two sentences, it won't be told.",
                 "حافظه سریع‌تر از انتظار محو می‌شود و کمیته فقط آنچه را که نوشته شده می‌بیند. اگر پرونده با دو جمله گفتنی نباشد، گفته نمی‌شود."),
        fix: [
          L("Start an evidence log today. Two lines after each meaningful thing: what happened, your role, who benefited.", "از امروز سند دستاوردها را شروع کنید. بعد از هر اتفاق مهم دو خط: چه شد، نقش شما، چه کسی سود برد."),
          L("Ask partners who benefited for one sentence, with a number if they have one.", "از همکارانی که سود بردند یک جمله بخواهید، با عدد اگر دارند."),
          L("Share a draft of your case with your manager each cycle and ask what is missing.", "هر چرخه پیش‌نویس پرونده‌تان را به مدیر نشان بدهید و بپرسید چه چیزی کم است.")
        ] },

      { id: "nosponsor",
        title: L("Next-level work without a sponsor", "کار سطح بعد بدون حامی"),
        symptoms: [
          L("Your manager is supportive, but nobody senior outside your team knows your name.", "مدیرتان حمایت می‌کند، ولی هیچ ارشدی بیرون از تیم اسم شما را نمی‌شناسد."),
          L("In calibration your case is described, not argued.", "در کالیبراسیون (calibration) پرونده‌ی شما توصیف می‌شود، نه این‌که دفاع شود."),
          L("You have mentors, but no one who spends their own credibility on you.", "mentor دارید، ولی کسی نیست که از اعتبار خودش برای شما خرج کند.")
        ],
        cause: L("A mentor gives advice; a sponsor puts your name forward in rooms you aren't in. Promotion cases are decided in those rooms. Research on high-potential professionals found women were over-mentored and under-sponsored.",
                 "mentor توصیه می‌کند؛ حامی (sponsor) اسم شما را در اتاق‌هایی که شما حضور ندارید مطرح می‌کند. پرونده‌های ارتقا در همان اتاق‌ها تصمیم‌گیری می‌شود. پژوهشی روی حرفه‌ای‌های با پتانسیل بالا نشان داد زنان بیشتر از حد mentor دارند و کمتر از حد حامی."),
        fix: [
          L("Do visible work for the senior people you'd like as sponsors, and make it easy for them to describe it.", "برای ارشدهایی که می‌خواهید حامی‌تان شوند کار دیدنی انجام بدهید و توصیف آن را برایشان آسان کنید."),
          L("Share your promotion packet draft early, so your advocates know what to say.", "پیش‌نویس پرونده‌ی ارتقا را زود به اشتراک بگذارید تا حامیان‌تان بدانند چه بگویند."),
          L("Ask your manager who in the organisation would speak to your impact, and make a plan to work with them.", "از مدیرتان بپرسید چه کسانی در سازمان درباره‌ی اثرگذاری شما صحبت می‌کنند و برای کار با آن‌ها برنامه بگذارید.")
        ] },

      { id: "glue",
        title: L("Glue work with no credit", "glue work بدون اعتبار"),
        symptoms: [
          L("You are the one who onboards, unblocks, writes the notes and chases the other teams.", "شما کسی هستید که onboard می‌کند، مانع برمی‌دارد، یادداشت‌ها را می‌نویسد و تیم‌های دیگر را پیگیری می‌کند."),
          L("The work is appreciated warmly and left out of every promotion discussion.", "کار شما گرم تحسین می‌شود و از هر بحث ارتقا بیرون می‌ماند."),
          L("You are moving toward project management without having chosen it.", "بی‌آن‌که انتخاب کرده باشید به سمت مدیریت پروژه می‌لغزید.")
        ],
        cause: L("Glue work (unblocking, onboarding, standards, cross-team alignment) is genuinely valuable, but it is invisible to most criteria and easy to dump on the same few people. It is a risk to your technical standing when it replaces your own growth work.",
                 "glue work (کارهای چسب‌مانند و نامرئی: رفع مانع، onboarding، استاندارد، همسوسازی میان‌تیمی) واقعا ارزشمند است، ولی برای بیشتر معیارها نامرئی است و راحت روی همان چند نفر ریخته می‌شود. وقتی جای کار رشد فنی خودتان را می‌گیرد، خطری برای جایگاه فنی شماست."),
        fix: [
          L("Do it on purpose, and turn it into an artifact: a guide, a checklist, a rotation. Then it counts as scaling others.", "عمدی انجامش بدهید و به یک artifact تبدیل کنید: راهنما، چک‌لیست، نوبت‌بندی. آن‌وقت «مقیاس دادن به دیگران» حساب می‌شود."),
          L("Share the load: rotate the notes and onboarding between people, including seniors.", "بار را تقسیم کنید: یادداشت‌ها و onboarding را میان آدم‌ها، از جمله ارشدها، بچرخانید."),
          L("Say it out loud in your next career conversation, and ask your manager to track and credit it.", "در گفتگوی شغلی بعدی بلند بگویید و از مدیرتان بخواهید ثبت و اعتبارش را بدهد.")
        ] },

      { id: "hero",
        title: L("The hero habit", "عادت قهرمان‌بازی"),
        symptoms: [
          L("You're the person who stays up to save the release.", "شما کسی هستید که شب بیدار می‌ماند تا release را نجات بدهد."),
          L("Nobody else can run the system you built without calling you.", "کس دیگری بدون تماس با شما نمی‌تواند سیستمی را که ساخته‌اید اداره کند."),
          L("Your best stories are rescues, and your quiet prevention goes unseen.", "بهترین داستان‌هایتان نجات‌دادن‌هاست و پیشگیری بی‌سروصدایتان دیده نمی‌شود.")
        ],
        cause: L("Heroics are visible, prevention is not, and a person who is the only one who can fix something is a single point of failure, not a leader. The habit feels like commitment, but it caps how far your impact can scale.",
                 "قهرمان‌بازی دیدنی است، پیشگیری نه، و کسی که تنها فرد قادر به تعمیر یک چیز است «نقطه‌ی شکست واحد» است، نه رهبر. این عادت شبیه تعهد است، ولی سقفی برای مقیاس‌پذیری اثر شما می‌گذارد."),
        fix: [
          L("Make prevention visible: flag the risk early, ship the fallback, and write the plan down.", "پیشگیری را دیدنی کنید: ریسک را زود اعلام کنید، fallback را تحویل بدهید و برنامه را بنویسید."),
          L("After each rescue, leave behind a runbook, an alert or a test that makes the next one unnecessary.", "بعد از هر نجات، runbook، alert یا تستی باقی بگذارید که نجات بعدی را بی‌نیاز کند."),
          L("Pair someone in on every incident you lead, so the knowledge isn't only yours.", "در هر incident که رهبری می‌کنید یک نفر را همراه کنید تا دانش فقط مال شما نماند.")
        ] },

      { id: "spiky",
        title: L("One dominant weakness", "یک ضعف غالب"),
        symptoms: [
          L("Three lenses are strong and one is clearly empty.", "سه بُعد قوی است و یکی آشکارا خالی."),
          L("The same feedback has come back for two cycles in different words.", "همان بازخورد دو دوره با کلمه‌های مختلف برگشته است."),
          L("You keep polishing what you are already best at.", "مدام چیزی را که از قبل در آن بهترینید صیقل می‌دهید.")
        ],
        cause: L("Published ladders say the same thing: higher levels tolerate fewer significant gaps, and one dominant weakness can block a case even when everything else is strong. Strong engineers drift toward the lens they enjoy.",
                 "نردبان‌های منتشرشده همین را می‌گویند: سطح‌های بالاتر شکاف‌های مهم کمتری را تحمل می‌کنند و یک ضعف غالب می‌تواند پرونده را متوقف کند، حتی اگر همه‌چیز دیگر قوی باشد. مهندس‌های قوی به سمت بُعدی می‌روند که از آن لذت می‌برند."),
        fix: [
          L("Find the emptiest lens (the “Where am I?” page will point to it) and plan one piece of work this quarter that produces evidence for it.", "خالی‌ترین بُعد را پیدا کنید (صفحه‌ی «من کجا هستم؟» آن را نشان می‌دهد) و برای همین فصل یک کار برنامه بریزید که برایش مدرک بسازد."),
          L("Ask your manager and a peer to fill in the lens grid about you separately, then compare.", "از مدیر و یک همکار بخواهید جدول بُعدها را درباره‌ی شما جداگانه پر کنند و بعد مقایسه کنید."),
          L("Stop adding to your strongest lens. A first example in an empty lens is worth more than a fifth in a full one.", "به قوی‌ترین بُعد چیزی اضافه نکنید. اولین مثال در بُعد خالی بیشتر از مثال پنجم در بُعد پر ارزش دارد.")
        ] },

      { id: "unfinished",
        title: L("Starting big, not finishing", "شروع بزرگ، پایان ناتمام"),
        symptoms: [
          L("Your portfolio has three ambitious projects, two of them at “mostly done”.", "پرتفوی شما سه پروژه‌ی جاه‌طلبانه دارد و دو تا از آن‌ها «تقریبا تمام» است."),
          L("Old systems still run, next to the new ones that were meant to replace them.", "سیستم‌های قدیمی هنوز کنار سیستم‌های جدیدی که قرار بود جایگزینشان شوند اجرا می‌شوند."),
          L("Each new idea is more exciting than closing the last one.", "هر ایده‌ی تازه جذاب‌تر از بستن ایده‌ی قبلی است.")
        ],
        cause: L("Migrations and big changes are judged by whether they finish, not by whether they started well. An unfinished migration leaves two systems to maintain and costs trust, and the last ten percent is the part nobody wants.",
                 "مهاجرت‌ها و تغییرهای بزرگ را با این می‌سنجند که تمام شوند، نه با این‌که خوب شروع شده باشند. مهاجرت نیمه‌کاره دو سیستم برای نگهداری باقی می‌گذارد، اعتماد را می‌برد، و ده درصد آخر همان بخشی است که کسی نمی‌خواهد."),
        fix: [
          L("Before starting, define “finished”: which old system is retired and by which date.", "پیش از شروع «تمام‌شدن» را تعریف کنید: کدام سیستم قدیمی کنار می‌رود و تا چه تاریخی."),
          L("Derisk the hard cases first, automate the easy majority, then personally handle the stragglers.", "اول موارد سخت را کم‌ریسک کنید، اکثریت آسان را خودکار کنید و بعد خودتان به باقی‌مانده‌ها برسید."),
          L("Limit work in progress: don't start the next big thing until the last one has a retirement date.", "کار در جریان را محدود کنید: تا چیز بزرگ قبلی تاریخ بازنشستگی نگرفته سراغ بعدی نروید.")
        ] }
    ]
  };
})();

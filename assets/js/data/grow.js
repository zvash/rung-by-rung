/* Growth playbooks (one per step of the ladder) and the eight stall patterns.
   Evidence lines are illustrative: the numbers in them are made up on purpose. */
(function () {
  "use strict";
  var S = window.SWE,
    L = S.L;

  S.data.grow = {
    transitions: [
      /* ============================ L2 → L3 ============================ */
      {
        from: "L2",
        to: "L3",
        headline: L(
          "From guided tasks to dependable delivery.",
          "از انجام taskها با راهنمایی به تحویل قابل‌اتکای کار.",
        ),
        timeline: L(
          "Aim to operate at {L3} within about six months and to be {L3} within a year at most. This step is about reliability, not brilliance: the same expectations, with less hand-holding and a faster pace.",
          "هدف این است که ظرف حدود شش ماه در سطح {L3} عمل کنید و حداکثر طی یک سال به این سطح برسید. در این گام، قابل‌اتکا بودن مهم‌تر از درخشش فردی است: انتظارات تغییری نمی‌کند، اما باید با راهنمایی کمتر و سرعت بیشتر کارتان را به نتیجه برسانید.",
        ),
        start: [
          L(
            "Estimate every task before you start, and say early, with a reason, when a date will slip.",
            "پیش از شروع هر task، زمان لازم برای انجام آن را تخمین بزنید. اگر زمان تحویل عقب می‌افتد، زود اطلاع دهید و دلیلش را توضیح دهید.",
          ),
          L(
            "Finish tasks completely: tests, a short note in the docs, cleanup, and a PR description that says what and why.",
            "taskها را با همه‌ی جزئیات لازم به پایان برسانید: تست، یادداشت کوتاه در مستندات، تمیزکاری کد و توضیح PR که روشن کند چه تغییری داده‌اید و چرا.",
          ),
          L(
            "Ask for the “why” behind each task, so the next one needs less explaining.",
            "بپرسید هر task چرا لازم است تا برای انجام task بعدی به توضیح کمتری نیاز داشته باشید.",
          ),
          L(
            "Post a short status note in the team channel at least twice a week, before anyone asks.",
            "پیش از آن‌که کسی پیگیر شود، هفته‌ای دست‌کم دو بار گزارشی کوتاه از وضعیت کارتان در کانال تیم بگذارید.",
          ),
        ],
        stop: [
          L(
            "Staying silently stuck for half a day when one specific question would unblock you.",
            "نیم‌روز block ماندن بدون درخواست کمک وقتی یک سوال ساده می‌تواند کار را راه بیندازد.",
          ),
          L(
            "Treating a review comment as a verdict. Apply it, and make sure you don't get the same comment twice.",
            "برداشت شخصی از کامنت‌های code review، انگار توانایی‌های شما را زیر سوال برده باشند. بازخورد را در کارتان اعمال کنید و از آن یاد بگیرید تا همان نکته دوباره تکرار نشود.",
          ),
          L(
            "Starting the next task before the loose ends of the last one are closed.",
            "شروع task بعدی پیش از رسیدگی به کارهای باقی‌مانده‌ی task قبلی.",
          ),
          L(
            "Measuring your pace against people two levels above you.",
            "مقایسه‌ی سرعت کارتان با همکارانی که دو سطح بالاتر از شما هستند.",
          ),
        ],
        moves: {
          contribution: [
            L(
              "Take one task from ticket to production yourself, including the release and a check that it works for users.",
              "یک task را خودتان از ticket تا production پیش ببرید. release را انجام دهید و مطمئن شوید نتیجه برای کاربران درست کار می‌کند.",
            ),
            L(
              "Keep a log of estimate versus actual for a month, then adjust how you estimate.",
              "به مدت یک ماه، زمان تخمینی و زمان واقعی انجام کارها را ثبت کنید. سپس روش تخمین‌زدنتان را بر اساس آن اصلاح کنید.",
            ),
            L(
              "Ask your mentor to review your plan before you write code, not only the code afterwards.",
              "از mentor بخواهید پیش از کدنویسی برنامه‌ی کارتان را review کند. بررسی را فقط به کدِ نوشته‌شده محدود نکنید.",
            ),
          ],
          challenge: [
            L(
              "When stuck, write down what you tried and what you expect, then ask in one clear message.",
              "وقتی به مشکل می‌خورید، بنویسید چه راه‌هایی را امتحان کرده‌اید و انتظار چه نتیجه‌ای داشته‌اید. سپس سوالتان را در یک پیام روشن مطرح کنید.",
            ),
            L(
              "Reach for the team's standard tool or pattern first, and deviate only with a reason you can state.",
              "ابتدا از ابزار یا الگوی استاندارد تیم استفاده کنید. اگر مسیر دیگری انتخاب می‌کنید، باید بتوانید دلیلش را توضیح دهید.",
            ),
            L(
              "Debug one real production issue alongside a senior colleague and write down what you learned.",
              "یک مشکل واقعی در production را همراه با یک همکار ارشد debug کنید و آموخته‌هایتان را بنویسید.",
            ),
          ],
          influence: [
            L(
              "Give honest status early and in writing, even when the news is “I'm behind”.",
              "وضعیت کار را زود، صادقانه و به‌صورت مکتوب اطلاع دهید. حتی اگر لازم است بگویید «از برنامه عقب افتاده‌ام».",
            ),
            L(
              "Leave review comments that teach something, not just “LGTM”.",
              "در code review کامنت‌هایی بنویسید که نکته‌ای به دیگران یاد بدهند. به «LGTM» اکتفا نکنید.",
            ),
            L(
              "Meet one engineer on a neighbouring team and learn what they depend on from your work.",
              "با یک مهندس از تیمی که با شما در ارتباط است آشنا شوید و بفهمید کار آن تیم به کدام بخش از کار شما وابسته است.",
            ),
          ],
          expertise: [
            L(
              "Draw the architecture of your area from memory, then compare it with the real one.",
              "معماری حوزه‌ی کاری‌تان را از روی حافظه رسم کنید و با معماری واقعی مقایسه کنید.",
            ),
            L(
              "Follow one user action all the way to the data store and back.",
              "مسیر یک اقدام کاربر را تا محل ذخیره‌ی داده و بازگشت پاسخ دنبال کنید.",
            ),
            L(
              "Pick one tool (debugger, profiler, query planner) and learn it a little better than anyone else on the team.",
              "یک ابزار، مثل debugger، profiler یا query planner، انتخاب کنید و آن را کمی بهتر از بقیه‌ی اعضای تیم یاد بگیرید.",
            ),
          ],
        },
        evidence: [
          L(
            "Delivered 12 tasks this quarter, each on estimate or flagged early; two small defects, both fixed within a day.",
            "در این فصل 12 task تحویل داد. همه طبق تخمین انجام شدند یا تاخیرشان زود اطلاع داده شد. دو ایراد کوچک پیش آمد که هر دو ظرف یک روز رفع شدند.",
          ),
          L(
            "Raised the blocked dependency on day two and proposed a stub, so the sprint goal still held.",
            "در روز دوم، وابستگی‌ای را که کار را block کرده بود مطرح کرد و استفاده از stub را پیشنهاد داد. در نتیجه تیم همچنان به هدف sprint رسید.",
          ),
          L(
            "Nobody had to ask for his status: the channel had it before the stand-up did.",
            "نیازی نبود کسی وضعیت کارش را بپرسد. پیش از stand-up، گزارش در کانال تیم بود.",
          ),
          L(
            "Takes review feedback calmly and the same comment never came back twice.",
            "بازخورد code review را با آرامش می‌پذیرد و هیچ نکته‌ای لازم نیست دوباره به او گفته شود.",
          ),
        ],
        ask: [
          L(
            "Which of my tasks last quarter would you call “{L3} quality”, and which not yet?",
            "کدام taskهای فصل گذشته‌ام کیفیت مورد انتظار از {L3} را داشتند و کدام هنوز به آن نرسیده‌اند؟",
          ),
          L(
            "What would make you comfortable giving me a vaguer task next?",
            "چه چیزی لازم است ببینید تا با خیال راحت task مبهم‌تری به من بسپارید؟",
          ),
          L(
            "How will we both know, three months from now, that I'm operating at {L3}?",
            "سه ماه دیگر، با چه نشانه‌هایی می‌توانیم هر دو مطمئن شویم که در سطح {L3} کار می‌کنم؟",
          ),
        ],
        pitfalls: [
          L(
            "Mistaking speed for reliability: fast tasks that bounce back as rework build a reputation for rework.",
            "یکی دانستن سرعت و قابل‌اتکا بودن: اگر taskها را سریع تحویل دهید اما مدام برای اصلاح برگردند، دیگران کار شما را با دوباره‌کاری به یاد می‌آورند.",
          ),
          L(
            "Waiting to be handed the next task. Pulling the next one yourself is what {L3} looks like.",
            "منتظر ماندن تا task بعدی به شما سپرده شود. در سطح {L3}، خودتان برای گرفتن کار بعدی اقدام می‌کنید.",
          ),
          L(
            "Hiding a blocker to look capable. It comes out later as a slipped date, which costs more trust.",
            "پنهان کردن blocker برای توانمند به نظر رسیدن. مشکل بعدا به شکل تاخیر در تحویل آشکار می‌شود و اعتماد دیگران را بیشتر از بین می‌برد.",
          ),
        ],
      },

      /* ============================ L3 → L4 ============================ */
      {
        from: "L3",
        to: "L4",
        headline: L(
          "From delivering tasks to owning outcomes.",
          "از تحویل taskها به own کردن نتیجه‌ی کار.",
        ),
        timeline: L(
          "{L4} is the level the ladder expects of everyone over time. Rough guide: one to two years, mostly set by when you first own a multi-month project. Crowd-sourced figures for one large employer say about two years between the first two levels (reported, not official).",
          "{L4} سطحی است که انتظار می‌رود همه به‌مرور به آن برسند. برآورد تقریبی برای این گام یک تا دو سال است و بیش از هر چیز به زمان own کردن اولین پروژه‌ی چندماهه بستگی دارد. برآوردهای مبتنی بر گزارش افراد در یک شرکت بزرگ، فاصله‌ی دو سطح اول را حدود دو سال نشان می‌دهند. این اعداد گزارش‌شده‌اند و رسمی نیستند.",
        ),
        start: [
          L(
            "Break the project into milestones with dates, and re-plan the same day a dependency slips.",
            "پروژه را به milestoneهای زمان‌بندی‌شده تقسیم کنید. اگر انجام کاری که به آن وابسته‌اید عقب افتاد، همان روز برنامه را بازبینی کنید.",
          ),
          L(
            "Ship the whole thing: tests, docs, dashboards, alerts and a support guide.",
            "کار را با همه‌ی اجزای لازم تحویل دهید: تست، مستندات، داشبورد، alert و راهنمای پشتیبانی.",
          ),
          L(
            "Talk to the product manager and neighbouring teams yourself, before they come asking.",
            "پیش از آن‌که مدیر محصول یا تیم‌های مرتبط پیگیر شوند، خودتان با آن‌ها ارتباط بگیرید.",
          ),
          L(
            "Write down the options you compared and why you chose one.",
            "گزینه‌های بررسی‌شده و دلیل انتخاب نهایی را مستند کنید.",
          ),
        ],
        stop: [
          L(
            "Waiting for someone to hand you the next piece of the project.",
            "منتظر ماندن تا کسی بخش بعدی پروژه را به شما واگذار کند.",
          ),
          L(
            "Treating “my code is merged” as “done”.",
            "تمام‌شده دانستن کار به محض این‌که کد merge می‌شود.",
          ),
          L(
            "Raising a risk at the stand-up after you already knew about it for days.",
            "مطرح کردن ریسک در stand-up، در حالی که چند روز از آن خبر داشته‌اید.",
          ),
          L(
            "Optimising your own ticket without checking what it changes upstream and downstream.",
            "بهینه‌سازی ticket خودتان بدون بررسی اثر تغییر بر upstream و downstream.",
          ),
        ],
        moves: {
          contribution: [
            L(
              "Volunteer to own a project of two to three months with a real date, and say in writing that you own it.",
              "برای own کردن یک پروژه‌ی دو تا سه‌ماهه با موعد تحویل مشخص داوطلب شوید و مسئولیت خود را مکتوب اعلام کنید.",
            ),
            L(
              "Make an end-to-end checklist (docs, monitoring, alerts, support guide, test environment) and use it on this project.",
              "یک چک‌لیست end-to-end تهیه کنید، شامل مستندات، monitoring، alert، راهنمای پشتیبانی و محیط تست و در همین پروژه از آن استفاده کنید.",
            ),
            L(
              "Hold a 15-minute weekly check-in with your stakeholders and send a written summary.",
              "هر هفته یک جلسه‌ی 15 دقیقه‌ای برای مرور وضعیت کار با ذی‌نفعان برگزار کنید و خلاصه‌ی مکتوب آن را بفرستید.",
            ),
          ],
          challenge: [
            L(
              "For your next design, write two alternatives and what you give up with the one you pick.",
              "برای طراحی بعدی‌تان دو راه‌حل جایگزین را بنویسید و توضیح دهید با انتخاب نهایی، چه مزیت‌هایی را از دست می‌دهید.",
            ),
            L(
              "Look one hop upstream and one downstream of your change and write what could break.",
              "اثر تغییرتان را یک مرحله در upstream و یک مرحله در downstream بررسی کنید و بنویسید چه چیزهایی ممکن است دچار مشکل شوند.",
            ),
            L(
              "When the edges of a problem are unclear, spend a day defining it before you build anything.",
              "اگر حدود مساله روشن نیست، پیش از شروع پیاده‌سازی یک روز برای تعریف دقیق آن وقت بگذارید.",
            ),
          ],
          influence: [
            L(
              "Walk a newer teammate through their first big task.",
              "یک هم‌تیمی کم‌تجربه‌تر را در انجام اولین task بزرگش راهنمایی کنید.",
            ),
            L(
              "Raise one friction with a neighbouring team directly, with a concrete proposal.",
              "یکی از مشکلات همکاری با تیم مرتبط را مستقیم مطرح کنید و برای حل آن پیشنهاد مشخصی بدهید.",
            ),
            L(
              "Write down the project's dependencies and tell each owner what you need and by when.",
              "وابستگی‌های پروژه را مستند کنید و به مسئول هرکدام بگویید چه چیزی را تا چه زمانی نیاز دارید.",
            ),
          ],
          expertise: [
            L(
              "Build one skill beyond everyday coding that your team relies on: security, data analysis, production health or test strategy.",
              "در یک مهارت فراتر از کدنویسی روزمره توانمند شوید که تیم بتواند روی شما حساب کند: امنیت، تحلیل داده، سلامت production یا استراتژی تست.",
            ),
            L(
              "Learn which business number your project is supposed to move, and check it after launch.",
              "مشخص کنید پروژه قرار است کدام شاخص کسب‌وکار را بهبود دهد و بعد از launch، نتیجه را بررسی کنید.",
            ),
            L(
              "Study the systems you depend on, not only the one you own.",
              "علاوه بر سیستمی که own می‌کنید، سیستم‌هایی را هم که به آن‌ها وابسته‌اید بشناسید.",
            ),
          ],
        },
        evidence: [
          L(
            "Planned and delivered a 10-week migration across two teams; re-cut scope in week 7 when an API slipped and still launched on the committed date.",
            "یک migration ده‌هفته‌ای را با مشارکت دو تیم برنامه‌ریزی کرد و به پایان رساند. در هفته‌ی هفتم، با تاخیر در آماده شدن یک API، scope را بازتنظیم کرد و همچنان در موعد تعهدشده launch کرد.",
          ),
          L(
            "Launched with dashboards, an on-call runbook and a support briefing, so launch week had no escalations to the original developers.",
            "پروژه را همراه با داشبورد، runbook برای on-call و جلسه‌ی آشنایی تیم پشتیبانی با تغییرات launch کرد. در هفته‌ی launch نیازی به escalation به توسعه‌دهندگان اصلی پیش نیامد.",
          ),
          L(
            "Compared three queueing options in writing, chose the simplest that met the latency target, and documented what the team gave up.",
            "سه گزینه برای queueing را به‌صورت مکتوب مقایسه کرد، ساده‌ترین گزینه‌ای را که هدف latency را برآورده می‌کرد انتخاب کرد و trade-offهای پذیرفته‌شده‌ی تیم را مستند کرد.",
          ),
          L(
            "Two newer engineers shipped independently within a month of her first-project walk-through.",
            "دو مهندس کم‌تجربه‌تر، پس از راهنمایی او در اولین پروژه‌شان، ظرف یک ماه توانستند مستقل کار تحویل دهند.",
          ),
        ],
        ask: [
          L(
            "Which project in the next two quarters could be mine end to end, and what would “done” include?",
            "در دو فصل آینده، کدام پروژه را می‌توانم end-to-end own کنم و برای تمام‌شده حساب شدن آن، چه کارهایی باید انجام شده باشد؟",
          ),
          L(
            "Where did my last project feel like a set of tasks to you, rather than ownership?",
            "در کدام بخش‌های پروژه‌ی قبلی‌ام، عملکردم بیشتر شبیه انجام مجموعه‌ای از taskها بود تا own کردن کل کار؟",
          ),
          L(
            "Who outside the team should hear from me regularly, and who will tell me if I'm leaving something out?",
            "به چه کسانی بیرون از تیم باید مرتب گزارش بدهم و چه کسی می‌تواند نکات جاافتاده را به من گوشزد کند؟",
          ),
        ],
        pitfalls: [
          L(
            "Reading “owning” as “keeping others out”. Owners see the work through, they don't gatekeep it.",
            "برداشت «دیگران نباید وارد شوند» از own کردن. کسی که کار را own می‌کند، مسئول به‌سرانجام‌رسیدن آن است و راه مشارکت دیگران را نمی‌بندد.",
          ),
          L(
            "Delivering more tasks instead of a bigger shape of work. Volume doesn't change the kind of work you do.",
            "انجام taskهای بیشتر به‌جای پذیرفتن کاری با دامنه‌ی بزرگ‌تر. افزایش حجم کار، به‌تنهایی جنس کار شما را تغییر نمی‌دهد.",
          ),
          L(
            "Doing the stakeholder work invisibly, so nobody outside the team can say what you owned.",
            "دیده نشدن هماهنگی‌هایتان با ذی‌نفعان، به‌طوری که هیچ‌کس بیرون از تیم نتواند توضیح دهد چه کاری را own کرده‌اید.",
          ),
        ],
      },

      /* ============================ L4 → L5 ============================ */
      {
        from: "L4",
        to: "L5",
        headline: L(
          "From owning projects to shaping an area.",
          "از own کردن پروژه‌ها به جهت‌دهی به یک حوزه‌ی کاری.",
        ),
        timeline: L(
          "Often the longest step in practice. Public estimates run from about two years on a clean path to four or five when a cycle is missed, but they are crowd-sourced and weak. What really sets the pace is when you start working on area-sized problems. Many strong engineers stay at {L4} or {L5} by choice.",
          "در عمل، این گام اغلب بیشترین زمان را می‌برد. برآوردهای عمومی از حدود دو سال در مسیر بدون وقفه تا چهار یا پنج سال، در صورت از دست رفتن یک دوره‌ی ارتقا، متغیرند. اما بر گزارش افراد تکیه دارند و چندان قابل‌اتکا نیستند. عامل اصلی این است که چه زمانی کار روی مساله‌هایی در مقیاس یک حوزه را شروع می‌کنید. بسیاری از مهندس‌های توانمند، به انتخاب خود در {L4} یا {L5} می‌مانند.",
        ),
        start: [
          L(
            "Define the problem before the solution: what is in scope, what isn't, and what “good” means in a number.",
            "پیش از انتخاب راه‌حل، مساله را تعریف کنید: چه چیزهایی در scope قرار می‌گیرند، چه چیزهایی خارج از آن‌اند و نتیجه‌ی مطلوب با چه عددی سنجیده می‌شود.",
          ),
          L(
            "Set direction for two or three engineers: what you build, in what order and why.",
            "برای دو یا سه مهندس جهت فنی تعیین کنید: چه چیزی می‌سازید، با چه ترتیبی و به چه دلیل.",
          ),
          L(
            "Be the inner PM: make product trade-offs yourself, using what you know about users and the business.",
            "یک «PM درون» داشته باشید: با تکیه بر شناخت کاربران و کسب‌وکار، خودتان درباره‌ی trade-offهای محصولی تصمیم بگیرید.",
          ),
          L(
            "Behind every incident, look for the recurring cause and remove it.",
            "در هر incident، علت تکرارشونده را پیدا کنید و برای رفع آن اقدام کنید.",
          ),
        ],
        stop: [
          L(
            "Solving only the problem that is in front of you.",
            "محدود شدن به حل مساله‌ای که همین حالا پیش روی شماست.",
          ),
          L(
            "Being the only person who can do the hard parts.",
            "تنها فردی بودن که از عهده‌ی بخش‌های سخت کار برمی‌آید.",
          ),
          L(
            "Letting “senior” mean “fastest coder on the team”.",
            "خلاصه کردن نقش مهندس ارشد در «سریع‌ترین کدنویس تیم».",
          ),
          L(
            "Waiting for the roadmap to contain a big problem. Go and find one.",
            "منتظر ماندن تا مساله‌ی بزرگی در roadmap قرار بگیرد. خودتان چنین مساله‌ای را شناسایی کنید.",
          ),
        ],
        moves: {
          contribution: [
            L(
              "Take one ambiguous problem and write a one-page “what we will and won't do” before any code.",
              "یک مساله‌ی مبهم انتخاب کنید و پیش از کدنویسی، در یک صفحه مشخص کنید چه کارهایی انجام می‌دهید و چه کارهایی خارج از برنامه‌اند.",
            ),
            L(
              "Hand a real piece of your project to someone else, with a clear outcome, and make them successful.",
              "یک بخش معنادار از پروژه را با نتیجه‌ی مورد انتظار روشن به فرد دیگری بسپارید و کمک کنید آن را با موفقیت پیش ببرد.",
            ),
            L(
              "Measure the result of your last launch (adoption, reliability or cost) and report it to the wider organisation, not only your team.",
              "نتیجه‌ی آخرین launch را از نظر میزان استفاده، اتکاپذیری یا هزینه اندازه بگیرید و آن را فراتر از تیم خود، در سازمان به اشتراک بگذارید.",
            ),
          ],
          challenge: [
            L(
              "Choose a problem with no clear best answer: research the options, write the design, and own it past launch.",
              "مساله‌ای انتخاب کنید که بهترین راه‌حل آن از ابتدا روشن نیست. گزینه‌ها را بررسی و طراحی را مستند کنید و تا پس از launch، آن را own کنید.",
            ),
            L(
              "Find a recurring problem (the same incident, the same migration pain) and remove its cause.",
              "یک مشکل تکرارشونده، مثل incidentهای مشابه یا دردسرهای مکرر migration، پیدا کنید و علت آن را برطرف کنید.",
            ),
            L(
              "Simplify one existing solution, or standardise two that compete.",
              "یک راه‌حل موجود را ساده‌سازی کنید یا دو راه‌حل رقیب را استانداردسازی کنید.",
            ),
          ],
          influence: [
            L(
              "Become the contact point for a group of stakeholders and share context before they ask.",
              "نقطه‌ی تماس گروهی از ذی‌نفعان باشید و پیش از آن‌که سوال کنند، context لازم را با آن‌ها به اشتراک بگذارید.",
            ),
            L(
              "Align your team and one other team on a single direction, in writing.",
              "تیم خود و یک تیم دیگر را بر سر جهت مشترکی همسو کنید و توافق را مکتوب کنید.",
            ),
            L(
              "Spot a disagreement between teams early and bring both sides to one shared decision.",
              "اختلاف بین تیم‌ها را زود شناسایی کنید و به هر دو طرف کمک کنید به تصمیمی مشترک برسند.",
            ),
          ],
          expertise: [
            L(
              "Decide which senior you are building: the deep authority on one area, or the generalist with range. Make it visible.",
              "مشخص کنید چه نوع مهندس ارشدی می‌خواهید باشید: متخصصی با دانش عمیق در یک حوزه یا generalist با دامنه‌ی دانش گسترده. این مسیر را برای دیگران هم روشن کنید.",
            ),
            L(
              "Learn the business side of your area well enough that a PM rarely has to decide for you.",
              "جنبه‌های کسب‌وکاری حوزه‌تان را آن‌قدر خوب بشناسید که به‌ندرت لازم باشد PM به‌جای شما تصمیم بگیرد.",
            ),
            L(
              "Write down which short-term compromises in your systems are safe and which will cost you later.",
              "مستند کنید کدام trade-offهای کوتاه‌مدت در سیستم‌هایتان قابل‌قبول‌اند و کدام در آینده هزینه‌ساز می‌شوند.",
            ),
          ],
        },
        evidence: [
          L(
            "Scoped the payment-retry area: cut three proposed features, owned the remaining plan for four quarters, and failed payments dropped by a third.",
            "scope حوزه‌ی retry پرداخت را مشخص کرد: سه قابلیت پیشنهادی را کنار گذاشت، اجرای برنامه‌ی باقی‌مانده را در طول چهار فصل own کرد و تعداد پرداخت‌های ناموفق یک‌سوم کاهش یافت.",
          ),
          L(
            "Set direction for three engineers on a six-month project; two of them now lead pieces of the next one.",
            "در پروژه‌ای شش‌ماهه، جهت فنی سه مهندس را تعیین کرد. دو نفر از آن‌ها اکنون بخش‌هایی از پروژه‌ی بعدی را رهبری می‌کنند.",
          ),
          L(
            "Traced three launch delays to one cause, introduced contract-first APIs, and four teams use the practice now.",
            "علت مشترک سه تاخیر در launch را شناسایی کرد و رویکرد contract-first را برای APIها جا انداخت. اکنون چهار تیم از این رویکرد استفاده می‌کنند.",
          ),
          L(
            "Product managers rarely decide for her in this area; they ask her to propose the trade-off.",
            "مدیران محصول در این حوزه به‌ندرت به‌جای او تصمیم می‌گیرند. از خودش می‌خواهند trade-off مناسب را پیشنهاد کند.",
          ),
        ],
        ask: [
          L(
            "Which area could I own for the next three quarters, and what would success look like in numbers?",
            "در سه فصل آینده کدام حوزه را می‌توانم own کنم و موفقیت در آن را با چه شاخص‌های عددی می‌سنجیم؟",
          ),
          L(
            "Who are the two or three engineers I could set direction for, and does the team know it?",
            "برای کدام دو یا سه مهندس می‌توانم جهت فنی تعیین کنم؟ آیا تیم هم از این مسئولیت من اطلاع دارد؟",
          ),
          L(
            "For {L5}, which evidence is thinnest in my case: influence beyond the team, or outcomes in numbers?",
            "برای رسیدن به {L5}، شواهد پرونده‌ام در کدام بخش ضعیف‌تر است: قدرت نفوذ فراتر از تیم یا نتایج قابل‌اندازه‌گیری؟",
          ),
        ],
        pitfalls: [
          L(
            "Scope without impact: a big area with no measured result reads as busy, not senior.",
            "scope بدون اثرگذاری: حوزه‌ی بزرگ بدون نتیجه‌ی قابل‌اندازه‌گیری، نشانه‌ی پرمشغله بودن است، نه عملکرد در سطح ارشد.",
          ),
          L(
            "Staying the best individual coder. At this step your leverage comes from other people's progress as well as your own.",
            "ماندن در نقش بهترین کدنویس تیم. در این گام، اثرگذاری شما هم از پیشرفت خودتان حاصل می‌شود و هم از کمک به پیشرفت دیگران.",
          ),
          L(
            "Depth with no inner PM: the right answer to the wrong question.",
            "تخصص عمیق بدون «PM درون»: رسیدن به راه‌حل درست برای مساله‌ی اشتباه.",
          ),
        ],
      },

      /* ============================ L5 → L6 ============================ */
      {
        from: "L5",
        to: "L6",
        headline: L(
          "From owning an area to steering a strategy across teams.",
          "از own کردن یک حوزه به راهبری استراتژی در چند تیم.",
        ),
        timeline: L(
          "Widely described as the biggest jump on the ladder. Crowd-sourced estimates say three to five years or more at the senior level, and many people never make it (reported, no official data). It often takes more than one review cycle, and it depends on actionable feedback and advocates beyond your own manager.",
          "این گام اغلب بزرگ‌ترین جهش نردبان توصیف می‌شود. برآوردهای مبتنی بر گزارش افراد، از سه تا پنج سال یا بیشتر در سطح ارشد حکایت دارند و بسیاری هرگز به سطح بعد نمی‌رسند. این‌ها گزارش افراد است و داده‌ی رسمی در دست نیست. این گام معمولا بیش از یک دوره‌ی ارزیابی زمان می‌برد و به بازخورد قابل‌اقدام و حامیانی فراتر از مدیر مستقیم شما نیاز دارد.",
        ),
        start: [
          L(
            "Help decide which problems the organisation works on at all, and write down why.",
            "در انتخاب مساله‌هایی که سازمان باید روی آن‌ها کار کند نقش داشته باشید و دلایل انتخاب را مستند کنید.",
          ),
          L(
            "Lead across groups whose priorities compete, and steer toward what is best for the organisation.",
            "رهبری چند گروه با اولویت‌های متفاوت و گاه متعارض را بر عهده بگیرید و تصمیم‌ها را به سمت بهترین نتیجه برای سازمان هدایت کنید.",
          ),
          L(
            "Raise other people's level: mentor seniors, sponsor someone for stretch work, delegate on purpose.",
            "به رشد دیگران کمک کنید: مهندس‌های ارشد را mentor کنید، حامی کسی برای پذیرفتن کاری فراتر از تجربه‌ی فعلی‌اش باشید و کارها را هدفمند واگذار کنید.",
          ),
          L(
            "Write strategy others can reuse: one or two pages of decisions, trade-offs and what you are not doing.",
            "استراتژی را طوری بنویسید که دیگران بتوانند از آن استفاده کنند: یک یا دو صفحه درباره‌ی تصمیم‌ها، trade-offها و کارهایی که انجام نخواهید داد.",
          ),
        ],
        stop: [
          L(
            "Being the hero who takes the hardest work personally. Your job is to make the work doable for many.",
            "پذیرفتن نقش قهرمانی که سخت‌ترین کارها را خودش انجام می‌دهد. مسئولیت شما این است که افراد بیشتری بتوانند از عهده‌ی کار برآیند.",
          ),
          L(
            "Defending your team's priority when the organisation's priority is different.",
            "پافشاری بر اولویت تیم خود، وقتی اولویت سازمان چیز دیگری است.",
          ),
          L(
            "Measuring yourself by output. Judge yourself by what the people around you shipped.",
            "ارزیابی خود بر اساس حجم خروجی شخصی. عملکردتان را با کارهایی بسنجید که همکاران اطرافتان توانسته‌اند تحویل دهند.",
          ),
          L(
            "Waiting for permission to work across team boundaries.",
            "منتظر اجازه ماندن برای همکاری فراتر از مرزهای تیم.",
          ),
        ],
        moves: {
          contribution: [
            L(
              "Take a problem with a year-long horizon and write a plan with milestones that other teams can commit to.",
              "مساله‌ای با افق یک‌ساله انتخاب کنید و برنامه‌ای با milestoneهای مشخص بنویسید که تیم‌های دیگر بتوانند به آن متعهد شوند.",
            ),
            L(
              "Decide when to invest in something new and when to improve step by step, and record the decision and its reasons.",
              "تشخیص دهید چه زمانی باید روی کار جدید سرمایه‌گذاری کرد و چه زمانی بهبود تدریجی مناسب‌تر است. تصمیم و دلایل آن را ثبت کنید.",
            ),
            L(
              "Stop or reshape a project, for reasons others accept, and say so openly.",
              "با دلایلی که برای دیگران پذیرفتنی است، پروژه‌ای را متوقف کنید یا مسیر آن را تغییر دهید و تصمیم را شفاف اعلام کنید.",
            ),
          ],
          challenge: [
            L(
              "Take a problem even senior leaders can't define yet and turn it into a plan several teams can run.",
              "مساله‌ای را که حتی رهبران ارشد هنوز نمی‌توانند دقیق تعریف کنند، به برنامه‌ای تبدیل کنید که چند تیم بتوانند اجرا کنند.",
            ),
            L(
              "Reduce complexity on purpose: pick one reliability, performance or security area and prevent a whole class of problems.",
              "آگاهانه پیچیدگی را کاهش دهید: در یکی از حوزه‌های اتکاپذیری، کارایی یا امنیت، از بروز مجموعه‌ای از مشکلات هم‌ریشه پیشگیری کنید.",
            ),
            L(
              "Find the area of work that will matter in six to twelve months, and make the case before anyone asks.",
              "حوزه‌ای را شناسایی کنید که شش تا دوازده ماه دیگر اهمیت پیدا می‌کند و پیش از آن‌که کسی از شما بخواهد، دلایل پرداختن به آن را ارائه دهید.",
            ),
          ],
          influence: [
            L(
              "Build a group of ten or more across teams around one direction, with a regular forum.",
              "گروهی ده‌نفره یا بزرگ‌تر از تیم‌های مختلف تشکیل دهید، آن‌ها را بر سر یک جهت مشترک همسو کنید و جلسات منظم داشته باشید.",
            ),
            L(
              "Mediate between two groups with competing priorities and write down the shared outcome.",
              "بین دو گروه با اولویت‌های متفاوت و گاه متعارض میانجی‌گری کنید و نتیجه‌ی مورد توافق را مکتوب کنید.",
            ),
            L(
              "Mentor a senior engineer and sponsor someone for a stretch assignment.",
              "یک مهندس ارشد را mentor کنید و برای پذیرفتن کاری فراتر از تجربه‌ی فعلی، حامی فردی در یک stretch assignment باشید.",
            ),
          ],
          expertise: [
            L(
              "Be the go-to person in your specialty, and learn neighbouring systems well enough to advise outside it.",
              "در تخصص خود مرجع باشید و سیستم‌های مرتبط را آن‌قدر خوب بشناسید که در زمینه‌های دیگر هم بتوانید مشورت دهید.",
            ),
            L(
              "Learn the architecture of the whole product area, and steer teams away from building duplicate systems.",
              "معماری کل حوزه‌ی محصولی را بشناسید و تیم‌ها را هدایت کنید تا سیستم‌های تکراری نسازند.",
            ),
            L(
              "Learn what your area costs and earns, so your recommendations speak the language of the business.",
              "هزینه‌ها و درآمد حوزه‌ی کاری‌تان را بشناسید تا پیشنهادهایتان با منطق کسب‌وکار سازگار باشند.",
            ),
          ],
        },
        evidence: [
          L(
            "Set the 12-month reliability strategy for five teams; one class of incidents fell by half and two teams retired duplicate systems.",
            "استراتژی 12 ماهه‌ی اتکاپذیری را برای پنج تیم تعیین کرد. تعداد incidentهای ناشی از یک نوع مشکل نصف شد و دو تیم سیستم‌های تکراری را کنار گذاشتند.",
          ),
          L(
            "Mediated between the platform and product groups: three launches protected, two deferred, and both directors agreed.",
            "بین گروه‌های پلتفرم و محصول میانجی‌گری کرد: برنامه‌ی سه launch حفظ شد، دو launch به تعویق افتاد و مدیران هر دو گروه با تصمیم موافقت کردند.",
          ),
          L(
            "Two engineers she mentored were promoted to {L5}, and her design-review guide is now used across the organisation.",
            "دو مهندسی که mentor کرده بود به {L5} ارتقا یافتند و راهنمای design review او اکنون در سراسر سازمان استفاده می‌شود.",
          ),
          L(
            "A project he proposed with no mandate became a top-three priority and shipped within the year.",
            "پروژه‌ای که بدون محول شدن مسئولیتی از سوی دیگران پیشنهاد کرده بود، به یکی از سه اولویت اصلی تبدیل شد و ظرف همان سال به نتیجه رسید.",
          ),
        ],
        ask: [
          L(
            "Which large problem could I lead where even you can't yet see the solution?",
            "هدایت کدام مساله‌ی بزرگ را می‌توانم بر عهده بگیرم که حتی شما هنوز راه‌حلش را نمی‌دانید؟",
          ),
          L(
            "Who beyond my team would speak to my impact, and what can I do for them first?",
            "چه کسانی بیرون از تیم می‌توانند اثرگذاری من را تایید کنند و ابتدا چه کاری می‌توانم برای آن‌ها انجام دهم؟",
          ),
          L(
            "For {L6}, what would the committee need that I can't produce inside my current team's scope?",
            "برای {L6}، کمیته به چه شواهدی نیاز دارد که در scope فعلی تیمم امکان فراهم کردنشان را ندارم؟",
          ),
        ],
        pitfalls: [
          L(
            "Next-level work with no sponsor: nobody senior sees it, so nobody can quote it.",
            "کار در سطح بعد بدون حامی: هیچ فرد ارشدی کارتان را نمی‌بیند، بنابراین کسی نمی‌تواند با استناد به آن از شما دفاع کند.",
          ),
          L(
            "Trying to be {L5} harder, with more output, instead of doing different work.",
            "تلاش برای انجام بیشترِ همان کارهای {L5}، به‌جای تغییر جنس کار.",
          ),
          L(
            "A strategy document with no follow-through: pages written, but nothing changed in what teams do.",
            "نوشتن استراتژی بدون پیگیری اجرا: سند آماده است، اما تغییری در شیوه‌ی کار تیم‌ها ایجاد نشده است.",
          ),
        ],
      },

      /* ============================ L6 → L7 ============================ */
      {
        from: "L6",
        to: "L7",
        headline: L(
          "From steering strategy to anchoring a technical area for the company.",
          "از راهبری استراتژی به مرجعیت و پاسخگویی در قبال یک حوزه‌ی فنی در کل شرکت.",
        ),
        timeline: L(
          "Very rare, and usually bespoke. There is no credible public data on time in level. Published ladders describe the top technical level as tied to a company-critical specialism and a horizon of several years, and say it is not automatic.",
          "رسیدن به این سطح بسیار نادر است و معمولا متناسب با شرایط هر فرد و سازمان تعریف می‌شود. داده‌ی عمومی معتبری درباره‌ی مدت ماندن در سطح وجود ندارد. نردبان‌های منتشرشده، بالاترین سطح فنی را با تخصصی حیاتی برای شرکت و افقی چندساله پیوند می‌دهند و تاکید می‌کنند که رسیدن به آن خودکار نیست.",
        ),
        start: [
          L(
            "Take accountability for a technical area the company's strategy depends on.",
            "مسئولیت و پاسخگویی حوزه‌ای فنی را بپذیرید که استراتژی شرکت به آن وابسته است.",
          ),
          L(
            "Be the person who answers the hard questions about it, from other teams and from leadership.",
            "مرجع پاسخ به سوال‌های دشوار تیم‌های دیگر و رهبران سازمان درباره‌ی این حوزه باشید.",
          ),
          L(
            "Grow people and practices that keep working after you step away.",
            "افراد را توانمند کنید و رویه‌هایی شکل دهید که پس از کنار رفتن شما هم کارآمد بمانند.",
          ),
          L(
            "Spot large-scale problems worth solving and cut them into projects, some for your teams and some for others.",
            "مساله‌های کلانی را که ارزش حل کردن دارند شناسایی کنید و به پروژه‌هایی برای تیم‌های خود و تیم‌های دیگر تقسیم کنید.",
          ),
        ],
        stop: [
          L(
            "Being the bottleneck on every decision in your area.",
            "تبدیل شدن به گلوگاه همه‌ی تصمیم‌های حوزه‌ی کاری‌تان.",
          ),
          L(
            "Relying on personal relationships where a mechanism would last longer.",
            "تکیه بر روابط شخصی، جایی که می‌توان سازوکاری ماندگارتر ایجاد کرد.",
          ),
          L(
            "Doing work that a strong {L6} could do, because you're faster.",
            "انجام کارهایی که یک مهندس توانمند در {L6} هم از عهده‌شان برمی‌آید، صرفا چون شما سریع‌ترید.",
          ),
          L(
            "Treating the title as the goal. At this altitude the area has to need you.",
            "هدف قرار دادن عنوان شغلی. در این سطح، حوزه‌ی کاری باید به نقش شما نیاز داشته باشد.",
          ),
        ],
        moves: {
          contribution: [
            L(
              "Run several large efforts at once, and make each one succeed without you in every meeting.",
              "چند پروژه‌ی بزرگ را هم‌زمان پیش ببرید و شرایط موفقیت هرکدام را فراهم کنید، بدون آن‌که لازم باشد در همه‌ی جلسات حضور داشته باشید.",
            ),
            L(
              "Find and remove what slows delivery across many teams, so quality holds as the organisation grows.",
              "موانع تحویل کار در تیم‌های متعدد را شناسایی و برطرف کنید تا با رشد سازمان، کیفیت حفظ شود.",
            ),
            L(
              "Look after the most sensitive, complex systems, and stay answerable for how they turn out.",
              "مسئولیت نگهداری حساس‌ترین و پیچیده‌ترین سیستم‌ها را بر عهده بگیرید و پاسخگوی عملکرد و نتایج آن‌ها بمانید.",
            ),
          ],
          challenge: [
            L(
              "Work on problems that need new ideas, not just patterns the industry already knows.",
              "روی مساله‌هایی کار کنید که به ایده‌های تازه نیاز دارند و با الگوهای شناخته‌شده‌ی صنعت به‌تنهایی حل نمی‌شوند.",
            ),
            L(
              "Break one company-scale problem into projects for different teams, and hand them off with clear outcomes.",
              "یک مساله در مقیاس شرکت را به پروژه‌هایی برای تیم‌های مختلف تقسیم کنید و هر پروژه را با نتیجه‌ی مورد انتظار مشخص واگذار کنید.",
            ),
            L(
              "Plan across several years and many systems, and say what you'd decide differently if the plan fails.",
              "برای افقی چندساله و با در نظر گرفتن سیستم‌های متعدد برنامه‌ریزی کنید و توضیح دهید اگر برنامه به نتیجه نرسد، کدام تصمیم‌ها را تغییر می‌دهید.",
            ),
          ],
          influence: [
            L(
              "Align cross-functional leaders on goals, strategy and priorities.",
              "رهبران cross-functional را بر سر اهداف، استراتژی و اولویت‌ها همسو کنید.",
            ),
            L(
              "When teams hold opposed views, state each side so well that both recognise it, then help them reach consensus.",
              "وقتی تیم‌ها دیدگاه‌های متضاد دارند، موضع هر طرف را طوری بیان کنید که آن را بازتاب دقیق دیدگاه خود بداند. سپس کمک کنید به اجماع برسند.",
            ),
            L(
              "Grow the people and practices so others can carry the work on without you.",
              "به رشد افراد و بهبود رویه‌ها کمک کنید تا دیگران بتوانند کار را بدون شما ادامه دهند.",
            ),
          ],
          expertise: [
            L(
              "Hold broad and deep knowledge of systems, technologies and processes, and be the recognised authority of a major system.",
              "دانش گسترده و عمیقی از سیستم‌ها، تکنولوژی‌ها و فرایندها داشته باشید و به‌عنوان مرجع یک سیستم مهم شناخته شوید.",
            ),
            L(
              "Understand the product and its users across a whole area, well enough that leaders rely on your view.",
              "محصول و کاربرانش را در سراسر حوزه‌ی کاری آن‌قدر خوب بشناسید که رهبران سازمان به قضاوت شما تکیه کنند.",
            ),
            L(
              "Mentor staff-plus engineers and leaders, not only seniors.",
              "علاوه بر مهندس‌های ارشد، مهندس‌های staff و بالاتر و رهبران را هم mentor کنید.",
            ),
          ],
        },
        evidence: [
          L(
            "Because of the data platform she anchored, three product areas now run experiments they couldn't run two years ago.",
            "به پشتوانه‌ی پلتفرم داده‌ای که او مسئولیت راهبری آن را بر عهده داشت، سه حوزه‌ی محصولی اکنون آزمایش‌هایی انجام می‌دهند که دو سال پیش امکانشان را نداشتند.",
          ),
          L(
            "Engineers from four organisations bring architecture disputes to him, and both sides leave feeling heard.",
            "مهندس‌هایی از چهار سازمان، اختلاف‌نظرهای معماری را برای حل‌وفصل نزد او می‌آورند و هر دو طرف احساس می‌کنند دیدگاهشان شنیده شده است.",
          ),
          L(
            "The reliability practices she introduced kept running and improving a year after she moved to a new area.",
            "رویه‌های اتکاپذیری که او معرفی کرده بود، یک سال پس از انتقالش به حوزه‌ای دیگر همچنان اجرا می‌شدند و بهبود پیدا می‌کردند.",
          ),
          L(
            "Leadership asks for his view before committing to technical bets that span several years.",
            "رهبران سازمان پیش از تصمیم‌گیری درباره‌ی سرمایه‌گذاری‌های فنی چندساله، نظر او را می‌پرسند.",
          ),
        ],
        ask: [
          L(
            "Which technical area does the company's strategy depend on that doesn't yet have a clear anchor?",
            "استراتژی شرکت به کدام حوزه‌ی فنی وابسته است که هنوز مرجع و مسئول مشخصی ندارد؟",
          ),
          L(
            "What would have to be true for several efforts to succeed without me present in each?",
            "چه شرایطی باید فراهم شود تا چند پروژه، بدون حضور من در تک‌تک آن‌ها، با موفقیت پیش بروند؟",
          ),
          L(
            "Who are the leaders I should be building trust with, and what do they need to see?",
            "باید با کدام رهبران رابطه‌ای مبتنی بر اعتماد بسازم و آن‌ها برای اعتماد کردن به من چه شواهدی نیاز دارند؟",
          ),
        ],
        pitfalls: [
          L(
            "Treating this as “{L6} for longer”. The step is about accountability for an area, not tenure.",
            "تلقی این گام به‌عنوان «ماندن طولانی‌تر در {L6}». معیار این سطح، مسئولیت و پاسخگویی یک حوزه است، نه مدت حضور در سطح قبلی.",
          ),
          L(
            "Becoming the single point of knowledge. An anchor is measured by what keeps working without them.",
            "تبدیل شدن به تنها فردی که دانش لازم را دارد. ارزش یک مرجع را با کارهایی می‌سنجند که بدون حضور او هم ادامه می‌یابند.",
          ),
          L(
            "Choosing the area for its prestige. The area has to matter to the company, or the level has no ground to stand on.",
            "انتخاب حوزه صرفا به‌خاطر اعتبار آن. حوزه باید برای شرکت اهمیت داشته باشد تا رسیدن به این سطح توجیهی داشته باشد.",
          ),
        ],
      },
    ],

    /* ============================ the eight stall patterns ============================ */
    stall: [
      {
        id: "waiting",
        title: L(
          "Waiting to be given scope",
          "منتظر ماندن برای سپرده شدن scope بزرگ‌تر",
        ),
        symptoms: [
          L(
            "Your work arrives as tickets someone else wrote.",
            "کارها به‌صورت ticketهایی به شما سپرده می‌شوند که فرد دیگری تعریف کرده است.",
          ),
          L(
            "You are “ready for the next level” and expect the next project to prove it.",
            "خودتان را آماده‌ی سطح بعد می‌دانید و انتظار دارید پروژه‌ی بعدی فرصتی برای اثبات آن باشد.",
          ),
          L(
            "Your manager says “soon”, and you haven't asked what soon needs.",
            "مدیرتان می‌گوید «به‌زودی»، اما نپرسیده‌اید برای رسیدن به آن نقطه چه شرایطی باید فراهم شود.",
          ),
        ],
        cause: L(
          "Scope grows when someone takes it, with their manager's knowledge. Most people wait for the invitation, and managers rarely know which engineers want bigger work.",
          "scope زمانی گسترش پیدا می‌کند که فرد، با اطلاع مدیرش، مسئولیت بیشتری بر عهده بگیرد. بیشتر افراد منتظر می‌مانند کاری به آن‌ها پیشنهاد شود. مدیران هم اغلب نمی‌دانند کدام مهندس‌ها خواهان کار بزرگ‌تری هستند.",
        ),
        fix: [
          L(
            "Find the first problem of the next size on the roadmap, and ask for it by name.",
            "اولین مساله‌ی roadmap را که در مقیاس سطح بعد است پیدا کنید و مشخصا مسئولیت همان را بخواهید.",
          ),
          L(
            "Write a one-page proposal for a problem nobody has claimed, and offer to lead it.",
            "برای مساله‌ای که هنوز کسی مسئولیتش را بر عهده نگرفته، پیشنهادی یک‌صفحه‌ای بنویسید و برای هدایت آن داوطلب شوید.",
          ),
          L(
            "Ask your manager: “What would you need to see to give me a project like that?” Write down the answer.",
            "از مدیرتان بپرسید: «برای سپردن چنین پروژه‌ای به من، چه چیزی باید ببینید؟» پاسخ را یادداشت کنید.",
          ),
        ],
      },

      {
        id: "busy",
        title: L(
          "Busy, but not moving anything",
          "پرمشغله بودن بدون نتیجه‌ی ملموس",
        ),
        symptoms: [
          L(
            "Your year-end list is long and every line starts with a verb of activity.",
            "فهرست کارهای پایان سالتان طولانی است، اما هر مورد فقط شرح فعالیتی است که انجام داده‌اید.",
          ),
          L(
            "You can't name the number that moved because of your work.",
            "نمی‌توانید شاخصی را نام ببرید که در نتیجه‌ی کار شما تغییر کرده باشد.",
          ),
          L(
            "People say you are reliable, and nobody says what changed.",
            "دیگران شما را قابل‌اتکا می‌دانند، اما نمی‌گویند کارتان چه تغییری ایجاد کرده است.",
          ),
        ],
        cause: L(
          "Output is easy to see from the inside. A panel needs outcomes: what changed for users, teammates or the business, and by how much.",
          "وقتی درگیر کار هستید، خروجی‌ها به‌راحتی دیده می‌شوند. اما کمیته‌ی ارزیابی به نتیجه نیاز دارد: برای کاربران، هم‌تیمی‌ها یا کسب‌وکار چه چیزی تغییر کرده و به چه میزان؟",
        ),
        fix: [
          L(
            "For each of your last three projects, write the metric it was meant to move, before and after.",
            "برای هرکدام از سه پروژه‌ی اخیر، مشخص کنید قرار بود کدام شاخص تغییر کند و مقدار آن را پیش و پس از پروژه بنویسید.",
          ),
          L(
            "End every project update with a “so what” line.",
            "هر گزارش وضعیت پروژه را با جمله‌ای تمام کنید که روشن کند این کار چه نتیجه یا فایده‌ای داشته است.",
          ),
          L(
            "Before you accept a new project, ask what success will look like and how it will be measured.",
            "پیش از پذیرفتن پروژه‌ی جدید، بپرسید موفقیت در آن چه معنایی دارد و چگونه سنجیده می‌شود.",
          ),
        ],
      },

      {
        id: "invisible",
        title: L(
          "Good work nobody can quote",
          "کار خوبی که دیگران نمی‌توانند به آن استناد کنند",
        ),
        symptoms: [
          L(
            "Your manager likes your work but struggles to describe it to others.",
            "مدیرتان از کار شما راضی است، اما برای توضیح آن به دیگران مشکل دارد.",
          ),
          L(
            "The most important work happened a year ago and you can't find the details.",
            "مهم‌ترین کارتان را یک سال پیش انجام داده‌اید و حالا جزئیاتش را پیدا نمی‌کنید.",
          ),
          L(
            "You are surprised by what comes back in peer feedback.",
            "بازخورد همکاران برایتان غیرمنتظره است.",
          ),
        ],
        cause: L(
          "Memory fades faster than people expect, and a committee sees only what is written. If the case can't be told in two sentences, it won't be told.",
          "جزئیات کار زودتر از آنچه فکر می‌کنیم از یاد می‌روند و کمیته فقط شواهد مکتوب را می‌بیند. اگر نتوان دستاوردتان را در دو جمله توضیح داد، احتمالا در جلسه هم مطرح نخواهد شد.",
        ),
        fix: [
          L(
            "Start an evidence log today. Two lines after each meaningful thing: what happened, your role, who benefited.",
            "از همین امروز ثبت دستاوردها را شروع کنید. بعد از هر کار مهم، در دو خط بنویسید چه اتفاقی افتاد، نقش شما چه بود و چه کسی از نتیجه بهره برد.",
          ),
          L(
            "Ask partners who benefited for one sentence, with a number if they have one.",
            "از همکارانی که از نتیجه‌ی کارتان بهره برده‌اند بخواهید اثر آن را در یک جمله توضیح دهند. اگر عددی دارند، آن را هم بیاورند.",
          ),
          L(
            "Share a draft of your case with your manager each cycle and ask what is missing.",
            "در هر دوره‌ی ارزیابی، پیش‌نویس پرونده‌تان را با مدیر مرور کنید و بپرسید چه شواهدی کم است.",
          ),
        ],
      },

      {
        id: "nosponsor",
        title: L(
          "Next-level work without a sponsor",
          "کار در سطح بعد بدون حامی",
        ),
        symptoms: [
          L(
            "Your manager is supportive, but nobody senior outside your team knows your name.",
            "مدیرتان از شما حمایت می‌کند، اما هیچ فرد ارشدی بیرون از تیم شما را نمی‌شناسد.",
          ),
          L(
            "In calibration your case is described, not argued.",
            "در جلسه‌ی calibration، پرونده‌تان فقط شرح داده می‌شود و کسی از آن دفاع نمی‌کند.",
          ),
          L(
            "You have mentors, but no one who spends their own credibility on you.",
            "mentor دارید، اما کسی حاضر نیست اعتبار خودش را پشت حمایت از شما بگذارد.",
          ),
        ],
        cause: L(
          "A mentor gives advice; a sponsor puts your name forward in rooms you aren't in. Promotion cases are decided in those rooms. Research on high-potential professionals found women were over-mentored and under-sponsored.",
          "mentor شما را راهنمایی می‌کند. حامی یا sponsor در جلساتی که حضور ندارید، نام و دستاوردهایتان را مطرح می‌کند. تصمیم درباره‌ی ارتقا در همین جلسات گرفته می‌شود. پژوهشی درباره‌ی افراد مستعد رشد حرفه‌ای نشان داده است که زنان بیش از نیازشان mentoring دریافت می‌کردند، اما از حمایت sponsorها کمتر برخوردار بودند.",
        ),
        fix: [
          L(
            "Do visible work for the senior people you'd like as sponsors, and make it easy for them to describe it.",
            "با افراد ارشدی که می‌خواهید حامی‌تان باشند، کارهایی انجام دهید که نتیجه‌شان دیده شود و توضیح دستاوردها را برای آن‌ها آسان کنید.",
          ),
          L(
            "Share your promotion packet draft early, so your advocates know what to say.",
            "پیش‌نویس پرونده‌ی ارتقا را زود به اشتراک بگذارید تا حامیانتان بدانند با چه شواهدی از شما دفاع کنند.",
          ),
          L(
            "Ask your manager who in the organisation would speak to your impact, and make a plan to work with them.",
            "از مدیرتان بپرسید چه کسانی در سازمان می‌توانند اثرگذاری شما را تایید کنند و برای همکاری با آن‌ها برنامه‌ریزی کنید.",
          ),
        ],
      },

      {
        id: "glue",
        title: L(
          "Glue work with no credit",
          "glue work بدون به‌رسمیت‌شناخته‌شدن",
        ),
        symptoms: [
          L(
            "You are the one who onboards, unblocks, writes the notes and chases the other teams.",
            "مسئول onboarding، رفع موانع کار، نوشتن یادداشت‌ها و پیگیری هماهنگی با تیم‌های دیگر معمولا شما هستید.",
          ),
          L(
            "The work is appreciated warmly and left out of every promotion discussion.",
            "از کارتان بسیار قدردانی می‌شود، اما در هیچ‌کدام از بحث‌های ارتقا جایی ندارد.",
          ),
          L(
            "You are moving toward project management without having chosen it.",
            "بدون آن‌که خودتان انتخاب کرده باشید، به سمت مدیریت پروژه می‌روید.",
          ),
        ],
        cause: L(
          "Glue work (unblocking, onboarding, standards, cross-team alignment) is genuinely valuable, but it is invisible to most criteria and easy to dump on the same few people. It is a risk to your technical standing when it replaces your own growth work.",
          "glue work، یعنی کارهایی مثل رفع موانع، onboarding، تدوین استانداردها و همسوسازی تیم‌ها، ارزشمند است. اما در بیشتر معیارهای ارزیابی دیده نمی‌شود و به‌راحتی به مسئولیت دائمی همان چند نفر تبدیل می‌شود. اگر جای کارهایی را بگیرد که به رشد فنی خودتان کمک می‌کنند، جایگاه فنی‌تان را به خطر می‌اندازد.",
        ),
        fix: [
          L(
            "Do it on purpose, and turn it into an artifact: a guide, a checklist, a rotation. Then it counts as scaling others.",
            "این کارها را هدفمند انجام دهید و نتیجه را به یک artifact قابل‌استفاده تبدیل کنید: راهنما، چک‌لیست یا برنامه‌ی نوبت‌بندی. به این شکل، می‌توان آن را شاهدی برای افزایش توان و اثرگذاری دیگران دانست.",
          ),
          L(
            "Share the load: rotate the notes and onboarding between people, including seniors.",
            "مسئولیت‌ها را تقسیم کنید: نوشتن یادداشت‌ها و onboarding را به‌نوبت به افراد مختلف، از جمله همکاران ارشد، بسپارید.",
          ),
          L(
            "Say it out loud in your next career conversation, and ask your manager to track and credit it.",
            "در گفتگوی بعدی درباره‌ی مسیر شغلی، این کارها را صریح مطرح کنید و از مدیرتان بخواهید آن‌ها را ثبت کند و در ارزیابی شما به حساب بیاورد.",
          ),
        ],
      },

      {
        id: "hero",
        title: L("The hero habit", "عادت قهرمان‌بازی"),
        symptoms: [
          L(
            "You're the person who stays up to save the release.",
            "شما همان کسی هستید که برای نجات release شب را بیدار می‌ماند.",
          ),
          L(
            "Nobody else can run the system you built without calling you.",
            "هیچ‌کس بدون تماس با شما نمی‌تواند سیستمی را که ساخته‌اید اداره کند.",
          ),
          L(
            "Your best stories are rescues, and your quiet prevention goes unseen.",
            "برجسته‌ترین روایت‌هایتان از نجات کار در لحظه‌ی بحران است و پیشگیری‌های بی‌سروصدایتان دیده نمی‌شوند.",
          ),
        ],
        cause: L(
          "Heroics are visible, prevention is not, and a person who is the only one who can fix something is a single point of failure, not a leader. The habit feels like commitment, but it caps how far your impact can scale.",
          "قهرمان‌بازی به چشم می‌آید، اما پیشگیری معمولا دیده نمی‌شود. کسی که تنها فرد قادر به حل یک مشکل است، به single point of failure تبدیل می‌شود، نه یک رهبر. این عادت ممکن است نشانه‌ی تعهد به نظر برسد، اما دامنه‌ی اثرگذاری شما را محدود می‌کند.",
        ),
        fix: [
          L(
            "Make prevention visible: flag the risk early, ship the fallback, and write the plan down.",
            "اثر پیشگیری را نشان دهید: ریسک را زود مطرح کنید، fallback آماده و قابل‌استفاده داشته باشید و برنامه را مستند کنید.",
          ),
          L(
            "After each rescue, leave behind a runbook, an alert or a test that makes the next one unnecessary.",
            "پس از هر بار مهار بحران، یک runbook، alert یا تست اضافه کنید تا دفعه‌ی بعد نیازی به همان مداخله نباشد.",
          ),
          L(
            "Pair someone in on every incident you lead, so the knowledge isn't only yours.",
            "در هر incident که هدایت می‌کنید، فرد دیگری را هم همراه کنید تا دانش حل مساله فقط نزد شما نماند.",
          ),
        ],
      },

      {
        id: "spiky",
        title: L("One dominant weakness", "یک ضعف تعیین‌کننده"),
        symptoms: [
          L(
            "Three lenses are strong and one is clearly empty.",
            "در سه بُعد عملکرد قوی دارید، اما در یک بُعد شواهد روشنی از توانمندی شما دیده نمی‌شود.",
          ),
          L(
            "The same feedback has come back for two cycles in different words.",
            "در دو دوره‌ی ارزیابی، همان بازخورد را با بیان‌های متفاوت دریافت کرده‌اید.",
          ),
          L(
            "You keep polishing what you are already best at.",
            "همچنان روی تقویت مهارتی کار می‌کنید که از قبل نقطه‌ی قوت شماست.",
          ),
        ],
        cause: L(
          "Published ladders say the same thing: higher levels tolerate fewer significant gaps, and one dominant weakness can block a case even when everything else is strong. Strong engineers drift toward the lens they enjoy.",
          "نردبان‌های منتشرشده بر این نکته توافق دارند: در سطح‌های بالاتر، کاستی‌های مهم کمتری پذیرفته می‌شود و یک ضعف تعیین‌کننده می‌تواند مانع ارتقا شود، حتی اگر در بقیه‌ی ابعاد قوی باشید. مهندس‌های توانمند هم معمولا به سراغ بُعدی می‌روند که از کار در آن لذت می‌برند.",
        ),
        fix: [
          L(
            "Find the emptiest lens (the “Where am I?” page will point to it) and plan one piece of work this quarter that produces evidence for it.",
            "بُعدی را پیدا کنید که کمترین شواهد را برای آن دارید. صفحه‌ی «من کجا هستم؟» کمک می‌کند. برای همین فصل، کاری برنامه‌ریزی کنید که توانمندی شما را در آن بُعد نشان دهد.",
          ),
          L(
            "Ask your manager and a peer to fill in the lens grid about you separately, then compare.",
            "از مدیر و یکی از همکارانتان بخواهید هرکدام جداگانه جدول ابعاد را برای شما پر کنند. سپس نتایج را مقایسه کنید.",
          ),
          L(
            "Stop adding to your strongest lens. A first example in an empty lens is worth more than a fifth in a full one.",
            "فعلا به شواهد قوی‌ترین بُعدتان اضافه نکنید. اولین نمونه در بُعدی که شاهدی برایش ندارید، از پنجمین نمونه در بُعدی که شواهد کافی دارد ارزشمندتر است.",
          ),
        ],
      },

      {
        id: "unfinished",
        title: L(
          "Starting big, not finishing",
          "شروع پروژه‌های بزرگ و تمام نکردن آن‌ها",
        ),
        symptoms: [
          L(
            "Your portfolio has three ambitious projects, two of them at “mostly done”.",
            "در سابقه‌ی کارتان سه پروژه‌ی بلندپروازانه دارید که دو موردشان هنوز «تقریبا تمام‌شده» هستند.",
          ),
          L(
            "Old systems still run, next to the new ones that were meant to replace them.",
            "سیستم‌های قدیمی همچنان در کنار سیستم‌های جدیدی کار می‌کنند که قرار بود جایگزین آن‌ها شوند.",
          ),
          L(
            "Each new idea is more exciting than closing the last one.",
            "هر ایده‌ی تازه برایتان جذاب‌تر از به‌سرانجام‌رساندن کار قبلی است.",
          ),
        ],
        cause: L(
          "Migrations and big changes are judged by whether they finish, not by whether they started well. An unfinished migration leaves two systems to maintain and costs trust, and the last ten percent is the part nobody wants.",
          "معیار موفقیت migrationها و تغییرات بزرگ، به‌پایان‌رسیدن آن‌هاست، نه فقط شروع خوب. migration نیمه‌کاره یعنی باید دو سیستم را نگهداری کنید و اعتماد دیگران هم آسیب می‌بیند. ده درصد آخر کار همان بخشی است که معمولا کسی تمایلی به انجامش ندارد.",
        ),
        fix: [
          L(
            "Before starting, define “finished”: which old system is retired and by which date.",
            "پیش از شروع، تعریف کنید چه زمانی کار «تمام‌شده» محسوب می‌شود: کدام سیستم قدیمی باید کنار گذاشته شود و تا چه تاریخی؟",
          ),
          L(
            "Derisk the hard cases first, automate the easy majority, then personally handle the stragglers.",
            "ابتدا ریسک موارد دشوار را کاهش دهید، انجام بخش عمده‌ی موارد ساده را خودکار کنید و سپس خودتان به موارد باقی‌مانده رسیدگی کنید.",
          ),
          L(
            "Limit work in progress: don't start the next big thing until the last one has a retirement date.",
            "تعداد کارهای در جریان را محدود کنید: تا وقتی زمان کنار گذاشتن سیستم قبلی مشخص نشده است، پروژه‌ی بزرگ بعدی را شروع نکنید.",
          ),
        ],
      },
    ],
  };
})();

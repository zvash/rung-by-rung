/* "Hired at the right level": design altitudes, story altitudes, evidence checklist, conversation scripts,
   composite case studies and scope-in-numbers rewrites. Registers S.data.hire.{design, stories, checklist,
   scripts, examples, numbers}. All people, companies and numbers are illustrative composites.
   ==highlight== marks the phrases a panel would quote inside the stories. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;
  var H = S.data.hire = S.data.hire || {};

  /* ---------------- 1. one system-design question, three altitudes ---------------- */
  H.design = {
    prompt: L("“Design a notification service that sends email, SMS and push messages to millions of users.”",
              "«یک notification service طراحی کنید که برای میلیون‌ها کاربر ایمیل، SMS و push ارسال کند.»"),
    levels: [
      { lv: "L4",
        says: [
          L("Opens with clarifying questions: “Which channels? Transactional, marketing or both? How many messages at peak, and must one arrive in seconds or are minutes fine?”",
            "با چند پرسش شروع می‌کند: «کدام کانال‌ها؟ تراکنشی، تبلیغاتی یا هر دو؟ در اوج چند پیام در روز، و پیام باید ظرف چند ثانیه برسد یا چند دقیقه هم اشکالی ندارد؟»"),
          L("Proposes an API and schema unprompted: a send call taking user, template, channel and an idempotency key; a notifications table with a status column; a per-user preferences table.",
            "بدون این‌که بخواهند، API و schema پیشنهاد می‌دهد: یک endpoint ارسال که کاربر، template، کانال و یک idempotency key می‌گیرد؛ جدولی برای notificationها با ستون status؛ و جدولی برای تنظیمات هر کاربر."),
          L("Draws the main flow: API, queue, a worker pool per channel, the email, SMS and push providers, and provider callbacks that update status. Adds retries with backoff, a dead-letter queue and a basic dashboard of sends and failures.",
            "جریان اصلی را می‌کشد: API، صف، یک worker pool برای هر کانال، providerهای ایمیل، SMS و push، و callbackهای provider که status را به‌روز می‌کنند. retry با backoff، یک dead-letter queue و یک داشبورد ساده از ارسال‌ها و خطاها هم اضافه می‌کند."),
          L("Reasons aloud through “what if the SMS provider is down?” and reaches failover with a nudge. Some boxes, like the template service, stay abstract until the interviewer asks to zoom in.",
            "وقتی می‌پرسند «اگر provider SMS از کار بیفتد چه؟»، بلند فکر می‌کند و با یک اشاره‌ی مصاحبه‌کننده به failover می‌رسد. بعضی جعبه‌ها، مثل template service، کلی می‌مانند تا مصاحبه‌کننده بخواهد واردشان شود.")
        ],
        signals: [
          L("Leads the first part unprompted: requirements, API, schema and a coherent high-level design.",
            "بخش اول مصاحبه را بی‌آن‌که کسی بخواهد خودش پیش می‌برد: نیازمندی‌ها، API، schema و یک طراحی سطح‌بالای منسجم."),
          L("Mostly breadth (roughly 80/20 against depth): the core flow holds together, and detail arrives when the interviewer pulls on a thread.",
            "بیشتر عرض است تا عمق (حدود 80 به 20): جریان اصلی منسجم است و جزئیات وقتی می‌آید که مصاحبه‌کننده سراغ یک نکته برود."),
          L("Takes a hint well, corrects course fast, and says what they'd look up instead of bluffing.",
            "راهنمایی را خوب می‌گیرد، سریع مسیر را اصلاح می‌کند و به‌جای وانمود کردن، می‌گوید چه چیزی را باید نگاه کند.")
        ],
        hurts: L("Waiting to be told what to design next, or drawing boxes that can't be explained, reads as executing someone else's spec: {L3} work.",
                 "منتظر ماندن تا بگویند بعد چه طراحی کنید، یا کشیدن جعبه‌هایی که نمی‌شود توضیحشان داد، شبیه اجرای مشخصات دیگران است: کاری در سطح {L3}.")
      },
      { lv: "L5",
        says: [
          L("Names what makes it hard before drawing anything: “Sending is easy. The hard parts are avoiding duplicates, keeping a marketing blast from delaying a login code, and living with providers that throttle and fail.”",
            "پیش از کشیدن هر چیزی می‌گوید چه چیزی سخت است: «فرستادن آسان است. بخش سخت این است که پیام تکراری نرود، کمپین تبلیغاتی کد ورود را دیر نکند و با providerهایی کنار بیاییم که throttle می‌کنند و از کار می‌افتند.»"),
          L("Does the arithmetic aloud (10 million messages an hour is about 2,800 a second): provider limits, not our servers, are the bottleneck. Goes deep on delivery: an idempotency key per event, user and channel, so retries don't double-send.",
            "حساب‌وکتاب را بلند انجام می‌دهد (10 میلیون پیام در ساعت حدود 2800 پیام در ثانیه است): گلوگاه محدودیت providerهاست، نه سرورهای ما. بعد روی delivery عمیق می‌شود: یک idempotency key برای هر ترکیب event، کاربر و کانال، تا retryها پیام را دوبار نفرستند."),
          L("Spots the limit of their own design: “With one shared queue, SMS retries will clog email. I'd split queues by channel and priority, put a token bucket in front of each provider, and alert on the age of the oldest message, not just on errors.”",
            "محدودیت طراحی خودش را خودش می‌بیند: «با یک صف مشترک، retryهای SMS صف ایمیل را می‌بندند. صف‌ها را بر اساس کانال و اولویت جدا می‌کنم، جلوی هر provider یک token bucket می‌گذارم و روی مدتی که قدیمی‌ترین پیام در صف مانده alert می‌گذارم، نه فقط روی خطاها.»"),
          L("Weighs alternatives and steers: “Fanning out a campaign up front is simple but spiky; streaming through the audience in batches is smoother but has more parts. I'd stream. Quiet hours next, or provider failover?”",
            "جایگزین‌ها را می‌سنجد و مسیر را هدایت می‌کند: «fan-out کردن کمپین از همان اول ساده است ولی اوج ناگهانی می‌سازد؛ فرستادن دسته‌دسته نرم‌تر است ولی اجزای بیشتری دارد. من دسته‌دسته می‌روم. بعد quiet hours یا failover؟»")
        ],
        signals: [
          L("Names the hard problems first (duplicates, priority isolation, provider limits) instead of giving every box equal airtime.",
            "اول مساله‌های سخت را نام می‌برد (پیام تکراری، جداسازی اولویت‌ها، محدودیت providerها) و به همه‌ی جعبه‌ها زمان برابر نمی‌دهد."),
          L("Finds a weakness in their own design before the interviewer does, and says what the fix costs.",
            "ضعف طراحی خودش را پیش از مصاحبه‌کننده پیدا می‌کند و می‌گوید راه‌حلش چه هزینه‌ای دارد."),
          L("Roughly 60/40 breadth to depth, with the depth coming from hands-on specifics: what a bounce looks like, what 2,800 messages a second does to a queue.",
            "حدود 60 به 40 عرض به عمق، و عمقش از جزئیات دست‌اول می‌آید: bounce چه شکلی است، 2800 پیام در ثانیه با یک صف چه می‌کند.")
        ],
        hurts: L("A generic queue-workers-retries design where nothing is flagged as hard and no choice rests on something you've actually run keeps the answer at {L4}.",
                 "طراحی کلیشه‌ای «صف، worker، retry» که در آن هیچ نقطه‌ی سختی مشخص نشده و هیچ انتخابی به چیزی که خودتان اجرا کرده‌اید تکیه ندارد، پاسخ را در سطح {L4} نگه می‌دارد.")
      },
      { lv: "L6",
        says: [
          L("Sets the agenda: “Five minutes on requirements, then delivery guarantees, isolation between teams, cost and migration. Tell me if you'd rather skip one.” The interviewer only refocuses.",
            "دستور جلسه را خودش می‌چیند: «پنج دقیقه نیازمندی‌ها، بعد تضمین‌های delivery، جداسازی تیم‌ها، هزینه و مهاجرت. اگر موردی را نمی‌خواهید بگویید.» مصاحبه‌کننده فقط تمرکز را برمی‌گرداند."),
          L("Reframes it as a platform: “If thirty teams will call this, the hard parts are fairness and ownership. A campaign from one team must never delay another's security alert, so each team gets a quota, a priority class and a view of its own delivery status.”",
            "مساله را به یک پلتفرم تبدیل می‌کند: «اگر سی تیم از این استفاده کنند، بخش‌های سخت انصاف و ownership است. کمپین یک تیم نباید alert امنیتی تیم دیگر را دیر کند؛ پس هر تیم quota، کلاس اولویت و نمایی از وضعیت delivery خودش دارد.»"),
          L("Brings an insight nobody asked for: SMS usually costs far more than email or push, so channel choice is a cost rule. And every team is right to notify, yet together they train users to mute everything, which calls for a per-user budget across teams.",
            "نکته‌ای می‌آورد که کسی نخواسته بود: SMS معمولا خیلی گران‌تر از ایمیل یا push است، پس انتخاب کانال یک قاعده‌ی هزینه‌ای است. هر تیمی حق دارد اعلان بفرستد، ولی با هم کاربر را عادت می‌دهند همه‌چیز را mute کند؛ این یعنی به بودجه‌ی اعلان برای هر کاربر، در سطح همه‌ی تیم‌ها، نیاز داریم."),
          L("Plans the migration: “Fifteen teams already send their own email. I'd ship a client library, move the team in most pain first, shadow-send to compare output, and set a date to retire the old paths. The platform team owns delivery, product teams own content.”",
            "مهاجرت را برنامه‌ریزی می‌کند: «پانزده تیم الان خودشان ایمیل می‌فرستند. اول یک client library منتشر می‌کنم، تیمی را که بیشترین درد را دارد منتقل می‌کنم، خروجی‌ها را با shadow send مقایسه می‌کنم و برای حذف مسیرهای قدیمی تاریخ می‌گذارم. تیم پلتفرم delivery را own می‌کند و تیم‌های محصول محتوا را.»")
        ],
        signals: [
          L("Leads nearly the whole session: sets the agenda, picks where depth matters, and the interviewer only refocuses.",
            "تقریبا کل جلسه را رهبری می‌کند: دستور کار می‌چیند، تعیین می‌کند عمق کجا لازم است و مصاحبه‌کننده فقط تمرکز را برمی‌گرداند."),
          L("Roughly 40/60 breadth to depth, plus an unprompted insight: cost per channel, a per-user budget across teams, or how patchy SMS delivery receipts are across carriers.",
            "حدود 40 به 60 عرض به عمق، به‌علاوه‌ی نکته‌ای که کسی نخواسته بود: هزینه‌ی هر کانال، بودجه‌ی اعلان هر کاربر در سطح تیم‌ها، یا ناهمواری delivery receiptهای SMS میان اپراتورها."),
          L("Treats the system as an organisational problem as well as a technical one: tenants, ownership, on-call, migration, who decides priority.",
            "سیستم را هم مساله‌ی سازمانی می‌بیند و هم فنی: tenantها، ownership، on-call، مهاجرت و این‌که اولویت را چه کسی تعیین می‌کند.")
        ],
        hurts: L("Needing the interviewer to steer, or staying inside pure architecture with nothing on teams, cost or migration, reads as a strong {L5}, not {L6}.",
                 "نیاز داشتن به هدایت مصاحبه‌کننده، یا ماندن در معماری محض بدون حرفی از تیم‌ها، هزینه و مهاجرت، پاسخ را یک {L5} قوی نشان می‌دهد، نه {L6}.")
      }
    ]
  };

  /* ---------------- 2. one behavioural question, four altitudes ---------------- */
  H.stories = {
    prompt: L("“Tell me about a project that was at risk.”",
              "«از پروژه‌ای بگویید که در خطر افتاده بود.»"),
    levels: [
      { lv: "L3",
        text: L("My task was the refund-status screen in a self-service refunds project that had to launch before the 1 November sale. In week three I learned the payments team's refund API would be four weeks late, so I couldn't test my screen end to end. ==I told my lead that day, with what was blocked and what wasn't.== ==I built against a stub from the draft spec and finished my part on the original date==, with tests. While the API was late, ==I picked up the empty-state screens without being asked.== My lead re-planned the launch with the product manager. I now post risks to my tasks in the team channel as soon as I see them, not at the next stand-up.",
                "task من صفحه‌ی وضعیت بازپرداخت در پروژه‌ی بازپرداخت self-service بود، پروژه‌ای که باید پیش از کمپین فروش 1 نوامبر launch می‌شد. هفته‌ی سوم فهمیدم API بازپرداخت تیم پرداخت چهار هفته دیر می‌رسد و نمی‌توانم صفحه‌ام را end-to-end تست کنم. ==همان روز به لیدم گفتم چه چیزی block شده و چه چیزی نشده.== ==با یک stub بر اساس مشخصات پیش‌نویس جلو رفتم و بخش خودم را همراه با تست سر موعد اولیه تمام کردم.== تا وقتی API نیامده بود، ==بی‌آن‌که کسی بگوید، سراغ صفحه‌های حالت خالی رفتم.== لیدم برنامه‌ی launch را با مدیر محصول دوباره چید. حالا ریسک taskهایم را به‌محض دیدنش در کانال تیم می‌نویسم، نه در stand-up بعدی."),
        lesson: L("You flagged early and kept your own task moving. The re-plan still belonged to your lead.",
                  "زود و دقیق خبر دادید و task خودتان را جلو بردید؛ برنامه‌ریزی دوباره هنوز با لیدتان بود.")
      },
      { lv: "L4",
        text: L("I owned the self-service refunds project: three months, two teams, and a hard date at the 1 November sale. In week nine the payments team said their refund API was four weeks late. ==That afternoon I re-cut the scope: card refunds first, about 80% of cases, other payment methods after.== I sent the product manager and support two options with dates and costs. ==They chose one the next morning, and I told every stakeholder the new plan.== I built against a stub meanwhile. ==We launched on 1 November==, with ==a dashboard, an on-call runbook and a briefing for support== ready on day one. The other methods followed three weeks later, and refund tickets in sale week ran about 30% below the year before.",
                "پروژه‌ی بازپرداخت self-service را own می‌کردم: سه ماه، دو تیم، و تاریخی قطعی در کمپین فروش 1 نوامبر. هفته‌ی نهم تیم پرداخت گفت API بازپرداخت چهار هفته دیر می‌شود. ==همان بعدازظهر scope را دوباره بریدم: اول بازپرداخت کارتی، حدود 80% موارد، و بقیه‌ی روش‌های پرداخت بعدا.== دو گزینه را با تاریخ و هزینه‌شان برای مدیر محصول و پشتیبانی فرستادم. ==صبح بعد یکی را انتخاب کردند و من برنامه‌ی جدید را به همه‌ی ذی‌نفعان گفتم.== در این فاصله با یک stub جلو رفتم. ==روز 1 نوامبر launch کردیم==، و ==داشبورد، runbook برای on-call و جلسه‌ی توجیهی برای پشتیبانی== از همان روز اول آماده بود. بقیه‌ی روش‌ها سه هفته بعد آمدند و تیکت‌های بازپرداخت در هفته‌ی فروش حدود 30% کمتر از سال قبل بود."),
        lesson: L("You owned the plan: you re-cut scope, aligned stakeholders and shipped everything that makes the work complete.",
                  "برنامه را own کردید: scope را دوباره بریدید، ذی‌نفعان را همسو کردید و هر چه کار را کامل می‌کند تحویل دادید.")
      },
      { lv: "L5",
        text: L("The brief was one line: “make refunds self-service”, with the 1 November sale as the date. I asked for a week to define the problem. ==Support data showed most refund tickets were “where is my refund?”, not “please refund me”.== ==I wrote up three options with costs and recommended refund status plus card refunds first.== ==I gave one engineer the status work, which didn't need the late API, and two the card refunds, each with a clear outcome.== We launched on time and refund tickets fell 45%. ==Then I traced the slip to a pattern: three of our last five launches had waited on a late API. I introduced contract-first (agree the API contract and a mock server before building), and four teams use it now.==",
                "خواسته فقط یک جمله بود: «بازپرداخت را self-service کنید»، با کمپین فروش 1 نوامبر به‌عنوان تاریخ. یک هفته وقت خواستم تا مساله را تعریف کنم. ==داده‌های پشتیبانی نشان داد بیشتر تیکت‌ها «بازپرداخت من کجاست؟» است، نه «لطفا بازپرداخت کنید».== ==سه گزینه را با هزینه‌شان نوشتم و پیشنهاد دادم اول وضعیت بازپرداخت و بازپرداخت کارتی بیاید.== ==کار وضعیت را، که به API دیررسیده نیاز نداشت، به یک مهندس سپردم و بازپرداخت کارتی را به دو نفر، هر کدام با خروجی روشن.== به‌موقع launch کردیم و تیکت‌های بازپرداخت 45% کم شد. ==بعد ریشه‌ی تاخیر را پیدا کردم: از پنج launch اخیر، سه تا منتظر یک API دیررسیده مانده بودند. contract-first را راه انداختم (توافق روی قرارداد API و یک mock server پیش از ساختن) و حالا چهار تیم از آن استفاده می‌کنند.=="),
        lesson: L("You defined an ambiguous problem, directed other engineers and removed the recurring cause, not just this one slip.",
                  "مساله‌ی مبهم را تعریف کردید، برای مهندسان دیگر جهت تعیین کردید و علت تکرارشونده را برداشتید، نه فقط این یک تاخیر را.")
      },
      { lv: "L6",
        text: L("Five product teams had launches planned around the 1 November sale, all depending on the payments platform team, which had a regulatory deadline of its own and capacity for three. ==I spent two weeks with the five leads and the platform director working out which launches mattered most to the business.== ==I wrote a one-page proposal: protect three launches, defer two, and publish API contracts six weeks before any dependent launch.== The two deferred teams weren't happy, ==so I walked their directors through the trade-offs myself until both agreed.== All three protected launches shipped on date. ==Platform dependencies are now part of quarterly planning, with a shared capacity view, so nobody negotiates it from scratch.==",
                "پنج تیم محصول launchهایشان را حول کمپین فروش 1 نوامبر برنامه‌ریزی کرده بودند و همه به تیم پلتفرم پرداخت وابسته بودند؛ تیمی که deadline مقرراتی خودش را داشت و ظرفیتش برای سه تا بود. ==دو هفته با لیدهای هر پنج تیم و مدیر پلتفرم نشستم تا روشن شود کدام launchها برای کسب‌وکار مهم‌ترند.== ==یک پیشنهاد یک‌صفحه‌ای نوشتم: سه launch محافظت شود، دو تا عقب برود، و قرارداد API شش هفته پیش از هر launch وابسته منتشر شود.== برای دو تیمِ عقب‌رفته ناخوشایند بود، ==پس خودم trade-offها را با مدیرانشان مرور کردم تا هر دو موافقت کردند.== هر سه launch محافظت‌شده سر موعد منتشر شدند. ==وابستگی‌های پلتفرم حالا بخشی از برنامه‌ریزی فصلی است، با نمای مشترک ظرفیت، و کسی لازم نیست هر بار از صفر برایش چانه بزند.=="),
        lesson: L("You set strategy across teams, settled competing priorities and changed how the organisation plans.",
                  "میان تیم‌ها استراتژی تعیین کردید، اولویت‌های رقیب را فیصله دادید و شیوه‌ی برنامه‌ریزی سازمان را عوض کردید.")
      }
    ]
  };

  /* ---------------- 3. evidence checklist: “I can tell a concrete story where I …” ---------------- */
  H.checklist = {
    L4: [
      L("broke a multi-month project into milestones and re-planned when a dependency slipped",
        "یک پروژه‌ی چندماهه را به milestone شکستم و وقتی یک وابستگی عقب افتاد، برنامه را دوباره چیدم"),
      L("shipped the whole thing, not just the code: tests, documentation, monitoring and a support guide",
        "کار را کامل تحویل دادم، نه فقط کد را: تست، مستندات، monitoring و راهنمای پشتیبانی"),
      L("compared several options with no obvious winner, chose one, and explained what I gave up",
        "چند گزینه‌ی بدون برنده‌ی روشن را مقایسه کردم، یکی را انتخاب کردم و توضیح دادم از چه چیزی گذشتم"),
      L("looked beyond my ticket at what the work changes upstream and downstream, and changed a decision because of it",
        "فراتر از task خودم را دیدم، یعنی اثر کار روی upstream و downstream را، و به همین دلیل تصمیمی را عوض کردم"),
      L("kept stakeholders and neighbouring teams informed about dates and dependencies, so nobody was surprised",
        "ذی‌نفعان و تیم‌های همسایه را درباره‌ی تاریخ‌ها و وابستگی‌ها در جریان گذاشتم تا کسی غافلگیر نشود"),
      L("walked a newer teammate through their first big task, or stepped into a conflict instead of ignoring it",
        "هم‌تیمی تازه‌کاری را در اولین task بزرگش همراهی کردم، یا به‌جای نادیده گرفتن، در یک تعارض وارد شدم"),
      L("used a skill beyond everyday coding (data analysis, security, production health) to unblock or improve a project",
        "از مهارتی فراتر از کدنویسی روزمره (تحلیل داده، امنیت، سلامت production) برای رفع مانع یا بهبود یک پروژه استفاده کردم"),
      L("knew the product and business need well enough to take part in a decision with the product manager",
        "محصول و نیاز کسب‌وکار را آن‌قدر می‌شناختم که در یک تصمیم کنار مدیر محصول مشارکت کردم")
    ],
    L5: [
      L("scoped an area: decided what was and wasn't part of the problem, then moved several projects forward over quarters",
        "یک حوزه را scope کردم: مشخص کردم چه چیزی جزو مساله است و چه چیزی نیست، و بعد چند پروژه را در طول چند فصل جلو بردم"),
      L("set direction for two or three engineers, handed work over with clear outcomes, and balanced short-term needs against long-term health",
        "برای دو یا سه مهندس جهت تعیین کردم، کار را با خروجی روشن واگذار کردم و میان نیاز کوتاه‌مدت و سلامت بلندمدت تعادل گذاشتم"),
      L("took a problem with no clear best answer, researched options, designed a solution and owned it past launch",
        "مساله‌ای را که راه‌حل بهترینِ روشن نداشت برداشتم، گزینه‌ها را بررسی کردم، راه‌حل طراحی کردم و تا بعد از launch own کردم"),
      L("found a recurring problem and removed its cause, or simplified existing solutions so complexity stayed under control",
        "مساله‌ی تکرارشونده‌ای را پیدا کردم و علتش را برداشتم، یا راه‌حل‌های موجود را ساده کردم تا پیچیدگی تحت کنترل بماند"),
      L("aligned people in my team and another team around one direction, and became the person stakeholders came to first",
        "آدم‌های تیم خودم و یک تیم دیگر را روی یک جهت همسو کردم و کسی شدم که ذی‌نفعان اول سراغش می‌آمدند"),
      L("spotted a disagreement between teams early and steered it to a shared decision, sharing context before anyone asked",
        "اختلاف میان تیم‌ها را زود دیدم و به تصمیمی مشترک رساندم، و context را پیش از این‌که بپرسند به اشتراک گذاشتم"),
      L("became the trusted authority on one area, or the person with range across several, and can name what others did differently",
        "مرجع قابل‌اعتماد یک حوزه شدم، یا کسی با دامنه‌ی گسترده در چند حوزه، و می‌توانم بگویم دیگران چه چیزی را متفاوت انجام دادند"),
      L("made product trade-offs myself because I understood the business need, and the result held up",
        "trade-offهای محصولی را خودم تصمیم گرفتم چون نیاز کسب‌وکار را می‌شناختم، و نتیجه پایدار ماند")
    ],
    L6: [
      L("set strategy for a group of 10+ people, a very hard problem or a year-plus horizon, and owned the results",
        "برای گروهی بیش از 10 نفر، یک مساله‌ی بسیار سخت یا افقی بیش از یک سال استراتژی تعیین کردم و نتایجش را own کردم"),
      L("decided when to invest in something new and when to improve gradually, and reshaped or stopped a project for reasons others accepted",
        "تشخیص دادم کِی در چیز تازه سرمایه‌گذاری کنیم و کِی تدریجی بهبود بدهیم، و پروژه‌ای را به دلیل‌هایی که دیگران پذیرفتند تغییر دادم یا متوقف کردم"),
      L("took a problem even senior leaders couldn't define, clarified it, and turned it into a plan several teams could carry out",
        "مساله‌ای را که حتی رهبران ارشد نمی‌توانستند تعریف کنند شفاف کردم و به برنامه‌ای تبدیل کردم که چند تیم می‌توانستند اجرا کنند"),
      L("chose, or strongly influenced, which problems the organisation worked on, and found a future area of work before anyone asked",
        "تعیین کردم، یا به‌طور موثر روی این اثر گذاشتم، که سازمان روی چه مساله‌هایی کار کند، و زمینه‌ی کاری آینده را پیش از این‌که کسی بپرسد پیدا کردم"),
      L("led across several groups whose priorities competed, and reached an outcome that served the company, not one team",
        "میان چند گروه با اولویت‌های رقیب رهبری کردم و به نتیجه‌ای رسیدم که به نفع شرکت بود، نه یک تیم"),
      L("mentored senior engineers, or set a way of working that measurably sped up the people around me",
        "مهندسان ارشد را mentor کردم، یا شیوه‌ی کاری‌ای گذاشتم که سرعت اطرافیانم را به‌طور ملموس بالا برد"),
      L("became the go-to person in a specialty while knowing neighbouring systems and processes well enough to steer others' decisions",
        "در یک تخصص مرجع شدم و سیستم‌ها و فرایندهای همسایه را آن‌قدر می‌شناختم که تصمیم دیگران را هدایت کنم"),
      L("knew the architecture across a whole product area and steered several teams to the right decision, such as retiring a duplicate system",
        "معماری کل یک حوزه‌ی محصولی را می‌شناختم و چند تیم را به تصمیم درست رساندم، مثلا بازنشسته کردن یک سیستم تکراری")
    ]
  };

  /* ---------------- 4. conversation scripts ---------------- */
  H.scripts = [
    { id: "recruiter-level",
      when: L("First call with a recruiter, before any interview is booked.",
              "اولین تماس با recruiter، پیش از این‌که مصاحبه‌ای زمان‌بندی شود."),
      say: L("Before we plan the loop, which level is it built for? And can the level change after the loop, say in the debrief? Which rounds count most for level, and is there a rubric or prep guide you can share?",
             "پیش از این‌که دور مصاحبه (loop) را برنامه‌ریزی کنیم، ممکن است بگویید برای چه سطحی طراحی شده؟ و آیا سطح بعد از loop، مثلا در debrief، می‌تواند تغییر کند؟ کدام مصاحبه‌ها بیشترین وزن را برای سطح دارند و آیا rubric یا راهنمای آمادگی‌ای هست که بتوانید بفرستید؟"),
      why: L("Many large employers set a provisional level up front and settle the final one in a debrief or committee. Two minutes of questions show you where to spend your prep time.",
             "بسیاری از شرکت‌های بزرگ یک سطح موقت از پیش در نظر می‌گیرند و سطح نهایی را در debrief (جلسه‌ی جمع‌بندی مصاحبه‌کننده‌ها) یا کمیته تعیین می‌کنند. دو دقیقه پرسش نشان می‌دهد وقت آمادگی‌تان را کجا خرج کنید.")
    },
    { id: "state-target",
      when: L("First call, when the recruiter asks what you're looking for. Swap in two facts of your own, and use the company's own level name if you know it.",
              "اولین تماس، وقتی recruiter می‌پرسد دنبال چه هستید. مثال را با دو واقعیت خودتان عوض کنید و اگر می‌دانید از نامِ سطح همان شرکت استفاده کنید."),
      say: L("I'm targeting the senior level. In my current role I took a payments migration from a vague brief to launch across three teams, and the two engineers I onboarded now work independently. If that doesn't match how you see the role, I'd like to know what you'd need to see.",
             "من دنبال سطح senior هستم. در شغل فعلی‌ام یک مهاجرت پرداخت را از یک درخواست مبهم تا launch میان سه تیم پیش بردم و دو مهندسی که onboard کرده‌ام حالا مستقل کار می‌کنند. اگر این با نگاه شما به نقش جور نیست، دوست دارم بدانم چه چیزی باید ببینید."),
      why: L("A target backed by two facts gives the recruiter something to anchor on. Overshooting can reportedly end in a lower offer rather than a rejection, so the evidence matters more than the label.",
             "سطح هدفی که دو واقعیت پشتش باشد به recruiter چیزی برای تکیه می‌دهد. طبق گزارش‌ها، بالاتر زدن می‌تواند به‌جای رد شدن به offer در سطح پایین‌تر ختم شود؛ پس مدرک از برچسب مهم‌تر است.")
    },
    { id: "design-before-loop",
      when: L("A few days before the loop, by email to the recruiter.",
              "چند روز پیش از loop، با ایمیل به recruiter."),
      say: L("Could you tell me how the rounds are weighted for level? I'd like to prepare properly for system design and the behavioural round. Is there a written rubric or prep guide for the level you have in mind? And if the hiring manager has fifteen minutes before the loop, I'd welcome a short chat about the team's scope.",
             "ممکن است بگویید برای تعیین سطح، وزن راندها چطور است؟ می‌خواهم برای system design و مصاحبه‌ی رفتاری درست آماده شوم. آیا rubric مکتوب یا راهنمای آمادگی‌ای برای سطحی که مدنظر دارید هست؟ و اگر hiring manager پیش از loop پانزده دقیقه وقت داشت، خوشحال می‌شوم درباره‌ی scope تیم گپ بزنیم."),
      why: L("At several big employers coding mostly decides hire or no-hire, while the design and behavioural rounds set the level, so the weights show where your prep hours belong.",
             "در چند شرکت بزرگ، کدنویسی بیشتر hire یا no-hire را تعیین می‌کند و راندهای design و رفتاری سطح را؛ پس وزن‌ها نشان می‌دهند ساعت‌های آمادگی‌تان به کجا تعلق دارد.")
    },
    { id: "lower-offer",
      when: L("The offer arrives one level below the one you interviewed for. Your first reply: don't discuss pay yet.",
              "offer یک سطح پایین‌تر از سطح مصاحبه می‌رسد. در اولین پاسخ هنوز از حقوق حرف نزنید."),
      say: L("Thank you, I'm excited about the team and the work. The level is lower than I expected and doesn't match the scope I've shown: a payments migration across three teams, from vague brief to launch. Before we talk about compensation, could we revisit it? I'm happy to speak with the hiring manager or redo a round.",
             "ممنونم، از تیم و کار هیجان‌زده‌ام. سطح پایین‌تر از انتظارم است و با scopeای که نشان داده‌ام جور درنمی‌آید: یک مهاجرت پرداخت میان سه تیم، از درخواست مبهم تا launch. پیش از صحبت درباره‌ی حقوق و مزایا، می‌شود سطح را دوباره بررسی کنیم؟ حاضرم با hiring manager صحبت کنم یا یک راند را تکرار کنم."),
      why: L("Level comes before pay, and silence on it can read as acceptance. Expect several calls; a first call rarely settles it.",
             "سطح پیش از حقوق می‌آید و سکوت درباره‌اش می‌تواند پذیرش خوانده شود. منتظر چند تماس باشید؛ تماس اول معمولا کار را تمام نمی‌کند.")
    },
    { id: "competing-offer",
      when: L("You hold a real offer from a company of comparable standing, at the level you want, and the lower offer is still open.",
              "پیشنهادی واقعی از شرکتی هم‌رده دارید، در همان سطحی که می‌خواهید، و offer پایین‌تر هنوز باز است."),
      say: L("I have an offer from a company of similar scale at the senior level, and I'd rather join you. The level is the sticking point. Could we look at it again with that in mind? I can share the level and the scope description; pay is a separate conversation.",
             "از شرکتی با مقیاس مشابه offer در سطح senior دارم و ترجیح می‌دهم به شما بپیوندم. سطح همان نقطه‌ی گیر است. می‌شود با توجه به این دوباره بررسی‌اش کنیم؟ سطح و شرح scope را می‌توانم بگویم؛ حقوق بحثی جداست."),
      why: L("An offer from a comparable-tier company is evidence the level isn't a stretch. Say it only if it's true and you'd take it; no credible data says how often this works.",
             "offer از شرکتی هم‌رده نشان می‌دهد سطح خواسته‌شده دور از دسترس نیست. فقط اگر راست است و واقعا حاضرید آن را بپذیرید بگویید؛ داده‌ی معتبری نیست که بگوید این کار چند بار جواب می‌دهد.")
    },
    { id: "accept-with-conditions",
      when: L("You've decided to accept a level below your target, for a reason you can name: a move up a tier, a team you want, real learning.",
              "تصمیم گرفته‌اید سطحی پایین‌تر از هدفتان را بپذیرید، به دلیلی که می‌توانید اسمش را بگویید: ورود به شرکتی رده‌بالاتر، تیمی که می‌خواهید، یا یادگیری واقعی."),
      say: L("I'd like to accept, and I want to understand the road to the next level. Could you send me the criteria for it, how long people usually spend at this level, and a date for a first review with my manager? If promotion was described as fast on our calls, I'd like the specifics in writing.",
             "می‌خواهم offer را بپذیرم و مسیر رسیدن به سطح بعد را هم بفهمم. می‌شود معیارهای آن سطح، مدت معمولی که آدم‌ها در این سطح می‌مانند و تاریخ اولین بازبینی با مدیرم را برایم بنویسید؟ اگر در تماس‌ها ارتقا سریع توصیف شد، جزئیاتش را مکتوب می‌خواهم."),
      why: L("Recruiter promises of fast promotion are often unreliable, and no public source we know of documents standard fast-track clauses, so get criteria and a review date in writing.",
             "وعده‌ی ارتقای سریع از recruiter اغلب قابل‌اتکا نیست و منبع عمومی‌ای نمی‌شناسیم که بندهای استاندارد «مسیر سریع» را مستند کرده باشد؛ پس معیارها و تاریخ بازبینی را مکتوب بگیرید.")
    }
  ];

  /* ---------------- 5. composite case studies ---------------- */
  H.examples = [
    { id: "senior-startup",
      title: L("A “senior” at 30 people, a mid-level offer",
               "Senior در استارتاپ 30 نفره، offer سطح میانی"),
      setup: L("Arash had been the “Senior Engineer” of a 30-person startup for three years. He built and ran its billing system alone, and nobody above him reviewed his work.",
               "آرش سه سال «Senior Engineer» یک استارتاپ 30 نفره بود. سیستم billing را تنها ساخته بود و اداره می‌کرد و هیچ‌کس بالاتر از او کارش را review نمی‌کرد."),
      happened: L("A large tech company's recruiter had hinted at senior. After the loop came an offer one level below. His coding was strong. In design he described what he had built, not what was hard about it, and his stories were about tasks finished rather than decisions that changed a team's work.",
                  "recruiter یک شرکت بزرگ فناوری اشاره کرده بود احتمالا senior. بعد از loop، offer یک سطح پایین‌تر آمد. کدنویسی‌اش قوی بود. در design آنچه ساخته بود را شرح داد، نه آنچه سخت بود؛ و داستان‌هایش از taskهای تمام‌شده بود، نه تصمیم‌هایی که کار یک تیم را عوض کرده باشد."),
      lesson: L("Titles travel badly; evidence travels well. A “senior” at a small company can read a level lower at a firm with a higher bar, so the loop looks past the title to design answers and stories.",
                "عنوان بد سفر می‌کند و مدرک خوب. «Senior» در یک شرکت کوچک می‌تواند در شرکتی با استاندارد بالاتر یک سطح پایین‌تر دیده شود، پس loop از عنوان رد می‌شود و به پاسخ‌های design و داستان‌ها نگاه می‌کند."),
      moves: [
        L("Before applying, read the target company's level descriptions and match two projects to them: people and teams affected, ambiguity handled, numbers.",
          "پیش از درخواست، توصیف سطح‌های شرکت هدف را بخوانید و دو پروژه‌تان را با آن‌ها تطبیق دهید: چند نفر و چند تیم درگیر بودند، چه ابهامی را حل کردید، چه عددهایی."),
        L("Prepare two design answers that start with what is hard and weigh two alternatives, and three stories where your decision changed other people's work.",
          "دو پاسخ design آماده کنید که از «چه چیزی سخت است» شروع می‌شود و دو جایگزین را می‌سنجد، و سه داستان که در آن تصمیم شما کار دیگران را عوض کرد."),
        L("In the first call, state your target level with two facts and ask which rounds weigh most for level.",
          "در اولین تماس سطح هدفتان را با دو واقعیت بگویید و بپرسید کدام راندها برای سطح بیشترین وزن را دارند.")
      ]
    },
    { id: "design-round",
      title: L("A strong coder, a generic design round",
               "کدنویس قوی، راند design کلیشه‌ای"),
      setup: L("Neda had six years of experience and sailed through both coding rounds. Her system-design round was a clean textbook answer: load balancer, cache, queue, database.",
               "ندا شش سال تجربه داشت و هر دو راند کدنویسی را راحت گذراند. راند system design او یک پاسخ تمیز و کتابی بود: load balancer، cache، queue، پایگاه داده."),
      happened: L("Every box got equal airtime, she named no trade-offs, and the interviewer did most of the steering. Her stories began “I built…”. The offer came one level below her target, with a note that her coding was “strong”.",
                  "به همه‌ی جعبه‌ها زمان برابر داد، هیچ trade-offی نگفت و مصاحبه‌کننده بیشتر مسیر را هدایت کرد. داستان‌هایش با «من ساختم …» شروع می‌شد. offer یک سطح پایین‌تر از هدفش آمد، با این یادداشت که کدنویسی‌اش «قوی» بوده است."),
      lesson: L("Coding got her the offer; the design and behavioural rounds set its level. A textbook answer reads as {L4}, however clean it is.",
                "کدنویسی offer را آورد؛ سطحش را راندهای design و رفتاری تعیین کردند. پاسخ کتابی، هر قدر تمیز، در سطح {L4} خوانده می‌شود."),
      moves: [
        L("Practise three or four design problems out loud with someone who keeps asking “what breaks first?”, and name the hard part before you draw.",
          "سه چهار مساله‌ی design را بلند تمرین کنید، با کسی که مدام می‌پرسد «اول چه چیزی خراب می‌شود؟»، و پیش از کشیدن، بخش سخت را نام ببرید."),
        L("For each design, prepare two alternatives and why you'd pick one, plus one limit of your own design that you raise yourself.",
          "برای هر design دو جایگزین و دلیل انتخاب یکی را آماده کنید، به‌علاوه‌ی یک محدودیت طراحی خودتان که خودتان مطرح می‌کنید."),
        L("Pick one system you've really run and prepare to go deep: its numbers, its worst incident, and what you'd change.",
          "یک سیستم را که واقعا اداره کرده‌اید انتخاب کنید و آماده باشید عمیق شوید: عددهایش، بدترین incidentش و آنچه تغییر می‌دادید.")
      ]
    },
    { id: "competing-offer",
      title: L("The competing offer that reopened the level",
               "offer رقیبی که سطح را دوباره باز کرد"),
      setup: L("Tara received a mid-level offer from a large company and, in the same week, a senior offer from another of similar standing. She preferred the first team.",
               "تارا در یک هفته از یک شرکت بزرگ offer سطح میانی گرفت و از شرکتی هم‌رده offer سطح senior. تیم شرکت اول را ترجیح می‌داد."),
      happened: L("She told the first recruiter so, shared the level and scope but not the pay, and asked to revisit the level. It took three calls and one repeated design round over two weeks. The level moved up a step.",
                  "او همین را رک به recruiter اول گفت، سطح و scope را داد و حقوق را نه، و خواست سطح بازبینی شود. دو هفته، سه تماس و تکرار یک راند design طول کشید، و سطح یک پله بالا رفت."),
      lesson: L("A comparable-tier offer makes the case credible, but it is no guarantee: nobody publishes credible odds. Decide beforehand which offer you'd take if the answer is no.",
                "offer هم‌رده ادعا را معتبر می‌کند، ولی تضمین نیست: کسی آمار معتبر منتشر نمی‌کند. از پیش تصمیم بگیرید اگر جواب «نه» بود کدام offer را می‌پذیرید."),
      moves: [
        L("Line the two processes up so both offers land in the same week, and tell each recruiter your timeline.",
          "دو فرایند را طوری هماهنگ کنید که offerها در یک هفته برسند، و زمان‌بندی‌تان را به هر دو recruiter بگویید."),
        L("Describe the other offer truthfully: its level and scope. Ask to revisit, praise the team, and offer to redo a round or talk with the hiring manager.",
          "offer دیگر را راست توصیف کنید: سطح و scope. درخواست بازبینی کنید، از تیم تعریف کنید و پیشنهاد دهید یک راند را تکرار کنید یا با hiring manager حرف بزنید."),
        L("Decide before the call what you'll do if the level stays: a real willingness to walk is what makes the conversation credible.",
          "پیش از تماس تصمیم بگیرید اگر سطح همان ماند چه می‌کنید: آمادگی واقعی برای رفتن است که گفتگو را معتبر می‌کند.")
      ]
    },
    { id: "accepted-lower",
      title: L("One level down, eyes open",
               "یک سطح پایین‌تر، با چشم باز"),
      setup: L("Reza was a senior engineer at a regional company. A top-tier company offered a mid-level role: total pay still above his current salary, and a team he wanted to learn from.",
               "رضا در یک شرکت منطقه‌ای senior بود. یک شرکت رده‌بالا نقشی در سطح میانی پیشنهاد داد: با مجموع حقوقی هنوز بیشتر از حقوق فعلی‌اش و تیمی که می‌خواست از آن یاد بگیرد."),
      happened: L("He accepted after the hiring manager wrote down the next level's criteria and a first review at twelve months. The recruiter had said “about a year”. Promotion came after 21 months: the first review said “not yet”, because his work had stayed inside one team.",
                  "او پذیرفت، بعد از این‌که hiring manager معیارهای سطح بعد و اولین بازبینی در ماه دوازدهم را مکتوب کرد. recruiter گفته بود «حدود یک سال». ارتقا بعد از 21 ماه آمد: بازبینی اول گفت «هنوز نه»، چون کارش درون یک تیم مانده بود."),
      lesson: L("A written date didn't make promotion fast, but it made the gap visible. He'd start collecting next-level evidence in month one, not month ten.",
                "تاریخ مکتوب ارتقا را سریع نکرد، ولی شکاف را دیدنی کرد. اگر دوباره انتخاب می‌کرد، جمع کردن مدرک سطح بعد را از ماه اول شروع می‌کرد، نه ماه دهم."),
      moves: [
        L("Accept only if you can name the reason: a move up a tier, pay that still beats your alternatives, or learning you can't get where you are.",
          "فقط وقتی بپذیرید که دلیلش را بتوانید بگویید: ورود به شرکتی رده‌بالاتر، حقوقی که هنوز از گزینه‌های دیگرتان بهتر است، یا یادگیری‌ای که جای فعلی‌تان نیست."),
        L("Get the next level's criteria, the usual time and a first review date in writing, from the hiring manager as well as the recruiter.",
          "معیارهای سطح بعد، زمان معمول و تاریخ اولین بازبینی را مکتوب بگیرید، از hiring manager هم، نه فقط recruiter."),
        L("Keep an evidence log from day one and check it against the criteria with your manager every quarter.",
          "از روز اول سند دستاوردها (brag doc) نگه دارید و هر سه ماه با مدیرتان آن را با معیارها بسنجید.")
      ]
    }
  ];

  /* ---------------- 6. scope in numbers ---------------- */
  H.numbers = [
    { id: "users",
      what: L("People who actually used what you built, per day or per month. Look in product analytics, or ask the product manager which figure they report.",
              "کسانی که واقعا از چیزی که ساخته‌اید استفاده کرده‌اند، در روز یا ماه. در product analytics ببینید یا از مدیر محصول بپرسید کدام عدد را گزارش می‌کند."),
      weak: L("Built a feature used by a lot of customers.",
              "قابلیتی ساختم که مشتریان زیادی استفاده می‌کردند."),
      strong: L("Built saved-card checkout: about 400K monthly active users, 38% of all checkouts.",
                "checkout با کارت ذخیره‌شده را ساختم: حدود 400 هزار کاربر فعال ماهانه و 38% همه‌ی checkoutها.")
    },
    { id: "traffic",
      what: L("The load your system carries: requests per second, p95 latency, error rate. Look at the service dashboard or the last load test.",
              "باری که سیستم تحمل می‌کند: درخواست در ثانیه، latency در p95، نرخ خطا. داشبورد سرویس یا آخرین load test را نگاه کنید."),
      weak: L("Improved API performance.",
              "کارایی API را بهتر کردم."),
      strong: L("Cut p95 latency of the search API from 900 ms to 240 ms at a peak of 1,500 requests per second.",
                "latency در p95 برای API جست‌وجو را در اوج 1500 درخواست در ثانیه از 900 به 240 میلی‌ثانیه رساندم.")
    },
    { id: "data",
      what: L("How much data you store, move or process: rows, terabytes, events per day. Look in the storage dashboard, the pipeline metrics or the billing page.",
              "حجم داده‌ای که نگه می‌دارید، جابه‌جا می‌کنید یا پردازش می‌کنید: ردیف، ترابایت، رویداد در روز. در داشبورد storage، متریک‌های pipeline یا صفحه‌ی صورت‌حساب پیدایش کنید."),
      weak: L("Worked on a big data pipeline.",
              "روی یک pipeline داده‌ی بزرگ کار کردم."),
      strong: L("Migrated 300M order rows (2 TB) with no downtime; the pipeline now handles 40M events a day.",
                "300 میلیون ردیف سفارش (2 ترابایت) را بدون downtime منتقل کردم؛ pipeline حالا روزی 40 میلیون رویداد را پردازش می‌کند.")
    },
    { id: "money",
      what: L("Revenue influenced, cost saved or loss avoided, per month or year. Look at the cloud bill, finance reports or experiment results, and check the figure with someone in finance.",
              "درآمد اثرگذاری‌شده، هزینه‌ی صرفه‌جویی‌شده یا زیان جلوگیری‌شده، در ماه یا سال. در صورت‌حساب cloud، گزارش‌های مالی یا نتیجه‌ی آزمایش‌ها ببینید و عدد را با کسی از مالی تطبیق دهید."),
      weak: L("Saved the company a lot of money.",
              "کلی برای شرکت صرفه‌جویی کردم."),
      strong: L("Cut the monthly cloud bill for batch jobs from $38K to $22K, about $190K a year, confirmed with finance.",
                "هزینه‌ی ماهانه‌ی cloud برای jobهای batch را از 38 هزار دلار به 22 هزار دلار رساندم، حدود 190 هزار دلار در سال، و مالی تایید کرد.")
    },
    { id: "people",
      what: L("People you directed, mentored or unblocked, and people whose work depended on your design. Look at the project roster and onboarding records.",
              "کسانی که جهتشان را تعیین کرده‌اید، mentor کرده‌اید یا مانعشان را برداشته‌اید، و کسانی که کارشان به design شما وابسته بود. فهرست اعضای پروژه و سوابق onboarding را ببینید."),
      weak: L("Led the team and mentored juniors.",
              "تیم را رهبری کردم و تازه‌کارها را mentor کردم."),
      strong: L("Set technical direction for 3 engineers on a six-month project; onboarded 2 new hires who shipped to production within five weeks.",
                "در یک پروژه‌ی شش‌ماهه برای 3 مهندس جهت فنی تعیین کردم؛ 2 نیروی جدید را onboard کردم که ظرف پنج هفته به production کد دادند.")
    },
    { id: "teams",
      what: L("Teams that changed a plan, adopted your work or had to sign off because of it. Look at the dependency list in your design doc.",
              "تیم‌هایی که به‌خاطر کار شما برنامه‌شان را عوض کردند، آن را پذیرفتند یا باید تاییدش می‌کردند. فهرست وابستگی‌های design doc را ببینید."),
      weak: L("Worked cross-functionally with many teams.",
              "با تیم‌های زیادی cross-functional کار کردم."),
      strong: L("Aligned 4 teams (payments, identity, mobile, support) on one API contract; two moved their quarterly plans because of it.",
                "4 تیم (پرداخت، هویت، موبایل، پشتیبانی) را روی یک قرارداد API همسو کردم؛ دو تیم برنامه‌ی فصلی‌شان را به‌خاطر آن عوض کردند.")
    },
    { id: "duration",
      what: L("How long you carried the work, from kickoff to retiring the old system, and how long the result has held. Look at the dates in the project doc and the incident history.",
              "چه مدت کار را حمل کرده‌اید، از شروع تا بازنشسته شدن سیستم قدیمی، و نتیجه چه مدت دوام آورده است. تاریخ‌های سند پروژه و سابقه‌ی incidentها را ببینید."),
      weak: L("Worked on a long-running migration.",
              "روی یک مهاجرت طولانی کار کردم."),
      strong: L("Carried an 8-month migration from kickoff to retiring the old system; the new one has run for two years without a major incident.",
                "یک مهاجرت هشت‌ماهه را از شروع تا بازنشسته شدن سیستم قدیمی پیش بردم؛ سیستم جدید دو سال بدون incident بزرگ کار کرده است.")
    },
    { id: "systems",
      what: L("Services, repositories or components you own or changed, and the on-call load they carry. Look in the service catalogue, ownership files or pager history.",
              "سرویس‌ها، repoها یا مولفه‌هایی که own می‌کنید یا تغییر داده‌اید، و بار on-callشان. در service catalogue، فایل‌های ownership یا تاریخچه‌ی pager ببینید."),
      weak: L("I own a big system.",
              "من یک سیستم بزرگ دارم."),
      strong: L("Own 6 services (3 on the checkout critical path) and their on-call rotation; cut pages from 20 to 4 a month by fixing the top three alert sources.",
                "6 سرویس (3 تا روی مسیر بحرانی checkout) و on-call آن‌ها را own می‌کنم؛ با رفع سه منبع اول alert، pageها را از 20 به 4 در ماه رساندم.")
    }
  ];
})();

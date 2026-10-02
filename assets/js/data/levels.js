/* The reference ladder: four lenses (+ impact) and six levels, L2–L7.
   Faithful to the source ladder's definitions; examples and wording are this guide's own. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;

  /* ---------------- lenses ---------------- */
  S.data.lenses = [
    { id: "contribution", icon: "rocket",
      name: L("Contribution", "مشارکت"),
      q: L("What do you deliver, and how independently?", "چه چیزی تحویل می‌دهید و چقدر مستقل؟"),
      def: L("The kind and size of work you do, and how independently you can execute and decide.",
             "جنس و اندازه‌ی کارهایتان، و میزان استقلال شما در اجرا و تصمیم‌گیری.") },
    { id: "challenge", icon: "mountain",
      name: L("Challenge", "چالش"),
      q: L("How hard and how ambiguous are the problems you solve?", "مساله‌هایی که حل می‌کنید چقدر سخت و چقدر مبهم‌اند؟"),
      def: L("The complexity and depth of the problems you solve: technical, organisational or product. The complexity of the **problem** counts, not of the solution. A simple answer to a hard problem beats a complex one.",
             "پیچیدگی و عمق مساله‌هایی که حل می‌کنید: فنی، سازمانی یا محصولی. پیچیدگیِ **مساله** اصل است، نه پیچیدگی راه‌حل. راه‌حل ساده برای مساله‌ی سخت بهتر از راه‌حل پیچیده است.") },
    { id: "influence", icon: "users",
      name: L("Influence", "قدرت نفوذ"),
      q: L("Who do you move with you, and how far does it reach?", "چه کسانی را با خودتان جلو می‌برید و دامنه‌اش تا کجاست؟"),
      def: L("How much you lead and move others: staying in touch with managers and other teams, having a positive effect, and handling stakeholders well.",
             "میزان رهبری و تاثیرگذاری شما روی دیگران: ارتباط مستمر با مدیران و تیم‌های دیگر، اثر مثبت گذاشتن، و مدیریت خوبِ ذی‌نفعان.") },
    { id: "expertise", icon: "bulb",
      name: L("Expertise", "تخصص"),
      q: L("What do you know well enough to be trusted with?", "چه چیزی را آن‌قدر خوب می‌دانید که به شما اعتماد شود؟"),
      def: L("Your knowledge, skills and abilities, and your capacity to apply them to what the organisation needs.",
             "دانش، مهارت‌ها و توانایی‌های شما، و توان به‌کارگیری آن‌ها برای نیازهای سازمان.") },
    { id: "impact", icon: "trend", beyond: true,
      name: L("Impact", "اثرگذاری"),
      q: L("What changed because of your work?", "به‌خاطر کار شما چه چیزی تغییر کرد؟"),
      def: L("Not a fifth lens but the yardstick beyond all four: each lens is judged together with its effect on business priorities. At lower levels impact means the project (speed and quality of tasks). At higher levels it means the success of the project itself.",
             "بُعد پنجم نیست؛ معیاری است فراتر از هر چهار بعد: عملکرد در هر بعد کنار اثرش بر اولویت‌های کسب‌وکار سنجیده می‌شود. در سطح‌های پایین‌تر یعنی اثر روی پروژه (سرعت و کیفیت taskها)، و در سطح‌های بالاتر یعنی موفقیت خودِ پروژه.") }
  ];
  S.lensById = function (id) { for (var i = 0; i < S.data.lenses.length; i++) if (S.data.lenses[i].id === id) return S.data.lenses[i]; return null; };

  /* ---------------- levels ----------------
     lenses.<lens> = bullets (what it looks like)
     shift.<lens>  = what changes on arrival from the previous level                      */
  S.data.levels = [
    /* ===================== L2 ===================== */
    {
      id: "L2",
      name: L("Learn", "یادگیری"),
      tagline: L("Find your footing", "پیدا کردن جای پا"),
      question: L("Can I become productive here, and learn how this team really works?",
                  "آیا می‌توانم اینجا کارآمد شوم و یاد بگیرم این تیم واقعا چطور کار می‌کند؟"),
      essence: L("A launch phase. The expectations are nearly the same as L3; what differs is how much guidance you need and how fast work moves.",
                 "مرحله‌ی شروع. انتظارات تقریبا همان انتظارات L3 است؛ تفاوت در میزان راهنمایی مورد نیاز و سرعت پیش‌رفتن کارهاست."),
      pace: L("Aim to operate at L3 within about six months, and to be L3 within a year at most. L2 is a launch pad, not a place to settle.",
              "هدف این است که ظرف حدود شش ماه در سطح L3 عمل کنید و حداکثر ظرف یک سال به آن برسید. L2 سکوی پرتاب است، نه جایی برای ماندن."),
      altitude: {
        scope: L("Small, well-defined tasks, usually with a similar example to follow", "taskهای کوچک و کاملا تعریف‌شده، معمولا با یک نمونه‌ی مشابه برای الگوگیری"),
        autonomy: L("More guidance than L3, but no daily micro-management", "راهنمایی بیشتر از L3، ولی بدون ریزمدیریت روزانه"),
        ambiguity: L("Almost none: the problem and the rough path are handed to you", "تقریبا هیچ؛ مساله و مسیر کلی آن را به شما می‌دهند"),
        horizon: L("Days to two weeks", "چند روز تا دو هفته"),
        people: L("You, plus a buddy or mentor", "خودتان و یک راهنما (buddy یا mentor)")
      },
      lenses: {
        contribution: [
          L("You finish small, clearly scoped tasks that sit inside a bigger project. A more senior colleague defines them and checks in on you.",
            "taskهای کوچک و روشنِ بخشی از یک پروژه‌ی بزرگ‌تر را تمام می‌کنید. یک همکار ارشدتر آن‌ها را تعریف می‌کند و سرکشی می‌کند."),
          L("The expectations match L3. The real difference is how much guidance you need and how quickly work moves.",
            "انتظارات تقریبا همان انتظارات L3 است. تفاوت اصلی در میزان راهنمایی مورد نیاز و سرعتِ پیش‌رفتن کارهاست."),
          L("You keep your work visible: what you're on, what is stuck, and when it will be done.",
            "کارتان را شفاف نگه می‌دارید: روی چه کاری هستید، چه چیزی گیر کرده و کِی تمام می‌شود.")
        ],
        challenge: [
          L("You use the team's standard tools and processes on familiar, predefined problems.",
            "از ابزار و فرایندهای استانداردِ تیم برای مساله‌های آشنا و از پیش تعریف‌شده استفاده می‌کنید."),
          L("You time-box yourself: when stuck, you ask early instead of burning days alone.",
            "برای خودتان زمان‌بندی می‌کنید: وقتی گیر می‌کنید زود می‌پرسید، نه این‌که چند روز تنها وقت تلف کنید."),
          L("You are building a mental map of the architecture, the product and the team's vocabulary.",
            "در حال ساختن نقشه‌ی ذهنی‌تان از معماری، محصول و واژگان تیم هستید.")
        ],
        influence: [
          L("You build working relationships inside the team: start with your buddy, your tech lead, and your product and QA counterparts.",
            "ارتباط کاری با هم‌تیمی‌ها می‌سازید: از راهنما، tech lead و همکاران محصول و QA شروع کنید."),
          L("You give and receive feedback calmly. Code-review comments are information, not verdicts.",
            "بازخورد را آرام می‌دهید و می‌گیرید. کامنت‌های code review اطلاعاتند، نه حکم.")
        ],
        expertise: [
          L("A basic understanding of the architecture, technologies and product you work in, deepening every week.",
            "فهم پایه‌ای از معماری، تکنولوژی‌ها و محصولی که رویش کار می‌کنید، که هر هفته عمیق‌تر می‌شود."),
          L("You can explain the main flows of your area from start to finish in plain words, even if details are still fuzzy.",
            "جریان‌های اصلی حوزه‌ی کاری‌تان را از ابتدا تا انتها به زبان ساده توضیح می‌دهید، حتی اگر جزئیات هنوز مبهم باشد.")
        ],
        impact: [
          L("Impact is read at project level: tasks finished with good quality and a steadily improving pace.",
            "اثرگذاری در سطح پروژه سنجیده می‌شود: taskهایی که با کیفیت خوب و سرعتی پیوسته‌بهتر تمام می‌شوند.")
        ]
      },
      shift: null
    },

    /* ===================== L3 ===================== */
    {
      id: "L3",
      name: L("Deliver", "تحویل"),
      tagline: L("Do the work well, keep moving", "کار را خوب انجام دهید و متوقف نشوید"),
      question: L("Can I deliver well-defined work with quality and speed, and keep moving when something blocks me?",
                  "آیا می‌توانم کار تعریف‌شده را با کیفیت و سرعت تحویل بدهم و وقتی چیزی مانع می‌شود متوقف نمانم؟"),
      essence: L("You deliver the tasks you're given, with quality, and take guidance from more senior colleagues along the way.",
                 "taskهایی که به شما داده می‌شود را با کیفیت تحویل می‌دهید و در مسیر از همکاران ارشدتر راهنمایی می‌گیرید."),
      pace: L("You move steadily toward L4 and typically reach it within one to two years. The main difference from L2 is how much guidance you need and how fast work gets done.",
              "پیوسته به L4 نزدیک می‌شوید و معمولا ظرف یک تا دو سال به آن می‌رسید. تفاوت اصلی با L2 در میزان راهنمایی مورد نیاز و سرعت انجام کارهاست."),
      altitude: {
        scope: L("Tasks that belong to a larger project someone more senior shaped", "taskهایی که بخشی از یک پروژه‌ی بزرگ‌تر هستند و یک همکار ارشدتر شکلشان داده"),
        autonomy: L("Guidance on the 'how', but no daily management", "راهنمایی درباره‌ی «چطور»، ولی بدون مدیریت روزانه"),
        ambiguity: L("Low: familiar problems, known options", "کم: مساله‌های آشنا، گزینه‌های شناخته‌شده"),
        horizon: L("Days to a few weeks", "چند روز تا چند هفته"),
        people: L("Your team; other teams with a senior's help", "تیم خودتان؛ تیم‌های دیگر با کمک یک همکار ارشدتر")
      },
      lenses: {
        contribution: [
          L("You implement tasks that fit a larger project correctly, completely and thoroughly, at consistently high quality and speed.",
            "taskهایی را که در راستای یک پروژه‌ی بزرگ‌تر هستند درست، کامل و جامع پیاده‌سازی می‌کنید، با کیفیت و سرعتِ پیوسته‌بالا."),
          L("You move several tasks at once and don't stay blocked: you chase the unblock or switch to something else.",
            "چند task را هم‌زمان جلو می‌برید و block نمی‌مانید: یا دنبال رفع مانع می‌روید یا سراغ کار دیگری."),
          L("You work pull-based, not push-based: when your tasks are blocked or done, you go find the next piece of work instead of waiting to be assigned.",
            "به شکل pull-based کار می‌گیرید، نه push-based: وقتی taskهایتان block یا تمام شد، خودتان سراغ کار بعدی می‌روید و منتظر assign شدن نمی‌مانید.")
        ],
        challenge: [
          L("You pick the right path among known, clear options, with guidance when the choice isn't obvious.",
            "راه مناسب را از میان گزینه‌های معلوم و روشن انتخاب می‌کنید، و وقتی انتخاب بدیهی نیست راهنمایی می‌گیرید."),
          L("You watch the clock. You recognise when a problem is complex and stop sinking time into it. You escalate to a senior colleague or your manager.",
            "حواستان به زمان هست. تشخیص می‌دهید چه وقت مساله پیچیده است و بیش از این گیر نمی‌کنید؛ به همکار ارشدتر یا مدیرتان escalate می‌کنید."),
          L("You rely on the team's standard tools and processes instead of inventing new ones.",
            "به جای ابداع ابزار تازه، از ابزار و فرایندهای استاندارد تیم استفاده می‌کنید.")
        ],
        influence: [
          L("You work well as part of a team and build working relationships, including with other teams when needed, often with a senior colleague's guidance.",
            "به‌خوبی عضوی از تیم هستید و ارتباط کاری می‌سازید، از جمله با تیم‌های دیگر در صورت لزوم، اغلب با راهنمایی یک همکار ارشدتر."),
          L("You report status honestly and early, so nobody is surprised.",
            "وضعیت را صادقانه و زود گزارش می‌دهید تا کسی غافلگیر نشود.")
        ],
        expertise: [
          L("A basic but solid understanding of your area's architecture, technologies and product.",
            "فهم پایه‌ای ولی محکم از معماری، تکنولوژی‌ها و محصول حوزه‌ی کاری‌تان."),
          L("You understand the business need behind the tasks you pick up.",
            "نیاز کسب‌وکاری پشتِ taskهایی که برمی‌دارید را می‌فهمید.")
        ],
        impact: [
          L("Still mostly impact on the project: work lands on time, with few defects, and doesn't create rework for others.",
            "هنوز بیشتر اثرگذاری روی پروژه: کار سر وقت تحویل می‌شود، با ایراد کم، و برای دیگران دوباره‌کاری نمی‌سازد.")
        ]
      },
      shift: {
        contribution: L("From needing guidance task by task to delivering tasks with quality and speed, and pulling your own next piece of work.",
                        "از نیاز به راهنمایی در هر task، به تحویل taskها با کیفیت و سرعت و گرفتنِ خودجوشِ کار بعدی."),
        challenge: L("From learning the standard tools to choosing between known options, and knowing when to escalate.",
                     "از یادگرفتن ابزارهای استاندارد، به انتخاب میان گزینه‌های شناخته‌شده و دانستنِ این‌که چه وقت escalate کنید."),
        influence: L("From finding out who is who to being a dependable collaborator, across teams when needed.",
                     "از پیدا کردن این‌که چه کسی کجاست، به همکار قابل‌اتکا بودن، در صورت لزوم میان تیم‌ها."),
        expertise: L("From a fuzzy map to a solid basic understanding of architecture, technology and product.",
                     "از نقشه‌ی مبهم، به فهم پایه‌ای محکم از معماری، تکنولوژی و محصول.")
      }
    },

    /* ===================== L4 ===================== */
    {
      id: "L4",
      name: L("Own", "مالکیت"),
      tagline: L("Take work from idea to done", "کار را از ایده تا پایان ببرید"),
      question: L("Can I own several months of work end to end, with minimal supervision?",
                  "آیا می‌توانم کاری چندماهه را end-to-end own کنم، با کمترین سرپرستی؟"),
      essence: L("You own end-to-end work and carry it forward with minimal guidance and self-management. Everyone on the ladder is expected to reach L4.",
                 "کارهای end-to-end را own می‌کنید و با حداقل راهنمایی و خودمدیریتی جلو می‌برید. از همه‌ی افراد در نردبان انتظار می‌رود به L4 برسند."),
      pace: L("L4 is the level everyone is expected to reach. Beyond it, growth is earned through scope, not tenure.",
              "L4 سطحی است که از همه انتظار می‌رود به آن برسند. بعد از آن، رشد با scope به دست می‌آید، نه با گذشت زمان."),
      altitude: {
        scope: L("A project of several months, broken down and delivered by you", "یک پروژه‌ی چندماهه که خودتان می‌شکنید و تحویل می‌دهید"),
        autonomy: L("Minimal guidance. You manage yourself and your priorities", "حداقل راهنمایی. خودتان را و اولویت‌هایتان را مدیریت می‌کنید"),
        ambiguity: L("Moderate: non-trivial problems with several options and no obvious best", "متوسط: مساله‌های نابدیهی با چند گزینه و بدون بهترینِ واضح"),
        horizon: L("Several months", "چند ماه"),
        people: L("Your team, neighbouring teams and stakeholders; you mentor newer colleagues", "تیم خودتان، تیم‌های همسایه و ذی‌نفعان؛ همکاران تازه‌کارتر را mentor می‌کنید")
      },
      lenses: {
        contribution: [
          L("You own end-to-end work at the scale of several months and deliver it with minimal help from more senior colleagues. The time span alone isn't the test; breaking the work down and running delivery yourself is.",
            "کارهای end-to-end در مقیاس چند ماه را own می‌کنید و با حداقل کمک همکاران ارشدتر تحویل می‌دهید. صرفِ بازه‌ی زمانی معیار نیست؛ شکستن کار و مدیریت delivery توسط خودتان معیار است."),
          L("You plan dependencies and timelines, coordinate stakeholders, set priorities and revisit them on cost/benefit when reality changes.",
            "برای وابستگی‌ها و زمان‌بندی‌ها برنامه‌ریزی می‌کنید، با ذی‌نفعان هماهنگ می‌شوید، اولویت می‌گذارید و وقتی واقعیت عوض شد بر اساس هزینه/فایده بازبینی‌شان می‌کنید."),
          L("You deliver the whole thing: documentation, tests, monitoring and the processes that make the work complete and viable. You bring in others when needed; end-to-end doesn't mean \"all of it is me\".",
            "کار را کامل تحویل می‌دهید: مستندسازی، تست، monitoring و فرایندهایی که کار را «کامل و بقاپذیر» می‌کنند. در صورت لزوم از دیگران کمک می‌گیرید؛ end-to-end یعنی «همه‌ش حتما خودم» نیست.")
        ],
        challenge: [
          L("You see the bigger picture and what your work does upstream and downstream, and you decide accordingly. You don't see only the ticket.",
            "تصویر بزرگ‌تر و تاثیر کارتان بر upstream و downstream را می‌بینید و بر آن اساس تصمیم می‌گیرید. فقط taskِ محول‌شده را نمی‌بینید."),
          L("For non-trivial problems you provide solutions: analysing several options with no clear best and choosing one.",
            "برای مساله‌های نابدیهی راه‌حل می‌دهید: تحلیل چند گزینه‌ی بدون بهترینِ واضح و انتخاب یکی از آن‌ها."),
          L("You find the technical problems and requirements yourself, propose the next pieces of work for you and the team, and help the team course-correct.",
            "مساله‌های فنی و نیازمندی‌ها را خودتان پیدا می‌کنید، کارهای بعدی را برای خود و تیم پیشنهاد می‌دهید و به تیم کمک می‌کنید مسیرش را اصلاح کند.")
        ],
        influence: [
          L("You understand the dependencies and consequences of your work for other systems and teams, and you do the communication and coordination it needs.",
            "وابستگی‌ها و پیامدهای کارتان برای بقیه‌ی سیستم و تیم‌ها را می‌فهمید و ارتباطات و هماهنگی‌های لازم را انجام می‌دهید."),
          L("You identify stakeholders, talk effectively with cross-functional partners, and align timelines and goals for your part of the project.",
            "ذی‌نفعان را شناسایی می‌کنید، با شریکان cross-functional ارتباط موثر می‌گیرید و زمان‌بندی و اهداف بخش خودتان را هماهنگ می‌کنید."),
          L("You mentor teammates and newer people, and you act on conflicts inside or between teams instead of ignoring them.",
            "هم‌تیمی‌ها و تازه‌کارتر‌ها را mentor می‌کنید و برای تعارض‌های درون یا بین‌تیمی اقدام می‌کنید، نه این‌که نادیده‌شان بگیرید.")
        ],
        expertise: [
          L("At least one major skill beyond everyday coding: for example data analysis, security, integration-testing mechanisms, production health, support processes.",
            "دست‌کم یک مهارت عمده فراتر از کدنویسی روزمره: مثلا تحلیل داده، امنیت، ساز و کارهای تست integration، سلامت production، فرایندهای پشتیبانی."),
          L("You know your area's product and business needs well, and take part in business decisions with product managers.",
            "نیازهای محصولی و کسب‌وکاری حوزه‌ی کاری‌تان را خوب می‌شناسید و با مدیران محصول در تصمیم‌های کسب‌وکاری مشارکت می‌کنید."),
          L("You command the system's architecture and use that knowledge to improve systems and team performance.",
            "بر معماری سیستم مسلط هستید و از آن برای بهبود سیستم‌ها و عملکرد تیم استفاده می‌کنید.")
        ],
        impact: [
          L("Impact now means whole projects delivered: planned, tracked, shipped and stable, not just tasks finished.",
            "اثرگذاری حالا یعنی پروژه‌های کامل تحویل‌شده: برنامه‌ریزی‌شده، پیگیری‌شده، منتشرشده و پایدار؛ نه فقط taskهای تمام‌شده.")
        ]
      },
      shift: {
        contribution: L("From delivering tasks someone else defined to breaking down, planning and delivering whole multi-month work yourself, including everything that makes it complete.",
                        "از تحویل taskهایی که دیگری تعریف کرده، به شکستن، برنامه‌ریزی و تحویل کارِ چندماهه توسط خودتان، شامل هر آنچه کار را کامل می‌کند."),
        challenge: L("From choosing between known options to analysing open ones, understanding upstream and downstream, and finding the next problems yourself.",
                     "از انتخاب میان گزینه‌های شناخته‌شده، به تحلیل گزینه‌های باز، فهم upstream و downstream و پیدا کردنِ مساله‌های بعدی توسط خودتان."),
        influence: L("From collaborating with help to coordinating dependencies and stakeholders on your own, and mentoring others.",
                     "از همکاری با کمک دیگران، به هماهنگیِ مستقلِ وابستگی‌ها و ذی‌نفعان، و mentor کردن دیگران."),
        expertise: L("From a basic grasp to command of your system's architecture, plus one major skill beyond coding.",
                     "از فهم پایه‌ای، به تسلط بر معماری سیستم، به‌علاوه‌ی یک مهارت عمده فراتر از کدنویسی.")
      }
    },

    /* ===================== L5 ===================== */
    {
      id: "L5",
      name: L("Shape", "شکل‌دهی"),
      tagline: L("Own an area, set direction", "یک حوزه را own کنید و جهت بدهید"),
      question: L("Can I own an area, decide what is worth doing, and set direction for others, while still delivering outstanding work?",
                  "آیا می‌توانم یک حوزه را own کنم، تشخیص بدهم چه کاری ارزش دارد و برای دیگران جهت تعیین کنم، و همچنان کاری متعالی تحویل بدهم؟"),
      essence: L("Your sphere of influence reaches beyond yourself. You own and advance an area of work, not one-off projects. You can be a technical specialist of exceptional ability, a proven tech lead for a group, or something in between.",
                 "دامنه‌ی نفوذتان فراتر از خودتان است. یک حوزه‌ی کاری را own می‌کنید و جلو می‌برید، نه پروژه‌های مجزا را. می‌توانید یک متخصص فنی با توانایی استثنایی باشید، یک tech lead اثبات‌شده برای یک گروه، یا جایی میان این دو."),
      pace: L("L5 is a step in kind, not just size: from owning a project to owning an area. Many strong engineers build a long, valuable career here.",
              "L5 تغییر در نوع است، نه فقط اندازه: از own کردن یک پروژه به own کردن یک حوزه. بسیاری از مهندسان قوی در همین سطح مسیر طولانی و ارزشمندی می‌سازند."),
      altitude: {
        scope: L("An area: one or more projects across several quarters", "یک حوزه: یک یا چند پروژه در طول چندین فصل"),
        autonomy: L("You set your own direction, and usually direction for 2–3 engineers around you", "جهت کار خودتان را تعیین می‌کنید و معمولا برای ۲ تا ۳ مهندس اطرافتان هم"),
        ambiguity: L("High: problems where no 'best' solution is clear", "زیاد: مساله‌هایی که هیچ راه‌حلِ «بهترینِ» روشنی ندارند"),
        horizon: L("Several quarters", "چندین فصل"),
        people: L("Your team and neighbouring teams; a point of contact for stakeholders", "تیم خودتان و تیم‌های همسایه؛ نقطه‌ی تماس ذی‌نفعان")
      },
      lenses: {
        contribution: [
          L("You move an area of work forward (one or more projects) and own every aspect of it, including scoping what is and isn't part of the problem.",
            "یک حوزه‌ی کاری (شامل یک یا چند پروژه) را جلو می‌برید و همه‌ی جنبه‌هایش را own می‌کنید، از جمله scope کردنِ این‌که چه بخش‌هایی جزو مساله هستند و چه بخش‌هایی نیستند."),
          L("For problems far larger than L4 scope, typically several quarters, you design, plan and implement them, or hand off the implementation well.",
            "برای مساله‌هایی با scope بسیار بزرگ‌تر از L4 (معمولا چند فصل)، طراحی، برنامه‌ریزی و پیاده‌سازی می‌کنید، یا پیاده‌سازی را خوب به همکاران می‌سپارید."),
          L("You are a source of ideas, not only an implementer, and you also take other people's raw ideas and make them actionable.",
            "منشأ ایده هستید، نه فقط پیاده‌ساز؛ ایده‌های خام دیگران را هم می‌شنوید و اجرایی‌شان می‌کنید."),
          L("You lead your own technical contributions, usually set direction for 2–3 engineers, and balance short-term needs against the long-term health of what you own.",
            "مشارکت‌های فنی‌تان را رهبری می‌کنید، معمولا برای ۲ تا ۳ مهندس تعیین جهت می‌کنید و میان نیازهای کوتاه‌مدت و سلامت بلندمدت حوزه‌ی تحت ownership‌تان تعادل برقرار می‌کنید.")
        ],
        challenge: [
          L("Ambiguous problem, no clear best answer? You research options and technologies, design a solution and own it through to the end, which usually includes work beyond coding.",
            "مساله‌ی مبهم و بدون راه‌حل بهترینِ روشن؟ گزینه‌ها و تکنولوژی‌ها را بررسی می‌کنید، راه‌حل طراحی می‌کنید و تا پایان own می‌کنید؛ کاری که معمولا شامل کارهایی فراتر از کدنویسی است."),
          L("You see both short- and long-term needs. You know when to improve the existing system and when to rebuild, and you design for sustainability.",
            "هر دو نیاز کوتاه‌مدت و درازمدت را می‌بینید. تشخیص می‌دهید کِی سیستم موجود را بهبود دهید و کِی از نو بسازید، و برای sustainability طراحی می‌کنید."),
          L("You find and fix recurring problems, and you standardise and simplify existing solutions so technical complexity stays under control.",
            "مساله‌های تکرارشونده را شناسایی و رفع می‌کنید، و راه‌حل‌های موجود را استانداردسازی و ساده‌سازی می‌کنید تا پیچیدگی فنی تحت کنترل بماند.")
        ],
        influence: [
          L("Your reach is clearly beyond yourself. You give direction and alignment in your team and sometimes in others, and you are a point of contact for stakeholders.",
            "دامنه‌ی نفوذتان قطعا فراتر از خودتان است. در تیم خودتان و گاهی تیم‌های دیگر جهت‌دهی و همسوسازی می‌کنید و نقطه‌ی تماس (PoC) ذی‌نفعان هستید."),
          L("You build trust with cross-functional partners, coordinate timelines and goals between stakeholders or projects, and share context before people need to ask.",
            "با شریکان cross-functional اعتماد می‌سازید، زمان‌بندی‌ها و اهداف را بین ذی‌نفعان یا پروژه‌ها هماهنگ می‌کنید و context را پیش از این‌که بپرسند به اشتراک می‌گذارید."),
          L("You spot disagreements inside or between teams and steer them to the same page, for the organisation's benefit.",
            "اختلاف‌های درون‌تیمی یا بین‌تیمی را می‌بینید و برای نفع سازمان به سمت هم‌صفحگی مدیریت‌شان می‌کنید.")
        ],
        expertise: [
          L("Depth or breadth: you are either a trusted deep authority in a specific area, or a generalist with wide range.",
            "عمق یا عرض: یا یک مرجع قابل‌اعتماد و عمیق در یک زمینه‌ی خاص هستید، یا یک generalist با پهنه‌ای گسترده."),
          L("You do several kinds of work beyond coding: data, security, integration testing, production excellence, support processes.",
            "چند نوع کار فراتر از کدنویسی انجام می‌دهید: داده، امنیت، تست integration، تعالی production، فرایندهای پشتیبانی."),
          L("You have an 'inner PM': you know the product and business needs well enough to make the trade-offs yourself.",
            "یک «PM درونی» دارید: نیازهای محصول و کسب‌وکار را آن‌قدر خوب می‌شناسید که خودتان trade-offها را تصمیم بگیرید.")
        ],
        impact: [
          L("Tangible impact for the organisation, judged by how the work itself fared (launched, adopted, stable), not only by how well tasks were done.",
            "اثرگذاری ملموس برای سازمان؛ با این معیار که خودِ کار چه سرنوشتی داشت (launch شد، پذیرفته شد، پایدار ماند)، نه فقط این‌که taskها چقدر خوب انجام شد.")
        ]
      },
      shift: {
        contribution: L("From owning a project to owning an area: you scope the problem, originate ideas and set direction for 2–3 engineers.",
                        "از own کردن یک پروژه به own کردن یک حوزه: مساله را scope می‌کنید، ایده می‌سازید و برای ۲ تا ۳ مهندس جهت تعیین می‌کنید."),
        challenge: L("From weighing options to resolving real ambiguity, and from fixing issues to eliminating the recurring ones.",
                     "از سنجیدن گزینه‌ها، به رفع ابهام واقعی؛ و از رفع ایرادها به ریشه‌کن کردن ایرادهای تکرارشونده."),
        influence: L("From coordinating for your project to being the trusted point of contact whose alignment work outlasts the project.",
                     "از هماهنگی برای پروژه‌ی خودتان، به نقطه‌ی تماسِ معتمدی که اثر همسوسازی‌اش از پروژه بیشتر عمر می‌کند."),
        expertise: L("From command of one system plus a skill to depth or breadth, with an inner PM.",
                     "از تسلط بر یک سیستم به‌علاوه‌ی یک مهارت، به عمق یا عرض، همراه با یک PM درونی.")
      }
    },

    /* ===================== L6 ===================== */
    {
      id: "L6",
      name: L("Steer", "جهت‌دهی"),
      tagline: L("Decide which problems matter", "تعیین کنید روی چه مساله‌هایی کار شود"),
      question: L("Can I decide which problems the organisation should work on, and lead the strategy that solves them through many people?",
                  "آیا می‌توانم تعیین کنم سازمان روی چه مساله‌هایی کار کند و استراتژی حل آن‌ها را از طریق افراد زیادی رهبری کنم؟"),
      essence: L("From L6 on, each level is effectively a different role. You have strategic impact, solve inherently ambiguous problems, and your decisions reach beyond your own team.",
                 "از L6 به بعد، هر سطح عملا یک نقش متفاوت است. تاثیر استراتژیک (جهت‌دهی) دارید، مساله‌های ذاتا مبهم حل می‌کنید و تصمیم‌هایتان فراتر از تیم خودتان اثر دارد."),
      pace: L("A step in kind again: from owning an area to steering strategy for a group, a hard problem or a long horizon. It takes a truly exceptional IC, or an outstanding tech lead for large teams, or something between.",
              "دوباره تغییر در نوع: از own کردن یک حوزه به هدایت استراتژی برای یک گروه، یک مساله‌ی سخت یا یک افق بلند. نیازمند یک IC واقعا استثنایی، یا یک tech lead برجسته برای تیم‌های بزرگ، یا چیزی میان این دو است."),
      altitude: {
        scope: L("A large working group (10+ people), a very hard problem, a long horizon (1+ year), or a mix", "یک گروه کاری بزرگ (۱۰+ نفر)، یک مساله‌ی بسیار سخت، یک افق بلند (۱+ سال)، یا ترکیبی از این‌ها"),
        autonomy: L("You set strategy and own the delivery of its results", "استراتژی را تعیین می‌کنید و ثمردهی آن را own می‌کنید"),
        ambiguity: L("Inherent: even senior leaders don't see the high-level solution", "ذاتی: حتی رهبران ارشد هم تصویر سطح‌بالای راه‌حل را نمی‌بینند"),
        horizon: L("One year and beyond", "یک سال و بیشتر"),
        people: L("Several groups, with competing priorities among stakeholders", "چندین گروه، با اولویت‌های رقیبِ ذی‌نفعان")
      },
      lenses: {
        contribution: [
          L("You lead a mix of a large working group (10+ people, yours or other teams), a very challenging problem and/or a long horizon (1+ year). You set the strategy and own delivering its results.",
            "ترکیبی از یک گروه کاری بزرگ (۱۰+ نفر، از تیم‌های خودتان یا دیگران)، یک مساله‌ی بسیار چالشی و/یا یک افق بلند (۱+ سال) را رهبری می‌کنید. استراتژی را تعیین می‌کنید و ثمردهی آن را own می‌کنید."),
          L("You judge when to invest in a new project and when to improve gradually, and you lead for sustainability.",
            "برآورد می‌کنید کِی در یک پروژه‌ی جدید سرمایه‌گذاری کنیم و کِی بهبود تدریجی بدهیم، و برای sustainability راهبری می‌کنید."),
          L("You solve problems for the whole organisation, not only your own area.",
            "مساله‌ها را برای کل سازمان حل می‌کنید، نه فقط حوزه‌ی خودتان.")
        ],
        challenge: [
          L("You clarify and solve problems that are inherently ambiguous: open-ended ones whose high-level solution isn't clear even to the organisation's senior leaders.",
            "مساله‌هایی را که ذاتا مبهم‌اند شفاف و حل می‌کنید: مساله‌های پایان-باز که حتی تصویر سطح‌بالای راه‌حلشان برای رهبران ارشد سازمان روشن نیست."),
          L("You determine, or effectively influence, which problems we should work on, and you discover future areas of work yourself.",
            "تعیین می‌کنید (یا موثر روی تصمیم اثر می‌گذارید) که روی چه مساله‌هایی کار کنیم، و زمینه‌های کاری آینده را خودتان کشف می‌کنید."),
          L("You reduce system complexity, raise quality attributes (availability, reliability, performance, security) and prevent problems before they appear.",
            "پیچیدگی سیستم را کم می‌کنید، شاخصه‌های کیفیت (دسترسی‌پذیری، اتکاپذیری، کارایی، امنیت) را بالا می‌برید و پیش‌دستانه از مشکلات پیش‌گیری می‌کنید.")
        ],
        influence: [
          L("You lead across several groups, including when stakeholders' priorities compete, and align outcomes with the organisation's interests.",
            "در میان چندین گروه رهبری می‌کنید، از جمله وقتی اولویت‌های ذی‌نفعان با هم رقابت دارند، و نتایج را با منافع سازمان همسو می‌کنید."),
          L("You are a role model for high standards and teamwork, with a visible positive effect on the speed and success of the people around you.",
            "الگوی استانداردهای بالای کاری و کار تیمی هستید، با تاثیر مثبت محسوس بر سرعت و موفقیت اطرافیان."),
          L("You mentor technically with continuous feedback, and represent the technical team as the subject-matter expert when aligning with partners.",
            "مربی‌گری فنی می‌کنید و با بازخورد پیوسته به رشد دیگران کمک می‌کنید، و در همسوسازی با شرکا نماینده‌ی تیم فنی به‌عنوان متخصص حوزه (SME) هستید.")
        ],
        expertise: [
          L("Both depth and breadth: you are the go-to person in your specialty and also know systems, technologies and processes broadly.",
            "هم عمق و هم عرض: در حوزه‌ی تخصصی‌تان مرجع هستید و دانش گسترده‌ای از سیستم‌ها، تکنولوژی‌ها و فرایندها دارید."),
          L("You command the architectures across your whole product area and steer teams toward the right decisions.",
            "بر معماری‌ها در کل حوزه‌ی محصولی‌تان مسلط هستید و تیم‌ها را به تصمیم‌های درست می‌رسانید.")
        ],
        impact: [
          L("Strategic impact: the direction you set produced results for the organisation, beyond what any one team shipped.",
            "اثرگذاری استراتژیک: جهتی که تعیین کردید برای سازمان نتیجه ساخت، فراتر از آنچه یک تیم تحویل داده است.")
        ]
      },
      shift: {
        contribution: L("From owning an area to leading a group, a hard problem or a long horizon: you set strategy, then own its results.",
                        "از own کردن یک حوزه به رهبری یک گروه، یک مساله‌ی سخت یا یک افق بلند: استراتژی را تعیین می‌کنید، سپس نتایجش را own می‌کنید."),
        challenge: L("From resolving ambiguity inside an area to deciding which problems the organisation should take on at all.",
                     "از رفع ابهام در یک حوزه، به تعیین این‌که سازمان اصلا کدام مساله‌ها را برعهده بگیرد."),
        influence: L("From aligning stakeholders in your area to leading across groups with competing priorities.",
                     "از همسوسازی ذی‌نفعان حوزه‌ی خودتان، به رهبری میان گروه‌هایی با اولویت‌های رقیب."),
        expertise: L("From depth or breadth to both: command of the architecture of the whole product area.",
                     "از عمق یا عرض، به هر دو: تسلط بر معماری کل حوزه‌ی محصولی.")
      }
    },

    /* ===================== L7 ===================== */
    {
      id: "L7",
      name: L("Anchor", "مرجعیت"),
      tagline: L("Be accountable for a strategic area", "پاسخگوی یک حوزه‌ی استراتژیک باشید"),
      question: L("Can I be accountable for a strategic technical area, and raise what the whole organisation is capable of?",
                  "آیا می‌توانم پاسخگوی یک حوزه‌ی فنی استراتژیک باشم و توانمندی کل سازمان را بالا ببرم؟"),
      essence: L("You are responsible for a strategic area of high importance. Either a deep expert on a critical area, with a size and depth entirely beyond L6, or broad, leading several L6-scope efforts to success.",
                 "مسئول یک حوزه‌ی استراتژیک با اهمیت بالا برای سازمان هستید. یا متخصص عمیق یک حوزه‌ی حیاتی (با اندازه و عمقی کاملا فراتر از L6)، یا در عرض گسترده هستید و چند تلاش با scope سطح L6 را به موفقیت می‌رسانید."),
      pace: L("Rare at any company. Beyond L7 the ladder continues (principal, distinguished); this guide stops here because behaviours become highly individual.",
              "در هر شرکتی نادر است. بالاتر از L7 نردبان ادامه دارد (principal، distinguished)؛ این راهنما همین‌جا متوقف می‌شود چون رفتارها بسیار فردی می‌شوند."),
      altitude: {
        scope: L("A strategic technical area of high importance, or several L6-scope efforts at once", "یک حوزه‌ی فنی استراتژیک با اهمیت بالا، یا چند تلاش هم‌زمان با scope سطح L6"),
        autonomy: L("You identify the large-scale problems worth solving and break them into projects", "مساله‌های کلانِ ارزشمند را شناسایی و به پروژه تقسیم می‌کنید"),
        ambiguity: L("Spans several complex systems and/or sub-organisations", "چندین سیستم پیچیده و/یا چندین زیرسازمان را در بر می‌گیرد"),
        horizon: L("Multi-year", "چندساله"),
        people: L("Teams beyond your own and the decisions of senior leadership", "تیم‌هایی فراتر از تیم خودتان و تصمیم‌های رهبری ارشد")
      },
      lenses: {
        contribution: [
          L("You are responsible and accountable for a strategic technical area of high importance, and your decisions meaningfully raise the organisation's capabilities.",
            "مسئول و پاسخگوی یک حوزه‌ی فنی استراتژیک با اهمیت بالا هستید و تصمیم‌هایتان ظرفیت‌های سازمان را به شکل معنی‌داری افزایش می‌دهد."),
          L("Either a deep expert on a critical area (size and depth entirely beyond L6), or broad and leading multiple L6-scope projects to success.",
            "یا متخصص عمیق یک حوزه‌ی حیاتی (اندازه و عمقی کاملا فراتر از L6)، یا در عرض گسترده و رهبر چندین پروژه با scope سطح L6 تا موفقیت."),
          L("You look after sensitive, complex systems, answer the hard questions, debug complex systems, and find and remove productivity obstacles across teams.",
            "از سیستم‌های حساس و پیچیده نگهداری می‌کنید، سوال‌های سخت را پاسخ می‌دهید، سیستم‌های پیچیده را عیب‌زدایی می‌کنید و موانع بهره‌وری در تیم‌ها را شناسایی و برمی‌دارید.")
        ],
        challenge: [
          L("You find and solve ambiguous, complex problems that span the interactions of several complex systems and/or sub-organisations.",
            "مساله‌های فنی مبهم و پیچیده‌ای را کشف و حل می‌کنید که تعاملات چندین سیستم پیچیده و/یا چندین زیرسازمان را شامل می‌شوند."),
          L("You bring a high level of creativity and innovation, and you spot large-scale problems worth solving and break them into projects for your own teams or others.",
            "سطح بالایی از خلاقیت و نوآوری نشان می‌دهید، و مساله‌های کلانِ ارزش‌حل‌شدن را شناسایی می‌کنید و به پروژه‌هایی برای تیم‌های خودتان یا دیگران می‌شکنید.")
        ],
        influence: [
          L("You build consensus between teams with misaligned or conflicting views, and act as a trusted, impartial arbiter who can state each side's position well.",
            "بین تیم‌هایی با نظرات ناهمسو یا متضاد اجماع می‌سازید و به‌عنوان یک حَکَم معتمد و بی‌طرف عمل می‌کنید که می‌تواند نقطه‌نظر هر طرف را خوب بیان کند."),
          L("You influence technical direction for teams beyond your own and the decisions of senior leadership, and align cross-functional leaders on goals, strategy and priorities.",
            "روی جهت‌دهی فنی تیم‌هایی فراتر از تیم خودتان و روی تصمیم‌های رهبری ارشد اثر دارید، و رهبران cross-functional را روی اهداف، استراتژی و اولویت‌ها همسو می‌کنید."),
          L("You reduce inefficiency across functional boundaries and actively build an environment of participation and collaboration.",
            "نابهینگی میان مرزهای functional را کاهش می‌دهید و فعالانه محیط مشارکت و همکاری می‌سازید.")
        ],
        expertise: [
          L("You are the de facto authority, or the official owner, of a major system, with broad and deep knowledge of systems, technologies and processes.",
            "مرجع عملی (de facto) یا مسئول رسمی یک سیستم عمده هستید، با دانش گسترده و عمیق از سیستم‌ها، تکنولوژی‌ها و فرایندها."),
          L("You command the architectures across your product area and guide teams toward the right decisions.",
            "بر معماری‌ها در کل حوزه‌ی محصولی‌تان مسلط هستید و تیم‌ها را به تصمیم‌های درست می‌رسانید.")
        ],
        impact: [
          L("Organisation-level capability: what the company can now do that it couldn't before, because of your work and decisions.",
            "توانمندی در سطح سازمان: آنچه شرکت حالا می‌تواند انجام دهد و قبلا نمی‌توانست، به‌خاطر کار و تصمیم‌های شما.")
        ]
      },
      shift: {
        contribution: L("From leading a strategy to being accountable for a strategic area, with depth or breadth well beyond L6.",
                        "از رهبری یک استراتژی به پاسخگویی برای یک حوزه‌ی استراتژیک، با عمق یا عرضی بسیار فراتر از L6."),
        challenge: L("From ambiguous problems within an organisation to problems across many complex systems and sub-organisations, and from choosing problems to naming the large-scale ones worth solving.",
                     "از مساله‌های مبهم درون یک سازمان، به مساله‌هایی میان سیستم‌ها و زیرسازمان‌های پیچیده‌ی متعدد؛ و از انتخاب مساله به نام‌بردنِ مساله‌های کلانِ ارزش‌حل‌شدن."),
        influence: L("From aligning groups to being the trusted arbiter whose voice shapes senior leadership's decisions.",
                     "از همسوسازی گروه‌ها، به حَکَم معتمدی که صدایش تصمیم‌های رهبری ارشد را شکل می‌دهد."),
        expertise: L("From go-to person in an area to the de facto authority on a major system.",
                     "از مرجعِ یک زمینه به مرجع عملی (de facto) یک سیستم عمده.")
      }
    }
  ];
})();

/* Toolkit content: evidence-log prompts, weak-to-strong lines, 1:1 kit, promotion-packet outline, design-doc outline.
   The weak/strong lines are our own illustrations built on the sourced principles (specific result + beneficiary + your role);
   their numbers are made up. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;

  S.data.toolkit = {
    /* ---------------- evidence log ---------------- */
    evidence: {
      cats: [
        { id: "project", name: L("Project or launch", "پروژه یا launch") },
        { id: "people", name: L("Collaboration and mentoring", "همکاری و mentoring") },
        { id: "design", name: L("Design and documentation", "طراحی و مستندات") },
        { id: "company", name: L("Making the company better", "بهتر کردن شرکت") },
        { id: "skills", name: L("Skills I learned", "مهارت‌هایی که یاد گرفتم") },
        { id: "outside", name: L("Outside work", "بیرون از کار") }
      ],
      prompts: [
        L("What did I ship, and what changed for the people who use it?", "چه چیزی تحویل دادم و برای کسانی که از آن استفاده می‌کنند چه چیزی عوض شد؟"),
        L("What did I unblock, for whom, and how long would it have taken otherwise?", "کدام مانع را برای چه کسی برطرف کردم و بدون این کمک، کار چقدر طول می‌کشید؟"),
        L("What did I decide, and what did I give up by deciding it?", "چه تصمیمی گرفتم و کدام مزیت‌ها را در برابر آن کنار گذاشتم؟"),
        L("Who did I help grow, and what can they do now that they couldn't?", "به رشد چه کسی کمک کردم و حالا چه کاری می‌تواند انجام دهد که قبلا نمی‌توانست؟"),
        L("What broke, and what did I leave behind so it won't break the same way?", "چه مشکلی رخ داد و چه اقدامی کردم تا دوباره تکرار نشود؟"),
        L("What did I learn that changed how I work?", "چه چیزی یاد گرفتم که شیوه‌ی کارم را عوض کرد؟")
      ],
      tips: [
        L("Update it every two weeks. Two lines are enough: what happened, your role, who benefited.", "هر دو هفته به‌روز کنید. دو خط کافی است: چه اتفاقی افتاد، نقش شما چه بود و چه کسی بهره برد."),
        L("Write the number when you have it, or the name of the person who can give it to you.", "اگر عددی دارید ثبت کنید. در غیر این صورت، نام کسی را بنویسید که بتواند آن را ارائه کند."),
        L("Share it with your manager before reviews, and with peers who'll be asked about you.", "پیش از ارزیابی‌ها با مدیرتان و با همکارانی که قرار است درباره‌ی عملکرد شما نظر بدهند به اشتراک بگذارید."),
        L("Don't oversell. Specific and modest beats grand and vague.", "بزرگ‌نمایی نکنید. توضیح مشخص و فروتنانه از ادعاهای مبهم و پرزرق‌وبرق موثرتر است.")
      ],
      source: L("The format follows Julia Evans's “brag document”: a running record of work and impact, kept so that memory, invisible work and your manager's need for arguments don't undercut you.",
                "قالب بر اساس brag document از Julia Evans است: ثبت مستمر کارها و اثرگذاری، تا فراموش شدن جزئیات یا دیده نشدن کارها، دفاع مدیر از عملکرد شما را دشوار نکند.")
    },

    /* ---------------- weak to strong ---------------- */
    weakStrong: [
      { weak: L("Improved the tests.", "تست‌ها را بهتر کردم."),
        strong: L("Made the test suite 3× faster (18 to 6 minutes), saving each engineer about 40 minutes a day.", "مجموعه‌ی تست را 3 برابر سریع‌تر کردم (از 18 به 6 دقیقه) و برای هر مهندس حدود 40 دقیقه در روز صرفه‌جویی شد."),
        why: L("A specific result and who benefits.", "نتیجه‌ی مشخص و این‌که چه کسی سود می‌برد.") },
      { weak: L("Built the notification service.", "سرویس اعلان را ساختم."),
        strong: L("Built it; missed-alert tickets fell about 70% and on-call pages dropped from 25 to 10 a month.", "سرویس را ساختم. ticketهای مربوط به هشدارهای ازدست‌رفته حدود 70% کاهش یافت و تعداد pageهای on-call از 25 به 10 در ماه رسید."),
        why: L("Impact over activity: revenue, efficiency, tickets.", "نتیجه‌ی کار به‌جای شرح فعالیت: درآمد، بهره‌وری و ticketها.") },
      { weak: L("Part of the payments migration.", "بخشی از مهاجرت پرداخت بودم."),
        strong: L("Owned design and rollout of the payments migration; recruited six teams and migrated the three hardest services myself.", "طراحی و rollout مربوط به migration پرداخت را own کردم، شش تیم را همسو کردم و انتقال سه سرویس دشوارتر را خودم انجام دادم."),
        why: L("States your role: owner or participant?", "نقش شما را روشن می‌کند: مسئول نتیجه بودید یا در کار مشارکت داشتید؟") },
      { weak: L("Led a large cross-team project.", "یک پروژه‌ی بزرگ میان‌تیمی را رهبری کردم."),
        strong: L("The problem was undefined at the start. I wrote the definition, cut two features and delivered for three teams in two quarters.", "مساله در ابتدا تعریف‌نشده بود. تعریفش را نوشتم، دو قابلیت را حذف کردم و ظرف دو فصل برای سه تیم تحویل دادم."),
        why: L("Shows the ambiguity you handled and the scope choices you made.", "میزان ابهام رفع‌شده و تصمیم‌های شما درباره‌ی scope را نشان می‌دهد.") },
      { weak: L("Fixed the outage.", "قطعی را رفع کردم."),
        strong: L("Fixed it and closed the cause: new alerts and a runbook, and no repeat in two quarters.", "مشکل را رفع و علت آن را برطرف کردم. alertهای جدید و runbook اضافه شد و قطعی طی دو فصل تکرار نشد."),
        why: L("What persists after you're gone.", "آنچه بعد از رفتن شما می‌ماند.") },
      { weak: L("Great launch in Q3.", "launch عالی در فصل سوم."),
        strong: L("Three launches in four quarters at steady quality. The last two ran without manager involvement.", "سه launch در چهار فصل با کیفیت ثابت. دو تای آخر بدون دخالت مدیر انجام شد."),
        why: L("Sustained, not a one-off.", "استمرار عملکرد، نه موفقیتی یک‌باره.") },
      { weak: L("People say I'm helpful.", "می‌گویند خیلی به دیگران کمک می‌کنم."),
        strong: L("From a staff engineer on another team: “Her design unblocked our migration and saved us about three weeks.”", "نظر مهندس staff در تیمی دیگر: «طراحی او مانع migration ما را برطرف کرد و حدود سه هفته در زمان صرفه‌جویی شد.»"),
        why: L("A short advocate line, with a number.", "یک جمله‌ی کوتاه از حامی، با عدد.") },
      { weak: L("Mentored juniors.", "تازه‌کارها را mentor کردم."),
        strong: L("Onboarded three engineers; two were on call independently within eight weeks, and my guide is now used by two other teams.", "سه مهندس را onboard کردم. دو نفر ظرف هشت هفته مستقل مسئول on-call شدند و راهنمای من اکنون در دو تیم دیگر هم استفاده می‌شود."),
        why: L("Mentoring with an outcome and an artifact.", "mentoring با نتیجه و artifact.") },
      { weak: L("Stayed up all night to rescue the release.", "تمام شب بیدار ماندم تا release را نجات بدهم."),
        strong: L("Flagged the risk three weeks earlier, shipped a fallback and a staged rollout, no customer impact, and the plan is documented.", "ریسک را سه هفته زودتر اعلام کردم، fallback را آماده کردم و rollout را مرحله‌ای و بدون اختلال برای مشتری انجام دادم. برنامه هم مستند است."),
        why: L("Makes prevention visible instead of heroics.", "اثر پیشگیری را به‌جای قهرمان‌بازی نشان می‌دهد.") },
      { weak: L("Senior for five years at my last company.", "پنج سال Senior در شرکت قبلی‌ام بودم."),
        strong: L("Led X across three teams with result Y. Here is how that maps to your descriptor for the target level.", "پروژه‌ی X را با مشارکت سه تیم و نتیجه‌ی Y هدایت کردم. این شواهد با انتظارات سطح هدف شما چنین تطبیق دارد."),
        why: L("Level conversations need evidence mapped to descriptors.", "گفتگو درباره‌ی سطح به شواهدی نیاز دارد که با انتظارات آن سطح تطبیق داده شده باشند.") }
    ],

    /* ---------------- 1:1 growth conversation ---------------- */
    oneonone: {
      blocks: [
        { id: "last", t: L("Since last time", "از دفعه‌ی قبل"), x: L("One result you're proud of, one thing that didn't go to plan, and what you changed because of it.", "یک نتیجه که به آن افتخار می‌کنید، یک چیز که طبق برنامه پیش نرفت و آنچه به‌خاطر آن عوض کردید.") },
        { id: "grid", t: L("Me against the next level", "عملکرد من در مقایسه با سطح بعد"), x: L("For each lens, one example from the last 6–12 months, or an honest blank. Ask your manager to fill in the same grid and compare.", "برای هر بُعد، یک مثال از 6 تا 12 ماه گذشته، یا یک جای خالی صادقانه. از مدیرتان بخواهید همین جدول را پر کند و مقایسه کنید.") },
        { id: "scope", t: L("Scope", "scope"), x: L("What is the next piece of work that would be next-level in size, and what would you need to see to hand it to me?", "کدام کار پیش رو، scope سطح بعد را دارد و برای سپردن آن به من چه شواهدی نیاز دارید؟") },
        { id: "ask", t: L("What I need from you", "آنچه از شما می‌خواهم"), x: L("One concrete ask: a stretch project, an intro, a seat in a review, feedback on a document.", "یک درخواست مشخص: پروژه‌ی چالشی، معرفی به یک همکار، حضور در جلسه‌ی review یا بازخورد روی یک سند.") },
        { id: "next", t: L("Agree the next step", "بر سر گام بعدی توافق کنید"), x: L("Write one sentence both of you will check next time, and a date.", "اقدام مورد توافق و تاریخ بررسی دوباره‌ی آن را در یک جمله بنویسید.") }
      ],
      questions: [
        { id: "expect", name: L("Expectations", "انتظارها"), qs: [
          L("What does the next level look like here, in your words? Can I read the written version?", "از نظر شما، انتظارات سطح بعد در اینجا چیست؟ می‌توانم نسخه‌ی مکتوب آن را بخوانم؟"),
          L("Which of the lenses do you think is my strongest, and which is thinnest?", "کدام بُعد عملکردم قوی‌تر است و برای کدام بُعد شواهد کمتری دارم؟"),
          L("What would a “not yet” look like for me, and what would turn it into a “yes”?", "چه چیزی هنوز مانع ارتقای من است و چه تغییری آن را برطرف می‌کند؟")
        ] },
        { id: "evid", name: L("Evidence", "شواهد"), qs: [
          L("Which of my examples from the last six months would you be comfortable quoting to a committee?", "به کدام مثال‌های شش ماه گذشته‌ی من می‌توانید با اطمینان در کمیته استناد کنید؟"),
          L("Whose view of my work would carry the most weight, and have they seen it?", "نظر چه کسی درباره‌ی کار من بیشترین وزن را دارد و آیا کارم را دیده؟"),
          L("What's missing for a packet to be quotable, in numbers or in voices?", "برای دفاع موثر از پرونده‌ام، کدام شواهد عددی یا نظر همکاران کم است؟")
        ] },
        { id: "scope2", name: L("Scope and stretch", "scope و پروژه‌ی چالشی"), qs: [
          L("Is there a piece of work coming up that is next-level in size? Could I lead it?", "کاری پیش رو داریم که scope آن متناسب با سطح بعد باشد؟ می‌توانم رهبری‌اش کنم؟"),
          L("What would I need to show first for you to trust me with it?", "اول باید چه چیزی نشان بدهم تا آن را به من بسپارید؟"),
          L("If I took it, what should I stop doing?", "اگر آن را بگیرم باید چه چیزی را کنار بگذارم؟")
        ] },
        { id: "feed", name: L("Feedback", "بازخورد"), qs: [
          L("What's one thing I should do more of, and one I should do less of?", "کدام کار را باید بیشتر انجام دهم و کدام را کمتر؟"),
          L("Where did I wait to be told in the last project, when I could have decided?", "در پروژه‌ی آخر کجا منتظر ماندم به من بگویند، در حالی که می‌توانستم خودم تصمیم بگیرم؟"),
          L("How would you describe my impact in two sentences to someone who hasn't met me?", "اثرگذاری مرا در دو جمله برای کسی که مرا ندیده چطور توصیف می‌کنید؟")
        ] },
        { id: "time", name: L("Timeline", "زمان‌بندی"), qs: [
          L("When is the next window, and what do you need from me by when?", "فرصت بعدی ارتقا چه زمانی است و چه چیزی را تا چه تاریخی باید آماده کنم؟"),
          L("Who else will weigh in, and should I talk to them first?", "چه کس دیگری نظر می‌دهد و باید اول با او صحبت کنم؟"),
          L("Can we agree a date, three months out, to look at this again?", "می‌شود برای سه ماه دیگر، تاریخی برای بررسی دوباره تعیین کنیم؟")
        ] }
      ]
    },

    /* ---------------- promotion packet ---------------- */
    packet: {
      intro: L("A packet is a document that must make sense to people who don't know you. Treat it as a development tool first and as evidence second: start a draft at least two cycles before you need it, and share it early.",
               "پرونده باید برای کسانی که شما را نمی‌شناسند هم روشن باشد. ابتدا آن را ابزار رشد بدانید و سپس سند شواهد. تهیه‌ی پیش‌نویس را دست‌کم دو دوره پیش از زمان نیاز شروع کنید و زود به اشتراک بگذارید."),
      sections: [
        { id: "summary", t: L("Summary", "خلاصه"), len: L("3 sentences", "3 جمله"),
          what: L("From which level to which, what you've been doing at the next level, and why now.", "سطح فعلی و هدف، کار انجام‌شده در سطح بعد و دلیل مناسب بودن زمان ارتقا."),
          avoid: L("Adjectives instead of facts: “exceptional”, “highly impactful”.", "صفت به‌جای واقعیت: «استثنایی»، «بسیار اثرگذار».") },
        { id: "projects", t: L("The work at next-level scope", "کار در scope سطح بعد"), len: L("2–4 projects, a paragraph each", "2 تا 4 پروژه، هرکدام یک پاراگراف"),
          what: L("For each: the goal, your role, the scope in people, teams and months, the ambiguity you resolved, the outcome in numbers, and where the evidence lives.", "برای هر پروژه: هدف، نقش شما، scope بر اساس تعداد افراد و تیم‌ها و مدت کار، ابهام رفع‌شده، نتیجه‌ی عددی و محل شواهد."),
          avoid: L("Describing the project instead of your part in it.", "توصیف پروژه به‌جای سهم خودتان از آن.") },
        { id: "lenses", t: L("Lens by lens", "بُعد به بُعد"), len: L("4 short sections", "4 بخش کوتاه"),
          what: L("Contribution, Challenge, Influence, Expertise: one or two examples each, mapped to the next level's descriptor in its own words. Say where one lens is still growing.", "مشارکت، چالش، قدرت نفوذ و تخصص: برای هر بُعد یک یا دو مثال بیاورید و با واژگان شرح سطح بعد، تطبیق آن را توضیح دهید. بُعدی را که هنوز در حال رشد است هم مشخص کنید."),
          avoid: L("Leaving a lens blank. One dominant weakness can block an otherwise strong case.", "خالی گذاشتن یک بُعد. یک ضعف تعیین‌کننده می‌تواند مانع تایید پرونده‌ای قوی شود.") },
        { id: "impact", t: L("Impact in numbers", "اثرگذاری با عدد"), len: L("5–8 lines", "5 تا 8 خط"),
          what: L("The metric that moved, before and after, who benefited and what you did yourself. Where no number exists, time saved or one quoted sentence from the person who felt the change.", "شاخص تغییرکرده، مقدار پیش و پس از کار، افراد بهره‌مند و نقش دقیق خودتان. اگر عددی ندارید، زمان صرفه‌جویی‌شده یا نظر کوتاه فردی را بیاورید که تغییر را تجربه کرده است."),
          avoid: L("“Improved”, “helped”, “supported” with nothing after them.", "«بهتر کردم»، «کمک کردم»، «پشتیبانی کردم» بدون توضیح نتیجه‌ی کار.") },
        { id: "sustained", t: L("Sustained, not a single peak", "عملکرد مستمر، نه یک موفقیت استثنایی"), len: L("1 paragraph", "1 پاراگراف"),
          what: L("Evidence from more than one project and more than one cycle: the pattern, not the exception.", "شواهد چند پروژه و چند دوره‌ی ارزیابی که الگوی عملکرد را نشان دهند."),
          avoid: L("One brilliant project carrying the whole case.", "تکیه‌ی کل پرونده بر یک پروژه‌ی درخشان.") },
        { id: "voices", t: L("Advocate lines", "جمله‌های حامیان"), len: L("3–6 lines of one or two sentences", "3 تا 6 جمله‌ی یکی‌دو خطی"),
          what: L("Short quotes from partners who benefited, including at least one senior peer from another team, each with a fact or number if they have one.", "نظر کوتاه همکارانی که از نتیجه بهره برده‌اند، شامل دست‌کم یک فرد ارشد از تیم دیگر. هر نظر، در صورت امکان، همراه با واقعیت مشخص یا عدد باشد."),
          avoid: L("Long praise with no specifics.", "ستایش طولانی بدون جزئیات.") },
        { id: "gaps", t: L("Gaps and what you're doing about them", "کاستی‌ها و اقدام‌های شما برای رفع آن‌ها"), len: L("3–5 lines", "3 تا 5 خط"),
          what: L("One or two honest gaps, and the concrete step you're already taking. Readers trust a case that names its own thin spots.", "یک یا دو کاستی واقعی و اقدام مشخصی که برای رفع آن‌ها شروع کرده‌اید. بیان صادقانه‌ی نقاط ضعف، اعتماد خواننده را بیشتر می‌کند."),
          avoid: L("Pretending there are none.", "وانمود کردن به این‌که شکافی نیست.") },
        { id: "links", t: L("Appendix of links", "پیوست پیوندها"), len: L("a list", "یک فهرست"),
          what: L("Design docs, dashboards, launch emails, postmortems, your evidence log. Everything a sceptical reader could check in five minutes.", "design docها، داشبوردها، ایمیل‌های launch، postmortemها و سند دستاوردها. شواهدی که خواننده‌ای سخت‌گیر بتواند ظرف پنج دقیقه بررسی کند."),
          avoid: L("Links that require access the readers don't have.", "لینک‌هایی که خواننده اجازه‌ی دسترسی به آن‌ها ندارد.") }
      ],
      source: L("Shaped by Will Larson's guidance on promotion packets (a living document, written for readers who don't know you, with short advocate lines and quantified results) and by public frameworks that say promotion recognises next-level work already done.",
                "بر اساس راهنمای پرونده‌ی ارتقای Will Larson: سندی قابل‌به‌روزرسانی برای افرادی که شما را نمی‌شناسند، همراه با نظر کوتاه حامیان و نتایج عددی. همچنین بر اساس چارچوب‌های عمومی که ارتقا را تایید عملکرد قبلی در سطح بعد می‌دانند.")
    },

    /* ---------------- design doc ---------------- */
    designdoc: {
      intro: L("A design doc is the cheapest place to find out you're wrong. Write one when the solution is ambiguous or costly to reverse; skip it when the answer is obvious.",
               "design doc فرصتی کم‌هزینه برای کشف اشتباه‌ها پیش از پیاده‌سازی است. اگر راه‌حل مبهم است یا بازگشت از آن هزینه‌ی زیادی دارد، بنویسید. برای پاسخ بدیهی لازم نیست."),
      sections: [
        { id: "context", t: L("Context and scope", "context و scope"), x: L("What problem, for whom, and why now. Short enough that a new teammate gets it in two minutes.", "چه مساله‌ای، برای چه کسی و چرا همین حالا. آن‌قدر کوتاه که یک هم‌تیمی تازه‌وارد در دو دقیقه بفهمد.") },
        { id: "goals", t: L("Goals and non-goals", "اهداف و موارد خارج از اهداف پروژه"), x: L("What you'll achieve, in measurable terms, and what you deliberately won't do. Non-goals prevent half the arguments.", "نتیجه‌ی قابل‌اندازه‌گیری و کارهایی را که عمدا انجام نمی‌دهید روشن کنید. مشخص کردن موارد خارج از اهداف پروژه، از بسیاری از بحث‌های بی‌نتیجه جلوگیری می‌کند.") },
        { id: "design", t: L("The design", "طراحی"), x: L("An overview first, then the parts that carry risk: APIs, data storage, failure modes. Diagrams help; explain the trade-offs next to them.", "ابتدا نمای کلی و سپس بخش‌های پرریسک: APIها، ذخیره‌ی داده و حالت‌های خرابی. نمودار کمک می‌کند. trade-offها را کنار آن توضیح دهید.") },
        { id: "alt", t: L("Alternatives considered", "جایگزین‌های بررسی‌شده"), x: L("At least two, with why you didn't choose them. This is the part reviewers read most closely.", "دست‌کم دو گزینه و دلیل انتخاب نکردن هرکدام. کسانی که سند را review می‌کنند معمولا این بخش را با دقت بیشتری می‌خوانند.") },
        { id: "cross", t: L("Cross-cutting concerns", "ملاحظات مشترک سیستم"), x: L("Security, privacy, observability, cost, on-call load. Invite the people who own each to review.", "امنیت، حریم خصوصی، observability، هزینه و بار on-call. از مسئولان این حوزه‌ها بخواهید طراحی را review کنند.") },
        { id: "rollout", t: L("Rollout and migration", "rollout و مهاجرت"), x: L("How you'll ship it in stages, how you'll know it works, and how you'll roll it back.", "شیوه‌ی تحویل مرحله‌ای، روش اطمینان از عملکرد و برنامه‌ی rollback.") },
        { id: "open", t: L("Open questions", "پرسش‌های باز"), x: L("What you still don't know, and who could answer. An honest list invites better review.", "موارد نامشخص و افرادی که می‌توانند پاسخ دهند. بیان صادقانه‌ی سوال‌های باز به review بهتر کمک می‌کند.") }
      ],
      levels: [
        { lv: "L3", x: L("Documents what they build, and reads others' proposals to learn how decisions are made.", "آنچه را می‌سازند مستند می‌کنند و پیشنهادهای دیگران را می‌خوانند تا یاد بگیرند تصمیم‌ها چطور گرفته می‌شود.") },
        { lv: "L4", x: L("Writes proposals and runbooks others can build on, and writes a doc when the solution is genuinely ambiguous.", "پیشنهاد و runbookهایی می‌نویسند که دیگران بتوانند از آن‌ها استفاده کنند. برای راه‌حل‌های واقعا مبهم، design doc تهیه می‌کنند.") },
        { lv: "L5", x: L("Leads design for complex problems: puts alternatives, non-goals and trade-offs at the centre and invites security, privacy and observability review.", "طراحی مساله‌های پیچیده را هدایت می‌کنند و بر گزینه‌ها، موارد خارج از اهداف پروژه و trade-offها تمرکز دارند. از متخصصان امنیت، حریم خصوصی و observability درخواست review می‌کنند.") },
        { lv: "L6", x: L("Builds cross-team consensus and sets principles and patterns that later docs inherit.", "بین تیم‌ها اجماع ایجاد می‌کنند و اصول و الگوهایی تعیین می‌کنند که مبنای سندهای بعدی می‌شوند.") }
      ],
      source: L("The outline follows the structure described in Malte Ubl's “Design Docs at Google”. The level notes are our own synthesis of how altitude shows in a design doc.",
                "ساختار بر اساس توضیحات Malte Ubl در Design Docs at Google است. یادداشت‌های مربوط به سطح، جمع‌بندی خود ما از نحوه‌ی انعکاس انتظارات هر سطح در design doc هستند.")
    }
  };
})();

/* FAQ, part C: paths and craft (glue work, depth vs breadth, quality, management, tech lead, staff, staying hands-on).
   Stories are illustrative composites; their numbers are made up. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;
  S.data.faq = S.data.faq || [];
  S.data.faq.push(

    {
      id: "glue-work",
      group: "culture",
      levels: ["L4", "L5", "L6"],
      q: L("I do a lot of glue work: onboarding, docs, unblocking people. Is it hurting my career?",
           "glue work زیادی انجام می‌دهم، مثل onboarding، مستندسازی و رفع موانع دیگران. ممکن است به مسیر شغلی‌ام آسیب بزند؟"),
      short: L("It can, if it's invisible and unshared. Done on purpose and turned into artifacts, it counts as scaling others. Done by default, it's a trap.",
               "اگر دیده نشود و تقسیم نشود، ممکن است. انجام هدفمند و تبدیل نتیجه به artifact، می‌تواند شاهد افزایش توان دیگران باشد. انجام همیشگی و بدون توافق، خطرناک است."),
      body: L("Tanya Reilly's essay “Being Glue” names the risk precisely. Unblocking, onboarding, standards, design review and cross-team alignment are essential, rarely written into promotion criteria, and easy to pile on the same few people. The costs she describes: the work is invisible in a review, you can be seen as less technical, and you drift toward project or people management without choosing it. She cites HBR research suggesting women volunteer for non-promotable work more often than men, and are assigned it more often (the figures she gives are about 48% and 44%).\n\nNone of that means stop. Glue is real leverage, and from {L5} up, raising others is part of the job. The fix is to make it deliberate and visible:\n\n- Turn repeated glue into an **artifact**: an onboarding guide, a checklist, a rotation.\n- **Share the load**, including with seniors.\n- Say it out loud in a career conversation, and ask your manager to track and credit it.\n- Keep your own technical growth work on the calendar so glue doesn't replace it.",
              "مقاله‌ی «Being Glue» از Tanya Reilly این خطر را روشن توضیح می‌دهد. رفع موانع، onboarding، استانداردها، design review و همسوسازی تیم‌ها ضروری‌اند، اما به‌ندرت در معیارهای ارتقا دیده می‌شوند و معمولا بر عهده‌ی همان چند نفر می‌مانند. در نتیجه، کار شما در ارزیابی دیده نمی‌شود، ممکن است نقش شما کمتر فنی تلقی شود و بدون انتخاب خودتان به سمت مدیریت پروژه یا افراد بروید. او به پژوهش HBR اشاره می‌کند که نشان می‌دهد زنان بیشتر از مردان برای کارهایی که در ارتقا به حساب نمی‌آیند داوطلب می‌شوند و این کارها بیشتر به آن‌ها سپرده می‌شود. اعداد نقل‌شده حدود 48% و 44% است.\n\nاین به معنای کنار گذاشتن glue work نیست. این کارها توان تیم را افزایش می‌دهند و از {L5} به بالا، کمک به رشد دیگران بخشی از مسئولیت شماست. باید آن‌ها را هدفمند انجام دهید و نتیجه را نشان دهید:\n\n- کار تکراری را به **artifact** تبدیل کنید، مثل راهنمای onboarding، چک‌لیست یا برنامه‌ی نوبت‌بندی.\n- **مسئولیت را تقسیم کنید** و همکاران ارشد را هم درگیر کنید.\n- در گفتگوی مسیر شغلی، این کارها را صریح مطرح کنید و از مدیر بخواهید در ارزیابی ثبتشان کند.\n- برای رشد فنی خود زمان نگه دارید تا glue work جای آن را نگیرد."),
      steps: [
        L("Write down the glue you did last quarter and roughly how many hours it took.",
          "glue work فصل گذشته و زمان تقریبی آن را ثبت کنید."),
        L("Turn the most repeated item into an artifact: a guide, a checklist or a rotation.",
          "تکراری‌ترین مورد را به artifact تبدیل کنید: راهنما، چک‌لیست یا نوبت‌بندی."),
        L("Propose a rotation for the rest, with seniors included.",
          "برای بقیه یک نوبت‌بندی پیشنهاد دهید، با حضور ارشدها."),
        L("Ask your manager how glue is credited under your ladder, and get the answer in writing.",
          "از مدیر بپرسید glue work در نردبان شما چگونه ارزیابی می‌شود و پاسخ را مکتوب بگیرید.")
      ],
      story: L("Leila ran onboarding for every new hire on her team for two years. Her calibration notes called it “team player”, which isn't a level descriptor. She wrote the onboarding guide, set up a rotation among four seniors and tracked the result: new hires shipping to production in five weeks instead of ten. At the next cycle her manager described the work as “scaled mentoring”, with the numbers.",
               "لیلا دو سال onboarding هر عضو تازه‌وارد تیم را اداره می‌کرد. یادداشت‌های کالیبراسیونش آن را «هم‌تیمی خوب» نامیده بود، که در هیچ شرح سطحی نیست. او راهنمای onboarding را نوشت، یک نوبت‌بندی میان چهار ارشد گذاشت و نتیجه را ثبت کرد: تازه‌واردها به‌جای ده هفته، ظرف پنج هفته کدشان را در production منتشر می‌کردند. دوره‌ی بعد مدیرش کار را «mentoring مقیاس‌پذیر» توصیف کرد، با عددها."),
      links: [
        { route: "grow/stall", label: L("Why people stall", "چرا آدم‌ها درجا می‌زنند") },
        { route: "toolkit/evidence", label: L("Evidence log", "سند دستاوردها") }
      ]
    },

    {
      id: "depth-breadth",
      group: "paths",
      levels: ["L4", "L5", "L6"],
      q: L("Should I specialise or stay a generalist?",
           "متخصص یک حوزه بشوم یا generalist بمانم؟"),
      short: L("Both are legitimate, and the ladder asks for both eventually: one skill beyond coding at {L4}, depth or breadth at {L5}, both at {L6}. Choose by what you volunteer for, then build visible evidence for that shape.",
               "هر دو مسیر معتبرند. در {L4} یک مهارت فراتر از کدنویسی، در {L5} عمق یا گستردگی و در {L6} هر دو انتظار می‌رود. علاقه‌ی عملی خود را مبنا بگذارید و شواهد قابل‌مشاهده فراهم کنید."),
      body: L("Both are legitimate, and the ladder asks for both eventually. At {L4} you need at least one major skill beyond everyday coding, such as security, data analysis or production health. At {L5}, colleagues trust you either as the deep expert in one area or as a generalist with real range. At {L6} you're the go-to person in a specialty and you know neighbouring systems well enough to advise outside it.\n\nSo the question is order, not either-or. A practical test: what do you volunteer for when nobody asks? That is usually your depth. What do you connect between teams? That is your breadth. Monzo's framework even describes senior engineers in shapes, from the tech lead at one end to the domain expert at the other, with project-leading generalists between, and says all of them are senior.\n\nThe traps are symmetrical. Depth without an inner PM gives you the right answer to the wrong question. Breadth with no depth anywhere means nobody hands you the hard problem. Pick the shape you can build visible evidence for.",
              "هر دو مسیر معتبرند و نردبان در نهایت ترکیبی از آن‌ها را می‌خواهد. در {L4}، دست‌کم یک مهارت عمده فراتر از کدنویسی روزمره لازم است، مثل امنیت، تحلیل داده یا سلامت production. در {L5}، یا متخصص قابل‌اعتماد یک حوزه هستید یا generalist با دانش گسترده. در {L6}، علاوه بر مرجعیت در تخصص خود، سیستم‌های مرتبط را هم برای مشورت دادن در حوزه‌های دیگر می‌شناسید.\n\nبنابراین بیشتر درباره‌ی ترتیب رشد تصمیم می‌گیرید، نه انتخاب دائمی یکی از دو مسیر. ببینید بدون درخواست دیگران برای چه کاری داوطلب می‌شوید. این معمولا علاقه‌ی تخصصی شما را نشان می‌دهد. همچنین ببینید چه ارتباط‌هایی بین کار تیم‌ها برقرار می‌کنید. این نشانه‌ی گستردگی دانش شماست. Monzo نقش ارشد را از tech lead تا متخصص حوزه و generalist هدایت‌کننده‌ی پروژه توصیف می‌کند و همه را شکل‌های معتبر مهندس ارشد می‌داند.\n\nهر مسیر خطر خودش را دارد. تخصص عمیق بدون «PM درون» ممکن است به راه‌حل درست برای مساله‌ی اشتباه برسد. دانش گسترده بدون تخصص عمیق در هیچ حوزه‌ای، اعتماد لازم برای سپردن مساله‌ی دشوار را ایجاد نمی‌کند. مسیری انتخاب کنید که بتوانید توانمندی خود را در آن نشان دهید."),
      steps: [
        L("List five things you volunteered for in the last year and look for the pattern.",
          "پنج کاری را که سال گذشته داوطلبانه سراغش رفتید فهرست کنید و دنبال الگو بگردید."),
        L("Ask two peers what they come to you for.",
          "از دو همکار بپرسید برای چه چیزی سراغ شما می‌آیند."),
        L("Pick one skill to be known for, and a date by which you can point at a result.",
          "مهارتی انتخاب کنید که می‌خواهید در آن شناخته شوید و برای رسیدن به نتیجه‌ی مشخص، موعد بگذارید."),
        L("Each quarter, do one piece of work that connects two areas you know.",
          "هر فصل یک کار انجام بدهید که دو حوزه‌ی آشنای شما را به هم وصل کند.")
      ],
      story: L("Kian was “the database person” for four years and kept being handed database tickets. His {L5} case stalled on influence: nobody could say what his depth had changed for other teams. He wrote a short guide to the query patterns behind three of the year's incidents and ran two review sessions for neighbouring teams. His depth stayed the same, but now it reached beyond his own tickets.",
               "کیان چهار سال «آدم پایگاه داده» بود و مدام ticketهای پایگاه داده به او می‌رسید. پرونده‌ی {L5} او روی قدرت نفوذ متوقف شد: کسی نمی‌توانست بگوید تخصص عمیق او چه تغییری برای تیم‌های دیگر ایجاد کرده. او یک راهنمای کوتاه درباره‌ی الگوهای queryای نوشت که پشت سه incident سال بود و دو جلسه‌ی review برای تیم‌های همسایه برگزار کرد. عمق تخصصش همان بود، ولی حالا از ticketهای خودش فراتر می‌رفت."),
      links: [
        { route: "paths/depth", label: L("Depth, breadth or both", "تخصص عمیق، دانش گسترده یا هر دو") },
        { route: "how/lenses", label: L("The four lenses", "چهار بُعد") }
      ]
    },

    {
      id: "quality-factor",
      group: "growth",
      levels: ["L3", "L4", "L5"],
      q: L("Does code quality matter for promotion, or only delivery and impact?",
           "آیا کیفیت کد برای ارتقا مهم است یا فقط تحویل و اثرگذاری؟"),
      short: L("Quality counts as part of delivery, and what it means grows with the level. Gold-plating doesn't count: published ladders say outright that complexity should fit the problem.",
               "کیفیت بخشی از تحویل است و دامنه‌ی آن با سطح بیشتر می‌شود. پرداختن بی‌دلیل به جزئیات، شاهد ارتقا نیست. پیچیدگی راه‌حل باید متناسب با مساله باشد."),
      body: L("Quality matters, but it isn't a separate score. It sits inside every lens, and what “good” means changes with the level. At {L3} it's tasks that are correct, complete and on time, with few defects coming back. At {L4} it widens to the whole thing shipping: tests, docs, monitoring, alerts and a support guide. At {L5} it's quality that moves something the organisation tracks, such as reliability or cost. At {L6} and {L7} it's keeping quality sustainable as the organisation grows, by reducing complexity on purpose.\n\nThe opposite error is real too. Monzo's framework says complexity should be fitted to the problem and has Senior engineers trade perfection against technical debt, including how it gets repaid. Honeycomb refuses to reward scope alone, and the ladder this guide is built on counts the complexity of the problem, not of the solution. So gold-plating a simple task reads as poor judgement.\n\nA useful habit is to say your trade-off out loud: “I skipped X because the blast radius is small; I invested in Y because it's on the checkout path.”",
              "کیفیت مهم است، اما امتیازی جدا از بقیه‌ی ابعاد نیست. معنای آن با سطح تغییر می‌کند. در {L3}، task باید درست، کامل و به‌موقع انجام شود و موارد کمی برای اصلاح برگردند. در {L4}، کیفیت همه‌ی اجزای تحویل را شامل می‌شود: تست، مستندات، monitoring، alert و راهنمای پشتیبانی. در {L5}، کیفیت باید بر شاخص مهمی مثل اتکاپذیری یا هزینه اثر بگذارد. در {L6} و {L7}، باید با رشد سازمان و کاهش آگاهانه‌ی پیچیدگی، کیفیت را پایدار نگه دارید.\n\nزیاده‌روی در جزئیات هم خطر دارد. Monzo می‌گوید پیچیدگی راه‌حل باید با مساله تناسب داشته باشد و مهندس ارشد باید بین کمال‌گرایی و tech debt، همراه با برنامه‌ی بازپرداخت آن، تعادل برقرار کند. Honeycomb صرفا scope بزرگ‌تر را پاداش نمی‌دهد و نردبان مبنای این راهنما هم پیچیدگی مساله را می‌سنجد، نه راه‌حل را. پس پیچیده کردن بی‌دلیل task ساده می‌تواند نشانه‌ی قضاوت ضعیف باشد.\n\ntrade-off را روشن توضیح دهید: «X را کنار گذاشتم چون blast radius کوچکی داشت. برای Y وقت گذاشتم چون در مسیر checkout بود.»"),
      steps: [
        L("For your next change, decide up front what “done well” includes: tests, docs, monitoring, rollout.",
          "برای تغییر بعدی‌تان از قبل تصمیم بگیرید «خوب تمام شدن» شامل چه چیزهایی است: تست، مستندات، monitoring، rollout."),
        L("Write the trade-off in the PR or the doc: what you skipped and why.",
          "trade-off را در PR یا سند بنویسید: از چه چیزی گذشتید و چرا."),
        L("When you reach for extra polish, ask what the blast radius is if it isn't there.",
          "پیش از صرف وقت برای جزئیات بیشتر، بپرسید حذف آن‌ها چه blast radius یا پیامدی دارد."),
        L("Fix the cause of a recurring defect once, instead of fixing each instance.",
          "علت یک ایراد تکرارشونده را یک بار رفع کنید، نه هر نمونه‌اش را.")
      ],
      story: L("Arash spent three weeks building a configurable plug-in architecture for a CSV export that four people used twice a year. His reviewers admired the code and asked why. Meanwhile the payment-reconciliation job he owned still had no alerts. His manager didn't ask for more polish. She asked him to size the effort to the problem, and to put those three weeks where the blast radius was.",
               "آرش سه هفته صرف ساختن معماری plug-in قابل‌پیکربندی برای یک خروجی CSV کرد که چهار نفر سالی دو بار استفاده می‌کردند. reviewerها کد را تحسین کردند و پرسیدند چرا. در همین حال job تطبیق پرداختی که او own می‌کرد هنوز alert نداشت. مدیرش بهبود بیشتر کد را نخواست. خواست تلاشش را با اهمیت مساله متناسب کند و آن سه هفته را صرف کاری کند که پیامد گسترده‌تری داشت."),
      links: [
        { route: "how/lenses", label: L("The four lenses and end-to-end", "چهار بُعد و end-to-end") },
        { route: "levels", label: L("The levels, L2–L7", "سطح‌ها، L2 تا L7") }
      ]
    },

    {
      id: "need-manager",
      group: "paths",
      levels: ["L3", "L4", "L5"],
      q: L("Do I need to become a manager to keep growing?",
           "برای رشد کردن باید مدیر بشوم؟"),
      short: L("No. The IC ladder runs to {L7}, and levels are shared with managers. But check the employer, not just the ladder: at a small company the IC path may end earlier in practice.",
               "نه. نردبان IC تا {L7} ادامه دارد و سطح‌ها با مدیرها مشترک است. ولی شرکت را بررسی کنید، نه فقط نردبان را: در شرکت کوچک مسیر IC ممکن است در عمل زودتر تمام شود."),
      body: L("No. The ladder runs to {L7} for individual contributors, and the levels are shared with managers: an IC at {L6} and a manager at {L6} are peers. Management is a different job, not a promotion. Charity Majors calls the move lateral: you start as a new manager, and your technical skills fade if you stop practising. Many people swing back and forth across a career.\n\nBut check the employer, not only the ladder. At large companies senior ICs earn at or near managers' pay (Pragmatic Engineer notes that Senior is a common plateau partly for that reason), and Staff and Principal roles exist: Google, Meta, Amazon, GitLab, Etsy, Monzo and Zalando all describe IC levels above Senior. At a 30-person company the IC track may end at Senior or Staff in practice. Ask: who here is an IC at the level I want, what do they work on, and could I meet one?\n\nIf what attracts you to management is influence, notice that the tech lead, architect and solver shapes give a lot of it without managing people.",
              "نه. نردبان برای ICها تا {L7} ادامه دارد و سطح‌ها با مدیرها مشترک است: یک IC در {L6} و یک مدیر در {L6} هم‌ترازند. مدیریت شغلی متفاوت است، نه ارتقا. Charity Majors این تغییر را جابه‌جایی هم‌سطح می‌نامد: به‌عنوان مدیر تازه‌کار شروع می‌کنید و اگر تمرین نکنید مهارت فنی‌تان کم‌رنگ می‌شود. بسیاری در طول کارشان میان این دو رفت‌وآمد می‌کنند.\n\nولی شرکت را بررسی کنید، نه فقط نردبان را. در شرکت‌های بزرگ ICهای ارشد حقوقی در حدود مدیرها یا نزدیک به آن می‌گیرند (Pragmatic Engineer می‌نویسد ارشد مقصد رایج مسیر شغلی است، تا حدی به همین دلیل) و نقش‌های Staff و Principal وجود دارد: Google، Meta، Amazon، GitLab، Etsy، Monzo و Zalando همه سطح‌های IC بالاتر از Senior را توصیف می‌کنند. در یک شرکت 30 نفره مسیر IC در عمل ممکن است در Senior یا Staff تمام شود. بپرسید: اینجا چه کسی در سطحی که من می‌خواهم IC است، روی چه کاری کار می‌کند و می‌توانم با یکی‌شان صحبت کنم؟\n\nاگر آنچه شما را به مدیریت می‌کشد نفوذ است، توجه کنید شکل‌های tech lead، architect و solver بخش بزرگی از این نفوذ را بدون مسئولیت مدیریت افراد فراهم می‌کنند."),
      steps: [
        L("Ask HR or your manager whether IC levels above Senior exist here, and who holds them.",
          "از HR یا مدیرتان بپرسید اینجا سطح‌های IC بالاتر از Senior وجود دارد یا نه و چه کسانی در آن‌اند."),
        L("Meet one IC at the level you want and ask what their week looks like.",
          "با یک IC در سطحی که می‌خواهید صحبت کنید و بپرسید هفته‌اش چه شکلی است."),
        L("Name what attracts you to management (influence, growing people, pay) and check whether the IC path offers it.",
          "مشخص کنید چه چیزی شما را به مدیریت علاقه‌مند می‌کند، مثل نفوذ، رشد افراد یا حقوق. بررسی کنید مسیر IC هم آن را فراهم می‌کند یا نه."),
        L("Run one small management experiment before you decide.",
          "پیش از تصمیم یک آزمایش کوچک مدیریتی بکنید.")
      ],
      story: L("Reza assumed that after Senior the only way up was management. He asked who the Staff engineers at his fintech were, found two, and spent an hour with each. One spent most weeks writing design docs and aligning three teams; the other spent most of hers on one hard system. Reza realised he wanted the second job, not the first, and brought that to his manager as a goal instead of asking for a team.",
               "رضا فرض کرده بود بعد از Senior تنها راه بالا رفتن مدیریت است. پرسید مهندس‌های Staff در فین‌تکش چه کسانی‌اند، دو نفر را پیدا کرد و با هرکدام یک ساعت نشست. یکی بیشتر هفته‌ها design doc می‌نوشت و سه تیم را همسو می‌کرد. دیگری بیشتر وقتش را روی یک سیستم سخت می‌گذاشت. رضا فهمید شغل دوم را می‌خواهد، نه اولی را و آن را به‌جای درخواست تیم، به‌عنوان یک هدف پیش مدیرش برد."),
      links: [
        { route: "paths/ladder", label: L("The three lanes", "سه مسیر") },
        { route: "paths/archetypes", label: L("Four shapes of senior-plus work", "چهار الگوی نقش staff و بالاتر") }
      ]
    },

    {
      id: "tech-lead",
      group: "paths",
      levels: ["L4", "L5"],
      q: L("I've been asked to be a tech lead. Should I say yes?",
           "از من خواسته‌اند tech lead باشم. قبول کنم؟"),
      short: L("Often yes, with your eyes open. It's a per-project role, not a level, so ask what you'll stop doing, for how long, and what success looks like.",
               "معمولا بله، اگر مسئولیت‌ها روشن باشند. tech lead نقشی پروژه‌محور است، نه سطح. زمان پایان، نتیجه‌ی مطلوب و کارهایی را که کنار می‌گذارید مشخص کنید."),
      body: L("A tech lead is a role, not a level or a title. Camille Fournier describes it as a set of responsibilities: keep coding, represent the team to management, vet plans, run the mechanics of the project and delegate. It suits people who like leading through the problem, and it doesn't suit someone who wants long, uninterrupted focus on their own code.\n\nLeading a project is a good way to produce evidence in Contribution and Influence, but being “the lead” isn't evidence by itself. The outcomes are: a team that went faster, a project that landed, decisions that held up.\n\nBefore saying yes, ask four things. **What will I stop doing?** The role adds work, so something must go. **For how long?** Per project, ideally with an end date. **What does success look like?** **Who decides what, me or the manager?** And watch for the usual drift: tech leads who slide into project management and become the team's bottleneck.",
              "tech lead نقش است، نه سطح یا عنوان. Camille Fournier آن را مجموعه‌ای از مسئولیت‌ها می‌داند: ادامه‌ی کدنویسی، نمایندگی تیم نزد مدیریت، بررسی برنامه‌ها، مدیریت روند پروژه و واگذاری کار. این نقش برای کسی مناسب است که از هدایت دیگران در حل مساله لذت می‌برد. اگر تمرکز طولانی و بی‌وقفه بر کد شخصی را ترجیح می‌دهید، ممکن است مناسب شما نباشد.\n\nرهبری پروژه می‌تواند شواهدی برای مشارکت و قدرت نفوذ فراهم کند، اما خود عنوان لید کافی نیست. نتیجه مهم است: سرعت بیشتر تیم، موفقیت پروژه و تصمیم‌هایی که در عمل موثر مانده‌اند.\n\nپیش از پذیرفتن، چهار مورد را روشن کنید: **چه کاری را کنار می‌گذارم؟** مسئولیت جدید باید جای بخشی از کار قبلی را بگیرد. **تا چه زمانی؟** نقش بهتر است برای پروژه‌ای مشخص با موعد پایان تعریف شود. **موفقیت چه معنایی دارد؟** **کدام تصمیم با من است و کدام با مدیر؟** مراقب باشید بدون توافق، به مدیر پروژه یا گلوگاه همه‌ی تصمیم‌های تیم تبدیل نشوید."),
      steps: [
        L("Ask what you'll stop doing, and get the answer in writing.",
          "بپرسید چه چیزی را کنار می‌گذارید و جواب را مکتوب بگیرید."),
        L("Agree an end date or a review date for the role.",
          "برای نقش، بر سر تاریخ پایان یا بازبینی توافق کنید."),
        L("Define success as two or three outcomes, not activities.",
          "موفقیت را به‌صورت دو سه نتیجه تعریف کنید، نه فعالیت."),
        L("Choose a teammate to hand real pieces to, and make them succeed.",
          "بخشی معنادار از کار را به همکار بسپارید و به موفقیت او کمک کنید.")
      ],
      story: L("Nima said yes to leading a six-person project without discussing anything else. Three months in he was the person who answered every question, and his own tasks had stopped moving. In the retro he and his manager agreed that he'd hand two workstreams to teammates with clear outcomes and drop one of his own commitments. The project sped up, and two teammates grew.",
               "نیما بدون هیچ گفتگوی دیگری بله گفت و رهبری یک پروژه‌ی شش‌نفره را پذیرفت. سه ماه بعد او کسی بود که به همه‌ی پرسش‌ها جواب می‌داد و taskهای خودش از حرکت ایستاده بود. در retro او و مدیرش توافق کردند دو بخش کار را با خروجی روشن به هم‌تیمی‌ها بسپارد و یکی از تعهدهای خودش را رها کند. پروژه سریع‌تر شد و دو هم‌تیمی رشد کردند."),
      links: [
        { route: "paths/lead", label: L("Tech lead: a role, not a level", "tech lead: یک نقش، نه یک سطح") },
        { route: "faq/stay-hands-on", label: L("Staying hands-on", "دست‌به‌کد ماندن") }
      ]
    },

    {
      id: "staff-day",
      group: "paths",
      levels: ["L5", "L6"],
      q: L("What does a Staff engineer actually do all day?",
           "یک مهندس Staff در عمل در طول روز چه می‌کند؟"),
      short: L("Less coding than you'd think, more writing, reviewing and aligning people, in one of several shapes. Nobody has reliable data on the time split, and “Staff” means different things at different employers.",
               "معمولا کدنویسی کمتر و نوشتن، review و همسوسازی بیشتر است، اما به الگوی نقش و شرکت بستگی دارد. داده‌ی قابل‌اتکایی درباره‌ی تقسیم زمان نداریم و Staff در شرکت‌ها معنای یکسانی ندارد."),
      body: L("The honest answer is that it depends on the shape and the company, and nobody has published a trustworthy time breakdown. What exists is a vocabulary. Will Larson's research on staff-plus roles describes four archetypes: the **tech lead** (guides a team or project), the **architect** (owns the direction and quality of a critical area), the **solver** (dives into a hard problem, solves it, moves on) and the **right hand** (extends a senior leader's reach, mostly at very large companies). Tanya Reilly adds three pillars of the work: big-picture thinking, executing cross-team projects, and levelling up other engineers.\n\nIn practice a week mixes reading and writing design documents, reviewing others' designs, working a cross-team problem with other leads, mentoring seniors and some hands-on work on the hardest part. A lot of it is conversation and writing.\n\nAnd “Staff” isn't portable. One public ladder's Staff covers a single team's technical domain, another's a collective of several teams, another's a whole domain. Zalando describes its Principal as supporting roughly two to five teams. Compare scope, not titles: how many teams, what ambiguity, which horizon.",
              "به الگوی نقش و شرکت بستگی دارد. داده‌ی قابل‌اتکایی درباره‌ی تقسیم زمان منتشر نشده است، اما توصیف نقش‌ها وجود دارد. پژوهش Will Larson چهار الگوی staff و بالاتر را معرفی می‌کند: **tech lead** برای هدایت تیم یا پروژه، **architect** برای own کردن جهت و کیفیت حوزه‌ای حیاتی، **solver** برای حل مساله‌ای دشوار و رفتن سراغ مساله‌ی بعدی، و **right hand** برای گسترش دامنه‌ی اثر رهبر ارشد، بیشتر در شرکت‌های بسیار بزرگ. Tanya Reilly سه محور را اضافه می‌کند: دیدن تصویر کلی، اجرای پروژه‌های بین‌تیمی و کمک به رشد مهندس‌های دیگر.\n\nهفته‌ی کاری معمولا ترکیبی از خواندن و نوشتن design doc، review طراحی، حل مساله‌ی بین‌تیمی با لیدها، mentoring ارشدها و کار فنی مستقیم روی دشوارترین بخش است. گفتگو و نوشتن سهم زیادی دارند.\n\nStaff در همه‌ی شرکت‌ها یک معنا ندارد. در یک نردبان، حوزه‌ی فنی یک تیم است، در دیگری چند تیم و در سومی یک حوزه‌ی کامل. Zalando، Principal را پشتیبان حدود دو تا پنج تیم توصیف می‌کند. scope را با تعداد تیم‌ها، ابهام و افق زمانی مقایسه کنید، نه صرفا عنوان را."),
      steps: [
        L("Ask a Staff engineer at your company to walk you through last week's calendar.",
          "از یک مهندس Staff در شرکتتان بخواهید تقویم هفته‌ی گذشته‌اش را برایتان مرور کند."),
        L("Try one staff-shaped task: write a design for a cross-team problem and get it reviewed by two teams.",
          "کاری از جنس نقش staff را امتحان کنید: برای یک مساله‌ی میان‌تیمی طراحی بنویسید و از دو تیم review بگیرید."),
        L("Read the Staff descriptor at a company you might join and note how many teams it expects you to span.",
          "شرح Staff را در شرکتی که ممکن است به آن بپیوندید بخوانید و ببینید انتظار دارد چند تیم را پوشش بدهید.")
      ],
      story: null,
      links: [
        { route: "paths/archetypes", label: L("Four shapes of senior-plus work", "چهار الگوی نقش staff و بالاتر") },
        { route: "how/translator", label: L("Cross-company level codes", "کدهای سطح‌بندی در شرکت‌های مختلف") }
      ]
    },

    {
      id: "try-management",
      group: "paths",
      levels: ["L4", "L5"],
      q: L("How can I try management without committing to it?",
           "چطور می‌توانم پیش از تغییر مسیر، مدیریت را امتحان کنم؟"),
      short: L("Run small, reversible experiments first: lead a project, mentor for a quarter, run a team ritual, take a hiring process end to end, shadow your manager. Management is a lateral move, and going back is normal.",
               "با تجربه‌های کوچک و برگشت‌پذیر شروع کنید: هدایت پروژه، mentoring در طول یک فصل، اداره‌ی جلسات تیمی، انجام فرایند استخدام یا مشاهده‌ی کار مدیر. رفتن به مدیریت، جابه‌جایی به مسیری هم‌سطح است و بازگشت به IC طبیعی است."),
      body: L("Management is a different job, not a higher rung, and the cheapest way to learn whether it suits you is to do pieces of it before you're asked to do all of it. Five experiments cost little and teach a lot.\n\n- **Lead a project of three or more people.** Plan it, split it, unblock people, report status. Notice whether the coordination drains or energises you.\n- **Mentor someone for a full quarter.** Set goals together, give feedback, watch them grow.\n- **Run a team ritual for a month:** planning, a retro or an incident review.\n- **Take a hiring process end to end:** write the role, interview, debrief, make the call.\n- **Shadow your manager for a week.** Ask them to walk you through the parts they find hard, and believe what they say.\n\nCharity Majors's pendulum is the right frame: many good engineers alternate between IC and manager, you start as a junior manager when you cross over, and the technical skills decay if you stop practising. Treat the first stint as an experiment you can reverse, ideally before your skills go stale, and talk to people who've moved in both directions.",
              "مدیریت شغلی متفاوت است. برای شناخت تناسب آن با خودتان، ابتدا بخش‌هایی از مسئولیت را تجربه کنید، پیش از آن‌که همه را بپذیرید. پنج تجربه‌ی کوچک می‌توانند اطلاعات زیادی بدهند:\n\n- **پروژه‌ای با سه نفر یا بیشتر را هدایت کنید.** برنامه‌ریزی، تقسیم کار، رفع موانع و گزارش وضعیت را تجربه کنید و ببینید هماهنگی به شما انرژی می‌دهد یا از شما انرژی می‌گیرد.\n- **یک فصل کسی را mentor کنید.** هدف مشترک تعیین کنید، بازخورد بدهید و رشد او را دنبال کنید.\n- **یک ماه جلسات تیمی را اداره کنید،** مثل planning، retro یا بررسی incident.\n- **فرایند استخدام را end-to-end انجام دهید:** تعریف نقش، مصاحبه، debrief و تصمیم‌گیری.\n- **یک هفته کار مدیرتان را از نزدیک مشاهده کنید.** بخواهید بخش‌های دشوار را توضیح دهد و توضیحاتش را جدی بگیرید.\n\nتعبیر «پاندول» Charity Majors برای این رفت‌وبرگشت مناسب است. بسیاری از مهندس‌ها بین IC و مدیریت جابه‌جا می‌شوند. با ورود به مدیریت، در این شغل تازه‌کار هستید و بدون تمرین، مهارت فنی‌تان افت می‌کند. دوره‌ی اول را تجربه‌ای برگشت‌پذیر بدانید و با افرادی که هر دو مسیر را رفته‌اند صحبت کنید."),
      steps: [
        L("Pick two of the five experiments for the next quarter.",
          "دو تا از پنج آزمایش را برای فصل آینده انتخاب کنید."),
        L("Tell your manager what you're testing, and why.",
          "به مدیرتان بگویید چه چیزی را آزمایش می‌کنید و چرا."),
        L("After each one, write down what energised you and what drained you.",
          "بعد از هرکدام بنویسید چه چیزی به شما انرژی داد و چه چیزی انرژی‌تان را گرفت."),
        L("Talk to one person who moved from IC to manager and one who moved back.",
          "با یک نفر که از IC به مدیر رفته و یک نفر که برگشته صحبت کنید.")
      ],
      story: L("Sara wanted to know whether she'd like managing. She asked to lead the next two-quarter project with four engineers and to run its retros. After a quarter she noticed she loved the one-on-ones and dreaded the status meetings. She became a tech lead with an explicit mentoring remit instead of a manager, and found the mix she'd been missing.",
               "سارا می‌خواست بداند مدیریت را دوست دارد یا نه. خواست پروژه‌ی دو فصلی بعدی با چهار مهندس را رهبری کند و retroهایش را اداره کند. بعد از یک فصل متوجه شد 1:1ها را دوست دارد و از جلسه‌های گزارش وضعیت وحشت دارد. به‌جای مدیر، tech lead با مسئولیت صریح mentoring شد و ترکیبی از مسئولیت‌ها را پیدا کرد که دنبالش بود."),
      links: [
        { route: "paths/management", label: L("Should you try management?", "آیا باید مدیریت را امتحان کنید؟") },
        { route: "paths/fit", label: L("What fits me?", "چه چیزی به من می‌خورد؟") }
      ]
    },

    {
      id: "stay-hands-on",
      group: "paths",
      levels: ["L5", "L6", "L7"],
      q: L("How do I stay hands-on as I get more senior?",
           "وقتی ارشدتر می‌شوم چطور دست‌به‌کد بمانم؟"),
      short: L("Own something small and bounded, go where being hands-on adds the most, and watch for drift. If you haven't touched the system in a quarter, your intuition is aging.",
               "کاری کوچک و محدود را own کنید، برای کار فنی زمان ثابت بگذارید و از review و debug برای شناخت codebase استفاده کنید. یک فصل دوری از سیستم می‌تواند قضاوت عملی‌تان را ضعیف کند."),
      body: L("Staying hands-on is a design problem, not a willpower problem: the more senior you are, the more the calendar fills with other people's needs. Three habits help.\n\n**Own something small and bounded.** A tool, a library or a piece of a system that isn't on the critical path, so a week of meetings doesn't stall the team. Avoid owning the thing everyone is waiting for.\n\n**Go where being hands-on adds the most.** The hardest 10% of a project, the prototype that settles a design argument, the incident where someone has to debug across layers. GitLab uses reach in code review as a level marker, and review is also the cheapest way to keep your picture of the codebase current.\n\n**Watch the drift.** The architect shape has a known failure mode: getting far from the code and designing things nobody wants to build. Charity Majors makes a similar point about managers: those with recent hands-on credibility are stronger. If you haven't touched the system in a quarter, your intuition is ageing.",
              "حفظ کار فنی مستقیم به برنامه‌ریزی نیاز دارد. با افزایش مسئولیت، تقویم شما بیشتر با نیازهای دیگران پر می‌شود. سه عادت کمک می‌کند:\n\n**کاری کوچک و محدود را own کنید.** ابزار، کتابخانه یا بخشی خارج از مسیر بحرانی انتخاب کنید تا یک هفته پر از جلسه، تیم را متوقف نکند. کاری را که همه منتظرش هستند بر عهده نگیرید.\n\n**در بخش‌هایی کار فنی کنید که بیشترین ارزش را دارد.** دشوارترین 10٪ پروژه، prototype برای روشن کردن اختلاف طراحی یا debug یک incident در چند لایه. GitLab دامنه‌ی code review را نشانه‌ی سطح می‌داند. review همچنین راهی کم‌هزینه برای حفظ شناخت codebase است.\n\n**از دور شدن تدریجی از کد جلوگیری کنید.** یکی از خطرهای نقش architect، طراحی راه‌حل‌هایی است که کسی نمی‌خواهد پیاده‌سازی کند. Charity Majors درباره‌ی مدیران هم بر ارزش تجربه‌ی عملی تازه تاکید می‌کند. اگر یک فصل با سیستم کار نکرده‌اید، ممکن است قضاوت عملی‌تان دیگر به‌روز نباشد."),
      steps: [
        L("Pick one small system or library that you personally maintain, off the critical path.",
          "یک سیستم یا کتابخانه‌ی کوچک انتخاب کنید که خودتان نگه‌داری می‌کنید و روی مسیر بحرانی نیست."),
        L("Reserve one fixed block a week for hands-on work and protect it.",
          "هر هفته زمانی ثابت برای کار فنی مستقیم در نظر بگیرید و آن را حفظ کنید."),
        L("Use code review and incident debugging as your window into the codebase.",
          "از code review و debug در incidentها برای حفظ شناخت codebase استفاده کنید."),
        L("Each quarter, ask yourself: could I explain how this system fails today?",
          "هر فصل از خودتان بپرسید: می‌توانم توضیح بدهم این سیستم امروز چطور از کار می‌افتد؟")
      ],
      story: null,
      links: [
        { route: "paths/archetypes", label: L("Four shapes of senior-plus work", "چهار الگوی نقش staff و بالاتر") },
        { route: "faq/need-manager", label: L("Do I need to become a manager?", "باید مدیر بشوم؟") }
      ]
    }

  );
})();

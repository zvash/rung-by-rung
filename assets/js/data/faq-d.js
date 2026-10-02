/* FAQ, part D: culture and day-to-day (unsupportive manager, chores, conflict, no formal ladder).
   Stories are illustrative composites; their numbers are made up. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;
  S.data.faq = S.data.faq || [];
  S.data.faq.push(

    {
      id: "unsupportive-manager",
      group: "culture",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("My manager doesn't support my growth. What can I do?",
           "مدیرم از رشد من حمایت نمی‌کند. چه کار می‌توانم بکنم؟"),
      short: L("First find out whether they can't or won't: put a specific, written question about the next level to them. Then widen your support with a skip-level, a sponsor or a transfer, and treat two cycles of explicit asks with no change as information.",
               "اول بفهمید نمی‌تواند یا نمی‌خواهد: یک پرسش مشخص و مکتوب درباره‌ی سطح بعد از او بپرسید. بعد دایره‌ی حمایت را بزرگ کنید، با skip-level، حامی یا جابه‌جایی داخلی، و دو چرخه درخواست صریح بدون تغییر را اطلاعات حساب کنید."),
      body: L("“Doesn't support my growth” covers three different situations, and they need different responses. The manager may **not know how**: nobody has shown them what the next level needs. They may **not have the time**: growth conversations lose to delivery every week. Or they may **not want to**: your growth costs them something, or they don't rate your work.\n\nFind out which it is with a specific, written ask: “For {L5}, here are the three things I think I've shown and the two I haven't. Can we agree what would convince you, and a date to look?” A manager who engages with that, even imperfectly, is the first kind. One who keeps postponing is the second. One who gives vague answers, or contradicts earlier feedback, is worth noting.\n\nThen widen the circle: ask for a skip-level conversation about growth, find a sponsor in an adjacent team, or explore a transfer. At some employers a manager's advocacy is close to decisive (Meta's calibration, as reported), so it matters if yours can't or won't champion you. Two review cycles of explicit asks with no change is information, not bad luck. Keep your evidence log current either way: it's portable.",
              "«از رشد من حمایت نمی‌کند» سه وضعیت متفاوت را می‌پوشاند و هرکدام پاسخ جداگانه می‌خواهد. مدیر ممکن است **نداند چطور**: کسی به او نشان نداده سطح بعد چه می‌خواهد. ممکن است **وقت نداشته باشد**: گفتگوی رشد هر هفته به تحویل می‌بازد. یا ممکن است **نخواهد**: رشد شما برایش هزینه دارد، یا کار شما را قبول ندارد.\n\nبا یک درخواست مشخص و مکتوب بفهمید کدام است: «برای {L5}، این سه چیز را که فکر می‌کنم نشان داده‌ام و این دو را که نه. می‌شود روی این‌که چه چیزی شما را قانع می‌کند و یک تاریخ برای بررسی توافق کنیم؟» مدیری که با این درگیر شود، حتی ناقص، از نوع اول است. کسی که مدام عقب می‌اندازد از نوع دوم. کسی که جواب مبهم می‌دهد یا با بازخورد قبلی‌اش تناقض دارد، قابل‌توجه است.\n\nبعد دایره را بزرگ کنید: یک گفتگوی skip-level درباره‌ی رشد بخواهید، در تیم همسایه یک حامی پیدا کنید، یا جابه‌جایی داخلی را بررسی کنید. در بعضی شرکت‌ها دفاع مدیر تقریبا تعیین‌کننده است (کالیبراسیون Meta، طبق گزارش‌ها)، پس اگر مدیر شما نمی‌تواند یا نمی‌خواهد از شما دفاع کند اهمیت دارد. دو چرخه‌ی ارزیابی درخواست صریح بدون تغییر اطلاعات است، نه بدشانسی. در هر حال سند دستاوردها را به‌روز نگه دارید: قابل‌حمل است."),
      steps: [
        L("Write the specific ask: the next level, what you've shown, what's missing and a date to review.",
          "درخواست مشخص را بنویسید: سطح بعد، آنچه نشان داده‌اید، آنچه کم است و تاریخ بررسی."),
        L("Send it before the one-on-one so they have time to think.",
          "پیش از 1:1 بفرستید تا مدیر وقت فکر کردن داشته باشد."),
        L("Ask for a skip-level conversation about growth, framed as asking for perspective.",
          "یک گفتگوی skip-level درباره‌ی رشد بخواهید، با این قاب که دنبال دیدگاه هستید."),
        L("If nothing changes after two cycles, explore a transfer or a move, with your evidence log in hand.",
          "اگر بعد از دو چرخه چیزی عوض نشد، جابه‌جایی داخلی یا بیرونی را بررسی کنید، با سند دستاوردها در دست.")
      ],
      story: L("Neda's manager said “you're doing great” at every one-on-one and nothing else. Before the next one she sent a short document: the {L4} behaviours she had evidence for, the two she didn't, and a request for a review date. Her manager, relieved to have something concrete, admitted nobody had ever shown him what {L5} required at the company. They wrote it down together. The “unsupportive” manager had simply been an uninformed one.",
               "مدیر ندا در هر 1:1 می‌گفت «عالی کار می‌کنی» و چیز دیگری نمی‌گفت. پیش از جلسه‌ی بعد او یک سند کوتاه فرستاد: رفتارهای {L4} که برایشان مدرک داشت، دو موردی که نداشت و درخواست یک تاریخ بررسی. مدیرش، که از داشتن چیزی مشخص خیالش راحت شد، اعتراف کرد کسی هیچ‌وقت به او نشان نداده {L5} در این شرکت چه می‌خواهد. آن را با هم نوشتند. مدیر «بی‌حمایت» فقط مدیری بی‌خبر بود."),
      links: [
        { route: "toolkit/oneonone", label: L("1:1 growth conversation kit", "بسته‌ی گفتگوی رشد در 1:1") },
        { route: "grow/stall", label: L("Why people stall", "چرا آدم‌ها درجا می‌زنند") }
      ]
    },

    {
      id: "citizenship-load",
      group: "culture",
      levels: ["L3", "L4", "L5"],
      q: L("I'm doing more than my share of team chores: interviews, on-call swaps, docs. Is that citizenship, or am I being taken advantage of?",
           "بیشتر از سهم خودم کارهای عمومی تیم را انجام می‌دهم: مصاحبه، جابه‌جایی on-call، مستندات. این شهروندی سازمانی است یا سوءاستفاده؟"),
      short: L("Citizenship is expected at every level, but it should be shared and rotating. If it's always you, it's a pattern, not a virtue, and it's worth asking how it counts.",
               "شهروندی سازمانی در هر سطح انتظار می‌رود، ولی باید تقسیم‌شده و چرخشی باشد. اگر همیشه شما هستید، الگو است نه فضیلت، و ارزش دارد بپرسید چطور حساب می‌شود."),
      body: L("The ladder this guide is built on treats **Citizenship**, **Teamwork** and **Engineering practices** as habits that apply at every level, not as bonuses: reporting honestly, helping when you can, leaving docs and code health a little better than you found them. So doing your share is expected, and doing it well is part of the job.\n\nThe problem starts when “your share” becomes “everyone's share”. Tanya Reilly cites HBR research suggesting women volunteer for non-promotable work more often than men, and are assigned it more often. Whatever your own situation, the mechanism is general: whoever says yes first keeps getting asked.\n\nTell the two apart with three tests. **Rotation:** does the chore pass around, or does it always land on you? **Visibility:** does your manager know the hours, and can they say what it bought the team? **Trade-off:** has anything else come off your plate? If the answer is no to all three, you're subsidising the team, not just being a good citizen. Ask for a rotation, make the work visible, and say yes selectively: choose the chores that build something you'd put in a promotion case.",
              "نردبانی که این راهنما بر پایه‌ی آن است **شهروندی سازمانی**، **کار تیمی** و **رویه‌های مهندسی** را عادت‌هایی می‌داند که در هر سطح صدق می‌کنند، نه امتیاز اضافه: صادقانه گزارش دادن، کمک کردن وقتی می‌توانید، رها کردن مستندات و سلامت کد کمی بهتر از آنچه پیدا کردید. پس انجام سهم خودتان انتظار می‌رود و خوب انجام دادنش بخشی از کار است.\n\nمشکل وقتی شروع می‌شود که «سهم شما» به «سهم همه» تبدیل شود. Tanya Reilly به پژوهشی از HBR اشاره می‌کند که نشان می‌دهد زنان بیشتر از مردان برای کارهای غیرقابل‌ارتقا داوطلب می‌شوند و بیشتر به آن‌ها سپرده می‌شود. وضعیت خودتان هر چه باشد، سازوکار عمومی است: هر کس زودتر بله بگوید، مدام از او می‌خواهند.\n\nبا سه آزمون این دو را از هم جدا کنید. **چرخش:** کار میان آدم‌ها می‌چرخد یا همیشه روی شما می‌افتد؟ **دیده‌شدن:** مدیرتان ساعت‌ها را می‌داند و می‌تواند بگوید چه چیزی برای تیم خرید؟ **جایگزینی:** چیز دیگری از برنامه‌تان برداشته شده؟ اگر جواب هر سه «نه» است، شما دارید به تیم یارانه می‌دهید، نه فقط شهروند خوبی هستید. چرخش بخواهید، کار را دیدنی کنید و گزینشی بله بگویید: کارهایی را بردارید که چیزی می‌سازد که در پرونده‌ی ارتقا بیاورید."),
      steps: [
        L("List the chores you did last quarter and roughly how many hours they took.",
          "کارهای عمومی فصل گذشته و ساعت تقریبی‌شان را فهرست کنید."),
        L("Propose a rotation for the top two.",
          "برای دو مورد اول نوبت‌بندی پیشنهاد دهید."),
        L("Ask your manager what came off your plate when these went on.",
          "از مدیرتان بپرسید وقتی این‌ها اضافه شد چه چیزی از برنامه‌تان برداشته شد."),
        L("Keep the one chore that builds a skill or a visible result, and decline the rest politely.",
          "یک کاری را نگه دارید که مهارت یا نتیجه‌ی دیدنی می‌سازد و بقیه را مودبانه رد کنید.")
      ],
      story: L("Arman wrote up every interview debrief because he wrote fast. Over one quarter it added up to about 40 hours. He showed the number to his manager and proposed a rotation among six people. The write-ups were a little rougher for two weeks, then recovered, and his own project moved up by a sprint.",
               "آرمان نوشتن خلاصه‌ی debrief همه‌ی مصاحبه‌ها را بر عهده داشت چون سریع می‌نوشت. در یک فصل حدود 40 ساعت شد. عدد را به مدیرش نشان داد و نوبت‌بندی میان شش نفر پیشنهاد داد. دو هفته نوشته‌ها کمی زبرتر بود، بعد بهتر شد، و پروژه‌ی خودش یک sprint جلو افتاد."),
      links: [
        { route: "levels/habits", label: L("The three habits at every level", "سه عادت در هر سطح") },
        { route: "faq/glue-work", label: L("Glue work and your career", "glue work و کارنامه‌تان") }
      ]
    },

    {
      id: "conflict-step-in",
      group: "culture",
      levels: ["L4", "L5", "L6"],
      q: L("Two teammates are in conflict and it's hurting the team. Should I step in?",
           "دو هم‌تیمی با هم درگیرند و به تیم آسیب می‌زند. دخالت کنم؟"),
      short: L("Usually yes, early and small. At {L4} you act on friction instead of hoping it fades: talk to each person, name the shared goal, propose one experiment, and escalate if it's about conduct or doesn't ease.",
               "معمولا بله، زود و کوچک. در {L4} به‌جای امید به فروکش کردن اصطکاک عمل می‌کنید: با هر نفر صحبت کنید، هدف مشترک را نام ببرید، یک آزمایش پیشنهاد دهید، و اگر موضوع رفتار است یا آرام نشد escalate کنید."),
      body: L("The ladder is explicit. At {L4}, when you notice friction in your team or with a neighbouring one, you act by raising it with the people involved instead of hoping it fades. At {L5} you notice earlier and steer people toward the same page, with the organisation's benefit in mind, not either side's. At {L6} and {L7} it becomes priorities between groups. So stepping in is part of the level, not an overreach.\n\nA small, safe sequence:\n\n1. **Talk to each person separately**, first to listen. Ask what they need, not who is right.\n2. **Name the shared goal** both would sign up for, such as shipping the migration without an outage.\n3. **Propose one small experiment** with a date: a design review before code, a split of the module, an agreement on who decides.\n4. **Check back** after a week. Don't let it become a standing role as the team's mediator.\n\nKnow the limit. If the conflict involves conduct, discrimination or one person's repeated disrespect, it isn't yours to fix: take it to your manager or the proper channel. And don't take sides in a public thread; it hardens positions.",
              "نردبان صریح است. در {L4}، وقتی در تیم خودتان یا تیم همسایه اصطکاک می‌بینید، به‌جای امید به فروکش کردن، با افراد درگیر صحبت می‌کنید و موضوع را مطرح می‌کنید. در {L5} زودتر متوجه می‌شوید و آدم‌ها را به هم‌صفحگی می‌رسانید، با نگاه به نفع سازمان، نه یکی از دو طرف. در {L6} و {L7} به اولویت‌های میان گروه‌ها تبدیل می‌شود. پس دخالت بخشی از سطح است، نه تجاوز از حد.\n\nیک توالی کوچک و امن:\n\n1. **با هر نفر جداگانه صحبت کنید**، اول برای گوش دادن. بپرسید چه لازم دارد، نه این‌که چه کسی درست می‌گوید.\n2. **هدف مشترکی را نام ببرید** که هر دو امضایش می‌کنند، مثل تحویل مهاجرت بدون قطعی.\n3. **یک آزمایش کوچک با تاریخ پیشنهاد کنید:** design review پیش از کد، تقسیم ماژول، توافق درباره‌ی این‌که چه کسی تصمیم می‌گیرد.\n4. **بعد از یک هفته پیگیری کنید.** نگذارید به نقش دائمی میانجی تیم تبدیل شود.\n\nحد را بشناسید. اگر درگیری به رفتار، تبعیض یا بی‌احترامی مکرر یک نفر مربوط است، رفعش با شما نیست: پیش مدیرتان یا کانال مناسب ببرید. و در یک رشته‌ی عمومی طرف نگیرید؛ موضع‌ها را سفت می‌کند."),
      steps: [
        L("Talk to each person alone for ten minutes, and ask what they need.",
          "با هر نفر ده دقیقه تنها صحبت کنید و بپرسید چه لازم دارد."),
        L("Say the shared goal out loud, in one sentence both would agree with.",
          "هدف مشترک را در یک جمله که هر دو قبول کنند بلند بگویید."),
        L("Propose one experiment with a date, and check back in a week.",
          "یک آزمایش با تاریخ پیشنهاد دهید و بعد از یک هفته پیگیری کنید."),
        L("If it's about conduct, don't mediate: take it to your manager or the proper channel.",
          "اگر درباره‌ی رفتار است میانجی‌گری نکنید: پیش مدیر یا کانال مناسب ببرید.")
      ],
      story: L("Elena noticed two backend engineers had stopped reviewing each other's PRs after a heated design argument. She talked to each for ten minutes, and both said, separately, that they wanted the service stable by quarter end. She proposed a rule: design changes get a 30-minute call before code, and the tech lead breaks ties. Reviews resumed within a week.",
               "النا متوجه شد دو مهندس backend بعد از یک بحث داغ طراحی دیگر PRهای هم را review نمی‌کنند. با هرکدام ده دقیقه صحبت کرد و هر دو جداگانه گفتند می‌خواهند سرویس تا پایان فصل پایدار شود. او یک قاعده پیشنهاد داد: تغییرهای طراحی پیش از کد یک تماس 30 دقیقه‌ای دارند و tech lead در تساوی تصمیم می‌گیرد. review ظرف یک هفته از سر گرفته شد."),
      links: [
        { route: "levels/habits", label: L("Teamwork and citizenship", "کار تیمی و شهروندی") },
        { route: "levels/jump", label: L("Compare two levels", "مقایسه‌ی دو سطح") }
      ]
    },

    {
      id: "no-ladder",
      group: "culture",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("My company has no formal ladder. How do I know what level I'm at?",
           "شرکت من نردبان رسمی ندارد. از کجا بدانم در چه سطحی هستم؟"),
      short: L("Borrow one. Published ladders converge on scope, ambiguity, horizon and leverage, so you can describe your work in those units and compare. Then ask your manager to agree a written version for your team.",
               "یکی را قرض بگیرید. نردبان‌های منتشرشده روی scope، ابهام، افق و اهرم هم‌گرا هستند؛ پس کارتان را با همین واحدها توصیف و مقایسه کنید. بعد از مدیرتان بخواهید روی یک نسخه‌ی مکتوب برای تیم‌تان توافق کنید."),
      body: L("Many companies, especially small ones, have titles but no written levels, and titles are unregulated: “Senior” can mean anything. You can still place yourself, because published ladders converge on the same few ideas: **scope** (task, project, area, organisation), **ambiguity** (defined, scoped, loose, undefined), **horizon** (days, months, years) and **leverage** (how many people your work moves).\n\nDescribe your last two projects in those units, then compare them with one or two public frameworks. Monzo, Dropbox, GitLab, Honeycomb and Etsy publish theirs. Use them as mirrors, not rulebooks: Monzo calls its framework a compass, not a GPS, and says it should never compute a level. Notice too that the same word means different things: one ladder's Staff is a single team's domain, another's spans several teams.\n\nThen take it to your manager. Square built its criteria by enumerating what people had actually been told in promotion feedback, to remove unwritten expectations, and you can do a small version of that. Bring a one-page draft: “Here's how I'd describe my level and the next one at our scale. What would you change?” A written agreement, even an informal one, beats a title.",
              "بسیاری از شرکت‌ها، به‌ویژه کوچک‌ها، عنوان دارند ولی سطح مکتوب ندارند، و عنوان‌ها تنظیم‌شده نیستند: «Senior» می‌تواند هر چیزی باشد. باز هم می‌توانید خودتان را جا بدهید، چون نردبان‌های منتشرشده روی همان چند ایده هم‌گرا هستند: **scope** (task، پروژه، حوزه، سازمان)، **ابهام** (تعریف‌شده، scope‌شده، شل، تعریف‌نشده)، **افق** (روز، ماه، سال) و **اهرم** (کار شما چند نفر را جابه‌جا می‌کند).\n\nدو پروژه‌ی آخرتان را با همین واحدها توصیف کنید و بعد با یکی دو چارچوب عمومی مقایسه کنید. Monzo، Dropbox، GitLab، Honeycomb و Etsy چارچوب‌هایشان را منتشر کرده‌اند. از آن‌ها مثل آینه استفاده کنید، نه کتاب قانون: Monzo چارچوبش را قطب‌نما می‌داند، نه GPS، و می‌گوید هرگز نباید سطحی را محاسبه کند. این را هم ببینید که یک کلمه معانی متفاوتی دارد: Staff در یک نردبان حوزه‌ی یک تیم است، در دیگری چند تیم را می‌پوشاند.\n\nبعد پیش مدیرتان ببرید. Square معیارهایش را با فهرست کردن آنچه واقعا در بازخورد ارتقا به آدم‌ها گفته شده بود ساخت تا انتظارهای نانوشته را حذف کند، و شما می‌توانید نسخه‌ی کوچکی از آن را انجام بدهید. یک پیش‌نویس یک‌صفحه‌ای ببرید: «من سطح فعلی و سطح بعد را در مقیاس ما این‌طور توصیف می‌کنم. شما چه چیزی را عوض می‌کنید؟» یک توافق مکتوب، حتی غیررسمی، از یک عنوان بهتر است."),
      steps: [
        L("Describe your last two projects as scope, ambiguity, horizon and leverage.",
          "دو پروژه‌ی آخرتان را با scope، ابهام، افق و اهرم توصیف کنید."),
        L("Read one or two public ladders and mark where your examples fit.",
          "یکی دو نردبان عمومی بخوانید و ببینید مثال‌هایتان کجا جا می‌گیرد."),
        L("Bring a one-page draft of your level and the next to your manager, and ask what they'd change.",
          "یک پیش‌نویس یک‌صفحه‌ای از سطح خودتان و سطح بعد پیش مدیر ببرید و بپرسید چه چیزی را عوض می‌کند."),
        L("Keep the agreed text and revisit it every six months.",
          "متن توافق‌شده را نگه دارید و هر شش ماه بازبینی کنید.")
      ],
      story: null,
      links: [
        { route: "how/altitude", label: L("Scope, ambiguity, horizon, people", "scope، ابهام، افق، آدم‌ها") },
        { route: "levels", label: L("The levels, L2–L7", "سطح‌ها، L2 تا L7") }
      ]
    }

  );
})();

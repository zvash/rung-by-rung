/* Level extras: signals, traps, stories, week mix, habits. Merged onto S.data.levels by id.
   ==highlight== marks the level signals inside stories. All people are illustrative composites. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;

  var X = {
    L2: {
      signals: [
        L("Small tickets reach “done” with one or two check-ins, not five.", "taskهای کوچک با یک یا دو بار سرکشی تمام می‌شوند، نه پنج بار."),
        L("Review comments are mostly about details, rarely about approach.", "کامنت‌های review بیشتر درباره‌ی جزئیات‌اند، به‌ندرت درباره‌ی رویکرد."),
        L("Your questions show you tried first: what you did, what you saw, what you expected.", "سوال‌هایتان نشان می‌دهد اول خودتان تلاش کرده‌اید: چه کردید، چه دیدید، چه انتظار داشتید."),
        L("You can say who owns what around your area.", "می‌توانید بگویید در اطراف حوزه‌تان چه کسی مسئول چیست.")
      ],
      traps: [
        L("Staying silent when stuck: hours turn into days.", "سکوت وقتی گیر کرده‌اید: ساعت‌ها به روزها تبدیل می‌شود."),
        L("Trying to look senior instead of getting feedback fast.", "تلاش برای ارشد دیده شدن به‌جای گرفتن سریع بازخورد."),
        L("Chasing output volume rather than learning the codebase and the product.", "دنبال حجم خروجی بودن، به‌جای یادگرفتن codebase و محصول.")
      ],
      story: {
        title: L("Mina's nine-day merge", "ادغام نه‌روزه‌ی مینا"),
        body: L(
          "Mina's first pull request was 40 lines, and it took nine days. The code took one. The other eight went on quietly fighting the staging environment, because she didn't want to \"bother\" anyone.\n\nIn week three her buddy Omid said: \"If something eats more than half a day, post what you tried.\" The next ticket took three days. By month two she had ==a habit: one-paragraph questions with what she ran, what she expected and what she saw==. By month four she was answering other newcomers and had ==fixed the onboarding page that cost her those eight days==.\n\nThe L3 signal arrived when nobody had to ask her for status any more.",
          "اولین pull request مینا ۴۰ خط بود و نه روز طول کشید. خودِ کد یک روز کار داشت؛ هشت روز دیگر صرف کلنجار رفتن بی‌سروصدا با محیط staging شد، چون نمی‌خواست مزاحم کسی بشود.\n\nهفته‌ی سوم، امید که راهنمای او بود گفت: «هر چیزی که بیشتر از نیم‌روز وقتت را گرفت، بنویس چه کار کرده‌ای.» task بعدی سه روز طول کشید. تا ماه دوم ==عادتی ساخته بود: سوال‌های یک‌پاراگرافی با این محتوا که چه اجرا کرده، چه انتظار داشته و چه دیده==. تا ماه چهارم به تازه‌واردهای دیگر جواب می‌داد و ==صفحه‌ی onboardingای را که آن هشت روز را از او گرفته بود اصلاح کرده بود==.\n\nنشانه‌ی L3 وقتی از راه رسید که دیگر لازم نبود کسی از او وضعیت بپرسد.")
      }
    },

    L3: {
      signals: [
        L("Your tasks need clarifying questions, not rescue missions.", "taskهایتان به سوال برای شفاف‌سازی نیاز دارند، نه عملیات نجات."),
        L("You are never “blocked for days” without someone knowing why.", "هیچ‌وقت چند روز block نمی‌مانید بدون این‌که کسی بداند چرا."),
        L("Your next task is already in progress before anyone asks.", "task بعدی‌تان پیش از این‌که کسی بخواهد در جریان است."),
        L("Your pull requests are small, tested and easy to review.", "pull requestهایتان کوچک، تست‌شده و راحت review می‌شوند.")
      ],
      traps: [
        L("Waiting to be assigned. Pull-based work is the L3 habit that makes L4 possible.", "منتظر assign شدن ماندن. کارگرفتنِ pull-based عادتِ L3 است که L4 را ممکن می‌کند."),
        L("Treating the ticket as the whole problem: delivering exactly what was written without asking why.", "ticket را تمامِ مساله دیدن: تحویل دقیقِ آنچه نوشته شده، بدون پرسیدنِ چرا."),
        L("Escalating after ten minutes, or hiding a blocker until stand-up. Both cost the team.", "escalate کردن بعد از ده دقیقه، یا پنهان کردن مانع تا stand-up. هر دو برای تیم هزینه دارد.")
      ],
      story: {
        title: L("Nima and the flaky test", "نیما و تستِ ناپایدار"),
        body: L(
          "Nima's task was small: add retry handling to the payment-webhook consumer. Halfway through, one test began failing one run in ten.\n\nHe gave himself two hours. The logs pointed to a test that depended on the wall clock, not on the code he'd changed. ==He fixed the test, wrote two lines in the team's testing doc, and told his lead why the build had been flaky for weeks.== His lead hadn't known.\n\nThen, with the task merged and nothing assigned, ==he opened the backlog, picked the noisy-alert ticket at the top, and asked one clarifying question before starting.== Nobody had to hand him work, and nobody had to chase him.",
          "task نیما کوچک بود: اضافه کردن retry به consumer مربوط به webhook پرداخت. وسط کار، یک تست از هر ده اجرا یک بار fail می‌شد.\n\nدو ساعت برای خودش وقت گذاشت. لاگ‌ها نشان می‌داد تست به ساعت سیستم وابسته است، نه به کدی که او تغییر داده بود. ==تست را درست کرد، دو خط در مستند تست تیم نوشت و به لیدش گفت چرا build هفته‌ها ناپایدار بوده است.== لیدش خبر نداشت.\n\nبعد، وقتی task ادغام شد و چیزی assign نشده بود، ==سراغ backlog رفت، ticket مربوط به alertهای پرسروصدا را از بالای فهرست برداشت و پیش از شروع یک سوال شفاف‌ساز پرسید.== نه کسی لازم بود کار به او بدهد، نه کسی لازم بود دنبالش بدود.")
      }
    },

    L4: {
      signals: [
        L("A multi-month project runs without anyone checking on you weekly.", "یک پروژه‌ی چندماهه بدون این‌که هر هفته کسی سرکشی کند پیش می‌رود."),
        L("When a dependency slips, you re-plan and tell people the same day.", "وقتی یک وابستگی عقب می‌افتد، خودتان دوباره برنامه می‌ریزید و همان روز به بقیه خبر می‌دهید."),
        L("The doc, the dashboard and the runbook exist because you made them, not because someone asked.", "مستند، داشبورد و runbook وجود دارند چون شما ساخته‌اید، نه چون کسی خواسته."),
        L("You have walked someone through their first big task.", "کسی را در اولین task بزرگش همراهی کرده‌اید.")
      ],
      traps: [
        L("Doing everything yourself. End-to-end is not “all of it is me”.", "همه‌چیز را خودتان انجام دادن. end-to-end یعنی «همه‌ش حتما خودم» نیست."),
        L("Finishing the code and leaving docs, alerts and the support guide for “later”.", "تمام کردن کد و گذاشتنِ مستندات، alertها و راهنمای پشتیبانی برای «بعدا»."),
        L("Heads-down delivery that never reaches beyond your team, so influence stays at L3.", "تحویلِ سر در گریبان که هرگز به بیرون از تیم نمی‌رسد، پس نفوذ در سطح L3 می‌ماند."),
        L("A one-skill identity: excellent coder, nothing beyond.", "هویت تک‌مهارتی: کدنویس عالی، و بس.")
      ],
      story: {
        title: L("Kian's four-month migration", "مهاجرت چهارماهه‌ی کیان"),
        body: L(
          "Kian owned the move of order data out of the old monolith: four months, three teams touched. In week one he wrote a one-page plan and learned that the finance reports read the old tables directly. Nobody had listed that.\n\n==He pulled the data team in before building anything==, split the work into three releases, and wrote the rollback steps next to the plan. In month three the payments team slipped by four weeks. ==Kian re-cut scope that afternoon, posted two options with their costs, and told stakeholders the new date the next morning.==\n\nAt launch there was a dashboard, an on-call runbook, and a short session where he walked support through what would change. The project was quiet, and that was the point.",
          "کیان مسئول انتقال داده‌های سفارش از مونولیت قدیمی بود: چهار ماه کار، سه تیم درگیر. هفته‌ی اول یک برنامه‌ی یک‌صفحه‌ای نوشت و فهمید گزارش‌های مالی مستقیم از جدول‌های قدیمی می‌خوانند. هیچ‌کس این را فهرست نکرده بود.\n\n==پیش از ساختن هر چیزی تیم داده را وارد کار کرد==، کار را به سه release شکست و مراحل rollback را کنار برنامه نوشت. ماه سوم تیم پرداخت چهار هفته عقب افتاد. ==کیان همان بعدازظهر scope را دوباره برید، دو گزینه را با هزینه‌شان منتشر کرد و صبح بعد تاریخ جدید را به ذی‌نفعان گفت.==\n\nروز launch یک داشبورد داشتیم، یک runbook برای on-call و یک جلسه‌ی کوتاه که در آن به تیم پشتیبانی توضیح داد چه چیزی عوض می‌شود. پروژه آرام بود و همین هدف بود.")
      }
    },

    L5: {
      signals: [
        L("Your team asks what next quarter's technical priorities should be, and acts on the answer.", "تیم از شما می‌پرسد اولویت‌های فنی فصل بعد چه باشد و طبق جوابتان عمل می‌کند."),
        L("A vague ask became a scoped, staged plan that other people executed.", "یک درخواست مبهم به یک برنامه‌ی scope‌شده و مرحله‌بندی‌شده تبدیل شد که دیگران اجرایش کردند."),
        L("You fixed a class of problems, not one instance of it.", "یک دسته از مشکلات را حل کرده‌اید، نه فقط یک نمونه را."),
        L("Stakeholders come to you directly, before they escalate.", "ذی‌نفعان مستقیما سراغ شما می‌آیند، پیش از آن‌که escalate کنند.")
      ],
      traps: [
        L("Being the best coder instead of the multiplier for 2–3 others, so contribution stays at L4.", "بهترین کدنویس بودن به‌جای ضریبِ ۲ تا ۳ نفر دیگر، پس مشارکت در سطح L4 می‌ماند."),
        L("Over-building: an elaborate solution to a medium problem. The ladder prizes the simple one.", "بیش‌ازحد ساختن: راه‌حل پیچیده برای مساله‌ی متوسط. نردبان راه‌حل ساده را ارج می‌نهد."),
        L("Waiting for a mandate before defining scope.", "منتظر ماندنِ مجوز پیش از تعریف scope."),
        L("Depth without an inner PM: the right solution to the wrong problem.", "عمق بدون PM درونی: راه‌حل درست برای مساله‌ی غلط.")
      ],
      story: {
        title: L("Dara and “make search better”", "دارا و «جست‌وجو را بهتر کن»"),
        body: L(
          "The product manager's request was one line: \"make search better.\" Dara spent two weeks not coding. ==She sat with an analyst, split \"better\" into zero-result rate, click-through and latency, and found that 9% of queries returned nothing.==\n\nShe wrote up three options with costs and risks and recommended fixing zero-results first: cheap, visible, measurable. ==Then she cut a two-quarter plan into three workstreams, handed two of them to Kian and Mina with clear outcomes, and set a weekly metric review with the PM.==\n\nZero-results fell from 9% to 4%. Months later other teams' search features were reusing her query logging, ==because she had made it a shared component instead of a one-off.==",
          "درخواست مدیر محصول یک جمله بود: «جست‌وجو را بهتر کن.» دارا دو هفته کد نزد. ==با یک تحلیل‌گر نشست، «بهتر» را به نرخ نتیجه‌ی خالی، click-through و latency شکست و فهمید ۹٪ جست‌وجوها هیچ نتیجه‌ای ندارند.==\n\nسه گزینه را با هزینه و ریسکشان نوشت و پیشنهاد داد اول نتیجه‌ی خالی درست شود: ارزان، دیدنی، قابل‌اندازه‌گیری. ==بعد برنامه‌ی دو فصلی را به سه جریان کاری شکست، دو تایش را با خروجی روشن به کیان و مینا سپرد و یک مرور هفتگی شاخص‌ها با مدیر محصول گذاشت.==\n\nنتیجه‌ی خالی از ۹٪ به ۴٪ رسید. ماه‌ها بعد، قابلیت‌های جست‌وجوی تیم‌های دیگر هم از لاگ‌گیری او استفاده می‌کردند، ==چون آن را به‌جای یک کار یک‌باره، یک مولفه‌ی مشترک کرده بود.==")
      }
    },

    L6: {
      signals: [
        L("Teams outside yours change their plans because of a document you wrote.", "تیم‌هایی بیرون از تیم شما به‌خاطر سندی که نوشته‌اید برنامه‌شان را عوض می‌کنند."),
        L("Leaders ask you what we should not do.", "رهبران از شما می‌پرسند چه کارهایی را نباید انجام بدهیم."),
        L("You have reshaped or stopped a project for sound reasons, and people agreed.", "پروژه‌ای را به دلایل درست تغییر داده یا متوقف کرده‌اید و بقیه موافقت کردند."),
        L("Your best work shows up in other people's output.", "بهترین کار شما در خروجی دیگران دیده می‌شود.")
      ],
      traps: [
        L("Staying hands-on in one comfortable area, so scope never leaves L5.", "ماندن در یک حوزه‌ی راحت و دستی‌کار، پس scope هرگز از L5 فراتر نمی‌رود."),
        L("Strategy documents with nobody owning the results.", "سندهای استراتژی بدون صاحبِ نتیجه."),
        L("Influence by escalation instead of by clarity and trust.", "نفوذ از راه escalate به‌جای شفافیت و اعتماد."),
        L("Chasing the perfect architecture while ignoring organisational reality.", "دنبال معماری بی‌نقص بودن و نادیده گرفتن واقعیتِ سازمان.")
      ],
      story: {
        title: L("Leila and the cloud bill", "لیلا و قبضِ cloud"),
        body: L(
          "The company goal was blunt: cut cloud cost by 30% without hurting reliability. Nobody knew how. Leila spent three weeks listening to finance, SRE and three product orgs before writing anything.\n\n==Seventy percent of the spend traced back to four patterns.== She wrote a five-page strategy: three bets, what we will not do, an owner and a metric for each. ==Two directors committed engineers because the document made the trade-offs explicit and showed what they'd get back.==\n\nA year later cost was down 27%, and a cost estimate had become part of every design review. ==The change outlived the project because she built the habit, not only the savings.==",
          "هدف شرکت صریح بود: ۳۰٪ کاهش هزینه‌ی cloud بدون آسیب به پایداری. کسی نمی‌دانست چطور. لیلا پیش از نوشتن هر چیزی سه هفته به حرف‌های مالی، SRE و سه سازمان محصول گوش داد.\n\n==هفتاد درصد هزینه به چهار الگو برمی‌گشت.== یک استراتژی پنج‌صفحه‌ای نوشت: سه شرط‌بندی، آنچه انجام نمی‌دهیم، و برای هر کدام یک صاحب و یک شاخص. ==دو مدیر مهندس تخصیص دادند، چون سند trade-offها را روشن می‌کرد و نشان می‌داد در ازایش چه پس می‌گیرند.==\n\nیک سال بعد هزینه ۲۷٪ کمتر شده بود و برآورد هزینه بخشی از هر design review شده بود. ==تغییر از پروژه بیشتر عمر کرد چون او عادت را ساخته بود، نه فقط صرفه‌جویی را.==")
      }
    },

    L7: {
      signals: [
        L("Executives involve you in direction-setting before plans harden.", "مدیران ارشد پیش از سفت‌شدن برنامه‌ها شما را در تعیین مسیر دخیل می‌کنند."),
        L("People from different orgs trust your read of a dispute, even when it goes against them.", "آدم‌ها از سازمان‌های مختلف به قضاوت شما در یک اختلاف اعتماد دارند، حتی وقتی به ضررشان باشد."),
        L("A capability exists (a platform, a standard, a practice) that would not exist without you.", "توانمندی‌ای (پلتفرم، استاندارد، رویه) وجود دارد که بدون شما وجود نداشت."),
        L("The systems you look after are safe in other hands because you built the people and the practices, not just the code.", "سیستم‌هایی که مراقبشان هستید در دست دیگران هم امن‌اند چون آدم‌ها و رویه‌ها را ساخته‌اید، نه فقط کد را.")
      ],
      traps: [
        L("Becoming the reviewer of everything: authority needs leverage, not a queue.", "تبدیل شدن به review‌کننده‌ی همه‌چیز: اقتدار به اهرم نیاز دارد، نه صف."),
        L("Relying on personal heroics for sensitive systems instead of building successors.", "تکیه بر قهرمان‌بازی شخصی برای سیستم‌های حساس، به‌جای ساختنِ جانشین."),
        L("Strategy detached from the people who must carry it out.", "استراتژیِ جدا از آدم‌هایی که باید اجرایش کنند.")
      ],
      story: {
        title: L("Sina and the two pipelines", "سینا و دو pipeline"),
        body: L(
          "Two organisations were building their own event pipelines, and each leader was sure the other was wrong. Sina sat with both teams and wrote each side's constraints down so plainly that ==each team read them and said, \"yes, that's our position.\"==\n\nHer proposal belonged to neither side: a shared core with two thin adapters. ==She got both VPs to a decision in a single meeting, because by then neither felt overruled.== Over two years three duplicate systems were retired and incident rates on the platform fell by half.\n\nHer calendar changed more than her code did: ==she spent her time making sure the next decision of that kind wouldn't need her.==",
          "دو سازمان هر کدام در حال ساختن pipeline رویداد خودشان بودند و هر رهبر مطمئن بود دیگری اشتباه می‌کند. سینا با هر دو تیم نشست و محدودیت‌های هر طرف را آن‌قدر ساده نوشت که ==هر تیم آن را خواند و گفت: «بله، موضع ما همین است.»==\n\nپیشنهادش مال هیچ‌کدام نبود: یک هسته‌ی مشترک با دو adapter نازک. ==هر دو معاون را در یک جلسه به تصمیم رساند، چون تا آن موقع هیچ‌کدام احساس نمی‌کرد کنار زده شده است.== طی دو سال سه سیستم تکراری بازنشسته شد و نرخ incident روی پلتفرم نصف شد.\n\nتقویم او بیشتر از کدش عوض شد: ==وقتش را صرف این کرد که تصمیم مشابه بعدی به او نیاز نداشته باشد.==")
      }
    }
  };

  S.data.levels.forEach(function (lv) {
    var x = X[lv.id];
    if (x) { lv.signals = x.signals; lv.traps = x.traps; lv.story = x.story; }
  });

  /* ---------------- weekly mix (illustrative emphasis, 0–4) ---------------- */
  S.data.weekRows = [
    { id: "code", name: L("Hands-on coding", "کدنویسیِ دست‌به‌کد"), v: [4, 4, 3, 3, 2, 1] },
    { id: "design", name: L("Design & planning", "طراحی و برنامه‌ریزی"), v: [1, 1, 3, 4, 3, 3] },
    { id: "teach", name: L("Review, teaching & mentoring", "review، آموزش و mentoring"), v: [1, 2, 2, 3, 3, 3] },
    { id: "align", name: L("Alignment & communication", "همسوسازی و ارتباط"), v: [1, 1, 3, 3, 4, 4] },
    { id: "ops", name: L("Operations & quality", "عملیات و کیفیت"), v: [1, 2, 3, 3, 2, 2] },
    { id: "strategy", name: L("Direction & strategy", "جهت‌دهی و استراتژی"), v: [0, 0, 1, 2, 4, 4] }
  ];

  /* ---------------- habits that never leave the ladder ---------------- */
  S.data.habits = [
    { id: "citizenship", icon: "handshake",
      name: L("Citizenship", "مشارکت شهروندی"),
      def: L("Taking on duties beyond your direct work to make the company a better place to work: educational content, knowledge-sharing sessions, study groups, hiring and interviews, better processes, team events.",
             "عهده‌دار شدن وظایفی غیر از کار مستقیمتان تا شرکت جای بهتری برای کار شود: محتوای آموزشی، جلسه‌های اشتراک دانش، گروه‌های مطالعه، جذب و مصاحبه، بهبود فرایندها، رویدادهای تیمی."),
      by: {
        L2: L("You join study groups, ask questions in public channels, and note the gaps you hit in onboarding docs.", "در گروه‌های مطالعه شرکت می‌کنید، سوال‌هایتان را در کانال‌های عمومی می‌پرسید و ایرادهای مستندات onboarding را که به آن‌ها برمی‌خورید یادداشت می‌کنید."),
        L3: L("You share what you learn: a short demo, a docs fix, an answer in a public channel. You shadow an interview.", "آنچه یاد می‌گیرید را به اشتراک می‌گذارید: یک دموی کوتاه، یک اصلاح مستندات، یک پاسخ در کانال عمومی. در یک مصاحبه به‌عنوان ناظر (shadow) حضور پیدا می‌کنید."),
        L4: L("You run a knowledge-sharing session, interview candidates, and improve a team process that others then adopt.", "یک جلسه‌ی اشتراک دانش برگزار می‌کنید، از متقاضیان مصاحبه می‌گیرید و یک فرایند تیمی را بهبود می‌دهید که بقیه هم می‌پذیرند."),
        L5: L("You help set the hiring bar for your area, write material that raises the whole team's level, and fix engineering processes that slow people down.", "در تعیین استاندارد جذب برای حوزه‌تان نقش دارید، محتوایی می‌نویسید که سطح کل تیم را بالا می‌برد و فرایندهای مهندسی‌ای را که مانع‌اند اصلاح می‌کنید."),
        L6: L("You build practices that reach the organisation: communities, standards, talks. You grow other senior people, not only juniors.", "رویه‌هایی می‌سازید که به کل سازمان می‌رسد: انجمن‌ها، استانداردها، سخنرانی‌ها. فقط تازه‌کارها را نه، افراد ارشد دیگر را هم رشد می‌دهید."),
        L7: L("You shape the engineering culture itself: the bar, the rituals, and who gets developed and trusted.", "خودِ فرهنگ مهندسی را شکل می‌دهید: استاندارد، آیین‌ها، و این‌که چه کسانی رشد داده می‌شوند و اعتماد می‌گیرند.")
      } },
    { id: "teamwork", icon: "users",
      name: L("Teamwork", "کار تیمی"),
      def: L("Being a reliable teammate: quality work on time, no excuses, accountability. Communicating well, giving and receiving feedback, upholding humility, respect, trust and transparency, staying open to critique, and keeping inclusion and belonging alive.",
             "هم‌تیمیِ قابل‌اعتماد بودن: کار باکیفیت و به‌موقع، بدون بهانه، با پذیرش مسئولیت. ارتباط موثر، دادن و گرفتن بازخورد، پاس داشتنِ فروتنی، احترام، اعتماد و شفافیت، پذیرا بودن نسبت به نقد، و زنده نگه داشتن فراگیری و حس تعلق."),
      by: {
        L2: L("You deliver on time, own your mistakes, skip the excuses, and ask for feedback early.", "سر وقت تحویل می‌دهید، اشتباهاتتان را می‌پذیرید، بهانه نمی‌آورید و زود بازخورد می‌خواهید."),
        L3: L("You give feedback kindly and take it openly. You offer help before anyone asks.", "بازخورد را مهربانانه می‌دهید و بی‌دفاع می‌گیرید. پیش از آن‌که کسی بخواهد پیشنهاد کمک می‌دهید."),
        L4: L("You model humility, respect, trust and transparency under pressure, and step in when you see non-inclusive behaviour.", "در شرایط فشار هم فروتنی، احترام، اعتماد و شفافیت را نشان می‌دهید و وقتی رفتار غیرفراگیر می‌بینید وارد می‌شوید."),
        L5: L("You make candid conversations productive and make it safe to disagree, including with you.", "گفتگوی صریح را کارآمد می‌کنید و مخالفت کردن را امن می‌کنید، حتی با خودتان."),
        L6: L("You are a role model whose way of working measurably speeds up the people around you.", "الگویی هستید که شیوه‌ی کارتان به‌طور ملموس سرعت اطرافیان را بالا می‌برد."),
        L7: L("You build collaboration across functions and remove friction at the boundaries between teams.", "همکاری میان بخش‌های مختلف را می‌سازید و اصطکاک در مرزِ تیم‌ها را برمی‌دارید.")
      } },
    { id: "practices", icon: "gear",
      name: L("Engineering practices", "رویه‌های مهندسی"),
      def: L("Clean, documented, testable code that follows the organisation's standards; real participation in code review; and steady improvement of documentation, processes, code health, maintainability and scalability.",
             "کدِ تمیز، مستند و تست‌پذیر منطبق با استانداردهای سازمان؛ مشارکت واقعی در code review؛ و بهبود مداوم مستندسازی، فرایندها، سلامت کد، قابلیت نگهداری و مقیاس‌پذیری."),
      by: {
        L2: L("Clean, documented code that follows the team's standards. You take review comments seriously.", "کد تمیز و مستند مطابق استانداردهای تیم. کامنت‌های review را جدی می‌گیرید."),
        L3: L("Testable code with tests for your changes. Your comments on others' code are useful and kind.", "کد تست‌پذیر با تست برای تغییرهایتان. کامنت‌هایی که روی کد دیگران می‌گذارید مفید و مهربانانه‌اند."),
        L4: L("You make sure the quality processes exist (tests, docs, monitoring) and close the gaps others skip.", "مطمئن می‌شوید فرایندهای کیفیت وجود دارند (تست، مستندات، monitoring) و شکاف‌هایی را که دیگران رد می‌کنند می‌بندید."),
        L5: L("You improve the team's testing and monitoring processes and keep code health from eroding.", "فرایندهای تست و monitoring تیم را بهبود می‌دهید و نمی‌گذارید سلامت کد فرسوده شود."),
        L6: L("You raise quality attributes (reliability, security, performance) across systems and prevent whole classes of problems.", "شاخصه‌های کیفیت (اتکاپذیری، امنیت، کارایی) را در سیستم‌ها بالا می‌برید و از دسته‌هایی از مشکلات پیش‌گیری می‌کنید."),
        L7: L("You set the technical standards others follow, and the health of critical systems is your standing responsibility.", "استانداردهای فنی‌ای را تعیین می‌کنید که دیگران دنبال می‌کنند، و سلامت سیستم‌های حیاتی مسئولیت دائمی شماست.")
      } }
  ];
})();

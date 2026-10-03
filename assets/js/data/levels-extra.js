/* Level extras: signals, traps, stories, week mix, habits. Merged onto S.data.levels by id.
   ==highlight== marks the level signals inside stories. All people are illustrative composites. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;

  var X = {
    L2: {
      signals: [
        L("Small tickets reach “done” with one or two check-ins, not five.", "taskهای کوچک با یک یا دو بار بررسی روند کار تمام می‌شوند، نه پنج بار."),
        L("Review comments are mostly about details, rarely about approach.", "کامنت‌های code review بیشتر به جزئیات مربوط‌اند و به‌ندرت رویکرد اصلی را زیر سوال می‌برند."),
        L("Your questions show you tried first: what you did, what you saw, what you expected.", "سوال‌هایتان نشان می‌دهد اول خودتان تلاش کرده‌اید: چه کردید، چه دیدید، چه انتظار داشتید."),
        L("You can say who owns what around your area.", "می‌توانید بگویید در حوزه‌ی کاری‌تان و بخش‌های مرتبط، چه کسی مسئول چه کاری است.")
      ],
      traps: [
        L("Staying silent when stuck: hours turn into days.", "اطلاع ندادن هنگام block شدن، تا جایی که ساعت‌ها به روزها تبدیل می‌شوند."),
        L("Trying to look senior instead of getting feedback fast.", "تلاش برای ارشد به نظر رسیدن، به‌جای گرفتن سریع بازخورد."),
        L("Chasing output volume rather than learning the codebase and the product.", "تمرکز بر حجم خروجی، به‌جای شناخت codebase و محصول.")
      ],
      story: {
        title: L("Mina's nine-day merge", "PR نه‌روزه‌ی مینا"),
        body: L(
          "Mina's first pull request was 40 lines, and it took nine days. The code took one. The other eight went on quietly fighting the staging environment, because she didn't want to \"bother\" anyone.\n\nIn week three her buddy Omid said: \"If something eats more than half a day, post what you tried.\" The next ticket took three days. By month two she had ==a habit: one-paragraph questions with what she ran, what she expected and what she saw==. By month four she was answering other newcomers and had ==fixed the onboarding page that cost her those eight days==.\n\nThe L3 signal arrived when nobody had to ask her for status any more.",
          "اولین pull request مینا ۴۰ خط بود و نه روز طول کشید. نوشتن کد فقط یک روز زمان می‌برد. هشت روز دیگر را بدون این‌که کسی از مشکلش خبر داشته باشد، درگیر محیط staging بود، چون نمی‌خواست مزاحم کسی شود.\n\nهفته‌ی سوم، امید که راهنمایش بود گفت: «اگر کاری بیشتر از نیم‌روز وقتت را گرفت، بنویس چه راه‌هایی را امتحان کرده‌ای.» task بعدی سه روز طول کشید. تا ماه دوم ==عادت کرده بود سوالش را در یک پاراگراف مطرح کند: چه چیزی اجرا کرده، انتظار چه نتیجه‌ای داشته و چه دیده است==. تا ماه چهارم به تازه‌واردها کمک می‌کرد و ==صفحه‌ی onboarding را که باعث آن هشت روز سردرگمی شده بود، اصلاح کرده بود==.\n\nنشانه‌ی L3 زمانی دیده شد که دیگر لازم نبود کسی وضعیت کارش را بپرسد.")
      }
    },

    L3: {
      signals: [
        L("Your tasks need clarifying questions, not rescue missions.", "برای پیش بردن taskها فقط به شفاف‌سازی نیاز دارید، نه کمک اضطراری برای نجات کار."),
        L("You are never “blocked for days” without someone knowing why.", "هیچ‌وقت چند روز block نمی‌مانید بدون این‌که کسی بداند چرا."),
        L("Your next task is already in progress before anyone asks.", "پیش از درخواست دیگران، task بعدی را شروع کرده‌اید."),
        L("Your pull requests are small, tested and easy to review.", "pull requestهایتان کوچک و تست‌شده‌اند و به‌راحتی review می‌شوند.")
      ],
      traps: [
        L("Waiting to be assigned. Pull-based work is the L3 habit that makes L4 possible.", "منتظر assign شدن ماندن. گرفتن کار به شیوه‌ی pull-based از عادت‌های L3 است که زمینه‌ی رشد به L4 را فراهم می‌کند."),
        L("Treating the ticket as the whole problem: delivering exactly what was written without asking why.", "محدود دیدن مساله به متن ticket و تحویل همان خواسته، بدون پرسیدن دلیل آن."),
        L("Escalating after ten minutes, or hiding a blocker until stand-up. Both cost the team.", "escalate کردن بعد از ده دقیقه یا پنهان کردن blocker تا stand-up. هر دو برای تیم هزینه دارند.")
      ],
      story: {
        title: L("Nima and the flaky test", "نیما و تستِ ناپایدار"),
        body: L(
          "Nima's task was small: add retry handling to the payment-webhook consumer. Halfway through, one test began failing one run in ten.\n\nHe gave himself two hours. The logs pointed to a test that depended on the wall clock, not on the code he'd changed. ==He fixed the test, wrote two lines in the team's testing doc, and told his lead why the build had been flaky for weeks.== His lead hadn't known.\n\nThen, with the task merged and nothing assigned, ==he opened the backlog, picked the noisy-alert ticket at the top, and asked one clarifying question before starting.== Nobody had to hand him work, and nobody had to chase him.",
          "task نیما کوچک بود: اضافه کردن retry به consumer مربوط به webhook پرداخت. در حین کار، یک تست از هر ده اجرا یک بار fail می‌شد.\n\nدو ساعت برای بررسی وقت گذاشت. لاگ‌ها نشان دادند تست به ساعت سیستم وابسته است، نه به کدی که او تغییر داده بود. ==تست را اصلاح کرد، دو خط به مستندات تست تیم افزود و به لیدش توضیح داد چرا build چند هفته ناپایدار بوده است.== لیدش از علت خبر نداشت.\n\nپس از merge شدن task، کار تازه‌ای به او assign نشده بود. ==سراغ backlog رفت، ticket مربوط به alertهای پرسروصدا را از بالای فهرست برداشت و پیش از شروع، یک سوال برای شفاف شدن کار پرسید.== لازم نبود کسی کار تازه را به او بدهد یا پیگیرش شود.")
      }
    },

    L4: {
      signals: [
        L("A multi-month project runs without anyone checking on you weekly.", "یک پروژه‌ی چندماهه را بدون نیاز به بررسی هفتگی کارتان پیش می‌برید."),
        L("When a dependency slips, you re-plan and tell people the same day.", "وقتی یک وابستگی عقب می‌افتد، خودتان دوباره برنامه می‌ریزید و همان روز به بقیه خبر می‌دهید."),
        L("The doc, the dashboard and the runbook exist because you made them, not because someone asked.", "مستندات، داشبورد و runbook آماده‌اند چون خودتان ضرورتشان را تشخیص داده‌اید، نه چون کسی درخواست کرده است."),
        L("You have walked someone through their first big task.", "کسی را در اولین task بزرگش همراهی کرده‌اید.")
      ],
      traps: [
        L("Doing everything yourself. End-to-end is not “all of it is me”.", "همه‌چیز را خودتان انجام دادن. end-to-end به این معنی نیست که همه‌ی کارها را حتما خودتان انجام دهید."),
        L("Finishing the code and leaving docs, alerts and the support guide for “later”.", "تمام کردن کد و گذاشتنِ مستندات، alertها و راهنمای پشتیبانی برای «بعدا»."),
        L("Heads-down delivery that never reaches beyond your team, so influence stays at L3.", "انجام کار بدون ارتباط با بیرون از تیم، در نتیجه قدرت نفوذ شما در حد L3 باقی می‌ماند."),
        L("A one-skill identity: excellent coder, nothing beyond.", "محدود ماندن به یک مهارت: کدنویس عالی بودن و بس.")
      ],
      story: {
        title: L("Kian's four-month migration", "مهاجرت چهارماهه‌ی کیان"),
        body: L(
          "Kian owned the move of order data out of the old monolith: four months, three teams touched. In week one he wrote a one-page plan and learned that the finance reports read the old tables directly. Nobody had listed that.\n\n==He pulled the data team in before building anything==, split the work into three releases, and wrote the rollback steps next to the plan. In month three the payments team slipped by four weeks. ==Kian re-cut scope that afternoon, posted two options with their costs, and told stakeholders the new date the next morning.==\n\nAt launch there was a dashboard, an on-call runbook, and a short session where he walked support through what would change. The project was quiet, and that was the point.",
          "کیان مسئول انتقال داده‌های سفارش از monolith قدیمی بود: چهار ماه کار با مشارکت سه تیم. در هفته‌ی اول برنامه‌ای یک‌صفحه‌ای نوشت و متوجه شد گزارش‌های مالی مستقیم از جدول‌های قدیمی می‌خوانند. هیچ‌کس این وابستگی را ثبت نکرده بود.\n\n==پیش از پیاده‌سازی، تیم داده را وارد کار کرد==، کار را به سه release تقسیم کرد و مراحل rollback را کنار برنامه نوشت. در ماه سوم، تیم پرداخت چهار هفته عقب افتاد. ==کیان همان بعدازظهر scope را بازتنظیم کرد، دو گزینه را همراه با هزینه‌هایشان مطرح کرد و صبح روز بعد تاریخ جدید را به ذی‌نفعان اطلاع داد.==\n\nروز launch، داشبورد و runbook برای on-call آماده بود و در جلسه‌ای کوتاه، تغییرات را برای تیم پشتیبانی توضیح داد. پروژه بدون دردسر پیش رفت و هدف همین بود.")
      }
    },

    L5: {
      signals: [
        L("Your team asks what next quarter's technical priorities should be, and acts on the answer.", "تیم از شما می‌پرسد اولویت‌های فنی فصل بعد چه باشد و طبق جوابتان عمل می‌کند."),
        L("A vague ask became a scoped, staged plan that other people executed.", "یک درخواست مبهم را به برنامه‌ای با scope و مراحل روشن تبدیل کرده‌اید که دیگران آن را اجرا کرده‌اند."),
        L("You fixed a class of problems, not one instance of it.", "یک دسته از مشکلات را حل کرده‌اید، نه فقط یک نمونه را."),
        L("Stakeholders come to you directly, before they escalate.", "ذی‌نفعان مستقیما سراغ شما می‌آیند، پیش از آن‌که escalate کنند.")
      ],
      traps: [
        L("Being the best coder instead of the multiplier for 2–3 others, so contribution stays at L4.", "بهترین کدنویس ماندن، به‌جای افزایش توان دو یا سه همکار دیگر. در نتیجه مشارکت شما در حد L4 می‌ماند."),
        L("Over-building: an elaborate solution to a medium problem. The ladder prizes the simple one.", "پیچیده ساختن بی‌دلیل راه‌حل برای مساله‌ای با پیچیدگی متوسط. نردبان، راه‌حل ساده را ترجیح می‌دهد."),
        L("Waiting for a mandate before defining scope.", "منتظر مجوز ماندن پیش از مشخص کردن scope."),
        L("Depth without an inner PM: the right solution to the wrong problem.", "تخصص عمیق بدون «PM درون»: راه‌حل درست برای مساله‌ی اشتباه.")
      ],
      story: {
        title: L("Dara and “make search better”", "دارا و «جست‌وجو را بهتر کن»"),
        body: L(
          "The product manager's request was one line: \"make search better.\" Dara spent two weeks not coding. ==She sat with an analyst, split \"better\" into zero-result rate, click-through and latency, and found that 9% of queries returned nothing.==\n\nShe wrote up three options with costs and risks and recommended fixing zero-results first: cheap, visible, measurable. ==Then she cut a two-quarter plan into three workstreams, handed two of them to Kian and Mina with clear outcomes, and set a weekly metric review with the PM.==\n\nZero-results fell from 9% to 4%. Months later other teams' search features were reusing her query logging, ==because she had made it a shared component instead of a one-off.==",
          "درخواست مدیر محصول یک جمله بود: «جست‌وجو را بهتر کن.» دارا دو هفته کد ننوشت. ==با تحلیل‌گر، «بهتر شدن» را به نرخ جست‌وجوی بدون نتیجه، click-through و latency ترجمه کرد و فهمید ۹٪ جست‌وجوها نتیجه‌ای ندارند.==\n\nسه گزینه را با هزینه و ریسکشان نوشت و پیشنهاد کرد ابتدا نرخ جست‌وجوی بدون نتیجه کاهش پیدا کند، چون کم‌هزینه و قابل‌اندازه‌گیری بود و اثرش دیده می‌شد. ==سپس برنامه‌ی دو فصلی را به سه جریان کاری تقسیم کرد، دو بخش را با نتیجه‌ی مورد انتظار روشن به کیان و مینا سپرد و مرور هفتگی شاخص‌ها را با مدیر محصول هماهنگ کرد.==\n\nنرخ جست‌وجوی بدون نتیجه از ۹٪ به ۴٪ رسید. ماه‌ها بعد، قابلیت‌های جست‌وجوی تیم‌های دیگر هم از سازوکار ثبت لاگ او استفاده می‌کردند، ==چون آن را به یک مولفه‌ی مشترک تبدیل کرده بود، نه صرفا راه‌حلی برای یک پروژه.==")
      }
    },

    L6: {
      signals: [
        L("Teams outside yours change their plans because of a document you wrote.", "تیم‌هایی بیرون از تیم شما به‌خاطر سندی که نوشته‌اید برنامه‌شان را عوض می‌کنند."),
        L("Leaders ask you what we should not do.", "رهبران از شما می‌پرسند چه کارهایی را نباید انجام بدهیم."),
        L("You have reshaped or stopped a project for sound reasons, and people agreed.", "با دلایل موجه، مسیر پروژه‌ای را تغییر داده یا آن را متوقف کرده‌اید و موافقت دیگران را هم به دست آورده‌اید."),
        L("Your best work shows up in other people's output.", "بهترین کار شما در خروجی دیگران دیده می‌شود.")
      ],
      traps: [
        L("Staying hands-on in one comfortable area, so scope never leaves L5.", "ماندن در حوزه‌ای آشنا و راحت با کارهای اجرایی مستقیم، طوری که scope از L5 فراتر نمی‌رود."),
        L("Strategy documents with nobody owning the results.", "نوشتن استراتژی بدون تعیین مسئول نتیجه."),
        L("Influence by escalation instead of by clarity and trust.", "نفوذ از راه escalate به‌جای شفافیت و اعتماد."),
        L("Chasing the perfect architecture while ignoring organisational reality.", "دنبال معماری بی‌نقص بودن و نادیده گرفتن واقعیتِ سازمان.")
      ],
      story: {
        title: L("Leila and the cloud bill", "لیلا و هزینه‌ی cloud"),
        body: L(
          "The company goal was blunt: cut cloud cost by 30% without hurting reliability. Nobody knew how. Leila spent three weeks listening to finance, SRE and three product orgs before writing anything.\n\n==Seventy percent of the spend traced back to four patterns.== She wrote a five-page strategy: three bets, what we will not do, an owner and a metric for each. ==Two directors committed engineers because the document made the trade-offs explicit and showed what they'd get back.==\n\nA year later cost was down 27%, and a cost estimate had become part of every design review. ==The change outlived the project because she built the habit, not only the savings.==",
          "هدف شرکت روشن بود: ۳۰٪ کاهش هزینه‌ی cloud بدون آسیب به پایداری. هنوز کسی راه‌حل را نمی‌دانست. لیلا پیش از نوشتن برنامه، سه هفته دیدگاه‌های مالی، SRE و سه واحد محصولی را شنید.\n\n==هفتاد درصد هزینه از چهار الگو ناشی می‌شد.== استراتژی‌ای پنج‌صفحه‌ای نوشت: سه گزینه‌ی سرمایه‌گذاری، کارهایی که انجام نمی‌دهیم و مسئول و شاخص هر گزینه. ==دو مدیر نیروی مهندسی اختصاص دادند، چون سند، trade-offها و نتیجه‌ی مورد انتظار در برابر این سرمایه‌گذاری را روشن می‌کرد.==\n\nیک سال بعد، هزینه ۲۷٪ کاهش یافته بود و برآورد هزینه به بخشی از هر design review تبدیل شده بود. ==اثر تغییر پس از پایان پروژه هم ادامه یافت، چون لیلا یک عادت کاری ایجاد کرده بود، نه صرفا یک صرفه‌جویی مقطعی.==")
      }
    },

    L7: {
      signals: [
        L("Executives involve you in direction-setting before plans harden.", "مدیران ارشد پیش از نهایی شدن برنامه‌ها، شما را در تعیین جهت دخیل می‌کنند."),
        L("People from different orgs trust your read of a dispute, even when it goes against them.", "آدم‌ها از سازمان‌های مختلف به قضاوت شما در یک اختلاف اعتماد دارند، حتی وقتی به ضررشان باشد."),
        L("A capability exists (a platform, a standard, a practice) that would not exist without you.", "توانمندی‌ای (پلتفرم، استاندارد، رویه) وجود دارد که بدون شما وجود نداشت."),
        L("The systems you look after are safe in other hands because you built the people and the practices, not just the code.", "سیستم‌های تحت مسئولیت شما در دست دیگران هم ایمن می‌مانند، چون علاوه بر بهبود کد، افراد را توانمند و رویه‌ها را تقویت کرده‌اید.")
      ],
      traps: [
        L("Becoming the reviewer of everything: authority needs leverage, not a queue.", "review کردن همه‌ی کارها و تبدیل شدن به گلوگاه. مرجعیت باید توان دیگران را افزایش دهد، نه صف انتظار بسازد."),
        L("Relying on personal heroics for sensitive systems instead of building successors.", "تکیه بر قهرمان‌بازی فردی برای سیستم‌های حساس، به‌جای تربیت جانشین."),
        L("Strategy detached from the people who must carry it out.", "استراتژیِ جدا از آدم‌هایی که باید اجرایش کنند.")
      ],
      story: {
        title: L("Sina and the two pipelines", "سینا و دو pipeline"),
        body: L(
          "Two organisations were building their own event pipelines, and each leader was sure the other was wrong. Sina sat with both teams and wrote each side's constraints down so plainly that ==each team read them and said, \"yes, that's our position.\"==\n\nHer proposal belonged to neither side: a shared core with two thin adapters. ==She got both VPs to a decision in a single meeting, because by then neither felt overruled.== Over two years three duplicate systems were retired and incident rates on the platform fell by half.\n\nHer calendar changed more than her code did: ==she spent her time making sure the next decision of that kind wouldn't need her.==",
          "دو واحد سازمانی هرکدام pipeline رویداد خودشان را می‌ساختند و رهبران هر دو مطمئن بودند طرف مقابل اشتباه می‌کند. سینا با هر دو تیم گفتگو کرد و محدودیت‌های هر طرف را چنان روشن نوشت که ==هر تیم پس از خواندن گفت: «بله، دیدگاه ما همین است.»==\n\nراه‌حل پیشنهادی‌اش متعلق به هیچ‌یک از دو طرف نبود: یک هسته‌ی مشترک با دو adapter سبک. ==هر دو معاون در یک جلسه به تصمیم مشترک رسیدند، چون هیچ‌کدام احساس نمی‌کرد دیدگاهش نادیده گرفته شده است.== طی دو سال، سه سیستم تکراری کنار گذاشته شد و نرخ incident پلتفرم نصف شد.\n\nبیش از آن‌که کد سینا تغییر کند، شیوه‌ی وقت گذاشتن او تغییر کرده بود: ==تلاش کرد برای تصمیم مشابه بعدی، دیگر به حضور خودش نیازی نباشد.==")
      }
    }
  };

  S.data.levels.forEach(function (lv) {
    var x = X[lv.id];
    if (x) { lv.signals = x.signals; lv.traps = x.traps; lv.story = x.story; }
  });

  /* ---------------- weekly mix (illustrative emphasis, 0–4) ---------------- */
  S.data.weekRows = [
    { id: "code", name: L("Hands-on coding", "کدنویسی مستقیم"), v: [4, 4, 3, 3, 2, 1] },
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
             "پذیرفتن مسئولیت‌هایی فراتر از کار مستقیم برای بهتر کردن محیط شرکت: تولید محتوای آموزشی، جلسات اشتراک دانش، گروه‌های مطالعه، جذب و مصاحبه، بهبود فرایندها و رویدادهای تیمی."),
      by: {
        L2: L("You join study groups, ask questions in public channels, and note the gaps you hit in onboarding docs.", "در گروه‌های مطالعه شرکت می‌کنید، سوال‌هایتان را در کانال‌های عمومی می‌پرسید و ایرادهای مستندات onboarding را که به آن‌ها برمی‌خورید یادداشت می‌کنید."),
        L3: L("You share what you learn: a short demo, a docs fix, an answer in a public channel. You shadow an interview.", "آنچه یاد می‌گیرید را به اشتراک می‌گذارید: یک دموی کوتاه، اصلاحی در مستندات، یک پاسخ در کانال عمومی. در یک مصاحبه به‌عنوان ناظر (shadow) حضور پیدا می‌کنید."),
        L4: L("You run a knowledge-sharing session, interview candidates, and improve a team process that others then adopt.", "یک جلسه‌ی اشتراک دانش برگزار می‌کنید، از متقاضیان مصاحبه می‌گیرید و یک فرایند تیمی را بهبود می‌دهید که بقیه هم می‌پذیرند."),
        L5: L("You help set the hiring bar for your area, write material that raises the whole team's level, and fix engineering processes that slow people down.", "در تعیین استاندارد جذب برای حوزه‌تان نقش دارید، محتوایی می‌نویسید که سطح کل تیم را بالا می‌برد و فرایندهای مهندسی‌ای را که مانع‌اند اصلاح می‌کنید."),
        L6: L("You build practices that reach the organisation: communities, standards, talks. You grow other senior people, not only juniors.", "رویه‌هایی برای کل سازمان ایجاد می‌کنید، مثل انجمن‌ها، استانداردها و سخنرانی‌ها. علاوه بر تازه‌کارها، به رشد همکاران ارشد هم کمک می‌کنید."),
        L7: L("You shape the engineering culture itself: the bar, the rituals, and who gets developed and trusted.", "فرهنگ مهندسی را شکل می‌دهید: استانداردها، روال‌های مشترک و این‌که به چه کسانی فرصت رشد و اعتماد داده می‌شود.")
      } },
    { id: "teamwork", icon: "users",
      name: L("Teamwork", "کار تیمی"),
      def: L("Being a reliable teammate: quality work on time, no excuses, accountability. Communicating well, giving and receiving feedback, upholding humility, respect, trust and transparency, staying open to critique, and keeping inclusion and belonging alive.",
             "هم‌تیمیِ قابل‌اعتماد بودن: کار باکیفیت و به‌موقع، بدون بهانه، با پذیرش مسئولیت. ارتباط موثر، دادن و گرفتن بازخورد، پاس داشتنِ فروتنی، احترام، اعتماد و شفافیت، پذیرا بودن نسبت به نقد و زنده نگه داشتن فراگیری و حس تعلق."),
      by: {
        L2: L("You deliver on time, own your mistakes, skip the excuses, and ask for feedback early.", "سر وقت تحویل می‌دهید، اشتباهاتتان را می‌پذیرید، بهانه نمی‌آورید و زود بازخورد می‌خواهید."),
        L3: L("You give feedback kindly and take it openly. You offer help before anyone asks.", "بازخورد را با احترام می‌دهید و بدون حالت دفاعی می‌پذیرید. پیش از درخواست دیگران، پیشنهاد کمک می‌دهید."),
        L4: L("You model humility, respect, trust and transparency under pressure, and step in when you see non-inclusive behaviour.", "در شرایط فشار هم فروتنی، احترام، اعتماد و شفافیت را نشان می‌دهید و وقتی رفتار غیرفراگیر می‌بینید وارد می‌شوید."),
        L5: L("You make candid conversations productive and make it safe to disagree, including with you.", "گفتگوهای صریح را به نتیجه می‌رسانید و محیطی فراهم می‌کنید که مخالفت، حتی با خودتان، امن باشد."),
        L6: L("You are a role model whose way of working measurably speeds up the people around you.", "الگویی هستید که شیوه‌ی کارتان به‌طور ملموس سرعت اطرافیان را بالا می‌برد."),
        L7: L("You build collaboration across functions and remove friction at the boundaries between teams.", "همکاری بین بخش‌های مختلف را تقویت و موانع همکاری در مرز تیم‌ها را برطرف می‌کنید.")
      } },
    { id: "practices", icon: "gear",
      name: L("Engineering practices", "رویه‌های مهندسی"),
      def: L("Clean, documented, testable code that follows the organisation's standards; real participation in code review; and steady improvement of documentation, processes, code health, maintainability and scalability.",
             "کد تمیز، مستند و تست‌پذیر مطابق استانداردهای سازمان، مشارکت موثر در code review و بهبود مستمر مستندات، فرایندها، سلامت کد، قابلیت نگهداری و مقیاس‌پذیری."),
      by: {
        L2: L("Clean, documented code that follows the team's standards. You take review comments seriously.", "کد تمیز و مستند مطابق استانداردهای تیم. کامنت‌های review را جدی می‌گیرید."),
        L3: L("Testable code with tests for your changes. Your comments on others' code are useful and kind.", "کد تست‌پذیر با تست برای تغییرهایتان. کامنت‌هایی که روی کد دیگران می‌گذارید مفید و محترمانه‌اند."),
        L4: L("You make sure the quality processes exist (tests, docs, monitoring) and close the gaps others skip.", "از وجود فرایندهای کیفیت مثل تست، مستندسازی و monitoring مطمئن می‌شوید و کاستی‌هایی را که دیگران نادیده می‌گیرند برطرف می‌کنید."),
        L5: L("You improve the team's testing and monitoring processes and keep code health from eroding.", "فرایندهای تست و monitoring تیم را بهبود می‌دهید و نمی‌گذارید سلامت کد فرسوده شود."),
        L6: L("You raise quality attributes (reliability, security, performance) across systems and prevent whole classes of problems.", "اتکاپذیری، امنیت و کارایی سیستم‌ها را افزایش می‌دهید و از بروز مجموعه‌ای از مشکلات هم‌ریشه پیشگیری می‌کنید."),
        L7: L("You set the technical standards others follow, and the health of critical systems is your standing responsibility.", "استانداردهای فنی‌ای را تعیین می‌کنید که دیگران دنبال می‌کنند و سلامت سیستم‌های حیاتی مسئولیت دائمی شماست.")
      } }
  ];
})();

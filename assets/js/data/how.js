/* Data for "How leveling works": lens progressions, matrix, end-to-end checklists, translator,
   vocabulary, promotion pipeline, pace bands, non-evidence rewrites.
   Company facts are paraphrased from public sources; confidence is shown in the UI. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;
  var H = (S.data.how = {});

  /* ---- what a level is: the four layers ---- */
  H.layers = [
    { id: "role", icon: "flag",
      name: L("Role", "نقش"),
      q: L("What are you doing right now?", "الان چه کاری می‌کنید؟"),
      text: L("Tech lead of a project, on-call this week, the person who knows billing. Roles come and go and are not levels. A tech lead, for example, is an informal, per-project role.",
              "tech lead یک پروژه، on-call این هفته، کسی که billing را می‌شناسد. نقش‌ها می‌آیند و می‌روند و سطح نیستند. مثلا tech lead یک نقش غیررسمی و پروژه‌محور است."),
      eg: L("“Nima is tech lead for the search rewrite.”", "«نیما tech lead بازنویسی جست‌وجو است.»") },
    { id: "level", icon: "stairs", core: true,
      name: L("Level", "سطح"),
      q: L("What are you trusted to own?", "مالکیت چه چیزی به شما سپرده می‌شود؟"),
      text: L("A contract about scope: how big a problem, how much ambiguity, how many people you move, and what changed because of it. Judged on demonstrated work, over time.",
              "یک قرارداد درباره‌ی scope: چقدر مساله‌ی بزرگ، چقدر ابهام، چند نفر را جلو می‌برید و به‌خاطرش چه چیزی عوض شد. بر اساس کار نشان‌داده‌شده و در طول زمان سنجیده می‌شود."),
      eg: L("“Nima operates at L4.”", "«نیما در سطح L4 عمل می‌کند.»") },
    { id: "title", icon: "pen",
      name: L("Title", "عنوان"),
      q: L("What does the outside world see?", "دنیای بیرون چه چیزی می‌بیند؟"),
      text: L("A label on a profile or a business card. It varies between companies, can be inflated at small ones, and some employers avoid titles on purpose. It travels badly.",
              "برچسبی روی پروفایل یا کارت ویزیت. بین شرکت‌ها فرق می‌کند، در شرکت‌های کوچک می‌تواند باد شده باشد و بعضی کارفرماها عمدا عنوان نمی‌دهند. خوب سفر نمی‌کند."),
      eg: L("“Senior Software Engineer” here, “Software Engineer” on another company's page for the same level.", "«Senior Software Engineer» اینجا، «Software Engineer» در شرکتی دیگر برای همان سطح.") },
    { id: "band", icon: "scale",
      name: L("Pay band", "بازه‌ی حقوق"),
      q: L("What follows from the level?", "چه چیزی از سطح نتیجه می‌شود؟"),
      text: L("Pay ranges and equity grants are tied to level, not to title or effort. At large employers the gap between adjacent levels is large, which is why level matters more than a small salary negotiation.",
              "بازه‌های حقوق و سهام به سطح گره خورده‌اند، نه به عنوان یا تلاش. در کارفرماهای بزرگ فاصله‌ی دو سطح مجاور زیاد است؛ برای همین سطح مهم‌تر از چانه‌زنی کوچک روی حقوق است."),
      eg: L("One level down is roughly 30% less median total pay at several big tech employers.", "یک سطح پایین‌تر در چند شرکت بزرگ فناوری تقریبا ۳۰٪ کمتر از میانه‌ی کل دریافتی است.") }
  ];
  H.notLevel = [
    { t: L("**Not tenure.** Years correlate loosely with level; evidence decides.", "**تنها سابقه نیست.** سال‌ها فقط تا حدی با سطح همبسته‌اند؛ مدرک تعیین‌کننده است.") },
    { t: L("**Not your rating.** A rating says how well you did against your current level. Promotion asks whether your scope already matches the next one.", "**امتیاز ارزیابی هم نیست.** امتیاز می‌گوید در سطح فعلی‌تان چقدر خوب بوده‌اید. ارتقا می‌پرسد scope شما از قبل با سطح بعد جور هست یا نه.") },
    { t: L("**Not a ranking of people.** It is a description of the work you are trusted with, which can be right for years.", "**رتبه‌بندی آدم‌ها نیست.** توصیفی است از کاری که به شما سپرده می‌شود، که می‌تواند سال‌ها درست باشد.") }
  ];

  /* ---- lens progressions: one line per level ---- */
  H.progress = {
    contribution: {
      L2: L("Small tasks, with a guide", "taskهای کوچک، با یک راهنما"),
      L3: L("Tasks delivered with quality; you pull your own next piece", "taskها با کیفیت تحویل می‌شوند؛ کار بعدی را خودتان برمی‌دارید"),
      L4: L("Multi-month work owned end to end, minimal supervision", "کار چندماهه را end-to-end own می‌کنید، با حداقل سرپرستی"),
      L5: L("An area owned; direction for 2–3 engineers; you originate ideas", "یک حوزه را own می‌کنید؛ برای ۲ تا ۳ مهندس جهت می‌دهید؛ ایده می‌سازید"),
      L6: L("Strategy for 10+ people, a very hard problem or 1+ year, and its results", "استراتژی برای ۱۰+ نفر، یک مساله‌ی بسیار سخت یا ۱+ سال، و ثمردهی آن"),
      L7: L("Accountable for a strategic technical area of high importance", "پاسخگوی یک حوزه‌ی فنی استراتژیک با اهمیت بالا")
    },
    challenge: {
      L2: L("Familiar, predefined problems with the team's standard tools", "مساله‌های آشنا و از پیش تعریف‌شده با ابزارهای استاندارد تیم"),
      L3: L("Choose among known options; escalate on time", "انتخاب از میان گزینه‌های شناخته‌شده؛ escalate به‌موقع"),
      L4: L("Non-trivial problems; weigh options; find the next problems yourself", "مساله‌های نابدیهی؛ سنجیدن گزینه‌ها؛ پیدا کردن مساله‌های بعدی توسط خودتان"),
      L5: L("Ambiguity with no best answer; improve vs rebuild; fix recurring problems", "ابهام بدون بهترین پاسخ؛ بهبود یا بازسازی؛ رفع مشکل‌های تکرارشونده"),
      L6: L("Inherently ambiguous problems; decide which problems to solve", "مساله‌های ذاتا مبهم؛ تعیین این‌که چه مساله‌هایی حل شود"),
      L7: L("Problems across many systems or sub-organisations; name the large-scale ones", "مساله‌هایی میان سیستم‌ها یا زیرسازمان‌های متعدد؛ نام‌بردن مساله‌های کلان")
    },
    influence: {
      L2: L("Working relationships inside the team", "ارتباط کاری درون تیم"),
      L3: L("A reliable teammate; other teams with a senior's help", "هم‌تیمی قابل‌اعتماد؛ تیم‌های دیگر با کمک یک همکار ارشدتر"),
      L4: L("Coordinate stakeholders and dependencies; mentor; act on conflict", "هماهنگی ذی‌نفعان و وابستگی‌ها؛ mentor کردن؛ اقدام برای تعارض"),
      L5: L("Direction and alignment; the stakeholders' point of contact; trust", "جهت‌دهی و همسوسازی؛ نقطه‌ی تماس ذی‌نفعان؛ اعتماد"),
      L6: L("Lead across groups with competing priorities; role model", "رهبری میان گروه‌هایی با اولویت‌های رقیب؛ الگو بودن"),
      L7: L("Trusted, impartial arbiter; shapes senior leadership's decisions", "حَکَم معتمد و بی‌طرف؛ اثرگذار بر تصمیم‌های رهبری ارشد")
    },
    expertise: {
      L2: L("A basic understanding that grows weekly", "فهم پایه‌ای که هر هفته رشد می‌کند"),
      L3: L("Solid basics of the area, the product and the business need", "مبانی محکم حوزه، محصول و نیاز کسب‌وکار"),
      L4: L("Command of the system's architecture plus one skill beyond coding", "تسلط بر معماری سیستم به‌علاوه‌ی یک مهارت فراتر از کدنویسی"),
      L5: L("Depth or breadth; an “inner PM”; several skills beyond coding", "عمق یا عرض؛ یک «PM درونی»؛ چند مهارت فراتر از کدنویسی"),
      L6: L("Depth and breadth; command of the whole product area", "هم عمق و هم عرض؛ تسلط بر کل حوزه‌ی محصولی"),
      L7: L("The de facto authority on a major system", "مرجع عملی (de facto) یک سیستم عمده")
    },
    impact: {
      L2: L("On the project: tasks done well, pace improving", "روی پروژه: taskهای خوب‌انجام‌شده، سرعتِ رو به بهبود"),
      L3: L("On the project: on time, few defects, no rework for others", "روی پروژه: سر وقت، با ایراد کم، بدون دوباره‌کاری برای دیگران"),
      L4: L("Whole projects delivered, shipped and stable", "پروژه‌های کامل تحویل‌شده، منتشرشده و پایدار"),
      L5: L("The work itself succeeds: launched, adopted, tangible for the organisation", "خودِ کار موفق می‌شود: launch، پذیرش، اثر ملموس برای سازمان"),
      L6: L("The strategy you set produces results beyond one team", "استراتژی‌ای که تعیین کردید فراتر از یک تیم نتیجه می‌دهد"),
      L7: L("The organisation can do something it could not before", "سازمان کاری را می‌تواند انجام دهد که قبلا نمی‌توانست")
    }
  };

  /* ---- challenge matrix: problem vs solution ---- */
  H.matrix = {
    axisX: L("Complexity of the solution", "پیچیدگی راه‌حل"),
    axisY: L("Complexity of the problem", "پیچیدگی مساله"),
    cells: {
      hardSimple: { tone: "good", name: L("The senior move", "حرکتِ مهندس ارشد"),
        text: L("Customers are occasionally charged twice. After two days of tracing, the cause is a missing idempotency key. The fix is one header and a unique constraint.",
                "گاهی مشتری‌ها دو بار پول می‌دهند. بعد از دو روز ردیابی معلوم می‌شود علت نبودنِ یک idempotency key است. راه‌حل یک header و یک unique constraint است.") },
      hardHard: { tone: "info", name: L("Necessary, but check it", "لازم است، ولی وارسی کنید"),
        text: L("Moving a live ledger across regions with no downtime. The solution is complicated because the problem is. Stay honest about what is essential.",
                "انتقال یک دفتر کل زنده میان چند region بدون downtime. راه‌حل پیچیده است چون مساله پیچیده است. صادقانه ببینید چه چیزی ضروری است.") },
      easySimple: { tone: "", name: L("Good hygiene", "نظافت مهندسی"),
        text: L("Add validation to a form field. Rename a confusing column. Valuable in volume, not a sign of altitude.",
                "اضافه کردن validation به یک فیلد فرم. تغییر نام یک ستون گیج‌کننده. در حجم بالا ارزشمند است، ولی نشانه‌ی ارتفاع نیست.") },
      easyHard: { tone: "warn", name: L("The trap: over-building", "تله: بیش‌ازحد ساختن"),
        text: L("A plugin framework with a config DSL for a one-off CSV export. It looks impressive and is expensive to maintain.",
                "یک framework پلاگینی با DSL پیکربندی برای یک export یک‌باره‌ی CSV. چشمگیر به نظر می‌رسد و نگهداری‌اش گران است.") }
    },
    note: L("The ladder measures the complexity of the problem you solved. A complex solution is not evidence of a complex problem, and a simple solution is preferred.",
            "نردبان پیچیدگیِ مساله‌ای را که حل کرده‌اید می‌سنجد. راه‌حل پیچیده نشانه‌ی مساله‌ی پیچیده نیست و راه‌حل ساده ارجح است.")
  };

  /* ---- end-to-end: the hidden half of the work ---- */
  H.e2e = {
    intro: L("Pick a kind of work, then tick what exists. The code is usually the smaller half of “done”.", "یک نوع کار را انتخاب کنید و آنچه وجود دارد را تیک بزنید. کد معمولا نیمه‌ی کوچک‌تر «تمام‌شدن» است."),
    kinds: [
      { id: "api", name: L("Launch a new API", "راه‌اندازی یک API جدید"), items: [
        { core: true, t: L("Code merged and deployed", "کد merge و deploy شده") },
        { t: L("Automated tests: unit and integration", "تست خودکار: unit و integration") },
        { t: L("Reference docs and examples for consumers", "مستندات مرجع و مثال برای مصرف‌کننده‌ها") },
        { t: L("Dashboards for latency, errors and traffic", "داشبوردهای latency، خطا و ترافیک") },
        { t: L("Alerts with an owner and sensible thresholds", "alert با صاحب و آستانه‌های معقول") },
        { t: L("Runbook for whoever is on call", "runbook برای کسی که on-call است") },
        { t: L("Rate limits and abuse protection reviewed", "rate limit و محافظت در برابر سوءاستفاده بررسی شده") },
        { t: L("Rollout plan with a tested rollback", "برنامه‌ی rollout همراه با rollback آزموده‌شده") },
        { t: L("Consumers told, and helped to adopt it", "مصرف‌کننده‌ها مطلع شده‌اند و در پذیرش کمک گرفته‌اند") },
        { t: L("Support team briefed", "تیم پشتیبانی توجیه شده") }
      ] },
      { id: "migration", name: L("Migrate a data store", "مهاجرت یک data store"), items: [
        { core: true, t: L("Migration code and scripts merged", "کد و اسکریپت‌های مهاجرت merge شده") },
        { t: L("Backfill verified with counts and checksums", "backfill با شمارش و checksum راستی‌آزمایی شده") },
        { t: L("Shadow reads or dual writes ran for a while", "مدتی shadow read یا dual write اجرا شده") },
        { t: L("Rollback rehearsed, not just written", "rollback تمرین شده، نه فقط نوشته شده") },
        { t: L("Dashboards compare old and new", "داشبوردها قدیم و جدید را مقایسه می‌کنند") },
        { t: L("Downstream readers (reports, ETL) found and updated", "مصرف‌کننده‌های پایین‌دست (گزارش‌ها، ETL) پیدا و به‌روز شده‌اند") },
        { t: L("Cutover runbook and communication plan", "runbook برای cutover و برنامه‌ی اطلاع‌رسانی") },
        { t: L("Old store switched off and its cost removed", "store قدیمی خاموش و هزینه‌اش حذف شده") },
        { t: L("Docs updated for the new reality", "مستندات برای وضعیت جدید به‌روز شده") }
      ] },
      { id: "feature", name: L("Ship a feature to customers", "انتشار یک قابلیت برای مشتری‌ها"), items: [
        { core: true, t: L("Feature code merged", "کد قابلیت merge شده") },
        { t: L("Tests include the awkward edge cases", "تست‌ها شامل edge caseهای دردسرساز هم هستند") },
        { t: L("Feature flag and gradual rollout", "feature flag و rollout تدریجی") },
        { t: L("Success metric defined, events instrumented", "شاخص موفقیت تعریف و eventها پیاده‌سازی شده") },
        { t: L("Alerts for the likely failure modes", "alert برای حالت‌های خرابیِ محتمل") },
        { t: L("Support guide and known issues written", "راهنمای پشتیبانی و مشکلات شناخته‌شده نوشته شده") },
        { t: L("Docs or release notes published", "مستندات یا release notes منتشر شده") },
        { t: L("Accessibility and localisation checked", "دسترس‌پذیری و بومی‌سازی بررسی شده") },
        { t: L("Result reviewed two to four weeks after launch", "نتیجه دو تا چهار هفته پس از launch بازبینی شده") }
      ] }
    ],
    verdicts: [
      { max: 0.35, t: L("Merged is not done. Most of what makes work viable is still missing.", "merge شدن یعنی تمام‌نشدن. بیشترِ آنچه کار را بقاپذیر می‌کند هنوز نیست.") },
      { max: 0.7, t: L("Getting there. Someone will still hit a surprise you could have removed.", "در راه است. هنوز یک نفر با غافلگیری‌ای روبه‌رو می‌شود که می‌شد برش داشت.") },
      { max: 0.99, t: L("Nearly end to end. Find the last gap before someone else does.", "تقریبا end-to-end. آخرین شکاف را پیش از دیگران پیدا کنید.") },
      { max: 2, t: L("End to end. This is what owning looks like.", "end-to-end. این شکلِ own کردن است.") }
    ]
  };

  /* ---- translator: bands across employers (indicative) ---- */
  H.translator = {
    companies: [
      { id: "google", name: "Google", conf: "M" },
      { id: "meta", name: "Meta", conf: "M" },
      { id: "amazon", name: "Amazon", conf: "M" },
      { id: "microsoft", name: "Microsoft", conf: "L" },
      { id: "apple", name: "Apple", conf: "L" },
      { id: "netflix", name: "Netflix", conf: "M" },
      { id: "zalando", name: "Zalando", conf: "L" }
    ],
    // one row per reference level; each cell is a plain string (codes and titles stay Latin)
    rows: {
      L2: { google: "L3", meta: "E3", amazon: "L4 · SDE I", microsoft: "59–60", apple: "ICT2", netflix: "E3", zalando: "C4" },
      L3: { google: "L3–L4", meta: "E3–E4", amazon: "L4–L5", microsoft: "60–61", apple: "ICT2–3", netflix: "E3–E4", zalando: "C4–C5" },
      L4: { google: "L4 · SWE III", meta: "E4", amazon: "L5 · SDE II", microsoft: "61–62 · SDE II", apple: "ICT3", netflix: "E4", zalando: "C5–C6" },
      L5: { google: "L5 · Senior", meta: "E5 · Senior", amazon: "L6 · Senior SDE", microsoft: "63–64 · Senior", apple: "ICT4 · Senior", netflix: "E5 · Senior", zalando: "C7 · Senior" },
      L6: { google: "L6 · Staff", meta: "E6 · Staff", amazon: "L7 · Principal", microsoft: "65–66 · Principal", apple: "ICT5", netflix: "E6 · Staff", zalando: "C8 (?)" },
      L7: { google: "L7–L8 · Sr Staff / Principal", meta: "E7–E8", amazon: "L8+ · Sr Principal", microsoft: "67+ · Partner", apple: "ICT6+", netflix: "E7 · Principal", zalando: "SC1+ (?)" }
    },
    cautions: [
      L("**Bands, not equivalences.** The cells say “roughly this band”. Amazon's L5 is not Google's L5: the Pragmatic Engineer maps Amazon L5, L6 and L7 to Google/Meta L4, L5 and L6–7.", "**بازه‌اند، نه برابری.** خانه‌ها یعنی «تقریبا این بازه». L5 در Amazon با L5 در Google یکی نیست: Pragmatic Engineer سطح‌های L5، L6 و L7 در Amazon را معادل L4، L5 و L6–7 در Google/Meta می‌داند."),
      L("**Names change.** Meta's “E” and “IC” labels are used interchangeably. Netflix introduced engineering levels only in 2022 (before that, one title for ~25 years). Microsoft numbers go up two at a time per title.", "**نام‌ها عوض می‌شوند.** برچسب‌های «E» و «IC» در Meta به جای هم به کار می‌روند. Netflix سطح‌های مهندسی را فقط در ۲۰۲۲ معرفی کرد (پیش‌تر حدود ۲۵ سال یک عنوان بود). شماره‌ی Microsoft برای هر عنوان دو تا دو تا بالا می‌رود."),
      L("**Staff is not portable.** One ladder means a single team's domain, another several teams, another a whole domain. Compare scope, not the word “Staff”.", "**Staff قابل‌حمل نیست.** در یک نردبان یعنی حوزه‌ی یک تیم، در دیگری چند تیم، در دیگری یک حوزه‌ی کامل. scope را مقایسه کنید، نه کلمه‌ی «Staff» را."),
      L("**Unverified cells are marked (?)**. Apple publishes no ladder (codes come from pay submissions) and Zalando's grades above Senior are unconfirmed.", "**خانه‌های تاییدنشده با (؟) مشخص‌اند.** Apple نردبانی منتشر نکرده (کدها از ثبت‌های حقوقی می‌آیند) و درجه‌های Zalando بالاتر از Senior تایید نشده‌اند.")
    ],
    source: L("Codes: levels.fyi and The Pragmatic Engineer (crowd-sourced and secondary; read through search summaries, October 2026). Band mapping is this guide's synthesis, not any company's published definition.",
              "کدها: levels.fyi و The Pragmatic Engineer (جمع‌سپاری‌شده و دست‌دوم؛ از طریق خلاصه‌ی جست‌وجو خوانده شده، اکتبر ۲۰۲۶). نگاشتِ بازه‌ها ترکیبی از همین راهنماست، نه تعریف منتشرشده‌ی هیچ شرکتی.")
  };

  /* ---- vocabulary: how employers name what they judge ---- */
  H.vocab = [
    { who: "Amazon", conf: "M",
      names: L("16 Leadership Principles, plus promotion write-ups organised by scope and influence, ambiguity, technical complexity, execution, impact (the five scopes: reported)", "۱۶ اصل رهبری، به‌علاوه‌ی نوشته‌های ارتقا بر مبنای scope و نفوذ، ابهام، پیچیدگی فنی، اجرا و اثرگذاری (پنج scope: گزارش‌شده)"),
      note: L("A value system doubles as the evaluation language.", "یک نظام ارزشی هم‌زمان زبان ارزیابی است.") },
    { who: "Meta", conf: "M",
      names: L("Level definitions combine scope with direction, people and engineering excellence; reviews use a rating scale from “meets some” up to “redefines”", "تعریف سطح‌ها scope را با جهت‌دهی، آدم‌ها و تعالی مهندسی ترکیب می‌کند؛ ارزیابی‌ها از مقیاسی از «برخی انتظارات» تا «بازتعریف» استفاده می‌کنند"),
      note: L("Reportedly no separate promotion packet: the case is made in calibration.", "گزارش شده بسته‌ی ارتقای جدایی وجود ندارد: پرونده در calibration ساخته می‌شود.") },
    { who: "Google", conf: "L",
      names: L("Ratings are named by impact (from “not enough” to “transformative”); the exact rubric wording is not public", "امتیازها بر اساس اثرگذاری نام‌گذاری شده‌اند (از «ناکافی» تا «تحول‌آفرین»)؛ عبارت دقیق rubric عمومی نیست"),
      note: L("The L3–L10 numbering became an industry template.", "شماره‌گذاری L3–L10 قالب مشترک صنعت شد.") },
    { who: "Microsoft", conf: "L",
      names: L("Growth mindset and Model-Coach-Care as culture; reviews reportedly credit helping others succeed, not only your own results", "growth mindset و Model-Coach-Care به‌عنوان فرهنگ؛ گزارش شده ارزیابی‌ها کمک به موفقیت دیگران را هم می‌پذیرند، نه فقط نتیجه‌ی خودتان را"),
      note: L("Approval escalates with level (manager, skip-level, VP), as reported.", "تایید با بالا رفتن سطح بالاتر می‌رود (مدیر، مدیرِ مدیر، VP)؛ گزارش‌شده.") },
    { who: "Netflix", conf: "M",
      names: L("The “keeper test” and the “informed captain” idea; no performance-improvement plans; engineering levels exist only since 2022", "«آزمون نگه‌داشتن» و ایده‌ی «ناخدای آگاه»؛ بدون PIP؛ سطح‌های مهندسی فقط از ۲۰۲۲"),
      note: L("Judgement and context over process, with levels bolted on later.", "قضاوت و context به‌جای فرایند، با سطح‌هایی که دیرتر اضافه شدند.") },
    { who: "Zalando", conf: "H",
      names: L("A role-expectations document with scope, delivery and impact, and community contributions; engineers and managers rate themselves red/amber/green against the current and next grade", "یک سند انتظارات نقش با scope، delivery و impact، و مشارکت در جامعه؛ مهندس و مدیر خودشان را با رنگ قرمز/زرد/سبز در برابر درجه‌ی فعلی و بعدی ارزیابی می‌کنند"),
      note: L("Unusually transparent about the next-grade conversation.", "درباره‌ی گفتگوی «درجه‌ی بعد» به‌طور غیرمعمول شفاف است.") },
    { who: "Monzo", conf: "H",
      names: L("Impact first, technical skills, behaviours; each level carries a scope label from task to company; “a compass, not a GPS”", "اول اثرگذاری، بعد مهارت‌های فنی، بعد رفتارها؛ هر سطح یک برچسب scope از task تا شرکت دارد؛ «قطب‌نماست، نه GPS»"),
      note: L("Says outright that the framework must never compute a level.", "صریحا می‌گوید چارچوب هرگز نباید سطح را محاسبه کند.") },
    { who: "Dropbox", conf: "M",
      names: L("Four pillars (results, direction, talent, culture) plus role-specific craft; explicitly not a checklist", "چهار ستون (نتایج، جهت، استعداد، فرهنگ) به‌علاوه‌ی craft مخصوص هر نقش؛ صراحتا چک‌لیست نیست"),
      note: L("Promotion recognises someone already operating at the next level.", "ارتقا کسی را تایید می‌کند که از قبل در سطح بعد عمل می‌کند.") }
  ];
  H.vocabNote = L("Same four ideas under different names: results and scope, complexity and ambiguity, people and influence, craft. Impact sits over all of them. This is a synthesis; nobody here publishes the exact mapping.",
                  "همان چهار ایده با نام‌های متفاوت: نتیجه و scope، پیچیدگی و ابهام، آدم‌ها و نفوذ، craft. اثرگذاری روی همه‌ی آن‌ها سایه می‌اندازد. این یک ترکیب است؛ هیچ‌کدام نگاشت دقیق را منتشر نکرده‌اند.");

  /* ---- promotion pipeline ---- */
  H.pipeline = [
    { icon: "pen", name: L("You do the work and write it down", "کار را انجام می‌دهید و می‌نویسید"),
      does: L("Next-level work, with evidence kept as you go: outcomes, who benefited, your role.", "کارِ سطح بعد، با مدرکی که در مسیر نگه می‌دارید: نتیجه‌ها، چه کسی سود برد، نقش شما."),
      risk: L("Great work nobody can quote.", "کار عالی که کسی نمی‌تواند نقلش کند.") },
    { icon: "user", name: L("Your manager builds the case", "مدیرتان پرونده را می‌سازد"),
      does: L("Nominates you (or you self-nominate where allowed) and argues the case against the next level's descriptor.", "شما را نامزد می‌کند (یا اگر مجاز است خودتان) و پرونده را در برابر شرحِ سطح بعد استدلال می‌کند."),
      risk: L("A manager who isn't convinced, or who can't argue it well.", "مدیری که قانع نیست یا نمی‌تواند خوب استدلال کند.") },
    { icon: "users", name: L("Peers and partners add input", "همکاران و شرکا نظر می‌دهند"),
      does: L("Several people (reportedly three to eight, depending on the employer) say what they saw.", "چند نفر (بسته به کارفرما، گزارش شده سه تا هشت نفر) می‌گویند چه دیده‌اند."),
      risk: L("Nobody beyond your team knows your work.", "کسی بیرون از تیمتان کارتان را نمی‌شناسد.") },
    { icon: "scale", name: L("A calibration or committee reads it", "calibration یا کمیته آن را می‌خواند"),
      does: L("Often people who have never worked with you compare written cases against one bar.", "اغلب کسانی که هرگز با شما کار نکرده‌اند پرونده‌های نوشته‌شده را با یک معیار مقایسه می‌کنند."),
      risk: L("A case that is hard to summarise loses to one that is easy to quote.", "پرونده‌ای که خلاصه‌اش سخت است به پرونده‌ی قابل‌نقل می‌بازد.") },
    { icon: "flag", name: L("Decision, then feedback", "تصمیم، بعد بازخورد"),
      does: L("Approved, or “not yet” with reasons. The best next step in both cases is the same: get the reasons in specifics.", "تایید، یا «هنوز نه» با دلیل. در هر دو حالت بهترین قدم بعدی یکی است: دلیل‌ها را دقیق بگیرید."),
      risk: L("Hearing a vague “almost there” and leaving it vague.", "شنیدنِ یک «تقریبا رسیده‌ای»ی مبهم و مبهم رها کردنش.") }
  ];
  H.promoByCo = [
    { who: "Google", conf: "L",
      text: L("Reportedly two promotion windows a year; the manager nominates and a committee approves, working from a written packet with summarised peer feedback.", "گزارش شده سالی دو پنجره‌ی ارتقا وجود دارد؛ مدیر نامزد می‌کند و کمیته بر اساس یک بسته‌ی نوشته‌شده با خلاصه‌ی بازخورد همکاران تایید می‌کند.") },
    { who: "Meta", conf: "L",
      text: L("Reportedly no separate packet: the case is argued in performance calibration (managers plus senior ICs), then approved higher up. Manager advocacy is close to decisive.", "گزارش شده بسته‌ی جدایی وجود ندارد: پرونده در calibration عملکرد (مدیران و IC‌های ارشد) استدلال می‌شود و بعد بالاتر تایید می‌شود. حمایت مدیر تقریبا تعیین‌کننده است.") },
    { who: "Amazon", conf: "L",
      text: L("A written promotion document organised by scope and influence, ambiguity, technical complexity, execution and impact, with several peer inputs (reportedly at least four).", "یک سند ارتقای نوشته‌شده بر مبنای scope و نفوذ، ابهام، پیچیدگی فنی، اجرا و اثرگذاری، با نظر چند همکار (گزارش شده دست‌کم چهار نفر).") },
    { who: "Microsoft", conf: "L",
      text: L("Tied to the review cycle; reportedly approval moves from manager to skip-level to VP as level rises, and “sustained” can mean two cycles or more.", "به چرخه‌ی ارزیابی گره خورده؛ گزارش شده با بالا رفتن سطح تایید از مدیر به مدیرِ مدیر و VP می‌رسد و «پایدار» می‌تواند دو چرخه یا بیشتر باشد.") },
    { who: "Apple", conf: "L",
      text: L("Reportedly annual, alongside the annual review; a manager normally nominates, but a calibration committee can promote without a nomination.", "گزارش شده سالانه و هم‌زمان با ارزیابی سالانه است؛ معمولا مدیر نامزد می‌کند ولی کمیته‌ی calibration بدون نامزدی هم می‌تواند ارتقا بدهد.") },
    { who: "Netflix", conf: "M",
      text: L("No published promotion process; decisions lean on the keeper test and context. After levels arrived in 2022, pay reviews decide whether people above their band wait or advance.", "فرایند ارتقای منتشرشده‌ای وجود ندارد؛ تصمیم‌ها بر آزمون نگه‌داشتن و context تکیه دارند. پس از آمدن سطح‌ها در ۲۰۲۲، ارزیابی حقوق تعیین می‌کند کسانی که بالاتر از بازه‌شان‌اند منتظر بمانند یا ارتقا بگیرند.") },
    { who: "Zalando", conf: "H",
      text: L("Engineers and managers run a red/amber/green self-assessment against current and next-grade expectations; most Principals are promoted from within after stretch assignments.", "مهندس و مدیر یک خودارزیابی قرمز/زرد/سبز در برابر انتظارات درجه‌ی فعلی و بعدی انجام می‌دهند؛ بیشتر Principalها پس از پروژه‌های چالشی از درون ارتقا می‌گیرند.") }
  ];
  H.promoNote = L("Processes change often and differ by organisation. Treat this as orientation and ask your own manager how it works where you are.",
                  "فرایندها زیاد عوض می‌شوند و بین سازمان‌ها فرق دارند. این را جهت‌یابی بدانید و از مدیر خودتان بپرسید در جای شما چطور کار می‌کند.");

  /* ---- pace: indicative experience bands ---- */
  H.pace = {
    // indicative bands, overlapping by design: [from, to, typical]
    bands: { L2: [0, 2, 1], L3: [1, 4, 2.5], L4: [3, 7, 5], L5: [5, 12, 8], L6: [8, 16, 11], L7: [11, 22, 15] },
    scale: { min: 0, max: 22, ticks: [0, 5, 10, 15, 20] },
    note: L("Indicative bands synthesised from self-reported levels.fyi snapshots and public career write-ups for large tech employers (US-centric). They overlap on purpose: shape, not statistic.",
            "بازه‌های نمونه‌وار که از ثبت‌های خودگزارشی levels.fyi و نوشته‌های عمومی درباره‌ی مسیر شغلی در کارفرماهای بزرگ فناوری (با محوریت آمریکا) ساخته شده‌اند. عمدا هم‌پوشانی دارند: شکل، نه آمار."),
    reported: [
      { who: "Meta", text: L("E3→E4 about 24 months and E4→E5 about 33 months (aggregator, weak)", "E3→E4 حدود ۲۴ ماه و E4→E5 حدود ۳۳ ماه (تجمیع‌کننده، منبع ضعیف)") },
      { who: "Amazon", text: L("from a solid L5 to L6, “probably one to two years” (Pragmatic Engineer)", "از یک L5 مستحکم تا L6، «احتمالا یک تا دو سال» (Pragmatic Engineer)") },
      { who: "Apple", text: L("ICT2→ICT3 about 2 years and ICT3→ICT4 about 4 years (aggregator, weak)", "ICT2→ICT3 حدود ۲ سال و ICT3→ICT4 حدود ۴ سال (تجمیع‌کننده، منبع ضعیف)") },
      { who: "Google", text: L("L5→L6 reportedly three to five years or more (blog, weak)", "L5→L6 گزارش شده سه تا پنج سال یا بیشتر (وبلاگ، منبع ضعیف)") }
    ]
  };

  /* ---- what is NOT evidence ---- */
  H.nonEvidence = [
    { says: L("“Everyone in the organisation knows her.”", "«همه در سازمان او را می‌شناسند.»"),
      asks: L("Which problem did she solve that others couldn't, and what changed afterward?", "کدام مساله را حل کرد که دیگران نمی‌توانستند و بعد از آن چه چیزی عوض شد؟") },
    { says: L("“He attends the leadership meetings.”", "«او در جلسه‌های سطح بالا شرکت می‌کند.»"),
      asks: L("Which decision did he influence in that room, and what was the result?", "در آن جلسه روی کدام تصمیم اثر گذاشت و نتیجه چه شد؟") },
    { says: L("“She owns the biggest system we have.”", "«او بزرگ‌ترین سیستم ما را در دست دارد.»"),
      asks: L("Which hard problems did she solve to keep it healthy, and what does it now enable?", "برای سالم نگه داشتنش چه مساله‌های سختی حل کرد و حالا چه چیزی ممکن شده؟") },
    { says: L("“He has been here for six years.”", "«او شش سال است اینجاست.»"),
      asks: L("What scope has he held across those years, and how has it grown?", "در این سال‌ها چه scopeای را در دست داشته و چطور رشد کرده؟") },
    { says: L("“She works incredibly hard.”", "«او فوق‌العاده سخت کار می‌کند.»"),
      asks: L("What did the work deliver, and how did it move the team's results?", "کار چه چیزی تحویل داد و نتیجه‌ی تیم را چقدر جابه‌جا کرد؟") },
    { says: L("“He is a brilliant engineer.”", "«او مهندس درخشانی است.»"),
      asks: L("Which hard problem did he solve simply, and who builds on it now?", "کدام مساله‌ی سخت را ساده حل کرد و حالا چه کسانی روی آن بنا می‌کنند؟") },
    { says: L("“People say she is really helpful.”", "«می‌گویند او خیلی کمک‌کننده است.»"),
      asks: L("What did she unblock, for whom, and by how much?", "چه چیزی را برای چه کسی و چقدر باز کرد؟") }
  ];
})();

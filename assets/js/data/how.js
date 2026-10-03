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
              "tech lead یک پروژه، مسئول on-call این هفته یا مرجع تیم در billing. نقش‌ها تغییر می‌کنند و سطح نیستند. برای مثال، tech lead نقشی غیررسمی و پروژه‌محور است."),
      eg: L("“Nima is tech lead for the search rewrite.”", "«نیما tech lead بازنویسی جست‌وجو است.»") },
    { id: "level", icon: "stairs", core: true,
      name: L("Level", "سطح"),
      q: L("What are you trusted to own?", "مسئولیت چه کارهایی به شما سپرده می‌شود؟"),
      text: L("A contract about scope: how big a problem, how much ambiguity, how many people you move, and what changed because of it. Judged on demonstrated work, over time.",
              "توافقی درباره‌ی scope: اندازه و ابهام مساله، تعداد افرادی که کارشان را پیش می‌برید و تغییری که حاصل شده است. سطح با عملکرد واقعی و مستمر سنجیده می‌شود."),
      eg: L("“Nima operates at L4.”", "«نیما در سطح L4 عمل می‌کند.»") },
    { id: "title", icon: "pen",
      name: L("Title", "عنوان"),
      q: L("What does the outside world see?", "دنیای بیرون چه چیزی می‌بیند؟"),
      text: L("A label on a profile or a business card. It varies between companies, can be inflated at small ones, and some employers avoid titles on purpose. It travels badly.",
              "عنوانی روی پروفایل یا کارت ویزیت که معنایش بین شرکت‌ها فرق می‌کند. در شرکت‌های کوچک ممکن است بزرگ‌تر از مسئولیت واقعی باشد و بعضی شرکت‌ها عمدا عنوان نمی‌دهند. برای مقایسه بین شرکت‌ها قابل‌اتکا نیست."),
      eg: L("“Senior Software Engineer” here, “Software Engineer” on another company's page for the same level.", "«Senior Software Engineer» اینجا، «Software Engineer» در شرکتی دیگر برای همان سطح.") },
    { id: "band", icon: "scale",
      name: L("Pay band", "بازه‌ی حقوق"),
      q: L("What follows from the level?", "سطح چگونه بر پرداخت اثر می‌گذارد؟"),
      text: L("Pay ranges and equity grants are tied to level, not to title or effort. At large employers the gap between adjacent levels is large, which is why level matters more than a small salary negotiation.",
              "بازه‌های حقوق و سهام به سطح گره خورده‌اند، نه به عنوان یا تلاش. در کارفرماهای بزرگ فاصله‌ی دو سطح مجاور زیاد است. برای همین، تعیین سطح بیشتر از مذاکره بر سر افزایش جزئی حقوق اهمیت دارد."),
      eg: L("One level down is roughly 30% less median total pay at several big tech employers.", "یک سطح پایین‌تر در چند شرکت بزرگ فناوری تقریبا ۳۰٪ کمتر از میانه‌ی کل دریافتی است.") }
  ];
  H.notLevel = [
    { t: L("**Not tenure.** Years correlate loosely with level; evidence decides.", "**صرفا سابقه نیست.** سال‌های تجربه فقط تا حدی با سطح ارتباط دارند. شواهد عملکرد تعیین‌کننده‌اند.") },
    { t: L("**Not your rating.** A rating says how well you did against your current level. Promotion asks whether your scope already matches the next one.", "**امتیاز ارزیابی هم نیست.** امتیاز، کیفیت عملکرد در سطح فعلی را نشان می‌دهد. ارتقا بررسی می‌کند آیا scope کار شما از قبل با سطح بعد تناسب دارد.") },
    { t: L("**Not a ranking of people.** It is a description of the work you are trusted with, which can be right for years.", "**رتبه‌بندی افراد نیست.** توصیف دامنه‌ی کاری است که به شما سپرده می‌شود و ممکن است سال‌ها مناسب بماند.") }
  ];

  /* ---- lens progressions: one line per level ---- */
  H.progress = {
    contribution: {
      L2: L("Small tasks, with a guide", "taskهای کوچک، با یک راهنما"),
      L3: L("Tasks delivered with quality; you pull your own next piece", "taskها با کیفیت تحویل می‌شوند. کار بعدی را خودتان برمی‌دارید"),
      L4: L("Multi-month work owned end to end, minimal supervision", "کار چندماهه را end-to-end own می‌کنید، با حداقل سرپرستی"),
      L5: L("An area owned; direction for 2–3 engineers; you originate ideas", "یک حوزه را own می‌کنید. برای ۲ تا ۳ مهندس جهت می‌دهید. ایده می‌سازید"),
      L6: L("Strategy for 10+ people, a very hard problem or 1+ year, and its results", "راهبری استراتژی برای ۱۰+ نفر، مساله‌ای بسیار دشوار یا افقی ۱+ ساله و پاسخگویی در قبال نتایج آن"),
      L7: L("Accountable for a strategic technical area of high importance", "پاسخگوی یک حوزه‌ی فنی استراتژیک با اهمیت بالا")
    },
    challenge: {
      L2: L("Familiar, predefined problems with the team's standard tools", "مساله‌های آشنا و از پیش تعریف‌شده با ابزارهای استاندارد تیم"),
      L3: L("Choose among known options; escalate on time", "انتخاب از میان گزینه‌های شناخته‌شده. escalate به‌موقع"),
      L4: L("Non-trivial problems; weigh options; find the next problems yourself", "مساله‌های بدون راه‌حل بدیهی، مقایسه‌ی گزینه‌ها و شناسایی مستقل مساله‌های بعدی"),
      L5: L("Ambiguity with no best answer; improve vs rebuild; fix recurring problems", "مساله‌های مبهم، تصمیم بین بهبود و بازسازی و رفع مشکلات تکرارشونده"),
      L6: L("Inherently ambiguous problems; decide which problems to solve", "مساله‌های ذاتا مبهم. تعیین این‌که چه مساله‌هایی حل شود"),
      L7: L("Problems across many systems or sub-organisations; name the large-scale ones", "مساله‌هایی که چند سیستم یا چند بخش سازمانی را درگیر می‌کنند و شناسایی مساله‌های کلان")
    },
    influence: {
      L2: L("Working relationships inside the team", "ارتباط کاری درون تیم"),
      L3: L("A reliable teammate; other teams with a senior's help", "هم‌تیمی قابل‌اعتماد. تیم‌های دیگر با کمک یک همکار ارشدتر"),
      L4: L("Coordinate stakeholders and dependencies; mentor; act on conflict", "هماهنگی ذی‌نفعان و وابستگی‌ها. mentor کردن. اقدام برای حل تعارض"),
      L5: L("Direction and alignment; the stakeholders' point of contact; trust", "جهت‌دهی و همسوسازی. نقطه‌ی تماس ذی‌نفعان. اعتماد"),
      L6: L("Lead across groups with competing priorities; role model", "رهبری چند گروه با اولویت‌های متفاوت و گاه متعارض. الگو بودن"),
      L7: L("Trusted, impartial arbiter; shapes senior leadership's decisions", "حَکَم معتمد و بی‌طرف. اثرگذار بر تصمیم‌های رهبری ارشد")
    },
    expertise: {
      L2: L("A basic understanding that grows weekly", "فهم پایه‌ای که هر هفته رشد می‌کند"),
      L3: L("Solid basics of the area, the product and the business need", "مبانی محکم حوزه، محصول و نیاز کسب‌وکار"),
      L4: L("Command of the system's architecture plus one skill beyond coding", "تسلط بر معماری سیستم به‌علاوه‌ی یک مهارت فراتر از کدنویسی"),
      L5: L("Depth or breadth; an “inner PM”; several skills beyond coding", "تخصص عمیق یا دانش گسترده، «PM درون» و چند مهارت فراتر از کدنویسی"),
      L6: L("Depth and breadth; command of the whole product area", "هم تخصص عمیق و هم دانش گسترده. تسلط بر کل حوزه‌ی محصولی"),
      L7: L("The de facto authority on a major system", "مرجع عملی (de facto) یک سیستم عمده")
    },
    impact: {
      L2: L("On the project: tasks done well, pace improving", "اثر روی پروژه: taskهای باکیفیت و سرعت رو به بهبود"),
      L3: L("On the project: on time, few defects, no rework for others", "روی پروژه: سر وقت، با ایراد کم، بدون دوباره‌کاری برای دیگران"),
      L4: L("Whole projects delivered, shipped and stable", "پروژه‌های کامل تحویل‌شده، منتشرشده و پایدار"),
      L5: L("The work itself succeeds: launched, adopted, tangible for the organisation", "موفقیت خود کار: launch، استفاده از آن و نتیجه‌ی ملموس برای سازمان"),
      L6: L("The strategy you set produces results beyond one team", "استراتژی‌ای که تعیین کردید فراتر از یک تیم نتیجه می‌دهد"),
      L7: L("The organisation can do something it could not before", "سازمان کاری را می‌تواند انجام دهد که قبلا نمی‌توانست")
    }
  };

  /* ---- challenge matrix: problem vs solution ---- */
  H.matrix = {
    axisX: L("Complexity of the solution", "پیچیدگی راه‌حل"),
    axisY: L("Complexity of the problem", "پیچیدگی مساله"),
    cells: {
      hardSimple: { tone: "good", name: L("The senior move", "رویکرد مهندس ارشد"),
        text: L("Customers are occasionally charged twice. After two days of tracing, the cause is a missing idempotency key. The fix is one header and a unique constraint.",
                "گاهی مشتری‌ها دو بار پول می‌دهند. بعد از دو روز ردیابی معلوم می‌شود علت نبودنِ یک idempotency key است. راه‌حل یک header و یک unique constraint است.") },
      hardHard: { tone: "info", name: L("Necessary, but check it", "ضروری است، اما بازبینی کنید"),
        text: L("Moving a live ledger across regions with no downtime. The solution is complicated because the problem is. Stay honest about what is essential.",
                "انتقال یک دفتر کل زنده میان چند region بدون downtime. راه‌حل پیچیده است چون مساله پیچیده است. صادقانه ببینید چه چیزی ضروری است.") },
      easySimple: { tone: "", name: L("Good hygiene", "بهبودهای روزمره‌ی مهندسی"),
        text: L("Add validation to a form field. Rename a confusing column. Valuable in volume, not a sign of altitude.",
                "اضافه کردن validation به یک فیلد فرم یا اصلاح نام مبهم یک ستون. مجموع این کارها ارزشمند است، اما به‌تنهایی نشانه‌ی سطح بالاتر نیست.") },
      easyHard: { tone: "warn", name: L("The trap: over-building", "تله: طراحی بیش‌ازحد پیچیده"),
        text: L("A plugin framework with a config DSL for a one-off CSV export. It looks impressive and is expensive to maintain.",
                "یک framework پلاگینی با DSL پیکربندی برای یک export یک‌باره‌ی CSV. چشمگیر به نظر می‌رسد و نگهداری‌اش گران است.") }
    },
    note: L("The ladder measures the complexity of the problem you solved. A complex solution is not evidence of a complex problem, and a simple solution is preferred.",
            "نردبان پیچیدگیِ مساله‌ای را که حل کرده‌اید می‌سنجد. راه‌حل پیچیده نشانه‌ی مساله‌ی پیچیده نیست و راه‌حل ساده ارجح است.")
  };

  /* ---- end-to-end: the hidden half of the work ---- */
  H.e2e = {
    intro: L("Pick a kind of work, then tick what exists. The code is usually the smaller half of “done”.", "یک نوع کار انتخاب کنید و موارد انجام‌شده را علامت بزنید. معمولا کدنویسی فقط بخش کوچکی از کارهای لازم برای تحویل کامل است."),
    kinds: [
      { id: "api", name: L("Launch a new API", "راه‌اندازی یک API جدید"), items: [
        { core: true, t: L("Code merged and deployed", "کد merge و deploy شده") },
        { t: L("Automated tests: unit and integration", "تست خودکار: unit و integration") },
        { t: L("Reference docs and examples for consumers", "مستندات مرجع و مثال برای مصرف‌کننده‌ها") },
        { t: L("Dashboards for latency, errors and traffic", "داشبوردهای latency، خطا و ترافیک") },
        { t: L("Alerts with an owner and sensible thresholds", "alert با مسئول مشخص و آستانه‌های منطقی") },
        { t: L("Runbook for whoever is on call", "runbook برای کسی که on-call است") },
        { t: L("Rate limits and abuse protection reviewed", "rate limit و محافظت در برابر سوءاستفاده بررسی شده") },
        { t: L("Rollout plan with a tested rollback", "برنامه‌ی rollout همراه با rollback آزموده‌شده") },
        { t: L("Consumers told, and helped to adopt it", "مصرف‌کننده‌ها از تغییر مطلع شده‌اند و برای استفاده از آن راهنمایی گرفته‌اند") },
        { t: L("Support team briefed", "تیم پشتیبانی با تغییرات آشنا شده") }
      ] },
      { id: "migration", name: L("Migrate a data store", "migration یک data store"), items: [
        { core: true, t: L("Migration code and scripts merged", "کد و اسکریپت‌های مهاجرت merge شده") },
        { t: L("Backfill verified with counts and checksums", "backfill با شمارش و checksum راستی‌آزمایی شده") },
        { t: L("Shadow reads or dual writes ran for a while", "مدتی shadow read یا dual write اجرا شده") },
        { t: L("Rollback rehearsed, not just written", "rollback تمرین شده، نه فقط نوشته شده") },
        { t: L("Dashboards compare old and new", "داشبوردها قدیم و جدید را مقایسه می‌کنند") },
        { t: L("Downstream readers (reports, ETL) found and updated", "مصرف‌کننده‌های downstream، مثل گزارش‌ها و ETL، شناسایی و به‌روز شده‌اند") },
        { t: L("Cutover runbook and communication plan", "runbook برای cutover و برنامه‌ی اطلاع‌رسانی") },
        { t: L("Old store switched off and its cost removed", "data store قدیمی خاموش شده و هزینه‌ی آن حذف شده است") },
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
      { max: 0.35, t: L("Merged is not done. Most of what makes work viable is still missing.", "merge شدن کد پایان کار نیست. هنوز بیشتر اجزای لازم برای بقاپذیری کار آماده نشده‌اند.") },
      { max: 0.7, t: L("Getting there. Someone will still hit a surprise you could have removed.", "بخشی از مسیر طی شده، اما هنوز ممکن است دیگران با مشکلی قابل‌پیشگیری غافلگیر شوند.") },
      { max: 0.99, t: L("Nearly end to end. Find the last gap before someone else does.", "کار تقریبا end-to-end است. آخرین کاستی را پیش از دیگران پیدا کنید.") },
      { max: 2, t: L("End to end. This is what owning looks like.", "کار end-to-end انجام شده است. ownership یعنی همین.") }
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
      L("**Bands, not equivalences.** The cells say “roughly this band”. Amazon's L5 is not Google's L5: the Pragmatic Engineer maps Amazon L5, L6 and L7 to Google/Meta L4, L5 and L6–7.", "**بازه‌های تقریبی‌اند، نه معادل‌های دقیق.** هر خانه تقریبا یک بازه را نشان می‌دهد. L5 در Amazon با L5 در Google یکی نیست. Pragmatic Engineer، سطح‌های L5، L6 و L7 در Amazon را معادل L4، L5 و L6–7 در Google و Meta می‌داند."),
      L("**Names change.** Meta's “E” and “IC” labels are used interchangeably. Netflix introduced engineering levels only in 2022 (before that, one title for ~25 years). Microsoft numbers go up two at a time per title.", "**نام‌ها عوض می‌شوند.** برچسب‌های «E» و «IC» در Meta به جای هم به کار می‌روند. Netflix سطح‌های مهندسی را فقط در ۲۰۲۲ معرفی کرد (پیش‌تر حدود ۲۵ سال یک عنوان بود). شماره‌ی Microsoft برای هر عنوان دو تا دو تا بالا می‌رود."),
      L("**Staff is not portable.** One ladder means a single team's domain, another several teams, another a whole domain. Compare scope, not the word “Staff”.", "**Staff در همه‌ی شرکت‌ها یک معنا ندارد.** در یک نردبان به حوزه‌ی یک تیم اشاره دارد، در دیگری به چند تیم و در سومی به یک حوزه‌ی کامل. scope را مقایسه کنید، نه صرفا عنوان Staff را."),
      L("**Unverified cells are marked (?)**. Apple publishes no ladder (codes come from pay submissions) and Zalando's grades above Senior are unconfirmed.", "**خانه‌های تاییدنشده با (؟) مشخص‌اند.** Apple نردبانی منتشر نکرده (کدها از ثبت‌های حقوقی می‌آیند) و درجه‌های Zalando بالاتر از Senior تایید نشده‌اند.")
    ],
    source: L("Codes: levels.fyi and The Pragmatic Engineer (crowd-sourced and secondary; read through search summaries, October 2026). Band mapping is this guide's synthesis, not any company's published definition.",
              "کدها از levels.fyi و The Pragmatic Engineer آمده‌اند، بر اساس گزارش افراد و منابع ثانویه که در اکتبر ۲۰۲۶ از خلاصه‌ی جست‌وجو خوانده شدند. تطبیق بازه‌ها جمع‌بندی همین راهنماست و تعریف رسمی هیچ شرکتی نیست.")
  };

  /* ---- vocabulary: how employers name what they judge ---- */
  H.vocab = [
    { who: "Amazon", conf: "M",
      names: L("16 Leadership Principles, plus promotion write-ups organised by scope and influence, ambiguity, technical complexity, execution, impact (the five scopes: reported)", "۱۶ اصل رهبری، به‌علاوه‌ی نوشته‌های ارتقا بر مبنای scope و نفوذ، ابهام، پیچیدگی فنی، اجرا و اثرگذاری (پنج scope: گزارش‌شده)"),
      note: L("A value system doubles as the evaluation language.", "ارزش‌های سازمان، مبنای زبان ارزیابی هم هستند.") },
    { who: "Meta", conf: "M",
      names: L("Level definitions combine scope with direction, people and engineering excellence; reviews use a rating scale from “meets some” up to “redefines”", "تعریف سطح‌ها scope را با جهت‌دهی، آدم‌ها و تعالی مهندسی ترکیب می‌کند. ارزیابی‌ها از مقیاسی از «برخی انتظارات» تا «بازتعریف» استفاده می‌کنند"),
      note: L("Reportedly no separate promotion packet: the case is made in calibration.", "طبق گزارش‌ها، پرونده‌ی ارتقای مستقلی وجود ندارد و استدلال ارتقا در calibration شکل می‌گیرد.") },
    { who: "Google", conf: "L",
      names: L("Ratings are named by impact (from “not enough” to “transformative”); the exact rubric wording is not public", "امتیازها بر اساس اثرگذاری نام‌گذاری شده‌اند (از «ناکافی» تا «تحول‌آفرین»). عبارت دقیق rubric عمومی نیست"),
      note: L("The L3–L10 numbering became an industry template.", "شماره‌گذاری L3–L10 قالب مشترک صنعت شد.") },
    { who: "Microsoft", conf: "L",
      names: L("Growth mindset and Model-Coach-Care as culture; reviews reportedly credit helping others succeed, not only your own results", "growth mindset و Model-Coach-Care به‌عنوان فرهنگ. گزارش شده ارزیابی‌ها کمک به موفقیت دیگران را هم می‌پذیرند، نه فقط نتیجه‌ی خودتان را"),
      note: L("Approval escalates with level (manager, skip-level, VP), as reported.", "طبق گزارش‌ها، با افزایش سطح، تایید به مدیران بالاتر نیاز دارد: مدیر، مدیرِ مدیر و VP.") },
    { who: "Netflix", conf: "M",
      names: L("The “keeper test” and the “informed captain” idea; no performance-improvement plans; engineering levels exist only since 2022", "keeper test (آزمون حفظ همکار) و مفهوم informed captain، بدون PIP. سطح‌های مهندسی فقط از ۲۰۲۲ معرفی شده‌اند"),
      note: L("Judgement and context over process, with levels bolted on later.", "تاکید بر قضاوت و context به‌جای فرایند، با سطح‌هایی که بعدا اضافه شدند.") },
    { who: "Zalando", conf: "H",
      names: L("A role-expectations document with scope, delivery and impact, and community contributions; engineers and managers rate themselves red/amber/green against the current and next grade", "سند انتظارات نقش شامل scope، delivery، impact و مشارکت شهروندی است. مهندس و مدیر، عملکرد را بر اساس انتظارات سطح فعلی و بعدی با رنگ قرمز، زرد و سبز ارزیابی می‌کنند"),
      note: L("Unusually transparent about the next-grade conversation.", "درباره‌ی گفتگوی مربوط به سطح بعد، شفافیتی کم‌نظیر دارد.") },
    { who: "Monzo", conf: "H",
      names: L("Impact first, technical skills, behaviours; each level carries a scope label from task to company; “a compass, not a GPS”", "ابتدا اثرگذاری، سپس مهارت‌های فنی و رفتارها. هر سطح scope مشخصی از task تا کل شرکت دارد. «قطب‌نماست، نه GPS»"),
      note: L("Says outright that the framework must never compute a level.", "صریحا می‌گوید چارچوب هرگز نباید سطح را محاسبه کند.") },
    { who: "Dropbox", conf: "M",
      names: L("Four pillars (results, direction, talent, culture) plus role-specific craft; explicitly not a checklist", "چهار ستون (نتایج، جهت، استعداد، فرهنگ) به‌علاوه‌ی craft مخصوص هر نقش. صراحتا چک‌لیست نیست"),
      note: L("Promotion recognises someone already operating at the next level.", "ارتقا، عملکردی را تایید می‌کند که فرد از قبل در سطح بعد داشته است.") }
  ];
  H.vocabNote = L("Same four ideas under different names: results and scope, complexity and ambiguity, people and influence, craft. Impact sits over all of them. This is a synthesis; nobody here publishes the exact mapping.",
                  "همان چهار مفهوم با نام‌های متفاوت: نتیجه و scope، پیچیدگی و ابهام، افراد و قدرت نفوذ و مهارت حرفه‌ای. اثرگذاری در همه‌ی آن‌ها سنجیده می‌شود. این تطبیق، جمع‌بندی راهنماست و هیچ‌کدام چنین نگاشت دقیقی منتشر نکرده‌اند.");

  /* ---- promotion pipeline ---- */
  H.pipeline = [
    { icon: "pen", name: L("You do the work and write it down", "کار را انجام می‌دهید و می‌نویسید"),
      does: L("Next-level work, with evidence kept as you go: outcomes, who benefited, your role.", "کار در سطح بعد، با ثبت شواهد در طول مسیر: نتایج، افراد بهره‌مند و نقش شما."),
      risk: L("Great work nobody can quote.", "کار عالی که دیگران نمی‌توانند به آن استناد کنند.") },
    { icon: "user", name: L("Your manager builds the case", "مدیرتان پرونده را می‌سازد"),
      does: L("Nominates you (or you self-nominate where allowed) and argues the case against the next level's descriptor.", "مدیر شما را نامزد می‌کند، یا در صورت مجاز بودن خودتان اقدام می‌کنید. سپس با معیارهای سطح بعد از پرونده دفاع می‌کند."),
      risk: L("A manager who isn't convinced, or who can't argue it well.", "مدیری که قانع نشده یا نمی‌تواند از پرونده دفاع موثری کند.") },
    { icon: "users", name: L("Peers and partners add input", "همکاران و شرکا نظر می‌دهند"),
      does: L("Several people (reportedly three to eight, depending on the employer) say what they saw.", "چند نفر (بسته به کارفرما، گزارش شده سه تا هشت نفر) می‌گویند چه دیده‌اند."),
      risk: L("Nobody beyond your team knows your work.", "کسی بیرون از تیمتان کارتان را نمی‌شناسد.") },
    { icon: "scale", name: L("A calibration or committee reads it", "calibration یا کمیته آن را می‌خواند"),
      does: L("Often people who have never worked with you compare written cases against one bar.", "اغلب کسانی که هرگز با شما کار نکرده‌اند پرونده‌های نوشته‌شده را با یک معیار مقایسه می‌کنند."),
      risk: L("A case that is hard to summarise loses to one that is easy to quote.", "پرونده‌ای با جمع‌بندی دشوار، در برابر پرونده‌ای که راحت می‌توان به شواهدش استناد کرد ضعیف‌تر است.") },
    { icon: "flag", name: L("Decision, then feedback", "تصمیم، بعد بازخورد"),
      does: L("Approved, or “not yet” with reasons. The best next step in both cases is the same: get the reasons in specifics.", "تایید، یا «هنوز نه» با دلیل. در هر دو حالت بهترین قدم بعدی یکی است: دلیل‌ها را دقیق بگیرید."),
      risk: L("Hearing a vague “almost there” and leaving it vague.", "پذیرفتن بازخورد مبهم «تقریبا رسیده‌ای» بدون روشن کردن منظور و اقدام لازم.") }
  ];
  H.promoByCo = [
    { who: "Google", conf: "L",
      text: L("Reportedly two promotion windows a year; the manager nominates and a committee approves, working from a written packet with summarised peer feedback.", "طبق گزارش‌ها، سالی دو فرصت ارتقا وجود دارد. مدیر نامزد می‌کند و کمیته بر اساس پرونده‌ی مکتوب و خلاصه‌ی بازخورد همکاران تصمیم می‌گیرد.") },
    { who: "Meta", conf: "L",
      text: L("Reportedly no separate packet: the case is argued in performance calibration (managers plus senior ICs), then approved higher up. Manager advocacy is close to decisive.", "طبق گزارش‌ها، پرونده‌ی مستقلی وجود ندارد. در calibration عملکرد، مدیران و ICهای ارشد درباره‌ی ارتقا بحث می‌کنند و سپس تایید مدیران بالاتر گرفته می‌شود. حمایت مدیر تقریبا تعیین‌کننده است.") },
    { who: "Amazon", conf: "L",
      text: L("A written promotion document organised by scope and influence, ambiguity, technical complexity, execution and impact, with several peer inputs (reportedly at least four).", "یک سند ارتقای نوشته‌شده بر مبنای scope و نفوذ، ابهام، پیچیدگی فنی، اجرا و اثرگذاری، با نظر چند همکار (گزارش شده دست‌کم چهار نفر).") },
    { who: "Microsoft", conf: "L",
      text: L("Tied to the review cycle; reportedly approval moves from manager to skip-level to VP as level rises, and “sustained” can mean two cycles or more.", "ارتقا به دوره‌ی ارزیابی وابسته است. طبق گزارش‌ها، با افزایش سطح، تایید از مدیر به مدیرِ مدیر و VP می‌رسد. استمرار عملکرد ممکن است به دو دوره یا بیشتر نیاز داشته باشد.") },
    { who: "Apple", conf: "L",
      text: L("Reportedly annual, alongside the annual review; a manager normally nominates, but a calibration committee can promote without a nomination.", "گزارش شده سالانه و هم‌زمان با ارزیابی سالانه است. معمولا مدیر نامزد می‌کند ولی کمیته‌ی calibration بدون نامزدی هم می‌تواند ارتقا بدهد.") },
    { who: "Netflix", conf: "M",
      text: L("No published promotion process; decisions lean on the keeper test and context. After levels arrived in 2022, pay reviews decide whether people above their band wait or advance.", "فرایند عمومی و منتشرشده‌ای برای ارتقا وجود ندارد. تصمیم‌ها به keeper test (آزمون حفظ همکار) و context وابسته‌اند. پس از معرفی سطح‌ها در ۲۰۲۲، ارزیابی حقوق مشخص می‌کند افراد با دریافتی بالاتر از بازه‌ی فعلی، باید منتظر بمانند یا ارتقا بگیرند.") },
    { who: "Zalando", conf: "H",
      text: L("Engineers and managers run a red/amber/green self-assessment against current and next-grade expectations; most Principals are promoted from within after stretch assignments.", "مهندس و مدیر یک خودارزیابی قرمز/زرد/سبز بر اساس انتظارات سطح فعلی و بعدی انجام می‌دهند. بیشتر Principalها پس از پروژه‌های چالشی از درون ارتقا می‌گیرند.") }
  ];
  H.promoNote = L("Processes change often and differ by organisation. Treat this as orientation and ask your own manager how it works where you are.",
                  "فرایندها مرتب تغییر می‌کنند و در بخش‌های مختلف سازمان متفاوت‌اند. این توضیحات برای شناخت کلی است. درباره‌ی فرایند محل کار خود از مدیرتان بپرسید.");

  /* ---- pace: indicative experience bands ---- */
  H.pace = {
    // indicative bands, overlapping by design: [from, to, typical]
    bands: { L2: [0, 2, 1], L3: [1, 4, 2.5], L4: [3, 7, 5], L5: [5, 12, 8], L6: [8, 16, 11], L7: [11, 22, 15] },
    scale: { min: 0, max: 22, ticks: [0, 5, 10, 15, 20] },
    note: L("Indicative bands synthesised from self-reported levels.fyi snapshots and public career write-ups for large tech employers (US-centric). They overlap on purpose: shape, not statistic.",
            "بازه‌های نمونه بر اساس گزارش کاربران levels.fyi و مطالب عمومی مسیر شغلی در شرکت‌های بزرگ فناوری، با تمرکز بر آمریکا. هم‌پوشانی آن‌ها عمدی است و صرفا تصویری کلی ارائه می‌کنند، نه آمار دقیق."),
    reported: [
      { who: "Meta", text: L("E3→E4 about 24 months and E4→E5 about 33 months (aggregator, weak)", "E3→E4 حدود ۲۴ ماه و E4→E5 حدود ۳۳ ماه (تجمیع‌کننده، منبع ضعیف)") },
      { who: "Amazon", text: L("from a solid L5 to L6, “probably one to two years” (Pragmatic Engineer)", "از عملکرد قوی در L5 تا رسیدن به L6، «احتمالا یک تا دو سال» (Pragmatic Engineer)") },
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
      asks: L("What scope has he held across those years, and how has it grown?", "در این سال‌ها چه scope کاری داشته و دامنه‌ی مسئولیتش چگونه رشد کرده است؟") },
    { says: L("“She works incredibly hard.”", "«او فوق‌العاده سخت کار می‌کند.»"),
      asks: L("What did the work deliver, and how did it move the team's results?", "کارش چه خروجی‌ای داشته و چه تغییری در نتیجه‌ی تیم ایجاد کرده است؟") },
    { says: L("“He is a brilliant engineer.”", "«او مهندس درخشانی است.»"),
      asks: L("Which hard problem did he solve simply, and who builds on it now?", "کدام مساله‌ی دشوار را با راه‌حلی ساده حل کرده و چه کسانی از آن استفاده می‌کنند؟") },
    { says: L("“People say she is really helpful.”", "«می‌گویند خیلی به دیگران کمک می‌کند.»"),
      asks: L("What did she unblock, for whom, and by how much?", "کدام مانع را برای چه کسی برطرف کرده و چه میزان پیشرفت ایجاد شده است؟") }
  ];
})();

/* "Hired at the right level": pipeline, titles by company type, interviewer signals, pay vs level, loops compared.
   Facts come from the research notes and keep their hedges ("reportedly", "self-reported", "no data").
   Registers S.data.hire.{pipeline, moves, titles, signals, comp, loops, accept}. hire-extras.js adds the rest. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;
  var H = S.data.hire = S.data.hire || {};

  /* ---------------- 1. how level gets set, step by step ---------------- */
  H.pipeline = [
    { id: "guess", icon: "user",
      title: L("A first guess", "برآورد اولیه"),
      what: L("Your CV, your title and the open requisition give a provisional level. Some employers fix it up front. Others, like Spotify in its own postings, say it is determined during the interviews.",
              "رزومه، عنوان فعلی و موقعیت شغلی، مبنای برآورد اولیه‌ی سطح شما هستند. بعضی شرکت‌ها سطح را از قبل مشخص می‌کنند. برخی دیگر، مثل Spotify در آگهی‌هایش، می‌گویند سطح طی مصاحبه تعیین می‌شود."),
      you: L("State your target level with two facts. Ask which level the loop is built for, and whether it can change.",
             "سطح هدف را با دو شاهد مشخص بیان کنید. بپرسید مصاحبه‌ها برای چه سطحی طراحی شده‌اند و آیا امکان تغییر آن وجود دارد."),
      risk: L("Silence lets the first guess harden.", "اگر چیزی نگویید، برآورد اولیه ممکن است قطعی فرض شود.") },
    { id: "coding", icon: "tool",
      title: L("Screens and coding", "غربال‌گری و کدنویسی"),
      what: L("Coding mostly decides hire or no-hire. It rarely moves the level in either direction.",
              "کدنویسی بیشتر hire یا no-hire را تعیین می‌کند. به‌ندرت باعث تعیین سطحی بالاتر یا پایین‌تر می‌شود."),
      you: L("Clear the bar, then stop over-investing. Hours on a fourth coding pattern are hours not spent on design and stories.",
             "معیار لازم کدنویسی را برآورده کنید، اما برای آمادگی این بخش بیش‌ازحد وقت نگذارید. تمرین بیشتر کدنویسی ممکن است از زمان آمادگی برای design و روایت تجربه‌ها کم کند."),
      risk: L("A strong coding round feels like a win and hides a weak design round.", "عملکرد قوی در کدنویسی ممکن است حس موفقیت بدهد و ضعف در design را از نظر شما پنهان کند.") },
    { id: "loop", icon: "chat",
      title: L("Design and behavioural", "design و مصاحبه‌ی رفتاری"),
      what: L("These rounds set the level. Interviewers listen for who drives, whether you name what is hard, and how big your stories are in people, teams and ambiguity.",
              "این بخش‌ها سطح را تعیین می‌کنند. مصاحبه‌کنندگان بررسی می‌کنند چه کسی گفتگو را هدایت می‌کند، آیا دشواری مساله را می‌شناسید و تجربه‌هایتان از نظر افراد، تیم‌ها و ابهام چه دامنه‌ای دارند."),
      you: L("Lead the design round. Prepare three stories where your decision changed other people's work.",
             "راند design را رهبری کنید. سه داستان آماده کنید که در آن تصمیم شما کار دیگران را عوض کرد."),
      risk: L("A textbook answer reads as mid-level, however clean it is.", "پاسخ صرفا کتابی، هرچقدر مرتب، معمولا نشانه‌ی سطح میانی تلقی می‌شود.") },
    { id: "debrief", icon: "users",
      title: L("Debrief or committee", "debrief یا کمیته"),
      what: L("Written feedback goes to a debrief or committee that decides hire and level. At Google a hiring committee that has never met you reads the packet. At Amazon an outside Bar Raiser holds a veto. At Meta the interviewers' recommendation carries most weight.",
              "بازخورد مکتوب به debrief یا کمیته‌ای می‌رسد که hire و سطح را تعیین می‌کند. در Google کمیته‌ی استخدامی که شما را هرگز ندیده پرونده را می‌خواند. در Amazon یک Bar Raiser از بیرون حق وتو دارد. در Meta توصیه‌ی مصاحبه‌کننده‌ها بیشترین وزن را دارد."),
      you: L("You can't speak in that room, so make your answers easy to write down: a clear claim, a number, a one-sentence summary at the end of each story.",
             "در جلسه‌ی تصمیم‌گیری حضور ندارید. پاسخ‌ها را طوری بیان کنید که ثبت آن‌ها آسان باشد: ادعای روشن، عدد و جمله‌ی جمع‌بندی در پایان هر روایت."),
      risk: L("A good answer nobody can summarise doesn't survive the debrief.", "پاسخ خوب اگر قابل‌جمع‌بندی نباشد، ممکن است در debrief به‌درستی منتقل نشود.") },
    { id: "offer", icon: "briefcase",
      title: L("The offer", "پیشنهاد کاری"),
      what: L("Level comes first, then compensation. If the level is lower than you hoped, this is the moment to ask for a review. Silence on level can read as acceptance.",
              "ابتدا سطح تعیین می‌شود و سپس حقوق و مزایا. اگر سطح از انتظارتان پایین‌تر است، همان موقع درخواست بازبینی کنید. سکوت ممکن است به معنای پذیرش برداشت شود."),
      you: L("Ask to revisit the level before any talk of pay. If you accept, get next-level criteria in writing.",
             "پیش از هر صحبتی از حقوق بخواهید سطح بازبینی شود. اگر می‌پذیرید، معیارهای سطح بعد را مکتوب بگیرید."),
      risk: L("Talking pay first turns the level into a done deal.", "اگر ابتدا درباره‌ی حقوق مذاکره کنید، ممکن است سطح، توافق‌شده فرض شود.") }
  ];

  H.moves = [
    L("Coding gates the hire. Design and behavioural rounds set the level, according to the interview guides and the levelling write-ups we found.",
      "بر اساس راهنماهای مصاحبه و مطالب مربوط به تعیین سطح، کدنویسی عمدتا معیار استخدام است و design و مصاحبه‌ی رفتاری سطح را مشخص می‌کنند."),
    L("Your old title only shapes the first guess and how your CV is read. Employer tier matters more than the word “senior”.",
      "عنوان قبلی فقط بر برآورد اولیه و برداشت از رزومه اثر می‌گذارد. رده‌ی شرکت از خود واژه‌ی Senior مهم‌تر است."),
    L("The level can move at two moments: after an early screen, and after the debrief (reported by candidates, not documented by employers).",
      "سطح ممکن است در دو مرحله تغییر کند: بعد از یک غربال‌گری اولیه و بعد از debrief (گزارش داوطلب‌ها، نه مستندات شرکت‌ها).")
  ];

  /* ---------------- 2. the same title, different scope ---------------- */
  H.titles = [
    { who: L("A “senior” at an agency or a small company", "یک «senior» در آژانس یا شرکت کوچک"),
      means: L("Can come in as a mid-level engineer (SWE 2) at a big tech company: a lower title, often with higher pay.",
               "می‌تواند در یک شرکت big tech به‌عنوان مهندس سطح میانی (SWE 2) وارد شود: عنوان پایین‌تر، اغلب با حقوق بالاتر."),
      src: "M", by: "Gergely Orosz" },
    { who: L("A principal engineer", "یک مهندس principal"),
      means: L("At Skyscanner about one per 15–30 engineers, with squad-level scope. At Uber one or two per roughly 4,000 engineers, with company-wide scope.",
               "در Skyscanner حدود یک نفر به‌ازای هر 15 تا 30 مهندس، با scope در سطح squad. در Uber یک یا دو نفر به‌ازای حدود 4000 مهندس، با scope در سطح کل شرکت."),
      src: "M", by: "Gergely Orosz" },
    { who: L("Pay for “the same role”", "حقوق «همان نقش»"),
      means: L("Can differ by 3–5× across employer tiers, which is why a move up a tier can lower the title and still raise the pay.",
               "میان رده‌های مختلف شرکت‌ها می‌تواند 3 تا 5 برابر فرق کند و برای همین رفتن به رده‌ی بالاتر می‌تواند عنوان را پایین بیاورد و باز هم حقوق را بالا ببرد."),
      src: "M", by: "Gergely Orosz" },
    { who: L("A Staff engineer at a small company", "یک مهندس Staff در شرکت کوچک"),
      means: L("Often compared with a Senior at big tech.", "اغلب با Senior در big tech مقایسه می‌شود."),
      src: "L", by: L("commentary", "نظرها") },
    { who: L("A Senior at big tech", "یک Senior در big tech"),
      means: L("Meta's E5 is Senior internally yet can read as generic from outside, and an Amazon L5 is not a Google L5: Amazon's L5 median pay sits below Google's L4.",
               "E5 در Meta عنوان داخلی Senior دارد، اما از بیرون ممکن است عنوانی عمومی تلقی شود. L5 در Amazon با L5 در Google یکی نیست، میانه‌ی حقوق L5 در Amazon از L4 در Google کمتر است."),
      src: "L", by: L("commentary + levels.fyi", "نظرها + levels.fyi") },
    { who: L("The same employer, a different year", "همان شرکت، سالی دیگر"),
      means: L("In 2022 Netflix re-levelled tenured staff and principal engineers to E5 when it introduced levels, after about 25 years with one engineer title.",
               "در 2022، Netflix پس از حدود 25 سال استفاده از یک عنوان مهندسی، سطح‌بندی را معرفی کرد و مهندس‌های باسابقه‌ی staff و principal را در E5 قرار داد."),
      src: "M", by: "Pragmatic Engineer" }
  ];

  /* ---------------- 3. interviewer signals by level (mid / senior / staff) ---------------- */
  H.signals = {
    cols: [{ id: "L4", name: L("Mid-level", "سطح میانی") }, { id: "L5", name: L("Senior", "ارشد") }, { id: "L6", name: L("Staff", "Staff") }],
    rows: [
      { id: "drive",
        label: L("Design: who drives", "design: چه کسی جلسه را پیش می‌برد"),
        cells: [
          L("Leads the early part (requirements, APIs, schema, high-level design). The interviewer leads the later detail.", "بخش اول (نیازمندی‌ها، API، schema، طراحی سطح‌بالا) را پیش می‌برد. در ادامه، مصاحبه‌کننده گفتگو درباره‌ی جزئیات را هدایت می‌کند."),
          L("Names what makes the system hard, spots the limits of their own design, weighs alternatives and steers.", "می‌گوید چه چیزی طراحی سیستم را دشوار می‌کند، محدودیت طراحی خودش را می‌بیند، جایگزین‌ها را می‌سنجد و مسیر را هدایت می‌کند."),
          L("Leads nearly the whole session. The interviewer only refocuses.", "تقریبا کل جلسه را رهبری می‌کند. مصاحبه‌کننده فقط در صورت خروج از موضوع، گفتگو را به مسیر اصلی برمی‌گرداند.")
        ] },
      { id: "ratio",
        label: L("Breadth to depth", "نسبت گستردگی بحث به عمق"),
        cells: [
          L("About 80 / 20. Some components stay abstract.", "حدود 80 به 20. بعضی اجزا کلی می‌مانند."),
          L("About 60 / 40. Depth comes from hands-on specifics.", "حدود 60 به 40. عمق از جزئیات دست‌اول می‌آید."),
          L("About 40 / 60. Novel insight; can teach the interviewer something.", "حدود 40 به 60. بینش تازه ارائه می‌کند و ممکن است نکته‌ای به مصاحبه‌کننده یاد بدهد.")
        ] },
      { id: "story",
        label: L("Behavioural scope", "scope داستان‌های رفتاری"),
        cells: [
          L("Own work or the team's focus area. Takes ownership of ambiguous tasks.", "کار خود یا حوزه‌ی تمرکز تیم. taskهای مبهم را own می‌کند."),
          L("Team-wide change, about three or more people. Builds consensus across the team or beyond. Disagreements with several leads.", "تغییر در سطح تیم، با حدود سه نفر یا بیشتر. ایجاد اجماع در تیم یا فراتر و حل اختلاف با چند لید."),
          L("Ambiguous work across two or more teams. Cross-team conflict.", "کار مبهم میان دو تیم یا بیشتر. تعارض میان‌تیمی.")
        ] },
      { id: "down",
        label: L("What pushes the level down", "چه چیزی سطح را پایین می‌آورد"),
        cells: [
          L("Only executing others' specs.", "فقط اجرای مشخصات دیگران."),
          L("A generic design; stories about your own tasks.", "طراحی کلیشه‌ای و روایت‌هایی محدود به taskهای شخصی."),
          L("Needing steering; thin organisation-level stories. A behavioural fail is a no-hire at Meta from E6.", "نیاز به هدایت و شواهد ضعیف از کار در سطح سازمان. در Meta، شکست در مصاحبه‌ی رفتاری از E6 به بالا به معنای no-hire است.")
        ] },
      { id: "up",
        label: L("What pushes the level up", "چه چیزی سطح را بالا می‌برد"),
        cells: [
          L("Self-initiated work, with results.", "کارهایی که خودتان شروع کرده‌اید و به نتیجه رسانده‌اید."),
          L("Concrete trade-offs backed by experience.", "trade-offهای مشخص با پشتوانه‌ی تجربه."),
          L("Original insight; organisation-level impact.", "بینش تازه و اثرگذاری در سطح سازمان.")
        ] }
    ],
    note: L("A rough rubric from interview-prep sources, not an official formula. The ratios and people counts vary by employer and interviewer.",
            "یک rubric تقریبی از منابع آمادگی مصاحبه، نه فرمول رسمی. نسبت‌ها و تعداد آدم‌ها با شرکت و مصاحبه‌کننده فرق می‌کند.")
  };

  /* ---------------- 4. pay vs level (levels.fyi self-reported US medians, read early Oct 2026) ---------------- */
  H.comp = {
    bands: [L("Entry", "ورودی"), L("Mid", "میانی"), L("Senior", "ارشد"), L("Staff", "Staff")],
    series: [
      { id: "google", name: "Google", codes: ["L3", "L4", "L5", "L6"], total: [212, 308, 446, 711], mult: [1.00, 1.45, 2.10, 3.35] },
      { id: "meta", name: "Meta", codes: ["E3", "E4", "E5", "E6"], total: [183, 296, 437, 692], mult: [1.00, 1.61, 2.38, 3.77] },
      { id: "amazon", name: "Amazon", codes: ["L4", "L5", "L6", "L7"], total: [186, 275, 385, 662], mult: [1.00, 1.48, 2.07, 3.56] },
      { id: "microsoft", name: "Microsoft", codes: ["59", "61", "63", "65"], total: [160, 199, 244, 340], mult: [1.00, 1.24, 1.52, 2.13] }
    ],
    down: [
      { id: "g", label: "Google L5 → L4", pct: 31 },
      { id: "m", label: "Meta E5 → E4", pct: 32 },
      { id: "a", label: "Amazon L6 → L5", pct: 29 },
      { id: "ms1", label: "Microsoft 63 → 62", pct: 17 },
      { id: "ms2", label: "Microsoft 64 → 63", pct: 13 }
    ],
    downStaff: [
      { id: "gs", label: "Google L6 → L5", pct: 37 },
      { id: "ms", label: "Meta E6 → E5", pct: 37 },
      { id: "as", label: "Amazon L7 → L6", pct: 42 },
      { id: "mss", label: "Microsoft 65 → 64", pct: 17 }
    ],
    share: [
      { id: "m3", label: "Meta E3", pct: 79 },
      { id: "m6", label: "Meta E6", pct: 39 },
      { id: "a4", label: "Amazon L4", pct: 76 },
      { id: "a6", label: "Amazon L6", pct: 56 },
      { id: "a7", label: "Amazon L7", pct: 40 }
    ],
    caveat: L("Medians of self-reported total yearly pay (base + stock per year + bonus), mostly US, read from search snapshots of levels.fyi in early October 2026; the site shows no as-of date. They are not offers, bands are wide, and multipliers are our own arithmetic. Microsoft's levels are two steps per title, so we plot the first level of each band (59, 61, 63, 65).",
              "میانه‌ی مجموع پرداختی سالانه بر اساس گزارش کاربران، شامل حقوق پایه، سهام سالانه و پاداش، عمدتا در آمریکا. اعداد در اوایل اکتبر 2026 از نتایج جست‌وجوی levels.fyi خوانده شده‌اند و سایت تاریخ به‌روزرسانی ندارد. این اعداد offer نیستند، بازه‌ها گسترده‌اند و نسبت‌ها را خودمان محاسبه کرده‌ایم. در Microsoft هر عنوان دو سطح دارد، بنابراین اولین سطح هر دسته، یعنی 59، 61، 63 و 65، رسم شده است.")
  };

  /* ---------------- 5. loops compared ---------------- */
  H.loops = [
    { id: "google", name: "Google",
      decider: L("A hiring committee of about 4–5 engineers or managers who did not interview you. It reads your packet and decides hire and level together.",
                 "کمیته‌ای با حدود 4 تا 5 مهندس یا مدیر که شخصا با شما مصاحبه نکرده‌اند. پرونده را می‌خوانند و درباره‌ی استخدام و سطح تصمیم می‌گیرند."),
      when: L("After the loop.", "بعد از دور مصاحبه."),
      upfront: L("Not documented. Candidates report provisional levels, and guides say the committee can move it by a step.",
                 "مستند نشده. داوطلب‌ها سطح موقت گزارش می‌کنند و راهنماها می‌گویند کمیته می‌تواند یک پله جابه‌جایش کند."),
      note: L("Team matching comes after. Down-levels reportedly grew once interviews went remote (an impression; no data).",
              "تطبیق با تیم در مرحله‌ی بعد انجام می‌شود. افزایش down-level با دورکاری شدن مصاحبه‌ها گزارش شده، اما این برداشت است و داده‌ای پشت آن نیست.") },
    { id: "meta", name: "Meta",
      decider: L("Interviewers' recommendations carry the most weight. Some guides add a committee that calibrates and confirms.",
                 "توصیه‌ی مصاحبه‌کننده‌ها بیشترین وزن را دارد. بعضی راهنماها کمیته‌ای را اضافه می‌کنند که کالیبره و تایید می‌کند."),
      when: L("After the loop. Reportedly it can change even before the on-site.", "بعد از دور مصاحبه. گزارش شده حتی پیش از on-site هم می‌تواند عوض شود."),
      upfront: L("Not documented.", "مستند نشده."),
      note: L("Coding answers “hire?”, design answers “what level?”, and behavioural weighs most from E6. Team matching happens before the offer and needs the manager's opt-in, which is a chance to discuss level.",
              "کدنویسی به «hire؟» جواب می‌دهد، design به «چه سطحی؟» و رفتاری از E6 به بعد بیشترین وزن را دارد. تطبیق با تیم پیش از offer انجام می‌شود و به موافقت مدیر نیاز دارد، که فرصتی برای صحبت درباره‌ی سطح است.") },
    { id: "amazon", name: "Amazon",
      decider: L("A debrief. The Bar Raiser (from outside the hiring team) and the hiring manager are the only formal vetoes.",
                 "تصمیم در debrief گرفته می‌شود. فقط Bar Raiser (از بیرون تیم استخدام‌کننده) و hiring manager حق وتوی رسمی دارند."),
      when: L("The requisition level, adjustable in the debrief.", "سطح جایگاه شغلی، که در debrief قابل‌تعدیل است."),
      upfront: L("Likely: Amazon publishes level-specific prep pages, which suggests the loop is built for a target level.",
                 "محتمل: Amazon صفحه‌های آمادگی مخصوص هر سطح منتشر می‌کند، که نشان می‌دهد دور مصاحبه برای یک سطح هدف طراحی شده."),
      note: L("Leadership Principles stories dominate, and a weak round there is almost always a no-hire. An SDE III loop can reportedly end in an SDE II offer.",
              "داستان‌های Leadership Principles غالب‌اند و راند ضعیف در آن‌ها تقریبا همیشه no-hire است. گزارش شده یک دور SDE III می‌تواند به offer سطح SDE II ختم شود.") },
    { id: "microsoft", name: "Microsoft",
      decider: L("The hiring manager with the recruiter. Aggregators mention a senior “as appropriate” interviewer with the last word, a term now used loosely.",
                 "hiring manager همراه با recruiter تصمیم می‌گیرد. سایت‌های تجمیع‌کننده از مصاحبه‌کننده‌ی ارشد as appropriate با اختیار تصمیم نهایی یاد می‌کنند، اما این اصطلاح اکنون کاربرد دقیقی ندارد."),
      when: L("Unclear.", "نامشخص."),
      upfront: L("Unclear.", "نامشخص."),
      note: L("Hires for specific teams. Candidates who apply above their evidence may be offered a lower level to gain experience first (reported).",
              "برای تیم‌های مشخص استخدام می‌کند. طبق گزارش‌ها، به فردی که شواهدش با سطح درخواستی تناسب ندارد، ممکن است سطح پایین‌تری پیشنهاد شود تا تجربه‌ی لازم را کسب کند.") },
    { id: "apple", name: "Apple",
      decider: L("The hiring manager. No committee: each team designs its own interviews and decides in a same-day live discussion.",
                 "hiring manager. بدون کمیته: هر تیم مصاحبه‌های خودش را طراحی می‌کند و در گفتگویی در همان روز تصمیم می‌گیرد."),
      when: L("Unclear.", "نامشخص."),
      upfront: L("Unclear.", "نامشخص."),
      note: L("No company-wide level rubric, so consistency varies by team.", "rubric مشترکی برای سطح‌بندی در کل شرکت وجود ندارد، بنابراین هماهنگی ارزیابی بین تیم‌ها متفاوت است.") },
    { id: "netflix", name: "Netflix",
      decider: L("Team-dependent, with a live discussion after the on-site.", "وابسته به تیم، با یک گفتگوی مستقیم بعد از on-site."),
      when: L("Not documented for external hires.", "برای استخدام بیرونی مستند نشده."),
      upfront: L("Not documented.", "مستند نشده."),
      note: L("Levels are new: introduced in 2022 (E3–E7) after about 25 years with one engineer title, so hiring practice around them is young.",
              "سطح‌ها در 2022، از E3 تا E7، پس از حدود 25 سال استفاده از یک عنوان مهندسی معرفی شدند. بنابراین رویه‌ی استخدام بر اساس آن‌ها هنوز تازه است.") },
    { id: "spotify", name: "Spotify",
      decider: L("Recruiters and hiring managers; no committee is published.", "recruiterها و hiring managerها. اطلاعات عمومی درباره‌ی کمیته منتشر نشده است."),
      when: L("During the interviews, by its own wording.", "در جریان مصاحبه‌ها، طبق متن آگهی‌های شرکت."),
      upfront: L("No: its postings say the level depends on work history plus interview performance.",
                 "نه: آگهی‌هایش می‌گویند سطح به سابقه‌ی کاری به‌علاوه‌ی عملکرد در مصاحبه بستگی دارد."),
      note: L("Our one European example, chosen because it states the rule outright. European coverage in public sources is thin. Ask what evidence they weigh.",
              "تنها نمونه‌ی اروپایی این راهنماست، چون قاعده را صریح بیان می‌کند. اطلاعات عمومی درباره‌ی شرکت‌های اروپایی محدود است. بپرسید چه شواهدی را ارزیابی می‌کنند.") }
  ];

  /* ---------------- 6. accept or push back ---------------- */
  H.accept = {
    when: [
      L("You are moving up a tier, and the pay still beats your alternatives.", "به رده‌ی بالاتری می‌روید و حقوق هنوز از گزینه‌های دیگرتان بهتر است."),
      L("Your learning has plateaued where you are, and this team would teach you something real.", "در محل فعلی به سقف یادگیری رسیده‌اید و تیم جدید فرصت یادگیری معناداری فراهم می‌کند."),
      L("You have no competing offer, or you need out for other reasons.", "offer رقیبی ندارید یا به دلیل‌های دیگر باید از جای فعلی بیرون بروید.")
    ],
    think: [
      L("It signals the company misjudged your scope, rather than measured it.", "شواهد نشان می‌دهد شرکت scope شما را نادرست ارزیابی کرده است."),
      L("The path to the next level is vague, and nobody will write it down.", "مسیر رسیدن به سطح بعد مبهم است و کسی حاضر نیست آن را بنویسد."),
      L("It's a lower level at the same tier, with no gain in pay, learning or scope.", "سطح پایین‌تر در همان رده است، بی‌هیچ سود در حقوق، یادگیری یا scope.")
    ],
    pushback: [
      L("Evidence mapped to the level's descriptors: people, teams, ambiguity, numbers.", "شواهد منطبق با انتظارات سطح: افراد، تیم‌ها، ابهام و نتایج عددی."),
      L("An offer from a comparable-tier company, at the level you want (only if it's real).", "offer از شرکتی هم‌رده، در سطحی که می‌خواهید (فقط اگر واقعی است)."),
      L("A real willingness to walk, and an offer to redo a round or talk with the hiring manager.", "آمادگی واقعی برای نپذیرفتن پیشنهاد و درخواست تکرار یک بخش مصاحبه یا گفتگو با hiring manager.")
    ],
    writing: [
      L("The next level's criteria.", "معیارهای سطح بعد."),
      L("The usual time people spend in this level.", "مدت معمول ماندن در این سطح."),
      L("The date of a first review with your manager.", "تاریخ اولین بازبینی با مدیرتان.")
    ]
  };
})();

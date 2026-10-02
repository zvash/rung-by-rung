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
      title: L("A first guess", "حدس اول"),
      what: L("Your CV, your title and the open requisition give a provisional level. Some employers fix it up front. Others, like Spotify in its own postings, say it is determined during the interviews.",
              "رزومه، عنوان شما و جایگاه شغلی باز یک سطح موقت می‌دهد. بعضی شرکت‌ها آن را از پیش ثابت می‌کنند. بعضی دیگر، مثل Spotify در آگهی‌های خودش، می‌گویند سطح در جریان مصاحبه‌ها تعیین می‌شود."),
      you: L("State your target level with two facts. Ask which level the loop is built for, and whether it can change.",
             "سطح هدفتان را با دو واقعیت بگویید. بپرسید دور مصاحبه برای چه سطحی طراحی شده و آیا می‌تواند عوض شود."),
      risk: L("Silence lets the first guess harden.", "سکوت باعث می‌شود حدس اول سفت شود.") },
    { id: "coding", icon: "tool",
      title: L("Screens and coding", "غربال‌گری و کدنویسی"),
      what: L("Coding mostly decides hire or no-hire. It rarely moves the level in either direction.",
              "کدنویسی بیشتر hire یا no-hire را تعیین می‌کند. به‌ندرت سطح را در هر جهتی جابه‌جا می‌کند."),
      you: L("Clear the bar, then stop over-investing. Hours on a fourth coding pattern are hours not spent on design and stories.",
             "از آستانه عبور کنید و بعد زیاده‌روی نکنید. ساعت‌هایی که روی الگوی چهارم کدنویسی می‌گذارید، ساعت‌هایی است که صرف design و داستان‌ها نشده."),
      risk: L("A strong coding round feels like a win and hides a weak design round.", "راند کدنویسی قوی شبیه برد است و راند design ضعیف را پنهان می‌کند.") },
    { id: "loop", icon: "chat",
      title: L("Design and behavioural", "design و رفتاری"),
      what: L("These rounds set the level. Interviewers listen for who drives, whether you name what is hard, and how big your stories are in people, teams and ambiguity.",
              "این راندها سطح را تعیین می‌کنند. مصاحبه‌کننده‌ها گوش می‌دهند چه کسی جلسه را پیش می‌برد، آیا می‌گویید چه چیزی سخت است، و داستان‌هایتان از نظر آدم‌ها، تیم‌ها و ابهام چقدر بزرگ است."),
      you: L("Lead the design round. Prepare three stories where your decision changed other people's work.",
             "راند design را رهبری کنید. سه داستان آماده کنید که در آن تصمیم شما کار دیگران را عوض کرد."),
      risk: L("A textbook answer reads as mid-level, however clean it is.", "پاسخ کتابی، هر قدر تمیز، در سطح میانی خوانده می‌شود.") },
    { id: "debrief", icon: "users",
      title: L("Debrief or committee", "debrief یا کمیته"),
      what: L("Written feedback goes to a debrief or committee that decides hire and level. At Google a hiring committee that has never met you reads the packet. At Amazon an outside Bar Raiser holds a veto. At Meta the interviewers' recommendation carries most weight.",
              "بازخورد مکتوب به debrief یا کمیته‌ای می‌رسد که hire و سطح را تعیین می‌کند. در Google کمیته‌ی استخدامی که شما را هرگز ندیده پرونده را می‌خواند. در Amazon یک Bar Raiser از بیرون حق وتو دارد. در Meta توصیه‌ی مصاحبه‌کننده‌ها بیشترین وزن را دارد."),
      you: L("You can't speak in that room, so make your answers easy to write down: a clear claim, a number, a one-sentence summary at the end of each story.",
             "در آن اتاق نمی‌توانید حرف بزنید، پس پاسخ‌هایتان را آسان‌نوشتنی کنید: یک ادعای روشن، یک عدد، یک جمله‌ی جمع‌بندی در پایان هر داستان."),
      risk: L("A good answer nobody can summarise doesn't survive the debrief.", "پاسخ خوبی که کسی نتواند خلاصه‌اش کند از debrief جان به در نمی‌برد.") },
    { id: "offer", icon: "briefcase",
      title: L("The offer", "پیشنهاد کاری"),
      what: L("Level comes first, then compensation. If the level is lower than you hoped, this is the moment to ask for a review. Silence on level can read as acceptance.",
              "اول سطح می‌آید، بعد حقوق و مزایا. اگر سطح پایین‌تر از انتظارتان است، همین لحظه وقت درخواست بازبینی است. سکوت درباره‌ی سطح می‌تواند پذیرش خوانده شود."),
      you: L("Ask to revisit the level before any talk of pay. If you accept, get next-level criteria in writing.",
             "پیش از هر صحبتی از حقوق بخواهید سطح بازبینی شود. اگر می‌پذیرید، معیارهای سطح بعد را مکتوب بگیرید."),
      risk: L("Talking pay first turns the level into a done deal.", "اول از حقوق حرف زدن سطح را به یک معامله‌ی تمام‌شده تبدیل می‌کند.") }
  ];

  H.moves = [
    L("Coding gates the hire. Design and behavioural rounds set the level, according to the interview guides and the levelling write-ups we found.",
      "کدنویسی hire را دروازه‌بانی می‌کند. راندهای design و رفتاری سطح را تعیین می‌کنند، طبق راهنماهای مصاحبه و نوشته‌هایی که درباره‌ی سطح‌دهی پیدا کردیم."),
    L("Your old title only shapes the first guess and how your CV is read. Employer tier matters more than the word “senior”.",
      "عنوان قبلی‌تان فقط حدس اول و شیوه‌ی خوانده شدن رزومه را شکل می‌دهد. رده‌ی شرکت از کلمه‌ی «senior» مهم‌تر است."),
    L("The level can move at two moments: after an early screen, and after the debrief (reported by candidates, not documented by employers).",
      "سطح می‌تواند در دو لحظه جابه‌جا شود: بعد از یک غربال‌گری اولیه، و بعد از debrief (گزارش داوطلب‌ها، نه مستندات شرکت‌ها).")
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
               "میان رده‌های مختلف شرکت‌ها می‌تواند 3 تا 5 برابر فرق کند، و برای همین رفتن به رده‌ی بالاتر می‌تواند عنوان را پایین بیاورد و باز هم حقوق را بالا ببرد."),
      src: "M", by: "Gergely Orosz" },
    { who: L("A Staff engineer at a small company", "یک مهندس Staff در شرکت کوچک"),
      means: L("Often compared with a Senior at big tech.", "اغلب با Senior در big tech مقایسه می‌شود."),
      src: "L", by: L("commentary", "نظرها") },
    { who: L("A Senior at big tech", "یک Senior در big tech"),
      means: L("Meta's E5 is Senior internally yet can read as generic from outside, and an Amazon L5 is not a Google L5: Amazon's L5 median pay sits below Google's L4.",
               "E5 در Meta داخل شرکت Senior است ولی از بیرون می‌تواند عمومی خوانده شود، و L5 در Amazon با L5 در Google یکی نیست: میانه‌ی حقوق L5 در Amazon زیر L4 در Google است."),
      src: "L", by: L("commentary + levels.fyi", "نظرها + levels.fyi") },
    { who: L("The same employer, a different year", "همان شرکت، سالی دیگر"),
      means: L("In 2022 Netflix re-levelled tenured staff and principal engineers to E5 when it introduced levels, after about 25 years with one engineer title.",
               "در 2022 وقتی Netflix سطح‌بندی را آورد، مهندس‌های staff و principal قدیمی را به E5 برد، بعد از حدود 25 سال با یک عنوان مهندسی."),
      src: "M", by: "Pragmatic Engineer" }
  ];

  /* ---------------- 3. interviewer signals by level (mid / senior / staff) ---------------- */
  H.signals = {
    cols: [{ id: "L4", name: L("Mid-level", "سطح میانی") }, { id: "L5", name: L("Senior", "ارشد") }, { id: "L6", name: L("Staff", "Staff") }],
    rows: [
      { id: "drive",
        label: L("Design: who drives", "design: چه کسی جلسه را پیش می‌برد"),
        cells: [
          L("Leads the early part (requirements, APIs, schema, high-level design). The interviewer leads the later detail.", "بخش اول (نیازمندی‌ها، API، schema، طراحی سطح‌بالا) را پیش می‌برد. مصاحبه‌کننده جزئیات بعدی را."),
          L("Names what makes the system hard, spots the limits of their own design, weighs alternatives and steers.", "می‌گوید چه چیزی سیستم را سخت می‌کند، محدودیت طراحی خودش را می‌بیند، جایگزین‌ها را می‌سنجد و مسیر را هدایت می‌کند."),
          L("Leads nearly the whole session. The interviewer only refocuses.", "تقریبا کل جلسه را رهبری می‌کند. مصاحبه‌کننده فقط تمرکز را برمی‌گرداند.")
        ] },
      { id: "ratio",
        label: L("Breadth to depth", "عرض به عمق"),
        cells: [
          L("About 80 / 20. Some components stay abstract.", "حدود 80 به 20. بعضی اجزا کلی می‌مانند."),
          L("About 60 / 40. Depth comes from hands-on specifics.", "حدود 60 به 40. عمق از جزئیات دست‌اول می‌آید."),
          L("About 40 / 60. Novel insight; can teach the interviewer something.", "حدود 40 به 60. نکته‌ی تازه؛ می‌تواند چیزی به مصاحبه‌کننده یاد بدهد.")
        ] },
      { id: "story",
        label: L("Behavioural scope", "scope داستان‌های رفتاری"),
        cells: [
          L("Own work or the team's focus area. Takes ownership of ambiguous tasks.", "کار خودش یا حوزه‌ی تمرکز تیم. مالکیت taskهای مبهم را می‌پذیرد."),
          L("Team-wide change, about three or more people. Builds consensus across the team or beyond. Disagreements with several leads.", "تغییر در سطح تیم، حدود سه نفر یا بیشتر. اجماع در تیم یا فراتر. اختلاف با چند لید."),
          L("Ambiguous work across two or more teams. Cross-team conflict.", "کار مبهم میان دو تیم یا بیشتر. تعارض میان‌تیمی.")
        ] },
      { id: "down",
        label: L("What pushes the level down", "چه چیزی سطح را پایین می‌آورد"),
        cells: [
          L("Only executing others' specs.", "فقط اجرای مشخصات دیگران."),
          L("A generic design; stories about your own tasks.", "طراحی کلیشه‌ای؛ داستان‌هایی درباره‌ی taskهای خودتان."),
          L("Needing steering; thin organisation-level stories. A behavioural fail is a no-hire at Meta from E6.", "نیاز به هدایت؛ داستان‌های سطح‌سازمانی کم‌مایه. شکست در رفتاری در Meta از E6 به بالا یعنی no-hire.")
        ] },
      { id: "up",
        label: L("What pushes the level up", "چه چیزی سطح را بالا می‌برد"),
        cells: [
          L("Self-initiated work, with results.", "کار خودآغاز، با نتیجه."),
          L("Concrete trade-offs backed by experience.", "trade-offهای مشخص با پشتوانه‌ی تجربه."),
          L("Original insight; organisation-level impact.", "نکته‌ی بدیع؛ اثرگذاری در سطح سازمان.")
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
              "میانه‌ی مجموع پرداختی سالانه‌ی خودگزارش‌شده (پایه + سهام سالانه + پاداش)، بیشتر آمریکا، که از نمایه‌های جست‌وجوی levels.fyi در اوایل اکتبر 2026 خوانده شده؛ سایت تاریخ به‌روزرسانی نشان نمی‌دهد. این‌ها offer نیستند، بازه‌ها پهن است و ضریب‌ها محاسبه‌ی خودمان است. سطح‌های Microsoft هر عنوان دو پله دارد، پس اولین سطح هر دسته (59، 61، 63، 65) رسم شده است.")
  };

  /* ---------------- 5. loops compared ---------------- */
  H.loops = [
    { id: "google", name: "Google",
      decider: L("A hiring committee of about 4–5 engineers or managers who did not interview you. It reads your packet and decides hire and level together.",
                 "کمیته‌ی استخدام شامل حدود 4 تا 5 مهندس یا مدیر که شما را مصاحبه نکرده‌اند. پرونده‌ی شما را می‌خواند و هم‌زمان hire و سطح را تعیین می‌کند."),
      when: L("After the loop.", "بعد از دور مصاحبه."),
      upfront: L("Not documented. Candidates report provisional levels, and guides say the committee can move it by a step.",
                 "مستند نشده. داوطلب‌ها سطح موقت گزارش می‌کنند و راهنماها می‌گویند کمیته می‌تواند یک پله جابه‌جایش کند."),
      note: L("Team matching comes after. Down-levels reportedly grew once interviews went remote (an impression; no data).",
              "تطبیق با تیم بعد می‌آید. گزارش شده با دورکاری شدن مصاحبه‌ها down-levelها بیشتر شد (برداشت؛ بدون داده).") },
    { id: "meta", name: "Meta",
      decider: L("Interviewers' recommendations carry the most weight. Some guides add a committee that calibrates and confirms.",
                 "توصیه‌ی مصاحبه‌کننده‌ها بیشترین وزن را دارد. بعضی راهنماها کمیته‌ای را اضافه می‌کنند که کالیبره و تایید می‌کند."),
      when: L("After the loop. Reportedly it can change even before the on-site.", "بعد از دور مصاحبه. گزارش شده حتی پیش از on-site هم می‌تواند عوض شود."),
      upfront: L("Not documented.", "مستند نشده."),
      note: L("Coding answers “hire?”, design answers “what level?”, and behavioural weighs most from E6. Team matching happens before the offer and needs the manager's opt-in, which is a chance to discuss level.",
              "کدنویسی به «hire؟» جواب می‌دهد، design به «چه سطحی؟»، و رفتاری از E6 به بعد بیشترین وزن را دارد. تطبیق با تیم پیش از offer انجام می‌شود و به موافقت مدیر نیاز دارد، که فرصتی برای صحبت درباره‌ی سطح است.") },
    { id: "amazon", name: "Amazon",
      decider: L("A debrief. The Bar Raiser (from outside the hiring team) and the hiring manager are the only formal vetoes.",
                 "یک debrief. Bar Raiser (از بیرون تیم استخدام‌کننده) و hiring manager تنها وتوهای رسمی‌اند."),
      when: L("The requisition level, adjustable in the debrief.", "سطح جایگاه شغلی، که در debrief قابل‌تعدیل است."),
      upfront: L("Likely: Amazon publishes level-specific prep pages, which suggests the loop is built for a target level.",
                 "محتمل: Amazon صفحه‌های آمادگی مخصوص هر سطح منتشر می‌کند، که نشان می‌دهد دور مصاحبه برای یک سطح هدف طراحی شده."),
      note: L("Leadership Principles stories dominate, and a weak round there is almost always a no-hire. An SDE III loop can reportedly end in an SDE II offer.",
              "داستان‌های Leadership Principles غالب‌اند و راند ضعیف در آن‌ها تقریبا همیشه no-hire است. گزارش شده یک دور SDE III می‌تواند به offer سطح SDE II ختم شود.") },
    { id: "microsoft", name: "Microsoft",
      decider: L("The hiring manager with the recruiter. Aggregators mention a senior “as appropriate” interviewer with the last word, a term now used loosely.",
                 "hiring manager همراه recruiter. تجمیع‌کننده‌ها از یک مصاحبه‌کننده‌ی ارشد «as appropriate» با حرف آخر یاد می‌کنند، اصطلاحی که حالا آزادانه به کار می‌رود."),
      when: L("Unclear.", "نامشخص."),
      upfront: L("Unclear.", "نامشخص."),
      note: L("Hires for specific teams. Candidates who apply above their evidence may be offered a lower level to gain experience first (reported).",
              "برای تیم‌های مشخص استخدام می‌کند. گزارش شده به کسی که بالاتر از مدرکش درخواست داده ممکن است سطح پایین‌تری پیشنهاد شود تا اول تجربه بگیرد.") },
    { id: "apple", name: "Apple",
      decider: L("The hiring manager. No committee: each team designs its own interviews and decides in a same-day live discussion.",
                 "hiring manager. بدون کمیته: هر تیم مصاحبه‌های خودش را طراحی می‌کند و در یک گفتگوی زنده‌ی همان روز تصمیم می‌گیرد."),
      when: L("Unclear.", "نامشخص."),
      upfront: L("Unclear.", "نامشخص."),
      note: L("No company-wide level rubric, so consistency varies by team.", "rubric سطح در کل شرکت وجود ندارد، پس یکدستی از تیمی به تیم دیگر فرق می‌کند.") },
    { id: "netflix", name: "Netflix",
      decider: L("Team-dependent, with a live discussion after the on-site.", "وابسته به تیم، با یک گفتگوی زنده بعد از on-site."),
      when: L("Not documented for external hires.", "برای استخدام بیرونی مستند نشده."),
      upfront: L("Not documented.", "مستند نشده."),
      note: L("Levels are new: introduced in 2022 (E3–E7) after about 25 years with one engineer title, so hiring practice around them is young.",
              "سطح‌ها تازه‌اند: در 2022 (E3 تا E7) آمدند، بعد از حدود 25 سال با یک عنوان مهندسی؛ پس رویه‌ی استخدام پیرامونشان جوان است.") },
    { id: "spotify", name: "Spotify",
      decider: L("Recruiters and hiring managers; no committee is published.", "recruiterها و hiring managerها؛ کمیته‌ای منتشر نشده."),
      when: L("During the interviews, by its own wording.", "در جریان مصاحبه‌ها، طبق عبارت خودش."),
      upfront: L("No: its postings say the level depends on work history plus interview performance.",
                 "نه: آگهی‌هایش می‌گویند سطح به سابقه‌ی کاری به‌علاوه‌ی عملکرد در مصاحبه بستگی دارد."),
      note: L("Our one European example, chosen because it states the rule outright. European coverage in public sources is thin. Ask what evidence they weigh.",
              "تنها نمونه‌ی اروپایی ما، چون قاعده را صریح می‌گوید. پوشش شرکت‌های اروپایی در منابع عمومی کم است. بپرسید چه مدرکی را می‌سنجند.") }
  ];

  /* ---------------- 6. accept or push back ---------------- */
  H.accept = {
    when: [
      L("You are moving up a tier, and the pay still beats your alternatives.", "به رده‌ی بالاتری می‌روید و حقوق هنوز از گزینه‌های دیگرتان بهتر است."),
      L("Your learning has plateaued where you are, and this team would teach you something real.", "یادگیری‌تان همین‌جا که هستید به سقف رسیده و این تیم چیزی واقعی به شما یاد می‌دهد."),
      L("You have no competing offer, or you need out for other reasons.", "offer رقیبی ندارید یا به دلیل‌های دیگر باید از جای فعلی بیرون بروید.")
    ],
    think: [
      L("It signals the company misjudged your scope, rather than measured it.", "نشانه‌ی این است که شرکت scope شما را اشتباه سنجیده، نه این‌که اندازه گرفته باشد."),
      L("The path to the next level is vague, and nobody will write it down.", "مسیر رسیدن به سطح بعد مبهم است و کسی حاضر نیست آن را بنویسد."),
      L("It's a lower level at the same tier, with no gain in pay, learning or scope.", "سطح پایین‌تر در همان رده است، بی‌هیچ سود در حقوق، یادگیری یا scope.")
    ],
    pushback: [
      L("Evidence mapped to the level's descriptors: people, teams, ambiguity, numbers.", "مدرک نگاشت‌شده به توصیف سطح: آدم‌ها، تیم‌ها، ابهام، عددها."),
      L("An offer from a comparable-tier company, at the level you want (only if it's real).", "offer از شرکتی هم‌رده، در سطحی که می‌خواهید (فقط اگر واقعی است)."),
      L("A real willingness to walk, and an offer to redo a round or talk with the hiring manager.", "آمادگی واقعی برای رفتن، و پیشنهاد تکرار یک راند یا گفتگو با hiring manager.")
    ],
    writing: [
      L("The next level's criteria.", "معیارهای سطح بعد."),
      L("The usual time people spend in this level.", "مدت معمولی که آدم‌ها در این سطح می‌مانند."),
      L("The date of a first review with your manager.", "تاریخ اولین بازبینی با مدیرتان.")
    ]
  };
})();

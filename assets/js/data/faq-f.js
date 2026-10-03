/* FAQ, part F: interview craft and context (system design, "I" vs "we", startup vs big company, moving countries).
   Company facts come from the research notes and carry their hedges. Stories are illustrative composites with made-up numbers. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;
  S.data.faq = S.data.faq || [];
  S.data.faq.push(

    {
      id: "design-prep",
      group: "hiring",
      levels: ["L4", "L5", "L6"],
      q: L("How should I prepare for the system-design round so it signals the right level?",
           "برای راند system design چطور آماده شوم که سطح درست را نشان بدهد؟"),
      short: L("Practise leading, not just solving: name what's hard before you draw, weigh two alternatives, and find a limit in your own design. Interviewers read who drives, the breadth-to-depth balance and how you handle your design's weaknesses.",
               "هدایت گفتگو را تمرین کنید، نه فقط حل مساله را. پیش از رسم طراحی، دشواری اصلی را بگویید، دو گزینه را بسنجید و محدودیت طرح خود را مشخص کنید. مصاحبه‌کننده به استقلال، گستردگی و عمق بحث توجه می‌کند."),
      body: L("System design is where level is most often set. Public guidance describes the same pattern across levels. At mid-level you lead the first part (requirements, APIs, schema, a high-level design) and the interviewer leads the details, at roughly 80% breadth to 20% depth. At senior you name what makes the problem hard, notice the limits of your own design, weigh alternatives and steer, at about 60/40, with depth that comes from hands-on specifics. At staff you lead nearly the whole session, at about 40/60, and bring an insight nobody asked for.\n\n(The ratios are a rough rubric from interview-prep sources, not an official formula, and they vary by employer.)\n\nTo prepare, pick three or four problems and practise out loud with someone who keeps asking “what breaks first?” Before you draw anything, say what makes this problem hard. For each choice, say the alternative and why you didn't pick it. Raise one weakness in your own design before the interviewer does. And pick one system you've really run, and be ready to go deep on its numbers, its worst incident and what you'd change.",
              "مصاحبه‌ی system design معمولا بیشترین نقش را در تعیین سطح دارد. راهنمای عمومی همین الگو را در سطح‌ها توصیف می‌کند. در سطح میانی بخش اول (نیازمندی‌ها، API، schema، طراحی سطح‌بالا) را شما پیش می‌برید و جزئیات را مصاحبه‌کننده، با حدود 80% گستردگی و 20% عمق. در سطح senior می‌گویید چه چیزی مساله را سخت می‌کند، محدودیت‌های طراحی خودتان را می‌بینید، جایگزین‌ها را می‌سنجید و مسیر را هدایت می‌کنید، با حدود 60 به 40 و عمقی که از تجربه‌ی عملی می‌آید. در سطح staff تقریبا کل جلسه را رهبری می‌کنید، با حدود 40 به 60 و نکته‌ای را مطرح می‌کنید که کسی درباره‌اش نپرسیده بود.\n\n(این نسبت‌ها rubric تقریبی منابع آمادگی مصاحبه است، نه فرمول رسمی و از شرکتی به شرکت دیگر فرق می‌کند.)\n\nبرای آماده شدن سه چهار مساله انتخاب کنید و پاسخ‌هایتان را با صدای بلند تمرین کنید، با کسی که مدام می‌پرسد «اول چه چیزی خراب می‌شود؟» پیش از رسم طراحی بگویید چه چیزی این مساله را سخت می‌کند. برای هر انتخاب جایگزین و دلیل انتخاب نکردن آن را بگویید. پیش از مصاحبه‌کننده یک ضعف طراحی خودتان را مطرح کنید. و یک سیستم را که واقعا اداره کرده‌اید انتخاب کنید و برای توضیح جزئیات آماده باشید: عددهایش، بدترین incidentش و آنچه تغییر می‌دادید."),
      steps: [
        L("Practise three or four design problems out loud with someone who keeps asking “what breaks first?”",
          "پاسخ به سه چهار مساله‌ی design را با صدای بلند تمرین کنید، با کسی که مدام می‌پرسد «اول چه چیزی خراب می‌شود؟»"),
        L("Open every answer with what makes the problem hard, before any box is drawn.",
          "پیش از رسم اجزا، توضیح دهید چه چیزی مساله را دشوار می‌کند."),
        L("For each choice, name the alternative and why you didn't pick it.",
          "برای هر انتخاب، جایگزین و دلیل انتخاب نکردنش را بگویید."),
        L("Prepare one system you've really run: its numbers, its worst incident, what you'd change.",
          "یک سیستم را که واقعا اداره کرده‌اید آماده کنید: عددها، بدترین incident، آنچه تغییر می‌دادید.")
      ],
      story: L("Sara answered a rate-limiter question with a clean diagram and gave every box equal airtime. The feedback was “competent, textbook”. Next time she began with “the limiter is easy; the hard parts are fairness between tenants and what happens when the counter store is down”, spent most of her time there, and pointed out a flaw in her own first design along with its fix. Same knowledge, different altitude.",
               "سارا به یک پرسش rate limiter با یک نمودار تمیز جواب داد و برای توضیح همه‌ی اجزای طراحی به یک اندازه وقت گذاشت. بازخورد این بود: «مسلط، کتابی». دفعه‌ی بعد با این شروع کرد: «خودِ limiter آسان است. بخش‌های سخت انصاف میان tenantها و وضعیتی است که ذخیره‌ی شمارنده از کار بیفتد»، بیشتر وقتش را همان‌جا گذاشت و ایرادی در طراحی اولیه‌ی خودش را همراه با راه‌حل آن مطرح کرد. همان دانش، سطح متفاوت."),
      links: [
        { route: "hire/signals", label: L("Design and story altitudes", "سطح پاسخ‌های design و روایت تجربه‌ها") },
        { route: "practice", label: L("Practise: what would you do?", "تمرین: شما چه می‌کردید؟") }
      ]
    },

    {
      id: "we-vs-i",
      group: "hiring",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("In behavioural interviews, should I say “I” or “we”?",
           "در مصاحبه‌ی رفتاری «من» بگویم یا «ما»؟"),
      short: L("Use “I” for what you decided and did, “we” for results and credit. Interviewers are listening for your role and the scope of your influence, and “we did it” hides both.",
               "«من» را برای آنچه تصمیم گرفتید و انجام دادید به کار ببرید و «ما» را برای بیان نتیجه‌ی مشترک و به‌رسمیت‌شناختن سهم دیگران. مصاحبه‌کننده‌ها دنبال نقش شما و دامنه‌ی اثرتان‌اند و «ما کردیم» هر دو را پنهان می‌کند."),
      body: L("An interviewer has one job in a behavioural round: work out what you did and at what scope. “We migrated the payments service” could describe the project lead or the person who changed a config value. Public hiring rubrics describe the mid-level signal as owning your own work or your team's focus area, the senior signal as team-wide change involving about three or more people, and the staff signal as ambiguous work across two or more teams (a rubric from interview-prep guides, so approximate).\n\nSo be precise about your share. Use “I” for decisions and actions: “I proposed splitting the migration into three phases; I wrote the design; I convinced the payments team to adopt the API contract.” Use “we” for outcomes and for credit you want to give: “we launched on time with no customer downtime.” Never claim others' work, because a good interviewer will ask “what exactly did you do?” within two questions.\n\nA simple shape: the situation in one sentence, your decision, what you did (three actions), the result with numbers, and what you'd do differently. Include a moment where other people's work changed because of your decision. That is what moves a story up a level.",
              "مصاحبه‌کننده در راند رفتاری یک کار دارد: بفهمد شما چه کرده‌اید و در چه scope. «ما سرویس پرداخت را مهاجرت دادیم» می‌تواند توصیف رهبر پروژه باشد یا کسی که یک مقدار config را عوض کرده. rubricهای عمومی استخدام سیگنال سطح میانی را own کردن کار خودتان یا حوزه‌ی تمرکز تیم‌تان، سیگنال senior را تغییر در سطح تیم با مشارکت حدود سه نفر یا بیشتر و سیگنال staff را کار مبهم میان دو تیم یا بیشتر می‌دانند (rubricی از راهنماهای آمادگی مصاحبه، پس تقریبی).\n\nپس درباره‌ی سهم خودتان دقیق باشید. «من» را برای تصمیم‌ها و اقدام‌ها به کار ببرید: «من پیشنهاد دادم migration در سه مرحله انجام شود. طراحی را نوشتم. تیم پرداخت را قانع کردم قرارداد API را بپذیرد.» «ما» را برای بیان نتیجه‌های مشترک و به‌رسمیت‌شناختن سهم دیگران: «به‌موقع و بدون downtime برای مشتری launch کردیم.» هرگز کار دیگران را به نام خودتان نگویید، چون مصاحبه‌کننده‌ی خوب ظرف دو پرسش می‌پرسد «دقیقا چه کردید؟»\n\nیک شکل ساده: وضعیت در یک جمله، تصمیم شما، آنچه کردید (سه اقدام)، نتیجه با عدد و آنچه متفاوت انجام می‌دادید. لحظه‌ای را هم بیاورید که کار دیگران به‌خاطر تصمیم شما عوض شد. همین داستان را یک سطح بالا می‌برد."),
      steps: [
        L("Rewrite one story with every verb marked “I” or “we”. Make sure the decisions are all “I”.",
          "یک داستان را با علامت‌گذاری هر فعل به «من» یا «ما» بازنویسی کنید. مطمئن شوید همه‌ی تصمیم‌ها «من» هستند."),
        L("Add one sentence about whose work changed because of your decision.",
          "یک جمله اضافه کنید درباره‌ی این‌که کار چه کسی به‌خاطر تصمیم شما عوض شد."),
        L("Replace “improved” and “helped” with the number and the beneficiary.",
          "جای «بهتر کردم» و «کمک کردم» عدد و ذی‌نفع بگذارید."),
        L("Have a friend ask “what exactly did you do?” after each story, and answer in one breath.",
          "از دوستتان بخواهید پس از هر روایت بپرسد «دقیقا چه کردی؟» پاسخ کوتاه و مشخص آماده کنید.")
      ],
      story: null,
      links: [
        { route: "hire/numbers", label: L("Scope in numbers", "scope به زبان عدد") },
        { route: "toolkit/statement", label: L("Impact statement builder", "سازنده‌ی جمله‌ی اثرگذاری") }
      ]
    },

    {
      id: "startup-vs-bigco",
      group: "hiring",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("Startup or big company: which is better for my level progression?",
           "استارتاپ یا شرکت بزرگ: کدام برای پیشرفت سطح من بهتر است؟"),
      short: L("In no data we know of does either win on speed. Big companies give written ladders, bands and bigger scope ceilings; startups give breadth and fast titles that travel badly. Choose by what you want to learn and what evidence you'll be able to show.",
               "داده‌ی قابل‌اتکایی درباره‌ی سرعت بیشتر رشد در یکی از این دو نداریم. شرکت بزرگ، نردبان مکتوب و scope وسیع‌تر دارد. استارتاپ ممکن است زودتر مسئولیت گسترده و عنوان بدهد، اما عنوانش قابل‌مقایسه نیست. فرصت یادگیری و شواهد کار را مبنا بگذارید."),
      body: L("There's no good data on whether people get promoted faster at startups or at large companies, and titles aren't comparable: startup titles are unregulated, and big-company ladders differ in what each level means. What exists is structure.\n\nAt a big company the ladder is written, promotions go through a process and a committee, and levels set pay bands. Scope ceilings are higher because there are bigger systems and more teams to influence, but Senior is a common plateau and bands bind: Netflix's 2022 levels left people above their band with frozen raises until promotion. At a startup you may get broader scope sooner and a title that moves quickly. But the title may not travel: a “senior” at a small company can land mid-level at a larger one (see Orosz), and a small company's Staff is often compared with big tech's Senior.\n\nSo think in evidence, not titles. Where will you be able to say “I owned X for N people over M months, and it moved Y by Z”? Where will you work with people better than you? And if you might switch back later, a startup with real scope and numbers travels better than one with a big title and no outcomes.",
              "داده‌ی قابل‌اتکایی نداریم که نشان دهد ارتقا در استارتاپ سریع‌تر است یا در شرکت بزرگ. عنوان‌ها هم مستقیما قابل مقایسه نیستند. استارتاپ‌ها برای عنوان‌ها استاندارد یکسانی ندارند و تعریف هر سطح در نردبان شرکت‌های بزرگ هم متفاوت است. با این حال، می‌توان ساختار مسیر رشد را مقایسه کرد.\n\nدر شرکت بزرگ، نردبان معمولا مکتوب است، ارتقا فرایند مشخص و کمیته دارد و سطح‌ها بازه‌ی حقوق را تعیین می‌کنند. سیستم‌های بزرگ‌تر و تیم‌های بیشتر، امکان دستیابی به scope گسترده‌تری را فراهم می‌کنند. با این حال، بسیاری از مهندس‌ها در سطح ارشد می‌مانند و بازه‌های حقوق هم محدودیت ایجاد می‌کنند. در سطح‌بندی 2022 در Netflix، حقوق افرادی که بالاتر از بازه‌ی سطح خود بودند تا زمان ارتقا ثابت ماند. در استارتاپ ممکن است زودتر مسئولیت گسترده‌تری بگیرید و عنوانتان سریع‌تر تغییر کند، اما شرکت بعدی ممکن است آن عنوان را معادل سطح دیگری بداند. برای مثال، «senior» یک شرکت کوچک ممکن است در شرکت بزرگ‌تر در سطح میانی قرار بگیرد (Orosz را ببینید). Staff در شرکت کوچک را هم اغلب با Senior در big tech مقایسه می‌کنند.\n\nبنابراین به شواهد عملکرد فکر کنید، نه فقط عنوان. کجا می‌توانید بگویید «X را برای N نفر در M ماه own کردم و شاخص Y را به اندازه‌ی Z تغییر دادم»؟ کجا با افرادی کار می‌کنید که از شما قوی‌ترند؟ اگر احتمال می‌دهید بعدا به شرکت بزرگ برگردید، استارتاپی با scope واقعی و نتایج قابل‌اندازه‌گیری، شواهد قابل‌اتکاتری برای شرکت بعدی فراهم می‌کند تا عنوانی بزرگ بدون نتیجه."),
      steps: [
        L("Write what you want to learn in the next two years, and which environment teaches it fastest.",
          "بنویسید دو سال آینده چه چیزی می‌خواهید یاد بگیرید و کدام محیط فرصت یادگیری سریع‌تری فراهم می‌کند."),
        L("Ask each place: who is at the level I want, and what did they work on to get there?",
          "از هر جا بپرسید: چه کسی در سطحی که من می‌خواهم است و برای رسیدن به آن روی چه کاری کار کرده؟"),
        L("Compare written level descriptions, not titles.",
          "توصیف مکتوب سطح‌ها را مقایسه کنید، نه عنوان‌ها را."),
        L("Whichever you pick, keep an evidence log in units that travel: people, teams, ambiguity, numbers.",
          "در هر محیط، دستاوردها را با معیارهای قابل‌مقایسه ثبت کنید: افراد، تیم‌ها، ابهام و نتایج عددی.")
      ],
      story: null,
      links: [
        { route: "hire/numbers", label: L("Titles by company type", "عنوان‌ها بر اساس نوع شرکت") },
        { route: "faq/startup-senior", label: L("“Senior” at a startup", "«Senior» در استارتاپ") }
      ]
    },

    {
      id: "country-move",
      group: "hiring",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("I'm moving to another country. Will my level change?",
           "به کشور دیگری می‌روم. سطح من عوض می‌شود؟"),
      short: L("We found no source showing that geography alone changes level. The documented effect is on pay, not level. What matters more is the employer's tier, and whether you move within one company or between two.",
               "منبعی پیدا نکردیم که نشان بدهد جغرافیا به‌تنهایی سطح را عوض می‌کند. اثر مستند روی حقوق است، نه سطح. چیزی که بیشتر اهمیت دارد رده‌ی شرکت است و این‌که درون یک شرکت جابه‌جا می‌شوید یا میان دو شرکت."),
      body: L("We found no source showing that region alone changes level. Level follows scope and the employer's tier, which is why Gergely Orosz's analysis of down-levelling puts employer tier, not geography, at the centre. The documented effect of location is on pay. A candidate thread (weak, anecdotal) says a Google IC6 in London earns about $400K against $600K or more in New York or the Bay Area, and another reports roughly a 40% drop in total pay on a US-to-Europe transfer at Meta. In levels.fyi's Amazon data, the same level differs by about 1.28× between New York and Phoenix, which is less than one level step.\n\nTwo different situations. **Within one company**, we found no evidence that a transfer changes level, only a reported pay adjustment. **Between companies**, you go through a loop like anyone else, and the level comes from the loop.\n\nPractically: ask the recruiter for level and pay in the destination's currency and location band; compare total pay, not base; and keep your work evidence in units that travel: people, teams, ambiguity, numbers.",
              "منبعی پیدا نکردیم که نشان بدهد منطقه به‌تنهایی سطح را عوض می‌کند. سطح به scope و رده‌ی شرکت وابسته است و برای همین تحلیل Gergely Orosz از down-level شدن رده‌ی شرکت را عامل اصلی می‌داند، نه جغرافیا را. اثر مستند مکان روی حقوق است. یک بحث آنلاین داوطلبان (ضعیف، روایتی) می‌گوید یک Google IC6 در لندن حدود 400 هزار دلار می‌گیرد در برابر 600 هزار دلار یا بیشتر در نیویورک یا Bay Area و دیگری از حدود 40% افت مجموع پرداختی در انتقال آمریکا به اروپا در Meta خبر می‌دهد. در داده‌ی Amazon در levels.fyi همان سطح میان نیویورک و Phoenix حدود 1.28 برابر فرق دارد، که از تفاوت پرداخت یک سطح کمتر است.\n\nدو وضعیت متفاوت. **درون یک شرکت**، شواهدی از تغییر سطح به‌خاطر انتقال پیدا نکردیم، فقط تعدیل حقوق که گزارش شده. **میان شرکت‌ها**، مثل هر کس دیگری از یک دور مصاحبه می‌گذرید و سطح از دور مصاحبه می‌آید.\n\nعملی: از recruiter سطح و حقوق را به واحد پول و بازه‌ی پرداخت متناسب با محل مقصد بخواهید. مجموع پرداختی را مقایسه کنید، نه فقط حقوق پایه. همچنین مدرک کارتان را با معیارهایی ثبت کنید که بین شرکت‌ها قابل‌مقایسه‌اند: آدم‌ها، تیم‌ها، ابهام، عددها."),
      steps: [
        L("Ask the recruiter for level and pay in the destination's location band, in writing.",
          "از recruiter بخواهید سطح و پرداخت متناسب با محل مقصد را مکتوب اعلام کند."),
        L("Compare total pay (base, stock, bonus), not base alone.",
          "مجموع پرداختی (پایه، سهام، پاداش) را مقایسه کنید، نه فقط حقوق پایه را."),
        L("If you're transferring inside a company, ask in writing whether your level stays and how pay is adjusted.",
          "اگر درون یک شرکت منتقل می‌شوید، مکتوب بپرسید سطح شما حفظ می‌شود یا نه و حقوق چطور تعدیل می‌شود."),
        L("Keep your evidence log in units that travel.",
          "دستاوردها را با معیارهایی ثبت کنید که در شرکت‌های دیگر هم قابل‌مقایسه باشند.")
      ],
      story: null,
      links: [
        { route: "faq/negotiate-level", label: L("Level matters more than base", "سطح از حقوق پایه مهم‌تر است") },
        { route: "hire/pipeline", label: L("How level is set at hire", "سطح هنگام استخدام چطور تعیین می‌شود") }
      ]
    }

  );
})();

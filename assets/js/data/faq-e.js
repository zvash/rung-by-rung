/* FAQ, part E: hiring and levels at the offer stage (avoid down-levels, lower offers, pay vs level, startup titles, aiming high).
   Company facts come from the research notes and carry their hedges. Stories are illustrative composites with made-up numbers. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;
  S.data.faq = S.data.faq || [];
  S.data.faq.push(

    {
      id: "avoid-downlevel",
      group: "hiring",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("How do I avoid being down-leveled when I switch jobs?",
           "هنگام عوض کردن شرکت چطور از down-level شدن جلوگیری کنم؟"),
      short: L("The loop sets your level, not your old title, and design and behavioural rounds set it more than coding does. So learn the target's level descriptions, state your target level with two facts, and prepare design and story answers at the right altitude.",
               "مصاحبه‌ها، به‌ویژه design و مصاحبه‌ی رفتاری، سطح را تعیین می‌کنند. شرح سطح‌های شرکت هدف را بخوانید، با دو شاهد سطح هدف را بیان کنید و پاسخ‌ها را در مقیاس مناسب آماده کنید."),
      body: L("Most down-levels aren't punishments; they're measurements. The most-cited reasons (Pragmatic Engineer): interview performance, especially system-design depth and the scope of your behavioural stories rather than coding (Exponent, now Aced, says down-levels are almost never about the coding rounds); the gap between employer tiers, where a “senior” at a smaller company can land mid-level at a top-tier one; and cautious leveling when an interview gives little signal. No credible data says how often it happens.\n\nWhat you can control:\n\n- **Before applying:** read the target's level descriptions (or a close public equivalent) and map two of your projects onto them in the units rubrics use: people and teams affected, ambiguity you owned, numbers.\n- **In the first call:** ask which level the loop is built for, whether it can change after the loop, which rounds weigh most for level, and whether a rubric exists. State your target level with two facts. Overshooting can produce a lower-level offer rather than a rejection, so the evidence has to back the label.\n- **In the loop:** coding gates hire or no-hire; design and behaviour decide level. Lead the design round, name what's hard, weigh alternatives, and tell stories where your decision changed other people's work.\n\nTitles travel badly; evidence travels well.",
              "بیشتر down-levelها نتیجه‌ی ارزیابی‌اند، نه مجازات. دلایلی که بیشتر نقل می‌شود (Pragmatic Engineer): عملکرد در مصاحبه، به‌ویژه عمق system design و scope داستان‌های رفتاری، نه کدنویسی (Exponent، که حالا Aced است، می‌گوید down-levelها تقریبا هیچ‌وقت به راندهای کدنویسی مربوط نیستند). فاصله‌ی رده‌ی شرکت‌ها، که در آن «senior» یک شرکت کوچک‌تر می‌تواند در شرکتی رده‌بالا سطح میانی بگیرد و سطح‌دهی محتاطانه وقتی مصاحبه سیگنال کمی می‌دهد. داده‌ی معتبری نمی‌گوید چقدر پیش می‌آید.\n\nآنچه در کنترل شماست:\n\n- **پیش از درخواست:** توصیف سطح‌های شرکت هدف (یا معادل عمومی نزدیک آن) را بخوانید و دو پروژه‌تان را با واحدهای rubric به آن نگاشت کنید: چند نفر و چند تیم تحت تاثیر قرار گرفتند، چه ابهامی را برطرف کردید و چه نتایج عددی داشتید.\n- **در تماس اول:** بپرسید دور مصاحبه برای چه سطحی طراحی شده، آیا بعد از آن می‌تواند عوض شود، کدام راندها برای سطح بیشترین وزن را دارند و آیا rubric وجود دارد. سطح هدفتان را با دو شاهد مشخص مطرح کنید. درخواست سطح بالاتر می‌تواند به‌جای رد شدن به offer در سطح پایین‌تر ختم شود. پس سطح درخواستی را با شواهد پشتیبانی کنید.\n- **در دور مصاحبه:** کدنویسی hire یا no-hire را تعیین می‌کند. design و مصاحبه‌ی رفتاری سطح را تعیین می‌کنند. راند design را رهبری کنید، بگویید چه چیزی سخت است، جایگزین‌ها را بسنجید و داستان‌هایی بگویید که در آن تصمیم شما کار دیگران را عوض کرد.\n\nمعنای عنوان بین شرکت‌ها فرق می‌کند، اما شواهد عملکرد قابل‌اتکاترند."),
      steps: [
        L("Read the target company's level descriptions and map two of your projects to them in writing.",
          "توصیف سطح‌های شرکت هدف را بخوانید و دو پروژه‌تان را مکتوب به آن‌ها نگاشت کنید."),
        L("In the first recruiter call, state your target level with two facts and ask which rounds weigh most.",
          "در اولین تماس با recruiter سطح هدفتان را با دو شاهد مشخص مطرح کنید و بپرسید کدام راندها بیشترین وزن را دارند."),
        L("Prepare two design answers that start from what is hard, and three stories where your decision changed other people's work.",
          "دو پاسخ design آماده کنید که از «چه چیزی سخت است» شروع می‌شود و سه داستان که در آن تصمیم شما کار دیگران را عوض کرد."),
        L("If the level can still move after the loop, ask what evidence would change it.",
          "اگر سطح بعد از دور مصاحبه هم می‌تواند عوض شود، بپرسید چه مدرکی آن را عوض می‌کند.")
      ],
      story: L("Elena was “Engineer II” at a mid-size company and applying for a senior role elsewhere. She read the target's senior descriptor and wrote three stories in its own words: one with ambiguity, one with direction for others, one with a measured result. In the first call she named the level and one fact. Her design round started with “what's hard here is…”, and the loop proposed senior.",
               "النا در یک شرکت میان‌اندازه «Engineer II» بود و برای نقش senior جای دیگری درخواست می‌داد. شرح senior شرکت هدف را خواند و سه داستان با کلمه‌های خودِ آن نوشت: یکی با ابهام، یکی با جهت‌دهی به دیگران، یکی با نتیجه‌ی اندازه‌گرفته‌شده. در تماس اول سطح و یک واقعیت را گفت. راند design او با «سختی اینجا این است که…» شروع شد و دور مصاحبه سطح senior را پیشنهاد کرد."),
      links: [
        { route: "hire/pipeline", label: L("How level is set at hire", "سطح هنگام استخدام چطور تعیین می‌شود") },
        { route: "hire/signals", label: L("What interviewers listen for", "مصاحبه‌کننده‌ها به چه گوش می‌دهند") },
        { route: "practice", label: L("Practise: what would you do?", "تمرین: شما چه می‌کردید؟") }
      ]
    },

    {
      id: "downlevel-offer",
      group: "hiring",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("I got an offer one level below what I wanted. What now?",
           "پیشنهادی یک سطح پایین‌تر از آنچه می‌خواستم گرفته‌ام. حالا چه؟"),
      short: L("Don't discuss pay first. Thank them, say the level doesn't match the scope you've shown, and ask to revisit it. Expect several calls, bring real evidence and real alternatives, and decide beforehand what you'll do if the answer stays no.",
               "پیش از حقوق، درباره‌ی سطح صحبت کنید. با بیان علاقه به تیم، شواهد scope را ارائه و درخواست بازبینی کنید. گزینه‌های واقعی و تصمیم خود در صورت پاسخ منفی را از قبل روشن کنید."),
      body: L("Order matters: level, then compensation, then start date, then paperwork, and silence on level can read as acceptance (Aced). So hold off on pay. A good opening is warm and specific: you're excited about the team, the level doesn't match what you've shown, and you'd like to revisit it. Offer remedies: a conversation with the hiring manager, a redo of a weak round, more detail on your scope. Expect several calls; Aced notes that a first call rarely settles it. Nobody publishes credible odds of success.\n\nLeverage is the part people overrate. A competing offer from a comparable-tier company at the level you want makes the case credible, and so does a real willingness to walk. A bluff, or an offer from a lower tier, won't.\n\nThen decide. Accepting can be reasonable when you're moving up a tier, the pay still beats your alternatives and you'd learn something you can't learn now (Gergely Orosz; Aced says something similar). It's a worse deal if it signals that the company misjudged you. If you accept, get the next level's criteria, the usual time in level and a first review date in writing. Recruiter promises of fast promotion are often unreliable, and no public source we know of documents standard “fast-track” clauses.",
              "ترتیب مهم است: اول سطح، بعد حقوق و مزایا، بعد تاریخ شروع، سپس مراحل اداری و سکوت درباره‌ی سطح می‌تواند پذیرش خوانده شود (Aced). پس درباره‌ی حقوق صبر کنید. شروع مناسب، محترمانه و مشخص است: به همکاری با تیم علاقه دارید، سطح با آنچه نشان داده‌اید جور نیست و می‌خواهید دوباره بررسی شود. راه‌حل پیشنهاد بدهید: گفتگو با hiring manager، تکرار یک راند ضعیف، توضیح بیشتر درباره‌ی scope‌تان. منتظر چند تماس باشید. Aced می‌گوید تماس اول به‌ندرت به نتیجه‌ی نهایی می‌رسد. آمار معتبری درباره‌ی احتمال موفقیت این روش منتشر نشده است.\n\nاهرم بخشی است که آدم‌ها بیشتر از حد برآورد می‌کنند. offer رقیب از شرکتی هم‌رده در همان سطحی که می‌خواهید ادعا را معتبر می‌کند و آمادگی واقعی برای رفتن هم همین‌طور. بلوف یا offer از رده‌ی پایین‌تر کار نمی‌کند.\n\nبعد تصمیم بگیرید. پذیرفتن وقتی می‌تواند منطقی باشد که به شرکتی رده‌بالاتر می‌روید، حقوق هنوز از گزینه‌های دیگرتان بهتر است و چیزی یاد می‌گیرید که الان نمی‌شود (Gergely Orosz. Aced هم مشابه می‌گوید). اگر نشانه‌ی این باشد که شرکت شما را اشتباه سنجیده، معامله‌ی بدتری است. اگر پذیرفتید، معیارهای سطح بعد، مدت معمول ماندن در سطح و تاریخ اولین بازبینی را مکتوب بگیرید. وعده‌ی ارتقای سریع از recruiter اغلب قابل‌اتکا نیست و منبع عمومی‌ای نمی‌شناسیم که بندهای استاندارد «مسیر سریع» را مستند کرده باشد."),
      steps: [
        L("Reply warmly and don't discuss pay yet: say the level doesn't match the scope you've shown, and ask to revisit it.",
          "با احترام و بیان علاقه به تیم پاسخ دهید، تناسب نداشتن سطح با شواهد scope را توضیح دهید و پیش از مذاکره‌ی حقوق، بازبینی بخواهید."),
        L("Offer a remedy: a conversation with the hiring manager, or a redo of a weak round.",
          "راه‌حل پیشنهاد بدهید: گفتگو با hiring manager یا تکرار یک راند ضعیف."),
        L("Decide in advance which offer you'd take if the level stays where it is.",
          "از پیش تصمیم بگیرید اگر سطح همان ماند کدام offer را می‌پذیرید."),
        L("If you accept, get next-level criteria, the usual time in level and a review date in writing.",
          "اگر می‌پذیرید، معیارهای سطح بعد، مدت معمول ماندن در سطح و تاریخ بازبینی را مکتوب بگیرید.")
      ],
      story: null,
      links: [
        { route: "hire/downlevel", label: L("Accept or push back", "بپذیرید یا مقاومت کنید") },
        { route: "hire/conversation", label: L("Scripts for the conversations", "جمله‌هایی برای گفتگوها") },
        { route: "hire/examples", label: L("Four composite case studies", "چهار نمونه‌ی ترکیبی") }
      ]
    },

    {
      id: "negotiate-level",
      group: "hiring",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("Why does level matter more than base salary, and can I negotiate it?",
           "چرا سطح از حقوق پایه مهم‌تر است و می‌شود درباره‌ی آن چانه زد؟"),
      short: L("Level fixes your pay band, and at big employers equity grows far faster than base as levels rise. One level down is roughly a 30% total-pay gap in self-reported US data. You can ask to revisit the level, with evidence.",
               "سطح، pay band را تعیین می‌کند و در شرکت‌های بزرگ سهم سهام با افزایش سطح بیشتر رشد می‌کند. در داده‌های خودگزارش‌شده‌ی آمریکا، یک سطح پایین‌تر حدود 30% تفاوت مجموع پرداختی دارد. می‌توانید با شواهد درخواست بازبینی کنید."),
      body: L("Level sets your band, and at the top the band is mostly equity. In levels.fyi's self-reported US medians (as read in early October 2026), total yearly pay at Google runs from about $212K at L3 to $308K at L4, $446K at L5 and $711K at L6. At Meta, base pay roughly doubles from E3 to E6 while yearly stock grows more than tenfold, and base falls from about 79% of total pay to 39%. Amazon's base share falls from 76% at L4 to 40% at L7.\n\nTurned into the cost of one level down, the same data implies gaps of roughly 30% (Google L5 to L4, Meta E5 to E4, Amazon L6 to L5), and less at Microsoft, where the steps are smaller (about 13–17%). These are medians of self-reported numbers, not offers, and they vary with location and year, but the shape is robust: levels are multipliers, and base negotiation moves a smaller lever. For comparison, location moves Amazon's L5 median by about 1.28× between New York and Phoenix, which is less than one level step.\n\nSo yes, negotiate level, and in that order: level first, then compensation. Level also sets your promotion runway: starting a level low means a year or two of uncertainty to earn it back.",
              "سطح، بازه‌ی پرداختی شما را تعیین می‌کند و در سطح‌های بالاتر، سهام سهم بیشتری از مجموع پرداختی دارد. در میانه‌های خودگزارش‌شده‌ی levels.fyi برای آمریکا (آنچه در اوایل اکتبر 2026 خوانده شد)، مجموع پرداختی سالانه در Google از حدود 212 هزار دلار در L3 به 308 هزار دلار در L4، 446 هزار دلار در L5 و 711 هزار دلار در L6 می‌رسد. در Meta حقوق پایه از E3 تا E6 تقریبا دو برابر می‌شود در حالی که سهام سالانه بیش از ده برابر و سهم حقوق پایه از حدود 79% کل پرداختی به 39% می‌رسد. سهم حقوق پایه در Amazon از 76% در L4 به 40% در L7 می‌رسد.\n\nاگر هزینه‌ی یک سطح پایین‌تر را از همین داده‌ها حساب کنیم، شکاف‌ها حدود 30% است (Google L5 به L4، Meta E5 به E4، Amazon L6 به L5) و در Microsoft، که پله‌ها کوچک‌ترند، کمتر (حدود 13 تا 17%). این‌ها میانه‌ی عددهای خودگزارش‌شده‌اند، نه offer و با مکان و سال فرق می‌کنند، ولی شکل کلی محکم است: تغییر سطح می‌تواند مجموع پرداختی را به‌طور چشمگیری تغییر دهد، در حالی که مذاکره بر سر حقوق پایه معمولا اثر محدودتری دارد. برای مقایسه، میانه‌ی پرداخت L5 در Amazon بین نیویورک و Phoenix حدود 1.28 برابر تفاوت دارد، که از یک پله‌ی سطح کمتر است.\n\nپس بله، درباره‌ی سطح چانه بزنید و به این ترتیب: اول سطح، بعد حقوق و مزایا. سطح مسیر ارتقای شما را هم تعیین می‌کند: شروع از یک سطح پایین‌تر یعنی یکی دو سال عدم‌قطعیت برای جبران آن."),
      steps: [
        L("Look up the total compensation range of the target level, not only the base.",
          "بازه‌ی مجموع پرداختی سطح هدف را ببینید، نه فقط حقوق پایه را."),
        L("Ask for the level to be revisited before any talk of numbers.",
          "پیش از هر صحبتی از عدد بخواهید سطح بازبینی شود."),
        L("Compare offers by level and total pay first, and by base last.",
          "offerها را اول با سطح و مجموع پرداختی و آخر با حقوق پایه مقایسه کنید."),
        L("Keep your own level history written down. It's what you'll carry to the next negotiation.",
          "سابقه‌ی سطح‌های خودتان را مکتوب نگه دارید. همین چیزی است که به مذاکره‌ی بعدی می‌برید.")
      ],
      story: null,
      links: [
        { route: "hire/downlevel", label: L("Accept or push back", "بپذیرید یا مقاومت کنید") },
        { route: "hire/numbers", label: L("Scope in numbers", "scope به زبان عدد") }
      ]
    },

    {
      id: "startup-senior",
      group: "hiring",
      levels: ["L4", "L5", "L6"],
      q: L("I'm “Senior” at a startup. Will big companies treat me as senior?",
           "من در یک استارتاپ «Senior» هستم. شرکت‌های بزرگ هم مرا senior می‌دانند؟"),
      short: L("Not automatically. Employer tiers differ, titles at small companies are unregulated, and the loop measures scope and ambiguity rather than your title. Your breadth is real evidence, if you can put numbers on it.",
               "لزوما نه. عنوان استارتاپ معیار یکسانی ندارد و شرکت بزرگ، scope و ابهام را با مصاحبه می‌سنجد. گستردگی تجربه‌ی شما زمانی شاهد مفیدی برای تعیین سطح است که آن را مشخص و با عدد توضیح دهید."),
      body: L("Gergely Orosz's analysis of down-levelling describes exactly this: the same title carries different scope and pay across company tiers, so a “senior” at an agency or a small company can land mid-level at a top-tier one, while an experienced engineer at a mid-size company may be hired a level above their title. Commentary also notes that a Staff at a small company is often compared with Senior at big tech (weak, anecdotal).\n\nNone of that is a verdict. A startup gives you things big companies reward: breadth, ownership and decisions with nobody above you. The loop won't see them unless you translate them: how many people, how many teams, how much ambiguity, which numbers. “I built and ran billing alone” becomes “I owned billing for 18 months: 30K invoices a month, no downtime across two provider migrations” (illustrative).\n\nPrepare for the places startup experience is thin: system design with real scale numbers, and stories where you changed how other people work. If your best stories are about doing the work yourself, expect mid-level; if they show you scoping an ambiguous area for others, you have a case. Applying one tier up from where you are, rather than straight to the top, can be a smoother step.",
              "تحلیل Gergely Orosz از down-level شدن دقیقا همین را توصیف می‌کند: یک عنوان در رده‌های مختلف شرکت‌ها scope و حقوق متفاوتی دارد. پس «senior» یک آژانس یا شرکت کوچک می‌تواند در شرکتی رده‌بالا سطح میانی بگیرد، در حالی که مهندس باتجربه‌ی شرکت میان‌اندازه ممکن است یک سطح بالاتر از عنوانش استخدام شود. نظرهایی هم می‌گویند Staff در شرکت کوچک اغلب با Senior در big tech مقایسه می‌شود (ضعیف، روایتی).\n\nهیچ‌کدام قضاوت درباره‌ی ارزش شما نیست. استارتاپ چیزهایی به شما می‌دهد که شرکت‌های بزرگ پاداش می‌دهند: گستردگی تجربه، ownership و تصمیم‌گیری مستقل. دور مصاحبه آن‌ها را نمی‌بیند، مگر ترجمه‌شان کنید: چند نفر، چند تیم، چه مقدار ابهام، چه عددهایی. «billing را تنها ساختم و اداره کردم» می‌شود «billing را 18 ماه own کردم: ماهی 30 هزار فاکتور، بدون downtime در دو مهاجرت provider» (نمونه).\n\nبرای بخش‌هایی که ممکن است تجربه‌ی استارتاپ شما کافی نباشد آماده شوید: system design با عددهای مقیاس واقعی و داستان‌هایی که در آن شیوه‌ی کار دیگران را عوض کردید. اگر بهترین داستان‌هایتان درباره‌ی انجام خودِ کار است، منتظر سطح میانی باشید. اگر نشان می‌دهند scope حوزه‌ای مبهم را برای کار دیگران مشخص کرده‌اید، شواهد قابل‌دفاعی دارید. درخواست دادن یک رده بالاتر از جایی که هستید، به‌جای رفتن مستقیم به بالاترین رده، می‌تواند گام تدریجی‌تری باشد."),
      steps: [
        L("Translate your last two projects into scope units and numbers.",
          "دو پروژه‌ی آخرتان را به واحدهای scope و عدد ترجمه کنید."),
        L("Find two stories where you set direction for others, not only did the work yourself.",
          "دو داستان پیدا کنید که در آن‌ها برای دیگران جهت تعیین کردید، نه فقط خودتان کار را انجام دادید."),
        L("Prepare design answers that carry real scale numbers.",
          "پاسخ‌های design را با عددهای مقیاس واقعی آماده کنید."),
        L("Consider a mid-tier employer as a step, and compare level descriptions, not titles.",
          "یک شرکت رده‌میانی را به‌عنوان یک گام در نظر بگیرید و توصیف سطح‌ها را مقایسه کنید، نه عنوان‌ها را.")
      ],
      story: L("Omid was the first engineer hired at a 12-person startup and had been its “Lead” for three years. His first big-company loop came back mid-level. The feedback was kind and specific: his design answers described what he had built, not what was hard, and his stories were mostly about himself. He spent six weeks rewriting four stories around other people's work and rebuilding two designs with numbers, then applied to a second company. That offer came one level higher.",
               "امید اولین مهندس استخدام‌شده در یک استارتاپ 12 نفره بود و سه سال «Lead» آن بود. اولین دور مصاحبه‌اش در یک شرکت بزرگ با سطح میانی برگشت. بازخورد مهربان و مشخص بود: پاسخ‌های design او آنچه را ساخته بود توصیف می‌کرد، نه دشواری‌هایی را که حل کرده بود و داستان‌هایش بیشتر درباره‌ی خودش بود. او شش هفته چهار داستان را حول کار دیگران بازنویسی کرد و دو طراحی را با عدد از نو ساخت و بعد به شرکت دوم درخواست داد. آن offer یک سطح بالاتر آمد."),
      links: [
        { route: "hire/numbers", label: L("Scope in numbers and titles by company type", "scope به زبان عدد و عنوان‌ها بر اساس نوع شرکت") },
        { route: "hire/signals", label: L("What interviewers listen for", "مصاحبه‌کننده‌ها به چه گوش می‌دهند") }
      ]
    },

    {
      id: "aim-high",
      group: "hiring",
      levels: ["L3", "L4", "L5"],
      q: L("Should I apply for the level above where I think I am?",
           "برای سطحی بالاتر از جایی که فکر می‌کنم هستم درخواست بدهم؟"),
      short: L("Apply for the level your best three stories support. Overshooting can produce a lower-level offer rather than a rejection, which isn't necessarily bad, but know in advance whether you'd take it.",
               "سطحی را هدف بگیرید که سه روایت قوی شما آن را پشتیبانی می‌کنند. درخواست سطح بالاتر ممکن است به offer پایین‌تر منجر شود. از قبل مشخص کنید آن را می‌پذیرید یا نه."),
      body: L("Aiming one step above your title is normal in tech, and a loop is a cheap way to find out where your evidence lands. The risk is specific. At several big employers, guides report that overshooting produces a lower-level offer rather than a rejection (weak evidence, aggregated from candidate reports). In practice the offered level tends to be the highest one at which your evidence is consistent across the design and behavioural rounds, which is our reading of the sources rather than a published rule. A strong coding round can't lift it.\n\nSo the useful question isn't “am I ready?” but “what do my three best stories say?” Match them to the target's descriptors, lens by lens. If they hit the next level's scope (area-sized ambiguity, direction for others, measurable outcomes) in at least three of the four lenses, apply there. If they only hit it in one, you're asking the loop to bet on potential, and promotion at most companies doesn't bet on potential either.\n\nDecide two things before you start. Which level would you accept, and where is your walk-away? And ask the recruiter in the first call which level the loop is built for, so you can see whether you're being measured against the right bar.",
              "هدف گرفتن یک پله بالاتر از عنوان‌تان در صنعت فناوری عادی است و یک دور مصاحبه راهی کم‌هزینه برای فهمیدن این است که شواهد شما با چه سطحی تناسب دارند. ریسک مشخص است. در چند شرکت بزرگ، راهنماها گزارش می‌دهند درخواست سطح بالاتر به‌جای رد شدن به offer در سطح پایین‌تر ختم می‌شود (شواهد ضعیف، تجمیع گزارش‌های داوطلب‌ها). در عمل سطح پیشنهادی معمولا بالاترین سطحی است که شواهد شما در راندهای design و مصاحبه‌ی رفتاری به‌طور منسجم آن را پشتیبانی می‌کنند، که برداشت ما از منابع است نه قاعده‌ی منتشرشده. راند کدنویسی قوی نمی‌تواند آن را بالا ببرد.\n\nپس پرسش مفید «آماده‌ام؟» نیست. «سه روایت قوی من چه سطحی را نشان می‌دهند؟» است. آن‌ها را بُعد به بُعد با شرح‌های شرکت هدف تطبیق دهید. اگر scope سطح بعد را (ابهام در اندازه‌ی یک حوزه، جهت‌دهی به دیگران، نتیجه‌ی قابل‌اندازه‌گیری) دست‌کم در سه بُعد از چهار نشان می‌دهند، همان‌جا درخواست بدهید. اگر فقط در یکی نشان می‌دهند، از فرایند مصاحبه انتظار دارید بر اساس پتانسیل شما تصمیم بگیرد و ارتقا هم در بیشتر شرکت‌ها روی پتانسیل شرط نمی‌بندد.\n\nپیش از شروع دو چیز را تعیین کنید. کدام سطح را می‌پذیرید و چه پیشنهادی را رد می‌کنید؟ و در تماس اول از recruiter بپرسید دور مصاحبه برای چه سطحی طراحی شده تا ببینید با استاندارد درست سنجیده می‌شوید یا نه."),
      steps: [
        L("List your three best stories and the level each one's scope supports.",
          "سه روایت قوی و سطحی را که scope هرکدام نشان می‌دهد فهرست کنید."),
        L("Compare them with the descriptors of the level you want, lens by lens.",
          "آن‌ها را بُعد به بُعد با شرح سطحی که می‌خواهید مقایسه کنید."),
        L("Decide in advance the lowest level you'd accept, and why.",
          "از پیش تصمیم بگیرید پایین‌ترین سطحی که می‌پذیرید کدام است و چرا."),
        L("In the first call, ask which level the loop is built for.",
          "در تماس اول بپرسید دور مصاحبه برای چه سطحی طراحی شده.")
      ],
      story: null,
      links: [
        { route: "hire/signals", label: L("What interviewers listen for", "مصاحبه‌کننده‌ها به چه گوش می‌دهند") },
        { route: "locate", label: L("Where am I?", "من کجا هستم؟") }
      ]
    }

  );
})();

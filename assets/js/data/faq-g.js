/* FAQ, part G: AI, the market and levels. Everything here is dated "as of October 2026"; policies have reversed within months.
   Items marked "reportedly" rest on press accounts of internal memos. Stories are illustrative composites. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;
  S.data.faq = S.data.faq || [];
  S.data.faq.push(

    {
      id: "ai-expectations",
      group: "ai",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("Do employers now expect me to use AI tools, and how is it assessed?",
           "آیا حالا کارفرماها انتظار دارند از ابزارهای AI استفاده کنم، و چطور ارزیابی می‌شود؟"),
      short: L("Several large employers have said so, publicly or in reported memos, but policies have reversed within months: by autumn 2026 two companies had reportedly dropped usage metrics in favour of outcomes. Be fluent, and be ready to show what changed because of it.",
               "چند کارفرمای بزرگ این را گفته‌اند، علنی یا در یادداشت‌هایی که گزارش شده، ولی سیاست‌ها ظرف چند ماه برگشته‌اند: تا پاییز 2026 دو شرکت، طبق گزارش‌ها، معیارهای میزان استفاده را به نفع نتیجه کنار گذاشتند. مسلط باشید و آماده باشید نشان بدهید به‌خاطر آن چه چیزی عوض شد."),
      body: L("As of October 2026 the picture is moving. In April 2025 Shopify's CEO published a memo calling “reflexive AI usage” a baseline expectation, asking teams to show why AI can't do a job before requesting headcount and, as reported, saying AI use would be asked about in reviews. Press reports say Microsoft told managers AI use is core to every role and level (June 2025), and that Meta would formally review AI-driven impact from 2026. Coinbase's CEO has said he required engineers to start with AI tools within about a week, and that some who had no good reason were fired.\n\nThen the pendulum swung. Duolingo, which had put AI use into its reviews in 2025, was reported in April 2026 to have stopped tracking it. Meta was reported in September 2026 to have dropped AI-usage and token counters from reviews after people gamed them, which the press called “tokenmaxxing”, in favour of quality, speed and complexity. (The Microsoft, Meta and Google items are press accounts of internal communications, not published policy.)\n\nSo treat AI fluency as table stakes, and raw usage as not what gets rewarded. Ask your manager how AI use is assessed on your team today, and be ready to describe where it changed an outcome and where you didn't trust its output.",
              "تا اکتبر 2026 تصویر در حال تغییر است. در آوریل 2025 مدیرعامل Shopify یادداشتی منتشر کرد که «استفاده‌ی reflexive از AI» را انتظار پایه می‌خواند، از تیم‌ها می‌خواهد پیش از درخواست نیروی جدید نشان بدهند چرا AI نمی‌تواند آن کار را بکند، و (طبق گزارش‌ها) می‌گوید استفاده از AI در ارزیابی‌ها پرسیده خواهد شد. گزارش‌های رسانه‌ای می‌گویند Microsoft به مدیرها گفته استفاده از AI برای هر نقش و سطحی اصلی است (ژوئن 2025) و Meta از 2026 اثرگذاری مبتنی بر AI را رسما ارزیابی خواهد کرد. مدیرعامل Coinbase گفته از مهندس‌ها خواسته ظرف حدود یک هفته با ابزارهای AI راه بیفتند و بعضی را که دلیل خوبی نداشتند اخراج کرده است.\n\nبعد پاندول برگشت. Duolingo، که در 2025 استفاده از AI را وارد ارزیابی‌هایش کرده بود، در آوریل 2026 گزارش شد که ردیابی آن را کنار گذاشته. Meta در سپتامبر 2026 گزارش شد که بعد از دستکاری آدم‌ها، پدیده‌ای که رسانه‌ها «tokenmaxxing» نامیدند، شمارنده‌های استفاده از AI و token را از ارزیابی‌ها حذف کرده، به نفع کیفیت، سرعت و پیچیدگی. (مورد‌های Microsoft، Meta و Google گزارش رسانه‌ای از ارتباطات داخلی‌اند، نه سیاست منتشرشده.)\n\nپس تسلط بر AI را حداقل انتظار بدانید و استفاده‌ی خام را چیزی که پاداش می‌گیرد ندانید. از مدیرتان بپرسید استفاده از AI در تیم شما اکنون چطور ارزیابی می‌شود و آماده باشید توضیح بدهید کجا نتیجه را عوض کرد و کجا به خروجی‌اش اعتماد نکردید."),
      steps: [
        L("Ask your manager how AI use is assessed on your team today, and write down the answer.",
          "از مدیرتان بپرسید استفاده از AI در تیم شما اکنون چطور ارزیابی می‌شود و جواب را بنویسید."),
        L("Keep a short log of where AI changed an outcome: the task, what you checked, the result.",
          "یک یادداشت کوتاه نگه دارید از جاهایی که AI نتیجه را عوض کرد: task، آنچه وارسی کردید، نتیجه."),
        L("Note one place you decided not to trust the output, and why.",
          "یک جا را که تصمیم گرفتید به خروجی اعتماد نکنید یادداشت کنید، با دلیلش."),
        L("Don't optimise a usage number. It has already been gamed once at a large employer.",
          "یک عدد استفاده را بهینه نکنید. در یک شرکت بزرگ یک بار دستکاری شده است.")
      ],
      story: null,
      links: [
        { route: "landscape/ai", label: L("The AI evidence, dated", "شواهد AI، با تاریخ") },
        { route: "faq/ai-in-promo", label: L("AI-assisted work in a promotion case", "کار با کمک AI در پرونده‌ی ارتقا") }
      ]
    },

    {
      id: "junior-2026",
      group: "ai",
      levels: ["L2", "L3"],
      q: L("Is it still worth starting a career as a junior engineer in 2026?",
           "آیا هنوز ارزش دارد در 2026 کار را به‌عنوان مهندس تازه‌کار شروع کنم؟"),
      short: L("Yes, but the entry door is narrower, and the evidence on why is contested. Entry-level hiring has fallen, experienced workers show no comparable gap, and the skills that hold their value are verification, debugging and learning with AI rather than delegating to it.",
               "بله، ولی در ورودی تنگ‌تر است و شواهد درباره‌ی چرایی‌اش محل بحث است. استخدام سطح ورودی کم شده، کارکنان باتجربه شکاف قابل‌مقایسه‌ای نشان نمی‌دهند، و مهارت‌هایی که ارزششان را حفظ می‌کنند تایید، اشکال‌یابی و یادگیری با AI است، نه واگذار کردن به آن."),
      body: L("The honest summary, as of October 2026: it's harder to get in than it was, and nobody can say for sure how much of that is AI. Stanford's Digital Economy Lab (the “Canaries in the Coal Mine” paper, revised in August 2026) finds that 22–25-year-olds in the most AI-exposed occupations are about 19% below where they would be had they kept pace with less-exposed peers, with no comparable gap for experienced workers. The mechanism is less hiring, not more firing. It covers all exposed occupations, not software alone, and the authors call it descriptive, not causal. Other readings are weaker: SignalFire reports big-tech new-grad hiring down by more than half against 2019, and Indeed's software-postings index sits about 23% below February 2020 after a partial rebound.\n\nThere is counter-evidence too. Pragmatic Engineer reported in May 2026 that top tech companies were hiring about 20% more than a year earlier, and Harvard researchers say the feared mass layoffs haven't materialised.\n\nWhat helps a junior is skills that AI makes more valuable. In an Anthropic randomised study, engineers learning a new library with AI scored 50% on a comprehension quiz against 67% for those coding by hand, with the biggest gap on debugging. Those who used AI to ask conceptual questions scored 65% or more; those who delegated code generation scored under 40%. So use AI to understand, not just to produce; learn to verify and debug; and show ownership of something small, end to end.",
              "خلاصه‌ی صادقانه تا اکتبر 2026: ورود سخت‌تر از قبل است و کسی نمی‌تواند با اطمینان بگوید چقدرش به AI برمی‌گردد. آزمایشگاه اقتصاد دیجیتال استنفورد (مقاله‌ی «Canaries in the Coal Mine»، بازبینی‌شده در اوت 2026) نشان می‌دهد افراد 22 تا 25 ساله در مشاغلی که بیشترین مواجهه با AI را دارند حدود 19% پایین‌تر از جایی‌اند که اگر با همتایان کم‌مواجهه‌تر هم‌قدم می‌ماندند می‌بودند، و برای کارکنان باتجربه شکاف قابل‌مقایسه‌ای نیست. سازوکار، استخدام کمتر است نه اخراج بیشتر. همه‌ی مشاغل در معرض را می‌پوشاند، نه فقط نرم‌افزار را، و نویسنده‌ها آن را توصیفی می‌دانند، نه علّی. خوانش‌های دیگر ضعیف‌ترند: SignalFire از کاهش بیش از نصف استخدام فارغ‌التحصیلان تازه در big tech نسبت به 2019 خبر می‌دهد و شاخص آگهی‌های نرم‌افزار Indeed، بعد از یک بازگشت نسبی، حدود 23% پایین‌تر از فوریه‌ی 2020 است.\n\nشواهد مخالف هم هست. Pragmatic Engineer در مه 2026 گزارش داد شرکت‌های بزرگ فناوری حدود 20% بیشتر از یک سال قبل استخدام می‌کنند، و پژوهشگران هاروارد می‌گویند اخراج‌های گسترده‌ی ترسیده‌شده شکل نگرفته است.\n\nآنچه به یک تازه‌کار کمک می‌کند مهارت‌هایی است که AI ارزششان را بیشتر می‌کند. در یک مطالعه‌ی تصادفی‌شده‌ی Anthropic، مهندس‌هایی که با AI یک کتابخانه‌ی تازه را یاد می‌گرفتند در آزمون درک 50% گرفتند در برابر 67% برای کسانی که دستی کد زدند، با بزرگ‌ترین شکاف در اشکال‌یابی. آن‌ها که از AI برای پرسش مفهومی استفاده کردند 65% یا بیشتر گرفتند؛ آن‌ها که تولید کد را واگذار کردند کمتر از 40%. پس از AI برای فهمیدن استفاده کنید، نه فقط تولید؛ تایید و اشکال‌یابی را یاد بگیرید؛ و ownership یک چیز کوچک را از ابتدا تا انتها نشان بدهید."),
      steps: [
        L("Pick one small project and own it end to end: scope, build, ship, measure.",
          "یک پروژه‌ی کوچک انتخاب کنید و end-to-end own کنید: scope، ساخت، تحویل، اندازه‌گیری."),
        L("When you use AI, write down what you checked and what you changed.",
          "وقتی از AI استفاده می‌کنید بنویسید چه چیزی را وارسی کردید و چه چیزی را عوض کردید."),
        L("Debug without AI once a week, so the skill doesn't fade.",
          "هفته‌ای یک بار بدون AI اشکال‌یابی کنید تا مهارت کم‌رنگ نشود."),
        L("Look for teams with mentors and a real code-review culture.",
          "دنبال تیم‌هایی با mentor و فرهنگ واقعی code review بگردید.")
      ],
      story: L("Nima's first team encouraged him to use AI for everything. A month in, a reviewer asked him to explain a function he'd shipped and he couldn't. He changed his habit: ask the tool to explain, write the first version himself, use AI for a review pass. By the next quarter his reviews said “understands his own code”, which, for a junior, is the whole game.",
               "تیم اول نیما تشویقش می‌کرد برای همه‌چیز از AI استفاده کند. یک ماه بعد، یک reviewer از او خواست تابعی را که تحویل داده بود توضیح بدهد و نتوانست. عادتش را عوض کرد: از ابزار می‌خواهد توضیح بدهد، نسخه‌ی اول را خودش می‌نویسد، از AI برای یک دور review استفاده می‌کند. فصل بعد بازخوردهایش می‌گفت «کد خودش را می‌فهمد»، که برای یک تازه‌کار، کل ماجرا همین است."),
      links: [
        { route: "landscape/market", label: L("The market, with sources", "بازار، با منابع") },
        { route: "landscape/bylevel", label: L("What changes at each level", "چه چیزی در هر سطح تغییر می‌کند") }
      ]
    },

    {
      id: "ai-flatten",
      group: "ai",
      levels: ["L4", "L5", "L6", "L7"],
      q: L("Will AI flatten the ladder, with fewer levels and fewer managers?",
           "آیا AI نردبان را صاف می‌کند، با سطح‌ها و مدیرهای کمتر؟"),
      short: L("There's evidence of thinner management and tighter reviews at some big employers, but we found no published rewrite of level definitions because of AI. IC levels look set to absorb coordination work, and the senior bar to lean toward judgment and verification. That last part is inference.",
               "شواهدی از نازک شدن مدیریت و سخت‌گیرتر شدن ارزیابی در بعضی شرکت‌های بزرگ هست، ولی بازنویسی منتشرشده‌ای از تعریف سطح‌ها به‌خاطر AI پیدا نکردیم. به نظر می‌رسد سطح‌های IC کار هماهنگی را جذب می‌کنند و استاندارد ارشدی به سمت قضاوت و تایید می‌رود. این بخش آخر برداشت است."),
      body: L("Two things are evidenced, and one is not. Evidenced: some large employers are thinning management. Reports say Amazon pushed to raise its IC-to-manager ratio by at least 15% (a weak, aggregated claim), and Google's CEO reportedly said roughly 10% of manager, director and VP roles were trimmed (date unverified). Reviews have also tightened: Meta and Microsoft reportedly cut small percentages of their lowest performers in January 2025, and in February 2026 CNBC covered Amazon and Meta tightening reviews. Not found: any published rewrite of level definitions or ladders because of AI. We searched, though not exhaustively, and we have no data on down-levelling rates in 2025–26.\n\nWhat follows is our inference, so weigh it that way. When there are fewer managers, coordination work moves to senior ICs, which means influence and scope matter earlier. When agents write more first drafts, the scarce part is deciding what good looks like and checking it: DORA's 2025 research found AI associated with more throughput but also more instability, and Google says engineers still approve AI-generated code.\n\nSo the practical bet is to build the lenses that don't commoditise: judgment, system design, verification, and your ability to move other people.",
              "دو چیز مستند است و یک چیز نه. مستند: بعضی شرکت‌های بزرگ لایه‌های مدیریت را نازک می‌کنند. گزارش‌ها می‌گویند Amazon برای بالا بردن نسبت IC به مدیر دست‌کم 15% فشار آورده (ادعایی ضعیف و تجمیعی)، و گفته می‌شود مدیرعامل Google گفته حدود 10% نقش‌های مدیر، director و VP کم شده (تاریخ تایید نشده). ارزیابی‌ها هم سخت‌تر شده: گزارش شده Meta و Microsoft در ژانویه‌ی 2025 درصدهای کوچکی از ضعیف‌ترین‌ها را کنار گذاشتند، و در فوریه‌ی 2026 CNBC از سخت‌گیرتر شدن ارزیابی‌ها در Amazon و Meta نوشت. پیدا نشد: هیچ بازنویسی منتشرشده‌ی تعریف سطح‌ها یا نردبان به‌خاطر AI. جست‌وجو کردیم، ولی نه جامع، و داده‌ای درباره‌ی نرخ down-level در 2025 و 2026 نداریم.\n\nآنچه می‌آید برداشت ماست، پس همان‌طور وزنش کنید. وقتی مدیر کمتر است، کار هماهنگی به ICهای ارشد می‌رسد، یعنی نفوذ و scope زودتر اهمیت پیدا می‌کنند. وقتی agentها پیش‌نویس‌های بیشتری می‌نویسند، بخش کمیاب این است که تصمیم بگیری «خوب» یعنی چه و آن را وارسی کنی: پژوهش DORA در 2025 AI را با throughput بیشتر ولی بی‌ثباتی بیشتر مرتبط یافت، و Google می‌گوید مهندس‌ها هنوز کد تولیدشده با AI را تایید می‌کنند.\n\nپس شرط عملی این است که بُعدهایی را بسازید که کالا نمی‌شوند: قضاوت، system design، وارسی، و توانایی‌تان در جابه‌جا کردن آدم‌های دیگر."),
      steps: [
        L("Practise the lens that AI doesn't commoditise: write one design doc a month that weighs real alternatives.",
          "بُعدی را تمرین کنید که AI آن را کالا نمی‌کند: ماهی یک design doc بنویسید که جایگزین‌های واقعی را می‌سنجد."),
        L("Get good at review: take the code or plan an agent wrote and write what you'd catch, and what you'd test.",
          "در review قوی شوید: کد یا برنامه‌ای را که یک agent نوشته بردارید و بنویسید چه چیزی را می‌گیرید و چه چیزی را تست می‌کنید."),
        L("Build influence earlier than the ladder asks: take on one cross-team coordination problem per year.",
          "قدرت نفوذ را زودتر از آنچه نردبان می‌خواهد بسازید: سالی یک مساله‌ی هماهنگی میان‌تیمی را بردارید."),
        L("Watch for published ladder changes at employers you care about, and re-read this page when they come.",
          "تغییرهای منتشرشده‌ی نردبان را در شرکت‌هایی که برایتان مهم‌اند دنبال کنید و وقتی آمد این صفحه را دوباره بخوانید.")
      ],
      story: null,
      links: [
        { route: "landscape/bylevel", label: L("What changes at each level", "چه چیزی در هر سطح تغییر می‌کند") },
        { route: "landscape/durable", label: L("Skills that look durable", "مهارت‌هایی که پایدار به نظر می‌رسند") }
      ]
    },

    {
      id: "ai-in-promo",
      group: "ai",
      levels: ["L4", "L5", "L6"],
      q: L("How do I show AI-assisted work in a promotion case without it counting against me?",
           "کار انجام‌شده با کمک AI را چطور در پرونده‌ی ارتقا نشان بدهم که به ضررم تمام نشود؟"),
      short: L("Write about the problem, your decisions, how you verified the result and what changed, with AI as a tool in the “how”. Panels look for judgment and outcomes, and two large employers have reportedly walked back usage metrics.",
               "درباره‌ی مساله، تصمیم‌هایتان، چگونگی وارسی نتیجه و آنچه عوض شد بنویسید، با AI به‌عنوان ابزاری در بخش «چگونه». پنل‌ها دنبال قضاوت و نتیجه‌اند و دو شرکت بزرگ، طبق گزارش‌ها، معیارهای میزان استفاده را پس گرفته‌اند."),
      body: L("Nothing in the published ladders asks you to hide tools, and nothing asks you to show off usage. A promotion case is about scope, ambiguity, influence and impact, and AI changes how you got there, not whether it counts. So write it the way you'd write any case: the problem and why it was hard, the decisions you made, what you checked, and what changed for users or teammates, in numbers.\n\nWhere AI mattered, say so concretely, in the “how” part: “Used an agent to draft the 40 call-site changes; I wrote the test harness, reviewed every diff, and caught three behaviour changes the agent had introduced.” That shows judgment and verification, which is what's becoming more valuable. Avoid “AI wrote 80% of it”: it says nothing about your scope, and both Meta and Duolingo have reportedly moved away from rewarding raw usage.\n\nBe honest with yourself about speed, too. METR's randomised study of experienced developers on their own large repositories found tasks took about 19% longer with AI, though the developers believed they were about 20% faster (a small sample on early-2025 tools; METR's later update is inconclusive). Don't claim a speed-up you haven't measured.",
              "در هیچ نردبان منتشرشده‌ای از شما نمی‌خواهند ابزارها را پنهان کنید، و نمی‌خواهند استفاده را به رخ بکشید. پرونده‌ی ارتقا درباره‌ی scope، ابهام، قدرت نفوذ و اثرگذاری است، و AI چگونگی رسیدن شما را عوض می‌کند، نه این‌که حساب می‌شود یا نه. پس مثل هر پرونده‌ی دیگری بنویسیدش: مساله و چرایی سخت بودنش، تصمیم‌هایی که گرفتید، آنچه وارسی کردید، و آنچه برای کاربر یا هم‌تیمی‌ها عوض شد، با عدد.\n\nجایی که AI مهم بود، مشخص و در بخش «چگونه» بگویید: «از یک agent برای پیش‌نویس 40 تغییر در محل‌های فراخوانی استفاده کردم؛ harness تست را خودم نوشتم، هر diff را review کردم و سه تغییر رفتاری را که agent وارد کرده بود گرفتم.» این قضاوت و وارسی را نشان می‌دهد، که دارد ارزشمندتر می‌شود. «80% کد را AI نوشت» را ننویسید: چیزی درباره‌ی scope شما نمی‌گوید، و هم Meta و هم Duolingo، طبق گزارش‌ها، از پاداش دادن به استفاده‌ی خام فاصله گرفته‌اند.\n\nبا خودتان هم درباره‌ی سرعت صادق باشید. مطالعه‌ی تصادفی‌شده‌ی METR روی توسعه‌دهنده‌های باتجربه در repoهای بزرگ خودشان نشان داد taskها با AI حدود 19% بیشتر طول می‌کشید، در حالی که خودشان فکر می‌کردند حدود 20% سریع‌ترند (نمونه‌ی کوچک با ابزارهای اوایل 2025؛ به‌روزرسانی بعدی METR نتیجه‌ی قطعی ندارد). تسریعی را که اندازه نگرفته‌اید ادعا نکنید."),
      steps: [
        L("In your evidence log, note where AI was used, what you verified and what you changed.",
          "در سند دستاوردها بنویسید AI کجا استفاده شد، چه چیزی را وارسی کردید و چه چیزی را عوض کردید."),
        L("Describe outcomes in numbers, not the share of code a tool wrote.",
          "نتیجه‌ها را با عدد توصیف کنید، نه سهم کدی که یک ابزار نوشت."),
        L("Ask your manager how AI use is assessed on your team, and write the answer down.",
          "از مدیرتان بپرسید استفاده از AI در تیم شما چطور ارزیابی می‌شود و جواب را بنویسید."),
        L("Measure before you claim a speed-up.",
          "پیش از ادعای تسریع، اندازه بگیرید.")
      ],
      story: null,
      links: [
        { route: "toolkit/statement", label: L("Impact statement builder", "سازنده‌ی جمله‌ی اثرگذاری") },
        { route: "faq/ai-expectations", label: L("Do employers expect AI use?", "آیا کارفرماها انتظار استفاده از AI دارند؟") }
      ]
    },

    {
      id: "layoffs-levels",
      group: "ai",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("Do layoffs and tighter reviews change how levels work?",
           "آیا تعدیل نیرو و ارزیابی‌های سخت‌گیرانه‌تر شیوه‌ی کار سطح‌ها را عوض می‌کنند؟"),
      short: L("Levels themselves haven't visibly changed, but calibration is tighter at several big employers, and layoff totals depend heavily on who is counting. Keep your evidence log and your network current: a level won't protect you.",
               "خودِ سطح‌ها آشکارا عوض نشده‌اند، ولی کالیبراسیون در چند شرکت بزرگ سخت‌گیرتر شده و مجموع تعدیل‌ها به شدت به این بستگی دارد که چه کسی می‌شمارد. سند دستاوردها و شبکه‌تان را به‌روز نگه دارید: سطح از شما محافظت نمی‌کند."),
      body: L("We found no evidence that layoffs rewrote level definitions. What changes is the environment around them: promotion budgets, calibration distributions and how much slack a team has. In January 2025 Meta reportedly cut about 5% of its lowest performers, Microsoft ran performance-based cuts affecting under 1% of staff with pay-out offers, and Amazon had a similar programme. By February 2026 CNBC was covering Amazon and Meta tightening their reviews.\n\nTotals depend on the tracker, so never quote a bare number. For 2026 so far: Crunchbase counts about 94,000 US tech layoffs from January to August (up about 17% on the year before); layoffs.fyi's figures, as quoted by aggregators, reach about 128,500 by 10 September; TrueUp, which counts more events, lists about 190,000. AI was cited in about a third of 2026 layoff events according to layoffs.fyi's founder, which is an analyst's classification, not company statements. The Harvard Gazette (29 September 2026) reports researchers saying mass AI-driven layoffs haven't materialised.\n\nWhat protects you isn't a level. It's a record of impact, relationships beyond your team, and skills that transfer.",
              "شواهدی نیافتیم که تعدیل نیرو تعریف سطح‌ها را بازنویسی کرده باشد. آنچه عوض می‌شود محیط اطراف آن‌هاست: بودجه‌ی ارتقا، توزیع کالیبراسیون و میزان فضای تیم. در ژانویه‌ی 2025 گزارش شد Meta حدود 5% ضعیف‌ترین‌ها را کنار گذاشت، Microsoft کاهش‌هایی مبتنی بر عملکرد برای کمتر از 1% کارکنان با پیشنهاد حقوق ترک کار انجام داد، و Amazon برنامه‌ای مشابه داشت. تا فوریه‌ی 2026 CNBC از سخت‌گیرتر شدن ارزیابی‌ها در Amazon و Meta می‌نوشت.\n\nمجموع‌ها به ردیاب بستگی دارند، پس هرگز یک عدد برهنه نقل نکنید. برای 2026 تا اینجا: Crunchbase حدود 94 هزار تعدیل در فناوری آمریکا را از ژانویه تا اوت می‌شمارد (حدود 17% بیشتر از سال قبل)؛ اعداد layoffs.fyi، آن‌طور که تجمیع‌کننده‌ها نقل می‌کنند، تا 10 سپتامبر به حدود 128,500 می‌رسد؛ TrueUp، که رویدادهای بیشتری می‌شمارد، حدود 190 هزار ثبت کرده. به گفته‌ی بنیان‌گذار layoffs.fyi در حدود یک‌سوم رویدادهای تعدیل 2026 به AI استناد شده، که برچسب یک تحلیل‌گر است، نه اظهار شرکت‌ها. Harvard Gazette (29 سپتامبر 2026) می‌نویسد پژوهشگران می‌گویند تعدیل گسترده‌ی ناشی از AI شکل نگرفته است.\n\nآنچه از شما محافظت می‌کند سطح نیست. سابقه‌ی اثرگذاری، روابطی فراتر از تیم و مهارت‌های قابل‌انتقال است."),
      steps: [
        L("Update your evidence log and CV with outcomes in numbers now, not when you need them.",
          "سند دستاوردها و رزومه را همین حالا با نتیجه‌های عددی به‌روز کنید، نه وقتی به آن‌ها نیاز دارید."),
        L("Keep two or three relationships outside your team warm.",
          "دو سه رابطه بیرون از تیم‌تان را گرم نگه دارید."),
        L("Know your market: which level and scope your evidence would get elsewhere.",
          "بازارتان را بشناسید: مدرک شما در جای دیگر چه سطح و scopeای می‌گیرد."),
        L("Learn one adjacent skill that makes you more useful to the business.",
          "یک مهارت مجاور یاد بگیرید که شما را برای کسب‌وکار مفیدتر می‌کند.")
      ],
      story: null,
      links: [
        { route: "landscape/market", label: L("The market, with sources", "بازار، با منابع") },
        { route: "grow/evidence", label: L("Build evidence others can quote", "مدرکی بسازید که دیگران نقلش کنند") }
      ]
    }

  );
})();

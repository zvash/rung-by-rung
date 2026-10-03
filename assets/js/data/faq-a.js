/* FAQ, part A: "basics" (9 entries) and "growth" (6 entries).
   Registers into S.data.faq, which several files share. Stories are illustrative composites; their numbers are made up. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;
  S.data.faq = S.data.faq || [];
  S.data.faq.push(

    /* ===================== basics ===================== */

    {
      id: "what-is-level",
      group: "basics",
      levels: ["L3", "L4", "L5"],
      q: L("What exactly is a level, and how is it different from my title and my pay?",
           "سطح دقیقا یعنی چه و با عنوان شغلی و حقوق من چه فرقی دارد؟"),
      short: L("A level is a contract about scope: how big, how ambiguous and how long-running the work is that you're trusted with. Your title is a label that varies by employer, and your pay band follows the level, not the title.",
               "سطح، توافقی درباره‌ی scope کار است: اندازه، میزان ابهام و افق زمانی کاری که به شما سپرده می‌شود. معنای عنوان شغلی بین شرکت‌ها فرق می‌کند و pay band به سطح وابسته است، نه عنوان."),
      body: L("Your **level** is a ==contract about scope==: how big, how ambiguous and how long-running the work is that the company trusts you with. Your **title** is just a label. The same word can mean different scope at different employers, and some large companies give every engineer the same outside title (Meta reportedly does). Your **pay band** hangs on the level, not the title. That's why level matters: it sets your band, and equity grows much faster than base as levels rise. In levels.fyi's self-reported medians for Meta, base pay roughly doubles from E3 to E6 while yearly stock grows more than tenfold.\n\nA **tech lead** is a role, not a level. It's an informal, per-project job (coordinating the work, vetting plans, speaking for the team) that people at several levels do. Leading a project can be evidence for a level, but it isn't one.\n\nDon't treat the level as a calculator. Monzo describes its framework as a compass for manager conversations, and it dropped an earlier, more checklist-like version after engineers started ticking boxes. A level is a shared way to say what you're trusted with and what the next step looks like.",
              "**سطح** یک ==قرارداد درباره‌ی scope== است: کاری که شرکت به شما می‌سپارد چقدر بزرگ، چقدر مبهم و چقدر بلندمدت است. **عنوان شغلی** فقط یک برچسب است. یک کلمه در شرکت‌های مختلف می‌تواند scope متفاوتی داشته باشد و بعضی شرکت‌های بزرگ برای معرفی همه‌ی مهندس‌ها در بیرون از شرکت، عنوان یکسانی به کار می‌برند (گفته می‌شود Meta چنین است). **بازه‌ی حقوقی (pay band)** به سطح وصل است، نه به عنوان. برای همین سطح مهم است: بازه‌ی پرداختی شما را تعیین می‌کند و با بالا رفتن سطح، equity خیلی سریع‌تر از حقوق پایه رشد می‌کند. بر اساس میانه‌هایی که کاربران levels.fyi خودشان گزارش کرده‌اند، در Meta حقوق پایه از E3 تا E6 تقریبا دو برابر می‌شود ولی سهام سالانه بیش از ده برابر.\n\n**tech lead** یک نقش است، نه یک سطح. کاری غیررسمی و مربوط به یک پروژه است (هماهنگی کار، بررسی برنامه‌ها، نمایندگی تیم) که افرادی در چند سطح مختلف انجامش می‌دهند. رهبری یک پروژه می‌تواند مدرکی برای یک سطح باشد، ولی خودش سطح نیست.\n\nسطح را ماشین‌حساب فرض نکنید. Monzo چارچوب خودش را قطب‌نمایی برای گفتگوهای مدیر و مهندس می‌داند و نسخه‌ی چک‌لیست‌مانند قبلی را کنار گذاشت چون مهندس‌ها شروع کرده بودند به تیک زدن موردها. سطح زبان مشترکی است برای این‌که بگوییم چه چیزی به شما سپرده شده و گام بعدی چه شکلی است."),
      steps: [
        L("Write down your level, your title and your pay band as three separate facts. Ask your manager about any you can't fill in.",
          "سطح، عنوان شغلی و بازه‌ی حقوقی‌تان را سه واقعیت جدا بنویسید. اگر جواب یکی را نمی‌دانید، از مدیرتان بپرسید."),
        L("Get the written descriptions of your level and the next one, and read what the next level says about scope.",
          "توصیف مکتوب سطح فعلی و سطح بعدی را بگیرید و ببینید سطح بعد درباره‌ی scope چه می‌گوید."),
        L("With recruiters, lead with scope (people, teams, months, ambiguity) and mention the title second. Titles travel badly; scope travels well.",
          "در گفتگو با recruiter ابتدا scope را با تعداد افراد، تیم‌ها، مدت و ابهام توضیح دهید و سپس عنوان را بگویید. شواهد scope برای مقایسه بین شرکت‌ها قابل‌اتکاتر از عنوان‌اند."),
        L("If you're a tech lead, record it as a role in your evidence log, and note what changed because you led.",
          "اگر tech lead هستید، آن را در سند دستاوردهایتان به‌عنوان یک نقش ثبت کنید و بنویسید رهبری شما چه چیزی را عوض کرد.")
      ],
      story: L("Neda joined a 40-person startup as “Senior Engineer”. Two years later the company introduced a ladder and put her at {L4}. She was stung until she read the descriptions: {L5} meant owning an area across several quarters and setting direction for 2–3 engineers, while she had been delivering one project at a time. The title had been generous; her pay band followed the level. She asked her manager for the first area-sized problem on the roadmap, and the conversation became a plan instead of an argument.",
               "ندا در یک استارتاپ 40 نفره با عنوان «Senior Engineer» استخدام شد. دو سال بعد شرکت نردبان سطح‌بندی معرفی کرد و سطح او را {L4} تعیین کرد. ندا دلخور شد، تا این‌که توصیف سطح‌ها را خواند: {L5} یعنی own کردن یک حوزه در طول چند فصل و جهت‌دهی به 2 تا 3 مهندس و او همیشه یک پروژه را تحویل می‌داد. عنوانش از دامنه‌ی واقعی مسئولیتش بزرگ‌تر بود. بازه‌ی پرداختی‌اش به سطح وابسته بود. از مدیرش خواست مسئولیت اولین مساله‌ی roadmap با scope در مقیاس یک حوزه را به او بسپارد و بحث به یک برنامه تبدیل شد."),
      links: [
        { route: "how/what", label: L("Level vs title vs pay band", "سطح، عنوان شغلی و بازه‌ی حقوقی") },
        { route: "paths/lead", label: L("Tech lead is a role", "tech lead یک نقش است") }
      ]
    },

    {
      id: "level-vs-years",
      group: "basics",
      levels: ["L3", "L4", "L5"],
      q: L("Is my level about years of experience?",
           "آیا سطح من به سال‌های تجربه‌ام بستگی دارد؟"),
      short: L("No. Years correlate with level only loosely, and the ranges overlap heavily. What sets your level is the scope you've handled and can show.",
               "نه. سال‌های تجربه فقط تا حدی با سطح ارتباط دارند و بازه‌ها هم‌پوشانی زیادی دارند. scope کار انجام‌شده و شواهد آن، سطح را تعیین می‌کند."),
      body: L("Years and level move together only loosely. levels.fyi's data is self-reported (total career years, so probably skewed toward people who switch jobs), and these figures come from search summaries of the site, so treat them as a rough shape. They put Google L4 at roughly 5–6 years, with L5 starting around 5, and Meta E4 at roughly 3–4, with E5 starting around 4. Some of those figures are the lowest values seen, not typical ones. What matters is the overlap: one level's typical years sit right next to the next level's minimum, and external hires often enter above the internal median.\n\nThe overlap has two sources. Fast movers get handed, or go and find, bigger scope early, and they can show it. Slower movers aren't worse engineers; their work just hasn't changed in kind, so five years of better tasks still reads as tasks. John Allspaw's essay on being a senior engineer makes the same point: seniority is maturity, not years or title.\n\nUse years as a loose sanity check and evidence as the real test. The useful question isn't “how long have I been here?” but “what's the biggest thing I've owned, and could someone else describe it?”",
              "بین سال‌های تجربه و سطح فقط تا حدی ارتباط وجود دارد. داده‌های levels.fyi را خود افراد گزارش می‌کنند و شامل کل سابقه‌ی کاری است، بنابراین احتمالا سهم کسانی که شرکت عوض کرده‌اند در آن بیشتر است و این عددها از روی خلاصه‌ی نتایج جست‌وجو آمده‌اند، پس فقط تصویری تقریبی ارائه می‌کنند. طبق آن‌ها، Google L4 حدود 5 تا 6 سال است و L5 از حدود 5 سال شروع می‌شود. Meta E4 حدود 3 تا 4 سال است و E5 از حدود 4 سال. بعضی از این عددها کم‌ترین مقدارِ دیده‌شده‌اند، نه مقدار معمول. نکته‌ی اصلی هم‌پوشانی است: سابقه‌ی معمول یک سطح می‌تواند با حداقل سابقه‌ی سطح بعد هم‌پوشانی داشته باشد و کسانی که از بیرون استخدام می‌شوند اغلب بالاتر از میانه‌ی داخلی وارد می‌شوند.\n\nاین هم‌پوشانی دو منبع دارد. بعضی‌ها سریع جلو می‌روند: scope بزرگ‌تر زود به آن‌ها سپرده می‌شود یا خودشان پیدایش می‌کنند و می‌توانند نشانش بدهند. بعضی‌ها کندتر جلو می‌روند، نه چون مهندس بدتری هستند، بلکه چون کارشان از نظر نوع تغییر نکرده. پس پنج سال انجام بهتر taskها هنوز به معنای تغییر جنس کار نیست. John Allspaw در مقاله‌اش درباره‌ی مهندس ارشد همین را می‌گوید: ارشدی یعنی پختگی، نه سال و نه عنوان.\n\nسال‌ها را فقط یک محک سرانگشتی بگیرید و شواهد را محک اصلی. سوال مفید این نیست که «چند سال است اینجا هستم؟». این است که «بزرگ‌ترین چیزی که own کرده‌ام چیست و کس دیگری می‌تواند توصیفش کند؟»"),
      steps: [
        L("Label your three biggest pieces of work from the last year: task, project or area. If all three are tasks, more years won't change that.",
          "سه کار بزرگ سال گذشته‌تان را برچسب بزنید: task، پروژه یا حوزه. اگر هر سه در حد task هستند، سال‌های بیشتر این را عوض نمی‌کند."),
        L("Read the next level's description and mark the points you already have an example for. That count says more than your year count.",
          "شرح سطح بعد را بخوانید و مواردی را که برایشان مثال دارید علامت بزنید. این شواهد از تعداد سال‌های تجربه گویاترند."),
        L("Skip year-count comparisons with peers. Ask what they owned and what changed, and compare that.",
          "صرفا تعداد سال‌های تجربه‌تان را با همکاران مقایسه نکنید. بپرسید آن‌ها چه چیزی را own کرده‌اند و چه چیزی عوض شده و آن را مقایسه کنید."),
        L("Ask your manager for the smallest piece of work that could be your first next-level example, and a date to look at it.",
          "از مدیرتان کوچک‌ترین کاری را بخواهید که می‌تواند اولین مثال سطح بعدی شما باشد، همراه با تاریخی برای بررسی‌اش.")
      ],
      story: null,
      links: [
        { route: "how/pace", label: L("Time in level and plateaus", "زمان در هر سطح و درجا زدن") },
        { route: "locate", label: L("Where am I?", "من کجا هستم؟") }
      ]
    },

    {
      id: "same-years-different-levels",
      group: "basics",
      levels: ["L4", "L5", "L6"],
      q: L("Why do two engineers with the same years of experience land at different levels, and why do companies differ?",
           "چرا دو مهندس با سال‌های تجربه‌ی یکسان در دو سطح متفاوت قرار می‌گیرند و چرا شرکت‌ها با هم فرق دارند؟"),
      short: L("Because level follows the scope of the work you can show, and that depends on what you were handed, which employer you worked for and whose ladder is doing the measuring.",
               "سطح به scope قابل‌اثبات کار وابسته است. فرصت‌های کاری، شرکت قبلی و معیار نردبان شرکت جدید در ارزیابی آن نقش دارند."),
      body: L("Years hide two things. The first is **scope of past work**: six years of tickets inside one feature team is a different record from six years owning a service that three teams depend on. The second is **employer tier**. Gergely Orosz points out that the same title carries different scope and pay across company tiers: an agency “senior” can come in as a mid-level engineer at a big tech company, and one employer's principal supports a single squad while another's covers the whole company.\n\nLadders differ by design, too. Going by their public frameworks, Staff means one team's technical domain at GitLab, a multi-team collective at Monzo and a domain-wide role at Etsy, so Staff scope doesn't carry over. And when you change employers, level is often set by the interview loop rather than your old title: Spotify's postings reportedly say it depends on work history plus interview performance.\n\nNone of this is a verdict on you. What travels is evidence in the units rubrics use: people and teams affected, ambiguity owned, results in numbers.",
              "سال‌ها دو چیز را پنهان می‌کنند. اول **scope کارهای قبلی**: شش سال انجام task در یک تیم توسعه‌ی قابلیت، با شش سال own کردن سرویسی که سه تیم به آن وابسته‌اند، تجربه‌ی یکسانی نیست. دوم **رده‌ی شرکت**: Gergely Orosz اشاره می‌کند که یک عنوان در رده‌های مختلف شرکت‌ها scope و حقوق متفاوتی دارد: یک «senior» آژانس می‌تواند در یک شرکت big tech با سطح میانی وارد شود و principal در یک شرکت یک squad را پشتیبانی می‌کند در حالی که در شرکتی دیگر کل شرکت را پوشش می‌دهد.\n\nنردبان‌ها هم عمدا با هم فرق دارند. طبق چارچوب‌های عمومی‌شان، staff در GitLab یعنی حوزه‌ی فنی یک تیم، در Monzo یعنی جمعی از چند تیم و در Etsy یعنی نقشی در سطح یک دامنه. پس عنوان staff بین شرکت‌ها scope یکسانی ندارد. وقتی شرکت عوض می‌کنید هم سطح اغلب از دور مصاحبه تعیین می‌شود، نه از عنوان قبلی‌تان: آگهی‌های شغلی Spotify، به‌گفته‌ی گزارش‌ها، می‌گویند به سابقه‌ی کاری به‌علاوه‌ی عملکرد در مصاحبه بستگی دارد.\n\nهیچ‌کدام از این‌ها حکم درباره‌ی شما نیست. برای مقایسه بین شرکت‌ها، شواهد را با همان معیارهای rubric توضیح دهید: چند نفر و چند تیم تحت تاثیر قرار گرفتند، چه ابهامی را رفع کردید و نتیجه‌ی عددی چه بود."),
      steps: [
        L("Describe your last two projects in scope units: people, teams, months and the ambiguity you resolved. Use these instead of your title.",
          "دو پروژه‌ی آخرتان را با واحدهای scope توصیف کنید: چند نفر، چند تیم، چند ماه و چه ابهامی را رفع کردید. به‌جای عنوان از همین‌ها استفاده کنید."),
        L("When you compare yourself with someone who has the “same” years, ask what they owned and what changed because of it.",
          "وقتی خودتان را با کسی که سال‌های «یکسان» دارد مقایسه می‌کنید، بپرسید او چه چیزی را own کرده و چه چیزی به‌خاطر آن عوض شده است."),
        L("Before an interview, read the target company's level descriptions and map two of your projects to them in writing.",
          "پیش از مصاحبه، شرح سطح‌های شرکت هدف را بخوانید و تطبیق دو پروژه‌ی خود با آن‌ها را مکتوب کنید."),
        L("Ask recruiters how the company defines a level's scope (teams, horizon, ambiguity) before reacting to the level's name.",
          "پیش از واکنش به اسم سطح، از recruiter بپرسید شرکت scope آن سطح را چطور تعریف می‌کند (تیم‌ها، افق، ابهام).")
      ],
      story: L("Kian and Elena each had seven years. Kian had spent his at a 25-person agency: client sites, fast delivery, never more than two people on a project, “Senior Engineer” on his card. Elena had spent hers on a platform team at a large company: three teams depended on her service, she wrote the design docs, and her title was “Engineer II”. At a new company, the loop placed Kian at mid-level and Elena at senior. Nobody was judging their worth. The interviews had simply measured scope and ambiguity, and their stories were different sizes.",
               "کیان و النا هر کدام هفت سال تجربه داشتند. کیان سال‌هایش را در یک آژانس 25 نفره گذرانده بود: سایت مشتری‌ها، تحویل سریع، هیچ‌وقت بیش از دو نفر روی یک پروژه و روی کارتش «Senior Engineer». النا سال‌هایش را در تیم پلتفرم یک شرکت بزرگ گذرانده بود: سه تیم به سرویسش وابسته بودند، design docها را او می‌نوشت و عنوانش «Engineer II» بود. در شرکت جدید، دور مصاحبه کیان را در سطح میانی گذاشت و النا را در سطح ارشد. کسی ارزش آن‌ها را قضاوت نمی‌کرد. مصاحبه‌ها فقط scope و ابهام را اندازه گرفته بودند و دامنه‌ی تجربه‌هایی که بیان کردند متفاوت بود."),
      links: [
        { route: "how/translator", label: L("Cross-company level codes", "کدهای سطح‌بندی در شرکت‌های مختلف") },
        { route: "hire/numbers", label: L("Scope in numbers", "scope به زبان عدد") }
      ]
    },

    {
      id: "all-lenses",
      group: "basics",
      levels: ["L4", "L5", "L6"],
      q: L("Do I need to be at the next level in every lens to be promoted?",
           "برای ارتقا باید در همه‌ی بُعدها هم‌زمان به سطح بعد برسم؟"),
      short: L("Not in every lens at once, but you need a consistent next-level pattern across most of them and no glaring gap. The higher the level, the fewer big gaps are tolerated, and one dominant weakness can block a case.",
               "لازم نیست همه‌ی ابعاد هم‌زمان به سطح بعد برسند، اما باید در بیشتر آن‌ها عملکرد مستمر دیده شود و کاستی مهمی باقی نماند. در سطح‌های بالاتر، یک ضعف تعیین‌کننده می‌تواند مانع ارتقا شود."),
      body: L("No. Real profiles are spiky: strong Expertise and Challenge, Influence still catching up. That's normal. The four lenses (Contribution, Challenge, Influence, Expertise) are four ways of looking at the same work, not four exams, and impact is judged alongside each one.\n\nWhat reviewers look for is a consistent next-level pattern across most lenses, with ==no glaring hole==. Dropbox's framework says higher levels tolerate fewer significant gaps, and Monzo's says one dominant weakness can block a promotion even when everything else is strong. So an {L5} case with brilliant Challenge evidence and no sign that anyone else moves because of you is a risky packet. A case that's solid in three lenses and visibly growing in the fourth is usually fine.\n\nTo find your weakest lens, take the next level's description for each lens and write one example from the last year against each. The blank is your growth edge. Then ask your manager and one peer to do the same exercise about you, separately, and compare.",
              "لازم نیست. توانمندی افراد در همه‌ی ابعاد یکسان نیست: تخصص و چالش قوی، قدرت نفوذ هنوز در حال رشد. این طبیعی است. چهار بُعد (مشارکت، چالش، قدرت نفوذ، تخصص) چهار راه برای نگاه کردن به یک کار واحدند، نه چهار امتحان جدا و اثرگذاری کنار هر کدام سنجیده می‌شود.\n\nبررسی‌کننده‌ها دنبال الگوی ثابتی از سطح بعد در بیشتر بُعدها هستند، ==بدون کاستی مهم==. چارچوب Dropbox می‌گوید سطح‌های بالاتر شکاف‌های مهم کمتری را تحمل می‌کنند و Monzo می‌گوید یک ضعف تعیین‌کننده می‌تواند ارتقا را متوقف کند، حتی اگر همه‌چیز دیگر قوی باشد. پس پرونده‌ای برای {L5} که شواهد چالش‌اش درخشان است ولی هیچ نشانه‌ای ندارد که کار دیگران به‌خاطر شما جلو رفته، پرونده‌ی پرخطری است. پرونده‌ای که در سه بُعد محکم است و در بُعد چهارم آشکارا در حال رشد، معمولا مشکلی ندارد.\n\nبرای پیدا کردن ضعیف‌ترین بُعدتان، توصیف سطح بعد را برای هر بُعد بردارید و برابرش یک مثال از سال گذشته بنویسید. جای خالی، اولویت رشد شماست. بعد از مدیرتان و یک همکار بخواهید همین تمرین را درباره‌ی شما جداگانه انجام بدهند و با هم مقایسه کنید."),
      steps: [
        L("Pick the next level and write one example from the last 12 months for each lens. Leave a blank where you have none.",
          "سطح بعد را بردارید و برای هر بُعد یک مثال از 12 ماه گذشته بنویسید. جایی که مثالی ندارید خالی بگذارید."),
        L("Ask your manager and one trusted peer to fill in the same grid about you, without seeing yours, then compare.",
          "از مدیر و یک همکار مورد اعتمادتان بخواهید همین جدول را درباره‌ی شما پر کنند، بی‌آن‌که جدول شما را ببینند و بعد مقایسه کنید."),
        L("Choose the emptiest lens and plan one piece of work this quarter that would produce evidence for it.",
          "بُعدی را که کمترین شواهد را دارد انتخاب کنید و برای این فصل کاری برنامه‌ریزی کنید که توانمندی شما را در آن نشان دهد."),
        L("Stop polishing your strongest lens. A first example in an empty lens is worth more than a fifth in a full one.",
          "فعلا بر قوی‌ترین بُعد تمرکز نکنید. اولین شاهد در بُعدی ضعیف، از پنجمین شاهد در بُعدی قوی ارزشمندتر است.")
      ],
      story: L("Leila was the person colleagues called for impossible bugs. Her {L5} case was full of deep Challenge and Expertise examples. In calibration, a reviewer asked whose work had changed because of Leila, and nobody had an answer: she had always solved things alone. The case paused with one note: Influence. Over two quarters she ran the design-review rotation, onboarded a new hire onto the on-call, and wrote a short guide to her debugging method that two other teams adopted. At the next cycle her case had an example in every lens, and it went through.",
               "لیلا کسی بود که برای باگ‌های غیرممکن سراغش می‌رفتند. پرونده‌ی {L5} او پر از مثال‌های عمیق در چالش و تخصص بود. در جلسه‌ی کالیبراسیون (calibration) یکی از بررسی‌کننده‌ها پرسید کار چه کسی به‌خاطر لیلا عوض شده است و کسی جوابی نداشت: او همیشه تنها مساله حل کرده بود. پرونده با یادداشتی درباره‌ی ضعف شواهد قدرت نفوذ تایید نشد. لیلا در دو فصل بعد چرخه‌ی نوبتی design reviewها را راه انداخت، یک تازه‌وارد را وارد on-call کرد و راهنمای کوتاهی از روش اشکال‌یابی‌اش نوشت که دو تیم دیگر پذیرفتند. دوره‌ی بعد پرونده‌اش در هر بُعد مثالی داشت و تایید شد."),
      links: [
        { route: "locate", label: L("Where am I?", "من کجا هستم؟") },
        { route: "how/lenses", label: L("The four lenses", "چهار بُعد") }
      ]
    },

    {
      id: "impact-meaning",
      group: "basics",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("What does “impact” actually mean, and why isn't it just another lens?",
           "«اثرگذاری» دقیقا یعنی چه و چرا فقط یک بُعد دیگر نیست؟"),
      short: L("Impact is what changed because of your work, judged together with each lens. At lower levels it means your tasks and projects landing well; at higher levels it means the project, and then the area, actually succeeding.",
               "اثرگذاری یعنی به‌خاطر کار شما چه چیزی تغییر کرد و کنار هر بُعد سنجیده می‌شود. در سطح‌های پایین‌تر یعنی taskها و پروژه‌هایتان خوب تحویل شوند. در سطح‌های بالاتر یعنی خودِ پروژه و بعد خودِ حوزه، واقعا موفق شود."),
      body: L("Impact isn't a fifth lens. It's the yardstick laid across all four: a clever design (Challenge) or a clean delivery (Contribution) counts for what it changed for the business and its customers, not for how good the work felt to do.\n\nWhat gets measured shifts with level. At {L2} and {L3}, impact is on the project: tasks land on time, with few defects, and don't create rework for others. At {L4}, it's whole projects delivered and stable. At {L5}, it's the fate of the project itself: launched, adopted, stable. At {L6} and {L7}, it's the direction you set and the capability the company gained. Illustrative lines, with made-up numbers: “the migration shipped in three releases with no customer downtime” ({L4}); “missed-alert tickets fell from about 30 a month to 8 after the service I scoped and handed off” ({L5}).\n\nTo say it in numbers, name the metric the work was meant to move, give before and after, and say who benefited and what you did yourself. With no number, use the next best thing: time saved per engineer, ticket counts, or one sentence from the person who felt the change.",
              "اثرگذاری بُعد پنجم نیست. معیاری است که در ارزیابی هر چهار بُعد به کار می‌رود: یک طراحی هوشمندانه (چالش) یا یک تحویل تمیز (مشارکت) به اندازه‌ی تغییری ارزش دارد که برای کسب‌وکار و مشتری‌ها ایجاد کرده، نه به اندازه‌ی لذتی که از انجامش بردید.\n\nچیزی که سنجیده می‌شود با سطح عوض می‌شود. در {L2} و {L3} اثرگذاری روی پروژه است: taskها به‌موقع می‌رسند، با ایراد کم و برای دیگران دوباره‌کاری نمی‌سازند. در {L4} یعنی پروژه‌های کامل، تحویل‌شده و پایدار. در {L5} سرنوشتِ خودِ پروژه است: launch شد، پذیرفته شد، پایدار ماند. در {L6} و {L7} جهتی است که تعیین کردید و توانمندی‌ای که شرکت به دست آورد. چند جمله‌ی نمونه (با عددهای فرضی): «مهاجرت در سه release و بدون downtime برای مشتری تحویل شد» ({L4}). «تیکت‌های هشدارِ ازدست‌رفته، پس از راه‌اندازی سرویسی که scope آن را مشخص کردم و پیاده‌سازی‌اش را به دیگران سپردم، از حدود 30 در ماه به 8 رسید» ({L5}).\n\nبرای این‌که با عدد بگویید: شاخصی را که قرار بود تغییر کند نام ببرید، مقدار پیش و پس از کار را بنویسید و بگویید چه کسی سود برد و خودتان دقیقا چه کردید. وقتی عدد ندارید، بهترین جایگزین را بیاورید: زمانِ صرفه‌جویی‌شده برای هر مهندس، تعداد تیکت‌ها، یا یک جمله از کسی که تغییر را حس کرده است."),
      steps: [
        L("For your last three pieces of work, write the goal, what moved, by how much and who benefited. Replace every “improved” with a number.",
          "برای سه کار اخیر، هدف، شاخص تغییرکرده، مقدار تغییر و ذی‌نفع را بنویسید. به‌جای «بهتر شد»، عدد مشخص بیاورید."),
        L("If you have no number, ask the PM or a stakeholder for one data point or a one-sentence quote, in writing.",
          "اگر عدد ندارید، از PM یا یک ذی‌نفع یک داده یا یک جمله‌ی مکتوب بخواهید."),
        L("End each project update with a “so what” line: what's different now for users, teammates or on-call.",
          "در پایان هر گزارش پروژه توضیح دهید چه نتیجه‌ای حاصل شد و چه چیزی برای کاربران، هم‌تیمی‌ها یا on-call تغییر کرد."),
        L("Read the next level's impact line and aim your examples at that altitude: your tasks, your project or your area.",
          "شرح اثرگذاری سطح بعد را بخوانید و مثال‌ها را در مقیاس مناسب بیان کنید: task، پروژه یا حوزه.")
      ],
      story: L("Sina's year-end notes said: “Rewrote the notification service. Added retries. Improved logging.” Her manager asked what had changed for a user or for the on-call engineer. She went to the data: missed-alert tickets had fallen from about 30 a month to 8, and pages from 25 to 10. One line replaced three: “Notification rewrite cut missed-alert tickets by about 70% and on-call pages by 60%.” The work was the same. Now someone who hadn't been there could see it.",
               "یادداشت‌های پایان سال سینا این بود: «سرویس اعلان را بازنویسی کردم. retry اضافه کردم. لاگ‌گیری را بهتر کردم.» مدیرش پرسید برای کاربر یا مهندس on-call چه چیزی عوض شده. سینا سراغ داده‌ها رفت: تیکت‌های هشدارِ ازدست‌رفته از حدود 30 در ماه به 8 رسیده بود و pageها از 25 به 10. یک خط جای سه خط را گرفت: «بازنویسی سرویس اعلان تیکت‌های هشدارِ ازدست‌رفته را حدود 70% و pageهای on-call را 60% کم کرد.» کار همان بود. حالا کسی که آنجا نبود هم می‌توانست آن را ببیند."),
      links: [
        { route: "how/lenses", label: L("The four lenses and impact", "چهار بُعد و اثرگذاری") },
        { route: "toolkit/statement", label: L("Impact statement builder", "سازنده‌ی جمله‌ی اثرگذاری") }
      ]
    },

    {
      id: "l4-vs-l5",
      group: "basics",
      levels: ["L4", "L5"],
      q: L("What is the real difference between L4 and L5 in a normal week?",
           "تفاوت واقعی L4 و L5 در یک هفته‌ی عادی چیست؟"),
      short: L("At L4 you own a multi-month project that someone has helped shape. At L5 you own an area, decide what's worth doing, and set direction for 2–3 engineers. It's a change in kind, not just size.",
               "در L4 پروژه‌ای چندماهه را own می‌کنید که در تعریف آن کمک گرفته‌اید. در L5 حوزه‌ای را own می‌کنید، کارهای ارزشمند را انتخاب می‌کنید و برای 2 تا 3 مهندس جهت تعیین می‌کنید. جنس کار تغییر می‌کند."),
      body: L("Both levels own work end to end. The difference is what you own and who decided it mattered. An {L4} engineer owns a project of several months: breaks it down, plans the dependencies, ships it with docs and monitoring, and needs little guidance. The project usually arrives already shaped. An {L5} engineer owns an **area**: one or more projects across several quarters. She scopes what is and isn't part of the problem, originates ideas, and works through ambiguity where no answer is clearly best. That's the “inner PM”.\n\nA week can look like this:\n\n- **L4 week:** a design doc for the next milestone, two stakeholder syncs, a dependency that slipped and a re-plan, a review for a newer teammate, a dashboard fix before launch.\n- **L5 week:** half a day with the PM turning a vague ask into three costed options, a design review where two engineers bring proposals and you steer, a stakeholder who comes to you before escalating, and a decision about what you won't do.\n\nSetting direction for 2–3 engineers also means handing off implementation well, not coding the hardest part yourself.",
              "هر دو سطح کار را end-to-end own می‌کنند. فرق در این است که چه چیزی را own می‌کنید و چه کسی تشخیص داده که مهم است. مهندس {L4} پروژه‌ای چندماهه را own می‌کند: می‌شکندش، وابستگی‌ها را برنامه‌ریزی می‌کند، با مستندات و monitoring تحویلش می‌دهد و به راهنمایی کمی نیاز دارد. پروژه معمولا شکل‌گرفته به دستش می‌رسد. مهندس {L5} یک **حوزه** را own می‌کند: یک یا چند پروژه در طول چند فصل. او scope مساله را مشخص می‌کند: چه بخش‌هایی در آن می‌گنجند و چه بخش‌هایی خارج از آن‌اند، ایده می‌سازد و جایی که هیچ جوابی به‌وضوح بهترین نیست راه را پیدا می‌کند. اینجاست که داشتن «PM درون» معنا پیدا می‌کند.\n\nیک هفته می‌تواند این‌طور فرق کند:\n\n- **هفته‌ی L4:** یک design doc برای milestone بعدی، دو جلسه‌ی همگام‌سازی با ذی‌نفع‌ها، وابستگی‌ای که عقب افتاد و برنامه‌ریزی دوباره، review برای یک هم‌تیمی تازه‌کارتر و درست کردن یک داشبورد پیش از launch.\n- **هفته‌ی L5:** نیم‌روز با PM برای تبدیل یک درخواست مبهم به سه گزینه با برآورد هزینه، یک design review که دو مهندس دیگر پیشنهاد می‌آورند و شما جهت می‌دهید، ذی‌نفعی که پیش از escalate کردن سراغ شما می‌آید و تصمیمی درباره‌ی این‌که چه کاری را انجام نمی‌دهید.\n\nتعیین جهت برای 2 تا 3 مهندس یعنی پیاده‌سازی را هم به‌شکلی موثر به دیگران بسپارید، نه این‌که سخت‌ترین بخش را خودتان کد بزنید."),
      steps: [
        L("When a vague request lands, spend a day on the problem before the solution: two or three options with costs, and your recommendation.",
          "برای درخواست مبهم، پیش از انتخاب راه‌حل یک روز صرف تعریف مساله کنید و دو یا سه گزینه با هزینه و توصیه‌ی خود بنویسید."),
        L("Hand one slice of your own project to a teammate with a clear outcome and a check-in date. Support it; don't take it back.",
          "بخشی از پروژه را با نتیجه‌ی مورد انتظار و موعد بررسی به همکار بسپارید. حمایتش کنید و مسئولیت را از او پس نگیرید."),
        L("Propose one idea this quarter that nobody assigned you, on one page: the problem, the cost and the expected effect.",
          "این فصل، ایده‌ای را که خودتان شناسایی کرده‌اید در یک صفحه پیشنهاد دهید: مساله، هزینه و اثر مورد انتظار."),
        L("Learn the two numbers your area is judged on, and where they live.",
          "دو شاخص عددی را که حوزه‌تان با آن‌ها سنجیده می‌شود بشناسید و بدانید کجا پیدا می‌شوند.")
      ],
      story: L("A PM told two engineers the same thing: “checkout drop-off is too high.” Omid, at {L4}, asked which step, got a ticket to shorten the address form, and shipped it cleanly in three weeks. Tara, at {L5}, spent two days with an analyst and found that most drop-off came from payment errors, not the form. She wrote three options, recommended starting with error messages, handed two pieces to teammates with clear outcomes, and set a weekly metric check with the PM. Both did good work. Only one chose which problem was worth solving.",
               "یک PM به دو مهندس یک چیز گفت: «ریزش در checkout زیاد است.» امید، در {L4}، پرسید کدام مرحله، یک تیکت برای کوتاه‌کردن فرم آدرس گرفت و در سه هفته تمیز تحویلش داد. تارا، در {L5}، دو روز با یک تحلیل‌گر نشست و فهمید بیشتر ریزش از خطاهای پرداخت است، نه فرم. سه گزینه نوشت، پیشنهاد کرد از پیام‌های خطا شروع کنند، دو بخش را با خروجی روشن به هم‌تیمی‌ها سپرد و یک بررسی هفتگی شاخص با PM گذاشت. هر دو کار خوبی کردند. فقط یکی انتخاب کرد کدام مساله ارزش حل‌شدن دارد."),
      links: [
        { route: "levels/jump", label: L("The jump between levels", "پرش میان سطح‌ها") },
        { route: "levels/week", label: L("A week at each level", "یک هفته در هر سطح") }
      ]
    },

    {
      id: "owning-e2e",
      group: "basics",
      levels: ["L3", "L4"],
      q: L("What do “owning” and “end-to-end” look like day to day?",
           "own کردن و end-to-end در عمل، در روزهای کاری، چه شکلی است؟"),
      short: L("Owning means you're the one responsible for seeing the work through and finding a way, even for parts you didn't write. End-to-end means it's complete and viable: docs, monitoring and alerts, a support guide, a test environment and clear communication with stakeholders.",
               "own کردن یعنی شما مسئول به نتیجه رساندن کار هستید و راهش را پیدا می‌کنید، حتی برای بخش‌هایی که خودتان ننوشته‌اید. end-to-end یعنی کار کامل و بقاپذیر باشد: مستندات، monitoring و alertها، راهنمای پشتیبانی، محیط تست و ارتباط روشن با ذی‌نفعان."),
      body: L("**Owning** is about responsibility, not territory. It means “I'll make sure this gets finished and works, and if there's no path, I'll find or build one.” It doesn't mean “mine, keep out.” When the blocker is another team's code or a missing runbook, an owner chases, escalates or fills the gap. If someone asks “why wasn't that case handled?”, the answer isn't “I only wrote the code.”\n\n**End-to-end** means the work is complete and viable, not just merged. Before you call a project done, check:\n\n- A doc a newcomer can follow.\n- Monitoring and alerts, so the right person is paged for the right things.\n- A support guide: what changed, likely questions, who to escalate to.\n- A test environment where problems can be reproduced.\n- Stakeholders told what's coming, when, and what changes for them.\n\nNone of this means “all of it is me.” You bring in others. What you own is that every piece exists and has a name next to it.",
              "**own کردن** درباره‌ی مسئولیت است، نه قلمرو. یعنی «مطمئن می‌شوم این کار تمام می‌شود و درست کار می‌کند و اگر راهی نیست، راهی پیدا یا درست می‌کنم.» یعنی «مال من است، دست نزنید» نیست. وقتی مانع کدِ تیم دیگر است یا نبودِ runbook، کسی که own می‌کند پیگیری می‌کند، escalate می‌کند یا خودش خلأ را پر می‌کند. اگر کسی بپرسد «پس چرا فلان حالت دیده نشده؟»، جواب این نیست که «من فقط کد را نوشتم».\n\n**end-to-end** یعنی کار کامل و بقاپذیر است، نه فقط merge شده. پیش از این‌که پروژه را تمام‌شده بدانید، این‌ها را بررسی کنید:\n\n- مستندی که یک تازه‌وارد بتواند دنبالش کند.\n- monitoring و alert، تا هنگام بروز هر مشکل، فرد مسئول page شود.\n- راهنمای پشتیبانی: چه چیزی عوض شده، چه سوال‌هایی محتمل است، به چه کسی escalate شود.\n- محیط تستی که بشود مشکلات را در آن بازتولید کرد.\n- ذی‌نفع‌ها بدانند چه چیزی، کِی می‌آید و برایشان چه چیزی عوض می‌شود.\n\nهیچ‌کدام به این معنی نیست که همه‌ی کارها را حتما خودتان انجام دهید. دیگران را وارد می‌کنید. شما پاسخگوی این هستید که همه‌ی اجزا آماده‌اند و مسئول هرکدام مشخص است."),
      steps: [
        L("Before launch, write a five-line “done” checklist (docs, alerts, support guide, test environment, stakeholder note) and put a name next to each line.",
          "پیش از launch، پنج معیار اتمام کار را بنویسید: مستندات، alert، راهنمای پشتیبانی، محیط تست و اطلاع‌رسانی ذی‌نفعان. برای هرکدام مسئول مشخص کنید."),
        L("When something breaks in code you didn't write, open the ticket, find the owner and stay on it until there's a fix or a decision.",
          "وقتی چیزی در کدی که ننوشته‌اید خراب شد، تیکت باز کنید، صاحبش را پیدا کنید و تا رفع مشکل یا رسیدن به تصمیم مشخص، پیگیری کنید."),
        L("Ask “who will be surprised by this?” and message them before the release, not after.",
          "بپرسید «این کار چه کسی را غافلگیر می‌کند؟» و پیش از release، نه بعد از آن، به او پیام بدهید."),
        L("Walk support or on-call through the change in 20 minutes before launch day.",
          "پیش از روز launch، در 20 دقیقه تغییر را برای پشتیبانی یا on-call توضیح بدهید.")
      ],
      story: L("Nima owned the rollout of an invoice export at a fintech. The code merged three days early. Instead of closing the ticket, he asked who would get the first support question. Nobody knew, so he wrote a one-page guide, added an alert for failed exports, asked QA for production-like test data and emailed finance the launch date. On launch day one customer's export failed. The alert fired, support had the guide, and finance already knew why. The fix took twenty minutes, and the launch stayed quiet.",
               "نیما مسئول release قابلیت خروجی فاکتور در یک fintech بود. کد سه روز زودتر merge شد. او به‌جای بستن تیکت پرسید اولین سوال پشتیبانی به دست چه کسی می‌رسد. کسی نمی‌دانست. پس راهنمای یک‌صفحه‌ای نوشت، برای خروجی‌های ناموفق alert گذاشت، از QA داده‌ی تست شبیه production گرفت و تاریخ launch را برای مالی ایمیل کرد. روز launch خروجی یک مشتری fail شد. alert بالا آمد، پشتیبانی راهنما را داشت و مالی از قبل می‌دانست چرا. رفعش بیست دقیقه طول کشید و launch آرام ماند."),
      links: [
        { route: "how/lenses", label: L("End-to-end in the lenses", "end-to-end در بُعدها") },
        { route: "levels/L4", label: L("What L4 looks like", "L4 چه شکلی است") }
      ]
    },

    {
      id: "complexity",
      group: "basics",
      levels: ["L4", "L5", "L6"],
      q: L("The ladder says the complexity of the problem counts, not of the solution. What does that mean in practice?",
           "چرا معیار نردبان پیچیدگی مساله است، نه پیچیدگی راه‌حل؟ در عمل یعنی چه؟"),
      short: L("How hard the problem was counts; how elaborate your answer was doesn't. A simple answer to a hard problem is the senior move, and an elaborate answer to an ordinary problem is a warning sign.",
               "دشواری مساله مهم است، نه ظاهر پیچیده‌ی راه‌حل. حل مساله‌ی دشوار با راه‌حل ساده، نشانه‌ی قضاوت ارشد است. پیچیده کردن مساله‌ی معمولی علامت هشدار است."),
      body: L("Complexity of the **problem** is how much was unclear, entangled or high-stakes before you started: unknown requirements, several systems and teams, competing constraints, little time. Complexity of the **solution** is how much machinery you built. They're independent, and the best case is ==a hard problem with a boring answer==.\n\nCustomers get double-charged after retries across three services: the simple answer is an idempotency key and one contract change, the elaborate one a new transaction layer. Warning signs run the other way: a plugin framework for a feature two teams will use, or a new queue and service for a nightly job a scheduler could run. Monzo's framework asks for complexity that fits the problem.\n\nThe trap is that a simple solution looks easy afterwards. Present it problem-first: what was unclear, which constraints bound you, which two options you rejected and why. The impressive options you turned down are your proof that the simple one was a decision.",
              "پیچیدگیِ **مساله** یعنی پیش از شروع چقدر چیزها نامعلوم، درهم‌تنیده یا پرریسک بودند: نیازمندی‌های ناروشن، چند سیستم و چند تیم، محدودیت‌های متعارض، وقت کم. پیچیدگیِ **راه‌حل** یعنی چه میزان اجزا و سازوکار فنی ساخته‌اید. این دو مستقل‌اند و بهترین حالت ==حل مساله‌ی سخت با راه‌حل ساده== است.\n\nمشتری‌ها بعد از retry در سه سرویس دوبار شارژ می‌شوند: جواب ساده یک idempotency key و یک تغییر در قرارداد است و جواب پرزرق‌وبرق یک لایه‌ی تراکنش جدید. در مقابل، این‌ها نشانه‌های هشدارند: یک plugin framework برای قابلیتی که دو تیم استفاده می‌کنند، یا یک صف و سرویس جدید برای کار شبانه‌ای که یک scheduler هم اجرا می‌کند. چارچوب Monzo پیچیدگی‌ای می‌خواهد که با مساله جور باشد.\n\nتله این است که راه‌حل ساده بعدا آسان به نظر می‌رسد. توضیح کارتان را از مساله شروع کنید: چه چیزی ناروشن بود، چه محدودیت‌هایی داشتید، کدام دو گزینه را کنار گذاشتید و چرا. گزینه‌های چشم‌گیری که رد کردید نشان می‌دهند انتخاب راه‌حل ساده، تصمیمی آگاهانه بوده است."),
      steps: [
        L("Start your next design doc with a Problem section: what's unclear, who's affected, which constraints bind. Put the solution after it.",
          "design doc را با مساله شروع کنید: موارد نامشخص، افراد تحت تاثیر و محدودیت‌ها. سپس راه‌حل را توضیح دهید."),
        L("Write down the two options you rejected, including the impressive one, and why you rejected them.",
          "دو گزینه‌ای را که رد کردید بنویسید، از جمله گزینه‌ی چشم‌گیر و دلیل ردشان."),
        L("Before building, state the smallest change that would solve the stated problem, and what it can't do.",
          "پیش از ساختن، کوچک‌ترین تغییری را که مساله‌ی گفته‌شده را حل می‌کند بنویسید و این‌که چه کاری از آن برنمی‌آید."),
        L("In your evidence, describe the problem's difficulty in one sentence before you describe the solution.",
          "در شواهدتان سختیِ مساله را در یک جمله بگویید، پیش از توصیف راه‌حل.")
      ],
      story: L("Reza inherited a flaky nightly sync between two systems. The team wanted a streaming rewrite: six weeks and new infrastructure. Reza spent two days mapping the failures and found that most came from one timeout and two kinds of malformed records. He added a retry with backoff, a validation step and an alert. The work took five days and failures dropped to near zero. In his write-up he led with the problem, “two systems, three owners, no source of truth”, then the rewrite he had rejected and why. It looked like a small pull request; the doc showed it wasn't a small problem.",
               "رضا یک sync شبانه‌ی ناپایدار بین دو سیستم را به ارث برد. تیم بازنویسی streaming می‌خواست: شش هفته و زیرساخت تازه. رضا دو روز الگوی خطاها را بررسی کرد و دید بیشترشان از یک timeout و دو نوع رکورد خراب می‌آیند. یک retry با backoff، یک مرحله‌ی validation و یک alert اضافه کرد. کار پنج روز طول کشید و خطاها به نزدیک صفر رسید. در یادداشتش با مساله شروع کرد، «دو سیستم، سه صاحب، هیچ منبع مرجعی» و بعد بازنویسی‌ای را که کنار گذاشته بود و دلیلش. شبیه یک pull request کوچک بود. سند نشان داد مساله‌ی کوچکی نبوده."),
      links: [
        { route: "how/lenses", label: L("Challenge: problem vs solution", "چالش: مساله در برابر راه‌حل") },
        { route: "toolkit/designdoc", label: L("Design doc toolkit", "جعبه‌ابزار design doc") }
      ]
    },

    {
      id: "not-signals",
      group: "basics",
      levels: ["L4", "L5", "L6"],
      q: L("My manager says everyone knows me and I run a big critical system. Why doesn't that count toward promotion?",
           "مدیرم می‌گوید همه مرا می‌شناسند و یک سیستم بزرگ و حیاتی دست من است. چرا این برای ارتقا حساب نمی‌شود؟"),
      short: L("Being well known, sitting in senior meetings or holding a big system tells people where you stand, not what you changed. Level evidence is the problems you solved, how hard they were, and what's different afterwards.",
               "شناخته شدن، حضور در جلسات ارشد و مسئولیت سیستم بزرگ، جایگاه را نشان می‌دهند. برای اثبات سطح، باید مساله‌ی حل‌شده، دشواری آن و نتیجه را نشان دهید."),
      body: L("These feel like signals because they often go along with seniority. But they can also come from tenure, from being first on a team, or from inheriting a system nobody else wanted. **Being well known** is a result of something, not the something. **A seat in senior meetings** is access, not an outcome. **A big or critical system** describes the size of what you hold; keeping it healthy is valuable, but the question is what you changed.\n\nWhat counts is the **problem** you solved (how unclear and entangled it was), the **challenge** (what made it hard, which options you weighed) and the **outcome** (what's different now, with a number or a name). Try rewriting:\n\n- “Everyone knows me” becomes “Two teams changed their roadmaps after my design doc, and their leads will say so.”\n- “I run the billing system” becomes “I cut billing incidents from six a quarter to one and wrote the runbook two other engineers now use.”\n- “I'm in the architecture meeting” becomes “I proposed the retry policy there, and three services adopted it.”\n\n(The numbers are illustrative.) Then ask your manager which of these a committee could quote about you today.",
              "این‌ها سیگنال به نظر می‌رسند چون اغلب همراه ارشدی هستند. ولی می‌توانند از سابقه هم بیایند، از اولین نفر تیم بودن، یا از ارث رسیدن سیستمی که کس دیگری نمی‌خواست. **معروف بودن** نتیجه‌ی یک چیز است، نه خود آن چیز. **حضور در جلسه‌های ارشد** دسترسی است، نه نتیجه. **سیستم بزرگ یا حیاتی** اندازه‌ی چیزی را نشان می‌دهد که در دست دارید. سالم نگه‌داشتنش ارزشمند است، ولی سوال این است که چه چیزی را در آن عوض کردید.\n\nآنچه حساب می‌شود **مساله‌ای** است که حل کردید (چقدر ناروشن و درهم‌تنیده بود)، **چالش** (چه چیزی سختش می‌کرد و کدام گزینه‌ها را سنجیدید) و **نتیجه** (حالا چه چیزی فرق کرده، با عدد یا تایید فردی که نتیجه را دیده است). بازنویسی کنید:\n\n- «همه مرا می‌شناسند» می‌شود «دو تیم بعد از design doc من نقشه‌ی راهشان را عوض کردند و رهبرهایشان تایید می‌کنند.»\n- «سیستم billing دست من است» می‌شود «incidentهای billing را از شش در فصل به یکی رساندم و runbookای نوشتم که حالا دو مهندس دیگر استفاده می‌کنند.»\n- «در جلسه‌ی معماری هستم» می‌شود «سیاست retry را آنجا پیشنهاد دادم و سه سرویس پذیرفتند.»\n\n(عددها فرضی‌اند.) بعد از مدیرتان بپرسید کمیته همین حالا کدام یک از این‌ها را درباره‌ی شما می‌تواند نقل کند."),
      steps: [
        L("Take one “everyone knows me” claim and rewrite it: which decision changed, whose work moved, and what number or sentence proves it?",
          "ادعای «همه مرا می‌شناسند» را به شواهد تبدیل کنید: کدام تصمیم یا شیوه‌ی کار تغییر کرد و چه عدد یا تاییدی دارید؟"),
        L("For the system you run, list last year's changes: incidents avoided, cost cut, work unblocked. Size is context; changes are evidence.",
          "تغییرات سال گذشته‌ی سیستم را ثبت کنید: پیشگیری از incident، کاهش هزینه و برطرف شدن موانع کار. اندازه‌ی سیستم context است، اما تغییر ایجادشده شواهد عملکرد است."),
        L("Ask your manager: “If the committee read my case cold, which sentence would show next-level work?” Draft it together.",
          "از مدیرتان بپرسید: «اگر کمیته پرونده‌ی مرا بدون آشنایی قبلی با کارم بخواند، کدام جمله کار سطح بعد را نشان می‌دهد؟» با هم پیش‌نویسش کنید."),
        L("Ask two people outside your team for one line about what your work changed for them.",
          "از دو نفر بیرون از تیم یک خط بخواهید درباره‌ی این‌که کار شما برای آن‌ها چه چیزی عوض کرد.")
      ],
      story: L("Arash's manager wrote: “Everyone knows Arash. He runs the order pipeline, which every team depends on.” The committee's reply came back in one line: what did he change? Arash pulled the incident history. The pipeline had 14 incidents the year before and 5 this year, after he moved retries into a queue and built a replay tool. He added one sentence from a partner team's lead about the replay tool. Same system, same year. The first version described his position; the second described his work.",
               "مدیرِ آرش نوشته بود: «همه آرش را می‌شناسند. او pipeline سفارش‌ها را اداره می‌کند که همه‌ی تیم‌ها به آن وابسته‌اند.» پاسخ کمیته در یک خط برگشت: او چه چیزی را عوض کرده؟ آرش تاریخچه‌ی incidentها را درآورد. pipeline سال قبل 14 incident داشت و امسال 5، بعد از این‌که او retryها را به یک صف برد و ابزار replay ساخت. یک جمله هم از رهبر یک تیم همکار درباره‌ی ابزار replay اضافه کرد. همان سیستم، همان سال. نسخه‌ی اول جایگاه او را توصیف می‌کرد. نسخه‌ی دوم کارش را."),
      links: [
        { route: "how/signals", label: L("What is not level evidence", "چه چیزهایی مدرک سطح نیستند") },
        { route: "toolkit/evidence", label: L("Evidence log", "سند دستاوردها") }
      ]
    },

    /* ===================== growth ===================== */

    {
      id: "how-long",
      group: "growth",
      levels: ["L2", "L3", "L4"],
      q: L("How long should each level take? Am I too slow?",
           "هر سطح باید چقدر طول بکشد؟ آیا من کندم؟"),
      short: L("On this ladder, L2 to L3 takes about a year and L3 to L4 one to two years. Beyond L4 there's no clock, because growth comes through scope. Compare yourself with the evidence for the next level, not with the calendar.",
               "در این نردبان، رفتن از L2 به L3 حدود یک سال و از L3 به L4 یک تا دو سال طول می‌کشد. بعد از L4 زمان‌بندی مشخصی در کار نیست، چون رشد با scope می‌آید. خودتان را با شواهد سطح بعد بسنجید، نه با تقویم."),
      body: L("This ladder's guidance: aim to operate at {L3} within about six months of starting at {L2}, and be {L3} within a year at most. From {L3} you typically reach {L4} within one to two years. {L4} is where everyone is expected to get. After that there's no clock: growth is earned through scope, not tenure, and many strong engineers build a long, valuable career at {L5}.\n\nOther ladders agree on the shape. Monzo states durations for its early levels (roughly 1, 1.5 and 2 years) and Etsy sets minimums at some levels, while Dropbox and Honeycomb deliberately avoid formulas. None of the big employers we looked at publishes an official clock. Crowd-sourced, unverified figures exist, such as about 24 months from Meta's E3 to E4 and about 33 from E4 to E5; treat them as rough shapes.\n\nPlateaus are normal. Moving from project to area, or area to strategy, needs a different kind of work, and Pragmatic Engineer notes that Staff often takes more than one promotion cycle. So “am I too slow?” is the wrong test. Ask: did the scope of my work change in kind this year, and can I show it?",
              "توصیه‌ی این نردبان این است: هدف بگذارید ظرف حدود شش ماه از شروع در {L2} در سطح {L3} عمل کنید و حداکثر ظرف یک سال {L3} باشید. از {L3} معمولا ظرف یک تا دو سال به {L4} می‌رسید. {L4} جایی است که از همه انتظار می‌رود برسند. بعد از آن زمان‌بندی مشخصی نیست: رشد با scope به دست می‌آید، نه با گذشت زمان و بسیاری از مهندسان قوی مسیر طولانی و ارزشمندی را در {L5} می‌سازند.\n\nنردبان‌های دیگر هم در کلیات همین الگو را دارند. Monzo برای سطح‌های ابتدایی‌اش مدت ذکر کرده (تقریبا 1، 1.5 و 2 سال) و Etsy در بعضی سطح‌ها حداقل مدت می‌گذارد، ولی Dropbox و Honeycomb عمدا فرمول نمی‌دهند. از شرکت‌های بزرگی که بررسی کردیم هیچ‌کدام زمان‌بندی رسمی منتشر نکرده است. عددهایی هم هست که کاربران سایت‌های جمعی گزارش کرده‌اند و تایید نشده‌اند، مثل حدود 24 ماه از E3 به E4 در Meta و حدود 33 ماه از E4 به E5. آن‌ها را صرفا تصویری تقریبی بدانید.\n\nدرجا زدن طبیعی است. قدم از پروژه به حوزه، یا از حوزه به استراتژی، به نوع دیگری از کار نیاز دارد و Pragmatic Engineer می‌گوید رسیدن به staff اغلب بیش از یک دوره‌ی ارتقا طول می‌کشد. پس «آیا کندم؟» سوال درستی نیست. بپرسید: آیا امسال scope کارم از نظر نوع عوض شد و می‌توانم نشانش بدهم؟"),
      steps: [
        L("If you've been at your level longer than the guidance, ask what evidence is missing, not where the time went.",
          "اگر بیشتر از توصیه‌ی نردبان در سطح فعلی مانده‌اید، بپرسید چه شواهدی کم است، نه این‌که زمان کجا رفت."),
        L("Mark which of the next level's points you already have examples for. The gap, not the date, shows your pace.",
          "موارد سطح بعد را که برایشان مثال دارید علامت بزنید. فاصله‌ی عملکردتان با انتظارات، از مدت ماندن در سطح گویاتر است."),
        L("Ask your manager for a realistic timeline for your situation, and what would speed it up or slow it down.",
          "از مدیرتان یک زمان‌بندی واقع‌بینانه برای وضعیت خودتان بخواهید و این‌که چه چیزی آن را سریع‌تر یا کندتر می‌کند."),
        L("If you're content at {L4} or {L5}, say so in a 1:1 so your manager plans around what you actually want.",
          "اگر در {L4} یا {L5} راضی هستید، در 1:1 بگویید تا مدیرتان بر اساس چیزی که واقعا می‌خواهید برنامه بریزد.")
      ],
      story: null,
      links: [
        { route: "how/pace", label: L("Time in level and plateaus", "زمان در هر سطح و درجا زدن") },
        { route: "grow/stall", label: L("Why people stall", "چرا آدم‌ها درجا می‌زنند") }
      ]
    },

    {
      id: "ready",
      group: "growth",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("How do I know I'm ready for promotion?",
           "از کجا بفهمم برای ارتقا آماده‌ام؟"),
      short: L("You're ready when you've already been doing the next level's work, not when you're about to. A stranger reading your evidence should be able to reach that conclusion, and it should hold across more than one project.",
               "وقتی آماده‌اید که از قبل در سطح بعد کار کرده باشید و شواهد چند پروژه این را نشان دهند. فردی که شما را نمی‌شناسد هم باید بتواند از شواهد به همین نتیجه برسد."),
      body: L("Promotion recognises performance you've already shown at the next level. It doesn't hand you the level, and it isn't a bet on potential. Dropbox's framework looks for people already operating at the next level, on evidence rather than faith. Etsy words it as sustained demonstration: for its Senior II level, for example, meeting and often exceeding expectations across many projects. Will Larson says the same of promotion packets: they record work you've already done.\n\nTwo tests help. The **stranger test**: could someone from another team, who doesn't know you, read the description and your evidence and reach the verdict without your help? If it only works with you in the room, it isn't ready. **Pattern, not spike**: one great launch is a spike; next-level behaviour across several projects or review cycles is a pattern. Zalando's engineering blog describes engineers and managers rating themselves red, amber or green against current and next grade, a habit worth copying.\n\nHow long “sustained” lasts varies by company, and there's no universal number. One crowd-sourced, unverified source reportedly puts Microsoft at two or more review cycles, and one to two years of next-level responsibilities at its senior levels. Ask your manager what it means where you work.",
              "ارتقا عملکردی را به رسمیت می‌شناسد که در سطح بعد از قبل نشان داده‌اید. ارتقا مجوز شروع کار در سطح بعد نیست و صرفا بر اساس پتانسیل فرد هم انجام نمی‌شود. چارچوب Dropbox دنبال کسانی است که از قبل در سطح بعد عمل می‌کنند، بر پایه‌ی شواهد، نه اعتماد. Etsy آن را «نشان دادنِ مستمر» می‌گوید: مثلا برای سطح Senior II، برآورده کردن و اغلب فراتر رفتن از انتظارات در پروژه‌های زیاد. Will Larson درباره‌ی promotion packet همین را می‌گوید: کاری را ثبت می‌کند که قبلا انجام داده‌اید.\n\nدو محک کمک می‌کند. **محک غریبه**: آیا کسی از تیم دیگر که شما را نمی‌شناسد می‌تواند توصیف سطح و شواهدتان را بخواند و بدون کمک شما به حکم برسد؟ اگر فقط وقتی خودتان در اتاق هستید جواب می‌دهد، آماده نیست. **الگو، نه جهش**: یک launch عالی یک جهش است. رفتار سطح بعد در چند پروژه یا چند دوره‌ی ارزیابی یک الگوست. بلاگ مهندسی Zalando از مهندس‌ها و مدیرهایی می‌گوید که عملکردشان را بر اساس انتظارات سطح فعلی و بعدی، با رنگ قرمز، زرد یا سبز ارزیابی می‌کنند. عادتی که ارزش تقلید دارد.\n\n«مستمر» باید چقدر باشد از شرکتی به شرکت دیگر فرق می‌کند و عدد جهانی‌ای وجود ندارد. طبق یک منبع جمعی و تاییدنشده، در Microsoft دست‌کم دو دوره‌ی ارزیابی شرط است و در سطح‌های ارشد یک تا دو سال بر عهده داشتن مسئولیت‌های سطح بعد. از مدیرتان بپرسید در شرکت شما معنایش چیست."),
      steps: [
        L("Get the next level's description in writing and mark each point red, amber or green against your last 12 months.",
          "توصیف سطح بعد را مکتوب بگیرید و هر مورد را در برابر 12 ماه گذشته‌تان قرمز، زرد یا سبز علامت بزنید."),
        L("Give your evidence to someone outside your team and ask which level it reads as, before you say anything.",
          "شواهدتان را به کسی بیرون از تیم بدهید و پیش از هر حرفی بپرسید به نظرش به کدام سطح می‌خورد."),
        L("Count the separate projects or cycles that show next-level behaviour. If it's one, plan the second before you ask.",
          "پروژه‌ها یا دوره‌های جداگانه‌ای را که رفتار سطح بعد نشان می‌دهند بشمارید. اگر یکی است، پیش از درخواست دومی را برنامه‌ریزی کنید."),
        L("Ask your manager: “What does sustained mean here, in months or cycles, and who needs to have seen it?”",
          "از مدیرتان بپرسید: «مستمر اینجا یعنی چه، چند ماه یا چند دوره و چه کسانی باید دیده باشند؟»")
      ],
      story: L("After the payments launch, Dara told her manager she was ready for {L5}. Her manager asked her to send the draft case, with no explanation, to a staff engineer on another team. The reply: “This reads as a strong {L4} case. The launch is excellent, but it's one project, and I can't see anyone's work changing because of your decisions.” Dara was annoyed for a day. Then she took on a second project, scoped the problem herself and delegated two pieces. At the next cycle a different reader, also without context, reached the other conclusion.",
               "بعد از launch پرداخت، دارا به مدیرش گفت برای {L5} آماده است. مدیرش خواست پیش‌نویس پرونده را بدون هیچ توضیحی برای یک staff engineer در تیم دیگر بفرستد. جوابش: «این یک پرونده‌ی قوی {L4} است. launch عالی بوده، ولی یک پروژه است و نمی‌بینم کار کسی به‌خاطر تصمیم‌های تو عوض شده باشد.» دارا یک روز دلخور بود. بعد پروژه‌ی دومی برداشت، مساله را خودش scope کرد و دو بخش را به همکاران سپرد. دوره‌ی بعد، خواننده‌ای دیگر که او هم هیچ زمینه‌ای نداشت به نتیجه‌ی دیگری رسید."),
      links: [
        { route: "grow/model", label: L("Promotion recognises, doesn't grant", "ارتقا، عملکرد قبلی را به رسمیت می‌شناسد") },
        { route: "how/promotion", label: L("How promotions are decided", "ارتقا چطور تصمیم‌گیری می‌شود") },
        { route: "toolkit/packet", label: L("Promotion packet outline", "طرح کلی promotion packet") }
      ]
    },

    {
      id: "almost-there",
      group: "growth",
      levels: ["L3", "L4", "L5"],
      q: L("My manager has said I'm “almost there” for over a year. What now?",
           "بیش از یک سال است مدیرم می‌گوید «تقریبا رسیده‌ای». حالا چه کنم؟"),
      short: L("“Almost there” without specifics is a feeling, not a plan. Turn it into one lens, one example and one date, check who is actually advocating for you, and decide in advance when you'd look elsewhere.",
               "بازخورد «تقریبا رسیده‌ای» بدون جزئیات برنامه نیست. بُعد مورد نیاز، مثال و تاریخ بازبینی را روشن کنید، حامیان واقعی را بشناسید و زمانی برای بررسی گزینه‌های دیگر تعیین کنید."),
      body: L("A year of “almost there” usually means one of three things: there's a real gap nobody has named; your manager isn't sure how to make the case, or isn't making it in the room; or the company has a constraint (budget, headcount, calibration limits) your manager would rather not say aloud. The phrase doesn't tell you which. Specifics do.\n\nAsk for three things and write them down: which **lens** is the gap, which **example** would close it, and **by when** you'll look again. Then check advocacy. At several large employers the manager reportedly nominates you or presents your case to a committee you never see, so how well they argue it matters. Does anyone besides your manager know your work well enough to speak for you, such as a sponsor or a senior peer who reviews your designs?\n\nIf a quarter or two passes with no named gap and no date, or you hear the blocker is the company's rather than yours, treat that as information. A new interview loop looks at your evidence fresh, though you could be levelled differently, so read the target ladder first. Waiting without a date isn't a plan.",
              "یک سال «تقریبا رسیده‌ای» معمولا یکی از سه معنا را دارد: شکافی واقعی هست که کسی اسمش را نیاورده. مدیر مطمئن نیست پرونده را چطور بسازد، یا در جلسه‌ی تصمیم‌گیری از آن دفاع نمی‌کند. یا شرکت محدودیتی دارد (بودجه، headcount، سقف کالیبراسیون) که مدیر ترجیح می‌دهد بلند نگوید. خودِ عبارت نمی‌گوید کدام. جزئیات می‌گویند.\n\nسه چیز بخواهید و بنویسید: در کدام **بُعد** کاستی دارید، کدام **مثال** رفع آن را نشان می‌دهد و **تا کِی** دوباره بررسی می‌کنید. بعد حمایت را بررسی کنید. گفته می‌شود در چند شرکت بزرگ مدیر شما را نامزد می‌کند یا پرونده را به کمیته‌ای می‌برد که هیچ‌وقت نمی‌بینیدش. پس خوب دفاع کردنش مهم است. آیا غیر از مدیرتان کسی کار شما را آن‌قدر می‌شناسد که برایتان حرف بزند، مثلا یک حامی (sponsor) یا یک همکار ارشد که designهایتان را review می‌کند؟\n\nاگر یکی دو فصل بگذرد و نه بُعدی مشخص شود نه تاریخی، یا بشنوید مانع به شرایط شرکت مربوط است، نه عملکرد شما، این را اطلاعات حساب کنید. یک دور مصاحبه‌ی تازه شواهد شما را از نو می‌بیند، هرچند ممکن است سطح دیگری بگیرید. پس اول نردبان شرکت هدف را بخوانید. انتظار بی‌تاریخ، برنامه نیست."),
      steps: [
        L("Say this in your next 1:1: “Let's turn ‘almost there’ into a plan. Which lens is the gap, what example settles it, and by when?”",
          "در 1:1 بعدی بگویید: «بیایید «تقریبا رسیده‌ای» را به برنامه تبدیل کنیم. در کدام بُعد کاستی دارم، چه مثالی رفع آن را نشان می‌دهد و تا کِی باید آماده شود؟»"),
        L("Ask: “Who besides you can speak for my case, and what would change your answer?” Meet one of those people this month.",
          "بپرسید: «غیر از شما چه کسی می‌تواند از پرونده‌ام دفاع کند و چه شواهدی نظر شما را تغییر می‌دهد؟» این ماه با یکی از آن‌ها ارتباط بگیرید."),
        L("Send a short follow-up email with what you agreed: the lens, the example, the date. Revisit it in every 1:1.",
          "با یک ایمیل کوتاه آنچه توافق کردید بنویسید: بُعد، مثال، تاریخ. در هر 1:1 مرورش کنید."),
        L("Set your own decision date, such as one review cycle from now, for when you'll start exploring other options if nothing has changed.",
          "برای خودتان تاریخ تصمیم بگذارید، مثلا یک دوره‌ی ارزیابی بعد، که اگر چیزی عوض نشد، گزینه‌های دیگر را بررسی کنید.")
      ],
      story: L("Sara had been “almost there” for {L5} for fourteen months. She asked the three questions: which lens, which example, by when. Her manager's answer surprised her. Her work was fine; the other reviewers had never seen it. The plan became two things: present her latest design at the staff engineers' review, and get a one-page note from the partner team that used her service. Three months later her case went to calibration with both attached, and this time it went through.",
               "سارا چهارده ماه بود برای {L5} «تقریبا رسیده» بود. سه سوال را پرسید: کدام بُعد، کدام مثال، تا کِی. جواب مدیرش او را متعجب کرد. کار او خوب بود. بقیه‌ی بررسی‌کننده‌ها هیچ‌وقت آن را ندیده بودند. برنامه دو چیز شد: ارائه‌ی آخرین طراحی‌اش در review جمع staffها و یک یادداشت یک‌صفحه‌ای از تیم همکاری که از سرویس او استفاده می‌کرد. سه ماه بعد پرونده با هر دو ضمیمه به calibration رفت و این بار تایید شد."),
      links: [
        { route: "toolkit/oneonone", label: L("The growth 1:1", "گفتگوی رشد در 1:1") },
        { route: "grow/plan", label: L("Make a plan", "برنامه بسازید") },
        { route: "hire/pipeline", label: L("How the hiring pipeline sets level", "فرایند استخدام و تعیین سطح") }
      ]
    },

    {
      id: "denied-promotion",
      group: "growth",                       // basics | growth | paths | hiring | culture | ai
      levels: ["L3", "L4", "L5"],            // levels it is most relevant to
      q: L("I was denied a promotion. What should I do in the next 30 days?",
           "ارتقایم رد شد. در ۳۰ روز آینده چه کار کنم؟"),
      short: L("Don't argue the verdict. Get the reasons in specifics, turn them into evidence you can still produce, and agree on a date to look again.",
               "ابتدا دلایل را دقیق بفهمید. آن‌ها را به شواهد مورد نیاز و اقدام‌های قابل‌انجام تبدیل کنید و موعد بررسی دوباره بگذارید."),
      body: L("A “not yet” is information, not a verdict on you. Most denials fall into three buckets: the **scope** wasn't at the next level yet, the **evidence** didn't show it (it happened, but nobody could quote it), or the **timing** was off (a reorg, a missed cycle, one champion short).\n\nIn week one, ask your manager for the committee's reasons in specific terms: which lens, which examples fell short, and what would have convinced them. In weeks two to four, turn that into a plan: one or two pieces of work that would visibly close the gap, a review date, and a named person who will give you feedback along the way.\n\nWhat not to do: relitigate the decision in public, take on more of the same kind of work, or start interviewing in the first week out of hurt. Interviewing is a fine option later, but decide it on the facts.",
              "«هنوز نه» اطلاعات است، نه حکم درباره‌ی شما. بیشتر ردشدن‌ها در سه دسته می‌گنجند: **scope** هنوز در سطح بعد نبود، **شواهد** آن را نشان نمی‌داد (کار انجام شده بود ولی کسی نمی‌توانست با شواهد توضیحش دهد)، یا **زمان‌بندی** نامناسب بود (یک تغییر ساختار سازمانی، یک دوره‌ی از دست‌رفته، نبود حمایت کافی).\n\nهفته‌ی اول از مدیرتان دلیل‌های کمیته را دقیق بپرسید: کدام بُعد، کدام مثال‌ها کم آوردند و چه شواهدی آن‌ها را قانع می‌کرد. هفته‌ی دوم تا چهارم این را به یک برنامه تبدیل کنید: یک یا دو کار که شکاف را آشکارا می‌بندد، یک تاریخ بازبینی و یک نفر مشخص که در مسیر به شما بازخورد بدهد.\n\nچه کارهایی نکنید: تصمیم را در جمع دوباره به بحث بگذارید، کار بیشتری از همان جنس بردارید، یا در هفته‌ی اول، از سر دلخوری، شروع به مصاحبه کنید. مصاحبه دادن بعدا گزینه‌ی خوبی است، ولی برای آن بر اساس واقعیت‌ها تصمیم بگیرید."),
      steps: [                                // 3–5 concrete "try this" actions, each ≤ 25 words
        L("Ask for the reasons by lens: which examples fell short, and what would have convinced them?", "دلیل‌ها را به‌تفکیک بُعد بپرسید: کدام مثال‌ها کافی نبودند و چه شواهدی قانع‌کننده بود؟"),
        L("Agree on one or two pieces of work that close the gap, with a review date in 3–6 months.", "روی یک یا دو کار که شکاف را می‌بندد و یک تاریخ بازبینی در ۳ تا ۶ ماه آینده توافق کنید."),
        L("Name one sponsor or senior peer who will give you feedback monthly.", "یک حامی یا همکار ارشد را مشخص کنید که ماهی یک بار بازخورد بدهد.")
      ],
      story: L("Arman's packet for L5 came back with one line: “impact not demonstrated.” He asked for specifics. The panel had liked his design work but couldn't find one outcome tied to it. He had shipped the new pricing engine; its revenue effect lived on a finance dashboard nobody had linked. He spent a week pulling the numbers, wrote one page on the result and asked two partner teams for a sentence each. Six months later the same work, now with evidence, went through.",
               "پرونده‌ی آرمان برای L5 با یک خط برگشت: «اثرگذاری نشان داده نشده». او جزئیات خواست. کمیته از کار طراحی‌اش خوشش آمده بود ولی نتیجه‌ای را به آن ربط نداده بود. او موتور قیمت‌گذاری جدید را منتشر کرده بود. اثر درآمدی‌اش روی داشبوردی مالی بود که کسی به آن لینک نکرده بود. یک هفته عددها را درآورد، یک صفحه درباره‌ی نتیجه نوشت و از دو تیم همکار یک جمله خواست. شش ماه بعد همان کار، این بار با مدرک، تایید شد."),
      links: [
        { route: "grow/stall", label: L("Why people stall", "چرا آدم‌ها درجا می‌زنند") },
        { route: "toolkit/evidence", label: L("Evidence log", "سند دستاوردها") }
      ]
    },

    {
      id: "bigger-scope",
      group: "growth",
      levels: ["L3", "L4", "L5"],
      q: L("How do I get bigger scope when my team has no big projects?",
           "وقتی تیم من پروژه‌ی بزرگی ندارد، چطور scope بزرگ‌تری بگیرم؟"),
      short: L("Scope is mostly found, not assigned. Look for unowned problems, recurring incidents and the seams between teams, propose a plan instead of waiting, and treat every project choice as a career choice.",
               "scope بزرگ‌تر را معمولا باید شناسایی و پیشنهاد کنید. به‌دنبال مساله‌های بدون مسئول، incidentهای تکراری و مشکلات همکاری بین تیم‌ها باشید. انتخاب پروژه، بخشی از انتخاب مسیر شغلی است."),
      body: L("Big scope rarely arrives as a gift. It tends to hide in three places: **unowned problems** (the flaky pipeline everyone works around), **recurring incidents** (the same page every few weeks) and **seams between teams** (the handoff each side assumes the other owns). Each already costs someone time, which is why a clear proposal gets attention.\n\nPropose rather than wait. One page: the problem, who it hurts, a rough cost, two options and your pick. Take it to your manager first, because bigger scope needs their cover and a place in the team's goals. Choice of work is choice of career: Monzo expects what you pick to drive team goals, and Tanya Reilly's writing on glue work warns that unblocking and cleanup can pile up without counting toward promotion.\n\nTwo cautions. Scope you can't finish costs trust, so own it to the end: Will Larson's advice for migrations is to derisk the hard cases, automate the easy 90 percent and handle the stragglers yourself. And bigger isn't always better: Honeycomb's ladder doesn't reward scope alone and credits clever ways of limiting it. Sean Goedecke adds that shipping is political as well as technical, so keep your sponsor informed and deploy early.",
              "scope بزرگ‌تر به‌ندرت خودبه‌خود به شما سپرده می‌شود. معمولا در سه جا پنهان است: **مساله‌های بی‌صاحب** (pipeline ناپایداری که همه دورش می‌زنند)، **incidentهای تکراری** (همان page هر چند هفته) و **مشکلات همکاری در مرز تیم‌ها** (handoffی که هر طرف فکر می‌کند مال طرف دیگر است). هرکدام همین حالا وقت افرادی را می‌گیرند. برای همین یک پیشنهاد روشن توجه دیگران را جلب می‌کند.\n\nپیشنهاد بدهید، منتظر نمانید. یک صفحه: مساله، چه کسی آسیب می‌بیند، هزینه‌ی تقریبی، دو گزینه و انتخاب شما. اول پیش مدیرتان ببرید، چون scope بزرگ‌تر به پشتیبانی او و جایی در هدف‌های تیم نیاز دارد. انتخاب کار، انتخاب مسیر شغلی است: Monzo انتظار دارد آنچه انتخاب می‌کنید هدف‌های تیم را جلو ببرد و Tanya Reilly درباره‌ی glue work هشدار می‌دهد که باز کردن گره‌ها و جمع‌وجور کردن‌ها می‌تواند انباشته شود بدون این‌که برای ارتقا حساب شود.\n\nدو احتیاط. scope‌ای که نتوانید تمامش کنید به اعتماد ضرر می‌زند، پس تا آخر own کنید: توصیه‌ی Will Larson برای migrationها این است که موردهای سخت را کم‌خطر کنید، نود درصد موارد ساده را خودکار کنید و باقی‌مانده‌ها را شخصا به پایان برسانید. و بزرگ‌تر همیشه بهتر نیست: نردبان Honeycomb صرفا scope بزرگ‌تر را پاداش نمی‌دهد و راه‌های هوشمندانه‌ی محدود کردن آن را حساب می‌کند. Sean Goedecke اضافه می‌کند که تحویل یک پروژه سیاسی هم هست، نه فقط فنی. پس حامی‌تان را در جریان بگذارید و زود deploy کنید."),
      steps: [
        L("List three recurring annoyances on your team: pages, workarounds, manual steps. Measure the costliest one for a week.",
          "سه مشکل تکراری تیم را فهرست کنید، مثل pageها، راه‌حل‌های موقت و کارهای دستی. هزینه‌ی بزرگ‌ترین مورد را یک هفته اندازه بگیرید."),
        L("Write a one-page proposal: problem, who it hurts, cost, two options, your pick. Send it to your manager first.",
          "یک پیشنهاد یک‌صفحه‌ای بنویسید: مساله، چه کسی آسیب می‌بیند، هزینه، دو گزینه و انتخابتان. اول برای مدیرتان بفرستید."),
        L("Ask which team goal it serves and who else must agree. Get both named in your next 1:1.",
          "بپرسید به کدام هدف تیم خدمت می‌کند و چه کسی دیگر باید موافق باشد. هر دو را در 1:1 بعدی مشخص کنید."),
        L("Pick one seam between your team and another and offer to own its handoff, with a named counterpart.",
          "یکی از مشکلات همکاری بین تیم خود و تیم دیگر را انتخاب کنید و پیشنهاد دهید handoff را با همکاری فرد مشخصی در طرف مقابل own کنید.")
      ],
      story: L("Mina noticed that the failed-payout alert paged someone every other week, and that three engineers each kept a private fix script. She spent two days counting: 11 pages in a quarter, about 30 engineer-hours. Her one-page proposal offered two options, and her manager moved it into the team's goals. Mina scoped one quarter: a retry service, a shared runbook and alert routing to the owning team. The pages stopped by month two. Nobody had assigned her a big project. She found a recurring cost and asked to own it.",
               "مینا دید alert مربوط به payout ناموفق هر دو هفته یک بار یک نفر را page می‌کند و سه مهندس هر کدام یک اسکریپت رفع شخصی دارند. دو روز شمرد: 11 page در یک فصل، حدود 30 ساعت کار مهندسی. پیشنهاد یک‌صفحه‌ای او دو گزینه داشت و مدیرش آن را وارد هدف‌های تیم کرد. مینا scope کار یک فصل را مشخص کرد: یک سرویس retry، یک runbook مشترک و مسیردهی alert به تیم صاحب. تا ماه دوم pageها متوقف شد. کسی پروژه‌ی بزرگی به او نداده بود. او یک هزینه‌ی تکراری پیدا کرد و خواست own‌ش کند."),
      links: [
        { route: "grow/playbooks", label: L("Playbooks by transition", "برنامه‌ی عمل برای هر گذار") },
        { route: "grow/stall", label: L("Why people stall", "چرا آدم‌ها درجا می‌زنند") }
      ]
    },

    {
      id: "visibility",
      group: "growth",
      levels: ["L4", "L5", "L6"],
      q: L("How do I build visibility without self-promotion?",
           "چطور بدون خودنمایی دیده شوم؟"),
      short: L("Make your work easy to quote: keep a running brag document, write things down where others can find them, make prevention visible, and collect one-line endorsements with data. The goal isn't to be loud; it's to be quotable.",
               "کارتان را قابل‌استناد کنید: دستاوردها را ثبت کنید، مستندات را در دسترس بگذارید، اثر پیشگیری را نشان دهید و نظر کوتاه همکاران را با داده جمع کنید. دیده شدن به توضیح روشن نیاز دارد، نه پرصدایی."),
      body: L("Visibility isn't volume. It's whether someone who wasn't there can say what you did and what changed. That's mostly a writing habit, not a performance. A good test: could your manager quote two sentences about your work in a calibration meeting without asking you?\n\n- Keep a **brag document**. Julia Evans suggests a running list of projects, impact, mentoring and what you learned, updated every couple of weeks and shared with your manager before reviews. Give specifics and say who benefited.\n- Write things down: design docs, short demos, a three-line update when something lands, the postmortem you wrote.\n- Make prevention visible. Sean Goedecke notes that heroics earn more credit than prevention, so record the risk you flagged, the fallback you shipped and the incident that didn't happen.\n- Collect one-line endorsements with data from people on other teams: what did this unblock, and by how much? Will Larson calls these advocate lines.\n- Credit others by name. It's accurate, it builds trust, and it keeps your story from reading as hero work.\n\nDon't oversell. Specific, modest and numbered beats loud.",
              "دیده شدن یعنی پرصدایی نیست. یعنی کسی که آنجا نبوده بتواند بگوید شما چه کردید و چه چیزی عوض شد. این بیشتر یک عادت نوشتن است تا یک نمایش. یک محک خوب: آیا مدیرتان می‌تواند در جلسه‌ی calibration دو جمله از کار شما نقل کند، بدون این‌که از شما بپرسد؟\n\n- یک **سند دستاوردها (brag doc)** نگه دارید. Julia Evans پیشنهاد می‌کند فهرستی پیوسته از پروژه‌ها، اثرگذاری، mentoring و آموخته‌ها داشته باشید، هر دو هفته به‌روزش کنید و پیش از ارزیابی‌ها با مدیرتان به اشتراک بگذارید. جزئیات بدهید و بگویید چه کسی سود برد.\n- بنویسید: design doc، demoهای کوتاه، یک به‌روزرسانی سه‌خطی وقتی چیزی تمام می‌شود، postmortemای که نوشتید.\n- پیش‌گیری را دیدنی کنید. Sean Goedecke می‌نویسد قهرمان‌بازی بیش از پیش‌گیری اعتبار می‌آورد. پس ریسکی را که گفتید، fallbackی را که تحویل دادید و incidentای را که رخ نداد ثبت کنید.\n- از همکاران تیم‌های دیگر نظرهای کوتاه تاییدی با داده جمع کنید: این کار چه مانعی را برطرف کرد و به چه اندازه؟ Will Larson اسمشان را advocate line می‌گذارد.\n- از دیگران به اسم تشکر کنید. دقیق است، اعتماد می‌سازد و نمی‌گذارد داستان شما شبیه قهرمان‌بازی خوانده شود.\n\nزیاده‌گویی نکنید. توضیح دقیق و فروتنانه با پشتوانه‌ی عدد، از پرصدایی موثرتر است."),
      steps: [
        L("Start a brag doc today: dated lines with what you shipped, the result and who benefited. Add to it every other Friday.",
          "همین امروز یک سند دستاوردها شروع کنید: خط‌های تاریخ‌دار با آنچه تحویل دادید، نتیجه و ذی‌نفع. یک هفته در میان، جمعه‌ها به آن اضافه کنید."),
        L("After your next project, write a half-page “what changed” note and post it where your team and stakeholders already read.",
          "بعد از پروژه‌ی بعدی یک یادداشت نیم‌صفحه‌ای «چه چیزی عوض شد» بنویسید و در جایی منتشر کنید که تیم و ذی‌نفعان آن را می‌بینند."),
        L("Ask two people on other teams for one sentence and one number about what your work unblocked. Save them in your doc.",
          "از دو همکار در تیم‌های دیگر بخواهید در یک جمله و با عدد توضیح دهند کار شما چه مانعی را برطرف کرده است. در سند دستاوردها ثبت کنید."),
        L("After the next incident or near miss, publish the timeline and the fix, and thank the people who helped by name.",
          "بعد از incident یا near miss بعدی، timeline و اقدام‌های انجام‌شده برای رفع مشکل را منتشر کنید و از کسانی که کمک کردند به اسم تشکر کنید.")
      ],
      story: L("Neda fixed things quietly. A series of small changes cut her team's build from 25 minutes to 9, and she never mentioned it. At review time her manager had a vague memory that “builds got better.” The next year Neda kept a doc: one line per change with before and after, plus a message from a teammate saying stand-ups were shorter because builds no longer blocked anyone. She posted a short note whenever a change landed. This time her manager walked into calibration with four sentences he could quote instead of a mood.",
               "ندا چیزها را بی‌سروصدا درست می‌کرد. چند تغییر کوچک build تیمش را از 25 دقیقه به 9 رساند و او هیچ‌وقت چیزی نگفت. موقع ارزیابی، مدیرش فقط یادش بود که «build بهتر شد.» سال بعد ندا یک سند نگه داشت: یک خط برای هر تغییر با قبل و بعد و پیامی از یک هم‌تیمی که نوشته بود stand-upها کوتاه‌تر شده‌اند چون build دیگر کسی را متوقف نمی‌کند. هر بار که تغییری می‌آمد یک یادداشت کوتاه می‌گذاشت. این بار مدیرش با چهار جمله‌ی قابل‌استناد وارد calibration شد، نه با یک حس."),
      links: [
        { route: "toolkit/evidence", label: L("Evidence log", "سند دستاوردها") },
        { route: "toolkit/statement", label: L("Impact statement builder", "سازنده‌ی جمله‌ی اثرگذاری") }
      ]
    }

  );
})();

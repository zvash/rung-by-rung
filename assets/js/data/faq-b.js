/* FAQ, part B: growth (sponsors, switching, reorgs, feedback, staying put, infrastructure impact).
   Stories are illustrative composites; their numbers are made up. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;
  S.data.faq = S.data.faq || [];
  S.data.faq.push(

    {
      id: "sponsor",
      group: "growth",
      levels: ["L4", "L5", "L6"],
      q: L("What's the difference between a mentor and a sponsor, and do I need both?",
           "mentor و حامی (sponsor) چه فرقی دارند و آیا به هر دو نیاز دارم؟"),
      short: L("A mentor gives you advice. A sponsor spends their own credibility to put your name forward when you're not in the room, and promotion cases are decided in those rooms. From {L5} up, you need at least one.",
               "mentor توصیه می‌کند. حامی (sponsor) از اعتبار خودش خرج می‌کند و اسم شما را در جایی که حضور ندارید مطرح می‌کند، و پرونده‌های ارتقا در همان اتاق‌ها تصمیم‌گیری می‌شود. از {L5} به بالا دست‌کم به یک حامی نیاز دارید."),
      body: L("A **mentor** helps you think: how to handle a hard review, which skill to build next. A **sponsor** acts. They name you for the stretch project, speak for you in calibration and answer “is she ready?” when you aren't there. The two roles usually come from different people, and most people have more of the first than the second.\n\nThe research behind this is old but consistent. A 2010 Harvard Business Review study, built on a Catalyst survey of more than 4,000 high-potential professionals, found that the women in it had more mentors yet lower pay, level and satisfaction. Its authors' conclusion was that women were over-mentored and under-sponsored. Ladders point the same way: Monzo expects engineers from Senior I upward to sponsor others, and Will Larson's guidance on promotion packets assumes advocates who can say, in a sentence and with data, what your work unblocked.\n\nYou don't ask “will you be my sponsor?” You earn it. Do visible, well-finished work for someone senior who has a stake in it, make it easy for them to describe, then ask for something specific: an intro, a seat in the planning review, a stretch assignment.",
              "**mentor** به شما کمک می‌کند فکر کنید: با یک review سخت چطور برخورد کنید، مهارت بعدی چه باشد. **حامی (sponsor)** عمل می‌کند. اسم شما را برای پروژه‌ی چالشی می‌دهد، در کالیبراسیون (calibration) از شما حرف می‌زند و وقتی شما نیستید به «آماده است؟» جواب می‌دهد. این دو نقش معمولا از دو نفر مختلف می‌آید و بیشتر آدم‌ها از اولی بیشتر دارند تا از دومی.\n\nپژوهشی که پشت این حرف است قدیمی ولی هم‌سوست. مطالعه‌ی Harvard Business Review در سال 2010، بر پایه‌ی پیمایش Catalyst روی بیش از 4000 حرفه‌ای با پتانسیل بالا، نشان داد زنانِ آن نمونه mentor بیشتری داشتند ولی حقوق، سطح و رضایت شغلی کمتری. نتیجه‌ی نویسنده‌ها این بود که زنان بیش از حد mentor دارند و کمتر از حد حامی. نردبان‌ها هم همین‌طورند: Monzo از مهندس‌های Senior I به بالا انتظار دارد دیگران را حمایت کنند، و راهنمای Will Larson برای پرونده‌ی ارتقا فرض می‌گیرد حامیانی هستند که می‌توانند در یک جمله و با داده بگویند کار شما چه چیزی را آزاد کرد.\n\nاز کسی نمی‌پرسید «حامی من می‌شوید؟» آن را به دست می‌آورید. برای یک ارشد که در کار شما سهمی دارد کار دیدنی و کامل انجام بدهید، توصیف آن را برایش آسان کنید و بعد چیز مشخصی بخواهید: یک معرفی، یک صندلی در جلسه‌ی برنامه‌ریزی، یک پروژه‌ی چالشی."),
      steps: [
        L("List the two or three senior people who see the most of your work, and ask each for feedback on one specific piece.",
          "دو سه ارشدی را که بیشتر از همه کار شما را می‌بینند فهرست کنید و از هرکدام درباره‌ی یک کار مشخص بازخورد بخواهید."),
        L("Make your work easy to describe: a one-paragraph summary with the outcome and a number.",
          "کارتان را آسان‌توصیف کنید: یک پاراگراف خلاصه، با نتیجه و یک عدد."),
        L("Ask for one concrete thing: an intro, a seat in the planning review, a stretch assignment.",
          "یک چیز مشخص بخواهید: یک معرفی، یک صندلی در جلسه‌ی برنامه‌ریزی، یک پروژه‌ی چالشی."),
        L("Sponsor someone a level below you. You learn what it takes, and what to ask for.",
          "یک نفر را که یک سطح پایین‌تر از شماست حمایت کنید. یاد می‌گیرید چه لازم است و چه باید بخواهید.")
      ],
      story: L("Mina had two warm mentors and still no traction toward {L5}. In calibration her manager described her work from memory. So she sent a one-page summary of her payment-retry project to a director whose team relied on it and asked for ten minutes of feedback. At the next cycle that director was the person who said, “Her retry work cut failed payments by a third.” Same work as before, but now someone senior could quote it.",
               "مینا دو mentor صمیمی داشت و باز هم به {L5} نزدیک نمی‌شد. در کالیبراسیون مدیرش کار او را از حافظه توصیف می‌کرد. پس خلاصه‌ی یک‌صفحه‌ای پروژه‌ی retry پرداخت را برای مدیری فرستاد که تیمش به آن تکیه داشت و ده دقیقه بازخورد خواست. دوره‌ی بعد همان مدیر کسی بود که گفت: «کار retry او پرداخت‌های ناموفق را یک‌سوم کم کرد.» کار همان کار قبلی بود، ولی حالا یک ارشد می‌توانست نقلش کند."),
      links: [
        { route: "grow/stall", label: L("Why people stall", "چرا آدم‌ها درجا می‌زنند") },
        { route: "toolkit/packet", label: L("Promotion packet outline", "طرح پرونده‌ی ارتقا") }
      ]
    },

    {
      id: "switch-for-promo",
      group: "growth",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("Should I switch companies to get promoted faster?",
           "برای سریع‌تر ارتقا گرفتن باید شرکت عوض کنم؟"),
      short: L("Sometimes. A move can jump you a level, but the interview loop sets it, not your old title, and a move can just as easily cost you one. Switch for evidence you already have, not to escape a “not yet” you haven't understood.",
               "گاهی. جابه‌جایی می‌تواند شما را یک سطح بالا ببرد، ولی سطح را دور مصاحبه تعیین می‌کند، نه عنوان قبلی‌تان، و جابه‌جایی به همان راحتی می‌تواند یک سطح از شما بگیرد. به‌خاطر مدرکی که همین حالا دارید جابه‌جا شوید، نه برای فرار از «هنوز نه»ای که هنوز نفهمیده‌اید."),
      body: L("Changing employers is a common route up. Pragmatic Engineer notes that a stronger external offer after some years as a Senior is a typical way to reach Staff, and external hires often enter above the internal-promotion median. Moving can also cost you: the level you're offered comes from the loop, and moving up a tier often lowers your title even as pay rises (Gergely Orosz).\n\nAsk three questions before deciding.\n\n- **Is the internal path really closed?** Not slow: closed. No budget, no next-level scope, or a manager who won't back you after you asked clearly.\n- **Do you already have next-level evidence?** If your best three stories are at your current level, a loop will find that out within an hour.\n- **What will it cost?** New context, trust to rebuild, and a possible down-level that takes another year or two to recover from.\n\nIf the answer is “closed, yes, and it will hold up in a loop”, switching is a good move. If it's “I got a ‘not yet’ and I'm hurt”, wait a month, get the reasons, and decide then.",
              "عوض کردن شرکت یک راه رایج برای بالا رفتن است. Pragmatic Engineer می‌نویسد offer بهتر از بیرون، بعد از چند سال Senior بودن، راه معمول رسیدن به Staff است، و کسانی که از بیرون استخدام می‌شوند اغلب بالاتر از میانه‌ی ارتقای داخلی وارد می‌شوند. جابه‌جایی می‌تواند هزینه هم داشته باشد: سطحی که به شما پیشنهاد می‌شود از دور مصاحبه می‌آید، و رفتن به شرکتی رده‌بالاتر اغلب عنوان را پایین می‌آورد حتی وقتی حقوق بالا می‌رود (Gergely Orosz).\n\nپیش از تصمیم سه پرسش بپرسید.\n\n- **آیا مسیر داخلی واقعا بسته است؟** نه کند: بسته. نه بودجه، نه scope سطح بعد، یا مدیری که بعد از درخواست روشن شما پشتتان نمی‌ایستد.\n- **آیا همین حالا مدرک سطح بعد دارید؟** اگر بهترین سه داستان‌تان در سطح فعلی است، یک دور مصاحبه ظرف یک ساعت این را می‌فهمد.\n- **چه هزینه‌ای دارد؟** context تازه، اعتمادی که باید از نو ساخت، و احتمال down-level که یکی دو سال طول می‌کشد جبران شود.\n\nاگر جواب این است که «بسته، بله، و در مصاحبه هم پایدار است»، جابه‌جایی حرکت خوبی است. اگر جواب این است که ««هنوز نه» شنیدم و دلخورم»، یک ماه صبر کنید، دلیل‌ها را بگیرید و بعد تصمیم بگیرید."),
      steps: [
        L("Ask your manager for the next-level path in writing: scope, evidence, earliest review date.",
          "از مدیرتان مسیر سطح بعد را مکتوب بخواهید: scope، مدرک، زودترین تاریخ بازبینی."),
        L("Interview once as a calibration. Apply to one company you'd really join and see which level the loop proposes.",
          "یک بار برای کالیبراسیون مصاحبه بدهید: به یک شرکت که واقعا می‌خواهید به آن بپیوندید درخواست بدهید و ببینید دور مصاحبه چه سطحی پیشنهاد می‌کند."),
        L("Compare the written level descriptions of both companies, not the titles.",
          "توصیف مکتوب سطح‌های دو شرکت را مقایسه کنید، نه عنوان‌ها را."),
        L("Decide with numbers: pay difference, runway to the next promotion, what you'd learn.",
          "با عدد تصمیم بگیرید: تفاوت حقوق، فاصله تا ارتقای بعدی، آنچه یاد می‌گیرید.")
      ],
      story: L("Dara had been mid-level for four years at a marketplace. His manager liked him, but the next level needed area-sized scope his team didn't have. He asked for a path in writing and got “maybe next year”. He interviewed at two larger companies as a test. One offered mid-level; the other, whose loop weighted his design round heavily, offered senior. He took it. The two test interviews cost him two weekends and told him what four years of conversation hadn't.",
               "دارا چهار سال در یک بازار آنلاین سطح میانی بود. مدیرش از او راضی بود، ولی سطح بعد scopeای در اندازه‌ی یک حوزه می‌خواست که تیم او نداشت. مسیر را مکتوب خواست و جواب شنید «شاید سال بعد». برای آزمایش در دو شرکت بزرگ‌تر مصاحبه داد. یکی سطح میانی پیشنهاد داد؛ دیگری، که دور مصاحبه‌اش روی راند design او وزن زیادی گذاشته بود، سطح senior. او همان را پذیرفت. دو مصاحبه‌ی آزمایشی دو آخر هفته خرجش شد و چیزی را گفت که چهار سال گفتگو نگفته بود."),
      links: [
        { route: "hire/downlevel", label: L("Accept or push back", "بپذیرید یا مقاومت کنید") },
        { route: "hire/pipeline", label: L("How level is set at hire", "سطح هنگام استخدام چطور تعیین می‌شود") }
      ]
    },

    {
      id: "reorg",
      group: "growth",
      levels: ["L4", "L5", "L6"],
      q: L("My team was reorganised right before the promotion cycle. Is my case dead?",
           "تیم من درست پیش از چرخه‌ی ارتقا بازسازی شد. آیا پرونده‌ام از دست رفته؟"),
      short: L("Usually not. Evidence travels with you, but context doesn't: a new manager can't argue what they haven't seen. Brief them early, in writing, and collect quotes from people who watched the work.",
               "معمولا نه. مدرک با شما سفر می‌کند ولی context سفر نمی‌کند: مدیر تازه نمی‌تواند از چیزی که ندیده دفاع کند. زود و مکتوب او را توجیه کنید و از کسانی که کار را دیده‌اند نقل‌قول جمع کنید."),
      body: L("A reorganisation hurts a promotion case in one specific way: the person who has to argue it in calibration no longer knows your work. The decision-makers still care about what you did. At some large employers a manager's advocacy is close to decisive (promotion at Meta reportedly falls out of performance calibration, with no separate packet), and a manager who joined last month can't champion what they haven't seen.\n\nSo replace their memory with a document. Give the new manager a one-page summary in their first two weeks: the projects, your role in each, the outcomes with numbers, and where the evidence lives (design docs, dashboards, launch emails). Ask your previous manager for a short handoff note, and two or three peers, ideally from other teams, for one-sentence quotes.\n\nThen ask about timing: when is the next window, what does the new manager need and by when, and does your old manager's recommendation carry over? If a cycle really is missed, that's a delay of months, not a verdict.",
              "بازسازی سازمانی به یک شکل مشخص به پرونده‌ی ارتقا ضربه می‌زند: کسی که باید در کالیبراسیون از آن دفاع کند دیگر کار شما را نمی‌شناسد. تصمیم‌گیرنده‌ها هنوز به آنچه کرده‌اید اهمیت می‌دهند. در بعضی شرکت‌های بزرگ دفاع مدیر تقریبا تعیین‌کننده است (گفته می‌شود ارتقا در Meta از دل کالیبراسیون عملکرد بیرون می‌آید، بدون پرونده‌ی جداگانه)، و مدیری که ماه پیش آمده نمی‌تواند از چیزی که ندیده دفاع کند.\n\nپس به‌جای حافظه‌ی او یک سند بگذارید. در دو هفته‌ی اول، یک خلاصه‌ی یک‌صفحه‌ای به مدیر تازه بدهید: پروژه‌ها، نقش شما در هرکدام، نتیجه‌ها با عدد، و این‌که مدرک‌ها کجاست (design docها، داشبوردها، ایمیل‌های launch). از مدیر قبلی یک یادداشت کوتاه تحویل بخواهید، و از دو سه همکار، ترجیحا از تیم‌های دیگر، یک جمله نقل‌قول.\n\nبعد درباره‌ی زمان‌بندی بپرسید: پنجره‌ی بعدی کِی است، مدیر تازه چه چیزی تا کِی لازم دارد، و آیا توصیه‌ی مدیر قبلی منتقل می‌شود؟ اگر واقعا یک چرخه از دست برود، تاخیر چند ماهه است، نه حکم."),
      steps: [
        L("Write the one-page summary now: projects, your role, outcomes with numbers, links.",
          "همین حالا خلاصه‌ی یک‌صفحه‌ای را بنویسید: پروژه‌ها، نقش شما، نتیجه‌ها با عدد، لینک‌ها."),
        L("Ask your old manager to write a short handoff note to your new one.",
          "از مدیر قبلی بخواهید یک یادداشت تحویل کوتاه برای مدیر جدید بنویسد."),
        L("Collect two or three one-sentence quotes from partners outside the team.",
          "دو سه نقل‌قول یک‌جمله‌ای از همکاران بیرون از تیم جمع کنید."),
        L("Ask the new manager what they need by when for the next cycle, and agree on a check-in date.",
          "از مدیر جدید بپرسید برای چرخه‌ی بعد چه چیزی تا کِی لازم دارد و روی تاریخ بررسی توافق کنید.")
      ],
      story: L("Tara's team of eight was split in two six weeks before the cycle closed. Her new manager had never seen her design reviews. She sent a one-page summary and a folder of links. Her former manager added a paragraph, and two partner engineers each wrote a sentence. The case was thinner than it would have been, but every line in it was quotable. It went through one cycle later instead of being lost.",
               "تیم هشت‌نفره‌ی تارا شش هفته پیش از بسته شدن چرخه به دو بخش تقسیم شد. مدیر جدید او هیچ‌وقت design reviewهای او را ندیده بود. تارا یک خلاصه‌ی یک‌صفحه‌ای و یک پوشه‌ی لینک فرستاد. مدیر قبلی یک پاراگراف اضافه کرد و دو مهندس همکار هرکدام یک جمله نوشتند. پرونده از آنچه می‌توانست باشد لاغرتر بود، ولی هر خطش قابل‌نقل بود. یک چرخه بعد تایید شد، به‌جای این‌که از دست برود."),
      links: [
        { route: "grow/evidence", label: L("Build evidence others can quote", "مدرکی بسازید که دیگران نقلش کنند") },
        { route: "toolkit/packet", label: L("Promotion packet outline", "طرح پرونده‌ی ارتقا") }
      ]
    },

    {
      id: "feedback-use",
      group: "growth",
      levels: ["L3", "L4", "L5"],
      q: L("How do I get feedback that's actually useful, not just “keep it up”?",
           "چطور بازخوردی بگیرم که واقعا به کار بیاید، نه فقط «همین‌طور ادامه بده»؟"),
      short: L("Ask narrower questions. “Any feedback?” invites politeness; “what would have made this a next-level example?” invites specifics.",
               "پرسش‌های محدودتر بپرسید. «بازخوردی داری؟» مودب بودن را دعوت می‌کند؛ «چه چیزی این را به یک مثال سطح بعد تبدیل می‌کرد؟» جزئیات را."),
      body: L("Most feedback is vague because the question was. “Any feedback for me?” asks the other person to do three jobs at once: remember your work, judge it, and decide how to say it kindly. Make it easier. Pick one piece of work, one lens and one question.\n\nGood questions use the ladder's own words. “For {L5}, the descriptor says I should set direction for two or three engineers. In the migration, where did that show up, and where didn't it?” works better than “How am I doing?” Ask for the moment (“which one?”) and for the counterfactual: “What would have made this an example you'd quote in a promotion discussion?”\n\nSample three people, not one: your manager, a peer who works close to you, and someone from another team. Ask each the same question and look for the overlap. John Allspaw lists seeking critique of your own designs among the habits of a senior engineer, and the reason to ask early is practical: after a launch, feedback is history; before it, feedback changes the outcome.",
              "بیشتر بازخوردها مبهم‌اند چون پرسش مبهم بود. «بازخوردی برای من داری؟» از طرف مقابل می‌خواهد سه کار را هم‌زمان بکند: کار شما را به یاد بیاورد، قضاوتش کند و تصمیم بگیرد چطور مهربانانه بگویدش. کار را آسان کنید. یک کار، یک بُعد و یک پرسش انتخاب کنید.\n\nپرسش خوب از کلمه‌های خودِ نردبان استفاده می‌کند. «برای {L5}، شرح سطح می‌گوید باید برای دو سه مهندس جهت تعیین کنم. در مهاجرت، کجا این دیده شد و کجا نه؟» بهتر از «وضعم چطور است؟» جواب می‌دهد. لحظه را بخواهید («کدام؟») و حالتِ جایگزین را هم: «چه چیزی این را به مثالی تبدیل می‌کرد که در بحث ارتقا نقلش می‌کردی؟»\n\nاز سه نفر بپرسید، نه یک نفر: مدیرتان، همکاری که نزدیک شما کار می‌کند و کسی از تیم دیگر. از همه یک پرسش را بپرسید و دنبال همپوشانی بگردید. John Allspaw جست‌وجوی نقد درباره‌ی طراحی‌های خودتان را جزو عادت‌های مهندس ارشد می‌شمارد، و دلیل زود پرسیدن عملی است: بعد از launch، بازخورد تاریخ است؛ پیش از آن، بازخورد نتیجه را عوض می‌کند."),
      steps: [
        L("Pick one piece of recent work and one lens before you ask.",
          "پیش از پرسیدن یک کار اخیر و یک بُعد انتخاب کنید."),
        L("Use the descriptor's words in the question: “for the next level, where did this show up and where not?”",
          "در پرسش از کلمه‌های شرح سطح استفاده کنید: «برای سطح بعد، کجا این دیده شد و کجا نه؟»"),
        L("Ask the same question of three people, then write down what they all said.",
          "یک پرسش را از سه نفر بپرسید و بعد آنچه همه‌شان گفتند بنویسید."),
        L("Show people what you did with the feedback. It dries up when nothing visibly changes.",
          "به آدم‌ها نشان بدهید با بازخورد چه کردید. وقتی چیزی دیدنی عوض نشود، بازخورد خشک می‌شود.")
      ],
      story: L("Omid's reviews always said “strong engineer, keep it up”. In a one-on-one he asked, “In the search project, where did I make the decisions and where did I wait to be told?” His manager paused, then named two moments: Omid had waited for the PM to settle a ranking trade-off, and had held a dependency problem for a week before escalating. Neither was in any review, but both were the gap. His next project began with him writing the trade-off down himself.",
               "بازخورد سالانه‌ی امید همیشه این بود: «مهندس قوی‌ای هستی، ادامه بده.» در یک 1:1 پرسید: «در پروژه‌ی جست‌وجو، کجا خودم تصمیم گرفتم و کجا منتظر ماندم به من بگویند؟» مدیرش مکث کرد و دو لحظه را نام برد: امید منتظر مانده بود PM یک trade-off رتبه‌بندی را فیصله بدهد، و مشکل یک وابستگی را یک هفته نگه داشته بود تا escalate کند. هیچ‌کدام در هیچ ارزیابی نبود، ولی هر دو همان شکاف بود. پروژه‌ی بعدی‌اش با این شروع شد که خودش trade-off را نوشت."),
      links: [
        { route: "toolkit/oneonone", label: L("1:1 growth conversation kit", "بسته‌ی گفتگوی رشد در 1:1") },
        { route: "locate", label: L("Where am I?", "من کجا هستم؟") }
      ]
    },

    {
      id: "stay-level",
      group: "paths",
      levels: ["L3", "L4", "L5", "L6"],
      q: L("Is it okay to stay at the same level for years?",
           "آیا اشکالی دارد سال‌ها در یک سطح بمانم؟"),
      short: L("Yes. Several published ladders treat the first senior level as a deliberately sustainable destination, and most big employers have a level where many people stay. The risks are pay bands and drifting, not failure.",
               "بله. چند نردبان منتشرشده اولین سطح ارشد را عمدا مقصدی پایدار می‌دانند و بیشتر شرکت‌های بزرگ سطحی دارند که بسیاری در آن می‌مانند. ریسک‌ها سقف بازه‌ی حقوقی و ول‌شدن است، نه شکست."),
      body: L("Staying at a level is normal, and good ladders say so. Honeycomb describes its senior level as deliberately sustainable. Monzo calls its third engineer level a legitimate place to stay, and says not everyone will want the next one. Pragmatic Engineer describes Senior as a common plateau at big tech, by design, partly because senior pay already approaches management pay. For one large employer, guides reportedly describe L4 and L5 as levels you can hold indefinitely and L3 as one you're expected to leave (second-hand, not official). The ladder this guide is built on says it too: {L4} is expected of everyone, and the levels above it are not obligations.\n\nTwo honest caveats. First, **bands bind**: when Netflix introduced levels in 2022, people above their band were expected to see raises frozen until promotion. Second, the market moves, and staying put is safer when you keep learning and keep a record of what you've done.\n\n“Staying” is a decision; “stuck” is a drift. If you want to stay, say so to your manager, ask what the level needs from you to remain strong, and keep your evidence log current.",
              "ماندن در یک سطح عادی است و نردبان‌های خوب این را می‌گویند. Honeycomb سطح ارشد خودش را عمدا پایدار توصیف می‌کند. Monzo سطح سوم مهندسی‌اش را جای قانونی برای ماندن می‌داند و می‌گوید همه سطح بعد را نخواهند خواست. Pragmatic Engineer سطح ارشد را نقطه‌ی توقف رایج در big tech می‌داند، که عمدا چنین طراحی شده، تا حدی چون حقوق ارشد از قبل به حقوق مدیریت نزدیک است. درباره‌ی یک شرکت بزرگ، راهنماها گزارش می‌دهند L4 و L5 سطح‌هایی هستند که می‌شود بی‌نهایت در آن‌ها ماند و L3 سطحی است که انتظار می‌رود از آن بیرون بروید (دست‌دوم، نه رسمی). نردبانی که این راهنما بر پایه‌ی آن ساخته شده هم همین را می‌گوید: {L4} از همه انتظار می‌رود و سطح‌های بالاتر تکلیف نیستند.\n\nدو هشدار صادقانه. اول، **بازه‌ها محدود می‌کنند**: وقتی Netflix در 2022 سطح‌بندی آورد، انتظار این بود که حقوق کسانی که بالای بازه‌شان بودند تا ارتقا ثابت بماند. دوم، بازار تغییر می‌کند و ماندن وقتی امن‌تر است که یاد گرفتن را ادامه بدهید و سابقه‌ی کارهایتان را نگه دارید.\n\n«ماندن» یک تصمیم است؛ «گیر کردن» یک ول‌شدن. اگر می‌خواهید بمانید، به مدیرتان بگویید، بپرسید سطح فعلی برای قوی ماندن چه از شما می‌خواهد و سند دستاوردها را به‌روز نگه دارید."),
      steps: [
        L("Decide on purpose: write one sentence on whether you want the next level in the next two years.",
          "عمدی تصمیم بگیرید: در یک جمله بنویسید آیا طی دو سال آینده سطح بعد را می‌خواهید."),
        L("Tell your manager, and ask what the current level needs from you to stay strong.",
          "به مدیرتان بگویید و بپرسید سطح فعلی برای قوی ماندن چه از شما می‌خواهد."),
        L("Keep your evidence log current anyway. It protects you in reorgs and layoffs.",
          "سند دستاوردها را در هر حال به‌روز نگه دارید. در بازسازی‌ها و تعدیل‌ها از شما محافظت می‌کند."),
        L("Pick one learning goal that has nothing to do with the title.",
          "یک هدف یادگیری انتخاب کنید که به عنوان ربطی ندارد.")
      ],
      story: null,
      links: [
        { route: "how/pace", label: L("Time in level and plateaus", "زمان در هر سطح و درجا زدن") },
        { route: "paths", label: L("Your path: IC, lead, manager", "مسیرهای شما: IC، لید، مدیر") }
      ]
    },

    {
      id: "infra-impact",
      group: "growth",
      levels: ["L4", "L5", "L6"],
      q: L("I work on infrastructure or internal tools. How do I show impact when my users are engineers?",
           "روی زیرساخت یا ابزارهای داخلی کار می‌کنم. وقتی کاربرانم مهندس‌اند، اثرگذاری را چطور نشان بدهم؟"),
      short: L("Count what your users stop spending: minutes, incidents, dollars. Then count how many of them there are, and how many chose to adopt it.",
               "بشمارید کاربران شما چه چیزی را دیگر خرج نمی‌کنند: دقیقه، incident، دلار. بعد بشمارید چند نفرند و چند نفر خودشان آن را پذیرفتند."),
      body: L("Platform and tooling work is easy to undersell because there's no customer-facing number. But impact still means *what changed because of your work*, and engineers are users like any others. The trick is to translate the work into time, risk or money, and to show reach.\n\n- **Time:** “Cut the median CI run from 22 to 9 minutes; with about 140 engineers pushing six times a day, that's roughly 2,000 engineer-minutes saved daily” (illustrative).\n- **Risk:** “Fixed the top three alert sources; pages dropped from 20 to 4 a month.”\n- **Money:** “Moved batch jobs to cheaper capacity; the monthly cloud bill fell from $38K to $22K, confirmed with finance.”\n\nThen add adoption. A platform succeeds when other teams choose it, so “eleven of fourteen teams migrated voluntarily” is stronger than “I built it”. And ask two or three users for one sentence each. Dropbox's framework defines impact as serving customers and, through them, the business. For an internal tool the customer is simply closer to you.",
              "کار روی پلتفرم و ابزار را راحت کم‌فروش می‌کنند چون عددی رو به مشتری ندارد. ولی اثرگذاری باز هم یعنی *به‌خاطر کار شما چه چیزی عوض شد*، و مهندس‌ها هم مثل بقیه کاربرند. ترفند این است که کار را به زمان، ریسک یا پول ترجمه کنید و دامنه‌اش را نشان بدهید.\n\n- **زمان:** «میانه‌ی اجرای CI را از 22 به 9 دقیقه رساندم؛ با حدود 140 مهندس که روزی شش بار push می‌کنند، یعنی تقریبا 2000 دقیقه‌ی مهندسی در روز» (نمونه).\n- **ریسک:** «سه منبع اول alert را رفع کردم؛ pageها از 20 به 4 در ماه رسید.»\n- **پول:** «jobهای batch را به ظرفیت ارزان‌تر بردم؛ صورت‌حساب ماهانه‌ی cloud از 38 هزار دلار به 22 هزار دلار رسید و مالی تایید کرد.»\n\nبعد پذیرش (adoption) را اضافه کنید. پلتفرم وقتی موفق است که تیم‌های دیگر آن را انتخاب کنند؛ پس «یازده تیم از چهارده تیم داوطلبانه مهاجرت کردند» از «من ساختمش» قوی‌تر است. و از دو سه کاربر یک جمله بخواهید. چارچوب Dropbox اثرگذاری را خدمت به مشتری و از راه آن به کسب‌وکار تعریف می‌کند. در ابزار داخلی، مشتری فقط به شما نزدیک‌تر است."),
      steps: [
        L("For each tool, write who uses it, how often, and what it replaced.",
          "برای هر ابزار بنویسید چه کسی استفاده می‌کند، هر چند وقت، و جای چه چیزی آمده."),
        L("Measure before and after for one metric: time, incidents or cost.",
          "یک شاخص را پیش و پس از اندازه بگیرید: زمان، incident یا هزینه."),
        L("Count the adopters, and whether they chose it or were told to.",
          "پذیرندگان را بشمارید، و این‌که خودشان انتخاب کردند یا بهشان گفته شد."),
        L("Ask two users for one sentence each, with a number if they have one.",
          "از دو کاربر یک جمله بخواهید، با عدد اگر دارند.")
      ],
      story: L("Sina's team built a new deploy tool. Her year-end note read “shipped deploy tool v2”. Her manager asked, “So what changed?” She pulled the data: deploys per engineer per week had gone from 3 to 9, rollback time from 25 to 4 minutes, and nine of twelve teams had moved over without being asked. The note became two lines, and the second was a quote from the payments team lead.",
               "تیم سینا یک ابزار deploy تازه ساخت. یادداشت پایان سال او این بود: «ابزار deploy نسخه‌ی 2 را منتشر کردم.» مدیرش پرسید: «پس چه چیزی عوض شد؟» سینا سراغ داده‌ها رفت: تعداد deploy در هفته برای هر مهندس از 3 به 9 رسیده بود، زمان rollback از 25 به 4 دقیقه، و نه تیم از دوازده تیم بدون این‌که کسی بخواهد مهاجرت کرده بودند. یادداشت دو خط شد و خط دوم نقل‌قولی از لید تیم پرداخت بود."),
      links: [
        { route: "toolkit/statement", label: L("Impact statement builder", "سازنده‌ی جمله‌ی اثرگذاری") },
        { route: "how/lenses", label: L("The four lenses and impact", "چهار بُعد و اثرگذاری") }
      ]
    }

  );
})();

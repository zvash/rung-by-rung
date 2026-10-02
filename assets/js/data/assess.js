/* "Where am I?" self-assessment.
   questions: 15 items, three per lens, in the order contribution, challenge, influence, expertise, impact.
   Every question has five options with v = 3, 4, 5, 6, 7 (v3 covers L2–L3 behaviour, then L4, L5, L6, L7).
   Options are first-person and observable, similar in length, and carry no level codes or names.
   habits: 9 level-independent statements (citizenship, teamwork, practices) rated not yet / sometimes / consistently. */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;

  S.data.assess = {
    questions: [

      /* ======================= CONTRIBUTION ======================= */
      { id: "c1", lens: "contribution",
        q: L("How does your work usually reach you, and how big is it?",
             "کارتان معمولا چطور به شما می‌رسد و چقدر بزرگ است؟"),
        options: [
          { v: 3, t: L("I work on small, clearly scoped tasks inside a bigger project. A more senior colleague defines them and checks in, and I keep my status visible.",
                       "روی taskهای کوچک و کاملا مشخص از یک پروژه‌ی بزرگ‌تر کار می‌کنم. یک همکار ارشدتر آن‌ها را تعریف می‌کند و سرکشی می‌کند، و من وضعیت کارم را شفاف نگه می‌دارم.") },
          { v: 4, t: L("I work on projects that run several months. I break them down, plan the dependencies and run delivery myself, with little help from more senior colleagues.",
                       "روی پروژه‌هایی چندماهه کار می‌کنم. خودم آن‌ها را به بخش‌های کوچک‌تر می‌شکنم، وابستگی‌ها را برنامه‌ریزی می‌کنم و delivery را با کمترین کمک همکاران ارشدتر جلو می‌برم.") },
          { v: 5, t: L("I work on a whole area: one or more projects over several quarters. I decide what is and isn't part of the problem, and many ideas start with me.",
                       "روی یک حوزه‌ی کامل کار می‌کنم: یک یا چند پروژه در طول چند فصل. خودم scope می‌کنم که چه بخش‌هایی جزو مساله‌اند و چه بخش‌هایی نیستند، و بسیاری از ایده‌ها از من شروع می‌شود.") },
          { v: 6, t: L("I work on strategy for a large group (10+ people), a very hard problem or a year-plus horizon. I set the direction and I'm answerable for the results.",
                       "روی استراتژی یک گروه بزرگ (10+ نفر)، یک مساله‌ی بسیار سخت یا افقی یک‌ساله و بیشتر کار می‌کنم. جهت را خودم تعیین می‌کنم و پاسخگوی نتیجه‌ها هستم.") },
          { v: 7, t: L("I work on a technical area the company's strategy depends on, sometimes several large efforts at once. I'm accountable for how they turn out.",
                       "روی یک حوزه‌ی فنی کار می‌کنم که استراتژی شرکت به آن وابسته است، گاهی روی چند تلاش بزرگ هم‌زمان، و پاسخگوی نتیجه‌ی آن‌ها هستم.") }
        ] },

      { id: "c2", lens: "contribution",
        q: L("What does delivering well usually look like in your work?",
             "تحویل خوب در کار شما معمولا چه شکلی دارد؟"),
        options: [
          { v: 3, t: L("My tasks are finished correctly, completely and on time, at consistently good quality. Few defects come back to me, and I don't create rework for others.",
                       "taskهایم درست، کامل و سر وقت تمام می‌شوند، با کیفیتی که پیوسته خوب است. ایراد کمی به من برمی‌گردد و برای دیگران دوباره‌کاری نمی‌سازم.") },
          { v: 4, t: L("When I ship, the whole thing ships: code, tests, docs, monitoring, alerts and a support guide. I bring in others when it's more than I can do.",
                       "وقتی چیزی را تحویل می‌دهم، همه‌ی آن تحویل می‌شود: کد، تست، مستندات، monitoring، alertها و راهنمای پشتیبانی. اگر از دستم برنیاید، از دیگران کمک می‌گیرم.") },
          { v: 5, t: L("What I deliver stands out for its quality and moves something the whole organisation tracks, such as adoption, reliability or cost, not just my project's goals.",
                       "کاری که تحویل می‌دهم از نظر کیفیت متمایز است و روی شاخصی اثر می‌گذارد که کل سازمان دنبال می‌کند، مثل میزان استفاده، اتکاپذیری یا هزینه، نه فقط اهداف پروژه‌ی خودم.") },
          { v: 6, t: L("I judge when a problem deserves a big new investment and when we should improve what exists step by step, and I lead the work so it stays sustainable.",
                       "تشخیص می‌دهم کِی یک مساله سرمایه‌گذاری بزرگ و تازه می‌ارزد و کِی باید آنچه هست را قدم‌به‌قدم بهبود داد، و کار را طوری پیش می‌برم که نتیجه پایدار بماند.") },
          { v: 7, t: L("I look after sensitive, complex systems, answer the hard questions about them, and find and remove what slows delivery across teams, so quality holds as we scale.",
                       "از سیستم‌های حساس و پیچیده نگهداری می‌کنم، به سوال‌های سخت درباره‌ی آن‌ها جواب می‌دهم و موانعی را که سرعت تیم‌ها را کم می‌کند پیدا و برطرف می‌کنم، تا کیفیت با بزرگ‌تر شدن سازمان حفظ شود.") }
        ] },

      { id: "c3", lens: "contribution",
        q: L("How much direction do you need, and how much do you give?",
             "چقدر راهنمایی می‌گیرید و چقدر جهت می‌دهید؟"),
        options: [
          { v: 3, t: L("I get guidance on the “how”. I agree my approach with a more senior colleague, then work on my own, with no daily management.",
                       "درباره‌ی «چطور» انجام دادن کار راهنمایی می‌گیرم: رویکردم را با یک همکار ارشدتر هماهنگ می‌کنم و بعد مستقل کار می‌کنم، بدون مدیریت روزانه.") },
          { v: 4, t: L("I manage myself and my own priorities. On a multi-month project I need minimal guidance, and nobody has to check on me to know where it stands.",
                       "خودم را و اولویت‌هایم را مدیریت می‌کنم. در یک پروژه‌ی چندماهه به حداقل راهنمایی نیاز دارم و لازم نیست کسی برای باخبر شدن از وضعیت کار سراغم بیاید.") },
          { v: 5, t: L("On top of my own work, I set the technical direction for two or three engineers around me: what we build, in what order and why.",
                       "علاوه بر کار خودم، برای دو سه مهندس اطرافم جهت فنی تعیین می‌کنم: چه چیزی بسازیم، به چه ترتیب و چرا.") },
          { v: 6, t: L("I lead a group of ten or more people, from my own team and others, toward a strategy I set, and I'm responsible for the results.",
                       "گروهی از 10 نفر یا بیشتر را، از تیم خودم و تیم‌های دیگر، به سمت استراتژی‌ای که خودم تعیین کرده‌ام رهبری می‌کنم و مسئول نتیجه‌ها هستم.") },
          { v: 7, t: L("I lead several efforts at once, each big enough to need its own strategy and large group, and I'm accountable for each one succeeding.",
                       "هم‌زمان چند تلاش را رهبری می‌کنم، هر کدام به اندازه‌ای بزرگ که استراتژی و گروه بزرگ مخصوص خودش را لازم دارد، و پاسخگوی موفقیت هر کدام هستم.") }
        ] },

      /* ======================= CHALLENGE ======================= */
      { id: "h1", lens: "challenge",
        q: L("How clear are the problems you take on when they first reach you?",
             "مساله‌ها وقتی به دست شما می‌رسند معمولا چقدر روشن‌اند؟"),
        options: [
          { v: 3, t: L("My problems are familiar and already defined. The options are known, and I pick the right one, asking for guidance when the choice isn't obvious.",
                       "مساله‌هایم آشنا و از پیش تعریف‌شده‌اند. گزینه‌ها معلوم است و من گزینه‌ی مناسب را انتخاب می‌کنم؛ وقتی انتخاب بدیهی نیست راهنمایی می‌گیرم.") },
          { v: 4, t: L("My problems aren't trivial. Several workable options exist and none is obviously best, but the problem itself is clear, so I compare them and choose.",
                       "مساله‌هایم بدیهی نیستند. چند گزینه‌ی قابل‌قبول هست و هیچ‌کدام واضحا بهترین نیست، ولی خود مساله روشن است؛ پس گزینه‌ها را مقایسه می‌کنم و یکی را انتخاب می‌کنم.") },
          { v: 5, t: L("My problems are ambiguous. No best answer is clear, and even the problem's edges are fuzzy, so I research and scope before choosing a direction.",
                       "مساله‌هایم مبهم‌اند. هیچ جواب بهترینی روشن نیست و حتی مرزهای خود مساله هم مشخص نیست؛ پس پیش از انتخاب مسیر، تحقیق و scope می‌کنم.") },
          { v: 6, t: L("My problems are open-ended. Even senior leaders can't yet see what the high-level solution looks like, so clarifying the problem is part of my job.",
                       "مساله‌هایم پایان‌باز و ذاتا مبهم‌اند. حتی رهبران ارشد هنوز تصویر سطح‌بالای راه‌حل را نمی‌بینند، و شفاف کردن مساله بخشی از کار من است.") },
          { v: 7, t: L("My problems cut across several complex systems or parts of the organisation, and the hard part is how those pieces interact, not any one of them.",
                       "مساله‌هایم چند سیستم پیچیده یا چند بخش از سازمان را درگیر می‌کنند، و سختی کار در تعامل این بخش‌هاست، نه در هیچ‌کدام از آن‌ها به‌تنهایی.") }
        ] },

      { id: "h2", lens: "challenge",
        q: L("When a problem is hard or you're stuck, how do you decide what to do?",
             "وقتی مساله‌ای سخت است یا گیر کرده‌اید، چطور تصمیم می‌گیرید چه کنید؟"),
        options: [
          { v: 3, t: L("I use the team's standard tools and processes. When a problem proves more complex than expected, I stop sinking time into it and escalate to a senior colleague.",
                       "از ابزار و فرایندهای استاندارد تیم استفاده می‌کنم. وقتی مساله پیچیده‌تر از انتظارم از آب درمی‌آید، بیش از این گیر نمی‌کنم و به یک همکار ارشدتر escalate می‌کنم.") },
          { v: 4, t: L("When no option is clearly best, I analyse the alternatives, choose one and say why. I also spot technical problems myself and propose the next pieces of work.",
                       "وقتی هیچ گزینه‌ای واضحا بهترین نیست، گزینه‌ها را تحلیل می‌کنم، یکی را انتخاب می‌کنم و دلیلش را می‌گویم. مساله‌های فنی را هم خودم پیدا می‌کنم و کارهای بعدی را پیشنهاد می‌دهم.") },
          { v: 5, t: L("I research options and technologies, design the solution and see it through to the end, including the parts that aren't coding, such as rollout and communication.",
                       "گزینه‌ها و تکنولوژی‌ها را بررسی می‌کنم، راه‌حل را طراحی می‌کنم و تا پایان پیش می‌برم، از جمله بخش‌هایی که کدنویسی نیستند، مثل rollout و ارتباط با دیگران.") },
          { v: 6, t: L("I help decide which problems the organisation works on at all, and I look for future areas of work myself instead of waiting for them to land on me.",
                       "در این‌که سازمان اصلا روی چه مساله‌هایی کار کند نقش دارم، و زمینه‌های کاری آینده را خودم کشف می‌کنم، نه این‌که منتظر بمانم کار به سراغم بیاید.") },
          { v: 7, t: L("I identify large-scale problems worth solving and break them into projects, some for my own teams and some for other teams to take on.",
                       "مساله‌های بزرگ‌مقیاسی را که ارزش حل کردن دارند شناسایی می‌کنم و به پروژه‌هایی می‌شکنم، بعضی برای تیم‌های خودم و بعضی برای تیم‌های دیگر.") }
        ] },

      { id: "h3", lens: "challenge",
        q: L("How far ahead do you plan, and how do you handle complexity?",
             "چقدر جلوتر برنامه‌ریزی می‌کنید و با پیچیدگی چطور برخورد می‌کنید؟"),
        options: [
          { v: 3, t: L("I plan in days or a few weeks and focus on getting my own part right, building on the team's existing designs and standards.",
                       "در حد چند روز تا چند هفته برنامه‌ریزی می‌کنم و روی درست انجام دادن سهم خودم تمرکز دارم، با تکیه بر طراحی‌ها و استانداردهای موجود تیم.") },
          { v: 4, t: L("I plan in months and check what my change does upstream and downstream, so my decisions account for the systems around it, not only my own ticket.",
                       "در حد چند ماه برنامه‌ریزی می‌کنم و بررسی می‌کنم تغییرم روی upstream و downstream چه اثری دارد، تا تصمیم‌هایم فقط به ticket خودم محدود نشود.") },
          { v: 5, t: L("I plan over several quarters, weighing short-term needs against long-term health, and I decide when to improve and when to rebuild. I standardise and simplify to stop recurring problems.",
                       "چند فصل جلوتر برنامه‌ریزی می‌کنم، نیاز کوتاه‌مدت را با سلامت بلندمدت می‌سنجم و تشخیص می‌دهم کِی بهبود بدهم و کِی از نو بسازم. با استانداردسازی و ساده‌سازی، جلوی مشکل‌های تکراری را می‌گیرم.") },
          { v: 6, t: L("I plan a year or more ahead and reduce complexity on purpose, raising reliability, performance and security so problems are prevented before they appear.",
                       "یک سال یا بیشتر جلوتر برنامه‌ریزی می‌کنم و پیچیدگی را عمدا کم می‌کنم؛ اتکاپذیری، کارایی و امنیت را بالا می‌برم تا مشکل‌ها پیش از ظاهر شدن مهار شوند.") },
          { v: 7, t: L("I plan across multiple years and many systems, and the problems I work on need real creativity and new ideas, not just patterns we already know.",
                       "چند سال جلوتر و میان سیستم‌های متعدد برنامه‌ریزی می‌کنم، و مساله‌هایی که رویشان کار می‌کنم خلاقیت و ایده‌ی تازه می‌خواهند، نه فقط الگوهایی که از قبل می‌شناسیم.") }
        ] },

      /* ======================= INFLUENCE ======================= */
      { id: "i1", lens: "influence",
        q: L("Who do you coordinate with, and how do you keep everyone aligned?",
             "با چه کسانی هماهنگ می‌کنید و چطور همه را هم‌جهت نگه می‌دارید؟"),
        options: [
          { v: 3, t: L("I build working relationships in my team and, when needed, with other teams, often with a more senior colleague introducing me or guiding the conversation.",
                       "در تیم خودم و، در صورت لزوم، با تیم‌های دیگر ارتباط کاری می‌سازم، معمولا با یک همکار ارشدتر که مرا معرفی می‌کند یا گفتگو را هدایت می‌کند.") },
          { v: 4, t: L("I identify who my project affects, talk with product and other partners myself, and agree timelines and goals for my part of the work.",
                       "خودم شناسایی می‌کنم پروژه‌ام روی چه کسانی اثر دارد، با همکاران محصول و شریکان دیگر صحبت می‌کنم و زمان‌بندی و اهداف بخش خودم را هماهنگ می‌کنم.") },
          { v: 5, t: L("I'm the point of contact stakeholders come to. I coordinate timelines and goals across several stakeholders or projects, and share context before people have to ask.",
                       "نقطه‌ی تماس ذی‌نفعان هستم. زمان‌بندی و اهداف را بین چند ذی‌نفع یا چند پروژه هماهنگ می‌کنم و context را پیش از آن‌که کسی بپرسد به اشتراک می‌گذارم.") },
          { v: 6, t: L("I lead across several groups whose priorities compete, and I steer the outcome toward what's best for the organisation, not for any one group.",
                       "میان چند گروه که اولویت‌هایشان با هم رقابت دارد رهبری می‌کنم و نتیجه را به سمت نفع سازمان هدایت می‌کنم، نه نفع یک گروه.") },
          { v: 7, t: L("I align cross-functional leaders on goals, strategy and priorities, and my input shapes decisions made by senior leadership, beyond my own teams.",
                       "رهبران cross-functional را روی اهداف، استراتژی و اولویت‌ها همسو می‌کنم و نظرم روی تصمیم‌های رهبری ارشد اثر می‌گذارد، فراتر از تیم‌های خودم.") }
        ] },

      { id: "i2", lens: "influence",
        q: L("What effect do you usually have on the people around you?",
             "معمولا چه اثری روی آدم‌های اطرافتان دارید؟"),
        options: [
          { v: 3, t: L("I work well in my team: I give and take feedback calmly, report status honestly and early, and offer help when I can.",
                       "عضو خوبی از تیم هستم: بازخورد را آرام می‌دهم و می‌گیرم، وضعیت را صادقانه و زود گزارش می‌دهم و هر جا بتوانم کمک پیشنهاد می‌کنم.") },
          { v: 4, t: L("I mentor teammates and newer colleagues, for example by walking someone through their first big task, reviewing their work and explaining how we do things here.",
                       "هم‌تیمی‌ها و همکاران تازه‌کارتر را mentor می‌کنم، مثلا با همراهی کسی در اولین task بزرگش، review کارش و توضیح این‌که اینجا کارها چطور انجام می‌شود.") },
          { v: 5, t: L("Two or three engineers regularly look to me for direction, and I give it, keeping them aligned on what we're building and why.",
                       "دو سه مهندس مرتب برای جهت گرفتن سراغ من می‌آیند. من جهت می‌دهم و همسوشان نگه می‌دارم که چه می‌سازیم و چرا.") },
          { v: 6, t: L("I mentor others technically with continuous feedback, hold a high bar for standards and teamwork myself, and see the people around me ship faster and succeed more.",
                       "از نظر فنی با بازخورد پیوسته mentor می‌کنم، خودم استاندارد بالا و کار تیمی را رعایت می‌کنم، و می‌بینم آدم‌های اطرافم سریع‌تر تحویل می‌دهند و موفق‌ترند.") },
          { v: 7, t: L("I build an environment where people participate and collaborate, and I grow the people and practices so others can carry the work on without me.",
                       "محیطی می‌سازم که آدم‌ها در آن مشارکت و همکاری می‌کنند، و آدم‌ها و رویه‌ها را رشد می‌دهم تا دیگران بتوانند کار را بدون من ادامه دهند.") }
        ] },

      { id: "i3", lens: "influence",
        q: L("When people disagree or priorities clash, what do you usually do?",
             "وقتی آدم‌ها اختلاف دارند یا اولویت‌ها با هم تصادم می‌کنند، معمولا چه می‌کنید؟"),
        options: [
          { v: 3, t: L("When teammates disagree, I give my view, then follow what the team decides, and I ask a more senior colleague for help if the tension doesn't ease.",
                       "وقتی هم‌تیمی‌ها اختلاف دارند، نظرم را می‌گویم و بعد از تصمیم تیم پیروی می‌کنم؛ اگر تنش فروکش نکرد، از یک همکار ارشدتر کمک می‌خواهم.") },
          { v: 4, t: L("When I notice friction inside my team or with a neighbouring one, I act on it by raising it with the people involved, instead of hoping it fades.",
                       "وقتی در تیم خودم یا با تیمی همسایه اصطکاک می‌بینم، به‌جای این‌که امیدوار باشم خودش تمام شود، با افراد درگیر صحبت می‌کنم و موضوع را مطرح می‌کنم.") },
          { v: 5, t: L("When teams disagree, I notice early and steer everyone toward the same page, working for the organisation's benefit rather than for either side.",
                       "وقتی تیم‌ها اختلاف دارند، زود متوجه می‌شوم و همه را به هم‌صفحگی می‌رسانم، با نگاه به نفع سازمان، نه به نفع یکی از دو طرف.") },
          { v: 6, t: L("When groups I work with want conflicting things, I resolve the clash in priorities and align the outcome with the organisation's interests.",
                       "وقتی گروه‌هایی که با آن‌ها کار می‌کنم چیزهای متضاد می‌خواهند، تعارض اولویت‌ها را حل می‌کنم و نتیجه را با منافع سازمان همسو می‌کنم.") },
          { v: 7, t: L("When teams hold opposed views, they bring it to me. I can state each side's position well enough that both recognise it, and I help them reach consensus.",
                       "وقتی تیم‌ها نظرهای متضاد دارند، موضوع را پیش من می‌آورند. نقطه‌نظر هر طرف را آن‌قدر خوب بیان می‌کنم که هر دو خودشان را در آن ببینند، و به اجماع کمک می‌کنم.") }
        ] },

      /* ======================= EXPERTISE ======================= */
      { id: "e1", lens: "expertise",
        q: L("How deep and how broad are your skills and knowledge?",
             "مهارت و دانش شما چقدر عمیق و چقدر گسترده است؟"),
        options: [
          { v: 3, t: L("I have a solid grasp of the basics of my area's architecture, technologies and product, and I can explain its main flows in plain words.",
                       "درکی پایه‌ای ولی محکم از معماری، تکنولوژی‌ها و محصول حوزه‌ی کاری‌ام دارم و جریان‌های اصلی آن را به زبان ساده توضیح می‌دهم.") },
          { v: 4, t: L("Beyond everyday coding, I have at least one major skill the team relies on, such as security, data analysis, production health or integration testing.",
                       "فراتر از کدنویسی روزمره، دست‌کم یک مهارت عمده دارم که تیم به آن تکیه می‌کند، مثل امنیت، تحلیل داده، سلامت production یا تست integration.") },
          { v: 5, t: L("My colleagues trust me as the deep expert in one specific area or as a generalist with wide range, and I do several kinds of work beyond coding.",
                       "همکارانم یا به‌عنوان متخصص عمیق یک زمینه‌ی مشخص به من اعتماد می‌کنند یا به‌عنوان generalist با دامنه‌ی گسترده، و چند نوع کار فراتر از کدنویسی هم انجام می‌دهم.") },
          { v: 6, t: L("I'm the go-to person in my specialty, and I also know systems, technologies and processes broadly enough to advise well outside it.",
                       "در حوزه‌ی تخصصی‌ام مرجع هستم و از سیستم‌ها، تکنولوژی‌ها و فرایندها هم آن‌قدر گسترده می‌دانم که بیرون از آن حوزه هم بتوانم مشورت خوبی بدهم.") },
          { v: 7, t: L("I hold both broad and deep knowledge of systems, technologies and processes, and I'm the de facto authority, or the official owner, of a major system.",
                       "دانشی هم عمیق و هم گسترده از سیستم‌ها، تکنولوژی‌ها و فرایندها دارم و مرجع عملی (de facto) یا مسئول رسمی یک سیستم عمده هستم.") }
        ] },

      { id: "e2", lens: "expertise",
        q: L("How well do you know the product and business behind your work?",
             "محصول و کسب‌وکار پشت کارتان را چقدر خوب می‌شناسید؟"),
        options: [
          { v: 3, t: L("I understand the business need behind the tasks I pick up, and I ask when the reason for a task isn't clear to me.",
                       "نیاز کسب‌وکاری پشت taskهایی را که برمی‌دارم می‌فهمم، و وقتی دلیل یک task برایم روشن نیست می‌پرسم.") },
          { v: 4, t: L("I know my area's product and business needs well, and I take part in business decisions alongside product managers instead of just receiving requirements.",
                       "نیازهای محصولی و کسب‌وکاری حوزه‌ام را خوب می‌شناسم و به‌جای این‌که فقط نیازمندی‌ها را تحویل بگیرم، کنار مدیران محصول در تصمیم‌های کسب‌وکاری مشارکت می‌کنم.") },
          { v: 5, t: L("I know the product and the business well enough to make the trade-offs myself, so a product manager rarely has to decide for me.",
                       "محصول و کسب‌وکار را آن‌قدر خوب می‌شناسم که خودم trade-offها را تصمیم بگیرم، و کمتر پیش می‌آید یک مدیر محصول به‌جای من تصمیم بگیرد.") },
          { v: 6, t: L("I help decide which problems are worth solving, drawing on what I know about the product, its users and the business, and leaders ask for my view.",
                       "در تعیین این‌که چه مساله‌هایی ارزش حل شدن دارند نقش دارم، با تکیه بر شناختم از محصول، کاربران و کسب‌وکار، و رهبران نظرم را می‌پرسند.") },
          { v: 7, t: L("I understand the product and its users across a whole area, and teams and leaders rely on that understanding when they decide what the area needs.",
                       "محصول و کاربرانش را در کل یک حوزه می‌شناسم، و تیم‌ها و رهبران وقتی تصمیم می‌گیرند آن حوزه به چه نیاز دارد، به همین شناخت تکیه می‌کنند.") }
        ] },

      { id: "e3", lens: "expertise",
        q: L("How well do you know the architecture of the systems you work on?",
             "معماری سیستم‌هایی که رویشان کار می‌کنید را چقدر خوب می‌شناسید؟"),
        options: [
          { v: 3, t: L("I know the basics of how my area's architecture fits together and where my code sits in it, and I ask about the rest.",
                       "اصول کلی معماری حوزه‌ام را می‌دانم و می‌دانم کدم کجای آن قرار می‌گیرد؛ درباره‌ی بقیه‌اش می‌پرسم.") },
          { v: 4, t: L("I know my system's architecture thoroughly, and I use that knowledge to improve it and the team's performance, not just to finish my own tasks.",
                       "معماری سیستمم را کامل می‌شناسم و از این دانش برای بهبود سیستم و عملکرد تیم استفاده می‌کنم، نه فقط برای تمام کردن taskهای خودم.") },
          { v: 5, t: L("I know my team's systems in detail and can tell which short-term compromises are safe and which will cost us later.",
                       "سیستم‌های تیمم را با جزئیات می‌شناسم و می‌توانم بگویم کدام مصالحه‌ی کوتاه‌مدت بی‌خطر است و کدام بعدا گران تمام می‌شود.") },
          { v: 6, t: L("I know the architectures across a whole product area, and I steer teams toward the right design decisions, including on systems I don't work on directly.",
                       "معماری‌ها را در کل یک حوزه‌ی محصولی می‌شناسم و تیم‌ها را به تصمیم‌های طراحی درست می‌رسانم، حتی روی سیستم‌هایی که مستقیم رویشان کار نمی‌کنم.") },
          { v: 7, t: L("I'm the authority on a major system: when someone questions its architecture, people come to me, and teams across the product area follow my guidance.",
                       "روی یک سیستم عمده مرجع هستم: وقتی کسی معماری‌اش را زیر سوال می‌برد سراغ من می‌آیند، و تیم‌های سراسر آن حوزه‌ی محصولی راهنمایی‌ام را دنبال می‌کنند.") }
        ] },

      /* ======================= IMPACT ======================= */
      { id: "m1", lens: "impact",
        q: L("Looking back over the last year, what changed because of your work?",
             "با نگاه به یک سال گذشته، به‌خاطر کار شما چه چیزی تغییر کرد؟"),
        options: [
          { v: 3, t: L("My tasks landed on time with few defects, and they didn't create rework for the people who built on top of them.",
                       "taskهایم سر وقت و با ایراد کم تحویل شدند و برای کسانی که کارشان را روی آن‌ها ساختند دوباره‌کاری ایجاد نکردند.") },
          { v: 4, t: L("A whole project I planned and ran shipped and stayed stable in production, and the people depending on it got what they needed.",
                       "پروژه‌ی کاملی که برنامه‌ریزی و اجرا کردم منتشر شد و در production پایدار ماند، و کسانی که به آن وابسته بودند به آنچه لازم داشتند رسیدند.") },
          { v: 5, t: L("Something I built launched, was adopted and stayed stable, and it had a tangible effect for the organisation, not just for my own project.",
                       "چیزی که ساختم launch شد، پذیرفته شد و پایدار ماند، و برای سازمان اثری ملموس داشت، نه فقط برای پروژه‌ی خودم.") },
          { v: 6, t: L("The strategy I set produced results for the organisation as a whole, going well beyond what any single team shipped on its own.",
                       "استراتژی‌ای که تعیین کردم برای کل سازمان نتیجه ساخت، بسیار فراتر از آنچه هر تیم به‌تنهایی تحویل داده بود.") },
          { v: 7, t: L("Because of my work and decisions, the company can now do things it couldn't before, and several parts of the organisation rely on that capability.",
                       "به‌خاطر کار و تصمیم‌های من، شرکت حالا کارهایی می‌تواند بکند که قبلا نمی‌توانست، و چند بخش از سازمان به این توانمندی تکیه می‌کنند.") }
        ] },

      { id: "m2", lens: "impact",
        q: L("If a review panel asked for proof of your results, what could you show?",
             "اگر پنل ارزیابی مدرک نتایجتان را بخواهد، چه چیزی نشان می‌دهید؟"),
        options: [
          { v: 3, t: L("I can show the tasks I completed, with review feedback and notes from teammates about the quality and pace of my work.",
                       "taskهایی را که تمام کرده‌ام نشان می‌دهم، همراه با بازخورد review و یادداشت هم‌تیمی‌ها درباره‌ی کیفیت و سرعت کارم.") },
          { v: 4, t: L("I can show the plan, tests, docs, dashboards and runbooks that prove the whole project was delivered and is running in production.",
                       "برنامه، تست، مستندات، داشبوردها و runbookهایی را نشان می‌دهم که ثابت می‌کنند کل پروژه تحویل شده و در production در حال اجراست.") },
          { v: 5, t: L("I can show metrics tied to the outcome I drove, such as adoption, latency or cost, measured before and after the work launched.",
                       "metricهایی را نشان می‌دهم که به نتیجه‌ای که پیش بردم وصل‌اند، مثل میزان استفاده، latency یا هزینه، پیش و پس از launch کار.") },
          { v: 6, t: L("I can show results across several teams, sustained over a year or more, that trace back to the direction I set.",
                       "نتایجی را در چند تیم نشان می‌دهم که بیش از یک سال پایدار مانده و به جهتی که تعیین کردم برمی‌گردد.") },
          { v: 7, t: L("I can show a capability the whole organisation now has, and the decisions of mine that made it possible, with people from other teams who can confirm it.",
                       "توانمندی‌ای را نشان می‌دهم که حالا کل سازمان دارد، و تصمیم‌های خودم که آن را ممکن کرد، همراه با آدم‌هایی از تیم‌های دیگر که می‌توانند تایید کنند.") }
        ] },

      { id: "m3", lens: "impact",
        q: L("When you step away from a piece of work, what stays behind?",
             "وقتی از یک کار کنار می‌کشید، چه چیزی از آن می‌ماند؟"),
        options: [
          { v: 3, t: L("The tasks I delivered are merged and working, and the team maintains them. Once the work is done, nothing else needs me to stay involved.",
                       "taskهایی که تحویل دادم ادغام شده‌اند و کار می‌کنند و تیم نگهداری‌شان می‌کند. وقتی کار تمام شد، دیگر چیزی نیست که نیاز باشد من درگیرش بمانم.") },
          { v: 4, t: L("Others keep running what I built using the runbooks, docs and processes I wrote, and they rarely need to ask me how it works.",
                       "دیگران چیزی را که ساختم با runbookها، مستندات و فرایندهایی که نوشته‌ام اداره می‌کنند، و کم پیش می‌آید برای کارکردنش از من بپرسند.") },
          { v: 5, t: L("A solution or practice I standardised or simplified is now used by teams beyond mine, who adopted it because it made their work easier.",
                       "راه‌حل یا رویه‌ای که استاندارد یا ساده‌اش کردم حالا در تیم‌های دیگر هم استفاده می‌شود، چون کار آن‌ها را راحت‌تر کرد.") },
          { v: 6, t: L("Practices and standards I introduced are used across the organisation and still shape how teams work, including teams I don't work with directly.",
                       "رویه‌ها و استانداردهایی که معرفی کردم در سراسر سازمان استفاده می‌شوند و هنوز شکل کار تیم‌ها را تعیین می‌کنند، از جمله تیم‌هایی که مستقیم با آن‌ها کار نمی‌کنم.") },
          { v: 7, t: L("People I developed, systems I shaped and practices I established keep running and improving long after any single project of mine has ended.",
                       "آدم‌هایی که رشد دادم، سیستم‌هایی که شکل دادم و رویه‌هایی که بنا نهادم، مدت‌ها بعد از پایان هر پروژه‌ی من همچنان ادامه دارند و بهتر می‌شوند.") }
        ] }
    ],

    /* Habits that never leave the ladder: rated not yet / sometimes / consistently. */
    habits: [
      { id: "hb1", habit: "citizenship",
        t: L("I share what I learn: a short demo, a docs fix, a talk or an answer in a public channel, so others don't have to rediscover it.",
             "آنچه یاد می‌گیرم را به اشتراک می‌گذارم: یک دموی کوتاه، یک اصلاح در مستندات، یک سخنرانی یا پاسخی در کانال عمومی، تا دیگران مجبور نباشند دوباره کشفش کنند.") },
      { id: "hb2", habit: "citizenship",
        t: L("I take part in hiring: I join interviews when asked, prepare for them properly, and write feedback that others can act on.",
             "در جذب نیرو مشارکت می‌کنم: وقتی از من بخواهند در مصاحبه‌ها شرکت می‌کنم، خوب آماده می‌شوم و بازخوردی می‌نویسم که دیگران بتوانند بر اساس آن تصمیم بگیرند.") },
      { id: "hb3", habit: "citizenship",
        t: L("When something in our team's environment or processes keeps slowing people down, I fix it or raise it instead of working around it.",
             "وقتی چیزی در محیط یا فرایندهای تیم مدام سرعت آدم‌ها را می‌گیرد، به‌جای دور زدنش آن را درست می‌کنم یا مطرح می‌کنم.") },

      { id: "hb4", habit: "teamwork",
        t: L("I deliver what I commit to, tell people early when I can't, and admit my mistakes without making excuses.",
             "به آنچه تعهد می‌کنم عمل می‌کنم، اگر نتوانم زود خبر می‌دهم و اشتباه‌هایم را بدون بهانه می‌پذیرم.") },
      { id: "hb5", habit: "teamwork",
        t: L("I give feedback openly and kindly, and I take it without getting defensive, including when it's about my own work.",
             "بازخورد را صریح و مهربانانه می‌دهم و بدون حالت دفاعی می‌گیرم، حتی وقتی درباره‌ی کار خودم است.") },
      { id: "hb6", habit: "teamwork",
        t: L("I treat people with humility, respect, trust and transparency, even under pressure, and I speak up when someone is being left out.",
             "حتی زیر فشار با فروتنی، احترام، اعتماد و شفافیت رفتار می‌کنم، و وقتی کسی کنار گذاشته می‌شود، حرف می‌زنم.") },

      { id: "hb7", habit: "practices",
        t: L("My code is clean, documented and testable, and I write tests for my changes before I ask anyone to review them.",
             "کدم تمیز، مستند و تست‌پذیر است و پیش از آن‌که از کسی بخواهم review کند، برای تغییرهایم تست می‌نویسم.") },
      { id: "hb8", habit: "practices",
        t: L("I take part in code review for real: I read changes carefully, leave comments that are useful and kind, and respond to the ones I get.",
             "در code review واقعا مشارکت می‌کنم: تغییرها را با دقت می‌خوانم، کامنت‌های مفید و مهربانانه می‌گذارم و به کامنت‌هایی که می‌گیرم جواب می‌دهم.") },
      { id: "hb9", habit: "practices",
        t: L("I leave docs, processes and code health a little better than I found them, fixing small problems as I go instead of waiting to be asked.",
             "مستندات، فرایندها و سلامت کد را کمی بهتر از آنچه پیدا کرده‌ام رها می‌کنم، و مشکل‌های کوچک را همان موقع درست می‌کنم، نه این‌که منتظر بمانم کسی بخواهد.") }
    ]
  };
})();

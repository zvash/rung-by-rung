/* "What would you do?" scenarios, part B: L5 and L6 situations.
   Each option carries the level of thinking it reflects (lv 2..7), or lv 0 + flag "misfire" for a plausible move that backfires.
   All situations are illustrative composites. */
(function () {
  "use strict";
  var S = window.SWE,
    L = S.L;
  S.data.scenarios = S.data.scenarios || [];
  S.data.scenarios.push(
    {
      id: "s-shared-lib",
      level: "L5",
      lenses: ["influence", "challenge"],
      title: L("The library nobody owns", "کتابخانه‌ی بدون مسئول مشخص"),
      setup: L(
        "Three teams depend on an internal library that has no owner. It has a memory leak that causes a weekly incident in your service. The fix is a day's work, but the code lives in someone else's repo.",
        "سه تیم به یک کتابخانه‌ی داخلی وابسته‌اند که مسئول مشخصی ندارد. نشتی حافظه دارد و هر هفته باعث یک incident در سرویس شما می‌شود. رفعش کار یک روز است، ولی کد در repo تیم دیگری است.",
      ),
      question: L("What do you do?", "چه می‌کنید؟"),
      options: [
        {
          t: L(
            "Fork the library into your own repo and fix it there.",
            "کتابخانه را در repo خودتان fork می‌کنید و همان‌جا رفعش می‌کنید.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "It solves your incident and creates a fourth version of the library. The other two teams keep the leak, and now nobody can say which copy is the real one. You've avoided the ownership problem, not solved it.",
            "incident سرویس شما رفع می‌شود، اما نسخه‌ی چهارمی از کتابخانه ایجاد می‌کنید. نشتی برای دو تیم دیگر باقی می‌ماند و مرجع اصلی نامشخص می‌شود. مساله‌ی ownership حل نشده است.",
          ),
        },
        {
          t: L(
            "File a bug in their repo with the incident data and wait for someone to pick it up.",
            "در repo آن‌ها یک باگ با داده‌ی incident ثبت می‌کنید و منتظر می‌مانید کسی آن را بردارد.",
          ),
          lv: 3,
          why: L(
            "Correct process, and with no owner there's nobody to pick it up. The incident repeats weekly while the ticket sits. Filing is the start of the work here, not the end of it.",
            "ثبت باگ درست است، اما کسی مسئول رسیدگی نیست و incident هر هفته تکرار می‌شود. اینجا ثبت ticket آغاز پیگیری است، نه پایان مسئولیت.",
          ),
        },
        {
          t: L(
            "Fix it, open a PR to the library repo, ask the last committer to review, and tell the other two teams a fix is coming.",
            "رفعش می‌کنید، یک PR به repo کتابخانه می‌زنید، از آخرین committer می‌خواهید review کند و به دو تیم دیگر خبر می‌دهید که رفع در راه است.",
          ),
          lv: 4,
          why: L(
            "You own the outcome for your service: the leak is fixed in the right place and the affected teams know. That's L4 initiative, and it stops at the fix.",
            "نتیجه را برای سرویس خودتان own می‌کنید: نشتی در جای درست رفع می‌شود و تیم‌های تحت تاثیر از تغییر باخبرند. این ابتکار L4 است و به همان رفع ختم می‌شود.",
          ),
        },
        {
          t: L(
            "Fix the leak, open a PR in the library repo, ask the last committer to review, and notify the other two teams. Then send all three team leads a short proposal for a library owner and a small maintenance rotation, volunteering your team for the first quarter.",
            "نشتی حافظه را رفع می‌کنید، در repo کتابخانه PR می‌زنید، از آخرین committer می‌خواهید review کند و به دو تیم دیگر خبر می‌دهید. سپس برای لیدهای هر سه تیم پیشنهاد کوتاهی می‌فرستید که مسئول کتابخانه و برنامه‌ای ساده برای نگهداری نوبتی آن مشخص می‌کند و تیم خودتان را برای فصل اول داوطلب می‌کنید.",
          ),
          lv: 5,
          why: L(
            "You fix the gap that produced the problem: a shared thing with no owner. L5 notices the pattern, brings the affected teams to one direction and offers to start it.",
            "علت ساختاری مشکل را رفع می‌کنید: کتابخانه‌ی مشترک بدون مسئول مشخص. L5 تیم‌ها را همسو می‌کند و برای شروع اصلاح داوطلب می‌شود.",
          ),
        },
      ],
      takeaway: L(
        "L4 fixes the problem. L5 fixes the ownership gap that produced it.",
        "L4 مشکل را رفع می‌کند. L5 کاستی ownership را که باعث آن شده هم برطرف می‌کند.",
      ),
    },

    {
      id: "s-rewrite",
      level: "L5",
      lenses: ["challenge", "impact"],
      title: L("The rewrite proposal", "پیشنهاد بازنویسی"),
      setup: L(
        "A teammate proposes rewriting the legacy billing service: “it's a mess, and we'll move faster afterwards.” It handles all of the company's revenue. Leadership asks whether it's worth it.",
        "یک هم‌تیمی پیشنهاد بازنویسی سرویس قدیمی billing را می‌دهد: «به‌هم‌ریخته است و بعدش سریع‌تر می‌شویم.» تمام درآمد شرکت از آن می‌گذرد. رهبری می‌پرسد می‌ارزد یا نه.",
      ),
      question: L("What's your contribution?", "سهم شما چیست؟"),
      options: [
        {
          t: L(
            "Support it publicly. Engineers have wanted this for years and morale matters.",
            "علنی حمایتش می‌کنید. مهندس‌ها سال‌هاست این را می‌خواهند و روحیه مهم است.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "Morale is real, and it isn't the question leadership asked. Backing a rewrite of the revenue path because it's popular puts the company's money behind a feeling. The decision needs outcomes, costs and an exit.",
            "روحیه مهم است، اما سوال رهبران درباره‌ی توجیه سرمایه‌گذاری است. محبوب بودن بازنویسی مسیر درآمد کافی نیست. نتیجه، هزینه و معیار توقف باید روشن باشند.",
          ),
        },
        {
          t: L(
            "Review the proposal on its technical merits and give feedback on the new architecture.",
            "پیشنهاد را از نظر فنی بررسی می‌کنید و درباره‌ی معماری جدید بازخورد می‌دهید.",
          ),
          lv: 4,
          why: L(
            "A solid technical review, which is what was asked of a good engineer. The gap is the question beneath it: what outcome is the rewrite for, and what are the alternatives? A good design for the wrong bet is still the wrong bet.",
            "بررسی فنی مفید است، اما سوال اصلی هنوز بی‌پاسخ است: بازنویسی چه نتیجه‌ای دارد و گزینه‌های دیگر چیست؟ طراحی خوب، انتخاب سرمایه‌گذاری نادرست را جبران نمی‌کند.",
          ),
        },
        {
          t: L(
            "Ask what the rewrite is meant to deliver (speed, reliability, cost), measure today's pain, and compare it with incremental changes whose milestones each deliver value.",
            "نتیجه‌ی مطلوب بازنویسی را مشخص می‌کنید، مثل سرعت، اتکاپذیری یا هزینه. مشکل فعلی را اندازه می‌گیرید و با بهبودهای تدریجی مقایسه می‌کنید که هر milestone آن‌ها ارزش مستقلی دارد.",
          ),
          lv: 5,
          why: L(
            "You define the problem before choosing the solution and keep the simplest path that works on the table. L5 decides when to improve and when to rebuild, with evidence.",
            "پیش از انتخاب راه‌حل مساله را تعریف می‌کنید و ساده‌ترین مسیر کارا را روی میز نگه می‌دارید. L5 تشخیص می‌دهد کِی بهبود بدهد و کِی از نو بسازد، با مدرک.",
          ),
        },
        {
          t: L(
            "Clarify the rewrite's goals, measure the current problems, and compare a rewrite with incremental improvements that deliver value at each milestone. Present the choice to leadership as a portfolio decision: what else the team would forgo for a year, the risk to revenue, and the criteria for stopping the chosen approach.",
            "هدف‌های بازنویسی را روشن می‌کنید، مشکل‌های فعلی را اندازه می‌گیرید و بازنویسی را با بهبودهای تدریجی مقایسه می‌کنید که هر milestone آن‌ها ارزش مستقلی دارد. سپس تصمیم را برای مدیران در چارچوب کل برنامه‌های سازمان توضیح می‌دهید: تیم طی یک سال از چه کارهای دیگری صرف‌نظر می‌کند، چه ریسکی متوجه درآمد است و با چه معیارهایی باید اجرای رویکرد انتخاب‌شده را متوقف کرد.",
          ),
          lv: 6,
          why: L(
            "You put the choice in the context of everything else the organisation could do. L6 helps decide which problems the organisation works on at all, and makes the trade-off explicit for the people who own it.",
            "هزینه‌ی فرصت را هم می‌سنجید. L6 در انتخاب مساله‌های سازمان نقش دارد و trade-offها را برای تصمیم‌گیران روشن می‌کند.",
          ),
        },
      ],
      takeaway: L(
        "At L5 the question is “what problem are we solving, and is there a smaller way?” At L6 you also frame the trade-off against everything else the organisation could do.",
        "در L5 پرسش این است: «چه مساله‌ای را حل می‌کنیم و راه کوچک‌تری هست؟» در L6 trade-off را با همه‌ی کارهای دیگری که سازمان می‌توانست بکند هم می‌سنجید.",
      ),
    },

    {
      id: "s-recurring",
      level: "L5",
      lenses: ["challenge", "impact"],
      title: L("The same incident, again", "همان incident، باز هم"),
      setup: L(
        "It's the fourth time this quarter that a stale cache has served wrong prices. Each time someone fixes it within an hour and writes “cache purge” in the incident log.",
        "این چهارمین بار در این فصل است که یک cache کهنه قیمت‌های غلط نشان می‌دهد. هر بار کسی ظرف یک ساعت درستش می‌کند و در لاگ incident می‌نویسد «cache purge».",
      ),
      question: L("What do you do about it?", "درباره‌اش چه می‌کنید؟"),
      options: [
        {
          t: L(
            "Add a cron that purges the cache every ten minutes and call it done.",
            "یک cron اضافه می‌کنید که هر ده دقیقه cache را پاک کند و کار را تمام شده می‌دانید.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "The symptom goes quiet and the cause stays: you now have wrong prices for up to ten minutes, on a schedule, plus a cache that's no longer doing its job. The incidents become invisible, which is worse.",
            "نشانه‌ی مشکل را پنهان می‌کنید، اما علت باقی می‌ماند. قیمت‌ها همچنان تا ده دقیقه غلط‌اند و cache هم کارایی خود را از دست می‌دهد. دیده نشدن incident به معنای حل آن نیست.",
          ),
        },
        {
          t: L(
            "Fix it quickly again and add a line to the runbook.",
            "باز هم سریع رفعش می‌کنید و یک خط به runbook اضافه می‌کنید.",
          ),
          lv: 3,
          why: L(
            "Fast and responsible for the incident in front of you, and the runbook helps the next responder. It leaves the cause where it is, so there will be a fifth.",
            "incident فعلی را سریع و مسئولانه رفع می‌کنید و runbook به نفر بعد کمک می‌کند. اما علت هنوز باقی است، پس مشکل دوباره تکرار خواهد شد.",
          ),
        },
        {
          t: L(
            "Write a proper postmortem for this one, with a timeline and action items, and fix the specific trigger.",
            "برای این incident، postmortem کامل با timeline و اقدام‌ها می‌نویسید و عامل مشخص بروز آن را برطرف می‌کنید.",
          ),
          lv: 4,
          why: L(
            "You do the incident properly: cause chain, owners, alerts. That is a strong L4 habit. What it doesn't do is connect this one to the three before it.",
            "incident را درست مدیریت می‌کنید، با زنجیره‌ی علت‌ها، مسئولان و alertها. این عادت قوی L4 است، اما ارتباط آن با سه مورد قبلی هنوز بررسی نشده است.",
          ),
        },
        {
          t: L(
            "Pull the four incidents together, find the common cause (no invalidation when a price changes), propose a fix that removes the class, and get it prioritised with a number: hours lost and customer tickets.",
            "چهار incident را مقایسه می‌کنید و علت مشترک، یعنی نبود invalidation هنگام تغییر قیمت، را پیدا می‌کنید. راه‌حل پیشگیری از این نوع incident را با شواهد ساعت‌های ازدست‌رفته و ticketهای مشتری در اولویت قرار می‌دهید.",
          ),
          lv: 5,
          why: L(
            "You look for the recurring problem and remove its cause, then make the case in the language of cost. That's the L5 move: from handling incidents to ending a kind of incident.",
            "علت تکرارشونده را برطرف می‌کنید و ضرورت کار را با هزینه‌ی مشکل توضیح می‌دهید. این رفتار L5 است: پیشگیری از یک نوع incident به‌جای رفع موردی آن.",
          ),
        },
      ],
      takeaway: L(
        "L4 handles each incident well. L5 notices that it's the same incident and removes the cause, with a number attached.",
        "L4 هر incident را خوب مدیریت می‌کند. L5 الگوی تکرار را می‌بیند و علت را با اتکا به شواهد عددی برطرف می‌کند.",
      ),
    },

    {
      id: "s-glue",
      level: "L5",
      lenses: ["influence", "contribution"],
      title: L("The invisible work", "کار نامرئی"),
      setup: L(
        "Over six months you've onboarded three people, written the team's runbooks and chased two cross-team dependencies. Your manager says your coding output is “a bit low”, and promotion planning is next month.",
        "در شش ماه گذشته سه نفر را onboard کرده‌اید، runbookهای تیم را نوشته‌اید و دو وابستگی میان‌تیمی را پیگیری کرده‌اید. مدیرتان می‌گوید خروجی کدنویسی‌تان «کمی کم» است و برنامه‌ریزی ارتقا ماه بعد است.",
      ),
      question: L("What do you do?", "چه می‌کنید؟"),
      options: [
        {
          t: L(
            "Complain in the team channel that nobody values glue work.",
            "در کانال تیم شکایت می‌کنید که هیچ‌کس برای glue work ارزش قائل نیست.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "The frustration is legitimate and the channel is the wrong place: it makes you the person who complains rather than the person who changed something. Evidence and a proposal land better than a grievance.",
            "ناراحتی قابل‌درک است، اما گلایه در کانال لزوما تغییری ایجاد نمی‌کند. شواهد اثرگذاری و پیشنهاد مشخص، گفتگو را به نتیجه نزدیک‌تر می‌کند.",
          ),
        },
        {
          t: L(
            "Stop the extra work and focus on tickets until the cycle is over.",
            "کارهای اضافه را کنار می‌گذارید و تا پایان چرخه روی ticketها تمرکز می‌کنید.",
          ),
          lv: 3,
          why: L(
            "A pragmatic reaction to a signal. It protects the metric, and it quietly drops the work that made the team faster. Nobody notices until the next new hire takes ten weeks to ship.",
            "از شاخص کدنویسی خود محافظت می‌کنید، اما کارهایی را که سرعت تیم را افزایش داده‌اند رها می‌کنید. ممکن است اثرش تا زمانی دیده نشود که تازه‌وارد بعدی ده هفته برای اولین تحویل زمان بخواهد.",
          ),
        },
        {
          t: L(
            "List what you did with its outcomes (time to first PR for new hires, incidents the runbooks helped resolve) and bring it to your manager as evidence.",
            "آنچه را انجام داده‌اید همراه با نتایجش فهرست می‌کنید (زمان تا اولین PR برای تازه‌واردها، incidentهایی که runbookها در رفعشان کمک کرد) و به‌عنوان مدرک پیش مدیرتان می‌برید.",
          ),
          lv: 4,
          why: L(
            "You turn invisible work into evidence others can quote, which is exactly what it was missing. It makes your case, and it leaves the arrangement as it was: the work still lands on you.",
            "کار نامرئی را به شواهد قابل‌استناد تبدیل می‌کنید. پرونده قوی‌تر می‌شود، اما تقسیم مسئولیت تغییر نمی‌کند و کار همچنان روی شما می‌ماند.",
          ),
        },
        {
          t: L(
            "Document your glue work and its outcomes, including new hires' time to first PR and incidents the runbooks helped resolve, and bring the evidence to your manager. Propose rotating onboarding and runbook duty across the team and accounting for it in planning, so it doesn't fall on one person.",
            "glue work خود و نتایجش را مستند می‌کنید، از جمله زمان رسیدن تازه‌واردها به اولین PR و incidentهایی که runbookها به رفعشان کمک کرده‌اند، و این شواهد را با مدیرتان در میان می‌گذارید. پیشنهاد می‌دهید مسئولیت onboarding و نگهداری runbook بین اعضای تیم به‌صورت نوبتی تقسیم شود و در برنامه‌ریزی به حساب بیاید تا همیشه بر عهده‌ی یک نفر نباشد.",
          ),
          lv: 5,
          why: L(
            "You make the evidence and fix the system that produced the imbalance. L5 standardises what keeps recurring and shares it, which also turns glue into a visible, scaled practice.",
            "هم شواهد فراهم می‌کنید و هم فرایند نابرابر را اصلاح می‌کنید. L5 کار تکرارشونده را استاندارد و تقسیم می‌کند تا glue work دیده شود و به یک نفر وابسته نماند.",
          ),
        },
      ],
      takeaway: L(
        "Evidence turns invisible work into a case. A rotation turns it into a practice that doesn't depend on you.",
        "شواهد، کار نامرئی را در پرونده نشان می‌دهند. نوبت‌بندی، آن را به رویه‌ای مستقل از شما تبدیل می‌کند.",
      ),
    },

    {
      id: "s-no-owner",
      level: "L5",
      lenses: ["contribution", "influence"],
      title: L("The orphaned service", "سرویس بی‌صاحب"),
      setup: L(
        "A service that does the checkout calculations lost its owners when two engineers left. Nobody has touched it in months. While reading it for something else, you find it uses a library with a known vulnerability.",
        "سرویسی که محاسبه‌های checkout را انجام می‌دهد با رفتن دو مهندس صاحبانش را از دست داد. ماه‌هاست کسی به آن دست نزده. هنگام بررسی کد آن برای کاری دیگر، متوجه می‌شوید از کتابخانه‌ای با آسیب‌پذیری شناخته‌شده استفاده می‌کند.",
      ),
      question: L("What do you do?", "چه می‌کنید؟"),
      options: [
        {
          t: L(
            "Tell the security team and let them handle it.",
            "به تیم امنیت می‌گویید و می‌گذارید خودشان رسیدگی کنند.",
          ),
          lv: 3,
          why: L(
            "The right reflex: the risk is reported to the people who track it. With no owner to patch, though, “handled” means a ticket nobody can act on, in a service that touches money.",
            "گزارش ریسک درست است، اما بدون مسئول patch کردن، ticket قابل‌اقدام نیست. این سرویس در مسیر پرداخت قرار دارد و پیگیری لازم است.",
          ),
        },
        {
          t: L(
            "Patch the library yourself, document what you changed, and tell your manager.",
            "کتابخانه را خودتان پچ می‌کنید، تغییرهایی را که داده‌اید مستند می‌کنید و به مدیرتان می‌گویید.",
          ),
          lv: 4,
          why: L(
            "You take responsibility for the outcome in front of you and leave a trail. The vulnerability is gone. The reason it went unnoticed (no owner, no on-call, no one reading dependency alerts) is still there.",
            "مشکل را رفع و تغییر را مستند کرده‌اید. اما علت دیده نشدن آسیب‌پذیری باقی است: مسئول، on-call و فردی برای بررسی alertهای وابستگی مشخص نیست.",
          ),
        },
        {
          t: L(
            "Patch it, then write a one-page proposal naming who should own the service, with an on-call plan, and get it onto the next planning agenda.",
            "پچ می‌کنید و بعد یک پیشنهاد یک‌صفحه‌ای می‌نویسید که مسئول ownership سرویس و برنامه‌ی on-call را مشخص می‌کند و آن را در دستور جلسه‌ی برنامه‌ریزی بعدی می‌گذارید.",
          ),
          lv: 5,
          why: L(
            "You solve the problem and the gap behind it, with a specific proposal rather than a complaint. L5 owns the result past the immediate fix and gets other people to act.",
            "علاوه بر رفع فوری، با پیشنهاد مشخص به کاستی پشت مشکل رسیدگی می‌کنید. L5 نتیجه‌ی پایدار را own می‌کند و دیگران را برای اقدام همسو می‌کند.",
          ),
        },
        {
          t: L(
            "Patch the vulnerable library, document the change, and tell your manager. Put a one-page proposal for a service owner and on-call coverage on the next planning agenda. Then ask for an organisation-wide inventory of services without owners and propose a rule that a critical service can't lose its owner silently.",
            "کتابخانه‌ی آسیب‌پذیر را پچ می‌کنید، تغییر را مستند می‌کنید و به مدیرتان خبر می‌دهید. پیشنهاد یک‌صفحه‌ای برای تعیین مسئول سرویس و برنامه‌ی on-call را در دستور جلسه‌ی برنامه‌ریزی بعدی می‌گذارید. سپس فهرستی از سرویس‌های بدون مسئول در کل سازمان می‌خواهید و قاعده‌ای پیشنهاد می‌دهید تا هیچ سرویس حیاتی‌ای بدون اطلاع‌رسانی بی‌مسئول نماند.",
          ),
          lv: 6,
          why: L(
            "You turn one orphan into an organisational capability: nobody finds out about the next one by accident. L6 reduces complexity on purpose and prevents problems before they appear.",
            "مشکل یک سرویس را به بهبود در کل سازمان تبدیل می‌کنید تا پیدا کردن سرویس مشکل‌دار بعدی به اتفاق وابسته نباشد. L6 آگاهانه پیچیدگی را کم می‌کند و پیش از بروز مشکلات اقدام می‌کند.",
          ),
        },
      ],
      takeaway: L(
        "L4 patches the service. L5 gives it an owner. L6 makes sure no critical service can lose its owner unnoticed.",
        "L4 سرویس را پچ می‌کند. L5 برای آن مسئول مشخص می‌کند. L6 مطمئن می‌شود هیچ سرویس حیاتی بدون اطلاع دیگران، بی‌مسئول نماند.",
      ),
    },

    {
      id: "s-ai-pr",
      level: "L5",
      lenses: ["expertise", "influence"],
      title: L("The agent's pull request", "pull requestِ agent"),
      setup: L(
        "A teammate opens a 600-line PR whose description says “generated with an AI agent, tests pass”. The tests are the ones the agent wrote, and the change touches payment rounding.",
        "یک هم‌تیمی یک PR با 600 خط باز می‌کند که توضیحش می‌گوید «با یک AI agent تولید شده، تست‌ها پاس می‌شوند». تست‌ها همانی است که خود agent نوشته و تغییر بر منطق رُند کردن مبلغ پرداخت اثر می‌گذارد.",
      ),
      question: L("How do you respond?", "چه واکنشی نشان می‌دهید؟"),
      options: [
        {
          t: L(
            "Ban AI-generated PRs on the team.",
            "PRهای تولیدشده با AI را در تیم ممنوع می‌کنید.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "A reflex that feels safe and can't be enforced: the PRs will still come, just without the disclosure line. It also throws away the part of the tool that works. The risk here is in the money logic and the unreviewed tests, not in the tool.",
            "ممنوعیت ممکن است امن به نظر برسد، اما PRها احتمالا بدون اعلام استفاده از AI ادامه پیدا می‌کنند. خطر اصلی، منطق پرداخت و تست‌های بررسی‌نشده است، نه صرف استفاده از ابزار.",
          ),
        },
        {
          t: L(
            "Approve it. The tests pass and the author is someone you trust.",
            "approve می‌کنید. تست‌ها پاس می‌شوند و نویسنده کسی است که به او اعتماد دارید.",
          ),
          lv: 3,
          why: L(
            "Trust in a colleague is reasonable, and passing tests that the same agent wrote prove less than they seem to. For rounding in a payment path, the checks that matter come from production knowledge the agent doesn't have.",
            "اعتماد به همکار منطقی است، اما تست‌هایی که همان agent نوشته، تضمین کافی نیستند. بررسی درست منطق رُند کردن پرداخت به شناخت رفتار production نیاز دارد.",
          ),
        },
        {
          t: L(
            "Review it like any PR: read the diff, run the rounding edge cases you know from production, and ask for tests that cover them.",
            "مثل هر PR دیگری review می‌کنید: diff را می‌خوانید، حالت‌های مرزی رُند کردن را که از production می‌شناسید اجرا می‌کنید و تستی می‌خواهید که آن‌ها را پوشش بدهد.",
          ),
          lv: 4,
          why: L(
            "You apply your own expertise where the agent has none, and you ask for evidence rather than assurances. That's the L4 skill: knowing the system well enough to test what matters.",
            "دانش سیستم را برای بررسی مواردی به کار می‌برید که agent نمی‌داند و شواهد می‌خواهید. این مهارت L4 است: تشخیص این‌که چه چیزی واقعا باید تست شود.",
          ),
        },
        {
          t: L(
            "Read the diff, run the rounding edge cases you know from production, and ask for tests covering them. Then propose a team rule for AI-generated changes in sensitive areas: smaller diffs, human-written tests for money logic and a short checklist for reviewers.",
            "diff را می‌خوانید، حالت‌های مرزی رُند کردن را که از production می‌شناسید اجرا می‌کنید و تست‌هایی می‌خواهید که آن‌ها را پوشش دهند. سپس برای تغییرهای تولیدشده با AI در حوزه‌های حساس قاعده‌ای برای تیم پیشنهاد می‌دهید: diffهای کوچک‌تر، تست‌هایی که انسان برای محاسبات مالی نوشته باشد و یک چک‌لیست کوتاه برای reviewerها.",
          ),
          lv: 5,
          why: L(
            "You turn one review into a practice the team can reuse, aimed at the real risk instead of the tool. L5 sets direction for the people around them and standardises what keeps recurring.",
            "تجربه‌ی یک review را به رویه‌ی قابل‌استفاده‌ی تیم تبدیل می‌کنید، با تمرکز بر ریسک واقعی. L5 به کار دیگران جهت می‌دهد و روال‌های تکرارشونده را استاندارد می‌کند.",
          ),
        },
      ],
      takeaway: L(
        "Review the change with what you know and the agent doesn't. Then turn the lesson into a rule that points at the risk, not the tool.",
        "تغییر را با چیزی که شما می‌دانید و agent نمی‌داند review کنید. سپس از این تجربه، قاعده‌ای بسازید که معیارش ریسک تغییر باشد، نه ابزار تولید کد.",
      ),
    },

    {
      id: "s-vague-design",
      level: "L6",
      lenses: ["challenge", "influence"],
      title: L("The one-line brief", "درخواست یک‌خطی"),
      setup: L(
        "A director says, “We need to get serious about data quality.” That is the whole brief. Several teams are touched, and nobody has defined what “serious” means.",
        "یک مدیر می‌گوید: «باید درباره‌ی کیفیت داده جدی بشویم.» تمام درخواست همین است. چند تیم درگیرند و کسی تعریف نکرده «جدی» یعنی چه.",
      ),
      question: L("What do you do with it?", "با آن چه می‌کنید؟"),
      options: [
        {
          t: L(
            "Start building a data-validation framework. It's obviously needed.",
            "ساختن یک فریم‌ورک اعتبارسنجی داده را شروع می‌کنید. واضح است که لازم است.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "Action is welcome and the problem isn't defined yet, so you're solving your guess. The framework may validate the data nobody was worried about. The senior move starts with finding out what “serious” would change.",
            "اقدام کرده‌اید، اما مساله هنوز تعریف نشده است. ممکن است framework چیزی را بررسی کند که دغدغه‌ی اصلی هیچ‌کس نیست. رفتار ارشد از روشن کردن نتیجه‌ی مطلوب شروع می‌شود.",
          ),
        },
        {
          t: L(
            "Ask for a more specific ticket and start when you have one.",
            "یک ticket مشخص‌تر می‌خواهید و وقتی داشتید شروع می‌کنید.",
          ),
          lv: 4,
          why: L(
            "A sensible response to ambiguity at a level where the problem usually arrives defined. Here nobody has the specific ticket, and waiting for it hands the definition job to someone with less context than you.",
            "درخواست ticket روشن در سطحی که مساله از قبل تعریف می‌شود منطقی است. اما اینجا چنین ticketی وجود ندارد و با انتظار، تعریف مساله را به فردی با context کمتر واگذار می‌کنید.",
          ),
        },
        {
          t: L(
            "Spend a week defining the problem: talk to three affected teams, find the biggest sources of bad data, and write a one-page problem statement with candidate approaches and a measurable goal.",
            "یک هفته برای تعریف مساله وقت می‌گذارید: با سه تیم تحت تاثیر صحبت می‌کنید، بزرگ‌ترین منبع‌های داده‌ی بد را پیدا می‌کنید و یک بیانیه‌ی مساله‌ی یک‌صفحه‌ای با رویکردهای ممکن و یک هدف قابل‌اندازه‌گیری می‌نویسید.",
          ),
          lv: 5,
          why: L(
            "You do what L5 does with an ambiguous problem: research, scope, and choose a direction before building. It turns a sentence into something a team can start on.",
            "ابتدا تحقیق می‌کنید، scope را مشخص می‌کنید و جهت را انتخاب می‌کنید. در L5، درخواست مبهم به مساله‌ای تبدیل می‌شود که تیم بتواند کار روی آن را شروع کند.",
          ),
        },
        {
          t: L(
            "Spend a week talking to three affected teams, identifying the biggest sources of bad data, and writing a one-page problem statement with candidate approaches and a measurable goal. Then propose a multi-quarter plan with metrics, named owners across teams, and an explicit list of what you won't address this year.",
            "یک هفته با سه تیم تحت تاثیر صحبت می‌کنید، بزرگ‌ترین منابع داده‌ی نامعتبر را پیدا می‌کنید و صورت مساله را در یک صفحه، همراه با رویکردهای ممکن و هدفی قابل‌اندازه‌گیری، می‌نویسید. سپس برنامه‌ای چندفصلی با شاخص‌ها، مسئول‌های مشخص در تیم‌های مختلف و فهرست روشن مواردی که امسال به آن‌ها نمی‌پردازید پیشنهاد می‌دهید.",
          ),
          lv: 6,
          why: L(
            "You go from a defined problem to a plan several groups can commit to, including what you've chosen not to do. L6 takes a problem even leaders can't yet define and turns it into a strategy.",
            "مساله را به برنامه‌ای تبدیل می‌کنید که چند گروه بتوانند به آن متعهد شوند، همراه با موارد خارج از برنامه. در L6، ابهامی که حتی رهبران نمی‌توانند تعریف کنند به استراتژی تبدیل می‌شود.",
          ),
        },
      ],
      takeaway: L(
        "At L5 you define an ambiguous problem. At L6 you also turn it into a plan that several groups commit to, including what you won't do.",
        "در L5 مساله‌ی مبهم را تعریف می‌کنید. در L6 آن را به برنامه‌ای هم تبدیل می‌کنید که چند گروه به آن متعهد می‌شوند، از جمله آنچه نمی‌کنید.",
      ),
    },

    {
      id: "s-two-directors",
      level: "L6",
      lenses: ["influence", "impact"],
      title: L("Two directors, one quarter", "دو مدیر، یک فصل"),
      setup: L(
        "Two directors each want your team's next quarter: one for a revenue feature, the other for platform reliability. Both say it's the company's top priority. Your team can do one.",
        "دو مدیر هرکدام فصل بعد تیم شما را می‌خواهند: یکی برای یک قابلیت درآمدی، دیگری برای اتکاپذیری پلتفرم. هر دو می‌گویند اولویت اول شرکت است. تیم شما فقط ظرفیت انجام یکی از این دو کار را دارد.",
      ),
      question: L("What do you do?", "چه می‌کنید؟"),
      options: [
        {
          t: L(
            "Quietly split the team's time half and half so neither director is upset.",
            "بی‌سروصدا زمان تیم را نصف‌نصف تقسیم می‌کنید تا هیچ‌کدام از مدیرها ناراحت نشوند.",
          ),
          lv: 0,
          flag: "misfire",
          why: L(
            "It feels diplomatic and delivers neither: two half-finished efforts, and the conflict is still unresolved, just moved onto your team. Absorbing a priority conflict is not the same as resolving it.",
            "تقسیم مساوی ممکن است دیپلماتیک به نظر برسد، اما نتیجه دو پروژه‌ی نیمه‌تمام است. تعارض فقط به تیم منتقل شده و هنوز حل نشده است.",
          ),
        },
        {
          t: L(
            "Ask your manager to decide, and do whichever you're told.",
            "از مدیرتان می‌خواهید تصمیم بگیرد و هر چه گفت انجام می‌دهید.",
          ),
          lv: 4,
          why: L(
            "Clear and low-risk, and it passes a decision about company priorities up to a person with the same information you have. It works at L4, where the priorities are set elsewhere; at L6 you're part of how they get set.",
            "تصمیم را شفاف به مدیر واگذار می‌کنید. در L4 این کار منطقی است، اما در L6 انتظار می‌رود خودتان در تعیین اولویت‌های شرکت نقش داشته باشید.",
          ),
        },
        {
          t: L(
            "Prepare the numbers for both and present a recommendation to your manager, who will talk to the directors.",
            "شواهد عددی هر دو پیشنهاد را آماده می‌کنید و توصیه‌تان را به مدیر خود می‌دهید تا با آن دو مدیر گفتگو کند.",
          ),
          lv: 5,
          why: L(
            "You bring evidence and a view, which is a real contribution to the decision. The conflict is still being managed through one person, so the directors never have to hear each other's case.",
            "شواهد و توصیه ارائه می‌دهید و در تصمیم مشارکت می‌کنید. اما مدیران دو طرف هنوز استدلال یکدیگر را مستقیم نشنیده‌اند و تعارض از طریق واسطه مدیریت می‌شود.",
          ),
        },
        {
          t: L(
            "Put both directors in a room (or one document) with a one-page comparison of cost, benefit, risk and what the company stops doing. Propose a sequence that gets a slice of both, and ask them to agree to it in writing.",
            "هر دو مدیر را در یک اتاق (یا یک سند) کنار هم می‌گذارید، با یک مقایسه‌ی یک‌صفحه‌ای از هزینه، سود، ریسک و آنچه شرکت کنار می‌گذارد. ترتیبی برای اجرای کار پیشنهاد می‌دهید که بخشی از اهداف هر دو را محقق کند و می‌خواهید مکتوب بر آن توافق کنند.",
          ),
          lv: 6,
          why: L(
            "You resolve the clash of priorities in the open, in the organisation's interest rather than either group's. L6 leads across groups whose priorities compete and steers the outcome toward what's best overall.",
            "تعارض اولویت‌ها را شفاف و به نفع سازمان حل می‌کنید. L6 بین گروه‌های رقیب رهبری می‌کند و تصمیم را به سمت بهترین نتیجه‌ی کلی هدایت می‌کند.",
          ),
        },
      ],
      takeaway: L(
        "At L6 you resolve competing priorities in the open, in the organisation's interest, rather than absorbing the conflict or passing it up.",
        "در L6، تعارض اولویت‌ها را شفاف و به نفع سازمان حل می‌کنید، به‌جای تحمل پیامدهای آن یا صرفا واگذاری به مدیر بالاتر.",
      ),
    },
  );
})();

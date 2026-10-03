/* Interface strings and navigation. Every string is L("English", "فارسی"). */
(function () {
  "use strict";
  var S = window.SWE, L = S.L;

  S.data.ui = {
    appName: L("Rung by Rung", "پله‌پله"),
    appSub: L("A field guide for software engineers", "راهنمای کاربردی مهندسان نرم‌افزار"),

    strings: {
      skip: L("Skip to content", "رفتن به محتوا"),
      menu: L("Menu", "منو"),
      search: L("Search", "جست‌وجو"),
      searchLabel: L("Search the guide", "جست‌وجو در راهنما"),
      searchPh: L("Search levels, questions, tools, terms…", "جست‌وجوی سطح‌ها، پرسش‌ها، ابزارها، اصطلاحات…"),
      searchHint: L("↑ ↓ to move · Enter to open · Esc to close", "↑ ↓ برای حرکت · Enter برای باز کردن · Esc برای بستن"),
      searchEmpty: L("Nothing found. Try a shorter word, or a level like L4.", "نتیجه‌ای پیدا نشد. واژه‌ی کوتاه‌تری یا سطحی مثل L4 را جست‌وجو کنید."),
      language: L("Language", "زبان"),
      theme: L("Theme: follows your system. Click to change.", "پوسته: مطابق تنظیمات سیستم. برای تغییر کلیک کنید."),
      themeLight: L("Theme: light. Click to change.", "پوسته: روشن. برای تغییر کلیک کنید."),
      themeDark: L("Theme: dark. Click to change.", "پوسته: تیره. برای تغییر کلیک کنید."),
      tldr: L("In 30 seconds", "در ۳۰ ثانیه"),
      onThisPage: L("On this page", "در این صفحه"),
      next: L("Up next", "گام بعدی"),
      copied: L("Copied to clipboard", "در کلیپ‌بورد کپی شد"),
      copyFail: L("Couldn't copy — select the text and copy it manually", "کپی انجام نشد. متن را انتخاب کنید و دستی کپی کنید."),
      visited: L("Visited", "دیده‌شده"),
      footer: L("Works offline. What you type or choose stays in this browser only.", "آفلاین کار می‌کند. هرچه بنویسید یا انتخاب کنید، فقط در همین مرورگر ذخیره می‌شود."),
      myLevel: L("My level", "سطح من"),
      setLevel: L("Set my level", "تنظیم سطح من"),
      myLevelTitle: L("Which rung are you on today?", "امروز روی کدام پله هستید؟"),
      myLevelHelp: L("The guide will point out what matters for you and for the next rung. Stored only in this browser.", "راهنما نکات مهم برای سطح فعلی و سطح بعدی شما را مشخص می‌کند. انتخابتان فقط در همین مرورگر ذخیره می‌شود."),
      notSure: L("Not sure — help me find out", "مطمئن نیستم. کمک کنید سطحم را پیدا کنم."),
      clearLevel: L("Clear", "پاک کردن"),
      levelSet: L("Got it. The guide now speaks to your level.", "انجام شد. راهنما حالا با توجه به سطح شما نمایش داده می‌شود."),
      forYou: L("For you", "برای شما"),
      you: L("You", "شما"),
      nextRung: L("Next rung", "پله‌ی بعدی"),
      all: L("All", "همه"),
      reset: L("Start over", "شروع دوباره"),
      back: L("Back", "قبلی"),
      continue: L("Continue", "ادامه"),
      finish: L("See my results", "دیدن نتیجه"),
      copySummary: L("Copy summary", "کپی خلاصه"),
      print: L("Print", "چاپ"),
      level: L("Level", "سطح"),
      lens: L("Lens", "بُعد"),
      example: L("Example", "مثال"),
      weak: L("Weak", "ضعیف"),
      strong: L("Strong", "قوی"),
      source: L("Sources", "منابع"),
      home: L("Home", "خانه")
    },

    // Sidebar groups. `icon` names come from SWE.ICONS.
    nav: [
      { group: L("Start", "شروع"), items: [
        { id: "home", icon: "home", label: L("Start here", "از اینجا شروع کنید") }
      ] },
      { group: L("Understand", "شناخت نردبان"), items: [
        { id: "how", icon: "map", label: L("How leveling works", "سطح‌بندی چطور کار می‌کند") },
        { id: "levels", icon: "stairs", label: L("The levels, L2–L7", "سطح‌ها، L2 تا L7") }
      ] },
      { group: L("Locate & grow", "جایگاه و رشد"), items: [
        { id: "locate", icon: "target", label: L("Where am I?", "من کجا هستم؟") },
        { id: "grow", icon: "trend", label: L("Growing to the next level", "رشد به سطح بعد") },
        { id: "paths", icon: "route", label: L("Your path: IC, lead, manager", "مسیرهای شما: IC، tech lead، مدیر") }
      ] },
      { group: L("Move", "جابه‌جایی"), items: [
        { id: "hire", icon: "door", label: L("Hired at the right level", "استخدام در سطح درست") }
      ] },
      { group: L("Practice", "تمرین"), items: [
        { id: "practice", icon: "play", label: L("What would you do?", "شما چه می‌کردید؟") },
        { id: "toolkit", icon: "tool", label: L("Toolkit", "جعبه‌ابزار") }
      ] },
      { group: L("Reference", "مرجع"), items: [
        { id: "faq", icon: "help", label: L("Questions people ask", "پرسش‌های رایج") },
        { id: "landscape", icon: "globe", label: L("The landscape in 2026", "چشم‌انداز ۲۰۲۶") },
        { id: "about", icon: "book", label: L("Glossary & sources", "واژه‌نامه و منابع") }
      ] }
    ]
  };

  // Flat list of page ids in reading order (used for "up next" links).
  S.PAGE_ORDER = [];
  S.data.ui.nav.forEach(function (g) { g.items.forEach(function (it) { S.PAGE_ORDER.push(it.id); }); });
  S.pageLabel = function (id) {
    var found = null;
    S.data.ui.nav.forEach(function (g) { g.items.forEach(function (it) { if (it.id === id) found = it; }); });
    return found ? found.label : id;
  };
})();

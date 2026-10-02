# Rung by Rung · پله‌پله

An offline, bilingual (English / Persian) field guide for software engineers at every level: how leveling works, where you stand, how to grow, how not to be down-leveled when you change jobs, and what the AI-era market is doing to all of it.

It is a single static site. There is nothing to install and nothing to run.

## Open it

Double-click `index.html`. It works from disk in current Chrome, Edge, Firefox and Safari, with no server and no network: the guide makes no requests of any kind (fonts, icons and charts are all embedded).

Tested in Chrome (desktop and a 390 px phone width, light and dark, English and Persian). Other browsers should work; none of them has been tried.

## What's inside

| Page | What it gives you |
|---|---|
| **Start here** | The ladder at a glance, a panel written for your level, and the six ideas that explain most of leveling. |
| **How leveling works** | Level vs title vs pay band, the four lenses plus impact, scope × ambiguity × horizon × people, a cross-company level translator, how promotions are decided, time in level, what is *not* level evidence. |
| **The levels, L2–L7** | Each level lens by lens: signals, traps, a story, a week in the life, the jump to the next. |
| **Where am I?** | A five-minute self-assessment: radar profile, growth edge, habits, and a 1:1 summary to copy. |
| **Growing to the next level** | Promotion model, a playbook for every step, eight reasons people stall, an evidence loop, a quarter-plan builder. |
| **Your path: IC, lead, manager** | The three lanes, tech lead as a role, staff archetypes, depth vs breadth, management experiments, a "what fits me?" check. |
| **Hired at the right level** | How level is set at hire, scope in numbers, what interviewers listen for (design and story altitudes), your evidence checklist, conversation scripts, what a down-level costs, loops compared, four composite cases. |
| **What would you do?** | Sixteen short scenarios; each option reveals the level of thinking behind it. |
| **Toolkit** | Evidence log, impact-statement builder, 1:1 kit, promotion-packet outline, design-doc outline. Copy or download as Markdown. |
| **Questions people ask** | 47 searchable answers, filterable by topic and level. |
| **The landscape in 2026** | Dated, hedged view of AI expectations, the evidence on productivity, the job market, and what it means at each level. |
| **Glossary & sources** | 47 terms, 64 sources tagged primary / secondary / anecdotal, and the method page (including what we don't know). |

## Using it

- **Language:** the EN / فا switch in the top bar, or `?lang=fa`. Persian is right-to-left throughout.
- **Theme:** the contrast button (system / light / dark), or `?theme=dark`.
- **My level:** set it once in the top bar (or `?me=L4`) and pages highlight what matters for your rung and the next.
- **Search:** press `/` or `Ctrl/⌘ + K`. It searches pages, questions, scenarios, tools, terms and playbooks, and ignores hyphens and Persian half-spaces.
- **Deep links:** for example `index.html#/faq/denied-promotion`, `#/practice/s-dependency`, `#/hire/signals`, `#/about/glossary/ownership`.

## Your data

Everything you type or choose (level, assessment answers, practice choices, evidence log, drafts) is kept in this browser's local storage under keys that start with `swe.`. There are no accounts and no analytics. Clearing the browser's site data clears it too; **Glossary & sources → Method** has a reset button. Download your evidence log now and then.

## Honesty about the content

- The ladder (six levels, four lenses plus impact, three habits) is a reference scale rewritten in our own words. It is not any employer's ladder, and employers are named only where a fact is unique to them or where we compare.
- Company facts come from public sources gathered in early October 2026, many of them read through search summaries. Weak sources are hedged ("reportedly", "self-reported") or left out; the sources page says how each one was seen.
- Every person in a story or scenario is a composite and every number in them is made up. The pay figures are the exception: they are levels.fyi's self-reported medians, labelled as such, and approximate.
- The AI and job-market pages are dated and will age fast; two AI-in-review policies were already walked back within months.

## For editors

```
index.html                 loads classic scripts in order (no modules, so it works from file://)
assets/css/                fonts.css (embedded Vazirmatn), app.css (design system), views.css (pages)
assets/js/core.js          namespace SWE, storage, i18n, text markup, icons, helpers
assets/js/ui.js            components and charts (tables, tabs, radar, bars, callouts…)
assets/js/app.js           shell: hash router, nav, language/theme/"my level", search, scroll-spy
assets/js/data/*.js        all content, as bilingual pairs
assets/js/views/*.js       one view per page: S.views.<route> = { render, onParam, search }
tools/validate.js          checks the bilingual data files
```

Content strings are pairs: `L("English", "فارسی")`. Inline markup: `**bold**`, `==highlight==`, `` `code` ``, `{L4}` for a level chip, `[label](#/route)` and `[label](https://…)` for links; a blank line starts a paragraph, `- ` a bullet, `1. ` a numbered item. Raw HTML is escaped.

Persian conventions the validator checks: Latin digits (converted to Persian digits at render time, except inside identifiers such as `L4` or `p95`), half-space (ZWNJ) in «می‌کنید» and plurals «ها», `ی`/`ک` rather than Arabic `ي`/`ك`, «» quotes, matching paragraph and bullet counts in both languages.

Check a file after editing it (from this folder):

```bash
node tools/validate.js data/faq-b.js
```

To add things:

- **A question:** push an entry into `S.data.faq` in any `data/faq-*.js`: `id`, `group` (`basics | growth | paths | hiring | culture | ai`), `levels`, `q`, `short`, `body`, `steps` (3–5), `story` (or `null`), `links`.
- **A scenario:** push into `S.data.scenarios`: `id`, `level`, `lenses`, `title`, `setup`, `question`, four `options` (`t`, `lv` 2–7, or `lv: 0` with `flag: "misfire"`, and `why`), `takeaway`. Options are shown in a fixed shuffled order, never sorted by level.
- **A source or glossary term:** add to `data/sources.js` or `data/glossary.js`.
- **A page:** write `views/<id>.js` (set `S.views.<id>`), add it to the `nav` list in `data/ui.js`, and add its script tags to `index.html` after its data.

## Credits and licences

The Persian text is set in **Vazirmatn**, embedded in `assets/css/fonts.css` (SIL Open Font License 1.1; the licence is in `assets/fonts/Vazirmatn-OFL.txt`). Icons and charts are inline SVG drawn for this guide. There are no external libraries. The ideas belong to the people credited on the sources page; the guide paraphrases and links rather than quoting at length.

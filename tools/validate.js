#!/usr/bin/env node
/* Validates bilingual data files for the guide.
   Usage (from the guide folder): node tools/validate.js data/faq-b.js [more files…]   (paths are relative to assets/js)
   Loads core.js + data/ui.js + data/levels.js into a sandbox, then each target file, then walks every
   L("en","fa") pair under SWE.data and reports problems. Exit code 1 if any ERROR. */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.join(__dirname, "..", "assets", "js");
const files = process.argv.slice(2);
if (!files.length) { console.error("usage: node validate.js <file.js> …"); process.exit(2); }

const store = {};
const sandbox = {
  window: {}, console,
  location: { search: "", hash: "" },
  navigator: { language: "en" },
  localStorage: { getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } },
  document: { readyState: "complete", addEventListener() {}, createElement: () => ({ style: {}, setAttribute() {}, appendChild() {} }), body: { appendChild() {} }, getElementById: () => null },
  CustomEvent: function () {}, setTimeout, clearTimeout
};
sandbox.window = sandbox;
vm.createContext(sandbox);
function load(f) {
  const p = f.startsWith("/") ? f : path.join(ROOT, f);
  vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: p });
}
["core.js", "data/ui.js", "data/levels.js", "data/levels-extra.js"].forEach(load);
// ui.js needs a DOM-light environment; levelById is used by some data files, so provide it directly.
sandbox.SWE.levelById = id => (sandbox.SWE.data.levels || []).find(l => l.id === id) || null;
const before = new Set(Object.keys(sandbox.SWE.data));
files.forEach(f => {
  try { load(f); } catch (e) { console.error("ERROR loading " + f + ": " + e.message); process.exit(1); }
});
const S = sandbox.SWE;

const errors = [], warns = [];
const FA_LETTER = /[؀-ۿ]/;
const LATIN_WORD = /[A-Za-z]{4,}/g;
let pairs = 0;

function isPair(o) { return o && typeof o === "object" && !Array.isArray(o) && "en" in o && "fa" in o && Object.keys(o).length === 2; }

function checkPair(p, where) {
  pairs++;
  const en = p.en, fa = p.fa;
  if (typeof en !== "string" || typeof fa !== "string") { errors.push(where + ": en/fa must be strings"); return; }
  if (!en.trim()) errors.push(where + ": empty English");
  if (!fa.trim()) errors.push(where + ": empty Persian");
  if (FA_LETTER.test(en)) errors.push(where + ": Persian characters in English text → " + en.slice(0, 50));
  // identical en/fa is fine for codes, but suspicious for sentences
  if (fa === en && en.length > 24) errors.push(where + ": Persian equals English (untranslated?) → " + en.slice(0, 60));
  if (en.length > 24 && fa !== en && !FA_LETTER.test(fa)) errors.push(where + ": Persian text has no Persian letters → " + fa.slice(0, 60));
  // typography (Persian)
  if (/[يك]/.test(fa)) errors.push(where + ": Arabic ي/ك used; use ی/ک → " + fa.slice(0, 50));
  if (/[٠-٩]/.test(fa)) errors.push(where + ": Arabic-Indic digits; use Latin (auto-converted) or Persian digits");
  if (/(^|[\s(«])(می|نمی)\s+[؀-ۿ]/.test(fa)) errors.push(where + ": «می» followed by a space; use half-space (ZWNJ) می‌ → " + (fa.match(/(می|نمی)\s+[؀-ۿ]+/) || [""])[0]);
  if (/[؀-ۿ]\s+(ها|های)(?=[\s.,،؛:!؟)»]|$)/.test(fa)) errors.push(where + ": plural «ها» detached by a space; use half-space → " + (fa.match(/[؀-ۿ]+\s+(ها|های)/) || [""])[0]);
  if (/"/.test(fa)) warns.push(where + ": straight double quotes in Persian; prefer «» → " + fa.slice(0, 50));
  if (/\.\.\./.test(fa) || /\.\.\./.test(en)) warns.push(where + ": three dots; prefer … ");
  if (/ {2,}/.test(fa) || / {2,}/.test(en)) warns.push(where + ": double spaces");
  if (/ ,|\s،/.test(fa)) warns.push(where + ": space before comma");
  if (/[‌]\s|\s[‌]/.test(fa)) warns.push(where + ": ZWNJ next to a space");
  // markup balance
  [["**", /\*\*/g], ["==", /==/g], ["`", /`/g]].forEach(([name, re]) => {
    [en, fa].forEach((s, i) => { const n = (s.match(re) || []).length; if (n % 2) errors.push(where + ": unbalanced " + name + " in " + (i ? "fa" : "en")); });
  });
  [en, fa].forEach((s, i) => {
    const chips = s.match(/\{[^}]*\}/g) || [];
    chips.forEach(c => { if (!/^\{L[2-7]\}$/.test(c)) errors.push(where + ": invalid chip " + c + " in " + (i ? "fa" : "en")); });
    if (/<\/?[a-z][^>]*>/i.test(s)) errors.push(where + ": raw HTML in " + (i ? "fa" : "en") + " → " + s.slice(0, 50));
  });
  // Persian text that is mostly Latin
  const latinWords = (fa.match(LATIN_WORD) || []).length;
  const faLetters = (fa.match(/[؀-ۿ]/g) || []).length;
  const latinLetters = (fa.match(/[A-Za-z]/g) || []).length;
  if (fa.length > 60 && latinWords > 14 && latinLetters > faLetters * 0.8) warns.push(where + ": Persian is mostly Latin letters → " + fa.slice(0, 60));
  // wildly different lengths
  if (en.length > 60 && (fa.length < en.length * 0.45 || fa.length > en.length * 1.7)) warns.push(where + ": en/fa length mismatch (" + en.length + " vs " + fa.length + ")");
  // paragraph / bullet structure should match
  const ps = s => s.split(/\n{2,}/).length;
  if (ps(en) !== ps(fa)) warns.push(where + ": paragraph count differs (en " + ps(en) + ", fa " + ps(fa) + ")");
  const bl = s => (s.match(/^\s*-\s+/gm) || []).length;
  if (bl(en) !== bl(fa)) warns.push(where + ": bullet count differs (en " + bl(en) + ", fa " + bl(fa) + ")");
}

function walk(o, where) {
  if (isPair(o)) return checkPair(o, where);
  if (Array.isArray(o)) { o.forEach((x, i) => walk(x, where + "[" + i + "]")); return; }
  if (o && typeof o === "object") {
    // detect half-built pairs
    const keys = Object.keys(o);
    if (("en" in o) !== ("fa" in o)) errors.push(where + ": object has only one of en/fa");
    keys.forEach(k => walk(o[k], where + "." + k));
    return;
  }
  if (typeof o === "string" && /[؀-ۿ]/.test(o) && where.indexOf(".id") < 0) warns.push(where + ": bare string with Persian text (should be L(en, fa))");
}

const targets = Object.keys(S.data).filter(k => !before.has(k) || files.some(f => /levels|ui/.test(f)));
// Always walk keys added by the target files; plus keys that existing files mutated (arrays pushed to) are included by name.
const toWalk = new Set(targets);
Object.keys(S.data).forEach(k => { if (!["ui", "levels", "lenses", "habits", "weekRows"].includes(k)) toWalk.add(k); });
toWalk.forEach(k => walk(S.data[k], "data." + k));

console.log("Checked " + pairs + " en/fa pairs in " + files.join(", "));
if (warns.length) { console.log("\nWARNINGS (" + warns.length + ")"); warns.slice(0, 80).forEach(w => console.log("  ~ " + w)); if (warns.length > 80) console.log("  … " + (warns.length - 80) + " more"); }
if (errors.length) { console.log("\nERRORS (" + errors.length + ")"); errors.slice(0, 120).forEach(e => console.log("  ✗ " + e)); if (errors.length > 120) console.log("  … " + (errors.length - 120) + " more"); process.exit(1); }
console.log("\nOK: no errors.");

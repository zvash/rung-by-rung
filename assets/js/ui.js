/* UI toolkit: string builders for shared components and charts, plus delegated behaviours.
   Components return HTML strings; interactive parts are wired once per view through U.bind(root). */
(function () {
  "use strict";
  var S = window.SWE, L = S.L, t = S.t, md = S.md, esc = S.esc, icon = S.icon;
  var U = (S.ui = {});

  /* ---------- interface strings ---------- */
  U.u = function (key) {
    var d = S.data.ui && S.data.ui.strings && S.data.ui.strings[key];
    return d ? S.plain(d) : key;
  };

  /* ---------- levels ---------- */
  S.levelById = function (id) {
    var list = S.data.levels || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  };
  U.levelName = function (id) { var l = S.levelById(id); return l ? S.plain(l.name) : id; };
  // coloured code + name, e.g. [L4] Own
  U.levelTag = function (id, withName) {
    return S.lv(id) + (withName ? ' <span class="lv-name">' + esc(U.levelName(id)) + "</span>" : "");
  };

  /* ---------- page furniture ---------- */
  // opts: route, kicker, icon, title, lead, tldr:[text,…], sections:[{id,label}]
  U.pageHead = function (o) {
    var h = '<header class="page-head">';
    h += '<div class="kicker">' + (o.icon ? icon(o.icon) : "") + "<span>" + md(o.kicker) + "</span></div>";
    h += "<h1>" + md(o.title) + "</h1>";
    if (o.lead) h += '<p class="lead">' + md(o.lead) + "</p>";
    if (o.tldr && o.tldr.length) {
      h += '<ol class="tldr" aria-label="' + esc(U.u("tldr")) + '">';
      o.tldr.forEach(function (x, i) { h += "<li><span class=\"tldr-n\">" + S.digits(i + 1) + "</span><span>" + md(x) + "</span></li>"; });
      h += "</ol>";
    }
    h += "</header>";
    if (o.sections && o.sections.length) {
      h += '<nav class="pillnav" aria-label="' + esc(U.u("onThisPage")) + '"><div class="pillnav-in">';
      o.sections.forEach(function (s) {
        h += '<a href="#/' + o.route + "/" + s.id + '" data-spy="' + s.id + '">' + md(s.label) + "</a>";
      });
      h += "</div></nav>";
    }
    return h;
  };

  // A titled block of a page. body is HTML.
  U.section = function (id, title, intro, body, cls) {
    var h = '<section class="sec' + (cls ? " " + cls : "") + '" id="sec-' + id + '" data-sec="' + id + '">';
    if (title) h += '<div class="sec-head"><h2>' + md(title) + "</h2>" + (intro ? '<p class="sec-intro">' + md(intro) + "</p>" : "") + "</div>";
    h += body + "</section>";
    return h;
  };

  U.callout = function (kind, title, body) {
    var ic = { tip: "bulb", warn: "alert", note: "info", story: "chat", rule: "flag", good: "check" }[kind] || "info";
    return '<aside class="callout callout-' + kind + '">' + icon(ic) + "<div>" + (title ? "<strong>" + md(title) + "</strong>" : "") + '<div class="callout-body">' + S.rich(body) + "</div></div></aside>";
  };

  U.card = function (inner, cls) { return '<div class="card' + (cls ? " " + cls : "") + '">' + inner + "</div>"; };

  U.source = function (text) { return '<p class="source">' + icon("book") + "<span>" + md(text) + "</span></p>"; };

  // Link card to another route
  U.nextCard = function (route, label, why) {
    return '<a class="next-card" href="#/' + route + '"><span class="next-k">' + esc(U.u("next")) + "</span><strong>" + md(label) + "</strong>" +
      (why ? "<span>" + md(why) + "</span>" : "") + icon("arrow", "dir") + "</a>";
  };

  /* ---------- tabs ----------
     U.tabs(name, [{id,label,icon,html}], activeId)  — wired by U.bind */
  U.tabs = function (name, items, active, cls) {
    active = active || items[0].id;
    var h = '<div class="tabs' + (cls ? " " + cls : "") + '" data-tabs="' + name + '"><div class="tablist" role="tablist">';
    items.forEach(function (it) {
      h += '<button type="button" class="tab" role="tab" id="tab-' + name + "-" + it.id + '" data-tab="' + it.id + '" aria-selected="' + (it.id === active) + '" aria-controls="panel-' + name + "-" + it.id + '" tabindex="' + (it.id === active ? 0 : -1) + '">' +
        (it.icon ? icon(it.icon) : "") + "<span>" + md(it.label) + "</span></button>";
    });
    h += "</div>";
    items.forEach(function (it) {
      h += '<div class="tabpanel" role="tabpanel" id="panel-' + name + "-" + it.id + '" data-panel="' + it.id + '" aria-labelledby="tab-' + name + "-" + it.id + '"' + (it.id === active ? "" : " hidden") + ">" + it.html + "</div>";
    });
    return h + "</div>";
  };

  // Segmented radio group: U.seg("name", [{id,label}], value)
  U.seg = function (name, options, value, label) {
    var h = '<div class="seg" role="radiogroup" data-seg="' + name + '"' + (label ? ' aria-label="' + esc(label) + '"' : "") + ">";
    options.forEach(function (o) {
      h += '<button type="button" role="radio" data-val="' + o.id + '" aria-checked="' + (o.id === value) + '">' + md(o.label) + "</button>";
    });
    return h + "</div>";
  };

  U.pill = function (label, attrs, on) {
    return '<button type="button" class="pill' + (on ? " is-on" : "") + '" ' + (attrs || "") + ' aria-pressed="' + !!on + '">' + md(label) + "</button>";
  };

  // data table. head: [html…], rows: [[html…]] (cells already HTML), opts: {cls, firstCol:"sticky"}
  U.table = function (head, rows, opts) {
    opts = opts || {};
    var h = '<div class="table-wrap' + (opts.cls ? " " + opts.cls : "") + '"><table class="tbl">';
    if (head) h += "<thead><tr>" + head.map(function (c, i) { return "<th" + (i === 0 ? ' scope="col" class="c-first"' : ' scope="col"') + ">" + c + "</th>"; }).join("") + "</tr></thead>";
    h += "<tbody>" + rows.map(function (r, ri) {
      var attrs = opts.rowAttrs ? opts.rowAttrs(r, ri) : "";
      return "<tr " + attrs + ">" + r.map(function (c, i) { return (i === 0 ? '<th scope="row" class="c-first">' : "<td>") + c + (i === 0 ? "</th>" : "</td>"); }).join("") + "</tr>";
    }).join("") + "</tbody></table></div>";
    return h;
  };

  U.meter = function (value, max, cls) {
    var pct = Math.round(S.clamp(value / max, 0, 1) * 100);
    return '<div class="meter ' + (cls || "") + '" role="meter" aria-valuemin="0" aria-valuemax="' + max + '" aria-valuenow="' + value + '"><i style="width:' + pct + '%"></i></div>';
  };

  /* ---------- charts ---------- */

  /* Radar: opts {axes:[label…], min, max, rings:[values], series:[{name, values, cls}], size, ringLabel(v)}
     The SVG is forced LTR so geometry is identical in both languages; text still shapes RTL correctly. */
  U.radar = function (o) {
    var n = o.axes.length, size = o.size || 360, cx = size / 2, cy = size / 2, R = size / 2 - (o.pad || 62);
    var min = o.min, max = o.max;
    function pt(i, v, rr) {
      var a = -Math.PI / 2 + (2 * Math.PI * i) / n;
      var r = rr != null ? rr : ((v - min) / (max - min)) * R;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    }
    var svg = '<svg class="radar" viewBox="0 0 ' + size + " " + size + '" role="img" aria-label="' + esc(o.aria || "") + '" style="direction:ltr">';
    (o.rings || []).forEach(function (rv, ri) {
      var pts = [];
      for (var i = 0; i < n; i++) pts.push(pt(i, rv).join(","));
      svg += '<polygon class="radar-ring' + (ri === (o.rings.length - 1) ? " outer" : "") + '" points="' + pts.join(" ") + '"/>';
    });
    for (var i = 0; i < n; i++) {
      var p = pt(i, max);
      svg += '<line class="radar-axis" x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '"/>';
    }
    // ring labels along the first axis
    (o.rings || []).forEach(function (rv) {
      var p0 = pt(0, rv);
      svg += '<text class="radar-rl" x="' + (p0[0] + 4) + '" y="' + (p0[1] - 2) + '">' + esc(o.ringLabel ? o.ringLabel(rv) : rv) + "</text>";
    });
    (o.series || []).forEach(function (s) {
      var pts = s.values.map(function (v, i) { return pt(i, S.clamp(v, min, max)).map(function (x) { return x.toFixed(1); }).join(","); });
      svg += '<polygon class="radar-area ' + (s.cls || "a") + '" points="' + pts.join(" ") + '"/>';
      if (!s.noDots) s.values.forEach(function (v, i) {
        var q = pt(i, S.clamp(v, min, max));
        svg += '<circle class="radar-dot ' + (s.cls || "a") + '" cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="4"><title>' + esc(o.axes[i] + ": " + (o.valueLabel ? o.valueLabel(v) : v)) + "</title></circle>";
      });
    });
    o.axes.forEach(function (label, i) {
      var q = pt(i, null, R + 16);
      var anchor = Math.abs(q[0] - cx) < 6 ? "middle" : (q[0] > cx ? "start" : "end");
      var dy = q[1] < cy - R * 0.5 ? -2 : (q[1] > cy + R * 0.5 ? 12 : 4);
      var lines = String(label).split("|");
      svg += '<text class="radar-lbl" text-anchor="' + anchor + '" x="' + q[0].toFixed(1) + '" y="' + (q[1] + dy - (lines.length - 1) * 6).toFixed(1) + '">';
      lines.forEach(function (ln, li) { svg += '<tspan x="' + q[0].toFixed(1) + '" dy="' + (li ? 13 : 0) + '">' + esc(ln) + "</tspan>"; });
      svg += "</text>";
    });
    return svg + "</svg>";
  };

  /* Range rows (horizontal range bars on a numeric scale, always LTR).
     rows:[{label (html), from, to, mid?, cls?, note?}], scale:{min,max,ticks:[…], unit} */
  U.ranges = function (rows, scale) {
    var span = scale.max - scale.min;
    function pct(v) { return ((v - scale.min) / span) * 100; }
    var h = '<div class="ranges">';
    rows.forEach(function (r) {
      h += '<div class="range-row"><div class="range-label">' + r.label + '</div><div class="range-track" dir="ltr">';
      (scale.ticks || []).forEach(function (tk) { h += '<span class="range-tick" style="left:' + pct(tk) + '%"></span>'; });
      h += '<span class="range-bar ' + (r.cls || "") + '" style="left:' + pct(r.from) + "%;width:" + (pct(r.to) - pct(r.from)) + '%"></span>';
      if (r.mid != null) h += '<span class="range-mid" style="left:' + pct(r.mid) + '%"></span>';
      h += "</div>" + (r.note ? '<div class="range-note">' + r.note + "</div>" : "") + "</div>";
    });
    h += '<div class="range-row range-axis"><div class="range-label"></div><div class="range-track" dir="ltr">';
    (scale.ticks || []).forEach(function (tk) { h += '<span class="range-tickl" style="left:' + pct(tk) + '%">' + S.digits(tk) + "</span>"; });
    h += "</div></div></div>";
    return h;
  };

  /* Simple horizontal bars: rows:[{label, value, max, text, cls}] */
  U.bars = function (rows) {
    var h = '<div class="bars">';
    rows.forEach(function (r) {
      var pct = S.clamp((r.value / r.max) * 100, 0, 100);
      h += '<div class="bar-row"><div class="bar-label">' + r.label + '</div><div class="bar-track" dir="ltr"><i class="' + (r.cls || "") + '" style="width:' + pct + '%"></i></div><div class="bar-val">' + (r.text || "") + "</div></div>";
    });
    return h + "</div>";
  };

  /* ---------- source confidence (shared by pages that cite employers or studies) ---------- */
  U.CONF = {
    H: { cls: "good", label: L("primary source", "منبع اصلی") },
    M: { cls: "info", label: L("reputable secondary", "منبع دست‌دوم معتبر") },
    L: { cls: "warn", label: L("as reported, weaker evidence", "گزارشی، با شواهد ضعیف‌تر") }
  };
  U.confTag = function (c) {
    var x = U.CONF[c] || U.CONF.L;
    return '<span class="tag ' + x.cls + '" title="' + esc(S.plain(x.label)) + '">' + esc(S.plain(x.label)) + "</span>";
  };
  U.confLegend = function () {
    return '<p class="legend"><span class="cdot c-H"></span>' + md(U.CONF.H.label) + ' <span class="cdot c-M"></span>' + md(U.CONF.M.label) + ' <span class="cdot c-L"></span>' + md(U.CONF.L.label) + "</p>";
  };

  /* ---------- toast ---------- */
  var toastTimer = null;
  U.toast = function (msg) {
    var el = S.$("#toast");
    if (!el) { el = document.createElement("div"); el.id = "toast"; el.className = "toast"; el.setAttribute("role", "status"); el.setAttribute("aria-live", "polite"); document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("on"); }, 2400);
  };

  /* ---------- delegated behaviours ----------
     tabs · copy buttons (data-copy-target="#id") · toggles (data-toggle="#id") · segmented controls (emit "seg" event) */
  U.bind = function (root) {
    // tabs
    S.on(root, "click", ".tab", function (e, btn) { activateTab(btn); });
    S.on(root, "keydown", ".tab", function (e, btn) {
      var keys = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 1, ArrowUp: -1 };
      if (!(e.key in keys)) return;
      var rtl = S.isFa() && (e.key === "ArrowRight" || e.key === "ArrowLeft");
      var tabs = S.$$(".tab", btn.parentNode);
      var i = tabs.indexOf(btn), step = keys[e.key] * (rtl ? -1 : 1);
      var nxt = tabs[(i + step + tabs.length) % tabs.length];
      nxt.focus(); activateTab(nxt); e.preventDefault();
    });
    // copy
    S.on(root, "click", "[data-copy-target]", function (e, btn) {
      var src = S.$(btn.getAttribute("data-copy-target"), root) || S.$(btn.getAttribute("data-copy-target"));
      if (!src) return;
      var text = src.value != null && src.tagName === "TEXTAREA" ? src.value : src.innerText;
      S.copy(text, function (ok) { U.toast(ok ? U.u("copied") : U.u("copyFail")); });
    });
    // toggle visibility
    S.on(root, "click", "[data-toggle]", function (e, btn) {
      var tgt = S.$(btn.getAttribute("data-toggle"), root);
      if (!tgt) return;
      var open = tgt.hasAttribute("hidden");
      if (open) tgt.removeAttribute("hidden"); else tgt.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", String(open));
    });
    // segmented controls: update aria-checked and dispatch a custom event on the group
    S.on(root, "click", ".seg button", function (e, btn) {
      var grp = btn.parentNode;
      S.$$("button", grp).forEach(function (b) { b.setAttribute("aria-checked", String(b === btn)); });
      grp.dispatchEvent(new CustomEvent("seg", { bubbles: true, detail: { name: grp.getAttribute("data-seg"), value: btn.getAttribute("data-val") } }));
    });
  };
  function activateTab(btn) {
    var wrap = btn.closest(".tabs");
    if (!wrap) return;
    var id = btn.getAttribute("data-tab");
    S.$$(":scope > .tablist > .tab", wrap).forEach(function (b) {
      var on = b === btn;
      b.setAttribute("aria-selected", String(on));
      b.setAttribute("tabindex", on ? "0" : "-1");
    });
    S.$$(":scope > .tabpanel", wrap).forEach(function (p) {
      if (p.getAttribute("data-panel") === id) p.removeAttribute("hidden"); else p.setAttribute("hidden", "");
    });
    wrap.dispatchEvent(new CustomEvent("tabchange", { bubbles: true, detail: { name: wrap.getAttribute("data-tabs"), id: id } }));
  }
  U.activateTab = activateTab;

  // Persisted per-view state, e.g. U.mem("assess").get()/set()
  U.mem = function (key, fallback) {
    return {
      get: function () { return S.store.get(key, fallback); },
      set: function (v) { S.store.set(key, v); },
      del: function () { S.store.del(key); }
    };
  };
})();

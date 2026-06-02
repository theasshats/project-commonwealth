// Derpack X site — tiny progressive enhancement. The page is fully usable
// with JS disabled; this only adds the copy button and the live status badge.
(function () {
  "use strict";

  // --- copy-to-clipboard on the server address ---
  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-copy") || "";
      var label = btn.getAttribute("data-copy-label") || "Copy";
      var done = function () {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = label; }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, function () { selectFallback(value, done); });
      } else {
        selectFallback(value, done);
      }
    });
  });

  function selectFallback(text, done) {
    var el = document.getElementById("server-address");
    if (el && window.getSelection) {
      var range = document.createRange();
      range.selectNodeContents(el);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      try { document.execCommand("copy"); done(); } catch (e) { /* leave selected */ }
    }
  }

  // --- live server status badge ---
  // Hits this site's own /api/status (served by the Go backend), so there's no
  // dependency on a third-party status API. Fails gracefully if it can't reach it.
  var box = document.getElementById("status");
  if (!box) return;
  var dot = box.querySelector(".status-dot");
  var text = box.querySelector(".status-text");

  function set(state, message) {
    if (dot) dot.className = "status-dot status-dot--" + state;
    if (text) text.textContent = message;
  }

  function refresh() {
    fetch("/api/status", { headers: { "Accept": "application/json" } })
      .then(function (r) { if (!r.ok) throw new Error("bad status"); return r.json(); })
      .then(function (d) {
        if (d && d.online) {
          var n = (typeof d.players_online === "number") ? d.players_online : 0;
          var max = (typeof d.players_max === "number" && d.players_max > 0) ? "/" + d.players_max : "";
          set("online", "Server online · " + n + max + " playing");
        } else {
          set("offline", "Server offline");
        }
      })
      .catch(function () { set("unknown", "Status unavailable"); });
  }

  refresh();
  // Light periodic refresh while the tab is open; backend caches so this is cheap.
  setInterval(function () { if (!document.hidden) refresh(); }, 60000);

  // --- latest release: resolve the real download URLs + recent versions ---
  // Backed by this site's own /api/release (cached server-side). The static
  // links in the HTML stay as a no-JS fallback; this just points them at the
  // actual current assets so versioned filenames keep working.
  fetch("/api/release", { headers: { "Accept": "application/json" } })
    .then(function (r) { if (!r.ok) throw new Error("bad release"); return r.json(); })
    .then(function (d) {
      if (!d || d.error) return; // keep the static fallback links

      // Point every installer link at the resolved asset URL.
      if (d.installer_url) {
        document.querySelectorAll(".js-installer").forEach(function (a) {
          a.setAttribute("href", d.installer_url);
        });
      }
      var ver = document.getElementById("installer-version");
      if (ver && d.version) ver.textContent = " (v" + d.version + ")";

      var list = document.getElementById("releases-list");
      var wrap = document.getElementById("releases");
      if (list && wrap && d.releases && d.releases.length) {
        list.innerHTML = "";
        d.releases.forEach(function (rel) {
          var li = document.createElement("li");
          var v = document.createElement("span");
          v.className = "rel-ver";
          v.textContent = "v" + rel.version;
          var n = document.createElement("span");
          n.className = "rel-name";
          n.textContent = rel.name || "";
          var dt = document.createElement("time");
          dt.className = "rel-date";
          dt.textContent = rel.published_at || "";
          li.appendChild(v);
          li.appendChild(n);
          li.appendChild(dt);
          list.appendChild(li);
        });
        wrap.hidden = false;
      }
    })
    .catch(function () { /* keep the static fallback links */ });
})();

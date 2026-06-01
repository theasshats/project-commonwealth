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
})();

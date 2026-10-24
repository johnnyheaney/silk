// Silk (sample). Mobile menu overlay, open-now line, today's hours, gentle reveal.
(function () {
  document.documentElement.classList.remove("no-js");

  // Mobile menu overlay
  var overlay = document.getElementById("overlay");
  var openBtn = document.querySelector(".menu-btn");
  function setMenu(open) {
    if (!overlay) return;
    overlay.classList.toggle("open", open);
    openBtn.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
    (open ? overlay.querySelector("button") : openBtn).focus();
  }
  if (overlay && openBtn) {
    openBtn.addEventListener("click", function () { setMenu(true); });
    overlay.querySelector("button").addEventListener("click", function () { setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("open")) setMenu(false);
    });
  }

  // SAMPLE opening hours (placeholder). Index 0 = Sunday. Minutes from midnight.
  var HOURS = [[540, 900], [480, 960], [480, 960], [480, 960], [480, 960], [480, 960], [510, 960]];
  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  function fmt(m) {
    var h = Math.floor(m / 60), min = m % 60, h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (min ? ":" + (min < 10 ? "0" : "") + min : "") + (h >= 12 ? "pm" : "am");
  }

  // Day and time in the UK, whatever the visitor's timezone
  var now = new Date(), parts = {};
  try {
    new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/London", weekday: "long", hour: "numeric", minute: "numeric", hourCycle: "h23" })
      .formatToParts(now).forEach(function (p) { parts[p.type] = p.value; });
  } catch (e) { /* fall back to local time */ }
  var day = parts.weekday ? DAYS.indexOf(parts.weekday) : now.getDay();
  var mins = parts.hour ? (+parts.hour) * 60 + (+parts.minute) : now.getHours() * 60 + now.getMinutes();

  document.querySelectorAll("[data-open]").forEach(function (el) {
    var t = HOURS[day];
    el.textContent = mins >= t[0] && mins < t[1]
      ? "Open now until " + fmt(t[1])
      : mins < t[0] ? "Opens today at " + fmt(t[0]) : "Closed now, opens " + fmt(HOURS[(day + 1) % 7][0]) + " tomorrow";
  });
  document.querySelectorAll('.hours li[data-day="' + day + '"]').forEach(function (li) { li.classList.add("today"); });

  // Gentle fade-in as sections enter the viewport
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }
})();

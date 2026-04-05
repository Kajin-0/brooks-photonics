/**
 * Client-side gate for webinar materials (GitHub Pages–friendly).
 * Not a security boundary: the check is visible in source. It discourages
 * casual browsing and pairs with enrollment.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "brooksPhotonics_webinar_gate_v1";
  var PASSWORD = "960345";

  function getGateScript() {
    return document.querySelector("script[data-webinar-gate]");
  }

  function isUnlocked() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function setUnlocked() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {}
  }

  var appLoaded = false;

  function loadSimulatorApp() {
    if (appLoaded) return;
    var el = getGateScript();
    if (!el) return;
    var css = el.getAttribute("data-gate-app-css");
    var js = el.getAttribute("data-gate-app-js");
    if (!js && !css) return;
    appLoaded = true;
    if (css) {
      var l = document.createElement("link");
      l.rel = "stylesheet";
      var co = el.getAttribute("data-gate-crossorigin");
      if (co !== null) l.crossOrigin = co || "anonymous";
      l.href = css;
      document.head.appendChild(l);
    }
    if (js) {
      var s = document.createElement("script");
      s.type = "module";
      if (el.getAttribute("data-gate-crossorigin") !== null) {
        s.crossOrigin = el.getAttribute("data-gate-crossorigin") || "anonymous";
      }
      s.src = js;
      document.head.appendChild(s);
    }
  }

  function removeGate() {
    var g = document.getElementById("webinar-gate-root");
    if (g && g.parentNode) g.parentNode.removeChild(g);
    document.documentElement.classList.remove("webinar-gate-open");
  }

  function showGate() {
    document.documentElement.classList.add("webinar-gate-open");

    var root = document.createElement("div");
    root.id = "webinar-gate-root";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-labelledby", "webinar-gate-title");

    var card = document.createElement("div");
    card.className = "webinar-gate-card";

    var h1 = document.createElement("h1");
    h1.id = "webinar-gate-title";
    h1.textContent = "Webinar access";

    var sub = document.createElement("p");
    sub.className = "sub";
    sub.textContent =
      "The simulator and student worksheet are for enrolled participants. Enter the access code from your registration materials.";

    var form = document.createElement("form");
    form.setAttribute("novalidate", "");

    var err = document.createElement("p");
    err.className = "error";
    err.setAttribute("aria-live", "polite");
    err.setAttribute("data-gate-error", "");

    var lab = document.createElement("label");
    lab.setAttribute("for", "webinar-gate-password");
    lab.textContent = "Access code";

    var input = document.createElement("input");
    input.type = "password";
    input.id = "webinar-gate-password";
    input.name = "webinar_gate_password";
    input.autocomplete = "current-password";
    input.required = true;

    var btn = document.createElement("button");
    btn.type = "submit";
    btn.textContent = "Continue";

    var foot = document.createElement("div");
    foot.className = "foot";
    var scriptEl = getGateScript();
    var classHref =
      (scriptEl && scriptEl.getAttribute("data-gate-class-href")) ||
      "../../class.html";
    foot.innerHTML =
      'Not registered yet? <a href="' +
      classHref +
      '">View the class page</a> to enroll.';

    form.appendChild(err);
    form.appendChild(lab);
    form.appendChild(input);
    form.appendChild(btn);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      err.textContent = "";
      var v = (input.value || "").trim().replace(/\s+/g, "");
      if (v === PASSWORD) {
        setUnlocked();
        removeGate();
        loadSimulatorApp();
        input.value = "";
      } else {
        err.textContent = "That access code is not correct.";
      }
    });

    card.appendChild(h1);
    card.appendChild(sub);
    card.appendChild(form);
    card.appendChild(foot);
    root.appendChild(card);
    document.body.appendChild(root);
    input.focus();
  }

  function start() {
    if (isUnlocked()) {
      loadSimulatorApp();
      return;
    }
    showGate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();

/**
 * MCT Photoconductor Webinar worksheet — autosave, reset, print, JSON export.
 * No calculations; values are student-entered only.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "brooksPhotonics_mctWorksheet_v1";
  var form = document.getElementById("worksheet-form");
  var hintEl = document.getElementById("worksheet-save-hint");
  var saveTimer = null;

  function getFormData() {
    var data = {};
    if (!form) return data;

    var elements = form.querySelectorAll("input, textarea, select");
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      if (!el.name) continue;

      if (el.type === "radio") {
        if (el.checked) data[el.name] = el.value;
      } else if (el.type === "checkbox") {
        data[el.name] = el.checked;
      } else {
        data[el.name] = el.value;
      }
    }
    return data;
  }

  function save() {
    try {
      var payload = {
        v: 1,
        savedAt: new Date().toISOString(),
        fields: getFormData(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      if (hintEl) {
        hintEl.textContent =
          "Saved locally at " + new Date().toLocaleTimeString() + ".";
      }
    } catch (e) {
      if (hintEl) hintEl.textContent = "Could not save (storage full or blocked).";
    }
  }

  function scheduleSave() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 400);
  }

  function restore() {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw || !form) return;
    try {
      var payload = JSON.parse(raw);
      var fields = payload.fields || payload;
      if (!fields || typeof fields !== "object") return;

      var elements = form.querySelectorAll("input, textarea, select");
      for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        if (!el.name || !(el.name in fields)) continue;

        var val = fields[el.name];
        if (el.type === "radio") {
          el.checked = el.value === String(val);
        } else if (el.type === "checkbox") {
          el.checked = Boolean(val);
        } else {
          el.value = val == null ? "" : String(val);
        }
      }
      if (hintEl) {
        hintEl.textContent =
          "Restored your saved entries. Changes save automatically.";
      }
    } catch (e) {
      /* ignore corrupt storage */
    }
  }

  function clearForm() {
    if (!form) return;
    form.reset();
  }

  function resetAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    clearForm();
    if (hintEl) hintEl.textContent = "Worksheet cleared. Fresh start.";
  }

  function bindEvents() {
    if (!form) return;

    form.addEventListener("input", scheduleSave);
    form.addEventListener("change", scheduleSave);

    var btnPrint = document.getElementById("btn-print-worksheet");
    if (btnPrint) {
      btnPrint.addEventListener("click", function () {
        window.print();
      });
    }

    var btnDownload = document.getElementById("btn-download-json");
    if (btnDownload) {
      btnDownload.addEventListener("click", function () {
        var data = {
          worksheet: "MCT Photoconductor Webinar Student Worksheet",
          exportedAt: new Date().toISOString(),
          fields: getFormData(),
        };
        var blob = new Blob([JSON.stringify(data, null, 2)], {
          type: "application/json;charset=utf-8",
        });
        var a = document.createElement("a");
        var stamp = new Date().toISOString().slice(0, 10);
        a.href = URL.createObjectURL(blob);
        a.download = "mct-webinar-worksheet-responses-" + stamp + ".json";
        a.click();
        URL.revokeObjectURL(a.href);
      });
    }

    var btnReset = document.getElementById("btn-reset-worksheet");
    if (btnReset) {
      btnReset.addEventListener("click", function () {
        if (
          window.confirm(
            "Clear all entries and remove saved data in this browser? This cannot be undone."
          )
        ) {
          resetAll();
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      restore();
      bindEvents();
    });
  } else {
    restore();
    bindEvents();
  }
})();

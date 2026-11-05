// Loaded in <head>, before first paint, so a saved light theme never flashes dark.
(function () {
  var KEY = "theme";
  var COLORS = { dark: "#171E27", light: "#F5F3EF" };
  var root = document.documentElement;

  function load() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function save(theme) {
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {
      // Storage is blocked: the choice just lasts for this page view.
    }
  }

  function label(button) {
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    button.textContent = next === "dark" ? "Dark" : "Light";
    button.setAttribute("aria-label", "Switch to " + next + " mode");
  }

  function apply(theme) {
    root.dataset.theme = theme;
    document.querySelector('meta[name="color-scheme"]').content = theme;
    document.querySelector('meta[name="theme-color"]').content = COLORS[theme];
  }

  apply(load() === "light" ? "light" : "dark");

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    label(button);
    button.addEventListener("click", function () {
      var theme = root.dataset.theme === "dark" ? "light" : "dark";
      apply(theme);
      save(theme);
      label(button);
    });
  });
})();

// main.js — theme toggle and smooth scrolling
(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  // Initialize theme
  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const setTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  };

  setTheme(getInitialTheme());

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();

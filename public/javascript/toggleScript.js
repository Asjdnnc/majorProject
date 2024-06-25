document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector(".theme-toggle i");
    const currentTheme = localStorage.getItem("theme") || "light";
  
    document.documentElement.setAttribute("data-theme", currentTheme);
    themeToggle.className = currentTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
  
    themeToggle.addEventListener("click", function() {
      let theme = document.documentElement.getAttribute("data-theme");
      theme = theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      themeToggle.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    });
  });
  
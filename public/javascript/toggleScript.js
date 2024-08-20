document.addEventListener("DOMContentLoaded", function() {
  // Theme Toggle
  const themeToggleIcon = document.querySelector(".theme-toggle i");
  const currentTheme = localStorage.getItem("theme") || "light";

  // Set initial theme and icon
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeToggleIcon.classList.toggle("fa-sun", currentTheme === "dark");
  themeToggleIcon.classList.toggle("fa-moon", currentTheme === "light");

  themeToggleIcon.addEventListener("click", function() {
    let theme = document.documentElement.getAttribute("data-theme");
    theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    
    // Toggle icon based on theme
    themeToggleIcon.classList.toggle("fa-sun", theme === "dark");
    themeToggleIcon.classList.toggle("fa-moon", theme === "light");
  });

  // Tax Toggle
  const taxToggleSwitch = document.querySelector("#flexSwitchCheckDefault");
  const priceElements = document.querySelectorAll(".card-body p");

  // Update price based on tax toggle
  function updatePrices() {
    const isTaxDisplayed = taxToggleSwitch.checked;
    priceElements.forEach(priceElement => {
      const originalPrice = parseFloat(priceElement.getAttribute("data-original-price"));
      if (!isNaN(originalPrice)) {
        const displayPrice = isTaxDisplayed ? originalPrice * 1.18 : originalPrice;
        
        // Extract the existing content and update only the price part
        const title = priceElement.querySelector('b') ? priceElement.querySelector('b').innerHTML : '';
        const taxInfo = isTaxDisplayed ? '':'<i class="tax-info"> after taxes</i>';
        
        priceElement.innerHTML = `
          <b>${title}</b><br>
          &#8377; ${displayPrice.toLocaleString("en-IN")} / night ${taxInfo}`;
      }
    });
  }

  // Set initial state of tax display
  taxToggleSwitch.checked = localStorage.getItem("tax") === "true";
  updatePrices();

  // Event listener for tax toggle switch
  taxToggleSwitch.addEventListener("change", function() {
    localStorage.setItem("tax", taxToggleSwitch.checked);
    updatePrices();
  });
});

// Redneck Solutions site script

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

// Update footer year automatically
if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile menu toggle
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuToggle.textContent = isOpen ? "Close" : "Menu";
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close mobile menu when a nav link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.textContent = "Menu";
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close mobile menu when Escape key is pressed
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navLinks.classList.remove("open");
      menuToggle.textContent = "Menu";
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

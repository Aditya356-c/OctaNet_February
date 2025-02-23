document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initAnimation();
});

// ===== SHOW MOBILE MENU ====
function initMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuToggle = document.getElementById("open_close-menu");
  const menuToggleIcon = document.getElementById("menu-icon");

  if (!menuToggle || !mobileMenu || !menuToggleIcon) return;
  // ---- * Toggle Menu * ----
  function toggleMenu() {
    const isActive = mobileMenu.classList.toggle("menu-active");
    menuToggleIcon.classList.toggle("ri-menu-line", !isActive);
    menuToggleIcon.classList.toggle("ri-close-large-line", isActive);
  }
  menuToggle.addEventListener("click", toggleMenu);

  // ---- * Hide menu on link click * ----
  document.addEventListener("click", (event) => {
    const navLinks = event.target.closest(".nav_link-item");
    if (navLinks) {
      mobileMenu.classList.remove("menu-active");
      menuToggleIcon.classList.add("ri-menu-line");
      menuToggleIcon.classList.remove("ri-close-large-line");
    }
  });
}
// ===== On load animation ====
function initAnimation() {
  if (typeof ScrollReveal !== undefined) {
    ScrollReveal().reveal(".header", {
      distance: "1rem",
      origin: "top",
      duration: 1000,
      mobile: true,
    });
    ScrollReveal().reveal("#hero-section", {
      distance: "0.625rem",
      opacity: 0,
      duration: 1000,
      mobile: true,
    });
  }
}

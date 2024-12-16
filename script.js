// Select elements
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

// Toggle menu visibility
hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("mobile");
});

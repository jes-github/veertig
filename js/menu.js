const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("menu-close");
const navbar = document.getElementById("navbar");

// Open the menu
menuToggle.addEventListener("click", function () {
	mobileMenu.classList.remove("-translate-y-full");
	mobileMenu.classList.add("translate-y-0");
	navbar.classList.add("hidden");
});

// Close the menu
menuClose.addEventListener("click", function () {
	mobileMenu.classList.remove("translate-y-0");
	mobileMenu.classList.add('-translate-y-full');
	navbar.classList.remove("hidden")
});
